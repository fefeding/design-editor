import util from '../lib/util';
var Transform = /** @class */ (function () {
    function Transform(option, el) {
        // x偏移量
        this.translateX = 0;
        // y偏移量
        this.translateY = 0;
        // z偏移量
        this.translateZ = 0;
        this.rotateX = 0;
        this.rotateY = 0;
        this.rotateZ = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.scaleZ = 1;
        this.skewX = 0;
        this.skewY = 0;
        if (option)
            Object.assign(this, option);
        this.target = el;
    }
    Transform.prototype.from = function (data) {
        if (data)
            Object.assign(this, data);
    };
    // 生效
    Transform.prototype.apply = function (el) {
        if (el === void 0) { el = this.target; }
        if (el && el.setStyle) {
            el.setStyle('transform', this.toString());
        }
        else if (el && el.style)
            el.style.transform = this.toString();
    };
    // 生成transform代理
    Transform.createProxy = function (obj, el) {
        if (obj === void 0) { obj = {}; }
        var transform = new Transform(obj, el);
        // 代理处理
        var proxy = new Proxy(transform, {
            get: function (target, p, receiver) {
                var v = target[p];
                return v;
            },
            set: function (target, p, value, receiver) {
                target[p] = value;
                target.apply(); // 生效
                return true;
            }
        });
        return proxy;
    };
    Transform.prototype.toString = function () {
        var translate = "translateX(".concat(util.toPX(this.translateX), ") translateY(").concat(util.toPX(this.translateY), ") translateZ(").concat(util.toPX(this.translateZ), ")");
        var rotate = "rotateX(".concat(util.toDeg(this.rotateX), ") rotateY(").concat(util.toDeg(this.rotateY), ") rotateZ(").concat(util.toDeg(this.rotateZ), ")");
        var scale = "scaleX(".concat(this.scaleX, ") scaleY(").concat(this.scaleY, ") scaleZ(").concat(this.scaleZ, ")");
        var skew = "skewX(".concat(util.toDeg(this.skewX), ") skewY(").concat(util.toDeg(this.skewY), ")");
        return "transform: ".concat(translate, " ").concat(rotate, " ").concat(scale, " ").concat(skew);
    };
    Transform.prototype.toJSON = function () {
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
    };
    return Transform;
}());
export default Transform;
