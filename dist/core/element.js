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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { v4 as uuidv4 } from 'uuid';
import JStyle from './style';
import util from './util';
var JElement = /** @class */ (function (_super) {
    __extends(JElement, _super);
    function JElement(option) {
        var _this = _super.call(this) || this;
        _this.id = '';
        // 类型名称
        _this.type = '';
        // 子元素
        _this.children = [];
        // 控件最外层的容器
        _this.container = document.createElement('div');
        // 是否可以编辑
        _this.editable = true;
        _this.id = option.id || uuidv4().replace(/-/g, '');
        _this.type = option.type || '';
        var numberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];
        var style = new JStyle(option.style);
        // 样式代理处理
        _this.style = new Proxy(style, {
            get: function (target, p, receiver) {
                var v = target[p];
                // 数字样式，处理px问题
                if (typeof p === 'string' && numberStyleMap.includes(p)) {
                    if (v === '0')
                        return 0;
                    if (util.isPXNumber(v))
                        return parseFloat(v);
                }
                return v;
            },
            set: function (target, p, value, receiver) {
                // 非白名单样式不支持设置
                if (typeof p !== 'string' || !style.names.includes(p))
                    return false;
                // 数字样式，处理px问题
                if (numberStyleMap.includes(p)) {
                    target[p] = typeof value === 'number' || util.isNumber(value) ? "".concat(value, "px") : value;
                }
                else {
                    target[p] = value;
                }
                return true;
            }
        });
        return _this;
    }
    JElement.prototype.init = function (option) {
    };
    Object.defineProperty(JElement.prototype, "x", {
        // 坐标X
        get: function () {
            var v = this.style.left || 0;
            return v;
        },
        set: function (v) {
            this.style.left = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "y", {
        // 坐标Y
        get: function () {
            var v = this.style.top || 0;
            return v;
        },
        set: function (v) {
            this.style.top = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "top", {
        get: function () {
            return this.y;
        },
        set: function (v) {
            this.y = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "left", {
        get: function () {
            return this.x;
        },
        set: function (v) {
            this.x = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "right", {
        // 坐标right
        get: function () {
            var v = this.style.right || 0;
            return v;
        },
        set: function (v) {
            this.style.right = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "bottom", {
        // 坐标bottom
        get: function () {
            var v = this.style.bottom || 0;
            return v;
        },
        set: function (v) {
            this.style.bottom = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "width", {
        get: function () {
            return this.style.width || 0;
        },
        set: function (v) {
            this.style.width = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "height", {
        get: function () {
            return this.style.height || 0;
        },
        set: function (v) {
            this.style.height = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "rotation", {
        get: function () {
            var v = this.style.rotate;
            if (/^\s*[\d\.]+\s*deg\s*/i.test(v))
                return parseFloat(v);
            else if (/^\s*[\d\.]+\s*rad\s*/i.test(v)) {
                return this.angle * (180 / Math.PI);
            }
            return Number(v);
        },
        // 旋转角度
        set: function (v) {
            this.style.rotate = "".concat(v, "deg");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "angle", {
        get: function () {
            var v = this.style.rotate;
            if (/^\s*[\d\.]+\s*rad\s*/i.test(v))
                return parseFloat(v);
            else if (/^\s*[\d\.]+\s*deg\s*/i.test(v)) {
                return this.rotation * (Math.PI / 180);
            }
            return Number(v);
        },
        // 旋转弧度
        set: function (v) {
            this.style.rotate = "".concat(v, "rad");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "visible", {
        get: function () {
            return this.style.display !== 'none';
        },
        set: function (v) {
            this.style.display = v ? 'block' : 'none';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "zIndex", {
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
        get: function () {
            return Number(this.style.zIndex || '0');
        },
        set: function (v) {
            this.style.zIndex = v + '';
        },
        enumerable: false,
        configurable: true
    });
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
    JElement.prototype.bindEvent = function () {
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
    };
    // 移位
    JElement.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    // 重置大小
    JElement.prototype.resize = function (w, h) {
        if (typeof w === 'number') {
            //const rw = w / this.sprite.texture.width;
            //if(rw !== this.sprite.scale.x) this.sprite.scale.x = rw;
            this.width = w;
        }
        if (typeof h === 'number') {
            //const rh = h / this.sprite.texture.height;
            //if(rh !== this.sprite.scale.y) this.sprite.scale.y = rh;
            this.height = h;
        }
    };
    // 新增子元素
    JElement.prototype.addChild = function (child) {
        var e_1, _a;
        if (Array.isArray(child)) {
            try {
                for (var child_1 = __values(child), child_1_1 = child_1.next(); !child_1_1.done; child_1_1 = child_1.next()) {
                    var c = child_1_1.value;
                    this.addChild(c);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (child_1_1 && !child_1_1.done && (_a = child_1.return)) _a.call(child_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return this;
        }
        if (child instanceof JElement) {
            this.container.appendChild(child.container);
            this.children.push(child);
        }
        else {
            this.container.appendChild(child);
        }
    };
    // 移除自已
    JElement.prototype.remove = function () {
        if (this.parent)
            this.parent.removeChild(this);
    };
    // 移除子元素
    JElement.prototype.removeChild = function (el) {
        this.container.removeChild(el.container);
        for (var i = this.children.length - 1; i > -1; i--) {
            if (this.children[i] === el)
                return this.children.splice(i, 1);
        }
    };
    // 把渲染层坐标转为控制层
    JElement.prototype.toControlPosition = function (p) {
        var e_2, _a;
        if (Array.isArray(p)) {
            var res = [];
            try {
                for (var p_1 = __values(p), p_1_1 = p_1.next(); !p_1_1.done; p_1_1 = p_1.next()) {
                    var point = p_1_1.value;
                    res.push(this.toControlPosition(point));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (p_1_1 && !p_1_1.done && (_a = p_1.return)) _a.call(p_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return res;
        }
        return __assign(__assign({}, p), { x: p.x + this.left, y: p.y + this.top });
    };
    // 把控制层坐标转为渲染层
    JElement.prototype.toRenderPosition = function (p) {
        var e_3, _a;
        if (Array.isArray(p)) {
            var res = [];
            try {
                for (var p_2 = __values(p), p_2_1 = p_2.next(); !p_2_1.done; p_2_1 = p_2.next()) {
                    var point = p_2_1.value;
                    res.push(this.toRenderPosition(point));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (p_2_1 && !p_2_1.done && (_a = p_2.return)) _a.call(p_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return res;
        }
        return __assign(__assign({}, p), { x: p.x, y: p.y });
    };
    // 把原点转回0，0坐标
    JElement.prototype.toElementAnchorPosition = function (p) {
        var e_4, _a;
        if (Array.isArray(p)) {
            var res = [];
            try {
                for (var p_3 = __values(p), p_3_1 = p_3.next(); !p_3_1.done; p_3_1 = p_3.next()) {
                    var point = p_3_1.value;
                    res.push(this.toElementAnchorPosition(point));
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (p_3_1 && !p_3_1.done && (_a = p_3.return)) _a.call(p_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return res;
        }
        return __assign(__assign({}, p), { x: p.x, y: p.y });
    };
    JElement.prototype.toJSON = function () {
        var e_5, _a;
        var fields = ['x', 'y', 'width', 'height', 'url', 'text', 'rotation', 'type', 'style', 'id', 'skew', 'points', 'isClosed'];
        var obj = {};
        try {
            for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var k = fields_1_1.value;
                if (typeof this[k] !== 'undefined') {
                    obj[k] = this[k];
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return obj;
    };
    JElement.prototype.toString = function () {
        var obj = this.toJSON();
        return JSON.stringify(obj);
    };
    return JElement;
}(EventEmiter));
export default JElement;
