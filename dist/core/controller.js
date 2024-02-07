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
import util from '../lib/util';
import JElement from './element';
import { topZIndex, ControlerCursors, ControlItemIcons, fullCircleRadius } from '../constant/styleMap';
// 控制元素移动和矩阵变换
var JControllerItem = /** @class */ (function (_super) {
    __extends(JControllerItem, _super);
    function JControllerItem(option) {
        var _this = this;
        option.style = __assign(__assign({ border: '1px solid rgba(6,155,181,1)', backgroundColor: '#fff', pointerEvents: 'auto' }, option.style), { position: 'absolute' });
        _this = _super.call(this, option) || this;
        _this.dir = '';
        _this.size = 8;
        _this._isMoving = false;
        // 拖放位置
        _this.dragStartPosition = {
            x: 0,
            y: 0,
        };
        _this.dir = option.dir || '';
        _this.size = option.size || 8;
        _this.data.width = _this.data.height = _this.size;
        _this.editor = option.editor;
        if (_this.editor) {
            // @ts-ignore
            _this.editor.view.on('mouseup', function (e) {
                if (e.button === 0)
                    _this.onDragEnd(e);
            });
            // @ts-ignore
            _this.editor.view.on('mouseout', function (e) {
                if (e.target !== _this.editor.dom)
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
            event: event
        });
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition.x = pos.x;
        this.dragStartPosition.y = pos.y;
        event.stopPropagation();
        event.preventDefault();
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
    };
    JControllerItem.prototype.onDragEnd = function (event, pos) {
        if (pos === void 0) { pos = event; }
        if (this.isMoving) {
            this.isMoving = false;
        }
    };
    // 计算指针
    JControllerItem.prototype.resetCursor = function (rotation) {
        if (rotation === void 0) { rotation = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var cursor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ControlerCursors.get(this.dir, rotation)];
                    case 1:
                        cursor = _a.sent();
                        if (!cursor)
                            return [2 /*return*/];
                        // 先简单处理
                        this.style.cursor = cursor.includes('\/') ? "url(".concat(cursor, ") 12 12,pointer") : cursor;
                        return [2 /*return*/];
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
        option.style = __assign(__assign({ cursor: 'move', backgroundColor: 'transparent' }, option.style), { pointerEvents: 'none' });
        option.dir = 'element';
        option.data = __assign(__assign({}, option.data), { zIndex: topZIndex });
        _this = _super.call(this, option) || this;
        _this.items = [];
        // 选择框边距
        _this.paddingSize = 0;
        _this.isEditor = false; // 当前关联是否是编辑器
        if (!_this.editor.editable)
            return _this;
        _this.init(option);
        _this.editor.dom.appendChild(_this.dom);
        _this.resetCursor(_this.transform.rotateZ);
        return _this;
    }
    JControllerComponent.prototype.init = function (option) {
        var _this = this;
        this.createItem('l', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: 0, top: '50%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lt', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: 0, top: 0 }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('t', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: '50%', top: 0 }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('tr', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: '100%', top: 0 }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('r', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: '100%', top: '50%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('rb', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: '100%', top: '100%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('b', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: '50%', top: '100%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lb', {
            shape: 'rect',
            style: __assign(__assign({}, option.itemStyle), { left: 0, top: '100%' }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        // 旋转块
        this.rotateItem = this.createItem('rotate', {
            shape: 'circle',
            size: 24,
            style: __assign(__assign({ left: '50%', top: '-40px', 
                //backgroundColor: 'transparent',
                border: 'none', boxShadow: '0 0 2px 2px #ccc', borderRadius: '50%', cursor: "pointer" }, option.itemStyle), { 'backgroundSize': '100%', backgroundImage: ControlItemIcons.rotate }),
            transform: {
                translateX: '-50%',
            }
        });
        this.skewItem = this.createItem('skew', {
            shape: 'circle',
            size: 24,
            style: __assign(__assign({ left: '50%', top: '50%', border: 'none', boxShadow: '0 0 2px 2px #ccc', borderRadius: '50%', cursor: "pointer" }, option.itemStyle), { 'backgroundSize': '100%', backgroundImage: ControlItemIcons.skew }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        }); // 旋转块 
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
        item.resetCursor(this.transform.rotateZ);
        return item;
    };
    // 发生改变响应
    JControllerComponent.prototype.change = function (e) {
        if (!this.target)
            return;
        var dir = e.dir, offX = e.offX, offY = e.offY;
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
        if (dir === 'rotate') {
            this.rotateChange(e, args);
        }
        else if (dir === 'element') {
            // 元素位置控制器
            args.x = offX;
            args.y = offY;
        }
        else {
            // 先回原坐标，再主算偏移量，这样保证操作更容易理解
            if (this.transform.rotateZ) {
                var pos = this.getRotateEventPosition(e, this.transform.rotateZ, center);
                offX = pos.offX;
                offY = pos.offY;
            }
            switch (dir) {
                case 'l': {
                    args.x = offX;
                    args.width = -offX;
                    break;
                }
                case 't': {
                    args.y = offY;
                    args.height = -offY;
                    break;
                }
                case 'r': {
                    args.width = offX;
                    break;
                }
                case 'b': {
                    args.height = offY;
                    break;
                }
                case 'lt': {
                    args.x = offX;
                    args.width = -offX;
                    args.y = offY;
                    args.height = -offY;
                    break;
                }
                case 'tr': {
                    args.width = offX;
                    args.y = offY;
                    args.height = -offY;
                    break;
                }
                case 'rb': {
                    args.width = offX;
                    args.height = offY;
                    break;
                }
                case 'lb': {
                    args.x = offX;
                    args.width = -offX;
                    args.height = offY;
                    break;
                }
                case 'skew': {
                    var rx = offX / util.toNumber(this.data.width) * Math.PI;
                    var ry = offY / util.toNumber(this.data.height) * Math.PI;
                    args.skew.x = ry;
                    args.skew.y = rx;
                    break;
                }
            }
        }
        // 位移
        if (args.x || args.y) {
            this.move(args.x, args.y);
        }
        if (args.width) {
            var width = util.toNumber(this.data.width) + args.width;
            this.data.width = Math.max(width, 1);
        }
        if (args.height) {
            this.data.height = Math.max(util.toNumber(this.data.height) + args.height, 1);
        }
        var newCenter = this.center;
        // 如果中心发生了偏移，则新中心点要移到绕原中心点旋转当前旋转角度的点，才举使图形移动不正常
        if (this.transform.rotateZ && (newCenter.x !== center.x || newCenter.y !== center.y)) {
            var targetCenter = util.rotatePoints(__assign({}, newCenter), center, this.transform.rotateZ);
            this.move(targetCenter.x - newCenter.x, targetCenter.y - newCenter.y);
        }
        // x,y旋转
        if (args.skew.x || args.skew.y) {
            this.target.transform.rotateX += args.skew.x;
            this.target.transform.rotateY += args.skew.y;
            this.target.transform.apply();
        }
        this.applyToTarget();
    };
    // 因为旋转后坐标要回原才好计算操作，
    JControllerComponent.prototype.getRotateEventPosition = function (e, rotation, center) {
        if (rotation === void 0) { rotation = this.transform.rotateZ; }
        if (center === void 0) { center = this.center; }
        var offX = e.offX, offY = e.offY, oldPosition = e.oldPosition, newPosition = e.newPosition;
        // 先回原坐标，再主算偏移量，这样保证操作更容易理解
        if (rotation) {
            var _a = __read(util.rotatePoints([oldPosition, newPosition], center, -rotation), 2), pos1 = _a[0], pos2 = _a[1];
            offX = pos2.x - pos1.x;
            offY = pos2.y - pos1.y;
        }
        return {
            offX: offX,
            offY: offY,
            center: center
        };
    };
    // 发生旋转
    JControllerComponent.prototype.rotateChange = function (e, args) {
        var e_1, _a;
        var oldPosition = e.oldPosition, newPosition = e.newPosition;
        var center = {
            x: util.toNumber(this.data.left) + util.toNumber(this.data.width) / 2,
            y: util.toNumber(this.data.top) + util.toNumber(this.data.height) / 2,
        };
        // 编辑器坐标
        var pos1 = this.editor.toEditorPosition(oldPosition);
        var pos2 = this.editor.toEditorPosition(newPosition);
        // 因为center是相对于编辑器的，所以事件坐标也需要转到编辑器
        var cx1 = pos1.x - center.x;
        var cy1 = pos1.y - center.y;
        var angle1 = Math.atan(cy1 / cx1);
        var cx2 = pos2.x - center.x;
        var cy2 = pos2.y - center.y;
        var angle2 = Math.atan(cy2 / cx2);
        if (angle1 >= 0 && angle2 < 0) {
            if (cx1 >= 0 && cy1 >= 0 && cx2 <= 0 && cy2 >= 0)
                angle2 = Math.PI + angle2;
            else if (cx1 <= 0 && cy1 <= 0 && cx2 >= 0 && cy2 <= 0)
                angle2 = Math.PI + angle2;
            //else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
        }
        else if (angle1 <= 0 && angle2 >= 0) {
            if (cx1 >= 0 && cy1 <= 0 && cx2 < 0)
                angle2 = angle2 - Math.PI;
            else
                angle2 = -angle2;
        }
        else if (angle1 >= 0 && angle2 > 0) {
            //if(cy2 === 0) angle2 = 0;
        }
        args.rotation = angle2 - angle1;
        if (args.rotation) {
            this.transform.rotateZ += args.rotation;
            if (Math.abs(this.transform.rotateZ) > fullCircleRadius)
                this.transform.rotateZ = this.transform.rotateZ % fullCircleRadius;
            this.transform.apply();
            try {
                // 发生了旋转，要处理指针图标
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    item.resetCursor(this.transform.rotateZ);
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
    };
    // 把变换应用到目标元素
    JControllerComponent.prototype.applyToTarget = function () {
        if (!this.target)
            return;
        var pos = {
            x: util.toNumber(this.data.left) + (this.isEditor ? util.toNumber(this.target.data.left) : 0),
            y: util.toNumber(this.data.top) + (this.isEditor ? util.toNumber(this.target.data.top) : 0)
        };
        this.target.data.left = pos.x;
        this.target.data.top = pos.y;
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
    };
    // 重置
    JControllerComponent.prototype.reset = function (isEditor) {
        var e_2, _a;
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
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.transform.from({
            rotateZ: 0,
        });
    };
    // 绑定到操作的对象
    JControllerComponent.prototype.bind = function (target) {
        var e_3, _a;
        if (!target.editable)
            return;
        this.isEditor = target === this.editor;
        this.reset(this.isEditor);
        // 编辑器的话，需要把它的坐标转为相对于容器的
        var pos = {
            x: (this.isEditor ? 0 : util.toNumber(target.data.left)),
            y: (this.isEditor ? 0 : util.toNumber(target.data.top))
        };
        this.data.left = pos.x;
        this.data.top = pos.y;
        this.data.width = util.toNumber(target.data.width) + this.paddingSize * 2;
        this.data.height = util.toNumber(target.data.height) + this.paddingSize * 2;
        this.transform.from({
            // rotateX: target.transform.rotateX,
            // rotateY: target.transform.rotateY,
            rotateZ: target.transform.rotateZ,
            //scaleX: target.transform.scaleX,
            //scaleY: target.transform.scaleY,
            //scaleZ: target.transform.scaleZ,
        });
        this.target = target;
        this.data.visible = true;
        try {
            // 编辑器不让旋转和skew
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.data.visible = !this.isEditor && target.editable;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        // 如果是编辑器，则不能捕获事件
        /*this.css({
            pointerEvents: this.isEditor? 'none' : 'auto'
        });*/
    };
    // 解除绑定
    JControllerComponent.prototype.unbind = function (target) {
        if (this.target === target) {
            this.reset(false);
            this.data.visible = false;
        }
    };
    return JControllerComponent;
}(JControllerItem));
export default JControllerComponent;
