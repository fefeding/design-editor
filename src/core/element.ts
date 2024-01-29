import EventEmiter from '../constant/eventEmitter';
import { v4 as uuidv4 } from 'uuid';
import JTransform from '../constant/transform';
import JStyle from './style';
import util from '../lib/util';
import JEvent from '../core/event';
import JElementCssStyle from '../constant/styleMap';
import { IJElement, ITransform, IJEditor } from '../constant/types';
import { ElementData } from '../constant/data';

export default class JElement<T extends HTMLElement = HTMLElement> extends EventEmiter  implements IJElement{

    constructor(option = {} as any) {
        super();

        // 复制属性
        for(const k in option) {
            const v = option[k];
            if(typeof k !== 'string' || (typeof v !== 'string' || typeof v !== 'number')) continue;
            this[k] = v;
        }

        this._id = this.id || option.id || uuidv4().replace(/-/g, '');
        this._type = this.type || option.type || '';

        const nodeType = option.nodeType || 'div';
        this._dom = document.createElement(nodeType);   
        
        if(option.editor) this.editor = option.editor;

        // 样式代理处理
        this.style = JStyle.createProxy();
        this.style.on('change', (s) => {
            this.setDomStyle(s.name, s.value);

            this.emit('styleChange', {
                ...s,
                target: this
            });
        });
        if(option.style) this.style.apply(option.style);

        // 变换控制的是核心元素
        this.transform = JTransform.createProxy(option.transform, {
            target: this,
            // 如果指定了只响应某几个属性
            watchProps: option.transformWatchProps
        });

        this.initData(option);

        if(option.editable === false) this.editable = false;
        if(option.className) this.className = option.className;
        
        this.bindEvent();// 事件绑定
    }
    // 初始化一些基础属性
    initData(option, type=ElementData) {
        this.data = ElementData.createProxy(new type());
        // 属性变化映射到style
        this.data.watch([
            'x', 'y', 'left', 'top', 'width', 'height', 'zIndex', 'visible'
        ], (item) => {
            if(item.name === 'visible') {
                this.style.display = item.value? 'block': 'none';
            }
            else if(item.name === 'x') this.data.left = item.value;
            else if(item.name === 'y') this.data.top = item.value;
            else this.style[item.name] = item.value;
        });
        this.data.x = option.x || option.left || this.data.x || 0;
        this.data.y = option.y || option.top || this.data.y || 0;

        this.data.width = option.width || option.width || this.data.width || 1;
        this.data.height = option.height || option.height || this.data.height || 1;

        if(typeof option.rotation !== 'undefined') this.data.rotation = option.rotation;
        if(typeof option.angle !== 'undefined') this.data.angle = option.angle;
        if(typeof option.zIndex !== 'undefined') this.data.zIndex = option.zIndex;
        if(typeof option.visible !== 'undefined') this.data.visible = !!option.visible;
    }

    // 绑定事件
    bindEvent(dom?: HTMLElement) {
        // 事件托管
        this.event = new JEvent(dom || this.dom);
        this.event.init((e: Event) => {
            this.emit(e.type, e);
        });
    }

    protected _id: string = '';
    get id() {
        return this._id;
    }
    // 类型名称
    protected _type = '';
    get type() {
        return this._type;
    }
    // 子元素
    private _children = [] as Array<IJElement>;
    get children() {
        return this._children;
    }
    // 控件最外层的容器
    protected _dom: T;
    get dom() {
        return this._dom;
    }
    // 父元素
    parent: IJElement | undefined;

    // 当前编辑器
    editor: IJEditor;

    // 事件处理
    event: JEvent;

    // 样式代理
    style: JElementCssStyle;

    data: ElementData;

    get width() {
        let w = this.style.width || 0;
        if((!w || w === 'auto') && this.dom && this.dom.clientWidth) return this.dom.clientWidth;
        return w;
    }
    set width(v) {
        this.style.width = v;
    }

    get height() {
        let h = this.style.height || 0;
        if((!h || h === 'auto') && this.dom && this.dom.clientHeight) return this.dom.clientHeight;
        return h;
    }
    set height(v) {
        this.style.height = v;
    }

    // 旋转弧度
    set rotation(v: number) {    
        this.transform.rotateZ = v;
    }
    get rotation() {
        const v = this.transform.rotateZ;
        return v;
    }
    // 旋转角度
    set angle(v) {    
        this.transform.rotateZ = util.degToRad(v);
    }
    get angle() {
        return util.radToDeg(this.transform.rotateZ);
    }
    
    get visible() {
        return this.style.display !== 'none';
    }
    set visible(v) {
        this.style.display = v? 'block': 'none';
    }
    get className() {
        return this.dom.className;
    }
    set className(v: string) {
        this.dom.className = v;
    }  
    // 是否可编辑
    editable: boolean = true;

    // 变换
    transform: ITransform;

    // 设置css到dom
    setDomStyle(name: string, value: string) {
        if(name === 'backgroundImage' && value) {
            if(!/^\s*url\(/.test(value)) value = `url(${value})`;
        }
        
        util.css(this.dom, name, value);
    }   

    // 设置样式
    css(name: string|Object, value?: string|number) {
        util.css(this, name, value);
        return this;
    }
    // dom属性
    attr(name: string, value: string|number|undefined) {
        return util.attr(this.dom, name, value);
    }
    // 移位
    move(dx, dy) {
        this.left = util.toNumber(this.left) + dx;
        this.top = util.toNumber(this.top) + dy;

        this.emit('move', {dx, dy});
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
    addChild(child: IJElement|HTMLElement, parent: IJElement = this) {
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
        else if(child instanceof HTMLElement) {
            parent.dom.appendChild(child);
        }
    }

    // 移除自已
    remove() {
        if(this.parent) this.parent.removeChild(this);
    }

    // 移除子元素
    removeChild(el: IJElement|HTMLElement) {
        // @ts-ignore
        if(el.dom && el.dom.parentElement === this.dom) this.dom.removeChild(el.dom || el);

        for(let i=this.children.length-1;i>-1; i--) {
            if(this.children[i] === el) return this.children.splice(i, 1);
        }
        // @ts-ignore
        delete el.parent;
    }

    // 转为json
    toJSON(props=[], ig=(p: IJElement)=>true) {
        const fields = ['left', 'top', 'width', 'height', 'rotation', 'type', 'style', 'transform', 'id', ...props];
        const obj = {
            children: []
        };
       
        for(const k of fields) {
            const v = this[k];
            if(typeof v === 'string' || typeof v === 'number') {
                obj[k] = this[k];
            }
            else if(v && v.toJSON) {
                obj[k] = v.toJSON();
            }
        }

        //if(this.transform) obj['transform'] = this.transform.toJSON();

        if(this.children && this.children.length) {
            for(const child of this.children) {
                if(child === this || ig(child) === false) continue;
                obj.children.push(child.toJSON())
            }
        }
        return obj;
    }

    toString() {
        const obj = this.toJSON();
        return JSON.stringify(obj);
    }

    toHtml() {
        return this.dom.outerHTML;
    }
}