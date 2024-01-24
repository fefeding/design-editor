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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import JBase from './components/base';
import JText from './components/text';
import JImage from './components/image';
var JEditor = /** @class */ (function (_super) {
    __extends(JEditor, _super);
    function JEditor(container, option) {
        if (option === void 0) { option = {}; }
        var _this = _super.call(this, option) || this;
        // 所有支持的类型
        _this.shapes = {
            'image': JImage,
            'text': JText
        };
        if (typeof container === 'string')
            container = document.getElementById(container);
        container.appendChild(_this.dom);
        container.style.position = 'relative';
        _this.init(option);
        return _this;
    }
    // 初始化整个编辑器
    JEditor.prototype.init = function (option) {
        this.dom.style.width = '100%';
        this.dom.style.height = '100%';
        if (option.style.containerBackgroundColor)
            this.dom.style.backgroundColor = option.style.containerBackgroundColor;
        this.target.css({
            'boxShadow': '0 0 10px 10px #ccc',
            'position': 'absolute',
            'backgroundSize': '100% 100%',
            'overflow': 'hidden'
        });
        if (option.width && option.height) {
            this.resize(option.width, option.height);
        }
    };
    Object.defineProperty(JEditor.prototype, "width", {
        get: function () {
            return this.target.width;
        },
        set: function (v) {
            this.target && this.resize(v, this.height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JEditor.prototype, "height", {
        get: function () {
            return this.target.height;
        },
        set: function (v) {
            this.target && this.resize(this.width, v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JEditor.prototype, "left", {
        get: function () {
            return this.target.left;
        },
        set: function (v) {
            this.target && (this.target.left = v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JEditor.prototype, "top", {
        get: function () {
            return this.target.top;
        },
        set: function (v) {
            this.target && (this.target.top = v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JEditor.prototype, "children", {
        // 重写子集为target
        get: function () {
            return this.target.children;
        },
        enumerable: false,
        configurable: true
    });
    JEditor.prototype.resize = function (width, height) {
        var _this = this;
        if (width === void 0) { width = this.width; }
        if (height === void 0) { height = this.height; }
        this.target.attr('data-size', "".concat(width, "*").concat(height));
        this.target.width = width;
        this.target.height = height;
        this.left = this.dom.clientWidth / 2 - parseFloat(width + '') / 2;
        this.top = this.dom.clientHeight / 2 - parseFloat(height + '') / 2;
        setTimeout(function () {
            _this.emit('resize', {
                width: width,
                height: height
            });
        }, 10);
    };
    // 添加元素到画布
    JEditor.prototype.addChild = function (child) {
        if (child === this.target) {
            return _super.prototype.addChild.call(this, child);
        }
        return this.target.addChild(child);
    };
    // 移除
    // @ts-ignore
    JEditor.prototype.removeChild = function (el) {
        if (el === this.target) {
            return _super.prototype.addChild.call(this, el);
        }
        return this.target.removeChild(el);
    };
    JEditor.prototype.clear = function () {
        this.css({
            'backgroundColor': '#fff',
            'backgroundImage': ''
        });
        for (var i = this.children.length - 1; i >= 0; i--) {
            var el = this.children[i];
            this.removeChild(el);
        }
    };
    // 缩放
    JEditor.prototype.scale = function (x, y) {
        if (y === void 0) { y = x; }
        if (x < 0.1 || y < 0.1)
            return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    };
    JEditor.prototype.regShape = function (name, shape) {
        if (this.shapes[name])
            throw Error("\u5143\u7D20\u7C7B\u578B".concat(name, "\u5DF2\u7ECF\u5B58\u5728"));
        this.shapes[name] = shape;
    };
    // 创建元素
    JEditor.prototype.createShape = function (type, option) {
        if (option === void 0) { option = {}; }
        var shape = typeof type === 'string' ? this.shapes[type] : type;
        if (!shape) {
            throw Error("".concat(type, "\u4E0D\u5B58\u5728\u7684\u5143\u7D20\u7C7B\u578B"));
        }
        var el = new shape(__assign(__assign({}, option), { type: type }));
        return el;
    };
    // 创建图片元素
    JEditor.prototype.createImage = function (url, option) {
        if (option === void 0) { option = {}; }
        var img = this.createShape('image', __assign(__assign({}, option), { url: url }));
        return img;
    };
    // 转为图片数据
    JEditor.prototype.toImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    JEditor.prototype.toJSON = function () {
        var e_1, _a;
        var data = {
            width: this.width,
            height: this.height,
            children: []
        };
        try {
            for (var _b = __values(this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (!c.type)
                    continue;
                if (c.toJSON) {
                    data.children.push(c.toJSON());
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return data;
    };
    JEditor.prototype.toString = function () {
        var data = this.toJSON();
        return JSON.stringify(data);
    };
    JEditor.prototype.fromJSON = function (data) {
        var e_2, _a;
        this.clear();
        if (typeof data === 'string')
            data = JSON.parse(data);
        if (data.style) {
            this.style.apply(data.style); // 应用样式
        }
        this.resize(data.width, data.height);
        try {
            for (var _b = __values(data.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (!c.type)
                    continue;
                var item = this.createShape(c.type, c);
                this.addChild(item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return JEditor;
}(JBase));
export default JEditor;
export { JEditor, JImage, JText, };
