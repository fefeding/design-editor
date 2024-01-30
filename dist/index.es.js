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
    if (this.data) Object.assign(this.data, data);
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
      className: 'j-design-editor-container'
    })) || this;
    // 选中
    _this._selected = false;
    option.target = option.target || {};
    // 生成当前控制的元素
    _this.target = new _element["default"](__assign(__assign({}, option), {
      visible: true,
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
    // 复制属性
    for (var k in option) {
      var v = option[k];
      if (typeof k !== 'string' || typeof v !== 'string' || typeof v !== 'number') continue;
      _this[k] = v;
    }
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
    if (option.style) _this.style.apply(option.style);
    // 变换控制的是核心元素
    _this.transform = _transform["default"].createProxy(option.transform, {
      target: _this,
      // 如果指定了只响应某几个属性
      watchProps: option.transformWatchProps
    });
    _this.initData(option, option.dataType);
    if (option.editable === false) _this.editable = false;
    if (option.className) _this.className = option.className;
    _this.bindEvent(); // 事件绑定
    return _this;
  }
  // 初始化一些基础属性
  JElement.prototype.initData = function (option, type) {
    var _this = this;
    if (type === void 0) {
      type = _data.JElementData;
    }
    this.data = _data.JElementData.createProxy(new type());
    // 属性变化映射到style
    this.data.watch(['x', 'y', 'left', 'top', 'width', 'height', 'zIndex', 'visible'], {
      set: function set(item) {
        if (item.name === 'visible') {
          _this.style.display = item.value ? 'block' : 'none';
        } else if (item.name === 'x') _this.data.left = item.value;else if (item.name === 'y') _this.data.top = item.value;else if (item.name === 'rotation') {
          _this.transform.rotateZ = item.value;
        } else if (item.name === 'angle') {
          _this.transform.rotateZ = _util["default"].degToRad(item.value);
        } else _this.style[item.name] = item.value;
      },
      get: function get(name) {
        if (name === 'x') return _this.data.left;else if (name === 'y') return _this.data.top;else if (name === 'width') {
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
    this.data.x = option.x || option.left || this.data.x || 0;
    this.data.y = option.y || option.top || this.data.y || 0;
    this.data.width = option.width || option.width || this.data.width || 1;
    this.data.height = option.height || option.height || this.data.height || 1;
    if (typeof option.rotation !== 'undefined') this.data.rotation = option.rotation;
    if (typeof option.angle !== 'undefined') this.data.angle = option.angle;
    if (typeof option.zIndex !== 'undefined') this.data.zIndex = option.zIndex;
    if (typeof option.visible !== 'undefined') this.data.visible = !!option.visible;
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

},{}],13:[function(require,module,exports){
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
    // 刷新样式
    this.style.refresh();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2NvbXBvbmVudHMvaW1hZ2UuanMiLCJkaXN0L2NvbXBvbmVudHMvdGV4dC5qcyIsImRpc3QvY29uc3RhbnQvZGF0YS5qcyIsImRpc3QvY29uc3RhbnQvZXZlbnRFbWl0dGVyLmpzIiwiZGlzdC9jb25zdGFudC9zdHlsZU1hcC5qcyIsImRpc3QvY29uc3RhbnQvdHJhbnNmb3JtLmpzIiwiZGlzdC9jb3JlL2Jhc2VDb21wb25lbnQuanMiLCJkaXN0L2NvcmUvY29udHJvbGxlci5qcyIsImRpc3QvY29yZS9lbGVtZW50LmpzIiwiZGlzdC9jb3JlL2V2ZW50LmpzIiwiZGlzdC9jb3JlL2ZvbnRzLmpzIiwiZGlzdC9jb3JlL3N0eWxlLmpzIiwiZGlzdC9lZGl0b3IuanMiLCJkaXN0L2luZGV4LmpzIiwiZGlzdC9saWIvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvbWQ1LWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L25hdGl2ZS1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9uaWwuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3BhcnNlLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9yZWdleC5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3Qvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3NoYTEtYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3Qvc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC92MS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdjMuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3YzNS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdjQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9kaXN0L3Y1LmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvZGlzdC92YWxpZGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL2Rpc3QvdmVyc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQzBCQSxJQUFBLGNBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFDQSxJQUFBLEtBQUEsR0FBQSxPQUFBO0FBQThDLFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQTNCOUMsSUFBSSxTQUFTLEdBQUksVUFBUSxTQUFLLFNBQVMsSUFBTSxZQUFZO0VBQ3JELElBQUksY0FBYSxHQUFHLFNBQUEsY0FBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ2hDLGNBQWEsR0FBRyxNQUFNLENBQUMsY0FBYyxJQUNoQztNQUFFLFNBQVMsRUFBRTtJQUFHLENBQUMsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO01BQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsQ0FBRSxJQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7TUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDO0lBQ3JHLE9BQU8sY0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNELE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQ3JDLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdB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QUFDLENBQUM7TUFDckIsQ0FBQyxDQUFDO01BQ0YsTUFBTSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxVQUFVLENBQUMsRUFBRTtRQUMvQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7TUFDdkIsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDM0M7SUFDQSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7SUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxJQUFJLENBQUMsR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUc7SUFDNUMsSUFBSSxDQUFDLEdBQUcsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHO0lBQzdDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSTtJQUNyQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUk7SUFDdEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7SUFDekIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7SUFDM0IsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7SUFDcEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7SUFDeEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FB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LENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7RUFDOUUsQ0FBQyxDQUNELE9BQU8sS0FBSyxFQUFFO0lBQUUsQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFO0lBQU0sQ0FBQztFQUFFLENBQUMsU0FDL0I7SUFDSixJQUFJO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDLFNBQ087TUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLO0lBQUU7RUFDcEM7RUFDQSxPQUFPLEVBQUU7QUFDYixDQUFDO0FBQ0QsSUFBSSxRQUFRLEdBQUksVUFBUSxTQUFLLFFBQVEsSUFBSyxVQUFTLENBQUMsRUFBRTtFQUNsRCxJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLFFBQVE7SUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDLEdBQUcsQ0FBQztFQUM3RSxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3ZCLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUUsT0FBTztJQUMxQyxJQUFJLEVBQUUsU0FBQSxLQUFBLEVBQVk7TUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO01BQ2xDLE9BQU87UUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUFFLElBQUksRUFBRSxDQUFDO01BQUUs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LEdBQUcsRUFBRSxTQUFBLElBQVUsSUFBSSxFQUFFO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7VUFDekIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsTUFBTTtRQUN2RCxDQUFDLE1BQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQzNCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7VUFDL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDeEMsQ0FBQyxNQUNJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7VUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2RCxDQUFDLE1BRUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUs7TUFDM0MsQ0FBQztNQUNELEdBQUcsRUFBRSxTQUFBLElBQVUsSUFBSSxFQUFFO1FBQ2pCLElBQUksSUFBSSxLQUFLLEdBQUcsRUFDWixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQ3RCLElBQUksSUFBSSxLQUFLLEdBQUcsRUFDakIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUNyQixJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7VUFDdkIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQztV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QUFFLElBQUk7UUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO01BQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFBRTtJQUM3RyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekUsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELElBQUksV0FBVyxHQUFJLFVBQVEsU0FBSyxXQUFXLElBQUssVUFBVSxPQUFPLEVBQUUsSUFBSSxFQUFFO0VBQ3JFLElBQUksQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFLENBQUM7TUFBRSxJQUFJLEVBQUUsU0FBQSxLQUFBLEVBQVc7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUUsQ0FBQztNQUFFLElBQUksRUFBRSxFQUFFO01BQUUsR0FBRyxFQUFFO0lBQUcsQ0FBQztJQUFFLENBQUM7SUFBRSxDQUFDO0lBQUUsQ0FBQztJQUFFLENBQUM7RUFDaEgsT0FBTyxDQUFDLEdBQUc7SUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQUUsQ0FBQyxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVc7SUFBRSxPQUFPLElBQUk7RUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3hKLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRTtJQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUU7TUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFFLENBQUM7RUFBRTtFQUNqRSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDZCxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO01BQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztNQUM1SixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUN2QyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVCxLQUFLLENBQUM7UUFBRSxLQUFLLENBQUM7VUFBRSxDQUFDLEdBQUcsRUFBRTtVQUFFO1FBQ3hCLEtBQUssQ0FBQztVQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7VUFBRSxPQUFPO1lBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBRSxJQUFJLEVBQUU7VUFBTSxDQUFDO1FBQ3ZELEtBQUssQ0FBQztVQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7VUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUFFO1FBQ3hDLEtBQUssQ0FBQztVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUFFO1FBQ3hDO1VBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxHQUFHLENBQUM7WUFBRTtVQUFVO1VBQzNHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUFFO1VBQU87VUFDckYsSUFBSSxFQUFFLENB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QTtBQUNBO0VBQ0ksWUFBWSxFQUFFLFNBQUEsYUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtJQUNsQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNSLE9BQU8sQ0FBQztJQUNaLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNMO1FBQ0osSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO01BQzNDO0lBQ0osQ0FBQyxNQUNJO01BQ0QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztNQUN2QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO01BQ3ZCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9iYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IEpJbWFnZURhdGEgfSBmcm9tICcuLi9jb25zdGFudC9kYXRhJztcbnZhciBKSW1hZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpJbWFnZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKSW1hZ2Uob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uKSwgeyBub2RlVHlwZTogJ2ltZycsIGRhdGFUeXBlOiBKSW1hZ2VEYXRhIH0pKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50YXJnZXQuZG9tLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5lbWl0KCdsb2FkJywgZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnRhcmdldC5kb20ub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIGUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy50YXJnZXQuYXR0cignY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJyk7XG4gICAgICAgIC8vIOWxnuaAp+WPmOWMluaYoOWwhOWIsHN0eWxlXG4gICAgICAgIF90aGlzLmRhdGEud2F0Y2goW1xuICAgICAgICAgICAgJ3NyYydcbiAgICAgICAgXSwge1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5kb20uc3JjID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRhcmdldC5kb20uc3JjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHNyYyA9IG9wdGlvbi51cmwgfHwgb3B0aW9uLnNyYztcbiAgICAgICAgaWYgKHNyYylcbiAgICAgICAgICAgIF90aGlzLmRhdGEuc3JjID0gc3JjO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEpJbWFnZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7IHByb3BzID0gW107IH1cbiAgICAgICAgcHJvcHMucHVzaCgnc3JjJyk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnRvSlNPTi5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICB9O1xuICAgIHJldHVybiBKSW1hZ2U7XG59KEJhc2UpKTtcbmV4cG9ydCBkZWZhdWx0IEpJbWFnZTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9iYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IEpUZXh0RGF0YSB9IGZyb20gJy4uL2NvbnN0YW50L2RhdGEnO1xuaW1wb3J0IHsgdG9wWkluZGV4IH0gZnJvbSAnLi4vY29uc3RhbnQvc3R5bGVNYXAnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xuaW1wb3J0IEpFbGVtZW50IGZyb20gJy4uL2NvcmUvZWxlbWVudCc7XG52YXIgSlRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpUZXh0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpUZXh0KG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gX19hc3NpZ24oeyBmb250RmFtaWx5OiAnQXJpYWwnLCB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6IDIyLCBmb250V2VpZ2h0OiAnbm9ybWFsJywgZm9udFN0eWxlOiAnbm9ybWFsJywgd29yZFdyYXA6IHRydWUsIHdvcmRCcmVhazogXCJrZWVwLWFsbFwiIH0sIG9wdGlvbi5zdHlsZSk7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbiksIHsgbm9kZVR5cGU6ICdkaXYnLCBkYXRhVHlwZTogSlRleHREYXRhIH0pKSB8fCB0aGlzO1xuICAgICAgICAvLyDlsZ7mgKflj5jljJbmmKDlsITliLBzdHlsZVxuICAgICAgICBfdGhpcy5kYXRhLndhdGNoKFtcbiAgICAgICAgICAgICd0ZXh0J1xuICAgICAgICBdLCB7XG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmRvbS5pbm5lclRleHQgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudGFyZ2V0LmRvbS5pbm5lclRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdGV4dCA9IG9wdGlvbi50ZXh0O1xuICAgICAgICBpZiAodGV4dClcbiAgICAgICAgICAgIF90aGlzLmRhdGEudGV4dCA9IHRleHQ7XG4gICAgICAgIC8vIOWPjOWHu+WPr+e8lui+kVxuICAgICAgICBfdGhpcy5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5lZGl0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5vbignc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY2xvc2VFZGl0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8vIOi/m+WFpee8lui+keeKtuaAgVxuICAgIEpUZXh0LnByb3RvdHlwZS5lZGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuZWRpdGFibGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBlZGl0RWwgPSB0aGlzLmVkaXRvci50ZXh0RWRpdEVsZW1lbnQ7XG4gICAgICAgIGlmICghZWRpdEVsKSB7XG4gICAgICAgICAgICBlZGl0RWwgPSB0aGlzLmVkaXRvci50ZXh0RWRpdEVsZW1lbnQgPSBuZXcgSkVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5vZGVUeXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHpJbmRleDogdG9wWkluZGV4LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogJ2JvdGgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlZGl0RWwub24oJ2JsdXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlZGl0RWwub24oJ2NsaWNrIGRibGNsaWNrIG1vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3IuZG9tLmFwcGVuZENoaWxkKGVkaXRFbC5kb20pO1xuICAgICAgICB9XG4gICAgICAgIGVkaXRFbC5kb20udmFsdWUgPSB0aGlzLmRhdGEudGV4dDtcbiAgICAgICAgZWRpdEVsLmF0dHIoJ2RhdGEtdGFyZ2V0JywgdGhpcy5pZCk7XG4gICAgICAgIHZhciB3ID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEud2lkdGgpICogMS4yO1xuICAgICAgICB2YXIgaCA9IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmhlaWdodCkgKiAxLjI7XG4gICAgICAgIHZhciBzdHlsZSA9IHt9O1xuICAgICAgICBzdHlsZS53aWR0aCA9IE1hdGgubWF4KHcsIDEwMCkgKyAncHgnO1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBNYXRoLm1heChoLCAxMDApICsgJ3B4JztcbiAgICAgICAgc3R5bGUudG9wID0gdGhpcy5kYXRhLnRvcDtcbiAgICAgICAgc3R5bGUubGVmdCA9IHRoaXMuZGF0YS5sZWZ0O1xuICAgICAgICBzdHlsZS5mb250U2l6ZSA9IHRoaXMuc3R5bGUuZm9udFNpemU7XG4gICAgICAgIHN0eWxlLmZvbnRGYW1pbHkgPSB0aGlzLnN0eWxlLmZvbnRGYW1pbHk7XG4gICAgICAgIHN0eWxlLmZvbnRXZWlnaHQgPSB0aGlzLnN0eWxlLmZvbnRXZWlnaHQ7XG4gICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgdXRpbC5jc3MoZWRpdEVsLCBzdHlsZSk7XG4gICAgICAgIGVkaXRFbC5kb20uZm9jdXMoKTsgLy8g6L+b5YWl5o6n5Lu2XG4gICAgfTtcbiAgICAvLyDnu5PmnZ/nvJbovpEgXG4gICAgSlRleHQucHJvdG90eXBlLmNsb3NlRWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVkaXRFbCA9IHRoaXMuZWRpdG9yLnRleHRFZGl0RWxlbWVudDtcbiAgICAgICAgaWYgKCFlZGl0RWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIOe8lui+keeahOaYr+W9k+WJjeWFg+e0oO+8jOaJjemHh+eUqOWug+eahOWAvFxuICAgICAgICBpZiAoZWRpdEVsLmF0dHIoJ2RhdGEtdGFyZ2V0JykgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS50ZXh0ID0gZWRpdEVsLmRvbS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlZGl0RWwuZGF0YS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGVkaXRFbC5kb20udmFsdWUgPSAnJzsgLy8g572u56m6XG4gICAgfTtcbiAgICBKVGV4dC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7IHByb3BzID0gW107IH1cbiAgICAgICAgcHJvcHMucHVzaCgndGV4dCcpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS50b0pTT04uY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgfTtcbiAgICByZXR1cm4gSlRleHQ7XG59KEJhc2UpKTtcbmV4cG9ydCBkZWZhdWx0IEpUZXh0O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCBFdmVudEVtaXRlciBmcm9tICcuL2V2ZW50RW1pdHRlcic7XG52YXIgSkRhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpEYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpEYXRhKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCkgeyBkYXRhID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGF0YSA9IHt9O1xuICAgICAgICBfdGhpcy53YXRjaGVyID0gbmV3IE1hcCgpO1xuICAgICAgICBfdGhpcy5mcm9tKGRhdGEpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8vIOebkeaOp+afkOS4quWxnuaAp+WPmOWMllxuICAgIEpEYXRhLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIChuYW1lLCB3YXRjaGVyKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lXzEgPSBfX3ZhbHVlcyhuYW1lKSwgbmFtZV8xXzEgPSBuYW1lXzEubmV4dCgpOyAhbmFtZV8xXzEuZG9uZTsgbmFtZV8xXzEgPSBuYW1lXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gbmFtZV8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhdGNoKG4sIHdhdGNoZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZV8xXzEgJiYgIW5hbWVfMV8xLmRvbmUgJiYgKF9hID0gbmFtZV8xLnJldHVybikpIF9hLmNhbGwobmFtZV8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdhdGNoZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlci5oYXMobmFtZSkpXG4gICAgICAgICAgICB3YXRjaGVzID0gdGhpcy53YXRjaGVyLmdldChuYW1lKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoZXIuc2V0KG5hbWUsIHdhdGNoZXMpO1xuICAgICAgICB9XG4gICAgICAgIHdhdGNoZXMucHVzaCh3YXRjaGVyKTtcbiAgICAgICAgdGhpcy5kYXRhW25hbWVdICYmIHRoaXMucHJvcGVydHlDaGFuZ2UobmFtZSk7IC8vIOinpuWPkeS4gOasoVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8vIOWxnuaAp+aUueWPmFxuICAgIEpEYXRhLnByb3RvdHlwZS5wcm9wZXJ0eUNoYW5nZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aGlzLmRhdGFbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0YVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2F0Y2hlcyA9IHRoaXMud2F0Y2hlci5nZXQobmFtZSk7XG4gICAgICAgIGlmICh3YXRjaGVzICYmIHdhdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHdhdGNoZXNfMSA9IF9fdmFsdWVzKHdhdGNoZXMpLCB3YXRjaGVzXzFfMSA9IHdhdGNoZXNfMS5uZXh0KCk7ICF3YXRjaGVzXzFfMS5kb25lOyB3YXRjaGVzXzFfMSA9IHdhdGNoZXNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSB3YXRjaGVzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdyAmJiB3LnNldCAmJiB3LnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2F0Y2hlc18xXzEgJiYgIXdhdGNoZXNfMV8xLmRvbmUgJiYgKF9hID0gd2F0Y2hlc18xLnJldHVybikpIF9hLmNhbGwod2F0Y2hlc18xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOivu+WPluWxnuaAp1xuICAgIEpEYXRhLnByb3RvdHlwZS5nZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBlXzMsIF9hO1xuICAgICAgICB2YXIgd2F0Y2hlcyA9IHRoaXMud2F0Y2hlci5nZXQobmFtZSk7XG4gICAgICAgIGlmICh3YXRjaGVzICYmIHdhdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHdhdGNoZXNfMiA9IF9fdmFsdWVzKHdhdGNoZXMpLCB3YXRjaGVzXzJfMSA9IHdhdGNoZXNfMi5uZXh0KCk7ICF3YXRjaGVzXzJfMS5kb25lOyB3YXRjaGVzXzJfMSA9IHdhdGNoZXNfMi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSB3YXRjaGVzXzJfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSB3ICYmIHcuZ2V0ICYmIHcuZ2V0KG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXRjaGVzXzJfMSAmJiAhd2F0Y2hlc18yXzEuZG9uZSAmJiAoX2EgPSB3YXRjaGVzXzIucmV0dXJuKSkgX2EuY2FsbCh3YXRjaGVzXzIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtuYW1lXTtcbiAgICB9O1xuICAgIEpEYXRhLnByb3RvdHlwZS5mcm9tID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSlcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBKRGF0YS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV80LCBfYTtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICB2YXIgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmRhdGEpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcHNfMSA9IF9fdmFsdWVzKHByb3BzKSwgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCk7ICFwcm9wc18xXzEuZG9uZTsgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZV8yID0gcHJvcHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXzJdID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpc1tuYW1lXzJdID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBvYmpbbmFtZV8yXSA9IHRoaXNbbmFtZV8yXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV80XzEpIHsgZV80ID0geyBlcnJvcjogZV80XzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzXzFfMSAmJiAhcHJvcHNfMV8xLmRvbmUgJiYgKF9hID0gcHJvcHNfMS5yZXR1cm4pKSBfYS5jYWxsKHByb3BzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzQpIHRocm93IGVfNC5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICAvLyDnlJ/miJDmlbDmja5EYXRhXG4gICAgSkRhdGEuY3JlYXRlUHJveHkgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvLyDku6PnkIblpITnkIZcbiAgICAgICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGRhdGEsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRhcmdldFtwXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmdldFByb3BlcnR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHAsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wcm9wZXJ0eUNoYW5nZShwLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9O1xuICAgIHJldHVybiBKRGF0YTtcbn0oRXZlbnRFbWl0ZXIpKTtcbmV4cG9ydCBkZWZhdWx0IEpEYXRhO1xuLy8g5YWD57Sg5Y2Z56GA5pWw5o2u5a+56LGhXG52YXIgSkVsZW1lbnREYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudERhdGEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnREYXRhKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBKRWxlbWVudERhdGE7XG59KEpEYXRhKSk7XG5leHBvcnQgeyBKRWxlbWVudERhdGEgfTtcbnZhciBKSW1hZ2VEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKSW1hZ2VEYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpJbWFnZURhdGEoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEpJbWFnZURhdGE7XG59KEpFbGVtZW50RGF0YSkpO1xuZXhwb3J0IHsgSkltYWdlRGF0YSB9O1xudmFyIEpUZXh0RGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSlRleHREYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpUZXh0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSlRleHREYXRhO1xufShKRWxlbWVudERhdGEpKTtcbmV4cG9ydCB7IEpUZXh0RGF0YSB9O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCBFdmVudEVtaXRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbnZhciBFdmVudEVtaXR0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEV2ZW50RW1pdHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLy8g55So56m65qC85YiG6ZqU5LqL5Lu25ZCNXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zcGxpdEV2ZW50TmFtZXMgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHZhciBhcnIgPSBuYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAgICAgKi9cbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBldmVudHMgPSB0aGlzLnNwbGl0RXZlbnROYW1lcyhldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGV2ZW50c18xID0gX192YWx1ZXMoZXZlbnRzKSwgZXZlbnRzXzFfMSA9IGV2ZW50c18xLm5leHQoKTsgIWV2ZW50c18xXzEuZG9uZTsgZXZlbnRzXzFfMSA9IGV2ZW50c18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWVfMSA9IGV2ZW50c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLm9uLmNhbGwodGhpcywgbmFtZV8xLCBmbiwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudHNfMV8xICYmICFldmVudHNfMV8xLmRvbmUgJiYgKF9hID0gZXZlbnRzXzEucmV0dXJuKSkgX2EuY2FsbChldmVudHNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUub24uY2FsbCh0aGlzLCBldmVudCwgZm4sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuc3BsaXRFdmVudE5hbWVzKGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZXZlbnRzXzIgPSBfX3ZhbHVlcyhldmVudHMpLCBldmVudHNfMl8xID0gZXZlbnRzXzIubmV4dCgpOyAhZXZlbnRzXzJfMS5kb25lOyBldmVudHNfMl8xID0gZXZlbnRzXzIubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZV8yID0gZXZlbnRzXzJfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUub2ZmLmNhbGwodGhpcywgbmFtZV8yLCBmbiwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudHNfMl8xICYmICFldmVudHNfMl8xLmRvbmUgJiYgKF9hID0gZXZlbnRzXzIucmV0dXJuKSkgX2EuY2FsbChldmVudHNfMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUub2ZmLmNhbGwodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG59KEV2ZW50RW1pdGVyKSk7XG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXI7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJztcbmV4cG9ydCB2YXIgdG9wWkluZGV4ID0gMTAwMDA7XG4vLyDmlK/mjIHnmoTmoLflvI/lsZ7mgKfliJfooahcbnZhciBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFbGVtZW50U3R5bGVEZWNsYXJhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEpFbGVtZW50U3R5bGVEZWNsYXJhdGlvbjtcbn0oRXZlbnRFbWl0ZXIpKTtcbmV4cG9ydCB7IEpFbGVtZW50U3R5bGVEZWNsYXJhdGlvbiB9O1xuLy8g5qC35byP5bGe5oCn6ZuG5ZCIXG52YXIgSkVsZW1lbnRTdHlsZVByb3BlcnR5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpFbGVtZW50U3R5bGVQcm9wZXJ0eSgpIHtcbiAgICAgICAgdGhpcy5hY2NlbnRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmFsaWduQ29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLmFsaWduSXRlbXMgPSAnJztcbiAgICAgICAgdGhpcy5hbGlnblNlbGYgPSAnJztcbiAgICAgICAgdGhpcy5hbGlnbm1lbnRCYXNlbGluZSA9ICcnO1xuICAgICAgICB0aGlzLmFsbCA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbXBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGVsYXkgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXJlY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZpbGxNb2RlID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25OYW1lID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUGxheVN0YXRlID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5hcHBlYXJhbmNlID0gJyc7XG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW8gPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZHJvcEZpbHRlciA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tmYWNlVmlzaWJpbGl0eSA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQXR0YWNobWVudCA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRCbGVuZE1vZGUgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xpcCA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRPcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb25YID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRSZXBlYXQgPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmJhc2VsaW5lU2hpZnQgPSAnJztcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXIgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9jayA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja0VuZCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrRW5kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja0VuZFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tFbmRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1N0YXJ0Q29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1N0YXJ0U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1N0YXJ0V2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1N0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJvdHRvbUNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21XaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckNvbGxhcHNlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJFbmRFbmRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJFbmRTdGFydFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW1hZ2VPdXRzZXQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbWFnZVJlcGVhdCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlU2xpY2UgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbWFnZVNvdXJjZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZUVuZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lRW5kU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVFbmRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lU3RhcnRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZVN0YXJ0U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVTdGFydFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckxlZnQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJMZWZ0Q29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJMZWZ0U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJMZWZ0V2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJSaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJSaWdodFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyUmlnaHRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclNwYWNpbmcgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJTdGFydEVuZFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclN0YXJ0U3RhcnRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclRvcCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclRvcENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wTGVmdFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJUb3BXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcldpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm90dG9tID0gJyc7XG4gICAgICAgIHRoaXMuYm94U2hhZG93ID0gJyc7XG4gICAgICAgIHRoaXMuYm94U2l6aW5nID0gJyc7XG4gICAgICAgIHRoaXMuYnJlYWtBZnRlciA9ICcnO1xuICAgICAgICB0aGlzLmJyZWFrQmVmb3JlID0gJyc7XG4gICAgICAgIHRoaXMuYnJlYWtJbnNpZGUgPSAnJztcbiAgICAgICAgdGhpcy5jYXB0aW9uU2lkZSA9ICcnO1xuICAgICAgICB0aGlzLmNhcmV0Q29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5jbGVhciA9ICcnO1xuICAgICAgICB0aGlzLmNsaXAgPSAnJztcbiAgICAgICAgdGhpcy5jbGlwUGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmNsaXBSdWxlID0gJyc7XG4gICAgICAgIHRoaXMuY29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5jb2xvckludGVycG9sYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5jb2xvckludGVycG9sYXRpb25GaWx0ZXJzID0gJyc7XG4gICAgICAgIHRoaXMuY29sb3JTY2hlbWUgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5Db3VudCA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtbkZpbGwgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5HYXAgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5SdWxlID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uUnVsZUNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uUnVsZVN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uUnVsZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uU3BhbiA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtbldpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW4gPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluSW50cmluc2ljQmxvY2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbkludHJpbnNpY0hlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5JbnRyaW5zaWNJbmxpbmVTaXplID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbkludHJpbnNpY1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluSW50cmluc2ljV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluZXJOYW1lID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyVHlwZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5jb3VudGVySW5jcmVtZW50ID0gJyc7XG4gICAgICAgIHRoaXMuY291bnRlclJlc2V0ID0gJyc7XG4gICAgICAgIHRoaXMuY291bnRlclNldCA9ICcnO1xuICAgICAgICB0aGlzLmNzc0Zsb2F0ID0gJyc7XG4gICAgICAgIHRoaXMuY3NzVGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmN1cnNvciA9ICcnO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSAnJztcbiAgICAgICAgdGhpcy5kb21pbmFudEJhc2VsaW5lID0gJyc7XG4gICAgICAgIHRoaXMuZW1wdHlDZWxscyA9ICcnO1xuICAgICAgICB0aGlzLmZpbGwgPSAnJztcbiAgICAgICAgdGhpcy5maWxsT3BhY2l0eSA9ICcnO1xuICAgICAgICB0aGlzLmZpbGxSdWxlID0gJyc7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMuZmxleCA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhCYXNpcyA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhEaXJlY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5mbGV4RmxvdyA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhHcm93ID0gJyc7XG4gICAgICAgIHRoaXMuZmxleFNocmluayA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhXcmFwID0gJyc7XG4gICAgICAgIHRoaXMuZmxvYXQgPSAnJztcbiAgICAgICAgdGhpcy5mbG9vZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuZmxvb2RPcGFjaXR5ID0gJyc7XG4gICAgICAgIHRoaXMuZm9udCA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRGYW1pbHkgPSAnJztcbiAgICAgICAgdGhpcy5mb250RmVhdHVyZVNldHRpbmdzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udEtlcm5pbmcgPSAnJztcbiAgICAgICAgdGhpcy5mb250T3B0aWNhbFNpemluZyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRQYWxldHRlID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFNpemUgPSAnJztcbiAgICAgICAgdGhpcy5mb250U2l6ZUFkanVzdCA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTdHJldGNoID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFN5bnRoZXNpcyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTeW50aGVzaXNTbWFsbENhcHMgPSAnJztcbiAgICAgICAgdGhpcy5mb250U3ludGhlc2lzU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5mb250U3ludGhlc2lzV2VpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnQgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudEFsdGVybmF0ZXMgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudENhcHMgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudEVhc3RBc2lhbiA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50TGlnYXR1cmVzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnROdW1lcmljID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYXRpb25TZXR0aW5ncyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRXZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5mb3JjZWRDb2xvckFkanVzdCA9ICcnO1xuICAgICAgICB0aGlzLmdhcCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWQgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQXJlYSA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRBdXRvQ29sdW1ucyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRBdXRvRmxvdyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRBdXRvUm93cyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW4gPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uRW5kID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbkdhcCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW5TdGFydCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRHYXAgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkUm93ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFJvd0VuZCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRSb3dHYXAgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkUm93U3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVBcmVhcyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVSb3dzID0gJyc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuaHlwaGVuYXRlQ2hhcmFjdGVyID0gJyc7XG4gICAgICAgIHRoaXMuaHlwaGVucyA9ICcnO1xuICAgICAgICB0aGlzLmltYWdlT3JpZW50YXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5pbWFnZVJlbmRlcmluZyA9ICcnO1xuICAgICAgICB0aGlzLmlubGluZVNpemUgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldCA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0QmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldEJsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXRCbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXRJbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldElubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0SW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5pc29sYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5qdXN0aWZ5Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLmp1c3RpZnlJdGVtcyA9ICcnO1xuICAgICAgICB0aGlzLmp1c3RpZnlTZWxmID0gJyc7XG4gICAgICAgIHRoaXMubGVmdCA9ICcnO1xuICAgICAgICB0aGlzLmxldHRlclNwYWNpbmcgPSAnJztcbiAgICAgICAgdGhpcy5saWdodGluZ0NvbG9yID0gJyc7XG4gICAgICAgIHRoaXMubGluZUJyZWFrID0gJyc7XG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmxpc3RTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmxpc3RTdHlsZUltYWdlID0gJyc7XG4gICAgICAgIHRoaXMubGlzdFN0eWxlUG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5saXN0U3R5bGVUeXBlID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luQmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5CbG9ja0VuZCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbkJsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5Cb3R0b20gPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5JbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5JbmxpbmVFbmQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5JbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbkxlZnQgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5SaWdodCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpblRvcCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmtlciA9ICcnO1xuICAgICAgICB0aGlzLm1hcmtlckVuZCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmtlck1pZCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmtlclN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMubWFzayA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tDbGlwID0gJyc7XG4gICAgICAgIHRoaXMubWFza0NvbXBvc2l0ZSA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tJbWFnZSA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tNb2RlID0gJyc7XG4gICAgICAgIHRoaXMubWFza09yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tSZXBlYXQgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tUeXBlID0gJyc7XG4gICAgICAgIHRoaXMubWF0aFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMubWF4QmxvY2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMubWF4SW5saW5lU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLm1heFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMubWluQmxvY2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMubWluSGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMubWluSW5saW5lU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLm1pbldpZHRoID0gJyc7XG4gICAgICAgIHRoaXMubWl4QmxlbmRNb2RlID0gJyc7XG4gICAgICAgIHRoaXMub2JqZWN0Rml0ID0gJyc7XG4gICAgICAgIHRoaXMub2JqZWN0UG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAnJztcbiAgICAgICAgdGhpcy5vZmZzZXREaXN0YW5jZSA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldFBhdGggPSAnJztcbiAgICAgICAgdGhpcy5vZmZzZXRSb3RhdGUgPSAnJztcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gJyc7XG4gICAgICAgIHRoaXMub3JkZXIgPSAnJztcbiAgICAgICAgdGhpcy5vcnBoYW5zID0gJyc7XG4gICAgICAgIHRoaXMub3V0bGluZSA9ICcnO1xuICAgICAgICB0aGlzLm91dGxpbmVDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLm91dGxpbmVPZmZzZXQgPSAnJztcbiAgICAgICAgdGhpcy5vdXRsaW5lU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5vdXRsaW5lV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvdyA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJmbG93QW5jaG9yID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3dDbGlwTWFyZ2luID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3dXcmFwID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3dYID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3dZID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcnNjcm9sbEJlaGF2aW9yID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcnNjcm9sbEJlaGF2aW9yQmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3JJbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3JYID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcnNjcm9sbEJlaGF2aW9yWSA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmcgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nQmxvY2sgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nQmxvY2tFbmQgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdCb3R0b20gPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nSW5saW5lID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0lubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdJbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ1JpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ1RvcCA9ICcnO1xuICAgICAgICB0aGlzLnBhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5wYWdlQnJlYWtBZnRlciA9ICcnO1xuICAgICAgICB0aGlzLnBhZ2VCcmVha0JlZm9yZSA9ICcnO1xuICAgICAgICB0aGlzLnBhZ2VCcmVha0luc2lkZSA9ICcnO1xuICAgICAgICB0aGlzLnBhaW50T3JkZXIgPSAnJztcbiAgICAgICAgdGhpcy5wZXJzcGVjdGl2ZSA9ICcnO1xuICAgICAgICB0aGlzLnBlcnNwZWN0aXZlT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMucGxhY2VDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMucGxhY2VJdGVtcyA9ICcnO1xuICAgICAgICB0aGlzLnBsYWNlU2VsZiA9ICcnO1xuICAgICAgICB0aGlzLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnByaW50Q29sb3JBZGp1c3QgPSAnJztcbiAgICAgICAgdGhpcy5xdW90ZXMgPSAnJztcbiAgICAgICAgdGhpcy5yZXNpemUgPSAnJztcbiAgICAgICAgdGhpcy5yaWdodCA9ICcnO1xuICAgICAgICB0aGlzLnJvdGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLnJvd0dhcCA9ICcnO1xuICAgICAgICB0aGlzLnJ1YnlQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnNjYWxlID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3IgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW4gPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5CbG9jayA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbkJsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbkJvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbklubGluZSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbklubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbklubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luTGVmdCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luVG9wID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZyA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdCbG9jayA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdCbG9ja0VuZCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdCbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0JvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdJbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nSW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0lubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0xlZnQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nVG9wID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsU25hcEFsaWduID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsU25hcFN0b3AgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxTbmFwVHlwZSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbGJhckd1dHRlciA9ICcnO1xuICAgICAgICB0aGlzLnNoYXBlSW1hZ2VUaHJlc2hvbGQgPSAnJztcbiAgICAgICAgdGhpcy5zaGFwZU1hcmdpbiA9ICcnO1xuICAgICAgICB0aGlzLnNoYXBlT3V0c2lkZSA9ICcnO1xuICAgICAgICB0aGlzLnNoYXBlUmVuZGVyaW5nID0gJyc7XG4gICAgICAgIHRoaXMuc3RvcENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuc3RvcE9wYWNpdHkgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2UgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VEYXNoYXJyYXkgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VEYXNob2Zmc2V0ID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlTGluZWNhcCA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZUxpbmVqb2luID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlTWl0ZXJsaW1pdCA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZU9wYWNpdHkgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLnRhYlNpemUgPSAnJztcbiAgICAgICAgdGhpcy50YWJsZUxheW91dCA9ICcnO1xuICAgICAgICB0aGlzLnRleHRBbGlnbiA9ICcnO1xuICAgICAgICB0aGlzLnRleHRBbGlnbkxhc3QgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0QW5jaG9yID0gJyc7XG4gICAgICAgIHRoaXMudGV4dENvbWJpbmVVcHJpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvbkNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb25MaW5lID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb25Ta2lwSW5rID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb25TdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLnRleHREZWNvcmF0aW9uVGhpY2tuZXNzID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEVtcGhhc2lzID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEVtcGhhc2lzQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RW1waGFzaXNQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRleHRFbXBoYXNpc1N0eWxlID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEluZGVudCA9ICcnO1xuICAgICAgICB0aGlzLnRleHRPcmllbnRhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRleHRPdmVyZmxvdyA9ICcnO1xuICAgICAgICB0aGlzLnRleHRSZW5kZXJpbmcgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0U2hhZG93ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dFRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB0aGlzLnRleHRVbmRlcmxpbmVPZmZzZXQgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0VW5kZXJsaW5lUG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy50b3AgPSAnJztcbiAgICAgICAgdGhpcy50b3VjaEFjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUJveCA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EZWxheSA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLnVuaWNvZGVCaWRpID0gJyc7XG4gICAgICAgIHRoaXMudXNlclNlbGVjdCA9ICcnO1xuICAgICAgICB0aGlzLnZlcnRpY2FsQWxpZ24gPSAnJztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QWxpZ25Db250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QWxpZ25JdGVtcyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFsaWduU2VsZiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbkRlbGF5ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uRGlyZWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25GaWxsTW9kZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvblBsYXlTdGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QXBwZWFyYW5jZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJhY2tncm91bmRDbGlwID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QmFja2dyb3VuZE9yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJhY2tncm91bmRTaXplID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm9yZGVyUmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm9yZGVyVG9wTGVmdFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJvcmRlclRvcFJpZ2h0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94QWxpZ24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hGbGV4ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94T3JkaW5hbEdyb3VwID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94T3JpZW50ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94UGFjayA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJveFNoYWRvdyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJveFNpemluZyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZpbHRlciA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXggPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4QmFzaXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4RGlyZWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmxleEZsb3cgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4R3JvdyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhTaHJpbmsgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4V3JhcCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEp1c3RpZnlDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TGluZUNsYW1wID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFzayA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tCb3hJbWFnZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tCb3hJbWFnZU91dHNldCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tCb3hJbWFnZVJlcGVhdCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tCb3hJbWFnZVNsaWNlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlU291cmNlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQ2xpcCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tDb21wb3NpdGUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrSW1hZ2UgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza1Bvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza1JlcGVhdCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0T3JkZXIgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRQZXJzcGVjdGl2ZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFBlcnNwZWN0aXZlT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VGV4dEZpbGxDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRleHRTaXplQWRqdXN0ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VGV4dFN0cm9rZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRleHRTdHJva2VDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRleHRTdHJva2VXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zZm9ybU9yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zZm9ybVN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zaXRpb25EZWxheSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zaXRpb25Qcm9wZXJ0eSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFVzZXJTZWxlY3QgPSAnJztcbiAgICAgICAgdGhpcy53aGl0ZVNwYWNlID0gJyc7XG4gICAgICAgIHRoaXMud2lkb3dzID0gJyc7XG4gICAgICAgIHRoaXMud2lkdGggPSAnJztcbiAgICAgICAgdGhpcy53aWxsQ2hhbmdlID0gJyc7XG4gICAgICAgIHRoaXMud29yZEJyZWFrID0gJyc7XG4gICAgICAgIHRoaXMud29yZFNwYWNpbmcgPSAnJztcbiAgICAgICAgdGhpcy53b3JkV3JhcCA9ICcnO1xuICAgICAgICB0aGlzLndyaXRpbmdNb2RlID0gJyc7XG4gICAgICAgIHRoaXMuekluZGV4ID0gJyc7XG4gICAgfVxuICAgIHJldHVybiBKRWxlbWVudFN0eWxlUHJvcGVydHk7XG59KCkpO1xuZXhwb3J0IHsgSkVsZW1lbnRTdHlsZVByb3BlcnR5IH07XG52YXIgSkVsZW1lbnRDc3NTdHlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkVsZW1lbnRDc3NTdHlsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWxlbWVudENzc1N0eWxlKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudENzc1N0eWxlLnByb3RvdHlwZSwgXCJuYW1lc1wiLCB7XG4gICAgICAgIC8vIOaJgOacieagt+W8j+WQjeensFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICAgICAgaWYgKCFKRWxlbWVudENzc1N0eWxlLnN0eWxlTmFtZXNNYXAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcCA9IG5ldyBKRWxlbWVudFN0eWxlUHJvcGVydHkoKTtcbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG1hcCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5c18xID0gX192YWx1ZXMoa2V5cyksIGtleXNfMV8xID0ga2V5c18xLm5leHQoKTsgIWtleXNfMV8xLmRvbmU7IGtleXNfMV8xID0ga2V5c18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBrZXlzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdHlwZW9mIG1hcFtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID09PSAnc3RyaW5nJyB8fCB0ID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKRWxlbWVudENzc1N0eWxlLnN0eWxlTmFtZXNNYXAucHVzaChrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXNfMV8xICYmICFrZXlzXzFfMS5kb25lICYmIChfYSA9IGtleXNfMS5yZXR1cm4pKSBfYS5jYWxsKGtleXNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBKRWxlbWVudENzc1N0eWxlLnN0eWxlTmFtZXNNYXA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBKRWxlbWVudENzc1N0eWxlLnN0eWxlTmFtZXNNYXAgPSBbXTtcbiAgICByZXR1cm4gSkVsZW1lbnRDc3NTdHlsZTtcbn0oSkVsZW1lbnRTdHlsZURlY2xhcmF0aW9uKSk7XG5leHBvcnQgZGVmYXVsdCBKRWxlbWVudENzc1N0eWxlO1xuLy8g5pyA5aSW5bGC5a655Zmo6buY6K6k5qC35byPXG5leHBvcnQgdmFyIENvbnRhaW5lckRlZmF1bHRTdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAnMCcsXG4gICAgdG9wOiAnMCcsXG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICBtYXJnaW46ICcwJyxcbiAgICB6SW5kZXg6ICcwJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBvdmVyZmxvdzogJ3Zpc2libGUnXG59O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCBFdmVudEVtaXRlciBmcm9tICcuL2V2ZW50RW1pdHRlcic7XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG52YXIgVHJhbnNmb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUcmFuc2Zvcm0sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtKG9wdGlvbiwgdGFyZ2V0T3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIC8vIOWTjeW6lOWPmOWMluaNouWFg+e0oOWSjOWxnuaAp1xuICAgICAgICBfdGhpcy50YXJnZXRzID0gW107XG4gICAgICAgIC8vIHjlgY/np7vph49cbiAgICAgICAgX3RoaXMudHJhbnNsYXRlWCA9IDA7XG4gICAgICAgIC8vIHnlgY/np7vph49cbiAgICAgICAgX3RoaXMudHJhbnNsYXRlWSA9IDA7XG4gICAgICAgIC8vIHrlgY/np7vph49cbiAgICAgICAgX3RoaXMudHJhbnNsYXRlWiA9IDA7XG4gICAgICAgIF90aGlzLnJvdGF0ZVggPSAwO1xuICAgICAgICBfdGhpcy5yb3RhdGVZID0gMDtcbiAgICAgICAgX3RoaXMucm90YXRlWiA9IDA7XG4gICAgICAgIF90aGlzLnNjYWxlWCA9IDE7XG4gICAgICAgIF90aGlzLnNjYWxlWSA9IDE7XG4gICAgICAgIF90aGlzLnNjYWxlWiA9IDE7XG4gICAgICAgIF90aGlzLnNrZXdYID0gMDtcbiAgICAgICAgX3RoaXMuc2tld1kgPSAwO1xuICAgICAgICBpZiAob3B0aW9uKVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihfdGhpcywgb3B0aW9uKTtcbiAgICAgICAgaWYgKHRhcmdldE9wdGlvbilcbiAgICAgICAgICAgIF90aGlzLmJpbmQodGFyZ2V0T3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGVYU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdCh1dGlsLnRvUFgodGhpcy50cmFuc2xhdGVYKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwidHJhbnNsYXRlWVN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlWShcIi5jb25jYXQodXRpbC50b1BYKHRoaXMudHJhbnNsYXRlWSksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInRyYW5zbGF0ZVpTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZVooXCIuY29uY2F0KHV0aWwudG9QWCh0aGlzLnRyYW5zbGF0ZVopLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJyb3RhdGVYU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyb3RhdGVYKFwiLmNvbmNhdCh1dGlsLnRvUmFkKHRoaXMucm90YXRlWCksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInJvdGF0ZVlTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInJvdGF0ZVkoXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5yb3RhdGVZKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwicm90YXRlWlN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwicm90YXRlWihcIi5jb25jYXQodXRpbC50b1JhZCh0aGlzLnJvdGF0ZVopLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJzY2FsZVhTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInNjYWxlWChcIi5jb25jYXQodGhpcy5zY2FsZVgsIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInNjYWxlWVN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2NhbGVZKFwiLmNvbmNhdCh0aGlzLnNjYWxlWSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwic2NhbGVaU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJzY2FsZVooXCIuY29uY2F0KHRoaXMuc2NhbGVaLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJza2V3WFN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2tld1goXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5za2V3WCksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInNrZXdZU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJza2V3WShcIi5jb25jYXQodXRpbC50b1JhZCh0aGlzLnNrZXdZKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5mcm9tID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEpXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIH07XG4gICAgLy8g55Sf5pWIXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB0aGlzLnRhcmdldHM7IH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0YXJnZXRfMSA9IF9fdmFsdWVzKHRhcmdldCksIHRhcmdldF8xXzEgPSB0YXJnZXRfMS5uZXh0KCk7ICF0YXJnZXRfMV8xLmRvbmU7IHRhcmdldF8xXzEgPSB0YXJnZXRfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0YXJnZXRfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5KHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0XzFfMSAmJiAhdGFyZ2V0XzFfMS5kb25lICYmIChfYSA9IHRhcmdldF8xLnJldHVybikpIF9hLmNhbGwodGFyZ2V0XzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LnRhcmdldCAmJiB0YXJnZXQudGFyZ2V0LmNzcylcbiAgICAgICAgICAgICAgICB0YXJnZXQudGFyZ2V0LmNzcygndHJhbnNmb3JtJywgdGhpcy50b1N0cmluZyh0YXJnZXQud2F0Y2hQcm9wcykpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0LnRhcmdldClcbiAgICAgICAgICAgICAgICB0YXJnZXQudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMudG9TdHJpbmcodGFyZ2V0LndhdGNoUHJvcHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnu5HlrprlubbliLfmlrDliLDnm67moIfkuIpcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldCk7XG4gICAgICAgIHRoaXMuYXBwbHkodGFyZ2V0KTtcbiAgICB9O1xuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50YXJnZXRzLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXRzW2ldLnRhcmdldCA9PT0gdGFyZ2V0LnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOeUn+aIkHRyYW5zZm9ybeS7o+eQhlxuICAgIFRyYW5zZm9ybS5jcmVhdGVQcm94eSA9IGZ1bmN0aW9uIChvYmosIGVsKSB7XG4gICAgICAgIGlmIChvYmogPT09IHZvaWQgMCkgeyBvYmogPSB7fTsgfVxuICAgICAgICB2YXIgdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybShvYmosIGVsKTtcbiAgICAgICAgLy8g5Luj55CG5aSE55CGXG4gICAgICAgIHZhciBwcm94eSA9IG5ldyBQcm94eSh0cmFuc2Zvcm0sIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRhcmdldFtwXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHAsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRhcmdldC5hcHBseSgpOyAvLyDnlJ/mlYhcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9O1xuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAod2F0Y2hQcm9wcykge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICBpZiAoIXdhdGNoUHJvcHMpIHtcbiAgICAgICAgICAgIHdhdGNoUHJvcHMgPSBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICd0cmFuc2xhdGVaJywgXCJyb3RhdGVYXCIsICdyb3RhdGVZJywgJ3JvdGF0ZVonLCAnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tld1gnLCAnc2tld1knXTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgd2F0Y2hQcm9wc18xID0gX192YWx1ZXMod2F0Y2hQcm9wcyksIHdhdGNoUHJvcHNfMV8xID0gd2F0Y2hQcm9wc18xLm5leHQoKTsgIXdhdGNoUHJvcHNfMV8xLmRvbmU7IHdhdGNoUHJvcHNfMV8xID0gd2F0Y2hQcm9wc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gd2F0Y2hQcm9wc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIG52ID0gdGhpc1tuICsgJ1N0cmluZyddO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tuXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG52ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChudik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAod2F0Y2hQcm9wc18xXzEgJiYgIXdhdGNoUHJvcHNfMV8xLmRvbmUgJiYgKF9hID0gd2F0Y2hQcm9wc18xLnJldHVybikpIF9hLmNhbGwod2F0Y2hQcm9wc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpvaW4oJyAnKTtcbiAgICB9O1xuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNsYXRlWDogdGhpcy50cmFuc2xhdGVYLFxuICAgICAgICAgICAgdHJhbnNsYXRlWTogdGhpcy50cmFuc2xhdGVZLFxuICAgICAgICAgICAgdHJhbnNsYXRlWjogdGhpcy50cmFuc2xhdGVaLFxuICAgICAgICAgICAgcm90YXRlWDogdGhpcy5yb3RhdGVYLFxuICAgICAgICAgICAgcm90YXRlWTogdGhpcy5yb3RhdGVZLFxuICAgICAgICAgICAgcm90YXRlWjogdGhpcy5yb3RhdGVaLFxuICAgICAgICAgICAgc2NhbGVYOiB0aGlzLnNjYWxlWCxcbiAgICAgICAgICAgIHNjYWxlWTogdGhpcy5zY2FsZVksXG4gICAgICAgICAgICBzY2FsZVo6IHRoaXMuc2NhbGVaLFxuICAgICAgICAgICAgc2tld1g6IHRoaXMuc2tld1gsXG4gICAgICAgICAgICBza2V3WTogdGhpcy5za2V3WSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2Zvcm07XG59KEV2ZW50RW1pdGVyKSk7XG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IENvbnRhaW5lckRlZmF1bHRTdHlsZSB9IGZyb20gJy4uL2NvbnN0YW50L3N0eWxlTWFwJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuLi9jb3JlL2VsZW1lbnQnO1xudmFyIEpCYXNlQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKQmFzZUNvbXBvbmVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKQmFzZUNvbXBvbmVudChvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IG9wdGlvbi5zdHlsZSB8fCB7fTtcbiAgICAgICAgLy8gcG9zaXRpb27lkoxvdmVyZmxvd+mihOiuvueahOWAvOS8mOWFiOe6p+acgOmrmFxuICAgICAgICBvcHRpb24uc3R5bGUgPSBPYmplY3QuYXNzaWduKF9fYXNzaWduKHt9LCBDb250YWluZXJEZWZhdWx0U3R5bGUpLCBvcHRpb24uc3R5bGUsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBDb250YWluZXJEZWZhdWx0U3R5bGUucG9zaXRpb24sXG4gICAgICAgICAgICBvdmVyZmxvdzogQ29udGFpbmVyRGVmYXVsdFN0eWxlLm92ZXJmbG93XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHsgXG4gICAgICAgICAgICAvLyDlpJblsYLlj6rlk43lupRa6L205peL6L2sXG4gICAgICAgICAgICB0cmFuc2Zvcm1XYXRjaFByb3BzOiBbXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZVonLCAnc2NhbGVYJywgJ3NjYWxlWSdcbiAgICAgICAgICAgIF0gfSwgb3B0aW9uKSwgeyBub2RlVHlwZTogJ2RpdicsIGNsYXNzTmFtZTogJ2otZGVzaWduLWVkaXRvci1jb250YWluZXInIH0pKSB8fCB0aGlzO1xuICAgICAgICAvLyDpgInkuK1cbiAgICAgICAgX3RoaXMuX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIG9wdGlvbi50YXJnZXQgPSBvcHRpb24udGFyZ2V0IHx8IHt9O1xuICAgICAgICAvLyDnlJ/miJDlvZPliY3mjqfliLbnmoTlhYPntKBcbiAgICAgICAgX3RoaXMudGFyZ2V0ID0gbmV3IEpFbGVtZW50KF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IHZpc2libGU6IHRydWUsIFxuICAgICAgICAgICAgLy8g5LiN5ZON5bqU5pys6Lqr55qE5Y+Y5o2i77yM5Y+q5ZON5bqU54i257qn55qEXG4gICAgICAgICAgICB0cmFuc2Zvcm1XYXRjaFByb3BzOiBbXSwgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgIF90aGlzLmFkZENoaWxkKF90aGlzLnRhcmdldCk7XG4gICAgICAgIC8vIOWPmOaNouaUueS4uuaOp+WItuS4u+WFg+e0oFxuICAgICAgICBfdGhpcy50cmFuc2Zvcm0uYmluZCh7XG4gICAgICAgICAgICB0YXJnZXQ6IF90aGlzLnRhcmdldCxcbiAgICAgICAgICAgIHdhdGNoUHJvcHM6IFtcbiAgICAgICAgICAgICAgICAncm90YXRlWCcsICdyb3RhdGVZJywgJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICdza2V3WCcsICdza2V3WSdcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpCYXNlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzZWxlY3RlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHY7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NlbGVjdCcsIHYpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLy8g6K6+572uY3Nz5YiwZG9tXG4gICAgSkJhc2VDb21wb25lbnQucHJvdG90eXBlLnNldERvbVN0eWxlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIC8vIOWmguaenOWkluWxguWuueWZqOeahOagt+W8j++8jOWImeWKoOWIsGNvbnRhaW5lcuS4ilxuICAgICAgICBpZiAobmFtZSBpbiBDb250YWluZXJEZWZhdWx0U3R5bGUgfHwgbmFtZSA9PT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuc2V0RG9tU3R5bGUuY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5jc3MobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBKQmFzZUNvbXBvbmVudC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7IHByb3BzID0gW107IH1cbiAgICAgICAgLy8g6L2sanNvbuW/veeVpea4suafk+e7hOS7tlxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS50b0pTT04uY2FsbCh0aGlzLCBwcm9wcywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwgIT09IF90aGlzLnRhcmdldDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSkJhc2VDb21wb25lbnQ7XG59KEpFbGVtZW50KSk7XG5leHBvcnQgZGVmYXVsdCBKQmFzZUNvbXBvbmVudDtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xuaW1wb3J0IEpFbGVtZW50IGZyb20gJy4vZWxlbWVudCc7XG5pbXBvcnQgeyB0b3BaSW5kZXggfSBmcm9tICcuLi9jb25zdGFudC9zdHlsZU1hcCc7XG4vLyDpvKDmoIfmjIfpkohcbnZhciBHQ3Vyc29ycyA9IHtcbiAgICAnbCc6ICd3LXJlc2l6ZScsXG4gICAgJ2x0JzogJ253LXJlc2l6ZScsXG4gICAgJ3QnOiAnbi1yZXNpemUnLFxuICAgICd0cic6ICduZS1yZXNpemUnLFxuICAgICdyJzogJ2UtcmVzaXplJyxcbiAgICAncmInOiAnc2UtcmVzaXplJyxcbiAgICAnYic6ICdzLXJlc2l6ZScsXG4gICAgJ2xiJzogJ3N3LXJlc2l6ZScsXG4gICAgJ3JvdGF0ZSc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQU1BQUFCZzNBbTFBQUFBZ1ZCTVZFVUFBQUFpSzlNaktkVWZLTllqS2RVaUtOWWlLZFVlSHVBaktOWWpLTllpS05ZeU1zd2lLTllpS05ZaUtOWWlLTlloS05ZaUtkVWlLTllpS05ZaktkVWpLTllnSjljakpkWWlLTllpS05ZaUtkVWhKOWNqS05ZaUtkVWRMTk1ySzlNaUtOWWlLTllpS2RVaUtOWWpLTllqS2RVaktkVWpLTllqS2RVaktkVWpLZGFVVzdlVkFBQUFLblJTVGxNQUZkTVkxL3Y0Q1BYbzR3WHV5TGg2UmZLUmpXcEFKeHlrYjF0U1RqQVJDOE9zbFlWZ09pdlFycWV5N2NhcUFBQUJNMGxFUVZSSXgrMlU2VzZETUJDRURkU0UrMndnOTUwZTMvcy9ZR09CUUkwaE1mK3FLdk9ESFlzWmU5ZGVyWGpoMzJDMlBzVStCSWN5Q3cza1ZoblJJVWozei9UdkVjVHAxUkdpenM0MkJKdkgra3FTYlB0bEZrUDUyTEZjMzUzb3NoQ1RNTThwSnpwY2h1dXdyTEVzOGZkRGVzOXpSaHdIMGdHOURiWTFraFIrT0tRZmQ5aGt1djROYnAvaHJGSUtYZStBTmViSWlIVzlnSmJvZDJmaE43elRxK1NocGIvM1V1c1EyZkdldU13NnJ0QnYxdnhyYVg5VWdOTndQVjFsME5PTm1iZE1kN2pVZW5rRnFSaHp5S0VyMy9EWkVOTkhEU091S3BxM3pabEVCZlBHM0VWY1ZEUnYvUlg1Vmt6Q0F2OWpraUZNeU8rR3dIYjFlT2d0NEt2cTEwNGh2ZXJKSU1zaGVhL0NHNjFYM3k2eWVEYjduSk1IeUNod1ZUaWExTFM3SEFNSitNbXlOcC9nTzJjbVh2akQrQUhwcmhwb0pLaVlZQUFBQUFCSlJVNUVya0pnZ2c9PScsXG4gICAgJ3NrZXcnOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQWRWQk1WRVVBQUFCbFkvOTdlLzlrWXY5a1kvOW5aLzlsWS85a1l2OWtZLzlrWXY5a1kvOWxZLzlrWXY5a1kvOXBZUDlvWVA5a1l2OWtZdjlrWS85a1l2OWlZdjluWS85a1l2OWxZdjlrWXY5bFl2OWxZLzlrWXY5bFl2OWtZLzlrWXY5bFpmOWxZLzlrWXY5a1l2OWxZdjlrWXY5bFkvOWxZLytrdFFOUkFBQUFKblJTVGxNQS9BVHYzeEhtVy9WMFR0TzNraGNOeThYQlVoOFU2dGkrcHB0NWJrc25HVHF5Z21ORVowY3RwZFVBQUFFbVNVUkJWRWpIN1ZQYmxvSXdES1Nsb0FVcUY2a2dkMTIzLy8rSmEralNTcEdxRDc0eGJ5bkp5Y3hrY0RacytCSU9BYTJ5Z3JnSXVhUW9LeG9jYk4wM0Zvb0ZRblo3M3UxUklsWlFVRy9adnpzSkM5ekdhT2Vaa0VBSmE5b3U5ekQyOHE1dFdJS0VSRFpiMGt2dSszTVFtNXZqNEx5WFdoN2s0MlJjZS9WVzFGMWQrSjVnOWZJTGRkbXYyOWVYMFBHajZ2UmVSZGhtT0k3dUxha3FnV1RuV05HQlJGV0JvN2w5SUFlUnFnS0dGenVsQ3ppcmp5WkF4R1JiNi90SE0yR1JFcTFWQzdlV3R2cENvTjNNMW5xME5YM2d3QXQ5T0JpQUNmTndaS2FTUnlvYVZTVDB4SkJOMFVqTk16VkcrTkNvZzB6aG8wdFA0bm9lYndLUC8yenErTGw1QXd1TkFZcEV5SVpYditoSlUzSTRkMTdpaUtUb042RnMvV0RnZzM0ZGpRMGJ2bzQvbmFZdmdzOHhtdndBQUFBQVNVVk9SSzVDWUlJPSdcbn07XG4vLyDmjqfliLblhYPntKDnp7vliqjlkoznn6npmLXlj5jmjaJcbnZhciBKQ29udHJvbGxlckl0ZW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpDb250cm9sbGVySXRlbSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKQ29udHJvbGxlckl0ZW0ob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IG9wdGlvbi5zdHlsZSB8fCB7fTtcbiAgICAgICAgb3B0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmYnO1xuICAgICAgICBvcHRpb24uc3R5bGUuYm9yZGVyID0gb3B0aW9uLnN0eWxlLmJvcmRlciB8fCAnMXB4IHNvbGlkIHJnYmEoNiwxNTUsMTgxLDEpJztcbiAgICAgICAgb3B0aW9uLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRpciA9ICcnO1xuICAgICAgICBfdGhpcy5zaXplID0gODtcbiAgICAgICAgX3RoaXMuX2lzTW92aW5nID0gZmFsc2U7XG4gICAgICAgIC8vIOaLluaUvuS9jee9rlxuICAgICAgICBfdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5kaXIgPSBvcHRpb24uZGlyIHx8ICcnO1xuICAgICAgICBfdGhpcy5zaXplID0gb3B0aW9uLnNpemUgfHwgODtcbiAgICAgICAgX3RoaXMuc3R5bGUuY3Vyc29yID0gX3RoaXMuc3R5bGUuY3Vyc29yIHx8IEdDdXJzb3JzW190aGlzLmRpcl07XG4gICAgICAgIF90aGlzLmRhdGEud2lkdGggPSBfdGhpcy5kYXRhLmhlaWdodCA9IF90aGlzLnNpemU7XG4gICAgICAgIF90aGlzLmVkaXRvciA9IG9wdGlvbi5lZGl0b3I7XG4gICAgICAgIGlmIChfdGhpcy5lZGl0b3IpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIF90aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRyYWdFbmQoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIF90aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBfdGhpcy5lZGl0b3IuZG9tKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIOS4jeaYr291dOe8lui+keWZqO+8jOS4jeWkhOeQhlxuICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ0VuZChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgX3RoaXMuZWRpdG9yLnZpZXcub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25EcmFnTW92ZShlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMub25EcmFnU3RhcnQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLCBcImlzTW92aW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNNb3Zpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTW92aW5nID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEpDb250cm9sbGVySXRlbS5wcm90b3R5cGUub25EcmFnTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICB4OiBldmVudC5wYWdlWCB8fCBldmVudC54LFxuICAgICAgICAgICAgeTogZXZlbnQucGFnZVkgfHwgZXZlbnQueSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9mZlggPSAocG9zLnggLSB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLngpO1xuICAgICAgICB2YXIgb2ZmWSA9IChwb3MueSAtIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgZGlyOiB0aGlzLmRpcixcbiAgICAgICAgICAgIG9mZlg6IG9mZlgsXG4gICAgICAgICAgICBvZmZZOiBvZmZZLFxuICAgICAgICAgICAgb2xkUG9zaXRpb246IHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24sXG4gICAgICAgICAgICBuZXdQb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgIHg6IHBvcy54LFxuICAgICAgICAgICAgICAgIHk6IHBvcy55XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDpgInkuK3nmoTmmK/muLLmn5PlsYLnmoTlnZDmoIfvvIzovazkuLrmjqfliLblsYLnmoRcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbi54ID0gcG9zLng7XG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24ueSA9IHBvcy55O1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICAgIEpDb250cm9sbGVySXRlbS5wcm90b3R5cGUub25EcmFnU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50LnBhZ2VYIHx8IGV2ZW50LngsXG4gICAgICAgICAgICB5OiBldmVudC5wYWdlWSB8fCBldmVudC55LFxuICAgICAgICB9O1xuICAgICAgICAvLyDpgInkuK3nmoTmmK/muLLmn5PlsYLnmoTlnZDmoIfvvIzovazkuLrmjqfliLblsYLnmoRcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHBvcy54LFxuICAgICAgICAgICAgeTogcG9zLnlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc01vdmluZyA9IHRydWU7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICAgIEpDb250cm9sbGVySXRlbS5wcm90b3R5cGUub25EcmFnRW5kID0gZnVuY3Rpb24gKGV2ZW50LCBwb3MpIHtcbiAgICAgICAgaWYgKHBvcyA9PT0gdm9pZCAwKSB7IHBvcyA9IGV2ZW50OyB9XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOiuoeeul+aMh+mSiFxuICAgIEpDb250cm9sbGVySXRlbS5wcm90b3R5cGUucmVzZXRDdXJzb3IgPSBmdW5jdGlvbiAocm90YXRpb24pIHtcbiAgICAgICAgLy8g5YWI566A5Y2V5aSE55CGXG4gICAgICAgIGlmICghcm90YXRpb24gfHwgKHJvdGF0aW9uID4gLU1hdGguUEkgLyA2ICYmIHJvdGF0aW9uIDwgTWF0aC5QSSAvIDYpKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9IEdDdXJzb3JzW3RoaXMuZGlyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSkNvbnRyb2xsZXJJdGVtO1xufShKRWxlbWVudCkpO1xuZXhwb3J0IHsgSkNvbnRyb2xsZXJJdGVtIH07XG4vLyDlhYPntKDlpKflsI/kvY3nva7mjqfliLblmahcbnZhciBKQ29udHJvbGxlckNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkNvbnRyb2xsZXJDb21wb25lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkNvbnRyb2xsZXJDb21wb25lbnQob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIG9wdGlvbi56SW5kZXggPSB0b3BaSW5kZXg7XG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IG9wdGlvbi5zdHlsZSB8fCB7fTtcbiAgICAgICAgb3B0aW9uLnN0eWxlLmN1cnNvciA9IG9wdGlvbi5zdHlsZS5jdXJzb3IgfHwgJ21vdmUnO1xuICAgICAgICBvcHRpb24uZGlyID0gJ2VsZW1lbnQnO1xuICAgICAgICBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgICAvL29wdGlvbi5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDJweCAycHggI2NjYyc7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAvLyDpgInmi6nmoYbovrnot51cbiAgICAgICAgX3RoaXMucGFkZGluZ1NpemUgPSAxO1xuICAgICAgICBfdGhpcy5pc0VkaXRvciA9IGZhbHNlOyAvLyDlvZPliY3lhbPogZTmmK/lkKbmmK/nvJbovpHlmahcbiAgICAgICAgX3RoaXMuaW5pdChvcHRpb24pO1xuICAgICAgICBfdGhpcy5lZGl0b3IuZG9tLmFwcGVuZENoaWxkKF90aGlzLmRvbSk7XG4gICAgICAgIC8vIOWPjOWHu+S6i+S7tumAj+S8oOe7meaTjeS9nOadhue7keWumueahOWvueixoVxuICAgICAgICBfdGhpcy5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5lbWl0KCdkYmxjbGljaycsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdsJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogMCwgdG9wOiAnNTAlJyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgnbHQnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAwLCB0b3A6IDAgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ3QnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnNTAlJywgdG9wOiAwIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCd0cicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6ICcxMDAlJywgdG9wOiAwIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdyJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogJzEwMCUnLCB0b3A6ICc1MCUnIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdyYicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6ICcxMDAlJywgdG9wOiAnMTAwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2InLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnNTAlJywgdG9wOiAnMTAwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2xiJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogMCwgdG9wOiAnMTAwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDml4vovazlnZdcbiAgICAgICAgdGhpcy5yb3RhdGVJdGVtID0gdGhpcy5jcmVhdGVJdGVtKCdyb3RhdGUnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICBzaXplOiAyNCxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7IGxlZnQ6ICc1MCUnLCB0b3A6ICctNDBweCcsIFxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLCBib3hTaGFkb3c6ICcwIDAgMnB4IDJweCAjY2NjJywgYm9yZGVyUmFkaXVzOiAnNTAlJywgY3Vyc29yOiBcInBvaW50ZXJcIiB9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyAnYmFja2dyb3VuZFNpemUnOiAnMTAwJScsIGJhY2tncm91bmRJbWFnZTogR0N1cnNvcnMucm90YXRlIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5za2V3SXRlbSA9IHRoaXMuY3JlYXRlSXRlbSgnc2tldycsIHtcbiAgICAgICAgICAgIHNoYXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIHNpemU6IDI0LFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHsgbGVmdDogJzUwJScsIHRvcDogJzUwJScsIGJvcmRlcjogJ25vbmUnLCBib3hTaGFkb3c6ICcwIDAgMnB4IDJweCAjY2NjJywgYm9yZGVyUmFkaXVzOiAnNTAlJywgY3Vyc29yOiBcInBvaW50ZXJcIiB9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyAnYmFja2dyb3VuZFNpemUnOiAnMTAwJScsIGJhY2tncm91bmRJbWFnZTogR0N1cnNvcnMuc2tldyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIOaXi+i9rOWdlyBcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmlzRWRpdG9yKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIOS4jeaYr+e8lui+keWZqO+8jOS4jeWkhOeQhlxuICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmNoYW5nZShlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDnlJ/miJDmjqfliLbngrlcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuY3JlYXRlSXRlbSA9IGZ1bmN0aW9uIChpZCwgb3B0aW9uKSB7XG4gICAgICAgIHZhciBpdGVtID0gbmV3IEpDb250cm9sbGVySXRlbShfX2Fzc2lnbih7IGRpcjogaWQsIGVkaXRvcjogdGhpcy5lZGl0b3IgfSwgb3B0aW9uKSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpdGVtLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jaGFuZ2UoZSk7XG4gICAgICAgICAgICAvLyDph43nva7mjIfpkohcbiAgICAgICAgICAgIHRoaXMucmVzZXRDdXJzb3Ioc2VsZi50cmFuc2Zvcm0ucm90YXRlWik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICAgIC8vIOWPkeeUn+aUueWPmOWTjeW6lFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZGlyID0gZS5kaXIsIG9mZlggPSBlLm9mZlgsIG9mZlkgPSBlLm9mZlk7XG4gICAgICAgIC8vIOW9k+WJjeenu+WKqOWvueWOn+WvueixoeeahOaUueWPmFxuICAgICAgICB2YXIgYXJncyA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICAgIHNrZXc6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlQ2hhbmdlKGUsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpciA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICAgICAgICAvLyDlhYPntKDkvY3nva7mjqfliLblmahcbiAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICBhcmdzLnkgPSBvZmZZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5YWI5Zue5Y6f5Z2Q5qCH77yM5YaN5Li7566X5YGP56e76YeP77yM6L+Z5qC35L+d6K+B5pON5L2c5pu05a655piT55CG6KejXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0ucm90YXRlWikge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLmdldFJvdGF0ZUV2ZW50UG9zaXRpb24oZSk7XG4gICAgICAgICAgICAgICAgb2ZmWCA9IHBvcy5vZmZYO1xuICAgICAgICAgICAgICAgIG9mZlkgPSBwb3Mub2ZmWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy54ID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IC1vZmZYO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3InOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnYic6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnbHQnOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3JiJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnbGInOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnc2tldyc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ4ID0gb2ZmWCAvIHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLndpZHRoKSAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByeSA9IG9mZlkgLyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5za2V3LnggPSByeTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5za2V3LnkgPSByeDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOS9jeenu1xuICAgICAgICBpZiAoYXJncy54IHx8IGFyZ3MueSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGFyZ3MueCwgYXJncy55KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy53aWR0aCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEud2lkdGgpICsgYXJncy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS53aWR0aCA9IE1hdGgubWF4KHdpZHRoLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5oZWlnaHQgPSBNYXRoLm1heCh1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpICsgYXJncy5oZWlnaHQsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHgseeaXi+i9rFxuICAgICAgICBpZiAoYXJncy5za2V3LnggfHwgYXJncy5za2V3LnkpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVYICs9IGFyZ3Muc2tldy54O1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVkgKz0gYXJncy5za2V3Lnk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50cmFuc2Zvcm0uYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcGx5VG9UYXJnZXQoKTtcbiAgICB9O1xuICAgIC8vIOWboOS4uuaXi+i9rOWQjuWdkOagh+imgeWbnuWOn+aJjeWlveiuoeeul+aTjeS9nO+8jFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5nZXRSb3RhdGVFdmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG9mZlggPSBlLm9mZlgsIG9mZlkgPSBlLm9mZlksIG9sZFBvc2l0aW9uID0gZS5vbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24gPSBlLm5ld1Bvc2l0aW9uO1xuICAgICAgICAvLyDlhYjlm57ljp/lnZDmoIfvvIzlho3kuLvnrpflgY/np7vph4/vvIzov5nmoLfkv53or4Hmk43kvZzmm7TlrrnmmJPnkIbop6NcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopIHtcbiAgICAgICAgICAgIHZhciBjZW50ZXIgPSB7XG4gICAgICAgICAgICAgICAgeDogdXRpbC50b051bWJlcih0aGlzLmRhdGEubGVmdCkgKyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgLyAyLFxuICAgICAgICAgICAgICAgIHk6IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLnRvcCkgKyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpIC8gMixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQodXRpbC5yb3RhdGVQb2ludHMoW29sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbl0sIGNlbnRlciwgLXRoaXMudHJhbnNmb3JtLnJvdGF0ZVopLCAyKSwgcG9zMSA9IF9hWzBdLCBwb3MyID0gX2FbMV07XG4gICAgICAgICAgICBvZmZYID0gcG9zMi54IC0gcG9zMS54O1xuICAgICAgICAgICAgb2ZmWSA9IHBvczIueSAtIHBvczEueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2ZmWDogb2ZmWCxcbiAgICAgICAgICAgIG9mZlk6IG9mZllcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8vIOWPkeeUn+aXi+i9rFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5yb3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoZSwgYXJncykge1xuICAgICAgICB2YXIgb2xkUG9zaXRpb24gPSBlLm9sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbiA9IGUubmV3UG9zaXRpb247XG4gICAgICAgIHZhciBjZW50ZXIgPSB7XG4gICAgICAgICAgICB4OiB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5sZWZ0KSArIHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLndpZHRoKSAvIDIsXG4gICAgICAgICAgICB5OiB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS50b3ApICsgdXRpbC50b051bWJlcih0aGlzLmRhdGEuaGVpZ2h0KSAvIDIsXG4gICAgICAgIH07XG4gICAgICAgIC8vIOe8lui+keWZqOWdkOagh1xuICAgICAgICB2YXIgcG9zMSA9IHRoaXMuZWRpdG9yLnRvRWRpdG9yUG9zaXRpb24ob2xkUG9zaXRpb24pO1xuICAgICAgICB2YXIgcG9zMiA9IHRoaXMuZWRpdG9yLnRvRWRpdG9yUG9zaXRpb24obmV3UG9zaXRpb24pO1xuICAgICAgICAvLyDlm6DkuLpjZW50ZXLmmK/nm7jlr7nkuo7nvJbovpHlmajnmoTvvIzmiYDku6Xkuovku7blnZDmoIfkuZ/pnIDopoHovazliLDnvJbovpHlmahcbiAgICAgICAgdmFyIGN4MSA9IHBvczEueCAtIGNlbnRlci54O1xuICAgICAgICB2YXIgY3kxID0gcG9zMS55IC0gY2VudGVyLnk7XG4gICAgICAgIHZhciBhbmdsZTEgPSBNYXRoLmF0YW4oY3kxIC8gY3gxKTtcbiAgICAgICAgdmFyIGN4MiA9IHBvczIueCAtIGNlbnRlci54O1xuICAgICAgICB2YXIgY3kyID0gcG9zMi55IC0gY2VudGVyLnk7XG4gICAgICAgIHZhciBhbmdsZTIgPSBNYXRoLmF0YW4oY3kyIC8gY3gyKTtcbiAgICAgICAgaWYgKGFuZ2xlMSA+PSAwICYmIGFuZ2xlMiA8IDApIHtcbiAgICAgICAgICAgIGlmIChjeDEgPj0gMCAmJiBjeTEgPj0gMCAmJiBjeDIgPD0gMCAmJiBjeTIgPj0gMClcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSBNYXRoLlBJICsgYW5nbGUyO1xuICAgICAgICAgICAgZWxzZSBpZiAoY3gxIDw9IDAgJiYgY3kxIDw9IDAgJiYgY3gyID49IDAgJiYgY3kyIDw9IDApXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgICAgIC8vZWxzZSBpZihjeDEgPD0gMCAmJiBjeTEgPD0wICYmIGN4MiA+PSAwICYmIGN5MiA+PSAwKSBhbmdsZTIgPSBNYXRoLlBJICsgYW5nbGUyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFuZ2xlMSA8PSAwICYmIGFuZ2xlMiA+PSAwKSB7XG4gICAgICAgICAgICBpZiAoY3gxID49IDAgJiYgY3kxIDw9IDAgJiYgY3gyIDwgMClcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSBhbmdsZTIgLSBNYXRoLlBJO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IC1hbmdsZTI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYW5nbGUxID49IDAgJiYgYW5nbGUyID4gMCkge1xuICAgICAgICAgICAgLy9pZihjeTIgPT09IDApIGFuZ2xlMiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy5yb3RhdGlvbiA9IGFuZ2xlMiAtIGFuZ2xlMTtcbiAgICAgICAgaWYgKGFyZ3Mucm90YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnJvdGF0ZVogKz0gYXJncy5yb3RhdGlvbjtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLmFwcGx5KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIOaKiuWPmOaNouW6lOeUqOWIsOebruagh+WFg+e0oFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5hcHBseVRvVGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgcG9zID0ge1xuICAgICAgICAgICAgeDogdXRpbC50b051bWJlcih0aGlzLmRhdGEubGVmdCkgKyAodGhpcy5pc0VkaXRvciA/IHV0aWwudG9OdW1iZXIodGhpcy50YXJnZXQuZGF0YS5sZWZ0KSA6IDApLFxuICAgICAgICAgICAgeTogdXRpbC50b051bWJlcih0aGlzLmRhdGEudG9wKSArICh0aGlzLmlzRWRpdG9yID8gdXRpbC50b051bWJlcih0aGlzLnRhcmdldC5kYXRhLnRvcCkgOiAwKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhcmdldC5kYXRhLmxlZnQgPSBwb3MueDtcbiAgICAgICAgdGhpcy50YXJnZXQuZGF0YS50b3AgPSBwb3MueTtcbiAgICAgICAgLy8g57yW6L6R5Zmo55u45a+55L2N572u5LiA55u05pivMFxuICAgICAgICBpZiAodGhpcy5pc0VkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmxlZnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnRvcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtLmZyb20oe1xuICAgICAgICAgICAgLy9za2V3WDogdGhpcy50cmFuc2Zvcm0uc2tld1gsXG4gICAgICAgICAgICAvL3NrZXdZOiB0aGlzLnRyYW5zZm9ybS5za2V3WSxcbiAgICAgICAgICAgIHJvdGF0ZVo6IHRoaXMudHJhbnNmb3JtLnJvdGF0ZVosXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgd2lkdGggPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgLSB0aGlzLnBhZGRpbmdTaXplICogMjtcbiAgICAgICAgdmFyIGhlaWdodCA9IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmhlaWdodCkgLSB0aGlzLnBhZGRpbmdTaXplICogMjtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmRhdGEud2lkdGggIT09IHdpZHRoKVxuICAgICAgICAgICAgdGhpcy50YXJnZXQuZGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBpZiAodGhpcy50YXJnZXQuZGF0YS5oZWlnaHQgIT09IGhlaWdodClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmRhdGEuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH07XG4gICAgLy8g6YeN572uXG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKGlzRWRpdG9yKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAoaXNFZGl0b3IgPT09IHZvaWQgMCkgeyBpc0VkaXRvciA9IHRoaXMuaXNFZGl0b3I7IH1cbiAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICBkZWxldGUgdGhpcy50YXJnZXQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyDnvJbovpHlmajkuI3orqnml4vovazlkoxza2V3XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMuaXRlbXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpdGVtLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5mcm9tKHtcbiAgICAgICAgICAgIHJvdGF0ZVo6IDAsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g57uR5a6a5Yiw5pON5L2c55qE5a+56LGhXG4gICAgSkNvbnRyb2xsZXJDb21wb25lbnQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICB0aGlzLmlzRWRpdG9yID0gdGFyZ2V0ID09PSB0aGlzLmVkaXRvcjtcbiAgICAgICAgdGhpcy5yZXNldCh0aGlzLmlzRWRpdG9yKTtcbiAgICAgICAgLy8g57yW6L6R5Zmo55qE6K+d77yM6ZyA6KaB5oqK5a6D55qE5Z2Q5qCH6L2s5Li655u45a+55LqO5a655Zmo55qEXG4gICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5pc0VkaXRvciA/IDAgOiB1dGlsLnRvTnVtYmVyKHRhcmdldC5kYXRhLmxlZnQpKSxcbiAgICAgICAgICAgIHk6ICh0aGlzLmlzRWRpdG9yID8gMCA6IHV0aWwudG9OdW1iZXIodGFyZ2V0LmRhdGEudG9wKSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kYXRhLmxlZnQgPSBwb3MueDtcbiAgICAgICAgdGhpcy5kYXRhLnRvcCA9IHBvcy55O1xuICAgICAgICB0aGlzLmRhdGEud2lkdGggPSB1dGlsLnRvTnVtYmVyKHRhcmdldC5kYXRhLndpZHRoKSArIHRoaXMucGFkZGluZ1NpemUgKiAyO1xuICAgICAgICB0aGlzLmRhdGEuaGVpZ2h0ID0gdXRpbC50b051bWJlcih0YXJnZXQuZGF0YS5oZWlnaHQpICsgdGhpcy5wYWRkaW5nU2l6ZSAqIDI7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtLmZyb20oe1xuICAgICAgICAgICAgLy8gcm90YXRlWDogdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVYLFxuICAgICAgICAgICAgLy8gcm90YXRlWTogdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVZLFxuICAgICAgICAgICAgcm90YXRlWjogdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVaLFxuICAgICAgICAgICAgLy9zY2FsZVg6IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVYLFxuICAgICAgICAgICAgLy9zY2FsZVk6IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVZLFxuICAgICAgICAgICAgLy9zY2FsZVo6IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVaLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuZGF0YS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIOe8lui+keWZqOS4jeiuqeaXi+i9rOWSjHNrZXdcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5pdGVtcyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGl0ZW0uZGF0YS52aXNpYmxlID0gIXRoaXMuaXNFZGl0b3IgJiYgdGFyZ2V0LmVkaXRhYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5aaC5p6c5piv57yW6L6R5Zmo77yM5YiZ5LiN6IO95o2V6I635LqL5Lu2XG4gICAgICAgIHRoaXMuY3NzKHtcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IHRoaXMuaXNFZGl0b3IgPyAnbm9uZScgOiAnYXV0bydcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDop6PpmaTnu5HlrppcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSkNvbnRyb2xsZXJDb21wb25lbnQ7XG59KEpDb250cm9sbGVySXRlbSkpO1xuZXhwb3J0IGRlZmF1bHQgSkNvbnRyb2xsZXJDb21wb25lbnQ7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCBFdmVudEVtaXRlciBmcm9tICcuLi9jb25zdGFudC9ldmVudEVtaXR0ZXInO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgSlRyYW5zZm9ybSBmcm9tICcuLi9jb25zdGFudC90cmFuc2Zvcm0nO1xuaW1wb3J0IEpTdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbmltcG9ydCBKRXZlbnQgZnJvbSAnLi4vY29yZS9ldmVudCc7XG5pbXBvcnQgeyBKRWxlbWVudERhdGEgfSBmcm9tICcuLi9jb25zdGFudC9kYXRhJztcbnZhciBKRWxlbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkVsZW1lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnQob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5faWQgPSAnJztcbiAgICAgICAgLy8g57G75Z6L5ZCN56ewXG4gICAgICAgIF90aGlzLl90eXBlID0gJyc7XG4gICAgICAgIC8vIOWtkOWFg+e0oFxuICAgICAgICBfdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgLy8g5piv5ZCm5Y+v57yW6L6RXG4gICAgICAgIF90aGlzLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8g5aSN5Yi25bGe5oCnXG4gICAgICAgIGZvciAodmFyIGsgaW4gb3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdiA9IG9wdGlvbltrXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgayAhPT0gJ3N0cmluZycgfHwgKHR5cGVvZiB2ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgdiAhPT0gJ251bWJlcicpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgX3RoaXNba10gPSB2O1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9pZCA9IF90aGlzLmlkIHx8IG9wdGlvbi5pZCB8fCB1dWlkdjQoKS5yZXBsYWNlKC8tL2csICcnKTtcbiAgICAgICAgX3RoaXMuX3R5cGUgPSBfdGhpcy50eXBlIHx8IG9wdGlvbi50eXBlIHx8ICcnO1xuICAgICAgICB2YXIgbm9kZVR5cGUgPSBvcHRpb24ubm9kZVR5cGUgfHwgJ2Rpdic7XG4gICAgICAgIF90aGlzLl9kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcbiAgICAgICAgaWYgKG9wdGlvbi5lZGl0b3IpXG4gICAgICAgICAgICBfdGhpcy5lZGl0b3IgPSBvcHRpb24uZWRpdG9yO1xuICAgICAgICAvLyDmoLflvI/ku6PnkIblpITnkIZcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBKU3R5bGUuY3JlYXRlUHJveHkoKTtcbiAgICAgICAgX3RoaXMuc3R5bGUub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXREb21TdHlsZShzLm5hbWUsIHMudmFsdWUpO1xuICAgICAgICAgICAgX3RoaXMuZW1pdCgnc3R5bGVDaGFuZ2UnLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcyksIHsgdGFyZ2V0OiBfdGhpcyB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9uLnN0eWxlKVxuICAgICAgICAgICAgX3RoaXMuc3R5bGUuYXBwbHkob3B0aW9uLnN0eWxlKTtcbiAgICAgICAgLy8g5Y+Y5o2i5o6n5Yi255qE5piv5qC45b+D5YWD57SgXG4gICAgICAgIF90aGlzLnRyYW5zZm9ybSA9IEpUcmFuc2Zvcm0uY3JlYXRlUHJveHkob3B0aW9uLnRyYW5zZm9ybSwge1xuICAgICAgICAgICAgdGFyZ2V0OiBfdGhpcyxcbiAgICAgICAgICAgIC8vIOWmguaenOaMh+WumuS6huWPquWTjeW6lOafkOWHoOS4quWxnuaAp1xuICAgICAgICAgICAgd2F0Y2hQcm9wczogb3B0aW9uLnRyYW5zZm9ybVdhdGNoUHJvcHNcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLmluaXREYXRhKG9wdGlvbiwgb3B0aW9uLmRhdGFUeXBlKTtcbiAgICAgICAgaWYgKG9wdGlvbi5lZGl0YWJsZSA9PT0gZmFsc2UpXG4gICAgICAgICAgICBfdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9uLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIF90aGlzLmNsYXNzTmFtZSA9IG9wdGlvbi5jbGFzc05hbWU7XG4gICAgICAgIF90aGlzLmJpbmRFdmVudCgpOyAvLyDkuovku7bnu5HlrppcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvLyDliJ3lp4vljJbkuIDkupvln7rnoYDlsZ7mgKdcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuaW5pdERhdGEgPSBmdW5jdGlvbiAob3B0aW9uLCB0eXBlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlID09PSB2b2lkIDApIHsgdHlwZSA9IEpFbGVtZW50RGF0YTsgfVxuICAgICAgICB0aGlzLmRhdGEgPSBKRWxlbWVudERhdGEuY3JlYXRlUHJveHkobmV3IHR5cGUoKSk7XG4gICAgICAgIC8vIOWxnuaAp+WPmOWMluaYoOWwhOWIsHN0eWxlXG4gICAgICAgIHRoaXMuZGF0YS53YXRjaChbXG4gICAgICAgICAgICAneCcsICd5JywgJ2xlZnQnLCAndG9wJywgJ3dpZHRoJywgJ2hlaWdodCcsICd6SW5kZXgnLCAndmlzaWJsZSdcbiAgICAgICAgXSwge1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICd2aXNpYmxlJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdHlsZS5kaXNwbGF5ID0gaXRlbS52YWx1ZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ubmFtZSA9PT0gJ3gnKVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kYXRhLmxlZnQgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ubmFtZSA9PT0gJ3knKVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kYXRhLnRvcCA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5uYW1lID09PSAncm90YXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybS5yb3RhdGVaID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5uYW1lID09PSAnYW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybS5yb3RhdGVaID0gdXRpbC5kZWdUb1JhZChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdHlsZVtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICd4JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmRhdGEubGVmdDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAneScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5kYXRhLnRvcDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAnd2lkdGgnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3ID0gX3RoaXMuc3R5bGUud2lkdGggfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCghdyB8fCB3ID09PSAnYXV0bycpICYmIF90aGlzLmRvbSAmJiBfdGhpcy5kb20uY2xpZW50V2lkdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZG9tLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ2hlaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBfdGhpcy5zdHlsZS5oZWlnaHQgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCghaCB8fCBoID09PSAnYXV0bycpICYmIF90aGlzLmRvbSAmJiBfdGhpcy5kb20uY2xpZW50SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmRvbS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAncm90YXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy50cmFuc2Zvcm0ucm90YXRlWjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ2FuZ2xlJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbC5yYWRUb0RlZyhfdGhpcy50cmFuc2Zvcm0ucm90YXRlWik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICd2aXNpYmxlJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc3R5bGVbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRhdGEueCA9IG9wdGlvbi54IHx8IG9wdGlvbi5sZWZ0IHx8IHRoaXMuZGF0YS54IHx8IDA7XG4gICAgICAgIHRoaXMuZGF0YS55ID0gb3B0aW9uLnkgfHwgb3B0aW9uLnRvcCB8fCB0aGlzLmRhdGEueSB8fCAwO1xuICAgICAgICB0aGlzLmRhdGEud2lkdGggPSBvcHRpb24ud2lkdGggfHwgb3B0aW9uLndpZHRoIHx8IHRoaXMuZGF0YS53aWR0aCB8fCAxO1xuICAgICAgICB0aGlzLmRhdGEuaGVpZ2h0ID0gb3B0aW9uLmhlaWdodCB8fCBvcHRpb24uaGVpZ2h0IHx8IHRoaXMuZGF0YS5oZWlnaHQgfHwgMTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24ucm90YXRpb24gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhpcy5kYXRhLnJvdGF0aW9uID0gb3B0aW9uLnJvdGF0aW9uO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbi5hbmdsZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aGlzLmRhdGEuYW5nbGUgPSBvcHRpb24uYW5nbGU7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uLnpJbmRleCAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aGlzLmRhdGEuekluZGV4ID0gb3B0aW9uLnpJbmRleDtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24udmlzaWJsZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aGlzLmRhdGEudmlzaWJsZSA9ICEhb3B0aW9uLnZpc2libGU7XG4gICAgICAgIGlmIChvcHRpb24uZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmZyb20ob3B0aW9uLmRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnu5Hlrprkuovku7ZcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuYmluZEV2ZW50ID0gZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyDkuovku7bmiZjnrqFcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBKRXZlbnQoZG9tIHx8IHRoaXMuZG9tKTtcbiAgICAgICAgdGhpcy5ldmVudC5pbml0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5lbWl0KGUudHlwZSwgZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJpZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJ0eXBlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwiY2hpbGRyZW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwiZG9tXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZG9tO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJjbGFzc05hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvbS5jbGFzc05hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuZG9tLmNsYXNzTmFtZSA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDorr7nva5jc3PliLBkb21cbiAgICBKRWxlbWVudC5wcm90b3R5cGUuc2V0RG9tU3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdiYWNrZ3JvdW5kSW1hZ2UnICYmIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIS9eXFxzKnVybFxcKC8udGVzdCh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcInVybChcIi5jb25jYXQodmFsdWUsIFwiKVwiKTtcbiAgICAgICAgfVxuICAgICAgICB1dGlsLmNzcyh0aGlzLmRvbSwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8g6K6+572u5qC35byPXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLmNzcyA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB1dGlsLmNzcyh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gZG9t5bGe5oCnXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuYXR0cih0aGlzLmRvbSwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8g56e75L2NXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gICAgICAgIHRoaXMuZGF0YS5sZWZ0ID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEubGVmdCkgKyBkeDtcbiAgICAgICAgdGhpcy5kYXRhLnRvcCA9IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLnRvcCkgKyBkeTtcbiAgICAgICAgdGhpcy5lbWl0KCdtb3ZlJywgeyBkeDogZHgsIGR5OiBkeSB9KTtcbiAgICB9O1xuICAgIC8vIOmHjee9ruWkp+Wwj1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAodywgaCkge1xuICAgICAgICBpZiAodHlwZW9mIHcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEud2lkdGggPSB3O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5oZWlnaHQgPSBoO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDmlrDlop7lrZDlhYPntKBcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQsIHBhcmVudCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7IHBhcmVudCA9IHRoaXM7IH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNoaWxkXzEgPSBfX3ZhbHVlcyhjaGlsZCksIGNoaWxkXzFfMSA9IGNoaWxkXzEubmV4dCgpOyAhY2hpbGRfMV8xLmRvbmU7IGNoaWxkXzFfMSA9IGNoaWxkXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gY2hpbGRfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZF8xXzEgJiYgIWNoaWxkXzFfMS5kb25lICYmIChfYSA9IGNoaWxkXzEucmV0dXJuKSkgX2EuY2FsbChjaGlsZF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBKRWxlbWVudCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgcGFyZW50LmRvbS5hcHBlbmRDaGlsZChjaGlsZC5kb20pO1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5kb20uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnp7vpmaToh6rlt7JcbiAgICBKRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9O1xuICAgIC8vIOenu+mZpOWtkOWFg+e0oFxuICAgIEpFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChlbC5kb20gJiYgZWwuZG9tLnBhcmVudEVsZW1lbnQgPT09IHRoaXMuZG9tKVxuICAgICAgICAgICAgdGhpcy5kb20ucmVtb3ZlQ2hpbGQoZWwuZG9tIHx8IGVsKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldID09PSBlbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkZWxldGUgZWwucGFyZW50O1xuICAgIH07XG4gICAgLy8g6L2s5Li6anNvblxuICAgIEpFbGVtZW50LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAocHJvcHMsIGlnKSB7XG4gICAgICAgIHZhciBlXzIsIF9hLCBlXzMsIF9iO1xuICAgICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkgeyBwcm9wcyA9IFtdOyB9XG4gICAgICAgIGlmIChpZyA9PT0gdm9pZCAwKSB7IGlnID0gZnVuY3Rpb24gKHApIHsgcmV0dXJuIHRydWU7IH07IH1cbiAgICAgICAgdmFyIGZpZWxkcyA9IF9fc3ByZWFkQXJyYXkoWyd0eXBlJywgJ2RhdGEnLCAnc3R5bGUnLCAndHJhbnNmb3JtJywgJ2lkJ10sIF9fcmVhZChwcm9wcyksIGZhbHNlKTtcbiAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgZmllbGRzXzEgPSBfX3ZhbHVlcyhmaWVsZHMpLCBmaWVsZHNfMV8xID0gZmllbGRzXzEubmV4dCgpOyAhZmllbGRzXzFfMS5kb25lOyBmaWVsZHNfMV8xID0gZmllbGRzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBmaWVsZHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGhpc1trXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBvYmpba10gPSB0aGlzW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2ICYmIHYudG9KU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtrXSA9IHYudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzXzFfMSAmJiAhZmllbGRzXzFfMS5kb25lICYmIChfYSA9IGZpZWxkc18xLnJldHVybikpIF9hLmNhbGwoZmllbGRzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXModGhpcy5jaGlsZHJlbiksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2QudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcyB8fCBpZyhjaGlsZCkgPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIG9iai5jaGlsZHJlbi5wdXNoKGNoaWxkLnRvSlNPTigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8zXzEpIHsgZV8zID0geyBlcnJvcjogZV8zXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYiA9IF9jLnJldHVybikpIF9iLmNhbGwoX2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH07XG4gICAgSkVsZW1lbnQucHJvdG90eXBlLnRvSHRtbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tLm91dGVySFRNTDtcbiAgICB9O1xuICAgIHJldHVybiBKRWxlbWVudDtcbn0oRXZlbnRFbWl0ZXIpKTtcbmV4cG9ydCBkZWZhdWx0IEpFbGVtZW50O1xuIiwidmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IHV0aWwgZnJvbSBcIi4uL2xpYi91dGlsXCI7XG52YXIgU3VwcG9ydEV2ZW50TmFtZXMgPSBbXG4gICAgJ21vdXNlZG93bicsICdtb3VzZXVwJywgJ21vdXNlb3ZlcicsICdtb3VzZW1vdmUnLCAnbW91c2VvdXQnLCAnbW91c2V3aGVlbCcsICdjbGljaycsICdkYmxjbGljaycsICdrZXlkb3duJywgJ2tleXByZXNzJywgJ2tleXVwJywgJ2JsdXInLCAnY2hhbmdlJywgJ2ZvY3VzJywgJ2RyYWcnLCAnZHJhZ2VudGVyJywgJ2RyYWdsZWF2ZScsICdkcmFnb3ZlcicsICdkcmFnc3RhcnQnLCAnZHJvcCdcbl07XG52YXIgSkV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpFdmVudCh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cbiAgICAvLyDliJ3lp4vljJbmiYDmnInmlK/mjIHnmoTkuovku7ZcbiAgICBKRXZlbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoaGFuZGxlciwgdGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQpXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnQoU3VwcG9ydEV2ZW50TmFtZXMsIGhhbmRsZXIsIGZhbHNlLCB0YXJnZXQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog57uR5a6a5LqL5Lu25YiwaHRtbOWvueixoVxuICAgICAqXG4gICAgICogQG1ldGhvZCBiaW5kRXZlbnRcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBodG1s5YWD57Sg5a+56LGhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuIOS6i+S7tuWnlOaJmFxuICAgICAqIEByZXR1cm5zIHtuYW1lLCBmdW4sIHRhcmdldH0g6L+U5Zue5b2T5YmN57uR5a6aXG4gICAgICovXG4gICAgSkV2ZW50LnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgZnVuLCBvcHQsIHRhcmdldCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKG9wdCA9PT0gdm9pZCAwKSB7IG9wdCA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB0aGlzLnRhcmdldDsgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lXzEgPSBfX3ZhbHVlcyhuYW1lKSwgbmFtZV8xXzEgPSBuYW1lXzEubmV4dCgpOyAhbmFtZV8xXzEuZG9uZTsgbmFtZV8xXzEgPSBuYW1lXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gbmFtZV8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50KG4sIGZ1biwgb3B0LCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZV8xXzEgJiYgIW5hbWVfMV8xLmRvbmUgJiYgKF9hID0gbmFtZV8xLnJldHVybikpIF9hLmNhbGwobmFtZV8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgJiYgbmFtZS5pbmRleE9mICYmIG5hbWUuaW5kZXhPZignICcpICE9IC0xKSB7XG4gICAgICAgICAgICB2YXIgbnMgPSBuYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kRXZlbnQobnMsIGZ1biwgb3B0LCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIC8qLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZih0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldC5hdHRhY2hFdmVudChcIm9uXCIrbmFtZSwgZnVuLCBvcHQpO1xuICAgICAgICB9ICovXG4gICAgICAgIGlmICh0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuLCBvcHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog5LuO5a+56LGh5Lit56e76Zmk5LqL5Lu25YiwXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUV2ZW50XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gaHRtbOWFg+e0oOWvueixoVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOS6i+S7tuWQjeensFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1biDkuovku7blp5TmiZhcbiAgICAgKi9cbiAgICBKRXZlbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGZ1biwgb3B0LCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKG9wdCA9PT0gdm9pZCAwKSB7IG9wdCA9IGZhbHNlOyB9XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB0aGlzLnRhcmdldDsgfVxuICAgICAgICBpZiAodGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGZ1biwgb3B0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlICBcbiAgICAgICAgZWxzZSBpZiAodGFyZ2V0LmRldGFjaEV2ZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0YXJnZXQuZGV0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZ1biwgb3B0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFsnb24nICsgbmFtZV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog6I635Y+W5YWD57Sg5LqL5Lu26Kem5Y+R55qE5L2N572uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGdldEV2ZW50UG9zaXRpb25cbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtldmVudEFyZ30gZXZ0IOW9k+WJjeinpuWPkeS6i+S7tueahOWPguaVsFxuICAgICAqIEByZXR1cm4ge3BvaW50fSDkuovku7bop6blj5HnmoTkvY3nva5cbiAgICAgKi9cbiAgICBKRXZlbnQucHJvdG90eXBlLmdldEV2ZW50UG9zaXRpb24gPSBmdW5jdGlvbiAoZXZ0LCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGlzVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzIHx8IGV2dC50YXJnZXRUb3VjaGVzIHx8IGV2dC50b3VjaGVzO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZXZ0ID0gdG91Y2hlc1swXTsgLy/lhbzlrrl0b3VjaOS6i+S7tlxuICAgICAgICAgICAgaXNUb3VjaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHB4ID0gZXZ0LnBhZ2VYIHx8IGV2dC54O1xuICAgICAgICBpZiAodHlwZW9mIHB4ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcHggPSBldnQuY2xpZW50WCArIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQpO1xuICAgICAgICB2YXIgcHkgPSBldnQucGFnZVkgfHwgZXZ0Lnk7XG4gICAgICAgIGlmICh0eXBlb2YgcHkgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBweSA9IGV2dC5jbGllbnRZICsgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApO1xuICAgICAgICB2YXIgb3ggPSBldnQub2Zmc2V0WDtcbiAgICAgICAgdmFyIG95ID0gZXZ0Lm9mZnNldFk7XG4gICAgICAgIGlmICgodHlwZW9mIG94ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygb3kgPT09ICd1bmRlZmluZWQnKSB8fCB0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciBwID0gdXRpbC5nZXRFbGVtZW50UG9zaXRpb24oKHRhcmdldCB8fCBldnQudGFyZ2V0KSk7XG4gICAgICAgICAgICBveCA9IHB4IC0gcC54O1xuICAgICAgICAgICAgb3kgPSBweSAtIHAueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogb3gsXG4gICAgICAgICAgICB5OiBveSxcbiAgICAgICAgICAgIHBhZ2VYOiBweCxcbiAgICAgICAgICAgIHBhZ2VZOiBweSxcbiAgICAgICAgICAgIGlzVG91Y2g6IGlzVG91Y2gsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gSkV2ZW50O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IEpFdmVudDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBKRm9udERhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSkZvbnREYXRhKGZhbWlseSwgdXJsKSB7XG4gICAgICAgIHRoaXMuZmFtaWx5ID0gZmFtaWx5O1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpGb250RGF0YS5wcm90b3R5cGUsIFwic3RhdHVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb250KVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvbnQuc3RhdHVzO1xuICAgICAgICAgICAgcmV0dXJuICd1bmxvYWRlZCc7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBKRm9udERhdGEucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIGlmICh1cmwgPT09IHZvaWQgMCkgeyB1cmwgPSB0aGlzLnVybDsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdXJsIHx8IHRoaXMudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb250ID0gbmV3IEZvbnRGYWNlKHRoaXMuZmFtaWx5LCB0aGlzLnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZvbnQubG9hZCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmZvbnRzLmFkZChmKTsgLy8g55Sf5pWIXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEpGb250RGF0YTtcbn0oKSk7XG5leHBvcnQgeyBKRm9udERhdGEgfTtcbnZhciBKRm9udHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSkZvbnRzKGZvbnRTZXQpIHtcbiAgICAgICAgaWYgKGZvbnRTZXQgPT09IHZvaWQgMCkgeyBmb250U2V0ID0gbmV3IE1hcCgpOyB9XG4gICAgICAgIHRoaXMuZm9udHMgPSBmb250U2V0O1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgSkZvbnRzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZm9udHMpIHtcbiAgICAgICAgICAgIHZhciBmb250cyA9IGRvY3VtZW50LmZvbnRzLnZhbHVlcygpO1xuICAgICAgICAgICAgdmFyIGZvbnQgPSBmb250cy5uZXh0KCk7XG4gICAgICAgICAgICB3aGlsZSAoZm9udCAmJiBmb250LmRvbmUgJiYgZm9udC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChmb250LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmID0gbmV3IEpGb250RGF0YShmb250LnZhbHVlLmZhbWlseSk7XG4gICAgICAgICAgICAgICAgICAgIGYuZm9udCA9IGZvbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9udHMuc2V0KGYuZmFtaWx5LCBmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9udCA9IGZvbnRzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g5Yqg6L295a2X5L2TXG4gICAgSkZvbnRzLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKG5hbWUsIHVybCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZm9udDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBmb250ID0gdGhpcy5nZXQobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGZvbnQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmb250XTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udCA9IG5ldyBKRm9udERhdGEobmFtZSwgXCJ1cmwoXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIilcIikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbnRzLnNldChuYW1lLCBmb250KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZvbnQubG9hZCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g6I635Y+W5bey5Yqg6L2955qE5a2X5L2TXG4gICAgSkZvbnRzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAodGhpcy5mb250cykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9udHMuaGFzKG5hbWUpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvbnRzLmdldChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIC8vIOajgOafpeWKoOi9veeahOWtl+S9k+aYr+WQpuWtmOWcqO+8jOWtmOWcqOWImei/lOWbnuWtl+S9k+WvueixoVxuICAgIEpGb250cy5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgZm9udCA9IHRoaXMuZ2V0KG5hbWUpO1xuICAgICAgICByZXR1cm4gISFmb250O1xuICAgIH07XG4gICAgcmV0dXJuIEpGb250cztcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBKRm9udHM7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEpFbGVtZW50Q3NzU3R5bGUgZnJvbSAnLi4vY29uc3RhbnQvc3R5bGVNYXAnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xudmFyIE51bWJlclN0eWxlTWFwID0gWydsZWZ0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnd2lkdGgnLCAnaGVpZ2h0J107XG52YXIgSkVsZW1lbnRTdHlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkVsZW1lbnRTdHlsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWxlbWVudFN0eWxlKG9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5hcHBseShvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLy8g5oqK5qC35byP5bqU55So5Yiw5YWD57Sg5oiW5b2T5YmN5a+56LGhXG4gICAgSkVsZW1lbnRTdHlsZS5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAoZGF0YSwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0gdGhpczsgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLm5hbWVzKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lXzEgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWVfMSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtuYW1lXzFdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZGF0YVtuYW1lXzFdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSkVsZW1lbnRTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNldFN0eWxlKG5hbWVfMSwgZGF0YVtuYW1lXzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXzFdID0gZGF0YVtuYW1lXzFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIC8vIOagt+W8j+WvueW6lOeahOWFg+e0oFxuICAgIEpFbGVtZW50U3R5bGUucHJvdG90eXBlLmFwcGx5VG8gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmFwcGx5KHRoaXMsIGVsZW1lbnQuc3R5bGUpO1xuICAgIH07XG4gICAgLy8g6K6+572u5qC35byPXG4gICAgSkVsZW1lbnRTdHlsZS5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDop6blj5HmiYDmnInmm7TmlrDliLBkb21cbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFwcGx5KHRoaXMpO1xuICAgIH07XG4gICAgLy8g6L2s5Li6anNvblxuICAgIEpFbGVtZW50U3R5bGUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVfMiwgX2E7XG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5uYW1lcyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZV8yID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW25hbWVfMl0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBvYmpbbmFtZV8yXSA9IHRoaXNbbmFtZV8yXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICAvLyDnlJ/miJDmoLflvI/ku6PnkIZcbiAgICBKRWxlbWVudFN0eWxlLmNyZWF0ZVByb3h5ID0gZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICAgIGlmIChzdHlsZSA9PT0gdm9pZCAwKSB7IHN0eWxlID0ge307IH1cbiAgICAgICAgdmFyIGpzdHlsZSA9IG5ldyBKRWxlbWVudFN0eWxlKHN0eWxlKTtcbiAgICAgICAgLy8g5qC35byP5Luj55CG5aSE55CGXG4gICAgICAgIHZhciBwcm94eSA9IG5ldyBQcm94eShqc3R5bGUsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRhcmdldFtwXTtcbiAgICAgICAgICAgICAgICAvLyDmlbDlrZfmoLflvI/vvIzlpITnkIZweOmXrumimFxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcCA9PT0gJ3N0cmluZycgJiYgTnVtYmVyU3R5bGVNYXAuaW5jbHVkZXMocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT09ICcwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXRpbC5pc1BYTnVtYmVyKHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgLy8g6Z2e55m95ZCN5Y2V5qC35byP5LiN5pSv5oyB6K6+572uXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJyB8fCAhdGFyZ2V0Lm5hbWVzLmluY2x1ZGVzKHApKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtwXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5pWw5a2X5qC35byP77yM5aSE55CGcHjpl67pophcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyU3R5bGVNYXAuaW5jbHVkZXMocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHV0aWwuaXNOdW1iZXIodmFsdWUpID8gXCJcIi5jb25jYXQodmFsdWUsIFwicHhcIikgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldFN0eWxlKHAsIHZhbHVlKTsgLy8g5bqU55So5Yiw5YWD57Sg5ZKM57G7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgfTtcbiAgICByZXR1cm4gSkVsZW1lbnRTdHlsZTtcbn0oSkVsZW1lbnRDc3NTdHlsZSkpO1xuZXhwb3J0IGRlZmF1bHQgSkVsZW1lbnRTdHlsZTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEpCYXNlIGZyb20gJy4vY29yZS9iYXNlQ29tcG9uZW50JztcbmltcG9ydCBKVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dCc7XG5pbXBvcnQgSkltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZSc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi9jb3JlL2VsZW1lbnQnO1xuaW1wb3J0IEpDb250cm9sbGVyIGZyb20gJy4vY29yZS9jb250cm9sbGVyJztcbmltcG9ydCBKRm9udHMgZnJvbSAnLi9jb3JlL2ZvbnRzJztcbmltcG9ydCB1dGlsIGZyb20gJy4vbGliL3V0aWwnO1xudmFyIEpFZGl0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFZGl0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVkaXRvcihvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IG9wdGlvbi5zdHlsZSB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb24uc3R5bGUsIHtcbiAgICAgICAgICAgICdib3hTaGFkb3cnOiAnMCAwIDEwcHggMTBweCAjY2NjJyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAnYmFja2dyb3VuZFNpemUnOiAnMTAwJSAxMDAlJyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWkluWxguWPquWTjeW6lFrovbTml4vovaxcbiAgICAgICAgb3B0aW9uLnRyYW5zZm9ybVdhdGNoUHJvcHMgPSBbXG4gICAgICAgICAgICAncm90YXRlWicsICdzY2FsZVgnLCAnc2NhbGVZJ1xuICAgICAgICBdO1xuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbikgfHwgdGhpcztcbiAgICAgICAgLy8g5omA5pyJ5pSv5oyB55qE57G75Z6LXG4gICAgICAgIF90aGlzLnNoYXBlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24uY29udGFpbmVyID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIG9wdGlvbi5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb24uY29udGFpbmVyKTtcbiAgICAgICAgX3RoaXMudmlldyA9IG5ldyBKRWxlbWVudCh7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICdib3JkZXInOiAwLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogMCxcbiAgICAgICAgICAgICAgICAnbWFyZ2luJzogMCxcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5a2X5L2T566h55CG5a6e5L6LXG4gICAgICAgIF90aGlzLmZvbnRzID0gbmV3IEpGb250cygpO1xuICAgICAgICBfdGhpcy50YXJnZXQuY3NzKHtcbiAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9uLmNvbnRhaW5lcilcbiAgICAgICAgICAgIG9wdGlvbi5jb250YWluZXIuYXBwZW5kQ2hpbGQoX3RoaXMudmlldy5kb20pO1xuICAgICAgICBfdGhpcy52aWV3LmFkZENoaWxkKF90aGlzLmRvbSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgX3RoaXMucmVnU2hhcGUoJ2ltYWdlJywgSkltYWdlKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBfdGhpcy5yZWdTaGFwZSgndGV4dCcsIEpUZXh0KTtcbiAgICAgICAgX3RoaXMuaW5pdChvcHRpb24pO1xuICAgICAgICBfdGhpcy5iaW5kRXZlbnQoX3RoaXMudmlldy5kb20pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8vIOWIneWni+WMluaVtOS4que8lui+keWZqFxuICAgIEpFZGl0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChvcHRpb24uc3R5bGUuY29udGFpbmVyQmFja2dyb3VuZENvbG9yKVxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9uLnN0eWxlLmNvbnRhaW5lckJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgLy8g55Sf5oiQ5o6n5Yi25ZmoXG4gICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIgPSBuZXcgSkNvbnRyb2xsZXIoe1xuICAgICAgICAgICAgZWRpdG9yOiB0aGlzLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzdHlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZU5vZGUuaW5uZXJIVE1MID0gXCIuai1kZXNpZ24tZWRpdG9yLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmotZGVzaWduLWVkaXRvci1jb250YWluZXI6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIjtcbiAgICAgICAgdGhpcy52aWV3LmFkZENoaWxkKHN0eWxlTm9kZSk7XG4gICAgICAgIGlmIChvcHRpb24ud2lkdGggJiYgb3B0aW9uLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemUob3B0aW9uLndpZHRoLCBvcHRpb24uaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMuc2VsZWN0KF90aGlzKTsgLy8g6YCJ5Lit6Ieq5beyXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRDb250cm9sbGVyLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5Yi35paw5qC35byPXG4gICAgICAgIHRoaXMuc3R5bGUucmVmcmVzaCgpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFZGl0b3IucHJvdG90eXBlLCBcImNoaWxkcmVuXCIsIHtcbiAgICAgICAgLy8g6YeN5YaZ5a2Q6ZuG5Li6dGFyZ2V0XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmNoaWxkcmVuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFZGl0b3IucHJvdG90eXBlLCBcInNlbGVjdGVkRWxlbWVudHNcIiwge1xuICAgICAgICAvLyDooqvpgInkuK3nmoTlhYPntKBcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLmNoaWxkcmVuKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSkJhc2UgJiYgZWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDnu5Hlrprkuovku7ZcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcpXG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmJpbmRFdmVudC5jYWxsKHRoaXMsIHRoaXMudmlldy5kb20pOyAvLyDnvJbovpHlmajkuovku7bnu5HliLDmlbTkuKrlrrnlmajkuIpcbiAgICB9O1xuICAgIC8vIOmAieS4reafkOS4quWFg+e0oFxuICAgIEpFZGl0b3IucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIOmAieaKiuaJgOacieW3sumAieaLqeeahOWPlua2iFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnRzLmV2ZXJ5KGZ1bmN0aW9uIChwKSB7IHJldHVybiBwICE9PSBlbCAmJiBwLnNlbGVjdGVkICYmIChwLnNlbGVjdGVkID0gZmFsc2UpOyB9KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIuYmluZChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlci51bmJpbmQoZWwpO1xuICAgIH07XG4gICAgSkVkaXRvci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHdpZHRoID09PSB2b2lkIDApIHsgd2lkdGggPSB0aGlzLmRhdGEud2lkdGg7IH1cbiAgICAgICAgaWYgKGhlaWdodCA9PT0gdm9pZCAwKSB7IGhlaWdodCA9IHRoaXMuZGF0YS5oZWlnaHQ7IH1cbiAgICAgICAgdGhpcy5hdHRyKCdkYXRhLXNpemUnLCBcIlwiLmNvbmNhdCh3aWR0aCwgXCIqXCIpLmNvbmNhdChoZWlnaHQpKTtcbiAgICAgICAgdGhpcy5kYXRhLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuZGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZGF0YS5sZWZ0ID0gdXRpbC50b051bWJlcihfdGhpcy52aWV3LmRvbS5jbGllbnRXaWR0aCkgLyAyIC0gdXRpbC50b051bWJlcih3aWR0aCkgLyAyO1xuICAgICAgICAgICAgX3RoaXMuZGF0YS50b3AgPSB1dGlsLnRvTnVtYmVyKF90aGlzLnZpZXcuZG9tLmNsaWVudEhlaWdodCkgLyAyIC0gdXRpbC50b051bWJlcihoZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ3Jlc2l6ZScsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMCk7XG4gICAgfTtcbiAgICAvLyDmt7vliqDlhYPntKDliLDnlLvluINcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoY2hpbGQgPT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5hZGRDaGlsZC5jYWxsKHRoaXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNoaWxkLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgc2VsZi5zZWxlY3QodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGlsZC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5lbGVtZW50Q29udHJvbGxlci5vbkRyYWdTdGFydChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOebkeWQrOagt+W8j+aUueWPmFxuICAgICAgICBjaGlsZC5vbignc3R5bGVDaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMuZW1pdCgnc3R5bGVDaGFuZ2UnLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7IC8vIOaKiueItuiuvue9ruaIkOe8lui+keWZqFxuICAgICAgICBjaGlsZC5lZGl0b3IgPSB0aGlzO1xuICAgICAgICAvLyDliLfmlrDmoLflvI9cbiAgICAgICAgY2hpbGQuc3R5bGUucmVmcmVzaCgpO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRDaGlsZChjaGlsZCwgdGhpcy50YXJnZXQpO1xuICAgIH07XG4gICAgLy8g56e76ZmkXG4gICAgSkVkaXRvci5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKGVsID09PSB0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oJ+S4jeiDveenu+mZpOiHquW3sicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEpFbGVtZW50KSB7XG4gICAgICAgICAgICBlbC5vZmYoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgZWwub2ZmKCdtb3VzZWRvd24nKTtcbiAgICAgICAgICAgIGVsLm9mZignc3R5bGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH07XG4gICAgLy8g5oqKZG9tY3VtZW505Z2Q5qCH6L2s5Li657yW6L6R5Zmo55u45a+55Z2Q5qCHXG4gICAgSkVkaXRvci5wcm90b3R5cGUudG9FZGl0b3JQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgICAgLy8g57yW6L6R5Zmo5Z2Q5qCHXG4gICAgICAgIHZhciBlZGl0b3JQb3MgPSB1dGlsLmdldEVsZW1lbnRCb3VuZGluZ1JlY3QodGhpcy50YXJnZXQuZG9tKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHBvcy54IC0gZWRpdG9yUG9zLngsXG4gICAgICAgICAgICB5OiBwb3MueSAtIGVkaXRvclBvcy55XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jc3Moe1xuICAgICAgICAgICAgJ2JhY2tncm91bmRDb2xvcic6ICcjZmZmJyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRDb250cm9sbGVyLmRhdGEudmlzaWJsZSA9IGZhbHNlO1xuICAgIH07XG4gICAgLy8g57yp5pS+XG4gICAgSkVkaXRvci5wcm90b3R5cGUuc2NhbGUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSB4OyB9XG4gICAgICAgIGlmICh4IDwgMC4xIHx8IHkgPCAwLjEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlWCA9IHg7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlWSA9IHk7XG4gICAgfTtcbiAgICAvLyDms6jlhozoh6rlrprkuYnnu4Tku7ZcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5yZWdTaGFwZSA9IGZ1bmN0aW9uIChuYW1lLCBzaGFwZSkge1xuICAgICAgICBpZiAodGhpcy5zaGFwZXMuaGFzKG5hbWUpKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJcXHU1MTQzXFx1N0QyMFxcdTdDN0JcXHU1NzhCXCIuY29uY2F0KG5hbWUsIFwiXFx1NURGMlxcdTdFQ0ZcXHU1QjU4XFx1NTcyOFwiKSk7XG4gICAgICAgIHRoaXMuc2hhcGVzLnNldChuYW1lLCBzaGFwZSk7XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICB9O1xuICAgIC8vIOWIm+W7uuWFg+e0oFxuICAgIEpFZGl0b3IucHJvdG90eXBlLmNyZWF0ZVNoYXBlID0gZnVuY3Rpb24gKHR5cGUsIG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIHNoYXBlID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdGhpcy5zaGFwZXMuZ2V0KHR5cGUpIDogdHlwZTtcbiAgICAgICAgaWYgKCFzaGFwZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJcIi5jb25jYXQodHlwZSwgXCJcXHU0RTBEXFx1NUI1OFxcdTU3MjhcXHU3Njg0XFx1NTE0M1xcdTdEMjBcXHU3QzdCXFx1NTc4QlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsID0gbmV3IHNoYXBlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IGVkaXRvcjogdGhpcywgdHlwZTogdHlwZSB9KSk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9O1xuICAgIC8vIOWIm+W7uuWbvueJh+WFg+e0oFxuICAgIEpFZGl0b3IucHJvdG90eXBlLmNyZWF0ZUltYWdlID0gZnVuY3Rpb24gKHVybCwgb3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgaW1nID0gdGhpcy5jcmVhdGVTaGFwZSgnaW1hZ2UnLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uKSwgeyB1cmw6IHVybCB9KSk7XG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgfTtcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5mcm9tSlNPTiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgaWYgKGRhdGEuc3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYXBwbHkoZGF0YS5zdHlsZSk7IC8vIOW6lOeUqOagt+W8j1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzaXplKGRhdGEud2lkdGgsIGRhdGEuaGVpZ2h0KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoZGF0YS5jaGlsZHJlbiksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghYy50eXBlKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY3JlYXRlU2hhcGUoYy50eXBlLCBjKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBKRWRpdG9yO1xufShKQmFzZSkpO1xuZXhwb3J0IGRlZmF1bHQgSkVkaXRvcjtcbmV4cG9ydCB7IEpFZGl0b3IsIEpJbWFnZSwgSlRleHQsIH07XG4iLCJpbXBvcnQgSkJhc2VDb21wb25lbnQgZnJvbSAnLi9jb3JlL2Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IEpUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcbmltcG9ydCBKSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuL2NvcmUvZWxlbWVudCc7XG5pbXBvcnQgSkVkaXRvciBmcm9tICcuL2VkaXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50L3R5cGVzJztcbmV4cG9ydCB7IEpCYXNlQ29tcG9uZW50LCBKVGV4dCwgSkltYWdlLCBKRWxlbWVudCwgSkVkaXRvciB9O1xuZXhwb3J0IGRlZmF1bHQgSkVkaXRvcjtcbiIsInZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyDmmK/lkKbmmK/mlbDlrZdcbiAgICBpc051bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJyB8fCAvXlxccypbXFxkXFwuXStcXHMqJC8udGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaYr+W4puWDj+e0oOWNleS9jeeahOWtl+espuS4slxuICAgIGlzUFhOdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiAvXlxccypbXFxkXFwuXStcXHMqcHhcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaYr+W4puinkuW6puWNleS9jeeahOWtl+espuS4slxuICAgIGlzRGVnTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gL15cXHMqW1xcZFxcLl0rXFxzKmRlZ1xccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLy8g5piv5ZCm5piv5bim5byn5bqm5Y2V5L2N55qE5a2X56ym5LiyXG4gICAgaXNSYWROdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiAvXlxccypbXFxkXFwuXStcXHMqcmFkXFxzKi9pLnRlc3Qodik7XG4gICAgfSxcbiAgICAvLyDovazkuLrlg4/ntKDlrZfnrKbkuLLmoLzlvI8gXG4gICAgdG9QWDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdweCc7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH0sXG4gICAgLy8g5bim5YOP57Sg5oiW5YW25a6D5Y2V5L2N55qE6L2s5o2i5Li65pWw5a2XXG4gICAgdG9OdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih2KTtcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodik7XG4gICAgfSxcbiAgICAvLyDlvKfluqbovazop5LluqZcbiAgICByYWRUb0RlZzogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgfSxcbiAgICAvLyDop5LluqbovazlvKfluqZcbiAgICBkZWdUb1JhZDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgfSxcbiAgICAvLyDovazkuLrop5LluqbmoLzlvI9cbiAgICB0b0RlZzogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdkZWcnO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNSYWROdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RlZyh0aGlzLnJhZFRvRGVnKHBhcnNlRmxvYXQodikpKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvLyDovazkuLrlvKfluqbmoLzlvI9cbiAgICB0b1JhZDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdyYWQnO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNEZWdOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1JhZCh0aGlzLmRlZ1RvUmFkKHBhcnNlRmxvYXQodikpKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5blhYPntKDnmoTnu53lr7nlrprkvY1cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZ2V0RWxlbWVudFBvc2l0aW9uXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWwg55uu5qCH5YWD57Sg5a+56LGhXG4gICAgICogQHJldHVybiB7cG9zaXRpb259IOS9jee9ruWvueixoSh0b3AsbGVmdClcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50UG9zaXRpb246IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgcG9zID0geyBcInlcIjogMCwgXCJ4XCI6IDAgfTtcbiAgICAgICAgaWYgKCFlbClcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIGlmIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIHdoaWxlIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBwb3MueSArPSBlbC5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgcG9zLnggKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGVsc2UgaWYgKGVsLngpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBvcy54ICs9IGVsLng7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbHNlIGlmIChlbC55KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwb3MueSArPSBlbC55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfSxcbiAgICAvLyDojrflj5blhYPntKBib3VuZHNcbiAgICBnZXRFbGVtZW50Qm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IHtcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgYm91bmRzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgYm91bmRzLnggKz0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIGJvdW5kcy55ICs9IHNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLmdldEVsZW1lbnRQb3NpdGlvbihlbCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHBvcy54O1xuICAgICAgICAgICAgYm91bmRzLnkgPSBwb3MueTtcbiAgICAgICAgICAgIGJvdW5kcy53aWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgYm91bmRzLmhlaWdodCA9IGVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH0sXG4gICAgLy8g5oqKZG9tY3VtZW505Z2Q5qCH6L2s5Li65oyH5a6a5YWD57Sg55u45a+55Z2Q5qCHXG4gICAgdG9Eb21Qb3NpdGlvbjogZnVuY3Rpb24gKHBvcywgZG9tKSB7XG4gICAgICAgIHZhciBkb21Qb3MgPSB0aGlzLmdldEVsZW1lbnRCb3VuZGluZ1JlY3QoZG9tKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHBvcy54IC0gZG9tUG9zLngsXG4gICAgICAgICAgICB5OiBwb3MueSAtIGRvbVBvcy55XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmiorkuIDkuKrmiJblpJrkuKrngrnnu5Xmn5DkuKrngrnml4vovazkuIDlrprop5LluqZcbiAgICAgKiDlhYjmiorlnZDmoIfljp/ngrnnp7vliLDml4vovazkuK3lv4PngrnvvIzorqHnrpflkI7np7vlm55cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVBvaW50c1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge0FycmF5L29iamVjdH0gcCDkuIDkuKrmiJblpJrkuKrngrlcbiAgICAgKiBAcGFyYW0ge3g6IG51bWJlciwgeTogbnVtYmVyfSBycCDml4vovazkuK3lv4PngrlcbiAgICAgKiBAcGFyYW0geyp9IHIg5peL6L2s6KeS5bqmXG4gICAgICovXG4gICAgcm90YXRlUG9pbnRzOiBmdW5jdGlvbiAocCwgY2VudGVyLCByKSB7XG4gICAgICAgIGlmICghciB8fCAhcClcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3Mocik7XG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocCkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghcFtpXSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIHgxID0gcFtpXS54IC0gY2VudGVyLng7XG4gICAgICAgICAgICAgICAgdmFyIHkxID0gcFtpXS55IC0gY2VudGVyLnk7XG4gICAgICAgICAgICAgICAgcFtpXS54ID0geDEgKiBjb3MgLSB5MSAqIHNpbiArIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIHBbaV0ueSA9IHgxICogc2luICsgeTEgKiBjb3MgKyBjZW50ZXIueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4MSA9IHAueCAtIGNlbnRlci54O1xuICAgICAgICAgICAgdmFyIHkxID0gcC55IC0gY2VudGVyLnk7XG4gICAgICAgICAgICBwLnggPSB4MSAqIGNvcyAtIHkxICogc2luICsgY2VudGVyLng7XG4gICAgICAgICAgICBwLnkgPSB4MSAqIHNpbiArIHkxICogY29zICsgY2VudGVyLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICAvLyDorr7nva7moLflvI9cbiAgICBjc3M6IGZ1bmN0aW9uIChkb20sIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuYW1lKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jc3MoZG9tLCBuLCBuYW1lW25dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20uc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIGRvbeWxnuaAp1xuICAgIGF0dHI6IGZ1bmN0aW9uIChkb20sIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlICsgJycpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRvbS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHByZWZpeCA9ICd+JztcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgYSBzdG9yYWdlIGZvciBvdXIgYEVFYCBvYmplY3RzLlxuICogQW4gYEV2ZW50c2AgaW5zdGFuY2UgaXMgYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFdmVudHMoKSB7fVxuXG4vL1xuLy8gV2UgdHJ5IHRvIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLiBJbiBzb21lIGVuZ2luZXMgY3JlYXRpbmcgYW5cbi8vIGluc3RhbmNlIGluIHRoaXMgd2F5IGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgYE9iamVjdC5jcmVhdGUobnVsbClgIGRpcmVjdGx5LlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGNoYXJhY3RlciB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdFxuLy8gb3ZlcnJpZGRlbiBvciB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vL1xuaWYgKE9iamVjdC5jcmVhdGUpIHtcbiAgRXZlbnRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy9cbiAgLy8gVGhpcyBoYWNrIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBgX19wcm90b19fYCBwcm9wZXJ0eSBpcyBzdGlsbCBpbmhlcml0ZWQgaW5cbiAgLy8gc29tZSBvbGQgYnJvd3NlcnMgbGlrZSBBbmRyb2lkIDQsIGlQaG9uZSA1LjEsIE9wZXJhIDExIGFuZCBTYWZhcmkgNS5cbiAgLy9cbiAgaWYgKCFuZXcgRXZlbnRzKCkuX19wcm90b19fKSBwcmVmaXggPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBldmVudCBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXIoZW1pdHRlciwgZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgZW1pdHRlciwgb25jZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XSkgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgZW1pdHRlci5fZXZlbnRzQ291bnQrKztcbiAgZWxzZSBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdLmZuKSBlbWl0dGVyLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IFtlbWl0dGVyLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJdO1xuXG4gIHJldHVybiBlbWl0dGVyO1xufVxuXG4vKipcbiAqIENsZWFyIGV2ZW50IGJ5IG5hbWUuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldnQgVGhlIEV2ZW50IG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbGVhckV2ZW50KGVtaXR0ZXIsIGV2dCkge1xuICBpZiAoLS1lbWl0dGVyLl9ldmVudHNDb3VudCA9PT0gMCkgZW1pdHRlci5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICBlbHNlIGRlbGV0ZSBlbWl0dGVyLl9ldmVudHNbZXZ0XTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBuYW1lcyA9IFtdXG4gICAgLCBldmVudHNcbiAgICAsIG5hbWU7XG5cbiAgaWYgKHRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIChldmVudHMgPSB0aGlzLl9ldmVudHMpKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghaGFuZGxlcnMpIHJldHVybiBbXTtcbiAgaWYgKGhhbmRsZXJzLmZuKSByZXR1cm4gW2hhbmRsZXJzLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aCwgZWUgPSBuZXcgQXJyYXkobCk7IGkgPCBsOyBpKyspIHtcbiAgICBlZVtpXSA9IGhhbmRsZXJzW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG51bWJlciBvZiBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWJlciBvZiBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIGxpc3RlbmVyQ291bnQoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghbGlzdGVuZXJzKSByZXR1cm4gMDtcbiAgaWYgKGxpc3RlbmVycy5mbikgcmV0dXJuIDE7XG4gIHJldHVybiBsaXN0ZW5lcnMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMiwgYTMpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIG9uZS10aW1lIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCB0cnVlKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsaXN0ZW5lcnMgb2YgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuICBpZiAoIWZuKSB7XG4gICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAoXG4gICAgICBsaXN0ZW5lcnMuZm4gPT09IGZuICYmXG4gICAgICAoIW9uY2UgfHwgbGlzdGVuZXJzLm9uY2UpICYmXG4gICAgICAoIWNvbnRleHQgfHwgbGlzdGVuZXJzLmNvbnRleHQgPT09IGNvbnRleHQpXG4gICAgKSB7XG4gICAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBldmVudHMgPSBbXSwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxpc3RlbmVyc1tpXS5mbiAhPT0gZm4gfHxcbiAgICAgICAgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKSB8fFxuICAgICAgICAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAgIC8vXG4gICAgaWYgKGV2ZW50cy5sZW5ndGgpIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgICBlbHNlIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dDtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICh0aGlzLl9ldmVudHNbZXZ0XSkgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBwcmVmaXguXG4vL1xuRXZlbnRFbWl0dGVyLnByZWZpeGVkID0gcHJlZml4O1xuXG4vL1xuLy8gQWxsb3cgYEV2ZW50RW1pdHRlcmAgdG8gYmUgaW1wb3J0ZWQgYXMgbW9kdWxlIG5hbWVzcGFjZS5cbi8vXG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOSUxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX25pbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9wYXJzZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cmluZ2lmeVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdjIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdjMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdjQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdmFsaWRhdGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF92ZXJzaW9uLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YxLmpzXCIpKTtcblxudmFyIF92MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjMuanNcIikpO1xuXG52YXIgX3YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NC5qc1wiKSk7XG5cbnZhciBfdjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y1LmpzXCIpKTtcblxudmFyIF9uaWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25pbC5qc1wiKSk7XG5cbnZhciBfdmVyc2lvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKSk7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKSk7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IG1kNTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgcmFuZG9tVVVJRFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG5mdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG52YXIgX2RlZmF1bHQgPSBzaGExO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxudmFyIF9kZWZhdWx0ID0gc3RyaW5naWZ5O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxubGV0IF9ub2RlSWQ7XG5cbmxldCBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbmxldCBfbGFzdE1TZWNzID0gMDtcbmxldCBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgbGV0IGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIGNvbnN0IGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxldCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGxldCBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICBsZXQgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIGxldCBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIGNvbnN0IGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgY29uc3QgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgY29uc3QgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGIpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2MTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG5cbnZhciBfbWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21kNS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHYzID0gKDAsIF92LmRlZmF1bHQpKCd2MycsIDB4MzAsIF9tZC5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IHYzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgY29uc3QgYnl0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5jb25zdCBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuRE5TID0gRE5TO1xuY29uc3QgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9IFVSTDtcblxuZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSAoMCwgX3BhcnNlLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfbmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uYXRpdmUuanNcIikpO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX3NoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2hhMS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHY1ID0gKDAsIF92LmRlZmF1bHQpKCd2NScsIDB4NTAsIF9zaGEuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2NTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZ2V4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZWdleC5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBfcmVnZXguZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2YWxpZGF0ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2ZXJzaW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il19
