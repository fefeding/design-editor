import EventEmiter from 'j-eventemitter';
import util from 'j-design-util';
import { IStyleTransform } from './styleMap';
import { ITransform, TransformWatcher } from './types';

export default class Transform extends EventEmiter implements ITransform {
    constructor(option?: IStyleTransform, targetOption?: TransformWatcher) {
        super();
        if(option) Object.assign(this, option);
        if(targetOption) this.bind(targetOption);
    }

    // 响应变化换元素和属性
    targets = [] as Array<TransformWatcher>;

    // x偏移量
    translateX: string|number = 0;
    get translateXString() {
        let x = this.translateX;
        if(util.isNumber(x)) x = util.toPX(x);
        return `translateX(${x})`;
    }

    // y偏移量
    translateY: string|number = 0;
    get translateYString() {
        let y = this.translateY;
        if(util.isNumber(y)) y = util.toPX(y);
        return `translateY(${y})`;
    }
    // z偏移量
    translateZ: string|number = 0;
    get translateZString() {
        let x = this.translateZ;
        if(util.isNumber(x)) x = util.toPX(x);
        return `translateZ(${x})`;
    }

    rotateX: number = 0;
    get rotateXString() {
        return `rotateX(${util.toRad(this.rotateX)})`;
    }
    rotateY: number = 0;
    get rotateYString() {
        return `rotateY(${util.toRad(this.rotateY)})`;
    }
    rotateZ: number = 0;
    get rotateZString() {
        return `rotateZ(${util.toRad(this.rotateZ)})`;
    }
    
    scaleX: number = 1;
    get scaleXString() {
        return `scaleX(${this.scaleX})`;
    }
    scaleY: number = 1;
    get scaleYString() {
        return `scaleY(${this.scaleY})`;
    }
    scaleZ: number = 1;
    get scaleZString() {
        return `scaleZ(${this.scaleZ})`;
    }

    skewX: number = 0;
    get skewXString() {
        return `skewX(${util.toRad(this.skewX)})`;
    }
    skewY: number = 0;
    get skewYString() {
        return `skewY(${util.toRad(this.skewY)})`;
    }

    from(data: IStyleTransform) {
        if(data) Object.assign(this, data);
    }
    // 生效
    apply(target: TransformWatcher | Array<TransformWatcher> = this.targets) {
        if(Array.isArray(target)) {
            for(const t of target) {
                this.apply(t);
            }
            return;
        }
        else {
            if(target.target && target.target.css) target.target.css('transform', this.toString(target.watchProps)); 
            else if(target.target) target.target.style.transform = this.toString(target.watchProps);
        }
    }

    // 绑定并刷新到目标上
    bind(target: TransformWatcher) {
        this.targets.push(target);
        this.apply(target);
    }
    unbind(target: TransformWatcher) {
        for(let i=this.targets.length-1; i>-1; i--) {
            if(this.targets[i].target === target.target) {
                this.targets.splice(i, 1);
            }
        }
    }

    // 生成transform代理
    static createProxy(obj: IStyleTransform = {}, el?: TransformWatcher) {
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

    toString(watchProps: Array<string>|undefined) {
        const res = [];
        if(!watchProps) {
            watchProps = ['translateX', 'translateY', 'translateZ', "rotateX", 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
        }

        for(const n of watchProps) {
            const nv = this[n + 'String'];
            if(typeof this[n] !== 'undefined' && typeof nv !== 'undefined') {
                res.push(nv);
            }
        }

        return res.join(' ');
    }

    toJSON(): IStyleTransform {
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