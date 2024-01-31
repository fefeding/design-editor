
import { IJBaseComponent, IJElement } from '../constant/types';
import { ContainerDefaultStyle } from '../constant/styleMap';
import JElement from '../core/element';

export default class JBaseComponent<T extends HTMLElement = HTMLElement> extends JElement<T> implements IJBaseComponent {
    constructor(option = {} as any) {
        option.style = option.style || {};
        // position和overflow预设的值优先级最高
        option.style = Object.assign({...ContainerDefaultStyle}, option.style, {
            position: ContainerDefaultStyle.position,
            overflow: ContainerDefaultStyle.overflow
        });
        super({
            // 外层只响应Z轴旋转
            transformWatchProps: [
                'rotateZ','scaleX','scaleY'
            ],
            ...option,
            nodeType: 'div',
            className: 'j-design-editor-container',
            isComponent: true
        });
        option.target = option.target || {};
        // 生成当前控制的元素
        this.target = new JElement<T>({
            ...option,
            visible: true,
            data: {},
            // 不响应本身的变换，只响应父级的
            transformWatchProps: [],
            style: {
                display: 'block',   
                cursor: 'pointer',  
                width: '100%',
                height: '100%',     
            }
        });
        
        this.addChild(this.target);
        
        // 变换改为控制主元素
        this.transform.bind({
            target: this.target,
            watchProps: [
                'rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY'
            ]
        });

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

    // 选中
    private _selected = false;
    get selected() {
        return this._selected;
    }
    set selected(v: boolean) {
        this._selected = v;
        this.emit('select', {
            type: 'select',
            target: this,
            selected: v
        });
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
        return super.toJSON(props, (el:IJElement)=>{
            return el !== this.target;
        });
    }
}