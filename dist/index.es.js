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
exports["default"] = exports.JElementStyleProperty = exports.ContainerDefaultStyle = void 0;
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
// 支持的样式属性列表
var JElementStyleMap = /** @class */function (_super) {
  __extends(JElementStyleMap, _super);
  function JElementStyleMap() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return JElementStyleMap;
}(_eventemitter["default"]);
var _default = exports["default"] = JElementStyleMap; // 样式属性集合
var JElementStyleProperty = exports.JElementStyleProperty = /** @class */function (_super) {
  __extends(JElementStyleProperty, _super);
  function JElementStyleProperty() {
    var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
    _this.accentColor = '';
    _this.alignContent = '';
    _this.alignItems = '';
    _this.alignSelf = '';
    _this.alignmentBaseline = '';
    _this.all = '';
    _this.animation = '';
    _this.animationComposition = '';
    _this.animationDelay = '';
    _this.animationDirection = '';
    _this.animationDuration = '';
    _this.animationFillMode = '';
    _this.animationIterationCount = '';
    _this.animationName = '';
    _this.animationPlayState = '';
    _this.animationTimingFunction = '';
    _this.appearance = '';
    _this.aspectRatio = '';
    _this.backdropFilter = '';
    _this.backfaceVisibility = '';
    _this.background = '';
    _this.backgroundAttachment = '';
    _this.backgroundBlendMode = '';
    _this.backgroundClip = '';
    _this.backgroundColor = '';
    _this.backgroundImage = '';
    _this.backgroundOrigin = '';
    _this.backgroundPosition = '';
    _this.backgroundPositionX = '';
    _this.backgroundPositionY = '';
    _this.backgroundRepeat = '';
    _this.backgroundSize = '';
    _this.baselineShift = '';
    _this.blockSize = '';
    _this.border = '';
    _this.borderBlock = '';
    _this.borderBlockColor = '';
    _this.borderBlockEnd = '';
    _this.borderBlockEndColor = '';
    _this.borderBlockEndStyle = '';
    _this.borderBlockEndWidth = '';
    _this.borderBlockStart = '';
    _this.borderBlockStartColor = '';
    _this.borderBlockStartStyle = '';
    _this.borderBlockStartWidth = '';
    _this.borderBlockStyle = '';
    _this.borderBlockWidth = '';
    _this.borderBottom = '';
    _this.borderBottomColor = '';
    _this.borderBottomLeftRadius = '';
    _this.borderBottomRightRadius = '';
    _this.borderBottomStyle = '';
    _this.borderBottomWidth = '';
    _this.borderCollapse = '';
    _this.borderColor = '';
    _this.borderEndEndRadius = '';
    _this.borderEndStartRadius = '';
    _this.borderImage = '';
    _this.borderImageOutset = '';
    _this.borderImageRepeat = '';
    _this.borderImageSlice = '';
    _this.borderImageSource = '';
    _this.borderImageWidth = '';
    _this.borderInline = '';
    _this.borderInlineColor = '';
    _this.borderInlineEnd = '';
    _this.borderInlineEndColor = '';
    _this.borderInlineEndStyle = '';
    _this.borderInlineEndWidth = '';
    _this.borderInlineStart = '';
    _this.borderInlineStartColor = '';
    _this.borderInlineStartStyle = '';
    _this.borderInlineStartWidth = '';
    _this.borderInlineStyle = '';
    _this.borderInlineWidth = '';
    _this.borderLeft = '';
    _this.borderLeftColor = '';
    _this.borderLeftStyle = '';
    _this.borderLeftWidth = '';
    _this.borderRadius = '';
    _this.borderRight = '';
    _this.borderRightColor = '';
    _this.borderRightStyle = '';
    _this.borderRightWidth = '';
    _this.borderSpacing = '';
    _this.borderStartEndRadius = '';
    _this.borderStartStartRadius = '';
    _this.borderStyle = '';
    _this.borderTop = '';
    _this.borderTopColor = '';
    _this.borderTopLeftRadius = '';
    _this.borderTopRightRadius = '';
    _this.borderTopStyle = '';
    _this.borderTopWidth = '';
    _this.borderWidth = '';
    _this.bottom = '';
    _this.boxShadow = '';
    _this.boxSizing = '';
    _this.breakAfter = '';
    _this.breakBefore = '';
    _this.breakInside = '';
    _this.captionSide = '';
    _this.caretColor = '';
    _this.clear = '';
    _this.clip = '';
    _this.clipPath = '';
    _this.clipRule = '';
    _this.color = '';
    _this.colorInterpolation = '';
    _this.colorInterpolationFilters = '';
    _this.colorScheme = '';
    _this.columnCount = '';
    _this.columnFill = '';
    _this.columnGap = '';
    _this.columnRule = '';
    _this.columnRuleColor = '';
    _this.columnRuleStyle = '';
    _this.columnRuleWidth = '';
    _this.columnSpan = '';
    _this.columnWidth = '';
    _this.columns = '';
    _this.contain = '';
    _this.containIntrinsicBlockSize = '';
    _this.containIntrinsicHeight = '';
    _this.containIntrinsicInlineSize = '';
    _this.containIntrinsicSize = '';
    _this.containIntrinsicWidth = '';
    _this.container = '';
    _this.containerName = '';
    _this.containerType = '';
    _this.content = '';
    _this.counterIncrement = '';
    _this.counterReset = '';
    _this.counterSet = '';
    _this.cssFloat = '';
    _this.cssText = '';
    _this.cursor = '';
    _this.direction = '';
    _this.display = '';
    _this.dominantBaseline = '';
    _this.emptyCells = '';
    _this.fill = '';
    _this.fillOpacity = '';
    _this.fillRule = '';
    _this.filter = '';
    _this.flex = '';
    _this.flexBasis = '';
    _this.flexDirection = '';
    _this.flexFlow = '';
    _this.flexGrow = '';
    _this.flexShrink = '';
    _this.flexWrap = '';
    _this["float"] = '';
    _this.floodColor = '';
    _this.floodOpacity = '';
    _this.font = '';
    _this.fontFamily = '';
    _this.fontFeatureSettings = '';
    _this.fontKerning = '';
    _this.fontOpticalSizing = '';
    _this.fontPalette = '';
    _this.fontSize = '';
    _this.fontSizeAdjust = '';
    _this.fontStretch = '';
    _this.fontStyle = '';
    _this.fontSynthesis = '';
    _this.fontSynthesisSmallCaps = '';
    _this.fontSynthesisStyle = '';
    _this.fontSynthesisWeight = '';
    _this.fontVariant = '';
    _this.fontVariantAlternates = '';
    _this.fontVariantCaps = '';
    _this.fontVariantEastAsian = '';
    _this.fontVariantLigatures = '';
    _this.fontVariantNumeric = '';
    _this.fontVariantPosition = '';
    _this.fontVariationSettings = '';
    _this.fontWeight = '';
    _this.forcedColorAdjust = '';
    _this.gap = '';
    _this.grid = '';
    _this.gridArea = '';
    _this.gridAutoColumns = '';
    _this.gridAutoFlow = '';
    _this.gridAutoRows = '';
    _this.gridColumn = '';
    _this.gridColumnEnd = '';
    _this.gridColumnGap = '';
    _this.gridColumnStart = '';
    _this.gridGap = '';
    _this.gridRow = '';
    _this.gridRowEnd = '';
    _this.gridRowGap = '';
    _this.gridRowStart = '';
    _this.gridTemplate = '';
    _this.gridTemplateAreas = '';
    _this.gridTemplateColumns = '';
    _this.gridTemplateRows = '';
    _this.height = '';
    _this.hyphenateCharacter = '';
    _this.hyphens = '';
    _this.imageOrientation = '';
    _this.imageRendering = '';
    _this.inlineSize = '';
    _this.inset = '';
    _this.insetBlock = '';
    _this.insetBlockEnd = '';
    _this.insetBlockStart = '';
    _this.insetInline = '';
    _this.insetInlineEnd = '';
    _this.insetInlineStart = '';
    _this.isolation = '';
    _this.justifyContent = '';
    _this.justifyItems = '';
    _this.justifySelf = '';
    _this.left = '';
    _this.letterSpacing = '';
    _this.lightingColor = '';
    _this.lineBreak = '';
    _this.lineHeight = '';
    _this.listStyle = '';
    _this.listStyleImage = '';
    _this.listStylePosition = '';
    _this.listStyleType = '';
    _this.margin = '';
    _this.marginBlock = '';
    _this.marginBlockEnd = '';
    _this.marginBlockStart = '';
    _this.marginBottom = '';
    _this.marginInline = '';
    _this.marginInlineEnd = '';
    _this.marginInlineStart = '';
    _this.marginLeft = '';
    _this.marginRight = '';
    _this.marginTop = '';
    _this.marker = '';
    _this.markerEnd = '';
    _this.markerMid = '';
    _this.markerStart = '';
    _this.mask = '';
    _this.maskClip = '';
    _this.maskComposite = '';
    _this.maskImage = '';
    _this.maskMode = '';
    _this.maskOrigin = '';
    _this.maskPosition = '';
    _this.maskRepeat = '';
    _this.maskSize = '';
    _this.maskType = '';
    _this.mathStyle = '';
    _this.maxBlockSize = '';
    _this.maxHeight = '';
    _this.maxInlineSize = '';
    _this.maxWidth = '';
    _this.minBlockSize = '';
    _this.minHeight = '';
    _this.minInlineSize = '';
    _this.minWidth = '';
    _this.mixBlendMode = '';
    _this.objectFit = '';
    _this.objectPosition = '';
    _this.offset = '';
    _this.offsetDistance = '';
    _this.offsetPath = '';
    _this.offsetRotate = '';
    _this.opacity = '';
    _this.order = '';
    _this.orphans = '';
    _this.outline = '';
    _this.outlineColor = '';
    _this.outlineOffset = '';
    _this.outlineStyle = '';
    _this.outlineWidth = '';
    _this.overflow = '';
    _this.overflowAnchor = '';
    _this.overflowClipMargin = '';
    _this.overflowWrap = '';
    _this.overflowX = '';
    _this.overflowY = '';
    _this.overscrollBehavior = '';
    _this.overscrollBehaviorBlock = '';
    _this.overscrollBehaviorInline = '';
    _this.overscrollBehaviorX = '';
    _this.overscrollBehaviorY = '';
    _this.padding = '';
    _this.paddingBlock = '';
    _this.paddingBlockEnd = '';
    _this.paddingBlockStart = '';
    _this.paddingBottom = '';
    _this.paddingInline = '';
    _this.paddingInlineEnd = '';
    _this.paddingInlineStart = '';
    _this.paddingLeft = '';
    _this.paddingRight = '';
    _this.paddingTop = '';
    _this.page = '';
    _this.pageBreakAfter = '';
    _this.pageBreakBefore = '';
    _this.pageBreakInside = '';
    _this.paintOrder = '';
    _this.perspective = '';
    _this.perspectiveOrigin = '';
    _this.placeContent = '';
    _this.placeItems = '';
    _this.placeSelf = '';
    _this.pointerEvents = '';
    _this.position = '';
    _this.printColorAdjust = '';
    _this.quotes = '';
    _this.resize = '';
    _this.right = '';
    _this.rotate = '';
    _this.rowGap = '';
    _this.rubyPosition = '';
    _this.scale = '';
    _this.scrollBehavior = '';
    _this.scrollMargin = '';
    _this.scrollMarginBlock = '';
    _this.scrollMarginBlockEnd = '';
    _this.scrollMarginBlockStart = '';
    _this.scrollMarginBottom = '';
    _this.scrollMarginInline = '';
    _this.scrollMarginInlineEnd = '';
    _this.scrollMarginInlineStart = '';
    _this.scrollMarginLeft = '';
    _this.scrollMarginRight = '';
    _this.scrollMarginTop = '';
    _this.scrollPadding = '';
    _this.scrollPaddingBlock = '';
    _this.scrollPaddingBlockEnd = '';
    _this.scrollPaddingBlockStart = '';
    _this.scrollPaddingBottom = '';
    _this.scrollPaddingInline = '';
    _this.scrollPaddingInlineEnd = '';
    _this.scrollPaddingInlineStart = '';
    _this.scrollPaddingLeft = '';
    _this.scrollPaddingRight = '';
    _this.scrollPaddingTop = '';
    _this.scrollSnapAlign = '';
    _this.scrollSnapStop = '';
    _this.scrollSnapType = '';
    _this.scrollbarGutter = '';
    _this.shapeImageThreshold = '';
    _this.shapeMargin = '';
    _this.shapeOutside = '';
    _this.shapeRendering = '';
    _this.stopColor = '';
    _this.stopOpacity = '';
    _this.stroke = '';
    _this.strokeDasharray = '';
    _this.strokeDashoffset = '';
    _this.strokeLinecap = '';
    _this.strokeLinejoin = '';
    _this.strokeMiterlimit = '';
    _this.strokeOpacity = '';
    _this.strokeWidth = '';
    _this.tabSize = '';
    _this.tableLayout = '';
    _this.textAlign = '';
    _this.textAlignLast = '';
    _this.textAnchor = '';
    _this.textCombineUpright = '';
    _this.textDecoration = '';
    _this.textDecorationColor = '';
    _this.textDecorationLine = '';
    _this.textDecorationSkipInk = '';
    _this.textDecorationStyle = '';
    _this.textDecorationThickness = '';
    _this.textEmphasis = '';
    _this.textEmphasisColor = '';
    _this.textEmphasisPosition = '';
    _this.textEmphasisStyle = '';
    _this.textIndent = '';
    _this.textOrientation = '';
    _this.textOverflow = '';
    _this.textRendering = '';
    _this.textShadow = '';
    _this.textTransform = '';
    _this.textUnderlineOffset = '';
    _this.textUnderlinePosition = '';
    _this.top = '';
    _this.touchAction = '';
    _this.transform = '';
    _this.transformBox = '';
    _this.transformOrigin = '';
    _this.transformStyle = '';
    _this.transition = '';
    _this.transitionDelay = '';
    _this.transitionDuration = '';
    _this.transitionProperty = '';
    _this.transitionTimingFunction = '';
    _this.translate = '';
    _this.unicodeBidi = '';
    _this.userSelect = '';
    _this.verticalAlign = '';
    _this.visibility = '';
    _this.webkitAlignContent = '';
    _this.webkitAlignItems = '';
    _this.webkitAlignSelf = '';
    _this.webkitAnimation = '';
    _this.webkitAnimationDelay = '';
    _this.webkitAnimationDirection = '';
    _this.webkitAnimationDuration = '';
    _this.webkitAnimationFillMode = '';
    _this.webkitAnimationIterationCount = '';
    _this.webkitAnimationName = '';
    _this.webkitAnimationPlayState = '';
    _this.webkitAnimationTimingFunction = '';
    _this.webkitAppearance = '';
    _this.webkitBackfaceVisibility = '';
    _this.webkitBackgroundClip = '';
    _this.webkitBackgroundOrigin = '';
    _this.webkitBackgroundSize = '';
    _this.webkitBorderBottomLeftRadius = '';
    _this.webkitBorderBottomRightRadius = '';
    _this.webkitBorderRadius = '';
    _this.webkitBorderTopLeftRadius = '';
    _this.webkitBorderTopRightRadius = '';
    _this.webkitBoxAlign = '';
    _this.webkitBoxFlex = '';
    _this.webkitBoxOrdinalGroup = '';
    _this.webkitBoxOrient = '';
    _this.webkitBoxPack = '';
    _this.webkitBoxShadow = '';
    _this.webkitBoxSizing = '';
    _this.webkitFilter = '';
    _this.webkitFlex = '';
    _this.webkitFlexBasis = '';
    _this.webkitFlexDirection = '';
    _this.webkitFlexFlow = '';
    _this.webkitFlexGrow = '';
    _this.webkitFlexShrink = '';
    _this.webkitFlexWrap = '';
    _this.webkitJustifyContent = '';
    _this.webkitLineClamp = '';
    _this.webkitMask = '';
    _this.webkitMaskBoxImage = '';
    _this.webkitMaskBoxImageOutset = '';
    _this.webkitMaskBoxImageRepeat = '';
    _this.webkitMaskBoxImageSlice = '';
    _this.webkitMaskBoxImageSource = '';
    _this.webkitMaskBoxImageWidth = '';
    _this.webkitMaskClip = '';
    _this.webkitMaskComposite = '';
    _this.webkitMaskImage = '';
    _this.webkitMaskOrigin = '';
    _this.webkitMaskPosition = '';
    _this.webkitMaskRepeat = '';
    _this.webkitMaskSize = '';
    _this.webkitOrder = '';
    _this.webkitPerspective = '';
    _this.webkitPerspectiveOrigin = '';
    _this.webkitTextFillColor = '';
    _this.webkitTextSizeAdjust = '';
    _this.webkitTextStroke = '';
    _this.webkitTextStrokeColor = '';
    _this.webkitTextStrokeWidth = '';
    _this.webkitTransform = '';
    _this.webkitTransformOrigin = '';
    _this.webkitTransformStyle = '';
    _this.webkitTransition = '';
    _this.webkitTransitionDelay = '';
    _this.webkitTransitionDuration = '';
    _this.webkitTransitionProperty = '';
    _this.webkitTransitionTimingFunction = '';
    _this.webkitUserSelect = '';
    _this.whiteSpace = '';
    _this.widows = '';
    _this.width = '';
    _this.willChange = '';
    _this.wordBreak = '';
    _this.wordSpacing = '';
    _this.wordWrap = '';
    _this.writingMode = '';
    _this.zIndex = '';
    return _this;
  }
  return JElementStyleProperty;
}(JElementStyleMap);
// 最外层容器默认样式
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
    } else {
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

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styleMap = _interopRequireWildcard(require("../constant/styleMap"));
var _util = _interopRequireDefault(require("../lib/util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
  Object.defineProperty(JElementStyle.prototype, "names", {
    // 所有样式名称
    get: function get() {
      var e_1, _a;
      if (!StyleNamesMap.length) {
        var map = new _styleMap.JElementStyleProperty();
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
  // 把样式应用到元素或当前对象
  JElementStyle.prototype.apply = function (data, target) {
    var e_2, _a;
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
    var e_3, _a;
    var obj = {};
    try {
      for (var _b = __values(this.names), _c = _b.next(); !_c.done; _c = _b.next()) {
        var name_2 = _c.value;
        if (typeof this[name_2] === 'undefined') continue;
        obj[name_2] = this[name_2];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
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
    _this.shapes = {
      'image': _image["default"],
      'text': _text["default"]
    };
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
    _this.init(option);
    _this.bindEvent(_this.view.dom);
    return _this;
  }
  // 初始化整个编辑器
  JEditor.prototype.init = function (option) {
    var _this = this;
    if (option.style.containerBackgroundColor) this.dom.style.backgroundColor = option.style.containerBackgroundColor;
    // 生成控制器
    this.ElementController = new _controller["default"]({
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
      this.ElementController.onDragStart(e);
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
      this.ElementController.bind(el);
      // 选把所有已选择的取消
      this.selectedElements.every(function (p) {
        return p !== el && p.selected && (p.selected = false);
      });
    } else this.ElementController.unbind(el);
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
      self.ElementController.onDragStart(e);
    });
    return this.target.addChild(child);
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
    this.ElementController.visible = false;
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
  JEditor.prototype.regShape = function (name, shape) {
    if (this.shapes[name]) throw Error("\u5143\u7D20\u7C7B\u578B".concat(name, "\u5DF2\u7ECF\u5B58\u5728"));
    this.shapes[name] = shape;
  };
  // 创建元素
  JEditor.prototype.createShape = function (type, option) {
    if (option === void 0) {
      option = {};
    }
    var shape = typeof type === 'string' ? this.shapes[type] : type;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2NvbXBvbmVudHMvYmFzZS5qcyIsImRpc3QvY29tcG9uZW50cy9jb250cm9sbGVyLmpzIiwiZGlzdC9jb21wb25lbnRzL2ltYWdlLmpzIiwiZGlzdC9jb21wb25lbnRzL3RleHQuanMiLCJkaXN0L2NvbnN0YW50L3N0eWxlTWFwLmpzIiwiZGlzdC9jb25zdGFudC90cmFuc2Zvcm0uanMiLCJkaXN0L2NvcmUvZWxlbWVudC5qcyIsImRpc3QvY29yZS9ldmVudC5qcyIsImRpc3QvY29yZS9zdHlsZS5qcyIsImRpc3QvZWRpdG9yLmpzIiwiZGlzdC9pbmRleC5qcyIsImRpc3QvbGliL3V0aWwuanMiLCJub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L21kNS1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9uYXRpdmUtYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvbmlsLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9wYXJzZS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvcmVnZXguanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9zaGExLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdjEuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3YzLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC92MzUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3Y0LmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC92NS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdmFsaWRhdGUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3ZlcnNpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUMwQkEsSUFBQSxTQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsUUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUF1QyxTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUEzQnZDLElBQUksU0FBUyxHQUFJLFVBQVEsU0FBSyxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJLGNBQWEsR0FBRyxTQUFBLGNBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNoQyxjQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFDaEM7TUFBRSxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtNQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQztJQUFFLENBQUUsSUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUUsQ0FBQztJQUNyRyxPQUFPLGNBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFDRCxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNuQixJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUNyQyxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQztJQUM3RixjQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FB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QUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJLFlBQVksRUFBRSxTQUFBLGFBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7SUFDbEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDUixPQUFPLENBQUM7SUFDWixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDTDtRQUNKLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztNQUMzQztJQUNKLENBQUMsTUFDSTtNQUNELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7TUFDdkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztNQUN2QixDQUFDLENBQUMs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IENvbnRhaW5lckRlZmF1bHRTdHlsZSB9IGZyb20gJy4uL2NvbnN0YW50L3N0eWxlTWFwJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuLi9jb3JlL2VsZW1lbnQnO1xudmFyIEpCYXNlQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKQmFzZUNvbXBvbmVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKQmFzZUNvbXBvbmVudChvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gb3B0aW9uLnN0eWxlIHx8IHt9O1xuICAgICAgICAvLyBwb3NpdGlvbuWSjG92ZXJmbG936aKE6K6+55qE5YC85LyY5YWI57qn5pyA6auYXG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IE9iamVjdC5hc3NpZ24oX19hc3NpZ24oe30sIENvbnRhaW5lckRlZmF1bHRTdHlsZSksIG9wdGlvbi5zdHlsZSwge1xuICAgICAgICAgICAgcG9zaXRpb246IENvbnRhaW5lckRlZmF1bHRTdHlsZS5wb3NpdGlvbixcbiAgICAgICAgICAgIG92ZXJmbG93OiBDb250YWluZXJEZWZhdWx0U3R5bGUub3ZlcmZsb3dcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oeyBcbiAgICAgICAgICAgIC8vIOWkluWxguWPquWTjeW6lFrovbTml4vovaxcbiAgICAgICAgICAgIHRyYW5zZm9ybVdhdGNoUHJvcHM6IFtcbiAgICAgICAgICAgICAgICAncm90YXRlWicsICdzY2FsZVgnLCAnc2NhbGVZJ1xuICAgICAgICAgICAgXSB9LCBvcHRpb24pLCB7IG5vZGVUeXBlOiAnZGl2JywgY2xhc3NOYW1lOiAnai1kZXNpZ24tZWRpdG9yLWNvbnRhaW5lcicgfSkpIHx8IHRoaXM7XG4gICAgICAgIC8vIOmAieS4rVxuICAgICAgICBfdGhpcy5fc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgb3B0aW9uLnRhcmdldCA9IG9wdGlvbi50YXJnZXQgfHwge307XG4gICAgICAgIC8vIOeUn+aIkOW9k+WJjeaOp+WItueahOWFg+e0oFxuICAgICAgICBfdGhpcy50YXJnZXQgPSBuZXcgSkVsZW1lbnQoX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbiksIHsgXG4gICAgICAgICAgICAvLyDkuI3lk43lupTmnKzouqvnmoTlj5jmjaLvvIzlj6rlk43lupTniLbnuqfnmoRcbiAgICAgICAgICAgIHRyYW5zZm9ybVdhdGNoUHJvcHM6IFtdLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgX3RoaXMuYWRkQ2hpbGQoX3RoaXMudGFyZ2V0KTtcbiAgICAgICAgLy8g5Y+Y5o2i5pS55Li65o6n5Yi25Li75YWD57SgXG4gICAgICAgIF90aGlzLnRyYW5zZm9ybS5iaW5kKHtcbiAgICAgICAgICAgIHRhcmdldDogX3RoaXMudGFyZ2V0LFxuICAgICAgICAgICAgd2F0Y2hQcm9wczogW1xuICAgICAgICAgICAgICAgICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3NrZXdYJywgJ3NrZXdZJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5Yi35paw5qC35byPXG4gICAgICAgIF90aGlzLnN0eWxlLnJlZnJlc2goKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInNlbGVjdGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdjtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc2VsZWN0Jywgdik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDorr7nva5jc3PliLBkb21cbiAgICBKQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuc2V0RG9tU3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgLy8g5aaC5p6c5aSW5bGC5a655Zmo55qE5qC35byP77yM5YiZ5Yqg5YiwY29udGFpbmVy5LiKXG4gICAgICAgIGlmIChuYW1lIGluIENvbnRhaW5lckRlZmF1bHRTdHlsZSB8fCBuYW1lID09PSAndHJhbnNmb3JtJykge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXREb21TdHlsZS5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmNzcyhuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpCYXNlQ29tcG9uZW50LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSBbXTsgfVxuICAgICAgICAvLyDovaxqc29u5b+955Wl5riy5p+T57uE5Lu2XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnRvSlNPTi5jYWxsKHRoaXMsIHByb3BzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbCAhPT0gX3RoaXMudGFyZ2V0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBKQmFzZUNvbXBvbmVudDtcbn0oSkVsZW1lbnQpKTtcbmV4cG9ydCBkZWZhdWx0IEpCYXNlQ29tcG9uZW50O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi4vY29yZS9lbGVtZW50Jztcbi8vIOm8oOagh+aMh+mSiFxudmFyIEdDdXJzb3JzID0ge1xuICAgICdsJzogJ3ctcmVzaXplJyxcbiAgICAnbHQnOiAnbnctcmVzaXplJyxcbiAgICAndCc6ICduLXJlc2l6ZScsXG4gICAgJ3RyJzogJ25lLXJlc2l6ZScsXG4gICAgJ3InOiAnZS1yZXNpemUnLFxuICAgICdyYic6ICdzZS1yZXNpemUnLFxuICAgICdiJzogJ3MtcmVzaXplJyxcbiAgICAnbGInOiAnc3ctcmVzaXplJyxcbiAgICAncm90YXRlJzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFnVkJNVkVVQUFBQWlLOU1qS2RVZktOWWpLZFVpS05ZaUtkVWVIdUFqS05ZaktOWWlLTll5TXN3aUtOWWlLTllpS05ZaUtOWWhLTllpS2RVaUtOWWlLTllqS2RVaktOWWdKOWNqSmRZaUtOWWlLTllpS2RVaEo5Y2pLTllpS2RVZExOTXJLOU1pS05ZaUtOWWlLZFVpS05ZaktOWWpLZFVqS2RVaktOWWpLZFVqS2RVaktkYVVXN2VWQUFBQUtuUlNUbE1BRmRNWTEvdjRDUFhvNHdYdXlMaDZSZktSaldwQUp4eWtiMXRTVGpBUkM4T3NsWVZnT2l2UXJxZXk3Y2FxQUFBQk0wbEVRVlJJeCsyVTZXNkRNQkNFRGRTRSsyd2c5NTBlMy9zL1lHT0JRSTBoTWYrcUt2T0RIWXNaZTlkZXJYamgzMkMyUHNVK0JJY3lDdzNrVmhuUklVajN6L1R2RWNUcDFSR2l6czQyQkp2SCtrcVNiUHRsRmtQNTJMRmMzNTNvc2hDVE1NOHBKenBjaHV1d3JMRXM4ZmREZXM5elJod0gwZ0c5RGJZMWtoUitPS1FmZDloa3V2NE5icC9ockZJS1hlK0FOZWJJaUhXOWdKYm9kMmZoTjd6VHErU2hwYi8zVXVzUTJmR2V1TXc2cnRCdjF2eHJhWDlVZ05Od1BWMWwwTk9ObWJkTWQ3alVlbmtGcVJoenlLRXIzL0RaRU5OSERTT3VLcHEzelpsRUJmUEczRVZjVkRSdi9SWDVWa3pDQXY5amtpRk15TytHd0hiMWVPZ3Q0S3ZxMTA0aHZlckpJTXNoZWEvQ0c2MVgzeTZ5ZURiN25KTUh5Q2h3VlRpYTFMUzdIQU1KK01teU5wL2dPMmNtWHZqRCtBSHByaHBvSktpWVlBQUFBQUJKUlU1RXJrSmdnZz09JyxcbiAgICAnc2tldyc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQU1BQUFCZzNBbTFBQUFBZFZCTVZFVUFBQUJsWS85N2UvOWtZdjlrWS85blovOWxZLzlrWXY5a1kvOWtZdjlrWS85bFkvOWtZdjlrWS85cFlQOW9ZUDlrWXY5a1l2OWtZLzlrWXY5aVl2OW5ZLzlrWXY5bFl2OWtZdjlsWXY5bFkvOWtZdjlsWXY5a1kvOWtZdjlsWmY5bFkvOWtZdjlrWXY5bFl2OWtZdjlsWS85bFkvK2t0UU5SQUFBQUpuUlNUbE1BL0FUdjN4SG1XL1YwVHRPM2toY055OFhCVWg4VTZ0aStwcHQ1YmtzbkdUcXlnbU5FWjBjdHBkVUFBQUVtU1VSQlZFakg3VlBibG9Jd0RLU2xvQVVxRjZrZ2QxMjMvLytKYStqU1NwR3FENzR4YnluSnljeGtjRFpzK0JJT0FhMnlncmdJdWFRb0t4b2NiTjAzRm9vRlFuWjczdTFSSWxaUVVHL1p2enNKQzl6R2FPZVprRUFKYTlvdTl6RDI4cTV0V0lLRVJEWmIwa3Z1KzNNUW01dmo0THlYV2g3azQyUmNlL1ZXMUYxZCtKNWc5ZklMZGRtdjI5ZVgwUEdqNnZSZVJkaG1PSTd1TGFrcWdXVG5XTkdCUkZXQm83bDlJQWVScWdLR0Z6dWxDemlyanlaQXhHUmI2L3RITTJHUkVxMVZDN2VXdHZwQ29OM00xbnEwTlgzZ3dBdDlPQmlBQ2ZOd1pLYVNSeW9hVlNUMHhKQk4wVWpOTXpWRytOQ29nMHpobzB0UDRub2Vid0tQLzJ6cStMbDVBd3VOQVlwRXlJWlh2K2hKVTNJNGQxN2lpS1RvTjZGcy9XRGdnMzRkalEwYnZvNC9uYVl2Z3M4eG12d0FBQUFBU1VWT1JLNUNZSUk9J1xufTtcbi8vIOaOp+WItuWFg+e0oOenu+WKqOWSjOefqemYteWPmOaNolxudmFyIEpDb250cm9sbGVySXRlbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkNvbnRyb2xsZXJJdGVtLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpDb250cm9sbGVySXRlbShvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gb3B0aW9uLnN0eWxlIHx8IHt9O1xuICAgICAgICBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZic7XG4gICAgICAgIG9wdGlvbi5zdHlsZS5ib3JkZXIgPSBvcHRpb24uc3R5bGUuYm9yZGVyIHx8ICcxcHggc29saWQgcmdiYSg2LDE1NSwxODEsMSknO1xuICAgICAgICBvcHRpb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGlyID0gJyc7XG4gICAgICAgIF90aGlzLnNpemUgPSA4O1xuICAgICAgICBfdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8g5ouW5pS+5L2N572uXG4gICAgICAgIF90aGlzLmRyYWdTdGFydFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmRpciA9IG9wdGlvbi5kaXIgfHwgJyc7XG4gICAgICAgIF90aGlzLnNpemUgPSBvcHRpb24uc2l6ZSB8fCA4O1xuICAgICAgICBfdGhpcy5zdHlsZS5jdXJzb3IgPSBfdGhpcy5zdHlsZS5jdXJzb3IgfHwgR0N1cnNvcnNbX3RoaXMuZGlyXTtcbiAgICAgICAgX3RoaXMud2lkdGggPSBfdGhpcy5oZWlnaHQgPSBfdGhpcy5zaXplO1xuICAgICAgICBfdGhpcy5lZGl0b3IgPSBvcHRpb24uZWRpdG9yO1xuICAgICAgICBpZiAoX3RoaXMuZWRpdG9yKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBfdGhpcy5lZGl0b3Iudmlldy5vbignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25EcmFnRW5kKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBfdGhpcy5lZGl0b3Iudmlldy5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gX3RoaXMuZWRpdG9yLmRvbSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDkuI3mmK9vdXTnvJbovpHlmajvvIzkuI3lpITnkIZcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRyYWdFbmQoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIF90aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ01vdmUoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkNvbnRyb2xsZXJJdGVtLnByb3RvdHlwZSwgXCJpc01vdmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzTW92aW5nO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLl9pc01vdmluZyA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLm9uRHJhZ01vdmUgPSBmdW5jdGlvbiAoZXZlbnQsIHBvcykge1xuICAgICAgICBpZiAocG9zID09PSB2b2lkIDApIHsgcG9zID0gZXZlbnQ7IH1cbiAgICAgICAgaWYgKCF0aGlzLmlzTW92aW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgb2ZmWCA9IChwb3MueCAtIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24ueCk7XG4gICAgICAgIHZhciBvZmZZID0gKHBvcy55IC0gdGhpcy5kcmFnU3RhcnRQb3NpdGlvbi55KTtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBkaXI6IHRoaXMuZGlyLFxuICAgICAgICAgICAgb2ZmWDogb2ZmWCxcbiAgICAgICAgICAgIG9mZlk6IG9mZlksXG4gICAgICAgICAgICBvbGRQb3NpdGlvbjogdGhpcy5kcmFnU3RhcnRQb3NpdGlvbixcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgeDogcG9zLngsXG4gICAgICAgICAgICAgICAgeTogcG9zLnlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudDogZXZlbnRcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOmAieS4reeahOaYr+a4suafk+WxgueahOWdkOagh++8jOi9rOS4uuaOp+WItuWxgueahFxuICAgICAgICB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnggPSBwb3MueDtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbi55ID0gcG9zLnk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgSkNvbnRyb2xsZXJJdGVtLnByb3RvdHlwZS5vbkRyYWdTdGFydCA9IGZ1bmN0aW9uIChldmVudCwgcG9zKSB7XG4gICAgICAgIGlmIChwb3MgPT09IHZvaWQgMCkgeyBwb3MgPSBldmVudDsgfVxuICAgICAgICAvLyDpgInkuK3nmoTmmK/muLLmn5PlsYLnmoTlnZDmoIfvvIzovazkuLrmjqfliLblsYLnmoRcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHBvcy54LFxuICAgICAgICAgICAgeTogcG9zLnksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLm9uRHJhZ0VuZCA9IGZ1bmN0aW9uIChldmVudCwgcG9zKSB7XG4gICAgICAgIGlmIChwb3MgPT09IHZvaWQgMCkgeyBwb3MgPSBldmVudDsgfVxuICAgICAgICBpZiAodGhpcy5pc01vdmluZykge1xuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDorqHnrpfmjIfpkohcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLnJlc2V0Q3Vyc29yID0gZnVuY3Rpb24gKHJvdGF0aW9uKSB7XG4gICAgICAgIC8vIOWFiOeugOWNleWkhOeQhlxuICAgICAgICBpZiAoIXJvdGF0aW9uIHx8IChyb3RhdGlvbiA+IC1NYXRoLlBJIC8gNiAmJiByb3RhdGlvbiA8IE1hdGguUEkgLyA2KSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBHQ3Vyc29yc1t0aGlzLmRpcl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEpDb250cm9sbGVySXRlbTtcbn0oSkVsZW1lbnQpKTtcbmV4cG9ydCB7IEpDb250cm9sbGVySXRlbSB9O1xuLy8g5YWD57Sg5aSn5bCP5L2N572u5o6n5Yi25ZmoXG52YXIgSkNvbnRyb2xsZXJDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpDb250cm9sbGVyQ29tcG9uZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpDb250cm9sbGVyQ29tcG9uZW50KG9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb24uekluZGV4ID0gMTAwMDAwO1xuICAgICAgICBvcHRpb24uc3R5bGUgPSBvcHRpb24uc3R5bGUgfHwge307XG4gICAgICAgIG9wdGlvbi5zdHlsZS5jdXJzb3IgPSBvcHRpb24uc3R5bGUuY3Vyc29yIHx8ICdtb3ZlJztcbiAgICAgICAgb3B0aW9uLmRpciA9ICdlbGVtZW50JztcbiAgICAgICAgb3B0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgICAgLy9vcHRpb24uc3R5bGUuYm94U2hhZG93ID0gJzAgMCAycHggMnB4ICNjY2MnO1xuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgLy8g6YCJ5oup5qGG6L656LedXG4gICAgICAgIF90aGlzLnBhZGRpbmdTaXplID0gMTtcbiAgICAgICAgX3RoaXMuaXNFZGl0b3IgPSBmYWxzZTsgLy8g5b2T5YmN5YWz6IGU5piv5ZCm5piv57yW6L6R5ZmoXG4gICAgICAgIF90aGlzLmluaXQob3B0aW9uKTtcbiAgICAgICAgLy8gaHRtbDJjYW52YXPkuI3muLLmn5NcbiAgICAgICAgX3RoaXMuYXR0cignZGF0YS1odG1sMmNhbnZhcy1pZ25vcmUnLCAndHJ1ZScpO1xuICAgICAgICBfdGhpcy5lZGl0b3IuZG9tLmFwcGVuZENoaWxkKF90aGlzLmRvbSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgnbCcsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6IDAsIHRvcDogJzUwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2x0Jywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogMCwgdG9wOiAwIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCd0Jywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogJzUwJScsIHRvcDogMCB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgndHInLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnMTAwJScsIHRvcDogMCB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgncicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6ICcxMDAlJywgdG9wOiAnNTAlJyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgncmInLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnMTAwJScsIHRvcDogJzEwMCUnIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdiJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogJzUwJScsIHRvcDogJzEwMCUnIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdsYicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6IDAsIHRvcDogJzEwMCUnIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5peL6L2s5Z2XXG4gICAgICAgIHRoaXMucm90YXRlSXRlbSA9IHRoaXMuY3JlYXRlSXRlbSgncm90YXRlJywge1xuICAgICAgICAgICAgc2hhcGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgc2l6ZTogMjQsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oeyBsZWZ0OiAnNTAlJywgdG9wOiAnLTQwcHgnLCBcbiAgICAgICAgICAgICAgICAvL2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJywgYm94U2hhZG93OiAnMCAwIDJweCAycHggI2NjYycsIGJvcmRlclJhZGl1czogJzUwJScsIGN1cnNvcjogXCJwb2ludGVyXCIgfSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgJ2JhY2tncm91bmRTaXplJzogJzEwMCUnLCBiYWNrZ3JvdW5kSW1hZ2U6IEdDdXJzb3JzLnJvdGF0ZSB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2tld0l0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0oJ3NrZXcnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICBzaXplOiAyNCxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7IGxlZnQ6ICc1MCUnLCB0b3A6ICc1MCUnLCBib3JkZXI6ICdub25lJywgYm94U2hhZG93OiAnMCAwIDJweCAycHggI2NjYycsIGJvcmRlclJhZGl1czogJzUwJScsIGN1cnNvcjogXCJwb2ludGVyXCIgfSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgJ2JhY2tncm91bmRTaXplJzogJzEwMCUnLCBiYWNrZ3JvdW5kSW1hZ2U6IEdDdXJzb3JzLnNrZXcgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyAvLyDml4vovazlnZcgXG4gICAgICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5lZGl0b3Iub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5pc0VkaXRvcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDkuI3mmK/nvJbovpHlmajvvIzkuI3lpITnkIZcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRyYWdTdGFydChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5jaGFuZ2UoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g55Sf5oiQ5o6n5Yi254K5XG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLmNyZWF0ZUl0ZW0gPSBmdW5jdGlvbiAoaWQsIG9wdGlvbikge1xuICAgICAgICB2YXIgaXRlbSA9IG5ldyBKQ29udHJvbGxlckl0ZW0oX19hc3NpZ24oeyBkaXI6IGlkLCBlZGl0b3I6IHRoaXMuZWRpdG9yIH0sIG9wdGlvbikpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaXRlbS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlKGUpO1xuICAgICAgICAgICAgLy8g6YeN572u5oyH6ZKIXG4gICAgICAgICAgICB0aGlzLnJlc2V0Q3Vyc29yKHNlbGYudHJhbnNmb3JtLnJvdGF0ZVopO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcbiAgICAvLyDlj5HnlJ/mlLnlj5jlk43lupRcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGRpciA9IGUuZGlyLCBvZmZYID0gZS5vZmZYLCBvZmZZID0gZS5vZmZZO1xuICAgICAgICAvLyDlvZPliY3np7vliqjlr7nljp/lr7nosaHnmoTmlLnlj5hcbiAgICAgICAgdmFyIGFyZ3MgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgICAgICBza2V3OiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdyb3RhdGUnKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZUNoYW5nZShlLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXIgPT09ICdlbGVtZW50Jykge1xuICAgICAgICAgICAgLy8g5YWD57Sg5L2N572u5o6n5Yi25ZmoXG4gICAgICAgICAgICBhcmdzLnggPSBvZmZYO1xuICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWFiOWbnuWOn+WdkOagh++8jOWGjeS4u+eul+WBj+enu+mHj++8jOi/meagt+S/neivgeaTjeS9nOabtOWuueaYk+eQhuino1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5nZXRSb3RhdGVFdmVudFBvc2l0aW9uKGUpO1xuICAgICAgICAgICAgICAgIG9mZlggPSBwb3Mub2ZmWDtcbiAgICAgICAgICAgICAgICBvZmZZID0gcG9zLm9mZlk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2wnOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3QnOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueSA9IG9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdyJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2InOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2x0Jzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gLW9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueSA9IG9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICd0cic6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueSA9IG9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdyYic6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2xiJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gLW9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3NrZXcnOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByeCA9IG9mZlggLyB1dGlsLnRvTnVtYmVyKHRoaXMud2lkdGgpICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ5ID0gb2ZmWSAvIHV0aWwudG9OdW1iZXIodGhpcy5oZWlnaHQpICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5za2V3LnggPSByeTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5za2V3LnkgPSByeDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOS9jeenu1xuICAgICAgICBpZiAoYXJncy54IHx8IGFyZ3MueSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGFyZ3MueCwgYXJncy55KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy53aWR0aCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdXRpbC50b051bWJlcih0aGlzLndpZHRoKSArIGFyZ3Mud2lkdGg7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5tYXgod2lkdGgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1heCh1dGlsLnRvTnVtYmVyKHRoaXMuaGVpZ2h0KSArIGFyZ3MuaGVpZ2h0LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB4LHnml4vovaxcbiAgICAgICAgaWYgKGFyZ3Muc2tldy54IHx8IGFyZ3Muc2tldy55KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50cmFuc2Zvcm0ucm90YXRlWCArPSBhcmdzLnNrZXcueDtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVZICs9IGFyZ3Muc2tldy55O1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtLmFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcHBseVRvVGFyZ2V0KCk7XG4gICAgfTtcbiAgICAvLyDlm6DkuLrml4vovazlkI7lnZDmoIfopoHlm57ljp/miY3lpb3orqHnrpfmk43kvZzvvIxcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuZ2V0Um90YXRlRXZlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBvZmZYID0gZS5vZmZYLCBvZmZZID0gZS5vZmZZLCBvbGRQb3NpdGlvbiA9IGUub2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uID0gZS5uZXdQb3NpdGlvbjtcbiAgICAgICAgLy8g5YWI5Zue5Y6f5Z2Q5qCH77yM5YaN5Li7566X5YGP56e76YeP77yM6L+Z5qC35L+d6K+B5pON5L2c5pu05a655piT55CG6KejXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybS5yb3RhdGVaKSB7XG4gICAgICAgICAgICB2YXIgY2VudGVyID0ge1xuICAgICAgICAgICAgICAgIHg6IHV0aWwudG9OdW1iZXIodGhpcy5sZWZ0KSArIHV0aWwudG9OdW1iZXIodGhpcy53aWR0aCkgLyAyLFxuICAgICAgICAgICAgICAgIHk6IHV0aWwudG9OdW1iZXIodGhpcy50b3ApICsgdXRpbC50b051bWJlcih0aGlzLmhlaWdodCkgLyAyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBfYSA9IF9fcmVhZCh1dGlsLnJvdGF0ZVBvaW50cyhbb2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uXSwgY2VudGVyLCAtdGhpcy50cmFuc2Zvcm0ucm90YXRlWiksIDIpLCBwb3MxID0gX2FbMF0sIHBvczIgPSBfYVsxXTtcbiAgICAgICAgICAgIG9mZlggPSBwb3MyLnggLSBwb3MxLng7XG4gICAgICAgICAgICBvZmZZID0gcG9zMi55IC0gcG9zMS55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZYOiBvZmZYLFxuICAgICAgICAgICAgb2ZmWTogb2ZmWVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLy8g5Y+R55Sf5peL6L2sXG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLnJvdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChlLCBhcmdzKSB7XG4gICAgICAgIHZhciBvbGRQb3NpdGlvbiA9IGUub2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uID0gZS5uZXdQb3NpdGlvbjtcbiAgICAgICAgdmFyIGNlbnRlciA9IHtcbiAgICAgICAgICAgIHg6IHV0aWwudG9OdW1iZXIodGhpcy5sZWZ0KSArIHV0aWwudG9OdW1iZXIodGhpcy53aWR0aCkgLyAyLFxuICAgICAgICAgICAgeTogdXRpbC50b051bWJlcih0aGlzLnRvcCkgKyB1dGlsLnRvTnVtYmVyKHRoaXMuaGVpZ2h0KSAvIDIsXG4gICAgICAgIH07XG4gICAgICAgIC8vIOe8lui+keWZqOWdkOagh1xuICAgICAgICB2YXIgcG9zMSA9IHV0aWwudG9Eb21Qb3NpdGlvbihvbGRQb3NpdGlvbiwgdGhpcy5lZGl0b3IuZG9tKTtcbiAgICAgICAgdmFyIHBvczIgPSB1dGlsLnRvRG9tUG9zaXRpb24obmV3UG9zaXRpb24sIHRoaXMuZWRpdG9yLmRvbSk7XG4gICAgICAgIC8vIOWboOS4umNlbnRlcuaYr+ebuOWvueS6jue8lui+keWZqOeahO+8jOaJgOS7peS6i+S7tuWdkOagh+S5n+mcgOimgei9rOWIsOe8lui+keWZqFxuICAgICAgICB2YXIgY3gxID0gcG9zMS54IC0gY2VudGVyLng7XG4gICAgICAgIHZhciBjeTEgPSBwb3MxLnkgLSBjZW50ZXIueTtcbiAgICAgICAgdmFyIGFuZ2xlMSA9IE1hdGguYXRhbihjeTEgLyBjeDEpO1xuICAgICAgICB2YXIgY3gyID0gcG9zMi54IC0gY2VudGVyLng7XG4gICAgICAgIHZhciBjeTIgPSBwb3MyLnkgLSBjZW50ZXIueTtcbiAgICAgICAgdmFyIGFuZ2xlMiA9IE1hdGguYXRhbihjeTIgLyBjeDIpO1xuICAgICAgICBpZiAoYW5nbGUxID49IDAgJiYgYW5nbGUyIDwgMCkge1xuICAgICAgICAgICAgaWYgKGN4MSA+PSAwICYmIGN5MSA+PSAwICYmIGN4MiA8PSAwICYmIGN5MiA+PSAwKVxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IE1hdGguUEkgKyBhbmdsZTI7XG4gICAgICAgICAgICBlbHNlIGlmIChjeDEgPD0gMCAmJiBjeTEgPD0gMCAmJiBjeDIgPj0gMCAmJiBjeTIgPD0gMClcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSBNYXRoLlBJICsgYW5nbGUyO1xuICAgICAgICAgICAgLy9lbHNlIGlmKGN4MSA8PSAwICYmIGN5MSA8PTAgJiYgY3gyID49IDAgJiYgY3kyID49IDApIGFuZ2xlMiA9IE1hdGguUEkgKyBhbmdsZTI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYW5nbGUxIDw9IDAgJiYgYW5nbGUyID49IDApIHtcbiAgICAgICAgICAgIGlmIChjeDEgPj0gMCAmJiBjeTEgPD0gMCAmJiBjeDIgPCAwKVxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IGFuZ2xlMiAtIE1hdGguUEk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gLWFuZ2xlMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbmdsZTEgPj0gMCAmJiBhbmdsZTIgPiAwKSB7XG4gICAgICAgICAgICAvL2lmKGN5MiA9PT0gMCkgYW5nbGUyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBhcmdzLnJvdGF0aW9uID0gYW5nbGUyIC0gYW5nbGUxO1xuICAgICAgICBpZiAoYXJncy5yb3RhdGlvbikge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ucm90YXRlWiArPSBhcmdzLnJvdGF0aW9uO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g5oqK5Y+Y5o2i5bqU55So5Yiw55uu5qCH5YWD57SgXG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLmFwcGx5VG9UYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICB4OiB1dGlsLnRvTnVtYmVyKHRoaXMubGVmdCkgKyAodGhpcy5pc0VkaXRvciA/IHV0aWwudG9OdW1iZXIodGhpcy50YXJnZXQubGVmdCkgOiAwKSxcbiAgICAgICAgICAgIHk6IHV0aWwudG9OdW1iZXIodGhpcy50b3ApICsgKHRoaXMuaXNFZGl0b3IgPyB1dGlsLnRvTnVtYmVyKHRoaXMudGFyZ2V0LnRvcCkgOiAwKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhcmdldC5sZWZ0ID0gcG9zLng7XG4gICAgICAgIHRoaXMudGFyZ2V0LnRvcCA9IHBvcy55O1xuICAgICAgICAvLyDnvJbovpHlmajnm7jlr7nkvY3nva7kuIDnm7TmmK8wXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSAwO1xuICAgICAgICAgICAgdGhpcy50b3AgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5mcm9tKHtcbiAgICAgICAgICAgIC8vc2tld1g6IHRoaXMudHJhbnNmb3JtLnNrZXdYLFxuICAgICAgICAgICAgLy9za2V3WTogdGhpcy50cmFuc2Zvcm0uc2tld1ksXG4gICAgICAgICAgICByb3RhdGVaOiB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHdpZHRoID0gdXRpbC50b051bWJlcih0aGlzLndpZHRoKSAtIHRoaXMucGFkZGluZ1NpemUgKiAyO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdXRpbC50b051bWJlcih0aGlzLmhlaWdodCkgLSB0aGlzLnBhZGRpbmdTaXplICogMjtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LndpZHRoICE9PSB3aWR0aClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5oZWlnaHQgIT09IGhlaWdodClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9O1xuICAgIC8vIOmHjee9rlxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChpc0VkaXRvcikge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKGlzRWRpdG9yID09PSB2b2lkIDApIHsgaXNFZGl0b3IgPSB0aGlzLmlzRWRpdG9yOyB9XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgZGVsZXRlIHRoaXMudGFyZ2V0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8g57yW6L6R5Zmo5LiN6K6p5peL6L2s5ZKMc2tld1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLml0ZW1zKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaXRlbS5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9ICFpc0VkaXRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNmb3JtLmZyb20oe1xuICAgICAgICAgICAgcm90YXRlWjogMCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDnu5HlrprliLDmk43kvZznmoTlr7nosaFcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5pc0VkaXRvciA9IHRhcmdldCA9PT0gdGhpcy5lZGl0b3I7XG4gICAgICAgIHRoaXMucmVzZXQodGhpcy5pc0VkaXRvcik7XG4gICAgICAgIC8vIOe8lui+keWZqOeahOivne+8jOmcgOimgeaKiuWug+eahOWdkOagh+i9rOS4uuebuOWvueS6juWuueWZqOeahFxuICAgICAgICB2YXIgcG9zID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuaXNFZGl0b3IgPyAwIDogdXRpbC50b051bWJlcih0YXJnZXQubGVmdCkpLFxuICAgICAgICAgICAgeTogKHRoaXMuaXNFZGl0b3IgPyAwIDogdXRpbC50b051bWJlcih0YXJnZXQudG9wKSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gcG9zLng7XG4gICAgICAgIHRoaXMudG9wID0gcG9zLnk7XG4gICAgICAgIHRoaXMud2lkdGggPSB1dGlsLnRvTnVtYmVyKHRhcmdldC53aWR0aCkgKyB0aGlzLnBhZGRpbmdTaXplICogMjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB1dGlsLnRvTnVtYmVyKHRhcmdldC5oZWlnaHQpICsgdGhpcy5wYWRkaW5nU2l6ZSAqIDI7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtLmZyb20oe1xuICAgICAgICAgICAgLy8gcm90YXRlWDogdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVYLFxuICAgICAgICAgICAgLy8gcm90YXRlWTogdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVZLFxuICAgICAgICAgICAgcm90YXRlWjogdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVaLFxuICAgICAgICAgICAgLy9zY2FsZVg6IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVYLFxuICAgICAgICAgICAgLy9zY2FsZVk6IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVZLFxuICAgICAgICAgICAgLy9zY2FsZVo6IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVaLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vIOWmguaenOaYr+e8lui+keWZqO+8jOWImeS4jeiDveaNleiOt+S6i+S7tlxuICAgICAgICB0aGlzLmNzcyh7XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiB0aGlzLmlzRWRpdG9yID8gJ25vbmUnIDogJ2F1dG8nXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g6Kej6Zmk57uR5a6aXG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSkNvbnRyb2xsZXJDb21wb25lbnQ7XG59KEpDb250cm9sbGVySXRlbSkpO1xuZXhwb3J0IGRlZmF1bHQgSkNvbnRyb2xsZXJDb21wb25lbnQ7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG52YXIgSkltYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKSW1hZ2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkltYWdlKG9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uKSwgeyBub2RlVHlwZTogJ2ltZycgfSkpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnRhcmdldC5kb20ub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ2xvYWQnLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMudGFyZ2V0LmRvbS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywgZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnRhcmdldC5hdHRyKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKTtcbiAgICAgICAgX3RoaXMuc3JjID0gb3B0aW9uLnVybCB8fCBvcHRpb24uc3JjIHx8ICcnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKSW1hZ2UucHJvdG90eXBlLCBcInNyY1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmRvbS5zcmM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmRvbS5zcmMgPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgSkltYWdlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSBbXTsgfVxuICAgICAgICBwcm9wcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudG9KU09OLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIH07XG4gICAgcmV0dXJuIEpJbWFnZTtcbn0oQmFzZSkpO1xuZXhwb3J0IGRlZmF1bHQgSkltYWdlO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xudmFyIEpUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKVGV4dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKVGV4dChvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbiksIHsgbm9kZVR5cGU6ICdkaXYnIH0pKSB8fCB0aGlzO1xuICAgICAgICBpZiAob3B0aW9uLnRleHQpXG4gICAgICAgICAgICBfdGhpcy50ZXh0ID0gb3B0aW9uLnRleHQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpUZXh0LnByb3RvdHlwZSwgXCJ0ZXh0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQuZG9tLmlubmVyVGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuZG9tLmlubmVyVGV4dCA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBKVGV4dC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7IHByb3BzID0gW107IH1cbiAgICAgICAgcHJvcHMucHVzaCgndGV4dCcpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS50b0pTT04uY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgfTtcbiAgICByZXR1cm4gSlRleHQ7XG59KEJhc2UpKTtcbmV4cG9ydCBkZWZhdWx0IEpUZXh0O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCBFdmVudEVtaXRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbi8vIOaUr+aMgeeahOagt+W8j+WxnuaAp+WIl+ihqFxudmFyIEpFbGVtZW50U3R5bGVNYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFbGVtZW50U3R5bGVNYXAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnRTdHlsZU1hcCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSkVsZW1lbnRTdHlsZU1hcDtcbn0oRXZlbnRFbWl0ZXIpKTtcbmV4cG9ydCBkZWZhdWx0IEpFbGVtZW50U3R5bGVNYXA7XG4vLyDmoLflvI/lsZ7mgKfpm4blkIhcbnZhciBKRWxlbWVudFN0eWxlUHJvcGVydHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFbGVtZW50U3R5bGVQcm9wZXJ0eSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWxlbWVudFN0eWxlUHJvcGVydHkoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYXJndW1lbnRzKSwgZmFsc2UpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY2NlbnRDb2xvciA9ICcnO1xuICAgICAgICBfdGhpcy5hbGlnbkNvbnRlbnQgPSAnJztcbiAgICAgICAgX3RoaXMuYWxpZ25JdGVtcyA9ICcnO1xuICAgICAgICBfdGhpcy5hbGlnblNlbGYgPSAnJztcbiAgICAgICAgX3RoaXMuYWxpZ25tZW50QmFzZWxpbmUgPSAnJztcbiAgICAgICAgX3RoaXMuYWxsID0gJyc7XG4gICAgICAgIF90aGlzLmFuaW1hdGlvbiA9ICcnO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25Db21wb3NpdGlvbiA9ICcnO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25EZWxheSA9ICcnO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25EaXJlY3Rpb24gPSAnJztcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uRmlsbE1vZGUgPSAnJztcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSAnJztcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uTmFtZSA9ICcnO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25QbGF5U3RhdGUgPSAnJztcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSAnJztcbiAgICAgICAgX3RoaXMuYXBwZWFyYW5jZSA9ICcnO1xuICAgICAgICBfdGhpcy5hc3BlY3RSYXRpbyA9ICcnO1xuICAgICAgICBfdGhpcy5iYWNrZHJvcEZpbHRlciA9ICcnO1xuICAgICAgICBfdGhpcy5iYWNrZmFjZVZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kQXR0YWNobWVudCA9ICcnO1xuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kQmxlbmRNb2RlID0gJyc7XG4gICAgICAgIF90aGlzLmJhY2tncm91bmRDbGlwID0gJyc7XG4gICAgICAgIF90aGlzLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZE9yaWdpbiA9ICcnO1xuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZFBvc2l0aW9uWCA9ICcnO1xuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gJyc7XG4gICAgICAgIF90aGlzLmJhY2tncm91bmRSZXBlYXQgPSAnJztcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZFNpemUgPSAnJztcbiAgICAgICAgX3RoaXMuYmFzZWxpbmVTaGlmdCA9ICcnO1xuICAgICAgICBfdGhpcy5ibG9ja1NpemUgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckJsb2NrID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckJsb2NrQ29sb3IgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyQmxvY2tFbmQgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyQmxvY2tFbmRDb2xvciA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJCbG9ja0VuZFN0eWxlID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckJsb2NrRW5kV2lkdGggPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJCbG9ja1N0YXJ0Q29sb3IgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyQmxvY2tTdGFydFN0eWxlID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckJsb2NrU3RhcnRXaWR0aCA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJCbG9ja1N0eWxlID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckJsb2NrV2lkdGggPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyQm90dG9tID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckJvdHRvbUNvbG9yID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyQm90dG9tU3R5bGUgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyQm90dG9tV2lkdGggPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyQ29sbGFwc2UgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyQ29sb3IgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyRW5kRW5kUmFkaXVzID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckVuZFN0YXJ0UmFkaXVzID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckltYWdlID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckltYWdlT3V0c2V0ID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckltYWdlUmVwZWF0ID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckltYWdlU2xpY2UgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVySW1hZ2VTb3VyY2UgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVySW1hZ2VXaWR0aCA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJJbmxpbmUgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVySW5saW5lQ29sb3IgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVySW5saW5lRW5kID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlcklubGluZUVuZENvbG9yID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlcklubGluZUVuZFN0eWxlID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlcklubGluZUVuZFdpZHRoID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlcklubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlcklubGluZVN0YXJ0Q29sb3IgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVySW5saW5lU3RhcnRTdHlsZSA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJJbmxpbmVTdGFydFdpZHRoID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlcklubGluZVN0eWxlID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlcklubGluZVdpZHRoID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckxlZnQgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyTGVmdENvbG9yID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlckxlZnRTdHlsZSA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJMZWZ0V2lkdGggPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyUmFkaXVzID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlclJpZ2h0ID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyUmlnaHRTdHlsZSA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJSaWdodFdpZHRoID0gJyc7XG4gICAgICAgIF90aGlzLmJvcmRlclNwYWNpbmcgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyU3RhcnRFbmRSYWRpdXMgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyU3RhcnRTdGFydFJhZGl1cyA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJTdHlsZSA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJUb3AgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyVG9wQ29sb3IgPSAnJztcbiAgICAgICAgX3RoaXMuYm9yZGVyVG9wTGVmdFJhZGl1cyA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJUb3BSaWdodFJhZGl1cyA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJUb3BTdHlsZSA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJUb3BXaWR0aCA9ICcnO1xuICAgICAgICBfdGhpcy5ib3JkZXJXaWR0aCA9ICcnO1xuICAgICAgICBfdGhpcy5ib3R0b20gPSAnJztcbiAgICAgICAgX3RoaXMuYm94U2hhZG93ID0gJyc7XG4gICAgICAgIF90aGlzLmJveFNpemluZyA9ICcnO1xuICAgICAgICBfdGhpcy5icmVha0FmdGVyID0gJyc7XG4gICAgICAgIF90aGlzLmJyZWFrQmVmb3JlID0gJyc7XG4gICAgICAgIF90aGlzLmJyZWFrSW5zaWRlID0gJyc7XG4gICAgICAgIF90aGlzLmNhcHRpb25TaWRlID0gJyc7XG4gICAgICAgIF90aGlzLmNhcmV0Q29sb3IgPSAnJztcbiAgICAgICAgX3RoaXMuY2xlYXIgPSAnJztcbiAgICAgICAgX3RoaXMuY2xpcCA9ICcnO1xuICAgICAgICBfdGhpcy5jbGlwUGF0aCA9ICcnO1xuICAgICAgICBfdGhpcy5jbGlwUnVsZSA9ICcnO1xuICAgICAgICBfdGhpcy5jb2xvciA9ICcnO1xuICAgICAgICBfdGhpcy5jb2xvckludGVycG9sYXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMuY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycyA9ICcnO1xuICAgICAgICBfdGhpcy5jb2xvclNjaGVtZSA9ICcnO1xuICAgICAgICBfdGhpcy5jb2x1bW5Db3VudCA9ICcnO1xuICAgICAgICBfdGhpcy5jb2x1bW5GaWxsID0gJyc7XG4gICAgICAgIF90aGlzLmNvbHVtbkdhcCA9ICcnO1xuICAgICAgICBfdGhpcy5jb2x1bW5SdWxlID0gJyc7XG4gICAgICAgIF90aGlzLmNvbHVtblJ1bGVDb2xvciA9ICcnO1xuICAgICAgICBfdGhpcy5jb2x1bW5SdWxlU3R5bGUgPSAnJztcbiAgICAgICAgX3RoaXMuY29sdW1uUnVsZVdpZHRoID0gJyc7XG4gICAgICAgIF90aGlzLmNvbHVtblNwYW4gPSAnJztcbiAgICAgICAgX3RoaXMuY29sdW1uV2lkdGggPSAnJztcbiAgICAgICAgX3RoaXMuY29sdW1ucyA9ICcnO1xuICAgICAgICBfdGhpcy5jb250YWluID0gJyc7XG4gICAgICAgIF90aGlzLmNvbnRhaW5JbnRyaW5zaWNCbG9ja1NpemUgPSAnJztcbiAgICAgICAgX3RoaXMuY29udGFpbkludHJpbnNpY0hlaWdodCA9ICcnO1xuICAgICAgICBfdGhpcy5jb250YWluSW50cmluc2ljSW5saW5lU2l6ZSA9ICcnO1xuICAgICAgICBfdGhpcy5jb250YWluSW50cmluc2ljU2l6ZSA9ICcnO1xuICAgICAgICBfdGhpcy5jb250YWluSW50cmluc2ljV2lkdGggPSAnJztcbiAgICAgICAgX3RoaXMuY29udGFpbmVyID0gJyc7XG4gICAgICAgIF90aGlzLmNvbnRhaW5lck5hbWUgPSAnJztcbiAgICAgICAgX3RoaXMuY29udGFpbmVyVHlwZSA9ICcnO1xuICAgICAgICBfdGhpcy5jb250ZW50ID0gJyc7XG4gICAgICAgIF90aGlzLmNvdW50ZXJJbmNyZW1lbnQgPSAnJztcbiAgICAgICAgX3RoaXMuY291bnRlclJlc2V0ID0gJyc7XG4gICAgICAgIF90aGlzLmNvdW50ZXJTZXQgPSAnJztcbiAgICAgICAgX3RoaXMuY3NzRmxvYXQgPSAnJztcbiAgICAgICAgX3RoaXMuY3NzVGV4dCA9ICcnO1xuICAgICAgICBfdGhpcy5jdXJzb3IgPSAnJztcbiAgICAgICAgX3RoaXMuZGlyZWN0aW9uID0gJyc7XG4gICAgICAgIF90aGlzLmRpc3BsYXkgPSAnJztcbiAgICAgICAgX3RoaXMuZG9taW5hbnRCYXNlbGluZSA9ICcnO1xuICAgICAgICBfdGhpcy5lbXB0eUNlbGxzID0gJyc7XG4gICAgICAgIF90aGlzLmZpbGwgPSAnJztcbiAgICAgICAgX3RoaXMuZmlsbE9wYWNpdHkgPSAnJztcbiAgICAgICAgX3RoaXMuZmlsbFJ1bGUgPSAnJztcbiAgICAgICAgX3RoaXMuZmlsdGVyID0gJyc7XG4gICAgICAgIF90aGlzLmZsZXggPSAnJztcbiAgICAgICAgX3RoaXMuZmxleEJhc2lzID0gJyc7XG4gICAgICAgIF90aGlzLmZsZXhEaXJlY3Rpb24gPSAnJztcbiAgICAgICAgX3RoaXMuZmxleEZsb3cgPSAnJztcbiAgICAgICAgX3RoaXMuZmxleEdyb3cgPSAnJztcbiAgICAgICAgX3RoaXMuZmxleFNocmluayA9ICcnO1xuICAgICAgICBfdGhpcy5mbGV4V3JhcCA9ICcnO1xuICAgICAgICBfdGhpcy5mbG9hdCA9ICcnO1xuICAgICAgICBfdGhpcy5mbG9vZENvbG9yID0gJyc7XG4gICAgICAgIF90aGlzLmZsb29kT3BhY2l0eSA9ICcnO1xuICAgICAgICBfdGhpcy5mb250ID0gJyc7XG4gICAgICAgIF90aGlzLmZvbnRGYW1pbHkgPSAnJztcbiAgICAgICAgX3RoaXMuZm9udEZlYXR1cmVTZXR0aW5ncyA9ICcnO1xuICAgICAgICBfdGhpcy5mb250S2VybmluZyA9ICcnO1xuICAgICAgICBfdGhpcy5mb250T3B0aWNhbFNpemluZyA9ICcnO1xuICAgICAgICBfdGhpcy5mb250UGFsZXR0ZSA9ICcnO1xuICAgICAgICBfdGhpcy5mb250U2l6ZSA9ICcnO1xuICAgICAgICBfdGhpcy5mb250U2l6ZUFkanVzdCA9ICcnO1xuICAgICAgICBfdGhpcy5mb250U3RyZXRjaCA9ICcnO1xuICAgICAgICBfdGhpcy5mb250U3R5bGUgPSAnJztcbiAgICAgICAgX3RoaXMuZm9udFN5bnRoZXNpcyA9ICcnO1xuICAgICAgICBfdGhpcy5mb250U3ludGhlc2lzU21hbGxDYXBzID0gJyc7XG4gICAgICAgIF90aGlzLmZvbnRTeW50aGVzaXNTdHlsZSA9ICcnO1xuICAgICAgICBfdGhpcy5mb250U3ludGhlc2lzV2VpZ2h0ID0gJyc7XG4gICAgICAgIF90aGlzLmZvbnRWYXJpYW50ID0gJyc7XG4gICAgICAgIF90aGlzLmZvbnRWYXJpYW50QWx0ZXJuYXRlcyA9ICcnO1xuICAgICAgICBfdGhpcy5mb250VmFyaWFudENhcHMgPSAnJztcbiAgICAgICAgX3RoaXMuZm9udFZhcmlhbnRFYXN0QXNpYW4gPSAnJztcbiAgICAgICAgX3RoaXMuZm9udFZhcmlhbnRMaWdhdHVyZXMgPSAnJztcbiAgICAgICAgX3RoaXMuZm9udFZhcmlhbnROdW1lcmljID0gJyc7XG4gICAgICAgIF90aGlzLmZvbnRWYXJpYW50UG9zaXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMuZm9udFZhcmlhdGlvblNldHRpbmdzID0gJyc7XG4gICAgICAgIF90aGlzLmZvbnRXZWlnaHQgPSAnJztcbiAgICAgICAgX3RoaXMuZm9yY2VkQ29sb3JBZGp1c3QgPSAnJztcbiAgICAgICAgX3RoaXMuZ2FwID0gJyc7XG4gICAgICAgIF90aGlzLmdyaWQgPSAnJztcbiAgICAgICAgX3RoaXMuZ3JpZEFyZWEgPSAnJztcbiAgICAgICAgX3RoaXMuZ3JpZEF1dG9Db2x1bW5zID0gJyc7XG4gICAgICAgIF90aGlzLmdyaWRBdXRvRmxvdyA9ICcnO1xuICAgICAgICBfdGhpcy5ncmlkQXV0b1Jvd3MgPSAnJztcbiAgICAgICAgX3RoaXMuZ3JpZENvbHVtbiA9ICcnO1xuICAgICAgICBfdGhpcy5ncmlkQ29sdW1uRW5kID0gJyc7XG4gICAgICAgIF90aGlzLmdyaWRDb2x1bW5HYXAgPSAnJztcbiAgICAgICAgX3RoaXMuZ3JpZENvbHVtblN0YXJ0ID0gJyc7XG4gICAgICAgIF90aGlzLmdyaWRHYXAgPSAnJztcbiAgICAgICAgX3RoaXMuZ3JpZFJvdyA9ICcnO1xuICAgICAgICBfdGhpcy5ncmlkUm93RW5kID0gJyc7XG4gICAgICAgIF90aGlzLmdyaWRSb3dHYXAgPSAnJztcbiAgICAgICAgX3RoaXMuZ3JpZFJvd1N0YXJ0ID0gJyc7XG4gICAgICAgIF90aGlzLmdyaWRUZW1wbGF0ZSA9ICcnO1xuICAgICAgICBfdGhpcy5ncmlkVGVtcGxhdGVBcmVhcyA9ICcnO1xuICAgICAgICBfdGhpcy5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJyc7XG4gICAgICAgIF90aGlzLmdyaWRUZW1wbGF0ZVJvd3MgPSAnJztcbiAgICAgICAgX3RoaXMuaGVpZ2h0ID0gJyc7XG4gICAgICAgIF90aGlzLmh5cGhlbmF0ZUNoYXJhY3RlciA9ICcnO1xuICAgICAgICBfdGhpcy5oeXBoZW5zID0gJyc7XG4gICAgICAgIF90aGlzLmltYWdlT3JpZW50YXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMuaW1hZ2VSZW5kZXJpbmcgPSAnJztcbiAgICAgICAgX3RoaXMuaW5saW5lU2l6ZSA9ICcnO1xuICAgICAgICBfdGhpcy5pbnNldCA9ICcnO1xuICAgICAgICBfdGhpcy5pbnNldEJsb2NrID0gJyc7XG4gICAgICAgIF90aGlzLmluc2V0QmxvY2tFbmQgPSAnJztcbiAgICAgICAgX3RoaXMuaW5zZXRCbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIF90aGlzLmluc2V0SW5saW5lID0gJyc7XG4gICAgICAgIF90aGlzLmluc2V0SW5saW5lRW5kID0gJyc7XG4gICAgICAgIF90aGlzLmluc2V0SW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgX3RoaXMuaXNvbGF0aW9uID0gJyc7XG4gICAgICAgIF90aGlzLmp1c3RpZnlDb250ZW50ID0gJyc7XG4gICAgICAgIF90aGlzLmp1c3RpZnlJdGVtcyA9ICcnO1xuICAgICAgICBfdGhpcy5qdXN0aWZ5U2VsZiA9ICcnO1xuICAgICAgICBfdGhpcy5sZWZ0ID0gJyc7XG4gICAgICAgIF90aGlzLmxldHRlclNwYWNpbmcgPSAnJztcbiAgICAgICAgX3RoaXMubGlnaHRpbmdDb2xvciA9ICcnO1xuICAgICAgICBfdGhpcy5saW5lQnJlYWsgPSAnJztcbiAgICAgICAgX3RoaXMubGluZUhlaWdodCA9ICcnO1xuICAgICAgICBfdGhpcy5saXN0U3R5bGUgPSAnJztcbiAgICAgICAgX3RoaXMubGlzdFN0eWxlSW1hZ2UgPSAnJztcbiAgICAgICAgX3RoaXMubGlzdFN0eWxlUG9zaXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMubGlzdFN0eWxlVHlwZSA9ICcnO1xuICAgICAgICBfdGhpcy5tYXJnaW4gPSAnJztcbiAgICAgICAgX3RoaXMubWFyZ2luQmxvY2sgPSAnJztcbiAgICAgICAgX3RoaXMubWFyZ2luQmxvY2tFbmQgPSAnJztcbiAgICAgICAgX3RoaXMubWFyZ2luQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICBfdGhpcy5tYXJnaW5Cb3R0b20gPSAnJztcbiAgICAgICAgX3RoaXMubWFyZ2luSW5saW5lID0gJyc7XG4gICAgICAgIF90aGlzLm1hcmdpbklubGluZUVuZCA9ICcnO1xuICAgICAgICBfdGhpcy5tYXJnaW5JbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICBfdGhpcy5tYXJnaW5MZWZ0ID0gJyc7XG4gICAgICAgIF90aGlzLm1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICAgIF90aGlzLm1hcmdpblRvcCA9ICcnO1xuICAgICAgICBfdGhpcy5tYXJrZXIgPSAnJztcbiAgICAgICAgX3RoaXMubWFya2VyRW5kID0gJyc7XG4gICAgICAgIF90aGlzLm1hcmtlck1pZCA9ICcnO1xuICAgICAgICBfdGhpcy5tYXJrZXJTdGFydCA9ICcnO1xuICAgICAgICBfdGhpcy5tYXNrID0gJyc7XG4gICAgICAgIF90aGlzLm1hc2tDbGlwID0gJyc7XG4gICAgICAgIF90aGlzLm1hc2tDb21wb3NpdGUgPSAnJztcbiAgICAgICAgX3RoaXMubWFza0ltYWdlID0gJyc7XG4gICAgICAgIF90aGlzLm1hc2tNb2RlID0gJyc7XG4gICAgICAgIF90aGlzLm1hc2tPcmlnaW4gPSAnJztcbiAgICAgICAgX3RoaXMubWFza1Bvc2l0aW9uID0gJyc7XG4gICAgICAgIF90aGlzLm1hc2tSZXBlYXQgPSAnJztcbiAgICAgICAgX3RoaXMubWFza1NpemUgPSAnJztcbiAgICAgICAgX3RoaXMubWFza1R5cGUgPSAnJztcbiAgICAgICAgX3RoaXMubWF0aFN0eWxlID0gJyc7XG4gICAgICAgIF90aGlzLm1heEJsb2NrU2l6ZSA9ICcnO1xuICAgICAgICBfdGhpcy5tYXhIZWlnaHQgPSAnJztcbiAgICAgICAgX3RoaXMubWF4SW5saW5lU2l6ZSA9ICcnO1xuICAgICAgICBfdGhpcy5tYXhXaWR0aCA9ICcnO1xuICAgICAgICBfdGhpcy5taW5CbG9ja1NpemUgPSAnJztcbiAgICAgICAgX3RoaXMubWluSGVpZ2h0ID0gJyc7XG4gICAgICAgIF90aGlzLm1pbklubGluZVNpemUgPSAnJztcbiAgICAgICAgX3RoaXMubWluV2lkdGggPSAnJztcbiAgICAgICAgX3RoaXMubWl4QmxlbmRNb2RlID0gJyc7XG4gICAgICAgIF90aGlzLm9iamVjdEZpdCA9ICcnO1xuICAgICAgICBfdGhpcy5vYmplY3RQb3NpdGlvbiA9ICcnO1xuICAgICAgICBfdGhpcy5vZmZzZXQgPSAnJztcbiAgICAgICAgX3RoaXMub2Zmc2V0RGlzdGFuY2UgPSAnJztcbiAgICAgICAgX3RoaXMub2Zmc2V0UGF0aCA9ICcnO1xuICAgICAgICBfdGhpcy5vZmZzZXRSb3RhdGUgPSAnJztcbiAgICAgICAgX3RoaXMub3BhY2l0eSA9ICcnO1xuICAgICAgICBfdGhpcy5vcmRlciA9ICcnO1xuICAgICAgICBfdGhpcy5vcnBoYW5zID0gJyc7XG4gICAgICAgIF90aGlzLm91dGxpbmUgPSAnJztcbiAgICAgICAgX3RoaXMub3V0bGluZUNvbG9yID0gJyc7XG4gICAgICAgIF90aGlzLm91dGxpbmVPZmZzZXQgPSAnJztcbiAgICAgICAgX3RoaXMub3V0bGluZVN0eWxlID0gJyc7XG4gICAgICAgIF90aGlzLm91dGxpbmVXaWR0aCA9ICcnO1xuICAgICAgICBfdGhpcy5vdmVyZmxvdyA9ICcnO1xuICAgICAgICBfdGhpcy5vdmVyZmxvd0FuY2hvciA9ICcnO1xuICAgICAgICBfdGhpcy5vdmVyZmxvd0NsaXBNYXJnaW4gPSAnJztcbiAgICAgICAgX3RoaXMub3ZlcmZsb3dXcmFwID0gJyc7XG4gICAgICAgIF90aGlzLm92ZXJmbG93WCA9ICcnO1xuICAgICAgICBfdGhpcy5vdmVyZmxvd1kgPSAnJztcbiAgICAgICAgX3RoaXMub3ZlcnNjcm9sbEJlaGF2aW9yID0gJyc7XG4gICAgICAgIF90aGlzLm92ZXJzY3JvbGxCZWhhdmlvckJsb2NrID0gJyc7XG4gICAgICAgIF90aGlzLm92ZXJzY3JvbGxCZWhhdmlvcklubGluZSA9ICcnO1xuICAgICAgICBfdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3JYID0gJyc7XG4gICAgICAgIF90aGlzLm92ZXJzY3JvbGxCZWhhdmlvclkgPSAnJztcbiAgICAgICAgX3RoaXMucGFkZGluZyA9ICcnO1xuICAgICAgICBfdGhpcy5wYWRkaW5nQmxvY2sgPSAnJztcbiAgICAgICAgX3RoaXMucGFkZGluZ0Jsb2NrRW5kID0gJyc7XG4gICAgICAgIF90aGlzLnBhZGRpbmdCbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIF90aGlzLnBhZGRpbmdCb3R0b20gPSAnJztcbiAgICAgICAgX3RoaXMucGFkZGluZ0lubGluZSA9ICcnO1xuICAgICAgICBfdGhpcy5wYWRkaW5nSW5saW5lRW5kID0gJyc7XG4gICAgICAgIF90aGlzLnBhZGRpbmdJbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICBfdGhpcy5wYWRkaW5nTGVmdCA9ICcnO1xuICAgICAgICBfdGhpcy5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgX3RoaXMucGFkZGluZ1RvcCA9ICcnO1xuICAgICAgICBfdGhpcy5wYWdlID0gJyc7XG4gICAgICAgIF90aGlzLnBhZ2VCcmVha0FmdGVyID0gJyc7XG4gICAgICAgIF90aGlzLnBhZ2VCcmVha0JlZm9yZSA9ICcnO1xuICAgICAgICBfdGhpcy5wYWdlQnJlYWtJbnNpZGUgPSAnJztcbiAgICAgICAgX3RoaXMucGFpbnRPcmRlciA9ICcnO1xuICAgICAgICBfdGhpcy5wZXJzcGVjdGl2ZSA9ICcnO1xuICAgICAgICBfdGhpcy5wZXJzcGVjdGl2ZU9yaWdpbiA9ICcnO1xuICAgICAgICBfdGhpcy5wbGFjZUNvbnRlbnQgPSAnJztcbiAgICAgICAgX3RoaXMucGxhY2VJdGVtcyA9ICcnO1xuICAgICAgICBfdGhpcy5wbGFjZVNlbGYgPSAnJztcbiAgICAgICAgX3RoaXMucG9pbnRlckV2ZW50cyA9ICcnO1xuICAgICAgICBfdGhpcy5wb3NpdGlvbiA9ICcnO1xuICAgICAgICBfdGhpcy5wcmludENvbG9yQWRqdXN0ID0gJyc7XG4gICAgICAgIF90aGlzLnF1b3RlcyA9ICcnO1xuICAgICAgICBfdGhpcy5yZXNpemUgPSAnJztcbiAgICAgICAgX3RoaXMucmlnaHQgPSAnJztcbiAgICAgICAgX3RoaXMucm90YXRlID0gJyc7XG4gICAgICAgIF90aGlzLnJvd0dhcCA9ICcnO1xuICAgICAgICBfdGhpcy5ydWJ5UG9zaXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMuc2NhbGUgPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsQmVoYXZpb3IgPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsTWFyZ2luID0gJyc7XG4gICAgICAgIF90aGlzLnNjcm9sbE1hcmdpbkJsb2NrID0gJyc7XG4gICAgICAgIF90aGlzLnNjcm9sbE1hcmdpbkJsb2NrRW5kID0gJyc7XG4gICAgICAgIF90aGlzLnNjcm9sbE1hcmdpbkJsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsTWFyZ2luQm90dG9tID0gJyc7XG4gICAgICAgIF90aGlzLnNjcm9sbE1hcmdpbklubGluZSA9ICcnO1xuICAgICAgICBfdGhpcy5zY3JvbGxNYXJnaW5JbmxpbmVFbmQgPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsTWFyZ2luSW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsTWFyZ2luTGVmdCA9ICcnO1xuICAgICAgICBfdGhpcy5zY3JvbGxNYXJnaW5SaWdodCA9ICcnO1xuICAgICAgICBfdGhpcy5zY3JvbGxNYXJnaW5Ub3AgPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsUGFkZGluZyA9ICcnO1xuICAgICAgICBfdGhpcy5zY3JvbGxQYWRkaW5nQmxvY2sgPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kID0gJyc7XG4gICAgICAgIF90aGlzLnNjcm9sbFBhZGRpbmdCbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIF90aGlzLnNjcm9sbFBhZGRpbmdCb3R0b20gPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsUGFkZGluZ0lubGluZSA9ICcnO1xuICAgICAgICBfdGhpcy5zY3JvbGxQYWRkaW5nSW5saW5lRW5kID0gJyc7XG4gICAgICAgIF90aGlzLnNjcm9sbFBhZGRpbmdJbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICBfdGhpcy5zY3JvbGxQYWRkaW5nTGVmdCA9ICcnO1xuICAgICAgICBfdGhpcy5zY3JvbGxQYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsUGFkZGluZ1RvcCA9ICcnO1xuICAgICAgICBfdGhpcy5zY3JvbGxTbmFwQWxpZ24gPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsU25hcFN0b3AgPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsU25hcFR5cGUgPSAnJztcbiAgICAgICAgX3RoaXMuc2Nyb2xsYmFyR3V0dGVyID0gJyc7XG4gICAgICAgIF90aGlzLnNoYXBlSW1hZ2VUaHJlc2hvbGQgPSAnJztcbiAgICAgICAgX3RoaXMuc2hhcGVNYXJnaW4gPSAnJztcbiAgICAgICAgX3RoaXMuc2hhcGVPdXRzaWRlID0gJyc7XG4gICAgICAgIF90aGlzLnNoYXBlUmVuZGVyaW5nID0gJyc7XG4gICAgICAgIF90aGlzLnN0b3BDb2xvciA9ICcnO1xuICAgICAgICBfdGhpcy5zdG9wT3BhY2l0eSA9ICcnO1xuICAgICAgICBfdGhpcy5zdHJva2UgPSAnJztcbiAgICAgICAgX3RoaXMuc3Ryb2tlRGFzaGFycmF5ID0gJyc7XG4gICAgICAgIF90aGlzLnN0cm9rZURhc2hvZmZzZXQgPSAnJztcbiAgICAgICAgX3RoaXMuc3Ryb2tlTGluZWNhcCA9ICcnO1xuICAgICAgICBfdGhpcy5zdHJva2VMaW5lam9pbiA9ICcnO1xuICAgICAgICBfdGhpcy5zdHJva2VNaXRlcmxpbWl0ID0gJyc7XG4gICAgICAgIF90aGlzLnN0cm9rZU9wYWNpdHkgPSAnJztcbiAgICAgICAgX3RoaXMuc3Ryb2tlV2lkdGggPSAnJztcbiAgICAgICAgX3RoaXMudGFiU2l6ZSA9ICcnO1xuICAgICAgICBfdGhpcy50YWJsZUxheW91dCA9ICcnO1xuICAgICAgICBfdGhpcy50ZXh0QWxpZ24gPSAnJztcbiAgICAgICAgX3RoaXMudGV4dEFsaWduTGFzdCA9ICcnO1xuICAgICAgICBfdGhpcy50ZXh0QW5jaG9yID0gJyc7XG4gICAgICAgIF90aGlzLnRleHRDb21iaW5lVXByaWdodCA9ICcnO1xuICAgICAgICBfdGhpcy50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuICAgICAgICBfdGhpcy50ZXh0RGVjb3JhdGlvbkNvbG9yID0gJyc7XG4gICAgICAgIF90aGlzLnRleHREZWNvcmF0aW9uTGluZSA9ICcnO1xuICAgICAgICBfdGhpcy50ZXh0RGVjb3JhdGlvblNraXBJbmsgPSAnJztcbiAgICAgICAgX3RoaXMudGV4dERlY29yYXRpb25TdHlsZSA9ICcnO1xuICAgICAgICBfdGhpcy50ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyA9ICcnO1xuICAgICAgICBfdGhpcy50ZXh0RW1waGFzaXMgPSAnJztcbiAgICAgICAgX3RoaXMudGV4dEVtcGhhc2lzQ29sb3IgPSAnJztcbiAgICAgICAgX3RoaXMudGV4dEVtcGhhc2lzUG9zaXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMudGV4dEVtcGhhc2lzU3R5bGUgPSAnJztcbiAgICAgICAgX3RoaXMudGV4dEluZGVudCA9ICcnO1xuICAgICAgICBfdGhpcy50ZXh0T3JpZW50YXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMudGV4dE92ZXJmbG93ID0gJyc7XG4gICAgICAgIF90aGlzLnRleHRSZW5kZXJpbmcgPSAnJztcbiAgICAgICAgX3RoaXMudGV4dFNoYWRvdyA9ICcnO1xuICAgICAgICBfdGhpcy50ZXh0VHJhbnNmb3JtID0gJyc7XG4gICAgICAgIF90aGlzLnRleHRVbmRlcmxpbmVPZmZzZXQgPSAnJztcbiAgICAgICAgX3RoaXMudGV4dFVuZGVybGluZVBvc2l0aW9uID0gJyc7XG4gICAgICAgIF90aGlzLnRvcCA9ICcnO1xuICAgICAgICBfdGhpcy50b3VjaEFjdGlvbiA9ICcnO1xuICAgICAgICBfdGhpcy50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgX3RoaXMudHJhbnNmb3JtQm94ID0gJyc7XG4gICAgICAgIF90aGlzLnRyYW5zZm9ybU9yaWdpbiA9ICcnO1xuICAgICAgICBfdGhpcy50cmFuc2Zvcm1TdHlsZSA9ICcnO1xuICAgICAgICBfdGhpcy50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgIF90aGlzLnRyYW5zaXRpb25EZWxheSA9ICcnO1xuICAgICAgICBfdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMudHJhbnNpdGlvblByb3BlcnR5ID0gJyc7XG4gICAgICAgIF90aGlzLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9ICcnO1xuICAgICAgICBfdGhpcy50cmFuc2xhdGUgPSAnJztcbiAgICAgICAgX3RoaXMudW5pY29kZUJpZGkgPSAnJztcbiAgICAgICAgX3RoaXMudXNlclNlbGVjdCA9ICcnO1xuICAgICAgICBfdGhpcy52ZXJ0aWNhbEFsaWduID0gJyc7XG4gICAgICAgIF90aGlzLnZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0QWxpZ25Db250ZW50ID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEFsaWduSXRlbXMgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0QWxpZ25TZWxmID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEFuaW1hdGlvbiA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRBbmltYXRpb25EZWxheSA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRBbmltYXRpb25EaXJlY3Rpb24gPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0QW5pbWF0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0QW5pbWF0aW9uRmlsbE1vZGUgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0QW5pbWF0aW9uTmFtZSA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRBbmltYXRpb25QbGF5U3RhdGUgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0QXBwZWFyYW5jZSA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRCYWNrZmFjZVZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0QmFja2dyb3VuZENsaXAgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0QmFja2dyb3VuZE9yaWdpbiA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRCYWNrZ3JvdW5kU2l6ZSA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRCb3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEJvcmRlclJhZGl1cyA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRCb3JkZXJUb3BMZWZ0UmFkaXVzID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEJvcmRlclRvcFJpZ2h0UmFkaXVzID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEJveEFsaWduID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEJveEZsZXggPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0Qm94T3JkaW5hbEdyb3VwID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEJveE9yaWVudCA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRCb3hQYWNrID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEJveFNoYWRvdyA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRCb3hTaXppbmcgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0RmlsdGVyID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEZsZXggPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0RmxleEJhc2lzID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdEZsZXhEaXJlY3Rpb24gPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0RmxleEZsb3cgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0RmxleEdyb3cgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0RmxleFNocmluayA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRGbGV4V3JhcCA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRKdXN0aWZ5Q29udGVudCA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRMaW5lQ2xhbXAgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0TWFzayA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRNYXNrQm94SW1hZ2UgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0TWFza0JveEltYWdlT3V0c2V0ID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdE1hc2tCb3hJbWFnZVJlcGVhdCA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRNYXNrQm94SW1hZ2VTbGljZSA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRNYXNrQm94SW1hZ2VTb3VyY2UgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0TWFza0JveEltYWdlV2lkdGggPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0TWFza0NsaXAgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0TWFza0NvbXBvc2l0ZSA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRNYXNrSW1hZ2UgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0TWFza09yaWdpbiA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRNYXNrUG9zaXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0TWFza1JlcGVhdCA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRNYXNrU2l6ZSA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRPcmRlciA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRQZXJzcGVjdGl2ZSA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRQZXJzcGVjdGl2ZU9yaWdpbiA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRUZXh0RmlsbENvbG9yID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdFRleHRTaXplQWRqdXN0ID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdFRleHRTdHJva2UgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0VGV4dFN0cm9rZUNvbG9yID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdFRleHRTdHJva2VXaWR0aCA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRUcmFuc2Zvcm0gPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0VHJhbnNmb3JtT3JpZ2luID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdFRyYW5zZm9ybVN0eWxlID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdFRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0VHJhbnNpdGlvbkRlbGF5ID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICBfdGhpcy53ZWJraXRUcmFuc2l0aW9uUHJvcGVydHkgPSAnJztcbiAgICAgICAgX3RoaXMud2Via2l0VHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gJyc7XG4gICAgICAgIF90aGlzLndlYmtpdFVzZXJTZWxlY3QgPSAnJztcbiAgICAgICAgX3RoaXMud2hpdGVTcGFjZSA9ICcnO1xuICAgICAgICBfdGhpcy53aWRvd3MgPSAnJztcbiAgICAgICAgX3RoaXMud2lkdGggPSAnJztcbiAgICAgICAgX3RoaXMud2lsbENoYW5nZSA9ICcnO1xuICAgICAgICBfdGhpcy53b3JkQnJlYWsgPSAnJztcbiAgICAgICAgX3RoaXMud29yZFNwYWNpbmcgPSAnJztcbiAgICAgICAgX3RoaXMud29yZFdyYXAgPSAnJztcbiAgICAgICAgX3RoaXMud3JpdGluZ01vZGUgPSAnJztcbiAgICAgICAgX3RoaXMuekluZGV4ID0gJyc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEpFbGVtZW50U3R5bGVQcm9wZXJ0eTtcbn0oSkVsZW1lbnRTdHlsZU1hcCkpO1xuZXhwb3J0IHsgSkVsZW1lbnRTdHlsZVByb3BlcnR5IH07XG4vLyDmnIDlpJblsYLlrrnlmajpu5jorqTmoLflvI9cbmV4cG9ydCB2YXIgQ29udGFpbmVyRGVmYXVsdFN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICB0b3A6ICcwJyxcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzEwcHgnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIG1hcmdpbjogJzAnLFxuICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbn07XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xudmFyIFRyYW5zZm9ybSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHJhbnNmb3JtLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zZm9ybShvcHRpb24sIHRhcmdldE9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICAvLyDlk43lupTlj5jljJbmjaLlhYPntKDlkozlsZ7mgKdcbiAgICAgICAgX3RoaXMudGFyZ2V0cyA9IFtdO1xuICAgICAgICAvLyB45YGP56e76YePXG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZVggPSAwO1xuICAgICAgICAvLyB55YGP56e76YePXG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAvLyB65YGP56e76YePXG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZVogPSAwO1xuICAgICAgICBfdGhpcy5yb3RhdGVYID0gMDtcbiAgICAgICAgX3RoaXMucm90YXRlWSA9IDA7XG4gICAgICAgIF90aGlzLnJvdGF0ZVogPSAwO1xuICAgICAgICBfdGhpcy5zY2FsZVggPSAxO1xuICAgICAgICBfdGhpcy5zY2FsZVkgPSAxO1xuICAgICAgICBfdGhpcy5zY2FsZVogPSAxO1xuICAgICAgICBfdGhpcy5za2V3WCA9IDA7XG4gICAgICAgIF90aGlzLnNrZXdZID0gMDtcbiAgICAgICAgaWYgKG9wdGlvbilcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oX3RoaXMsIG9wdGlvbik7XG4gICAgICAgIGlmICh0YXJnZXRPcHRpb24pXG4gICAgICAgICAgICBfdGhpcy5iaW5kKHRhcmdldE9wdGlvbik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwidHJhbnNsYXRlWFN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlWChcIi5jb25jYXQodXRpbC50b1BYKHRoaXMudHJhbnNsYXRlWCksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInRyYW5zbGF0ZVlTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZVkoXCIuY29uY2F0KHV0aWwudG9QWCh0aGlzLnRyYW5zbGF0ZVkpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGVaU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGVaKFwiLmNvbmNhdCh1dGlsLnRvUFgodGhpcy50cmFuc2xhdGVaKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwicm90YXRlWFN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwicm90YXRlWChcIi5jb25jYXQodXRpbC50b1JhZCh0aGlzLnJvdGF0ZVgpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJyb3RhdGVZU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyb3RhdGVZKFwiLmNvbmNhdCh1dGlsLnRvUmFkKHRoaXMucm90YXRlWSksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInJvdGF0ZVpTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInJvdGF0ZVooXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5yb3RhdGVaKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwic2NhbGVYU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJzY2FsZVgoXCIuY29uY2F0KHRoaXMuc2NhbGVYLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJzY2FsZVlTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInNjYWxlWShcIi5jb25jYXQodGhpcy5zY2FsZVksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInNjYWxlWlN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2NhbGVaKFwiLmNvbmNhdCh0aGlzLnNjYWxlWiwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwic2tld1hTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInNrZXdYKFwiLmNvbmNhdCh1dGlsLnRvUmFkKHRoaXMuc2tld1gpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJza2V3WVN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2tld1koXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5za2V3WSksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuZnJvbSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhKVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB9O1xuICAgIC8vIOeUn+aViFxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0gdGhpcy50YXJnZXRzOyB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdGFyZ2V0XzEgPSBfX3ZhbHVlcyh0YXJnZXQpLCB0YXJnZXRfMV8xID0gdGFyZ2V0XzEubmV4dCgpOyAhdGFyZ2V0XzFfMS5kb25lOyB0YXJnZXRfMV8xID0gdGFyZ2V0XzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGFyZ2V0XzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseSh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldF8xXzEgJiYgIXRhcmdldF8xXzEuZG9uZSAmJiAoX2EgPSB0YXJnZXRfMS5yZXR1cm4pKSBfYS5jYWxsKHRhcmdldF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldC50YXJnZXQgJiYgdGFyZ2V0LnRhcmdldC5jc3MpXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRhcmdldC5jc3MoJ3RyYW5zZm9ybScsIHRoaXMudG9TdHJpbmcodGFyZ2V0LndhdGNoUHJvcHMpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC50YXJnZXQpXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLnRvU3RyaW5nKHRhcmdldC53YXRjaFByb3BzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g57uR5a6a5bm25Yi35paw5Yiw55uu5qCH5LiKXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICB0aGlzLmFwcGx5KHRhcmdldCk7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudGFyZ2V0cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0c1tpXS50YXJnZXQgPT09IHRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnlJ/miJB0cmFuc2Zvcm3ku6PnkIZcbiAgICBUcmFuc2Zvcm0uY3JlYXRlUHJveHkgPSBmdW5jdGlvbiAob2JqLCBlbCkge1xuICAgICAgICBpZiAob2JqID09PSB2b2lkIDApIHsgb2JqID0ge307IH1cbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0ob2JqLCBlbCk7XG4gICAgICAgIC8vIOS7o+eQhuWkhOeQhlxuICAgICAgICB2YXIgcHJveHkgPSBuZXcgUHJveHkodHJhbnNmb3JtLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHAsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0YXJnZXRbcF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYXBwbHkoKTsgLy8g55Sf5pWIXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHdhdGNoUHJvcHMpIHtcbiAgICAgICAgdmFyIGVfMiwgX2E7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgaWYgKCF3YXRjaFByb3BzKSB7XG4gICAgICAgICAgICB3YXRjaFByb3BzID0gWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsIFwicm90YXRlWFwiLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXdYJywgJ3NrZXdZJ107XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHdhdGNoUHJvcHNfMSA9IF9fdmFsdWVzKHdhdGNoUHJvcHMpLCB3YXRjaFByb3BzXzFfMSA9IHdhdGNoUHJvcHNfMS5uZXh0KCk7ICF3YXRjaFByb3BzXzFfMS5kb25lOyB3YXRjaFByb3BzXzFfMSA9IHdhdGNoUHJvcHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHdhdGNoUHJvcHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBudiA9IHRoaXNbbiArICdTdHJpbmcnXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbbl0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBudiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2gobnYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHdhdGNoUHJvcHNfMV8xICYmICF3YXRjaFByb3BzXzFfMS5kb25lICYmIChfYSA9IHdhdGNoUHJvcHNfMS5yZXR1cm4pKSBfYS5jYWxsKHdhdGNoUHJvcHNfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qb2luKCcgJyk7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IHRoaXMudHJhbnNsYXRlWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IHRoaXMudHJhbnNsYXRlWSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVo6IHRoaXMudHJhbnNsYXRlWixcbiAgICAgICAgICAgIHJvdGF0ZVg6IHRoaXMucm90YXRlWCxcbiAgICAgICAgICAgIHJvdGF0ZVk6IHRoaXMucm90YXRlWSxcbiAgICAgICAgICAgIHJvdGF0ZVo6IHRoaXMucm90YXRlWixcbiAgICAgICAgICAgIHNjYWxlWDogdGhpcy5zY2FsZVgsXG4gICAgICAgICAgICBzY2FsZVk6IHRoaXMuc2NhbGVZLFxuICAgICAgICAgICAgc2NhbGVaOiB0aGlzLnNjYWxlWixcbiAgICAgICAgICAgIHNrZXdYOiB0aGlzLnNrZXdYLFxuICAgICAgICAgICAgc2tld1k6IHRoaXMuc2tld1ksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNmb3JtO1xufShFdmVudEVtaXRlcikpO1xuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCBFdmVudEVtaXRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IEpUcmFuc2Zvcm0gZnJvbSAnLi4vY29uc3RhbnQvdHJhbnNmb3JtJztcbmltcG9ydCBKU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG5pbXBvcnQgSkV2ZW50IGZyb20gJy4uL2NvcmUvZXZlbnQnO1xudmFyIEpFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWxlbWVudChvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaWQgPSAnJztcbiAgICAgICAgLy8g57G75Z6L5ZCN56ewXG4gICAgICAgIF90aGlzLnR5cGUgPSAnJztcbiAgICAgICAgLy8g5a2Q5YWD57SgXG4gICAgICAgIF90aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgICAgICAvLyDlpI3liLblsZ7mgKdcbiAgICAgICAgZm9yICh2YXIgayBpbiBvcHRpb24pIHtcbiAgICAgICAgICAgIHZhciB2ID0gb3B0aW9uW2tdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrICE9PSAnc3RyaW5nJyB8fCAodHlwZW9mIHYgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2ICE9PSAnbnVtYmVyJykpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBfdGhpc1trXSA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuaWQgPSBfdGhpcy5pZCB8fCBvcHRpb24uaWQgfHwgdXVpZHY0KCkucmVwbGFjZSgvLS9nLCAnJyk7XG4gICAgICAgIF90aGlzLnR5cGUgPSBfdGhpcy50eXBlIHx8IG9wdGlvbi50eXBlIHx8ICcnO1xuICAgICAgICB2YXIgbm9kZVR5cGUgPSBvcHRpb24ubm9kZVR5cGUgfHwgJ2Rpdic7XG4gICAgICAgIF90aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xuICAgICAgICAvLyDmoLflvI/ku6PnkIblpITnkIZcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBKU3R5bGUuY3JlYXRlUHJveHkoKTtcbiAgICAgICAgX3RoaXMuc3R5bGUub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXREb21TdHlsZShzLm5hbWUsIHMudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdGlvbi5zdHlsZSlcbiAgICAgICAgICAgIF90aGlzLnN0eWxlLmFwcGx5KG9wdGlvbi5zdHlsZSk7XG4gICAgICAgIC8vIOWPmOaNouaOp+WItueahOaYr+aguOW/g+WFg+e0oFxuICAgICAgICBfdGhpcy50cmFuc2Zvcm0gPSBKVHJhbnNmb3JtLmNyZWF0ZVByb3h5KG9wdGlvbi50cmFuc2Zvcm0sIHtcbiAgICAgICAgICAgIHRhcmdldDogX3RoaXMsXG4gICAgICAgICAgICAvLyDlpoLmnpzmjIflrprkuoblj6rlk43lupTmn5Dlh6DkuKrlsZ7mgKdcbiAgICAgICAgICAgIHdhdGNoUHJvcHM6IG9wdGlvbi50cmFuc2Zvcm1XYXRjaFByb3BzXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5pbml0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgIF90aGlzLmJpbmRFdmVudCgpOyAvLyDkuovku7bnu5HlrppcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvLyDliJ3lp4vljJbkuIDkupvln7rnoYDlsZ7mgKdcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuaW5pdE9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdGhpcy54ID0gb3B0aW9uLnggfHwgb3B0aW9uLmxlZnQgfHwgdGhpcy54IHx8IDA7XG4gICAgICAgIHRoaXMueSA9IG9wdGlvbi55IHx8IG9wdGlvbi50b3AgfHwgdGhpcy55IHx8IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb24ud2lkdGggfHwgb3B0aW9uLndpZHRoIHx8IHRoaXMud2lkdGggfHwgMTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb24uaGVpZ2h0IHx8IG9wdGlvbi5oZWlnaHQgfHwgdGhpcy5oZWlnaHQgfHwgMTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24ucm90YXRpb24gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IG9wdGlvbi5yb3RhdGlvbjtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24uYW5nbGUgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IG9wdGlvbi5hbmdsZTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24uekluZGV4ICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRoaXMuekluZGV4ID0gb3B0aW9uLnpJbmRleDtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24udmlzaWJsZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSAhIW9wdGlvbi52aXNpYmxlO1xuICAgICAgICBpZiAob3B0aW9uLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gb3B0aW9uLmNsYXNzTmFtZTtcbiAgICB9O1xuICAgIC8vIOe7keWumuS6i+S7tlxuICAgIEpFbGVtZW50LnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIOS6i+S7tuaJmOeuoVxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEpFdmVudChkb20gfHwgdGhpcy5kb20pO1xuICAgICAgICB0aGlzLmV2ZW50LmluaXQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoZS50eXBlLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcImNoaWxkcmVuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICAvLyDlnZDmoIdYXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLnN0eWxlLmxlZnQgfHwgMDtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmxlZnQgPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgLy8g5Z2Q5qCHWVxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5zdHlsZS50b3AgfHwgMDtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRvcCA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInRvcFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy55ID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwibGVmdFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy54ID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwicmlnaHRcIiwge1xuICAgICAgICAvLyDlnZDmoIdyaWdodFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5zdHlsZS5yaWdodCB8fCAwO1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUucmlnaHQgPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJib3R0b21cIiwge1xuICAgICAgICAvLyDlnZDmoIdib3R0b21cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuc3R5bGUuYm90dG9tIHx8IDA7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJ3aWR0aFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHcgPSB0aGlzLnN0eWxlLndpZHRoIHx8IDA7XG4gICAgICAgICAgICBpZiAoIXcgJiYgdGhpcy5kb20gJiYgdGhpcy5kb20uY2xpZW50V2lkdGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9tLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJoZWlnaHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5zdHlsZS5oZWlnaHQgfHwgMDtcbiAgICAgICAgICAgIGlmICghaCAmJiB0aGlzLmRvbSAmJiB0aGlzLmRvbS5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9tLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInJvdGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMudHJhbnNmb3JtLnJvdGF0ZVo7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5peL6L2s5byn5bqmXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnJvdGF0ZVogPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJhbmdsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWwucmFkVG9EZWcodGhpcy50cmFuc2Zvcm0ucm90YXRlWik7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaXi+i9rOinkuW6plxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaID0gdXRpbC5kZWdUb1JhZCh2KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwidmlzaWJsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSB2ID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwiekluZGV4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuc3R5bGUuekluZGV4IHx8ICcwJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuekluZGV4ID0gdiArICcnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvbS5jbGFzc05hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuZG9tLmNsYXNzTmFtZSA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDorr7nva5jc3PliLBkb21cbiAgICBKRWxlbWVudC5wcm90b3R5cGUuc2V0RG9tU3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdiYWNrZ3JvdW5kSW1hZ2UnICYmIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIS9eXFxzKnVybFxcKC8udGVzdCh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcInVybChcIi5jb25jYXQodmFsdWUsIFwiKVwiKTtcbiAgICAgICAgfVxuICAgICAgICB1dGlsLmNzcyh0aGlzLmRvbSwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8g6K6+572u5qC35byPXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLmNzcyA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB1dGlsLmNzcyh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gZG9t5bGe5oCnXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuYXR0cih0aGlzLmRvbSwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8g56e75L2NXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gICAgICAgIHRoaXMubGVmdCA9IHV0aWwudG9OdW1iZXIodGhpcy5sZWZ0KSArIGR4O1xuICAgICAgICB0aGlzLnRvcCA9IHV0aWwudG9OdW1iZXIodGhpcy50b3ApICsgZHk7XG4gICAgICAgIHRoaXMuZW1pdCgnbW92ZScsIHsgZHg6IGR4LCBkeTogZHkgfSk7XG4gICAgfTtcbiAgICAvLyDph43nva7lpKflsI9cbiAgICBKRWxlbWVudC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHcsIGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDmlrDlop7lrZDlhYPntKBcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQsIHBhcmVudCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7IHBhcmVudCA9IHRoaXM7IH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNoaWxkXzEgPSBfX3ZhbHVlcyhjaGlsZCksIGNoaWxkXzFfMSA9IGNoaWxkXzEubmV4dCgpOyAhY2hpbGRfMV8xLmRvbmU7IGNoaWxkXzFfMSA9IGNoaWxkXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gY2hpbGRfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZF8xXzEgJiYgIWNoaWxkXzFfMS5kb25lICYmIChfYSA9IGNoaWxkXzEucmV0dXJuKSkgX2EuY2FsbChjaGlsZF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBKRWxlbWVudCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgcGFyZW50LmRvbS5hcHBlbmRDaGlsZChjaGlsZC5kb20pO1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmRvbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOenu+mZpOiHquW3slxuICAgIEpFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudClcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgIH07XG4gICAgLy8g56e76Zmk5a2Q5YWD57SgXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5kb20ucmVtb3ZlQ2hpbGQoZWwuZG9tIHx8IGVsKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldID09PSBlbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkZWxldGUgZWwucGFyZW50O1xuICAgIH07XG4gICAgLy8g6L2s5Li6anNvblxuICAgIEpFbGVtZW50LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAocHJvcHMsIGlnKSB7XG4gICAgICAgIHZhciBlXzIsIF9hLCBlXzMsIF9iO1xuICAgICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkgeyBwcm9wcyA9IFtdOyB9XG4gICAgICAgIGlmIChpZyA9PT0gdm9pZCAwKSB7IGlnID0gZnVuY3Rpb24gKHApIHsgcmV0dXJuIHRydWU7IH07IH1cbiAgICAgICAgdmFyIGZpZWxkcyA9IF9fc3ByZWFkQXJyYXkoWydsZWZ0JywgJ3RvcCcsICd3aWR0aCcsICdoZWlnaHQnLCAncm90YXRpb24nLCAndHlwZScsICdzdHlsZScsICd0cmFuc2Zvcm0nLCAnaWQnXSwgX19yZWFkKHByb3BzKSwgZmFsc2UpO1xuICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBmaWVsZHNfMSA9IF9fdmFsdWVzKGZpZWxkcyksIGZpZWxkc18xXzEgPSBmaWVsZHNfMS5uZXh0KCk7ICFmaWVsZHNfMV8xLmRvbmU7IGZpZWxkc18xXzEgPSBmaWVsZHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IGZpZWxkc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0aGlzW2tdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHYgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtrXSA9IHRoaXNba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYgJiYgdi50b0pTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tdID0gdi50b0pTT04oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZHNfMV8xICYmICFmaWVsZHNfMV8xLmRvbmUgJiYgKF9hID0gZmllbGRzXzEucmV0dXJuKSkgX2EuY2FsbChmaWVsZHNfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgLy9pZih0aGlzLnRyYW5zZm9ybSkgb2JqWyd0cmFuc2Zvcm0nXSA9IHRoaXMudHJhbnNmb3JtLnRvSlNPTigpO1xuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbiAmJiB0aGlzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYyA9IF9fdmFsdWVzKHRoaXMuY2hpbGRyZW4pLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IF9kLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgPT09IHRoaXMgfHwgaWcoY2hpbGQpID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBvYmouY2hpbGRyZW4ucHVzaChjaGlsZC50b0pTT04oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2IgPSBfYy5yZXR1cm4pKSBfYi5jYWxsKF9jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICBKRWxlbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRvSlNPTigpO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICB9O1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS50b0h0bWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbS5vdXRlckhUTUw7XG4gICAgfTtcbiAgICByZXR1cm4gSkVsZW1lbnQ7XG59KEV2ZW50RW1pdGVyKSk7XG5leHBvcnQgZGVmYXVsdCBKRWxlbWVudDtcbiIsInZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCB1dGlsIGZyb20gXCIuLi9saWIvdXRpbFwiO1xudmFyIFN1cHBvcnRFdmVudE5hbWVzID0gW1xuICAgICdtb3VzZWRvd24nLCAnbW91c2V1cCcsICdtb3VzZW92ZXInLCAnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNld2hlZWwnLCAnY2xpY2snLCAnZGJsY2xpY2snLCAna2V5ZG93bicsICdrZXlwcmVzcycsICdrZXl1cCcsICdibHVyJywgJ2NoYW5nZScsICdmb2N1cycsICdkcmFnJywgJ2RyYWdlbnRlcicsICdkcmFnbGVhdmUnLCAnZHJhZ292ZXInLCAnZHJhZ3N0YXJ0JywgJ2Ryb3AnXG5dO1xudmFyIEpFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBKRXZlbnQodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQpXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyW5omA5pyJ5pSv5oyB55qE5LqL5Lu2XG4gICAgSkV2ZW50LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGhhbmRsZXIsIHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50KFN1cHBvcnRFdmVudE5hbWVzLCBoYW5kbGVyLCBmYWxzZSwgdGFyZ2V0KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOe7keWumuS6i+S7tuWIsGh0bWzlr7nosaFcbiAgICAgKlxuICAgICAqIEBtZXRob2QgYmluZEV2ZW50XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gaHRtbOWFg+e0oOWvueixoVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOS6i+S7tuWQjeensFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1biDkuovku7blp5TmiZhcbiAgICAgKiBAcmV0dXJucyB7bmFtZSwgZnVuLCB0YXJnZXR9IOi/lOWbnuW9k+WJjee7keWumlxuICAgICAqL1xuICAgIEpFdmVudC5wcm90b3R5cGUuYmluZEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGZ1biwgb3B0LCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmIChvcHQgPT09IHZvaWQgMCkgeyBvcHQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7IH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZV8xID0gX192YWx1ZXMobmFtZSksIG5hbWVfMV8xID0gbmFtZV8xLm5leHQoKTsgIW5hbWVfMV8xLmRvbmU7IG5hbWVfMV8xID0gbmFtZV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG5hbWVfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmRFdmVudChuLCBmdW4sIG9wdCwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVfMV8xICYmICFuYW1lXzFfMS5kb25lICYmIChfYSA9IG5hbWVfMS5yZXR1cm4pKSBfYS5jYWxsKG5hbWVfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lICYmIG5hbWUuaW5kZXhPZiAmJiBuYW1lLmluZGV4T2YoJyAnKSAhPSAtMSkge1xuICAgICAgICAgICAgdmFyIG5zID0gbmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmluZEV2ZW50KG5zLCBmdW4sIG9wdCwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvKi8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0YXJnZXQuYXR0YWNoRXZlbnQoXCJvblwiK25hbWUsIGZ1biwgb3B0KTtcbiAgICAgICAgfSAqL1xuICAgICAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1biwgb3B0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOS7juWvueixoeS4reenu+mZpOS6i+S7tuWIsFxuICAgICAqXG4gICAgICogQG1ldGhvZCByZW1vdmVFdmVudFxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGh0bWzlhYPntKDlr7nosaFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW4g5LqL5Lu25aeU5omYXG4gICAgICovXG4gICAgSkV2ZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBmdW4sIG9wdCwgdGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHQgPT09IHZvaWQgMCkgeyBvcHQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7IH1cbiAgICAgICAgaWYgKHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW4sIG9wdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZSAgXG4gICAgICAgIGVsc2UgaWYgKHRhcmdldC5kZXRhY2hFdmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmdW4sIG9wdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbJ29uJyArIG5hbWVdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOiOt+WPluWFg+e0oOS6i+S7tuinpuWPkeeahOS9jee9rlxuICAgICAqXG4gICAgICogQG1ldGhvZCBnZXRFdmVudFBvc2l0aW9uXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7ZXZlbnRBcmd9IGV2dCDlvZPliY3op6blj5Hkuovku7bnmoTlj4LmlbBcbiAgICAgKiBAcmV0dXJuIHtwb2ludH0g5LqL5Lu26Kem5Y+R55qE5L2N572uXG4gICAgICovXG4gICAgSkV2ZW50LnByb3RvdHlwZS5nZXRFdmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKGV2dCwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBpc1RvdWNoID0gZmFsc2U7XG4gICAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcyB8fCBldnQudGFyZ2V0VG91Y2hlcyB8fCBldnQudG91Y2hlcztcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGV2dCA9IHRvdWNoZXNbMF07IC8v5YW85a65dG91Y2jkuovku7ZcbiAgICAgICAgICAgIGlzVG91Y2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBweCA9IGV2dC5wYWdlWCB8fCBldnQueDtcbiAgICAgICAgaWYgKHR5cGVvZiBweCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHB4ID0gZXZ0LmNsaWVudFggKyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0KTtcbiAgICAgICAgdmFyIHB5ID0gZXZ0LnBhZ2VZIHx8IGV2dC55O1xuICAgICAgICBpZiAodHlwZW9mIHB5ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcHkgPSBldnQuY2xpZW50WSArIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKTtcbiAgICAgICAgdmFyIG94ID0gZXZ0Lm9mZnNldFg7XG4gICAgICAgIHZhciBveSA9IGV2dC5vZmZzZXRZO1xuICAgICAgICBpZiAoKHR5cGVvZiBveCA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG95ID09PSAndW5kZWZpbmVkJykgfHwgdGFyZ2V0KSB7XG4gICAgICAgICAgICB2YXIgcCA9IHV0aWwuZ2V0RWxlbWVudFBvc2l0aW9uKCh0YXJnZXQgfHwgZXZ0LnRhcmdldCkpO1xuICAgICAgICAgICAgb3ggPSBweCAtIHAueDtcbiAgICAgICAgICAgIG95ID0gcHkgLSBwLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IG94LFxuICAgICAgICAgICAgeTogb3ksXG4gICAgICAgICAgICBwYWdlWDogcHgsXG4gICAgICAgICAgICBwYWdlWTogcHksXG4gICAgICAgICAgICBpc1RvdWNoOiBpc1RvdWNoLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIEpFdmVudDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBKRXZlbnQ7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEpFbGVtZW50U3R5bGVNYXAsIHsgSkVsZW1lbnRTdHlsZVByb3BlcnR5IH0gZnJvbSAnLi4vY29uc3RhbnQvc3R5bGVNYXAnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xudmFyIFN0eWxlTmFtZXNNYXAgPSBbXTtcbnZhciBOdW1iZXJTdHlsZU1hcCA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ3dpZHRoJywgJ2hlaWdodCddO1xudmFyIEpFbGVtZW50U3R5bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFbGVtZW50U3R5bGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnRTdHlsZShvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuYXBwbHkob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudFN0eWxlLnByb3RvdHlwZSwgXCJuYW1lc1wiLCB7XG4gICAgICAgIC8vIOaJgOacieagt+W8j+WQjeensFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICAgICAgaWYgKCFTdHlsZU5hbWVzTWFwLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXAgPSBuZXcgSkVsZW1lbnRTdHlsZVByb3BlcnR5KCk7XG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtYXApO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXNfMSA9IF9fdmFsdWVzKGtleXMpLCBrZXlzXzFfMSA9IGtleXNfMS5uZXh0KCk7ICFrZXlzXzFfMS5kb25lOyBrZXlzXzFfMSA9IGtleXNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrID0ga2V5c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1hcFtrXSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3R5bGVOYW1lc01hcC5wdXNoKGspO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5c18xXzEgJiYgIWtleXNfMV8xLmRvbmUgJiYgKF9hID0ga2V5c18xLnJldHVybikpIF9hLmNhbGwoa2V5c18xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFN0eWxlTmFtZXNNYXA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDmiormoLflvI/lupTnlKjliLDlhYPntKDmiJblvZPliY3lr7nosaFcbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChkYXRhLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGVfMiwgX2E7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB0aGlzOyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMubmFtZXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVfMSA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZV8xICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW25hbWVfMV0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBkYXRhW25hbWVfMV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBKRWxlbWVudFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0U3R5bGUobmFtZV8xLCBkYXRhW25hbWVfMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVfMV0gPSBkYXRhW25hbWVfMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgLy8g5qC35byP5a+55bqU55qE5YWD57SgXG4gICAgSkVsZW1lbnRTdHlsZS5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYXBwbHkodGhpcywgZWxlbWVudC5zdHlsZSk7XG4gICAgfTtcbiAgICAvLyDorr7nva7moLflvI9cbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOinpuWPkeaJgOacieabtOaWsOWIsGRvbVxuICAgIEpFbGVtZW50U3R5bGUucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXBwbHkodGhpcyk7XG4gICAgfTtcbiAgICAvLyDovazkuLpqc29uXG4gICAgSkVsZW1lbnRTdHlsZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8zLCBfYTtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLm5hbWVzKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lXzIgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV8yXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIG9ialtuYW1lXzJdID0gdGhpc1tuYW1lXzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzNfMSkgeyBlXzMgPSB7IGVycm9yOiBlXzNfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIC8vIOeUn+aIkOagt+W8j+S7o+eQhlxuICAgIEpFbGVtZW50U3R5bGUuY3JlYXRlUHJveHkgPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgaWYgKHN0eWxlID09PSB2b2lkIDApIHsgc3R5bGUgPSB7fTsgfVxuICAgICAgICB2YXIganN0eWxlID0gbmV3IEpFbGVtZW50U3R5bGUoc3R5bGUpO1xuICAgICAgICAvLyDmoLflvI/ku6PnkIblpITnkIZcbiAgICAgICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGpzdHlsZSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGFyZ2V0W3BdO1xuICAgICAgICAgICAgICAgIC8vIOaVsOWtl+agt+W8j++8jOWkhOeQhnB46Zeu6aKYXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJyAmJiBOdW1iZXJTdHlsZU1hcC5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PT0gJzAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1dGlsLmlzUFhOdW1iZXIodikpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDpnZ7nmb3lkI3ljZXmoLflvI/kuI3mlK/mjIHorr7nva5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnIHx8ICF0YXJnZXQubmFtZXMuaW5jbHVkZXMocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDmlbDlrZfmoLflvI/vvIzlpITnkIZweOmXrumimFxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXJTdHlsZU1hcC5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdXRpbC5pc051bWJlcih2YWx1ZSkgPyBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0U3R5bGUocCwgdmFsdWUpOyAvLyDlupTnlKjliLDlhYPntKDlkoznsbtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9O1xuICAgIHJldHVybiBKRWxlbWVudFN0eWxlO1xufShKRWxlbWVudFN0eWxlTWFwKSk7XG5leHBvcnQgZGVmYXVsdCBKRWxlbWVudFN0eWxlO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgSkJhc2UgZnJvbSAnLi9jb21wb25lbnRzL2Jhc2UnO1xuaW1wb3J0IEpUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcbmltcG9ydCBKSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuL2NvcmUvZWxlbWVudCc7XG5pbXBvcnQgSkNvbnRyb2xsZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xsZXInO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi9saWIvdXRpbCc7XG52YXIgSkVkaXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkVkaXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWRpdG9yKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gb3B0aW9uLnN0eWxlIHx8IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKG9wdGlvbi5zdHlsZSwge1xuICAgICAgICAgICAgJ2JveFNoYWRvdyc6ICcwIDAgMTBweCAxMHB4ICNjY2MnLFxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kU2l6ZSc6ICcxMDAlIDEwMCUnLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5aSW5bGC5Y+q5ZON5bqUWui9tOaXi+i9rFxuICAgICAgICBvcHRpb24udHJhbnNmb3JtV2F0Y2hQcm9wcyA9IFtcbiAgICAgICAgICAgICdyb3RhdGVaJywgJ3NjYWxlWCcsICdzY2FsZVknXG4gICAgICAgIF07XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9uKSB8fCB0aGlzO1xuICAgICAgICAvLyDmiYDmnInmlK/mjIHnmoTnsbvlnotcbiAgICAgICAgX3RoaXMuc2hhcGVzID0ge1xuICAgICAgICAgICAgJ2ltYWdlJzogSkltYWdlLFxuICAgICAgICAgICAgJ3RleHQnOiBKVGV4dFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbi5jb250YWluZXIgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgb3B0aW9uLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbi5jb250YWluZXIpO1xuICAgICAgICBfdGhpcy52aWV3ID0gbmV3IEpFbGVtZW50KHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgJ2JvcmRlcic6IDAsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAwLFxuICAgICAgICAgICAgICAgICdtYXJnaW4nOiAwLFxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMTAwJScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvKi8vIOWPmOaNouaUueS4uuaOp+WItuS4u+WFg+e0oFxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5iaW5kKHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy52aWV3LFxuICAgICAgICAgICAgd2F0Y2hQcm9wczogW1xuICAgICAgICAgICAgICAgICdzY2FsZVgnLCAnc2NhbGVZJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9KTsqL1xuICAgICAgICBfdGhpcy50YXJnZXQuY3NzKHtcbiAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9uLmNvbnRhaW5lcilcbiAgICAgICAgICAgIG9wdGlvbi5jb250YWluZXIuYXBwZW5kQ2hpbGQoX3RoaXMudmlldy5kb20pO1xuICAgICAgICBfdGhpcy52aWV3LmFkZENoaWxkKF90aGlzLmRvbSk7XG4gICAgICAgIF90aGlzLmluaXQob3B0aW9uKTtcbiAgICAgICAgX3RoaXMuYmluZEV2ZW50KF90aGlzLnZpZXcuZG9tKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvLyDliJ3lp4vljJbmlbTkuKrnvJbovpHlmahcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3B0aW9uLnN0eWxlLmNvbnRhaW5lckJhY2tncm91bmRDb2xvcilcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbi5zdHlsZS5jb250YWluZXJCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIC8vIOeUn+aIkOaOp+WItuWZqFxuICAgICAgICB0aGlzLkVsZW1lbnRDb250cm9sbGVyID0gbmV3IEpDb250cm9sbGVyKHtcbiAgICAgICAgICAgIGVkaXRvcjogdGhpcyxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc3R5bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGVOb2RlLmlubmVySFRNTCA9IFwiLmotZGVzaWduLWVkaXRvci1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qLWRlc2lnbi1lZGl0b3ItY29udGFpbmVyOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCI7XG4gICAgICAgIHRoaXMudmlldy5hZGRDaGlsZChzdHlsZU5vZGUpO1xuICAgICAgICBpZiAob3B0aW9uLndpZHRoICYmIG9wdGlvbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKG9wdGlvbi53aWR0aCwgb3B0aW9uLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbignc2VsZWN0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLnNlbGVjdChfdGhpcyk7IC8vIOmAieS4reiHquW3slxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5FbGVtZW50Q29udHJvbGxlci5vbkRyYWdTdGFydChlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVkaXRvci5wcm90b3R5cGUsIFwiY2hpbGRyZW5cIiwge1xuICAgICAgICAvLyDph43lhpnlrZDpm4bkuLp0YXJnZXRcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQuY2hpbGRyZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVkaXRvci5wcm90b3R5cGUsIFwic2VsZWN0ZWRFbGVtZW50c1wiLCB7XG4gICAgICAgIC8vIOiiq+mAieS4reeahOWFg+e0oFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMuY2hpbGRyZW4pLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBKQmFzZSAmJiBlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIOe7keWumuS6i+S7tlxuICAgIEpFZGl0b3IucHJvdG90eXBlLmJpbmRFdmVudCA9IGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldylcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuYmluZEV2ZW50LmNhbGwodGhpcywgdGhpcy52aWV3LmRvbSk7IC8vIOe8lui+keWZqOS6i+S7tue7keWIsOaVtOS4quWuueWZqOS4ilxuICAgIH07XG4gICAgLy8g6YCJ5Lit5p+Q5Liq5YWD57SgXG4gICAgSkVkaXRvci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5FbGVtZW50Q29udHJvbGxlci5iaW5kKGVsKTtcbiAgICAgICAgICAgIC8vIOmAieaKiuaJgOacieW3sumAieaLqeeahOWPlua2iFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnRzLmV2ZXJ5KGZ1bmN0aW9uIChwKSB7IHJldHVybiBwICE9PSBlbCAmJiBwLnNlbGVjdGVkICYmIChwLnNlbGVjdGVkID0gZmFsc2UpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLkVsZW1lbnRDb250cm9sbGVyLnVuYmluZChlbCk7XG4gICAgfTtcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAod2lkdGggPT09IHZvaWQgMCkgeyB3aWR0aCA9IHRoaXMud2lkdGg7IH1cbiAgICAgICAgaWYgKGhlaWdodCA9PT0gdm9pZCAwKSB7IGhlaWdodCA9IHRoaXMuaGVpZ2h0OyB9XG4gICAgICAgIHRoaXMuYXR0cignZGF0YS1zaXplJywgXCJcIi5jb25jYXQod2lkdGgsIFwiKlwiKS5jb25jYXQoaGVpZ2h0KSk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGVmdCA9IHV0aWwudG9OdW1iZXIoX3RoaXMudmlldy5kb20uY2xpZW50V2lkdGgpIC8gMiAtIHV0aWwudG9OdW1iZXIod2lkdGgpIC8gMjtcbiAgICAgICAgICAgIF90aGlzLnRvcCA9IHV0aWwudG9OdW1iZXIoX3RoaXMudmlldy5kb20uY2xpZW50SGVpZ2h0KSAvIDIgLSB1dGlsLnRvTnVtYmVyKGhlaWdodCkgLyAyO1xuICAgICAgICAgICAgX3RoaXMuZW1pdCgncmVzaXplJywge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9O1xuICAgIC8vIOa3u+WKoOWFg+e0oOWIsOeUu+W4g1xuICAgIEpFZGl0b3IucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLmFkZENoaWxkLmNhbGwodGhpcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2hpbGQub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoaWxkLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLkVsZW1lbnRDb250cm9sbGVyLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmFkZENoaWxkKGNoaWxkKTtcbiAgICB9O1xuICAgIC8vIOenu+mZpFxuICAgIEpFZGl0b3IucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbCA9PT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS53YXJuKCfkuI3og73np7vpmaToh6rlt7InKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBKRWxlbWVudCkge1xuICAgICAgICAgICAgZWwub2ZmKCdzZWxlY3QnKTtcbiAgICAgICAgICAgIGVsLm9mZignbW91c2Vkb3duJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9O1xuICAgIC8vIOaKimRvbWN1bWVudOWdkOagh+i9rOS4uue8lui+keWZqOebuOWvueWdkOagh1xuICAgIEpFZGl0b3IucHJvdG90eXBlLnRvRWRpdG9yUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICAgIC8vIOe8lui+keWZqOWdkOagh1xuICAgICAgICB2YXIgZWRpdG9yUG9zID0gdXRpbC5nZXRFbGVtZW50UG9zaXRpb24odGhpcy52aWV3LmRvbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBwb3MueCAtIGVkaXRvclBvcy54LFxuICAgICAgICAgICAgeTogcG9zLnkgLSBlZGl0b3JQb3MueVxuICAgICAgICB9O1xuICAgIH07XG4gICAgSkVkaXRvci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3NzKHtcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiAnI2ZmZicsXG4gICAgICAgICAgICAnYmFja2dyb3VuZEltYWdlJzogJydcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5FbGVtZW50Q29udHJvbGxlci52aXNpYmxlID0gZmFsc2U7XG4gICAgfTtcbiAgICAvLyDnvKnmlL5cbiAgICBKRWRpdG9yLnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IHg7IH1cbiAgICAgICAgaWYgKHggPCAwLjEgfHwgeSA8IDAuMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2NhbGVYID0geDtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2NhbGVZID0geTtcbiAgICB9O1xuICAgIEpFZGl0b3IucHJvdG90eXBlLnJlZ1NoYXBlID0gZnVuY3Rpb24gKG5hbWUsIHNoYXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnNoYXBlc1tuYW1lXSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiXFx1NTE0M1xcdTdEMjBcXHU3QzdCXFx1NTc4QlwiLmNvbmNhdChuYW1lLCBcIlxcdTVERjJcXHU3RUNGXFx1NUI1OFxcdTU3MjhcIikpO1xuICAgICAgICB0aGlzLnNoYXBlc1tuYW1lXSA9IHNoYXBlO1xuICAgIH07XG4gICAgLy8g5Yib5bu65YWD57SgXG4gICAgSkVkaXRvci5wcm90b3R5cGUuY3JlYXRlU2hhcGUgPSBmdW5jdGlvbiAodHlwZSwgb3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgc2hhcGUgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0aGlzLnNoYXBlc1t0eXBlXSA6IHR5cGU7XG4gICAgICAgIGlmICghc2hhcGUpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiXCIuY29uY2F0KHR5cGUsIFwiXFx1NEUwRFxcdTVCNThcXHU1NzI4XFx1NzY4NFxcdTUxNDNcXHU3RDIwXFx1N0M3QlxcdTU3OEJcIikpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbCA9IG5ldyBzaGFwZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uKSwgeyB0eXBlOiB0eXBlIH0pKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH07XG4gICAgLy8g5Yib5bu65Zu+54mH5YWD57SgXG4gICAgSkVkaXRvci5wcm90b3R5cGUuY3JlYXRlSW1hZ2UgPSBmdW5jdGlvbiAodXJsLCBvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XG4gICAgICAgIHZhciBpbWcgPSB0aGlzLmNyZWF0ZVNoYXBlKCdpbWFnZScsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IHVybDogdXJsIH0pKTtcbiAgICAgICAgcmV0dXJuIGltZztcbiAgICB9O1xuICAgIEpFZGl0b3IucHJvdG90eXBlLmZyb21KU09OID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIGVfMiwgX2E7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICBpZiAoZGF0YS5zdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5hcHBseShkYXRhLnN0eWxlKTsgLy8g5bqU55So5qC35byPXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNpemUoZGF0YS53aWR0aCwgZGF0YS5oZWlnaHQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhkYXRhLmNoaWxkcmVuKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBjID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCFjLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5jcmVhdGVTaGFwZShjLnR5cGUsIGMpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEpFZGl0b3I7XG59KEpCYXNlKSk7XG5leHBvcnQgZGVmYXVsdCBKRWRpdG9yO1xuZXhwb3J0IHsgSkVkaXRvciwgSkltYWdlLCBKVGV4dCwgfTtcbiIsImltcG9ydCBKQmFzZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvYmFzZSc7XG5pbXBvcnQgSlRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQnO1xuaW1wb3J0IEpJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UnO1xuaW1wb3J0IEpFbGVtZW50IGZyb20gJy4vY29yZS9lbGVtZW50JztcbmltcG9ydCBKRWRpdG9yIGZyb20gJy4vZWRpdG9yJztcbmV4cG9ydCB7IEpCYXNlQ29tcG9uZW50LCBKVGV4dCwgSkltYWdlLCBKRWxlbWVudCwgSkVkaXRvciB9O1xuZXhwb3J0IGRlZmF1bHQgSkVkaXRvcjtcbiIsInZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyDmmK/lkKbmmK/mlbDlrZdcbiAgICBpc051bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJyB8fCAvXlxccypbXFxkXFwuXStcXHMqJC8udGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaYr+W4puWDj+e0oOWNleS9jeeahOWtl+espuS4slxuICAgIGlzUFhOdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiAvXlxccypbXFxkXFwuXStcXHMqcHhcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaYr+W4puinkuW6puWNleS9jeeahOWtl+espuS4slxuICAgIGlzRGVnTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gL15cXHMqW1xcZFxcLl0rXFxzKmRlZ1xccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLy8g5piv5ZCm5piv5bim5byn5bqm5Y2V5L2N55qE5a2X56ym5LiyXG4gICAgaXNSYWROdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiAvXlxccypbXFxkXFwuXStcXHMqcmFkXFxzKi9pLnRlc3Qodik7XG4gICAgfSxcbiAgICAvLyDovazkuLrlg4/ntKDlrZfnrKbkuLLmoLzlvI8gXG4gICAgdG9QWDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdweCc7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH0sXG4gICAgLy8g5bim5YOP57Sg5oiW5YW25a6D5Y2V5L2N55qE6L2s5o2i5Li65pWw5a2XXG4gICAgdG9OdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih2KTtcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodik7XG4gICAgfSxcbiAgICAvLyDlvKfluqbovazop5LluqZcbiAgICByYWRUb0RlZzogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgfSxcbiAgICAvLyDop5LluqbovazlvKfluqZcbiAgICBkZWdUb1JhZDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgfSxcbiAgICAvLyDovazkuLrop5LluqbmoLzlvI9cbiAgICB0b0RlZzogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdkZWcnO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNSYWROdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RlZyh0aGlzLnJhZFRvRGVnKHBhcnNlRmxvYXQodikpKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvLyDovazkuLrlvKfluqbmoLzlvI9cbiAgICB0b1JhZDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdyYWQnO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNEZWdOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1JhZCh0aGlzLmRlZ1RvUmFkKHBhcnNlRmxvYXQodikpKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5blhYPntKDnmoTnu53lr7nlrprkvY1cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZ2V0RWxlbWVudFBvc2l0aW9uXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWwg55uu5qCH5YWD57Sg5a+56LGhXG4gICAgICogQHJldHVybiB7cG9zaXRpb259IOS9jee9ruWvueixoSh0b3AsbGVmdClcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50UG9zaXRpb246IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgcG9zID0geyBcInlcIjogMCwgXCJ4XCI6IDAgfTtcbiAgICAgICAgaWYgKCFlbClcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIGlmIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIHdoaWxlIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBwb3MueSArPSBlbC5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgcG9zLnggKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGVsc2UgaWYgKGVsLngpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBvcy54ICs9IGVsLng7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbHNlIGlmIChlbC55KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwb3MueSArPSBlbC55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfSxcbiAgICAvLyDmiopkb21jdW1lbnTlnZDmoIfovazkuLrmjIflrprlhYPntKDnm7jlr7nlnZDmoIdcbiAgICB0b0RvbVBvc2l0aW9uOiBmdW5jdGlvbiAocG9zLCBkb20pIHtcbiAgICAgICAgdmFyIGRvbVBvcyA9IHRoaXMuZ2V0RWxlbWVudFBvc2l0aW9uKGRvbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBwb3MueCAtIGRvbVBvcy54LFxuICAgICAgICAgICAgeTogcG9zLnkgLSBkb21Qb3MueVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oqK5LiA5Liq5oiW5aSa5Liq54K557uV5p+Q5Liq54K55peL6L2s5LiA5a6a6KeS5bqmXG4gICAgICog5YWI5oqK5Z2Q5qCH5Y6f54K556e75Yiw5peL6L2s5Lit5b+D54K577yM6K6h566X5ZCO56e75ZueXG4gICAgICogQG1ldGhvZCByb3RhdGVQb2ludHNcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtBcnJheS9vYmplY3R9IHAg5LiA5Liq5oiW5aSa5Liq54K5XG4gICAgICogQHBhcmFtIHt4OiBudW1iZXIsIHk6IG51bWJlcn0gcnAg5peL6L2s5Lit5b+D54K5XG4gICAgICogQHBhcmFtIHsqfSByIOaXi+i9rOinkuW6plxuICAgICAqL1xuICAgIHJvdGF0ZVBvaW50czogZnVuY3Rpb24gKHAsIGNlbnRlciwgcikge1xuICAgICAgICBpZiAoIXIgfHwgIXApXG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHIpO1xuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHApKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciB4MSA9IHBbaV0ueCAtIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIHZhciB5MSA9IHBbaV0ueSAtIGNlbnRlci55O1xuICAgICAgICAgICAgICAgIHBbaV0ueCA9IHgxICogY29zIC0geTEgKiBzaW4gKyBjZW50ZXIueDtcbiAgICAgICAgICAgICAgICBwW2ldLnkgPSB4MSAqIHNpbiArIHkxICogY29zICsgY2VudGVyLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgeDEgPSBwLnggLSBjZW50ZXIueDtcbiAgICAgICAgICAgIHZhciB5MSA9IHAueSAtIGNlbnRlci55O1xuICAgICAgICAgICAgcC54ID0geDEgKiBjb3MgLSB5MSAqIHNpbiArIGNlbnRlci54O1xuICAgICAgICAgICAgcC55ID0geDEgKiBzaW4gKyB5MSAqIGNvcyArIGNlbnRlci55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgIH0sXG4gICAgLy8g6K6+572u5qC35byPXG4gICAgY3NzOiBmdW5jdGlvbiAoZG9tLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobmFtZSkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzKGRvbSwgbiwgbmFtZVtuXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBkb23lsZ7mgKdcbiAgICBhdHRyOiBmdW5jdGlvbiAoZG9tLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSArICcnKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkb20uZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTklMXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9uaWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJpbmdpZnlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF92LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3YyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3YzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3Y0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsaWRhdGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3ZhbGlkYXRlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVyc2lvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdmVyc2lvbi5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MS5qc1wiKSk7XG5cbnZhciBfdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzLmpzXCIpKTtcblxudmFyIF92MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjQuanNcIikpO1xuXG52YXIgX3Y0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NS5qc1wiKSk7XG5cbnZhciBfbmlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uaWwuanNcIikpO1xuXG52YXIgX3ZlcnNpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZlcnNpb24uanNcIikpO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIikpO1xuXG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIGNvbnN0IG91dHB1dCA9IFtdO1xuICBjb25zdCBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICBjb25zdCBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgY29uc3QgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgY29uc3QgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICBsZXQgYSA9IDE3MzI1ODQxOTM7XG4gIGxldCBiID0gLTI3MTczMzg3OTtcbiAgbGV0IGMgPSAtMTczMjU4NDE5NDtcbiAgbGV0IGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIGNvbnN0IG9sZGEgPSBhO1xuICAgIGNvbnN0IG9sZGIgPSBiO1xuICAgIGNvbnN0IG9sZGMgPSBjO1xuICAgIGNvbnN0IG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG4gIGNvbnN0IG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICBjb25zdCBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIGNvbnN0IG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cblxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBtZDU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG52YXIgX2RlZmF1bHQgPSB7XG4gIHJhbmRvbVVVSURcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgbGV0IHY7XG4gIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNDtcbiAgYXJyWzFdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMl0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzNdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls0XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDg7XG4gIGFycls1XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNl0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gODtcbiAgYXJyWzddID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuXG4gIGFycls4XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4O1xuICBhcnJbOV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcblxuICBhcnJbMTBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzExXSA9IHYgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMl0gPSB2ID4+PiAyNCAmIDB4ZmY7XG4gIGFyclsxM10gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsxNF0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzE1XSA9IHYgJiAweGZmO1xuICByZXR1cm4gYXJyO1xufVxuXG52YXIgX2RlZmF1bHQgPSBwYXJzZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBybmc7XG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcblxuZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgY29uc3QgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgY29uc3QgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIGNvbnN0IE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgY29uc3QgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cblxuICAgIE1baV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgIH1cblxuICAgIGZvciAobGV0IHQgPSAxNjsgdCA8IDgwOyArK3QpIHtcbiAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIGxldCBhID0gSFswXTtcbiAgICBsZXQgYiA9IEhbMV07XG4gICAgbGV0IGMgPSBIWzJdO1xuICAgIGxldCBkID0gSFszXTtcbiAgICBsZXQgZSA9IEhbNF07XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDgwOyArK3QpIHtcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKHQgLyAyMCk7XG4gICAgICBjb25zdCBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbdF0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG5cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cblxudmFyIF9kZWZhdWx0ID0gc2hhMTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB1bnNhZmVTdHJpbmdpZnk7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5mdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbnZhciBfZGVmYXVsdCA9IHN0cmluZ2lmeTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcbmxldCBfbm9kZUlkO1xuXG5sZXQgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG5sZXQgX2xhc3RNU2VjcyA9IDA7XG5sZXQgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGxldCBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICBjb25zdCBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsZXQgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICBsZXQgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxOyAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICBjb25zdCBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZy5kZWZhdWx0KSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgbGV0IG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICBsZXQgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICBjb25zdCBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIGNvbnN0IHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIGNvbnN0IHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKGxldCBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX21kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tZDUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2MyA9ICgwLCBfdi5kZWZhdWx0KSgndjMnLCAweDMwLCBfbWQuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2MztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmV4cG9ydHMuZGVmYXVsdCA9IHYzNTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuY29uc3QgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLkROUyA9IEROUztcbmNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0cy5VUkwgPSBVUkw7XG5cbmZ1bmN0aW9uIHYzNShuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgX25hbWVzcGFjZTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZXNwYWNlID0gKDAsIF9wYXJzZS5kZWZhdWx0KShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX25hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpKTtcblxudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAoX25hdGl2ZS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHY0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcblxudmFyIF9zaGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NoYTEuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2NSA9ICgwLCBfdi5kZWZhdWx0KSgndjUnLCAweDUwLCBfc2hhLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gdjU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVnZXguanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgX3JlZ2V4LmRlZmF1bHQudGVzdCh1dWlkKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdmFsaWRhdGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdmVyc2lvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdfQ==
