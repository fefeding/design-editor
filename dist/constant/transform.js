var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import EventEmiter from 'eventemitter3';
import util from '../lib/util';
var Transform = /** @class */ (function (_super) {
    __extends(Transform, _super);
    function Transform(option, targetOption) {
        var _this = _super.call(this) || this;
        // 响应变化换元素和属性
        _this.targets = [];
        // x偏移量
        _this.translateX = 0;
        // y偏移量
        _this.translateY = 0;
        // z偏移量
        _this.translateZ = 0;
        _this.rotateX = 0;
        _this.rotateY = 0;
        _this.rotateZ = 0;
        _this.scaleX = 1;
        _this.scaleY = 1;
        _this.scaleZ = 1;
        _this.skewX = 0;
        _this.skewY = 0;
        if (option)
            Object.assign(_this, option);
        if (targetOption)
            _this.bind(targetOption);
        return _this;
    }
    Object.defineProperty(Transform.prototype, "translateXString", {
        get: function () {
            return "translateX(".concat(util.toPX(this.translateX), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "translateYString", {
        get: function () {
            return "translateY(".concat(util.toPX(this.translateY), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "translateZString", {
        get: function () {
            return "translateZ(".concat(util.toPX(this.translateZ), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotateXString", {
        get: function () {
            return "rotateX(".concat(util.toRad(this.rotateX), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotateYString", {
        get: function () {
            return "rotateY(".concat(util.toRad(this.rotateY), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotateZString", {
        get: function () {
            return "rotateZ(".concat(util.toRad(this.rotateZ), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scaleXString", {
        get: function () {
            return "scaleX(".concat(this.scaleX, ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scaleYString", {
        get: function () {
            return "scaleY(".concat(this.scaleY, ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scaleZString", {
        get: function () {
            return "scaleZ(".concat(this.scaleZ, ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "skewXString", {
        get: function () {
            return "skewX(".concat(util.toRad(this.skewX), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "skewYString", {
        get: function () {
            return "skewY(".concat(util.toRad(this.skewY), ")");
        },
        enumerable: false,
        configurable: true
    });
    Transform.prototype.from = function (data) {
        if (data)
            Object.assign(this, data);
    };
    // 生效
    Transform.prototype.apply = function (target) {
        var e_1, _a;
        if (target === void 0) { target = this.targets; }
        if (Array.isArray(target)) {
            try {
                for (var target_1 = __values(target), target_1_1 = target_1.next(); !target_1_1.done; target_1_1 = target_1.next()) {
                    var t = target_1_1.value;
                    this.apply(t);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (target_1_1 && !target_1_1.done && (_a = target_1.return)) _a.call(target_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return;
        }
        else {
            if (target.target && target.target.css)
                target.target.css('transform', this.toString(target.watchProps));
            else if (target.target)
                target.target.style.transform = this.toString(target.watchProps);
        }
    };
    // 绑定并刷新到目标上
    Transform.prototype.bind = function (target) {
        this.targets.push(target);
        this.apply(target);
    };
    Transform.prototype.unbind = function (target) {
        for (var i = this.targets.length - 1; i > -1; i--) {
            if (this.targets[i].target === target.target) {
                this.targets.splice(i, 1);
            }
        }
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
    Transform.prototype.toString = function (watchProps) {
        var e_2, _a;
        var res = [];
        if (!watchProps) {
            watchProps = ['translateX', 'translateY', 'translateZ', "rotateX", 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
        }
        try {
            for (var watchProps_1 = __values(watchProps), watchProps_1_1 = watchProps_1.next(); !watchProps_1_1.done; watchProps_1_1 = watchProps_1.next()) {
                var n = watchProps_1_1.value;
                var nv = this[n + 'String'];
                if (typeof this[n] !== 'undefined' && typeof nv !== 'undefined') {
                    res.push(nv);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (watchProps_1_1 && !watchProps_1_1.done && (_a = watchProps_1.return)) _a.call(watchProps_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return res.join(' ');
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
}(EventEmiter));
export default Transform;
