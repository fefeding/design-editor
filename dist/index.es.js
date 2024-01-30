(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _baseComponent = _interopRequireDefault(require("../core/baseComponent"));
var _data = require("../constant/data");
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
      nodeType: 'img',
      dataType: _data.JImageData
    })) || this;
    _this.target.dom.onload = function (e) {
      _this.emit('load', e);
    };
    _this.target.dom.onerror = function (e) {
      _this.emit('error', e);
    };
    _this.target.attr('crossorigin', 'anonymous');
    // 属性变化映射到style
    _this.data.watch(['src'], {
      set: function set(item) {
        _this.target.dom.src = item.value;
      },
      get: function get(name) {
        return _this.target.dom.src;
      }
    });
    var src = option.url || option.src;
    if (src) _this.data.src = src;
    return _this;
  }
  JImage.prototype.toJSON = function (props) {
    if (props === void 0) {
      props = [];
    }
    props.push('src');
    return _super.prototype.toJSON.call(this, props);
  };
  return JImage;
}(_baseComponent["default"]);
var _default = exports["default"] = JImage;

},{"../constant/data":3,"../core/baseComponent":8}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _baseComponent = _interopRequireDefault(require("../core/baseComponent"));
var _data = require("../constant/data");
var _styleMap = require("../constant/styleMap");
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
var JText = /** @class */function (_super) {
  __extends(JText, _super);
  function JText(option) {
    if (option === void 0) {
      option = {};
    }
    var _this = this;
    option.style = __assign({
      fontFamily: 'Arial',
      textAlign: 'left',
      fontSize: 22,
      fontWeight: 'normal',
      fontStyle: 'normal',
      wordWrap: true,
      wordBreak: "keep-all"
    }, option.style);
    _this = _super.call(this, __assign(__assign({}, option), {
      nodeType: 'div',
      dataType: _data.JTextData
    })) || this;
    // 属性变化映射到style
    _this.data.watch(['text'], {
      set: function set(item) {
        _this.target.dom.innerText = item.value;
      },
      get: function get(name) {
        return _this.target.dom.innerText;
      }
    });
    var text = option.text;
    if (text) _this.data.text = text;
    // 双击可编辑
    _this.on('dblclick', function () {
      _this.edit();
    });
    _this.on('select', function () {
      _this.closeEdit();
    });
    return _this;
  }
  // 进入编辑状态
  JText.prototype.edit = function () {
    var _this = this;
    if (!this.editable) return;
    var editEl = this.editor.textEditElement;
    if (!editEl) {
      editEl = this.editor.textEditElement = new _element["default"]({
        nodeType: 'textarea',
        visible: false,
        zIndex: _styleMap.topZIndex,
        style: {
          boxSizing: 'border-box',
          padding: '4px',
          position: 'absolute',
          resize: 'both'
        }
      });
      editEl.on('blur', function (e) {
        _this.closeEdit();
      });
      editEl.on('click dblclick mousedown', function (e) {
        e.stopPropagation();
      });
      this.editor.dom.appendChild(editEl.dom);
    }
    editEl.dom.value = this.data.text;
    editEl.attr('data-target', this.id);
    var w = _util["default"].toNumber(this.data.width) * 1.2;
    var h = _util["default"].toNumber(this.data.height) * 1.2;
    var style = {};
    style.width = Math.max(w, 100) + 'px';
    style.height = Math.max(h, 100) + 'px';
    style.top = this.data.top;
    style.left = this.data.left;
    style.fontSize = this.style.fontSize;
    style.fontFamily = this.style.fontFamily;
    style.fontWeight = this.style.fontWeight;
    style.display = 'inline-block';
    _util["default"].css(editEl, style);
    editEl.dom.focus(); // 进入控件
  };
  // 结束编辑 
  JText.prototype.closeEdit = function () {
    var editEl = this.editor.textEditElement;
    if (!editEl) return;
    // 编辑的是当前元素，才采用它的值
    if (editEl.attr('data-target') === this.id) {
      this.data.text = editEl.dom.value;
    }
    editEl.data.visible = false;
    editEl.dom.value = ''; // 置空
  };
  JText.prototype.toJSON = function (props) {
    if (props === void 0) {
      props = [];
    }
    props.push('text');
    return _super.prototype.toJSON.call(this, props);
  };
  return JText;
}(_baseComponent["default"]);
var _default = exports["default"] = JText;

},{"../constant/data":3,"../constant/styleMap":5,"../core/baseComponent":8,"../core/element":10,"../lib/util":16}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.JTextData = exports.JImageData = exports.JElementData = void 0;
var _eventEmitter = _interopRequireDefault(require("./eventEmitter"));
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
var JData = /** @class */function (_super) {
  __extends(JData, _super);
  function JData(data) {
    if (data === void 0) {
      data = {};
    }
    var _this = _super.call(this) || this;
    _this.data = {};
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
          if (!n) continue;
          this.watch(n, watcher);
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
    var watches = [];
    if (this.watcher.has(name)) watches = this.watcher.get(name);else {
      this.watcher.set(name, watches);
    }
    watches.push(watcher);
    this.data[name] && this.propertyChange(name); // 触发一次
    return this;
  };
  // 属性改变
  JData.prototype.propertyChange = function (name, value) {
    var e_2, _a;
    if (typeof value !== 'undefined') this.data[name] = value;else {
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
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (watches_1_1 && !watches_1_1.done && (_a = watches_1["return"])) _a.call(watches_1);
        } finally {
          if (e_2) throw e_2.error;
        }
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
          if (typeof v !== 'undefined') return v;
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (watches_2_1 && !watches_2_1.done && (_a = watches_2["return"])) _a.call(watches_2);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
    }
    return this.data[name];
  };
  JData.prototype.from = function (data) {
    if (this.data) Object.assign(this, data);
    return this;
  };
  JData.prototype.toJSON = function () {
    var e_4, _a;
    var obj = {};
    var props = Object.getOwnPropertyNames(this.data);
    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var name_2 = props_1_1.value;
        if (typeof this[name_2] === 'undefined' || typeof this[name_2] === 'function') continue;
        obj[name_2] = this[name_2];
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1["return"])) _a.call(props_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }
    return obj;
  };
  // 生成数据Data
  JData.createProxy = function (data) {
    // 代理处理
    var proxy = new Proxy(data, {
      get: function get(target, p, receiver) {
        var v = target[p];
        if (typeof v === 'undefined' && typeof p === 'string') {
          return target.getProperty(p);
        }
        return v;
      },
      set: function set(target, p, value, receiver) {
        if (typeof p === 'string') target.propertyChange(p, value);else target[p] = value;
        return true;
      }
    });
    return proxy;
  };
  return JData;
}(_eventEmitter["default"]);
var _default = exports["default"] = JData; // 元素卙础数据对象
var JElementData = exports.JElementData = /** @class */function (_super) {
  __extends(JElementData, _super);
  function JElementData() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return JElementData;
}(JData);
var JImageData = exports.JImageData = /** @class */function (_super) {
  __extends(JImageData, _super);
  function JImageData() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return JImageData;
}(JElementData);
var JTextData = exports.JTextData = /** @class */function (_super) {
  __extends(JTextData, _super);
  function JTextData() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return JTextData;
}(JElementData);

},{"./eventEmitter":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
var EventEmitter = /** @class */function (_super) {
  __extends(EventEmitter, _super);
  function EventEmitter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  // 用空格分隔事件名
  EventEmitter.prototype.splitEventNames = function (name) {
    if (!name) return [];
    var arr = name.split(' ');
    return arr;
  };
  /**
   * Add a listener for a given event.
   */
  EventEmitter.prototype.on = function (event, fn, context) {
    var e_1, _a;
    if (typeof event === 'string') {
      var events = this.splitEventNames(event);
      if (events.length) {
        try {
          for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
            var name_1 = events_1_1.value;
            _super.prototype.on.call(this, name_1, fn, context);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (events_1_1 && !events_1_1.done && (_a = events_1["return"])) _a.call(events_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    } else {
      _super.prototype.on.call(this, event, fn, context);
    }
    return this;
  };
  EventEmitter.prototype.off = function (event, fn, context, once) {
    var e_2, _a;
    if (typeof event === 'string') {
      var events = this.splitEventNames(event);
      if (events.length) {
        try {
          for (var events_2 = __values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
            var name_2 = events_2_1.value;
            _super.prototype.off.call(this, name_2, fn, context);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (events_2_1 && !events_2_1.done && (_a = events_2["return"])) _a.call(events_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
    } else {
      _super.prototype.off.call(this, event, fn, context);
    }
    return this;
  };
  return EventEmitter;
}(_eventemitter["default"]);
var _default = exports["default"] = EventEmitter;

},{"eventemitter3":17}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topZIndex = exports["default"] = exports.JElementStyleProperty = exports.JElementStyleDeclaration = exports.ContainerDefaultStyle = void 0;
var _eventEmitter = _interopRequireDefault(require("./eventEmitter"));
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
var topZIndex = exports.topZIndex = 10000;
// 支持的样式属性列表
var JElementStyleDeclaration = exports.JElementStyleDeclaration = /** @class */function (_super) {
  __extends(JElementStyleDeclaration, _super);
  function JElementStyleDeclaration() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return JElementStyleDeclaration;
}(_eventEmitter["default"]);
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
    this.zIndex = 0;
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
  width: 'auto',
  height: 'auto',
  right: 'auto',
  bottom: 'auto',
  padding: '0',
  margin: '0',
  zIndex: '0',
  display: 'inline-block',
  overflow: 'visible'
};

},{"./eventEmitter":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _eventEmitter = _interopRequireDefault(require("./eventEmitter"));
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
}(_eventEmitter["default"]);
var _default = exports["default"] = Transform;

},{"../lib/util":16,"./eventEmitter":4}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],8:[function(require,module,exports){
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
      className: 'j-design-editor-container',
      isComponent: true
    })) || this;
    // 选中
    _this._selected = false;
    option.target = option.target || {};
    // 生成当前控制的元素
    _this.target = new _element["default"](__assign(__assign({}, option), {
      visible: true,
      data: {},
      // 不响应本身的变换，只响应父级的
      transformWatchProps: [],
      style: {
        display: 'block',
        cursor: 'pointer',
        width: '100%',
        height: '100%'
      }
    }));
    _this.addChild(_this.target);
    // 变换改为控制主元素
    _this.transform.bind({
      target: _this.target,
      watchProps: ['rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY']
    });
    return _this;
    //this.initData(option);// 初始化数据
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

},{"../constant/styleMap":5,"../core/element":10}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.JControllerItem = void 0;
var _util = _interopRequireDefault(require("../lib/util"));
var _element = _interopRequireDefault(require("./element"));
var _styleMap = require("../constant/styleMap");
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
    _this.data.width = _this.data.height = _this.size;
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
  JControllerItem.prototype.onDragMove = function (event) {
    if (!this.isMoving) return;
    var pos = {
      x: event.pageX || event.x,
      y: event.pageY || event.y
    };
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
  JControllerItem.prototype.onDragStart = function (event) {
    var pos = {
      x: event.pageX || event.x,
      y: event.pageY || event.y
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
    option.zIndex = _styleMap.topZIndex;
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
    _this.editor.dom.appendChild(_this.dom);
    // 双击事件透传给操作杆绑定的对象
    _this.on('dblclick', function (e) {
      if (_this.target) {
        _this.target.emit('dblclick', e);
      }
    });
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
            var rx = offX / _util["default"].toNumber(this.data.width) * Math.PI;
            var ry = offY / _util["default"].toNumber(this.data.height) * Math.PI;
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
      var width = _util["default"].toNumber(this.data.width) + args.width;
      this.data.width = Math.max(width, 1);
    }
    if (args.height) {
      this.data.height = Math.max(_util["default"].toNumber(this.data.height) + args.height, 1);
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
        x: _util["default"].toNumber(this.data.left) + _util["default"].toNumber(this.data.width) / 2,
        y: _util["default"].toNumber(this.data.top) + _util["default"].toNumber(this.data.height) / 2
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
      x: _util["default"].toNumber(this.data.left) + _util["default"].toNumber(this.data.width) / 2,
      y: _util["default"].toNumber(this.data.top) + _util["default"].toNumber(this.data.height) / 2
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
      x: _util["default"].toNumber(this.data.left) + (this.isEditor ? _util["default"].toNumber(this.target.data.left) : 0),
      y: _util["default"].toNumber(this.data.top) + (this.isEditor ? _util["default"].toNumber(this.target.data.top) : 0)
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
      rotateZ: this.transform.rotateZ
    });
    var width = _util["default"].toNumber(this.data.width) - this.paddingSize * 2;
    var height = _util["default"].toNumber(this.data.height) - this.paddingSize * 2;
    if (this.target.data.width !== width) this.target.data.width = width;
    if (this.target.data.height !== height) this.target.data.height = height;
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
    var e_2, _a;
    this.isEditor = target === this.editor;
    this.reset(this.isEditor);
    // 编辑器的话，需要把它的坐标转为相对于容器的
    var pos = {
      x: this.isEditor ? 0 : _util["default"].toNumber(target.data.left),
      y: this.isEditor ? 0 : _util["default"].toNumber(target.data.top)
    };
    this.data.left = pos.x;
    this.data.top = pos.y;
    this.data.width = _util["default"].toNumber(target.data.width) + this.paddingSize * 2;
    this.data.height = _util["default"].toNumber(target.data.height) + this.paddingSize * 2;
    this.transform.from({
      // rotateX: target.transform.rotateX,
      // rotateY: target.transform.rotateY,
      rotateZ: target.transform.rotateZ
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
    // 如果是编辑器，则不能捕获事件
    this.css({
      pointerEvents: this.isEditor ? 'none' : 'auto'
    });
  };
  // 解除绑定
  JControllerComponent.prototype.unbind = function (target) {
    if (this.target === target) {
      this.reset(false);
      this.data.visible = false;
    }
  };
  return JControllerComponent;
}(JControllerItem);
var _default = exports["default"] = JControllerComponent;

},{"../constant/styleMap":5,"../lib/util":16,"./element":10}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _eventEmitter = _interopRequireDefault(require("../constant/eventEmitter"));
var _uuid = require("uuid");
var _transform = _interopRequireDefault(require("../constant/transform"));
var _style = _interopRequireDefault(require("./style"));
var _util = _interopRequireDefault(require("../lib/util"));
var _event = _interopRequireDefault(require("../core/event"));
var _data = require("../constant/data");
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
    _this._id = '';
    // 类型名称
    _this._type = '';
    // 子元素
    _this._children = [];
    // 是否可编辑
    _this.editable = true;
    _this._id = _this.id || option.id || (0, _uuid.v4)().replace(/-/g, '');
    _this._type = _this.type || option.type || '';
    var nodeType = option.nodeType || 'div';
    _this._dom = document.createElement(nodeType);
    if (option.editor) _this.editor = option.editor;
    // 样式代理处理
    _this.style = _style["default"].createProxy();
    _this.style.on('change', function (s) {
      _this.setDomStyle(s.name, s.value);
      _this.emit('styleChange', __assign(__assign({}, s), {
        target: _this
      }));
    });
    // 变换控制的是核心元素
    _this.transform = _transform["default"].createProxy(option.transform, {
      target: _this,
      // 如果指定了只响应某几个属性
      watchProps: option.transformWatchProps
    });
    var dataType = option.dataType || _data.JElementData;
    _this.data = _data.JElementData.createProxy(new dataType());
    // 如果是组件，不在这里进行数据初始化调用
    _this.initData(option);
    if (option.className) _this.className = option.className;
    _this.bindEvent(); // 事件绑定
    return _this;
  }
  // 初始化一些基础属性
  JElement.prototype.initData = function (option) {
    var _this = this;
    // 属性变化映射到style
    this.data.watch(['left', 'top', 'width', 'height', 'zIndex', 'visible'], {
      set: function set(item) {
        if (item.name === 'visible') {
          _this.style.display = item.value ? 'block' : 'none';
        } else if (item.name === 'rotation') {
          _this.transform.rotateZ = item.value;
        } else if (item.name === 'angle') {
          _this.transform.rotateZ = _util["default"].degToRad(item.value);
        } else _this.style[item.name] = item.value;
      },
      get: function get(name) {
        if (name === 'width') {
          var w = _this.style.width || 0;
          if ((!w || w === 'auto') && _this.dom && _this.dom.clientWidth) return _this.dom.clientWidth;
          return w;
        } else if (name === 'height') {
          var h = _this.style.height || 0;
          if ((!h || h === 'auto') && _this.dom && _this.dom.clientHeight) return _this.dom.clientHeight;
          return h;
        } else if (name === 'rotation') {
          return _this.transform.rotateZ;
        } else if (name === 'angle') {
          return _util["default"].radToDeg(_this.transform.rotateZ);
        } else if (name === 'visible') {
          return _this.style.display !== 'none';
        }
        return _this.style[name];
      }
    });
    if (option.style) this.style.apply(option.style);
    if (option.editable === false) this.editable = false;
    if (option.visible === false) this.visible = false;
    if (option.data) {
      this.data.from(option.data);
    }
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
  Object.defineProperty(JElement.prototype, "id", {
    get: function get() {
      return this._id;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "type", {
    get: function get() {
      return this._type;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "children", {
    get: function get() {
      return this._children;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(JElement.prototype, "dom", {
    get: function get() {
      return this._dom;
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
  Object.defineProperty(JElement.prototype, "visible", {
    get: function get() {
      return this.data.visible;
    },
    set: function set(v) {
      this.data.visible = v;
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
    this.data.left = _util["default"].toNumber(this.data.left) + dx;
    this.data.top = _util["default"].toNumber(this.data.top) + dy;
    this.emit('move', {
      dx: dx,
      dy: dy
    });
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
}(_eventEmitter["default"]);
var _default = exports["default"] = JElement;

},{"../constant/data":3,"../constant/eventEmitter":4,"../constant/transform":6,"../core/event":11,"../lib/util":16,"./style":13,"uuid":18}],11:[function(require,module,exports){
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

},{"../lib/util":16}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.JFontData = void 0;
var _eventEmitter = _interopRequireDefault(require("../constant/eventEmitter"));
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
            if (!this.font) this.font = new FontFace(this.family, "url(\"".concat(this.url, "\")"));
            return [4 /*yield*/, this.font.load()];
          case 1:
            f = _a.sent();
            document.fonts.add(f); // 生效
            return [2 /*return*/, this];
        }
      });
    });
  };
  JFontData.prototype.toHtml = function () {
    return "@font-face {font-family: \"".concat(this.family, "\"; src: url(\"").concat(this.url, "\")}");
  };
  return JFontData;
}();
var JFonts = /** @class */function (_super) {
  __extends(JFonts, _super);
  function JFonts(fontSet) {
    if (fontSet === void 0) {
      fontSet = new Map();
    }
    var _this = _super.call(this) || this;
    _this.fonts = fontSet;
    _this.init();
    return _this;
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
      var font, f;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            font = this.get(name);
            if (!font) return [3 /*break*/, 1];
            return [2 /*return*/, font];
          case 1:
            font = new JFontData(name, url);
            this.fonts.set(name, font);
            return [4 /*yield*/, font.load()];
          case 2:
            f = _a.sent();
            this.emit('load', f); // 加载字本事件
            return [2 /*return*/, f];
        }
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
}(_eventEmitter["default"]);
var _default = exports["default"] = JFonts;

},{"../constant/eventEmitter":4}],13:[function(require,module,exports){
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

},{"../constant/styleMap":5,"../lib/util":16}],14:[function(require,module,exports){
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
var _baseComponent = _interopRequireDefault(require("./core/baseComponent"));
var _text = _interopRequireDefault(require("./components/text"));
var _image = _interopRequireDefault(require("./components/image"));
var _element = _interopRequireDefault(require("./core/element"));
var _controller = _interopRequireDefault(require("./core/controller"));
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
    this.dom.appendChild(styleNode);
    // 字体加载成功，同时加入到dom结构中
    this.fonts.on('load', function (font) {
      styleNode.append(font.toHtml());
    });
    this.on('select', function (e) {
      _this.select(_this); // 选中自已
    });
    this.on('mousedown', function (e) {
      this.selected = true;
      this.elementController.onDragStart(e);
    });
    // 刷新样式
    this.style.refresh();
    this.resize(); // 触发一次大小改变
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
          if (el instanceof _baseComponent["default"] && el.selected) {
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
      width = this.data.width;
    }
    if (height === void 0) {
      height = this.data.height;
    }
    this.attr('data-size', "".concat(width, "*").concat(height));
    this.data.width = width;
    this.data.height = height;
    setTimeout(function () {
      _this.data.left = _util["default"].toNumber(_this.view.dom.clientWidth) / 2 - _util["default"].toNumber(width) / 2;
      _this.data.top = _util["default"].toNumber(_this.view.dom.clientHeight) / 2 - _util["default"].toNumber(height) / 2;
      _this.emit('resize', {
        width: width,
        height: height
      });
    }, 10);
  };
  // 添加元素到画布
  JEditor.prototype.addChild = function (child) {
    var _this = this;
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
    // 监听样式改变
    child.on('styleChange', function (e) {
      _this.emit('styleChange', e);
    });
    child.parent = this; // 把父设置成编辑器
    child.editor = this;
    // 刷新样式
    child.style.refresh();
    this.target.addChild(child, this.target);
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
      el.off('styleChange');
    }
    return this.target.removeChild(el);
  };
  // 把domcument坐标转为编辑器相对坐标
  JEditor.prototype.toEditorPosition = function (pos) {
    // 编辑器坐标
    var editorPos = _util["default"].getElementBoundingRect(this.target.dom);
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
  JEditor.prototype.fromJSON = function (data) {
    var e_2, _a;
    this.clear();
    if (typeof data === 'string') data = JSON.parse(data);
    if (data.style) {
      this.style.apply(data.style); // 应用样式
    }
    this.resize(data.width || data.data.width, data.height || data.data.height);
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
}(_baseComponent["default"]);
var _default = exports["default"] = JEditor;

},{"./components/image":1,"./components/text":2,"./core/baseComponent":8,"./core/controller":9,"./core/element":10,"./core/fonts":12,"./lib/util":16}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  JBaseComponent: true,
  JText: true,
  JImage: true,
  JElement: true,
  JEditor: true
};
Object.defineProperty(exports, "JBaseComponent", {
  enumerable: true,
  get: function get() {
    return _baseComponent["default"];
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
var _baseComponent = _interopRequireDefault(require("./core/baseComponent"));
var _text = _interopRequireDefault(require("./components/text"));
var _image = _interopRequireDefault(require("./components/image"));
var _element = _interopRequireDefault(require("./core/element"));
var _editor = _interopRequireDefault(require("./editor"));
var _types = require("./constant/types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _editor["default"];

},{"./components/image":1,"./components/text":2,"./constant/types":7,"./core/baseComponent":8,"./core/element":10,"./editor":14}],16:[function(require,module,exports){
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
  // 获取元素bounds
  getElementBoundingRect: function getElementBoundingRect(el) {
    var bounds = {
      height: 0,
      width: 0,
      x: 0,
      y: 0
    };
    if (el.getBoundingClientRect) {
      bounds = el.getBoundingClientRect();
      var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      bounds.x += scrollLeft;
      bounds.y += scrollTop;
    } else {
      var pos = this.getElementPosition(el);
      bounds.x = pos.x;
      bounds.y = pos.y;
      bounds.width = el.clientWidth;
      bounds.height = el.clientHeight;
    }
    return bounds;
  },
  // 把domcument坐标转为指定元素相对坐标
  toDomPosition: function toDomPosition(pos, dom) {
    var domPos = this.getElementBoundingRect(dom);
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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
},{"./nil.js":21,"./parse.js":22,"./stringify.js":26,"./v1.js":27,"./v3.js":28,"./v4.js":30,"./v5.js":31,"./validate.js":32,"./version.js":33}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports.default = _default;
},{}],22:[function(require,module,exports){
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
},{"./validate.js":32}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports.default = _default;
},{}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{"./validate.js":32}],27:[function(require,module,exports){
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
},{"./rng.js":24,"./stringify.js":26}],28:[function(require,module,exports){
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
},{"./md5.js":19,"./v35.js":29}],29:[function(require,module,exports){
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
},{"./parse.js":22,"./stringify.js":26}],30:[function(require,module,exports){
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
},{"./native.js":20,"./rng.js":24,"./stringify.js":26}],31:[function(require,module,exports){
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
},{"./sha1.js":25,"./v35.js":29}],32:[function(require,module,exports){
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
},{"./regex.js":23}],33:[function(require,module,exports){
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
},{"./validate.js":32}]},{},[15])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2NvbXBvbmVudHMvaW1hZ2UuanMiLCJkaXN0L2NvbXBvbmVudHMvdGV4dC5qcyIsImRpc3QvY29uc3RhbnQvZGF0YS5qcyIsImRpc3QvY29uc3RhbnQvZXZlbnRFbWl0dGVyLmpzIiwiZGlzdC9jb25zdGFudC9zdHlsZU1hcC5qcyIsImRpc3QvY29uc3RhbnQvdHJhbnNmb3JtLmpzIiwiZGlzdC9jb3JlL2Jhc2VDb21wb25lbnQuanMiLCJkaXN0L2NvcmUvY29udHJvbGxlci5qcyIsImRpc3QvY29yZS9lbGVtZW50LmpzIiwiZGlzdC9jb3JlL2V2ZW50LmpzIiwiZGlzdC9jb3JlL2ZvbnRzLmpzIiwiZGlzdC9jb3JlL3N0eWxlLmpzIiwiZGlzdC9lZGl0b3IuanMiLCJkaXN0L2luZGV4LmpzIiwiZGlzdC9saWIvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvbWQ1LWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L25hdGl2ZS1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9uaWwuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3BhcnNlLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9yZWdleC5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3Qvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3NoYTEtYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3Qvc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC92MS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdjMuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3YzNS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdjQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3Y1LmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC92YWxpZGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdmVyc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQzBCQSxJQUFBLGNBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFDQSxJQUFBLEtBQUEsR0FBQSxPQUFBO0FBQThDLFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQTNCOUMsSUFBSSxTQUFTLEdBQUksVUFBUSxTQUFLLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUksY0FBYSxHQUFHLFNBQUEsY0FBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ2hDLGNBQWEsR0FBRyxNQUFNLENBQUMsY0FBYyxJQUNoQztNQUFFLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7TUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDO0lBQ3JHLE9BQU8sY0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNELE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQ3JDLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdB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QUFDLENBQUM7TUFDckIsQ0FBQyxDQUFDO01BQ0YsTUFBTSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxVQUFVLENBQUMsRUFBRTtRQUMvQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7TUFDdkIsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDM0M7SUFDQSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7SUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxJQUFJLENBQUMsR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUc7SUFDNUMsSUFBSSxDQUFDLEdBQUcsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHO0lBQzdDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSTtJQUNyQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUk7SUFDdEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7SUFDekIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7SUFDM0IsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7SUFDcEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7SUFDeEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FB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LElBQUk7UUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO01BQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFBRTtJQUM3RyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekUsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELElBQUksV0FBVyxHQUFJLFVBQVEsU0FBSyxXQUFXLElBQUssVUFBVSxPQUFPLEVBQUUsSUFBSSxFQUFFO0VBQ3JFLElBQUksQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFLENBQUM7TUFBRSxJQUFJLEVBQUUsU0FBQSxLQUFBLEVBQVc7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUUsQ0FBQztNQUFFLElBQUksRUFBRSxFQUFFO01BQUUsR0FBRyxFQUFFO0lBQUcsQ0FBQztJQUFFLENBQUM7SUFBRSxDQUFDO0lBQUUsQ0FBQztJQUFFLENBQUM7RUFDaEgsT0FBTyxDQUFDLEdBQUc7SUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQUUsQ0FBQyxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVc7SUFBRSxPQUFPLElBQUk7RUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3hKLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRTtJQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUU7TUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFFLENBQUM7RUFBRTtFQUNqRSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDZCxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO01BQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztNQUM1SixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUN2QyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVCxLQUFLLENBQUM7UUFBRSxLQUFLLENBQUM7VUFBRSxDQUFDLEdBQUcsRUFBRTtVQUFFO1FBQ3hCLEtBQUssQ0FBQztVQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7VUFBRSxPQUFPO1lBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBRSxJQUFJLEVBQUU7VUFBTSxDQUFDO1FBQ3ZELEtBQUssQ0FBQztVQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7VUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUFFO1FBQ3hDLEtBQUssQ0FBQztVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUFFO1FBQ3hDO1VBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxHQUFHLENBQUM7WUFBRTtVQUFVO1VBQzNHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUFFO1VBQU87VUFDckYsSUFBSSxFQUFFLENBQUMs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL2Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgSkltYWdlRGF0YSB9IGZyb20gJy4uL2NvbnN0YW50L2RhdGEnO1xudmFyIEpJbWFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkltYWdlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpJbWFnZShvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IG5vZGVUeXBlOiAnaW1nJywgZGF0YVR5cGU6IEpJbWFnZURhdGEgfSkpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnRhcmdldC5kb20ub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ2xvYWQnLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMudGFyZ2V0LmRvbS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywgZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnRhcmdldC5hdHRyKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKTtcbiAgICAgICAgLy8g5bGe5oCn5Y+Y5YyW5pig5bCE5Yiwc3R5bGVcbiAgICAgICAgX3RoaXMuZGF0YS53YXRjaChbXG4gICAgICAgICAgICAnc3JjJ1xuICAgICAgICBdLCB7XG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmRvbS5zcmMgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudGFyZ2V0LmRvbS5zcmM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc3JjID0gb3B0aW9uLnVybCB8fCBvcHRpb24uc3JjO1xuICAgICAgICBpZiAoc3JjKVxuICAgICAgICAgICAgX3RoaXMuZGF0YS5zcmMgPSBzcmM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSkltYWdlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSBbXTsgfVxuICAgICAgICBwcm9wcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudG9KU09OLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIH07XG4gICAgcmV0dXJuIEpJbWFnZTtcbn0oQmFzZSkpO1xuZXhwb3J0IGRlZmF1bHQgSkltYWdlO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL2Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgSlRleHREYXRhIH0gZnJvbSAnLi4vY29uc3RhbnQvZGF0YSc7XG5pbXBvcnQgeyB0b3BaSW5kZXggfSBmcm9tICcuLi9jb25zdGFudC9zdHlsZU1hcCc7XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi4vY29yZS9lbGVtZW50JztcbnZhciBKVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSlRleHQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSlRleHQob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb24uc3R5bGUgPSBfX2Fzc2lnbih7IGZvbnRGYW1pbHk6ICdBcmlhbCcsIHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6ICdub3JtYWwnLCBmb250U3R5bGU6ICdub3JtYWwnLCB3b3JkV3JhcDogdHJ1ZSwgd29yZEJyZWFrOiBcImtlZXAtYWxsXCIgfSwgb3B0aW9uLnN0eWxlKTtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uKSwgeyBub2RlVHlwZTogJ2RpdicsIGRhdGFUeXBlOiBKVGV4dERhdGEgfSkpIHx8IHRoaXM7XG4gICAgICAgIC8vIOWxnuaAp+WPmOWMluaYoOWwhOWIsHN0eWxlXG4gICAgICAgIF90aGlzLmRhdGEud2F0Y2goW1xuICAgICAgICAgICAgJ3RleHQnXG4gICAgICAgIF0sIHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuZG9tLmlubmVyVGV4dCA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy50YXJnZXQuZG9tLmlubmVyVGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0ZXh0ID0gb3B0aW9uLnRleHQ7XG4gICAgICAgIGlmICh0ZXh0KVxuICAgICAgICAgICAgX3RoaXMuZGF0YS50ZXh0ID0gdGV4dDtcbiAgICAgICAgLy8g5Y+M5Ye75Y+v57yW6L6RXG4gICAgICAgIF90aGlzLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmVkaXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jbG9zZUVkaXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLy8g6L+b5YWl57yW6L6R54q25oCBXG4gICAgSlRleHQucHJvdG90eXBlLmVkaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5lZGl0YWJsZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGVkaXRFbCA9IHRoaXMuZWRpdG9yLnRleHRFZGl0RWxlbWVudDtcbiAgICAgICAgaWYgKCFlZGl0RWwpIHtcbiAgICAgICAgICAgIGVkaXRFbCA9IHRoaXMuZWRpdG9yLnRleHRFZGl0RWxlbWVudCA9IG5ldyBKRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbm9kZVR5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgekluZGV4OiB0b3BaSW5kZXgsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc0cHgnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAnYm90aCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVkaXRFbC5vbignYmx1cicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2VFZGl0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVkaXRFbC5vbignY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5kb20uYXBwZW5kQ2hpbGQoZWRpdEVsLmRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWRpdEVsLmRvbS52YWx1ZSA9IHRoaXMuZGF0YS50ZXh0O1xuICAgICAgICBlZGl0RWwuYXR0cignZGF0YS10YXJnZXQnLCB0aGlzLmlkKTtcbiAgICAgICAgdmFyIHcgPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgKiAxLjI7XG4gICAgICAgIHZhciBoID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEuaGVpZ2h0KSAqIDEuMjtcbiAgICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICAgIHN0eWxlLndpZHRoID0gTWF0aC5tYXgodywgMTAwKSArICdweCc7XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IE1hdGgubWF4KGgsIDEwMCkgKyAncHgnO1xuICAgICAgICBzdHlsZS50b3AgPSB0aGlzLmRhdGEudG9wO1xuICAgICAgICBzdHlsZS5sZWZ0ID0gdGhpcy5kYXRhLmxlZnQ7XG4gICAgICAgIHN0eWxlLmZvbnRTaXplID0gdGhpcy5zdHlsZS5mb250U2l6ZTtcbiAgICAgICAgc3R5bGUuZm9udEZhbWlseSA9IHRoaXMuc3R5bGUuZm9udEZhbWlseTtcbiAgICAgICAgc3R5bGUuZm9udFdlaWdodCA9IHRoaXMuc3R5bGUuZm9udFdlaWdodDtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB1dGlsLmNzcyhlZGl0RWwsIHN0eWxlKTtcbiAgICAgICAgZWRpdEVsLmRvbS5mb2N1cygpOyAvLyDov5vlhaXmjqfku7ZcbiAgICB9O1xuICAgIC8vIOe7k+adn+e8lui+kSBcbiAgICBKVGV4dC5wcm90b3R5cGUuY2xvc2VFZGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWRpdEVsID0gdGhpcy5lZGl0b3IudGV4dEVkaXRFbGVtZW50O1xuICAgICAgICBpZiAoIWVkaXRFbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8g57yW6L6R55qE5piv5b2T5YmN5YWD57Sg77yM5omN6YeH55So5a6D55qE5YC8XG4gICAgICAgIGlmIChlZGl0RWwuYXR0cignZGF0YS10YXJnZXQnKSA9PT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnRleHQgPSBlZGl0RWwuZG9tLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVkaXRFbC5kYXRhLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgZWRpdEVsLmRvbS52YWx1ZSA9ICcnOyAvLyDnva7nqbpcbiAgICB9O1xuICAgIEpUZXh0LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSBbXTsgfVxuICAgICAgICBwcm9wcy5wdXNoKCd0ZXh0Jyk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnRvSlNPTi5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICB9O1xuICAgIHJldHVybiBKVGV4dDtcbn0oQmFzZSkpO1xuZXhwb3J0IGRlZmF1bHQgSlRleHQ7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJztcbnZhciBKRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkRhdGEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkRhdGEoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSA9PT0gdm9pZCAwKSB7IGRhdGEgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kYXRhID0ge307XG4gICAgICAgIF90aGlzLndhdGNoZXIgPSBuZXcgTWFwKCk7XG4gICAgICAgIF90aGlzLmZyb20oZGF0YSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLy8g55uR5o6n5p+Q5Liq5bGe5oCn5Y+Y5YyWXG4gICAgSkRhdGEucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gKG5hbWUsIHdhdGNoZXIpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWVfMSA9IF9fdmFsdWVzKG5hbWUpLCBuYW1lXzFfMSA9IG5hbWVfMS5uZXh0KCk7ICFuYW1lXzFfMS5kb25lOyBuYW1lXzFfMSA9IG5hbWVfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuYW1lXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2F0Y2gobiwgd2F0Y2hlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lXzFfMSAmJiAhbmFtZV8xXzEuZG9uZSAmJiAoX2EgPSBuYW1lXzEucmV0dXJuKSkgX2EuY2FsbChuYW1lXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2F0Y2hlcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy53YXRjaGVyLmhhcyhuYW1lKSlcbiAgICAgICAgICAgIHdhdGNoZXMgPSB0aGlzLndhdGNoZXIuZ2V0KG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlci5zZXQobmFtZSwgd2F0Y2hlcyk7XG4gICAgICAgIH1cbiAgICAgICAgd2F0Y2hlcy5wdXNoKHdhdGNoZXIpO1xuICAgICAgICB0aGlzLmRhdGFbbmFtZV0gJiYgdGhpcy5wcm9wZXJ0eUNoYW5nZShuYW1lKTsgLy8g6Kem5Y+R5LiA5qyhXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8g5bGe5oCn5pS55Y+YXG4gICAgSkRhdGEucHJvdG90eXBlLnByb3BlcnR5Q2hhbmdlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRoaXMuZGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5kYXRhW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3YXRjaGVzID0gdGhpcy53YXRjaGVyLmdldChuYW1lKTtcbiAgICAgICAgaWYgKHdhdGNoZXMgJiYgd2F0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgd2F0Y2hlc18xID0gX192YWx1ZXMod2F0Y2hlcyksIHdhdGNoZXNfMV8xID0gd2F0Y2hlc18xLm5leHQoKTsgIXdhdGNoZXNfMV8xLmRvbmU7IHdhdGNoZXNfMV8xID0gd2F0Y2hlc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHdhdGNoZXNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB3ICYmIHcuc2V0ICYmIHcuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXRjaGVzXzFfMSAmJiAhd2F0Y2hlc18xXzEuZG9uZSAmJiAoX2EgPSB3YXRjaGVzXzEucmV0dXJuKSkgX2EuY2FsbCh3YXRjaGVzXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g6K+75Y+W5bGe5oCnXG4gICAgSkRhdGEucHJvdG90eXBlLmdldFByb3BlcnR5ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGVfMywgX2E7XG4gICAgICAgIHZhciB3YXRjaGVzID0gdGhpcy53YXRjaGVyLmdldChuYW1lKTtcbiAgICAgICAgaWYgKHdhdGNoZXMgJiYgd2F0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgd2F0Y2hlc18yID0gX192YWx1ZXMod2F0Y2hlcyksIHdhdGNoZXNfMl8xID0gd2F0Y2hlc18yLm5leHQoKTsgIXdhdGNoZXNfMl8xLmRvbmU7IHdhdGNoZXNfMl8xID0gd2F0Y2hlc18yLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHdhdGNoZXNfMl8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHcgJiYgdy5nZXQgJiYgdy5nZXQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdiAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8zXzEpIHsgZV8zID0geyBlcnJvcjogZV8zXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhdGNoZXNfMl8xICYmICF3YXRjaGVzXzJfMS5kb25lICYmIChfYSA9IHdhdGNoZXNfMi5yZXR1cm4pKSBfYS5jYWxsKHdhdGNoZXNfMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW25hbWVdO1xuICAgIH07XG4gICAgSkRhdGEucHJvdG90eXBlLmZyb20gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhKVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBKRGF0YS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV80LCBfYTtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICB2YXIgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmRhdGEpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcHNfMSA9IF9fdmFsdWVzKHByb3BzKSwgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCk7ICFwcm9wc18xXzEuZG9uZTsgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZV8yID0gcHJvcHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXzJdID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpc1tuYW1lXzJdID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBvYmpbbmFtZV8yXSA9IHRoaXNbbmFtZV8yXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV80XzEpIHsgZV80ID0geyBlcnJvcjogZV80XzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzXzFfMSAmJiAhcHJvcHNfMV8xLmRvbmUgJiYgKF9hID0gcHJvcHNfMS5yZXR1cm4pKSBfYS5jYWxsKHByb3BzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzQpIHRocm93IGVfNC5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICAvLyDnlJ/miJDmlbDmja5EYXRhXG4gICAgSkRhdGEuY3JlYXRlUHJveHkgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvLyDku6PnkIblpITnkIZcbiAgICAgICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGRhdGEsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRhcmdldFtwXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmdldFByb3BlcnR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHAsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wcm9wZXJ0eUNoYW5nZShwLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9O1xuICAgIHJldHVybiBKRGF0YTtcbn0oRXZlbnRFbWl0ZXIpKTtcbmV4cG9ydCBkZWZhdWx0IEpEYXRhO1xuLy8g5YWD57Sg5Y2Z56GA5pWw5o2u5a+56LGhXG52YXIgSkVsZW1lbnREYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudERhdGEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnREYXRhKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBKRWxlbWVudERhdGE7XG59KEpEYXRhKSk7XG5leHBvcnQgeyBKRWxlbWVudERhdGEgfTtcbnZhciBKSW1hZ2VEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKSW1hZ2VEYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpJbWFnZURhdGEoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEpJbWFnZURhdGE7XG59KEpFbGVtZW50RGF0YSkpO1xuZXhwb3J0IHsgSkltYWdlRGF0YSB9O1xudmFyIEpUZXh0RGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSlRleHREYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpUZXh0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSlRleHREYXRhO1xufShKRWxlbWVudERhdGEpKTtcbmV4cG9ydCB7IEpUZXh0RGF0YSB9O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCBFdmVudEVtaXRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbnZhciBFdmVudEVtaXR0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEV2ZW50RW1pdHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLy8g55So56m65qC85YiG6ZqU5LqL5Lu25ZCNXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zcGxpdEV2ZW50TmFtZXMgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHZhciBhcnIgPSBuYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAgICAgKi9cbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBldmVudHMgPSB0aGlzLnNwbGl0RXZlbnROYW1lcyhldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGV2ZW50c18xID0gX192YWx1ZXMoZXZlbnRzKSwgZXZlbnRzXzFfMSA9IGV2ZW50c18xLm5leHQoKTsgIWV2ZW50c18xXzEuZG9uZTsgZXZlbnRzXzFfMSA9IGV2ZW50c18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWVfMSA9IGV2ZW50c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLm9uLmNhbGwodGhpcywgbmFtZV8xLCBmbiwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudHNfMV8xICYmICFldmVudHNfMV8xLmRvbmUgJiYgKF9hID0gZXZlbnRzXzEucmV0dXJuKSkgX2EuY2FsbChldmVudHNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUub24uY2FsbCh0aGlzLCBldmVudCwgZm4sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuc3BsaXRFdmVudE5hbWVzKGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZXZlbnRzXzIgPSBfX3ZhbHVlcyhldmVudHMpLCBldmVudHNfMl8xID0gZXZlbnRzXzIubmV4dCgpOyAhZXZlbnRzXzJfMS5kb25lOyBldmVudHNfMl8xID0gZXZlbnRzXzIubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZV8yID0gZXZlbnRzXzJfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUub2ZmLmNhbGwodGhpcywgbmFtZV8yLCBmbiwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudHNfMl8xICYmICFldmVudHNfMl8xLmRvbmUgJiYgKF9hID0gZXZlbnRzXzIucmV0dXJuKSkgX2EuY2FsbChldmVudHNfMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUub2ZmLmNhbGwodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG59KEV2ZW50RW1pdGVyKSk7XG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXI7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJztcbmV4cG9ydCB2YXIgdG9wWkluZGV4ID0gMTAwMDA7XG4vLyDmlK/mjIHnmoTmoLflvI/lsZ7mgKfliJfooahcbnZhciBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFbGVtZW50U3R5bGVEZWNsYXJhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEpFbGVtZW50U3R5bGVEZWNsYXJhdGlvbjtcbn0oRXZlbnRFbWl0ZXIpKTtcbmV4cG9ydCB7IEpFbGVtZW50U3R5bGVEZWNsYXJhdGlvbiB9O1xuLy8g5qC35byP5bGe5oCn6ZuG5ZCIXG52YXIgSkVsZW1lbnRTdHlsZVByb3BlcnR5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpFbGVtZW50U3R5bGVQcm9wZXJ0eSgpIHtcbiAgICAgICAgdGhpcy5hY2NlbnRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmFsaWduQ29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLmFsaWduSXRlbXMgPSAnJztcbiAgICAgICAgdGhpcy5hbGlnblNlbGYgPSAnJztcbiAgICAgICAgdGhpcy5hbGlnbm1lbnRCYXNlbGluZSA9ICcnO1xuICAgICAgICB0aGlzLmFsbCA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbXBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGVsYXkgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXJlY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZpbGxNb2RlID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25OYW1lID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUGxheVN0YXRlID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5hcHBlYXJhbmNlID0gJyc7XG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW8gPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZHJvcEZpbHRlciA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tmYWNlVmlzaWJpbGl0eSA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQXR0YWNobWVudCA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRCbGVuZE1vZGUgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xpcCA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRPcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb25YID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRSZXBlYXQgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmJhc2VsaW5lU2hpZnQgPSAnJztcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXIgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9jayA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja0VuZCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrRW5kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja0VuZFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tFbmRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1N0YXJ0Q29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1N0YXJ0U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1N0YXJ0V2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1N0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJvdHRvbUNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21XaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckNvbGxhcHNlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJFbmRFbmRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJFbmRTdGFydFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW1hZ2VPdXRzZXQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbWFnZVJlcGVhdCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlU2xpY2UgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbWFnZVNvdXJjZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZUVuZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lRW5kU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVFbmRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lU3RhcnRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZVN0YXJ0U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVTdGFydFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckxlZnQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJMZWZ0Q29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJMZWZ0U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJMZWZ0V2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJSaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJSaWdodFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyUmlnaHRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclNwYWNpbmcgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJTdGFydEVuZFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclN0YXJ0U3RhcnRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclRvcCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclRvcENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wTGVmdFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJUb3BXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcldpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm90dG9tID0gJyc7XG4gICAgICAgIHRoaXMuYm94U2hhZG93ID0gJyc7XG4gICAgICAgIHRoaXMuYm94U2l6aW5nID0gJyc7XG4gICAgICAgIHRoaXMuYnJlYWtBZnRlciA9ICcnO1xuICAgICAgICB0aGlzLmJyZWFrQmVmb3JlID0gJyc7XG4gICAgICAgIHRoaXMuYnJlYWtJbnNpZGUgPSAnJztcbiAgICAgICAgdGhpcy5jYXB0aW9uU2lkZSA9ICcnO1xuICAgICAgICB0aGlzLmNhcmV0Q29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5jbGVhciA9ICcnO1xuICAgICAgICB0aGlzLmNsaXAgPSAnJztcbiAgICAgICAgdGhpcy5jbGlwUGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmNsaXBSdWxlID0gJyc7XG4gICAgICAgIHRoaXMuY29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5jb2xvckludGVycG9sYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5jb2xvckludGVycG9sYXRpb25GaWx0ZXJzID0gJyc7XG4gICAgICAgIHRoaXMuY29sb3JTY2hlbWUgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5Db3VudCA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtbkZpbGwgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5HYXAgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5SdWxlID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uUnVsZUNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uUnVsZVN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uUnVsZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uU3BhbiA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtbldpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW4gPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluSW50cmluc2ljQmxvY2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbkludHJpbnNpY0hlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5JbnRyaW5zaWNJbmxpbmVTaXplID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbkludHJpbnNpY1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluSW50cmluc2ljV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluZXJOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyVHlwZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5jb3VudGVySW5jcmVtZW50ID0gJyc7XG4gICAgICAgIHRoaXMuY291bnRlclJlc2V0ID0gJyc7XG4gICAgICAgIHRoaXMuY291bnRlclNldCA9ICcnO1xuICAgICAgICB0aGlzLmNzc0Zsb2F0ID0gJyc7XG4gICAgICAgIHRoaXMuY3NzVGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmN1cnNvciA9ICcnO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSAnJztcbiAgICAgICAgdGhpcy5kb21pbmFudEJhc2VsaW5lID0gJyc7XG4gICAgICAgIHRoaXMuZW1wdHlDZWxscyA9ICcnO1xuICAgICAgICB0aGlzLmZpbGwgPSAnJztcbiAgICAgICAgdGhpcy5maWxsT3BhY2l0eSA9ICcnO1xuICAgICAgICB0aGlzLmZpbGxSdWxlID0gJyc7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMuZmxleCA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhCYXNpcyA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhEaXJlY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5mbGV4RmxvdyA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhHcm93ID0gJyc7XG4gICAgICAgIHRoaXMuZmxleFNocmluayA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhXcmFwID0gJyc7XG4gICAgICAgIHRoaXMuZmxvYXQgPSAnJztcbiAgICAgICAgdGhpcy5mbG9vZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuZmxvb2RPcGFjaXR5ID0gJyc7XG4gICAgICAgIHRoaXMuZm9udCA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRGYW1pbHkgPSAnJztcbiAgICAgICAgdGhpcy5mb250RmVhdHVyZVNldHRpbmdzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udEtlcm5pbmcgPSAnJztcbiAgICAgICAgdGhpcy5mb250T3B0aWNhbFNpemluZyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRQYWxldHRlID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFNpemUgPSAnJztcbiAgICAgICAgdGhpcy5mb250U2l6ZUFkanVzdCA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTdHJldGNoID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFN5bnRoZXNpcyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTeW50aGVzaXNTbWFsbENhcHMgPSAnJztcbiAgICAgICAgdGhpcy5mb250U3ludGhlc2lzU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5mb250U3ludGhlc2lzV2VpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnQgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudEFsdGVybmF0ZXMgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudENhcHMgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudEVhc3RBc2lhbiA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50TGlnYXR1cmVzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnROdW1lcmljID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYXRpb25TZXR0aW5ncyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRXZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5mb3JjZWRDb2xvckFkanVzdCA9ICcnO1xuICAgICAgICB0aGlzLmdhcCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWQgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQXJlYSA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1ucyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRBdXRvRmxvdyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRBdXRvUm93cyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW4gPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uRW5kID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbkdhcCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW5TdGFydCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRHYXAgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkUm93ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFJvd0VuZCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRSb3dHYXAgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkUm93U3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhcyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVSb3dzID0gJyc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuaHlwaGVuYXRlQ2hhcmFjdGVyID0gJyc7XG4gICAgICAgIHRoaXMuaHlwaGVucyA9ICcnO1xuICAgICAgICB0aGlzLmltYWdlT3JpZW50YXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5pbWFnZVJlbmRlcmluZyA9ICcnO1xuICAgICAgICB0aGlzLmlubGluZVNpemUgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldCA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0QmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldEJsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXRCbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXRJbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldElubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0SW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5pc29sYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5qdXN0aWZ5Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLmp1c3RpZnlJdGVtcyA9ICcnO1xuICAgICAgICB0aGlzLmp1c3RpZnlTZWxmID0gJyc7XG4gICAgICAgIHRoaXMubGVmdCA9ICcnO1xuICAgICAgICB0aGlzLmxldHRlclNwYWNpbmcgPSAnJztcbiAgICAgICAgdGhpcy5saWdodGluZ0NvbG9yID0gJyc7XG4gICAgICAgIHRoaXMubGluZUJyZWFrID0gJyc7XG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmxpc3RTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmxpc3RTdHlsZUltYWdlID0gJyc7XG4gICAgICAgIHRoaXMubGlzdFN0eWxlUG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5saXN0U3R5bGVUeXBlID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luQmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5CbG9ja0VuZCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbkJsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5Cb3R0b20gPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5JbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5JbmxpbmVFbmQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5JbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbkxlZnQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5SaWdodCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpblRvcCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmtlciA9ICcnO1xuICAgICAgICB0aGlzLm1hcmtlckVuZCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmtlck1pZCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmtlclN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMubWFzayA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tDbGlwID0gJyc7XG4gICAgICAgIHRoaXMubWFza0NvbXBvc2l0ZSA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tJbWFnZSA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tNb2RlID0gJyc7XG4gICAgICAgIHRoaXMubWFza09yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tSZXBlYXQgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tUeXBlID0gJyc7XG4gICAgICAgIHRoaXMubWF0aFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMubWF4QmxvY2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMubWF4SW5saW5lU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLm1heFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMubWluQmxvY2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMubWluSGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMubWluSW5saW5lU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLm1pbldpZHRoID0gJyc7XG4gICAgICAgIHRoaXMubWl4QmxlbmRNb2RlID0gJyc7XG4gICAgICAgIHRoaXMub2JqZWN0Rml0ID0gJyc7XG4gICAgICAgIHRoaXMub2JqZWN0UG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAnJztcbiAgICAgICAgdGhpcy5vZmZzZXREaXN0YW5jZSA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldFBhdGggPSAnJztcbiAgICAgICAgdGhpcy5vZmZzZXRSb3RhdGUgPSAnJztcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gJyc7XG4gICAgICAgIHRoaXMub3JkZXIgPSAnJztcbiAgICAgICAgdGhpcy5vcnBoYW5zID0gJyc7XG4gICAgICAgIHRoaXMub3V0bGluZSA9ICcnO1xuICAgICAgICB0aGlzLm91dGxpbmVDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLm91dGxpbmVPZmZzZXQgPSAnJztcbiAgICAgICAgdGhpcy5vdXRsaW5lU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5vdXRsaW5lV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvdyA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJmbG93QW5jaG9yID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3dDbGlwTWFyZ2luID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3dXcmFwID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3dYID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3dZID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcnNjcm9sbEJlaGF2aW9yID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcnNjcm9sbEJlaGF2aW9yQmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3JJbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3JYID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcnNjcm9sbEJlaGF2aW9yWSA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmcgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nQmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nQmxvY2tFbmQgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdCb3R0b20gPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nSW5saW5lID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0lubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdJbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ1JpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ1RvcCA9ICcnO1xuICAgICAgICB0aGlzLnBhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5wYWdlQnJlYWtBZnRlciA9ICcnO1xuICAgICAgICB0aGlzLnBhZ2VCcmVha0JlZm9yZSA9ICcnO1xuICAgICAgICB0aGlzLnBhZ2VCcmVha0luc2lkZSA9ICcnO1xuICAgICAgICB0aGlzLnBhaW50T3JkZXIgPSAnJztcbiAgICAgICAgdGhpcy5wZXJzcGVjdGl2ZSA9ICcnO1xuICAgICAgICB0aGlzLnBlcnNwZWN0aXZlT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMucGxhY2VDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMucGxhY2VJdGVtcyA9ICcnO1xuICAgICAgICB0aGlzLnBsYWNlU2VsZiA9ICcnO1xuICAgICAgICB0aGlzLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnByaW50Q29sb3JBZGp1c3QgPSAnJztcbiAgICAgICAgdGhpcy5xdW90ZXMgPSAnJztcbiAgICAgICAgdGhpcy5yZXNpemUgPSAnJztcbiAgICAgICAgdGhpcy5yaWdodCA9ICcnO1xuICAgICAgICB0aGlzLnJvdGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLnJvd0dhcCA9ICcnO1xuICAgICAgICB0aGlzLnJ1YnlQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnNjYWxlID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3IgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW4gPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5CbG9jayA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbkJsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbkJvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbklubGluZSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbklubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbklubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luTGVmdCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luVG9wID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZyA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdCbG9jayA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdCbG9ja0VuZCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdCbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0JvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdJbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nSW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0lubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0xlZnQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nVG9wID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsU25hcEFsaWduID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsU25hcFN0b3AgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxTbmFwVHlwZSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbGJhckd1dHRlciA9ICcnO1xuICAgICAgICB0aGlzLnNoYXBlSW1hZ2VUaHJlc2hvbGQgPSAnJztcbiAgICAgICAgdGhpcy5zaGFwZU1hcmdpbiA9ICcnO1xuICAgICAgICB0aGlzLnNoYXBlT3V0c2lkZSA9ICcnO1xuICAgICAgICB0aGlzLnNoYXBlUmVuZGVyaW5nID0gJyc7XG4gICAgICAgIHRoaXMuc3RvcENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuc3RvcE9wYWNpdHkgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2UgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VEYXNoYXJyYXkgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VEYXNob2Zmc2V0ID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlTGluZWNhcCA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZUxpbmVqb2luID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlTWl0ZXJsaW1pdCA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZU9wYWNpdHkgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLnRhYlNpemUgPSAnJztcbiAgICAgICAgdGhpcy50YWJsZUxheW91dCA9ICcnO1xuICAgICAgICB0aGlzLnRleHRBbGlnbiA9ICcnO1xuICAgICAgICB0aGlzLnRleHRBbGlnbkxhc3QgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0QW5jaG9yID0gJyc7XG4gICAgICAgIHRoaXMudGV4dENvbWJpbmVVcHJpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvbkNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb25MaW5lID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb25Ta2lwSW5rID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb25TdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLnRleHREZWNvcmF0aW9uVGhpY2tuZXNzID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEVtcGhhc2lzID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEVtcGhhc2lzQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RW1waGFzaXNQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRleHRFbXBoYXNpc1N0eWxlID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEluZGVudCA9ICcnO1xuICAgICAgICB0aGlzLnRleHRPcmllbnRhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRleHRPdmVyZmxvdyA9ICcnO1xuICAgICAgICB0aGlzLnRleHRSZW5kZXJpbmcgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0U2hhZG93ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dFRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB0aGlzLnRleHRVbmRlcmxpbmVPZmZzZXQgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0VW5kZXJsaW5lUG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy50b3AgPSAnJztcbiAgICAgICAgdGhpcy50b3VjaEFjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUJveCA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EZWxheSA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLnVuaWNvZGVCaWRpID0gJyc7XG4gICAgICAgIHRoaXMudXNlclNlbGVjdCA9ICcnO1xuICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ24gPSAnJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QWxpZ25Db250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QWxpZ25JdGVtcyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFsaWduU2VsZiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbkRlbGF5ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uRGlyZWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25GaWxsTW9kZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvblBsYXlTdGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QXBwZWFyYW5jZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJhY2tncm91bmRDbGlwID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QmFja2dyb3VuZE9yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJhY2tncm91bmRTaXplID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm9yZGVyUmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm9yZGVyVG9wTGVmdFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJvcmRlclRvcFJpZ2h0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94QWxpZ24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hGbGV4ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94T3JkaW5hbEdyb3VwID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94T3JpZW50ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94UGFjayA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJveFNoYWRvdyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJveFNpemluZyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZpbHRlciA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXggPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4QmFzaXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4RGlyZWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmxleEZsb3cgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4R3JvdyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhTaHJpbmsgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4V3JhcCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEp1c3RpZnlDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TGluZUNsYW1wID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFzayA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tCb3hJbWFnZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tCb3hJbWFnZU91dHNldCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tCb3hJbWFnZVJlcGVhdCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tCb3hJbWFnZVNsaWNlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlU291cmNlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQ2xpcCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tDb21wb3NpdGUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrSW1hZ2UgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza1Bvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza1JlcGVhdCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0T3JkZXIgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRQZXJzcGVjdGl2ZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFBlcnNwZWN0aXZlT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VGV4dEZpbGxDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRleHRTaXplQWRqdXN0ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VGV4dFN0cm9rZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRleHRTdHJva2VDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRleHRTdHJva2VXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zZm9ybU9yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zZm9ybVN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zaXRpb25EZWxheSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zaXRpb25Qcm9wZXJ0eSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFVzZXJTZWxlY3QgPSAnJztcbiAgICAgICAgdGhpcy53aGl0ZVNwYWNlID0gJyc7XG4gICAgICAgIHRoaXMud2lkb3dzID0gJyc7XG4gICAgICAgIHRoaXMud2lkdGggPSAnJztcbiAgICAgICAgdGhpcy53aWxsQ2hhbmdlID0gJyc7XG4gICAgICAgIHRoaXMud29yZEJyZWFrID0gJyc7XG4gICAgICAgIHRoaXMud29yZFNwYWNpbmcgPSAnJztcbiAgICAgICAgdGhpcy53b3JkV3JhcCA9ICcnO1xuICAgICAgICB0aGlzLndyaXRpbmdNb2RlID0gJyc7XG4gICAgICAgIHRoaXMuekluZGV4ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIEpFbGVtZW50U3R5bGVQcm9wZXJ0eTtcbn0oKSk7XG5leHBvcnQgeyBKRWxlbWVudFN0eWxlUHJvcGVydHkgfTtcbnZhciBKRWxlbWVudENzc1N0eWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudENzc1N0eWxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpFbGVtZW50Q3NzU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50Q3NzU3R5bGUucHJvdG90eXBlLCBcIm5hbWVzXCIsIHtcbiAgICAgICAgLy8g5omA5pyJ5qC35byP5ZCN56ewXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgICAgICBpZiAoIUpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwID0gbmV3IEpFbGVtZW50U3R5bGVQcm9wZXJ0eSgpO1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWFwKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzXzEgPSBfX3ZhbHVlcyhrZXlzKSwga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpOyAha2V5c18xXzEuZG9uZTsga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtleXNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0eXBlb2YgbWFwW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPT09ICdzdHJpbmcnIHx8IHQgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcC5wdXNoKGspO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5c18xXzEgJiYgIWtleXNfMV8xLmRvbmUgJiYgKF9hID0ga2V5c18xLnJldHVybikpIF9hLmNhbGwoa2V5c18xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcCA9IFtdO1xuICAgIHJldHVybiBKRWxlbWVudENzc1N0eWxlO1xufShKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24pKTtcbmV4cG9ydCBkZWZhdWx0IEpFbGVtZW50Q3NzU3R5bGU7XG4vLyDmnIDlpJblsYLlrrnlmajpu5jorqTmoLflvI9cbmV4cG9ydCB2YXIgQ29udGFpbmVyRGVmYXVsdFN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICB0b3A6ICcwJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIG1hcmdpbjogJzAnLFxuICAgIHpJbmRleDogJzAnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbn07XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJztcbmltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbnZhciBUcmFuc2Zvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRyYW5zZm9ybSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm0ob3B0aW9uLCB0YXJnZXRPcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgLy8g5ZON5bqU5Y+Y5YyW5o2i5YWD57Sg5ZKM5bGe5oCnXG4gICAgICAgIF90aGlzLnRhcmdldHMgPSBbXTtcbiAgICAgICAgLy8geOWBj+enu+mHj1xuICAgICAgICBfdGhpcy50cmFuc2xhdGVYID0gMDtcbiAgICAgICAgLy8geeWBj+enu+mHj1xuICAgICAgICBfdGhpcy50cmFuc2xhdGVZID0gMDtcbiAgICAgICAgLy8geuWBj+enu+mHj1xuICAgICAgICBfdGhpcy50cmFuc2xhdGVaID0gMDtcbiAgICAgICAgX3RoaXMucm90YXRlWCA9IDA7XG4gICAgICAgIF90aGlzLnJvdGF0ZVkgPSAwO1xuICAgICAgICBfdGhpcy5yb3RhdGVaID0gMDtcbiAgICAgICAgX3RoaXMuc2NhbGVYID0gMTtcbiAgICAgICAgX3RoaXMuc2NhbGVZID0gMTtcbiAgICAgICAgX3RoaXMuc2NhbGVaID0gMTtcbiAgICAgICAgX3RoaXMuc2tld1ggPSAwO1xuICAgICAgICBfdGhpcy5za2V3WSA9IDA7XG4gICAgICAgIGlmIChvcHRpb24pXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKF90aGlzLCBvcHRpb24pO1xuICAgICAgICBpZiAodGFyZ2V0T3B0aW9uKVxuICAgICAgICAgICAgX3RoaXMuYmluZCh0YXJnZXRPcHRpb24pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInRyYW5zbGF0ZVhTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHV0aWwudG9QWCh0aGlzLnRyYW5zbGF0ZVgpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGVZU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGVZKFwiLmNvbmNhdCh1dGlsLnRvUFgodGhpcy50cmFuc2xhdGVZKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwidHJhbnNsYXRlWlN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlWihcIi5jb25jYXQodXRpbC50b1BYKHRoaXMudHJhbnNsYXRlWiksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInJvdGF0ZVhTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInJvdGF0ZVgoXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5yb3RhdGVYKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwicm90YXRlWVN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwicm90YXRlWShcIi5jb25jYXQodXRpbC50b1JhZCh0aGlzLnJvdGF0ZVkpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJyb3RhdGVaU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyb3RhdGVaKFwiLmNvbmNhdCh1dGlsLnRvUmFkKHRoaXMucm90YXRlWiksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInNjYWxlWFN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2NhbGVYKFwiLmNvbmNhdCh0aGlzLnNjYWxlWCwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwic2NhbGVZU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJzY2FsZVkoXCIuY29uY2F0KHRoaXMuc2NhbGVZLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJzY2FsZVpTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInNjYWxlWihcIi5jb25jYXQodGhpcy5zY2FsZVosIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInNrZXdYU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJza2V3WChcIi5jb25jYXQodXRpbC50b1JhZCh0aGlzLnNrZXdYKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwic2tld1lTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInNrZXdZKFwiLmNvbmNhdCh1dGlsLnRvUmFkKHRoaXMuc2tld1kpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLmZyb20gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSlcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgfTtcbiAgICAvLyDnlJ/mlYhcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IHRoaXMudGFyZ2V0czsgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHRhcmdldF8xID0gX192YWx1ZXModGFyZ2V0KSwgdGFyZ2V0XzFfMSA9IHRhcmdldF8xLm5leHQoKTsgIXRhcmdldF8xXzEuZG9uZTsgdGFyZ2V0XzFfMSA9IHRhcmdldF8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRhcmdldF8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHkodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRfMV8xICYmICF0YXJnZXRfMV8xLmRvbmUgJiYgKF9hID0gdGFyZ2V0XzEucmV0dXJuKSkgX2EuY2FsbCh0YXJnZXRfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQudGFyZ2V0ICYmIHRhcmdldC50YXJnZXQuY3NzKVxuICAgICAgICAgICAgICAgIHRhcmdldC50YXJnZXQuY3NzKCd0cmFuc2Zvcm0nLCB0aGlzLnRvU3RyaW5nKHRhcmdldC53YXRjaFByb3BzKSk7XG4gICAgICAgICAgICBlbHNlIGlmICh0YXJnZXQudGFyZ2V0KVxuICAgICAgICAgICAgICAgIHRhcmdldC50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy50b1N0cmluZyh0YXJnZXQud2F0Y2hQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOe7keWumuW5tuWIt+aWsOWIsOebruagh+S4ilxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgdGhpcy5hcHBseSh0YXJnZXQpO1xuICAgIH07XG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRhcmdldHMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldHNbaV0udGFyZ2V0ID09PSB0YXJnZXQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g55Sf5oiQdHJhbnNmb3Jt5Luj55CGXG4gICAgVHJhbnNmb3JtLmNyZWF0ZVByb3h5ID0gZnVuY3Rpb24gKG9iaiwgZWwpIHtcbiAgICAgICAgaWYgKG9iaiA9PT0gdm9pZCAwKSB7IG9iaiA9IHt9OyB9XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKG9iaiwgZWwpO1xuICAgICAgICAvLyDku6PnkIblpITnkIZcbiAgICAgICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KHRyYW5zZm9ybSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGFyZ2V0W3BdO1xuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGx5KCk7IC8vIOeUn+aViFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH07XG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICh3YXRjaFByb3BzKSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIGlmICghd2F0Y2hQcm9wcykge1xuICAgICAgICAgICAgd2F0Y2hQcm9wcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCBcInJvdGF0ZVhcIiwgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3WCcsICdza2V3WSddO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciB3YXRjaFByb3BzXzEgPSBfX3ZhbHVlcyh3YXRjaFByb3BzKSwgd2F0Y2hQcm9wc18xXzEgPSB3YXRjaFByb3BzXzEubmV4dCgpOyAhd2F0Y2hQcm9wc18xXzEuZG9uZTsgd2F0Y2hQcm9wc18xXzEgPSB3YXRjaFByb3BzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSB3YXRjaFByb3BzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgbnYgPSB0aGlzW24gKyAnU3RyaW5nJ107XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW25dICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbnYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKG52KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh3YXRjaFByb3BzXzFfMSAmJiAhd2F0Y2hQcm9wc18xXzEuZG9uZSAmJiAoX2EgPSB3YXRjaFByb3BzXzEucmV0dXJuKSkgX2EuY2FsbCh3YXRjaFByb3BzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuam9pbignICcpO1xuICAgIH07XG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2xhdGVYOiB0aGlzLnRyYW5zbGF0ZVgsXG4gICAgICAgICAgICB0cmFuc2xhdGVZOiB0aGlzLnRyYW5zbGF0ZVksXG4gICAgICAgICAgICB0cmFuc2xhdGVaOiB0aGlzLnRyYW5zbGF0ZVosXG4gICAgICAgICAgICByb3RhdGVYOiB0aGlzLnJvdGF0ZVgsXG4gICAgICAgICAgICByb3RhdGVZOiB0aGlzLnJvdGF0ZVksXG4gICAgICAgICAgICByb3RhdGVaOiB0aGlzLnJvdGF0ZVosXG4gICAgICAgICAgICBzY2FsZVg6IHRoaXMuc2NhbGVYLFxuICAgICAgICAgICAgc2NhbGVZOiB0aGlzLnNjYWxlWSxcbiAgICAgICAgICAgIHNjYWxlWjogdGhpcy5zY2FsZVosXG4gICAgICAgICAgICBza2V3WDogdGhpcy5za2V3WCxcbiAgICAgICAgICAgIHNrZXdZOiB0aGlzLnNrZXdZLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFRyYW5zZm9ybTtcbn0oRXZlbnRFbWl0ZXIpKTtcbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgQ29udGFpbmVyRGVmYXVsdFN0eWxlIH0gZnJvbSAnLi4vY29uc3RhbnQvc3R5bGVNYXAnO1xuaW1wb3J0IEpFbGVtZW50IGZyb20gJy4uL2NvcmUvZWxlbWVudCc7XG52YXIgSkJhc2VDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpCYXNlQ29tcG9uZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpCYXNlQ29tcG9uZW50KG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gb3B0aW9uLnN0eWxlIHx8IHt9O1xuICAgICAgICAvLyBwb3NpdGlvbuWSjG92ZXJmbG936aKE6K6+55qE5YC85LyY5YWI57qn5pyA6auYXG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IE9iamVjdC5hc3NpZ24oX19hc3NpZ24oe30sIENvbnRhaW5lckRlZmF1bHRTdHlsZSksIG9wdGlvbi5zdHlsZSwge1xuICAgICAgICAgICAgcG9zaXRpb246IENvbnRhaW5lckRlZmF1bHRTdHlsZS5wb3NpdGlvbixcbiAgICAgICAgICAgIG92ZXJmbG93OiBDb250YWluZXJEZWZhdWx0U3R5bGUub3ZlcmZsb3dcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oeyBcbiAgICAgICAgICAgIC8vIOWkluWxguWPquWTjeW6lFrovbTml4vovaxcbiAgICAgICAgICAgIHRyYW5zZm9ybVdhdGNoUHJvcHM6IFtcbiAgICAgICAgICAgICAgICAncm90YXRlWicsICdzY2FsZVgnLCAnc2NhbGVZJ1xuICAgICAgICAgICAgXSB9LCBvcHRpb24pLCB7IG5vZGVUeXBlOiAnZGl2JywgY2xhc3NOYW1lOiAnai1kZXNpZ24tZWRpdG9yLWNvbnRhaW5lcicsIGlzQ29tcG9uZW50OiB0cnVlIH0pKSB8fCB0aGlzO1xuICAgICAgICAvLyDpgInkuK1cbiAgICAgICAgX3RoaXMuX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIG9wdGlvbi50YXJnZXQgPSBvcHRpb24udGFyZ2V0IHx8IHt9O1xuICAgICAgICAvLyDnlJ/miJDlvZPliY3mjqfliLbnmoTlhYPntKBcbiAgICAgICAgX3RoaXMudGFyZ2V0ID0gbmV3IEpFbGVtZW50KF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IHZpc2libGU6IHRydWUsIGRhdGE6IHt9LCBcbiAgICAgICAgICAgIC8vIOS4jeWTjeW6lOacrOi6q+eahOWPmOaNou+8jOWPquWTjeW6lOeItue6p+eahFxuICAgICAgICAgICAgdHJhbnNmb3JtV2F0Y2hQcm9wczogW10sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgIF90aGlzLmFkZENoaWxkKF90aGlzLnRhcmdldCk7XG4gICAgICAgIC8vIOWPmOaNouaUueS4uuaOp+WItuS4u+WFg+e0oFxuICAgICAgICBfdGhpcy50cmFuc2Zvcm0uYmluZCh7XG4gICAgICAgICAgICB0YXJnZXQ6IF90aGlzLnRhcmdldCxcbiAgICAgICAgICAgIHdhdGNoUHJvcHM6IFtcbiAgICAgICAgICAgICAgICAncm90YXRlWCcsICdyb3RhdGVZJywgJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICdza2V3WCcsICdza2V3WSdcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgLy90aGlzLmluaXREYXRhKG9wdGlvbik7Ly8g5Yid5aeL5YyW5pWw5o2uXG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKQmFzZUNvbXBvbmVudC5wcm90b3R5cGUsIFwic2VsZWN0ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB2O1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdzZWxlY3QnLCB2KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIOiuvue9rmNzc+WIsGRvbVxuICAgIEpCYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXREb21TdHlsZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAvLyDlpoLmnpzlpJblsYLlrrnlmajnmoTmoLflvI/vvIzliJnliqDliLBjb250YWluZXLkuIpcbiAgICAgICAgaWYgKG5hbWUgaW4gQ29udGFpbmVyRGVmYXVsdFN0eWxlIHx8IG5hbWUgPT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnNldERvbVN0eWxlLmNhbGwodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuY3NzKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSkJhc2VDb21wb25lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkgeyBwcm9wcyA9IFtdOyB9XG4gICAgICAgIC8vIOi9rGpzb27lv73nlaXmuLLmn5Pnu4Tku7ZcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudG9KU09OLmNhbGwodGhpcywgcHJvcHMsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsICE9PSBfdGhpcy50YXJnZXQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEpCYXNlQ29tcG9uZW50O1xufShKRWxlbWVudCkpO1xuZXhwb3J0IGRlZmF1bHQgSkJhc2VDb21wb25lbnQ7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuL2VsZW1lbnQnO1xuaW1wb3J0IHsgdG9wWkluZGV4IH0gZnJvbSAnLi4vY29uc3RhbnQvc3R5bGVNYXAnO1xuLy8g6byg5qCH5oyH6ZKIXG52YXIgR0N1cnNvcnMgPSB7XG4gICAgJ2wnOiAndy1yZXNpemUnLFxuICAgICdsdCc6ICdudy1yZXNpemUnLFxuICAgICd0JzogJ24tcmVzaXplJyxcbiAgICAndHInOiAnbmUtcmVzaXplJyxcbiAgICAncic6ICdlLXJlc2l6ZScsXG4gICAgJ3JiJzogJ3NlLXJlc2l6ZScsXG4gICAgJ2InOiAncy1yZXNpemUnLFxuICAgICdsYic6ICdzdy1yZXNpemUnLFxuICAgICdyb3RhdGUnOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQWdWQk1WRVVBQUFBaUs5TWpLZFVmS05ZaktkVWlLTllpS2RVZUh1QWpLTllqS05ZaUtOWXlNc3dpS05ZaUtOWWlLTllpS05ZaEtOWWlLZFVpS05ZaUtOWWpLZFVqS05ZZ0o5Y2pKZFlpS05ZaUtOWWlLZFVoSjljaktOWWlLZFVkTE5Ncks5TWlLTllpS05ZaUtkVWlLTllqS05ZaktkVWpLZFVqS05ZaktkVWpLZFVqS2RhVVc3ZVZBQUFBS25SU1RsTUFGZE1ZMS92NENQWG80d1h1eUxoNlJmS1JqV3BBSnh5a2IxdFNUakFSQzhPc2xZVmdPaXZRcnFleTdjYXFBQUFCTTBsRVFWUkl4KzJVNlc2RE1CQ0VEZFNFKzJ3Zzk1MGUzL3MvWUdPQlFJMGhNZitxS3ZPREhZc1plOWRlclhqaDMyQzJQc1UrQkljeUN3M2tWaG5SSVVqM3ovVHZFY1RwMVJHaXpzNDJCSnZIK2txU2JQdGxGa1A1MkxGYzM1M29zaENUTU04cEp6cGNodXV3ckxFczhmZERlczl6Umh3SDBnRzlEYlkxa2hSK09LUWZkOWhrdXY0TmJwL2hyRklLWGUrQU5lYklpSFc5Z0pib2QyZmhON3pUcStTaHBiLzNVdXNRMmZHZXVNdzZydEJ2MXZ4cmFYOVVnTk53UFYxbDBOT05tYmRNZDdqVWVua0ZxUmh6eUtFcjMvRFpFTk5IRFNPdUtwcTN6WmxFQmZQRzNFVmNWRFJ2L1JYNVZrekNBdjlqa2lGTXlPK0d3SGIxZU9ndDRLdnExMDRodmVySklNc2hlYS9DRzYxWDN5NnllRGI3bkpNSHlDaHdWVGlhMUxTN0hBTUorTW15TnAvZ08yY21YdmpEK0FIcHJocG9KS2lZWUFBQUFBQkpSVTVFcmtKZ2dnPT0nLFxuICAgICdza2V3JzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFkVkJNVkVVQUFBQmxZLzk3ZS85a1l2OWtZLzluWi85bFkvOWtZdjlrWS85a1l2OWtZLzlsWS85a1l2OWtZLzlwWVA5b1lQOWtZdjlrWXY5a1kvOWtZdjlpWXY5blkvOWtZdjlsWXY5a1l2OWxZdjlsWS85a1l2OWxZdjlrWS85a1l2OWxaZjlsWS85a1l2OWtZdjlsWXY5a1l2OWxZLzlsWS8ra3RRTlJBQUFBSm5SU1RsTUEvQVR2M3hIbVcvVjBUdE8za2hjTnk4WEJVaDhVNnRpK3BwdDVia3NuR1RxeWdtTkVaMGN0cGRVQUFBRW1TVVJCVkVqSDdWUGJsb0l3REtTbG9BVXFGNmtnZDEyMy8vK0phK2pTU3BHcUQ3NHhieW5KeWN4a2NEWnMrQklPQWEyeWdyZ0l1YVFvS3hvY2JOMDNGb29GUW5aNzN1MVJJbFpRVUcvWnZ6c0pDOXpHYU9lWmtFQUphOW91OXpEMjhxNXRXSUtFUkRaYjBrdnUrM01RbTV2ajRMeVhXaDdrNDJSY2UvVlcxRjFkK0o1ZzlmSUxkZG12MjllWDBQR2o2dlJlUmRobU9JN3VMYWtxZ1dUbldOR0JSRldCbzdsOUlBZVJxZ0tHRnp1bEN6aXJqeVpBeEdSYjYvdEhNMkdSRXExVkM3ZVd0dnBDb04zTTFucTBOWDNnd0F0OU9CaUFDZk53WkthU1J5b2FWU1QweEpCTjBVak5NelZHK05Db2cwemhvMHRQNG5vZWJ3S1AvMnpxK0xsNUF3dU5BWXBFeUlaWHYraEpVM0k0ZDE3aWlLVG9ONkZzL1dEZ2czNGRqUTBidm80L25hWXZnczh4bXZ3QUFBQUFTVVZPUks1Q1lJST0nXG59O1xuLy8g5o6n5Yi25YWD57Sg56e75Yqo5ZKM55+p6Zi15Y+Y5o2iXG52YXIgSkNvbnRyb2xsZXJJdGVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKQ29udHJvbGxlckl0ZW0sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkNvbnRyb2xsZXJJdGVtKG9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb24uc3R5bGUgPSBvcHRpb24uc3R5bGUgfHwge307XG4gICAgICAgIG9wdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmJztcbiAgICAgICAgb3B0aW9uLnN0eWxlLmJvcmRlciA9IG9wdGlvbi5zdHlsZS5ib3JkZXIgfHwgJzFweCBzb2xpZCByZ2JhKDYsMTU1LDE4MSwxKSc7XG4gICAgICAgIG9wdGlvbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaXIgPSAnJztcbiAgICAgICAgX3RoaXMuc2l6ZSA9IDg7XG4gICAgICAgIF90aGlzLl9pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAvLyDmi5bmlL7kvY3nva5cbiAgICAgICAgX3RoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZGlyID0gb3B0aW9uLmRpciB8fCAnJztcbiAgICAgICAgX3RoaXMuc2l6ZSA9IG9wdGlvbi5zaXplIHx8IDg7XG4gICAgICAgIF90aGlzLnN0eWxlLmN1cnNvciA9IF90aGlzLnN0eWxlLmN1cnNvciB8fCBHQ3Vyc29yc1tfdGhpcy5kaXJdO1xuICAgICAgICBfdGhpcy5kYXRhLndpZHRoID0gX3RoaXMuZGF0YS5oZWlnaHQgPSBfdGhpcy5zaXplO1xuICAgICAgICBfdGhpcy5lZGl0b3IgPSBvcHRpb24uZWRpdG9yO1xuICAgICAgICBpZiAoX3RoaXMuZWRpdG9yKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBfdGhpcy5lZGl0b3Iudmlldy5vbignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25EcmFnRW5kKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBfdGhpcy5lZGl0b3Iudmlldy5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gX3RoaXMuZWRpdG9yLmRvbSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDkuI3mmK9vdXTnvJbovpHlmajvvIzkuI3lpITnkIZcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRyYWdFbmQoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIF90aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ01vdmUoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkNvbnRyb2xsZXJJdGVtLnByb3RvdHlwZSwgXCJpc01vdmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzTW92aW5nO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLl9pc01vdmluZyA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLm9uRHJhZ01vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTW92aW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgcG9zID0ge1xuICAgICAgICAgICAgeDogZXZlbnQucGFnZVggfHwgZXZlbnQueCxcbiAgICAgICAgICAgIHk6IGV2ZW50LnBhZ2VZIHx8IGV2ZW50LnksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBvZmZYID0gKHBvcy54IC0gdGhpcy5kcmFnU3RhcnRQb3NpdGlvbi54KTtcbiAgICAgICAgdmFyIG9mZlkgPSAocG9zLnkgLSB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIGRpcjogdGhpcy5kaXIsXG4gICAgICAgICAgICBvZmZYOiBvZmZYLFxuICAgICAgICAgICAgb2ZmWTogb2ZmWSxcbiAgICAgICAgICAgIG9sZFBvc2l0aW9uOiB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLFxuICAgICAgICAgICAgbmV3UG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g6YCJ5Lit55qE5piv5riy5p+T5bGC55qE5Z2Q5qCH77yM6L2s5Li65o6n5Yi25bGC55qEXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24ueCA9IHBvcy54O1xuICAgICAgICB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnkgPSBwb3MueTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLm9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICB4OiBldmVudC5wYWdlWCB8fCBldmVudC54LFxuICAgICAgICAgICAgeTogZXZlbnQucGFnZVkgfHwgZXZlbnQueSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6YCJ5Lit55qE5piv5riy5p+T5bGC55qE5Z2Q5qCH77yM6L2s5Li65o6n5Yi25bGC55qEXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgICAgIHk6IHBvcy55XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLm9uRHJhZ0VuZCA9IGZ1bmN0aW9uIChldmVudCwgcG9zKSB7XG4gICAgICAgIGlmIChwb3MgPT09IHZvaWQgMCkgeyBwb3MgPSBldmVudDsgfVxuICAgICAgICBpZiAodGhpcy5pc01vdmluZykge1xuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDorqHnrpfmjIfpkohcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLnJlc2V0Q3Vyc29yID0gZnVuY3Rpb24gKHJvdGF0aW9uKSB7XG4gICAgICAgIC8vIOWFiOeugOWNleWkhOeQhlxuICAgICAgICBpZiAoIXJvdGF0aW9uIHx8IChyb3RhdGlvbiA+IC1NYXRoLlBJIC8gNiAmJiByb3RhdGlvbiA8IE1hdGguUEkgLyA2KSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBHQ3Vyc29yc1t0aGlzLmRpcl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEpDb250cm9sbGVySXRlbTtcbn0oSkVsZW1lbnQpKTtcbmV4cG9ydCB7IEpDb250cm9sbGVySXRlbSB9O1xuLy8g5YWD57Sg5aSn5bCP5L2N572u5o6n5Yi25ZmoXG52YXIgSkNvbnRyb2xsZXJDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpDb250cm9sbGVyQ29tcG9uZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpDb250cm9sbGVyQ29tcG9uZW50KG9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb24uekluZGV4ID0gdG9wWkluZGV4O1xuICAgICAgICBvcHRpb24uc3R5bGUgPSBvcHRpb24uc3R5bGUgfHwge307XG4gICAgICAgIG9wdGlvbi5zdHlsZS5jdXJzb3IgPSBvcHRpb24uc3R5bGUuY3Vyc29yIHx8ICdtb3ZlJztcbiAgICAgICAgb3B0aW9uLmRpciA9ICdlbGVtZW50JztcbiAgICAgICAgb3B0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgICAgLy9vcHRpb24uc3R5bGUuYm94U2hhZG93ID0gJzAgMCAycHggMnB4ICNjY2MnO1xuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgLy8g6YCJ5oup5qGG6L656LedXG4gICAgICAgIF90aGlzLnBhZGRpbmdTaXplID0gMTtcbiAgICAgICAgX3RoaXMuaXNFZGl0b3IgPSBmYWxzZTsgLy8g5b2T5YmN5YWz6IGU5piv5ZCm5piv57yW6L6R5ZmoXG4gICAgICAgIF90aGlzLmluaXQob3B0aW9uKTtcbiAgICAgICAgX3RoaXMuZWRpdG9yLmRvbS5hcHBlbmRDaGlsZChfdGhpcy5kb20pO1xuICAgICAgICAvLyDlj4zlh7vkuovku7bpgI/kvKDnu5nmk43kvZzmnYbnu5HlrprnmoTlr7nosaFcbiAgICAgICAgX3RoaXMub24oJ2RibGNsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuZW1pdCgnZGJsY2xpY2snLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgnbCcsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6IDAsIHRvcDogJzUwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2x0Jywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogMCwgdG9wOiAwIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCd0Jywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogJzUwJScsIHRvcDogMCB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgndHInLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnMTAwJScsIHRvcDogMCB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgncicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6ICcxMDAlJywgdG9wOiAnNTAlJyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgncmInLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnMTAwJScsIHRvcDogJzEwMCUnIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdiJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogJzUwJScsIHRvcDogJzEwMCUnIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdsYicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6IDAsIHRvcDogJzEwMCUnIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5peL6L2s5Z2XXG4gICAgICAgIHRoaXMucm90YXRlSXRlbSA9IHRoaXMuY3JlYXRlSXRlbSgncm90YXRlJywge1xuICAgICAgICAgICAgc2hhcGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgc2l6ZTogMjQsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oeyBsZWZ0OiAnNTAlJywgdG9wOiAnLTQwcHgnLCBcbiAgICAgICAgICAgICAgICAvL2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJywgYm94U2hhZG93OiAnMCAwIDJweCAycHggI2NjYycsIGJvcmRlclJhZGl1czogJzUwJScsIGN1cnNvcjogXCJwb2ludGVyXCIgfSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgJ2JhY2tncm91bmRTaXplJzogJzEwMCUnLCBiYWNrZ3JvdW5kSW1hZ2U6IEdDdXJzb3JzLnJvdGF0ZSB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2tld0l0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0oJ3NrZXcnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICBzaXplOiAyNCxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7IGxlZnQ6ICc1MCUnLCB0b3A6ICc1MCUnLCBib3JkZXI6ICdub25lJywgYm94U2hhZG93OiAnMCAwIDJweCAycHggI2NjYycsIGJvcmRlclJhZGl1czogJzUwJScsIGN1cnNvcjogXCJwb2ludGVyXCIgfSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgJ2JhY2tncm91bmRTaXplJzogJzEwMCUnLCBiYWNrZ3JvdW5kSW1hZ2U6IEdDdXJzb3JzLnNrZXcgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyAvLyDml4vovazlnZcgXG4gICAgICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5lZGl0b3Iub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5pc0VkaXRvcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDkuI3mmK/nvJbovpHlmajvvIzkuI3lpITnkIZcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRyYWdTdGFydChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5jaGFuZ2UoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g55Sf5oiQ5o6n5Yi254K5XG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLmNyZWF0ZUl0ZW0gPSBmdW5jdGlvbiAoaWQsIG9wdGlvbikge1xuICAgICAgICB2YXIgaXRlbSA9IG5ldyBKQ29udHJvbGxlckl0ZW0oX19hc3NpZ24oeyBkaXI6IGlkLCBlZGl0b3I6IHRoaXMuZWRpdG9yIH0sIG9wdGlvbikpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaXRlbS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlKGUpO1xuICAgICAgICAgICAgLy8g6YeN572u5oyH6ZKIXG4gICAgICAgICAgICB0aGlzLnJlc2V0Q3Vyc29yKHNlbGYudHJhbnNmb3JtLnJvdGF0ZVopO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcbiAgICAvLyDlj5HnlJ/mlLnlj5jlk43lupRcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGRpciA9IGUuZGlyLCBvZmZYID0gZS5vZmZYLCBvZmZZID0gZS5vZmZZO1xuICAgICAgICAvLyDlvZPliY3np7vliqjlr7nljp/lr7nosaHnmoTmlLnlj5hcbiAgICAgICAgdmFyIGFyZ3MgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgICAgICBza2V3OiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkaXIgPT09ICdyb3RhdGUnKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZUNoYW5nZShlLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXIgPT09ICdlbGVtZW50Jykge1xuICAgICAgICAgICAgLy8g5YWD57Sg5L2N572u5o6n5Yi25ZmoXG4gICAgICAgICAgICBhcmdzLnggPSBvZmZYO1xuICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWFiOWbnuWOn+WdkOagh++8jOWGjeS4u+eul+WBj+enu+mHj++8jOi/meagt+S/neivgeaTjeS9nOabtOWuueaYk+eQhuino1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5nZXRSb3RhdGVFdmVudFBvc2l0aW9uKGUpO1xuICAgICAgICAgICAgICAgIG9mZlggPSBwb3Mub2ZmWDtcbiAgICAgICAgICAgICAgICBvZmZZID0gcG9zLm9mZlk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2wnOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3QnOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueSA9IG9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdyJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2InOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2x0Jzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gLW9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueSA9IG9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICd0cic6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueSA9IG9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gLW9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdyYic6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2xiJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gLW9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaGVpZ2h0ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3NrZXcnOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByeCA9IG9mZlggLyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcnkgPSBvZmZZIC8gdXRpbC50b051bWJlcih0aGlzLmRhdGEuaGVpZ2h0KSAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Muc2tldy54ID0gcnk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Muc2tldy55ID0gcng7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDkvY3np7tcbiAgICAgICAgaWYgKGFyZ3MueCB8fCBhcmdzLnkpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZShhcmdzLngsIGFyZ3MueSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3Mud2lkdGgpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLndpZHRoKSArIGFyZ3Mud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmRhdGEud2lkdGggPSBNYXRoLm1heCh3aWR0aCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuaGVpZ2h0ID0gTWF0aC5tYXgodXRpbC50b051bWJlcih0aGlzLmRhdGEuaGVpZ2h0KSArIGFyZ3MuaGVpZ2h0LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB4LHnml4vovaxcbiAgICAgICAgaWYgKGFyZ3Muc2tldy54IHx8IGFyZ3Muc2tldy55KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50cmFuc2Zvcm0ucm90YXRlWCArPSBhcmdzLnNrZXcueDtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVZICs9IGFyZ3Muc2tldy55O1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtLmFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcHBseVRvVGFyZ2V0KCk7XG4gICAgfTtcbiAgICAvLyDlm6DkuLrml4vovazlkI7lnZDmoIfopoHlm57ljp/miY3lpb3orqHnrpfmk43kvZzvvIxcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuZ2V0Um90YXRlRXZlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBvZmZYID0gZS5vZmZYLCBvZmZZID0gZS5vZmZZLCBvbGRQb3NpdGlvbiA9IGUub2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uID0gZS5uZXdQb3NpdGlvbjtcbiAgICAgICAgLy8g5YWI5Zue5Y6f5Z2Q5qCH77yM5YaN5Li7566X5YGP56e76YeP77yM6L+Z5qC35L+d6K+B5pON5L2c5pu05a655piT55CG6KejXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybS5yb3RhdGVaKSB7XG4gICAgICAgICAgICB2YXIgY2VudGVyID0ge1xuICAgICAgICAgICAgICAgIHg6IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmxlZnQpICsgdXRpbC50b051bWJlcih0aGlzLmRhdGEud2lkdGgpIC8gMixcbiAgICAgICAgICAgICAgICB5OiB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS50b3ApICsgdXRpbC50b051bWJlcih0aGlzLmRhdGEuaGVpZ2h0KSAvIDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIF9hID0gX19yZWFkKHV0aWwucm90YXRlUG9pbnRzKFtvbGRQb3NpdGlvbiwgbmV3UG9zaXRpb25dLCBjZW50ZXIsIC10aGlzLnRyYW5zZm9ybS5yb3RhdGVaKSwgMiksIHBvczEgPSBfYVswXSwgcG9zMiA9IF9hWzFdO1xuICAgICAgICAgICAgb2ZmWCA9IHBvczIueCAtIHBvczEueDtcbiAgICAgICAgICAgIG9mZlkgPSBwb3MyLnkgLSBwb3MxLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZlg6IG9mZlgsXG4gICAgICAgICAgICBvZmZZOiBvZmZZXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvLyDlj5HnlJ/ml4vovaxcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUucm90YXRlQ2hhbmdlID0gZnVuY3Rpb24gKGUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIG9sZFBvc2l0aW9uID0gZS5vbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24gPSBlLm5ld1Bvc2l0aW9uO1xuICAgICAgICB2YXIgY2VudGVyID0ge1xuICAgICAgICAgICAgeDogdXRpbC50b051bWJlcih0aGlzLmRhdGEubGVmdCkgKyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgLyAyLFxuICAgICAgICAgICAgeTogdXRpbC50b051bWJlcih0aGlzLmRhdGEudG9wKSArIHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmhlaWdodCkgLyAyLFxuICAgICAgICB9O1xuICAgICAgICAvLyDnvJbovpHlmajlnZDmoIdcbiAgICAgICAgdmFyIHBvczEgPSB0aGlzLmVkaXRvci50b0VkaXRvclBvc2l0aW9uKG9sZFBvc2l0aW9uKTtcbiAgICAgICAgdmFyIHBvczIgPSB0aGlzLmVkaXRvci50b0VkaXRvclBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgLy8g5Zug5Li6Y2VudGVy5piv55u45a+55LqO57yW6L6R5Zmo55qE77yM5omA5Lul5LqL5Lu25Z2Q5qCH5Lmf6ZyA6KaB6L2s5Yiw57yW6L6R5ZmoXG4gICAgICAgIHZhciBjeDEgPSBwb3MxLnggLSBjZW50ZXIueDtcbiAgICAgICAgdmFyIGN5MSA9IHBvczEueSAtIGNlbnRlci55O1xuICAgICAgICB2YXIgYW5nbGUxID0gTWF0aC5hdGFuKGN5MSAvIGN4MSk7XG4gICAgICAgIHZhciBjeDIgPSBwb3MyLnggLSBjZW50ZXIueDtcbiAgICAgICAgdmFyIGN5MiA9IHBvczIueSAtIGNlbnRlci55O1xuICAgICAgICB2YXIgYW5nbGUyID0gTWF0aC5hdGFuKGN5MiAvIGN4Mik7XG4gICAgICAgIGlmIChhbmdsZTEgPj0gMCAmJiBhbmdsZTIgPCAwKSB7XG4gICAgICAgICAgICBpZiAoY3gxID49IDAgJiYgY3kxID49IDAgJiYgY3gyIDw9IDAgJiYgY3kyID49IDApXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGN4MSA8PSAwICYmIGN5MSA8PSAwICYmIGN4MiA+PSAwICYmIGN5MiA8PSAwKVxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IE1hdGguUEkgKyBhbmdsZTI7XG4gICAgICAgICAgICAvL2Vsc2UgaWYoY3gxIDw9IDAgJiYgY3kxIDw9MCAmJiBjeDIgPj0gMCAmJiBjeTIgPj0gMCkgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbmdsZTEgPD0gMCAmJiBhbmdsZTIgPj0gMCkge1xuICAgICAgICAgICAgaWYgKGN4MSA+PSAwICYmIGN5MSA8PSAwICYmIGN4MiA8IDApXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gYW5nbGUyIC0gTWF0aC5QSTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSAtYW5nbGUyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFuZ2xlMSA+PSAwICYmIGFuZ2xlMiA+IDApIHtcbiAgICAgICAgICAgIC8vaWYoY3kyID09PSAwKSBhbmdsZTIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3Mucm90YXRpb24gPSBhbmdsZTIgLSBhbmdsZTE7XG4gICAgICAgIGlmIChhcmdzLnJvdGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaICs9IGFyZ3Mucm90YXRpb247XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5hcHBseSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDmiorlj5jmjaLlupTnlKjliLDnm67moIflhYPntKBcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuYXBwbHlUb1RhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICAgIHg6IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmxlZnQpICsgKHRoaXMuaXNFZGl0b3IgPyB1dGlsLnRvTnVtYmVyKHRoaXMudGFyZ2V0LmRhdGEubGVmdCkgOiAwKSxcbiAgICAgICAgICAgIHk6IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLnRvcCkgKyAodGhpcy5pc0VkaXRvciA/IHV0aWwudG9OdW1iZXIodGhpcy50YXJnZXQuZGF0YS50b3ApIDogMClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50YXJnZXQuZGF0YS5sZWZ0ID0gcG9zLng7XG4gICAgICAgIHRoaXMudGFyZ2V0LmRhdGEudG9wID0gcG9zLnk7XG4gICAgICAgIC8vIOe8lui+keWZqOebuOWvueS9jee9ruS4gOebtOaYrzBcbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5sZWZ0ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS50b3AgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5mcm9tKHtcbiAgICAgICAgICAgIC8vc2tld1g6IHRoaXMudHJhbnNmb3JtLnNrZXdYLFxuICAgICAgICAgICAgLy9za2V3WTogdGhpcy50cmFuc2Zvcm0uc2tld1ksXG4gICAgICAgICAgICByb3RhdGVaOiB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHdpZHRoID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEud2lkdGgpIC0gdGhpcy5wYWRkaW5nU2l6ZSAqIDI7XG4gICAgICAgIHZhciBoZWlnaHQgPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpIC0gdGhpcy5wYWRkaW5nU2l6ZSAqIDI7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5kYXRhLndpZHRoICE9PSB3aWR0aClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmRhdGEuaGVpZ2h0ICE9PSBoZWlnaHQpXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5kYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICB9O1xuICAgIC8vIOmHjee9rlxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChpc0VkaXRvcikge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKGlzRWRpdG9yID09PSB2b2lkIDApIHsgaXNFZGl0b3IgPSB0aGlzLmlzRWRpdG9yOyB9XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgZGVsZXRlIHRoaXMudGFyZ2V0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8g57yW6L6R5Zmo5LiN6K6p5peL6L2s5ZKMc2tld1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLml0ZW1zKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaXRlbS5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uZnJvbSh7XG4gICAgICAgICAgICByb3RhdGVaOiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOe7keWumuWIsOaTjeS9nOeahOWvueixoVxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgdGhpcy5pc0VkaXRvciA9IHRhcmdldCA9PT0gdGhpcy5lZGl0b3I7XG4gICAgICAgIHRoaXMucmVzZXQodGhpcy5pc0VkaXRvcik7XG4gICAgICAgIC8vIOe8lui+keWZqOeahOivne+8jOmcgOimgeaKiuWug+eahOWdkOagh+i9rOS4uuebuOWvueS6juWuueWZqOeahFxuICAgICAgICB2YXIgcG9zID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuaXNFZGl0b3IgPyAwIDogdXRpbC50b051bWJlcih0YXJnZXQuZGF0YS5sZWZ0KSksXG4gICAgICAgICAgICB5OiAodGhpcy5pc0VkaXRvciA/IDAgOiB1dGlsLnRvTnVtYmVyKHRhcmdldC5kYXRhLnRvcCkpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGF0YS5sZWZ0ID0gcG9zLng7XG4gICAgICAgIHRoaXMuZGF0YS50b3AgPSBwb3MueTtcbiAgICAgICAgdGhpcy5kYXRhLndpZHRoID0gdXRpbC50b051bWJlcih0YXJnZXQuZGF0YS53aWR0aCkgKyB0aGlzLnBhZGRpbmdTaXplICogMjtcbiAgICAgICAgdGhpcy5kYXRhLmhlaWdodCA9IHV0aWwudG9OdW1iZXIodGFyZ2V0LmRhdGEuaGVpZ2h0KSArIHRoaXMucGFkZGluZ1NpemUgKiAyO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybS5mcm9tKHtcbiAgICAgICAgICAgIC8vIHJvdGF0ZVg6IHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWCxcbiAgICAgICAgICAgIC8vIHJvdGF0ZVk6IHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWSxcbiAgICAgICAgICAgIHJvdGF0ZVo6IHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWixcbiAgICAgICAgICAgIC8vc2NhbGVYOiB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWCxcbiAgICAgICAgICAgIC8vc2NhbGVZOiB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWSxcbiAgICAgICAgICAgIC8vc2NhbGVaOiB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmRhdGEudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyDnvJbovpHlmajkuI3orqnml4vovazlkoxza2V3XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMuaXRlbXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpdGVtLmRhdGEudmlzaWJsZSA9ICF0aGlzLmlzRWRpdG9yICYmIHRhcmdldC5lZGl0YWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOWmguaenOaYr+e8lui+keWZqO+8jOWImeS4jeiDveaNleiOt+S6i+S7tlxuICAgICAgICB0aGlzLmNzcyh7XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiB0aGlzLmlzRWRpdG9yID8gJ25vbmUnIDogJ2F1dG8nXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g6Kej6Zmk57uR5a6aXG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEpDb250cm9sbGVyQ29tcG9uZW50O1xufShKQ29udHJvbGxlckl0ZW0pKTtcbmV4cG9ydCBkZWZhdWx0IEpDb250cm9sbGVyQ29tcG9uZW50O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgRXZlbnRFbWl0ZXIgZnJvbSAnLi4vY29uc3RhbnQvZXZlbnRFbWl0dGVyJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IEpUcmFuc2Zvcm0gZnJvbSAnLi4vY29uc3RhbnQvdHJhbnNmb3JtJztcbmltcG9ydCBKU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG5pbXBvcnQgSkV2ZW50IGZyb20gJy4uL2NvcmUvZXZlbnQnO1xuaW1wb3J0IHsgSkVsZW1lbnREYXRhIH0gZnJvbSAnLi4vY29uc3RhbnQvZGF0YSc7XG52YXIgSkVsZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFbGVtZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpFbGVtZW50KG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2lkID0gJyc7XG4gICAgICAgIC8vIOexu+Wei+WQjeensFxuICAgICAgICBfdGhpcy5fdHlwZSA9ICcnO1xuICAgICAgICAvLyDlrZDlhYPntKBcbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuID0gW107XG4gICAgICAgIC8vIOaYr+WQpuWPr+e8lui+kVxuICAgICAgICBfdGhpcy5lZGl0YWJsZSA9IHRydWU7XG4gICAgICAgIF90aGlzLl9pZCA9IF90aGlzLmlkIHx8IG9wdGlvbi5pZCB8fCB1dWlkdjQoKS5yZXBsYWNlKC8tL2csICcnKTtcbiAgICAgICAgX3RoaXMuX3R5cGUgPSBfdGhpcy50eXBlIHx8IG9wdGlvbi50eXBlIHx8ICcnO1xuICAgICAgICB2YXIgbm9kZVR5cGUgPSBvcHRpb24ubm9kZVR5cGUgfHwgJ2Rpdic7XG4gICAgICAgIF90aGlzLl9kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcbiAgICAgICAgaWYgKG9wdGlvbi5lZGl0b3IpXG4gICAgICAgICAgICBfdGhpcy5lZGl0b3IgPSBvcHRpb24uZWRpdG9yO1xuICAgICAgICAvLyDmoLflvI/ku6PnkIblpITnkIZcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBKU3R5bGUuY3JlYXRlUHJveHkoKTtcbiAgICAgICAgX3RoaXMuc3R5bGUub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXREb21TdHlsZShzLm5hbWUsIHMudmFsdWUpO1xuICAgICAgICAgICAgX3RoaXMuZW1pdCgnc3R5bGVDaGFuZ2UnLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcyksIHsgdGFyZ2V0OiBfdGhpcyB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDlj5jmjaLmjqfliLbnmoTmmK/moLjlv4PlhYPntKBcbiAgICAgICAgX3RoaXMudHJhbnNmb3JtID0gSlRyYW5zZm9ybS5jcmVhdGVQcm94eShvcHRpb24udHJhbnNmb3JtLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IF90aGlzLFxuICAgICAgICAgICAgLy8g5aaC5p6c5oyH5a6a5LqG5Y+q5ZON5bqU5p+Q5Yeg5Liq5bGe5oCnXG4gICAgICAgICAgICB3YXRjaFByb3BzOiBvcHRpb24udHJhbnNmb3JtV2F0Y2hQcm9wc1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gb3B0aW9uLmRhdGFUeXBlIHx8IEpFbGVtZW50RGF0YTtcbiAgICAgICAgX3RoaXMuZGF0YSA9IEpFbGVtZW50RGF0YS5jcmVhdGVQcm94eShuZXcgZGF0YVR5cGUoKSk7XG4gICAgICAgIC8vIOWmguaenOaYr+e7hOS7tu+8jOS4jeWcqOi/memHjOi/m+ihjOaVsOaNruWIneWni+WMluiwg+eUqFxuICAgICAgICBfdGhpcy5pbml0RGF0YShvcHRpb24pO1xuICAgICAgICBpZiAob3B0aW9uLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIF90aGlzLmNsYXNzTmFtZSA9IG9wdGlvbi5jbGFzc05hbWU7XG4gICAgICAgIF90aGlzLmJpbmRFdmVudCgpOyAvLyDkuovku7bnu5HlrppcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvLyDliJ3lp4vljJbkuIDkupvln7rnoYDlsZ7mgKdcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuaW5pdERhdGEgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIOWxnuaAp+WPmOWMluaYoOWwhOWIsHN0eWxlXG4gICAgICAgIHRoaXMuZGF0YS53YXRjaChbXG4gICAgICAgICAgICAnbGVmdCcsICd0b3AnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3pJbmRleCcsICd2aXNpYmxlJ1xuICAgICAgICBdLCB7XG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0eWxlLmRpc3BsYXkgPSBpdGVtLnZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5uYW1lID09PSAncm90YXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybS5yb3RhdGVaID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5uYW1lID09PSAnYW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybS5yb3RhdGVaID0gdXRpbC5kZWdUb1JhZChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdHlsZVtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICd3aWR0aCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBfdGhpcy5zdHlsZS53aWR0aCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKCF3IHx8IHcgPT09ICdhdXRvJykgJiYgX3RoaXMuZG9tICYmIF90aGlzLmRvbS5jbGllbnRXaWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5kb20uY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAnaGVpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IF90aGlzLnN0eWxlLmhlaWdodCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKCFoIHx8IGggPT09ICdhdXRvJykgJiYgX3RoaXMuZG9tICYmIF90aGlzLmRvbS5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZG9tLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdyb3RhdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRyYW5zZm9ybS5yb3RhdGVaO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAnYW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsLnJhZFRvRGVnKF90aGlzLnRyYW5zZm9ybS5yb3RhdGVaKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zdHlsZVtuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb24uc3R5bGUpXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmFwcGx5KG9wdGlvbi5zdHlsZSk7XG4gICAgICAgIGlmIChvcHRpb24uZWRpdGFibGUgPT09IGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9uLnZpc2libGUgPT09IGZhbHNlKVxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb24uZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmZyb20ob3B0aW9uLmRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnu5Hlrprkuovku7ZcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuYmluZEV2ZW50ID0gZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyDkuovku7bmiZjnrqFcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBKRXZlbnQoZG9tIHx8IHRoaXMuZG9tKTtcbiAgICAgICAgdGhpcy5ldmVudC5pbml0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5lbWl0KGUudHlwZSwgZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJpZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJ0eXBlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwiY2hpbGRyZW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwiZG9tXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZG9tO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvbS5jbGFzc05hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuZG9tLmNsYXNzTmFtZSA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInZpc2libGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEudmlzaWJsZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnZpc2libGUgPSB2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLy8g6K6+572uY3Nz5YiwZG9tXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLnNldERvbVN0eWxlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnYmFja2dyb3VuZEltYWdlJyAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCEvXlxccyp1cmxcXCgvLnRlc3QodmFsdWUpKVxuICAgICAgICAgICAgICAgIHZhbHVlID0gXCJ1cmwoXCIuY29uY2F0KHZhbHVlLCBcIilcIik7XG4gICAgICAgIH1cbiAgICAgICAgdXRpbC5jc3ModGhpcy5kb20sIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuICAgIC8vIOiuvue9ruagt+W8j1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS5jc3MgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdXRpbC5jc3ModGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8vIGRvbeWxnuaAp1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1dGlsLmF0dHIodGhpcy5kb20sIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuICAgIC8vIOenu+S9jVxuICAgIEpFbGVtZW50LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGR4LCBkeSkge1xuICAgICAgICB0aGlzLmRhdGEubGVmdCA9IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmxlZnQpICsgZHg7XG4gICAgICAgIHRoaXMuZGF0YS50b3AgPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS50b3ApICsgZHk7XG4gICAgICAgIHRoaXMuZW1pdCgnbW92ZScsIHsgZHg6IGR4LCBkeTogZHkgfSk7XG4gICAgfTtcbiAgICAvLyDph43nva7lpKflsI9cbiAgICBKRWxlbWVudC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHcsIGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhLndpZHRoID0gdztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuaGVpZ2h0ID0gaDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g5paw5aKe5a2Q5YWD57SgXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKGNoaWxkLCBwYXJlbnQpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHZvaWQgMCkgeyBwYXJlbnQgPSB0aGlzOyB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjaGlsZF8xID0gX192YWx1ZXMoY2hpbGQpLCBjaGlsZF8xXzEgPSBjaGlsZF8xLm5leHQoKTsgIWNoaWxkXzFfMS5kb25lOyBjaGlsZF8xXzEgPSBjaGlsZF8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGNoaWxkXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENoaWxkKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRfMV8xICYmICFjaGlsZF8xXzEuZG9uZSAmJiAoX2EgPSBjaGlsZF8xLnJldHVybikpIF9hLmNhbGwoY2hpbGRfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgSkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHBhcmVudC5kb20uYXBwZW5kQ2hpbGQoY2hpbGQuZG9tKTtcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQuZG9tLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g56e76Zmk6Ieq5beyXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KVxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfTtcbiAgICAvLyDnp7vpmaTlrZDlhYPntKBcbiAgICBKRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZWwuZG9tICYmIGVsLmRvbS5wYXJlbnRFbGVtZW50ID09PSB0aGlzLmRvbSlcbiAgICAgICAgICAgIHRoaXMuZG9tLnJlbW92ZUNoaWxkKGVsLmRvbSB8fCBlbCk7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltpXSA9PT0gZWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGVsZXRlIGVsLnBhcmVudDtcbiAgICB9O1xuICAgIC8vIOi9rOS4umpzb25cbiAgICBKRWxlbWVudC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKHByb3BzLCBpZykge1xuICAgICAgICB2YXIgZV8yLCBfYSwgZV8zLCBfYjtcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSBbXTsgfVxuICAgICAgICBpZiAoaWcgPT09IHZvaWQgMCkgeyBpZyA9IGZ1bmN0aW9uIChwKSB7IHJldHVybiB0cnVlOyB9OyB9XG4gICAgICAgIHZhciBmaWVsZHMgPSBfX3NwcmVhZEFycmF5KFsndHlwZScsICdkYXRhJywgJ3N0eWxlJywgJ3RyYW5zZm9ybScsICdpZCddLCBfX3JlYWQocHJvcHMpLCBmYWxzZSk7XG4gICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGZpZWxkc18xID0gX192YWx1ZXMoZmllbGRzKSwgZmllbGRzXzFfMSA9IGZpZWxkc18xLm5leHQoKTsgIWZpZWxkc18xXzEuZG9uZTsgZmllbGRzXzFfMSA9IGZpZWxkc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBrID0gZmllbGRzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRoaXNba107XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tdID0gdGhpc1trXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodiAmJiB2LnRvSlNPTikge1xuICAgICAgICAgICAgICAgICAgICBvYmpba10gPSB2LnRvSlNPTigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkc18xXzEgJiYgIWZpZWxkc18xXzEuZG9uZSAmJiAoX2EgPSBmaWVsZHNfMS5yZXR1cm4pKSBfYS5jYWxsKGZpZWxkc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbiAmJiB0aGlzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYyA9IF9fdmFsdWVzKHRoaXMuY2hpbGRyZW4pLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IF9kLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgPT09IHRoaXMgfHwgaWcoY2hpbGQpID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBvYmouY2hpbGRyZW4ucHVzaChjaGlsZC50b0pTT04oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2IgPSBfYy5yZXR1cm4pKSBfYi5jYWxsKF9jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICBKRWxlbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRvSlNPTigpO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICB9O1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS50b0h0bWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbS5vdXRlckhUTUw7XG4gICAgfTtcbiAgICByZXR1cm4gSkVsZW1lbnQ7XG59KEV2ZW50RW1pdGVyKSk7XG5leHBvcnQgZGVmYXVsdCBKRWxlbWVudDtcbiIsInZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCB1dGlsIGZyb20gXCIuLi9saWIvdXRpbFwiO1xudmFyIFN1cHBvcnRFdmVudE5hbWVzID0gW1xuICAgICdtb3VzZWRvd24nLCAnbW91c2V1cCcsICdtb3VzZW92ZXInLCAnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNld2hlZWwnLCAnY2xpY2snLCAnZGJsY2xpY2snLCAna2V5ZG93bicsICdrZXlwcmVzcycsICdrZXl1cCcsICdibHVyJywgJ2NoYW5nZScsICdmb2N1cycsICdkcmFnJywgJ2RyYWdlbnRlcicsICdkcmFnbGVhdmUnLCAnZHJhZ292ZXInLCAnZHJhZ3N0YXJ0JywgJ2Ryb3AnXG5dO1xudmFyIEpFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBKRXZlbnQodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQpXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyW5omA5pyJ5pSv5oyB55qE5LqL5Lu2XG4gICAgSkV2ZW50LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGhhbmRsZXIsIHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50KFN1cHBvcnRFdmVudE5hbWVzLCBoYW5kbGVyLCBmYWxzZSwgdGFyZ2V0KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOe7keWumuS6i+S7tuWIsGh0bWzlr7nosaFcbiAgICAgKlxuICAgICAqIEBtZXRob2QgYmluZEV2ZW50XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gaHRtbOWFg+e0oOWvueixoVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOS6i+S7tuWQjeensFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1biDkuovku7blp5TmiZhcbiAgICAgKiBAcmV0dXJucyB7bmFtZSwgZnVuLCB0YXJnZXR9IOi/lOWbnuW9k+WJjee7keWumlxuICAgICAqL1xuICAgIEpFdmVudC5wcm90b3R5cGUuYmluZEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGZ1biwgb3B0LCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmIChvcHQgPT09IHZvaWQgMCkgeyBvcHQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7IH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZV8xID0gX192YWx1ZXMobmFtZSksIG5hbWVfMV8xID0gbmFtZV8xLm5leHQoKTsgIW5hbWVfMV8xLmRvbmU7IG5hbWVfMV8xID0gbmFtZV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG5hbWVfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmRFdmVudChuLCBmdW4sIG9wdCwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVfMV8xICYmICFuYW1lXzFfMS5kb25lICYmIChfYSA9IG5hbWVfMS5yZXR1cm4pKSBfYS5jYWxsKG5hbWVfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lICYmIG5hbWUuaW5kZXhPZiAmJiBuYW1lLmluZGV4T2YoJyAnKSAhPSAtMSkge1xuICAgICAgICAgICAgdmFyIG5zID0gbmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmluZEV2ZW50KG5zLCBmdW4sIG9wdCwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvKi8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0YXJnZXQuYXR0YWNoRXZlbnQoXCJvblwiK25hbWUsIGZ1biwgb3B0KTtcbiAgICAgICAgfSAqL1xuICAgICAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1biwgb3B0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOS7juWvueixoeS4reenu+mZpOS6i+S7tuWIsFxuICAgICAqXG4gICAgICogQG1ldGhvZCByZW1vdmVFdmVudFxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGh0bWzlhYPntKDlr7nosaFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSDkuovku7blkI3np7BcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW4g5LqL5Lu25aeU5omYXG4gICAgICovXG4gICAgSkV2ZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBmdW4sIG9wdCwgdGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHQgPT09IHZvaWQgMCkgeyBvcHQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7IH1cbiAgICAgICAgaWYgKHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW4sIG9wdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZSAgXG4gICAgICAgIGVsc2UgaWYgKHRhcmdldC5kZXRhY2hFdmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmdW4sIG9wdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbJ29uJyArIG5hbWVdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOiOt+WPluWFg+e0oOS6i+S7tuinpuWPkeeahOS9jee9rlxuICAgICAqXG4gICAgICogQG1ldGhvZCBnZXRFdmVudFBvc2l0aW9uXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7ZXZlbnRBcmd9IGV2dCDlvZPliY3op6blj5Hkuovku7bnmoTlj4LmlbBcbiAgICAgKiBAcmV0dXJuIHtwb2ludH0g5LqL5Lu26Kem5Y+R55qE5L2N572uXG4gICAgICovXG4gICAgSkV2ZW50LnByb3RvdHlwZS5nZXRFdmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKGV2dCwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBpc1RvdWNoID0gZmFsc2U7XG4gICAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcyB8fCBldnQudGFyZ2V0VG91Y2hlcyB8fCBldnQudG91Y2hlcztcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGV2dCA9IHRvdWNoZXNbMF07IC8v5YW85a65dG91Y2jkuovku7ZcbiAgICAgICAgICAgIGlzVG91Y2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBweCA9IGV2dC5wYWdlWCB8fCBldnQueDtcbiAgICAgICAgaWYgKHR5cGVvZiBweCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHB4ID0gZXZ0LmNsaWVudFggKyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0KTtcbiAgICAgICAgdmFyIHB5ID0gZXZ0LnBhZ2VZIHx8IGV2dC55O1xuICAgICAgICBpZiAodHlwZW9mIHB5ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcHkgPSBldnQuY2xpZW50WSArIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKTtcbiAgICAgICAgdmFyIG94ID0gZXZ0Lm9mZnNldFg7XG4gICAgICAgIHZhciBveSA9IGV2dC5vZmZzZXRZO1xuICAgICAgICBpZiAoKHR5cGVvZiBveCA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG95ID09PSAndW5kZWZpbmVkJykgfHwgdGFyZ2V0KSB7XG4gICAgICAgICAgICB2YXIgcCA9IHV0aWwuZ2V0RWxlbWVudFBvc2l0aW9uKCh0YXJnZXQgfHwgZXZ0LnRhcmdldCkpO1xuICAgICAgICAgICAgb3ggPSBweCAtIHAueDtcbiAgICAgICAgICAgIG95ID0gcHkgLSBwLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IG94LFxuICAgICAgICAgICAgeTogb3ksXG4gICAgICAgICAgICBwYWdlWDogcHgsXG4gICAgICAgICAgICBwYWdlWTogcHksXG4gICAgICAgICAgICBpc1RvdWNoOiBpc1RvdWNoLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIEpFdmVudDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBKRXZlbnQ7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJy4uL2NvbnN0YW50L2V2ZW50RW1pdHRlcic7XG52YXIgSkZvbnREYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpGb250RGF0YShmYW1pbHksIHVybCkge1xuICAgICAgICB0aGlzLmZhbWlseSA9IGZhbWlseTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRm9udERhdGEucHJvdG90eXBlLCBcInN0YXR1c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9udClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb250LnN0YXR1cztcbiAgICAgICAgICAgIHJldHVybiAndW5sb2FkZWQnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgSkZvbnREYXRhLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBpZiAodXJsID09PSB2b2lkIDApIHsgdXJsID0gdGhpcy51cmw7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGY7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHVybCB8fCB0aGlzLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5mb250KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9udCA9IG5ldyBGb250RmFjZSh0aGlzLmZhbWlseSwgXCJ1cmwoXFxcIlwiLmNvbmNhdCh0aGlzLnVybCwgXCJcXFwiKVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZvbnQubG9hZCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmZvbnRzLmFkZChmKTsgLy8g55Sf5pWIXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSkZvbnREYXRhLnByb3RvdHlwZS50b0h0bWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIkBmb250LWZhY2Uge2ZvbnQtZmFtaWx5OiBcXFwiXCIuY29uY2F0KHRoaXMuZmFtaWx5LCBcIlxcXCI7IHNyYzogdXJsKFxcXCJcIikuY29uY2F0KHRoaXMudXJsLCBcIlxcXCIpfVwiKTtcbiAgICB9O1xuICAgIHJldHVybiBKRm9udERhdGE7XG59KCkpO1xuZXhwb3J0IHsgSkZvbnREYXRhIH07XG52YXIgSkZvbnRzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRm9udHMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkZvbnRzKGZvbnRTZXQpIHtcbiAgICAgICAgaWYgKGZvbnRTZXQgPT09IHZvaWQgMCkgeyBmb250U2V0ID0gbmV3IE1hcCgpOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmZvbnRzID0gZm9udFNldDtcbiAgICAgICAgX3RoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEpGb250cy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmZvbnRzKSB7XG4gICAgICAgICAgICB2YXIgZm9udHMgPSBkb2N1bWVudC5mb250cy52YWx1ZXMoKTtcbiAgICAgICAgICAgIHZhciBmb250ID0gZm9udHMubmV4dCgpO1xuICAgICAgICAgICAgd2hpbGUgKGZvbnQgJiYgZm9udC5kb25lICYmIGZvbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9udC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IG5ldyBKRm9udERhdGEoZm9udC52YWx1ZS5mYW1pbHkpO1xuICAgICAgICAgICAgICAgICAgICBmLmZvbnQgPSBmb250LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbnRzLnNldChmLmZhbWlseSwgZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvbnQgPSBmb250cy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOWKoOi9veWtl+S9k1xuICAgIEpGb250cy5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uIChuYW1lLCB1cmwpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZvbnQsIGY7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250ID0gdGhpcy5nZXQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvbnQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZvbnRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250ID0gbmV3IEpGb250RGF0YShuYW1lLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb250cy5zZXQobmFtZSwgZm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmb250LmxvYWQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2xvYWQnLCBmKTsgLy8g5Yqg6L295a2X5pys5LqL5Lu2XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g6I635Y+W5bey5Yqg6L2955qE5a2X5L2TXG4gICAgSkZvbnRzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAodGhpcy5mb250cykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9udHMuaGFzKG5hbWUpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvbnRzLmdldChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIC8vIOajgOafpeWKoOi9veeahOWtl+S9k+aYr+WQpuWtmOWcqO+8jOWtmOWcqOWImei/lOWbnuWtl+S9k+WvueixoVxuICAgIEpGb250cy5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgZm9udCA9IHRoaXMuZ2V0KG5hbWUpO1xuICAgICAgICByZXR1cm4gISFmb250O1xuICAgIH07XG4gICAgcmV0dXJuIEpGb250cztcbn0oRXZlbnRFbWl0ZXIpKTtcbmV4cG9ydCBkZWZhdWx0IEpGb250cztcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgSkVsZW1lbnRDc3NTdHlsZSBmcm9tICcuLi9jb25zdGFudC9zdHlsZU1hcCc7XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG52YXIgTnVtYmVyU3R5bGVNYXAgPSBbJ2xlZnQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICd3aWR0aCcsICdoZWlnaHQnXTtcbnZhciBKRWxlbWVudFN0eWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudFN0eWxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpFbGVtZW50U3R5bGUob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgIF90aGlzLmFwcGx5KG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvLyDmiormoLflvI/lupTnlKjliLDlhYPntKDmiJblvZPliY3lr7nosaFcbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChkYXRhLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB0aGlzOyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMubmFtZXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVfMSA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZV8xICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW25hbWVfMV0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBkYXRhW25hbWVfMV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBKRWxlbWVudFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0U3R5bGUobmFtZV8xLCBkYXRhW25hbWVfMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVfMV0gPSBkYXRhW25hbWVfMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgLy8g5qC35byP5a+55bqU55qE5YWD57SgXG4gICAgSkVsZW1lbnRTdHlsZS5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYXBwbHkodGhpcywgZWxlbWVudC5zdHlsZSk7XG4gICAgfTtcbiAgICAvLyDorr7nva7moLflvI9cbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOinpuWPkeaJgOacieabtOaWsOWIsGRvbVxuICAgIEpFbGVtZW50U3R5bGUucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXBwbHkodGhpcyk7XG4gICAgfTtcbiAgICAvLyDovazkuLpqc29uXG4gICAgSkVsZW1lbnRTdHlsZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLm5hbWVzKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lXzIgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV8yXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIG9ialtuYW1lXzJdID0gdGhpc1tuYW1lXzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIC8vIOeUn+aIkOagt+W8j+S7o+eQhlxuICAgIEpFbGVtZW50U3R5bGUuY3JlYXRlUHJveHkgPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgaWYgKHN0eWxlID09PSB2b2lkIDApIHsgc3R5bGUgPSB7fTsgfVxuICAgICAgICB2YXIganN0eWxlID0gbmV3IEpFbGVtZW50U3R5bGUoc3R5bGUpO1xuICAgICAgICAvLyDmoLflvI/ku6PnkIblpITnkIZcbiAgICAgICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGpzdHlsZSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGFyZ2V0W3BdO1xuICAgICAgICAgICAgICAgIC8vIOaVsOWtl+agt+W8j++8jOWkhOeQhnB46Zeu6aKYXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJyAmJiBOdW1iZXJTdHlsZU1hcC5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PT0gJzAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1dGlsLmlzUFhOdW1iZXIodikpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDpnZ7nmb3lkI3ljZXmoLflvI/kuI3mlK/mjIHorr7nva5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnIHx8ICF0YXJnZXQubmFtZXMuaW5jbHVkZXMocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDmlbDlrZfmoLflvI/vvIzlpITnkIZweOmXrumimFxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXJTdHlsZU1hcC5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdXRpbC5pc051bWJlcih2YWx1ZSkgPyBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0U3R5bGUocCwgdmFsdWUpOyAvLyDlupTnlKjliLDlhYPntKDlkoznsbtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9O1xuICAgIHJldHVybiBKRWxlbWVudFN0eWxlO1xufShKRWxlbWVudENzc1N0eWxlKSk7XG5leHBvcnQgZGVmYXVsdCBKRWxlbWVudFN0eWxlO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgSkJhc2UgZnJvbSAnLi9jb3JlL2Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IEpUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcbmltcG9ydCBKSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuL2NvcmUvZWxlbWVudCc7XG5pbXBvcnQgSkNvbnRyb2xsZXIgZnJvbSAnLi9jb3JlL2NvbnRyb2xsZXInO1xuaW1wb3J0IEpGb250cyBmcm9tICcuL2NvcmUvZm9udHMnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi9saWIvdXRpbCc7XG52YXIgSkVkaXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkVkaXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWRpdG9yKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gb3B0aW9uLnN0eWxlIHx8IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKG9wdGlvbi5zdHlsZSwge1xuICAgICAgICAgICAgJ2JveFNoYWRvdyc6ICcwIDAgMTBweCAxMHB4ICNjY2MnLFxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kU2l6ZSc6ICcxMDAlIDEwMCUnLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5aSW5bGC5Y+q5ZON5bqUWui9tOaXi+i9rFxuICAgICAgICBvcHRpb24udHJhbnNmb3JtV2F0Y2hQcm9wcyA9IFtcbiAgICAgICAgICAgICdyb3RhdGVaJywgJ3NjYWxlWCcsICdzY2FsZVknXG4gICAgICAgIF07XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9uKSB8fCB0aGlzO1xuICAgICAgICAvLyDmiYDmnInmlK/mjIHnmoTnsbvlnotcbiAgICAgICAgX3RoaXMuc2hhcGVzID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbi5jb250YWluZXIgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgb3B0aW9uLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbi5jb250YWluZXIpO1xuICAgICAgICBfdGhpcy52aWV3ID0gbmV3IEpFbGVtZW50KHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgJ2JvcmRlcic6IDAsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAwLFxuICAgICAgICAgICAgICAgICdtYXJnaW4nOiAwLFxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMTAwJScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDlrZfkvZPnrqHnkIblrp7kvotcbiAgICAgICAgX3RoaXMuZm9udHMgPSBuZXcgSkZvbnRzKCk7XG4gICAgICAgIF90aGlzLnRhcmdldC5jc3Moe1xuICAgICAgICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbidcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb24uY29udGFpbmVyKVxuICAgICAgICAgICAgb3B0aW9uLmNvbnRhaW5lci5hcHBlbmRDaGlsZChfdGhpcy52aWV3LmRvbSk7XG4gICAgICAgIF90aGlzLnZpZXcuYWRkQ2hpbGQoX3RoaXMuZG9tKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBfdGhpcy5yZWdTaGFwZSgnaW1hZ2UnLCBKSW1hZ2UpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIF90aGlzLnJlZ1NoYXBlKCd0ZXh0JywgSlRleHQpO1xuICAgICAgICBfdGhpcy5pbml0KG9wdGlvbik7XG4gICAgICAgIF90aGlzLmJpbmRFdmVudChfdGhpcy52aWV3LmRvbSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyW5pW05Liq57yW6L6R5ZmoXG4gICAgSkVkaXRvci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbi5zdHlsZS5jb250YWluZXJCYWNrZ3JvdW5kQ29sb3IpXG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb24uc3R5bGUuY29udGFpbmVyQmFja2dyb3VuZENvbG9yO1xuICAgICAgICAvLyDnlJ/miJDmjqfliLblmahcbiAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlciA9IG5ldyBKQ29udHJvbGxlcih7XG4gICAgICAgICAgICBlZGl0b3I6IHRoaXMsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHN0eWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlTm9kZS5pbm5lckhUTUwgPSBcIi5qLWRlc2lnbi1lZGl0b3ItY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuai1kZXNpZ24tZWRpdG9yLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiO1xuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChzdHlsZU5vZGUpO1xuICAgICAgICAvLyDlrZfkvZPliqDovb3miJDlip/vvIzlkIzml7bliqDlhaXliLBkb23nu5PmnoTkuK1cbiAgICAgICAgdGhpcy5mb250cy5vbignbG9hZCcsIGZ1bmN0aW9uIChmb250KSB7XG4gICAgICAgICAgICBzdHlsZU5vZGUuYXBwZW5kKGZvbnQudG9IdG1sKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbignc2VsZWN0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLnNlbGVjdChfdGhpcyk7IC8vIOmAieS4reiHquW3slxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlci5vbkRyYWdTdGFydChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWIt+aWsOagt+W8j1xuICAgICAgICB0aGlzLnN0eWxlLnJlZnJlc2goKTtcbiAgICAgICAgdGhpcy5yZXNpemUoKTsgLy8g6Kem5Y+R5LiA5qyh5aSn5bCP5pS55Y+YXG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVkaXRvci5wcm90b3R5cGUsIFwiY2hpbGRyZW5cIiwge1xuICAgICAgICAvLyDph43lhpnlrZDpm4bkuLp0YXJnZXRcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQuY2hpbGRyZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVkaXRvci5wcm90b3R5cGUsIFwic2VsZWN0ZWRFbGVtZW50c1wiLCB7XG4gICAgICAgIC8vIOiiq+mAieS4reeahOWFg+e0oFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMuY2hpbGRyZW4pLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBKQmFzZSAmJiBlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIOe7keWumuS6i+S7tlxuICAgIEpFZGl0b3IucHJvdG90eXBlLmJpbmRFdmVudCA9IGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldylcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuYmluZEV2ZW50LmNhbGwodGhpcywgdGhpcy52aWV3LmRvbSk7IC8vIOe8lui+keWZqOS6i+S7tue7keWIsOaVtOS4quWuueWZqOS4ilxuICAgIH07XG4gICAgLy8g6YCJ5Lit5p+Q5Liq5YWD57SgXG4gICAgSkVkaXRvci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgLy8g6YCJ5oqK5omA5pyJ5bey6YCJ5oup55qE5Y+W5raIXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudHMuZXZlcnkoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHAgIT09IGVsICYmIHAuc2VsZWN0ZWQgJiYgKHAuc2VsZWN0ZWQgPSBmYWxzZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlci5iaW5kKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRDb250cm9sbGVyLnVuYmluZChlbCk7XG4gICAgfTtcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAod2lkdGggPT09IHZvaWQgMCkgeyB3aWR0aCA9IHRoaXMuZGF0YS53aWR0aDsgfVxuICAgICAgICBpZiAoaGVpZ2h0ID09PSB2b2lkIDApIHsgaGVpZ2h0ID0gdGhpcy5kYXRhLmhlaWdodDsgfVxuICAgICAgICB0aGlzLmF0dHIoJ2RhdGEtc2l6ZScsIFwiXCIuY29uY2F0KHdpZHRoLCBcIipcIikuY29uY2F0KGhlaWdodCkpO1xuICAgICAgICB0aGlzLmRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5kYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kYXRhLmxlZnQgPSB1dGlsLnRvTnVtYmVyKF90aGlzLnZpZXcuZG9tLmNsaWVudFdpZHRoKSAvIDIgLSB1dGlsLnRvTnVtYmVyKHdpZHRoKSAvIDI7XG4gICAgICAgICAgICBfdGhpcy5kYXRhLnRvcCA9IHV0aWwudG9OdW1iZXIoX3RoaXMudmlldy5kb20uY2xpZW50SGVpZ2h0KSAvIDIgLSB1dGlsLnRvTnVtYmVyKGhlaWdodCkgLyAyO1xuICAgICAgICAgICAgX3RoaXMuZW1pdCgncmVzaXplJywge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9O1xuICAgIC8vIOa3u+WKoOWFg+e0oOWIsOeUu+W4g1xuICAgIEpFZGl0b3IucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLmFkZENoaWxkLmNhbGwodGhpcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2hpbGQub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoaWxkLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmVsZW1lbnRDb250cm9sbGVyLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g55uR5ZCs5qC35byP5pS55Y+YXG4gICAgICAgIGNoaWxkLm9uKCdzdHlsZUNoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5lbWl0KCdzdHlsZUNoYW5nZScsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpczsgLy8g5oqK54i26K6+572u5oiQ57yW6L6R5ZmoXG4gICAgICAgIGNoaWxkLmVkaXRvciA9IHRoaXM7XG4gICAgICAgIC8vIOWIt+aWsOagt+W8j1xuICAgICAgICBjaGlsZC5zdHlsZS5yZWZyZXNoKCk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZENoaWxkKGNoaWxkLCB0aGlzLnRhcmdldCk7XG4gICAgfTtcbiAgICAvLyDnp7vpmaRcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwgPT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUud2Fybign5LiN6IO956e76Zmk6Ieq5beyJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsLm9mZignc2VsZWN0Jyk7XG4gICAgICAgICAgICBlbC5vZmYoJ21vdXNlZG93bicpO1xuICAgICAgICAgICAgZWwub2ZmKCdzdHlsZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldC5yZW1vdmVDaGlsZChlbCk7XG4gICAgfTtcbiAgICAvLyDmiopkb21jdW1lbnTlnZDmoIfovazkuLrnvJbovpHlmajnm7jlr7nlnZDmoIdcbiAgICBKRWRpdG9yLnByb3RvdHlwZS50b0VkaXRvclBvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgICAvLyDnvJbovpHlmajlnZDmoIdcbiAgICAgICAgdmFyIGVkaXRvclBvcyA9IHV0aWwuZ2V0RWxlbWVudEJvdW5kaW5nUmVjdCh0aGlzLnRhcmdldC5kb20pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogcG9zLnggLSBlZGl0b3JQb3MueCxcbiAgICAgICAgICAgIHk6IHBvcy55IC0gZWRpdG9yUG9zLnlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEpFZGl0b3IucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNzcyh7XG4gICAgICAgICAgICAnYmFja2dyb3VuZENvbG9yJzogJyNmZmYnLFxuICAgICAgICAgICAgJ2JhY2tncm91bmRJbWFnZSc6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIuZGF0YS52aXNpYmxlID0gZmFsc2U7XG4gICAgfTtcbiAgICAvLyDnvKnmlL5cbiAgICBKRWRpdG9yLnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IHg7IH1cbiAgICAgICAgaWYgKHggPCAwLjEgfHwgeSA8IDAuMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2NhbGVYID0geDtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2NhbGVZID0geTtcbiAgICB9O1xuICAgIC8vIOazqOWGjOiHquWumuS5iee7hOS7tlxuICAgIEpFZGl0b3IucHJvdG90eXBlLnJlZ1NoYXBlID0gZnVuY3Rpb24gKG5hbWUsIHNoYXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnNoYXBlcy5oYXMobmFtZSkpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlxcdTUxNDNcXHU3RDIwXFx1N0M3QlxcdTU3OEJcIi5jb25jYXQobmFtZSwgXCJcXHU1REYyXFx1N0VDRlxcdTVCNThcXHU1NzI4XCIpKTtcbiAgICAgICAgdGhpcy5zaGFwZXMuc2V0KG5hbWUsIHNoYXBlKTtcbiAgICAgICAgcmV0dXJuIHNoYXBlO1xuICAgIH07XG4gICAgLy8g5Yib5bu65YWD57SgXG4gICAgSkVkaXRvci5wcm90b3R5cGUuY3JlYXRlU2hhcGUgPSBmdW5jdGlvbiAodHlwZSwgb3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgc2hhcGUgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0aGlzLnNoYXBlcy5nZXQodHlwZSkgOiB0eXBlO1xuICAgICAgICBpZiAoIXNoYXBlKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlwiLmNvbmNhdCh0eXBlLCBcIlxcdTRFMERcXHU1QjU4XFx1NTcyOFxcdTc2ODRcXHU1MTQzXFx1N0QyMFxcdTdDN0JcXHU1NzhCXCIpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWwgPSBuZXcgc2hhcGUoX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbiksIHsgZWRpdG9yOiB0aGlzLCB0eXBlOiB0eXBlIH0pKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH07XG4gICAgSkVkaXRvci5wcm90b3R5cGUuZnJvbUpTT04gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIGlmIChkYXRhLnN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmFwcGx5KGRhdGEuc3R5bGUpOyAvLyDlupTnlKjmoLflvI9cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2l6ZShkYXRhLndpZHRoIHx8IGRhdGEuZGF0YS53aWR0aCwgZGF0YS5oZWlnaHQgfHwgZGF0YS5kYXRhLmhlaWdodCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKGRhdGEuY2hpbGRyZW4pLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIWMudHlwZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZVNoYXBlKGMudHlwZSwgYyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSkVkaXRvcjtcbn0oSkJhc2UpKTtcbmV4cG9ydCBkZWZhdWx0IEpFZGl0b3I7XG5leHBvcnQgeyBKRWRpdG9yLCBKSW1hZ2UsIEpUZXh0LCB9O1xuIiwiaW1wb3J0IEpCYXNlQ29tcG9uZW50IGZyb20gJy4vY29yZS9iYXNlQ29tcG9uZW50JztcbmltcG9ydCBKVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dCc7XG5pbXBvcnQgSkltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZSc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi9jb3JlL2VsZW1lbnQnO1xuaW1wb3J0IEpFZGl0b3IgZnJvbSAnLi9lZGl0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudC90eXBlcyc7XG5leHBvcnQgeyBKQmFzZUNvbXBvbmVudCwgSlRleHQsIEpJbWFnZSwgSkVsZW1lbnQsIEpFZGl0b3IgfTtcbmV4cG9ydCBkZWZhdWx0IEpFZGl0b3I7XG4iLCJ2YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8g5piv5ZCm5piv5pWw5a2XXG4gICAgaXNOdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcicgfHwgL15cXHMqW1xcZFxcLl0rXFxzKiQvLnRlc3Qodik7XG4gICAgfSxcbiAgICAvLyDmmK/lkKbmmK/luKblg4/ntKDljZXkvY3nmoTlrZfnrKbkuLJcbiAgICBpc1BYTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gL15cXHMqW1xcZFxcLl0rXFxzKnB4XFxzKi9pLnRlc3Qodik7XG4gICAgfSxcbiAgICAvLyDmmK/lkKbmmK/luKbop5LluqbljZXkvY3nmoTlrZfnrKbkuLJcbiAgICBpc0RlZ051bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypkZWdcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaYr+W4puW8p+W6puWNleS9jeeahOWtl+espuS4slxuICAgIGlzUmFkTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gL15cXHMqW1xcZFxcLl0rXFxzKnJhZFxccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLy8g6L2s5Li65YOP57Sg5a2X56ym5Liy5qC85byPIFxuICAgIHRvUFg6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHYgKyAncHgnO1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9LFxuICAgIC8vIOW4puWDj+e0oOaIluWFtuWug+WNleS9jeeahOi9rOaNouS4uuaVsOWtl1xuICAgIHRvTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodik7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHYpO1xuICAgIH0sXG4gICAgLy8g5byn5bqm6L2s6KeS5bqmXG4gICAgcmFkVG9EZWc6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2ICogKDE4MCAvIE1hdGguUEkpO1xuICAgIH0sXG4gICAgLy8g6KeS5bqm6L2s5byn5bqmXG4gICAgZGVnVG9SYWQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2ICogKE1hdGguUEkgLyAxODApO1xuICAgIH0sXG4gICAgLy8g6L2s5Li66KeS5bqm5qC85byPXG4gICAgdG9EZWc6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHYgKyAnZGVnJztcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyAmJiB0aGlzLmlzUmFkTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9EZWcodGhpcy5yYWRUb0RlZyhwYXJzZUZsb2F0KHYpKSk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH0sXG4gICAgLy8g6L2s5Li65byn5bqm5qC85byPXG4gICAgdG9SYWQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHYgKyAncmFkJztcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyAmJiB0aGlzLmlzRGVnTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9SYWQodGhpcy5kZWdUb1JhZChwYXJzZUZsb2F0KHYpKSk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5YWD57Sg55qE57ud5a+55a6a5L2NXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGdldEVsZW1lbnRQb3NpdGlvblxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsIOebruagh+WFg+e0oOWvueixoVxuICAgICAqIEByZXR1cm4ge3Bvc2l0aW9ufSDkvY3nva7lr7nosaEodG9wLGxlZnQpXG4gICAgICovXG4gICAgZ2V0RWxlbWVudFBvc2l0aW9uOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIHBvcyA9IHsgXCJ5XCI6IDAsIFwieFwiOiAwIH07XG4gICAgICAgIGlmICghZWwpXG4gICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICBpZiAoZWwub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAoZWwub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gZWwub2Zmc2V0VG9wO1xuICAgICAgICAgICAgICAgIHBvcy54ICs9IGVsLm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbHNlIGlmIChlbC54KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwb3MueCArPSBlbC54O1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZWxzZSBpZiAoZWwueSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcG9zLnkgKz0gZWwueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH0sXG4gICAgLy8g6I635Y+W5YWD57SgYm91bmRzXG4gICAgZ2V0RWxlbWVudEJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBib3VuZHMgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmIChlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIGJvdW5kcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGJvdW5kcy54ICs9IHNjcm9sbExlZnQ7XG4gICAgICAgICAgICBib3VuZHMueSArPSBzY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5nZXRFbGVtZW50UG9zaXRpb24oZWwpO1xuICAgICAgICAgICAgYm91bmRzLnggPSBwb3MueDtcbiAgICAgICAgICAgIGJvdW5kcy55ID0gcG9zLnk7XG4gICAgICAgICAgICBib3VuZHMud2lkdGggPSBlbC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGJvdW5kcy5oZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9LFxuICAgIC8vIOaKimRvbWN1bWVudOWdkOagh+i9rOS4uuaMh+WumuWFg+e0oOebuOWvueWdkOagh1xuICAgIHRvRG9tUG9zaXRpb246IGZ1bmN0aW9uIChwb3MsIGRvbSkge1xuICAgICAgICB2YXIgZG9tUG9zID0gdGhpcy5nZXRFbGVtZW50Qm91bmRpbmdSZWN0KGRvbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBwb3MueCAtIGRvbVBvcy54LFxuICAgICAgICAgICAgeTogcG9zLnkgLSBkb21Qb3MueVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oqK5LiA5Liq5oiW5aSa5Liq54K557uV5p+Q5Liq54K55peL6L2s5LiA5a6a6KeS5bqmXG4gICAgICog5YWI5oqK5Z2Q5qCH5Y6f54K556e75Yiw5peL6L2s5Lit5b+D54K577yM6K6h566X5ZCO56e75ZueXG4gICAgICogQG1ldGhvZCByb3RhdGVQb2ludHNcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtBcnJheS9vYmplY3R9IHAg5LiA5Liq5oiW5aSa5Liq54K5XG4gICAgICogQHBhcmFtIHt4OiBudW1iZXIsIHk6IG51bWJlcn0gcnAg5peL6L2s5Lit5b+D54K5XG4gICAgICogQHBhcmFtIHsqfSByIOaXi+i9rOinkuW6plxuICAgICAqL1xuICAgIHJvdGF0ZVBvaW50czogZnVuY3Rpb24gKHAsIGNlbnRlciwgcikge1xuICAgICAgICBpZiAoIXIgfHwgIXApXG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHIpO1xuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHApKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciB4MSA9IHBbaV0ueCAtIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIHZhciB5MSA9IHBbaV0ueSAtIGNlbnRlci55O1xuICAgICAgICAgICAgICAgIHBbaV0ueCA9IHgxICogY29zIC0geTEgKiBzaW4gKyBjZW50ZXIueDtcbiAgICAgICAgICAgICAgICBwW2ldLnkgPSB4MSAqIHNpbiArIHkxICogY29zICsgY2VudGVyLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgeDEgPSBwLnggLSBjZW50ZXIueDtcbiAgICAgICAgICAgIHZhciB5MSA9IHAueSAtIGNlbnRlci55O1xuICAgICAgICAgICAgcC54ID0geDEgKiBjb3MgLSB5MSAqIHNpbiArIGNlbnRlci54O1xuICAgICAgICAgICAgcC55ID0geDEgKiBzaW4gKyB5MSAqIGNvcyArIGNlbnRlci55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgIH0sXG4gICAgLy8g6K6+572u5qC35byPXG4gICAgY3NzOiBmdW5jdGlvbiAoZG9tLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobmFtZSkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzKGRvbSwgbiwgbmFtZVtuXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBkb23lsZ7mgKdcbiAgICBhdHRyOiBmdW5jdGlvbiAoZG9tLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSArICcnKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkb20uZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTklMXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9uaWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcGFyc2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJpbmdpZnlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF92LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3YyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3YzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3Y0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsaWRhdGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3ZhbGlkYXRlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVyc2lvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdmVyc2lvbi5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MS5qc1wiKSk7XG5cbnZhciBfdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzLmpzXCIpKTtcblxudmFyIF92MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjQuanNcIikpO1xuXG52YXIgX3Y0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NS5qc1wiKSk7XG5cbnZhciBfbmlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uaWwuanNcIikpO1xuXG52YXIgX3ZlcnNpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZlcnNpb24uanNcIikpO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIikpO1xuXG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIGNvbnN0IG91dHB1dCA9IFtdO1xuICBjb25zdCBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICBjb25zdCBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgY29uc3QgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgY29uc3QgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICBsZXQgYSA9IDE3MzI1ODQxOTM7XG4gIGxldCBiID0gLTI3MTczMzg3OTtcbiAgbGV0IGMgPSAtMTczMjU4NDE5NDtcbiAgbGV0IGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIGNvbnN0IG9sZGEgPSBhO1xuICAgIGNvbnN0IG9sZGIgPSBiO1xuICAgIGNvbnN0IG9sZGMgPSBjO1xuICAgIGNvbnN0IG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG4gIGNvbnN0IG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICBjb25zdCBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIGNvbnN0IG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cblxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBtZDU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG52YXIgX2RlZmF1bHQgPSB7XG4gIHJhbmRvbVVVSURcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgbGV0IHY7XG4gIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNDtcbiAgYXJyWzFdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMl0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzNdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls0XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDg7XG4gIGFycls1XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNl0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gODtcbiAgYXJyWzddID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuXG4gIGFycls4XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4O1xuICBhcnJbOV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcblxuICBhcnJbMTBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzExXSA9IHYgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMl0gPSB2ID4+PiAyNCAmIDB4ZmY7XG4gIGFyclsxM10gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsxNF0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzE1XSA9IHYgJiAweGZmO1xuICByZXR1cm4gYXJyO1xufVxuXG52YXIgX2RlZmF1bHQgPSBwYXJzZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBybmc7XG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcblxuZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgY29uc3QgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgY29uc3QgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIGNvbnN0IE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgY29uc3QgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cblxuICAgIE1baV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgIH1cblxuICAgIGZvciAobGV0IHQgPSAxNjsgdCA8IDgwOyArK3QpIHtcbiAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIGxldCBhID0gSFswXTtcbiAgICBsZXQgYiA9IEhbMV07XG4gICAgbGV0IGMgPSBIWzJdO1xuICAgIGxldCBkID0gSFszXTtcbiAgICBsZXQgZSA9IEhbNF07XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDgwOyArK3QpIHtcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKHQgLyAyMCk7XG4gICAgICBjb25zdCBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbdF0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG5cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cblxudmFyIF9kZWZhdWx0ID0gc2hhMTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB1bnNhZmVTdHJpbmdpZnk7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5mdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbnZhciBfZGVmYXVsdCA9IHN0cmluZ2lmeTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcbmxldCBfbm9kZUlkO1xuXG5sZXQgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG5sZXQgX2xhc3RNU2VjcyA9IDA7XG5sZXQgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGxldCBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICBjb25zdCBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsZXQgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICBsZXQgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxOyAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICBjb25zdCBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZy5kZWZhdWx0KSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgbGV0IG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICBsZXQgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICBjb25zdCBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIGNvbnN0IHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIGNvbnN0IHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKGxldCBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX21kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tZDUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2MyA9ICgwLCBfdi5kZWZhdWx0KSgndjMnLCAweDMwLCBfbWQuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2MztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmV4cG9ydHMuZGVmYXVsdCA9IHYzNTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuY29uc3QgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLkROUyA9IEROUztcbmNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0cy5VUkwgPSBVUkw7XG5cbmZ1bmN0aW9uIHYzNShuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgX25hbWVzcGFjZTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZXNwYWNlID0gKDAsIF9wYXJzZS5kZWZhdWx0KShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX25hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpKTtcblxudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAoX25hdGl2ZS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHY0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcblxudmFyIF9zaGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NoYTEuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2NSA9ICgwLCBfdi5kZWZhdWx0KSgndjUnLCAweDUwLCBfc2hhLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gdjU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVnZXguanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgX3JlZ2V4LmRlZmF1bHQudGVzdCh1dWlkKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdmFsaWRhdGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdmVyc2lvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdfQ==
