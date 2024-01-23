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
import util from '../lib/util';
var JElement = /** @class */ (function (_super) {
    __extends(JElement, _super);
    function JElement(option) {
        var _this = _super.call(this) || this;
        _this.id = '';
        // 类型名称
        _this.type = '';
        // 子元素
        _this._children = [];
        // 复制属性
        for (var k in option) {
            var v = option[k];
            if (typeof k !== 'string' || (typeof v !== 'string' || typeof v !== 'number'))
                continue;
            _this[k] = v;
        }
        _this.id = _this.id || option.id || uuidv4().replace(/-/g, '');
        _this.type = _this.type || option.type || '';
        var nodeType = option.nodeType || 'div';
        _this.dom = document.createElement(nodeType);
        // 样式代理处理
        _this.style = JStyle.createProxy();
        _this.style.on('change', function (s) {
            _this.setDomStyle(s.name, s.value);
        });
        if (option.style)
            _this.style.apply(option.style);
        _this.initOption(option);
        return _this;
    }
    // 初始化一些基础属性
    JElement.prototype.initOption = function (option) {
        this.x = option.x || option.left || 0;
        this.y = option.y || option.top || 0;
        this.width = option.width || option.width || 1;
        this.height = option.height || option.height || 1;
    };
    Object.defineProperty(JElement.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
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
            if (util.isDegNumber(v))
                return parseFloat(v);
            else if (util.isRadNumber(v)) {
                return util.radToDeg(this.angle);
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
            if (util.isRadNumber(v))
                return parseFloat(v);
            else if (util.isDegNumber(v)) {
                return util.degToRad(this.rotation);
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
        get: function () {
            return Number(this.style.zIndex || '0');
        },
        set: function (v) {
            this.style.zIndex = v + '';
        },
        enumerable: false,
        configurable: true
    });
    // 设置css到dom
    JElement.prototype.setDomStyle = function (name, value) {
        if (name === 'backgroundImage') {
            if (!/^\s*url\(/.test(value))
                value = "url(".concat(value, ")");
        }
        this.dom.style[name] = value;
    };
    // 设置样式
    JElement.prototype.css = function (name, value) {
        var e_1, _a;
        if (!name)
            return;
        if (typeof name === 'object') {
            try {
                for (var _b = __values(Object.getOwnPropertyNames(name)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var n = _c.value;
                    this.css(n, name[n]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            this.style[name] = value;
        }
        return this;
    };
    // dom属性
    JElement.prototype.attr = function (name, value) {
        if (typeof value !== 'undefined') {
            this.dom.setAttribute(name, value + '');
            return value;
        }
        else {
            return this.dom.getAttribute(name);
        }
    };
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
        this.left += dx;
        this.top += dy;
    };
    // 重置大小
    JElement.prototype.resize = function (w, h) {
        if (typeof w === 'number') {
            this.width = w;
        }
        if (typeof h === 'number') {
            this.height = h;
        }
    };
    // 新增子元素
    JElement.prototype.addChild = function (child, parent) {
        var e_2, _a;
        if (parent === void 0) { parent = this; }
        if (Array.isArray(child)) {
            try {
                for (var child_1 = __values(child), child_1_1 = child_1.next(); !child_1_1.done; child_1_1 = child_1.next()) {
                    var c = child_1_1.value;
                    parent.addChild(c);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (child_1_1 && !child_1_1.done && (_a = child_1.return)) _a.call(child_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return parent;
        }
        if (child instanceof JElement) {
            child.parent = parent;
            parent.dom.appendChild(child.dom);
            parent.children.push(child);
        }
        else {
            parent.dom.appendChild(child);
        }
    };
    // 移除自已
    JElement.prototype.remove = function () {
        if (this.parent)
            this.parent.removeChild(this);
    };
    // 移除子元素
    JElement.prototype.removeChild = function (el) {
        // @ts-ignore
        this.dom.removeChild(el.dom || el);
        for (var i = this.children.length - 1; i > -1; i--) {
            if (this.children[i] === el)
                return this.children.splice(i, 1);
        }
        // @ts-ignore
        delete el.parent;
    };
    // 把渲染层坐标转为控制层
    JElement.prototype.toControlPosition = function (p) {
        var e_3, _a;
        if (Array.isArray(p)) {
            var res = [];
            try {
                for (var p_1 = __values(p), p_1_1 = p_1.next(); !p_1_1.done; p_1_1 = p_1.next()) {
                    var point = p_1_1.value;
                    res.push(this.toControlPosition(point));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (p_1_1 && !p_1_1.done && (_a = p_1.return)) _a.call(p_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return res;
        }
        return __assign(__assign({}, p), { x: p.x + this.left, y: p.y + this.top });
    };
    // 把控制层坐标转为渲染层
    JElement.prototype.toRenderPosition = function (p) {
        var e_4, _a;
        if (Array.isArray(p)) {
            var res = [];
            try {
                for (var p_2 = __values(p), p_2_1 = p_2.next(); !p_2_1.done; p_2_1 = p_2.next()) {
                    var point = p_2_1.value;
                    res.push(this.toRenderPosition(point));
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (p_2_1 && !p_2_1.done && (_a = p_2.return)) _a.call(p_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return res;
        }
        return __assign(__assign({}, p), { x: p.x, y: p.y });
    };
    // 把原点转回0，0坐标
    JElement.prototype.toElementAnchorPosition = function (p) {
        var e_5, _a;
        if (Array.isArray(p)) {
            var res = [];
            try {
                for (var p_3 = __values(p), p_3_1 = p_3.next(); !p_3_1.done; p_3_1 = p_3.next()) {
                    var point = p_3_1.value;
                    res.push(this.toElementAnchorPosition(point));
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (p_3_1 && !p_3_1.done && (_a = p_3.return)) _a.call(p_3);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return res;
        }
        return __assign(__assign({}, p), { x: p.x, y: p.y });
    };
    JElement.prototype.toJSON = function () {
        var e_6, _a;
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
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_6) throw e_6.error; }
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
