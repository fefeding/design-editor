
import { ContainerDefaultStyle } from '../constant/styleMap';
import JElement from '../core/element';

export default class JBaseComponent<T extends HTMLElement = HTMLElement> extends JElement<T> {
    constructor(option) {
        super({
            // 外层只响应Z轴旋转
            transformWatchProps: [
                'rotateZ','scaleX','scaleY'
            ],
            ...option,
            nodeType: 'div',
            className: 'j-design-editor-container',
            style: {
                ...ContainerDefaultStyle,      
            }
        });
        option.target = option.target || {};
        // 生成当前控制的元素
        this.target = new JElement<T>({
            ...option,
            // 不响应本身的变换，只响应父级的
            transformWatchProps: [],
            width: '100%',
            height: '100%',
            style: {
                display: 'block',   
                cursor: 'pointer'        
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
        
        // 刷新样式
        if(option.style) this.style.apply(option.style);

        if(option.text) this.text = option.text;
        if(option.html) this.html = option.html;
    }

    // 当前控件的核心元素
    target: JElement<T>;

    get text() {
        return this.target.dom.innerText;
    }
    set text(v: string) {
        this.target.dom.innerText = v;
    }

    get html() {
        return this.target.dom.innerHTML;
    }
    set html(v: string) {
        this.target.dom.innerHTML = v;
    }

    // 选中
    private _selected = false;
    get selected() {
        return this._selected;
    }
    set selected(v: boolean) {
        this._selected = v;
        this.emit('select', v);
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
        props.push('html', 'text');
        return super.toJSON(props);
    }
}