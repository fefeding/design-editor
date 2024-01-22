import EventEmiter from 'eventemitter3';
import { v4 as uuidv4 } from 'uuid';
import JStyleMap from '../constant/styleMap';
import JStyle from './style';
import util from './util';

export default class JElement extends EventEmiter {

    constructor(option) {
        super();

        this.id = option.id || uuidv4().replace(/-/g, '');
        this.type = option.type || '';

        const numberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];
        const style = new JStyle(option.style);
        // 样式代理处理
        this.style = new Proxy<JStyleMap>(style, {
            get(target, p, receiver) {
                const v = target[p];
                // 数字样式，处理px问题
                if(typeof p === 'string' && numberStyleMap.includes(p)) {
                    if(v === '0') return 0;
                    if(util.isPXNumber(v)) return parseFloat(v);
                }
                return v;
            },
            set(target, p, value, receiver) {
                // 非白名单样式不支持设置
                if(typeof p !== 'string' || !style.names.includes(p)) return false;
                // 数字样式，处理px问题
                if(numberStyleMap.includes(p)) {
                    target[p] = typeof value === 'number' || util.isNumber(value)? `${value}px`: value;
                }
                else {
                    target[p] = value;
                }
                return true;
            }
        });
    }

    init(option) {

    }

    id = '';

    // 类型名称
    type = '';
    // 子元素
    children = [] as Array<JElement>;
    // 控件最外层的容器
    container = document.createElement('div');
    // 父元素
    parent: JElement | undefined;

    // 样式代理
    style: JStyleMap;

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

    // 旋转角度
    set rotation(v: number) {        
        this.style.rotate = `${v}deg`;
    }
    get rotation() {
        const v = this.style.rotate;
        if(/^\s*[\d\.]+\s*deg\s*/i.test(v)) return parseFloat(v);
        else if(/^\s*[\d\.]+\s*rad\s*/i.test(v))  {
            return this.angle * (180/Math.PI);
        }
        return Number(v);
    }
    // 旋转弧度
    set angle(v) {
        this.style.rotate = `${v}rad`;
    }
    get angle() {
        const v = this.style.rotate;
        if(/^\s*[\d\.]+\s*rad\s*/i.test(v)) return parseFloat(v);
        else if(/^\s*[\d\.]+\s*deg\s*/i.test(v))  {
            return this.rotation * (Math.PI/180);
        }
        return Number(v);
    }
    
    get visible() {
        return this.style.display !== 'none';
    }
    set visible(v) {
        this.style.display = v? 'block': 'none';
    }
    /*
    get skew() {
        return {
            x: this.style.skew.x,
            y: this.container.skew.y
        };
    }
    set skew(v) {
        if(!v) return;
        if(typeof v.x !== 'undefined') this.container.skew.x = v.x;
        if(typeof v.y !== 'undefined') this.container.skew.y = v.y;
    }*/

    get zIndex() {
        return Number(this.style.zIndex || '0');
    }
    set zIndex(v: number) {
        this.style.zIndex = v + '';
    }

    // 是否可以编辑
    editable = true;

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
        this.x += dx;
        this.y += dy;
    }

    // 重置大小
    resize(w, h) {
        if(typeof w === 'number') {
            //const rw = w / this.sprite.texture.width;
            //if(rw !== this.sprite.scale.x) this.sprite.scale.x = rw;
            this.width = w;
        }
        if(typeof h === 'number') {
            //const rh = h / this.sprite.texture.height;
            //if(rh !== this.sprite.scale.y) this.sprite.scale.y = rh;
            this.height = h;
        }
    }

    // 新增子元素
    addChild(child: JElement) {
        if(Array.isArray(child)) {
            for(const c of child) {
                this.addChild(c);
            }
            return this;
        }
        if(child instanceof JElement) {
            this.container.appendChild(child.container);
            this.children.push(child);
        }
        else {
            this.container.appendChild(child);
        }
    }

    // 移除自已
    remove() {
        if(this.parent) this.parent.removeChild(this);
    }

    // 移除子元素
    removeChild(el: JElement) {
        this.container.removeChild(el.container);
        for(let i=this.children.length-1;i>-1; i--) {
            if(this.children[i] === el) return this.children.splice(i, 1);
        }
    }

    // 把渲染层坐标转为控制层
    toControlPosition(p) {
        if(Array.isArray(p)) {
            const res = [];
            for(const point of p) {
                res.push(this.toControlPosition(point));
            }
            return res;
        }
        return {
            ...p,
            x: p.x + this.left,
            y: p.y + this.top
        };
    }
    // 把控制层坐标转为渲染层
    toRenderPosition(p) {
        if(Array.isArray(p)) {
            const res = [];
            for(const point of p) {
                res.push(this.toRenderPosition(point));
            }
            return res;
        }
        return {
            ...p,
            x: p.x,
            y: p.y
        };
    }

    // 把原点转回0，0坐标
    toElementAnchorPosition(p) {
        if(Array.isArray(p)) {
            const res = [];
            for(const point of p) {
                res.push(this.toElementAnchorPosition(point));
            }
            return res;
        }
        return {
            ...p,
            x: p.x,
            y: p.y
        };
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