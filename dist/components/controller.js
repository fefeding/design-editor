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
import JElement from '../core/element';
// 鼠标指针
var GCursors = {
    'l': 'w-resize',
    'lt': 'nw-resize',
    't': 'n-resize',
    'tr': 'ne-resize',
    'r': 'e-resize',
    'rb': 'se-resize',
    'b': 's-resize',
    'lb': 'sw-resize',
    'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
    'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
};
// 控制元素移动和矩阵变换
var JControllerItem = /** @class */ (function (_super) {
    __extends(JControllerItem, _super);
    function JControllerItem(option) {
        var _this = this;
        option.style = option.style || {};
        option.style.backgroundColor = option.style.backgroundColor || '#fff';
        option.style.border = option.style.border || '1px solid rgba(6,155,181,1)';
        option.style.position = 'absolute';
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
        _this.style.cursor = _this.style.cursor || GCursors[_this.dir];
        _this.width = _this.height = _this.size;
        _this.editor = option.editor;
        if (_this.editor) {
            // @ts-ignore
            _this.editor.view.on('mouseup', function (e) {
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
            _this.onDragStart(e);
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
    JControllerItem.prototype.onDragMove = function (event, pos) {
        if (pos === void 0) { pos = event; }
        if (!this.isMoving)
            return;
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
    JControllerItem.prototype.onDragStart = function (event, pos) {
        if (pos === void 0) { pos = event; }
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition = {
            x: pos.x,
            y: pos.y,
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
        // 先简单处理
        if (!rotation || (rotation > -Math.PI / 6 && rotation < Math.PI / 6)) {
            this.style.cursor = GCursors[this.dir];
        }
        else {
            this.style.cursor = 'move';
        }
    };
    return JControllerItem;
}(JElement));
export { JControllerItem };
// 元素大小位置控制器
var JControllerComponent = /** @class */ (function (_super) {
    __extends(JControllerComponent, _super);
    function JControllerComponent(option) {
        var _this = this;
        option.zIndex = 100000;
        option.style = option.style || {};
        option.style.cursor = option.style.cursor || 'move';
        option.dir = 'element';
        option.style.backgroundColor = option.style.backgroundColor || 'transparent';
        //option.style.boxShadow = '0 0 2px 2px #ccc';
        _this = _super.call(this, option) || this;
        _this.items = [];
        // 选择框边距
        _this.paddingSize = 1;
        _this.isEditor = false; // 当前关联是否是编辑器
        _this.init(option);
        // html2canvas不渲染
        _this.attr('data-html2canvas-ignore', 'true');
        _this.editor.dom.appendChild(_this.dom);
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
                border: 'none', boxShadow: '0 0 2px 2px #ccc', borderRadius: '50%', cursor: "pointer" }, option.itemStyle), { 'backgroundSize': '100%', backgroundImage: GCursors.rotate }),
            transform: {
                translateX: '-50%',
            }
        });
        this.skewItem = this.createItem('skew', {
            shape: 'circle',
            size: 24,
            style: __assign(__assign({ left: '50%', top: '50%', border: 'none', boxShadow: '0 0 2px 2px #ccc', borderRadius: '50%', cursor: "pointer" }, option.itemStyle), { 'backgroundSize': '100%', backgroundImage: GCursors.skew }),
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        }); // 旋转块 
        if (this.editor) {
            this.editor.on('mousedown', function (e) {
                if (!_this.isEditor)
                    return; // 不是编辑器，不处理
                _this.onDragStart(e);
            });
        }
        this.on('change', function (e) {
            _this.change(e);
        });
    };
    // 生成控制点
    JControllerComponent.prototype.createItem = function (id, option) {
        var item = new JControllerItem(__assign({ dir: id, editor: this.editor }, option));
        this.addChild(item);
        this.items.push(item);
        var self = this;
        item.on('change', function (e) {
            self.change(e);
            // 重置指针
            this.resetCursor(self.transform.rotateZ);
        });
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
                var pos = this.getRotateEventPosition(e);
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
                    var rx = offX / util.toNumber(this.width) * Math.PI;
                    var ry = offY / util.toNumber(this.height) * Math.PI;
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
            var width = util.toNumber(this.width) + args.width;
            this.width = Math.max(width, 1);
        }
        if (args.height) {
            this.height = Math.max(util.toNumber(this.height) + args.height, 1);
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
    JControllerComponent.prototype.getRotateEventPosition = function (e) {
        var offX = e.offX, offY = e.offY, oldPosition = e.oldPosition, newPosition = e.newPosition;
        // 先回原坐标，再主算偏移量，这样保证操作更容易理解
        if (this.transform.rotateZ) {
            var center = {
                x: util.toNumber(this.left) + util.toNumber(this.width) / 2,
                y: util.toNumber(this.top) + util.toNumber(this.height) / 2,
            };
            var _a = __read(util.rotatePoints([oldPosition, newPosition], center, -this.transform.rotateZ), 2), pos1 = _a[0], pos2 = _a[1];
            offX = pos2.x - pos1.x;
            offY = pos2.y - pos1.y;
        }
        return {
            offX: offX,
            offY: offY
        };
    };
    // 发生旋转
    JControllerComponent.prototype.rotateChange = function (e, args) {
        var oldPosition = e.oldPosition, newPosition = e.newPosition;
        var center = {
            x: util.toNumber(this.left) + util.toNumber(this.width) / 2,
            y: util.toNumber(this.top) + util.toNumber(this.height) / 2,
        };
        // 编辑器坐标
        var pos1 = util.toDomPosition(oldPosition, this.editor.dom);
        var pos2 = util.toDomPosition(newPosition, this.editor.dom);
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
            this.transform.apply();
        }
    };
    // 把变换应用到目标元素
    JControllerComponent.prototype.applyToTarget = function () {
        if (!this.target)
            return;
        var pos = {
            x: util.toNumber(this.left) + (this.isEditor ? util.toNumber(this.target.left) : 0),
            y: util.toNumber(this.top) + (this.isEditor ? util.toNumber(this.target.top) : 0)
        };
        this.target.left = pos.x;
        this.target.top = pos.y;
        // 编辑器相对位置一直是0
        if (this.isEditor) {
            this.left = 0;
            this.top = 0;
        }
        this.target.transform.from({
            //skewX: this.transform.skewX,
            //skewY: this.transform.skewY,
            rotateZ: this.transform.rotateZ,
        });
        var width = util.toNumber(this.width) - this.paddingSize * 2;
        var height = util.toNumber(this.height) - this.paddingSize * 2;
        if (this.target.width !== width)
            this.target.width = width;
        if (this.target.height !== height)
            this.target.height = height;
    };
    // 重置
    JControllerComponent.prototype.reset = function (isEditor) {
        var e_1, _a;
        if (isEditor === void 0) { isEditor = this.isEditor; }
        this.isMoving = false;
        delete this.target;
        try {
            // 编辑器不让旋转和skew
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.isMoving = false;
                item.visible = !isEditor;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.transform.from({
            rotateZ: 0,
        });
    };
    // 绑定到操作的对象
    JControllerComponent.prototype.bind = function (target) {
        this.isEditor = target === this.editor;
        this.reset(this.isEditor);
        // 编辑器的话，需要把它的坐标转为相对于容器的
        var pos = {
            x: (this.isEditor ? 0 : util.toNumber(target.left)),
            y: (this.isEditor ? 0 : util.toNumber(target.top))
        };
        this.left = pos.x;
        this.top = pos.y;
        this.width = util.toNumber(target.width) + this.paddingSize * 2;
        this.height = util.toNumber(target.height) + this.paddingSize * 2;
        this.transform.from({
            // rotateX: target.transform.rotateX,
            // rotateY: target.transform.rotateY,
            rotateZ: target.transform.rotateZ,
            //scaleX: target.transform.scaleX,
            //scaleY: target.transform.scaleY,
            //scaleZ: target.transform.scaleZ,
        });
        this.target = target;
        this.visible = true;
        // 如果是编辑器，则不能捕获事件
        this.css({
            pointerEvents: this.isEditor ? 'none' : 'auto'
        });
    };
    // 解除绑定
    JControllerComponent.prototype.unbind = function (target) {
        if (this.target === target) {
            this.reset(false);
        }
    };
    return JControllerComponent;
}(JControllerItem));
export default JControllerComponent;
