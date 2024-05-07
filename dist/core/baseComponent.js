import util from 'j-design-util';
import CssFilterManager from 'j-css-filters';
import { ContainerDefaultStyle } from '../constant/styleMap';
import { SupportEventNames, ElementWatchEventNames } from '../core/event';
import JElement from '../core/element';
/**
 * @public
 */
export default class JBaseComponent extends JElement {
    constructor(option = {}) {
        option.style = option.style || {};
        // position和overflow预设的值优先级最高
        option.style = Object.assign({ ...ContainerDefaultStyle }, option.style, {
        //position: ContainerDefaultStyle.position,
        //overflow: ContainerDefaultStyle.overflow
        });
        super({
            ...option,
            //transformWatchProps: null,
            nodeType: 'div',
            className: 'j-design-editor-container',
        });
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
        // 是否可以移动
        if (typeof option.moveable === 'boolean')
            this.moveable = option.moveable;
        if (!targetOption.nodeType)
            targetOption.nodeType = option.nodeType;
        // 生成当前控制的元素
        this.target = new JElement(targetOption);
        this.addChild(this.target.dom);
        // 变换改为控制主元素
        /*this.transform.bind({
            target: this.target,
            watchProps: [
                'rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY'
            ]
        });*/
        this.filters = new CssFilterManager(this, option.filters); // 滤镜
        this.data.on('change', (e) => {
            this.emit('dataChange', {
                type: 'dataChange',
                target: this,
                data: e
            });
        });
    }
    // 当前控件的核心元素
    target;
    filters;
    /**
     * 类型名称
     */
    get typeName() {
        return 'base';
    }
    /**
     * 是否支持移动
     */
    moveable = true;
    // 选中
    _selected = false;
    get selected() {
        return this._selected;
    }
    set selected(v) {
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
    setLevel(level) {
        if (typeof level === 'number')
            this.data.zIndex = level;
        if (!this.parent)
            return;
        const maxLevel = this.parent.childrenMaxLevel;
        switch (level) {
            case 'next': {
                const res = this.getMyNextLevelChildren();
                if (res.level < 0)
                    this.data.zIndex = 0; // 如果没找到下一层的，则直接赋到bottom层0
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
                if (res.level < 0)
                    this.data.zIndex = maxLevel; // 如果没找到上一层的，则直接赋到top层
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
                }); // 所有子元素上移一层，除了当前元素
                this.data.zIndex = 0;
            }
        }
    }
    // 获取我下一层的所有元素
    getMyNextLevelChildren() {
        const elements = [];
        if (!this.parent)
            return;
        const children = this.parent.childrenSort();
        let nextLevel = -1;
        for (let i = children.length - 1; i >= 0; i--) {
            const c = children[i];
            if (c.data.zIndex < this.data.zIndex && c !== this) {
                if (nextLevel < 0)
                    nextLevel = c.data.zIndex;
                if (c.data.zIndex === nextLevel)
                    elements.push(c);
            }
        }
        return {
            elements,
            level: nextLevel
        };
    }
    // 获取我上一层的所有元素
    getMyPreLevelChildren() {
        const elements = [];
        if (!this.parent)
            return;
        const children = this.parent.childrenSort();
        let preLevel = -1;
        for (let i = 0; i < children.length; i++) {
            const c = children[i];
            if (c.data.zIndex > this.data.zIndex && c !== this) {
                if (preLevel < 0)
                    preLevel = c.data.zIndex;
                if (c.data.zIndex === preLevel)
                    elements.push(c);
            }
        }
        return {
            elements,
            level: preLevel
        };
    }
    // 添加元素到画布
    addChild(child) {
        if (child === this)
            return child;
        if (child === this.target || child === this.target.dom) {
            return super.addChild(child);
        }
        // 非组件直接加到target中
        if (!(child instanceof JBaseComponent)) {
            const el = this.target.addChild(child);
            if (child instanceof JElement) {
                this._children.push(child);
            }
            return child;
        }
        this.bindElementEvent(child);
        child.parent = this; // 把父设置成编辑器
        child.editor = child.editor || this.editor;
        child.editable = this.editable; // 当前是否可编辑
        // 刷新样式
        child.style.refresh();
        this.target.addChild(child);
        // SVG内部自行处理
        if (child.type === 'svg') {
            return child.addChild(child);
        }
        if (child.option?.children?.length) {
            child.option.children.sort((p1, p2) => {
                return (p1.data?.zIndex - p2.data?.zIndex) || 0;
            });
            for (const opt of child.option.children) {
                const c = child.editor.createShape(opt.type, opt);
                c && child.addChild(c);
            }
        }
    }
    // 移除
    removeChild(el) {
        if (el === this.target) {
            //console.warn('不能移除自已');
            return;
        }
        this.target.removeChild(el);
        super.removeChild(el);
        if (el instanceof JElement) {
            el.off(SupportEventNames);
            el.off(ElementWatchEventNames);
        }
    }
    // 绑定元素事件
    bindElementEvent(el) {
        const self = this;
        // 监听样式改变
        el.on([
            ...SupportEventNames,
            ...ElementWatchEventNames
        ], function (e) {
            self.emit('elementChange', {
                type: e.type,
                data: {
                    id: this.id,
                    ...e.data
                },
                event: e.event || e,
                target: this
            });
        }, el);
    }
    // 通过ID获取子元素
    getChild(id) {
        for (const child of this.children) {
            if (child.id === id)
                return child;
            // 如果子元素也是一个element，则也轮循它的子元素。
            if (child instanceof JBaseComponent) {
                const el = child.getChild(id);
                if (el)
                    return el;
            }
        }
    }
    // 设置css到dom
    setDomStyle(name, value) {
        // 如果外层容器的样式，则加到container上
        if (name in ContainerDefaultStyle) {
            super.setDomStyle(name, value);
        }
        else {
            this.target && this.target.css(name, value);
        }
    }
    toJSON(props = []) {
        // 转json忽略渲染组件
        const obj = super.toJSON(props, (el) => {
            return el !== this.target;
        });
        if (this.target) {
            // target不转换children
            obj.target = this.target.toJSON([], (p) => false);
        }
        return obj;
    }
}
