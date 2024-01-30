import JElementCssStyle, { JElementStyleDeclaration, JElementStyleProperty, IJElementStyleDeclaration } from '../constant/styleMap';
import util from '../lib/util';

const NumberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];

export default class JElementStyle extends JElementCssStyle {
    constructor(option?: IJElementStyleDeclaration) {
        super();
        if(option) {            
            this.apply(option);
        }
    }

    // 把样式应用到元素或当前对象
    apply(data: IJElementStyleDeclaration, target: CSSStyleDeclaration | JElementStyleDeclaration = this) {
        
        for(const name of this.names) {
            if(typeof name !== 'string') continue;
            if(typeof data[name] === 'string' || typeof data[name] === 'number') {
                if(target instanceof JElementStyle) {
                    target.setStyle(name, data[name]);
                }
                else {
                    target[name] = data[name];
                }
            }
        }
        return target;
    }

    // 样式对应的元素
    applyTo(element: HTMLElement) {
        this.apply(this, element.style);
    }

    // 设置样式
    setStyle(name, value) {
        this[name] = value;
        this.emit('change', {
            name,
            value
        });
    }

    // 触发所有更新到dom
    refresh() {
        this.apply(this);
    }

    // 转为json
    toJSON() {
        const obj = {} as JElementStyleProperty;
        for(const name of this.names) {
            if(typeof this[name] === 'undefined') continue;
            obj[name] = this[name];
        }
        return obj;
    }

    // 生成样式代理
    static createProxy(style: any = {}) {
        const jstyle = new JElementStyle(style);
        // 样式代理处理
        const proxy = new Proxy<JElementStyle>(jstyle, {
            get(target, p, receiver) {
                const v = target[p];
                // 数字样式，处理px问题
                if(typeof p === 'string' && NumberStyleMap.includes(p)) {
                    if(v === '0') return 0;
                    if(util.isPXNumber(v)) return parseFloat(v);
                }
                return v;
            },
            set(target, p, value, receiver) {
                // 非白名单样式不支持设置
                if(typeof p !== 'string' || !target.names.includes(p)) {
                    target[p] = value;
                    return true;
                }
                // 数字样式，处理px问题
                if(NumberStyleMap.includes(p)) {
                    value = typeof value === 'number' || util.isNumber(value)? `${value}px`: value;
                }
                target.setStyle(p, value);// 应用到元素和类
                return true;
            }
        });
        return proxy;
    }
}

