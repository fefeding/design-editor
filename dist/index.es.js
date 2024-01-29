(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styleMap = require("../constant/styleMap");
var _element = _interopRequireDefault(require("../core/element"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var JBaseComponent = /** @class */function (_super) {
  __extends(JBaseComponent, _super);
  function JBaseComponent(option) {
    if (option === void 0) {
      option = {};
    }
    var _this = this;
    option.style = option.style || {};
    // position和overflow预设的值优先级最高
    option.style = Object.assign(__assign({}, _styleMap.ContainerDefaultStyle), option.style, {
      position: _styleMap.ContainerDefaultStyle.position,
      overflow: _styleMap.ContainerDefaultStyle.overflow
    });
    _this = _super.call(this, __assign(__assign({
      // 外层只响应Z轴旋转
      transformWatchProps: ['rotateZ', 'scaleX', 'scaleY']
    }, option), {
      nodeType: 'div',
      className: 'j-design-editor-container'
    })) || this;
    // 选中
    _this._selected = false;
    option.target = option.target || {};
    // 生成当前控制的元素
    _this.target = new _element["default"](__assign(__assign({}, option), {
      // 不响应本身的变换，只响应父级的
      transformWatchProps: [],
      width: '100%',
      height: '100%',
      style: {
        display: 'block',
        cursor: 'pointer'
      }
    }));
    _this.addChild(_this.target);
    // 变换改为控制主元素
    _this.transform.bind({
      target: _this.target,
      watchProps: ['rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY']
    });
    // 刷新样式
    _this.style.refresh();
    return _this;
  }
  Object.defineProperty(JBaseComponent.prototype, "selected", {
    get: function get() {
      return this._selected;
    },
    set: function set(v) {
      this._selected = v;
      this.emit('select', v);
    },
    enumerable: false,
    configurable: true
  });
  // 设置css到dom
  JBaseComponent.prototype.setDomStyle = function (name, value) {
    // 如果外层容器的样式，则加到container上
    if (name in _styleMap.ContainerDefaultStyle || name === 'transform') {
      _super.prototype.setDomStyle.call(this, name, value);
    } else {
      this.target && this.target.css(name, value);
    }
  };
  JBaseComponent.prototype.toJSON = function (props) {
    var _this = this;
    if (props === void 0) {
      props = [];
    }
    // 转json忽略渲染组件
    return _super.prototype.toJSON.call(this, props, function (el) {
      return el !== _this.target;
    });
  };
  return JBaseComponent;
}(_element["default"]);
var _default = exports["default"] = JBaseComponent;

},{"../constant/styleMap":5,"../core/element":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.JControllerItem = void 0;
var _util = _interopRequireDefault(require("../lib/util"));
var _element = _interopRequireDefault(require("../core/element"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
var JControllerItem = exports.JControllerItem = /** @class */function (_super) {
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
      y: 0
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
        if (e.target !== _this.editor.dom) return; // 不是out编辑器，不处理
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
    get: function get() {
      return this._isMoving;
    },
    set: function set(v) {
      this._isMoving = v;
    },
    enumerable: false,
    configurable: true
  });
  JControllerItem.prototype.onDragMove = function (event, pos) {
    if (pos === void 0) {
      pos = event;
    }
    if (!this.isMoving) return;
    var offX = pos.x - this.dragStartPosition.x;
    var offY = pos.y - this.dragStartPosition.y;
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
    if (pos === void 0) {
      pos = event;
    }
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
    if (pos === void 0) {
      pos = event;
    }
    if (this.isMoving) {
      this.isMoving = false;
    }
  };
  // 计算指针
  JControllerItem.prototype.resetCursor = function (rotation) {
    // 先简单处理
    if (!rotation || rotation > -Math.PI / 6 && rotation < Math.PI / 6) {
      this.style.cursor = GCursors[this.dir];
    } else {
      this.style.cursor = 'move';
    }
  };
  return JControllerItem;
}(_element["default"]);
// 元素大小位置控制器
var JControllerComponent = /** @class */function (_super) {
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
      style: __assign(__assign({}, option.itemStyle), {
        left: 0,
        top: '50%'
      }),
      transform: {
        translateX: '-50%',
        translateY: '-50%'
      }
    });
    this.createItem('lt', {
      shape: 'rect',
      style: __assign(__assign({}, option.itemStyle), {
        left: 0,
        top: 0
      }),
      transform: {
        translateX: '-50%',
        translateY: '-50%'
      }
    });
    this.createItem('t', {
      shape: 'rect',
      style: __assign(__assign({}, option.itemStyle), {
        left: '50%',
        top: 0
      }),
      transform: {
        translateX: '-50%',
        translateY: '-50%'
      }
    });
    this.createItem('tr', {
      shape: 'rect',
      style: __assign(__assign({}, option.itemStyle), {
        left: '100%',
        top: 0
      }),
      transform: {
        translateX: '-50%',
        translateY: '-50%'
      }
    });
    this.createItem('r', {
      shape: 'rect',
      style: __assign(__assign({}, option.itemStyle), {
        left: '100%',
        top: '50%'
      }),
      transform: {
        translateX: '-50%',
        translateY: '-50%'
      }
    });
    this.createItem('rb', {
      shape: 'rect',
      style: __assign(__assign({}, option.itemStyle), {
        left: '100%',
        top: '100%'
      }),
      transform: {
        translateX: '-50%',
        translateY: '-50%'
      }
    });
    this.createItem('b', {
      shape: 'rect',
      style: __assign(__assign({}, option.itemStyle), {
        left: '50%',
        top: '100%'
      }),
      transform: {
        translateX: '-50%',
        translateY: '-50%'
      }
    });
    this.createItem('lb', {
      shape: 'rect',
      style: __assign(__assign({}, option.itemStyle), {
        left: 0,
        top: '100%'
      }),
      transform: {
        translateX: '-50%',
        translateY: '-50%'
      }
    });
    // 旋转块
    this.rotateItem = this.createItem('rotate', {
      shape: 'circle',
      size: 24,
      style: __assign(__assign({
        left: '50%',
        top: '-40px',
        //backgroundColor: 'transparent',
        border: 'none',
        boxShadow: '0 0 2px 2px #ccc',
        borderRadius: '50%',
        cursor: "pointer"
      }, option.itemStyle), {
        'backgroundSize': '100%',
        backgroundImage: GCursors.rotate
      }),
      transform: {
        translateX: '-50%'
      }
    });
    this.skewItem = this.createItem('skew', {
      shape: 'circle',
      size: 24,
      style: __assign(__assign({
        left: '50%',
        top: '50%',
        border: 'none',
        boxShadow: '0 0 2px 2px #ccc',
        borderRadius: '50%',
        cursor: "pointer"
      }, option.itemStyle), {
        'backgroundSize': '100%',
        backgroundImage: GCursors.skew
      }),
      transform: {
        translateX: '-50%',
        translateY: '-50%'
      }
    }); // 旋转块 
    if (this.editor) {
      this.editor.on('mousedown', function (e) {
        if (!_this.isEditor) return; // 不是编辑器，不处理
        _this.onDragStart(e);
      });
    }
    this.on('change', function (e) {
      _this.change(e);
    });
  };
  // 生成控制点
  JControllerComponent.prototype.createItem = function (id, option) {
    var item = new JControllerItem(__assign({
      dir: id,
      editor: this.editor
    }, option));
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
    if (!this.target) return;
    var dir = e.dir,
      offX = e.offX,
      offY = e.offY;
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
    } else if (dir === 'element') {
      // 元素位置控制器
      args.x = offX;
      args.y = offY;
    } else {
      // 先回原坐标，再主算偏移量，这样保证操作更容易理解
      if (this.transform.rotateZ) {
        var pos = this.getRotateEventPosition(e);
        offX = pos.offX;
        offY = pos.offY;
      }
      switch (dir) {
        case 'l':
          {
            args.x = offX;
            args.width = -offX;
            break;
          }
        case 't':
          {
            args.y = offY;
            args.height = -offY;
            break;
          }
        case 'r':
          {
            args.width = offX;
            break;
          }
        case 'b':
          {
            args.height = offY;
            break;
          }
        case 'lt':
          {
            args.x = offX;
            args.width = -offX;
            args.y = offY;
            args.height = -offY;
            break;
          }
        case 'tr':
          {
            args.width = offX;
            args.y = offY;
            args.height = -offY;
            break;
          }
        case 'rb':
          {
            args.width = offX;
            args.height = offY;
            break;
          }
        case 'lb':
          {
            args.x = offX;
            args.width = -offX;
            args.height = offY;
            break;
          }
        case 'skew':
          {
            var rx = offX / _util["default"].toNumber(this.width) * Math.PI;
            var ry = offY / _util["default"].toNumber(this.height) * Math.PI;
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
      var width = _util["default"].toNumber(this.width) + args.width;
      this.width = Math.max(width, 1);
    }
    if (args.height) {
      this.height = Math.max(_util["default"].toNumber(this.height) + args.height, 1);
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
    var offX = e.offX,
      offY = e.offY,
      oldPosition = e.oldPosition,
      newPosition = e.newPosition;
    // 先回原坐标，再主算偏移量，这样保证操作更容易理解
    if (this.transform.rotateZ) {
      var center = {
        x: _util["default"].toNumber(this.left) + _util["default"].toNumber(this.width) / 2,
        y: _util["default"].toNumber(this.top) + _util["default"].toNumber(this.height) / 2
      };
      var _a = __read(_util["default"].rotatePoints([oldPosition, newPosition], center, -this.transform.rotateZ), 2),
        pos1 = _a[0],
        pos2 = _a[1];
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
    var oldPosition = e.oldPosition,
      newPosition = e.newPosition;
    var center = {
      x: _util["default"].toNumber(this.left) + _util["default"].toNumber(this.width) / 2,
      y: _util["default"].toNumber(this.top) + _util["default"].toNumber(this.height) / 2
    };
    // 编辑器坐标
    var pos1 = _util["default"].toDomPosition(oldPosition, this.editor.dom);
    var pos2 = _util["default"].toDomPosition(newPosition, this.editor.dom);
    // 因为center是相对于编辑器的，所以事件坐标也需要转到编辑器
    var cx1 = pos1.x - center.x;
    var cy1 = pos1.y - center.y;
    var angle1 = Math.atan(cy1 / cx1);
    var cx2 = pos2.x - center.x;
    var cy2 = pos2.y - center.y;
    var angle2 = Math.atan(cy2 / cx2);
    if (angle1 >= 0 && angle2 < 0) {
      if (cx1 >= 0 && cy1 >= 0 && cx2 <= 0 && cy2 >= 0) angle2 = Math.PI + angle2;else if (cx1 <= 0 && cy1 <= 0 && cx2 >= 0 && cy2 <= 0) angle2 = Math.PI + angle2;
      //else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
    } else if (angle1 <= 0 && angle2 >= 0) {
      if (cx1 >= 0 && cy1 <= 0 && cx2 < 0) angle2 = angle2 - Math.PI;else angle2 = -angle2;
    } else if (angle1 >= 0 && angle2 > 0) {
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
    if (!this.target) return;
    var pos = {
      x: _util["default"].toNumber(this.left) + (this.isEditor ? _util["default"].toNumber(this.target.left) : 0),
      y: _util["default"].toNumber(this.top) + (this.isEditor ? _util["default"].toNumber(this.target.top) : 0)
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
      rotateZ: this.transform.rotateZ
    });
    var width = _util["default"].toNumber(this.width) - this.paddingSize * 2;
    var height = _util["default"].toNumber(this.height) - this.paddingSize * 2;
    if (this.target.width !== width) this.target.width = width;
    if (this.target.height !== height) this.target.height = height;
  };
  // 重置
  JControllerComponent.prototype.reset = function (isEditor) {
    var e_1, _a;
    if (isEditor === void 0) {
      isEditor = this.isEditor;
    }
    this.isMoving = false;
    delete this.target;
    try {
      // 编辑器不让旋转和skew
      for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
        var item = _c.value;
        item.isMoving = false;
        item.visible = !isEditor;
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    this.transform.from({
      rotateZ: 0
    });
  };
  // 绑定到操作的对象
  JControllerComponent.prototype.bind = function (target) {
    this.isEditor = target === this.editor;
    this.reset(this.isEditor);
    // 编辑器的话，需要把它的坐标转为相对于容器的
    var pos = {
      x: this.isEditor ? 0 : _util["default"].toNumber(target.left),
      y: this.isEditor ? 0 : _util["default"].toNumber(target.top)
    };
    this.left = pos.x;
    this.top = pos.y;
    this.width = _util["default"].toNumber(target.width) + this.paddingSize * 2;
    this.height = _util["default"].toNumber(target.height) + this.paddingSize * 2;
    this.transform.from({
      // rotateX: target.transform.rotateX,
      // rotateY: target.transform.rotateY,
      rotateZ: target.transform.rotateZ
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
}(JControllerItem);
var _default = exports["default"] = JControllerComponent;

},{"../core/element":7,"../lib/util":12}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var JImage = /** @class */function (_super) {
  __extends(JImage, _super);
  function JImage(option) {
    if (option === void 0) {
      option = {};
    }
    var _this = _super.call(this, __assign(__assign({}, option), {
      nodeType: 'img'
    })) || this;
    _this.target.dom.onload = function (e) {
      _this.emit('load', e);
    };
    _this.target.dom.onerror = function (e) {
      _this.emit('error', e);
    };
    _this.target.attr('crossorigin', 'anonymous');
    _this.src = option.url || option.src || '';
    return _this;
  }
  Object.defineProperty(JImage.prototype, "src", {
    get: function get() {
      return this.target.dom.src;
    },
    set: function set(v) {
      this.target.dom.src = v;
    },
    enumerable: false,
    configurable: true
  });
  JImage.prototype.toJSON = function (props) {
    if (props === void 0) {
      props = [];
    }
    props.push('src');
    return _super.prototype.toJSON.call(this, props);
  };
  return JImage;
}(_base["default"]);
var _default = exports["default"] = JImage;

},{"./base":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var JText = /** @class */function (_super) {
  __extends(JText, _super);
  function JText(option) {
    if (option === void 0) {
      option = {};
    }
    var _this = _super.call(this, __assign(__assign({}, option), {
      nodeType: 'div'
    })) || this;
    if (option.text) _this.text = option.text;
    return _this;
  }
  Object.defineProperty(JText.prototype, "text", {
    get: function get() {
      return this.target.dom.innerText;
    },
    set: function set(v) {
      this.target.dom.innerText = v;
    },
    enumerable: false,
    configurable: true
  });
  JText.prototype.toJSON = function (props) {
    if (props === void 0) {
      props = [];
    }
    props.push('text');
    return _super.prototype.toJSON.call(this, props);
  };
  return JText;
}(_base["default"]);
var _default = exports["default"] = JText;

},{"./base":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.JElementStyleProperty = exports.JElementStyleDeclaration = exports.ContainerDefaultStyle = void 0;
var _eventemitter = _interopRequireDefault(require("eventemitter3"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var StyleNamesMap = [];
// 支持的样式属性列表
var JElementStyleDeclaration = exports.JElementStyleDeclaration = /** @class */function (_super) {
  __extends(JElementStyleDeclaration, _super);
  function JElementStyleDeclaration() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return JElementStyleDeclaration;
}(_eventemitter["default"]);
// 样式属性集合
var JElementStyleProperty = exports.JElementStyleProperty = /** @class */function () {
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
    this["float"] = '';
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
    this.zIndex = '';
  }
  return JElementStyleProperty;
}();
var JElementCssStyle = /** @class */function (_super) {
  __extends(JElementCssStyle, _super);
  function JElementCssStyle() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Object.defineProperty(JElementCssStyle.prototype, "names", {
    // 所有样式名称
    get: function get() {
      var e_1, _a;
      if (!StyleNamesMap.length) {
        var map = new JElementStyleProperty();
        var keys = Object.getOwnPropertyNames(map);
        try {
          for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var k = keys_1_1.value;
            if (typeof map[k] === 'string') StyleNamesMap.push(k);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1["return"])) _a.call(keys_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      return StyleNamesMap;
    },
    enumerable: false,
    configurable: true
  });
  return JElementCssStyle;
}(JElementStyleDeclaration);
var _default = exports["default"] = JElementCssStyle; // 最外层容器默认样式
var ContainerDefaultStyle = exports.ContainerDefaultStyle = {
  position: 'absolute',
  left: '0',
  top: '0',
  width: '10px',
  height: '10px',
  right: 'auto',
  bottom: 'auto',
  padding: '0',
  margin: '0',
  overflow: 'visible'
};

},{"eventemitter3":13}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _eventemitter = _interopRequireDefault(require("eventemitter3"));
var _util = _interopRequireDefault(require("../lib/util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Transform = /** @class */function (_super) {
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
    if (option) Object.assign(_this, option);
    if (targetOption) _this.bind(targetOption);
    return _this;
  }
  Object.defineProperty(Transform.prototype, "translateXString", {
    get: function get() {
      return "translateX(".concat(_util["default"].toPX(this.translateX), ")");
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Transform.prototype, "translateYString", {
    get: function get() {
      return "translateY(".concat(_util["default"].toPX(this.translateY), ")");
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Transform.prototype, "translateZString", {
    get: function get() {
      return "translateZ(".concat(_util["default"].toPX(this.translateZ), ")");
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Transform.prototype, "rotateXString", {
    get: function get() {
      return "rotateX(".concat(_util["default"].toRad(this.rotateX), ")");
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Transform.prototype, "rotateYString", {
    get: function get() {
      return "rotateY(".concat(_util["default"].toRad(this.rotateY), ")");
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Transform.prototype, "rotateZString", {
    get: function get() {
      return "rotateZ(".concat(_util["default"].toRad(this.rotateZ), ")");
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Transform.prototype, "scaleXString", {
    get: function get() {
      return "scaleX(".concat(this.scaleX, ")");
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Transform.prototype, "scaleYString", {
    get: function get() {
      return "scaleY(".concat(this.scaleY, ")");
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Transform.prototype, "scaleZString", {
    get: function get() {
      return "scaleZ(".concat(this.scaleZ, ")");
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Transform.prototype, "skewXString", {
    get: function get() {
      return "skewX(".concat(_util["default"].toRad(this.skewX), ")");
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Transform.prototype, "skewYString", {
    get: function get() {
      return "skewY(".concat(_util["default"].toRad(this.skewY), ")");
    },
    enumerable: false,
    configurable: true
  });
  Transform.prototype.from = function (data) {
    if (data) Object.assign(this, data);
  };
  // 生效
  Transform.prototype.apply = function (target) {
    var e_1, _a;
    if (target === void 0) {
      target = this.targets;
    }
    if (Array.isArray(target)) {
      try {
        for (var target_1 = __values(target), target_1_1 = target_1.next(); !target_1_1.done; target_1_1 = target_1.next()) {
          var t = target_1_1.value;
          this.apply(t);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (target_1_1 && !target_1_1.done && (_a = target_1["return"])) _a.call(target_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return;
    } else {
      if (target.target && target.target.css) target.target.css('transform', this.toString(target.watchProps));else if (target.target) target.target.style.transform = this.toString(target.watchProps);
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
    if (obj === void 0) {
      obj = {};
    }
    var transform = new Transform(obj, el);
    // 代理处理
    var proxy = new Proxy(transform, {
      get: function get(target, p, receiver) {
        var v = target[p];
        return v;
      },
      set: function set(target, p, value, receiver) {
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
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (watchProps_1_1 && !watchProps_1_1.done && (_a = watchProps_1["return"])) _a.call(watchProps_1);
      } finally {
        if (e_2) throw e_2.error;
      }
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
      skewY: this.skewY
    };
  };
  return Transform;
}(_eventemitter["default"]);
var _default = exports["default"] = Transform;

},{"../lib/util":12,"eventemitter3":13}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _eventemitter = _interopRequireDefault(require("eventemitter3"));
var _uuid = require("uuid");
var _transform = _interopRequireDefault(require("../constant/transform"));
var _style = _interopRequireDefault(require("./style"));
var _util = _interopRequireDefault(require("../lib/util"));
var _event = _interopRequireDefault(require("../core/event"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var JElement = /** @class */function (_super) {
  __extends(JElement, _super);
  function JElement(option) {
    if (option === void 0) {
      option = {};
    }
    var _this = _super.call(this) || this;
    _this.id = '';
    // 类型名称
    _this.type = '';
    // 子元素
    _this._children = [];
    // 复制属性
    for (var k in option) {
      var v = option[k];
      if (typeof k !== 'string' || typeof v !== 'string' || typeof v !== 'number') continue;
      _this[k] = v;
    }
    _this.id = _this.id || option.id || (0, _uuid.v4)().replace(/-/g, '');
    _this.type = _this.type || option.type || '';
    var nodeType = option.nodeType || 'div';
    _this.dom = document.createElement(nodeType);
    // 样式代理处理
    _this.style = _style["default"].createProxy();
    _this.style.on('change', function (s) {
      _this.setDomStyle(s.name, s.value);
    });
    if (option.style) _this.style.apply(option.style);
    // 变换控制的是核心元素
    _this.transform = _transform["default"].createProxy(option.transform, {
      target: _this,
      // 如果指定了只响应某几个属性
      watchProps: option.transformWatchProps
    });
    _this.initOption(option);
    _this.bindEvent(); // 事件绑定
    return _this;
  }
  // 初始化一些基础属性
  JElement.prototype.initOption = function (option) {
    this.x = option.x || option.left || this.x || 0;
    this.y = option.y || option.top || this.y || 0;
    this.width = option.width || option.width || this.width || 1;
    this.height = option.height || option.height || this.height || 1;
    if (typeof option.rotation !== 'undefined') this.rotation = option.rotation;
    if (typeof option.angle !== 'undefined') this.angle = option.angle;
    if (typeof option.zIndex !== 'undefined') this.zIndex = option.zIndex;
    if (typeof option.visible !== 'undefined') this.visible = !!option.visible;
    if (option.className) this.className = option.className;
  };
  // 绑定事件
  JElement.prototype.bindEvent = function (dom) {
    var _this = this;
    // 事件托管
    this.event = new _event["default"](dom || this.dom);
    this.event.init(function (e) {
      _this.emit(e.type, e);
    });
  };
  Object.defineProperty(JElement.prototype, "children", {
    get: function get() {
      return this._children;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "x", {
    // 坐标X
    get: function get() {
      var v = this.style.left || 0;
      return v;
    },
    set: function set(v) {
      this.style.left = v;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "y", {
    // 坐标Y
    get: function get() {
      var v = this.style.top || 0;
      return v;
    },
    set: function set(v) {
      this.style.top = v;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "top", {
    get: function get() {
      return this.y;
    },
    set: function set(v) {
      this.y = v;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "left", {
    get: function get() {
      return this.x;
    },
    set: function set(v) {
      this.x = v;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "right", {
    // 坐标right
    get: function get() {
      var v = this.style.right || 0;
      return v;
    },
    set: function set(v) {
      this.style.right = v;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "bottom", {
    // 坐标bottom
    get: function get() {
      var v = this.style.bottom || 0;
      return v;
    },
    set: function set(v) {
      this.style.bottom = v;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "width", {
    get: function get() {
      var w = this.style.width || 0;
      if (!w && this.dom && this.dom.clientWidth) return this.dom.clientWidth;
      return w;
    },
    set: function set(v) {
      this.style.width = v;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "height", {
    get: function get() {
      var h = this.style.height || 0;
      if (!h && this.dom && this.dom.clientHeight) return this.dom.clientHeight;
      return h;
    },
    set: function set(v) {
      this.style.height = v;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "rotation", {
    get: function get() {
      var v = this.transform.rotateZ;
      return v;
    },
    // 旋转弧度
    set: function set(v) {
      this.transform.rotateZ = v;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "angle", {
    get: function get() {
      return _util["default"].radToDeg(this.transform.rotateZ);
    },
    // 旋转角度
    set: function set(v) {
      this.transform.rotateZ = _util["default"].degToRad(v);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "visible", {
    get: function get() {
      return this.style.display !== 'none';
    },
    set: function set(v) {
      this.style.display = v ? 'block' : 'none';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "zIndex", {
    get: function get() {
      return Number(this.style.zIndex || '0');
    },
    set: function set(v) {
      this.style.zIndex = v + '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "className", {
    get: function get() {
      return this.dom.className;
    },
    set: function set(v) {
      this.dom.className = v;
    },
    enumerable: false,
    configurable: true
  });
  // 设置css到dom
  JElement.prototype.setDomStyle = function (name, value) {
    if (name === 'backgroundImage' && value) {
      if (!/^\s*url\(/.test(value)) value = "url(".concat(value, ")");
    }
    _util["default"].css(this.dom, name, value);
  };
  // 设置样式
  JElement.prototype.css = function (name, value) {
    _util["default"].css(this, name, value);
    return this;
  };
  // dom属性
  JElement.prototype.attr = function (name, value) {
    return _util["default"].attr(this.dom, name, value);
  };
  // 移位
  JElement.prototype.move = function (dx, dy) {
    this.left = _util["default"].toNumber(this.left) + dx;
    this.top = _util["default"].toNumber(this.top) + dy;
    this.emit('move', {
      dx: dx,
      dy: dy
    });
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
    var e_1, _a;
    if (parent === void 0) {
      parent = this;
    }
    if (Array.isArray(child)) {
      try {
        for (var child_1 = __values(child), child_1_1 = child_1.next(); !child_1_1.done; child_1_1 = child_1.next()) {
          var c = child_1_1.value;
          parent.addChild(c);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (child_1_1 && !child_1_1.done && (_a = child_1["return"])) _a.call(child_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return parent;
    }
    if (child instanceof JElement) {
      child.parent = parent;
      parent.dom.appendChild(child.dom);
      parent.children.push(child);
    } else if (child instanceof HTMLElement) {
      parent.dom.appendChild(child);
    }
  };
  // 移除自已
  JElement.prototype.remove = function () {
    if (this.parent) this.parent.removeChild(this);
  };
  // 移除子元素
  JElement.prototype.removeChild = function (el) {
    // @ts-ignore
    this.dom.removeChild(el.dom || el);
    for (var i = this.children.length - 1; i > -1; i--) {
      if (this.children[i] === el) return this.children.splice(i, 1);
    }
    // @ts-ignore
    delete el.parent;
  };
  // 转为json
  JElement.prototype.toJSON = function (props, ig) {
    var e_2, _a, e_3, _b;
    if (props === void 0) {
      props = [];
    }
    if (ig === void 0) {
      ig = function ig(p) {
        return true;
      };
    }
    var fields = __spreadArray(['left', 'top', 'width', 'height', 'rotation', 'type', 'style', 'transform', 'id'], __read(props), false);
    var obj = {
      children: []
    };
    try {
      for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
        var k = fields_1_1.value;
        var v = this[k];
        if (typeof v === 'string' || typeof v === 'number') {
          obj[k] = this[k];
        } else if (v && v.toJSON) {
          obj[k] = v.toJSON();
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (fields_1_1 && !fields_1_1.done && (_a = fields_1["return"])) _a.call(fields_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    //if(this.transform) obj['transform'] = this.transform.toJSON();
    if (this.children && this.children.length) {
      try {
        for (var _c = __values(this.children), _d = _c.next(); !_d.done; _d = _c.next()) {
          var child = _d.value;
          if (child === this || ig(child) === false) continue;
          obj.children.push(child.toJSON());
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_b = _c["return"])) _b.call(_c);
        } finally {
          if (e_3) throw e_3.error;
        }
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
}(_eventemitter["default"]);
var _default = exports["default"] = JElement;

},{"../constant/transform":6,"../core/event":8,"../lib/util":12,"./style":9,"eventemitter3":13,"uuid":14}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _util = _interopRequireDefault(require("../lib/util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var SupportEventNames = ['mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout', 'mousewheel', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'blur', 'change', 'focus', 'drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop'];
var JEvent = /** @class */function () {
  function JEvent(target) {
    if (target) this.target = target;
  }
  // 初始化所有支持的事件
  JEvent.prototype.init = function (handler, target) {
    if (target) this.target = target;
    this.bindEvent(SupportEventNames, handler, false, target);
  };
  /**
   * 绑定事件到html对象
   *
   * @method bindEvent
   * @static
   * @param {element} html元素对象
   * @param {string} name 事件名称
   * @param {function} fun 事件委托
   * @returns {name, fun, target} 返回当前绑定
   */
  JEvent.prototype.bindEvent = function (name, fun, opt, target) {
    var e_1, _a;
    if (opt === void 0) {
      opt = false;
    }
    if (target === void 0) {
      target = this.target;
    }
    if (Array.isArray(name)) {
      try {
        for (var name_1 = __values(name), name_1_1 = name_1.next(); !name_1_1.done; name_1_1 = name_1.next()) {
          var n = name_1_1.value;
          this.bindEvent(n, fun, opt, target);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (name_1_1 && !name_1_1.done && (_a = name_1["return"])) _a.call(name_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return this;
    }
    if (name && name.indexOf && name.indexOf(' ') != -1) {
      var ns = name.split(' ');
      return this.bindEvent(ns, fun, opt, target);
    }
    /*// @ts-ignore
    if(target.attachEvent) {
        // @ts-ignore
        target.attachEvent("on"+name, fun, opt);
    } */
    if (target.addEventListener) {
      target.addEventListener(name, fun, opt);
    }
    return this;
  };
  /**
   * 从对象中移除事件到
   *
   * @method removeEvent
   * @static
   * @param {element} html元素对象
   * @param {string} name 事件名称
   * @param {function} fun 事件委托
   */
  JEvent.prototype.removeEvent = function (name, fun, opt, target) {
    if (opt === void 0) {
      opt = false;
    }
    if (target === void 0) {
      target = this.target;
    }
    if (target.removeEventListener) {
      target.removeEventListener(name, fun, opt);
    }
    // @ts-ignore  
    else if (target.detachEvent) {
      // @ts-ignore
      target.detachEvent('on' + name, fun, opt);
    } else {
      target['on' + name] = null;
    }
    return this;
  };
  /**
   * 获取元素事件触发的位置
   *
   * @method getEventPosition
   * @static
   * @param {eventArg} evt 当前触发事件的参数
   * @return {point} 事件触发的位置
   */
  JEvent.prototype.getEventPosition = function (evt, target) {
    var isTouch = false;
    if (evt instanceof TouchEvent) {
      var touches = evt.changedTouches || evt.targetTouches || evt.touches;
      // @ts-ignore
      evt = touches[0]; //兼容touch事件
      isTouch = true;
    }
    var px = evt.pageX || evt.x;
    if (typeof px == 'undefined') px = evt.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
    var py = evt.pageY || evt.y;
    if (typeof py == 'undefined') py = evt.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
    var ox = evt.offsetX;
    var oy = evt.offsetY;
    if (typeof ox === 'undefined' && typeof oy === 'undefined' || target) {
      var p = _util["default"].getElementPosition(target || evt.target);
      ox = px - p.x;
      oy = py - p.y;
    }
    return {
      x: ox,
      y: oy,
      pageX: px,
      pageY: py,
      isTouch: isTouch
    };
  };
  return JEvent;
}();
var _default = exports["default"] = JEvent;

},{"../lib/util":12}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styleMap = _interopRequireDefault(require("../constant/styleMap"));
var _util = _interopRequireDefault(require("../lib/util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var NumberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];
var JElementStyle = /** @class */function (_super) {
  __extends(JElementStyle, _super);
  function JElementStyle(option) {
    var _this = _super.call(this) || this;
    if (option) {
      _this.apply(option);
    }
    return _this;
  }
  // 把样式应用到元素或当前对象
  JElementStyle.prototype.apply = function (data, target) {
    var e_1, _a;
    if (target === void 0) {
      target = this;
    }
    try {
      for (var _b = __values(this.names), _c = _b.next(); !_c.done; _c = _b.next()) {
        var name_1 = _c.value;
        if (typeof name_1 !== 'string') continue;
        if (typeof data[name_1] === 'string' || typeof data[name_1] === 'number') {
          if (target instanceof JElementStyle) {
            target.setStyle(name_1, data[name_1]);
          } else {
            target[name_1] = data[name_1];
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
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
  JElementStyle.prototype.toJSON = function () {
    var e_2, _a;
    var obj = {};
    try {
      for (var _b = __values(this.names), _c = _b.next(); !_c.done; _c = _b.next()) {
        var name_2 = _c.value;
        if (typeof this[name_2] === 'undefined') continue;
        obj[name_2] = this[name_2];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    return obj;
  };
  // 生成样式代理
  JElementStyle.createProxy = function (style) {
    if (style === void 0) {
      style = {};
    }
    var jstyle = new JElementStyle(style);
    // 样式代理处理
    var proxy = new Proxy(jstyle, {
      get: function get(target, p, receiver) {
        var v = target[p];
        // 数字样式，处理px问题
        if (typeof p === 'string' && NumberStyleMap.includes(p)) {
          if (v === '0') return 0;
          if (_util["default"].isPXNumber(v)) return parseFloat(v);
        }
        return v;
      },
      set: function set(target, p, value, receiver) {
        // 非白名单样式不支持设置
        if (typeof p !== 'string' || !target.names.includes(p)) {
          target[p] = value;
          return true;
        }
        // 数字样式，处理px问题
        if (NumberStyleMap.includes(p)) {
          value = typeof value === 'number' || _util["default"].isNumber(value) ? "".concat(value, "px") : value;
        }
        target.setStyle(p, value); // 应用到元素和类
        return true;
      }
    });
    return proxy;
  };
  return JElementStyle;
}(_styleMap["default"]);
var _default = exports["default"] = JElementStyle;

},{"../constant/styleMap":5,"../lib/util":12}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JEditor = void 0;
Object.defineProperty(exports, "JImage", {
  enumerable: true,
  get: function get() {
    return _image["default"];
  }
});
Object.defineProperty(exports, "JText", {
  enumerable: true,
  get: function get() {
    return _text["default"];
  }
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./components/base"));
var _text = _interopRequireDefault(require("./components/text"));
var _image = _interopRequireDefault(require("./components/image"));
var _element = _interopRequireDefault(require("./core/element"));
var _controller = _interopRequireDefault(require("./components/controller"));
var _util = _interopRequireDefault(require("./lib/util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var JEditor = exports.JEditor = /** @class */function (_super) {
  __extends(JEditor, _super);
  function JEditor(option) {
    if (option === void 0) {
      option = {};
    }
    var _this = this;
    option.style = option.style || {};
    Object.assign(option.style, {
      'boxShadow': '0 0 10px 10px #ccc',
      'position': 'absolute',
      'backgroundSize': '100% 100%'
    });
    // 外层只响应Z轴旋转
    option.transformWatchProps = ['rotateZ', 'scaleX', 'scaleY'];
    _this = _super.call(this, option) || this;
    // 所有支持的类型
    _this.shapes = new Map();
    if (typeof option.container === 'string') option.container = document.getElementById(option.container);
    _this.view = new _element["default"]({
      style: {
        'border': 0,
        'padding': 0,
        'margin': 0,
        'position': 'relative',
        'width': '100%',
        'height': '100%'
      }
    });
    /*// 变换改为控制主元素
    this.transform.bind({
        target: this.view,
        watchProps: [
            'scaleX', 'scaleY'
        ]
    });*/
    _this.target.css({
      'overflow': 'hidden'
    });
    if (option.container) option.container.appendChild(_this.view.dom);
    _this.view.addChild(_this.dom);
    // @ts-ignore
    _this.regShape('image', _image["default"]);
    // @ts-ignore
    _this.regShape('text', _text["default"]);
    _this.init(option);
    _this.bindEvent(_this.view.dom);
    return _this;
  }
  // 初始化整个编辑器
  JEditor.prototype.init = function (option) {
    var _this = this;
    if (option.style.containerBackgroundColor) this.dom.style.backgroundColor = option.style.containerBackgroundColor;
    // 生成控制器
    this.elementController = new _controller["default"]({
      editor: this,
      visible: false
    });
    var styleNode = document.createElement('style');
    styleNode.innerHTML = ".j-design-editor-container {\n                                    border: 0;\n                                }\n                                .j-design-editor-container:hover {\n                                    box-shadow: 0 0 1px 1px rgba(255,255,255,0.5);\n                                }";
    this.view.addChild(styleNode);
    if (option.width && option.height) {
      this.resize(option.width, option.height);
    }
    this.on('select', function (e) {
      _this.select(_this); // 选中自已
    });
    this.on('mousedown', function (e) {
      this.selected = true;
      this.elementController.onDragStart(e);
    });
  };
  Object.defineProperty(JEditor.prototype, "children", {
    // 重写子集为target
    get: function get() {
      return this.target.children;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JEditor.prototype, "selectedElements", {
    // 被选中的元素
    get: function get() {
      var e_1, _a;
      var res = [];
      try {
        for (var _b = __values(this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
          var el = _c.value;
          if (el instanceof _base["default"] && el.selected) {
            res.push(el);
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return res;
    },
    enumerable: false,
    configurable: true
  });
  // 绑定事件
  JEditor.prototype.bindEvent = function (dom) {
    if (this.view) _super.prototype.bindEvent.call(this, this.view.dom); // 编辑器事件绑到整个容器上
  };
  // 选中某个元素
  JEditor.prototype.select = function (el) {
    // 选把所有已选择的取消
    this.selectedElements.every(function (p) {
      return p !== el && p.selected && (p.selected = false);
    });
    if (el.selected) this.elementController.bind(el);else this.elementController.unbind(el);
  };
  JEditor.prototype.resize = function (width, height) {
    var _this = this;
    if (width === void 0) {
      width = this.width;
    }
    if (height === void 0) {
      height = this.height;
    }
    this.attr('data-size', "".concat(width, "*").concat(height));
    this.width = width;
    this.height = height;
    setTimeout(function () {
      _this.left = _util["default"].toNumber(_this.view.dom.clientWidth) / 2 - _util["default"].toNumber(width) / 2;
      _this.top = _util["default"].toNumber(_this.view.dom.clientHeight) / 2 - _util["default"].toNumber(height) / 2;
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
    child.on('select', function (v) {
      self.select(this);
    });
    child.on('mousedown', function (e) {
      this.selected = true;
      self.elementController.onDragStart(e);
    });
    return this.target.addChild(child, this);
  };
  // 移除
  JEditor.prototype.removeChild = function (el) {
    if (el === this.target) {
      //console.warn('不能移除自已');
      return;
    }
    if (el instanceof _element["default"]) {
      el.off('select');
      el.off('mousedown');
    }
    return this.target.removeChild(el);
  };
  // 把domcument坐标转为编辑器相对坐标
  JEditor.prototype.toEditorPosition = function (pos) {
    // 编辑器坐标
    var editorPos = _util["default"].getElementPosition(this.view.dom);
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
    this.elementController.visible = false;
  };
  // 缩放
  JEditor.prototype.scale = function (x, y) {
    if (y === void 0) {
      y = x;
    }
    if (x < 0.1 || y < 0.1) return;
    this.transform.scaleX = x;
    this.transform.scaleY = y;
  };
  // 注册自定义组件
  JEditor.prototype.regShape = function (name, shape) {
    if (this.shapes.has(name)) throw Error("\u5143\u7D20\u7C7B\u578B".concat(name, "\u5DF2\u7ECF\u5B58\u5728"));
    this.shapes.set(name, shape);
    return shape;
  };
  // 创建元素
  JEditor.prototype.createShape = function (type, option) {
    if (option === void 0) {
      option = {};
    }
    var shape = typeof type === 'string' ? this.shapes.get(type) : type;
    if (!shape) {
      throw Error("".concat(type, "\u4E0D\u5B58\u5728\u7684\u5143\u7D20\u7C7B\u578B"));
    }
    var el = new shape(__assign(__assign({}, option), {
      type: type
    }));
    return el;
  };
  // 创建图片元素
  JEditor.prototype.createImage = function (url, option) {
    if (option === void 0) {
      option = {};
    }
    var img = this.createShape('image', __assign(__assign({}, option), {
      url: url
    }));
    return img;
  };
  JEditor.prototype.fromJSON = function (data) {
    var e_2, _a;
    this.clear();
    if (typeof data === 'string') data = JSON.parse(data);
    if (data.style) {
      this.style.apply(data.style); // 应用样式
    }
    this.resize(data.width, data.height);
    try {
      for (var _b = __values(data.children), _c = _b.next(); !_c.done; _c = _b.next()) {
        var c = _c.value;
        if (!c.type) continue;
        var item = this.createShape(c.type, c);
        this.addChild(item);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
  };
  return JEditor;
}(_base["default"]);
var _default = exports["default"] = JEditor;

},{"./components/base":1,"./components/controller":2,"./components/image":3,"./components/text":4,"./core/element":7,"./lib/util":12}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "JBaseComponent", {
  enumerable: true,
  get: function get() {
    return _base["default"];
  }
});
Object.defineProperty(exports, "JEditor", {
  enumerable: true,
  get: function get() {
    return _editor["default"];
  }
});
Object.defineProperty(exports, "JElement", {
  enumerable: true,
  get: function get() {
    return _element["default"];
  }
});
Object.defineProperty(exports, "JImage", {
  enumerable: true,
  get: function get() {
    return _image["default"];
  }
});
Object.defineProperty(exports, "JText", {
  enumerable: true,
  get: function get() {
    return _text["default"];
  }
});
exports["default"] = void 0;
var _base = _interopRequireDefault(require("./components/base"));
var _text = _interopRequireDefault(require("./components/text"));
var _image = _interopRequireDefault(require("./components/image"));
var _element = _interopRequireDefault(require("./core/element"));
var _editor = _interopRequireDefault(require("./editor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _editor["default"];

},{"./components/base":1,"./components/image":3,"./components/text":4,"./core/element":7,"./editor":10}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _default = exports["default"] = {
  // 是否是数字
  isNumber: function isNumber(v) {
    return typeof v === 'number' || /^\s*[\d\.]+\s*$/.test(v);
  },
  // 是否是带像素单位的字符串
  isPXNumber: function isPXNumber(v) {
    return /^\s*[\d\.]+\s*px\s*/i.test(v);
  },
  // 是否是带角度单位的字符串
  isDegNumber: function isDegNumber(v) {
    return /^\s*[\d\.]+\s*deg\s*/i.test(v);
  },
  // 是否是带弧度单位的字符串
  isRadNumber: function isRadNumber(v) {
    return /^\s*[\d\.]+\s*rad\s*/i.test(v);
  },
  // 转为像素字符串格式 
  toPX: function toPX(v) {
    if (this.isNumber(v)) return v + 'px';
    return v;
  },
  // 带像素或其它单位的转换为数字
  toNumber: function toNumber(v) {
    if (this.isNumber(v)) return Number(v);else if (typeof v === 'string') return parseFloat(v);
  },
  // 弧度转角度
  radToDeg: function radToDeg(v) {
    return v * (180 / Math.PI);
  },
  // 角度转弧度
  degToRad: function degToRad(v) {
    return v * (Math.PI / 180);
  },
  // 转为角度格式
  toDeg: function toDeg(v) {
    if (this.isNumber(v)) return v + 'deg';
    if (typeof v === 'string' && this.isRadNumber(v)) return this.toDeg(this.radToDeg(parseFloat(v)));
    return v;
  },
  // 转为弧度格式
  toRad: function toRad(v) {
    if (this.isNumber(v)) return v + 'rad';
    if (typeof v === 'string' && this.isDegNumber(v)) return this.toRad(this.degToRad(parseFloat(v)));
    return v;
  },
  /**
   * 获取元素的绝对定位
   *
   * @method getElementPosition
   * @static
   * @param {element} el 目标元素对象
   * @return {position} 位置对象(top,left)
   */
  getElementPosition: function getElementPosition(el) {
    var pos = {
      "y": 0,
      "x": 0
    };
    if (!el) return pos;
    if (el.offsetParent) {
      while (el.offsetParent) {
        pos.y += el.offsetTop;
        pos.x += el.offsetLeft;
        el = el.offsetParent;
      }
    }
    // @ts-ignore
    else if (el.x) {
      // @ts-ignore
      pos.x += el.x;
    }
    // @ts-ignore
    else if (el.y) {
      // @ts-ignore
      pos.y += el.y;
    }
    return pos;
  },
  // 把domcument坐标转为指定元素相对坐标
  toDomPosition: function toDomPosition(pos, dom) {
    var domPos = this.getElementPosition(dom);
    return {
      x: pos.x - domPos.x,
      y: pos.y - domPos.y
    };
  },
  /**
   * 把一个或多个点绕某个点旋转一定角度
   * 先把坐标原点移到旋转中心点，计算后移回
   * @method rotatePoints
   * @static
   * @param {Array/object} p 一个或多个点
   * @param {x: number, y: number} rp 旋转中心点
   * @param {*} r 旋转角度
   */
  rotatePoints: function rotatePoints(p, center, r) {
    if (!r || !p) return p;
    var cos = Math.cos(r);
    var sin = Math.sin(r);
    if (Array.isArray(p)) {
      for (var i = 0; i < p.length; i++) {
        if (!p[i]) continue;
        var x1 = p[i].x - center.x;
        var y1 = p[i].y - center.y;
        p[i].x = x1 * cos - y1 * sin + center.x;
        p[i].y = x1 * sin + y1 * cos + center.y;
      }
    } else {
      var x1 = p.x - center.x;
      var y1 = p.y - center.y;
      p.x = x1 * cos - y1 * sin + center.x;
      p.y = x1 * sin + y1 * cos + center.y;
    }
    return p;
  },
  // 设置样式
  css: function css(dom, name, value) {
    var e_1, _a;
    if (!name) return;
    if (_typeof(name) === 'object') {
      try {
        for (var _b = __values(Object.getOwnPropertyNames(name)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var n = _c.value;
          this.css(dom, n, name[n]);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    } else {
      dom.style[name] = value;
    }
    return this;
  },
  // dom属性
  attr: function attr(dom, name, value) {
    if (typeof value !== 'undefined') {
      dom.setAttribute(name, value + '');
      return value;
    } else {
      return dom.getAttribute(name);
    }
  }
};

},{}],13:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NIL", {
  enumerable: true,
  get: function () {
    return _nil.default;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _parse.default;
  }
});
Object.defineProperty(exports, "stringify", {
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
});
Object.defineProperty(exports, "v1", {
  enumerable: true,
  get: function () {
    return _v.default;
  }
});
Object.defineProperty(exports, "v3", {
  enumerable: true,
  get: function () {
    return _v2.default;
  }
});
Object.defineProperty(exports, "v4", {
  enumerable: true,
  get: function () {
    return _v3.default;
  }
});
Object.defineProperty(exports, "v5", {
  enumerable: true,
  get: function () {
    return _v4.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function () {
    return _version.default;
  }
});

var _v = _interopRequireDefault(require("./v1.js"));

var _v2 = _interopRequireDefault(require("./v3.js"));

var _v3 = _interopRequireDefault(require("./v4.js"));

var _v4 = _interopRequireDefault(require("./v5.js"));

var _nil = _interopRequireDefault(require("./nil.js"));

var _version = _interopRequireDefault(require("./version.js"));

var _validate = _interopRequireDefault(require("./validate.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

var _parse = _interopRequireDefault(require("./parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./nil.js":17,"./parse.js":18,"./stringify.js":22,"./v1.js":23,"./v3.js":24,"./v4.js":26,"./v5.js":27,"./validate.js":28,"./version.js":29}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports.default = _default;
},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = {
  randomUUID
};
exports.default = _default;
},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports.default = _default;
},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports.default = _default;
},{"./validate.js":28}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports.default = _default;
},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports.default = _default;
},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.unsafeStringify = unsafeStringify;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports.default = _default;
},{"./validate.js":28}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rng = _interopRequireDefault(require("./rng.js"));

var _stringify = require("./stringify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.unsafeStringify)(b);
}

var _default = v1;
exports.default = _default;
},{"./rng.js":20,"./stringify.js":22}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("./v35.js"));

var _md = _interopRequireDefault(require("./md5.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports.default = _default;
},{"./md5.js":15,"./v35.js":25}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL = exports.DNS = void 0;
exports.default = v35;

var _stringify = require("./stringify.js");

var _parse = _interopRequireDefault(require("./parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
},{"./parse.js":18,"./stringify.js":22}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _native = _interopRequireDefault(require("./native.js"));

var _rng = _interopRequireDefault(require("./rng.js"));

var _stringify = require("./stringify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default = v4;
exports.default = _default;
},{"./native.js":16,"./rng.js":20,"./stringify.js":22}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("./v35.js"));

var _sha = _interopRequireDefault(require("./sha1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports.default = _default;
},{"./sha1.js":21,"./v35.js":25}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = _interopRequireDefault(require("./regex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports.default = _default;
},{"./regex.js":19}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
exports.default = _default;
},{"./validate.js":28}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2NvbXBvbmVudHMvYmFzZS5qcyIsImRpc3QvY29tcG9uZW50cy9jb250cm9sbGVyLmpzIiwiZGlzdC9jb21wb25lbnRzL2ltYWdlLmpzIiwiZGlzdC9jb21wb25lbnRzL3RleHQuanMiLCJkaXN0L2NvbnN0YW50L3N0eWxlTWFwLmpzIiwiZGlzdC9jb25zdGFudC90cmFuc2Zvcm0uanMiLCJkaXN0L2NvcmUvZWxlbWVudC5qcyIsImRpc3QvY29yZS9ldmVudC5qcyIsImRpc3QvY29yZS9zdHlsZS5qcyIsImRpc3QvZWRpdG9yLmpzIiwiZGlzdC9pbmRleC5qcyIsImRpc3QvbGliL3V0aWwuanMiLCJub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L21kNS1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9uYXRpdmUtYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvbmlsLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9wYXJzZS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvcmVnZXguanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9zaGExLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdjEuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3YzLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC92MzUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3Y0LmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC92NS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdmFsaWRhdGUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3ZlcnNpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUMwQkEsSUFBQSxTQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsUUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUF1QyxTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUEzQnZDLElBQUksU0FBUyxHQUFJLFVBQVEsU0FBSyxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJLGNBQWEsR0FBRyxTQUFBLGNBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNoQyxjQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFDaEM7TUFBRSxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtNQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUUsQ0FBQztJQUNyRyxPQUFPLGNBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RixjQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FB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LEVBQUUsU0FBUyxDQUFDO0FBQzFDLENBQUM7QUFDRCxJQUFJLE1BQU0sR0FBSSxVQUFRLFNBQUssTUFBTSxJQUFLLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUNsRCxJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDMUQsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7RUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDO0lBQUUsRUFBRSxHQUFHLEVBQUU7SUFBRSxDQUFDO0VBQ2hDLElBQUk7SUFDQSxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7RUFDOUUsQ0FBQyxDQUNELE9BQU8sS0FBSyxFQUFFO0lBQUUsQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFO0lBQU0sQ0FBQztFQUFFLENBQUMsU0FDL0I7SUFDSixJQUFJO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDLFNBQ087TUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLO0lBQUU7RUFDcEM7RUFDQSxPQUFPLEVBQUU7QUFDYixDQUFDO0FBQ0QsSUFBSSxRQUFRLEdBQUksVUFBUSxTQUFLLFFBQVEsSUFBSyxVQUFTLENBQUMsRUFBRTtFQUNsRCxJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLFFBQVE7SUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDLEdBQUcsQ0FBQztFQUM3RSxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3ZCLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUUsT0FBTztJQUMxQyxJQUFJLEVBQUUsU0FBQSxLQUFBLEVBQVk7TUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO01BQ2xDLE9BQU87UUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUFFLElBQUksRUFBRSxDQUFDO01BQUUsQ0FBQztJQUMzQztFQUNKLENBQUM7RUFDRCxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyx5QkFBeUIsR0FBRyxpQ0FBaUMsQ0FBQztBQUMxRixDQUFDO0FBR0Q7QUFDQSxJQUFJLFFBQVEsR0FBRztFQUNYLEdBQUcsRUFBRSxVQUFVO0VBQ2YsSUFBSSxFQUFFLFdBQVc7RUFDakIsR0FBRyxFQUFFLFVBQVU7RUFDZixJQUFJLEVBQUUsV0FBVztFQUNqQixHQUFHLEVBQUUsVUFBVTtFQUNmLElBQUksRUFBRSxXQUFXO0VBQ2pCLEdBQUcsRUFBRSxVQUFVO0VBQ2YsSUFBSSxFQUFFLFdBQVc7RUFDakIsUUFBUSxFQUFFLG93QkFBb3dCO0VBQzl3QixNQUFNLEVBQUU7QUFDWixDQUFDO0FBQ0Q7QUFDQSxJQUFJLGVBQWUsR0FBQSxPQUFBLENBQUEsZUFBQSxHQUFHLGFBQWUsVUFBVSxNQUFNLEVBQUU7RUFDbkQsU0FBUyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUM7RUFDbEMsU0FBUyxlQUFlLENBQUMsTUFBTSxFQUFFO0lBQzdCLElBQUksS0FBSyxHQUFHLElBQUk7SUFDaEIsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxNQUFNO0lBQ3JFLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLDZCQUE2QjtJQUMxRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVO0lBQ2xDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJO0lBQ3pDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRTtJQUNkLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNkLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSztJQUN2QjtJQUNBLEtBQUssQ0FBQyxpQkFBaUIsR0FBRztNQUN0QixDQUFDLEVBQUUsQ0FBQztNQUNKLENBQUMsRUFBRTtJQUNQLENBQUM7SUFDRCxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRTtJQUM1QixLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQztJQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5RCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUk7SUFDdkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTTtJQUM1QixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7TUFDZDtNQUNBLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLEVBQUU7UUFDekMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7TUFDdEIsQ0FBQyxDQUFDO01BQ0Y7TUFDQSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1FBQzFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFDN0IsT0FBTyxDQUFDO1FBQ1osS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7TUFDdEIsQ0FBQyxDQUFDO01BQ0Y7TUFDQSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO1FBQzNDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO01BQ3ZCLENBQUMsQ0FBQztJQUNOO0lBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUU7TUFDL0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxLQUFLO0VBQ2hCO0VBQ0EsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRTtJQUN6RCxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixPQUFPLElBQUksQ0FBQyxTQUFTO0lBQ3pCLENBQUM7SUFDRCxHQUFHLEVBQUUsU0FBQSxJQUFVLENBQUMsRUFBRTtNQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FBQztFQUNGLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6RCxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUFFLEdBQUcsR0FBRyxLQUFLO0lBQUU7SUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ2Q7SUFDSixJQUFJLElBQUksR0FBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFFO0lBQzdDLElBQUksSUFBSSxHQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUU7SUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7TUFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO01BQ2IsSUFBSSxFQUFFLElBQUk7TUFDVixJQUFJLEVBQUUsSUFBSTtNQUNWLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCO01BQ25DLFdBQVcsRUFBRTtRQUNULENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDWCxDQUFDO01BQ0QsS0FBSyxFQUFFO0lBQ1gsQ0FBQyxDQUFDO0lBQ0Y7SUFDQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDaEMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZCLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztFQUMxQixDQUFDO0VBQ0QsZUFBZSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFELElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQUUsR0FBRyxHQUFHLEtBQUs7SUFBRTtJQUNuQztJQUNBLElBQUksQ0FBQyxpQkFBaUIsR0FBRztNQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7TUFDUixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1gsQ0FBQztJQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtJQUNwQixLQUFLLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNoRCxLQUFLLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztFQUNsRCxDQUFDO0VBQ0QsZUFBZSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQ3hELElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQUUsR0FBRyxHQUFHLEtBQUs7SUFBRTtJQUNuQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7TUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7SUFDekI7RUFDSixDQUFDO0VBQ0Q7RUFDQSxlQUFlLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLFFBQVEsRUFBRTtJQUN4RDtJQUNBLElBQUksQ0FBQyxRQUFRLElBQUssUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBRSxFQUFFO01BQ2xFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzFDLENBQUMsTUFDSTtNQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDOUI7RUFDSixDQUFDO0VBQ0QsT0FBTyxlQUFlO0FBQzFCLENBQUMsQ0FBQyxtQkFBUSxDQUFFO0FBRVo7QUFDQSxJQUFJLG9CQUFvQixHQUFHLGFBQWUsVUFBVSxNQUFNLEVBQUU7RUFDeEQsU0FBUyxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQztFQUN2QyxTQUFTLG9CQUFvQixDQUFDLE1BQU0sRUFBRTtJQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJO0lBQ2hCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTTtJQUN0QixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLE1BQU07SUFDbkQsTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTO0lBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLGFBQWE7SUFDNUU7SUFDQSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSTtJQUN6QyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUU7SUFDaEI7SUFDQSxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUM7SUFDckIsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNsQjtJQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDO0lBQzdDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLE9BQU8sS0FBSztFQUNoQjtFQUNBLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxNQUFNLEVBQUU7SUFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSTtJQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtNQUNqQixLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUFFLElBQUksRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFO01BQU0sQ0FBQyxDQUFDO01BQ3hFLFNBQVMsRUFBRTtRQUNQLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFVBQVUsRUFBRTtNQUNoQjtJQUNKLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO01BQ2xCLEtBQUssRUFBRSxNQUFNO01BQ2IsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQUUsSUFBSSxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUU7TUFBRSxDQUFDLENBQUM7TUFDcEUsU0FBUyxFQUFFO1FBQ1AsVUFBVSxFQUFFLE1BQU07UUFDbEIsVUFBVSxFQUFFO01BQ2hCO0lBQ0osQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7TUFDakIsS0FBSyxFQUFFLE1BQU07TUFDYixLQUFLLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFBRSxJQUFJLEVBQUUsS0FBSztRQUFFLEdBQUcsRUFBRTtNQUFFLENBQUMsQ0FBQztNQUN4RSxTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUUsTUFBTTtRQUNsQixVQUFVLEVBQUU7TUFDaEI7SUFDSixDQUFDLENBQUM7SUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtNQUNsQixLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUFFLElBQUksRUFBRSxNQUFNO1FBQUUsR0FBRyxFQUFFO01BQUUsQ0FBQyxDQUFDO01BQ3pFLFNBQVMsRUFBRTtRQUNQLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFVBQVUsRUFBRTtNQUNoQjtJQUNKLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO01BQ2pCLEtBQUssRUFBRSxNQUFNO01BQ2IsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQUUsSUFBSSxFQUFFLE1BQU07UUFBRSxHQUFHLEVBQUU7TUFBTSxDQUFDLENBQUM7TUFDN0UsU0FBUyxFQUFFO1FBQ1AsVUFBVSxFQUFFLE1BQU07UUFDbEIsVUFBVSxFQUFFO01BQ2hCO0lBQ0osQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7TUFDbEIsS0FBSyxFQUFFLE1BQU07TUFDYixLQUFLLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFBRSxJQUFJLEVBQUUsTUFBTTtRQUFFLEdBQUcsRUFBRTtNQUFPLENBQUMsQ0FBQztNQUM5RSxTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUUsTUFBTTtRQUNsQixVQUFVLEVBQUU7TUFDaEI7SUFDSixDQUFDLENBQUM7SUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtNQUNqQixLQUFLLEVBQUUsTUFBTTtNQUNiLEtBQUssRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUFFLElBQUksRUFBRSxLQUFLO1FBQUUsR0FBRyxFQUFFO01BQU8sQ0FBQyxDQUFDO01BQzdFLFNBQVMsRUFBRTtRQUNQLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFVBQVUsRUFBRTtNQUNoQjtJQUNKLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO01BQ2xCLEtBQUssRUFBRSxNQUFNO01BQ2IsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQUUsSUFBSSxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUU7TUFBTyxDQUFDLENBQUM7TUFDekUsU0FBUyxFQUFFO1FBQ1AsVUFBVSxFQUFFLE1BQU07UUFDbEIsVUFBVSxFQUFFO01BQ2hCO0lBQ0osQ0FBQyxDQUFDO0lBQ0Y7SUFDQSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO01BQ3hDLEtBQUssRUFBRSxRQUFRO01BQ2YsSUFBSSxFQUFFLEVBQUU7TUFDUixLQUFLLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUFFLElBQUksRUFBRSxLQUFLO1FBQUUsR0FBRyxFQUFFLE9BQU87UUFDaEQ7UUFDQSxNQUFNLEVBQUUsTUFBTTtRQUFFLFNBQVMsRUFBRSxrQkFBa0I7UUFBRSxZQUFZLEVBQUUsS0FBSztRQUFFLE1BQU0sRUFBRTtNQUFVLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFBRSxnQkFBZ0IsRUFBRSxNQUFNO1FBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQztNQUFPLENBQUMsQ0FBQztNQUMvSyxTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUU7TUFDaEI7SUFDSixDQUFDLENBQUM7SUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO01BQ3BDLEtBQUssRUFBRSxRQUFRO01BQ2YsSUFBSSxFQUFFLEVBQUU7TUFDUixLQUFLLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUFFLElBQUksRUFBRSxLQUFLO1FBQUUsR0FBRyxFQUFFLEtBQUs7UUFBRSxNQUFNLEVBQUUsTUFBTTtRQUFFLFNBQVMsRUFBRSxrQkFBa0I7UUFBRSxZQUFZLEVBQUUsS0FBSztRQUFFLE1BQU0sRUFBRTtNQUFVLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFBRSxnQkFBZ0IsRUFBRSxNQUFNO1FBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQztNQUFLLENBQUMsQ0FBQztNQUM3TixTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUUsTUFBTTtRQUNsQixVQUFVLEVBQUU7TUFDaEI7SUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ0osSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO01BQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNmLE9BQU8sQ0FBQztRQUNaLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO01BQ3hCLENBQUMsQ0FBQztJQUNOO0lBQ0EsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQUU7TUFDM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUNEO0VBQ0Esb0JBQW9CLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUU7SUFDOUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDO01BQUUsR0FBRyxFQUFFLEVBQUU7TUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDO0lBQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixJQUFJLElBQUksR0FBRyxJQUFJO0lBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQUU7TUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFDZDtNQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDNUMsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUNEO0VBQ0Esb0JBQW9CLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsRUFBRTtJQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDWjtJQUNKLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHO01BQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJO01BQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJO0lBQzdDO0lBQ0EsSUFBSSxJQUFJLEdBQUc7TUFDUCxDQUFDLEVBQUUsQ0FBQztNQUNKLENBQUMsRUFBRSxDQUFDO01BQ0osS0FBSyxFQUFFLENBQUM7TUFDUixNQUFNLEVBQUUsQ0FBQztNQUNULFFBQVEsRUFBRSxDQUFDO01BQ1gsSUFBSSxFQUFFO1FBQ0YsQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLEVBQUU7TUFDUDtJQUNKLENBQUM7SUFDRCxJQUFJLEdBQUcsS0FBSyxRQUFRLEVBQUU7TUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQzlCLENBQUMsTUFDSSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7TUFDeEI7TUFDQSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7TUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7SUFDakIsQ0FBQyxNQUNJO01BQ0Q7TUFDQSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1FBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJO1FBQ2YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJO01BQ25CO01BQ0EsUUFBUSxHQUFHO1FBQ1AsS0FBSyxHQUFHO1VBQUU7WUFDTixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSTtZQUNsQjtVQUNKO1FBQ0EsS0FBSyxHQUFHO1VBQUU7WUFDTixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSTtZQUNuQjtVQUNKO1FBQ0EsS0FBSyxHQUFHO1VBQUU7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUk7WUFDakI7VUFDSjtRQUNBLEtBQUssR0FBRztVQUFFO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ2xCO1VBQ0o7UUFDQSxLQUFLLElBQUk7VUFBRTtZQUNQLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJO1lBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSTtZQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJO1lBQ25CO1VBQ0o7UUFDQSxLQUFLLElBQUk7VUFBRTtZQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSTtZQUNqQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSTtZQUNuQjtVQUNKO1FBQ0EsS0FBSyxJQUFJO1VBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUk7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ2xCO1VBQ0o7UUFDQSxLQUFLLElBQUk7VUFBRTtZQUNQLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtZQUNsQjtVQUNKO1FBQ0EsS0FBSyxNQUFNO1VBQUU7WUFDVCxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ25ELElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ2hCO1VBQ0o7TUFDSjtJQUNKO0lBQ0E7SUFDQSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtNQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3QjtJQUNBLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtNQUNaLElBQUksS0FBSyxHQUFHLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSztNQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNuQztJQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtNQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkU7SUFDQTtJQUNBLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7TUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDO0lBQ0EsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0VBQ3hCLENBQUM7RUFDRDtFQUNBLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxVQUFVLENBQUMsRUFBRTtJQUNqRSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSTtNQUFFLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSTtNQUFFLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVztNQUFFLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVztJQUMxRjtJQUNBLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7TUFDeEIsSUFBSSxNQUFNLEdBQUc7UUFDVCxDQUFDLEVBQUUsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzNELENBQUMsRUFBRSxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHO01BQzlELENBQUM7TUFDRCxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsZ0JBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO01BQzlILElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO01BQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzFCO0lBQ0EsT0FBTztNQUNILElBQUksRUFBRSxJQUFJO01BQ1YsSUFBSSxFQUFFO0lBQ1YsQ0FBQztFQUNMLENBQUM7RUFDRDtFQUNBLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFO0lBQzdELElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXO01BQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXO0lBQzVELElBQUksTUFBTSxHQUFHO01BQ1QsQ0FBQyxFQUFFLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUMzRCxDQUFDLEVBQUUsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRztJQUM5RCxDQUFDO0lBQ0Q7SUFDQSxJQUFJLElBQUksR0FBRyxnQkFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDM0QsSUFBSSxJQUFJLEdBQUcsZ0JBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQzNEO0lBQ0EsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMzQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pDLElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzNCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFDNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFDakQsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTTtNQUM3QjtJQUNKLENBQUMsTUFDSSxJQUFJLE1BQU0sSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtNQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUMvQixNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FFMUIsTUFBTSxHQUFHLENBQUMsTUFBTTtJQUN4QixDQUFDLE1BQ0ksSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDaEM7SUFBQTtJQUVKLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLE1BQU07SUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO01BQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVE7TUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQjtFQUNKLENBQUM7RUFDRDtFQUNBLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsWUFBWTtJQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDWjtJQUNKLElBQUksR0FBRyxHQUFHO01BQ04sQ0FBQyxFQUFFLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ25GLENBQUMsRUFBRSxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDcEYsQ0FBQztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCO0lBQ0EsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO01BQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO01BQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2hCO0lBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO01BQ3ZCO01BQ0E7TUFDQSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM1QixDQUFDLENBQUM7SUFDRixJQUFJLEtBQUssR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBQzVELElBQUksTUFBTSxHQUFHLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7SUFDOUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUs7SUFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU07RUFDbkMsQ0FBQztFQUNEO0VBQ0Esb0JBQW9CLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLFFBQVEsRUFBRTtJQUN2RCxJQUFJLEdBQUcsRUFBRSxFQUFFO0lBQ1gsSUFBSSxRQUFRLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7SUFBRTtJQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7SUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTTtJQUNsQixJQUFJO01BQ0E7TUFDQSxLQUFLLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDMUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRO01BQzVCO0lBQ0osQ0FBQyxDQUNELE9BQU8sS0FBSyxFQUFFO01BQUUsR0FBRyxHQUFHO1FBQUUsS0FBSyxFQUFFO01BQU0sQ0FBQztJQUFFLENBQUMsU0FDakM7TUFDSixJQUFJO1FBQ0EsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO01BQ3ZELENBQUMsU0FDTztRQUFFLElBQUksR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLEtBQUs7TUFBRTtJQUN4QztJQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO01BQ2hCLE9BQU8sRUFBRTtJQUNiLENBQUMsQ0FBQztFQUNOLENBQUM7RUFDRDtFQUNBLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxNQUFNLEVBQUU7SUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU07SUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCO0lBQ0EsSUFBSSxHQUFHLEdBQUc7TUFDTixDQUFDLEVBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsZ0JBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRTtNQUNuRCxDQUFDLEVBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsZ0JBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUc7SUFDcEQsQ0FBQztJQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7SUFDL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO01BQ2hCO01BQ0E7TUFDQSxPQUFPLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUMxQjtNQUNBO01BQ0E7SUFDSixDQUFDLENBQUM7SUFDRixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO0lBQ25CO0lBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRztJQUM1QyxDQUFDLENBQUM7RUFDTixDQUFDO0VBQ0Q7RUFDQSxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsTUFBTSxFQUFFO0lBQ3RELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7TUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDckI7RUFDSixDQUFDO0VBQ0QsT0FBTyxvQkFBb0I7QUFDL0IsQ0FBQyxDQUFDLGVBQWUsQ0FBRTtBQUFDLElBQUEsUUFBQSxHQUFBLE9BQUEsY0FDTCxvQkFBb0I7Ozs7Ozs7OztBQ2poQm5DLElBQUEsS0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUEwQixTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUExQjFCLElBQUksU0FBUyxHQUFJLFVBQVEsU0FBSyxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJLGNBQWEsR0FBRyxTQUFBLGNBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNoQyxjQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFDaEM7TUFBRSxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtNQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUUsQ0FBQztJQUNyRyxPQUFPLGNBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RixjQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQixTQUFTLEVBQUUsQ0FBQSxFQUFHO01BQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBQUU7SUFDdEMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN4RixDQUFDO0FBQ0wsQ0FBQyxDQUFFLENBQUM7QUFDSixJQUFJLFFBQVEsR0FBSSxVQUFRLFNBQUssUUFBUSxJQUFLLFlBQVk7RUFDbEQsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBUyxDQUFDLEVBQUU7SUFDcEMsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7TUFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMzRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQjtJQUNBLE9BQU8sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBRUQsSUFBSSxNQUFNLEdBQUcsYUFBZSxVQUFVLE1BQU0sRUFBRTtFQUMxQyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztFQUN6QixTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDcEIsSUFBSSxNQUFNLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQUU7SUFDdEMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRTtNQUFFLFFBQVEsRUFBRTtJQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTtJQUMxRixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEVBQUU7TUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEVBQUU7TUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO0lBQzdDLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUU7SUFDMUMsT0FBTyxLQUFLO0VBQ2hCO0VBQ0EsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUMzQyxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUc7SUFDOUIsQ0FBQztJQUNELEdBQUcsRUFBRSxTQUFBLElBQVUsQ0FBQyxFQUFFO01BQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUNELFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFlBQVksRUFBRTtFQUNsQixDQUFDLENBQUM7RUFDRixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLEtBQUssRUFBRTtJQUN2QyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsRUFBRTtNQUFFLEtBQUssR0FBRyxFQUFFO0lBQUU7SUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDakIsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztFQUNwRCxDQUFDO0VBQ0QsT0FBTyxNQUFNO0FBQ2pCLENBQUMsQ0FBQyxnQkFBSSxDQUFFO0FBQUMsSUFBQSxRQUFBLEdBQUEsT0FBQSxjQUNNLE1BQU07Ozs7Ozs7OztBQ2pDckIsSUFBQSxLQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQTBCLFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQTFCMUIsSUFBSSxTQUFTLEdBQUksVUFBUSxTQUFLLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUksY0FBYSxHQUFHLFNBQUEsY0FBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ2hDLGNBQWEsR0FBRyxNQUFNLENBQUMsY0FBYyxJQUNoQztNQUFFLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7TUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDO0lBQ3JHLE9BQU8sY0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNELE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQ3JDLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDO0lBQzdGLGNBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLFNBQVMsRUFBRSxDQUFBLEVBQUc7TUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7SUFBRTtJQUN0QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ3hGLENBQUM7QUFDTCxDQUFDLENBQUUsQ0FBQztBQUNKLElBQUksUUFBUSxHQUFJLFVBQVEsU0FBSyxRQUFRLElBQUssWUFBWTtFQUNsRCxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFTLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztNQUNoQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzNELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsT0FBTyxDQUFDO0VBQ1osQ0FBQztFQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO0FBQzFDLENBQUM7QUFFRCxJQUFJLEtBQUssR0FBRyxhQUFlLFVBQVUsTUFBTSxFQUFFO0VBQ3pDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0VBQ3hCLFNBQVMsS0FBSyxDQUFDLE1BQU0sRUFBRTtJQUNuQixJQUFJLE1BQU0sS0FBSyxLQUFLLENBQUMsRUFBRTtNQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFBRTtJQUN0QyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFO01BQUUsUUFBUSxFQUFFO0lBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO0lBQzFGLElBQUksTUFBTSxDQUFDLElBQUksRUFDWCxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO0lBQzVCLE9BQU8sS0FBSztFQUNoQjtFQUNBLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDM0MsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTO0lBQ3BDLENBQUM7SUFDRCxHQUFHLEVBQUUsU0FBQSxJQUFVLENBQUMsRUFBRTtNQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxLQUFLLEVBQUU7SUFDdEMsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFBRSxLQUFLLEdBQUcsRUFBRTtJQUFFO0lBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2xCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7RUFDcEQsQ0FBQztFQUNELE9BQU8sS0FBSztBQUNoQixDQUFDLENBQUMsZ0JBQUksQ0FBRTtBQUFDLElBQUEsUUFBQSxHQUFBLE9BQUEsY0FDTSxLQUFLOzs7Ozs7Ozs7QUMzQnBCLElBQUEsYUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUF3QyxTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUExQnhDLElBQUksU0FBUyxHQUFJLFVBQVEsU0FBSyxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJLGNBQWEsR0FBRyxTQUFBLGNBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNoQyxjQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFDaEM7TUFBRSxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtNQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUUsQ0FBQztJQUNyRyxPQUFPLGNBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RixjQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQixTQUFTLEVBQUUsQ0FBQSxFQUFHO01BQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBQUU7SUFDdEMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN4RixDQUFDO0FBQ0wsQ0FBQyxDQUFFLENBQUM7QUFDSixJQUFJLFFBQVEsR0FBSSxVQUFRLFNBQUssUUFBUSxJQUFLLFVBQVMsQ0FBQyxFQUFFO0VBQ2xELElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsUUFBUTtJQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFFLENBQUMsR0FBRyxDQUFDO0VBQzdFLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDdkIsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRSxPQUFPO0lBQzFDLElBQUksRUFBRSxTQUFBLEtBQUEsRUFBWTtNQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7TUFDbEMsT0FBTztRQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQUUsSUFBSSxFQUFFLENBQUM7TUFBRSxDQUFDO0lBQzNDO0VBQ0osQ0FBQztFQUNELE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLHlCQUF5QixHQUFHLGlDQUFpQyxDQUFDO0FBQzFGLENBQUM7QUFFRCxJQUFJLGFBQWEsR0FBRyxFQUFFO0FBQ3RCO0FBQ0EsSUFBSSx3QkFBd0IsR0FBQSxPQUFBLENBQUEsd0JBQUEsR0FBRyxhQUFlLFVBQVUsTUFBTSxFQUFFO0VBQzVELFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUM7RUFDM0MsU0FBUyx3QkFBd0IsQ0FBQSxFQUFHO0lBQ2hDLE9BQU8sTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxJQUFJO0VBQ25FO0VBQ0EsT0FBTyx3QkFBd0I7QUFDbkMsQ0FBQyxDQUFDLHdCQUFXLENBQUU7QUFFZjtBQUNBLElBQUkscUJBQXFCLEdBQUEsT0FBQSxDQUFBLHFCQUFBLEdBQUcsYUFBZSxZQUFZO0VBQ25ELFNBQVMscUJBQXFCLENBQUEsRUFBRztJQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7SUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFO0lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRTtJQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUU7SUFDNUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEVBQUU7SUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUU7SUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFO0lBQzlCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFO0lBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFO0lBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFO0lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRTtJQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRTtJQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRTtJQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFO0lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFO0lBQzlCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFO0lBQzlCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFO0lBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFO0lBQzNCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxFQUFFO0lBQ2hDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxFQUFFO0lBQ2hDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxFQUFFO0lBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFO0lBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFO0lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtJQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRTtJQUM5QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRTtJQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRTtJQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtJQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRTtJQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUU7SUFDNUIsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEVBQUU7SUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDakIsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEVBQUU7SUFDbkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUU7SUFDaEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEVBQUU7SUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUU7SUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUU7SUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtJQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRTtJQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFO0lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUNqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRTtJQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtJQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFO0lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxTQUFNLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFO0lBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtJQUN2QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRTtJQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUU7SUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFO0lBQzlCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFO0lBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFO0lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUU7SUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRTtJQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtJQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFO0lBQzNCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDakIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRTtJQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7SUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7SUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtJQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRTtJQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRTtJQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFO0lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtJQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFO0lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRTtJQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7SUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRTtJQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRTtJQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFO0lBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRTtJQUNqQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRTtJQUNsQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtJQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7SUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRTtJQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUU7SUFDOUIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUU7SUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUU7SUFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUU7SUFDNUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUU7SUFDL0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEVBQUU7SUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtJQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRTtJQUMvQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRTtJQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRTtJQUNoQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRTtJQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUU7SUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRTtJQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtJQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRTtJQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRTtJQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUU7SUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUU7SUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUU7SUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxFQUFFO0lBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRTtJQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUU7SUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRTtJQUM5QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRTtJQUNsQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRTtJQUNqQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRTtJQUNqQyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRTtJQUNsQyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRTtJQUNsQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRTtJQUM5QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRTtJQUNoQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRTtJQUM5QixJQUFJLENBQUMsNEJBQTRCLEdBQUcsRUFBRTtJQUN0QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMseUJBQXlCLEdBQUcsRUFBRTtJQUNuQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsRUFBRTtJQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFO0lBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO0lBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRTtJQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxFQUFFO0lBQ2xDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxFQUFFO0lBQ2xDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxFQUFFO0lBQ2pDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxFQUFFO0lBQ2xDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxFQUFFO0lBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUU7SUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFO0lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRTtJQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRTtJQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRTtJQUMxQixJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRTtJQUMvQixJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRTtJQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUU7SUFDL0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUU7SUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUU7SUFDL0IsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEVBQUU7SUFDbEMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEVBQUU7SUFDbEMsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEVBQUU7SUFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtFQUNwQjtFQUNBLE9BQU8scUJBQXFCO0FBQ2hDLENBQUMsQ0FBQyxDQUFFO0FBRUosSUFBSSxnQkFBZ0IsR0FBRyxhQUFlLFVBQVUsTUFBTSxFQUFFO0VBQ3BELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUM7RUFDbkMsU0FBUyxnQkFBZ0IsQ0FBQSxFQUFHO0lBQ3hCLE9BQU8sTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxJQUFJO0VBQ25FO0VBQ0EsTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFO0lBQ3ZEO0lBQ0EsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsSUFBSSxHQUFHLEVBQUUsRUFBRTtNQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUkscUJBQXFCLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDO1FBQzFDLElBQUk7VUFDQSxLQUFLLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNsRyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSztZQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFDMUIsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7VUFDN0I7UUFDSixDQUFDLENBQ0QsT0FBTyxLQUFLLEVBQUU7VUFBRSxHQUFHLEdBQUc7WUFBRSxLQUFLLEVBQUU7VUFBTSxDQUFDO1FBQUUsQ0FBQyxTQUNqQztVQUNKLElBQUk7WUFDQSxJQUFJLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRSxHQUFHLE1BQU0sVUFBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7VUFDM0UsQ0FBQyxTQUNPO1lBQUUsSUFBSSxHQUFHLEVBQUUsTUFBTSxHQUFHLENBQUMsS0FBSztVQUFFO1FBQ3hDO01BQ0o7TUFDQSxPQUFPLGFBQWE7SUFDeEIsQ0FBQztJQUNELFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFlBQVksRUFBRTtFQUNsQixDQUFDLENBQUM7RUFDRixPQUFPLGdCQUFnQjtBQUMzQixDQUFDLENBQUMsd0JBQXdCLENBQUU7QUFBQyxJQUFBLFFBQUEsR0FBQSxPQUFBLGNBQ2QsZ0JBQWdCLEVBQy9CO0FBQ08sSUFBSSxxQkFBcUIsR0FBQSxPQUFBLENBQUEscUJBQUEsR0FBRztFQUMvQixRQUFRLEVBQUUsVUFBVTtFQUNwQixJQUFJLEVBQUUsR0FBRztFQUNULEdBQUcsRUFBRSxHQUFHO0VBQ1IsS0FBSyxFQUFFLE1BQU07RUFDYixNQUFNLEVBQUUsTUFBTTtFQUNkLEtBQUssRUFBRSxNQUFNO0VBQ2IsTUFBTSxFQUFFLE1BQU07RUFDZCxPQUFPLEVBQUUsR0FBRztFQUNaLE1BQU0sRUFBRSxHQUFHO0VBQ1gsUUFBUSxFQUFFO0FBQ2QsQ0FBQzs7Ozs7Ozs7O0FDNWhCRCxJQUFBLGFBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFDQSxJQUFBLEtBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFBK0IsU0FBQSx1QkFBQSxHQUFBLFdBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxVQUFBLEdBQUEsR0FBQSxnQkFBQSxHQUFBO0FBM0IvQixJQUFJLFNBQVMsR0FBSSxVQUFRLFNBQUssU0FBUyxJQUFNLFlBQVk7RUFDckQsSUFBSSxjQUFhLEdBQUcsU0FBQSxjQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDaEMsY0FBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQ2hDO01BQUUsU0FBUyxFQUFFO0lBQUcsQ0FBQyxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7TUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUM7SUFBRSxDQUFFLElBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtNQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFFLENBQUM7SUFDckcsT0FBTyxjQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUM5QixDQUFDO0VBQ0QsT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDbkIsSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUksRUFDckMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUM7SUFDN0YsY0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkIsU0FBUyxFQUFFLENBQUEsRUFBRztNQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQztJQUFFO0lBQ3RDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDeEYsQ0FBQztBQUNMLENBQUMsQ0FBRSxDQUFDO0FBQ0osSUFBSSxRQUFRLEdBQUksVUFBUSxTQUFLLFFBQVEsSUFBSyxVQUFTLENBQUMsRUFBRTtFQUNsRCxJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLFFBQVE7SUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDLEdBQUcsQ0FBQztFQUM3RSxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3ZCLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUUsT0FBTztJQUMxQyxJQUFJLEVBQUUsU0FBQSxLQUFBLEVBQVk7TUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO01BQ2xDLE9BQU87UUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUFFLElBQUksRUFBRSxDQUFDO01BQUUsQ0FBQztJQUMzQztFQUNKLENBQUM7RUFDRCxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyx5QkFBeUIsR0FBRyxpQ0FBaUMsQ0FBQztBQUMxRixDQUFDO0FBR0QsSUFBSSxTQUFTLEdBQUcsYUFBZSxVQUFVLE1BQU0sRUFBRTtFQUM3QyxTQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztFQUM1QixTQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFO0lBQ3JDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSTtJQUNyQztJQUNBLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUNsQjtJQUNBLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQztJQUNwQjtJQUNBLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQztJQUNwQjtJQUNBLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQztJQUNwQixLQUFLLENBQUMsT0FBTyxHQUFHLENBQUM7SUFDakIsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQ2pCLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQztJQUNqQixLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDaEIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBQ2hCLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUNoQixLQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDZixLQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDZixJQUFJLE1BQU0sRUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDaEMsSUFBSSxZQUFZLEVBQ1osS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDNUIsT0FBTyxLQUFLO0VBQ2hCO0VBQ0EsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFO0lBQzNELEdBQUcsRUFBRSxTQUFBLElBQUEsRUFBWTtNQUNiLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxnQkFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ2hFLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFO0lBQzNELEdBQUcsRUFBRSxTQUFBLElBQUEsRUFBWTtNQUNiLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxnQkFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ2hFLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFO0lBQzNELEdBQUcsRUFBRSxTQUFBLElBQUEsRUFBWTtNQUNiLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxnQkFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ2hFLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRTtJQUN4RCxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FBQztFQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUU7SUFDeEQsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDM0QsQ0FBQztJQUNELFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFlBQVksRUFBRTtFQUNsQixDQUFDLENBQUM7RUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFO0lBQ3hELEdBQUcsRUFBRSxTQUFBLElBQUEsRUFBWTtNQUNiLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQzNELENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRTtJQUN2RCxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQztJQUNELFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFlBQVksRUFBRTtFQUNsQixDQUFDLENBQUM7RUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsY0FBYyxFQUFFO0lBQ3ZELEdBQUcsRUFBRSxTQUFBLElBQUEsRUFBWTtNQUNiLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FBQztFQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUU7SUFDdkQsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRTtJQUN0RCxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FBQztFQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUU7SUFDdEQsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDdkQsQ0FBQztJQUNELFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFlBQVksRUFBRTtFQUNsQixDQUFDLENBQUM7RUFDRixTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksRUFBRTtJQUN2QyxJQUFJLElBQUksRUFDSixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7RUFDakMsQ0FBQztFQUNEO0VBQ0EsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxNQUFNLEVBQUU7SUFDMUMsSUFBSSxHQUFHLEVBQUUsRUFBRTtJQUNYLElBQUksTUFBTSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPO0lBQUU7SUFDaEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO01BQ3ZCLElBQUk7UUFDQSxLQUFLLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtVQUNoSCxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSztVQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqQjtNQUNKLENBQUMsQ0FDRCxPQUFPLEtBQUssRUFBRTtRQUFFLEdBQUcsR0FBRztVQUFFLEtBQUssRUFBRTtRQUFNLENBQUM7TUFBRSxDQUFDLFNBQ2pDO1FBQ0osSUFBSTtVQUNBLElBQUksVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxFQUFFLEdBQUcsUUFBUSxVQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuRixDQUFDLFNBQ087VUFBRSxJQUFJLEdBQUcsRUFBRSxNQUFNLEdBQUcsQ0FBQyxLQUFLO1FBQUU7TUFDeEM7TUFDQTtJQUNKLENBQUMsTUFDSTtNQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FDaEUsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3hFO0VBQ0osQ0FBQztFQUNEO0VBQ0EsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxNQUFNLEVBQUU7SUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0VBQ3RCLENBQUM7RUFDRCxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLE1BQU0sRUFBRTtJQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7TUFDL0MsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDN0I7SUFDSjtFQUNKLENBQUM7RUFDRDtFQUNBLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxHQUFHLEVBQUUsRUFBRSxFQUFFO0lBQ3ZDLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUFFO0lBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7SUFDdEM7SUFDQSxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7TUFDN0IsR0FBRyxFQUFFLFNBQUEsSUFBVSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRTtRQUNoQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQztNQUNaLENBQUM7TUFDRCxHQUFHLEVBQUUsU0FBQSxJQUFVLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtRQUN2QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSztRQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sSUFBSTtNQUNmO0lBQ0osQ0FBQyxDQUFDO0lBQ0YsT0FBTyxLQUFLO0VBQ2hCLENBQUM7RUFDRCxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLFVBQVUsRUFBRTtJQUNqRCxJQUFJLEdBQUcsRUFBRSxFQUFFO0lBQ1gsSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUNaLElBQUksQ0FBQyxVQUFVLEVBQUU7TUFDYixVQUFVLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQzVJO0lBQ0EsSUFBSTtNQUNBLEtBQUssSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLGNBQWMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQzVJLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxLQUFLO1FBQzVCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzNCLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxJQUFJLE9BQU8sRUFBRSxLQUFLLFdBQVcsRUFBRTtVQUM3RCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNoQjtNQUNKO0lBQ0osQ0FBQyxDQUNELE9BQU8sS0FBSyxFQUFFO01BQUUsR0FBRyxHQUFHO1FBQUUsS0FBSyxFQUFFO01BQU0sQ0FBQztJQUFFLENBQUMsU0FDakM7TUFDSixJQUFJO1FBQ0EsSUFBSSxjQUFjLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLEVBQUUsR0FBRyxZQUFZLFVBQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO01BQ25HLENBQUMsU0FDTztRQUFFLElBQUksR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLEtBQUs7TUFBRTtJQUN4QztJQUNBLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDeEIsQ0FBQztFQUNELFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVk7SUFDckMsT0FBTztNQUNILFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtNQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7TUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO01BQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztNQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87TUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO01BQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtNQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07TUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO01BQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztNQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQ2hCLENBQUM7RUFDTCxDQUFDO0VBQ0QsT0FBTyxTQUFTO0FBQ3BCLENBQUMsQ0FBQyx3QkFBVyxDQUFFO0FBQUMsSUFBQSxRQUFBLEdBQUEsT0FBQSxjQUNELFNBQVM7Ozs7Ozs7OztBQ3RMeEIsSUFBQSxhQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQ0EsSUFBQSxLQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsVUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsTUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsS0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsTUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUFtQyxTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUF4RG5DLElBQUksU0FBUyxHQUFJLFVBQVEsU0FBSyxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJLGNBQWEsR0FBRyxTQUFBLGNBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNoQyxjQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFDaEM7TUFBRSxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtNQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUUsQ0FBQztJQUNyRyxPQUFPLGNBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RixjQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQixTQUFTLEVBQUUsQ0FBQSxFQUFHO01BQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBQUU7SUFDdEMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN4RixDQUFDO0FBQ0wsQ0FBQyxDQUFFLENBQUM7QUFDSixJQUFJLFFBQVEsR0FBSSxVQUFRLFNBQUssUUFBUSxJQUFLLFVBQVMsQ0FBQyxFQUFFO0VBQ2xELElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsUUFBUTtJQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFFLENBQUMsR0FBRyxDQUFDO0VBQzdFLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDdkIsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRSxPQUFPO0lBQzFDLElBQUksRUFBRSxTQUFBLEtBQUEsRUFBWTtNQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7TUFDbEMsT0FBTztRQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQUUsSUFBSSxFQUFFLENBQUM7TUFBRSxDQUFDO0lBQzNDO0VBQ0osQ0FBQztFQUNELE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLHlCQUF5QixHQUFHLGlDQUFpQyxDQUFDO0FBQzFGLENBQUM7QUFDRCxJQUFJLE1BQU0sR0FBSSxVQUFRLFNBQUssTUFBTSxJQUFLLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUNsRCxJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDMUQsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7RUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDO0lBQUUsRUFBRSxHQUFHLEVBQUU7SUFBRSxDQUFDO0VBQ2hDLElBQUk7SUFDQSxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7RUFDOUUsQ0FBQyxDQUNELE9BQU8sS0FBSyxFQUFFO0lBQUUsQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFO0lBQU0sQ0FBQztFQUFFLENBQUMsU0FDL0I7SUFDSixJQUFJO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDLFNBQ087TUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLO0lBQUU7RUFDcEM7RUFDQSxPQUFPLEVBQUU7QUFDYixDQUFDO0FBQ0QsSUFBSSxhQUFhLEdBQUksVUFBUSxTQUFLLGFBQWEsSUFBSyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0VBQzFFLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2pGLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO01BQ3BCLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuQjtFQUNKO0VBQ0EsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQU9ELElBQUksUUFBUSxHQUFHLGFBQWUsVUFBVSxNQUFNLEVBQUU7RUFDNUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7RUFDM0IsU0FBUyxRQUFRLENBQUMsTUFBTSxFQUFFO0lBQ3RCLElBQUksTUFBTSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQUUsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUFFO0lBQ3RDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSTtJQUNyQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUU7SUFDYjtJQUNBLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRTtJQUNmO0lBQ0EsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQ3BCO0lBQ0EsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7TUFDbEIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUNqQixJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUyxFQUN6RTtNQUNKLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2hCO0lBQ0EsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBQSxRQUFNLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQzlELEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7SUFDNUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLO0lBQ3ZDLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDNUM7SUFDQSxLQUFLLENBQUMsS0FBSyxHQUFHLGlCQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFO01BQ2xDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUMsQ0FBQztJQUNGLElBQUksTUFBTSxDQUFDLEtBQUssRUFDWixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ25DO0lBQ0EsS0FBSyxDQUFDLFNBQVMsR0FBRyxxQkFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO01BQ3ZELE1BQU0sRUFBRSxLQUFLO01BQ2I7TUFDQSxVQUFVLEVBQUUsTUFBTSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztJQUNGLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ3hCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsT0FBTyxLQUFLO0VBQ2hCO0VBQ0E7RUFDQSxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLE1BQU0sRUFBRTtJQUM5QyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0MsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztJQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7SUFDaEUsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLEtBQUssV0FBVyxFQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRO0lBQ25DLElBQUksT0FBTyxNQUFNLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSztJQUM3QixJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU07SUFDL0IsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTztJQUNuQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7RUFDekMsQ0FBQztFQUNEO0VBQ0EsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxHQUFHLEVBQUU7SUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSTtJQUNoQjtJQUNBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUU7SUFDbEQsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsT0FBTyxJQUFJLENBQUMsU0FBUztJQUN6QixDQUFDO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FBQztFQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFDM0M7SUFDQSxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO01BQzVCLE9BQU8sQ0FBQztJQUNaLENBQUM7SUFDRCxHQUFHLEVBQUUsU0FBQSxJQUFVLENBQUMsRUFBRTtNQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUNELFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFlBQVksRUFBRTtFQUNsQixDQUFDLENBQUM7RUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO0lBQzNDO0lBQ0EsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztNQUMzQixPQUFPLENBQUM7SUFDWixDQUFDO0lBQ0QsR0FBRyxFQUFFLFNBQUEsSUFBVSxDQUFDLEVBQUU7TUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUM3QyxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixPQUFPLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxHQUFHLEVBQUUsU0FBQSxJQUFVLENBQUMsRUFBRTtNQUNkLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUM5QyxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixPQUFPLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxHQUFHLEVBQUUsU0FBQSxJQUFVLENBQUMsRUFBRTtNQUNkLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRTtJQUMvQztJQUNBLEdBQUcsRUFBRSxTQUFBLElBQUEsRUFBWTtNQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUM7TUFDN0IsT0FBTyxDQUFDO0lBQ1osQ0FBQztJQUNELEdBQUcsRUFBRSxTQUFBLElBQVUsQ0FBQyxFQUFFO01BQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FBQztFQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUU7SUFDaEQ7SUFDQSxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO01BQzlCLE9BQU8sQ0FBQztJQUNaLENBQUM7SUFDRCxHQUFHLEVBQUUsU0FBQSxJQUFVLENBQUMsRUFBRTtNQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDekIsQ0FBQztJQUNELFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFlBQVksRUFBRTtFQUNsQixDQUFDLENBQUM7RUFDRixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFO0lBQy9DLEdBQUcsRUFBRSxTQUFBLElBQUEsRUFBWTtNQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUM7TUFDN0IsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUN0QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVztNQUMvQixPQUFPLENBQUM7SUFDWixDQUFDO0lBQ0QsR0FBRyxFQUFFLFNBQUEsSUFBVSxDQUFDLEVBQUU7TUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRTtJQUNoRCxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO01BQzlCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFDdkMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVk7TUFDaEMsT0FBTyxDQUFDO0lBQ1osQ0FBQztJQUNELEdBQUcsRUFBRSxTQUFBLElBQVUsQ0FBQyxFQUFFO01BQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUN6QixDQUFDO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FBQztFQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUU7SUFDbEQsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO01BQzlCLE9BQU8sQ0FBQztJQUNaLENBQUM7SUFDRDtJQUNBLEdBQUcsRUFBRSxTQUFBLElBQVUsQ0FBQyxFQUFFO01BQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztJQUM5QixDQUFDO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FBQztFQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUU7SUFDL0MsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsT0FBTyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBQ0Q7SUFDQSxHQUFHLEVBQUUsU0FBQSxJQUFVLENBQUMsRUFBRTtNQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLGdCQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FBQztFQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7SUFDakQsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxNQUFNO0lBQ3hDLENBQUM7SUFDRCxHQUFHLEVBQUUsU0FBQSxJQUFVLENBQUMsRUFBRTtNQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsTUFBTTtJQUM3QyxDQUFDO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsWUFBWSxFQUFFO0VBQ2xCLENBQUMsQ0FBQztFQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUU7SUFDaEQsR0FBRyxFQUFFLFNBQUEsSUFBQSxFQUFZO01BQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO0lBQzNDLENBQUM7SUFDRCxHQUFHLEVBQUUsU0FBQSxJQUFVLENBQUMsRUFBRTtNQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQzlCLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRTtJQUNuRCxHQUFHLEVBQUUsU0FBQSxJQUFBLEVBQVk7TUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUztJQUM3QixDQUFDO0lBQ0QsR0FBRyxFQUFFLFNBQUEsSUFBVSxDQUFDLEVBQUU7TUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFDRCxVQUFVLEVBQUUsS0FBSztJQUNqQixZQUFZLEVBQUU7RUFDbEIsQ0FBQyxDQUFDO0VBQ0Y7RUFDQSxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDcEQsSUFBSSxJQUFJLEtBQUssaUJBQWlCLElBQUksS0FBSyxFQUFFO01BQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUN4QixLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO0lBQ3pDO0lBQ0EsZ0JBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO0VBQ25DLENBQUM7RUFDRDtFQUNBLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM1QyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUMzQixPQUFPLElBQUk7RUFDZixDQUFDO0VBQ0Q7RUFDQSxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDN0MsT0FBTyxnQkFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7RUFDM0MsQ0FBQztFQUNEO0VBQ0EsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtNQUFFLEVBQUUsRUFBRSxFQUFFO01BQUUsRUFBRSxFQUFFO0lBQUcsQ0FBQyxDQUFDO0VBQ3pDLENBQUM7RUFDRDtFQUNBLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUN4QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtNQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDbEI7SUFDQSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtNQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDbkI7RUFDSixDQUFDO0VBQ0Q7RUFDQSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDbkQsSUFBSSxHQUFHLEVBQUUsRUFBRTtJQUNYLElBQUksTUFBTSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQUUsTUFBTSxHQUFHLElBQUk7SUFBRTtJQUN4QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDdEIsSUFBSTtRQUNBLEtBQUssSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1VBQ3pHLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLO1VBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3RCO01BQ0osQ0FBQyxDQUNELE9BQU8sS0FBSyxFQUFFO1FBQUUsR0FBRyxHQUFHO1VBQUUsS0FBSyxFQUFFO1FBQU0sQ0FBQztNQUFFLENBQUMsU0FDakM7UUFDSixJQUFJO1VBQ0EsSUFBSSxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLEVBQUUsR0FBRyxPQUFPLFVBQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQy9FLENBQUMsU0FDTztVQUFFLElBQUksR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLEtBQUs7UUFBRTtNQUN4QztNQUNBLE9BQU8sTUFBTTtJQUNqQjtJQUNBLElBQUksS0FBSyxZQUFZLFFBQVEsRUFBRTtNQUMzQixLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU07TUFDckIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQyxNQUNJLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtNQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDakM7RUFDSixDQUFDO0VBQ0Q7RUFDQSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxZQUFZO0lBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7RUFDckMsQ0FBQztFQUNEO0VBQ0EsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxFQUFFLEVBQUU7SUFDM0M7SUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7TUFDaEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDO0lBQ0E7SUFDQSxPQUFPLEVBQUUsQ0FBQyxNQUFNO0VBQ3BCLENBQUM7RUFDRDtFQUNBLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsS0FBSyxFQUFFLEVBQUUsRUFBRTtJQUM3QyxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEIsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFBRSxLQUFLLEdBQUcsRUFBRTtJQUFFO0lBQ3BDLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQUUsRUFBRSxHQUFHLFNBQUEsR0FBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUk7TUFBRSxDQUFDO0lBQUU7SUFDekQsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQ3BJ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LEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ0w7UUFDSixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7TUFDM0M7SUFDSixDQUFDLE1BQ0k7TUFDRCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO01BQ3ZCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7TUFDdkIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7TUFDcEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDeEM7SUFDQSxPQUFPLENBQUM7RUFDWixDQUFDO0VBQ0Q7RUFDQSxHQUFHLEVBQUUsU0FBQSxJQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzdCLElBQUksR0FBRyxFQUFFLEVBQUU7SUFDWCxJQUFJLENBQUMsSUFBSSxFQUNMO0lBQ0osSUFBSSxPQUFBLENBQU8sSUFBSSxNQUFLLFFBQVEsRUFBRTtNQUMxQixJQUFJO1FBQ0EsS0FBSyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7VUFDaEcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUs7VUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QjtNQUNKLENBQUMsQ0FDRCxPQUFPLEtBQUssRUFBRTtRQUFFLEdBQUcsR0FBRztVQUFFLEtBQUssRUFBRTtRQUFNLENBQUM7TUFBRSxDQUFDLFNBQ2pDO1FBQ0osSUFBSTtVQUNBLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN2RCxDQUFDLFNBQ087VUFBRSxJQUFJLEdBQUcsRUFBRSxNQUFNLEdBQUcsQ0FBQyxLQUFLO1FBQUU7TUFDeEM7SUFDSixDQUFDLE1BQ0k7TUFDRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUs7SUFDM0I7SUFDQSxPQUFPLElBQUk7RUFDZixDQUFDO0VBQ0Q7RUFDQSxJQUFJLEVBQUUsU0FBQSxLQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzlCLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO01BQzlCLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUM7TUFDbEMsT0FBTyxLQUFLO0lBQ2hCLENBQUMsTUFDSTtNQUNELE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDakM7RUFDSjtBQUNKLENBQUM7OztBQzNLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBDb250YWluZXJEZWZhdWx0U3R5bGUgfSBmcm9tICcuLi9jb25zdGFudC9zdHlsZU1hcCc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi4vY29yZS9lbGVtZW50JztcbnZhciBKQmFzZUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkJhc2VDb21wb25lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkJhc2VDb21wb25lbnQob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb24uc3R5bGUgPSBvcHRpb24uc3R5bGUgfHwge307XG4gICAgICAgIC8vIHBvc2l0aW9u5ZKMb3ZlcmZsb3fpooTorr7nmoTlgLzkvJjlhYjnuqfmnIDpq5hcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gT2JqZWN0LmFzc2lnbihfX2Fzc2lnbih7fSwgQ29udGFpbmVyRGVmYXVsdFN0eWxlKSwgb3B0aW9uLnN0eWxlLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogQ29udGFpbmVyRGVmYXVsdFN0eWxlLnBvc2l0aW9uLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IENvbnRhaW5lckRlZmF1bHRTdHlsZS5vdmVyZmxvd1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7IFxuICAgICAgICAgICAgLy8g5aSW5bGC5Y+q5ZON5bqUWui9tOaXi+i9rFxuICAgICAgICAgICAgdHJhbnNmb3JtV2F0Y2hQcm9wczogW1xuICAgICAgICAgICAgICAgICdyb3RhdGVaJywgJ3NjYWxlWCcsICdzY2FsZVknXG4gICAgICAgICAgICBdIH0sIG9wdGlvbiksIHsgbm9kZVR5cGU6ICdkaXYnLCBjbGFzc05hbWU6ICdqLWRlc2lnbi1lZGl0b3ItY29udGFpbmVyJyB9KSkgfHwgdGhpcztcbiAgICAgICAgLy8g6YCJ5LitXG4gICAgICAgIF90aGlzLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBvcHRpb24udGFyZ2V0ID0gb3B0aW9uLnRhcmdldCB8fCB7fTtcbiAgICAgICAgLy8g55Sf5oiQ5b2T5YmN5o6n5Yi255qE5YWD57SgXG4gICAgICAgIF90aGlzLnRhcmdldCA9IG5ldyBKRWxlbWVudChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uKSwgeyBcbiAgICAgICAgICAgIC8vIOS4jeWTjeW6lOacrOi6q+eahOWPmOaNou+8jOWPquWTjeW6lOeItue6p+eahFxuICAgICAgICAgICAgdHJhbnNmb3JtV2F0Y2hQcm9wczogW10sIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICBfdGhpcy5hZGRDaGlsZChfdGhpcy50YXJnZXQpO1xuICAgICAgICAvLyDlj5jmjaLmlLnkuLrmjqfliLbkuLvlhYPntKBcbiAgICAgICAgX3RoaXMudHJhbnNmb3JtLmJpbmQoe1xuICAgICAgICAgICAgdGFyZ2V0OiBfdGhpcy50YXJnZXQsXG4gICAgICAgICAgICB3YXRjaFByb3BzOiBbXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZVgnLCAncm90YXRlWScsICd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAnc2tld1gnLCAnc2tld1knXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDliLfmlrDmoLflvI9cbiAgICAgICAgX3RoaXMuc3R5bGUucmVmcmVzaCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwic2VsZWN0ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB2O1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdzZWxlY3QnLCB2KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIOiuvue9rmNzc+WIsGRvbVxuICAgIEpCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXREb21TdHlsZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAvLyDlpoLmnpzlpJblsYLlrrnlmajnmoTmoLflvI/vvIzliJnliqDliLBjb250YWluZXLkuIpcbiAgICAgICAgaWYgKG5hbWUgaW4gQ29udGFpbmVyRGVmYXVsdFN0eWxlIHx8IG5hbWUgPT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldERvbVN0eWxlLmNhbGwodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuY3NzKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSkJhc2VDb21wb25lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkgeyBwcm9wcyA9IFtdOyB9XG4gICAgICAgIC8vIOi9rGpzb27lv73nlaXmuLLmn5Pnu4Tku7ZcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudG9KU09OLmNhbGwodGhpcywgcHJvcHMsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsICE9PSBfdGhpcy50YXJnZXQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEpCYXNlQ29tcG9uZW50O1xufShKRWxlbWVudCkpO1xuZXhwb3J0IGRlZmF1bHQgSkJhc2VDb21wb25lbnQ7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuLi9jb3JlL2VsZW1lbnQnO1xuLy8g6byg5qCH5oyH6ZKIXG52YXIgR0N1cnNvcnMgPSB7XG4gICAgJ2wnOiAndy1yZXNpemUnLFxuICAgICdsdCc6ICdudy1yZXNpemUnLFxuICAgICd0JzogJ24tcmVzaXplJyxcbiAgICAndHInOiAnbmUtcmVzaXplJyxcbiAgICAncic6ICdlLXJlc2l6ZScsXG4gICAgJ3JiJzogJ3NlLXJlc2l6ZScsXG4gICAgJ2InOiAncy1yZXNpemUnLFxuICAgICdsYic6ICdzdy1yZXNpemUnLFxuICAgICdyb3RhdGUnOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQWdWQk1WRVVBQUFBaUs5TWpLZFVmS05ZaktkVWlLTllpS2RVZUh1QWpLTllqS05ZaUtOWXlNc3dpS05ZaUtOWWlLTllpS05ZaEtOWWlLZFVpS05ZaUtOWWpLZFVqS05ZZ0o5Y2pKZFlpS05ZaUtOWWlLZFVoSjljaktOWWlLZFVkTE5Ncks5TWlLTllpS05ZaUtkVWlLTllqS05ZaktkVWpLZFVqS05ZaktkVWpLZFVqS2RhVVc3ZVZBQUFBS25SU1RsTUFGZE1ZMS92NENQWG80d1h1eUxoNlJmS1JqV3BBSnh5a2IxdFNUakFSQzhPc2xZVmdPaXZRcnFleTdjYXFBQUFCTTBsRVFWUkl4KzJVNlc2RE1CQ0VEZFNFKzJ3Zzk1MGUzL3MvWUdPQlFJMGhNZitxS3ZPREhZc1plOWRlclhqaDMyQzJQc1UrQkljeUN3M2tWaG5SSVVqM3ovVHZFY1RwMVJHaXpzNDJCSnZIK2txU2JQdGxGa1A1MkxGYzM1M29zaENUTU04cEp6cGNodXV3ckxFczhmZERlczl6Umh3SDBnRzlEYlkxa2hSK09LUWZkOWhrdXY0TmJwL2hyRklLWGUrQU5lYklpSFc5Z0pib2QyZmhON3pUcStTaHBiLzNVdXNRMmZHZXVNdzZydEJ2MXZ4cmFYOVVnTk53UFYxbDBOT05tYmRNZDdqVWVua0ZxUmh6eUtFcjMvRFpFTk5IRFNPdUtwcTN6WmxFQmZQRzNFVmNWRFJ2L1JYNVZrekNBdjlqa2lGTXlPK0d3SGIxZU9ndDRLdnExMDRodmVySklNc2hlYS9DRzYxWDN5NnllRGI3bkpNSHlDaHdWVGlhMUxTN0hBTUorTW15TnAvZ08yY21YdmpEK0FIcHJocG9KS2lZWUFBQUFBQkpSVTVFcmtKZ2dnPT0nLFxuICAgICdza2V3JzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFkVkJNVkVVQUFBQmxZLzk3ZS85a1l2OWtZLzluWi85bFkvOWtZdjlrWS85a1l2OWtZLzlsWS85a1l2OWtZLzlwWVA5b1lQOWtZdjlrWXY5a1kvOWtZdjlpWXY5blkvOWtZdjlsWXY5a1l2OWxZdjlsWS85a1l2OWxZdjlrWS85a1l2OWxaZjlsWS85a1l2OWtZdjlsWXY5a1l2OWxZLzlsWS8ra3RRTlJBQUFBSm5SU1RsTUEvQVR2M3hIbVcvVjBUdE8za2hjTnk4WEJVaDhVNnRpK3BwdDVia3NuR1RxeWdtTkVaMGN0cGRVQUFBRW1TVVJCVkVqSDdWUGJsb0l3REtTbG9BVXFGNmtnZDEyMy8vK0phK2pTU3BHcUQ3NHhieW5KeWN4a2NEWnMrQklPQWEyeWdyZ0l1YVFvS3hvY2JOMDNGb29GUW5aNzN1MVJJbFpRVUcvWnZ6c0pDOXpHYU9lWmtFQUphOW91OXpEMjhxNXRXSUtFUkRaYjBrdnUrM01RbTV2ajRMeVhXaDdrNDJSY2UvVlcxRjFkK0o1ZzlmSUxkZG12MjllWDBQR2o2dlJlUmRobU9JN3VMYWtxZ1dUbldOR0JSRldCbzdsOUlBZVJxZ0tHRnp1bEN6aXJqeVpBeEdSYjYvdEhNMkdSRXExVkM3ZVd0dnBDb04zTTFucTBOWDNnd0F0OU9CaUFDZk53WkthU1J5b2FWU1QweEpCTjBVak5NelZHK05Db2cwemhvMHRQNG5vZWJ3S1AvMnpxK0xsNUF3dU5BWXBFeUlaWHYraEpVM0k0ZDE3aWlLVG9ONkZzL1dEZ2czNGRqUTBidm80L25hWXZnczh4bXZ3QUFBQUFTVVZPUks1Q1lJST0nXG59O1xuLy8g5o6n5Yi25YWD57Sg56e75Yqo5ZKM55+p6Zi15Y+Y5o2iXG52YXIgSkNvbnRyb2xsZXJJdGVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKQ29udHJvbGxlckl0ZW0sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkNvbnRyb2xsZXJJdGVtKG9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb24uc3R5bGUgPSBvcHRpb24uc3R5bGUgfHwge307XG4gICAgICAgIG9wdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmJztcbiAgICAgICAgb3B0aW9uLnN0eWxlLmJvcmRlciA9IG9wdGlvbi5zdHlsZS5ib3JkZXIgfHwgJzFweCBzb2xpZCByZ2JhKDYsMTU1LDE4MSwxKSc7XG4gICAgICAgIG9wdGlvbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaXIgPSAnJztcbiAgICAgICAgX3RoaXMuc2l6ZSA9IDg7XG4gICAgICAgIF90aGlzLl9pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAvLyDmi5bmlL7kvY3nva5cbiAgICAgICAgX3RoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZGlyID0gb3B0aW9uLmRpciB8fCAnJztcbiAgICAgICAgX3RoaXMuc2l6ZSA9IG9wdGlvbi5zaXplIHx8IDg7XG4gICAgICAgIF90aGlzLnN0eWxlLmN1cnNvciA9IF90aGlzLnN0eWxlLmN1cnNvciB8fCBHQ3Vyc29yc1tfdGhpcy5kaXJdO1xuICAgICAgICBfdGhpcy53aWR0aCA9IF90aGlzLmhlaWdodCA9IF90aGlzLnNpemU7XG4gICAgICAgIF90aGlzLmVkaXRvciA9IG9wdGlvbi5lZGl0b3I7XG4gICAgICAgIGlmIChfdGhpcy5lZGl0b3IpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIF90aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRyYWdFbmQoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIF90aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBfdGhpcy5lZGl0b3IuZG9tKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIOS4jeaYr291dOe8lui+keWZqO+8jOS4jeWkhOeQhlxuICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ0VuZChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgX3RoaXMuZWRpdG9yLnZpZXcub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25EcmFnTW92ZShlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMub25EcmFnU3RhcnQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLCBcImlzTW92aW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNNb3Zpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTW92aW5nID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEpDb250cm9sbGVySXRlbS5wcm90b3R5cGUub25EcmFnTW92ZSA9IGZ1bmN0aW9uIChldmVudCwgcG9zKSB7XG4gICAgICAgIGlmIChwb3MgPT09IHZvaWQgMCkgeyBwb3MgPSBldmVudDsgfVxuICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBvZmZYID0gKHBvcy54IC0gdGhpcy5kcmFnU3RhcnRQb3NpdGlvbi54KTtcbiAgICAgICAgdmFyIG9mZlkgPSAocG9zLnkgLSB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIGRpcjogdGhpcy5kaXIsXG4gICAgICAgICAgICBvZmZYOiBvZmZYLFxuICAgICAgICAgICAgb2ZmWTogb2ZmWSxcbiAgICAgICAgICAgIG9sZFBvc2l0aW9uOiB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLFxuICAgICAgICAgICAgbmV3UG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g6YCJ5Lit55qE5piv5riy5p+T5bGC55qE5Z2Q5qCH77yM6L2s5Li65o6n5Yi25bGC55qEXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24ueCA9IHBvcy54O1xuICAgICAgICB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnkgPSBwb3MueTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLm9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50LCBwb3MpIHtcbiAgICAgICAgaWYgKHBvcyA9PT0gdm9pZCAwKSB7IHBvcyA9IGV2ZW50OyB9XG4gICAgICAgIC8vIOmAieS4reeahOaYr+a4suafk+WxgueahOWdkOagh++8jOi9rOS4uuaOp+WItuWxgueahFxuICAgICAgICB0aGlzLmRyYWdTdGFydFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogcG9zLngsXG4gICAgICAgICAgICB5OiBwb3MueSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICAgIEpDb250cm9sbGVySXRlbS5wcm90b3R5cGUub25EcmFnRW5kID0gZnVuY3Rpb24gKGV2ZW50LCBwb3MpIHtcbiAgICAgICAgaWYgKHBvcyA9PT0gdm9pZCAwKSB7IHBvcyA9IGV2ZW50OyB9XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOiuoeeul+aMh+mSiFxuICAgIEpDb250cm9sbGVySXRlbS5wcm90b3R5cGUucmVzZXRDdXJzb3IgPSBmdW5jdGlvbiAocm90YXRpb24pIHtcbiAgICAgICAgLy8g5YWI566A5Y2V5aSE55CGXG4gICAgICAgIGlmICghcm90YXRpb24gfHwgKHJvdGF0aW9uID4gLU1hdGguUEkgLyA2ICYmIHJvdGF0aW9uIDwgTWF0aC5QSSAvIDYpKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9IEdDdXJzb3JzW3RoaXMuZGlyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSkNvbnRyb2xsZXJJdGVtO1xufShKRWxlbWVudCkpO1xuZXhwb3J0IHsgSkNvbnRyb2xsZXJJdGVtIH07XG4vLyDlhYPntKDlpKflsI/kvY3nva7mjqfliLblmahcbnZhciBKQ29udHJvbGxlckNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkNvbnRyb2xsZXJDb21wb25lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkNvbnRyb2xsZXJDb21wb25lbnQob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIG9wdGlvbi56SW5kZXggPSAxMDAwMDA7XG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IG9wdGlvbi5zdHlsZSB8fCB7fTtcbiAgICAgICAgb3B0aW9uLnN0eWxlLmN1cnNvciA9IG9wdGlvbi5zdHlsZS5jdXJzb3IgfHwgJ21vdmUnO1xuICAgICAgICBvcHRpb24uZGlyID0gJ2VsZW1lbnQnO1xuICAgICAgICBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgICAvL29wdGlvbi5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDJweCAycHggI2NjYyc7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAvLyDpgInmi6nmoYbovrnot51cbiAgICAgICAgX3RoaXMucGFkZGluZ1NpemUgPSAxO1xuICAgICAgICBfdGhpcy5pc0VkaXRvciA9IGZhbHNlOyAvLyDlvZPliY3lhbPogZTmmK/lkKbmmK/nvJbovpHlmahcbiAgICAgICAgX3RoaXMuaW5pdChvcHRpb24pO1xuICAgICAgICAvLyBodG1sMmNhbnZhc+S4jea4suafk1xuICAgICAgICBfdGhpcy5hdHRyKCdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZScsICd0cnVlJyk7XG4gICAgICAgIF90aGlzLmVkaXRvci5kb20uYXBwZW5kQ2hpbGQoX3RoaXMuZG9tKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdsJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogMCwgdG9wOiAnNTAlJyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgnbHQnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAwLCB0b3A6IDAgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ3QnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnNTAlJywgdG9wOiAwIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCd0cicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6ICcxMDAlJywgdG9wOiAwIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdyJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogJzEwMCUnLCB0b3A6ICc1MCUnIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdyYicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6ICcxMDAlJywgdG9wOiAnMTAwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2InLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnNTAlJywgdG9wOiAnMTAwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2xiJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogMCwgdG9wOiAnMTAwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDml4vovazlnZdcbiAgICAgICAgdGhpcy5yb3RhdGVJdGVtID0gdGhpcy5jcmVhdGVJdGVtKCdyb3RhdGUnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICBzaXplOiAyNCxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7IGxlZnQ6ICc1MCUnLCB0b3A6ICctNDBweCcsIFxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLCBib3hTaGFkb3c6ICcwIDAgMnB4IDJweCAjY2NjJywgYm9yZGVyUmFkaXVzOiAnNTAlJywgY3Vyc29yOiBcInBvaW50ZXJcIiB9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyAnYmFja2dyb3VuZFNpemUnOiAnMTAwJScsIGJhY2tncm91bmRJbWFnZTogR0N1cnNvcnMucm90YXRlIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5za2V3SXRlbSA9IHRoaXMuY3JlYXRlSXRlbSgnc2tldycsIHtcbiAgICAgICAgICAgIHNoYXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIHNpemU6IDI0LFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHsgbGVmdDogJzUwJScsIHRvcDogJzUwJScsIGJvcmRlcjogJ25vbmUnLCBib3hTaGFkb3c6ICcwIDAgMnB4IDJweCAjY2NjJywgYm9yZGVyUmFkaXVzOiAnNTAlJywgY3Vyc29yOiBcInBvaW50ZXJcIiB9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyAnYmFja2dyb3VuZFNpemUnOiAnMTAwJScsIGJhY2tncm91bmRJbWFnZTogR0N1cnNvcnMuc2tldyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIOaXi+i9rOWdlyBcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmlzRWRpdG9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIOS4jeaYr+e8lui+keWZqO+8jOS4jeWkhOeQhlxuICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmNoYW5nZShlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDnlJ/miJDmjqfliLbngrlcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuY3JlYXRlSXRlbSA9IGZ1bmN0aW9uIChpZCwgb3B0aW9uKSB7XG4gICAgICAgIHZhciBpdGVtID0gbmV3IEpDb250cm9sbGVySXRlbShfX2Fzc2lnbih7IGRpcjogaWQsIGVkaXRvcjogdGhpcy5lZGl0b3IgfSwgb3B0aW9uKSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpdGVtLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jaGFuZ2UoZSk7XG4gICAgICAgICAgICAvLyDph43nva7mjIfpkohcbiAgICAgICAgICAgIHRoaXMucmVzZXRDdXJzb3Ioc2VsZi50cmFuc2Zvcm0ucm90YXRlWik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICAgIC8vIOWPkeeUn+aUueWPmOWTjeW6lFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZGlyID0gZS5kaXIsIG9mZlggPSBlLm9mZlgsIG9mZlkgPSBlLm9mZlk7XG4gICAgICAgIC8vIOW9k+WJjeenu+WKqOWvueWOn+WvueixoeeahOaUueWPmFxuICAgICAgICB2YXIgYXJncyA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICAgIHNrZXc6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlQ2hhbmdlKGUsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpciA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICAgICAgICAvLyDlhYPntKDkvY3nva7mjqfliLblmahcbiAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICBhcmdzLnkgPSBvZmZZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5YWI5Zue5Y6f5Z2Q5qCH77yM5YaN5Li7566X5YGP56e76YeP77yM6L+Z5qC35L+d6K+B5pON5L2c5pu05a655piT55CG6KejXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0ucm90YXRlWikge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLmdldFJvdGF0ZUV2ZW50UG9zaXRpb24oZSk7XG4gICAgICAgICAgICAgICAgb2ZmWCA9IHBvcy5vZmZYO1xuICAgICAgICAgICAgICAgIG9mZlkgPSBwb3Mub2ZmWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy54ID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IC1vZmZYO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3InOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnYic6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnbHQnOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3JiJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnbGInOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnc2tldyc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ4ID0gb2ZmWCAvIHV0aWwudG9OdW1iZXIodGhpcy53aWR0aCkgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcnkgPSBvZmZZIC8gdXRpbC50b051bWJlcih0aGlzLmhlaWdodCkgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnNrZXcueCA9IHJ5O1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnNrZXcueSA9IHJ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5L2N56e7XG4gICAgICAgIGlmIChhcmdzLnggfHwgYXJncy55KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoYXJncy54LCBhcmdzLnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLndpZHRoKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSB1dGlsLnRvTnVtYmVyKHRoaXMud2lkdGgpICsgYXJncy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh3aWR0aCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGgubWF4KHV0aWwudG9OdW1iZXIodGhpcy5oZWlnaHQpICsgYXJncy5oZWlnaHQsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHgseeaXi+i9rFxuICAgICAgICBpZiAoYXJncy5za2V3LnggfHwgYXJncy5za2V3LnkpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVYICs9IGFyZ3Muc2tldy54O1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVkgKz0gYXJncy5za2V3Lnk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50cmFuc2Zvcm0uYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcGx5VG9UYXJnZXQoKTtcbiAgICB9O1xuICAgIC8vIOWboOS4uuaXi+i9rOWQjuWdkOagh+imgeWbnuWOn+aJjeWlveiuoeeul+aTjeS9nO+8jFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5nZXRSb3RhdGVFdmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG9mZlggPSBlLm9mZlgsIG9mZlkgPSBlLm9mZlksIG9sZFBvc2l0aW9uID0gZS5vbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24gPSBlLm5ld1Bvc2l0aW9uO1xuICAgICAgICAvLyDlhYjlm57ljp/lnZDmoIfvvIzlho3kuLvnrpflgY/np7vph4/vvIzov5nmoLfkv53or4Hmk43kvZzmm7TlrrnmmJPnkIbop6NcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopIHtcbiAgICAgICAgICAgIHZhciBjZW50ZXIgPSB7XG4gICAgICAgICAgICAgICAgeDogdXRpbC50b051bWJlcih0aGlzLmxlZnQpICsgdXRpbC50b051bWJlcih0aGlzLndpZHRoKSAvIDIsXG4gICAgICAgICAgICAgICAgeTogdXRpbC50b051bWJlcih0aGlzLnRvcCkgKyB1dGlsLnRvTnVtYmVyKHRoaXMuaGVpZ2h0KSAvIDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIF9hID0gX19yZWFkKHV0aWwucm90YXRlUG9pbnRzKFtvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb25dLCBjZW50ZXIsIC10aGlzLnRyYW5zZm9ybS5yb3RhdGVaKSwgMiksIHBvczEgPSBfYVswXSwgcG9zMiA9IF9hWzFdO1xuICAgICAgICAgICAgb2ZmWCA9IHBvczIueCAtIHBvczEueDtcbiAgICAgICAgICAgIG9mZlkgPSBwb3MyLnkgLSBwb3MxLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZlg6IG9mZlgsXG4gICAgICAgICAgICBvZmZZOiBvZmZZXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvLyDlj5HnlJ/ml4vovaxcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUucm90YXRlQ2hhbmdlID0gZnVuY3Rpb24gKGUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIG9sZFBvc2l0aW9uID0gZS5vbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24gPSBlLm5ld1Bvc2l0aW9uO1xuICAgICAgICB2YXIgY2VudGVyID0ge1xuICAgICAgICAgICAgeDogdXRpbC50b051bWJlcih0aGlzLmxlZnQpICsgdXRpbC50b051bWJlcih0aGlzLndpZHRoKSAvIDIsXG4gICAgICAgICAgICB5OiB1dGlsLnRvTnVtYmVyKHRoaXMudG9wKSArIHV0aWwudG9OdW1iZXIodGhpcy5oZWlnaHQpIC8gMixcbiAgICAgICAgfTtcbiAgICAgICAgLy8g57yW6L6R5Zmo5Z2Q5qCHXG4gICAgICAgIHZhciBwb3MxID0gdXRpbC50b0RvbVBvc2l0aW9uKG9sZFBvc2l0aW9uLCB0aGlzLmVkaXRvci5kb20pO1xuICAgICAgICB2YXIgcG9zMiA9IHV0aWwudG9Eb21Qb3NpdGlvbihuZXdQb3NpdGlvbiwgdGhpcy5lZGl0b3IuZG9tKTtcbiAgICAgICAgLy8g5Zug5Li6Y2VudGVy5piv55u45a+55LqO57yW6L6R5Zmo55qE77yM5omA5Lul5LqL5Lu25Z2Q5qCH5Lmf6ZyA6KaB6L2s5Yiw57yW6L6R5ZmoXG4gICAgICAgIHZhciBjeDEgPSBwb3MxLnggLSBjZW50ZXIueDtcbiAgICAgICAgdmFyIGN5MSA9IHBvczEueSAtIGNlbnRlci55O1xuICAgICAgICB2YXIgYW5nbGUxID0gTWF0aC5hdGFuKGN5MSAvIGN4MSk7XG4gICAgICAgIHZhciBjeDIgPSBwb3MyLnggLSBjZW50ZXIueDtcbiAgICAgICAgdmFyIGN5MiA9IHBvczIueSAtIGNlbnRlci55O1xuICAgICAgICB2YXIgYW5nbGUyID0gTWF0aC5hdGFuKGN5MiAvIGN4Mik7XG4gICAgICAgIGlmIChhbmdsZTEgPj0gMCAmJiBhbmdsZTIgPCAwKSB7XG4gICAgICAgICAgICBpZiAoY3gxID49IDAgJiYgY3kxID49IDAgJiYgY3gyIDw9IDAgJiYgY3kyID49IDApXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGN4MSA8PSAwICYmIGN5MSA8PSAwICYmIGN4MiA+PSAwICYmIGN5MiA8PSAwKVxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IE1hdGguUEkgKyBhbmdsZTI7XG4gICAgICAgICAgICAvL2Vsc2UgaWYoY3gxIDw9IDAgJiYgY3kxIDw9MCAmJiBjeDIgPj0gMCAmJiBjeTIgPj0gMCkgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbmdsZTEgPD0gMCAmJiBhbmdsZTIgPj0gMCkge1xuICAgICAgICAgICAgaWYgKGN4MSA+PSAwICYmIGN5MSA8PSAwICYmIGN4MiA8IDApXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gYW5nbGUyIC0gTWF0aC5QSTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSAtYW5nbGUyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFuZ2xlMSA+PSAwICYmIGFuZ2xlMiA+IDApIHtcbiAgICAgICAgICAgIC8vaWYoY3kyID09PSAwKSBhbmdsZTIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3Mucm90YXRpb24gPSBhbmdsZTIgLSBhbmdsZTE7XG4gICAgICAgIGlmIChhcmdzLnJvdGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaICs9IGFyZ3Mucm90YXRpb247XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5hcHBseSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDmiorlj5jmjaLlupTnlKjliLDnm67moIflhYPntKBcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuYXBwbHlUb1RhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICAgIHg6IHV0aWwudG9OdW1iZXIodGhpcy5sZWZ0KSArICh0aGlzLmlzRWRpdG9yID8gdXRpbC50b051bWJlcih0aGlzLnRhcmdldC5sZWZ0KSA6IDApLFxuICAgICAgICAgICAgeTogdXRpbC50b051bWJlcih0aGlzLnRvcCkgKyAodGhpcy5pc0VkaXRvciA/IHV0aWwudG9OdW1iZXIodGhpcy50YXJnZXQudG9wKSA6IDApXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGFyZ2V0LmxlZnQgPSBwb3MueDtcbiAgICAgICAgdGhpcy50YXJnZXQudG9wID0gcG9zLnk7XG4gICAgICAgIC8vIOe8lui+keWZqOebuOWvueS9jee9ruS4gOebtOaYrzBcbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtLmZyb20oe1xuICAgICAgICAgICAgLy9za2V3WDogdGhpcy50cmFuc2Zvcm0uc2tld1gsXG4gICAgICAgICAgICAvL3NrZXdZOiB0aGlzLnRyYW5zZm9ybS5za2V3WSxcbiAgICAgICAgICAgIHJvdGF0ZVo6IHRoaXMudHJhbnNmb3JtLnJvdGF0ZVosXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgd2lkdGggPSB1dGlsLnRvTnVtYmVyKHRoaXMud2lkdGgpIC0gdGhpcy5wYWRkaW5nU2l6ZSAqIDI7XG4gICAgICAgIHZhciBoZWlnaHQgPSB1dGlsLnRvTnVtYmVyKHRoaXMuaGVpZ2h0KSAtIHRoaXMucGFkZGluZ1NpemUgKiAyO1xuICAgICAgICBpZiAodGhpcy50YXJnZXQud2lkdGggIT09IHdpZHRoKVxuICAgICAgICAgICAgdGhpcy50YXJnZXQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmhlaWdodCAhPT0gaGVpZ2h0KVxuICAgICAgICAgICAgdGhpcy50YXJnZXQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH07XG4gICAgLy8g6YeN572uXG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKGlzRWRpdG9yKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAoaXNFZGl0b3IgPT09IHZvaWQgMCkgeyBpc0VkaXRvciA9IHRoaXMuaXNFZGl0b3I7IH1cbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICBkZWxldGUgdGhpcy50YXJnZXQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyDnvJbovpHlmajkuI3orqnml4vovazlkoxza2V3XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMuaXRlbXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpdGVtLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gIWlzRWRpdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uZnJvbSh7XG4gICAgICAgICAgICByb3RhdGVaOiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOe7keWumuWIsOaTjeS9nOeahOWvueixoVxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0aGlzLmlzRWRpdG9yID0gdGFyZ2V0ID09PSB0aGlzLmVkaXRvcjtcbiAgICAgICAgdGhpcy5yZXNldCh0aGlzLmlzRWRpdG9yKTtcbiAgICAgICAgLy8g57yW6L6R5Zmo55qE6K+d77yM6ZyA6KaB5oqK5a6D55qE5Z2Q5qCH6L2s5Li655u45a+55LqO5a655Zmo55qEXG4gICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5pc0VkaXRvciA/IDAgOiB1dGlsLnRvTnVtYmVyKHRhcmdldC5sZWZ0KSksXG4gICAgICAgICAgICB5OiAodGhpcy5pc0VkaXRvciA/IDAgOiB1dGlsLnRvTnVtYmVyKHRhcmdldC50b3ApKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxlZnQgPSBwb3MueDtcbiAgICAgICAgdGhpcy50b3AgPSBwb3MueTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHV0aWwudG9OdW1iZXIodGFyZ2V0LndpZHRoKSArIHRoaXMucGFkZGluZ1NpemUgKiAyO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHV0aWwudG9OdW1iZXIodGFyZ2V0LmhlaWdodCkgKyB0aGlzLnBhZGRpbmdTaXplICogMjtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uZnJvbSh7XG4gICAgICAgICAgICAvLyByb3RhdGVYOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVgsXG4gICAgICAgICAgICAvLyByb3RhdGVZOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVksXG4gICAgICAgICAgICByb3RhdGVaOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVosXG4gICAgICAgICAgICAvL3NjYWxlWDogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVgsXG4gICAgICAgICAgICAvL3NjYWxlWTogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVksXG4gICAgICAgICAgICAvL3NjYWxlWjogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVosXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8g5aaC5p6c5piv57yW6L6R5Zmo77yM5YiZ5LiN6IO95o2V6I635LqL5Lu2XG4gICAgICAgIHRoaXMuY3NzKHtcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IHRoaXMuaXNFZGl0b3IgPyAnbm9uZScgOiAnYXV0bydcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDop6PpmaTnu5HlrppcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBKQ29udHJvbGxlckNvbXBvbmVudDtcbn0oSkNvbnRyb2xsZXJJdGVtKSk7XG5leHBvcnQgZGVmYXVsdCBKQ29udHJvbGxlckNvbXBvbmVudDtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbnZhciBKSW1hZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpJbWFnZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKSW1hZ2Uob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uKSwgeyBub2RlVHlwZTogJ2ltZycgfSkpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnRhcmdldC5kb20ub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ2xvYWQnLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMudGFyZ2V0LmRvbS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywgZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnRhcmdldC5hdHRyKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKTtcbiAgICAgICAgX3RoaXMuc3JjID0gb3B0aW9uLnVybCB8fCBvcHRpb24uc3JjIHx8ICcnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKSW1hZ2UucHJvdG90eXBlLCBcInNyY1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmRvbS5zcmM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmRvbS5zcmMgPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgSkltYWdlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSBbXTsgfVxuICAgICAgICBwcm9wcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudG9KU09OLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIH07XG4gICAgcmV0dXJuIEpJbWFnZTtcbn0oQmFzZSkpO1xuZXhwb3J0IGRlZmF1bHQgSkltYWdlO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xudmFyIEpUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKVGV4dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKVGV4dChvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IG5vZGVUeXBlOiAnZGl2JyB9KSkgfHwgdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbi50ZXh0KVxuICAgICAgICAgICAgX3RoaXMudGV4dCA9IG9wdGlvbi50ZXh0O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKVGV4dC5wcm90b3R5cGUsIFwidGV4dFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmRvbS5pbm5lclRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmRvbS5pbm5lclRleHQgPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgSlRleHQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkgeyBwcm9wcyA9IFtdOyB9XG4gICAgICAgIHByb3BzLnB1c2goJ3RleHQnKTtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudG9KU09OLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIH07XG4gICAgcmV0dXJuIEpUZXh0O1xufShCYXNlKSk7XG5leHBvcnQgZGVmYXVsdCBKVGV4dDtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgRXZlbnRFbWl0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMyc7XG52YXIgU3R5bGVOYW1lc01hcCA9IFtdO1xuLy8g5pSv5oyB55qE5qC35byP5bGe5oCn5YiX6KGoXG52YXIgSkVsZW1lbnRTdHlsZURlY2xhcmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnRTdHlsZURlY2xhcmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb247XG59KEV2ZW50RW1pdGVyKSk7XG5leHBvcnQgeyBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24gfTtcbi8vIOagt+W8j+WxnuaAp+mbhuWQiFxudmFyIEpFbGVtZW50U3R5bGVQcm9wZXJ0eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBKRWxlbWVudFN0eWxlUHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuYWNjZW50Q29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5hbGlnbkNvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5hbGlnbkl0ZW1zID0gJyc7XG4gICAgICAgIHRoaXMuYWxpZ25TZWxmID0gJyc7XG4gICAgICAgIHRoaXMuYWxpZ25tZW50QmFzZWxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5hbGwgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db21wb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRlbGF5ID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyZWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25GaWxsTW9kZSA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50ID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblBsYXlTdGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9ICcnO1xuICAgICAgICB0aGlzLmFzcGVjdFJhdGlvID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BGaWx0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZmFjZVZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEF0dGFjaG1lbnQgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQmxlbmRNb2RlID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENsaXAgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFBvc2l0aW9uWCA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRQb3NpdGlvblkgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUmVwZWF0ID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFNpemUgPSAnJztcbiAgICAgICAgdGhpcy5iYXNlbGluZVNoaWZ0ID0gJyc7XG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja0NvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tFbmQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja0VuZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tFbmRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrRW5kV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tTdGFydENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tTdGFydFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tTdGFydFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCb3R0b20gPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21Db2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xsYXBzZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyRW5kRW5kUmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyRW5kU3RhcnRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbWFnZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlT3V0c2V0ID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW1hZ2VSZXBlYXQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbWFnZVNsaWNlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW1hZ2VTb3VyY2UgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbWFnZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVFbmQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVFbmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZUVuZFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lRW5kV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZVN0YXJ0Q29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVTdGFydFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lU3RhcnRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZVN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJMZWZ0ID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyTGVmdENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyTGVmdFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyTGVmdFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyUmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyUmlnaHRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclJpZ2h0V2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJTcGFjaW5nID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyU3RhcnRFbmRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJTdGFydFN0YXJ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJUb3AgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJUb3BDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclRvcExlZnRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJUb3BSaWdodFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclRvcFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLmJveFNoYWRvdyA9ICcnO1xuICAgICAgICB0aGlzLmJveFNpemluZyA9ICcnO1xuICAgICAgICB0aGlzLmJyZWFrQWZ0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5icmVha0JlZm9yZSA9ICcnO1xuICAgICAgICB0aGlzLmJyZWFrSW5zaWRlID0gJyc7XG4gICAgICAgIHRoaXMuY2FwdGlvblNpZGUgPSAnJztcbiAgICAgICAgdGhpcy5jYXJldENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuY2xlYXIgPSAnJztcbiAgICAgICAgdGhpcy5jbGlwID0gJyc7XG4gICAgICAgIHRoaXMuY2xpcFBhdGggPSAnJztcbiAgICAgICAgdGhpcy5jbGlwUnVsZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuY29sb3JJbnRlcnBvbGF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycyA9ICcnO1xuICAgICAgICB0aGlzLmNvbG9yU2NoZW1lID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uQ291bnQgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5GaWxsID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uR2FwID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uUnVsZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtblJ1bGVDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtblJ1bGVTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtblJ1bGVXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtblNwYW4gPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5XaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbkludHJpbnNpY0Jsb2NrU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5JbnRyaW5zaWNIZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluSW50cmluc2ljSW5saW5lU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5JbnRyaW5zaWNTaXplID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbkludHJpbnNpY1dpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lclR5cGUgPSAnJztcbiAgICAgICAgdGhpcy5jb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuY291bnRlckluY3JlbWVudCA9ICcnO1xuICAgICAgICB0aGlzLmNvdW50ZXJSZXNldCA9ICcnO1xuICAgICAgICB0aGlzLmNvdW50ZXJTZXQgPSAnJztcbiAgICAgICAgdGhpcy5jc3NGbG9hdCA9ICcnO1xuICAgICAgICB0aGlzLmNzc1RleHQgPSAnJztcbiAgICAgICAgdGhpcy5jdXJzb3IgPSAnJztcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gJyc7XG4gICAgICAgIHRoaXMuZG9taW5hbnRCYXNlbGluZSA9ICcnO1xuICAgICAgICB0aGlzLmVtcHR5Q2VsbHMgPSAnJztcbiAgICAgICAgdGhpcy5maWxsID0gJyc7XG4gICAgICAgIHRoaXMuZmlsbE9wYWNpdHkgPSAnJztcbiAgICAgICAgdGhpcy5maWxsUnVsZSA9ICcnO1xuICAgICAgICB0aGlzLmZpbHRlciA9ICcnO1xuICAgICAgICB0aGlzLmZsZXggPSAnJztcbiAgICAgICAgdGhpcy5mbGV4QmFzaXMgPSAnJztcbiAgICAgICAgdGhpcy5mbGV4RGlyZWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuZmxleEZsb3cgPSAnJztcbiAgICAgICAgdGhpcy5mbGV4R3JvdyA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhTaHJpbmsgPSAnJztcbiAgICAgICAgdGhpcy5mbGV4V3JhcCA9ICcnO1xuICAgICAgICB0aGlzLmZsb2F0ID0gJyc7XG4gICAgICAgIHRoaXMuZmxvb2RDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmZsb29kT3BhY2l0eSA9ICcnO1xuICAgICAgICB0aGlzLmZvbnQgPSAnJztcbiAgICAgICAgdGhpcy5mb250RmFtaWx5ID0gJyc7XG4gICAgICAgIHRoaXMuZm9udEZlYXR1cmVTZXR0aW5ncyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRLZXJuaW5nID0gJyc7XG4gICAgICAgIHRoaXMuZm9udE9wdGljYWxTaXppbmcgPSAnJztcbiAgICAgICAgdGhpcy5mb250UGFsZXR0ZSA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTaXplID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFNpemVBZGp1c3QgPSAnJztcbiAgICAgICAgdGhpcy5mb250U3RyZXRjaCA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTeW50aGVzaXMgPSAnJztcbiAgICAgICAgdGhpcy5mb250U3ludGhlc2lzU21hbGxDYXBzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFN5bnRoZXNpc1N0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFN5bnRoZXNpc1dlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50ID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRBbHRlcm5hdGVzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRDYXBzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRFYXN0QXNpYW4gPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudExpZ2F0dXJlcyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50TnVtZXJpYyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50UG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWF0aW9uU2V0dGluZ3MgPSAnJztcbiAgICAgICAgdGhpcy5mb250V2VpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuZm9yY2VkQ29sb3JBZGp1c3QgPSAnJztcbiAgICAgICAgdGhpcy5nYXAgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZEFyZWEgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQXV0b0NvbHVtbnMgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQXV0b0Zsb3cgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQXV0b1Jvd3MgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbkVuZCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW5HYXAgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkR2FwID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFJvdyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRSb3dFbmQgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkUm93R2FwID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFJvd1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlQXJlYXMgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlUm93cyA9ICcnO1xuICAgICAgICB0aGlzLmhlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmh5cGhlbmF0ZUNoYXJhY3RlciA9ICcnO1xuICAgICAgICB0aGlzLmh5cGhlbnMgPSAnJztcbiAgICAgICAgdGhpcy5pbWFnZU9yaWVudGF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuaW1hZ2VSZW5kZXJpbmcgPSAnJztcbiAgICAgICAgdGhpcy5pbmxpbmVTaXplID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXQgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldEJsb2NrID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXRCbG9ja0VuZCA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0QmxvY2tTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0SW5saW5lID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXRJbmxpbmVFbmQgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldElubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuaXNvbGF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuanVzdGlmeUNvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5qdXN0aWZ5SXRlbXMgPSAnJztcbiAgICAgICAgdGhpcy5qdXN0aWZ5U2VsZiA9ICcnO1xuICAgICAgICB0aGlzLmxlZnQgPSAnJztcbiAgICAgICAgdGhpcy5sZXR0ZXJTcGFjaW5nID0gJyc7XG4gICAgICAgIHRoaXMubGlnaHRpbmdDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmxpbmVCcmVhayA9ICcnO1xuICAgICAgICB0aGlzLmxpbmVIZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5saXN0U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5saXN0U3R5bGVJbWFnZSA9ICcnO1xuICAgICAgICB0aGlzLmxpc3RTdHlsZVBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMubGlzdFN0eWxlVHlwZSA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbiA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbkJsb2NrID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luQmxvY2tFbmQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5CbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luQm90dG9tID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luSW5saW5lID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luSW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luSW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5MZWZ0ID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luUmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5Ub3AgPSAnJztcbiAgICAgICAgdGhpcy5tYXJrZXIgPSAnJztcbiAgICAgICAgdGhpcy5tYXJrZXJFbmQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJrZXJNaWQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJrZXJTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLm1hc2sgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrQ2xpcCA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tDb21wb3NpdGUgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrSW1hZ2UgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrTW9kZSA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tPcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy5tYXNrUG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5tYXNrUmVwZWF0ID0gJyc7XG4gICAgICAgIHRoaXMubWFza1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrVHlwZSA9ICcnO1xuICAgICAgICB0aGlzLm1hdGhTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLm1heEJsb2NrU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLm1heEhlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLm1heElubGluZVNpemUgPSAnJztcbiAgICAgICAgdGhpcy5tYXhXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLm1pbkJsb2NrU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLm1pbkhlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLm1pbklubGluZVNpemUgPSAnJztcbiAgICAgICAgdGhpcy5taW5XaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLm1peEJsZW5kTW9kZSA9ICcnO1xuICAgICAgICB0aGlzLm9iamVjdEZpdCA9ICcnO1xuICAgICAgICB0aGlzLm9iamVjdFBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gJyc7XG4gICAgICAgIHRoaXMub2Zmc2V0RGlzdGFuY2UgPSAnJztcbiAgICAgICAgdGhpcy5vZmZzZXRQYXRoID0gJyc7XG4gICAgICAgIHRoaXMub2Zmc2V0Um90YXRlID0gJyc7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9ICcnO1xuICAgICAgICB0aGlzLm9yZGVyID0gJyc7XG4gICAgICAgIHRoaXMub3JwaGFucyA9ICcnO1xuICAgICAgICB0aGlzLm91dGxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5vdXRsaW5lQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5vdXRsaW5lT2Zmc2V0ID0gJyc7XG4gICAgICAgIHRoaXMub3V0bGluZVN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMub3V0bGluZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvd0FuY2hvciA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJmbG93Q2xpcE1hcmdpbiA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJmbG93V3JhcCA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJmbG93WCA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJmbG93WSA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJzY3JvbGxCZWhhdmlvciA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJzY3JvbGxCZWhhdmlvckJsb2NrID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcnNjcm9sbEJlaGF2aW9ySW5saW5lID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcnNjcm9sbEJlaGF2aW9yWCA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJzY3JvbGxCZWhhdmlvclkgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0Jsb2NrID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0Jsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0Jsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nQm90dG9tID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0lubGluZSA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdJbmxpbmVFbmQgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nSW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nTGVmdCA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdUb3AgPSAnJztcbiAgICAgICAgdGhpcy5wYWdlID0gJyc7XG4gICAgICAgIHRoaXMucGFnZUJyZWFrQWZ0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5wYWdlQnJlYWtCZWZvcmUgPSAnJztcbiAgICAgICAgdGhpcy5wYWdlQnJlYWtJbnNpZGUgPSAnJztcbiAgICAgICAgdGhpcy5wYWludE9yZGVyID0gJyc7XG4gICAgICAgIHRoaXMucGVyc3BlY3RpdmUgPSAnJztcbiAgICAgICAgdGhpcy5wZXJzcGVjdGl2ZU9yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLnBsYWNlQ29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLnBsYWNlSXRlbXMgPSAnJztcbiAgICAgICAgdGhpcy5wbGFjZVNlbGYgPSAnJztcbiAgICAgICAgdGhpcy5wb2ludGVyRXZlbnRzID0gJyc7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5wcmludENvbG9yQWRqdXN0ID0gJyc7XG4gICAgICAgIHRoaXMucXVvdGVzID0gJyc7XG4gICAgICAgIHRoaXMucmVzaXplID0gJyc7XG4gICAgICAgIHRoaXMucmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5yb3RhdGUgPSAnJztcbiAgICAgICAgdGhpcy5yb3dHYXAgPSAnJztcbiAgICAgICAgdGhpcy5ydWJ5UG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5zY2FsZSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luQmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5CbG9ja0VuZCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbkJsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5Cb3R0b20gPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5JbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5JbmxpbmVFbmQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5JbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbkxlZnQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5SaWdodCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpblRvcCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmcgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nQmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nQmxvY2tFbmQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdCb3R0b20gPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nSW5saW5lID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0lubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdJbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ1JpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ1RvcCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFNuYXBBbGlnbiA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFNuYXBTdG9wID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsU25hcFR5cGUgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJHdXR0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5zaGFwZUltYWdlVGhyZXNob2xkID0gJyc7XG4gICAgICAgIHRoaXMuc2hhcGVNYXJnaW4gPSAnJztcbiAgICAgICAgdGhpcy5zaGFwZU91dHNpZGUgPSAnJztcbiAgICAgICAgdGhpcy5zaGFwZVJlbmRlcmluZyA9ICcnO1xuICAgICAgICB0aGlzLnN0b3BDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLnN0b3BPcGFjaXR5ID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlRGFzaGFycmF5ID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlRGFzaG9mZnNldCA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZUxpbmVjYXAgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VMaW5lam9pbiA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZU1pdGVybGltaXQgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VPcGFjaXR5ID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy50YWJTaXplID0gJyc7XG4gICAgICAgIHRoaXMudGFibGVMYXlvdXQgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0QWxpZ24gPSAnJztcbiAgICAgICAgdGhpcy50ZXh0QWxpZ25MYXN0ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEFuY2hvciA9ICcnO1xuICAgICAgICB0aGlzLnRleHRDb21iaW5lVXByaWdodCA9ICcnO1xuICAgICAgICB0aGlzLnRleHREZWNvcmF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb25Db2xvciA9ICcnO1xuICAgICAgICB0aGlzLnRleHREZWNvcmF0aW9uTGluZSA9ICcnO1xuICAgICAgICB0aGlzLnRleHREZWNvcmF0aW9uU2tpcEluayA9ICcnO1xuICAgICAgICB0aGlzLnRleHREZWNvcmF0aW9uU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyA9ICcnO1xuICAgICAgICB0aGlzLnRleHRFbXBoYXNpcyA9ICcnO1xuICAgICAgICB0aGlzLnRleHRFbXBoYXNpc0NvbG9yID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEVtcGhhc2lzUG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RW1waGFzaXNTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLnRleHRJbmRlbnQgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0T3JpZW50YXRpb24gPSAnJztcbiAgICAgICAgdGhpcy50ZXh0T3ZlcmZsb3cgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0UmVuZGVyaW5nID0gJyc7XG4gICAgICAgIHRoaXMudGV4dFNoYWRvdyA9ICcnO1xuICAgICAgICB0aGlzLnRleHRUcmFuc2Zvcm0gPSAnJztcbiAgICAgICAgdGhpcy50ZXh0VW5kZXJsaW5lT2Zmc2V0ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dFVuZGVybGluZVBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudG9wID0gJyc7XG4gICAgICAgIHRoaXMudG91Y2hBY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1Cb3ggPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1TdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRGVsYXkgPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uUHJvcGVydHkgPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAnJztcbiAgICAgICAgdGhpcy51bmljb2RlQmlkaSA9ICcnO1xuICAgICAgICB0aGlzLnVzZXJTZWxlY3QgPSAnJztcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWduID0gJyc7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFsaWduQ29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFsaWduSXRlbXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbGlnblNlbGYgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25EZWxheSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbkRpcmVjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uRmlsbE1vZGUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25JdGVyYXRpb25Db3VudCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbk5hbWUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25QbGF5U3RhdGUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25UaW1pbmdGdW5jdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFwcGVhcmFuY2UgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCYWNrZmFjZVZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCYWNrZ3JvdW5kQ2xpcCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJhY2tncm91bmRPcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCYWNrZ3JvdW5kU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3JkZXJCb3R0b21SaWdodFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJvcmRlclJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJvcmRlclRvcExlZnRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3JkZXJUb3BSaWdodFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJveEFsaWduID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94RmxleCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJveE9yZGluYWxHcm91cCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJveE9yaWVudCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJveFBhY2sgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hTaGFkb3cgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hTaXppbmcgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGaWx0ZXIgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmxleEJhc2lzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmxleERpcmVjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhGbG93ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmxleEdyb3cgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4U2hyaW5rID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmxleFdyYXAgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRKdXN0aWZ5Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdExpbmVDbGFtcCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2sgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQm94SW1hZ2UgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQm94SW1hZ2VPdXRzZXQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQm94SW1hZ2VSZXBlYXQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQm94SW1hZ2VTbGljZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tCb3hJbWFnZVNvdXJjZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tCb3hJbWFnZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0NsaXAgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQ29tcG9zaXRlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0ltYWdlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza09yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tSZXBlYXQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE9yZGVyID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0UGVyc3BlY3RpdmUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRQZXJzcGVjdGl2ZU9yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRleHRGaWxsQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUZXh0U2l6ZUFkanVzdCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRleHRTdHJva2UgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUZXh0U3Ryb2tlQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUZXh0U3Ryb2tlV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUcmFuc2Zvcm0gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUcmFuc2Zvcm1PcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUcmFuc2Zvcm1TdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUcmFuc2l0aW9uRGVsYXkgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUcmFuc2l0aW9uUHJvcGVydHkgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUcmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRVc2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMud2hpdGVTcGFjZSA9ICcnO1xuICAgICAgICB0aGlzLndpZG93cyA9ICcnO1xuICAgICAgICB0aGlzLndpZHRoID0gJyc7XG4gICAgICAgIHRoaXMud2lsbENoYW5nZSA9ICcnO1xuICAgICAgICB0aGlzLndvcmRCcmVhayA9ICcnO1xuICAgICAgICB0aGlzLndvcmRTcGFjaW5nID0gJyc7XG4gICAgICAgIHRoaXMud29yZFdyYXAgPSAnJztcbiAgICAgICAgdGhpcy53cml0aW5nTW9kZSA9ICcnO1xuICAgICAgICB0aGlzLnpJbmRleCA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gSkVsZW1lbnRTdHlsZVByb3BlcnR5O1xufSgpKTtcbmV4cG9ydCB7IEpFbGVtZW50U3R5bGVQcm9wZXJ0eSB9O1xudmFyIEpFbGVtZW50Q3NzU3R5bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFbGVtZW50Q3NzU3R5bGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnRDc3NTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnRDc3NTdHlsZS5wcm90b3R5cGUsIFwibmFtZXNcIiwge1xuICAgICAgICAvLyDmiYDmnInmoLflvI/lkI3np7BcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIGlmICghU3R5bGVOYW1lc01hcC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwID0gbmV3IEpFbGVtZW50U3R5bGVQcm9wZXJ0eSgpO1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWFwKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzXzEgPSBfX3ZhbHVlcyhrZXlzKSwga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpOyAha2V5c18xXzEuZG9uZTsga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtleXNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXBba10gPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0eWxlTmFtZXNNYXAucHVzaChrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXNfMV8xICYmICFrZXlzXzFfMS5kb25lICYmIChfYSA9IGtleXNfMS5yZXR1cm4pKSBfYS5jYWxsKGtleXNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTdHlsZU5hbWVzTWFwO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEpFbGVtZW50Q3NzU3R5bGU7XG59KEpFbGVtZW50U3R5bGVEZWNsYXJhdGlvbikpO1xuZXhwb3J0IGRlZmF1bHQgSkVsZW1lbnRDc3NTdHlsZTtcbi8vIOacgOWkluWxguWuueWZqOm7mOiupOagt+W8j1xuZXhwb3J0IHZhciBDb250YWluZXJEZWZhdWx0U3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogJzAnLFxuICAgIHRvcDogJzAnLFxuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgbWFyZ2luOiAnMCcsXG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xufTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgRXZlbnRFbWl0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG52YXIgVHJhbnNmb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUcmFuc2Zvcm0sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtKG9wdGlvbiwgdGFyZ2V0T3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIC8vIOWTjeW6lOWPmOWMluaNouWFg+e0oOWSjOWxnuaAp1xuICAgICAgICBfdGhpcy50YXJnZXRzID0gW107XG4gICAgICAgIC8vIHjlgY/np7vph49cbiAgICAgICAgX3RoaXMudHJhbnNsYXRlWCA9IDA7XG4gICAgICAgIC8vIHnlgY/np7vph49cbiAgICAgICAgX3RoaXMudHJhbnNsYXRlWSA9IDA7XG4gICAgICAgIC8vIHrlgY/np7vph49cbiAgICAgICAgX3RoaXMudHJhbnNsYXRlWiA9IDA7XG4gICAgICAgIF90aGlzLnJvdGF0ZVggPSAwO1xuICAgICAgICBfdGhpcy5yb3RhdGVZID0gMDtcbiAgICAgICAgX3RoaXMucm90YXRlWiA9IDA7XG4gICAgICAgIF90aGlzLnNjYWxlWCA9IDE7XG4gICAgICAgIF90aGlzLnNjYWxlWSA9IDE7XG4gICAgICAgIF90aGlzLnNjYWxlWiA9IDE7XG4gICAgICAgIF90aGlzLnNrZXdYID0gMDtcbiAgICAgICAgX3RoaXMuc2tld1kgPSAwO1xuICAgICAgICBpZiAob3B0aW9uKVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihfdGhpcywgb3B0aW9uKTtcbiAgICAgICAgaWYgKHRhcmdldE9wdGlvbilcbiAgICAgICAgICAgIF90aGlzLmJpbmQodGFyZ2V0T3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGVYU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdCh1dGlsLnRvUFgodGhpcy50cmFuc2xhdGVYKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwidHJhbnNsYXRlWVN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlWShcIi5jb25jYXQodXRpbC50b1BYKHRoaXMudHJhbnNsYXRlWSksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInRyYW5zbGF0ZVpTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZVooXCIuY29uY2F0KHV0aWwudG9QWCh0aGlzLnRyYW5zbGF0ZVopLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJyb3RhdGVYU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyb3RhdGVYKFwiLmNvbmNhdCh1dGlsLnRvUmFkKHRoaXMucm90YXRlWCksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInJvdGF0ZVlTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInJvdGF0ZVkoXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5yb3RhdGVZKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwicm90YXRlWlN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwicm90YXRlWihcIi5jb25jYXQodXRpbC50b1JhZCh0aGlzLnJvdGF0ZVopLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJzY2FsZVhTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInNjYWxlWChcIi5jb25jYXQodGhpcy5zY2FsZVgsIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInNjYWxlWVN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2NhbGVZKFwiLmNvbmNhdCh0aGlzLnNjYWxlWSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwic2NhbGVaU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJzY2FsZVooXCIuY29uY2F0KHRoaXMuc2NhbGVaLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJza2V3WFN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2tld1goXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5za2V3WCksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInNrZXdZU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJza2V3WShcIi5jb25jYXQodXRpbC50b1JhZCh0aGlzLnNrZXdZKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5mcm9tID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEpXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIH07XG4gICAgLy8g55Sf5pWIXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB0aGlzLnRhcmdldHM7IH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0YXJnZXRfMSA9IF9fdmFsdWVzKHRhcmdldCksIHRhcmdldF8xXzEgPSB0YXJnZXRfMS5uZXh0KCk7ICF0YXJnZXRfMV8xLmRvbmU7IHRhcmdldF8xXzEgPSB0YXJnZXRfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0YXJnZXRfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5KHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0XzFfMSAmJiAhdGFyZ2V0XzFfMS5kb25lICYmIChfYSA9IHRhcmdldF8xLnJldHVybikpIF9hLmNhbGwodGFyZ2V0XzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LnRhcmdldCAmJiB0YXJnZXQudGFyZ2V0LmNzcylcbiAgICAgICAgICAgICAgICB0YXJnZXQudGFyZ2V0LmNzcygndHJhbnNmb3JtJywgdGhpcy50b1N0cmluZyh0YXJnZXQud2F0Y2hQcm9wcykpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0LnRhcmdldClcbiAgICAgICAgICAgICAgICB0YXJnZXQudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMudG9TdHJpbmcodGFyZ2V0LndhdGNoUHJvcHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnu5HlrprlubbliLfmlrDliLDnm67moIfkuIpcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldCk7XG4gICAgICAgIHRoaXMuYXBwbHkodGFyZ2V0KTtcbiAgICB9O1xuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50YXJnZXRzLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRzW2ldLnRhcmdldCA9PT0gdGFyZ2V0LnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOeUn+aIkHRyYW5zZm9ybeS7o+eQhlxuICAgIFRyYW5zZm9ybS5jcmVhdGVQcm94eSA9IGZ1bmN0aW9uIChvYmosIGVsKSB7XG4gICAgICAgIGlmIChvYmogPT09IHZvaWQgMCkgeyBvYmogPSB7fTsgfVxuICAgICAgICB2YXIgdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybShvYmosIGVsKTtcbiAgICAgICAgLy8g5Luj55CG5aSE55CGXG4gICAgICAgIHZhciBwcm94eSA9IG5ldyBQcm94eSh0cmFuc2Zvcm0sIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRhcmdldFtwXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHAsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRhcmdldC5hcHBseSgpOyAvLyDnlJ/mlYhcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9O1xuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAod2F0Y2hQcm9wcykge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICBpZiAoIXdhdGNoUHJvcHMpIHtcbiAgICAgICAgICAgIHdhdGNoUHJvcHMgPSBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICd0cmFuc2xhdGVaJywgXCJyb3RhdGVYXCIsICdyb3RhdGVZJywgJ3JvdGF0ZVonLCAnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tld1gnLCAnc2tld1knXTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgd2F0Y2hQcm9wc18xID0gX192YWx1ZXMod2F0Y2hQcm9wcyksIHdhdGNoUHJvcHNfMV8xID0gd2F0Y2hQcm9wc18xLm5leHQoKTsgIXdhdGNoUHJvcHNfMV8xLmRvbmU7IHdhdGNoUHJvcHNfMV8xID0gd2F0Y2hQcm9wc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gd2F0Y2hQcm9wc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIG52ID0gdGhpc1tuICsgJ1N0cmluZyddO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tuXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG52ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChudik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAod2F0Y2hQcm9wc18xXzEgJiYgIXdhdGNoUHJvcHNfMV8xLmRvbmUgJiYgKF9hID0gd2F0Y2hQcm9wc18xLnJldHVybikpIF9hLmNhbGwod2F0Y2hQcm9wc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpvaW4oJyAnKTtcbiAgICB9O1xuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNsYXRlWDogdGhpcy50cmFuc2xhdGVYLFxuICAgICAgICAgICAgdHJhbnNsYXRlWTogdGhpcy50cmFuc2xhdGVZLFxuICAgICAgICAgICAgdHJhbnNsYXRlWjogdGhpcy50cmFuc2xhdGVaLFxuICAgICAgICAgICAgcm90YXRlWDogdGhpcy5yb3RhdGVYLFxuICAgICAgICAgICAgcm90YXRlWTogdGhpcy5yb3RhdGVZLFxuICAgICAgICAgICAgcm90YXRlWjogdGhpcy5yb3RhdGVaLFxuICAgICAgICAgICAgc2NhbGVYOiB0aGlzLnNjYWxlWCxcbiAgICAgICAgICAgIHNjYWxlWTogdGhpcy5zY2FsZVksXG4gICAgICAgICAgICBzY2FsZVo6IHRoaXMuc2NhbGVaLFxuICAgICAgICAgICAgc2tld1g6IHRoaXMuc2tld1gsXG4gICAgICAgICAgICBza2V3WTogdGhpcy5za2V3WSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2Zvcm07XG59KEV2ZW50RW1pdGVyKSk7XG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgSlRyYW5zZm9ybSBmcm9tICcuLi9jb25zdGFudC90cmFuc2Zvcm0nO1xuaW1wb3J0IEpTdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbmltcG9ydCBKRXZlbnQgZnJvbSAnLi4vY29yZS9ldmVudCc7XG52YXIgSkVsZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFbGVtZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpFbGVtZW50KG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaWQgPSAnJztcbiAgICAgICAgLy8g57G75Z6L5ZCN56ewXG4gICAgICAgIF90aGlzLnR5cGUgPSAnJztcbiAgICAgICAgLy8g5a2Q5YWD57SgXG4gICAgICAgIF90aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgICAgICAvLyDlpI3liLblsZ7mgKdcbiAgICAgICAgZm9yICh2YXIgayBpbiBvcHRpb24pIHtcbiAgICAgICAgICAgIHZhciB2ID0gb3B0aW9uW2tdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrICE9PSAnc3RyaW5nJyB8fCAodHlwZW9mIHYgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2ICE9PSAnbnVtYmVyJykpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBfdGhpc1trXSA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuaWQgPSBfdGhpcy5pZCB8fCBvcHRpb24uaWQgfHwgdXVpZHY0KCkucmVwbGFjZSgvLS9nLCAnJyk7XG4gICAgICAgIF90aGlzLnR5cGUgPSBfdGhpcy50eXBlIHx8IG9wdGlvbi50eXBlIHx8ICcnO1xuICAgICAgICB2YXIgbm9kZVR5cGUgPSBvcHRpb24ubm9kZVR5cGUgfHwgJ2Rpdic7XG4gICAgICAgIF90aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xuICAgICAgICAvLyDmoLflvI/ku6PnkIblpITnkIZcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBKU3R5bGUuY3JlYXRlUHJveHkoKTtcbiAgICAgICAgX3RoaXMuc3R5bGUub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXREb21TdHlsZShzLm5hbWUsIHMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdGlvbi5zdHlsZSlcbiAgICAgICAgICAgIF90aGlzLnN0eWxlLmFwcGx5KG9wdGlvbi5zdHlsZSk7XG4gICAgICAgIC8vIOWPmOaNouaOp+WItueahOaYr+aguOW/g+WFg+e0oFxuICAgICAgICBfdGhpcy50cmFuc2Zvcm0gPSBKVHJhbnNmb3JtLmNyZWF0ZVByb3h5KG9wdGlvbi50cmFuc2Zvcm0sIHtcbiAgICAgICAgICAgIHRhcmdldDogX3RoaXMsXG4gICAgICAgICAgICAvLyDlpoLmnpzmjIflrprkuoblj6rlk43lupTmn5Dlh6DkuKrlsZ7mgKdcbiAgICAgICAgICAgIHdhdGNoUHJvcHM6IG9wdGlvbi50cmFuc2Zvcm1XYXRjaFByb3BzXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5pbml0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgIF90aGlzLmJpbmRFdmVudCgpOyAvLyDkuovku7bnu5HlrppcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvLyDliJ3lp4vljJbkuIDkupvln7rnoYDlsZ7mgKdcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuaW5pdE9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdGhpcy54ID0gb3B0aW9uLnggfHwgb3B0aW9uLmxlZnQgfHwgdGhpcy54IHx8IDA7XG4gICAgICAgIHRoaXMueSA9IG9wdGlvbi55IHx8IG9wdGlvbi50b3AgfHwgdGhpcy55IHx8IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb24ud2lkdGggfHwgb3B0aW9uLndpZHRoIHx8IHRoaXMud2lkdGggfHwgMTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb24uaGVpZ2h0IHx8IG9wdGlvbi5oZWlnaHQgfHwgdGhpcy5oZWlnaHQgfHwgMTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24ucm90YXRpb24gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IG9wdGlvbi5yb3RhdGlvbjtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24uYW5nbGUgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IG9wdGlvbi5hbmdsZTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24uekluZGV4ICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRoaXMuekluZGV4ID0gb3B0aW9uLnpJbmRleDtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24udmlzaWJsZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSAhIW9wdGlvbi52aXNpYmxlO1xuICAgICAgICBpZiAob3B0aW9uLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gb3B0aW9uLmNsYXNzTmFtZTtcbiAgICB9O1xuICAgIC8vIOe7keWumuS6i+S7tlxuICAgIEpFbGVtZW50LnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIOS6i+S7tuaJmOeuoVxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEpFdmVudChkb20gfHwgdGhpcy5kb20pO1xuICAgICAgICB0aGlzLmV2ZW50LmluaXQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoZS50eXBlLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcImNoaWxkcmVuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICAvLyDlnZDmoIdYXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLnN0eWxlLmxlZnQgfHwgMDtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmxlZnQgPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgLy8g5Z2Q5qCHWVxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5zdHlsZS50b3AgfHwgMDtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRvcCA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInRvcFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy55ID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwibGVmdFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy54ID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwicmlnaHRcIiwge1xuICAgICAgICAvLyDlnZDmoIdyaWdodFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5zdHlsZS5yaWdodCB8fCAwO1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUucmlnaHQgPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJib3R0b21cIiwge1xuICAgICAgICAvLyDlnZDmoIdib3R0b21cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuc3R5bGUuYm90dG9tIHx8IDA7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHcgPSB0aGlzLnN0eWxlLndpZHRoIHx8IDA7XG4gICAgICAgICAgICBpZiAoIXcgJiYgdGhpcy5kb20gJiYgdGhpcy5kb20uY2xpZW50V2lkdGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9tLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJoZWlnaHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5zdHlsZS5oZWlnaHQgfHwgMDtcbiAgICAgICAgICAgIGlmICghaCAmJiB0aGlzLmRvbSAmJiB0aGlzLmRvbS5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9tLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInJvdGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMudHJhbnNmb3JtLnJvdGF0ZVo7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5peL6L2s5byn5bqmXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnJvdGF0ZVogPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJhbmdsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWwucmFkVG9EZWcodGhpcy50cmFuc2Zvcm0ucm90YXRlWik7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaXi+i9rOinkuW6plxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaID0gdXRpbC5kZWdUb1JhZCh2KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwidmlzaWJsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSB2ID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwiekluZGV4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuc3R5bGUuekluZGV4IHx8ICcwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuekluZGV4ID0gdiArICcnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvbS5jbGFzc05hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuZG9tLmNsYXNzTmFtZSA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDorr7nva5jc3PliLBkb21cbiAgICBKRWxlbWVudC5wcm90b3R5cGUuc2V0RG9tU3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdiYWNrZ3JvdW5kSW1hZ2UnICYmIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIS9eXFxzKnVybFxcKC8udGVzdCh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcInVybChcIi5jb25jYXQodmFsdWUsIFwiKVwiKTtcbiAgICAgICAgfVxuICAgICAgICB1dGlsLmNzcyh0aGlzLmRvbSwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8g6K6+572u5qC35byPXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLmNzcyA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB1dGlsLmNzcyh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gZG9t5bGe5oCnXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuYXR0cih0aGlzLmRvbSwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8g56e75L2NXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gICAgICAgIHRoaXMubGVmdCA9IHV0aWwudG9OdW1iZXIodGhpcy5sZWZ0KSArIGR4O1xuICAgICAgICB0aGlzLnRvcCA9IHV0aWwudG9OdW1iZXIodGhpcy50b3ApICsgZHk7XG4gICAgICAgIHRoaXMuZW1pdCgnbW92ZScsIHsgZHg6IGR4LCBkeTogZHkgfSk7XG4gICAgfTtcbiAgICAvLyDph43nva7lpKflsI9cbiAgICBKRWxlbWVudC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHcsIGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDmlrDlop7lrZDlhYPntKBcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQsIHBhcmVudCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7IHBhcmVudCA9IHRoaXM7IH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNoaWxkXzEgPSBfX3ZhbHVlcyhjaGlsZCksIGNoaWxkXzFfMSA9IGNoaWxkXzEubmV4dCgpOyAhY2hpbGRfMV8xLmRvbmU7IGNoaWxkXzFfMSA9IGNoaWxkXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gY2hpbGRfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZF8xXzEgJiYgIWNoaWxkXzFfMS5kb25lICYmIChfYSA9IGNoaWxkXzEucmV0dXJuKSkgX2EuY2FsbChjaGlsZF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBKRWxlbWVudCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgcGFyZW50LmRvbS5hcHBlbmRDaGlsZChjaGlsZC5kb20pO1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5kb20uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnp7vpmaToh6rlt7JcbiAgICBKRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9O1xuICAgIC8vIOenu+mZpOWtkOWFg+e0oFxuICAgIEpFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuZG9tLnJlbW92ZUNoaWxkKGVsLmRvbSB8fCBlbCk7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltpXSA9PT0gZWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGVsZXRlIGVsLnBhcmVudDtcbiAgICB9O1xuICAgIC8vIOi9rOS4umpzb25cbiAgICBKRWxlbWVudC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKHByb3BzLCBpZykge1xuICAgICAgICB2YXIgZV8yLCBfYSwgZV8zLCBfYjtcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSBbXTsgfVxuICAgICAgICBpZiAoaWcgPT09IHZvaWQgMCkgeyBpZyA9IGZ1bmN0aW9uIChwKSB7IHJldHVybiB0cnVlOyB9OyB9XG4gICAgICAgIHZhciBmaWVsZHMgPSBfX3NwcmVhZEFycmF5KFsnbGVmdCcsICd0b3AnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3JvdGF0aW9uJywgJ3R5cGUnLCAnc3R5bGUnLCAndHJhbnNmb3JtJywgJ2lkJ10sIF9fcmVhZChwcm9wcyksIGZhbHNlKTtcbiAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgZmllbGRzXzEgPSBfX3ZhbHVlcyhmaWVsZHMpLCBmaWVsZHNfMV8xID0gZmllbGRzXzEubmV4dCgpOyAhZmllbGRzXzFfMS5kb25lOyBmaWVsZHNfMV8xID0gZmllbGRzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBmaWVsZHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGhpc1trXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBvYmpba10gPSB0aGlzW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2ICYmIHYudG9KU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtrXSA9IHYudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzXzFfMSAmJiAhZmllbGRzXzFfMS5kb25lICYmIChfYSA9IGZpZWxkc18xLnJldHVybikpIF9hLmNhbGwoZmllbGRzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIC8vaWYodGhpcy50cmFuc2Zvcm0pIG9ialsndHJhbnNmb3JtJ10gPSB0aGlzLnRyYW5zZm9ybS50b0pTT04oKTtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2MgPSBfX3ZhbHVlcyh0aGlzLmNoaWxkcmVuKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBfZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkID09PSB0aGlzIHx8IGlnKGNoaWxkKSA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNoaWxkcmVuLnB1c2goY2hpbGQudG9KU09OKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzNfMSkgeyBlXzMgPSB7IGVycm9yOiBlXzNfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9iID0gX2MucmV0dXJuKSkgX2IuY2FsbChfYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgSkVsZW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy50b0pTT04oKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgfTtcbiAgICBKRWxlbWVudC5wcm90b3R5cGUudG9IdG1sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb20ub3V0ZXJIVE1MO1xuICAgIH07XG4gICAgcmV0dXJuIEpFbGVtZW50O1xufShFdmVudEVtaXRlcikpO1xuZXhwb3J0IGRlZmF1bHQgSkVsZW1lbnQ7XG4iLCJ2YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi4vbGliL3V0aWxcIjtcbnZhciBTdXBwb3J0RXZlbnROYW1lcyA9IFtcbiAgICAnbW91c2Vkb3duJywgJ21vdXNldXAnLCAnbW91c2VvdmVyJywgJ21vdXNlbW92ZScsICdtb3VzZW91dCcsICdtb3VzZXdoZWVsJywgJ2NsaWNrJywgJ2RibGNsaWNrJywgJ2tleWRvd24nLCAna2V5cHJlc3MnLCAna2V5dXAnLCAnYmx1cicsICdjaGFuZ2UnLCAnZm9jdXMnLCAnZHJhZycsICdkcmFnZW50ZXInLCAnZHJhZ2xlYXZlJywgJ2RyYWdvdmVyJywgJ2RyYWdzdGFydCcsICdkcm9wJ1xuXTtcbnZhciBKRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSkV2ZW50KHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuICAgIC8vIOWIneWni+WMluaJgOacieaUr+aMgeeahOS6i+S7tlxuICAgIEpFdmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChoYW5kbGVyLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmJpbmRFdmVudChTdXBwb3J0RXZlbnROYW1lcywgaGFuZGxlciwgZmFsc2UsIHRhcmdldCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDnu5Hlrprkuovku7bliLBodG1s5a+56LGhXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGJpbmRFdmVudFxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGh0bWzlhYPntKDlr7nosaFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW4g5LqL5Lu25aeU5omYXG4gICAgICogQHJldHVybnMge25hbWUsIGZ1biwgdGFyZ2V0fSDov5Tlm57lvZPliY3nu5HlrppcbiAgICAgKi9cbiAgICBKRXZlbnQucHJvdG90eXBlLmJpbmRFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBmdW4sIG9wdCwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAob3B0ID09PSB2b2lkIDApIHsgb3B0ID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IHRoaXMudGFyZ2V0OyB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWVfMSA9IF9fdmFsdWVzKG5hbWUpLCBuYW1lXzFfMSA9IG5hbWVfMS5uZXh0KCk7ICFuYW1lXzFfMS5kb25lOyBuYW1lXzFfMSA9IG5hbWVfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuYW1lXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnQobiwgZnVuLCBvcHQsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lXzFfMSAmJiAhbmFtZV8xXzEuZG9uZSAmJiAoX2EgPSBuYW1lXzEucmV0dXJuKSkgX2EuY2FsbChuYW1lXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSAmJiBuYW1lLmluZGV4T2YgJiYgbmFtZS5pbmRleE9mKCcgJykgIT0gLTEpIHtcbiAgICAgICAgICAgIHZhciBucyA9IG5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJpbmRFdmVudChucywgZnVuLCBvcHQsIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgLyovLyBAdHMtaWdub3JlXG4gICAgICAgIGlmKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0LmF0dGFjaEV2ZW50KFwib25cIituYW1lLCBmdW4sIG9wdCk7XG4gICAgICAgIH0gKi9cbiAgICAgICAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW4sIG9wdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDku47lr7nosaHkuK3np7vpmaTkuovku7bliLBcbiAgICAgKlxuICAgICAqIEBtZXRob2QgcmVtb3ZlRXZlbnRcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBodG1s5YWD57Sg5a+56LGhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuIOS6i+S7tuWnlOaJmFxuICAgICAqL1xuICAgIEpFdmVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgZnVuLCBvcHQsIHRhcmdldCkge1xuICAgICAgICBpZiAob3B0ID09PSB2b2lkIDApIHsgb3B0ID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IHRoaXMudGFyZ2V0OyB9XG4gICAgICAgIGlmICh0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZnVuLCBvcHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgIFxuICAgICAgICBlbHNlIGlmICh0YXJnZXQuZGV0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgbmFtZSwgZnVuLCBvcHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0WydvbicgKyBuYW1lXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDojrflj5blhYPntKDkuovku7bop6blj5HnmoTkvY3nva5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZ2V0RXZlbnRQb3NpdGlvblxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge2V2ZW50QXJnfSBldnQg5b2T5YmN6Kem5Y+R5LqL5Lu255qE5Y+C5pWwXG4gICAgICogQHJldHVybiB7cG9pbnR9IOS6i+S7tuinpuWPkeeahOS9jee9rlxuICAgICAqL1xuICAgIEpFdmVudC5wcm90b3R5cGUuZ2V0RXZlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChldnQsIHRhcmdldCkge1xuICAgICAgICB2YXIgaXNUb3VjaCA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZ0IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgdmFyIHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXMgfHwgZXZ0LnRhcmdldFRvdWNoZXMgfHwgZXZ0LnRvdWNoZXM7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBldnQgPSB0b3VjaGVzWzBdOyAvL+WFvOWuuXRvdWNo5LqL5Lu2XG4gICAgICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHggPSBldnQucGFnZVggfHwgZXZ0Lng7XG4gICAgICAgIGlmICh0eXBlb2YgcHggPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBweCA9IGV2dC5jbGllbnRYICsgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCk7XG4gICAgICAgIHZhciBweSA9IGV2dC5wYWdlWSB8fCBldnQueTtcbiAgICAgICAgaWYgKHR5cGVvZiBweSA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHB5ID0gZXZ0LmNsaWVudFkgKyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCk7XG4gICAgICAgIHZhciBveCA9IGV2dC5vZmZzZXRYO1xuICAgICAgICB2YXIgb3kgPSBldnQub2Zmc2V0WTtcbiAgICAgICAgaWYgKCh0eXBlb2Ygb3ggPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBveSA9PT0gJ3VuZGVmaW5lZCcpIHx8IHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIHAgPSB1dGlsLmdldEVsZW1lbnRQb3NpdGlvbigodGFyZ2V0IHx8IGV2dC50YXJnZXQpKTtcbiAgICAgICAgICAgIG94ID0gcHggLSBwLng7XG4gICAgICAgICAgICBveSA9IHB5IC0gcC55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBveCxcbiAgICAgICAgICAgIHk6IG95LFxuICAgICAgICAgICAgcGFnZVg6IHB4LFxuICAgICAgICAgICAgcGFnZVk6IHB5LFxuICAgICAgICAgICAgaXNUb3VjaDogaXNUb3VjaCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBKRXZlbnQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgSkV2ZW50O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCBKRWxlbWVudENzc1N0eWxlIGZyb20gJy4uL2NvbnN0YW50L3N0eWxlTWFwJztcbmltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbnZhciBOdW1iZXJTdHlsZU1hcCA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ3dpZHRoJywgJ2hlaWdodCddO1xudmFyIEpFbGVtZW50U3R5bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFbGVtZW50U3R5bGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnRTdHlsZShvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuYXBwbHkob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8vIOaKiuagt+W8j+W6lOeUqOWIsOWFg+e0oOaIluW9k+WJjeWvueixoVxuICAgIEpFbGVtZW50U3R5bGUucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKGRhdGEsIHRhcmdldCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IHRoaXM7IH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5uYW1lcyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZV8xID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lXzEgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbbmFtZV8xXSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGRhdGFbbmFtZV8xXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEpFbGVtZW50U3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXRTdHlsZShuYW1lXzEsIGRhdGFbbmFtZV8xXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV8xXSA9IGRhdGFbbmFtZV8xXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICAvLyDmoLflvI/lr7nlupTnmoTlhYPntKBcbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS5hcHBseVRvID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hcHBseSh0aGlzLCBlbGVtZW50LnN0eWxlKTtcbiAgICB9O1xuICAgIC8vIOiuvue9ruagt+W8j1xuICAgIEpFbGVtZW50U3R5bGUucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g6Kem5Y+R5omA5pyJ5pu05paw5YiwZG9tXG4gICAgSkVsZW1lbnRTdHlsZS5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hcHBseSh0aGlzKTtcbiAgICB9O1xuICAgIC8vIOi9rOS4umpzb25cbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMubmFtZXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVfMiA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXzJdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgb2JqW25hbWVfMl0gPSB0aGlzW25hbWVfMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgLy8g55Sf5oiQ5qC35byP5Luj55CGXG4gICAgSkVsZW1lbnRTdHlsZS5jcmVhdGVQcm94eSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICBpZiAoc3R5bGUgPT09IHZvaWQgMCkgeyBzdHlsZSA9IHt9OyB9XG4gICAgICAgIHZhciBqc3R5bGUgPSBuZXcgSkVsZW1lbnRTdHlsZShzdHlsZSk7XG4gICAgICAgIC8vIOagt+W8j+S7o+eQhuWkhOeQhlxuICAgICAgICB2YXIgcHJveHkgPSBuZXcgUHJveHkoanN0eWxlLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHAsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0YXJnZXRbcF07XG4gICAgICAgICAgICAgICAgLy8g5pWw5a2X5qC35byP77yM5aSE55CGcHjpl67pophcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHAgPT09ICdzdHJpbmcnICYmIE51bWJlclN0eWxlTWFwLmluY2x1ZGVzKHApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2ID09PSAnMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWwuaXNQWE51bWJlcih2KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHAsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIC8vIOmdnueZveWQjeWNleagt+W8j+S4jeaUr+aMgeiuvue9rlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycgfHwgIXRhcmdldC5uYW1lcy5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOaVsOWtl+agt+W8j++8jOWkhOeQhnB46Zeu6aKYXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlclN0eWxlTWFwLmluY2x1ZGVzKHApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB1dGlsLmlzTnVtYmVyKHZhbHVlKSA/IFwiXCIuY29uY2F0KHZhbHVlLCBcInB4XCIpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldC5zZXRTdHlsZShwLCB2YWx1ZSk7IC8vIOW6lOeUqOWIsOWFg+e0oOWSjOexu1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH07XG4gICAgcmV0dXJuIEpFbGVtZW50U3R5bGU7XG59KEpFbGVtZW50Q3NzU3R5bGUpKTtcbmV4cG9ydCBkZWZhdWx0IEpFbGVtZW50U3R5bGU7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCBKQmFzZSBmcm9tICcuL2NvbXBvbmVudHMvYmFzZSc7XG5pbXBvcnQgSlRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQnO1xuaW1wb3J0IEpJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UnO1xuaW1wb3J0IEpFbGVtZW50IGZyb20gJy4vY29yZS9lbGVtZW50JztcbmltcG9ydCBKQ29udHJvbGxlciBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbGxlcic7XG5pbXBvcnQgdXRpbCBmcm9tICcuL2xpYi91dGlsJztcbnZhciBKRWRpdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWRpdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpFZGl0b3Iob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb24uc3R5bGUgPSBvcHRpb24uc3R5bGUgfHwge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9uLnN0eWxlLCB7XG4gICAgICAgICAgICAnYm94U2hhZG93JzogJzAgMCAxMHB4IDEwcHggI2NjYycsXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2JhY2tncm91bmRTaXplJzogJzEwMCUgMTAwJScsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDlpJblsYLlj6rlk43lupRa6L205peL6L2sXG4gICAgICAgIG9wdGlvbi50cmFuc2Zvcm1XYXRjaFByb3BzID0gW1xuICAgICAgICAgICAgJ3JvdGF0ZVonLCAnc2NhbGVYJywgJ3NjYWxlWSdcbiAgICAgICAgXTtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb24pIHx8IHRoaXM7XG4gICAgICAgIC8vIOaJgOacieaUr+aMgeeahOexu+Wei1xuICAgICAgICBfdGhpcy5zaGFwZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uLmNvbnRhaW5lciA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBvcHRpb24uY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9uLmNvbnRhaW5lcik7XG4gICAgICAgIF90aGlzLnZpZXcgPSBuZXcgSkVsZW1lbnQoe1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAnYm9yZGVyJzogMCxcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6IDAsXG4gICAgICAgICAgICAgICAgJ21hcmdpbic6IDAsXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcxMDAlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8qLy8g5Y+Y5o2i5pS55Li65o6n5Yi25Li75YWD57SgXG4gICAgICAgIHRoaXMudHJhbnNmb3JtLmJpbmQoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnZpZXcsXG4gICAgICAgICAgICB3YXRjaFByb3BzOiBbXG4gICAgICAgICAgICAgICAgJ3NjYWxlWCcsICdzY2FsZVknXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pOyovXG4gICAgICAgIF90aGlzLnRhcmdldC5jc3Moe1xuICAgICAgICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbidcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb24uY29udGFpbmVyKVxuICAgICAgICAgICAgb3B0aW9uLmNvbnRhaW5lci5hcHBlbmRDaGlsZChfdGhpcy52aWV3LmRvbSk7XG4gICAgICAgIF90aGlzLnZpZXcuYWRkQ2hpbGQoX3RoaXMuZG9tKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBfdGhpcy5yZWdTaGFwZSgnaW1hZ2UnLCBKSW1hZ2UpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIF90aGlzLnJlZ1NoYXBlKCd0ZXh0JywgSlRleHQpO1xuICAgICAgICBfdGhpcy5pbml0KG9wdGlvbik7XG4gICAgICAgIF90aGlzLmJpbmRFdmVudChfdGhpcy52aWV3LmRvbSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyW5pW05Liq57yW6L6R5ZmoXG4gICAgSkVkaXRvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbi5zdHlsZS5jb250YWluZXJCYWNrZ3JvdW5kQ29sb3IpXG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb24uc3R5bGUuY29udGFpbmVyQmFja2dyb3VuZENvbG9yO1xuICAgICAgICAvLyDnlJ/miJDmjqfliLblmahcbiAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlciA9IG5ldyBKQ29udHJvbGxlcih7XG4gICAgICAgICAgICBlZGl0b3I6IHRoaXMsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHN0eWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlTm9kZS5pbm5lckhUTUwgPSBcIi5qLWRlc2lnbi1lZGl0b3ItY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuai1kZXNpZ24tZWRpdG9yLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiO1xuICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQoc3R5bGVOb2RlKTtcbiAgICAgICAgaWYgKG9wdGlvbi53aWR0aCAmJiBvcHRpb24uaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZShvcHRpb24ud2lkdGgsIG9wdGlvbi5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5zZWxlY3QoX3RoaXMpOyAvLyDpgInkuK3oh6rlt7JcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIub25EcmFnU3RhcnQoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFZGl0b3IucHJvdG90eXBlLCBcImNoaWxkcmVuXCIsIHtcbiAgICAgICAgLy8g6YeN5YaZ5a2Q6ZuG5Li6dGFyZ2V0XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmNoaWxkcmVuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFZGl0b3IucHJvdG90eXBlLCBcInNlbGVjdGVkRWxlbWVudHNcIiwge1xuICAgICAgICAvLyDooqvpgInkuK3nmoTlhYPntKBcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLmNoaWxkcmVuKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSkJhc2UgJiYgZWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDnu5Hlrprkuovku7ZcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcpXG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmJpbmRFdmVudC5jYWxsKHRoaXMsIHRoaXMudmlldy5kb20pOyAvLyDnvJbovpHlmajkuovku7bnu5HliLDmlbTkuKrlrrnlmajkuIpcbiAgICB9O1xuICAgIC8vIOmAieS4reafkOS4quWFg+e0oFxuICAgIEpFZGl0b3IucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAvLyDpgInmiormiYDmnInlt7LpgInmi6nnmoTlj5bmtohcbiAgICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnRzLmV2ZXJ5KGZ1bmN0aW9uIChwKSB7IHJldHVybiBwICE9PSBlbCAmJiBwLnNlbGVjdGVkICYmIChwLnNlbGVjdGVkID0gZmFsc2UpOyB9KTtcbiAgICAgICAgaWYgKGVsLnNlbGVjdGVkKVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlci5iaW5kKGVsKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlci51bmJpbmQoZWwpO1xuICAgIH07XG4gICAgSkVkaXRvci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHdpZHRoID09PSB2b2lkIDApIHsgd2lkdGggPSB0aGlzLndpZHRoOyB9XG4gICAgICAgIGlmIChoZWlnaHQgPT09IHZvaWQgMCkgeyBoZWlnaHQgPSB0aGlzLmhlaWdodDsgfVxuICAgICAgICB0aGlzLmF0dHIoJ2RhdGEtc2l6ZScsIFwiXCIuY29uY2F0KHdpZHRoLCBcIipcIikuY29uY2F0KGhlaWdodCkpO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxlZnQgPSB1dGlsLnRvTnVtYmVyKF90aGlzLnZpZXcuZG9tLmNsaWVudFdpZHRoKSAvIDIgLSB1dGlsLnRvTnVtYmVyKHdpZHRoKSAvIDI7XG4gICAgICAgICAgICBfdGhpcy50b3AgPSB1dGlsLnRvTnVtYmVyKF90aGlzLnZpZXcuZG9tLmNsaWVudEhlaWdodCkgLyAyIC0gdXRpbC50b051bWJlcihoZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ3Jlc2l6ZScsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMCk7XG4gICAgfTtcbiAgICAvLyDmt7vliqDlhYPntKDliLDnlLvluINcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQgPT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5hZGRDaGlsZC5jYWxsKHRoaXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNoaWxkLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgc2VsZi5zZWxlY3QodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGlsZC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5lbGVtZW50Q29udHJvbGxlci5vbkRyYWdTdGFydChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldC5hZGRDaGlsZChjaGlsZCwgdGhpcyk7XG4gICAgfTtcbiAgICAvLyDnp7vpmaRcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwgPT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUud2Fybign5LiN6IO956e76Zmk6Ieq5beyJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsLm9mZignc2VsZWN0Jyk7XG4gICAgICAgICAgICBlbC5vZmYoJ21vdXNlZG93bicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldC5yZW1vdmVDaGlsZChlbCk7XG4gICAgfTtcbiAgICAvLyDmiopkb21jdW1lbnTlnZDmoIfovazkuLrnvJbovpHlmajnm7jlr7nlnZDmoIdcbiAgICBKRWRpdG9yLnByb3RvdHlwZS50b0VkaXRvclBvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgICAvLyDnvJbovpHlmajlnZDmoIdcbiAgICAgICAgdmFyIGVkaXRvclBvcyA9IHV0aWwuZ2V0RWxlbWVudFBvc2l0aW9uKHRoaXMudmlldy5kb20pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogcG9zLnggLSBlZGl0b3JQb3MueCxcbiAgICAgICAgICAgIHk6IHBvcy55IC0gZWRpdG9yUG9zLnlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEpFZGl0b3IucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNzcyh7XG4gICAgICAgICAgICAnYmFja2dyb3VuZENvbG9yJzogJyNmZmYnLFxuICAgICAgICAgICAgJ2JhY2tncm91bmRJbWFnZSc6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgIH07XG4gICAgLy8g57yp5pS+XG4gICAgSkVkaXRvci5wcm90b3R5cGUuc2NhbGUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSB4OyB9XG4gICAgICAgIGlmICh4IDwgMC4xIHx8IHkgPCAwLjEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlWCA9IHg7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlWSA9IHk7XG4gICAgfTtcbiAgICAvLyDms6jlhozoh6rlrprkuYnnu4Tku7ZcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5yZWdTaGFwZSA9IGZ1bmN0aW9uIChuYW1lLCBzaGFwZSkge1xuICAgICAgICBpZiAodGhpcy5zaGFwZXMuaGFzKG5hbWUpKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJcXHU1MTQzXFx1N0QyMFxcdTdDN0JcXHU1NzhCXCIuY29uY2F0KG5hbWUsIFwiXFx1NURGMlxcdTdFQ0ZcXHU1QjU4XFx1NTcyOFwiKSk7XG4gICAgICAgIHRoaXMuc2hhcGVzLnNldChuYW1lLCBzaGFwZSk7XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICB9O1xuICAgIC8vIOWIm+W7uuWFg+e0oFxuICAgIEpFZGl0b3IucHJvdG90eXBlLmNyZWF0ZVNoYXBlID0gZnVuY3Rpb24gKHR5cGUsIG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIHNoYXBlID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdGhpcy5zaGFwZXMuZ2V0KHR5cGUpIDogdHlwZTtcbiAgICAgICAgaWYgKCFzaGFwZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJcIi5jb25jYXQodHlwZSwgXCJcXHU0RTBEXFx1NUI1OFxcdTU3MjhcXHU3Njg0XFx1NTE0M1xcdTdEMjBcXHU3QzdCXFx1NTc4QlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsID0gbmV3IHNoYXBlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IHR5cGU6IHR5cGUgfSkpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfTtcbiAgICAvLyDliJvlu7rlm77niYflhYPntKBcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5jcmVhdGVJbWFnZSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIGltZyA9IHRoaXMuY3JlYXRlU2hhcGUoJ2ltYWdlJywgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbiksIHsgdXJsOiB1cmwgfSkpO1xuICAgICAgICByZXR1cm4gaW1nO1xuICAgIH07XG4gICAgSkVkaXRvci5wcm90b3R5cGUuZnJvbUpTT04gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIGlmIChkYXRhLnN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmFwcGx5KGRhdGEuc3R5bGUpOyAvLyDlupTnlKjmoLflvI9cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2l6ZShkYXRhLndpZHRoLCBkYXRhLmhlaWdodCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKGRhdGEuY2hpbGRyZW4pLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIWMudHlwZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZVNoYXBlKGMudHlwZSwgYyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSkVkaXRvcjtcbn0oSkJhc2UpKTtcbmV4cG9ydCBkZWZhdWx0IEpFZGl0b3I7XG5leHBvcnQgeyBKRWRpdG9yLCBKSW1hZ2UsIEpUZXh0LCB9O1xuIiwiaW1wb3J0IEpCYXNlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9iYXNlJztcbmltcG9ydCBKVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dCc7XG5pbXBvcnQgSkltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZSc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi9jb3JlL2VsZW1lbnQnO1xuaW1wb3J0IEpFZGl0b3IgZnJvbSAnLi9lZGl0b3InO1xuZXhwb3J0IHsgSkJhc2VDb21wb25lbnQsIEpUZXh0LCBKSW1hZ2UsIEpFbGVtZW50LCBKRWRpdG9yIH07XG5leHBvcnQgZGVmYXVsdCBKRWRpdG9yO1xuIiwidmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIOaYr+WQpuaYr+aVsOWtl1xuICAgIGlzTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInIHx8IC9eXFxzKltcXGRcXC5dK1xccyokLy50ZXN0KHYpO1xuICAgIH0sXG4gICAgLy8g5piv5ZCm5piv5bim5YOP57Sg5Y2V5L2N55qE5a2X56ym5LiyXG4gICAgaXNQWE51bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypweFxccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLy8g5piv5ZCm5piv5bim6KeS5bqm5Y2V5L2N55qE5a2X56ym5LiyXG4gICAgaXNEZWdOdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiAvXlxccypbXFxkXFwuXStcXHMqZGVnXFxzKi9pLnRlc3Qodik7XG4gICAgfSxcbiAgICAvLyDmmK/lkKbmmK/luKblvKfluqbljZXkvY3nmoTlrZfnrKbkuLJcbiAgICBpc1JhZE51bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypyYWRcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOi9rOS4uuWDj+e0oOWtl+espuS4suagvOW8jyBcbiAgICB0b1BYOiBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB2ICsgJ3B4JztcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvLyDluKblg4/ntKDmiJblhbblroPljZXkvY3nmoTovazmjaLkuLrmlbDlrZdcbiAgICB0b051bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHYpO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2KTtcbiAgICB9LFxuICAgIC8vIOW8p+W6pui9rOinkuW6plxuICAgIHJhZFRvRGVnOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdiAqICgxODAgLyBNYXRoLlBJKTtcbiAgICB9LFxuICAgIC8vIOinkuW6pui9rOW8p+W6plxuICAgIGRlZ1RvUmFkOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICB9LFxuICAgIC8vIOi9rOS4uuinkuW6puagvOW8j1xuICAgIHRvRGVnOiBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB2ICsgJ2RlZyc7XG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgJiYgdGhpcy5pc1JhZE51bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGVnKHRoaXMucmFkVG9EZWcocGFyc2VGbG9hdCh2KSkpO1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9LFxuICAgIC8vIOi9rOS4uuW8p+W6puagvOW8j1xuICAgIHRvUmFkOiBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB2ICsgJ3JhZCc7XG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgJiYgdGhpcy5pc0RlZ051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUmFkKHRoaXMuZGVnVG9SYWQocGFyc2VGbG9hdCh2KSkpO1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiOt+WPluWFg+e0oOeahOe7neWvueWumuS9jVxuICAgICAqXG4gICAgICogQG1ldGhvZCBnZXRFbGVtZW50UG9zaXRpb25cbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbCDnm67moIflhYPntKDlr7nosaFcbiAgICAgKiBAcmV0dXJuIHtwb3NpdGlvbn0g5L2N572u5a+56LGhKHRvcCxsZWZ0KVxuICAgICAqL1xuICAgIGdldEVsZW1lbnRQb3NpdGlvbjogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBwb3MgPSB7IFwieVwiOiAwLCBcInhcIjogMCB9O1xuICAgICAgICBpZiAoIWVsKVxuICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgaWYgKGVsLm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgd2hpbGUgKGVsLm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgICAgIHBvcy55ICs9IGVsLm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICBwb3MueCArPSBlbC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZWxzZSBpZiAoZWwueCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcG9zLnggKz0gZWwueDtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGVsc2UgaWYgKGVsLnkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBvcy55ICs9IGVsLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvcztcbiAgICB9LFxuICAgIC8vIOaKimRvbWN1bWVudOWdkOagh+i9rOS4uuaMh+WumuWFg+e0oOebuOWvueWdkOagh1xuICAgIHRvRG9tUG9zaXRpb246IGZ1bmN0aW9uIChwb3MsIGRvbSkge1xuICAgICAgICB2YXIgZG9tUG9zID0gdGhpcy5nZXRFbGVtZW50UG9zaXRpb24oZG9tKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHBvcy54IC0gZG9tUG9zLngsXG4gICAgICAgICAgICB5OiBwb3MueSAtIGRvbVBvcy55XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmiorkuIDkuKrmiJblpJrkuKrngrnnu5Xmn5DkuKrngrnml4vovazkuIDlrprop5LluqZcbiAgICAgKiDlhYjmiorlnZDmoIfljp/ngrnnp7vliLDml4vovazkuK3lv4PngrnvvIzorqHnrpflkI7np7vlm55cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVBvaW50c1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge0FycmF5L29iamVjdH0gcCDkuIDkuKrmiJblpJrkuKrngrlcbiAgICAgKiBAcGFyYW0ge3g6IG51bWJlciwgeTogbnVtYmVyfSBycCDml4vovazkuK3lv4PngrlcbiAgICAgKiBAcGFyYW0geyp9IHIg5peL6L2s6KeS5bqmXG4gICAgICovXG4gICAgcm90YXRlUG9pbnRzOiBmdW5jdGlvbiAocCwgY2VudGVyLCByKSB7XG4gICAgICAgIGlmICghciB8fCAhcClcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3Mocik7XG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocCkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghcFtpXSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIHgxID0gcFtpXS54IC0gY2VudGVyLng7XG4gICAgICAgICAgICAgICAgdmFyIHkxID0gcFtpXS55IC0gY2VudGVyLnk7XG4gICAgICAgICAgICAgICAgcFtpXS54ID0geDEgKiBjb3MgLSB5MSAqIHNpbiArIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIHBbaV0ueSA9IHgxICogc2luICsgeTEgKiBjb3MgKyBjZW50ZXIueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4MSA9IHAueCAtIGNlbnRlci54O1xuICAgICAgICAgICAgdmFyIHkxID0gcC55IC0gY2VudGVyLnk7XG4gICAgICAgICAgICBwLnggPSB4MSAqIGNvcyAtIHkxICogc2luICsgY2VudGVyLng7XG4gICAgICAgICAgICBwLnkgPSB4MSAqIHNpbiArIHkxICogY29zICsgY2VudGVyLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICAvLyDorr7nva7moLflvI9cbiAgICBjc3M6IGZ1bmN0aW9uIChkb20sIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuYW1lKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jc3MoZG9tLCBuLCBuYW1lW25dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20uc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIGRvbeWxnuaAp1xuICAgIGF0dHI6IGZ1bmN0aW9uIChkb20sIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlICsgJycpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRvbS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHByZWZpeCA9ICd+JztcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgYSBzdG9yYWdlIGZvciBvdXIgYEVFYCBvYmplY3RzLlxuICogQW4gYEV2ZW50c2AgaW5zdGFuY2UgaXMgYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFdmVudHMoKSB7fVxuXG4vL1xuLy8gV2UgdHJ5IHRvIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLiBJbiBzb21lIGVuZ2luZXMgY3JlYXRpbmcgYW5cbi8vIGluc3RhbmNlIGluIHRoaXMgd2F5IGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgYE9iamVjdC5jcmVhdGUobnVsbClgIGRpcmVjdGx5LlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGNoYXJhY3RlciB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdFxuLy8gb3ZlcnJpZGRlbiBvciB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vL1xuaWYgKE9iamVjdC5jcmVhdGUpIHtcbiAgRXZlbnRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy9cbiAgLy8gVGhpcyBoYWNrIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBgX19wcm90b19fYCBwcm9wZXJ0eSBpcyBzdGlsbCBpbmhlcml0ZWQgaW5cbiAgLy8gc29tZSBvbGQgYnJvd3NlcnMgbGlrZSBBbmRyb2lkIDQsIGlQaG9uZSA1LjEsIE9wZXJhIDExIGFuZCBTYWZhcmkgNS5cbiAgLy9cbiAgaWYgKCFuZXcgRXZlbnRzKCkuX19wcm90b19fKSBwcmVmaXggPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBldmVudCBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXIoZW1pdHRlciwgZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgZW1pdHRlciwgb25jZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XSkgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgZW1pdHRlci5fZXZlbnRzQ291bnQrKztcbiAgZWxzZSBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdLmZuKSBlbWl0dGVyLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IFtlbWl0dGVyLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJdO1xuXG4gIHJldHVybiBlbWl0dGVyO1xufVxuXG4vKipcbiAqIENsZWFyIGV2ZW50IGJ5IG5hbWUuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldnQgVGhlIEV2ZW50IG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbGVhckV2ZW50KGVtaXR0ZXIsIGV2dCkge1xuICBpZiAoLS1lbWl0dGVyLl9ldmVudHNDb3VudCA9PT0gMCkgZW1pdHRlci5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICBlbHNlIGRlbGV0ZSBlbWl0dGVyLl9ldmVudHNbZXZ0XTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBuYW1lcyA9IFtdXG4gICAgLCBldmVudHNcbiAgICAsIG5hbWU7XG5cbiAgaWYgKHRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIChldmVudHMgPSB0aGlzLl9ldmVudHMpKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghaGFuZGxlcnMpIHJldHVybiBbXTtcbiAgaWYgKGhhbmRsZXJzLmZuKSByZXR1cm4gW2hhbmRsZXJzLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aCwgZWUgPSBuZXcgQXJyYXkobCk7IGkgPCBsOyBpKyspIHtcbiAgICBlZVtpXSA9IGhhbmRsZXJzW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG51bWJlciBvZiBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWJlciBvZiBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIGxpc3RlbmVyQ291bnQoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghbGlzdGVuZXJzKSByZXR1cm4gMDtcbiAgaWYgKGxpc3RlbmVycy5mbikgcmV0dXJuIDE7XG4gIHJldHVybiBsaXN0ZW5lcnMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMiwgYTMpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIG9uZS10aW1lIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCB0cnVlKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsaXN0ZW5lcnMgb2YgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuICBpZiAoIWZuKSB7XG4gICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAoXG4gICAgICBsaXN0ZW5lcnMuZm4gPT09IGZuICYmXG4gICAgICAoIW9uY2UgfHwgbGlzdGVuZXJzLm9uY2UpICYmXG4gICAgICAoIWNvbnRleHQgfHwgbGlzdGVuZXJzLmNvbnRleHQgPT09IGNvbnRleHQpXG4gICAgKSB7XG4gICAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBldmVudHMgPSBbXSwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxpc3RlbmVyc1tpXS5mbiAhPT0gZm4gfHxcbiAgICAgICAgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKSB8fFxuICAgICAgICAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAgIC8vXG4gICAgaWYgKGV2ZW50cy5sZW5ndGgpIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgICBlbHNlIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dDtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICh0aGlzLl9ldmVudHNbZXZ0XSkgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBwcmVmaXguXG4vL1xuRXZlbnRFbWl0dGVyLnByZWZpeGVkID0gcHJlZml4O1xuXG4vL1xuLy8gQWxsb3cgYEV2ZW50RW1pdHRlcmAgdG8gYmUgaW1wb3J0ZWQgYXMgbW9kdWxlIG5hbWVzcGFjZS5cbi8vXG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOSUxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX25pbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cmluZ2lmeVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdjIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdjMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdjQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdmFsaWRhdGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF92ZXJzaW9uLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YxLmpzXCIpKTtcblxudmFyIF92MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjMuanNcIikpO1xuXG52YXIgX3YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NC5qc1wiKSk7XG5cbnZhciBfdjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y1LmpzXCIpKTtcblxudmFyIF9uaWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25pbC5qc1wiKSk7XG5cbnZhciBfdmVyc2lvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKSk7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKSk7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IG1kNTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgcmFuZG9tVVVJRFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG5mdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG52YXIgX2RlZmF1bHQgPSBzaGExO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxudmFyIF9kZWZhdWx0ID0gc3RyaW5naWZ5O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxubGV0IF9ub2RlSWQ7XG5cbmxldCBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbmxldCBfbGFzdE1TZWNzID0gMDtcbmxldCBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgbGV0IGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIGNvbnN0IGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxldCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGxldCBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICBsZXQgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIGxldCBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIGNvbnN0IGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgY29uc3QgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgY29uc3QgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGIpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2MTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG5cbnZhciBfbWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21kNS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHYzID0gKDAsIF92LmRlZmF1bHQpKCd2MycsIDB4MzAsIF9tZC5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IHYzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgY29uc3QgYnl0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5jb25zdCBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuRE5TID0gRE5TO1xuY29uc3QgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9IFVSTDtcblxuZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSAoMCwgX3BhcnNlLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfbmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uYXRpdmUuanNcIikpO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX3NoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2hhMS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHY1ID0gKDAsIF92LmRlZmF1bHQpKCd2NScsIDB4NTAsIF9zaGEuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2NTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZ2V4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZWdleC5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBfcmVnZXguZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2YWxpZGF0ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2ZXJzaW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il19
