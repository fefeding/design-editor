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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import EventEmiter from '../constant/eventEmitter';
import { v4 as uuidv4 } from 'uuid';
import JTransform from '../constant/transform';
import JStyle from './style';
import util from '../lib/util';
import JEvent from '../core/event';
import { JElementData } from '../constant/data';
var JElement = /** @class */ (function (_super) {
    __extends(JElement, _super);
    function JElement(option) {
        if (option === void 0) { option = {}; }
        var _this = _super.call(this) || this;
        _this._id = '';
        // 类型名称
        _this._type = '';
        // 子元素
        _this._children = [];
        // 是否可编辑
        _this.editable = true;
        // 复制属性
        for (var k in option) {
            var v = option[k];
            if (typeof k !== 'string' || (typeof v !== 'string' || typeof v !== 'number'))
                continue;
            _this[k] = v;
        }
        _this._id = _this.id || option.id || uuidv4().replace(/-/g, '');
        _this._type = _this.type || option.type || '';
        var nodeType = option.nodeType || 'div';
        _this._dom = document.createElement(nodeType);
        if (option.editor)
            _this.editor = option.editor;
        // 样式代理处理
        _this.style = JStyle.createProxy();
        _this.style.on('change', function (s) {
            _this.setDomStyle(s.name, s.value);
            _this.emit('styleChange', __assign(__assign({}, s), { target: _this }));
        });
        if (option.style)
            _this.style.apply(option.style);
        // 变换控制的是核心元素
        _this.transform = JTransform.createProxy(option.transform, {
            target: _this,
            // 如果指定了只响应某几个属性
            watchProps: option.transformWatchProps
        });
        _this.initData(option, option.dataType);
        if (option.editable === false)
            _this.editable = false;
        if (option.className)
            _this.className = option.className;
        _this.bindEvent(); // 事件绑定
        return _this;
    }
    // 初始化一些基础属性
    JElement.prototype.initData = function (option, type) {
        var _this = this;
        if (type === void 0) { type = JElementData; }
        this.data = JElementData.createProxy(new type());
        // 属性变化映射到style
        this.data.watch([
            'x', 'y', 'left', 'top', 'width', 'height', 'zIndex', 'visible'
        ], {
            set: function (item) {
                if (item.name === 'visible') {
                    _this.style.display = item.value ? 'block' : 'none';
                }
                else if (item.name === 'x')
                    _this.data.left = item.value;
                else if (item.name === 'y')
                    _this.data.top = item.value;
                else if (item.name === 'rotation') {
                    _this.transform.rotateZ = item.value;
                }
                else if (item.name === 'angle') {
                    _this.transform.rotateZ = util.degToRad(item.value);
                }
                else
                    _this.style[item.name] = item.value;
            },
            get: function (name) {
                if (name === 'x')
                    return _this.data.left;
                else if (name === 'y')
                    return _this.data.top;
                else if (name === 'width') {
                    var w = _this.style.width || 0;
                    if ((!w || w === 'auto') && _this.dom && _this.dom.clientWidth)
                        return _this.dom.clientWidth;
                    return w;
                }
                else if (name === 'height') {
                    var h = _this.style.height || 0;
                    if ((!h || h === 'auto') && _this.dom && _this.dom.clientHeight)
                        return _this.dom.clientHeight;
                    return h;
                }
                else if (name === 'rotation') {
                    return _this.transform.rotateZ;
                }
                else if (name === 'angle') {
                    return util.radToDeg(_this.transform.rotateZ);
                }
                else if (name === 'visible') {
                    return _this.style.display !== 'none';
                }
                return _this.style[name];
            }
        });
        this.data.x = option.x || option.left || this.data.x || 0;
        this.data.y = option.y || option.top || this.data.y || 0;
        this.data.width = option.width || option.width || this.data.width || 1;
        this.data.height = option.height || option.height || this.data.height || 1;
        if (typeof option.rotation !== 'undefined')
            this.data.rotation = option.rotation;
        if (typeof option.angle !== 'undefined')
            this.data.angle = option.angle;
        if (typeof option.zIndex !== 'undefined')
            this.data.zIndex = option.zIndex;
        if (typeof option.visible !== 'undefined')
            this.data.visible = !!option.visible;
        if (option.data) {
            this.data.from(option.data);
        }
    };
    // 绑定事件
    JElement.prototype.bindEvent = function (dom) {
        var _this = this;
        // 事件托管
        this.event = new JEvent(dom || this.dom);
        this.event.init(function (e) {
            _this.emit(e.type, e);
        });
    };
    Object.defineProperty(JElement.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "dom", {
        get: function () {
            return this._dom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "className", {
        get: function () {
            return this.dom.className;
        },
        set: function (v) {
            this.dom.className = v;
        },
        enumerable: false,
        configurable: true
    });
    // 设置css到dom
    JElement.prototype.setDomStyle = function (name, value) {
        if (name === 'backgroundImage' && value) {
            if (!/^\s*url\(/.test(value))
                value = "url(".concat(value, ")");
        }
        util.css(this.dom, name, value);
    };
    // 设置样式
    JElement.prototype.css = function (name, value) {
        util.css(this, name, value);
        return this;
    };
    // dom属性
    JElement.prototype.attr = function (name, value) {
        return util.attr(this.dom, name, value);
    };
    // 移位
    JElement.prototype.move = function (dx, dy) {
        this.data.left = util.toNumber(this.data.left) + dx;
        this.data.top = util.toNumber(this.data.top) + dy;
        this.emit('move', { dx: dx, dy: dy });
    };
    // 重置大小
    JElement.prototype.resize = function (w, h) {
        if (typeof w === 'number') {
            this.data.width = w;
        }
        if (typeof h === 'number') {
            this.data.height = h;
        }
    };
    // 新增子元素
    JElement.prototype.addChild = function (child, parent) {
        var e_1, _a;
        if (parent === void 0) { parent = this; }
        if (Array.isArray(child)) {
            try {
                for (var child_1 = __values(child), child_1_1 = child_1.next(); !child_1_1.done; child_1_1 = child_1.next()) {
                    var c = child_1_1.value;
                    parent.addChild(c);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (child_1_1 && !child_1_1.done && (_a = child_1.return)) _a.call(child_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return parent;
        }
        if (child instanceof JElement) {
            child.parent = parent;
            parent.dom.appendChild(child.dom);
            parent.children.push(child);
        }
        else if (child instanceof HTMLElement) {
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
        if (el.dom && el.dom.parentElement === this.dom)
            this.dom.removeChild(el.dom || el);
        for (var i = this.children.length - 1; i > -1; i--) {
            if (this.children[i] === el)
                return this.children.splice(i, 1);
        }
        // @ts-ignore
        delete el.parent;
    };
    // 转为json
    JElement.prototype.toJSON = function (props, ig) {
        var e_2, _a, e_3, _b;
        if (props === void 0) { props = []; }
        if (ig === void 0) { ig = function (p) { return true; }; }
        var fields = __spreadArray(['type', 'data', 'style', 'transform', 'id'], __read(props), false);
        var obj = {
            children: []
        };
        try {
            for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var k = fields_1_1.value;
                var v = this[k];
                if (typeof v === 'string' || typeof v === 'number') {
                    obj[k] = this[k];
                }
                else if (v && v.toJSON) {
                    obj[k] = v.toJSON();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (this.children && this.children.length) {
            try {
                for (var _c = __values(this.children), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var child = _d.value;
                    if (child === this || ig(child) === false)
                        continue;
                    obj.children.push(child.toJSON());
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return obj;
    };
    JElement.prototype.toString = function () {
        var obj = this.toJSON();
        return JSON.stringify(obj);
    };
    JElement.prototype.toHtml = function () {
        return this.dom.outerHTML;
    };
    return JElement;
}(EventEmiter));
export default JElement;
