import util from 'j-design-util';
import CssFilterManager, { filters as cssFilters, IFilterManager } from 'j-css-filters';
import { IJBaseComponent, IJElement } from '../constant/types';
import { ContainerDefaultStyle } from '../constant/styleMap';
import { SupportEventNames, ElementWatchEventNames } from '../core/event';
import JElement from '../core/element';
/**
 * @public
 */
export default class JBaseComponent<T extends HTMLElement = HTMLElement> extends JElement<T> implements IJBaseComponent {
    constructor(option = {} as any) {
        option.style = option.style || {};
        // position和overflow预设的值优先级最高
        option.style = Object.assign({...ContainerDefaultStyle}, option.style, {
            position: ContainerDefaultStyle.position,
            overflow: ContainerDefaultStyle.overflow
        });
        super({
            ...option,
            transformWatchProps: null,
            nodeType: 'div',
            className: 'j-design-editor-container',
            isComponent: true
        });
        
        this.componentType = new.target;

        option.target = option.target || {};
        const targetOption = {
            ...(option.target || option),
            visible: true,
            data: {},
            transformWatchProps: null,
            style: {
                display: 'block',   
                cursor: 'pointer',  
                width: '100%',
                height: '100%',     
            }
        };
        if(!targetOption.nodeType) targetOption.nodeType = option.nodeType;
        // 生成当前控制的元素
        this.target = new JElement<T>(targetOption);
        
        this.addChild(this.target.dom);
        
        // 变换改为控制主元素
        /*this.transform.bind({
            target: this.target,
            watchProps: [
                'rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY'
            ]
        });*/

        this.filters = new CssFilterManager(this.target, option.filters);// 滤镜

        this.data.on('change', (e) => {
            this.emit('dataChange', {
                type: 'dataChange',
                target: this,
                data: e
            });
        });
    }

    // 当前控件的核心元素
    target: IJElement<T>;

    filters: IFilterManager;

    /**
     * 类型名称
     */
    get typeName(): string {
        return 'base';
    }

    /**
     * 当前组件new指向的class，可用于复制
     */
    protected componentType: any;

    // 选中
    private _selected = false;
    get selected() {
        return this._selected;
    }
    set selected(v: boolean) {
        this._selected = v;
        // 如果选中则加上样式
        util.class(this.dom, 'selected', !v);

        this.emit('select', {
            type: 'select',
            target: this,
            selected: v
        });
    }

    // 设置层级，指定数字或操作, next下一层，pre上一层，top顶层，bottom最底层
    setLevel(level: number|'next'|'pre'|'top'|'bottom') {
        if(typeof level === 'number') this.data.zIndex = level;
        if(!this.parent) return;
        const maxLevel = this.parent.childrenMaxLevel;
        switch(level) {
            case 'next': {
                const res = this.getMyNextLevelChildren();
                if(res.level < 0) this.data.zIndex = 0;// 如果没找到下一层的，则直接赋到bottom层0
                else {
                    res.elements.map((el) => {
                        el.data.zIndex = this.data.zIndex;
                    });
                    this.data.zIndex = res.level;
                }
                break;
            }
            case 'pre': {
                const res = this.getMyPreLevelChildren();                
                if(res.level < 0) this.data.zIndex = maxLevel;// 如果没找到上一层的，则直接赋到top层
                else {
                    res.elements.map((el) => {
                        el.data.zIndex = this.data.zIndex;
                    });
                    this.data.zIndex = res.level;
                }
                break;
            }
            case 'top': {
                this.data.zIndex = maxLevel + 1;
                break;
            }
            case 'bottom': {
                this.parent.children.map((el) => {
                    el !== this && (el.data.zIndex += 1);
                });// 所有子元素上移一层，除了当前元素
                this.data.zIndex = 0;
            }
        }
    }

    // 获取我下一层的所有元素
    private getMyNextLevelChildren() {
        const elements = [] as Array<IJElement>;
        if(!this.parent) return;   
        const children = this.parent.childrenSort();
        let nextLevel = -1;
        for(let i=children.length-1; i>=0; i--) {
            const c = children[i];
            if(c.data.zIndex < this.data.zIndex && c !== this) {
                if(nextLevel < 0) nextLevel = c.data.zIndex;
                if(c.data.zIndex === nextLevel) elements.push(c);
            }
        }
        return {
            elements,
            level: nextLevel
        };
    }

    // 获取我上一层的所有元素
    private getMyPreLevelChildren() {
        const elements = [] as Array<IJElement>;
        if(!this.parent) return;    
        const children = this.parent.childrenSort();
        let preLevel = -1;
        for(let i=0; i<children.length; i++) {
            const c = children[i];
            if(c.data.zIndex > this.data.zIndex && c !== this) {
                if(preLevel < 0) preLevel = c.data.zIndex;
                if(c.data.zIndex === preLevel) elements.push(c);
            }
        }
        return {
            elements,
            level: preLevel
        };
    }
    
    // 添加元素到画布
    addChild(child: IJBaseComponent | IJElement | HTMLElement) {
        if(child === this.target || child instanceof HTMLElement) {
            return super.addChild(child);
        }
       
        this.bindElementEvent(child);        
        child.parent = this;// 把父设置成编辑器
        child.editor = child.editor || this.editor;
        child.editable = this.editable;// 当前是否可编辑
        
        // 刷新样式
        child.style.refresh();
        this.target.addChild(child);
    }

    // 移除
    removeChild(el: IJElement|HTMLElement) {
        if(el === this.target) {
            //console.warn('不能移除自已');
            return;
        }

        this.target.removeChild(el);

        if(el instanceof JElement) {
            el.off(SupportEventNames);
            el.off(ElementWatchEventNames);
        }
    }

    // 绑定元素事件
    protected bindElementEvent(el: IJElement) {
        const self = this;
        // 监听样式改变
        el.on([
            ...SupportEventNames,
            ...ElementWatchEventNames
        ], function(e) {
            self.emit('elementChange', {
                type: e.type,
                data: {
                    id: this.id,
                    ...e.data
                },
                event: e.event || e,
                target: this
            });
        });
    }

    // 通过ID获取子元素
    getChild(id: string): IJElement|undefined {
        for(const child of this.children) {
            if(child.id === id) return child;
        }
    }

    // 设置css到dom
    setDomStyle(name: string, value: string) {
       // 如果外层容器的样式，则加到container上
       if(name in ContainerDefaultStyle || name === 'transform') {
            super.setDomStyle(name, value);
        }
        else {
            this.target && this.target.css(name, value);
        }
    }

    toJSON(props = []) {
        // 转json忽略渲染组件
        const obj = super.toJSON(props, (el:IJElement)=>{
            return el !== this.target;
        });
        if(this.target) {
            // target不转换children
            obj.target = this.target.toJSON([], (p)=>false);
        }
        return obj;
    }

    /**
     * 复制当前组件
     * @returns 当前组件同类型副本
     */
    clone(): IJBaseComponent {
        const option = this.toJSON();
        // @ts-ignore
        delete option.id;
        const el = new this.componentType(option);
        return el;
    }
}