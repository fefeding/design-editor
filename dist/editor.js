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
import JBase from './core/baseComponent';
import JText from './components/text';
import JImage from './components/image';
import JSvg from './components/svg';
import JElement from './core/element';
import JController from './core/controller';
import JFonts from './core/fonts';
import util from './lib/util';
import { SupportEventNames } from './core/event';
var JEditor = /** @class */ (function (_super) {
    __extends(JEditor, _super);
    function JEditor(option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        option.style = option.style || {};
        Object.assign(option.style, {
            'boxShadow': '0 0 10px 10px #ccc',
            'position': 'absolute',
            'backgroundSize': '100% 100%',
        });
        // @ts-ignore 外层只响应Z轴旋转
        option.transformWatchProps = [
            'rotateZ', 'scaleX', 'scaleY'
        ];
        _this = _super.call(this, option) || this;
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
        _this.regShape({ 'image': JImage, 'text': JText, 'svg': JSvg });
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
        this.elementController = new JController({
            editor: this,
            visible: false
        });
        var styleNode = document.createElement('style');
        styleNode.innerHTML = ".j-design-editor-container {\n                                    border: 0;\n                                }\n                                .j-design-editor-container:hover {\n                                    box-shadow: 0 0 1px 1px rgba(255,255,255,0.5);\n                                }";
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
                this.selected = true;
                this.elementController.onDragStart(e);
            }
        });
        // 刷新样式
        this.style.refresh();
        this.resize(); // 触发一次大小改变
        //this.bindElementEvent(this);
    };
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
        if (this.view)
            _super.prototype.bindEvent.call(this, this.view.dom); // 编辑器事件绑到整个容器上
    };
    // 选中某个元素
    JEditor.prototype.select = function (el) {
        if (el.selected) {
            // 选把所有已选择的取消
            this.selectedElements.map(function (p) {
                if (p !== el) {
                    p.selected = false;
                    return p;
                }
            });
            if (el.editable)
                this.elementController.bind(el);
        }
        else
            this.elementController.unbind(el);
    };
    JEditor.prototype.resize = function (width, height) {
        var _this = this;
        if (width === void 0) { width = this.data.width; }
        if (height === void 0) { height = this.data.height; }
        this.attr('data-size', "".concat(width, "*").concat(height));
        this.data.width = width;
        this.data.height = height;
        setTimeout(function () {
            _this.data.left = util.toNumber(_this.view.dom.clientWidth) / 2 - util.toNumber(width) / 2;
            _this.data.top = util.toNumber(_this.view.dom.clientHeight) / 2 - util.toNumber(height) / 2;
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
        var self = this;
        this.bindElementEvent(child);
        child.parent = this; // 把父设置成编辑器
        child.editor = this;
        // 刷新样式
        child.style.refresh();
        child.editable = this.editable; // 当前是否可编辑
        this.target.addChild(child, this.target);
    };
    // 移除
    JEditor.prototype.removeChild = function (el) {
        if (el === this.target) {
            //console.warn('不能移除自已');
            return;
        }
        if (el instanceof JElement) {
            el.off(SupportEventNames);
            el.off(['select', 'styleChange', 'dataChange']);
        }
        return this.target.removeChild(el);
    };
    // 绑定元素事件
    JEditor.prototype.bindElementEvent = function (el) {
        var self = this;
        // 监听样式改变
        el.on(__spreadArray(__spreadArray([], __read(SupportEventNames), false), [
            'styleChange', 'select', 'dataChange'
        ], false), function (e) {
            // 左健选中
            if (e.type === 'mousedown' && e.button === 0) {
                this.selected = true;
                self.elementController.onDragStart(e);
            }
            // 选中状态改变
            else if (e.type === 'select') {
                self.select(this);
            }
            // 如果是字体依赖，则检查字体支持情况
            else if (e.type === 'styleChange') {
                // 字体发生改变，需要做check, 并加载字体生效
                if (e.data.name === 'fontFamily' && e.data.value) {
                    self.fonts.load(e.data.value).catch(function (e) {
                        console.error(e);
                    }); // 异步加载字体
                }
            }
            self.emit('elementChange', {
                type: e.type,
                data: e.data || {},
                event: e,
                target: this
            });
        });
    };
    // 通过ID获取子元素
    JEditor.prototype.getChild = function (id) {
        var e_2, _a;
        try {
            for (var _b = __values(this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child.id === id)
                    return child;
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
    // 把domcument坐标转为编辑器相对坐标
    JEditor.prototype.toEditorPosition = function (pos) {
        // 编辑器坐标
        var editorPos = util.getElementBoundingRect(this.target.dom);
        return {
            x: pos.x - editorPos.x,
            y: pos.y - editorPos.y
        };
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
        this.elementController.data.visible = false;
    };
    // 缩放
    JEditor.prototype.scale = function (x, y) {
        if (y === void 0) { y = x; }
        if (x < 0.1 || y < 0.1)
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
            throw Error("\u5143\u7D20\u7C7B\u578B".concat(name, "\u5DF2\u7ECF\u5B58\u5728"));
        this.shapes.set(name, shape);
        return shape;
    };
    // 创建元素
    JEditor.prototype.createShape = function (type, option) {
        if (option === void 0) { option = {}; }
        var shape = typeof type === 'string' ? this.shapes.get(type) : type;
        if (!shape) {
            throw Error("".concat(type, "\u4E0D\u5B58\u5728\u7684\u5143\u7D20\u7C7B\u578B"));
        }
        // @ts-ignore
        var el = new shape(__assign(__assign({}, option), { editor: this, type: type }));
        return el;
    };
    JEditor.prototype.fromJSON = function (data) {
        var e_3, _a;
        this.clear();
        if (typeof data === 'string')
            data = JSON.parse(data);
        if (data.style) {
            this.style.apply(data.style); // 应用样式
        }
        this.resize(data.width || data.data.width, data.height || data.data.height);
        try {
            for (var _b = __values(data.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                if (!c.type)
                    continue;
                var item = this.createShape(c.type, c);
                this.addChild(item);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    return JEditor;
}(JBase));
export default JEditor;
export { JEditor, JImage, JText, };
