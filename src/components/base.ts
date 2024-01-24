
import { ContainerDefaultStyle } from '../constant/styleMap';
import JElement from '../core/element';

export default class JBaseComponent<T extends HTMLElement = HTMLElement> extends JElement<T> {
    constructor(option) {
        super({
            ...option,
            nodeType: 'div',
            style: {
                ...ContainerDefaultStyle,      
            }
        });
        option.target = option.target || {};
        // 生成当前控制的元素
        this.target = new JElement<T>({
            ...option,
            style: {
                width: '100%',
                height: '100%',
                display: 'block',           
            }
        });
        this.addChild(this.target);
        // 选中元素
        this.target.on('click', ()=>{
            this.selected = true;
        });
        // 变换改为控制主元素
        this.transform.bind(this.target);
        
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
       if(name in ContainerDefaultStyle) {
            super.setDomStyle(name, value);
        }
        else {
            this.target && this.target.css(name, value);
        }
    }
}