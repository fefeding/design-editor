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
import util, { fonts as JFonts } from 'j-design-util';
import JBase from './core/baseComponent';
import JText from './components/text';
import JImage from './components/image';
import JSvg from './components/svg';
import JContainer from './components/container';
import JElement from './core/element';
import JHtmlElement from './core/baseHtmlElement';
import JController from './core/controller';
import { editorDefaultCssContent, editorDefaultStyle } from './constant/styleMap';
/**
 * @public
 */
var JEditor = /** @class */ (function (_super) {
    __extends(JEditor, _super);
    function JEditor(option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        option.style = option.style || {};
        Object.assign(option.style, editorDefaultStyle);
        // @ts-ignore 外层只响应Z轴旋转
        /*option.transformWatchProps = [
            'rotateZ', 'scaleX', 'scaleY'
        ];*/
        option.type = option.type || 'editor';
        _this = _super.call(this, __assign(__assign({}, option), { data: __assign(__assign({}, option.data), { left: 0, top: 0 }) })) || this;
        // 所有支持的类型
        _this.shapes = new Map();
        if (typeof option.container === 'string')
            option.container = document.getElementById(option.container);
        _this.view = new JElement({
            style: {
                'border': '0',
                'padding': '0',
                'margin': '0',
                'position': 'relative',
                'width': '100%',
                'height': '100%',
                'caretColor': 'blue',
            }
        });
        // 字体管理实例
        _this.fonts = new JFonts(option.fonts);
        _this.target.css({
            'overflow': 'hidden'
        });
        if (option.container)
            option.container.appendChild(_this.view.dom);
        _this.view.addChild(_this.dom);
        // @ts-ignore
        _this.regShape({
            'image': JImage,
            'img': JImage,
            'text': JText,
            //'span': JText, 
            'svg': JSvg,
            'container': JContainer,
            'div': JContainer,
        });
        _this.init(option);
        _this.bindEvent(_this.view.dom);
        return _this;
    }
    // 初始化整个编辑器
    JEditor.prototype.init = function (option) {
        var _this = this;
        if (option.style.containerBackgroundColor)
            this.dom.style.backgroundColor = option.style.containerBackgroundColor;
        // 生成控制器
        this.elementController = new JController(__assign(__assign({}, option.controllerOption), { visible: false, editor: this }));
        var styleNode = document.createElement('style');
        if (this.editable)
            styleNode.innerHTML = editorDefaultCssContent;
        this.dom.appendChild(styleNode);
        // 字体加载成功，同时加入到dom结构中
        this.fonts.on('load', function (font) {
            styleNode.append(font.toHtml());
        });
        this.on('select', function (e) {
            _this.select(_this); // 选中自已
        });
        this.on('mousedown', function (e) {
            if (e.button === 0) {
                this.select(this, e);
            }
        });
        // 刷新样式
        this.style.refresh();
        this.resize(); // 触发一次大小改变
        // 属性变化
        this.data.watch([
            'width', 'height'
        ], {
            set: function (item) {
                _this.sizeChange();
            }
        });
        // 编辑器只支持保留 部分样式
        this.style.styleSaveMap = [
            'backgroundColor',
            'backgroundImage',
            'backgroundSize',
            'backgroundRepeat'
        ];
    };
    Object.defineProperty(JEditor.prototype, "typeName", {
        /**
         * 类型名称
         */
        get: function () {
            return 'editor';
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
    Object.defineProperty(JEditor.prototype, "selectedElements", {
        // 被选中的元素
        get: function () {
            var e_1, _a;
            var res = [];
            try {
                for (var _b = __values(this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var el = _c.value;
                    if (el instanceof JBase && el.selected) {
                        res.push(el);
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
            return res;
        },
        enumerable: false,
        configurable: true
    });
    // 绑定事件
    JEditor.prototype.bindEvent = function (dom) {
        var _this = this;
        if (!this.view) {
            return;
        }
        _super.prototype.bindEvent.call(this, this.view.dom); // 编辑器事件绑到整个容器上
        // 监听子元素改变
        this.on(['elementChange'], function (e) {
            var isComponent = e.target instanceof JBase;
            // 左健选中
            if (e.type === 'mousedown' && isComponent) {
                _this.select(e.target, e.event);
            }
            // 选中状态改变
            else if (e.type === 'select' && isComponent) {
                _this.select(e.target);
            }
            // 如果是字体依赖，则检查字体支持情况
            else if (e.type === 'styleChange') {
                // 字体发生改变，需要做check, 并加载字体生效
                if (e.data.name === 'fontFamily' && e.data.value) {
                    _this.fonts.load(e.data.value).then(function (font) {
                        if (!font) {
                            console.warn("\u52A0\u8F7D\u5B57\u4F53".concat(e.data.value, "\u5931\u8D25"));
                        }
                    }).catch(function (e) {
                        console.error(e);
                    }); // 异步加载字体
                }
            }
        });
    };
    // 选中某个元素
    JEditor.prototype.select = function (el, event) {
        if (event === void 0) { event = null; }
        // 不可编辑的情况下不响应选择事件
        if (!el.editable)
            return false;
        if (event) {
            // shift 或 ctrl 时，表示多先
            var isMutilSelect = ((event === null || event === void 0 ? void 0 : event.ctrlKey) || (event === null || event === void 0 ? void 0 : event.shiftKey)) && el !== this; // 编辑器不能与其它元素多选
            // 选把所有已选择的取消
            // 如果按下ctrl或本来就是选中的，则不取消其它元素
            if (!isMutilSelect && !el.selected) {
                this.selectedElements.map(function (p) {
                    if (p !== el) {
                        p.selected = false;
                        return p;
                    }
                });
            }
            // 编辑器要消选
            if (el !== this && this.selected)
                this.selected = false;
            if (!el.selected) {
                el.selected = true;
            }
            // 多选情况下，已选中的再点击取消选择
            else if (isMutilSelect) {
                el.selected = false;
            }
            if ((event === null || event === void 0 ? void 0 : event.button) === 0)
                this.elementController && this.elementController.onDragStart(event);
            (event === null || event === void 0 ? void 0 : event.stopPropagation) && event.stopPropagation();
        }
        else {
            if (el.selected) {
                if (el.editable)
                    this.elementController && this.elementController.bind(el);
            }
            else
                this.elementController && this.elementController.unbind(el);
        }
    };
    JEditor.prototype.resize = function (width, height) {
        if (width === void 0) { width = this.data.width; }
        if (height === void 0) { height = this.data.height; }
        this.data.width = width;
        this.data.height = height;
        this.sizeChange(width, height);
    };
    // 尺寸改变响应
    JEditor.prototype.sizeChange = function (width, height) {
        if (width === void 0) { width = this.data.width; }
        if (height === void 0) { height = this.data.height; }
        this.attr('data-size', "".concat(width, "*").concat(height));
        this.emit('resize', {
            width: width,
            height: height
        });
    };
    // 添加元素到画布
    JEditor.prototype.addChild = function (child) {
        child.editor = this;
        return _super.prototype.addChild.call(this, child);
    };
    // 把domcument坐标转为编辑器相对坐标
    JEditor.prototype.toEditorPosition = function (pos, dom) {
        if (dom === void 0) { dom = this.target.dom; }
        return util.toDomPosition(pos, dom);
    };
    JEditor.prototype.clear = function () {
        this.css({
            'backgroundColor': '#fff',
            'backgroundImage': ''
        });
        /*for(let i=this.children.length-1;i>=0; i--) {
            const el = this.children[i];
            this.removeChild(el);
        }*/
        _super.prototype.clear.call(this);
        this.elementController && (this.elementController.data.visible = false);
    };
    // 缩放
    JEditor.prototype.scale = function (x, y) {
        if (y === void 0) { y = x; }
        if (x <= 0 || y <= 0)
            return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    };
    // 注册自定义组件
    JEditor.prototype.regShape = function (name, shape) {
        if (typeof name === 'object') {
            for (var n in name) {
                this.regShape(n, name[n]);
            }
            return;
        }
        if (this.shapes.has(name))
            console.warn("\u5143\u7D20\u7C7B\u578B".concat(name, "\u5DF2\u7ECF\u5B58\u5728"));
        this.shapes.set(name, shape);
        return shape;
    };
    // 创建元素
    JEditor.prototype.createShape = function (type, option) {
        if (option === void 0) { option = {}; }
        var shape = typeof type === 'string' ? this.shapes.get(type) : type;
        if (!shape) {
            //console.warn(`${type}不存在的元素类型`);
            var el_1 = new JHtmlElement(__assign(__assign({}, option), { editor: this, 
                // @ts-ignore
                nodeType: type }));
            return el_1;
        }
        // @ts-ignore
        var el = new shape(__assign(__assign({}, option), { editor: this, type: type }));
        return el;
    };
    // 加载data渲染图形
    JEditor.prototype.fromJSON = function (data) {
        var e_2, _a;
        this.clear();
        //if(typeof data === 'string') data = JSON.parse(data);
        if (data.style) {
            this.style.apply(__assign(__assign({}, data.style), editorDefaultStyle)); // 应用样式
        }
        this.resize(data.width || data.data.width, data.height || data.data.height);
        this.name = data.name || '';
        try {
            for (var _b = __values(data.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (!c.type)
                    continue;
                var item = this.createShape(c.type, c);
                item && this.addChild(item);
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
    /**
     * 生成编辑器对象
     * @param data
     * @param option
     */
    JEditor.create = function (option, data) {
        var editor = new JEditor(option);
        data && editor.fromJSON(data);
        return editor;
    };
    /**
     * 渲染成html结构
     * @param container 容器
     * @param data
     */
    JEditor.renderDom = function (data, option) {
        return __awaiter(this, void 0, void 0, function () {
            var editor, dom;
            return __generator(this, function (_a) {
                if (data instanceof JEditor) {
                    editor = data;
                }
                else {
                    option = __assign(__assign({}, option), { editable: false, style: {
                            transformOrigin: 'left top',
                        } });
                    editor = this.create(option, data);
                }
                dom = editor.dom;
                dom.style.position = 'relative';
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            var _a, _b, _c, _d;
                            var scale = {
                                x: 0,
                                y: 0
                            };
                            // 如果指定了宽度，则把dom缩放到指定的大小
                            if ((_b = (_a = editor.option) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.width) {
                                scale.x = util.toNumber(editor.option.data.width) / util.toNumber(editor.data.width);
                                scale.y = scale.x;
                            }
                            if ((_d = (_c = editor.option) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.height) {
                                scale.y = util.toNumber(editor.option.data.height) / util.toNumber(editor.data.height);
                                // 没有指定则保持比例
                                if (scale.x === 0) {
                                    scale.x = scale.y;
                                }
                            }
                            editor.scale(scale.x || 1, scale.y || 1);
                            resolve(editor);
                        }, 200);
                    })];
            });
        });
    };
    return JEditor;
}(JBase));
export default JEditor;
export { JEditor, JImage, JText, };

import util from 'j-design-util';
import JBaseComponent from './core/baseComponent';
import JText from './components/text';
import JImage from './components/image';
import JElement from './core/element';
import JEditor from './editor';
import JData from './constant/data';
import JEvent from './core/event';
import { filters as CssFilters } from 'j-css-filters';
export { JElementStyleDeclaration, JElementStyleProperty } from './constant/styleMap';
export * from './constant/data';
export * from './constant/types';
export { util, JEvent, JBaseComponent, JText, JData, JImage, JElement, JEditor, CssFilters };
export default JEditor;

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
import EventEmiter from 'j-eventemitter';
/**
 * JData 类：提供了一种方式来处理和管理数据
 * @public
 */
var JData = /** @class */ (function (_super) {
    __extends(JData, _super);
    function JData(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this) || this;
        /** 用于存放数据的对象 */
        _this.data = {};
        /** 存放数据变化的监听器 */
        _this.watcher = new Map();
        _this.from(data);
        return _this;
    }
    // 监控某个属性变化
    JData.prototype.watch = function (name, watcher) {
        var e_1, _a;
        if (Array.isArray(name)) {
            try {
                for (var name_1 = __values(name), name_1_1 = name_1.next(); !name_1_1.done; name_1_1 = name_1.next()) {
                    var n = name_1_1.value;
                    if (!n)
                        continue;
                    this.watch(n, watcher);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (name_1_1 && !name_1_1.done && (_a = name_1.return)) _a.call(name_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return this;
        }
        var watches = [];
        if (this.watcher.has(name))
            watches = this.watcher.get(name);
        else {
            this.watcher.set(name, watches);
        }
        watches.push(watcher);
        this.data[name] && this.propertyChange(name); // 触发一次
        return this;
    };
    // 属性改变
    JData.prototype.propertyChange = function (name, value) {
        var e_2, _a;
        if (typeof value !== 'undefined')
            this.data[name] = value;
        else {
            value = this.data[name];
        }
        var watches = this.watcher.get(name);
        if (watches && watches.length) {
            try {
                for (var watches_1 = __values(watches), watches_1_1 = watches_1.next(); !watches_1_1.done; watches_1_1 = watches_1.next()) {
                    var w = watches_1_1.value;
                    w && w.set && w.set({
                        name: name,
                        value: value
                    });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (watches_1_1 && !watches_1_1.done && (_a = watches_1.return)) _a.call(watches_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        this.emit('change', {
            name: name,
            value: value
        });
    };
    // 读取属性
    JData.prototype.getProperty = function (name) {
        var e_3, _a;
        var watches = this.watcher.get(name);
        if (watches && watches.length) {
            try {
                for (var watches_2 = __values(watches), watches_2_1 = watches_2.next(); !watches_2_1.done; watches_2_1 = watches_2.next()) {
                    var w = watches_2_1.value;
                    var v = w && w.get && w.get(name);
                    if (typeof v !== 'undefined')
                        return v;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (watches_2_1 && !watches_2_1.done && (_a = watches_2.return)) _a.call(watches_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return this.data[name];
    };
    /**
     * 从对象中导入数据到当前实例
     * @param data - 需导入的数据对象
     * @returns 返回当前 JData 实例
     */
    JData.prototype.from = function (data) {
        if (this.data)
            Object.assign(this, data);
        return this;
    };
    // 遍历
    JData.prototype.map = function (fun) {
        var e_4, _a;
        var props = Object.getOwnPropertyNames(this.data);
        var res = [];
        try {
            for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var name_2 = props_1_1.value;
                if (typeof this[name_2] === 'undefined' || typeof this[name_2] === 'function')
                    continue;
                var ret = fun && fun(name_2, this[name_2]);
                if (ret !== false) {
                    res.push({
                        name: name_2,
                        value: this[name_2]
                    });
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return res;
    };
    /**
     * 导出数据为 JSON 对象
     * @returns 返回 JSON 对象
     */
    JData.prototype.toJSON = function () {
        var obj = {};
        this.map(function (name, value) {
            obj[name] = value;
        });
        return obj;
    };
    // 生成数据Data
    JData.createProxy = function (data) {
        // 代理处理
        var proxy = new Proxy(data, {
            get: function (target, p, receiver) {
                var v = target[p];
                if (typeof v === 'undefined' && typeof p === 'string') {
                    return target.getProperty(p);
                }
                return v;
            },
            set: function (target, p, value, receiver) {
                if (typeof p === 'string')
                    target.propertyChange(p, value);
                else
                    target[p] = value;
                return true;
            }
        });
        return proxy;
    };
    return JData;
}(EventEmiter));
export default JData;
/**
 * 元素的基础数据类
 * @public
 */
var JElementData = /** @class */ (function (_super) {
    __extends(JElementData, _super);
    function JElementData(data) {
        if (data === void 0) { data = {}; }
        return _super.call(this, data) || this;
    }
    return JElementData;
}(JData));
export { JElementData };
/**
 * 图片元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
var JImageData = /** @class */ (function (_super) {
    __extends(JImageData, _super);
    function JImageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JImageData;
}(JElementData));
export { JImageData };
/**
 * svg
 * @public
 */
var JSvgData = /** @class */ (function (_super) {
    __extends(JSvgData, _super);
    function JSvgData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JSvgData;
}(JImageData));
export { JSvgData };
/**
 * 文本元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
var JTextData = /** @class */ (function (_super) {
    __extends(JTextData, _super);
    function JTextData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JTextData;
}(JElementData));
export { JTextData };

export {};

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
var Filter = /** @class */ (function () {
    function Filter(option) {
        if (option) {
            this.name = option.name;
            this.displayName = option.displayName;
            this.value = option.value;
        }
    }
    Filter.prototype.toString = function () {
        if (!this.name || !this.value)
            return '';
        return "".concat(this.name, "(").concat(this.value, ")");
    };
    Filter.prototype.toJSON = function () {
        return {
            name: this.name,
            displayName: this.displayName || '',
            value: this.value
        };
    };
    return Filter;
}());
export { Filter };
/**
 * 高斯模糊
 */
var BlurFilter = /** @class */ (function (_super) {
    __extends(BlurFilter, _super);
    function BlurFilter(option) {
        option = Object.assign({
            name: 'BlurFilter',
            displayName: '模糊',
            value: '10%'
        }, option);
        return _super.call(this, option) || this;
    }
    return BlurFilter;
}(Filter));
export { BlurFilter };
var filters = {
    BlurFilter: BlurFilter
};

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
import EventEmiter from 'j-eventemitter';
export var topZIndex = 10000;
/**
 * 支持的样式属性列表
 * @public
 */
var JElementStyleDeclaration = /** @class */ (function (_super) {
    __extends(JElementStyleDeclaration, _super);
    function JElementStyleDeclaration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JElementStyleDeclaration;
}(EventEmiter));
export { JElementStyleDeclaration };
/**
 * 样式属性集合
 * @public
 */
var JElementStyleProperty = /** @class */ (function () {
    function JElementStyleProperty() {
        this.accentColor = '';
        this.alignContent = '';
        this.alignItems = '';
        this.alignSelf = '';
        this.alignmentBaseline = '';
        this.all = '';
        this.animation = '';
        this.animationComposition = '';
        this.animationDelay = '';
        this.animationDirection = '';
        this.animationDuration = '';
        this.animationFillMode = '';
        this.animationIterationCount = '';
        this.animationName = '';
        this.animationPlayState = '';
        this.animationTimingFunction = '';
        this.appearance = '';
        this.aspectRatio = '';
        this.backdropFilter = '';
        this.backfaceVisibility = '';
        this.background = '';
        this.backgroundAttachment = '';
        this.backgroundBlendMode = '';
        this.backgroundClip = '';
        this.backgroundColor = '';
        this.backgroundImage = '';
        this.backgroundOrigin = '';
        this.backgroundPosition = '';
        this.backgroundPositionX = '';
        this.backgroundPositionY = '';
        this.backgroundRepeat = '';
        this.backgroundSize = '';
        this.baselineShift = '';
        this.blockSize = '';
        this.border = '';
        this.borderBlock = '';
        this.borderBlockColor = '';
        this.borderBlockEnd = '';
        this.borderBlockEndColor = '';
        this.borderBlockEndStyle = '';
        this.borderBlockEndWidth = '';
        this.borderBlockStart = '';
        this.borderBlockStartColor = '';
        this.borderBlockStartStyle = '';
        this.borderBlockStartWidth = '';
        this.borderBlockStyle = '';
        this.borderBlockWidth = '';
        this.borderBottom = '';
        this.borderBottomColor = '';
        this.borderBottomLeftRadius = '';
        this.borderBottomRightRadius = '';
        this.borderBottomStyle = '';
        this.borderBottomWidth = '';
        this.borderCollapse = '';
        this.borderColor = '';
        this.borderEndEndRadius = '';
        this.borderEndStartRadius = '';
        this.borderImage = '';
        this.borderImageOutset = '';
        this.borderImageRepeat = '';
        this.borderImageSlice = '';
        this.borderImageSource = '';
        this.borderImageWidth = '';
        this.borderInline = '';
        this.borderInlineColor = '';
        this.borderInlineEnd = '';
        this.borderInlineEndColor = '';
        this.borderInlineEndStyle = '';
        this.borderInlineEndWidth = '';
        this.borderInlineStart = '';
        this.borderInlineStartColor = '';
        this.borderInlineStartStyle = '';
        this.borderInlineStartWidth = '';
        this.borderInlineStyle = '';
        this.borderInlineWidth = '';
        this.borderLeft = '';
        this.borderLeftColor = '';
        this.borderLeftStyle = '';
        this.borderLeftWidth = '';
        this.borderRadius = '';
        this.borderRight = '';
        this.borderRightColor = '';
        this.borderRightStyle = '';
        this.borderRightWidth = '';
        this.borderSpacing = '';
        this.borderStartEndRadius = '';
        this.borderStartStartRadius = '';
        this.borderStyle = '';
        this.borderTop = '';
        this.borderTopColor = '';
        this.borderTopLeftRadius = '';
        this.borderTopRightRadius = '';
        this.borderTopStyle = '';
        this.borderTopWidth = '';
        this.borderWidth = '';
        this.bottom = '';
        this.boxShadow = '';
        this.boxSizing = '';
        this.breakAfter = '';
        this.breakBefore = '';
        this.breakInside = '';
        this.captionSide = '';
        this.caretColor = '';
        this.clear = '';
        this.clip = '';
        this.clipPath = '';
        this.clipRule = '';
        this.color = '';
        this.colorInterpolation = '';
        this.colorInterpolationFilters = '';
        this.colorScheme = '';
        this.columnCount = '';
        this.columnFill = '';
        this.columnGap = '';
        this.columnRule = '';
        this.columnRuleColor = '';
        this.columnRuleStyle = '';
        this.columnRuleWidth = '';
        this.columnSpan = '';
        this.columnWidth = '';
        this.columns = '';
        this.contain = '';
        this.containIntrinsicBlockSize = '';
        this.containIntrinsicHeight = '';
        this.containIntrinsicInlineSize = '';
        this.containIntrinsicSize = '';
        this.containIntrinsicWidth = '';
        this.container = '';
        this.containerName = '';
        this.containerType = '';
        this.content = '';
        this.counterIncrement = '';
        this.counterReset = '';
        this.counterSet = '';
        this.cssFloat = '';
        this.cssText = '';
        this.cursor = '';
        this.direction = '';
        this.display = '';
        this.dominantBaseline = '';
        this.emptyCells = '';
        this.fill = '';
        this.fillOpacity = '';
        this.fillRule = '';
        this.filter = '';
        this.flex = '';
        this.flexBasis = '';
        this.flexDirection = '';
        this.flexFlow = '';
        this.flexGrow = '';
        this.flexShrink = '';
        this.flexWrap = '';
        this.float = '';
        this.floodColor = '';
        this.floodOpacity = '';
        this.font = '';
        this.fontFamily = '';
        this.fontFeatureSettings = '';
        this.fontKerning = '';
        this.fontOpticalSizing = '';
        this.fontPalette = '';
        this.fontSize = '';
        this.fontSizeAdjust = '';
        this.fontStretch = '';
        this.fontStyle = '';
        this.fontSynthesis = '';
        this.fontSynthesisSmallCaps = '';
        this.fontSynthesisStyle = '';
        this.fontSynthesisWeight = '';
        this.fontVariant = '';
        this.fontVariantAlternates = '';
        this.fontVariantCaps = '';
        this.fontVariantEastAsian = '';
        this.fontVariantLigatures = '';
        this.fontVariantNumeric = '';
        this.fontVariantPosition = '';
        this.fontVariationSettings = '';
        this.fontWeight = '';
        this.forcedColorAdjust = '';
        this.gap = '';
        this.grid = '';
        this.gridArea = '';
        this.gridAutoColumns = '';
        this.gridAutoFlow = '';
        this.gridAutoRows = '';
        this.gridColumn = '';
        this.gridColumnEnd = '';
        this.gridColumnGap = '';
        this.gridColumnStart = '';
        this.gridGap = '';
        this.gridRow = '';
        this.gridRowEnd = '';
        this.gridRowGap = '';
        this.gridRowStart = '';
        this.gridTemplate = '';
        this.gridTemplateAreas = '';
        this.gridTemplateColumns = '';
        this.gridTemplateRows = '';
        this.height = '';
        this.hyphenateCharacter = '';
        this.hyphens = '';
        this.imageOrientation = '';
        this.imageRendering = '';
        this.inlineSize = '';
        this.inset = '';
        this.insetBlock = '';
        this.insetBlockEnd = '';
        this.insetBlockStart = '';
        this.insetInline = '';
        this.insetInlineEnd = '';
        this.insetInlineStart = '';
        this.isolation = '';
        this.justifyContent = '';
        this.justifyItems = '';
        this.justifySelf = '';
        this.left = '';
        this.letterSpacing = '';
        this.lightingColor = '';
        this.lineBreak = '';
        this.lineHeight = '';
        this.listStyle = '';
        this.listStyleImage = '';
        this.listStylePosition = '';
        this.listStyleType = '';
        this.margin = '';
        this.marginBlock = '';
        this.marginBlockEnd = '';
        this.marginBlockStart = '';
        this.marginBottom = '';
        this.marginInline = '';
        this.marginInlineEnd = '';
        this.marginInlineStart = '';
        this.marginLeft = '';
        this.marginRight = '';
        this.marginTop = '';
        this.marker = '';
        this.markerEnd = '';
        this.markerMid = '';
        this.markerStart = '';
        this.mask = '';
        this.maskClip = '';
        this.maskComposite = '';
        this.maskImage = '';
        this.maskMode = '';
        this.maskOrigin = '';
        this.maskPosition = '';
        this.maskRepeat = '';
        this.maskSize = '';
        this.maskType = '';
        this.mathStyle = '';
        this.maxBlockSize = '';
        this.maxHeight = '';
        this.maxInlineSize = '';
        this.maxWidth = '';
        this.minBlockSize = '';
        this.minHeight = '';
        this.minInlineSize = '';
        this.minWidth = '';
        this.mixBlendMode = '';
        this.objectFit = '';
        this.objectPosition = '';
        this.offset = '';
        this.offsetDistance = '';
        this.offsetPath = '';
        this.offsetRotate = '';
        this.opacity = '';
        this.order = '';
        this.orphans = '';
        this.outline = '';
        this.outlineColor = '';
        this.outlineOffset = '';
        this.outlineStyle = '';
        this.outlineWidth = '';
        this.overflow = '';
        this.overflowAnchor = '';
        this.overflowClipMargin = '';
        this.overflowWrap = '';
        this.overflowX = '';
        this.overflowY = '';
        this.overscrollBehavior = '';
        this.overscrollBehaviorBlock = '';
        this.overscrollBehaviorInline = '';
        this.overscrollBehaviorX = '';
        this.overscrollBehaviorY = '';
        this.padding = '';
        this.paddingBlock = '';
        this.paddingBlockEnd = '';
        this.paddingBlockStart = '';
        this.paddingBottom = '';
        this.paddingInline = '';
        this.paddingInlineEnd = '';
        this.paddingInlineStart = '';
        this.paddingLeft = '';
        this.paddingRight = '';
        this.paddingTop = '';
        this.page = '';
        this.pageBreakAfter = '';
        this.pageBreakBefore = '';
        this.pageBreakInside = '';
        this.paintOrder = '';
        this.perspective = '';
        this.perspectiveOrigin = '';
        this.placeContent = '';
        this.placeItems = '';
        this.placeSelf = '';
        this.pointerEvents = '';
        this.position = '';
        this.printColorAdjust = '';
        this.quotes = '';
        this.resize = '';
        this.right = '';
        this.rotate = '';
        this.rowGap = '';
        this.rubyPosition = '';
        this.scale = '';
        this.scrollBehavior = '';
        this.scrollMargin = '';
        this.scrollMarginBlock = '';
        this.scrollMarginBlockEnd = '';
        this.scrollMarginBlockStart = '';
        this.scrollMarginBottom = '';
        this.scrollMarginInline = '';
        this.scrollMarginInlineEnd = '';
        this.scrollMarginInlineStart = '';
        this.scrollMarginLeft = '';
        this.scrollMarginRight = '';
        this.scrollMarginTop = '';
        this.scrollPadding = '';
        this.scrollPaddingBlock = '';
        this.scrollPaddingBlockEnd = '';
        this.scrollPaddingBlockStart = '';
        this.scrollPaddingBottom = '';
        this.scrollPaddingInline = '';
        this.scrollPaddingInlineEnd = '';
        this.scrollPaddingInlineStart = '';
        this.scrollPaddingLeft = '';
        this.scrollPaddingRight = '';
        this.scrollPaddingTop = '';
        this.scrollSnapAlign = '';
        this.scrollSnapStop = '';
        this.scrollSnapType = '';
        this.scrollbarGutter = '';
        this.shapeImageThreshold = '';
        this.shapeMargin = '';
        this.shapeOutside = '';
        this.shapeRendering = '';
        this.stopColor = '';
        this.stopOpacity = '';
        this.stroke = '';
        this.strokeDasharray = '';
        this.strokeDashoffset = '';
        this.strokeLinecap = '';
        this.strokeLinejoin = '';
        this.strokeMiterlimit = '';
        this.strokeOpacity = '';
        this.strokeWidth = '';
        this.tabSize = '';
        this.tableLayout = '';
        this.textAlign = '';
        this.textAlignLast = '';
        this.textAnchor = '';
        this.textCombineUpright = '';
        this.textDecoration = '';
        this.textDecorationColor = '';
        this.textDecorationLine = '';
        this.textDecorationSkipInk = '';
        this.textDecorationStyle = '';
        this.textDecorationThickness = '';
        this.textEmphasis = '';
        this.textEmphasisColor = '';
        this.textEmphasisPosition = '';
        this.textEmphasisStyle = '';
        this.textIndent = '';
        this.textOrientation = '';
        this.textOverflow = '';
        this.textRendering = '';
        this.textShadow = '';
        this.textTransform = '';
        this.textUnderlineOffset = '';
        this.textUnderlinePosition = '';
        this.top = '';
        this.touchAction = '';
        this.transform = '';
        this.transformBox = '';
        this.transformOrigin = '';
        this.transformStyle = '';
        this.transition = '';
        this.transitionDelay = '';
        this.transitionDuration = '';
        this.transitionProperty = '';
        this.transitionTimingFunction = '';
        this.translate = '';
        this.unicodeBidi = '';
        this.userSelect = '';
        this.verticalAlign = '';
        this.visibility = '';
        this.webkitAlignContent = '';
        this.webkitAlignItems = '';
        this.webkitAlignSelf = '';
        this.webkitAnimation = '';
        this.webkitAnimationDelay = '';
        this.webkitAnimationDirection = '';
        this.webkitAnimationDuration = '';
        this.webkitAnimationFillMode = '';
        this.webkitAnimationIterationCount = '';
        this.webkitAnimationName = '';
        this.webkitAnimationPlayState = '';
        this.webkitAnimationTimingFunction = '';
        this.webkitAppearance = '';
        this.webkitBackfaceVisibility = '';
        this.webkitBackgroundClip = '';
        this.webkitBackgroundOrigin = '';
        this.webkitBackgroundSize = '';
        this.webkitBorderBottomLeftRadius = '';
        this.webkitBorderBottomRightRadius = '';
        this.webkitBorderRadius = '';
        this.webkitBorderTopLeftRadius = '';
        this.webkitBorderTopRightRadius = '';
        this.webkitBoxAlign = '';
        this.webkitBoxFlex = '';
        this.webkitBoxOrdinalGroup = '';
        this.webkitBoxOrient = '';
        this.webkitBoxPack = '';
        this.webkitBoxShadow = '';
        this.webkitBoxSizing = '';
        this.webkitFilter = '';
        this.webkitFlex = '';
        this.webkitFlexBasis = '';
        this.webkitFlexDirection = '';
        this.webkitFlexFlow = '';
        this.webkitFlexGrow = '';
        this.webkitFlexShrink = '';
        this.webkitFlexWrap = '';
        this.webkitJustifyContent = '';
        this.webkitLineClamp = '';
        this.webkitMask = '';
        this.webkitMaskBoxImage = '';
        this.webkitMaskBoxImageOutset = '';
        this.webkitMaskBoxImageRepeat = '';
        this.webkitMaskBoxImageSlice = '';
        this.webkitMaskBoxImageSource = '';
        this.webkitMaskBoxImageWidth = '';
        this.webkitMaskClip = '';
        this.webkitMaskComposite = '';
        this.webkitMaskImage = '';
        this.webkitMaskOrigin = '';
        this.webkitMaskPosition = '';
        this.webkitMaskRepeat = '';
        this.webkitMaskSize = '';
        this.webkitOrder = '';
        this.webkitPerspective = '';
        this.webkitPerspectiveOrigin = '';
        this.webkitTextFillColor = '';
        this.webkitTextSizeAdjust = '';
        this.webkitTextStroke = '';
        this.webkitTextStrokeColor = '';
        this.webkitTextStrokeWidth = '';
        this.webkitTransform = '';
        this.webkitTransformOrigin = '';
        this.webkitTransformStyle = '';
        this.webkitTransition = '';
        this.webkitTransitionDelay = '';
        this.webkitTransitionDuration = '';
        this.webkitTransitionProperty = '';
        this.webkitTransitionTimingFunction = '';
        this.webkitUserSelect = '';
        this.whiteSpace = '';
        this.widows = '';
        this.width = '';
        this.willChange = '';
        this.wordBreak = '';
        this.wordSpacing = '';
        this.wordWrap = '';
        this.writingMode = '';
        this.zIndex = 0;
    }
    return JElementStyleProperty;
}());
export { JElementStyleProperty };
/**
 * @public
 */
var JElementCssStyle = /** @class */ (function (_super) {
    __extends(JElementCssStyle, _super);
    function JElementCssStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(JElementCssStyle.prototype, "names", {
        // 所有样式名称
        get: function () {
            var e_1, _a;
            if (!JElementCssStyle.styleNamesMap.length) {
                var map = new JElementStyleProperty();
                var keys = Object.getOwnPropertyNames(map);
                try {
                    for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                        var k = keys_1_1.value;
                        var t = typeof map[k];
                        if (t === 'string' || t === 'number')
                            JElementCssStyle.styleNamesMap.push(k);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return JElementCssStyle.styleNamesMap;
        },
        enumerable: false,
        configurable: true
    });
    JElementCssStyle.styleNamesMap = [];
    return JElementCssStyle;
}(JElementStyleDeclaration));
export default JElementCssStyle;
// 最外层容器默认样式
export var ContainerDefaultStyle = {
    position: 'absolute',
    left: '0',
    top: '0',
    width: 'auto',
    height: 'auto',
    right: 'auto',
    bottom: 'auto',
    //padding: '0',
    transformOrigin: 'center center',
    transform: 'none',
    //"paddingTop": '0',
    //"paddingLeft": '0',
    //"paddingRight": '0',
    //"paddingBottom": '0',
    //margin: '0',
    //"marginTop": '0',
    //"marginLeft": '0',
    //"marginRight": '0',
    //"marginBottom": '0',
    zIndex: '0',
    display: 'inline-block',
    overflow: 'visible',
    'filter': 'none',
};
/**
 * 默认编辑器样式
 */
export var editorDefaultCssContent = ".j-design-editor-container {\n        border: none;\n        box-sizing: content-box;\n    }.j-design-editor-container * {\n        box-sizing: content-box;\n    }\n    .j-design-editor-container.selected {\n        box-shadow: 0 0 1px rgba(6,155,181,1);\n    }\n    .j-design-editor-container:hover {\n        box-shadow: 0 0 2px 2px rgba(0,0,0,0.3);\n    }\n    .j-design-editor-controller .item-move,.j-design-editor-controller .item-scale {\n        box-shadow: 0 0 2px 2px #eee;\n        opacity: 0.3;\n    }\n    .j-design-editor-controller .item-move:hover,.j-design-editor-controller .item-scale:hover {\n        opacity: 0.9;\n    }\n    .j-design-editor-controller .item-rotate {\n        opacity: 0.5;\n    }\n    .j-design-editor-controller .item-rotate:hover {\n        opacity: 1;\n    }\n    .j-design-editor-container div[contenteditable=\"true\"]:empty:before{\n        content: ' ';\n        -webkit-tap-highlight-color:transparent;\n        -webkit-user-modify:read-write;\n        outline:none;\n        border:none;\n    }\n    ";
// 编辑器默认样式，并且不可改
export var editorDefaultStyle = {
    'boxShadow': '0 0 10px 10px #ccc',
    'position': 'absolute',
    //'backgroundSize': '100% 100%',   
    'left': '0',
    'top': '0',
    'right': '0',
    'bottom': '0'
    //transformOrigin: 'center top',         
};

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
import EventEmiter from 'j-eventemitter';
import util from 'j-design-util';
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
            var x = this.translateX;
            if (util.isNumber(x))
                x = util.toPX(x);
            return "translateX(".concat(x, ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "translateYString", {
        get: function () {
            var y = this.translateY;
            if (util.isNumber(y))
                y = util.toPX(y);
            return "translateY(".concat(y, ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "translateZString", {
        get: function () {
            var x = this.translateZ;
            if (util.isNumber(x))
                x = util.toPX(x);
            return "translateZ(".concat(x, ")");
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

import JElementCssStyle from './styleMap';
export { JElementCssStyle };

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
import Base from '../core/baseComponent';
import { JElementData } from '../constant/data';
var JContainer = /** @class */ (function (_super) {
    __extends(JContainer, _super);
    function JContainer(option) {
        if (option === void 0) { option = {}; }
        return _super.call(this, __assign(__assign({}, option), { type: option.type || 'div', dataType: option.dataType || JElementData })) || this;
    }
    Object.defineProperty(JContainer.prototype, "typeName", {
        /**
         * 类型名称
         */
        get: function () {
            return 'container';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JContainer.prototype, "children", {
        // 重写子集为target
        get: function () {
            return this.target.children;
        },
        enumerable: false,
        configurable: true
    });
    return JContainer;
}(Base));
export default JContainer;

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
import Base from '../core/baseComponent';
import { JImageData } from '../constant/data';
/**
 * 图像组件类 JImage，继承于基础组件 Base。
 * @public
 */
var JImage = /** @class */ (function (_super) {
    __extends(JImage, _super);
    /**
     * JImage组件构造函数。
     * @param option - 图像选项，包括 url, src 等。
     */
    function JImage(option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        var _a, _b;
        if (!option.style)
            option.style = {};
        option.style.overflow = 'hidden';
        _this = _super.call(this, __assign(__assign({}, option), { nodeType: 'img', type: option.type || 'image', dataType: option.dataType || JImageData })) || this;
        // 如果保持宽高比，则不能拉伸到100%高
        if (option.preserveRatio || ((_b = (_a = option.target) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.height) === 'auto') {
            _this.target.style.height = 'auto';
        }
        // 图像加载完成时触发 'load' 事件
        _this.target.dom.onload = function (e) {
            _this.emit('load', e);
        };
        // 图像加载错误时触发 'error' 事件
        _this.target.dom.onerror = function (e) {
            _this.emit('error', e);
        };
        // 允许跨域获取图像资源（避免CORS问题）
        _this.target.attr('crossorigin', 'anonymous');
        // 'src' 属性变化映射到 style
        _this.data.watch([
            'src'
        ], {
            // 设置 'src' 属性
            set: function (item) {
                if (item.name === 'src')
                    _this.target.dom.src = item.value;
            },
            get: function (name) {
                if (name === 'src')
                    return _this.target.dom.src;
            }
        });
        // 如果在选项中提供，设置 'src' 或 'url' 属性
        // @ts-ignore
        var src = option.url || option.src;
        if (src)
            _this.data.src = src;
        return _this;
    }
    Object.defineProperty(JImage.prototype, "typeName", {
        /**
         * 类型名称
         */
        get: function () {
            return 'image';
        },
        enumerable: false,
        configurable: true
    });
    // 设置css到dom
    JImage.prototype.setDomStyle = function (name, value) {
        // transform应用于图片元素上面
        if (name === 'transform') {
            return this.target && this.target.setDomStyle(name, value);
        }
        return _super.prototype.setDomStyle.call(this, name, value);
    };
    JImage.prototype.toJSON = function (props) {
        if (props === void 0) { props = []; }
        return _super.prototype.toJSON.call(this, __spreadArray([
            'filters'
        ], __read(props), false));
    };
    return JImage;
}(Base));
export default JImage;

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
import Base from '../core/baseComponent';
import util from 'j-design-util';
import { JSvgData } from '../constant/data';
import JElement from '../core/element';
var JSvg = /** @class */ (function (_super) {
    __extends(JSvg, _super);
    function JSvg(option) {
        if (option === void 0) { option = {}; }
        var _this = _super.call(this, __assign(__assign({}, option), { type: option.type || 'svg', nodeType: 'svg', dataType: option.dataType || JSvgData })) || this;
        // 属性变化映射到style
        _this.data.watch([
            'url', 'svg', 'src'
        ], {
            set: function (item) {
                if (item.name === 'url') {
                    _this.load(item.value);
                }
                if (item.name === 'src') {
                    _this.data.url = item.value;
                }
                else if (item.name === 'svg') {
                    _this.target.dom.innerHTML = item.value;
                }
            }
        });
        return _this;
    }
    Object.defineProperty(JSvg.prototype, "typeName", {
        /**
         * 类型名称
         */
        get: function () {
            return 'svg';
        },
        enumerable: false,
        configurable: true
    });
    // 添加元素到画布
    JSvg.prototype.addChild = function (child) {
        var e_1, _a;
        var _b, _c, _d;
        if (child === this.target || child instanceof Element || !(child instanceof Base)) {
            return _super.prototype.addChild.call(this, child);
        }
        var children = ((_b = child.option) === null || _b === void 0 ? void 0 : _b.children) || ((_d = (_c = child.option) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.children);
        if (children === null || children === void 0 ? void 0 : children.length) {
            try {
                for (var _e = __values(child.option.children), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var opt = _f.value;
                    var c = this.createSvgElement(opt.type || opt.nodeType, opt);
                    c && child.addChild(c);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return child;
    };
    JSvg.prototype.createSvgElement = function (tag, node) {
        var el = new JElement(__assign(__assign({}, node), { nodeType: tag }));
        this.renderSvgElement(node, el);
        return el;
    };
    // 设置dom属性
    JSvg.prototype.renderSvgElement = function (node, el) {
        var e_2, _a;
        // @ts-ignore
        if (node.preserveRatio && node.type === 'img')
            el.style.height = 'auto';
        // @ts-ignore
        if (node.fill)
            el.attr('fill', node.fill);
        if (node.id)
            el.attr('id', node.id);
        if (node.name)
            el.attr('data-name', node.name);
        if (node.children) {
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    if (child.visible === false)
                        continue;
                    var c = this.createSvgElement(child.type || child.nodeType, child);
                    c && el.addChild(c);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return el;
    };
    // 加载svg内容
    JSvg.prototype.load = function (url) {
        if (url === void 0) { url = this.data.url; }
        return __awaiter(this, void 0, void 0, function () {
            var svg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, util.request(url)];
                    case 1:
                        svg = _a.sent();
                        this.data.svg = svg;
                        return [2 /*return*/];
                }
            });
        });
    };
    return JSvg;
}(Base));
export default JSvg;

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
import Base from '../core/baseComponent';
import { JTextData } from '../constant/data';
import util from 'j-design-util';
import JHtmlElement from '../core/baseHtmlElement';
/**
 * 文本组件类 JText，继承于基础组件 Base。
 * @public
 */
var JText = /** @class */ (function (_super) {
    __extends(JText, _super);
    /**
     * JText组件构造函数。
     * @example
     * ```
     * const textInstance = new JText({
     *   text: 'Hello World',
     *   style: {
     *     color: 'red',
     *     fontSize: '18px'
     *   }
     * });
     * ```
     * @param option - 文本组件选项，包括 text, style 等。
     */
    function JText(option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        var _a, _b;
        option.style = __assign({ fontFamily: 'Arial', textAlign: 'left', fontSize: 22, fontWeight: 'normal', fontStyle: 'normal' }, option.style);
        _this = _super.call(this, __assign(__assign({}, option), { nodeType: 'div', type: option.type || 'text', dataType: option.dataType || JTextData })) || this;
        _this.isChildrenMode = false; // 是否是多子元素模式，如果是就会采用var节点处理文本
        // 多子元素, 这种模式下不需要data.text属性
        if ((_a = option.children) === null || _a === void 0 ? void 0 : _a.length) {
            _this.isChildrenMode = true;
            (_b = _this.data) === null || _b === void 0 ? true : delete _b.text;
        }
        // 'text' 属性变化映射到 innerText
        _this.data.watch([
            'text', 'fontFamily', 'fontSize'
        ], {
            set: function (item) {
                var _a, _b;
                if (item.name === 'text') {
                    if (!_this.isChildrenMode) {
                        if ((_a = item.value) === null || _a === void 0 ? void 0 : _a.includes('\n')) {
                            _this.isChildrenMode = true;
                        }
                        else {
                            _this.target.dom.textContent = item.value;
                            return;
                        }
                    }
                    if (_this.isChildrenMode) {
                        _this.clear();
                        _this.target.dom.innerHTML = '';
                    }
                    if ((_b = item.value) === null || _b === void 0 ? void 0 : _b.includes('\n')) {
                        _this.target.dom.innerHTML = item.value.replace(/\n/g, '<br />');
                    }
                    else {
                        _this.target.dom.innerHTML = item.value;
                    }
                }
                else
                    _this.style[item.name] = item.value;
            },
            get: function (name) {
                if (name === 'text') {
                    return _this.text;
                }
                else
                    return _this.style[name];
            }
        });
        // 如果在选项中提供，设置 'text' 属性
        // @ts-ignore
        var text = option.text;
        if (text && !_this.isChildrenMode)
            _this.data.text = text;
        // 添加双击事件监听器，进入编辑状态
        _this.on('dblclick', function (e) {
            _this.edit(e);
        });
        // 添加选择事件监听器，退出编辑状态
        _this.on('select', function () {
            if (!_this.selected)
                _this.closeEdit();
        });
        _this.target.on('click', function (e) {
            util.setRange(_this.target.dom, e); // 光标位置在点击位置
        });
        _this.target.on('blur', function () {
            _this.closeEdit();
        });
        return _this;
        //JText.TextControlCache.set(this.id, this);// 缓存起来
    }
    Object.defineProperty(JText.prototype, "typeName", {
        // 所有 JText 实例的缓存
        //static TextControlCache = new Map<string, JText>();
        /**
         * 类型名称
         */
        get: function () {
            return 'text';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JText.prototype, "contenteditable", {
        /**
         * 当前编辑状态
         */
        get: function () {
            return util.attr(this.target.dom, 'contenteditable');
        },
        set: function (v) {
            if (!this.editable && v)
                return; // 组件不支持编辑则不处理
            util.attr(this.target.dom, 'contenteditable', v.toString());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JText.prototype, "text", {
        // 当前显示的文本
        get: function () {
            return this.target.dom.textContent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JText.prototype, "children", {
        /**
         * 文本的子元素有点特殊，因为编辑过后，可能存在 text node，需要一并处理
         */
        get: function () {
            var e_1, _a, e_2, _b;
            if (!this.isChildrenMode)
                return this._children;
            var children = [];
            try {
                for (var _c = __values(this.target.dom.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var node = _d.value;
                    if (node.nodeName === '#text') {
                        var el = new JHtmlElement({
                            type: 'var',
                            data: {
                                text: node.textContent
                            }
                        });
                        children.push(el);
                    }
                    else if (node.nodeName === 'BR') {
                        var el = new JHtmlElement({
                            type: 'br',
                            data: {}
                        });
                        children.push(el);
                    }
                    else {
                        var id = util.attr(node, 'data-id');
                        if (id) {
                            try {
                                for (var _e = (e_2 = void 0, __values(this._children)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    var c = _f.value;
                                    if (c.id === id) {
                                        c.data.text = node.textContent;
                                        children.push(c);
                                        break;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return children;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 进入文本编辑状态
     */
    JText.prototype.edit = function (e) {
        if (!this.editable)
            return;
        this.editor.elementController.visible = false;
        this.contenteditable = true; // 编辑态
        var dom = (e.target || this.target.dom);
        util.setRange(dom, e); // 光标位置在最后
        dom.focus && dom.focus(); // 进入控件
    };
    JText.prototype.toJSON = function (props) {
        var _a;
        if (props === void 0) { props = []; }
        var obj = _super.prototype.toJSON.call(this, props);
        // 如果文本包含在子元素中，就不需要赋值 data
        if (this.isChildrenMode)
            (_a = obj.data) === null || _a === void 0 ? true : delete _a.text;
        return obj;
    };
    /**
     * 退出文本编辑状态
     */
    JText.prototype.closeEdit = function () {
        this.contenteditable = false;
    };
    /**
     * 移除 JText 实例
     */
    JText.prototype.dispose = function () {
        //JText.TextControlCache.delete(this.id);
        _super.prototype.dispose.call(this);
    };
    return JText;
}(Base));
export default JText;

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
import util from 'j-design-util';
import CssFilterManager from 'j-css-filters';
import { ContainerDefaultStyle } from '../constant/styleMap';
import { SupportEventNames, ElementWatchEventNames } from '../core/event';
import JElement from '../core/element';
/**
 * @public
 */
var JBaseComponent = /** @class */ (function (_super) {
    __extends(JBaseComponent, _super);
    function JBaseComponent(option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        option.style = option.style || {};
        // position和overflow预设的值优先级最高
        option.style = Object.assign(__assign({}, ContainerDefaultStyle), option.style, {
        //position: ContainerDefaultStyle.position,
        //overflow: ContainerDefaultStyle.overflow
        });
        _this = _super.call(this, __assign(__assign({}, option), { 
            //transformWatchProps: null,
            nodeType: 'div', className: 'j-design-editor-container' })) || this;
        /**
         * 是否支持移动
         */
        _this.moveable = true;
        // 选中
        _this._selected = false;
        option.target = option.target || {};
        var targetOption = __assign(__assign({}, (option.target || option)), { visible: true, data: {}, transformWatchProps: null, style: {
                display: 'block',
                cursor: 'pointer',
                width: '100%',
                height: '100%',
            } });
        // 是否可以移动
        if (typeof option.moveable === 'boolean')
            _this.moveable = option.moveable;
        if (!targetOption.nodeType)
            targetOption.nodeType = option.nodeType;
        // 生成当前控制的元素
        _this.target = new JElement(targetOption);
        _this.addChild(_this.target.dom);
        // 变换改为控制主元素
        /*this.transform.bind({
            target: this.target,
            watchProps: [
                'rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY'
            ]
        });*/
        _this.filters = new CssFilterManager(_this, option.filters); // 滤镜
        _this.data.on('change', function (e) {
            _this.emit('dataChange', {
                type: 'dataChange',
                target: _this,
                data: e
            });
        });
        return _this;
    }
    Object.defineProperty(JBaseComponent.prototype, "typeName", {
        /**
         * 类型名称
         */
        get: function () {
            return 'base';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JBaseComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (v) {
            this._selected = v;
            // 如果选中则加上样式
            util.class(this.dom, 'selected', !v);
            this.emit('select', {
                type: 'select',
                target: this,
                selected: v
            });
        },
        enumerable: false,
        configurable: true
    });
    // 设置层级，指定数字或操作, next下一层，pre上一层，top顶层，bottom最底层
    JBaseComponent.prototype.setLevel = function (level) {
        var _this = this;
        if (typeof level === 'number')
            this.data.zIndex = level;
        if (!this.parent)
            return;
        var maxLevel = this.parent.childrenMaxLevel;
        switch (level) {
            case 'next': {
                var res = this.getMyNextLevelChildren();
                if (res.level < 0)
                    this.data.zIndex = 0; // 如果没找到下一层的，则直接赋到bottom层0
                else {
                    res.elements.map(function (el) {
                        el.data.zIndex = _this.data.zIndex;
                    });
                    this.data.zIndex = res.level;
                }
                break;
            }
            case 'pre': {
                var res = this.getMyPreLevelChildren();
                if (res.level < 0)
                    this.data.zIndex = maxLevel; // 如果没找到上一层的，则直接赋到top层
                else {
                    res.elements.map(function (el) {
                        el.data.zIndex = _this.data.zIndex;
                    });
                    this.data.zIndex = res.level;
                }
                break;
            }
            case 'top': {
                this.data.zIndex = maxLevel + 1;
                break;
            }
            case 'bottom': {
                this.parent.children.map(function (el) {
                    el !== _this && (el.data.zIndex += 1);
                }); // 所有子元素上移一层，除了当前元素
                this.data.zIndex = 0;
            }
        }
    };
    // 获取我下一层的所有元素
    JBaseComponent.prototype.getMyNextLevelChildren = function () {
        var elements = [];
        if (!this.parent)
            return;
        var children = this.parent.childrenSort();
        var nextLevel = -1;
        for (var i = children.length - 1; i >= 0; i--) {
            var c = children[i];
            if (c.data.zIndex < this.data.zIndex && c !== this) {
                if (nextLevel < 0)
                    nextLevel = c.data.zIndex;
                if (c.data.zIndex === nextLevel)
                    elements.push(c);
            }
        }
        return {
            elements: elements,
            level: nextLevel
        };
    };
    // 获取我上一层的所有元素
    JBaseComponent.prototype.getMyPreLevelChildren = function () {
        var elements = [];
        if (!this.parent)
            return;
        var children = this.parent.childrenSort();
        var preLevel = -1;
        for (var i = 0; i < children.length; i++) {
            var c = children[i];
            if (c.data.zIndex > this.data.zIndex && c !== this) {
                if (preLevel < 0)
                    preLevel = c.data.zIndex;
                if (c.data.zIndex === preLevel)
                    elements.push(c);
            }
        }
        return {
            elements: elements,
            level: preLevel
        };
    };
    // 添加元素到画布
    JBaseComponent.prototype.addChild = function (child) {
        var e_1, _a;
        var _b, _c;
        if (child === this)
            return child;
        if (child === this.target || child === this.target.dom) {
            return _super.prototype.addChild.call(this, child);
        }
        // 非组件直接加到target中
        if (!(child instanceof JBaseComponent)) {
            var el = this.target.addChild(child);
            if (child instanceof JElement) {
                this._children.push(child);
            }
            return child;
        }
        this.bindElementEvent(child);
        child.parent = this; // 把父设置成编辑器
        child.editor = child.editor || this.editor;
        child.editable = this.editable; // 当前是否可编辑
        // 刷新样式
        child.style.refresh();
        this.target.addChild(child);
        // SVG内部自行处理
        if (child.type === 'svg') {
            return child.addChild(child);
        }
        if ((_c = (_b = child.option) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.length) {
            try {
                for (var _d = __values(child.option.children), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var opt = _e.value;
                    var c = child.editor.createShape(opt.type, opt);
                    c && child.addChild(c);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    // 移除
    JBaseComponent.prototype.removeChild = function (el) {
        if (el === this.target) {
            //console.warn('不能移除自已');
            return;
        }
        this.target.removeChild(el);
        _super.prototype.removeChild.call(this, el);
        if (el instanceof JElement) {
            el.off(SupportEventNames);
            el.off(ElementWatchEventNames);
        }
    };
    // 绑定元素事件
    JBaseComponent.prototype.bindElementEvent = function (el) {
        var self = this;
        // 监听样式改变
        el.on(__spreadArray(__spreadArray([], __read(SupportEventNames), false), __read(ElementWatchEventNames), false), function (e) {
            self.emit('elementChange', {
                type: e.type,
                data: __assign({ id: this.id }, e.data),
                event: e.event || e,
                target: this
            });
        }, el);
    };
    // 通过ID获取子元素
    JBaseComponent.prototype.getChild = function (id) {
        var e_2, _a;
        try {
            for (var _b = __values(this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child.id === id)
                    return child;
                // 如果子元素也是一个element，则也轮循它的子元素。
                if (child instanceof JBaseComponent) {
                    var el = child.getChild(id);
                    if (el)
                        return el;
                }
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
    // 设置css到dom
    JBaseComponent.prototype.setDomStyle = function (name, value) {
        // 如果外层容器的样式，则加到container上
        if (name in ContainerDefaultStyle) {
            _super.prototype.setDomStyle.call(this, name, value);
        }
        else {
            this.target && this.target.css(name, value);
        }
    };
    JBaseComponent.prototype.toJSON = function (props) {
        var _this = this;
        if (props === void 0) { props = []; }
        // 转json忽略渲染组件
        var obj = _super.prototype.toJSON.call(this, props, function (el) {
            return el !== _this.target;
        });
        if (this.target) {
            // target不转换children
            obj.target = this.target.toJSON([], function (p) { return false; });
        }
        return obj;
    };
    return JBaseComponent;
}(JElement));
export default JBaseComponent;

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
import CssFilterManager from 'j-css-filters';
import JElement from '../core/element';
/**
 * @public
 */
var JBaseHtmlElement = /** @class */ (function (_super) {
    __extends(JBaseHtmlElement, _super);
    function JBaseHtmlElement(option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        option.style = option.style || {};
        _this = _super.call(this, __assign(__assign({}, option), { 
            // @ts-ignore
            nodeType: option.type || 'div' })) || this;
        _this.filters = new CssFilterManager(_this, option.filters); // 滤镜
        // 属性变化映射到style
        _this.data.watch([
            'text', 'html'
        ], {
            set: function (item) {
                if (item.name === 'text') {
                    _this.dom.textContent = item.value || '';
                }
                else if (item.name === 'html') {
                    _this.dom.innerHTML = item.value || '';
                }
            },
            get: function (name) {
                if (name === 'text') {
                    return _this.dom.textContent;
                }
                else if (name === 'html') {
                    return _this.dom.innerHTML;
                }
            }
        });
        // @ts-ignore
        if (option.text)
            _this.data.text = option.text;
        // @ts-ignore
        if (option.html)
            _this.data.html = option.html;
        _this.data.on('change', function (e) {
            _this.emit('dataChange', {
                type: 'dataChange',
                target: _this,
                data: e
            });
        });
        return _this;
    }
    Object.defineProperty(JBaseHtmlElement.prototype, "typeName", {
        /**
         * 类型名称
         */
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    return JBaseHtmlElement;
}(JElement));
export default JBaseHtmlElement;

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
import util, { controller } from 'j-design-util';
import JElement from './element';
import { topZIndex } from '../constant/styleMap';
// 控制元素移动和矩阵变换
var JControllerItem = /** @class */ (function (_super) {
    __extends(JControllerItem, _super);
    function JControllerItem(option) {
        var _this = this;
        option.style = __assign(__assign({ border: '1px solid rgba(6,155,181,1)', backgroundColor: '#fff', pointerEvents: 'auto' }, option.style), { position: 'absolute' });
        if (option.dir && !option.className) {
            option.className = 'item-' + option.dir;
        }
        _this = _super.call(this, option) || this;
        _this.dir = '';
        _this.size = 0;
        _this._isMoving = false;
        // 拖放位置
        _this.dragStartPosition = {
            x: 0,
            y: 0,
        };
        _this.dir = option.dir || '';
        if (option.size) {
            _this.data.width = _this.data.height = _this.size = option.size;
        }
        _this.editor = option.editor;
        if (_this.editor) {
            // @ts-ignore
            _this.editor.view.on('mouseup', function (e) {
                if (e.button === 0)
                    _this.onDragEnd(e);
            });
            // @ts-ignore
            _this.editor.view.on('mouseleave', function (e) {
                if (!_this.isMoving || e.target !== _this.editor.view.dom)
                    return; // 不是out编辑器，不处理
                _this.onDragEnd(e);
            });
            // @ts-ignore
            _this.editor.view.on('mousemove', function (e) {
                _this.onDragMove(e);
            });
        }
        _this.on('mousedown', function (e) {
            // 如果是左健
            if (e.button === 0) {
                _this.onDragStart(e);
            }
        });
        return _this;
    }
    Object.defineProperty(JControllerItem.prototype, "option", {
        get: function () {
            return this._option;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JControllerItem.prototype, "isMoving", {
        get: function () {
            return this._isMoving;
        },
        set: function (v) {
            this._isMoving = v;
        },
        enumerable: false,
        configurable: true
    });
    JControllerItem.prototype.onDragMove = function (event) {
        if (!this.isMoving)
            return;
        var pos = {
            x: event.pageX || event.x,
            y: event.pageY || event.y,
        };
        var offX = (pos.x - this.dragStartPosition.x);
        var offY = (pos.y - this.dragStartPosition.y);
        this.emit('change', {
            dir: this.dir,
            offX: offX,
            offY: offY,
            oldPosition: this.dragStartPosition,
            newPosition: {
                x: pos.x,
                y: pos.y
            },
            item: this,
            event: event
        });
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition.x = pos.x;
        this.dragStartPosition.y = pos.y;
        //event.stopPropagation();
        event.preventDefault && event.preventDefault();
    };
    JControllerItem.prototype.onDragStart = function (event) {
        var pos = {
            x: event.pageX || event.x,
            y: event.pageY || event.y,
        };
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition = {
            x: pos.x,
            y: pos.y
        };
        this.isMoving = true;
        event.stopPropagation && event.stopPropagation();
        event.preventDefault && event.preventDefault();
        this.emit('dragStart', event);
    };
    JControllerItem.prototype.onDragEnd = function (event) {
        if (this.isMoving) {
            this.isMoving = false;
            this.emit('dragEnd', event);
        }
    };
    // 计算指针
    JControllerItem.prototype.resetCursor = function (rotation, data) {
        if (rotation === void 0) { rotation = 0; }
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cursor, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!this.dir)
                            return [2 /*return*/];
                        if (this.dir === 'skew') {
                            this.style.cursor = 'move';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, controller.Cursors.get(this.dir, rotation, data)];
                    case 1:
                        cursor = _a.sent();
                        if (!cursor)
                            return [2 /*return*/];
                        // 先简单处理
                        this.style.cursor = cursor.includes('\/') ? "url(".concat(cursor, ") 12 12,pointer") : cursor;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return JControllerItem;
}(JElement));
export { JControllerItem };
// 元素大小位置控制器
var JControllerComponent = /** @class */ (function (_super) {
    __extends(JControllerComponent, _super);
    function JControllerComponent(option) {
        var _this = this;
        option.style = __assign(__assign({ cursor: 'move', backgroundColor: 'transparent', itemStyle: {
                border: '1px solid #ccc',
            } }, option.style), { pointerEvents: 'none' });
        option.dir = 'element';
        option.className = 'j-design-editor-controller';
        option.data = __assign(__assign({}, option.data), { zIndex: topZIndex });
        _this = _super.call(this, option) || this;
        _this.items = [];
        // 遮挡层
        _this.masks = [];
        // 选择框边距
        _this.paddingSize = 0;
        _this.isEditor = false; // 当前关联是否是编辑器
        if (!_this.editor.editable)
            return _this;
        // 鼠标指针
        _this.cursorData = option.itemCursors || {};
        _this.init(option);
        _this.editor.dom.appendChild(_this.dom);
        _this.resetCursor(_this.transform.rotateZ);
        return _this;
    }
    JControllerComponent.prototype.init = function (option) {
        var _this = this;
        var _a;
        var itemSize = option.itemSize || 8;
        var pointSize = itemSize * 1.5;
        var sideSize = {
            width: itemSize,
            height: itemSize * 2
        };
        this.initMasks(); // 初始化mask
        this.createItem('l', {
            style: __assign(__assign({}, option.style.itemStyle), { left: 0, top: '50%' }),
            data: __assign({}, sideSize),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lt', {
            size: pointSize,
            style: __assign(__assign({ borderRadius: '50% 50%' }, option.style.itemStyle), { left: 0, top: 0 }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('t', {
            style: __assign(__assign({}, option.style.itemStyle), { left: '50%', top: 0 }),
            data: {
                width: sideSize.height,
                height: sideSize.width
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('tr', {
            size: pointSize,
            style: __assign(__assign({ borderRadius: '50% 50%' }, option.style.itemStyle), { left: '100%', top: 0 }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('r', {
            style: __assign(__assign({}, option.style.itemStyle), { left: '100%', top: '50%' }),
            data: __assign({}, sideSize),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('rb', {
            size: pointSize,
            style: __assign(__assign({ borderRadius: '50% 50%' }, option.style.itemStyle), { left: '100%', top: '100%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('b', {
            style: __assign(__assign({}, option.style.itemStyle), { left: '50%', top: '100%' }),
            data: {
                width: sideSize.height,
                height: sideSize.width
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lb', {
            size: pointSize,
            style: __assign(__assign({ borderRadius: '50% 50%' }, option.style.itemStyle), { left: 0, top: '100%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        // 旋转块
        this.rotateItem = this.createItem('rotate', {
            size: 20,
            style: __assign(__assign(__assign({ left: '50%', top: '-40px', 
                //backgroundColor: 'transparent',
                //border: 'none',
                //boxShadow: '0 0 2px 2px #ccc',
                borderRadius: '50%', cursor: "pointer" }, option.style.itemStyle), option.style.rotateStyle), { 'backgroundSize': '100%', backgroundImage: ((_a = option.itemIcons) === null || _a === void 0 ? void 0 : _a.rotate) || '' }),
            transform: {
                translateX: '-50%',
            }
        });
        // 图片操作杆
        this.targetMoveItem = this.createItem('move', {
            size: 24,
            style: __assign(__assign(__assign({ left: '50%', top: '50%', borderRadius: '50%', cursor: "pointer" }, option.style.itemStyle), { border: '9px solid rgba(0,0,0,0.8)', backgroundColor: '#fff', 'backgroundSize': '100%' }), option.style.moveStyle),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        // 操作过程中不截断图片
        var oldOverflow = '';
        this.targetMoveItem.on('dragStart', function (e) {
            oldOverflow = _this.target.style.overflow;
            _this.target.style.overflow = 'visible';
        }).on('dragEnd', function (e) {
            if (oldOverflow)
                _this.target.style.overflow = oldOverflow || 'hidden';
        });
        // 图片缩放
        this.targetScaleItem = this.createItem('scale', {
            size: 15,
            style: __assign(__assign(__assign({ left: '50%', top: '50%', borderRadius: '50%', cursor: "pointer" }, option.style.itemStyle), { border: '1px solid rgba(0,0,0,0.8)', backgroundColor: '#fff', 'backgroundSize': '100%' }), option.style.scaleStyle),
        });
        this.targetScaleItem.on('dragStart', function (e) {
            oldOverflow = _this.target.style.overflow;
            _this.target.style.overflow = 'visible';
        }).on('dragEnd', function (e) {
            if (oldOverflow)
                _this.target.style.overflow = oldOverflow || 'hidden';
            // 归位
            _this.targetScaleItem.transform.translateX = 0;
            _this.targetScaleItem.transform.translateY = 0;
            _this.targetScaleItem.transform.apply();
        });
        if (option.tipVisible !== false) {
            var tipOption = {
                data: {
                    height: '16px',
                    width: 'auto'
                },
                style: __assign(__assign({ left: '2px', top: '0', border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)', color: 'blue', fontSize: '10px', padding: '2px', overflow: 'hidden' }, option.style.tipStyle), { pointerEvents: 'none' })
            };
            //提示信息
            this.positionItem = this.createItem('tip', __assign(__assign({}, tipOption), { transform: {
                    translateY: '-100%'
                } }));
            this.sizeItem = this.createItem('tip', __assign(__assign({}, tipOption), { style: __assign(__assign({}, tipOption.style), { left: 'auto', top: '100%', right: '4px' }) }));
        }
        if (this.editor) {
            this.editor.on('mousedown', function (e) {
                if (!_this.isEditor || e.button === 2)
                    return; // 不是编辑器，不处理
                _this.onDragStart(e);
            });
        }
        this.on('change', function (e) {
            _this.change(e);
        });
    };
    Object.defineProperty(JControllerComponent.prototype, "center", {
        get: function () {
            var center = {
                x: util.toNumber(this.data.left) + util.toNumber(this.data.width) / 2,
                y: util.toNumber(this.data.top) + util.toNumber(this.data.height) / 2,
            };
            return center;
        },
        enumerable: false,
        configurable: true
    });
    // 生成控制点
    JControllerComponent.prototype.createItem = function (id, option) {
        var item = new JControllerItem(__assign({ dir: id, editor: this.editor }, option));
        this.addChild(item);
        this.items.push(item);
        var self = this;
        item.on('change', function (e) {
            self.change(e);
        });
        item.resetCursor(this.transform.rotateZ, this.cursorData);
        return item;
    };
    // 初始化或重置遮挡层
    JControllerComponent.prototype.initMasks = function () {
        return false;
        if (!this.masks.length) {
            var maskStyle = {
                'position': 'absolute',
                'display': 'block',
                'border': 'none',
                'background': 'rgba(0,0,0,0.3)'
            };
            var leftDom = util.createElement('div');
            util.css(leftDom, maskStyle);
            this.addChild(leftDom);
            this.masks.push(leftDom);
            var topDom = util.createElement('div');
            util.css(topDom, maskStyle);
            this.addChild(topDom);
            this.masks.push(topDom);
            var rightDom = util.createElement('div');
            util.css(rightDom, maskStyle);
            this.addChild(rightDom);
            this.masks.push(rightDom);
            var bottomDom = util.createElement('div');
            util.css(bottomDom, maskStyle);
            this.addChild(bottomDom);
            this.masks.push(bottomDom);
        }
        var left = util.toNumber(this.data.left);
        var top = util.toNumber(this.data.top);
        util.css(this.masks[0], {
            top: util.toPX(0 - top),
            left: util.toPX(0 - left),
            width: util.toPX(Math.max(left, 0)),
            height: util.toPX(this.editor.data.height),
        });
        util.css(this.masks[1], {
            top: util.toPX(0 - top),
            left: 0,
            width: '100%',
            height: util.toPX(top),
        });
        util.css(this.masks[2], {
            top: util.toPX(0 - top),
            left: '100%',
            width: util.toPX(Math.max(util.toNumber(this.editor.data.width) - util.toNumber(this.data.left) - util.toNumber(this.data.width), 0)),
            height: util.toPX(this.editor.data.height),
        });
        util.css(this.masks[3], {
            top: util.toPX(this.data.height),
            left: 0,
            width: '100%',
            height: util.toPX(Math.max(util.toNumber(this.editor.data.height) - util.toNumber(this.data.top) - util.toNumber(this.data.height), 0)),
        });
    };
    // 发生改变响应
    JControllerComponent.prototype.change = function (e) {
        if (!this.target)
            return;
        var dir = e.dir, offX = e.offX, offY = e.offY, oldPosition = e.oldPosition, newPosition = e.newPosition;
        // 当前移动对原对象的改变
        var args = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            rotation: 0,
            skew: {
                x: 0,
                y: 0
            }
        };
        var center = this.center;
        var width = util.toNumber(this.data.width);
        var height = util.toNumber(this.data.height);
        switch (dir) {
            case 'rotate': {
                // 编辑器坐标, 因为是在编辑器渲染区域操作，需要把坐标转到此区域再处理
                var pos1 = this.editor.toEditorPosition(oldPosition);
                var pos2 = this.editor.toEditorPosition(newPosition);
                args.rotation = controller.rotateChange(pos1, pos2, center);
                break;
            }
            case 'skew': {
                var rx = offX / width * Math.PI;
                var ry = offY / height * Math.PI;
                args.skew.x = rx;
                args.skew.y = ry;
                break;
            }
            case 'element': {
                // 元素位置控制器
                args.x = offX;
                args.y = offY;
                break;
            }
            case 'move': {
                var dx = util.toNumber(this.target.transform.translateX) + offX;
                var dy = util.toNumber(this.target.transform.translateY) + offY;
                this.target.transform.translateX = dx;
                this.target.transform.translateY = dy;
                this.target.transform.apply();
                break;
            }
            case 'scale': {
                if (e.item) {
                    e.item.transform.translateX = util.toNumber(e.item.transform.translateX) + offX;
                    e.item.transform.translateY = util.toNumber(e.item.transform.translateY) + offY;
                    e.item.transform.apply();
                }
                if (offX !== 0) {
                    var scaleX = offX / util.toNumber(this.data.width);
                    this.target.transform.scaleX = this.target.transform.scaleY = (this.target.transform.scaleX || 0) + scaleX;
                    this.target.transform.apply();
                }
                break;
            }
            default: {
                // 根据操作参数，计算大小和偏移量
                args = controller.getChangeData(dir, {
                    x: offX,
                    y: offY
                }, oldPosition, newPosition, center, this.transform.rotateZ);
            }
        }
        // 位移 
        if (args.x || args.y) {
            // 只有没锁定才可以移动
            if (this.target.moveable)
                this.move(args.x, args.y);
        }
        if (args.width) {
            var oldWidth = util.toNumber(this.data.width);
            var width_1 = oldWidth + args.width;
            this.data.width = Math.max(Number(width_1.toFixed(2)), 1);
            // 如果是编辑器，且不支持移动， 则需要保持居中，移动一半大小改变一半
            /*if(!this.target.moveable && this.isEditor) {
                const offx = this.data.width - oldWidth;
                this.move(-offx/2, 0);
            }*/
        }
        if (args.height) {
            var oldHeight = util.toNumber(this.data.height);
            var height_1 = oldHeight + args.height;
            this.data.height = Math.max(Number(height_1.toFixed(2)), 1);
            // 如果是编辑器，且不支持移动， 则需要保持居中，移动一半大小改变一半
            /*if(!this.target.moveable && this.isEditor) {
                const offy = this.data.height - oldHeight;
                this.move(0, -offy/2);
            }*/
        }
        // 目标元素移动
        if (args.skew.x || args.skew.y) {
            this.target.transform.rotateX += args.skew.x;
            this.target.transform.rotateY += args.skew.y;
            this.target.transform.apply();
        }
        // 如果有操作旋转
        if (args.rotation) {
            this.transform.rotateZ += args.rotation;
            if (Math.abs(this.transform.rotateZ) > controller.fullCircleRadius)
                this.transform.rotateZ = this.transform.rotateZ % controller.fullCircleRadius;
            this.transform.apply();
            // 发生了旋转，要处理指针图标
            this.resetCursor();
        }
        this.applyToTarget();
    };
    // 把变换应用到目标元素
    JControllerComponent.prototype.applyToTarget = function () {
        if (!this.target)
            return;
        /*
                const pos = {
                    x: util.toNumber(this.data.left) + (this.isEditor?util.toNumber(this.target.data.left):0),
                    y: util.toNumber(this.data.top) + (this.isEditor?util.toNumber(this.target.data.top):0)
                };
        
                this.target.data.left = pos.x;
                this.target.data.top = pos.y;
        */
        // 编辑器相对位置一直是0
        if (this.isEditor) {
            this.data.left = 0;
            this.data.top = 0;
        }
        this.target.transform.from({
            //skewX: this.transform.skewX,
            //skewY: this.transform.skewY,
            rotateZ: this.transform.rotateZ,
        });
        var width = util.toNumber(this.data.width) - this.paddingSize * 2;
        var height = util.toNumber(this.data.height) - this.paddingSize * 2;
        if (this.target.data.width !== width)
            this.target.data.width = width;
        if (this.target.data.height !== height)
            this.target.data.height = height;
        this.setTip();
        this.initMasks(); // 重新定位mask
    };
    // 移动
    JControllerComponent.prototype.move = function (dx, dy) {
        var e_2, _a;
        if (!this.isEditor) {
            // 如果有多选，则移动多个
            var selectedElements = this.editor.selectedElements;
            if (selectedElements.length) {
                try {
                    for (var selectedElements_1 = __values(selectedElements), selectedElements_1_1 = selectedElements_1.next(); !selectedElements_1_1.done; selectedElements_1_1 = selectedElements_1.next()) {
                        var el = selectedElements_1_1.value;
                        el.move(dx, dy);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (selectedElements_1_1 && !selectedElements_1_1.done && (_a = selectedElements_1.return)) _a.call(selectedElements_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        else if (this.target)
            this.target.move(dx, dy);
        return _super.prototype.move.call(this, dx, dy);
    };
    // 重置
    JControllerComponent.prototype.reset = function (isEditor) {
        var e_3, _a;
        if (isEditor === void 0) { isEditor = this.isEditor; }
        this.isMoving = false;
        delete this.target;
        try {
            // 编辑器不让旋转和skew
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.isMoving = false;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.transform.from({
            rotateZ: 0,
        });
    };
    Object.defineProperty(JControllerComponent.prototype, "isControling", {
        // 是否正在操控中
        get: function () {
            var e_4, _a;
            if (this.isMoving)
                return true;
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (item.isMoving)
                        return true;
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    JControllerComponent.prototype.resetCursor = function (rotation) {
        if (rotation === void 0) { rotation = this.transform.rotateZ; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, item;
            var e_5, _c;
            return __generator(this, function (_d) {
                try {
                    // 发生了旋转，要处理指针图标
                    for (_a = __values(this.items), _b = _a.next(); !_b.done; _b = _a.next()) {
                        item = _b.value;
                        item.resetCursor(rotation, this.cursorData);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    // 绑定到操作的对象
    JControllerComponent.prototype.bind = function (target) {
        var e_6, _a;
        var _this = this;
        if (!target.editable)
            return;
        this.isEditor = target === this.editor;
        this.reset(this.isEditor);
        this.target = target;
        this.bindTargetPositionAndSize();
        this.data.visible = true;
        // 编辑器不让旋转和skew
        var itemVisible = target.editable;
        try {
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                switch (item.dir) {
                    case 'scale':
                    case 'move': {
                        item.visible = itemVisible && !this.isEditor && this.target.typeName === 'image';
                        break;
                    }
                    case 'rotate': {
                        item.visible = itemVisible && !this.isEditor;
                        break;
                    }
                    default: {
                        item.data.visible = itemVisible;
                    }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        this.bindTargetPositionAndSizeHandler = function (e) {
            if (e.target !== _this.target || _this.isControling)
                return;
            _this.bindTargetPositionAndSize();
        };
        // 如果数据改变，则响应
        this.target.on('dataChange', this.bindTargetPositionAndSizeHandler);
    };
    // 同步目标位置等信息
    JControllerComponent.prototype.bindTargetPositionAndSize = function () {
        if (!this.target)
            return;
        // 编辑器的话，需要把它的坐标转为相对于容器的
        var pos = {
            x: (this.isEditor ? 0 : util.toNumber(this.target.data.left)),
            y: (this.isEditor ? 0 : util.toNumber(this.target.data.top))
        };
        this.data.left = pos.x;
        this.data.top = pos.y;
        this.data.width = util.toNumber(this.target.data.width) + this.paddingSize * 2;
        this.data.height = util.toNumber(this.target.data.height) + this.paddingSize * 2;
        this.transform.from({
            // rotateX: target.transform.rotateX,
            // rotateY: target.transform.rotateY,
            rotateZ: this.target.transform.rotateZ,
            //scaleX: target.transform.scaleX,
            //scaleY: target.transform.scaleY,
            //scaleZ: target.transform.scaleZ,
        });
        // 初始化图标
        this.resetCursor();
        this.setTip();
        this.initMasks(); // 重新定位mask
    };
    // 显示提示信息
    JControllerComponent.prototype.setTip = function () {
        if (this.positionItem && this.positionItem.visible) {
            var pos = {
                x: util.toNumber(this.data.left, 2) + (this.isEditor ? util.toNumber(this.target.data.left, 2) : 0),
                y: util.toNumber(this.data.top, 2) + (this.isEditor ? util.toNumber(this.target.data.top, 2) : 0)
            };
            this.positionItem.dom.innerHTML = "X: ".concat(pos.x, " Y: ").concat(pos.y);
        }
        if (this.sizeItem && this.sizeItem.visible)
            this.sizeItem.dom.innerHTML = "".concat(util.toNumber(this.data.width, 2), " X ").concat(util.toNumber(this.data.height, 2));
    };
    // 解除绑定
    JControllerComponent.prototype.unbind = function (target) {
        if (target && this.target === target) {
            this.reset(false);
            this.data.visible = false;
            // 如果数据改变，则响应
            if (this.bindTargetPositionAndSizeHandler) {
                target.off('dataChange', this.bindTargetPositionAndSizeHandler);
                delete this.bindTargetPositionAndSizeHandler;
            }
        }
    };
    return JControllerComponent;
}(JControllerItem));
export default JControllerComponent;

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
import EventEmiter from 'j-eventemitter';
import JTransform from '../constant/transform';
import JStyle from './style';
import util from 'j-design-util';
import JEvent from '../core/event';
import { JElementData } from '../constant/data';
/**
 * @public
 */
var JElement = /** @class */ (function (_super) {
    __extends(JElement, _super);
    function JElement(option) {
        if (option === void 0) { option = {}; }
        var _newTarget = this.constructor;
        var _this = _super.call(this) || this;
        _this._id = '';
        // 类型名称
        _this._type = '';
        // 子元素
        _this._children = [];
        /**
         * dom上的附加属性
         */
        _this.attributes = {};
        // 是否可编辑
        _this.editable = true;
        _this.componentType = _newTarget;
        _this._id = _this.id || option.id || util.uuid();
        _this._type = _this.type || option.type || '';
        var nodeType = option.nodeType || 'div';
        // @ts-ignore
        _this._dom = util.createElement(nodeType);
        _this.attr('data-id', _this.id);
        _this.attr('data-type', _this.type);
        if (option.editor)
            _this.editor = option.editor;
        _this._option = option;
        // 样式代理处理
        _this.style = JStyle.createProxy();
        _this.style.on('change', function (s) {
            _this.setDomStyle(s.name, s.value);
            _this.emit('styleChange', {
                type: 'styleChange',
                data: s,
                target: _this
            });
        });
        var dataType = option.dataType || JElementData;
        // @ts-ignore
        _this.data = JElementData.createProxy(new dataType());
        // 名称
        _this.name = option.name || '';
        // 变换控制的是核心元素 . 
        _this.transform = JTransform.createProxy(option.transform || {}, {
            target: _this,
            // 如果指定了只响应某几个属性
            watchProps: option.transformWatchProps
        });
        // 如果是组件，不在这里进行数据初始化调用
        _this.initData(option);
        // @ts-ignore
        if (option.className)
            _this.className = option.className;
        _this.transform.apply(); // 重置一下transform
        _this.bindEvent(); // 事件绑定
        return _this;
    }
    // 初始化一些基础属性
    JElement.prototype.initData = function (option) {
        var _this = this;
        // 属性变化映射到style
        this.data.watch([
            'left', 'top', 'width', 'height', 'zIndex', 'visible'
        ], {
            set: function (item) {
                if (item.name === 'visible') {
                    _this.style.display = item.value ? 'block' : 'none';
                }
                else if (item.name === 'rotation' && item.value) {
                    _this.transform.rotateZ = item.value;
                }
                else if (item.name === 'angle' && item.value) {
                    _this.transform.rotateZ = util.degToRad(item.value);
                }
                else
                    _this.style[item.name] = item.value;
            },
            get: function (name) {
                if (name === 'width') {
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
        if (option.style)
            this.style.apply(option.style);
        if (option.editable === false)
            this.editable = false;
        if (option.visible === false)
            this.visible = false;
        if (option.data) {
            this.data.from(option.data);
        }
        if (option.attributes) {
            Object.assign(this.attributes, option.attributes);
            if (this.attributes) {
                for (var name_1 in this.attributes) {
                    var v = this.attributes[name_1];
                    if (typeof v !== 'undefined' && typeof name_1 === 'string') {
                        this.attr(name_1, v);
                    }
                }
            }
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
    Object.defineProperty(JElement.prototype, "name", {
        // 名称
        get: function () {
            return this.attr('title');
        },
        set: function (v) {
            this.attr('title', v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "option", {
        get: function () {
            return this._option;
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
            if (!this.dom.classList.contains(v))
                this.dom.classList.add(v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "visible", {
        get: function () {
            return this.data.visible;
        },
        set: function (v) {
            this.data.visible = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "bounds", {
        // 元素框
        get: function () {
            var rect = util.getElementBoundingRect(this.dom);
            if (this.editor) {
                var pos = this.editor.toEditorPosition(rect);
                rect.x = pos.x;
                rect.y = pos.y;
            }
            return rect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "childrenMaxLevel", {
        // 当前子元素最大的level层
        get: function () {
            var e_1, _a;
            var _b;
            var level = 0;
            try {
                for (var _c = __values(this.children), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var c = _d.value;
                    level = Math.max((_b = c.data) === null || _b === void 0 ? void 0 : _b.zIndex, level);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return level;
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
        var x = util.toNumber(this.data.left) + dx;
        var y = util.toNumber(this.data.top) + dy;
        this.data.left = Number(x.toFixed(2));
        this.data.top = Number(y.toFixed(2));
        this.emit('move', { dx: dx, dy: dy });
    };
    // 把子元素按zIndex排序
    JElement.prototype.childrenSort = function () {
        return this.children.sort(function (a, b) { return a.data.zIndex - b.data.zIndex; });
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
            if (!child.parent)
                child.parent = parent;
            // 如果没有指定层级，则新加的都在最大
            if (!child.data.zIndex || child.data.zIndex == 0) {
                child.data.zIndex = this.childrenMaxLevel + 1;
            }
            parent.dom.appendChild(child.dom);
            if (parent === this)
                this._children.push(child);
            else
                parent.children.push(child);
            this.emit('childAdded', child);
        }
        else if (child instanceof Element && child !== parent.dom) {
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
        // @ts-ignore
        if (el.selected)
            el.selected = false;
        for (var i = this.children.length - 1; i > -1; i--) {
            if (this.children[i] === el) {
                this.children.splice(i, 1);
                // @ts-ignore
                delete el.parent;
            }
        }
    };
    // 通过ID获取子元素
    JElement.prototype.getChild = function (id) {
        var e_3, _a;
        var _b;
        try {
            for (var _c = __values(this.children), _d = _c.next(); !_d.done; _d = _c.next()) {
                var child = _d.value;
                if (child.id === id)
                    return child;
                // 如果子元素也是一个element，则也轮循它的子元素。
                if ((_b = child.children) === null || _b === void 0 ? void 0 : _b.length) {
                    var el = child.getChild(id);
                    if (el)
                        return el;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * 复制当前组件
     * @returns 当前组件同类型副本
     */
    JElement.prototype.clone = function () {
        var option = this.toJSON();
        // @ts-ignore
        delete option.id;
        var el = new this.componentType(option);
        return el;
    };
    /**
     * 清空
     */
    JElement.prototype.clear = function () {
        for (var i = this.children.length - 1; i >= 0; i--) {
            var el = this.children[i];
            this.removeChild(el);
        }
    };
    // 转为json
    JElement.prototype.toJSON = function (props, ig) {
        var e_4, _a, e_5, _b;
        if (props === void 0) { props = []; }
        if (ig === void 0) { ig = function (p) { return true; }; }
        var fields = __spreadArray(['name', 'type', 'data', 'attributes', 'style', 'transform', 'id', 'filters'], __read(props), false);
        var obj = {
            data: {},
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
                else if (typeof v === 'object') {
                    obj[k] = {};
                    for (var n in v) {
                        if (typeof n !== 'string' || (typeof v[n] !== 'string' && typeof v[n] !== 'number'))
                            continue;
                        obj[k][n] = v[n];
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_4) throw e_4.error; }
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
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_5) throw e_5.error; }
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
    // 丢弃
    JElement.prototype.dispose = function () {
        this.event.dispose();
        if (this.data) {
            this.data.removeAllListeners();
            delete this.data;
        }
        if (this.style) {
            this.style.removeAllListeners();
            delete this.style;
        }
        this.removeAllListeners();
    };
    return JElement;
}(EventEmiter));
export default JElement;

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
export var SupportEventNames = [
    'mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout', 'mouseleave', 'mousewheel', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'blur', 'change', 'focus', 'drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'contextmenu'
];
// 元素监听的自定议事件
export var ElementWatchEventNames = ['select', 'styleChange', 'dataChange', 'elementChange', 'childAdded'];
/**
 * @public
 */
var JEvent = /** @class */ (function () {
    function JEvent(target) {
        this._eventCache = [];
        if (target)
            this.target = target;
    }
    // 规范化事件名
    JEvent.prototype.normalizeEventNames = function (name) {
        if (!this.target || !name) {
            return [];
        }
        var events = name;
        if (typeof name === 'string') {
            events = name.split(' ');
        }
        // 过滤掉不支持的事件
        return events.filter(function (k) { return SupportEventNames.includes(k); });
    };
    /**
     * 初始化所有支持的事件，在init之前不要on，不然在init的时候会被释放掉。
     * @param handler - 事件处理函数
     * @param target - 元素
     */
    JEvent.prototype.init = function (handler, target) {
        if (target) {
            // 释放掉原target的事件
            this.dispose();
            this.target = target;
        }
        this.on(SupportEventNames, handler, false);
    };
    /**
     * 绑定事件到html对象
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    JEvent.prototype.on = function (name, fun, opt) {
        var e_1, _a;
        if (opt === void 0) { opt = false; }
        var events = this.normalizeEventNames(name);
        try {
            for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var n = events_1_1.value;
                this.target.addEventListener(n, fun, opt);
                this._eventCache.push([n, fun, opt]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ;
        return this;
    };
    /**
     * 从对象中移除事件
     * 不传 的时候删除所有事件
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    JEvent.prototype.off = function (name, fun, opt) {
        var _this = this;
        if (opt === void 0) { opt = false; }
        var events = this.normalizeEventNames(name);
        this._eventCache = this._eventCache.filter(function (item) {
            if (events.length && !events.includes(item[0])) {
                return true;
            }
            if ((fun && fun !== item[1]) || (typeof opt !== 'undefined' && opt !== item[2])) {
                // DOM 要完全一致才能被removeEventListener删除掉
                return true;
            }
            _this.target.removeEventListener(item[0], item[1], item[2]);
            return false;
        });
        return this;
    };
    // 移除所有的事件
    JEvent.prototype.dispose = function () {
        this.off();
    };
    return JEvent;
}());
export default JEvent;

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
import JElementCssStyle from '../constant/styleMap';
import util from 'j-design-util';
var NumberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];
var JElementStyle = /** @class */ (function (_super) {
    __extends(JElementStyle, _super);
    function JElementStyle(option, maps) {
        if (maps === void 0) { maps = []; }
        var _this = _super.call(this) || this;
        // 保存的白名单列表, 如果指定了，则不在白名单内的就不会tojson
        _this.styleSaveMap = [];
        if (option) {
            _this.apply(option, _this, maps);
        }
        _this.styleSaveMap = maps;
        return _this;
    }
    // 把样式应用到元素或当前对象
    JElementStyle.prototype.apply = function (data, target, maps) {
        var e_1, _a;
        if (target === void 0) { target = this; }
        if (maps === void 0) { maps = []; }
        target = target || this;
        try {
            for (var _b = __values(this.names), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                if (typeof name_1 !== 'string')
                    continue;
                // 如果指定了白名单，不包含则不采用
                if (maps && maps.length && !maps.includes(name_1))
                    continue;
                if (typeof data[name_1] === 'string' || typeof data[name_1] === 'number') {
                    if (target instanceof JElementStyle) {
                        target.setStyle(name_1, data[name_1]);
                    }
                    else {
                        target[name_1] = data[name_1];
                    }
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
        return target;
    };
    // 样式对应的元素
    JElementStyle.prototype.applyTo = function (element) {
        this.apply(this, element.style);
    };
    // 设置样式
    JElementStyle.prototype.setStyle = function (name, value) {
        this[name] = value;
        this.emit('change', {
            name: name,
            value: value
        });
    };
    // 触发所有更新到dom
    JElementStyle.prototype.refresh = function () {
        this.apply(this);
    };
    // 转为json
    JElementStyle.prototype.toJSON = function (maps) {
        var e_2, _a;
        if (maps === void 0) { maps = this.styleSaveMap; }
        var obj = {};
        try {
            for (var _b = __values(this.names), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_2 = _c.value;
                // 如果不在白名单内则不处理
                if (maps && maps.length && !maps.includes(name_2))
                    continue;
                if (typeof this[name_2] === 'undefined')
                    continue;
                obj[name_2] = this[name_2];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return obj;
    };
    // 生成样式代理
    JElementStyle.createProxy = function (style, maps) {
        if (style === void 0) { style = {}; }
        if (maps === void 0) { maps = []; }
        var jstyle = new JElementStyle(style, maps);
        // 样式代理处理
        var proxy = new Proxy(jstyle, {
            get: function (target, p, receiver) {
                var v = target[p];
                // 数字样式，处理px问题
                if (typeof p === 'string' && NumberStyleMap.includes(p)) {
                    if (v === '0' || typeof v === 'undefined')
                        return 0;
                    if (util.isPXNumber(v))
                        return util.toNumber(v);
                }
                return v;
            },
            set: function (target, p, value, receiver) {
                // 非白名单样式不支持设置
                if (typeof p !== 'string' || !target.names.includes(p)) {
                    target[p] = value;
                    return true;
                }
                // 数字样式，处理px问题
                if (NumberStyleMap.includes(p)) {
                    value = typeof value === 'number' || util.isNumber(value) ? "".concat(value, "px") : value;
                }
                target.setStyle(p, value); // 应用到元素和类
                return true;
            }
        });
        return proxy;
    };
    return JElementStyle;
}(JElementCssStyle));
export default JElementStyle;
