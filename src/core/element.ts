import EventEmiter from 'eventemitter3';
import { v4 as uuidv4 } from 'uuid';
import JTransform from '../constant/transform';
import JStyle from './style';
import util from '../lib/util';

export default class JElement<T extends HTMLElement = HTMLElement> extends EventEmiter {

    constructor(option) {
        super();

        // 复制属性
        for(const k in option) {
            const v = option[k];
            if(typeof k !== 'string' || (typeof v !== 'string' || typeof v !== 'number')) continue;
            this[k] = v;
        }

        this.id = this.id || option.id || uuidv4().replace(/-/g, '');
        this.type = this.type || option.type || '';

        const nodeType = option.nodeType || 'div';
        this.dom = document.createElement(nodeType);

        // 样式代理处理
        this.style = JStyle.createProxy();
        this.style.on('change', (s) => {
            this.setDomStyle(s.name, s.value);
        });
        if(option.style) this.style.apply(option.style);

        // 变换控制的是核心元素
        this.transform = JTransform.createProxy(option.transform);

        this.initOption(option);        
    }
    // 初始化一些基础属性
    initOption(option) {
        this.x = option.x || option.left || 0;
        this.y = option.y || option.top || 0;

        this.width = option.width || option.width || 1;
        this.height = option.height || option.height || 1;

        if(typeof option.rotation !== 'undefined') this.rotation = option.rotation;
        if(typeof option.angle !== 'undefined') this.angle = option.angle;
        if(typeof option.zIndex !== 'undefined') this.zIndex = option.zIndex;
        if(typeof option.visible !== 'undefined') this.visible = !!option.visible;

    }

    id = '';
    // 类型名称
    type = '';
    // 子元素
    private _children = [] as Array<JElement>;
    get children() {
        return this._children;
    }
    // 控件最外层的容器
    dom: T;
    // 父元素
    parent: JElement | undefined;

    // 样式代理
    style: JStyle;

    // 坐标X
    get x() {
        const v = this.style.left || 0;
        return v;
    }
    set x(v: number|string) {
        this.style.left = v;
    }
    // 坐标Y
    get y() {
        const v = this.style.top || 0;
        return v;
    }
    set y(v: number|string) {
        this.style.top = v;
    }
    get top() {
        return this.y;
    }
    set top(v: string | number) {
        this.y = v;
    }
    get left() {
        return this.x;
    }
    set left(v: string | number) {
        this.x = v;
    }
    // 坐标right
    get right() {
        const v = this.style.right || 0;
        return v;
    }
    set right(v: number|string) {
        this.style.right = v;
    }
    // 坐标bottom
    get bottom() {
        const v = this.style.bottom || 0;
        return v;
    }
    set bottom(v: number|string) {
        this.style.bottom = v;
    }

    get width() {
        return this.style.width || 0;
    }
    set width(v) {
        this.style.width = v;
    }

    get height() {
        return this.style.height || 0;
    }
    set height(v) {
        this.style.height = v;
    }

    // 旋转弧度
    set rotation(v: number) {    
        this.transform.rotateZ = util.radToDeg(v);
    }
    get rotation() {
        const v = this.transform.rotateZ;
        return util.degToRad(v);
    }
    // 旋转角度
    set angle(v) {    
        this.transform.rotateZ = v;
    }
    get angle() {
        return this.transform.rotateZ;
    }
    
    get visible() {
        return this.style.display !== 'none';
    }
    set visible(v) {
        this.style.display = v? 'block': 'none';
    }

    get zIndex() {
        return Number(this.style.zIndex || '0');
    }
    set zIndex(v: number) {
        this.style.zIndex = v + '';
    }    
    // 变换
    transform: JTransform;

    // 设置css到dom
    setDomStyle(name: string, value: string) {
        if(name === 'backgroundImage') {
            if(!/^\s*url\(/.test(value)) value = `url(${value})`;
        }
        this.dom.style[name] = value;
    }   

    // 设置样式
    css(name: string|Object, value?: string) {
        if(!name) return;
        if(typeof name === 'object') {
            for(const n of Object.getOwnPropertyNames(name)) {
                this.css(n, name[n]);
            }
        }
        else {
            this.style[name] = value;
        }
        return this;
    }
    // dom属性
    attr(name: string, value: string|number|undefined) {
        if(typeof value !== 'undefined') {
            this.dom.setAttribute(name, value+'');
            return value;
        }
        else {
            return this.dom.getAttribute(name);
        }
    }

    /*
    // 被选中
    get selected() {
        return this._selected;
    }
    set selected(v) {
        if(v) this.editor.controlElement.bind(this);
        else {
            this.editor.controlElement.unbind(this);
        }
        this.propertyChange('selected', v, this._selected);
        this._selected = v;
    }*/

    bindEvent() {
        /*
        
        this.container.on('pointerdown', function(event) {
            this.emit('pointerdown', event);
        }, this);
        this.container.on('pointerup', function(event) {
            this.emit('pointerup', event);
        }, this);
        this.container.on('pointerenter', function(event) {
            this.emit('pointerenter', event);
        }, this);
        this.container.on('pointerleave', function(event) {
            this.emit('pointerleave', event);
        }, this);
        this.container.on('pointerout', function(event) {
            this.emit('pointerout', event);
        }, this);*/
    }   
    // 移位
    move(dx, dy) {
        this.left += dx;
        this.top += dy;
    }

    // 重置大小
    resize(w, h) {
        if(typeof w === 'number') {
            this.width = w;
        }
        if(typeof h === 'number') {
            this.height = h;
        }
    }

    // 新增子元素
    addChild(child: JElement|HTMLElement, parent: JElement = this) {
        if(Array.isArray(child)) {
            for(const c of child) {
                parent.addChild(c);
            }
            return parent;
        }
        if(child instanceof JElement) {
            child.parent = parent;
            parent.dom.appendChild(child.dom);
            parent.children.push(child);
        }
        else {
            parent.dom.appendChild(child);
        }
    }

    // 移除自已
    remove() {
        if(this.parent) this.parent.removeChild(this);
    }

    // 移除子元素
    removeChild(el: JElement|HTMLElement) {
        // @ts-ignore
        this.dom.removeChild(el.dom || el);

        for(let i=this.children.length-1;i>-1; i--) {
            if(this.children[i] === el) return this.children.splice(i, 1);
        }
        // @ts-ignore
        delete el.parent;
    }

    toJSON() {
        const fields = ['x', 'y', 'width', 'height', 'url', 'text', 'rotation', 'type', 'style', 'id', 'skew', 'points', 'isClosed'];
        const obj = {};
       
        for(const k of fields) {
            if(typeof this[k] !== 'undefined') {
                obj[k] = this[k];
            }
        }
        return obj;
    }

    toString() {
        const obj = this.toJSON();
        return JSON.stringify(obj);
    }
}