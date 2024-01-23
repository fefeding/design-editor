
import util from '../lib/util';

export interface StyleTransform {
    translateX?: string|number;
    translateY?: string|number;
    translateZ?: string|number;

    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;

    scaleX?: number;
    scaleY?: number;
    scaleZ?: number;

    skewX?: number;
    skewY?: number;
}

export default class Transform implements StyleTransform {
    constructor(option?: StyleTransform, el?: any) {
        if(option) Object.assign(this, option);
        this.target = el;
    }
    target?: any;
    // x偏移量
    translateX: string|number = 0;
    // y偏移量
    translateY: string|number = 0;
    // z偏移量
    translateZ: string|number = 0;

    rotateX: number = 0;
    rotateY: number = 0;
    rotateZ: number = 0;
    
    scaleX: number = 1;
    scaleY: number = 1;
    scaleZ: number = 1;

    skewX: number = 0;
    skewY: number = 0;

    from(data: StyleTransform) {
        if(data) Object.assign(this, data);
    }
    // 生效
    apply(el: any = this.target) {
        if(el && el.setStyle) {
            el.setStyle('transform', this.toString());
        }
        else if(el && el.style) el.style.transform = this.toString(); 
    }

    // 生成transform代理
    static createProxy(obj: StyleTransform = {}, el?: any) {
        const transform = new Transform(obj, el);
        // 代理处理
        const proxy = new Proxy<Transform>(transform, {
            get(target, p, receiver) {
                const v = target[p];
                return v;
            },
            set(target, p, value, receiver) {
                target[p] = value;
                target.apply();// 生效
                return true;
            }
        });
        return proxy;
    }

    toString() {
        const translate = `translateX(${util.toPX(this.translateX)}) translateY(${util.toPX(this.translateY)}) translateZ(${util.toPX(this.translateZ)})`;
        const rotate = `rotateX(${util.toDeg(this.rotateX)}) rotateY(${util.toDeg(this.rotateY)}) rotateZ(${util.toDeg(this.rotateZ)})`;
        const scale = `scaleX(${this.scaleX}) scaleY(${this.scaleY}) scaleZ(${this.scaleZ})`;
        const skew = `skewX(${util.toDeg(this.skewX)}) skewY(${util.toDeg(this.skewY)})`;

        return `transform: ${translate} ${rotate} ${scale} ${skew}`;
    }

    toJSON() {
        return {
            translateX: this.translateX,
            translateY: this.translateY,
            translateZ: this.translateZ,
            rotateX: this.rotateX,
            rotateY: this.rotateY,
            rotateZ: this.rotateZ,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            scaleZ: this.scaleZ,
            skewX: this.skewX,
            skewY: this.skewY,
        };
    }
}