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
    console.log(this.left, this.top, center, oldPosition, newPosition, this.editor.left, this.editor.top);
    // 编辑器坐标
    var pos1 = _util["default"].toDomPosition(oldPosition, this.editor.target.dom);
    var pos2 = _util["default"].toDomPosition(newPosition, this.editor.target.dom);
    console.log(this.left, this.top, center, pos1, pos2);
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
      this.visible = false;
    }
  };
  return JControllerComponent;
}(JControllerItem);
var _default = exports["default"] = JControllerComponent;

},{"../core/element":7,"../lib/util":13}],3:[function(require,module,exports){
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
      if (!JElementCssStyle.styleNamesMap.length) {
        var map = new JElementStyleProperty();
        var keys = Object.getOwnPropertyNames(map);
        try {
          for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var k = keys_1_1.value;
            var t = _typeof(map[k]);
            if (t === 'string' || t === 'number') JElementCssStyle.styleNamesMap.push(k);
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
      return JElementCssStyle.styleNamesMap;
    },
    enumerable: false,
    configurable: true
  });
  JElementCssStyle.styleNamesMap = [];
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

},{"eventemitter3":14}],6:[function(require,module,exports){
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

},{"../lib/util":13,"eventemitter3":14}],7:[function(require,module,exports){
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
    if (option.editor) _this.editor = option.editor;
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
    // 字体依赖事件
    if (name === 'fontFamily') {
      /*this.emit('fontChange', {
          fontFamily: value
      });*/
      if (this.editor) {
        this.editor.emit('fontChange', {
          family: value
        });
      }
    }
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
    if (el.dom && el.dom.parentElement === this.dom) this.dom.removeChild(el.dom || el);
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

},{"../constant/transform":6,"../core/event":8,"../lib/util":13,"./style":10,"eventemitter3":14,"uuid":15}],8:[function(require,module,exports){
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

},{"../lib/util":13}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.JFontData = void 0;
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var JFontData = exports.JFontData = /** @class */function () {
  function JFontData(family, url) {
    this.family = family;
    this.url = url;
  }
  Object.defineProperty(JFontData.prototype, "status", {
    get: function get() {
      if (this.font) return this.font.status;
      return 'unloaded';
    },
    enumerable: false,
    configurable: true
  });
  JFontData.prototype.load = function (url) {
    if (url === void 0) {
      url = this.url;
    }
    return __awaiter(this, void 0, void 0, function () {
      var f;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.url = url || this.url;
            if (!this.font) this.font = new FontFace(this.family, this.url);
            return [4 /*yield*/, this.font.load()];
          case 1:
            f = _a.sent();
            document.fonts.add(f); // 生效
            return [2 /*return*/, this];
        }
      });
    });
  };
  return JFontData;
}();
var JFonts = /** @class */function () {
  function JFonts(fontSet) {
    if (fontSet === void 0) {
      fontSet = new Map();
    }
    this.fonts = fontSet;
    this.init();
  }
  JFonts.prototype.init = function () {
    if (document.fonts) {
      var fonts = document.fonts.values();
      var font = fonts.next();
      while (font && font.done && font.value) {
        if (font.value) {
          var f = new JFontData(font.value.family);
          f.font = font.value;
          this.fonts.set(f.family, f);
        }
        font = fonts.next();
      }
    }
  };
  // 加载字体
  JFonts.prototype.load = function (name, url) {
    return __awaiter(this, void 0, void 0, function () {
      var font;
      return __generator(this, function (_a) {
        font = this.get(name);
        if (font) return [2 /*return*/, font];else {
          font = new JFontData(name, "url(\"".concat(url, "\")"));
          this.fonts.set(name, font);
          return [2 /*return*/, font.load()];
        }
        return [2 /*return*/];
      });
    });
  };
  // 获取已加载的字体
  JFonts.prototype.get = function (name) {
    if (this.fonts) {
      if (this.fonts.has(name)) return this.fonts.get(name);
    }
    return null;
  };
  // 检查加载的字体是否存在，存在则返回字体对象
  JFonts.prototype.check = function (name) {
    var font = this.get(name);
    return !!font;
  };
  return JFonts;
}();
var _default = exports["default"] = JFonts;

},{}],10:[function(require,module,exports){
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

},{"../constant/styleMap":5,"../lib/util":13}],11:[function(require,module,exports){
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
var _fonts = _interopRequireDefault(require("./core/fonts"));
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
    // 字体管理实例
    _this.fonts = new _fonts["default"]();
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
    if (el.selected) {
      // 选把所有已选择的取消
      this.selectedElements.every(function (p) {
        return p !== el && p.selected && (p.selected = false);
      });
      this.elementController.bind(el);
    } else this.elementController.unbind(el);
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
    this.target.addChild(child, this.target);
    child.parent = this; // 把父设置成编辑器
    child.editor = this;
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
      editor: this,
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

},{"./components/base":1,"./components/controller":2,"./components/image":3,"./components/text":4,"./core/element":7,"./core/fonts":9,"./lib/util":13}],12:[function(require,module,exports){
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

},{"./components/base":1,"./components/image":3,"./components/text":4,"./core/element":7,"./editor":11}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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
},{"./nil.js":18,"./parse.js":19,"./stringify.js":23,"./v1.js":24,"./v3.js":25,"./v4.js":27,"./v5.js":28,"./validate.js":29,"./version.js":30}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports.default = _default;
},{}],19:[function(require,module,exports){
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
},{"./validate.js":29}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports.default = _default;
},{}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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
},{"./validate.js":29}],24:[function(require,module,exports){
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
},{"./rng.js":21,"./stringify.js":23}],25:[function(require,module,exports){
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
},{"./md5.js":16,"./v35.js":26}],26:[function(require,module,exports){
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
},{"./parse.js":19,"./stringify.js":23}],27:[function(require,module,exports){
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
},{"./native.js":17,"./rng.js":21,"./stringify.js":23}],28:[function(require,module,exports){
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
},{"./sha1.js":22,"./v35.js":26}],29:[function(require,module,exports){
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
},{"./regex.js":20}],30:[function(require,module,exports){
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
},{"./validate.js":29}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2NvbXBvbmVudHMvYmFzZS5qcyIsImRpc3QvY29tcG9uZW50cy9jb250cm9sbGVyLmpzIiwiZGlzdC9jb21wb25lbnRzL2ltYWdlLmpzIiwiZGlzdC9jb21wb25lbnRzL3RleHQuanMiLCJkaXN0L2NvbnN0YW50L3N0eWxlTWFwLmpzIiwiZGlzdC9jb25zdGFudC90cmFuc2Zvcm0uanMiLCJkaXN0L2NvcmUvZWxlbWVudC5qcyIsImRpc3QvY29yZS9ldmVudC5qcyIsImRpc3QvY29yZS9mb250cy5qcyIsImRpc3QvY29yZS9zdHlsZS5qcyIsImRpc3QvZWRpdG9yLmpzIiwiZGlzdC9pbmRleC5qcyIsImRpc3QvbGliL3V0aWwuanMiLCJub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L21kNS1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9uYXRpdmUtYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvbmlsLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9wYXJzZS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvcmVnZXguanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9zaGExLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdjEuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3YzLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC92MzUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3Y0LmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC92NS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdmFsaWRhdGUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3ZlcnNpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUMwQkEsSUFBQSxTQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsUUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUF1QyxTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUEzQnZDLElBQUksU0FBUyxHQUFJLFVBQVEsU0FBSyxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJLGNBQWEsR0FBRyxTQUFBLGNBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNoQyxjQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFDaEM7TUFBRSxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtNQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUUsQ0FBQztJQUNyRyxPQUFPLGNBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RixjQUFhLENB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USxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO0FBQzFDLENBQUM7QUFDRCxJQUFJLE1BQU0sR0FBSSxVQUFRLFNBQUssTUFBTSxJQUFLLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUNsRCxJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDMUQsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7RUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDO0lBQUUsRUFBRSxHQUFHLEVBQUU7SUFBRSxDQUFDO0VBQ2hDLElBQUk7SUFDQSxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7RUFDOUUsQ0FBQyxDQUNELE9BQU8sS0FBSyxFQUFFO0lBQUUsQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFO0lBQU0sQ0FBQztFQUFFLENBQUMsU0FDL0I7SUFDSixJQUFJO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDLFNBQ087TUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLO0lBQUU7RUFDcEM7RUFDQSxPQUFPLEVBQUU7QUFDYixDQUFDO0FBQ0QsSUFBSSxRQUFRLEdBQUksVUFBUSxTQUFLLFFBQVEsSUFBSyxVQUFTLENBQUMsRUFBRTtFQUNsRCxJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFB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QU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtJQUN2RCxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7TUFBRSxJQUFJO1FBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQUU7SUFBRTtJQUMxRixTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7TUFBRSxJQUFJO1FBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzdGLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtNQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQUU7SUFDN0csSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3pFLENBQUMsQ0FBQztBQUNOLENBQUM7QUFDRCxJQUFJLFdBQVcsR0FBSSxVQUFRLFNBQUssV0FBVyxJQUFLLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRTtFQUNyRSxJQUFJLENBQUMsR0FBRztNQUFFLEtBQUssRUFBRSxDQUFDO01BQUUsSUFBSSxFQUFFLFNBQUEsS0FBQSxFQUFXO1FBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUFFLENBQUM7TUFBRSxJQUFJLEVBQUUsRUFBRTtNQUFFLEdBQUcsRUFBRTtJQUFHLENBQUM7SUFBRSxDQUFDO0lBQUUsQ0FBQztJQUFFLENBQUM7SUFBRSxDQUFDO0VBQ2hILE9BQU8sQ0FBQyxHQUFHO0lBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUFFLENBQUMsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxZQUFXO0lBQUUsT0FBTyxJQUFJO0VBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN4SixTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUU7SUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFO01BQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDO0VBQUU7RUFDakUsU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0lBQ2QsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQztJQUM3RCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtNQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7TUFDNUosSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7TUFDdkMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1QsS0FBSyxDQUFDO1FBQUUsS0FBSyxDQUFDO1VBQUUsQ0FBQyxHQUFHLEVBQUU7VUFBRTtRQUN4QixLQUFLLENBQUM7VUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1VBQUUsT0FBTztZQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQUUsSUFBSSxFQUFFO1VBQU0sQ0FBQztRQUN2RCxLQUFLLENBQUM7VUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1VBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7VUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7VUFBRTtRQUN4QyxLQUFLLENBQUM7VUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7VUFBRTtRQUN4QztVQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUFFLENBQUMsR0FB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T0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ0w7UUFDSixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7TUFDM0M7SUFDSixDQUFDLE1BQ0k7TUFDRCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO01BQ3ZCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7TUFDdkIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7TUFDcEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDeEM7SUFDQSxPQUFPLENBQUM7RUFDWixDQUFDO0VBQ0Q7RUFDQSxHQUFHLEVBQUUsU0FBQSxJQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzdCLElBQUksR0FBRyxFQUFFLEVBQUU7SUFDWCxJQUFJLENBQUMsSUFBSSxFQUNMO0lBQ0osSUFBSSxPQUFBLENBQU8sSUFBSSxNQUFLLFFBQVEsRUFBRTtNQUMxQixJQUFJO1FBQ0EsS0FBSyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7VUFDaEcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUs7VUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QjtNQUNKLENBQUMsQ0FDRCxPQUFPLEtBQUssRUFBRTtRQUFFLEdBQUcsR0FBRztVQUFFLEtBQUssRUFBRTtRQUFNLENBQUM7TUFBRSxDQUFDLFNBQ2pDO1FBQ0osSUFBSTtVQUNBLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN2RCxDQUFDLFNBQ087VUFBRSxJQUFJLEdBQUcsRUFBRSxNQUFNLEdBQUcsQ0FBQyxLQUFLO1FBQUU7TUFDeEM7SUFDSixDQUFDLE1BQ0k7TUFDRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUs7SUFDM0I7SUFDQSxPQUFPLElBQUk7RUFDZixDQUFDO0VBQ0Q7RUFDQSxJQUFJLEVBQUUsU0FBQSxLQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzlCLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO01BQzlCLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUM7TUFDbEMsT0FBTyxLQUFLO0lBQ2hCLENBQUMsTUFDSTtNQUNELE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDakM7RUFDSjtBQUNKLENBQUM7OztBQzNLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBDb250YWluZXJEZWZhdWx0U3R5bGUgfSBmcm9tICcuLi9jb25zdGFudC9zdHlsZU1hcCc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi4vY29yZS9lbGVtZW50JztcbnZhciBKQmFzZUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkJhc2VDb21wb25lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkJhc2VDb21wb25lbnQob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb24uc3R5bGUgPSBvcHRpb24uc3R5bGUgfHwge307XG4gICAgICAgIC8vIHBvc2l0aW9u5ZKMb3ZlcmZsb3fpooTorr7nmoTlgLzkvJjlhYjnuqfmnIDpq5hcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gT2JqZWN0LmFzc2lnbihfX2Fzc2lnbih7fSwgQ29udGFpbmVyRGVmYXVsdFN0eWxlKSwgb3B0aW9uLnN0eWxlLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogQ29udGFpbmVyRGVmYXVsdFN0eWxlLnBvc2l0aW9uLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IENvbnRhaW5lckRlZmF1bHRTdHlsZS5vdmVyZmxvd1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7IFxuICAgICAgICAgICAgLy8g5aSW5bGC5Y+q5ZON5bqUWui9tOaXi+i9rFxuICAgICAgICAgICAgdHJhbnNmb3JtV2F0Y2hQcm9wczogW1xuICAgICAgICAgICAgICAgICdyb3RhdGVaJywgJ3NjYWxlWCcsICdzY2FsZVknXG4gICAgICAgICAgICBdIH0sIG9wdGlvbiksIHsgbm9kZVR5cGU6ICdkaXYnLCBjbGFzc05hbWU6ICdqLWRlc2lnbi1lZGl0b3ItY29udGFpbmVyJyB9KSkgfHwgdGhpcztcbiAgICAgICAgLy8g6YCJ5LitXG4gICAgICAgIF90aGlzLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBvcHRpb24udGFyZ2V0ID0gb3B0aW9uLnRhcmdldCB8fCB7fTtcbiAgICAgICAgLy8g55Sf5oiQ5b2T5YmN5o6n5Yi255qE5YWD57SgXG4gICAgICAgIF90aGlzLnRhcmdldCA9IG5ldyBKRWxlbWVudChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uKSwgeyBcbiAgICAgICAgICAgIC8vIOS4jeWTjeW6lOacrOi6q+eahOWPmOaNou+8jOWPquWTjeW6lOeItue6p+eahFxuICAgICAgICAgICAgdHJhbnNmb3JtV2F0Y2hQcm9wczogW10sIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICBfdGhpcy5hZGRDaGlsZChfdGhpcy50YXJnZXQpO1xuICAgICAgICAvLyDlj5jmjaLmlLnkuLrmjqfliLbkuLvlhYPntKBcbiAgICAgICAgX3RoaXMudHJhbnNmb3JtLmJpbmQoe1xuICAgICAgICAgICAgdGFyZ2V0OiBfdGhpcy50YXJnZXQsXG4gICAgICAgICAgICB3YXRjaFByb3BzOiBbXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZVgnLCAncm90YXRlWScsICd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAnc2tld1gnLCAnc2tld1knXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDliLfmlrDmoLflvI9cbiAgICAgICAgX3RoaXMuc3R5bGUucmVmcmVzaCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwic2VsZWN0ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB2O1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdzZWxlY3QnLCB2KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIOiuvue9rmNzc+WIsGRvbVxuICAgIEpCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXREb21TdHlsZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAvLyDlpoLmnpzlpJblsYLlrrnlmajnmoTmoLflvI/vvIzliJnliqDliLBjb250YWluZXLkuIpcbiAgICAgICAgaWYgKG5hbWUgaW4gQ29udGFpbmVyRGVmYXVsdFN0eWxlIHx8IG5hbWUgPT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldERvbVN0eWxlLmNhbGwodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuY3NzKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSkJhc2VDb21wb25lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkgeyBwcm9wcyA9IFtdOyB9XG4gICAgICAgIC8vIOi9rGpzb27lv73nlaXmuLLmn5Pnu4Tku7ZcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudG9KU09OLmNhbGwodGhpcywgcHJvcHMsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsICE9PSBfdGhpcy50YXJnZXQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEpCYXNlQ29tcG9uZW50O1xufShKRWxlbWVudCkpO1xuZXhwb3J0IGRlZmF1bHQgSkJhc2VDb21wb25lbnQ7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuLi9jb3JlL2VsZW1lbnQnO1xuLy8g6byg5qCH5oyH6ZKIXG52YXIgR0N1cnNvcnMgPSB7XG4gICAgJ2wnOiAndy1yZXNpemUnLFxuICAgICdsdCc6ICdudy1yZXNpemUnLFxuICAgICd0JzogJ24tcmVzaXplJyxcbiAgICAndHInOiAnbmUtcmVzaXplJyxcbiAgICAncic6ICdlLXJlc2l6ZScsXG4gICAgJ3JiJzogJ3NlLXJlc2l6ZScsXG4gICAgJ2InOiAncy1yZXNpemUnLFxuICAgICdsYic6ICdzdy1yZXNpemUnLFxuICAgICdyb3RhdGUnOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQWdWQk1WRVVBQUFBaUs5TWpLZFVmS05ZaktkVWlLTllpS2RVZUh1QWpLTllqS05ZaUtOWXlNc3dpS05ZaUtOWWlLTllpS05ZaEtOWWlLZFVpS05ZaUtOWWpLZFVqS05ZZ0o5Y2pKZFlpS05ZaUtOWWlLZFVoSjljaktOWWlLZFVkTE5Ncks5TWlLTllpS05ZaUtkVWlLTllqS05ZaktkVWpLZFVqS05ZaktkVWpLZFVqS2RhVVc3ZVZBQUFBS25SU1RsTUFGZE1ZMS92NENQWG80d1h1eUxoNlJmS1JqV3BBSnh5a2IxdFNUakFSQzhPc2xZVmdPaXZRcnFleTdjYXFBQUFCTTBsRVFWUkl4KzJVNlc2RE1CQ0VEZFNFKzJ3Zzk1MGUzL3MvWUdPQlFJMGhNZitxS3ZPREhZc1plOWRlclhqaDMyQzJQc1UrQkljeUN3M2tWaG5SSVVqM3ovVHZFY1RwMVJHaXpzNDJCSnZIK2txU2JQdGxGa1A1MkxGYzM1M29zaENUTU04cEp6cGNodXV3ckxFczhmZERlczl6Umh3SDBnRzlEYlkxa2hSK09LUWZkOWhrdXY0TmJwL2hyRklLWGUrQU5lYklpSFc5Z0pib2QyZmhON3pUcStTaHBiLzNVdXNRMmZHZXVNdzZydEJ2MXZ4cmFYOVVnTk53UFYxbDBOT05tYmRNZDdqVWVua0ZxUmh6eUtFcjMvRFpFTk5IRFNPdUtwcTN6WmxFQmZQRzNFVmNWRFJ2L1JYNVZrekNBdjlqa2lGTXlPK0d3SGIxZU9ndDRLdnExMDRodmVySklNc2hlYS9DRzYxWDN5NnllRGI3bkpNSHlDaHdWVGlhMUxTN0hBTUorTW15TnAvZ08yY21YdmpEK0FIcHJocG9KS2lZWUFBQUFBQkpSVTVFcmtKZ2dnPT0nLFxuICAgICdza2V3JzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFkVkJNVkVVQUFBQmxZLzk3ZS85a1l2OWtZLzluWi85bFkvOWtZdjlrWS85a1l2OWtZLzlsWS85a1l2OWtZLzlwWVA5b1lQOWtZdjlrWXY5a1kvOWtZdjlpWXY5blkvOWtZdjlsWXY5a1l2OWxZdjlsWS85a1l2OWxZdjlrWS85a1l2OWxaZjlsWS85a1l2OWtZdjlsWXY5a1l2OWxZLzlsWS8ra3RRTlJBQUFBSm5SU1RsTUEvQVR2M3hIbVcvVjBUdE8za2hjTnk4WEJVaDhVNnRpK3BwdDVia3NuR1RxeWdtTkVaMGN0cGRVQUFBRW1TVVJCVkVqSDdWUGJsb0l3REtTbG9BVXFGNmtnZDEyMy8vK0phK2pTU3BHcUQ3NHhieW5KeWN4a2NEWnMrQklPQWEyeWdyZ0l1YVFvS3hvY2JOMDNGb29GUW5aNzN1MVJJbFpRVUcvWnZ6c0pDOXpHYU9lWmtFQUphOW91OXpEMjhxNXRXSUtFUkRaYjBrdnUrM01RbTV2ajRMeVhXaDdrNDJSY2UvVlcxRjFkK0o1ZzlmSUxkZG12MjllWDBQR2o2dlJlUmRobU9JN3VMYWtxZ1dUbldOR0JSRldCbzdsOUlBZVJxZ0tHRnp1bEN6aXJqeVpBeEdSYjYvdEhNMkdSRXExVkM3ZVd0dnBDb04zTTFucTBOWDNnd0F0OU9CaUFDZk53WkthU1J5b2FWU1QweEpCTjBVak5NelZHK05Db2cwemhvMHRQNG5vZWJ3S1AvMnpxK0xsNUF3dU5BWXBFeUlaWHYraEpVM0k0ZDE3aWlLVG9ONkZzL1dEZ2czNGRqUTBidm80L25hWXZnczh4bXZ3QUFBQUFTVVZPUks1Q1lJST0nXG59O1xuLy8g5o6n5Yi25YWD57Sg56e75Yqo5ZKM55+p6Zi15Y+Y5o2iXG52YXIgSkNvbnRyb2xsZXJJdGVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKQ29udHJvbGxlckl0ZW0sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkNvbnRyb2xsZXJJdGVtKG9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb24uc3R5bGUgPSBvcHRpb24uc3R5bGUgfHwge307XG4gICAgICAgIG9wdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmJztcbiAgICAgICAgb3B0aW9uLnN0eWxlLmJvcmRlciA9IG9wdGlvbi5zdHlsZS5ib3JkZXIgfHwgJzFweCBzb2xpZCByZ2JhKDYsMTU1LDE4MSwxKSc7XG4gICAgICAgIG9wdGlvbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaXIgPSAnJztcbiAgICAgICAgX3RoaXMuc2l6ZSA9IDg7XG4gICAgICAgIF90aGlzLl9pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAvLyDmi5bmlL7kvY3nva5cbiAgICAgICAgX3RoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZGlyID0gb3B0aW9uLmRpciB8fCAnJztcbiAgICAgICAgX3RoaXMuc2l6ZSA9IG9wdGlvbi5zaXplIHx8IDg7XG4gICAgICAgIF90aGlzLnN0eWxlLmN1cnNvciA9IF90aGlzLnN0eWxlLmN1cnNvciB8fCBHQ3Vyc29yc1tfdGhpcy5kaXJdO1xuICAgICAgICBfdGhpcy53aWR0aCA9IF90aGlzLmhlaWdodCA9IF90aGlzLnNpemU7XG4gICAgICAgIF90aGlzLmVkaXRvciA9IG9wdGlvbi5lZGl0b3I7XG4gICAgICAgIGlmIChfdGhpcy5lZGl0b3IpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIF90aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRyYWdFbmQoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIF90aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBfdGhpcy5lZGl0b3IuZG9tKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIOS4jeaYr291dOe8lui+keWZqO+8jOS4jeWkhOeQhlxuICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ0VuZChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgX3RoaXMuZWRpdG9yLnZpZXcub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25EcmFnTW92ZShlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMub25EcmFnU3RhcnQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLCBcImlzTW92aW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNNb3Zpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTW92aW5nID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEpDb250cm9sbGVySXRlbS5wcm90b3R5cGUub25EcmFnTW92ZSA9IGZ1bmN0aW9uIChldmVudCwgcG9zKSB7XG4gICAgICAgIGlmIChwb3MgPT09IHZvaWQgMCkgeyBwb3MgPSBldmVudDsgfVxuICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBvZmZYID0gKHBvcy54IC0gdGhpcy5kcmFnU3RhcnRQb3NpdGlvbi54KTtcbiAgICAgICAgdmFyIG9mZlkgPSAocG9zLnkgLSB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIGRpcjogdGhpcy5kaXIsXG4gICAgICAgICAgICBvZmZYOiBvZmZYLFxuICAgICAgICAgICAgb2ZmWTogb2ZmWSxcbiAgICAgICAgICAgIG9sZFBvc2l0aW9uOiB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLFxuICAgICAgICAgICAgbmV3UG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g6YCJ5Lit55qE5piv5riy5p+T5bGC55qE5Z2Q5qCH77yM6L2s5Li65o6n5Yi25bGC55qEXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24ueCA9IHBvcy54O1xuICAgICAgICB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnkgPSBwb3MueTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLm9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50LCBwb3MpIHtcbiAgICAgICAgaWYgKHBvcyA9PT0gdm9pZCAwKSB7IHBvcyA9IGV2ZW50OyB9XG4gICAgICAgIC8vIOmAieS4reeahOaYr+a4suafk+WxgueahOWdkOagh++8jOi9rOS4uuaOp+WItuWxgueahFxuICAgICAgICB0aGlzLmRyYWdTdGFydFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogcG9zLngsXG4gICAgICAgICAgICB5OiBwb3MueSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICAgIEpDb250cm9sbGVySXRlbS5wcm90b3R5cGUub25EcmFnRW5kID0gZnVuY3Rpb24gKGV2ZW50LCBwb3MpIHtcbiAgICAgICAgaWYgKHBvcyA9PT0gdm9pZCAwKSB7IHBvcyA9IGV2ZW50OyB9XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOiuoeeul+aMh+mSiFxuICAgIEpDb250cm9sbGVySXRlbS5wcm90b3R5cGUucmVzZXRDdXJzb3IgPSBmdW5jdGlvbiAocm90YXRpb24pIHtcbiAgICAgICAgLy8g5YWI566A5Y2V5aSE55CGXG4gICAgICAgIGlmICghcm90YXRpb24gfHwgKHJvdGF0aW9uID4gLU1hdGguUEkgLyA2ICYmIHJvdGF0aW9uIDwgTWF0aC5QSSAvIDYpKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9IEdDdXJzb3JzW3RoaXMuZGlyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSkNvbnRyb2xsZXJJdGVtO1xufShKRWxlbWVudCkpO1xuZXhwb3J0IHsgSkNvbnRyb2xsZXJJdGVtIH07XG4vLyDlhYPntKDlpKflsI/kvY3nva7mjqfliLblmahcbnZhciBKQ29udHJvbGxlckNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkNvbnRyb2xsZXJDb21wb25lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkNvbnRyb2xsZXJDb21wb25lbnQob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIG9wdGlvbi56SW5kZXggPSAxMDAwMDA7XG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IG9wdGlvbi5zdHlsZSB8fCB7fTtcbiAgICAgICAgb3B0aW9uLnN0eWxlLmN1cnNvciA9IG9wdGlvbi5zdHlsZS5jdXJzb3IgfHwgJ21vdmUnO1xuICAgICAgICBvcHRpb24uZGlyID0gJ2VsZW1lbnQnO1xuICAgICAgICBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgICAvL29wdGlvbi5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDJweCAycHggI2NjYyc7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAvLyDpgInmi6nmoYbovrnot51cbiAgICAgICAgX3RoaXMucGFkZGluZ1NpemUgPSAxO1xuICAgICAgICBfdGhpcy5pc0VkaXRvciA9IGZhbHNlOyAvLyDlvZPliY3lhbPogZTmmK/lkKbmmK/nvJbovpHlmahcbiAgICAgICAgX3RoaXMuaW5pdChvcHRpb24pO1xuICAgICAgICAvLyBodG1sMmNhbnZhc+S4jea4suafk1xuICAgICAgICBfdGhpcy5hdHRyKCdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZScsICd0cnVlJyk7XG4gICAgICAgIF90aGlzLmVkaXRvci5kb20uYXBwZW5kQ2hpbGQoX3RoaXMuZG9tKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdsJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogMCwgdG9wOiAnNTAlJyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgnbHQnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAwLCB0b3A6IDAgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ3QnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnNTAlJywgdG9wOiAwIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCd0cicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6ICcxMDAlJywgdG9wOiAwIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdyJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogJzEwMCUnLCB0b3A6ICc1MCUnIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdyYicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6ICcxMDAlJywgdG9wOiAnMTAwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2InLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnNTAlJywgdG9wOiAnMTAwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2xiJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogMCwgdG9wOiAnMTAwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDml4vovazlnZdcbiAgICAgICAgdGhpcy5yb3RhdGVJdGVtID0gdGhpcy5jcmVhdGVJdGVtKCdyb3RhdGUnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICBzaXplOiAyNCxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7IGxlZnQ6ICc1MCUnLCB0b3A6ICctNDBweCcsIFxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLCBib3hTaGFkb3c6ICcwIDAgMnB4IDJweCAjY2NjJywgYm9yZGVyUmFkaXVzOiAnNTAlJywgY3Vyc29yOiBcInBvaW50ZXJcIiB9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyAnYmFja2dyb3VuZFNpemUnOiAnMTAwJScsIGJhY2tncm91bmRJbWFnZTogR0N1cnNvcnMucm90YXRlIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5za2V3SXRlbSA9IHRoaXMuY3JlYXRlSXRlbSgnc2tldycsIHtcbiAgICAgICAgICAgIHNoYXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIHNpemU6IDI0LFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHsgbGVmdDogJzUwJScsIHRvcDogJzUwJScsIGJvcmRlcjogJ25vbmUnLCBib3hTaGFkb3c6ICcwIDAgMnB4IDJweCAjY2NjJywgYm9yZGVyUmFkaXVzOiAnNTAlJywgY3Vyc29yOiBcInBvaW50ZXJcIiB9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyAnYmFja2dyb3VuZFNpemUnOiAnMTAwJScsIGJhY2tncm91bmRJbWFnZTogR0N1cnNvcnMuc2tldyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIOaXi+i9rOWdlyBcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmlzRWRpdG9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIOS4jeaYr+e8lui+keWZqO+8jOS4jeWkhOeQhlxuICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmNoYW5nZShlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDnlJ/miJDmjqfliLbngrlcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuY3JlYXRlSXRlbSA9IGZ1bmN0aW9uIChpZCwgb3B0aW9uKSB7XG4gICAgICAgIHZhciBpdGVtID0gbmV3IEpDb250cm9sbGVySXRlbShfX2Fzc2lnbih7IGRpcjogaWQsIGVkaXRvcjogdGhpcy5lZGl0b3IgfSwgb3B0aW9uKSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpdGVtLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jaGFuZ2UoZSk7XG4gICAgICAgICAgICAvLyDph43nva7mjIfpkohcbiAgICAgICAgICAgIHRoaXMucmVzZXRDdXJzb3Ioc2VsZi50cmFuc2Zvcm0ucm90YXRlWik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICAgIC8vIOWPkeeUn+aUueWPmOWTjeW6lFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZGlyID0gZS5kaXIsIG9mZlggPSBlLm9mZlgsIG9mZlkgPSBlLm9mZlk7XG4gICAgICAgIC8vIOW9k+WJjeenu+WKqOWvueWOn+WvueixoeeahOaUueWPmFxuICAgICAgICB2YXIgYXJncyA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICAgIHNrZXc6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlQ2hhbmdlKGUsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpciA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICAgICAgICAvLyDlhYPntKDkvY3nva7mjqfliLblmahcbiAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICBhcmdzLnkgPSBvZmZZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5YWI5Zue5Y6f5Z2Q5qCH77yM5YaN5Li7566X5YGP56e76YeP77yM6L+Z5qC35L+d6K+B5pON5L2c5pu05a655piT55CG6KejXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0ucm90YXRlWikge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLmdldFJvdGF0ZUV2ZW50UG9zaXRpb24oZSk7XG4gICAgICAgICAgICAgICAgb2ZmWCA9IHBvcy5vZmZYO1xuICAgICAgICAgICAgICAgIG9mZlkgPSBwb3Mub2ZmWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy54ID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IC1vZmZYO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3InOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnYic6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnbHQnOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3JiJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnbGInOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnc2tldyc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ4ID0gb2ZmWCAvIHV0aWwudG9OdW1iZXIodGhpcy53aWR0aCkgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcnkgPSBvZmZZIC8gdXRpbC50b051bWJlcih0aGlzLmhlaWdodCkgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnNrZXcueCA9IHJ5O1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnNrZXcueSA9IHJ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5L2N56e7XG4gICAgICAgIGlmIChhcmdzLnggfHwgYXJncy55KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoYXJncy54LCBhcmdzLnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLndpZHRoKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSB1dGlsLnRvTnVtYmVyKHRoaXMud2lkdGgpICsgYXJncy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh3aWR0aCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGgubWF4KHV0aWwudG9OdW1iZXIodGhpcy5oZWlnaHQpICsgYXJncy5oZWlnaHQsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHgseeaXi+i9rFxuICAgICAgICBpZiAoYXJncy5za2V3LnggfHwgYXJncy5za2V3LnkpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVYICs9IGFyZ3Muc2tldy54O1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVkgKz0gYXJncy5za2V3Lnk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50cmFuc2Zvcm0uYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcGx5VG9UYXJnZXQoKTtcbiAgICB9O1xuICAgIC8vIOWboOS4uuaXi+i9rOWQjuWdkOagh+imgeWbnuWOn+aJjeWlveiuoeeul+aTjeS9nO+8jFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5nZXRSb3RhdGVFdmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG9mZlggPSBlLm9mZlgsIG9mZlkgPSBlLm9mZlksIG9sZFBvc2l0aW9uID0gZS5vbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24gPSBlLm5ld1Bvc2l0aW9uO1xuICAgICAgICAvLyDlhYjlm57ljp/lnZDmoIfvvIzlho3kuLvnrpflgY/np7vph4/vvIzov5nmoLfkv53or4Hmk43kvZzmm7TlrrnmmJPnkIbop6NcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopIHtcbiAgICAgICAgICAgIHZhciBjZW50ZXIgPSB7XG4gICAgICAgICAgICAgICAgeDogdXRpbC50b051bWJlcih0aGlzLmxlZnQpICsgdXRpbC50b051bWJlcih0aGlzLndpZHRoKSAvIDIsXG4gICAgICAgICAgICAgICAgeTogdXRpbC50b051bWJlcih0aGlzLnRvcCkgKyB1dGlsLnRvTnVtYmVyKHRoaXMuaGVpZ2h0KSAvIDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIF9hID0gX19yZWFkKHV0aWwucm90YXRlUG9pbnRzKFtvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb25dLCBjZW50ZXIsIC10aGlzLnRyYW5zZm9ybS5yb3RhdGVaKSwgMiksIHBvczEgPSBfYVswXSwgcG9zMiA9IF9hWzFdO1xuICAgICAgICAgICAgb2ZmWCA9IHBvczIueCAtIHBvczEueDtcbiAgICAgICAgICAgIG9mZlkgPSBwb3MyLnkgLSBwb3MxLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZlg6IG9mZlgsXG4gICAgICAgICAgICBvZmZZOiBvZmZZXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvLyDlj5HnlJ/ml4vovaxcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUucm90YXRlQ2hhbmdlID0gZnVuY3Rpb24gKGUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIG9sZFBvc2l0aW9uID0gZS5vbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24gPSBlLm5ld1Bvc2l0aW9uO1xuICAgICAgICB2YXIgY2VudGVyID0ge1xuICAgICAgICAgICAgeDogdXRpbC50b051bWJlcih0aGlzLmxlZnQpICsgdXRpbC50b051bWJlcih0aGlzLndpZHRoKSAvIDIsXG4gICAgICAgICAgICB5OiB1dGlsLnRvTnVtYmVyKHRoaXMudG9wKSArIHV0aWwudG9OdW1iZXIodGhpcy5oZWlnaHQpIC8gMixcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sZWZ0LCB0aGlzLnRvcCwgY2VudGVyLCBvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24sIHRoaXMuZWRpdG9yLmxlZnQsIHRoaXMuZWRpdG9yLnRvcCk7XG4gICAgICAgIC8vIOe8lui+keWZqOWdkOagh1xuICAgICAgICB2YXIgcG9zMSA9IHV0aWwudG9Eb21Qb3NpdGlvbihvbGRQb3NpdGlvbiwgdGhpcy5lZGl0b3IudGFyZ2V0LmRvbSk7XG4gICAgICAgIHZhciBwb3MyID0gdXRpbC50b0RvbVBvc2l0aW9uKG5ld1Bvc2l0aW9uLCB0aGlzLmVkaXRvci50YXJnZXQuZG9tKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sZWZ0LCB0aGlzLnRvcCwgY2VudGVyLCBwb3MxLCBwb3MyKTtcbiAgICAgICAgLy8g5Zug5Li6Y2VudGVy5piv55u45a+55LqO57yW6L6R5Zmo55qE77yM5omA5Lul5LqL5Lu25Z2Q5qCH5Lmf6ZyA6KaB6L2s5Yiw57yW6L6R5ZmoXG4gICAgICAgIHZhciBjeDEgPSBwb3MxLnggLSBjZW50ZXIueDtcbiAgICAgICAgdmFyIGN5MSA9IHBvczEueSAtIGNlbnRlci55O1xuICAgICAgICB2YXIgYW5nbGUxID0gTWF0aC5hdGFuKGN5MSAvIGN4MSk7XG4gICAgICAgIHZhciBjeDIgPSBwb3MyLnggLSBjZW50ZXIueDtcbiAgICAgICAgdmFyIGN5MiA9IHBvczIueSAtIGNlbnRlci55O1xuICAgICAgICB2YXIgYW5nbGUyID0gTWF0aC5hdGFuKGN5MiAvIGN4Mik7XG4gICAgICAgIGlmIChhbmdsZTEgPj0gMCAmJiBhbmdsZTIgPCAwKSB7XG4gICAgICAgICAgICBpZiAoY3gxID49IDAgJiYgY3kxID49IDAgJiYgY3gyIDw9IDAgJiYgY3kyID49IDApXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGN4MSA8PSAwICYmIGN5MSA8PSAwICYmIGN4MiA+PSAwICYmIGN5MiA8PSAwKVxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IE1hdGguUEkgKyBhbmdsZTI7XG4gICAgICAgICAgICAvL2Vsc2UgaWYoY3gxIDw9IDAgJiYgY3kxIDw9MCAmJiBjeDIgPj0gMCAmJiBjeTIgPj0gMCkgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbmdsZTEgPD0gMCAmJiBhbmdsZTIgPj0gMCkge1xuICAgICAgICAgICAgaWYgKGN4MSA+PSAwICYmIGN5MSA8PSAwICYmIGN4MiA8IDApXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gYW5nbGUyIC0gTWF0aC5QSTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSAtYW5nbGUyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFuZ2xlMSA+PSAwICYmIGFuZ2xlMiA+IDApIHtcbiAgICAgICAgICAgIC8vaWYoY3kyID09PSAwKSBhbmdsZTIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3Mucm90YXRpb24gPSBhbmdsZTIgLSBhbmdsZTE7XG4gICAgICAgIGlmIChhcmdzLnJvdGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaICs9IGFyZ3Mucm90YXRpb247XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5hcHBseSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDmiorlj5jmjaLlupTnlKjliLDnm67moIflhYPntKBcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuYXBwbHlUb1RhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICAgIHg6IHV0aWwudG9OdW1iZXIodGhpcy5sZWZ0KSArICh0aGlzLmlzRWRpdG9yID8gdXRpbC50b051bWJlcih0aGlzLnRhcmdldC5sZWZ0KSA6IDApLFxuICAgICAgICAgICAgeTogdXRpbC50b051bWJlcih0aGlzLnRvcCkgKyAodGhpcy5pc0VkaXRvciA/IHV0aWwudG9OdW1iZXIodGhpcy50YXJnZXQudG9wKSA6IDApXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGFyZ2V0LmxlZnQgPSBwb3MueDtcbiAgICAgICAgdGhpcy50YXJnZXQudG9wID0gcG9zLnk7XG4gICAgICAgIC8vIOe8lui+keWZqOebuOWvueS9jee9ruS4gOebtOaYrzBcbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtLmZyb20oe1xuICAgICAgICAgICAgLy9za2V3WDogdGhpcy50cmFuc2Zvcm0uc2tld1gsXG4gICAgICAgICAgICAvL3NrZXdZOiB0aGlzLnRyYW5zZm9ybS5za2V3WSxcbiAgICAgICAgICAgIHJvdGF0ZVo6IHRoaXMudHJhbnNmb3JtLnJvdGF0ZVosXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgd2lkdGggPSB1dGlsLnRvTnVtYmVyKHRoaXMud2lkdGgpIC0gdGhpcy5wYWRkaW5nU2l6ZSAqIDI7XG4gICAgICAgIHZhciBoZWlnaHQgPSB1dGlsLnRvTnVtYmVyKHRoaXMuaGVpZ2h0KSAtIHRoaXMucGFkZGluZ1NpemUgKiAyO1xuICAgICAgICBpZiAodGhpcy50YXJnZXQud2lkdGggIT09IHdpZHRoKVxuICAgICAgICAgICAgdGhpcy50YXJnZXQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmhlaWdodCAhPT0gaGVpZ2h0KVxuICAgICAgICAgICAgdGhpcy50YXJnZXQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH07XG4gICAgLy8g6YeN572uXG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKGlzRWRpdG9yKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAoaXNFZGl0b3IgPT09IHZvaWQgMCkgeyBpc0VkaXRvciA9IHRoaXMuaXNFZGl0b3I7IH1cbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICBkZWxldGUgdGhpcy50YXJnZXQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyDnvJbovpHlmajkuI3orqnml4vovazlkoxza2V3XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMuaXRlbXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpdGVtLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gIWlzRWRpdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uZnJvbSh7XG4gICAgICAgICAgICByb3RhdGVaOiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOe7keWumuWIsOaTjeS9nOeahOWvueixoVxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0aGlzLmlzRWRpdG9yID0gdGFyZ2V0ID09PSB0aGlzLmVkaXRvcjtcbiAgICAgICAgdGhpcy5yZXNldCh0aGlzLmlzRWRpdG9yKTtcbiAgICAgICAgLy8g57yW6L6R5Zmo55qE6K+d77yM6ZyA6KaB5oqK5a6D55qE5Z2Q5qCH6L2s5Li655u45a+55LqO5a655Zmo55qEXG4gICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5pc0VkaXRvciA/IDAgOiB1dGlsLnRvTnVtYmVyKHRhcmdldC5sZWZ0KSksXG4gICAgICAgICAgICB5OiAodGhpcy5pc0VkaXRvciA/IDAgOiB1dGlsLnRvTnVtYmVyKHRhcmdldC50b3ApKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxlZnQgPSBwb3MueDtcbiAgICAgICAgdGhpcy50b3AgPSBwb3MueTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHV0aWwudG9OdW1iZXIodGFyZ2V0LndpZHRoKSArIHRoaXMucGFkZGluZ1NpemUgKiAyO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHV0aWwudG9OdW1iZXIodGFyZ2V0LmhlaWdodCkgKyB0aGlzLnBhZGRpbmdTaXplICogMjtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uZnJvbSh7XG4gICAgICAgICAgICAvLyByb3RhdGVYOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVgsXG4gICAgICAgICAgICAvLyByb3RhdGVZOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVksXG4gICAgICAgICAgICByb3RhdGVaOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVosXG4gICAgICAgICAgICAvL3NjYWxlWDogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVgsXG4gICAgICAgICAgICAvL3NjYWxlWTogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVksXG4gICAgICAgICAgICAvL3NjYWxlWjogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVosXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8g5aaC5p6c5piv57yW6L6R5Zmo77yM5YiZ5LiN6IO95o2V6I635LqL5Lu2XG4gICAgICAgIHRoaXMuY3NzKHtcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IHRoaXMuaXNFZGl0b3IgPyAnbm9uZScgOiAnYXV0bydcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDop6PpmaTnu5HlrppcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEpDb250cm9sbGVyQ29tcG9uZW50O1xufShKQ29udHJvbGxlckl0ZW0pKTtcbmV4cG9ydCBkZWZhdWx0IEpDb250cm9sbGVyQ29tcG9uZW50O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xudmFyIEpJbWFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkltYWdlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpJbWFnZShvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IG5vZGVUeXBlOiAnaW1nJyB9KSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudGFyZ2V0LmRvbS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMuZW1pdCgnbG9hZCcsIGUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy50YXJnZXQuZG9tLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMudGFyZ2V0LmF0dHIoJ2Nyb3Nzb3JpZ2luJywgJ2Fub255bW91cycpO1xuICAgICAgICBfdGhpcy5zcmMgPSBvcHRpb24udXJsIHx8IG9wdGlvbi5zcmMgfHwgJyc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpJbWFnZS5wcm90b3R5cGUsIFwic3JjXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQuZG9tLnNyYztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuZG9tLnNyYyA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBKSW1hZ2UucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkgeyBwcm9wcyA9IFtdOyB9XG4gICAgICAgIHByb3BzLnB1c2goJ3NyYycpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS50b0pTT04uY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgfTtcbiAgICByZXR1cm4gSkltYWdlO1xufShCYXNlKSk7XG5leHBvcnQgZGVmYXVsdCBKSW1hZ2U7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG52YXIgSlRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpUZXh0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpUZXh0KG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbiksIHsgbm9kZVR5cGU6ICdkaXYnIH0pKSB8fCB0aGlzO1xuICAgICAgICBpZiAob3B0aW9uLnRleHQpXG4gICAgICAgICAgICBfdGhpcy50ZXh0ID0gb3B0aW9uLnRleHQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpUZXh0LnByb3RvdHlwZSwgXCJ0ZXh0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQuZG9tLmlubmVyVGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuZG9tLmlubmVyVGV4dCA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBKVGV4dC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7IHByb3BzID0gW107IH1cbiAgICAgICAgcHJvcHMucHVzaCgndGV4dCcpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS50b0pTT04uY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgfTtcbiAgICByZXR1cm4gSlRleHQ7XG59KEJhc2UpKTtcbmV4cG9ydCBkZWZhdWx0IEpUZXh0O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCBFdmVudEVtaXRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbi8vIOaUr+aMgeeahOagt+W8j+WxnuaAp+WIl+ihqFxudmFyIEpFbGVtZW50U3R5bGVEZWNsYXJhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkVsZW1lbnRTdHlsZURlY2xhcmF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpFbGVtZW50U3R5bGVEZWNsYXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSkVsZW1lbnRTdHlsZURlY2xhcmF0aW9uO1xufShFdmVudEVtaXRlcikpO1xuZXhwb3J0IHsgSkVsZW1lbnRTdHlsZURlY2xhcmF0aW9uIH07XG4vLyDmoLflvI/lsZ7mgKfpm4blkIhcbnZhciBKRWxlbWVudFN0eWxlUHJvcGVydHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnRTdHlsZVByb3BlcnR5KCkge1xuICAgICAgICB0aGlzLmFjY2VudENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYWxpZ25Db250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuYWxpZ25JdGVtcyA9ICcnO1xuICAgICAgICB0aGlzLmFsaWduU2VsZiA9ICcnO1xuICAgICAgICB0aGlzLmFsaWdubWVudEJhc2VsaW5lID0gJyc7XG4gICAgICAgIHRoaXMuYWxsID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29tcG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25EZWxheSA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpcmVjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRmlsbE1vZGUgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25JdGVyYXRpb25Db3VudCA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbk5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25QbGF5U3RhdGUgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1pbmdGdW5jdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSAnJztcbiAgICAgICAgdGhpcy5hc3BlY3RSYXRpbyA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tkcm9wRmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2ZhY2VWaXNpYmlsaXR5ID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRBdHRhY2htZW50ID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEJsZW5kTW9kZSA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDbGlwID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZE9yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRQb3NpdGlvblggPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFJlcGVhdCA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRTaXplID0gJyc7XG4gICAgICAgIHRoaXMuYmFzZWxpbmVTaGlmdCA9ICcnO1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tFbmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrRW5kU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja0VuZFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrU3RhcnRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrU3RhcnRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrU3RhcnRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1dpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21TdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQ29sbGFwc2UgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckVuZEVuZFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckVuZFN0YXJ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW1hZ2UgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbWFnZU91dHNldCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlUmVwZWF0ID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW1hZ2VTbGljZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlU291cmNlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW1hZ2VXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZUNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lRW5kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVFbmRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZUVuZFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVTdGFydENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lU3RhcnRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZVN0YXJ0V2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyTGVmdCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckxlZnRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckxlZnRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckxlZnRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclJpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclJpZ2h0U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJSaWdodFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyU3BhY2luZyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclN0YXJ0RW5kUmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyU3RhcnRTdGFydFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJUb3BTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclRvcFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3R0b20gPSAnJztcbiAgICAgICAgdGhpcy5ib3hTaGFkb3cgPSAnJztcbiAgICAgICAgdGhpcy5ib3hTaXppbmcgPSAnJztcbiAgICAgICAgdGhpcy5icmVha0FmdGVyID0gJyc7XG4gICAgICAgIHRoaXMuYnJlYWtCZWZvcmUgPSAnJztcbiAgICAgICAgdGhpcy5icmVha0luc2lkZSA9ICcnO1xuICAgICAgICB0aGlzLmNhcHRpb25TaWRlID0gJyc7XG4gICAgICAgIHRoaXMuY2FyZXRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmNsZWFyID0gJyc7XG4gICAgICAgIHRoaXMuY2xpcCA9ICcnO1xuICAgICAgICB0aGlzLmNsaXBQYXRoID0gJyc7XG4gICAgICAgIHRoaXMuY2xpcFJ1bGUgPSAnJztcbiAgICAgICAgdGhpcy5jb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmNvbG9ySW50ZXJwb2xhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnMgPSAnJztcbiAgICAgICAgdGhpcy5jb2xvclNjaGVtZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtbkNvdW50ID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uRmlsbCA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtbkdhcCA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtblJ1bGUgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5SdWxlQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5SdWxlU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5SdWxlV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5TcGFuID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbiA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5JbnRyaW5zaWNCbG9ja1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluSW50cmluc2ljSGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbkludHJpbnNpY0lubGluZVNpemUgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluSW50cmluc2ljU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5JbnRyaW5zaWNXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluZXJUeXBlID0gJyc7XG4gICAgICAgIHRoaXMuY29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLmNvdW50ZXJJbmNyZW1lbnQgPSAnJztcbiAgICAgICAgdGhpcy5jb3VudGVyUmVzZXQgPSAnJztcbiAgICAgICAgdGhpcy5jb3VudGVyU2V0ID0gJyc7XG4gICAgICAgIHRoaXMuY3NzRmxvYXQgPSAnJztcbiAgICAgICAgdGhpcy5jc3NUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gJyc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9ICcnO1xuICAgICAgICB0aGlzLmRvbWluYW50QmFzZWxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5lbXB0eUNlbGxzID0gJyc7XG4gICAgICAgIHRoaXMuZmlsbCA9ICcnO1xuICAgICAgICB0aGlzLmZpbGxPcGFjaXR5ID0gJyc7XG4gICAgICAgIHRoaXMuZmlsbFJ1bGUgPSAnJztcbiAgICAgICAgdGhpcy5maWx0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5mbGV4ID0gJyc7XG4gICAgICAgIHRoaXMuZmxleEJhc2lzID0gJyc7XG4gICAgICAgIHRoaXMuZmxleERpcmVjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhGbG93ID0gJyc7XG4gICAgICAgIHRoaXMuZmxleEdyb3cgPSAnJztcbiAgICAgICAgdGhpcy5mbGV4U2hyaW5rID0gJyc7XG4gICAgICAgIHRoaXMuZmxleFdyYXAgPSAnJztcbiAgICAgICAgdGhpcy5mbG9hdCA9ICcnO1xuICAgICAgICB0aGlzLmZsb29kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5mbG9vZE9wYWNpdHkgPSAnJztcbiAgICAgICAgdGhpcy5mb250ID0gJyc7XG4gICAgICAgIHRoaXMuZm9udEZhbWlseSA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRGZWF0dXJlU2V0dGluZ3MgPSAnJztcbiAgICAgICAgdGhpcy5mb250S2VybmluZyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRPcHRpY2FsU2l6aW5nID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFBhbGV0dGUgPSAnJztcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTaXplQWRqdXN0ID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFN0cmV0Y2ggPSAnJztcbiAgICAgICAgdGhpcy5mb250U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5mb250U3ludGhlc2lzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFN5bnRoZXNpc1NtYWxsQ2FwcyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTeW50aGVzaXNTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTeW50aGVzaXNXZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudCA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50QWx0ZXJuYXRlcyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50Q2FwcyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50RWFzdEFzaWFuID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRMaWdhdHVyZXMgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudE51bWVyaWMgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudFBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhdGlvblNldHRpbmdzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFdlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmZvcmNlZENvbG9yQWRqdXN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ2FwID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRBcmVhID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Db2x1bW5zID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Sb3dzID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbiA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW5FbmQgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uR2FwID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtblN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZEdhcCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRSb3cgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkUm93RW5kID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFJvd0dhcCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVJvd3MgPSAnJztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5oeXBoZW5hdGVDaGFyYWN0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5oeXBoZW5zID0gJyc7XG4gICAgICAgIHRoaXMuaW1hZ2VPcmllbnRhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmltYWdlUmVuZGVyaW5nID0gJyc7XG4gICAgICAgIHRoaXMuaW5saW5lU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0ID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXRCbG9jayA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0QmxvY2tFbmQgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldEJsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldElubGluZSA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0SW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXRJbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLmlzb2xhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmp1c3RpZnlDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuanVzdGlmeUl0ZW1zID0gJyc7XG4gICAgICAgIHRoaXMuanVzdGlmeVNlbGYgPSAnJztcbiAgICAgICAgdGhpcy5sZWZ0ID0gJyc7XG4gICAgICAgIHRoaXMubGV0dGVyU3BhY2luZyA9ICcnO1xuICAgICAgICB0aGlzLmxpZ2h0aW5nQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5saW5lQnJlYWsgPSAnJztcbiAgICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMubGlzdFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMubGlzdFN0eWxlSW1hZ2UgPSAnJztcbiAgICAgICAgdGhpcy5saXN0U3R5bGVQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmxpc3RTdHlsZVR5cGUgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW4gPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5CbG9jayA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbkJsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbkJvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbklubGluZSA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbklubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbklubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luTGVmdCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luVG9wID0gJyc7XG4gICAgICAgIHRoaXMubWFya2VyID0gJyc7XG4gICAgICAgIHRoaXMubWFya2VyRW5kID0gJyc7XG4gICAgICAgIHRoaXMubWFya2VyTWlkID0gJyc7XG4gICAgICAgIHRoaXMubWFya2VyU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrID0gJyc7XG4gICAgICAgIHRoaXMubWFza0NsaXAgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrQ29tcG9zaXRlID0gJyc7XG4gICAgICAgIHRoaXMubWFza0ltYWdlID0gJyc7XG4gICAgICAgIHRoaXMubWFza01vZGUgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMubWFza1Bvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMubWFza1JlcGVhdCA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMubWFza1R5cGUgPSAnJztcbiAgICAgICAgdGhpcy5tYXRoU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5tYXhCbG9ja1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5tYXhJbmxpbmVTaXplID0gJyc7XG4gICAgICAgIHRoaXMubWF4V2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5taW5CbG9ja1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5taW5JbmxpbmVTaXplID0gJyc7XG4gICAgICAgIHRoaXMubWluV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5taXhCbGVuZE1vZGUgPSAnJztcbiAgICAgICAgdGhpcy5vYmplY3RGaXQgPSAnJztcbiAgICAgICAgdGhpcy5vYmplY3RQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldCA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldERpc3RhbmNlID0gJyc7XG4gICAgICAgIHRoaXMub2Zmc2V0UGF0aCA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldFJvdGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAnJztcbiAgICAgICAgdGhpcy5vcmRlciA9ICcnO1xuICAgICAgICB0aGlzLm9ycGhhbnMgPSAnJztcbiAgICAgICAgdGhpcy5vdXRsaW5lID0gJyc7XG4gICAgICAgIHRoaXMub3V0bGluZUNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMub3V0bGluZU9mZnNldCA9ICcnO1xuICAgICAgICB0aGlzLm91dGxpbmVTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLm91dGxpbmVXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJmbG93ID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3dBbmNob3IgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvd0NsaXBNYXJnaW4gPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvd1dyYXAgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvd1ggPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvd1kgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3IgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3JCbG9jayA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJzY3JvbGxCZWhhdmlvcklubGluZSA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJzY3JvbGxCZWhhdmlvclggPSAnJztcbiAgICAgICAgdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3JZID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZyA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdCbG9jayA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdCbG9ja0VuZCA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdCbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0JvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdJbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nSW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0lubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0xlZnQgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nVG9wID0gJyc7XG4gICAgICAgIHRoaXMucGFnZSA9ICcnO1xuICAgICAgICB0aGlzLnBhZ2VCcmVha0FmdGVyID0gJyc7XG4gICAgICAgIHRoaXMucGFnZUJyZWFrQmVmb3JlID0gJyc7XG4gICAgICAgIHRoaXMucGFnZUJyZWFrSW5zaWRlID0gJyc7XG4gICAgICAgIHRoaXMucGFpbnRPcmRlciA9ICcnO1xuICAgICAgICB0aGlzLnBlcnNwZWN0aXZlID0gJyc7XG4gICAgICAgIHRoaXMucGVyc3BlY3RpdmVPcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy5wbGFjZUNvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5wbGFjZUl0ZW1zID0gJyc7XG4gICAgICAgIHRoaXMucGxhY2VTZWxmID0gJyc7XG4gICAgICAgIHRoaXMucG9pbnRlckV2ZW50cyA9ICcnO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMucHJpbnRDb2xvckFkanVzdCA9ICcnO1xuICAgICAgICB0aGlzLnF1b3RlcyA9ICcnO1xuICAgICAgICB0aGlzLnJlc2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMucm90YXRlID0gJyc7XG4gICAgICAgIHRoaXMucm93R2FwID0gJyc7XG4gICAgICAgIHRoaXMucnVieVBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvciA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbiA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbkJsb2NrID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luQmxvY2tFbmQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5CbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luQm90dG9tID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luSW5saW5lID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luSW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luSW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5MZWZ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luUmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5Ub3AgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0Jsb2NrID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0Jsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nQm90dG9tID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0lubGluZSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdJbmxpbmVFbmQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nTGVmdCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdSaWdodCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdUb3AgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxTbmFwQWxpZ24gPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxTbmFwU3RvcCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFNuYXBUeXBlID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyR3V0dGVyID0gJyc7XG4gICAgICAgIHRoaXMuc2hhcGVJbWFnZVRocmVzaG9sZCA9ICcnO1xuICAgICAgICB0aGlzLnNoYXBlTWFyZ2luID0gJyc7XG4gICAgICAgIHRoaXMuc2hhcGVPdXRzaWRlID0gJyc7XG4gICAgICAgIHRoaXMuc2hhcGVSZW5kZXJpbmcgPSAnJztcbiAgICAgICAgdGhpcy5zdG9wQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5zdG9wT3BhY2l0eSA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZSA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZURhc2hhcnJheSA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZURhc2hvZmZzZXQgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VMaW5lY2FwID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlTGluZWpvaW4gPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VNaXRlcmxpbWl0ID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlT3BhY2l0eSA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMudGFiU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLnRhYmxlTGF5b3V0ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEFsaWduID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEFsaWduTGFzdCA9ICcnO1xuICAgICAgICB0aGlzLnRleHRBbmNob3IgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0Q29tYmluZVVwcmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRleHREZWNvcmF0aW9uQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvbkxpbmUgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvblNraXBJbmsgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvblN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb25UaGlja25lc3MgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RW1waGFzaXMgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RW1waGFzaXNDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLnRleHRFbXBoYXNpc1Bvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEVtcGhhc2lzU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0SW5kZW50ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dE9yaWVudGF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudGV4dE92ZXJmbG93ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dFJlbmRlcmluZyA9ICcnO1xuICAgICAgICB0aGlzLnRleHRTaGFkb3cgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0VHJhbnNmb3JtID0gJyc7XG4gICAgICAgIHRoaXMudGV4dFVuZGVybGluZU9mZnNldCA9ICcnO1xuICAgICAgICB0aGlzLnRleHRVbmRlcmxpbmVQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRvcCA9ICcnO1xuICAgICAgICB0aGlzLnRvdWNoQWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQm94ID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkRlbGF5ID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblByb3BlcnR5ID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gJyc7XG4gICAgICAgIHRoaXMudW5pY29kZUJpZGkgPSAnJztcbiAgICAgICAgdGhpcy51c2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMudmVydGljYWxBbGlnbiA9ICcnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbGlnbkNvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbGlnbkl0ZW1zID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QWxpZ25TZWxmID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uRGVsYXkgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25EaXJlY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbkZpbGxNb2RlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25OYW1lID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uUGxheVN0YXRlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBcHBlYXJhbmNlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QmFja2dyb3VuZENsaXAgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCYWNrZ3JvdW5kT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QmFja2dyb3VuZFNpemUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3JkZXJSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3JkZXJUb3BMZWZ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm9yZGVyVG9wUmlnaHRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hBbGlnbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJveEZsZXggPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hPcmRpbmFsR3JvdXAgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hPcmllbnQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hQYWNrID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94U2hhZG93ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94U2l6aW5nID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmxleCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhCYXNpcyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhEaXJlY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4RmxvdyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhHcm93ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmxleFNocmluayA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhXcmFwID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0SnVzdGlmeUNvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRMaW5lQ2xhbXAgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlT3V0c2V0ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlUmVwZWF0ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlU2xpY2UgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQm94SW1hZ2VTb3VyY2UgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQm94SW1hZ2VXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tDbGlwID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0NvbXBvc2l0ZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tJbWFnZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tPcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrUG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrUmVwZWF0ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza1NpemUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRPcmRlciA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFBlcnNwZWN0aXZlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0UGVyc3BlY3RpdmVPcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUZXh0RmlsbENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VGV4dFNpemVBZGp1c3QgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUZXh0U3Ryb2tlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VGV4dFN0cm9rZUNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VGV4dFN0cm9rZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNmb3JtID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNmb3JtT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNmb3JtU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUcmFuc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNpdGlvbkRlbGF5ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNpdGlvblByb3BlcnR5ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VXNlclNlbGVjdCA9ICcnO1xuICAgICAgICB0aGlzLndoaXRlU3BhY2UgPSAnJztcbiAgICAgICAgdGhpcy53aWRvd3MgPSAnJztcbiAgICAgICAgdGhpcy53aWR0aCA9ICcnO1xuICAgICAgICB0aGlzLndpbGxDaGFuZ2UgPSAnJztcbiAgICAgICAgdGhpcy53b3JkQnJlYWsgPSAnJztcbiAgICAgICAgdGhpcy53b3JkU3BhY2luZyA9ICcnO1xuICAgICAgICB0aGlzLndvcmRXcmFwID0gJyc7XG4gICAgICAgIHRoaXMud3JpdGluZ01vZGUgPSAnJztcbiAgICAgICAgdGhpcy56SW5kZXggPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIEpFbGVtZW50U3R5bGVQcm9wZXJ0eTtcbn0oKSk7XG5leHBvcnQgeyBKRWxlbWVudFN0eWxlUHJvcGVydHkgfTtcbnZhciBKRWxlbWVudENzc1N0eWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudENzc1N0eWxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpFbGVtZW50Q3NzU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50Q3NzU3R5bGUucHJvdG90eXBlLCBcIm5hbWVzXCIsIHtcbiAgICAgICAgLy8g5omA5pyJ5qC35byP5ZCN56ewXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgICAgICBpZiAoIUpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwID0gbmV3IEpFbGVtZW50U3R5bGVQcm9wZXJ0eSgpO1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWFwKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzXzEgPSBfX3ZhbHVlcyhrZXlzKSwga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpOyAha2V5c18xXzEuZG9uZTsga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtleXNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0eXBlb2YgbWFwW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPT09ICdzdHJpbmcnIHx8IHQgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcC5wdXNoKGspO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5c18xXzEgJiYgIWtleXNfMV8xLmRvbmUgJiYgKF9hID0ga2V5c18xLnJldHVybikpIF9hLmNhbGwoa2V5c18xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcCA9IFtdO1xuICAgIHJldHVybiBKRWxlbWVudENzc1N0eWxlO1xufShKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24pKTtcbmV4cG9ydCBkZWZhdWx0IEpFbGVtZW50Q3NzU3R5bGU7XG4vLyDmnIDlpJblsYLlrrnlmajpu5jorqTmoLflvI9cbmV4cG9ydCB2YXIgQ29udGFpbmVyRGVmYXVsdFN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICB0b3A6ICcwJyxcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzEwcHgnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIG1hcmdpbjogJzAnLFxuICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbn07XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xudmFyIFRyYW5zZm9ybSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHJhbnNmb3JtLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zZm9ybShvcHRpb24sIHRhcmdldE9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICAvLyDlk43lupTlj5jljJbmjaLlhYPntKDlkozlsZ7mgKdcbiAgICAgICAgX3RoaXMudGFyZ2V0cyA9IFtdO1xuICAgICAgICAvLyB45YGP56e76YePXG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZVggPSAwO1xuICAgICAgICAvLyB55YGP56e76YePXG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAvLyB65YGP56e76YePXG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZVogPSAwO1xuICAgICAgICBfdGhpcy5yb3RhdGVYID0gMDtcbiAgICAgICAgX3RoaXMucm90YXRlWSA9IDA7XG4gICAgICAgIF90aGlzLnJvdGF0ZVogPSAwO1xuICAgICAgICBfdGhpcy5zY2FsZVggPSAxO1xuICAgICAgICBfdGhpcy5zY2FsZVkgPSAxO1xuICAgICAgICBfdGhpcy5zY2FsZVogPSAxO1xuICAgICAgICBfdGhpcy5za2V3WCA9IDA7XG4gICAgICAgIF90aGlzLnNrZXdZID0gMDtcbiAgICAgICAgaWYgKG9wdGlvbilcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oX3RoaXMsIG9wdGlvbik7XG4gICAgICAgIGlmICh0YXJnZXRPcHRpb24pXG4gICAgICAgICAgICBfdGhpcy5iaW5kKHRhcmdldE9wdGlvbik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwidHJhbnNsYXRlWFN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlWChcIi5jb25jYXQodXRpbC50b1BYKHRoaXMudHJhbnNsYXRlWCksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInRyYW5zbGF0ZVlTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZVkoXCIuY29uY2F0KHV0aWwudG9QWCh0aGlzLnRyYW5zbGF0ZVkpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGVaU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGVaKFwiLmNvbmNhdCh1dGlsLnRvUFgodGhpcy50cmFuc2xhdGVaKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwicm90YXRlWFN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwicm90YXRlWChcIi5jb25jYXQodXRpbC50b1JhZCh0aGlzLnJvdGF0ZVgpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJyb3RhdGVZU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyb3RhdGVZKFwiLmNvbmNhdCh1dGlsLnRvUmFkKHRoaXMucm90YXRlWSksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInJvdGF0ZVpTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInJvdGF0ZVooXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5yb3RhdGVaKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwic2NhbGVYU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJzY2FsZVgoXCIuY29uY2F0KHRoaXMuc2NhbGVYLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJzY2FsZVlTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInNjYWxlWShcIi5jb25jYXQodGhpcy5zY2FsZVksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInNjYWxlWlN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2NhbGVaKFwiLmNvbmNhdCh0aGlzLnNjYWxlWiwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwic2tld1hTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInNrZXdYKFwiLmNvbmNhdCh1dGlsLnRvUmFkKHRoaXMuc2tld1gpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJza2V3WVN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2tld1koXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5za2V3WSksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuZnJvbSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhKVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB9O1xuICAgIC8vIOeUn+aViFxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0gdGhpcy50YXJnZXRzOyB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdGFyZ2V0XzEgPSBfX3ZhbHVlcyh0YXJnZXQpLCB0YXJnZXRfMV8xID0gdGFyZ2V0XzEubmV4dCgpOyAhdGFyZ2V0XzFfMS5kb25lOyB0YXJnZXRfMV8xID0gdGFyZ2V0XzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGFyZ2V0XzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseSh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldF8xXzEgJiYgIXRhcmdldF8xXzEuZG9uZSAmJiAoX2EgPSB0YXJnZXRfMS5yZXR1cm4pKSBfYS5jYWxsKHRhcmdldF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldC50YXJnZXQgJiYgdGFyZ2V0LnRhcmdldC5jc3MpXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRhcmdldC5jc3MoJ3RyYW5zZm9ybScsIHRoaXMudG9TdHJpbmcodGFyZ2V0LndhdGNoUHJvcHMpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC50YXJnZXQpXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLnRvU3RyaW5nKHRhcmdldC53YXRjaFByb3BzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g57uR5a6a5bm25Yi35paw5Yiw55uu5qCH5LiKXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICB0aGlzLmFwcGx5KHRhcmdldCk7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudGFyZ2V0cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0c1tpXS50YXJnZXQgPT09IHRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnlJ/miJB0cmFuc2Zvcm3ku6PnkIZcbiAgICBUcmFuc2Zvcm0uY3JlYXRlUHJveHkgPSBmdW5jdGlvbiAob2JqLCBlbCkge1xuICAgICAgICBpZiAob2JqID09PSB2b2lkIDApIHsgb2JqID0ge307IH1cbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0ob2JqLCBlbCk7XG4gICAgICAgIC8vIOS7o+eQhuWkhOeQhlxuICAgICAgICB2YXIgcHJveHkgPSBuZXcgUHJveHkodHJhbnNmb3JtLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHAsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0YXJnZXRbcF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYXBwbHkoKTsgLy8g55Sf5pWIXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHdhdGNoUHJvcHMpIHtcbiAgICAgICAgdmFyIGVfMiwgX2E7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgaWYgKCF3YXRjaFByb3BzKSB7XG4gICAgICAgICAgICB3YXRjaFByb3BzID0gWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsIFwicm90YXRlWFwiLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXdYJywgJ3NrZXdZJ107XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHdhdGNoUHJvcHNfMSA9IF9fdmFsdWVzKHdhdGNoUHJvcHMpLCB3YXRjaFByb3BzXzFfMSA9IHdhdGNoUHJvcHNfMS5uZXh0KCk7ICF3YXRjaFByb3BzXzFfMS5kb25lOyB3YXRjaFByb3BzXzFfMSA9IHdhdGNoUHJvcHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHdhdGNoUHJvcHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBudiA9IHRoaXNbbiArICdTdHJpbmcnXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbbl0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBudiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2gobnYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHdhdGNoUHJvcHNfMV8xICYmICF3YXRjaFByb3BzXzFfMS5kb25lICYmIChfYSA9IHdhdGNoUHJvcHNfMS5yZXR1cm4pKSBfYS5jYWxsKHdhdGNoUHJvcHNfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qb2luKCcgJyk7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IHRoaXMudHJhbnNsYXRlWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IHRoaXMudHJhbnNsYXRlWSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVo6IHRoaXMudHJhbnNsYXRlWixcbiAgICAgICAgICAgIHJvdGF0ZVg6IHRoaXMucm90YXRlWCxcbiAgICAgICAgICAgIHJvdGF0ZVk6IHRoaXMucm90YXRlWSxcbiAgICAgICAgICAgIHJvdGF0ZVo6IHRoaXMucm90YXRlWixcbiAgICAgICAgICAgIHNjYWxlWDogdGhpcy5zY2FsZVgsXG4gICAgICAgICAgICBzY2FsZVk6IHRoaXMuc2NhbGVZLFxuICAgICAgICAgICAgc2NhbGVaOiB0aGlzLnNjYWxlWixcbiAgICAgICAgICAgIHNrZXdYOiB0aGlzLnNrZXdYLFxuICAgICAgICAgICAgc2tld1k6IHRoaXMuc2tld1ksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNmb3JtO1xufShFdmVudEVtaXRlcikpO1xuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCBFdmVudEVtaXRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IEpUcmFuc2Zvcm0gZnJvbSAnLi4vY29uc3RhbnQvdHJhbnNmb3JtJztcbmltcG9ydCBKU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG5pbXBvcnQgSkV2ZW50IGZyb20gJy4uL2NvcmUvZXZlbnQnO1xudmFyIEpFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWxlbWVudChvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlkID0gJyc7XG4gICAgICAgIC8vIOexu+Wei+WQjeensFxuICAgICAgICBfdGhpcy50eXBlID0gJyc7XG4gICAgICAgIC8vIOWtkOWFg+e0oFxuICAgICAgICBfdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgLy8g5aSN5Yi25bGe5oCnXG4gICAgICAgIGZvciAodmFyIGsgaW4gb3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdiA9IG9wdGlvbltrXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgayAhPT0gJ3N0cmluZycgfHwgKHR5cGVvZiB2ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgdiAhPT0gJ251bWJlcicpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgX3RoaXNba10gPSB2O1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmlkID0gX3RoaXMuaWQgfHwgb3B0aW9uLmlkIHx8IHV1aWR2NCgpLnJlcGxhY2UoLy0vZywgJycpO1xuICAgICAgICBfdGhpcy50eXBlID0gX3RoaXMudHlwZSB8fCBvcHRpb24udHlwZSB8fCAnJztcbiAgICAgICAgdmFyIG5vZGVUeXBlID0gb3B0aW9uLm5vZGVUeXBlIHx8ICdkaXYnO1xuICAgICAgICBfdGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcbiAgICAgICAgaWYgKG9wdGlvbi5lZGl0b3IpXG4gICAgICAgICAgICBfdGhpcy5lZGl0b3IgPSBvcHRpb24uZWRpdG9yO1xuICAgICAgICAvLyDmoLflvI/ku6PnkIblpITnkIZcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBKU3R5bGUuY3JlYXRlUHJveHkoKTtcbiAgICAgICAgX3RoaXMuc3R5bGUub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXREb21TdHlsZShzLm5hbWUsIHMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdGlvbi5zdHlsZSlcbiAgICAgICAgICAgIF90aGlzLnN0eWxlLmFwcGx5KG9wdGlvbi5zdHlsZSk7XG4gICAgICAgIC8vIOWPmOaNouaOp+WItueahOaYr+aguOW/g+WFg+e0oFxuICAgICAgICBfdGhpcy50cmFuc2Zvcm0gPSBKVHJhbnNmb3JtLmNyZWF0ZVByb3h5KG9wdGlvbi50cmFuc2Zvcm0sIHtcbiAgICAgICAgICAgIHRhcmdldDogX3RoaXMsXG4gICAgICAgICAgICAvLyDlpoLmnpzmjIflrprkuoblj6rlk43lupTmn5Dlh6DkuKrlsZ7mgKdcbiAgICAgICAgICAgIHdhdGNoUHJvcHM6IG9wdGlvbi50cmFuc2Zvcm1XYXRjaFByb3BzXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5pbml0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgIF90aGlzLmJpbmRFdmVudCgpOyAvLyDkuovku7bnu5HlrppcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvLyDliJ3lp4vljJbkuIDkupvln7rnoYDlsZ7mgKdcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuaW5pdE9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdGhpcy54ID0gb3B0aW9uLnggfHwgb3B0aW9uLmxlZnQgfHwgdGhpcy54IHx8IDA7XG4gICAgICAgIHRoaXMueSA9IG9wdGlvbi55IHx8IG9wdGlvbi50b3AgfHwgdGhpcy55IHx8IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb24ud2lkdGggfHwgb3B0aW9uLndpZHRoIHx8IHRoaXMud2lkdGggfHwgMTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb24uaGVpZ2h0IHx8IG9wdGlvbi5oZWlnaHQgfHwgdGhpcy5oZWlnaHQgfHwgMTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24ucm90YXRpb24gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IG9wdGlvbi5yb3RhdGlvbjtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24uYW5nbGUgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IG9wdGlvbi5hbmdsZTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24uekluZGV4ICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRoaXMuekluZGV4ID0gb3B0aW9uLnpJbmRleDtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24udmlzaWJsZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSAhIW9wdGlvbi52aXNpYmxlO1xuICAgICAgICBpZiAob3B0aW9uLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gb3B0aW9uLmNsYXNzTmFtZTtcbiAgICB9O1xuICAgIC8vIOe7keWumuS6i+S7tlxuICAgIEpFbGVtZW50LnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIOS6i+S7tuaJmOeuoVxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEpFdmVudChkb20gfHwgdGhpcy5kb20pO1xuICAgICAgICB0aGlzLmV2ZW50LmluaXQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoZS50eXBlLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcImNoaWxkcmVuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICAvLyDlnZDmoIdYXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLnN0eWxlLmxlZnQgfHwgMDtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmxlZnQgPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgLy8g5Z2Q5qCHWVxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5zdHlsZS50b3AgfHwgMDtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRvcCA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInRvcFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy55ID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwibGVmdFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy54ID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwicmlnaHRcIiwge1xuICAgICAgICAvLyDlnZDmoIdyaWdodFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5zdHlsZS5yaWdodCB8fCAwO1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUucmlnaHQgPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJib3R0b21cIiwge1xuICAgICAgICAvLyDlnZDmoIdib3R0b21cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuc3R5bGUuYm90dG9tIHx8IDA7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHcgPSB0aGlzLnN0eWxlLndpZHRoIHx8IDA7XG4gICAgICAgICAgICBpZiAoIXcgJiYgdGhpcy5kb20gJiYgdGhpcy5kb20uY2xpZW50V2lkdGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9tLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJoZWlnaHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5zdHlsZS5oZWlnaHQgfHwgMDtcbiAgICAgICAgICAgIGlmICghaCAmJiB0aGlzLmRvbSAmJiB0aGlzLmRvbS5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9tLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInJvdGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMudHJhbnNmb3JtLnJvdGF0ZVo7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5peL6L2s5byn5bqmXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnJvdGF0ZVogPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJhbmdsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWwucmFkVG9EZWcodGhpcy50cmFuc2Zvcm0ucm90YXRlWik7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaXi+i9rOinkuW6plxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaID0gdXRpbC5kZWdUb1JhZCh2KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwidmlzaWJsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSB2ID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwiekluZGV4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuc3R5bGUuekluZGV4IHx8ICcwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuekluZGV4ID0gdiArICcnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvbS5jbGFzc05hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuZG9tLmNsYXNzTmFtZSA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDorr7nva5jc3PliLBkb21cbiAgICBKRWxlbWVudC5wcm90b3R5cGUuc2V0RG9tU3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdiYWNrZ3JvdW5kSW1hZ2UnICYmIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIS9eXFxzKnVybFxcKC8udGVzdCh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcInVybChcIi5jb25jYXQodmFsdWUsIFwiKVwiKTtcbiAgICAgICAgfVxuICAgICAgICB1dGlsLmNzcyh0aGlzLmRvbSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICAvLyDlrZfkvZPkvp3otZbkuovku7ZcbiAgICAgICAgaWYgKG5hbWUgPT09ICdmb250RmFtaWx5Jykge1xuICAgICAgICAgICAgLyp0aGlzLmVtaXQoJ2ZvbnRDaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogdmFsdWVcbiAgICAgICAgICAgIH0pOyovXG4gICAgICAgICAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci5lbWl0KCdmb250Q2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOiuvue9ruagt+W8j1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS5jc3MgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdXRpbC5jc3ModGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8vIGRvbeWxnuaAp1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1dGlsLmF0dHIodGhpcy5kb20sIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuICAgIC8vIOenu+S9jVxuICAgIEpFbGVtZW50LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGR4LCBkeSkge1xuICAgICAgICB0aGlzLmxlZnQgPSB1dGlsLnRvTnVtYmVyKHRoaXMubGVmdCkgKyBkeDtcbiAgICAgICAgdGhpcy50b3AgPSB1dGlsLnRvTnVtYmVyKHRoaXMudG9wKSArIGR5O1xuICAgICAgICB0aGlzLmVtaXQoJ21vdmUnLCB7IGR4OiBkeCwgZHk6IGR5IH0pO1xuICAgIH07XG4gICAgLy8g6YeN572u5aSn5bCPXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICh3LCBoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g5paw5aKe5a2Q5YWD57SgXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKGNoaWxkLCBwYXJlbnQpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHZvaWQgMCkgeyBwYXJlbnQgPSB0aGlzOyB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjaGlsZF8xID0gX192YWx1ZXMoY2hpbGQpLCBjaGlsZF8xXzEgPSBjaGlsZF8xLm5leHQoKTsgIWNoaWxkXzFfMS5kb25lOyBjaGlsZF8xXzEgPSBjaGlsZF8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGNoaWxkXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENoaWxkKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRfMV8xICYmICFjaGlsZF8xXzEuZG9uZSAmJiAoX2EgPSBjaGlsZF8xLnJldHVybikpIF9hLmNhbGwoY2hpbGRfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgSkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHBhcmVudC5kb20uYXBwZW5kQ2hpbGQoY2hpbGQuZG9tKTtcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQuZG9tLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g56e76Zmk6Ieq5beyXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfTtcbiAgICAvLyDnp7vpmaTlrZDlhYPntKBcbiAgICBKRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZWwuZG9tICYmIGVsLmRvbS5wYXJlbnRFbGVtZW50ID09PSB0aGlzLmRvbSlcbiAgICAgICAgICAgIHRoaXMuZG9tLnJlbW92ZUNoaWxkKGVsLmRvbSB8fCBlbCk7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltpXSA9PT0gZWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGVsZXRlIGVsLnBhcmVudDtcbiAgICB9O1xuICAgIC8vIOi9rOS4umpzb25cbiAgICBKRWxlbWVudC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKHByb3BzLCBpZykge1xuICAgICAgICB2YXIgZV8yLCBfYSwgZV8zLCBfYjtcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSBbXTsgfVxuICAgICAgICBpZiAoaWcgPT09IHZvaWQgMCkgeyBpZyA9IGZ1bmN0aW9uIChwKSB7IHJldHVybiB0cnVlOyB9OyB9XG4gICAgICAgIHZhciBmaWVsZHMgPSBfX3NwcmVhZEFycmF5KFsnbGVmdCcsICd0b3AnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3JvdGF0aW9uJywgJ3R5cGUnLCAnc3R5bGUnLCAndHJhbnNmb3JtJywgJ2lkJ10sIF9fcmVhZChwcm9wcyksIGZhbHNlKTtcbiAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgZmllbGRzXzEgPSBfX3ZhbHVlcyhmaWVsZHMpLCBmaWVsZHNfMV8xID0gZmllbGRzXzEubmV4dCgpOyAhZmllbGRzXzFfMS5kb25lOyBmaWVsZHNfMV8xID0gZmllbGRzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBmaWVsZHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGhpc1trXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBvYmpba10gPSB0aGlzW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2ICYmIHYudG9KU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtrXSA9IHYudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzXzFfMSAmJiAhZmllbGRzXzFfMS5kb25lICYmIChfYSA9IGZpZWxkc18xLnJldHVybikpIF9hLmNhbGwoZmllbGRzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIC8vaWYodGhpcy50cmFuc2Zvcm0pIG9ialsndHJhbnNmb3JtJ10gPSB0aGlzLnRyYW5zZm9ybS50b0pTT04oKTtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2MgPSBfX3ZhbHVlcyh0aGlzLmNoaWxkcmVuKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBfZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkID09PSB0aGlzIHx8IGlnKGNoaWxkKSA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNoaWxkcmVuLnB1c2goY2hpbGQudG9KU09OKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzNfMSkgeyBlXzMgPSB7IGVycm9yOiBlXzNfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9iID0gX2MucmV0dXJuKSkgX2IuY2FsbChfYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgSkVsZW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy50b0pTT04oKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgfTtcbiAgICBKRWxlbWVudC5wcm90b3R5cGUudG9IdG1sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb20ub3V0ZXJIVE1MO1xuICAgIH07XG4gICAgcmV0dXJuIEpFbGVtZW50O1xufShFdmVudEVtaXRlcikpO1xuZXhwb3J0IGRlZmF1bHQgSkVsZW1lbnQ7XG4iLCJ2YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi4vbGliL3V0aWxcIjtcbnZhciBTdXBwb3J0RXZlbnROYW1lcyA9IFtcbiAgICAnbW91c2Vkb3duJywgJ21vdXNldXAnLCAnbW91c2VvdmVyJywgJ21vdXNlbW92ZScsICdtb3VzZW91dCcsICdtb3VzZXdoZWVsJywgJ2NsaWNrJywgJ2RibGNsaWNrJywgJ2tleWRvd24nLCAna2V5cHJlc3MnLCAna2V5dXAnLCAnYmx1cicsICdjaGFuZ2UnLCAnZm9jdXMnLCAnZHJhZycsICdkcmFnZW50ZXInLCAnZHJhZ2xlYXZlJywgJ2RyYWdvdmVyJywgJ2RyYWdzdGFydCcsICdkcm9wJ1xuXTtcbnZhciBKRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSkV2ZW50KHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuICAgIC8vIOWIneWni+WMluaJgOacieaUr+aMgeeahOS6i+S7tlxuICAgIEpFdmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChoYW5kbGVyLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmJpbmRFdmVudChTdXBwb3J0RXZlbnROYW1lcywgaGFuZGxlciwgZmFsc2UsIHRhcmdldCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDnu5Hlrprkuovku7bliLBodG1s5a+56LGhXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGJpbmRFdmVudFxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGh0bWzlhYPntKDlr7nosaFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW4g5LqL5Lu25aeU5omYXG4gICAgICogQHJldHVybnMge25hbWUsIGZ1biwgdGFyZ2V0fSDov5Tlm57lvZPliY3nu5HlrppcbiAgICAgKi9cbiAgICBKRXZlbnQucHJvdG90eXBlLmJpbmRFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBmdW4sIG9wdCwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAob3B0ID09PSB2b2lkIDApIHsgb3B0ID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IHRoaXMudGFyZ2V0OyB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWVfMSA9IF9fdmFsdWVzKG5hbWUpLCBuYW1lXzFfMSA9IG5hbWVfMS5uZXh0KCk7ICFuYW1lXzFfMS5kb25lOyBuYW1lXzFfMSA9IG5hbWVfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuYW1lXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnQobiwgZnVuLCBvcHQsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lXzFfMSAmJiAhbmFtZV8xXzEuZG9uZSAmJiAoX2EgPSBuYW1lXzEucmV0dXJuKSkgX2EuY2FsbChuYW1lXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSAmJiBuYW1lLmluZGV4T2YgJiYgbmFtZS5pbmRleE9mKCcgJykgIT0gLTEpIHtcbiAgICAgICAgICAgIHZhciBucyA9IG5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJpbmRFdmVudChucywgZnVuLCBvcHQsIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgLyovLyBAdHMtaWdub3JlXG4gICAgICAgIGlmKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0LmF0dGFjaEV2ZW50KFwib25cIituYW1lLCBmdW4sIG9wdCk7XG4gICAgICAgIH0gKi9cbiAgICAgICAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW4sIG9wdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDku47lr7nosaHkuK3np7vpmaTkuovku7bliLBcbiAgICAgKlxuICAgICAqIEBtZXRob2QgcmVtb3ZlRXZlbnRcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBodG1s5YWD57Sg5a+56LGhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuIOS6i+S7tuWnlOaJmFxuICAgICAqL1xuICAgIEpFdmVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgZnVuLCBvcHQsIHRhcmdldCkge1xuICAgICAgICBpZiAob3B0ID09PSB2b2lkIDApIHsgb3B0ID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IHRoaXMudGFyZ2V0OyB9XG4gICAgICAgIGlmICh0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZnVuLCBvcHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgIFxuICAgICAgICBlbHNlIGlmICh0YXJnZXQuZGV0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgbmFtZSwgZnVuLCBvcHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0WydvbicgKyBuYW1lXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDojrflj5blhYPntKDkuovku7bop6blj5HnmoTkvY3nva5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZ2V0RXZlbnRQb3NpdGlvblxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge2V2ZW50QXJnfSBldnQg5b2T5YmN6Kem5Y+R5LqL5Lu255qE5Y+C5pWwXG4gICAgICogQHJldHVybiB7cG9pbnR9IOS6i+S7tuinpuWPkeeahOS9jee9rlxuICAgICAqL1xuICAgIEpFdmVudC5wcm90b3R5cGUuZ2V0RXZlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChldnQsIHRhcmdldCkge1xuICAgICAgICB2YXIgaXNUb3VjaCA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZ0IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgdmFyIHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXMgfHwgZXZ0LnRhcmdldFRvdWNoZXMgfHwgZXZ0LnRvdWNoZXM7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBldnQgPSB0b3VjaGVzWzBdOyAvL+WFvOWuuXRvdWNo5LqL5Lu2XG4gICAgICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHggPSBldnQucGFnZVggfHwgZXZ0Lng7XG4gICAgICAgIGlmICh0eXBlb2YgcHggPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBweCA9IGV2dC5jbGllbnRYICsgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCk7XG4gICAgICAgIHZhciBweSA9IGV2dC5wYWdlWSB8fCBldnQueTtcbiAgICAgICAgaWYgKHR5cGVvZiBweSA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHB5ID0gZXZ0LmNsaWVudFkgKyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCk7XG4gICAgICAgIHZhciBveCA9IGV2dC5vZmZzZXRYO1xuICAgICAgICB2YXIgb3kgPSBldnQub2Zmc2V0WTtcbiAgICAgICAgaWYgKCh0eXBlb2Ygb3ggPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBveSA9PT0gJ3VuZGVmaW5lZCcpIHx8IHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIHAgPSB1dGlsLmdldEVsZW1lbnRQb3NpdGlvbigodGFyZ2V0IHx8IGV2dC50YXJnZXQpKTtcbiAgICAgICAgICAgIG94ID0gcHggLSBwLng7XG4gICAgICAgICAgICBveSA9IHB5IC0gcC55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBveCxcbiAgICAgICAgICAgIHk6IG95LFxuICAgICAgICAgICAgcGFnZVg6IHB4LFxuICAgICAgICAgICAgcGFnZVk6IHB5LFxuICAgICAgICAgICAgaXNUb3VjaDogaXNUb3VjaCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBKRXZlbnQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgSkV2ZW50O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIEpGb250RGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBKRm9udERhdGEoZmFtaWx5LCB1cmwpIHtcbiAgICAgICAgdGhpcy5mYW1pbHkgPSBmYW1pbHk7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkZvbnREYXRhLnByb3RvdHlwZSwgXCJzdGF0dXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9udC5zdGF0dXM7XG4gICAgICAgICAgICByZXR1cm4gJ3VubG9hZGVkJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEpGb250RGF0YS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgaWYgKHVybCA9PT0gdm9pZCAwKSB7IHVybCA9IHRoaXMudXJsOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB1cmwgfHwgdGhpcy51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9udClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbnQgPSBuZXcgRm9udEZhY2UodGhpcy5mYW1pbHksIHRoaXMudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZm9udC5sb2FkKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZm9udHMuYWRkKGYpOyAvLyDnlJ/mlYhcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSkZvbnREYXRhO1xufSgpKTtcbmV4cG9ydCB7IEpGb250RGF0YSB9O1xudmFyIEpGb250cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBKRm9udHMoZm9udFNldCkge1xuICAgICAgICBpZiAoZm9udFNldCA9PT0gdm9pZCAwKSB7IGZvbnRTZXQgPSBuZXcgTWFwKCk7IH1cbiAgICAgICAgdGhpcy5mb250cyA9IGZvbnRTZXQ7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBKRm9udHMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5mb250cykge1xuICAgICAgICAgICAgdmFyIGZvbnRzID0gZG9jdW1lbnQuZm9udHMudmFsdWVzKCk7XG4gICAgICAgICAgICB2YXIgZm9udCA9IGZvbnRzLm5leHQoKTtcbiAgICAgICAgICAgIHdoaWxlIChmb250ICYmIGZvbnQuZG9uZSAmJiBmb250LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBuZXcgSkZvbnREYXRhKGZvbnQudmFsdWUuZmFtaWx5KTtcbiAgICAgICAgICAgICAgICAgICAgZi5mb250ID0gZm9udC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb250cy5zZXQoZi5mYW1pbHksIGYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb250ID0gZm9udHMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDliqDovb3lrZfkvZNcbiAgICBKRm9udHMucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAobmFtZSwgdXJsKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmb250O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGZvbnQgPSB0aGlzLmdldChuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9udClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZvbnRdO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb250ID0gbmV3IEpGb250RGF0YShuYW1lLCBcInVybChcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiKVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9udHMuc2V0KG5hbWUsIGZvbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZm9udC5sb2FkKCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDojrflj5blt7LliqDovb3nmoTlrZfkvZNcbiAgICBKRm9udHMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmZvbnRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb250cy5oYXMobmFtZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9udHMuZ2V0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgLy8g5qOA5p+l5Yqg6L2955qE5a2X5L2T5piv5ZCm5a2Y5Zyo77yM5a2Y5Zyo5YiZ6L+U5Zue5a2X5L2T5a+56LGhXG4gICAgSkZvbnRzLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBmb250ID0gdGhpcy5nZXQobmFtZSk7XG4gICAgICAgIHJldHVybiAhIWZvbnQ7XG4gICAgfTtcbiAgICByZXR1cm4gSkZvbnRzO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IEpGb250cztcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgSkVsZW1lbnRDc3NTdHlsZSBmcm9tICcuLi9jb25zdGFudC9zdHlsZU1hcCc7XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG52YXIgTnVtYmVyU3R5bGVNYXAgPSBbJ2xlZnQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICd3aWR0aCcsICdoZWlnaHQnXTtcbnZhciBKRWxlbWVudFN0eWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudFN0eWxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpFbGVtZW50U3R5bGUob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgIF90aGlzLmFwcGx5KG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvLyDmiormoLflvI/lupTnlKjliLDlhYPntKDmiJblvZPliY3lr7nosaFcbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChkYXRhLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB0aGlzOyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMubmFtZXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVfMSA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZV8xICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW25hbWVfMV0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBkYXRhW25hbWVfMV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBKRWxlbWVudFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0U3R5bGUobmFtZV8xLCBkYXRhW25hbWVfMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVfMV0gPSBkYXRhW25hbWVfMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgLy8g5qC35byP5a+55bqU55qE5YWD57SgXG4gICAgSkVsZW1lbnRTdHlsZS5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYXBwbHkodGhpcywgZWxlbWVudC5zdHlsZSk7XG4gICAgfTtcbiAgICAvLyDorr7nva7moLflvI9cbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOinpuWPkeaJgOacieabtOaWsOWIsGRvbVxuICAgIEpFbGVtZW50U3R5bGUucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXBwbHkodGhpcyk7XG4gICAgfTtcbiAgICAvLyDovazkuLpqc29uXG4gICAgSkVsZW1lbnRTdHlsZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLm5hbWVzKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lXzIgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV8yXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIG9ialtuYW1lXzJdID0gdGhpc1tuYW1lXzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIC8vIOeUn+aIkOagt+W8j+S7o+eQhlxuICAgIEpFbGVtZW50U3R5bGUuY3JlYXRlUHJveHkgPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgaWYgKHN0eWxlID09PSB2b2lkIDApIHsgc3R5bGUgPSB7fTsgfVxuICAgICAgICB2YXIganN0eWxlID0gbmV3IEpFbGVtZW50U3R5bGUoc3R5bGUpO1xuICAgICAgICAvLyDmoLflvI/ku6PnkIblpITnkIZcbiAgICAgICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGpzdHlsZSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGFyZ2V0W3BdO1xuICAgICAgICAgICAgICAgIC8vIOaVsOWtl+agt+W8j++8jOWkhOeQhnB46Zeu6aKYXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJyAmJiBOdW1iZXJTdHlsZU1hcC5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PT0gJzAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1dGlsLmlzUFhOdW1iZXIodikpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDpnZ7nmb3lkI3ljZXmoLflvI/kuI3mlK/mjIHorr7nva5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnIHx8ICF0YXJnZXQubmFtZXMuaW5jbHVkZXMocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDmlbDlrZfmoLflvI/vvIzlpITnkIZweOmXrumimFxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXJTdHlsZU1hcC5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdXRpbC5pc051bWJlcih2YWx1ZSkgPyBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0U3R5bGUocCwgdmFsdWUpOyAvLyDlupTnlKjliLDlhYPntKDlkoznsbtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9O1xuICAgIHJldHVybiBKRWxlbWVudFN0eWxlO1xufShKRWxlbWVudENzc1N0eWxlKSk7XG5leHBvcnQgZGVmYXVsdCBKRWxlbWVudFN0eWxlO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgSkJhc2UgZnJvbSAnLi9jb21wb25lbnRzL2Jhc2UnO1xuaW1wb3J0IEpUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcbmltcG9ydCBKSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuL2NvcmUvZWxlbWVudCc7XG5pbXBvcnQgSkNvbnRyb2xsZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xsZXInO1xuaW1wb3J0IEpGb250cyBmcm9tICcuL2NvcmUvZm9udHMnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi9saWIvdXRpbCc7XG52YXIgSkVkaXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkVkaXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWRpdG9yKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gb3B0aW9uLnN0eWxlIHx8IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKG9wdGlvbi5zdHlsZSwge1xuICAgICAgICAgICAgJ2JveFNoYWRvdyc6ICcwIDAgMTBweCAxMHB4ICNjY2MnLFxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kU2l6ZSc6ICcxMDAlIDEwMCUnLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5aSW5bGC5Y+q5ZON5bqUWui9tOaXi+i9rFxuICAgICAgICBvcHRpb24udHJhbnNmb3JtV2F0Y2hQcm9wcyA9IFtcbiAgICAgICAgICAgICdyb3RhdGVaJywgJ3NjYWxlWCcsICdzY2FsZVknXG4gICAgICAgIF07XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9uKSB8fCB0aGlzO1xuICAgICAgICAvLyDmiYDmnInmlK/mjIHnmoTnsbvlnotcbiAgICAgICAgX3RoaXMuc2hhcGVzID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbi5jb250YWluZXIgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgb3B0aW9uLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbi5jb250YWluZXIpO1xuICAgICAgICBfdGhpcy52aWV3ID0gbmV3IEpFbGVtZW50KHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgJ2JvcmRlcic6IDAsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAwLFxuICAgICAgICAgICAgICAgICdtYXJnaW4nOiAwLFxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMTAwJScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDlrZfkvZPnrqHnkIblrp7kvotcbiAgICAgICAgX3RoaXMuZm9udHMgPSBuZXcgSkZvbnRzKCk7XG4gICAgICAgIF90aGlzLnRhcmdldC5jc3Moe1xuICAgICAgICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbidcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb24uY29udGFpbmVyKVxuICAgICAgICAgICAgb3B0aW9uLmNvbnRhaW5lci5hcHBlbmRDaGlsZChfdGhpcy52aWV3LmRvbSk7XG4gICAgICAgIF90aGlzLnZpZXcuYWRkQ2hpbGQoX3RoaXMuZG9tKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBfdGhpcy5yZWdTaGFwZSgnaW1hZ2UnLCBKSW1hZ2UpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIF90aGlzLnJlZ1NoYXBlKCd0ZXh0JywgSlRleHQpO1xuICAgICAgICBfdGhpcy5pbml0KG9wdGlvbik7XG4gICAgICAgIF90aGlzLmJpbmRFdmVudChfdGhpcy52aWV3LmRvbSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyW5pW05Liq57yW6L6R5ZmoXG4gICAgSkVkaXRvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbi5zdHlsZS5jb250YWluZXJCYWNrZ3JvdW5kQ29sb3IpXG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb24uc3R5bGUuY29udGFpbmVyQmFja2dyb3VuZENvbG9yO1xuICAgICAgICAvLyDnlJ/miJDmjqfliLblmahcbiAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlciA9IG5ldyBKQ29udHJvbGxlcih7XG4gICAgICAgICAgICBlZGl0b3I6IHRoaXMsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHN0eWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlTm9kZS5pbm5lckhUTUwgPSBcIi5qLWRlc2lnbi1lZGl0b3ItY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuai1kZXNpZ24tZWRpdG9yLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiO1xuICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQoc3R5bGVOb2RlKTtcbiAgICAgICAgaWYgKG9wdGlvbi53aWR0aCAmJiBvcHRpb24uaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZShvcHRpb24ud2lkdGgsIG9wdGlvbi5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5zZWxlY3QoX3RoaXMpOyAvLyDpgInkuK3oh6rlt7JcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIub25EcmFnU3RhcnQoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFZGl0b3IucHJvdG90eXBlLCBcImNoaWxkcmVuXCIsIHtcbiAgICAgICAgLy8g6YeN5YaZ5a2Q6ZuG5Li6dGFyZ2V0XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmNoaWxkcmVuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFZGl0b3IucHJvdG90eXBlLCBcInNlbGVjdGVkRWxlbWVudHNcIiwge1xuICAgICAgICAvLyDooqvpgInkuK3nmoTlhYPntKBcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLmNoaWxkcmVuKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSkJhc2UgJiYgZWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDnu5Hlrprkuovku7ZcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcpXG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmJpbmRFdmVudC5jYWxsKHRoaXMsIHRoaXMudmlldy5kb20pOyAvLyDnvJbovpHlmajkuovku7bnu5HliLDmlbTkuKrlrrnlmajkuIpcbiAgICB9O1xuICAgIC8vIOmAieS4reafkOS4quWFg+e0oFxuICAgIEpFZGl0b3IucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIOmAieaKiuaJgOacieW3sumAieaLqeeahOWPlua2iFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnRzLmV2ZXJ5KGZ1bmN0aW9uIChwKSB7IHJldHVybiBwICE9PSBlbCAmJiBwLnNlbGVjdGVkICYmIChwLnNlbGVjdGVkID0gZmFsc2UpOyB9KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIuYmluZChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlci51bmJpbmQoZWwpO1xuICAgIH07XG4gICAgSkVkaXRvci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHdpZHRoID09PSB2b2lkIDApIHsgd2lkdGggPSB0aGlzLndpZHRoOyB9XG4gICAgICAgIGlmIChoZWlnaHQgPT09IHZvaWQgMCkgeyBoZWlnaHQgPSB0aGlzLmhlaWdodDsgfVxuICAgICAgICB0aGlzLmF0dHIoJ2RhdGEtc2l6ZScsIFwiXCIuY29uY2F0KHdpZHRoLCBcIipcIikuY29uY2F0KGhlaWdodCkpO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxlZnQgPSB1dGlsLnRvTnVtYmVyKF90aGlzLnZpZXcuZG9tLmNsaWVudFdpZHRoKSAvIDIgLSB1dGlsLnRvTnVtYmVyKHdpZHRoKSAvIDI7XG4gICAgICAgICAgICBfdGhpcy50b3AgPSB1dGlsLnRvTnVtYmVyKF90aGlzLnZpZXcuZG9tLmNsaWVudEhlaWdodCkgLyAyIC0gdXRpbC50b051bWJlcihoZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ3Jlc2l6ZScsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMCk7XG4gICAgfTtcbiAgICAvLyDmt7vliqDlhYPntKDliLDnlLvluINcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQgPT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5hZGRDaGlsZC5jYWxsKHRoaXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNoaWxkLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgc2VsZi5zZWxlY3QodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGlsZC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5lbGVtZW50Q29udHJvbGxlci5vbkRyYWdTdGFydChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZENoaWxkKGNoaWxkLCB0aGlzLnRhcmdldCk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7IC8vIOaKiueItuiuvue9ruaIkOe8lui+keWZqFxuICAgICAgICBjaGlsZC5lZGl0b3IgPSB0aGlzO1xuICAgIH07XG4gICAgLy8g56e76ZmkXG4gICAgSkVkaXRvci5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKGVsID09PSB0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oJ+S4jeiDveenu+mZpOiHquW3sicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEpFbGVtZW50KSB7XG4gICAgICAgICAgICBlbC5vZmYoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgZWwub2ZmKCdtb3VzZWRvd24nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH07XG4gICAgLy8g5oqKZG9tY3VtZW505Z2Q5qCH6L2s5Li657yW6L6R5Zmo55u45a+55Z2Q5qCHXG4gICAgSkVkaXRvci5wcm90b3R5cGUudG9FZGl0b3JQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgICAgLy8g57yW6L6R5Zmo5Z2Q5qCHXG4gICAgICAgIHZhciBlZGl0b3JQb3MgPSB1dGlsLmdldEVsZW1lbnRQb3NpdGlvbih0aGlzLnZpZXcuZG9tKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHBvcy54IC0gZWRpdG9yUG9zLngsXG4gICAgICAgICAgICB5OiBwb3MueSAtIGVkaXRvclBvcy55XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jc3Moe1xuICAgICAgICAgICAgJ2JhY2tncm91bmRDb2xvcic6ICcjZmZmJyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRDb250cm9sbGVyLnZpc2libGUgPSBmYWxzZTtcbiAgICB9O1xuICAgIC8vIOe8qeaUvlxuICAgIEpFZGl0b3IucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0geDsgfVxuICAgICAgICBpZiAoeCA8IDAuMSB8fCB5IDwgMC4xKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybS5zY2FsZVggPSB4O1xuICAgICAgICB0aGlzLnRyYW5zZm9ybS5zY2FsZVkgPSB5O1xuICAgIH07XG4gICAgLy8g5rOo5YaM6Ieq5a6a5LmJ57uE5Lu2XG4gICAgSkVkaXRvci5wcm90b3R5cGUucmVnU2hhcGUgPSBmdW5jdGlvbiAobmFtZSwgc2hhcGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hhcGVzLmhhcyhuYW1lKSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiXFx1NTE0M1xcdTdEMjBcXHU3QzdCXFx1NTc4QlwiLmNvbmNhdChuYW1lLCBcIlxcdTVERjJcXHU3RUNGXFx1NUI1OFxcdTU3MjhcIikpO1xuICAgICAgICB0aGlzLnNoYXBlcy5zZXQobmFtZSwgc2hhcGUpO1xuICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgfTtcbiAgICAvLyDliJvlu7rlhYPntKBcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5jcmVhdGVTaGFwZSA9IGZ1bmN0aW9uICh0eXBlLCBvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XG4gICAgICAgIHZhciBzaGFwZSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHRoaXMuc2hhcGVzLmdldCh0eXBlKSA6IHR5cGU7XG4gICAgICAgIGlmICghc2hhcGUpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiXCIuY29uY2F0KHR5cGUsIFwiXFx1NEUwRFxcdTVCNThcXHU1NzI4XFx1NzY4NFxcdTUxNDNcXHU3RDIwXFx1N0M3QlxcdTU3OEJcIikpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbCA9IG5ldyBzaGFwZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uKSwgeyBlZGl0b3I6IHRoaXMsIHR5cGU6IHR5cGUgfSkpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfTtcbiAgICAvLyDliJvlu7rlm77niYflhYPntKBcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5jcmVhdGVJbWFnZSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIGltZyA9IHRoaXMuY3JlYXRlU2hhcGUoJ2ltYWdlJywgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbiksIHsgdXJsOiB1cmwgfSkpO1xuICAgICAgICByZXR1cm4gaW1nO1xuICAgIH07XG4gICAgSkVkaXRvci5wcm90b3R5cGUuZnJvbUpTT04gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIGlmIChkYXRhLnN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmFwcGx5KGRhdGEuc3R5bGUpOyAvLyDlupTnlKjmoLflvI9cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2l6ZShkYXRhLndpZHRoLCBkYXRhLmhlaWdodCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKGRhdGEuY2hpbGRyZW4pLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIWMudHlwZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZVNoYXBlKGMudHlwZSwgYyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSkVkaXRvcjtcbn0oSkJhc2UpKTtcbmV4cG9ydCBkZWZhdWx0IEpFZGl0b3I7XG5leHBvcnQgeyBKRWRpdG9yLCBKSW1hZ2UsIEpUZXh0LCB9O1xuIiwiaW1wb3J0IEpCYXNlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9iYXNlJztcbmltcG9ydCBKVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dCc7XG5pbXBvcnQgSkltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZSc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi9jb3JlL2VsZW1lbnQnO1xuaW1wb3J0IEpFZGl0b3IgZnJvbSAnLi9lZGl0b3InO1xuZXhwb3J0IHsgSkJhc2VDb21wb25lbnQsIEpUZXh0LCBKSW1hZ2UsIEpFbGVtZW50LCBKRWRpdG9yIH07XG5leHBvcnQgZGVmYXVsdCBKRWRpdG9yO1xuIiwidmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIOaYr+WQpuaYr+aVsOWtl1xuICAgIGlzTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInIHx8IC9eXFxzKltcXGRcXC5dK1xccyokLy50ZXN0KHYpO1xuICAgIH0sXG4gICAgLy8g5piv5ZCm5piv5bim5YOP57Sg5Y2V5L2N55qE5a2X56ym5LiyXG4gICAgaXNQWE51bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypweFxccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLy8g5piv5ZCm5piv5bim6KeS5bqm5Y2V5L2N55qE5a2X56ym5LiyXG4gICAgaXNEZWdOdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiAvXlxccypbXFxkXFwuXStcXHMqZGVnXFxzKi9pLnRlc3Qodik7XG4gICAgfSxcbiAgICAvLyDmmK/lkKbmmK/luKblvKfluqbljZXkvY3nmoTlrZfnrKbkuLJcbiAgICBpc1JhZE51bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypyYWRcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOi9rOS4uuWDj+e0oOWtl+espuS4suagvOW8jyBcbiAgICB0b1BYOiBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB2ICsgJ3B4JztcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvLyDluKblg4/ntKDmiJblhbblroPljZXkvY3nmoTovazmjaLkuLrmlbDlrZdcbiAgICB0b051bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHYpO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2KTtcbiAgICB9LFxuICAgIC8vIOW8p+W6pui9rOinkuW6plxuICAgIHJhZFRvRGVnOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdiAqICgxODAgLyBNYXRoLlBJKTtcbiAgICB9LFxuICAgIC8vIOinkuW6pui9rOW8p+W6plxuICAgIGRlZ1RvUmFkOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICB9LFxuICAgIC8vIOi9rOS4uuinkuW6puagvOW8j1xuICAgIHRvRGVnOiBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB2ICsgJ2RlZyc7XG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgJiYgdGhpcy5pc1JhZE51bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGVnKHRoaXMucmFkVG9EZWcocGFyc2VGbG9hdCh2KSkpO1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9LFxuICAgIC8vIOi9rOS4uuW8p+W6puagvOW8j1xuICAgIHRvUmFkOiBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB2ICsgJ3JhZCc7XG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgJiYgdGhpcy5pc0RlZ051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUmFkKHRoaXMuZGVnVG9SYWQocGFyc2VGbG9hdCh2KSkpO1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiOt+WPluWFg+e0oOeahOe7neWvueWumuS9jVxuICAgICAqXG4gICAgICogQG1ldGhvZCBnZXRFbGVtZW50UG9zaXRpb25cbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbCDnm67moIflhYPntKDlr7nosaFcbiAgICAgKiBAcmV0dXJuIHtwb3NpdGlvbn0g5L2N572u5a+56LGhKHRvcCxsZWZ0KVxuICAgICAqL1xuICAgIGdldEVsZW1lbnRQb3NpdGlvbjogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBwb3MgPSB7IFwieVwiOiAwLCBcInhcIjogMCB9O1xuICAgICAgICBpZiAoIWVsKVxuICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgaWYgKGVsLm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgd2hpbGUgKGVsLm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgICAgIHBvcy55ICs9IGVsLm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICBwb3MueCArPSBlbC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZWxzZSBpZiAoZWwueCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcG9zLnggKz0gZWwueDtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGVsc2UgaWYgKGVsLnkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBvcy55ICs9IGVsLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvcztcbiAgICB9LFxuICAgIC8vIOaKimRvbWN1bWVudOWdkOagh+i9rOS4uuaMh+WumuWFg+e0oOebuOWvueWdkOagh1xuICAgIHRvRG9tUG9zaXRpb246IGZ1bmN0aW9uIChwb3MsIGRvbSkge1xuICAgICAgICB2YXIgZG9tUG9zID0gdGhpcy5nZXRFbGVtZW50UG9zaXRpb24oZG9tKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHBvcy54IC0gZG9tUG9zLngsXG4gICAgICAgICAgICB5OiBwb3MueSAtIGRvbVBvcy55XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmiorkuIDkuKrmiJblpJrkuKrngrnnu5Xmn5DkuKrngrnml4vovazkuIDlrprop5LluqZcbiAgICAgKiDlhYjmiorlnZDmoIfljp/ngrnnp7vliLDml4vovazkuK3lv4PngrnvvIzorqHnrpflkI7np7vlm55cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVBvaW50c1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge0FycmF5L29iamVjdH0gcCDkuIDkuKrmiJblpJrkuKrngrlcbiAgICAgKiBAcGFyYW0ge3g6IG51bWJlciwgeTogbnVtYmVyfSBycCDml4vovazkuK3lv4PngrlcbiAgICAgKiBAcGFyYW0geyp9IHIg5peL6L2s6KeS5bqmXG4gICAgICovXG4gICAgcm90YXRlUG9pbnRzOiBmdW5jdGlvbiAocCwgY2VudGVyLCByKSB7XG4gICAgICAgIGlmICghciB8fCAhcClcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3Mocik7XG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocCkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghcFtpXSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIHgxID0gcFtpXS54IC0gY2VudGVyLng7XG4gICAgICAgICAgICAgICAgdmFyIHkxID0gcFtpXS55IC0gY2VudGVyLnk7XG4gICAgICAgICAgICAgICAgcFtpXS54ID0geDEgKiBjb3MgLSB5MSAqIHNpbiArIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIHBbaV0ueSA9IHgxICogc2luICsgeTEgKiBjb3MgKyBjZW50ZXIueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4MSA9IHAueCAtIGNlbnRlci54O1xuICAgICAgICAgICAgdmFyIHkxID0gcC55IC0gY2VudGVyLnk7XG4gICAgICAgICAgICBwLnggPSB4MSAqIGNvcyAtIHkxICogc2luICsgY2VudGVyLng7XG4gICAgICAgICAgICBwLnkgPSB4MSAqIHNpbiArIHkxICogY29zICsgY2VudGVyLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICAvLyDorr7nva7moLflvI9cbiAgICBjc3M6IGZ1bmN0aW9uIChkb20sIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuYW1lKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jc3MoZG9tLCBuLCBuYW1lW25dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20uc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIGRvbeWxnuaAp1xuICAgIGF0dHI6IGZ1bmN0aW9uIChkb20sIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlICsgJycpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRvbS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHByZWZpeCA9ICd+JztcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgYSBzdG9yYWdlIGZvciBvdXIgYEVFYCBvYmplY3RzLlxuICogQW4gYEV2ZW50c2AgaW5zdGFuY2UgaXMgYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFdmVudHMoKSB7fVxuXG4vL1xuLy8gV2UgdHJ5IHRvIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLiBJbiBzb21lIGVuZ2luZXMgY3JlYXRpbmcgYW5cbi8vIGluc3RhbmNlIGluIHRoaXMgd2F5IGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgYE9iamVjdC5jcmVhdGUobnVsbClgIGRpcmVjdGx5LlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGNoYXJhY3RlciB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdFxuLy8gb3ZlcnJpZGRlbiBvciB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vL1xuaWYgKE9iamVjdC5jcmVhdGUpIHtcbiAgRXZlbnRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy9cbiAgLy8gVGhpcyBoYWNrIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBgX19wcm90b19fYCBwcm9wZXJ0eSBpcyBzdGlsbCBpbmhlcml0ZWQgaW5cbiAgLy8gc29tZSBvbGQgYnJvd3NlcnMgbGlrZSBBbmRyb2lkIDQsIGlQaG9uZSA1LjEsIE9wZXJhIDExIGFuZCBTYWZhcmkgNS5cbiAgLy9cbiAgaWYgKCFuZXcgRXZlbnRzKCkuX19wcm90b19fKSBwcmVmaXggPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBldmVudCBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXIoZW1pdHRlciwgZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgZW1pdHRlciwgb25jZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XSkgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgZW1pdHRlci5fZXZlbnRzQ291bnQrKztcbiAgZWxzZSBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdLmZuKSBlbWl0dGVyLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IFtlbWl0dGVyLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJdO1xuXG4gIHJldHVybiBlbWl0dGVyO1xufVxuXG4vKipcbiAqIENsZWFyIGV2ZW50IGJ5IG5hbWUuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldnQgVGhlIEV2ZW50IG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbGVhckV2ZW50KGVtaXR0ZXIsIGV2dCkge1xuICBpZiAoLS1lbWl0dGVyLl9ldmVudHNDb3VudCA9PT0gMCkgZW1pdHRlci5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICBlbHNlIGRlbGV0ZSBlbWl0dGVyLl9ldmVudHNbZXZ0XTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBuYW1lcyA9IFtdXG4gICAgLCBldmVudHNcbiAgICAsIG5hbWU7XG5cbiAgaWYgKHRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIChldmVudHMgPSB0aGlzLl9ldmVudHMpKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghaGFuZGxlcnMpIHJldHVybiBbXTtcbiAgaWYgKGhhbmRsZXJzLmZuKSByZXR1cm4gW2hhbmRsZXJzLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aCwgZWUgPSBuZXcgQXJyYXkobCk7IGkgPCBsOyBpKyspIHtcbiAgICBlZVtpXSA9IGhhbmRsZXJzW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG51bWJlciBvZiBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWJlciBvZiBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIGxpc3RlbmVyQ291bnQoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghbGlzdGVuZXJzKSByZXR1cm4gMDtcbiAgaWYgKGxpc3RlbmVycy5mbikgcmV0dXJuIDE7XG4gIHJldHVybiBsaXN0ZW5lcnMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMiwgYTMpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIG9uZS10aW1lIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCB0cnVlKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsaXN0ZW5lcnMgb2YgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuICBpZiAoIWZuKSB7XG4gICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAoXG4gICAgICBsaXN0ZW5lcnMuZm4gPT09IGZuICYmXG4gICAgICAoIW9uY2UgfHwgbGlzdGVuZXJzLm9uY2UpICYmXG4gICAgICAoIWNvbnRleHQgfHwgbGlzdGVuZXJzLmNvbnRleHQgPT09IGNvbnRleHQpXG4gICAgKSB7XG4gICAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBldmVudHMgPSBbXSwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxpc3RlbmVyc1tpXS5mbiAhPT0gZm4gfHxcbiAgICAgICAgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKSB8fFxuICAgICAgICAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAgIC8vXG4gICAgaWYgKGV2ZW50cy5sZW5ndGgpIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgICBlbHNlIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dDtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICh0aGlzLl9ldmVudHNbZXZ0XSkgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBwcmVmaXguXG4vL1xuRXZlbnRFbWl0dGVyLnByZWZpeGVkID0gcHJlZml4O1xuXG4vL1xuLy8gQWxsb3cgYEV2ZW50RW1pdHRlcmAgdG8gYmUgaW1wb3J0ZWQgYXMgbW9kdWxlIG5hbWVzcGFjZS5cbi8vXG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOSUxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX25pbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cmluZ2lmeVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdjIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdjMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdjQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdmFsaWRhdGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF92ZXJzaW9uLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YxLmpzXCIpKTtcblxudmFyIF92MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjMuanNcIikpO1xuXG52YXIgX3YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NC5qc1wiKSk7XG5cbnZhciBfdjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y1LmpzXCIpKTtcblxudmFyIF9uaWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25pbC5qc1wiKSk7XG5cbnZhciBfdmVyc2lvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKSk7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKSk7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IG1kNTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgcmFuZG9tVVVJRFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG5mdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG52YXIgX2RlZmF1bHQgPSBzaGExO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxudmFyIF9kZWZhdWx0ID0gc3RyaW5naWZ5O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxubGV0IF9ub2RlSWQ7XG5cbmxldCBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbmxldCBfbGFzdE1TZWNzID0gMDtcbmxldCBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgbGV0IGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIGNvbnN0IGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxldCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGxldCBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICBsZXQgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIGxldCBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIGNvbnN0IGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgY29uc3QgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgY29uc3QgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGIpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2MTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG5cbnZhciBfbWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21kNS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHYzID0gKDAsIF92LmRlZmF1bHQpKCd2MycsIDB4MzAsIF9tZC5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IHYzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgY29uc3QgYnl0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5jb25zdCBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuRE5TID0gRE5TO1xuY29uc3QgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9IFVSTDtcblxuZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSAoMCwgX3BhcnNlLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfbmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uYXRpdmUuanNcIikpO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX3NoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2hhMS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHY1ID0gKDAsIF92LmRlZmF1bHQpKCd2NScsIDB4NTAsIF9zaGEuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2NTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZ2V4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZWdleC5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBfcmVnZXguZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2YWxpZGF0ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2ZXJzaW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il19
