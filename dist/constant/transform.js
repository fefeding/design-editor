import EventEmiter from '@fefeding/eventemitter';
import util from '@fefeding/utils';
export default class Transform extends EventEmiter {
    constructor(option, targetOption) {
        super();
        if (option)
            Object.assign(this, option);
        if (targetOption)
            this.bind(targetOption);
    }
    // 响应变化换元素和属性
    targets = [];
    // x偏移量
    translateX = 0;
    get translateXString() {
        let x = this.translateX;
        if (util.isNumber(x))
            x = util.toPX(x);
        return `translateX(${x})`;
    }
    // y偏移量
    translateY = 0;
    get translateYString() {
        let y = this.translateY;
        if (util.isNumber(y))
            y = util.toPX(y);
        return `translateY(${y})`;
    }
    // z偏移量
    translateZ = 0;
    get translateZString() {
        let x = this.translateZ;
        if (util.isNumber(x))
            x = util.toPX(x);
        return `translateZ(${x})`;
    }
    rotateX = 0;
    get rotateXString() {
        return `rotateX(${util.toRad(this.rotateX)})`;
    }
    rotateY = 0;
    get rotateYString() {
        return `rotateY(${util.toRad(this.rotateY)})`;
    }
    rotateZ = 0;
    get rotateZString() {
        return `rotateZ(${util.toRad(this.rotateZ)})`;
    }
    scaleX = 1;
    get scaleXString() {
        return `scaleX(${this.scaleX})`;
    }
    scaleY = 1;
    get scaleYString() {
        return `scaleY(${this.scaleY})`;
    }
    scaleZ = 1;
    get scaleZString() {
        return `scaleZ(${this.scaleZ})`;
    }
    skewX = 0;
    get skewXString() {
        return `skewX(${util.toRad(this.skewX)})`;
    }
    skewY = 0;
    get skewYString() {
        return `skewY(${util.toRad(this.skewY)})`;
    }
    from(data) {
        if (data)
            Object.assign(this, data);
    }
    // 生效
    apply(target = this.targets) {
        if (Array.isArray(target)) {
            for (const t of target) {
                this.apply(t);
            }
            return;
        }
        else {
            if (target.target && target.target.css)
                target.target.css('transform', this.toString(target.watchProps));
            else if (target.target)
                target.target.style.transform = this.toString(target.watchProps);
        }
    }
    // 绑定并刷新到目标上
    bind(target) {
        this.targets.push(target);
        this.apply(target);
    }
    unbind(target) {
        for (let i = this.targets.length - 1; i > -1; i--) {
            if (this.targets[i].target === target.target) {
                this.targets.splice(i, 1);
            }
        }
    }
    // 生成transform代理
    static createProxy(obj = {}, el) {
        const transform = new Transform(obj, el);
        // 代理处理
        const proxy = new Proxy(transform, {
            get(target, p, receiver) {
                const v = target[p];
                return v;
            },
            set(target, p, value, receiver) {
                target[p] = value;
                target.apply(); // 生效
                return true;
            }
        });
        return proxy;
    }
    toString(watchProps) {
        const res = [];
        if (!watchProps) {
            watchProps = ['translateX', 'translateY', 'translateZ', "rotateX", 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
        }
        for (const n of watchProps) {
            const nv = this[n + 'String'];
            if (typeof this[n] !== 'undefined' && typeof nv !== 'undefined') {
                res.push(nv);
            }
        }
        return res.join(' ');
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
