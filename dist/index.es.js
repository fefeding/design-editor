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
/**
 * 图像组件类 JImage，继承于基础组件 Base。
 * @public
 */
var JImage = /** @class */function (_super) {
  __extends(JImage, _super);
  /**
   * JImage组件构造函数。
   * @param option - 图像选项，包括 url, src 等。
   */
  function JImage(option) {
    if (option === void 0) {
      option = {};
    }
    var _this = _super.call(this, __assign(__assign({}, option), {
      nodeType: 'img',
      dataType: _data.JImageData
    })) || this;
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
    _this.data.watch(['src'], {
      // 设置 'src' 属性
      set: function set(item) {
        _this.target.dom.src = item.value;
      },
      // 获取 'src' 属性
      get: function get(name) {
        return _this.target.dom.src;
      }
    });
    // 如果在选项中提供，设置 'src' 或 'url' 属性
    // @ts-ignore
    var src = option.url || option.src;
    if (src) _this.data.src = src;
    return _this;
  }
  /**
   * img元素的JSON表现形式，包括'src'等属性。
   * @param props - 序列化时需要包括的属性
   * @returns JSON对象，表示img元素。
   */
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

},{"../constant/data":4,"../core/baseComponent":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _baseComponent = _interopRequireDefault(require("../core/baseComponent"));
var _util = _interopRequireDefault(require("../lib/util"));
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
var JSvg = /** @class */function (_super) {
  __extends(JSvg, _super);
  function JSvg(option) {
    if (option === void 0) {
      option = {};
    }
    var _this = _super.call(this, __assign(__assign({}, option), {
      dataType: _data.JSvgData
    })) || this;
    // 属性变化映射到style
    _this.data.watch(['url', 'svg', 'src'], {
      set: function set(item) {
        if (item.name === 'url') {
          _this.load(item.value);
        }
        if (item.name === 'src') {
          _this.data.url = item.value;
        } else if (item.name === 'svg') {
          _this.target.dom.innerHTML = item.value;
        }
      }
    });
    return _this;
  }
  // 替换变量
  JSvg.prototype.renderSvg = function (svg) {
    this.data.map(function (name, value) {
      svg = svg.replace(new RegExp("\\{".concat(name, "\\}"), 'g'), value);
    });
    return svg;
  };
  // 加载svg内容
  JSvg.prototype.load = function (url) {
    if (url === void 0) {
      url = this.data.url;
    }
    return __awaiter(this, void 0, void 0, function () {
      var svg;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, _util["default"].request(url)];
          case 1:
            svg = _a.sent();
            this.data.svg = svg;
            return [2 /*return*/];
        }
      });
    });
  };
  JSvg.prototype.toJSON = function (props) {
    if (props === void 0) {
      props = [];
    }
    props.push('src');
    return _super.prototype.toJSON.call(this, props);
  };
  return JSvg;
}(_baseComponent["default"]);
var _default = exports["default"] = JSvg;

},{"../constant/data":4,"../core/baseComponent":9,"../lib/util":17}],3:[function(require,module,exports){
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
/**
 * 文本组件类 JText，继承于基础组件 Base。
 * @public
 */
var JText = /** @class */function (_super) {
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
      wordBreak: "keep-all",
      wordWrap: "break-word"
    }, option.style);
    _this = _super.call(this, __assign(__assign({}, option), {
      nodeType: 'div',
      dataType: _data.JTextData
    })) || this;
    // 'text' 属性变化映射到 innerText
    _this.data.watch(['text'], {
      set: function set(item) {
        _this.target.dom.innerText = item.value;
      },
      get: function get(name) {
        return _this.target.dom.innerText;
      }
    });
    // 如果在选项中提供，设置 'text' 属性
    // @ts-ignore
    var text = option.text;
    if (text) _this.data.text = text;
    // 添加双击事件监听器，进入编辑状态
    _this.on('dblclick', function () {
      _this.edit();
    });
    // 添加选择事件监听器，退出编辑状态
    _this.on('select', function () {
      _this.closeEdit();
    });
    JText.TextControlCache.set(_this.id, _this); // 缓存起来
    return _this;
  }
  /**
   * 进入文本编辑状态
   */
  JText.prototype.edit = function () {
    var _this = this;
    if (!this.editable) return;
    var editEl = this.editor.textEditElement;
    if (!editEl) {
      editEl = this.editor.textEditElement = new _element["default"]({
        nodeType: 'textarea',
        visible: false,
        style: {
          boxSizing: 'border-box',
          padding: '4px',
          position: 'absolute',
          zIndex: _styleMap.topZIndex,
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
    var w = _util["default"].toNumber(this.data.width) * 1.5;
    var h = _util["default"].toNumber(this.data.height) * 1.2;
    var style = {};
    style.width = Math.max(w, 100) + 'px';
    style.height = Math.max(h, 100) + 'px';
    style.top = _util["default"].toNumber(this.data.top) - 4;
    style.left = _util["default"].toNumber(this.data.left) - 4;
    style.fontSize = this.style.fontSize;
    style.fontFamily = this.style.fontFamily;
    style.fontWeight = this.style.fontWeight;
    style.display = 'inline-block';
    _util["default"].css(editEl, style);
    editEl.dom.focus(); // 进入控件
  };
  /**
   * 退出文本编辑状态
   */
  JText.prototype.closeEdit = function () {
    var editEl = this.editor.textEditElement;
    if (!editEl || !editEl.visible) return;
    // 编辑的是当前元素，才采用它的值
    var id = editEl.attr('data-target');
    var target = JText.TextControlCache.get(id);
    if (target instanceof JText) {
      target.data.text = editEl.dom.value;
      editEl.data.visible = false;
      editEl.dom.value = ''; // 置空
    }
  };
  /**
   * Div元素的JSON表现形式，包括 'text' 等属性
   * @param props - 要序列化的属性列表
   * @returns JSON对象，表示div元素
   */
  JText.prototype.toJSON = function (props) {
    if (props === void 0) {
      props = [];
    }
    props.push('text');
    return _super.prototype.toJSON.call(this, props);
  };
  /**
   * 移除 JText 实例
   */
  JText.prototype.dispose = function () {
    JText.TextControlCache["delete"](this.id);
    _super.prototype.dispose.call(this);
  };
  // 所有 JText 实例的缓存
  JText.TextControlCache = new Map();
  return JText;
}(_baseComponent["default"]);
var _default = exports["default"] = JText;

},{"../constant/data":4,"../constant/styleMap":6,"../core/baseComponent":9,"../core/element":11,"../lib/util":17}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.JTextData = exports.JSvgData = exports.JImageData = exports.JElementData = void 0;
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
/**
 * JData 类：提供了一种方式来处理和管理数据
 * @public
 */
var JData = /** @class */function (_super) {
  __extends(JData, _super);
  function JData(data) {
    if (data === void 0) {
      data = {};
    }
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
  /**
   * 从对象中导入数据到当前实例
   * @param data - 需导入的数据对象
   * @returns 返回当前 JData 实例
   */
  JData.prototype.from = function (data) {
    if (this.data) Object.assign(this, data);
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
        if (typeof this[name_2] === 'undefined' || typeof this[name_2] === 'function') continue;
        var ret = fun && fun(name_2, this[name_2]);
        if (ret !== false) {
          res.push({
            name: name_2,
            value: this[name_2]
          });
        }
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
var _default = exports["default"] = JData;
/**
 * 元素的基础数据类
 * @public
 */
var JElementData = exports.JElementData = /** @class */function (_super) {
  __extends(JElementData, _super);
  function JElementData(data) {
    if (data === void 0) {
      data = {};
    }
    return _super.call(this, data) || this;
  }
  return JElementData;
}(JData);
/**
 * 图片元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
var JImageData = exports.JImageData = /** @class */function (_super) {
  __extends(JImageData, _super);
  function JImageData() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return JImageData;
}(JElementData);
/**
 * svg
 * @public
 */
var JSvgData = exports.JSvgData = /** @class */function (_super) {
  __extends(JSvgData, _super);
  function JSvgData() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return JSvgData;
}(JImageData);
/**
 * 文本元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
var JTextData = exports.JTextData = /** @class */function (_super) {
  __extends(JTextData, _super);
  function JTextData() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return JTextData;
}(JElementData);

},{"./eventEmitter":5}],5:[function(require,module,exports){
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
/**
 * EventEmitter 类，继承自 'eventemitter3' 模块的 EventEmiter 类。
 * 用于进行事件的发布与订阅。
 * @public
 */
var EventEmitter = /** @class */function (_super) {
  __extends(EventEmitter, _super);
  function EventEmitter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * 私有方法，用于规范化事件名
   * @param name - 可以是字符串、符号或字符串数组
   * @returns 返回符号或字符串数组
   */
  EventEmitter.prototype.normalizeEventNames = function (name) {
    if (!name) {
      return [];
    }
    if (typeof name === 'string') {
      return name.split(' ');
    }
    return Array.isArray(name) ? name : [name];
  };
  /**
   * 为给定的事件添加一个监听器
   * @param event - 事件名，可以是字符串、符号或字符串数组
   * @param fn - 监听函数，参数列表为可变参数
   * @param context - 可选，上下文对象
   * @returns 返回 EventEmitter 实例
   */
  EventEmitter.prototype.on = function (event, fn, context) {
    var e_1, _a;
    var events = this.normalizeEventNames(event);
    try {
      for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
        var name_1 = events_1_1.value;
        name_1 && _super.prototype.on.call(this, name_1, fn, context);
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
    return this;
  };
  /**
   * 移除给定的事件的一个监听器
   * @param event - 事件名，可以是字符串、符号或字符串数组
   * @param fn - 可选，监听函数，参数列表为可变参数
   * @param context - 可选，上下文对象
   * @param once - 可选，是否只执行一次
   * @returns 返回 EventEmitter 实例
   */
  EventEmitter.prototype.off = function (event, fn, context, once) {
    var e_2, _a;
    var events = this.normalizeEventNames(event);
    try {
      for (var events_2 = __values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
        var name_2 = events_2_1.value;
        name_2 && _super.prototype.off.call(this, name_2, fn, context);
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
    return this;
  };
  return EventEmitter;
}(_eventemitter["default"]);
var _default = exports["default"] = EventEmitter;

},{"eventemitter3":18}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topZIndex = exports.nwse = exports.ns = exports["default"] = exports.JElementStyleProperty = exports.JElementStyleDeclaration = exports.ControlerCursors = exports.ControlItemIcons = exports.ContainerDefaultStyle = void 0;
var _eventEmitter = _interopRequireDefault(require("./eventEmitter"));
var _util = _interopRequireDefault(require("../lib/util"));
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
/**
 * 支持的样式属性列表
 * @public
 */
var JElementStyleDeclaration = exports.JElementStyleDeclaration = /** @class */function (_super) {
  __extends(JElementStyleDeclaration, _super);
  function JElementStyleDeclaration() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return JElementStyleDeclaration;
}(_eventEmitter["default"]);
/**
 * 样式属性集合
 * @public
 */
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
/**
 * @public
 */
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
var nwse = exports.nwse = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////////+anqaeoqqjpq7e3+Li4uRpbXhiZ3NjaHRfZHFZX2tAR1c/RlU7QVH////9/f3////////9/f3////9/f3///8PFyr////UYjabAAAAJ3RSTlMABAUMDRAREhckKS4wMjU2N6jAwMDHyMrMzM3P2tvd5Ojo6evr7PowgHoyAAAAAWJLR0QovbC1sgAAAJVJREFUKM+90dsSgiAQgGHIDkBUoqaVGRXE7vs/YSgz5QDX/pd8HGYWQpZqLQ8+WSTrb5yyLII91jdfi8cIJPYAUKEiObgaJ3JwgcFonkL1ucPjOUrJ5o+f0QURCi39QWFRCT2J83s2/yPsRAgP0vRzmOLaDNBBCkQ400EOFDaQgxLbcTB1AsyGUb5ofBXdjW1Xi/32F3U3EU6pnu/zAAAAAElFTkSuQmCC';
var ns = exports.ns = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oq7KusLevsriZm6Wdoamipa2jpq6Tl6CNkZqIjJX///98gYv///////////////8PFyr///8ipdpMAAAAMXRSTlMAAQIDBAUHCVpcXV5faGl3gIKDhIWImJydnp+mqaqxuLu/v7/AwMDAwcLDxMX7/P3+tV+LYwAAAAFiS0dEMkDSTMgAAAC/SURBVCjPfZLZEoIwDEWhClhAxQVFVDYVF1xI/v/jJBbRVvA8dJgcyL0zRdMamOsyrQV9gRiy1nmWtxgWYAaQ40oxbIk7ADKBbAZiDnBELgmOFQB0OnI09wsShW/rarxHwpPfHhMJieT1yMVXNtaIDMJudsjUGztF56qqKlHXJbj+vy5hDt91R6YkZp+MuSQm94sodL1NJWHF5Z7m50dsKSFReQA4lZGpxhsbTFPcGr+X3gsR1/2234Q5zte1PgEi+SemTJG1vwAAAABJRU5ErkJggg==';
// 操作杠指针
var ControlerCursors = exports.ControlerCursors = {
  'l': '',
  'lt': nwse,
  't': ns,
  'tr': '',
  'r': '',
  'rb': nwse,
  'b': ns,
  'lb': '',
  'rotate': 'pointer',
  'skew': 'pointer',
  // 根据角度旋转指针
  get: function get(dir, rotation) {
    if (rotation === void 0) {
      rotation = 0;
    }
    return __awaiter(this, void 0, void 0, function () {
      var rotationKey, key, cursor, normal, normal;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (dir === 'rotate' || dir === 'skew') return [2 /*return*/, this[dir]];
            rotationKey = Number(rotation.toFixed(2));
            key = rotationKey === 0 ? dir : "".concat(dir, "_").concat(rotationKey);
            cursor = this[key];
            if (!!cursor) return [3 /*break*/, 11];
            if (!(dir === 'l' || dir === 'r' || dir === 't' || dir === 'b')) return [3 /*break*/, 6];
            if (!(rotation === 0)) return [3 /*break*/, 2];
            return [4 /*yield*/, _util["default"].rotateImage(ns, Math.PI / 2)];
          case 1:
            cursor = _a.sent();
            this['l'] = this['r'] = cursor;
            return [3 /*break*/, 5];
          case 2:
            return [4 /*yield*/, this.get(dir, 0)];
          case 3:
            normal = _a.sent();
            return [4 /*yield*/, _util["default"].rotateImage(normal, rotation)];
          case 4:
            cursor = _a.sent();
            this[key] = cursor;
            _a.label = 5;
          case 5:
            return [3 /*break*/, 11];
          case 6:
            if (!(dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb')) return [3 /*break*/, 11];
            if (!(rotation === 0)) return [3 /*break*/, 8];
            return [4 /*yield*/, _util["default"].rotateImage(nwse, Math.PI / 2)];
          case 7:
            cursor = _a.sent();
            return [2 /*return*/, this['tr'] = this['lb'] = cursor];
          case 8:
            return [4 /*yield*/, this.get(dir, 0)];
          case 9:
            normal = _a.sent();
            return [4 /*yield*/, _util["default"].rotateImage(normal, rotation)];
          case 10:
            cursor = _a.sent();
            this[key] = cursor;
            _a.label = 11;
          case 11:
            return [2 /*return*/, cursor];
        }
      });
    });
  }
};
var ControlItemIcons = exports.ControlItemIcons = {
  'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
  'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
};

},{"../lib/util":17,"./eventEmitter":5}],7:[function(require,module,exports){
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

},{"../lib/util":17,"./eventEmitter":5}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EventEmitter", {
  enumerable: true,
  get: function get() {
    return _eventEmitter["default"];
  }
});
Object.defineProperty(exports, "JElementCssStyle", {
  enumerable: true,
  get: function get() {
    return _styleMap["default"];
  }
});
var _styleMap = _interopRequireDefault(require("./styleMap"));
var _eventEmitter = _interopRequireDefault(require("./eventEmitter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./eventEmitter":5,"./styleMap":6}],9:[function(require,module,exports){
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
/**
 * @public
 */
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
    _this.data.on('change', function (e) {
      _this.emit('dataChange', {
        type: 'dataChange',
        target: _this,
        data: e
      });
    });
    return _this;
  }
  Object.defineProperty(JBaseComponent.prototype, "selected", {
    get: function get() {
      return this._selected;
    },
    set: function set(v) {
      this._selected = v;
      this.emit('select', {
        type: 'select',
        target: this,
        selected: v
      });
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

},{"../constant/styleMap":6,"../core/element":11}],10:[function(require,module,exports){
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
// 控制元素移动和矩阵变换
var JControllerItem = exports.JControllerItem = /** @class */function (_super) {
  __extends(JControllerItem, _super);
  function JControllerItem(option) {
    var _this = this;
    option.style = __assign(__assign({
      border: '1px solid rgba(6,155,181,1)',
      backgroundColor: '#fff',
      pointerEvents: 'auto'
    }, option.style), {
      position: 'absolute'
    });
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
    _this.data.width = _this.data.height = _this.size;
    _this.editor = option.editor;
    if (_this.editor) {
      // @ts-ignore
      _this.editor.view.on('mouseup', function (e) {
        if (e.button === 0) _this.onDragEnd(e);
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
      // 如果是左健
      if (e.button === 0) {
        _this.onDragStart(e);
      }
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
    if (rotation === void 0) {
      rotation = 0;
    }
    return __awaiter(this, void 0, void 0, function () {
      var cursor;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, _styleMap.ControlerCursors.get(this.dir, rotation)];
          case 1:
            cursor = _a.sent();
            if (!cursor) return [2 /*return*/];
            // 先简单处理
            this.style.cursor = cursor.includes('\/') ? "url(".concat(cursor, ") 12 12,pointer") : cursor;
            return [2 /*return*/];
        }
      });
    });
  };
  return JControllerItem;
}(_element["default"]);
// 元素大小位置控制器
var JControllerComponent = /** @class */function (_super) {
  __extends(JControllerComponent, _super);
  function JControllerComponent(option) {
    var _this = this;
    option.style = __assign(__assign({
      cursor: 'move',
      backgroundColor: 'transparent'
    }, option.style), {
      pointerEvents: 'none'
    });
    option.dir = 'element';
    option.data = __assign(__assign({}, option.data), {
      zIndex: _styleMap.topZIndex
    });
    _this = _super.call(this, option) || this;
    _this.items = [];
    // 选择框边距
    _this.paddingSize = 1;
    _this.isEditor = false; // 当前关联是否是编辑器
    if (!_this.editor.editable) return _this;
    _this.init(option);
    _this.editor.dom.appendChild(_this.dom);
    _this.resetCursor(_this.transform.rotateZ);
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
        backgroundImage: _styleMap.ControlItemIcons.rotate
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
        backgroundImage: _styleMap.ControlItemIcons.skew
      }),
      transform: {
        translateX: '-50%',
        translateY: '-50%'
      }
    }); // 旋转块 
    if (this.editor) {
      this.editor.on('mousedown', function (e) {
        if (!_this.isEditor || e.button === 2) return; // 不是编辑器，不处理
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
    });
    item.resetCursor(this.transform.rotateZ);
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
    var e_1, _a;
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
      try {
        // 发生了旋转，要处理指针图标
        for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
          var item = _c.value;
          item.resetCursor(this.transform.rotateZ);
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
    var e_2, _a;
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
    this.transform.from({
      rotateZ: 0
    });
  };
  // 绑定到操作的对象
  JControllerComponent.prototype.bind = function (target) {
    var e_3, _a;
    if (!target.editable) return;
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
}(JControllerItem);
var _default = exports["default"] = JControllerComponent;

},{"../constant/styleMap":6,"../lib/util":17,"./element":11}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _eventEmitter = _interopRequireDefault(require("../constant/eventEmitter"));
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
/**
 * @public
 */
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
    _this._id = _this.id || option.id || _util["default"].uuid();
    _this._type = _this.type || option.type || '';
    var nodeType = option.nodeType || 'div';
    // @ts-ignore
    _this._dom = document.createElement(nodeType);
    if (option.editor) _this.editor = option.editor;
    // 样式代理处理
    _this.style = _style["default"].createProxy();
    _this.style.on('change', function (s) {
      _this.setDomStyle(s.name, s.value);
      _this.emit('styleChange', {
        type: 'styleChange',
        data: s,
        target: _this
      });
    });
    // 变换控制的是核心元素
    _this.transform = _transform["default"].createProxy(option.transform, {
      target: _this,
      // 如果指定了只响应某几个属性
      watchProps: option.transformWatchProps
    });
    var dataType = option.dataType || _data.JElementData;
    // @ts-ignore
    _this.data = _data.JElementData.createProxy(new dataType());
    // 如果是组件，不在这里进行数据初始化调用
    _this.initData(option);
    // @ts-ignore
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
      if (e.type === 'mouseup') {
        // 右健则取消选择
        if (e instanceof MouseEvent && e.button === 2) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
      if (e.type === 'contextmenu') {
        e.preventDefault();
        e.stopPropagation();
      }
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
}(_eventEmitter["default"]);
var _default = exports["default"] = JElement;

},{"../constant/data":4,"../constant/eventEmitter":5,"../constant/transform":7,"../core/event":12,"../lib/util":17,"./style":14}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SupportEventNames = void 0;
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
var SupportEventNames = exports.SupportEventNames = ['mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout', 'mousewheel', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'blur', 'change', 'focus', 'drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'contextmenu'];
/**
 * @public
 */
var JEvent = /** @class */function () {
  function JEvent(target) {
    this._eventCache = [];
    if (target) this.target = target;
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
    return events.filter(function (k) {
      return SupportEventNames.includes(k);
    });
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
    if (opt === void 0) {
      opt = false;
    }
    var events = this.normalizeEventNames(name);
    try {
      for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
        var n = events_1_1.value;
        this.target.addEventListener(n, fun, opt);
        this._eventCache.push([n, fun, opt]);
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
    if (opt === void 0) {
      opt = false;
    }
    var events = this.normalizeEventNames(name);
    this._eventCache = this._eventCache.filter(function (item) {
      if (events.length && !events.includes(item[0])) {
        return true;
      }
      if (fun && fun !== item[1] || typeof opt !== 'undefined' && opt !== item[2]) {
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
}();
var _default = exports["default"] = JEvent;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.JFontData = void 0;
var _eventEmitter = _interopRequireDefault(require("../constant/eventEmitter"));
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
var JFontData = exports.JFontData = /** @class */function () {
  function JFontData(family, url, font) {
    this.family = family;
    this.url = url;
    this.font = font;
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
  function JFonts(fonts) {
    var e_1, _a;
    var _this = _super.call(this) || this;
    _this.fontConfigs = new Map();
    _this.fonts = new Map();
    // 初始化默认支持的字体
    if (Array.isArray(fonts)) {
      try {
        for (var fonts_1 = __values(fonts), fonts_1_1 = fonts_1.next(); !fonts_1_1.done; fonts_1_1 = fonts_1.next()) {
          var f = fonts_1_1.value;
          _this.fontConfigs.set(f.family.toLocaleLowerCase(), f);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (fonts_1_1 && !fonts_1_1.done && (_a = fonts_1["return"])) _a.call(fonts_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    } else if (fonts) {
      for (var name_1 in fonts) {
        if (fonts[name_1] && _typeof(fonts[name_1]) === 'object') _this.fontConfigs.set(fonts[name_1].family.toLocaleLowerCase(), fonts[name_1]);
      }
    }
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
    // 系统默认的一些字体支持
    this.fonts.set('arial', new JFontData('Arial', '', new FontFace('Arial', '')));
  };
  // 加载字体
  JFonts.prototype.load = function (name, url) {
    return __awaiter(this, void 0, void 0, function () {
      var font, config, f;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            font = this.get(name);
            if (font) {
              if (font.url && (font.status === 'unloaded' || font.status === 'error')) return [2 /*return*/, font.load()];
              return [2 /*return*/, font];
            }
            if (!url) {
              config = this.fontConfigs.get(name.toLocaleLowerCase());
              // 没有配置支持的字体，则报错
              if (!config) {
                throw Error("\u6CA1\u6709\u652F\u6301\u7684 ".concat(name, " \u5B57\u4F53\u914D\u7F6E"));
              }
              url = config.url;
            }
            font = new JFontData(name, url);
            this.fonts.set(name.toLocaleLowerCase(), font);
            return [4 /*yield*/, font.load()];
          case 1:
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
      name = name.toLocaleLowerCase();
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

},{"../constant/eventEmitter":5}],14:[function(require,module,exports){
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
          if (v === '0' || typeof v === 'undefined') return 0;
          if (_util["default"].isPXNumber(v)) return _util["default"].toNumber(v);
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

},{"../constant/styleMap":6,"../lib/util":17}],15:[function(require,module,exports){
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
var _svg = _interopRequireDefault(require("./components/svg"));
var _element = _interopRequireDefault(require("./core/element"));
var _controller = _interopRequireDefault(require("./core/controller"));
var _fonts = _interopRequireDefault(require("./core/fonts"));
var _util = _interopRequireDefault(require("./lib/util"));
var _event = require("./core/event");
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
/**
 * @public
 */
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
    // @ts-ignore 外层只响应Z轴旋转
    option.transformWatchProps = ['rotateZ', 'scaleX', 'scaleY'];
    _this = _super.call(this, option) || this;
    // 所有支持的类型
    _this.shapes = new Map();
    if (typeof option.container === 'string') option.container = document.getElementById(option.container);
    _this.view = new _element["default"]({
      style: {
        'border': '0',
        'padding': '0',
        'margin': '0',
        'position': 'relative',
        'width': '100%',
        'height': '100%'
      }
    });
    // 字体管理实例
    _this.fonts = new _fonts["default"](option.fonts);
    _this.target.css({
      'overflow': 'hidden'
    });
    if (option.container) option.container.appendChild(_this.view.dom);
    _this.view.addChild(_this.dom);
    // @ts-ignore
    _this.regShape({
      'image': _image["default"],
      'text': _text["default"],
      'svg': _svg["default"]
    });
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
      this.selectedElements.map(function (p) {
        if (p !== el) {
          p.selected = false;
          return p;
        }
      });
      if (el.editable) this.elementController.bind(el);
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
    if (el instanceof _element["default"]) {
      el.off(_event.SupportEventNames);
      el.off(['select', 'styleChange', 'dataChange']);
    }
    return this.target.removeChild(el);
  };
  // 绑定元素事件
  JEditor.prototype.bindElementEvent = function (el) {
    var self = this;
    // 监听样式改变
    el.on(__spreadArray(__spreadArray([], __read(_event.SupportEventNames), false), ['styleChange', 'select', 'dataChange'], false), function (e) {
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
          self.fonts.load(e.data.value)["catch"](function (e) {
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
        if (child.id === id) return child;
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
    if (_typeof(name) === 'object') {
      for (var n in name) {
        this.regShape(n, name[n]);
      }
      return;
    }
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
    // @ts-ignore
    var el = new shape(__assign(__assign({}, option), {
      editor: this,
      type: type
    }));
    return el;
  };
  JEditor.prototype.fromJSON = function (data) {
    var e_3, _a;
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
  };
  return JEditor;
}(_baseComponent["default"]);
var _default = exports["default"] = JEditor;

},{"./components/image":1,"./components/svg":2,"./components/text":3,"./core/baseComponent":9,"./core/controller":10,"./core/element":11,"./core/event":12,"./core/fonts":13,"./lib/util":17}],16:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  util: true,
  JBaseComponent: true,
  JText: true,
  JImage: true,
  JElement: true,
  JEditor: true,
  JData: true,
  JEvent: true,
  JElementStyleDeclaration: true,
  JElementStyleProperty: true
};
Object.defineProperty(exports, "JBaseComponent", {
  enumerable: true,
  get: function get() {
    return _baseComponent["default"];
  }
});
Object.defineProperty(exports, "JData", {
  enumerable: true,
  get: function get() {
    return _data["default"];
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
Object.defineProperty(exports, "JElementStyleDeclaration", {
  enumerable: true,
  get: function get() {
    return _styleMap.JElementStyleDeclaration;
  }
});
Object.defineProperty(exports, "JElementStyleProperty", {
  enumerable: true,
  get: function get() {
    return _styleMap.JElementStyleProperty;
  }
});
Object.defineProperty(exports, "JEvent", {
  enumerable: true,
  get: function get() {
    return _event["default"];
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
Object.defineProperty(exports, "util", {
  enumerable: true,
  get: function get() {
    return _util["default"];
  }
});
var _util = _interopRequireDefault(require("./lib/util"));
var _baseComponent = _interopRequireDefault(require("./core/baseComponent"));
var _text = _interopRequireDefault(require("./components/text"));
var _image = _interopRequireDefault(require("./components/image"));
var _element = _interopRequireDefault(require("./core/element"));
var _editor = _interopRequireDefault(require("./editor"));
var _data = _interopRequireWildcard(require("./constant/data"));
Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _data[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});
var _event = _interopRequireDefault(require("./core/event"));
var _styleMap = require("./constant/styleMap");
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _editor["default"];

},{"./components/image":1,"./components/text":3,"./constant/data":4,"./constant/styleMap":6,"./constant/types":8,"./core/baseComponent":9,"./core/element":11,"./core/event":12,"./editor":15,"./lib/util":17}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
   * @param  el - 目标元素对象
   * @returns  位置对象(top,left)
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
   * @param  p - 一个或多个点
   * @param  rp -  旋转中心点
   * @param  r - 旋转角度
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
  },
  // 本地唯一ID，这个只要保证当前线程唯一即可，非全球唯一
  uuid: function uuid() {
    var time = Date.now();
    var rnd = Math.floor(Math.random() * 10000000000);
    return (time + rnd).toString();
  },
  // 把图片旋转一定角度，返回base64
  rotateImage: function rotateImage(url, rotation) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
          var img = new Image();
          img.onload = function (e) {
            var cvs = document.createElement('canvas');
            cvs.width = img.width;
            cvs.height = img.height;
            var ctx = cvs.getContext('2d');
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            ctx.translate(cvs.width / 2, cvs.height / 2);
            ctx.rotate(rotation);
            ctx.translate(-cvs.width / 2, -cvs.height / 2);
            ctx.drawImage(img, 0, 0);
            var data = cvs.toDataURL();
            resolve(data);
          };
          img.onerror = function (e) {
            reject && reject(e);
          };
          img.src = url;
        })];
      });
    });
  },
  // 请求远程资源
  request: function request(url, option) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        option = option || {};
        return [2 /*return*/, new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest(); //新建XMLHttpRequest对象
          if (option.headers) {
            for (var name_1 in option.headers) {
              request.setRequestHeader(name_1, option.headers[name_1]);
            }
          }
          var params = [];
          if (option.data) {
            for (var name_2 in option.data) {
              params.push("".concat(name_2, "=").concat(encodeURIComponent(option.data[name_2])));
            }
          }
          var method = option.method ? option.method.toUpperCase() : 'GET';
          if (method === 'GET') {
            url += (url.includes('?') ? '&' : '?') + params.join('&');
          }
          request.onreadystatechange = function (e) {
            if (this.readyState === 4) {
              //成功完成
              //判断相应结果：
              if (this.status === 200) {
                resolve(this.responseText);
              } else {
                reject(e);
              }
            }
          };
          //发送请求：
          request.open(method, url);
          request.send(method === 'POST' ? params.join('&') : null);
        })];
      });
    });
  }
};

},{}],18:[function(require,module,exports){
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

},{}]},{},[16])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2NvbXBvbmVudHMvaW1hZ2UuanMiLCJkaXN0L2NvbXBvbmVudHMvc3ZnLmpzIiwiZGlzdC9jb21wb25lbnRzL3RleHQuanMiLCJkaXN0L2NvbnN0YW50L2RhdGEuanMiLCJkaXN0L2NvbnN0YW50L2V2ZW50RW1pdHRlci5qcyIsImRpc3QvY29uc3RhbnQvc3R5bGVNYXAuanMiLCJkaXN0L2NvbnN0YW50L3RyYW5zZm9ybS5qcyIsImRpc3QvY29uc3RhbnQvdHlwZXMuanMiLCJkaXN0L2NvcmUvYmFzZUNvbXBvbmVudC5qcyIsImRpc3QvY29yZS9jb250cm9sbGVyLmpzIiwiZGlzdC9jb3JlL2VsZW1lbnQuanMiLCJkaXN0L2NvcmUvZXZlbnQuanMiLCJkaXN0L2NvcmUvZm9udHMuanMiLCJkaXN0L2NvcmUvc3R5bGUuanMiLCJkaXN0L2VkaXRvci5qcyIsImRpc3QvaW5kZXguanMiLCJkaXN0L2xpYi91dGlsLmpzIiwibm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUMwQkEsSUFBQSxjQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQ0EsSUFBQSxLQUFBLEdBQUEsT0FBQTtBQUE4QyxTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUEzQjlDLElBQUksU0FBUyxHQUFJLFVBQVEsU0FBSyxTQUFTLElBQU0sWUFBWTtFQUNyRCxJQUFJLGNBQWEsR0FBRyxTQUFBLGNBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNoQyxjQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFDaEM7TUFBRSxTQUFTLEVBQUU7SUFBRyxDQUFDLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtNQUFFLENBQUMsQ0FBQyxTQUFT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LEVBQUUsTUFBTSxFQUFFO0lBQ3ZELFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzFGLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO01BQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFBRTtJQUM3RyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekUsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELElBQUksV0FBVyxHQUFJLFVBQVEsU0FBSyxXQUFXLElBQUssVUFBVSxPQUFPLEVBQUUsSUFBSSxFQUFFO0VBQ3JFLElBQUksQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFLENBQUM7TUFBRSxJQUFJLEVBQUUsU0FBQSxLQUFBLEVBQVc7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUUsQ0FBQztNQUFFLElBQUksRUFBRSxFQUFFO01BQUUsR0FBRyxFQUFFO0lBQUcsQ0FBQztJQUFFLENBQUM7SUFBRSxDQUFDO0lBQUUsQ0FBQztJQUFFLENBQUM7RUFDaEgsT0FBTyxDQUFDLEdBQUc7SUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQUUsQ0FBQyxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVc7SUFBRSxPQUFPLElBQUk7RUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3hKLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRTtJQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUU7TUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFFLENBQUM7RUFBRTtFQUNqRSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDZCxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO01BQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztNQUM1SixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUN2QyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVCxLQUFLLENBQUM7UUFBRSxLQUFLLENBQUM7VUFBRSxDQUFDLEdBQUcsRUFBRTtVQUFFO1FBQ3hCLEtBQUssQ0FBQztVQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7VUFBRSxPQUFPO1lBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBRSxJQUFJLEVBQUU7VUFBTSxDQUFDO1FBQ3ZELEtBQUssQ0FBQztVQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7VUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUFFO1FBQ3hDLEtBQUssQ0FBQztVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUFFO1FBQ3hDO1VBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxHQUFHLENBQUM7WUFBRTtVQUFVO1VBQzNHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUFFO1VBQU87VUFDckYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUUsQ0FBQyxHQUFHLEVBQUU7WUFBRTtVQUFPO1VBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQUU7VUFBTztVQUNsRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7VUFBRTtNQUN0QjtNQUNBLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO01BQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUFFLENBQUMsR0FBRyxDQUFDO0lBQUUsQ0FBQyxTQUFTO01BQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQUU7SUFDekQsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENB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O1FBQ1o7TUFDSixDQUFDLENBQUM7TUFDRixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRTtRQUMzQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7TUFDckIsQ0FBQyxDQUFDO01BQ0YsTUFBTSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxVQUFVLENBQUMsRUFBRTtRQUMvQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7TUFDdkIsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDM0M7SUFDQSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7SUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxJQUFJLENBQUMsR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUc7SUFDNUMsSUFBSSxDQUFDLEdBQUcsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHO0lBQzdDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSTtJQUNyQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUk7SUFDdEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDNUMsS0FBSyxDQUFDLElBQUksR0FBRyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxD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QUFDLENBQUMsQ0FBQztFQUN4RixDQUFDO0FBQ0wsQ0FBQyxDQUFFLENBQUM7QUFDSixJQUFJLFNBQVMsR0FBSSxVQUFRLFNBQUssU0FBUyxJQUFLLFVBQVUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0VBQ3JGLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRTtJQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUU7TUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQUUsQ0FBQyxDQUFDO0VBQUU7RUFDM0csT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzFGLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO01BQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFBRTtJQUM3RyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekUsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELElBQUksV0FBVyxHQUFJLFVBQVEsU0FBSyxXQUFXLElBQUssVUFBVSxPQUFPLEVBQUUsSUFBSSxFQUFFO0VBQ3JFLElBQUksQ0FBQyxHQUFHO01BQUUsS0FBSyxFQUFFLENBQUM7TUFBRSxJQUFJLEVBQUUsU0FBQSxLQUFBLEVBQVc7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUUsQ0FBQztNQUFFLElBQUksRUFBRSxFQUFFO01BQUUsR0FBRyxFQUFFO0lBQUcsQ0FBQztJQUFFLENBQUM7SUFBRSxDQUFDO0lBQUUsQ0FBQztJQUFFLENBQUM7RUFDaEgsT0FBTyxDQUFDLEdBQUc7SUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQUUsQ0FBQyxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVc7SUFBRSxPQUFPLElBQUk7RUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3hKLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRTtJQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUU7TUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFFLENBQUM7RUFBRTtFQUNqRSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDZCxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO01BQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztNQUM1SixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztNQUN2QyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVCxLQUFLLENBQUM7UUFBRSxLQUFLLENBQUM7VUFBRSxDQUFDLEdBQUcsRUFBRTtVQUFFO1FBQ3hCLEtBQUssQ0FBQztVQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7VUFBRSxPQUFPO1lBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBRSxJQUFJLEVBQUU7VUFBTSxDQUFDO1FBQ3ZELEtBQUssQ0FBQztVQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7VUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUFFO1FBQ3hDLEtBQUssQ0FBQztVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUFFO1FBQ3hDO1VBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxHQUFHLENBQUM7WUFBRTtVQUFVO1VBQzNHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUFFO1VBQU87VUFDckYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUUsQ0FBQyxHQUFHLEVBQUU7WUFBRTtVQUFPO1VBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQUU7VUFBTztVQUNsRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMs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VUFBRSxPQUFPO1lBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBRSxJQUFJLEVBQUU7VUFBTSxDQUFDO1FBQ3ZELEtBQUssQ0FBQztVQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7VUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUFFO1FBQ3hDLEtBQUssQ0FBQztVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUFFO1FBQ3hDO1VBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxHQUFHLENBQUM7WUFBRTtVQUFVO1VBQzNHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUFFO1VBQU87VUFDckYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUUs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QUFTLENBQUMsS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDMUYsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQUU7SUFBRTtJQUM3RixTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUU7TUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUFFO0lBQzdHLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUN6RSxDQUFDLENBQUM7QUFDTixDQUFDO0FBQ0QsSUFBSSxXQUFXLEdBQUksVUFBUSxTQUFLLFdBQVcsSUFBSyxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUU7RUFDckUsSUFBSSxDQUFDLEdBQUc7TUFBRSxLQUFLLEVBQUUsQ0FBQztNQUFFLElBQUksRUFBRSxTQUFBLEtBQUEsRUFBVztRQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBRSxDQUFDO01BQUUsSUFBSSxFQUFFLEVBQUU7TUFBRSxHQUFHLEVBQUU7SUFBRyxDQUFDO0lBQUUsQ0FBQztJQUFFLENBQUM7SUFBRSxDQUFDO0lBQUUsQ0FBQztFQUNoSCxPQUFPLENBQUMsR0FBRztJQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFBRSxDQUFDLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsWUFBVztJQUFFLE9BQU8sSUFBSTtFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDeEosU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFO0lBQUUsT0FBTyxVQUFVLENBQUMsRUFBRTtNQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQUUsQ0FBQztFQUFFO0VBQ2pFLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtJQUNkLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUM7SUFDN0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUk7TUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO01BQzVKLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO01BQ3ZDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNULEtBQUssQ0FBQztRQUFFLEtBQUssQ0FBQztVQUFFLENBQUMsR0FBRyxFQUFFO1VBQUU7UUFDeEIsS0FBSyxDQUFDO1VBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtVQUFFLE9BQU87WUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUFFLElBQUksRUFBRTtVQUFNLENBQUM7UUFDdkQsS0FBSyxDQUFDO1VBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtVQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1VBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1VBQUU7UUFDeEMsS0FBSyxDQUFDO1VBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7VUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQUU7UUFDeEM7VUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFBRSxDQUFDLEdBQUcsQ0FBQztZQUFFO1VBQVU7VUFDM0csSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQUU7VUFBTztVQUNyRixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBRSxDQUFDLEdBQUcsRUFBRTtZQUFFO1VBQU87VUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFBRTtVQUFPO1VBQ2xFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUFFO01BQ3RCO01BQ0EsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQUUsQ0FBQyxHQUFHLENBQUM7SUFBRSxDQUFDLFNBQVM7TUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFBRTtJQUN6RCxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQUUsT0FBTztNQUFFLEtBQUss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S0FBQSxFQUFBLE9BQUEsV0FBQSxHQUFBO0VBQUEsSUFBQSxHQUFBLGtCQUFBLEdBQUE7RUFBQSxJQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxZQUFBLEVBQUEsR0FBQTtFQUFBLElBQUEsR0FBQSxJQUFBLE9BQUEsSUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLEtBQUEsQ0FBQSxHQUFBO0VBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsR0FBQTtJQUFBLFVBQUE7SUFBQSxHQUFBLFdBQUEsSUFBQTtNQUFBLE9BQUEsS0FBQSxDQUFBLEdBQUE7SUFBQTtFQUFBO0FBQUE7QUFGQSxJQUFBLE1BQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFDQSxJQUFBLFNBQUEsR0FBQSxPQUFBO0FBRUEsSUFBQSxNQUFBLEdBQUEsT0FBQTtBQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLE9BQUEsV0FBQSxHQUFBO0VBQUEsSUFBQSxHQUFBLGtCQUFBLEdBQUE7RUFBQSxJQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxZQUFBLEVBQUEsR0FBQTtFQUFBLElBQUEsR0FBQSxJQUFBLE9BQUEsSUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLE1BQUEsQ0FBQSxHQUFBO0VBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsR0FBQTtJQUFBLFVBQUE7SUFBQSxHQUFBLFdBQUEsSUFBQTtNQUFBLE9BQUEsTUFBQSxDQUFBLEdBQUE7SUFBQTtFQUFBO0FBQUE7QUFBaUMsU0FBQSx5QkFBQSxDQUFBLDZCQUFBLE9BQUEsbUJBQUEsQ0FBQSxPQUFBLE9BQUEsSUFBQSxDQUFBLE9BQUEsT0FBQSxZQUFBLHdCQUFBLFlBQUEseUJBQUEsQ0FBQSxXQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUE7QUFBQSxTQUFBLHdCQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxTQUFBLENBQUEsZUFBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLDBCQUFBLENBQUEsc0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSx3QkFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBLFNBQUEsVUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsSUFBQSxNQUFBLENBQUEsd0JBQUEsV0FBQSxDQUFBLElBQUEsQ0FBQSxvQkFBQSxDQUFBLElBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUFBQSxJQUFBLFFBQUEsR0FBQSxPQUFBLGNBRWxCLGtCQUFPOzs7Ozs7Ozs7O0FDWnRCLElBQUksU0FBUyxHQUFJLFVBQVEsU0FBSyxTQUFTLElBQUssVUFBVSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7RUFDckYsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFO0lBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRTtNQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFBRSxDQUFDLENBQUM7RUFBRTtFQUMzRyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7SUFDdkQsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDMUYsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQUU7SUFBRTtJQUM3RixTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUU7TUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUFFO0lBQzdHLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUN6RSxDQUFDLENBQUM7QUFDTixDQUFDO0FBQ0QsSUFBSSxXQUFXLEdBQUksVUFBUSxTQUFLLFdBQVcsSUFBSyxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUU7RUFDckUsSUFBSSxDQUFDLEdBQUc7TUFBRSxLQUFLLEVBQUUsQ0FBQztNQUFFLElBQUksRUFBRSxTQUFBLEtBQUEsRUFBVztRQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBRSxDQUFDO01BQUUsSUFBSSxFQUFFLEVBQUU7TUFBRSxHQUFHLEVBQUU7SUFBRyxDQUFDO0lBQUUsQ0FBQztJQUFFLENBQUM7SUFBRSxDQUFDO0lBQUUsQ0FBQztFQUNoSCxPQUFPLENBQUMsR0FBRztJQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFBRSxDQUFDLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsWUFBVztJQUFFLE9BQU8sSUFBSTtFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDeEosU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFO0lBQUUsT0FBTyxVQUFVLENBQUMsRUFBRTtNQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQUUsQ0FBQztFQUFFO0VBQ2pFLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtJQUNkLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUM7SUFDN0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUk7TUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO01BQzVKLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO01BQ3ZDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNULEtBQUssQ0FBQztRQUFFLEtBQUssQ0FBQztVQUFFLENBQUMsR0FBRyxFQUFFO1VBQUU7UUFDeEIsS0FBSyxDQUFDO1VBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtVQUFFLE9BQU87WUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUFFLElBQUksRUFBRTtVQUFNLENBQUM7UUFDdkQsS0FBSyxDQUFDO1VBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtVQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1VBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1VBQUU7UUFDeEMsS0FBSyxDQUFDO1VBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7VUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQUU7UUFDeEM7VUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFBRSxDQUFDLEdBQUcsQ0FBQztZQUFFO1VBQVU7VUFDM0csSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQUU7VUFBTztVQUNyRixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBRSxDQUFDLEdBQUcsRUFBRTtZQUFFO1VBQU87VUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFBRTtVQUFPO1VBQ2xFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUFFO01BQ3RCO01BQ0EsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQUUsQ0FBQyxH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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvYmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgeyBKSW1hZ2VEYXRhIH0gZnJvbSAnLi4vY29uc3RhbnQvZGF0YSc7XG4vKipcbiAqIOWbvuWDj+e7hOS7tuexuyBKSW1hZ2XvvIznu6fmib/kuo7ln7rnoYDnu4Tku7YgQmFzZeOAglxuICogQHB1YmxpY1xuICovXG52YXIgSkltYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKSW1hZ2UsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogSkltYWdl57uE5Lu25p6E6YCg5Ye95pWw44CCXG4gICAgICogQHBhcmFtIG9wdGlvbiAtIOWbvuWDj+mAiemhue+8jOWMheaLrCB1cmwsIHNyYyDnrYnjgIJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBKSW1hZ2Uob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uKSwgeyBub2RlVHlwZTogJ2ltZycsIGRhdGFUeXBlOiBKSW1hZ2VEYXRhIH0pKSB8fCB0aGlzO1xuICAgICAgICAvLyDlm77lg4/liqDovb3lrozmiJDml7bop6blj5EgJ2xvYWQnIOS6i+S7tlxuICAgICAgICBfdGhpcy50YXJnZXQuZG9tLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5lbWl0KCdsb2FkJywgZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIOWbvuWDj+WKoOi9vemUmeivr+aXtuinpuWPkSAnZXJyb3InIOS6i+S7tlxuICAgICAgICBfdGhpcy50YXJnZXQuZG9tLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8g5YWB6K646Leo5Z+f6I635Y+W5Zu+5YOP6LWE5rqQ77yI6YG/5YWNQ09SU+mXrumimO+8iVxuICAgICAgICBfdGhpcy50YXJnZXQuYXR0cignY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJyk7XG4gICAgICAgIC8vICdzcmMnIOWxnuaAp+WPmOWMluaYoOWwhOWIsCBzdHlsZVxuICAgICAgICBfdGhpcy5kYXRhLndhdGNoKFtcbiAgICAgICAgICAgICdzcmMnXG4gICAgICAgIF0sIHtcbiAgICAgICAgICAgIC8vIOiuvue9riAnc3JjJyDlsZ7mgKdcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuZG9tLnNyYyA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g6I635Y+WICdzcmMnIOWxnuaAp1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy50YXJnZXQuZG9tLnNyYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWmguaenOWcqOmAiemhueS4reaPkOS+m++8jOiuvue9riAnc3JjJyDmiJYgJ3VybCcg5bGe5oCnXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdmFyIHNyYyA9IG9wdGlvbi51cmwgfHwgb3B0aW9uLnNyYztcbiAgICAgICAgaWYgKHNyYylcbiAgICAgICAgICAgIF90aGlzLmRhdGEuc3JjID0gc3JjO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGltZ+WFg+e0oOeahEpTT07ooajnjrDlvaLlvI/vvIzljIXmi6wnc3JjJ+etieWxnuaAp+OAglxuICAgICAqIEBwYXJhbSBwcm9wcyAtIOW6j+WIl+WMluaXtumcgOimgeWMheaLrOeahOWxnuaAp1xuICAgICAqIEByZXR1cm5zIEpTT07lr7nosaHvvIzooajnpLppbWflhYPntKDjgIJcbiAgICAgKi9cbiAgICBKSW1hZ2UucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkgeyBwcm9wcyA9IFtdOyB9XG4gICAgICAgIHByb3BzLnB1c2goJ3NyYycpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS50b0pTT04uY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgfTtcbiAgICByZXR1cm4gSkltYWdlO1xufShCYXNlKSk7XG5leHBvcnQgZGVmYXVsdCBKSW1hZ2U7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvYmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG5pbXBvcnQgeyBKU3ZnRGF0YSB9IGZyb20gJy4uL2NvbnN0YW50L2RhdGEnO1xudmFyIEpTdmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpTdmcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSlN2ZyhvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IGRhdGFUeXBlOiBKU3ZnRGF0YSB9KSkgfHwgdGhpcztcbiAgICAgICAgLy8g5bGe5oCn5Y+Y5YyW5pig5bCE5Yiwc3R5bGVcbiAgICAgICAgX3RoaXMuZGF0YS53YXRjaChbXG4gICAgICAgICAgICAndXJsJywgJ3N2ZycsICdzcmMnXG4gICAgICAgIF0sIHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSAndXJsJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2FkKGl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSAnc3JjJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kYXRhLnVybCA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0ubmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmRvbS5pbm5lckhUTUwgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLy8g5pu/5o2i5Y+Y6YePXG4gICAgSlN2Zy5wcm90b3R5cGUucmVuZGVyU3ZnID0gZnVuY3Rpb24gKHN2Zykge1xuICAgICAgICB0aGlzLmRhdGEubWFwKGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgc3ZnID0gc3ZnLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIuY29uY2F0KG5hbWUsIFwiXFxcXH1cIiksICdnJyksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfTtcbiAgICAvLyDliqDovb1zdmflhoXlrrlcbiAgICBKU3ZnLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBpZiAodXJsID09PSB2b2lkIDApIHsgdXJsID0gdGhpcy5kYXRhLnVybDsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3ZnO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB1dGlsLnJlcXVlc3QodXJsKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdmcgPSBzdmc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSlN2Zy5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7IHByb3BzID0gW107IH1cbiAgICAgICAgcHJvcHMucHVzaCgnc3JjJyk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnRvSlNPTi5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICB9O1xuICAgIHJldHVybiBKU3ZnO1xufShCYXNlKSk7XG5leHBvcnQgZGVmYXVsdCBKU3ZnO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL2Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgSlRleHREYXRhIH0gZnJvbSAnLi4vY29uc3RhbnQvZGF0YSc7XG5pbXBvcnQgeyB0b3BaSW5kZXggfSBmcm9tICcuLi9jb25zdGFudC9zdHlsZU1hcCc7XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi4vY29yZS9lbGVtZW50Jztcbi8qKlxuICog5paH5pys57uE5Lu257G7IEpUZXh077yM57un5om/5LqO5Z+656GA57uE5Lu2IEJhc2XjgIJcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEpUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKVGV4dCwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBKVGV4dOe7hOS7tuaehOmAoOWHveaVsOOAglxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgXG4gICAgICogY29uc3QgdGV4dEluc3RhbmNlID0gbmV3IEpUZXh0KHtcbiAgICAgKiAgIHRleHQ6ICdIZWxsbyBXb3JsZCcsXG4gICAgICogICBzdHlsZToge1xuICAgICAqICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICogICAgIGZvbnRTaXplOiAnMThweCdcbiAgICAgKiAgIH1cbiAgICAgKiB9KTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gb3B0aW9uIC0g5paH5pys57uE5Lu26YCJ6aG577yM5YyF5ousIHRleHQsIHN0eWxlIOetieOAglxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEpUZXh0KG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gX19hc3NpZ24oeyBmb250RmFtaWx5OiAnQXJpYWwnLCB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6IDIyLCBmb250V2VpZ2h0OiAnbm9ybWFsJywgZm9udFN0eWxlOiAnbm9ybWFsJywgd29yZEJyZWFrOiBcImtlZXAtYWxsXCIsIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIiB9LCBvcHRpb24uc3R5bGUpO1xuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IG5vZGVUeXBlOiAnZGl2JywgZGF0YVR5cGU6IEpUZXh0RGF0YSB9KSkgfHwgdGhpcztcbiAgICAgICAgLy8gJ3RleHQnIOWxnuaAp+WPmOWMluaYoOWwhOWIsCBpbm5lclRleHRcbiAgICAgICAgX3RoaXMuZGF0YS53YXRjaChbXG4gICAgICAgICAgICAndGV4dCdcbiAgICAgICAgXSwge1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5kb20uaW5uZXJUZXh0ID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRhcmdldC5kb20uaW5uZXJUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5aaC5p6c5Zyo6YCJ6aG55Lit5o+Q5L6b77yM6K6+572uICd0ZXh0JyDlsZ7mgKdcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB2YXIgdGV4dCA9IG9wdGlvbi50ZXh0O1xuICAgICAgICBpZiAodGV4dClcbiAgICAgICAgICAgIF90aGlzLmRhdGEudGV4dCA9IHRleHQ7XG4gICAgICAgIC8vIOa3u+WKoOWPjOWHu+S6i+S7tuebkeWQrOWZqO+8jOi/m+WFpee8lui+keeKtuaAgVxuICAgICAgICBfdGhpcy5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5lZGl0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDmt7vliqDpgInmi6nkuovku7bnm5HlkKzlmajvvIzpgIDlh7rnvJbovpHnirbmgIFcbiAgICAgICAgX3RoaXMub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgSlRleHQuVGV4dENvbnRyb2xDYWNoZS5zZXQoX3RoaXMuaWQsIF90aGlzKTsgLy8g57yT5a2Y6LW35p2lXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6L+b5YWl5paH5pys57yW6L6R54q25oCBXG4gICAgICovXG4gICAgSlRleHQucHJvdG90eXBlLmVkaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5lZGl0YWJsZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGVkaXRFbCA9IHRoaXMuZWRpdG9yLnRleHRFZGl0RWxlbWVudDtcbiAgICAgICAgaWYgKCFlZGl0RWwpIHtcbiAgICAgICAgICAgIGVkaXRFbCA9IHRoaXMuZWRpdG9yLnRleHRFZGl0RWxlbWVudCA9IG5ldyBKRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbm9kZVR5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc0cHgnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiB0b3BaSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogJ2JvdGgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlZGl0RWwub24oJ2JsdXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlZGl0RWwub24oJ2NsaWNrIGRibGNsaWNrIG1vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3IuZG9tLmFwcGVuZENoaWxkKGVkaXRFbC5kb20pO1xuICAgICAgICB9XG4gICAgICAgIGVkaXRFbC5kb20udmFsdWUgPSB0aGlzLmRhdGEudGV4dDtcbiAgICAgICAgZWRpdEVsLmF0dHIoJ2RhdGEtdGFyZ2V0JywgdGhpcy5pZCk7XG4gICAgICAgIHZhciB3ID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEud2lkdGgpICogMS41O1xuICAgICAgICB2YXIgaCA9IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmhlaWdodCkgKiAxLjI7XG4gICAgICAgIHZhciBzdHlsZSA9IHt9O1xuICAgICAgICBzdHlsZS53aWR0aCA9IE1hdGgubWF4KHcsIDEwMCkgKyAncHgnO1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBNYXRoLm1heChoLCAxMDApICsgJ3B4JztcbiAgICAgICAgc3R5bGUudG9wID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEudG9wKSAtIDQ7XG4gICAgICAgIHN0eWxlLmxlZnQgPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5sZWZ0KSAtIDQ7XG4gICAgICAgIHN0eWxlLmZvbnRTaXplID0gdGhpcy5zdHlsZS5mb250U2l6ZTtcbiAgICAgICAgc3R5bGUuZm9udEZhbWlseSA9IHRoaXMuc3R5bGUuZm9udEZhbWlseTtcbiAgICAgICAgc3R5bGUuZm9udFdlaWdodCA9IHRoaXMuc3R5bGUuZm9udFdlaWdodDtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB1dGlsLmNzcyhlZGl0RWwsIHN0eWxlKTtcbiAgICAgICAgZWRpdEVsLmRvbS5mb2N1cygpOyAvLyDov5vlhaXmjqfku7ZcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOmAgOWHuuaWh+acrOe8lui+keeKtuaAgVxuICAgICAqL1xuICAgIEpUZXh0LnByb3RvdHlwZS5jbG9zZUVkaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlZGl0RWwgPSB0aGlzLmVkaXRvci50ZXh0RWRpdEVsZW1lbnQ7XG4gICAgICAgIGlmICghZWRpdEVsIHx8ICFlZGl0RWwudmlzaWJsZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8g57yW6L6R55qE5piv5b2T5YmN5YWD57Sg77yM5omN6YeH55So5a6D55qE5YC8XG4gICAgICAgIHZhciBpZCA9IGVkaXRFbC5hdHRyKCdkYXRhLXRhcmdldCcpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gSlRleHQuVGV4dENvbnRyb2xDYWNoZS5nZXQoaWQpO1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSlRleHQpIHtcbiAgICAgICAgICAgIHRhcmdldC5kYXRhLnRleHQgPSBlZGl0RWwuZG9tLnZhbHVlO1xuICAgICAgICAgICAgZWRpdEVsLmRhdGEudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgZWRpdEVsLmRvbS52YWx1ZSA9ICcnOyAvLyDnva7nqbpcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRGl25YWD57Sg55qESlNPTuihqOeOsOW9ouW8j++8jOWMheaLrCAndGV4dCcg562J5bGe5oCnXG4gICAgICogQHBhcmFtIHByb3BzIC0g6KaB5bqP5YiX5YyW55qE5bGe5oCn5YiX6KGoXG4gICAgICogQHJldHVybnMgSlNPTuWvueixoe+8jOihqOekumRpduWFg+e0oFxuICAgICAqL1xuICAgIEpUZXh0LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSBbXTsgfVxuICAgICAgICBwcm9wcy5wdXNoKCd0ZXh0Jyk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnRvSlNPTi5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOenu+mZpCBKVGV4dCDlrp7kvotcbiAgICAgKi9cbiAgICBKVGV4dC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgSlRleHQuVGV4dENvbnRyb2xDYWNoZS5kZWxldGUodGhpcy5pZCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgLy8g5omA5pyJIEpUZXh0IOWunuS+i+eahOe8k+WtmFxuICAgIEpUZXh0LlRleHRDb250cm9sQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgcmV0dXJuIEpUZXh0O1xufShCYXNlKSk7XG5leHBvcnQgZGVmYXVsdCBKVGV4dDtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgRXZlbnRFbWl0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInO1xuLyoqXG4gKiBKRGF0YSDnsbvvvJrmj5DkvpvkuobkuIDnp43mlrnlvI/mnaXlpITnkIblkoznrqHnkIbmlbDmja5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIEpEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRGF0YSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRGF0YShkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhID09PSB2b2lkIDApIHsgZGF0YSA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIC8qKiDnlKjkuo7lrZjmlL7mlbDmja7nmoTlr7nosaEgKi9cbiAgICAgICAgX3RoaXMuZGF0YSA9IHt9O1xuICAgICAgICAvKiog5a2Y5pS+5pWw5o2u5Y+Y5YyW55qE55uR5ZCs5ZmoICovXG4gICAgICAgIF90aGlzLndhdGNoZXIgPSBuZXcgTWFwKCk7XG4gICAgICAgIF90aGlzLmZyb20oZGF0YSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLy8g55uR5o6n5p+Q5Liq5bGe5oCn5Y+Y5YyWXG4gICAgSkRhdGEucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gKG5hbWUsIHdhdGNoZXIpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWVfMSA9IF9fdmFsdWVzKG5hbWUpLCBuYW1lXzFfMSA9IG5hbWVfMS5uZXh0KCk7ICFuYW1lXzFfMS5kb25lOyBuYW1lXzFfMSA9IG5hbWVfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuYW1lXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2F0Y2gobiwgd2F0Y2hlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lXzFfMSAmJiAhbmFtZV8xXzEuZG9uZSAmJiAoX2EgPSBuYW1lXzEucmV0dXJuKSkgX2EuY2FsbChuYW1lXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2F0Y2hlcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy53YXRjaGVyLmhhcyhuYW1lKSlcbiAgICAgICAgICAgIHdhdGNoZXMgPSB0aGlzLndhdGNoZXIuZ2V0KG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlci5zZXQobmFtZSwgd2F0Y2hlcyk7XG4gICAgICAgIH1cbiAgICAgICAgd2F0Y2hlcy5wdXNoKHdhdGNoZXIpO1xuICAgICAgICB0aGlzLmRhdGFbbmFtZV0gJiYgdGhpcy5wcm9wZXJ0eUNoYW5nZShuYW1lKTsgLy8g6Kem5Y+R5LiA5qyhXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8g5bGe5oCn5pS55Y+YXG4gICAgSkRhdGEucHJvdG90eXBlLnByb3BlcnR5Q2hhbmdlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRoaXMuZGF0YVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5kYXRhW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3YXRjaGVzID0gdGhpcy53YXRjaGVyLmdldChuYW1lKTtcbiAgICAgICAgaWYgKHdhdGNoZXMgJiYgd2F0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgd2F0Y2hlc18xID0gX192YWx1ZXMod2F0Y2hlcyksIHdhdGNoZXNfMV8xID0gd2F0Y2hlc18xLm5leHQoKTsgIXdhdGNoZXNfMV8xLmRvbmU7IHdhdGNoZXNfMV8xID0gd2F0Y2hlc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHdhdGNoZXNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB3ICYmIHcuc2V0ICYmIHcuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXRjaGVzXzFfMSAmJiAhd2F0Y2hlc18xXzEuZG9uZSAmJiAoX2EgPSB3YXRjaGVzXzEucmV0dXJuKSkgX2EuY2FsbCh3YXRjaGVzXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g6K+75Y+W5bGe5oCnXG4gICAgSkRhdGEucHJvdG90eXBlLmdldFByb3BlcnR5ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGVfMywgX2E7XG4gICAgICAgIHZhciB3YXRjaGVzID0gdGhpcy53YXRjaGVyLmdldChuYW1lKTtcbiAgICAgICAgaWYgKHdhdGNoZXMgJiYgd2F0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgd2F0Y2hlc18yID0gX192YWx1ZXMod2F0Y2hlcyksIHdhdGNoZXNfMl8xID0gd2F0Y2hlc18yLm5leHQoKTsgIXdhdGNoZXNfMl8xLmRvbmU7IHdhdGNoZXNfMl8xID0gd2F0Y2hlc18yLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHdhdGNoZXNfMl8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHcgJiYgdy5nZXQgJiYgdy5nZXQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdiAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8zXzEpIHsgZV8zID0geyBlcnJvcjogZV8zXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhdGNoZXNfMl8xICYmICF3YXRjaGVzXzJfMS5kb25lICYmIChfYSA9IHdhdGNoZXNfMi5yZXR1cm4pKSBfYS5jYWxsKHdhdGNoZXNfMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW25hbWVdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog5LuO5a+56LGh5Lit5a+85YWl5pWw5o2u5Yiw5b2T5YmN5a6e5L6LXG4gICAgICogQHBhcmFtIGRhdGEgLSDpnIDlr7zlhaXnmoTmlbDmja7lr7nosaFcbiAgICAgKiBAcmV0dXJucyDov5Tlm57lvZPliY0gSkRhdGEg5a6e5L6LXG4gICAgICovXG4gICAgSkRhdGEucHJvdG90eXBlLmZyb20gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhKVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvLyDpgY3ljoZcbiAgICBKRGF0YS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGZ1bikge1xuICAgICAgICB2YXIgZV80LCBfYTtcbiAgICAgICAgdmFyIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5kYXRhKTtcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcHNfMSA9IF9fdmFsdWVzKHByb3BzKSwgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCk7ICFwcm9wc18xXzEuZG9uZTsgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZV8yID0gcHJvcHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXzJdID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpc1tuYW1lXzJdID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gZnVuICYmIGZ1bihuYW1lXzIsIHRoaXNbbmFtZV8yXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJldCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZV8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXNbbmFtZV8yXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfNF8xKSB7IGVfNCA9IHsgZXJyb3I6IGVfNF8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc18xXzEgJiYgIXByb3BzXzFfMS5kb25lICYmIChfYSA9IHByb3BzXzEucmV0dXJuKSkgX2EuY2FsbChwcm9wc18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV80KSB0aHJvdyBlXzQuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog5a+85Ye65pWw5o2u5Li6IEpTT04g5a+56LGhXG4gICAgICogQHJldHVybnMg6L+U5ZueIEpTT04g5a+56LGhXG4gICAgICovXG4gICAgSkRhdGEucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICB0aGlzLm1hcChmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIG9ialtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIC8vIOeUn+aIkOaVsOaNrkRhdGFcbiAgICBKRGF0YS5jcmVhdGVQcm94eSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIOS7o+eQhuWkhOeQhlxuICAgICAgICB2YXIgcHJveHkgPSBuZXcgUHJveHkoZGF0YSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGFyZ2V0W3BdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuZ2V0UHJvcGVydHkocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnByb3BlcnR5Q2hhbmdlKHAsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtwXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH07XG4gICAgcmV0dXJuIEpEYXRhO1xufShFdmVudEVtaXRlcikpO1xuZXhwb3J0IGRlZmF1bHQgSkRhdGE7XG4vKipcbiAqIOWFg+e0oOeahOWfuuehgOaVsOaNruexu1xuICogQHB1YmxpY1xuICovXG52YXIgSkVsZW1lbnREYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudERhdGEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnREYXRhKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCkgeyBkYXRhID0ge307IH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGRhdGEpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBKRWxlbWVudERhdGE7XG59KEpEYXRhKSk7XG5leHBvcnQgeyBKRWxlbWVudERhdGEgfTtcbi8qKlxuICog5Zu+54mH5YWD57Sg55qE5pWw5o2u57G777yM57un5om/6Ieq5YWD57Sg55qE5Z+656GA5pWw5o2u57G7IEpFbGVtZW50RGF0YVxuICogQHB1YmxpY1xuICovXG52YXIgSkltYWdlRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkltYWdlRGF0YSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKSW1hZ2VEYXRhKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBKSW1hZ2VEYXRhO1xufShKRWxlbWVudERhdGEpKTtcbmV4cG9ydCB7IEpJbWFnZURhdGEgfTtcbi8qKlxuICogc3ZnXG4gKiBAcHVibGljXG4gKi9cbnZhciBKU3ZnRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSlN2Z0RhdGEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSlN2Z0RhdGEoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEpTdmdEYXRhO1xufShKSW1hZ2VEYXRhKSk7XG5leHBvcnQgeyBKU3ZnRGF0YSB9O1xuLyoqXG4gKiDmlofmnKzlhYPntKDnmoTmlbDmja7nsbvvvIznu6fmib/oh6rlhYPntKDnmoTln7rnoYDmlbDmja7nsbsgSkVsZW1lbnREYXRhXG4gKiBAcHVibGljXG4gKi9cbnZhciBKVGV4dERhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpUZXh0RGF0YSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKVGV4dERhdGEoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEpUZXh0RGF0YTtcbn0oSkVsZW1lbnREYXRhKSk7XG5leHBvcnQgeyBKVGV4dERhdGEgfTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgRXZlbnRFbWl0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMyc7XG4vKipcbiAqIEV2ZW50RW1pdHRlciDnsbvvvIznu6fmib/oh6ogJ2V2ZW50ZW1pdHRlcjMnIOaooeWdl+eahCBFdmVudEVtaXRlciDnsbvjgIJcbiAqIOeUqOS6jui/m+ihjOS6i+S7tueahOWPkeW4g+S4juiuoumYheOAglxuICogQHB1YmxpY1xuICovXG52YXIgRXZlbnRFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFdmVudEVtaXR0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOengeacieaWueazle+8jOeUqOS6juinhOiMg+WMluS6i+S7tuWQjVxuICAgICAqIEBwYXJhbSBuYW1lIC0g5Y+v5Lul5piv5a2X56ym5Liy44CB56ym5Y+35oiW5a2X56ym5Liy5pWw57uEXG4gICAgICogQHJldHVybnMg6L+U5Zue56ym5Y+35oiW5a2X56ym5Liy5pWw57uEXG4gICAgICovXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ub3JtYWxpemVFdmVudE5hbWVzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShuYW1lKSA/IG5hbWUgOiBbbmFtZV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDkuLrnu5nlrprnmoTkuovku7bmt7vliqDkuIDkuKrnm5HlkKzlmahcbiAgICAgKiBAcGFyYW0gZXZlbnQgLSDkuovku7blkI3vvIzlj6/ku6XmmK/lrZfnrKbkuLLjgIHnrKblj7fmiJblrZfnrKbkuLLmlbDnu4RcbiAgICAgKiBAcGFyYW0gZm4gLSDnm5HlkKzlh73mlbDvvIzlj4LmlbDliJfooajkuLrlj6/lj5jlj4LmlbBcbiAgICAgKiBAcGFyYW0gY29udGV4dCAtIOWPr+mAie+8jOS4iuS4i+aWh+WvueixoVxuICAgICAqIEByZXR1cm5zIOi/lOWbniBFdmVudEVtaXR0ZXIg5a6e5L6LXG4gICAgICovXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHZhciBldmVudHMgPSB0aGlzLm5vcm1hbGl6ZUV2ZW50TmFtZXMoZXZlbnQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgZXZlbnRzXzEgPSBfX3ZhbHVlcyhldmVudHMpLCBldmVudHNfMV8xID0gZXZlbnRzXzEubmV4dCgpOyAhZXZlbnRzXzFfMS5kb25lOyBldmVudHNfMV8xID0gZXZlbnRzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVfMSA9IGV2ZW50c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgbmFtZV8xICYmIF9zdXBlci5wcm90b3R5cGUub24uY2FsbCh0aGlzLCBuYW1lXzEsIGZuLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50c18xXzEgJiYgIWV2ZW50c18xXzEuZG9uZSAmJiAoX2EgPSBldmVudHNfMS5yZXR1cm4pKSBfYS5jYWxsKGV2ZW50c18xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOenu+mZpOe7meWumueahOS6i+S7tueahOS4gOS4quebkeWQrOWZqFxuICAgICAqIEBwYXJhbSBldmVudCAtIOS6i+S7tuWQje+8jOWPr+S7peaYr+Wtl+espuS4suOAgeespuWPt+aIluWtl+espuS4suaVsOe7hFxuICAgICAqIEBwYXJhbSBmbiAtIOWPr+mAie+8jOebkeWQrOWHveaVsO+8jOWPguaVsOWIl+ihqOS4uuWPr+WPmOWPguaVsFxuICAgICAqIEBwYXJhbSBjb250ZXh0IC0g5Y+v6YCJ77yM5LiK5LiL5paH5a+56LGhXG4gICAgICogQHBhcmFtIG9uY2UgLSDlj6/pgInvvIzmmK/lkKblj6rmiafooYzkuIDmrKFcbiAgICAgKiBAcmV0dXJucyDov5Tlm54gRXZlbnRFbWl0dGVyIOWunuS+i1xuICAgICAqL1xuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMubm9ybWFsaXplRXZlbnROYW1lcyhldmVudCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBldmVudHNfMiA9IF9fdmFsdWVzKGV2ZW50cyksIGV2ZW50c18yXzEgPSBldmVudHNfMi5uZXh0KCk7ICFldmVudHNfMl8xLmRvbmU7IGV2ZW50c18yXzEgPSBldmVudHNfMi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZV8yID0gZXZlbnRzXzJfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICBuYW1lXzIgJiYgX3N1cGVyLnByb3RvdHlwZS5vZmYuY2FsbCh0aGlzLCBuYW1lXzIsIGZuLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50c18yXzEgJiYgIWV2ZW50c18yXzEuZG9uZSAmJiAoX2EgPSBldmVudHNfMi5yZXR1cm4pKSBfYS5jYWxsKGV2ZW50c18yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG59KEV2ZW50RW1pdGVyKSk7XG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXI7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJztcbmltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbmV4cG9ydCB2YXIgdG9wWkluZGV4ID0gMTAwMDA7XG4vKipcbiAqIOaUr+aMgeeahOagt+W8j+WxnuaAp+WIl+ihqFxuICogQHB1YmxpY1xuICovXG52YXIgSkVsZW1lbnRTdHlsZURlY2xhcmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnRTdHlsZURlY2xhcmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb247XG59KEV2ZW50RW1pdGVyKSk7XG5leHBvcnQgeyBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24gfTtcbi8qKlxuICog5qC35byP5bGe5oCn6ZuG5ZCIXG4gKiBAcHVibGljXG4gKi9cbnZhciBKRWxlbWVudFN0eWxlUHJvcGVydHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnRTdHlsZVByb3BlcnR5KCkge1xuICAgICAgICB0aGlzLmFjY2VudENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYWxpZ25Db250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuYWxpZ25JdGVtcyA9ICcnO1xuICAgICAgICB0aGlzLmFsaWduU2VsZiA9ICcnO1xuICAgICAgICB0aGlzLmFsaWdubWVudEJhc2VsaW5lID0gJyc7XG4gICAgICAgIHRoaXMuYWxsID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29tcG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25EZWxheSA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpcmVjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRmlsbE1vZGUgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25JdGVyYXRpb25Db3VudCA9ICcnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbk5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25QbGF5U3RhdGUgPSAnJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1pbmdGdW5jdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSAnJztcbiAgICAgICAgdGhpcy5hc3BlY3RSYXRpbyA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tkcm9wRmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2ZhY2VWaXNpYmlsaXR5ID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRBdHRhY2htZW50ID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEJsZW5kTW9kZSA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDbGlwID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZE9yaWdpbiA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRQb3NpdGlvblggPSAnJztcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gJyc7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFJlcGVhdCA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRTaXplID0gJyc7XG4gICAgICAgIHRoaXMuYmFzZWxpbmVTaGlmdCA9ICcnO1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tFbmRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrRW5kU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja0VuZFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrU3RhcnRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrU3RhcnRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrU3RhcnRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJsb2NrU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCbG9ja1dpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJCb3R0b21TdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckJvdHRvbVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyQ29sbGFwc2UgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckVuZEVuZFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckVuZFN0YXJ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW1hZ2UgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbWFnZU91dHNldCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlUmVwZWF0ID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW1hZ2VTbGljZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckltYWdlU291cmNlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW1hZ2VXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZUNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lRW5kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVFbmRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZUVuZFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVTdGFydENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVySW5saW5lU3RhcnRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZVN0YXJ0V2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJJbmxpbmVTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlcklubGluZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyTGVmdCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckxlZnRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckxlZnRTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlckxlZnRXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclJpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclJpZ2h0U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJSaWdodFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyU3BhY2luZyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclN0YXJ0RW5kUmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyU3RhcnRTdGFydFJhZGl1cyA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy5ib3JkZXJUb3BTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmJvcmRlclRvcFdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMuYm9yZGVyV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5ib3R0b20gPSAnJztcbiAgICAgICAgdGhpcy5ib3hTaGFkb3cgPSAnJztcbiAgICAgICAgdGhpcy5ib3hTaXppbmcgPSAnJztcbiAgICAgICAgdGhpcy5icmVha0FmdGVyID0gJyc7XG4gICAgICAgIHRoaXMuYnJlYWtCZWZvcmUgPSAnJztcbiAgICAgICAgdGhpcy5icmVha0luc2lkZSA9ICcnO1xuICAgICAgICB0aGlzLmNhcHRpb25TaWRlID0gJyc7XG4gICAgICAgIHRoaXMuY2FyZXRDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmNsZWFyID0gJyc7XG4gICAgICAgIHRoaXMuY2xpcCA9ICcnO1xuICAgICAgICB0aGlzLmNsaXBQYXRoID0gJyc7XG4gICAgICAgIHRoaXMuY2xpcFJ1bGUgPSAnJztcbiAgICAgICAgdGhpcy5jb2xvciA9ICcnO1xuICAgICAgICB0aGlzLmNvbG9ySW50ZXJwb2xhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnMgPSAnJztcbiAgICAgICAgdGhpcy5jb2xvclNjaGVtZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtbkNvdW50ID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uRmlsbCA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtbkdhcCA9ICcnO1xuICAgICAgICB0aGlzLmNvbHVtblJ1bGUgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5SdWxlQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5SdWxlU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5SdWxlV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5TcGFuID0gJyc7XG4gICAgICAgIHRoaXMuY29sdW1uV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbiA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5JbnRyaW5zaWNCbG9ja1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluSW50cmluc2ljSGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbkludHJpbnNpY0lubGluZVNpemUgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluSW50cmluc2ljU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5JbnRyaW5zaWNXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICcnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluZXJUeXBlID0gJyc7XG4gICAgICAgIHRoaXMuY29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLmNvdW50ZXJJbmNyZW1lbnQgPSAnJztcbiAgICAgICAgdGhpcy5jb3VudGVyUmVzZXQgPSAnJztcbiAgICAgICAgdGhpcy5jb3VudGVyU2V0ID0gJyc7XG4gICAgICAgIHRoaXMuY3NzRmxvYXQgPSAnJztcbiAgICAgICAgdGhpcy5jc3NUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gJyc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9ICcnO1xuICAgICAgICB0aGlzLmRvbWluYW50QmFzZWxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5lbXB0eUNlbGxzID0gJyc7XG4gICAgICAgIHRoaXMuZmlsbCA9ICcnO1xuICAgICAgICB0aGlzLmZpbGxPcGFjaXR5ID0gJyc7XG4gICAgICAgIHRoaXMuZmlsbFJ1bGUgPSAnJztcbiAgICAgICAgdGhpcy5maWx0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5mbGV4ID0gJyc7XG4gICAgICAgIHRoaXMuZmxleEJhc2lzID0gJyc7XG4gICAgICAgIHRoaXMuZmxleERpcmVjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmZsZXhGbG93ID0gJyc7XG4gICAgICAgIHRoaXMuZmxleEdyb3cgPSAnJztcbiAgICAgICAgdGhpcy5mbGV4U2hyaW5rID0gJyc7XG4gICAgICAgIHRoaXMuZmxleFdyYXAgPSAnJztcbiAgICAgICAgdGhpcy5mbG9hdCA9ICcnO1xuICAgICAgICB0aGlzLmZsb29kQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5mbG9vZE9wYWNpdHkgPSAnJztcbiAgICAgICAgdGhpcy5mb250ID0gJyc7XG4gICAgICAgIHRoaXMuZm9udEZhbWlseSA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRGZWF0dXJlU2V0dGluZ3MgPSAnJztcbiAgICAgICAgdGhpcy5mb250S2VybmluZyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRPcHRpY2FsU2l6aW5nID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFBhbGV0dGUgPSAnJztcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTaXplQWRqdXN0ID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFN0cmV0Y2ggPSAnJztcbiAgICAgICAgdGhpcy5mb250U3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5mb250U3ludGhlc2lzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFN5bnRoZXNpc1NtYWxsQ2FwcyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTeW50aGVzaXNTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRTeW50aGVzaXNXZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudCA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50QWx0ZXJuYXRlcyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50Q2FwcyA9ICcnO1xuICAgICAgICB0aGlzLmZvbnRWYXJpYW50RWFzdEFzaWFuID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhbnRMaWdhdHVyZXMgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudE51bWVyaWMgPSAnJztcbiAgICAgICAgdGhpcy5mb250VmFyaWFudFBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFZhcmlhdGlvblNldHRpbmdzID0gJyc7XG4gICAgICAgIHRoaXMuZm9udFdlaWdodCA9ICcnO1xuICAgICAgICB0aGlzLmZvcmNlZENvbG9yQWRqdXN0ID0gJyc7XG4gICAgICAgIHRoaXMuZ2FwID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRBcmVhID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Db2x1bW5zID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9GbG93ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZEF1dG9Sb3dzID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtbiA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRDb2x1bW5FbmQgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkQ29sdW1uR2FwID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZENvbHVtblN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZEdhcCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRSb3cgPSAnJztcbiAgICAgICAgdGhpcy5ncmlkUm93RW5kID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFJvd0dhcCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRSb3dTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZUFyZWFzID0gJyc7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcnO1xuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVJvd3MgPSAnJztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5oeXBoZW5hdGVDaGFyYWN0ZXIgPSAnJztcbiAgICAgICAgdGhpcy5oeXBoZW5zID0gJyc7XG4gICAgICAgIHRoaXMuaW1hZ2VPcmllbnRhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmltYWdlUmVuZGVyaW5nID0gJyc7XG4gICAgICAgIHRoaXMuaW5saW5lU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0ID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXRCbG9jayA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0QmxvY2tFbmQgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldEJsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5pbnNldElubGluZSA9ICcnO1xuICAgICAgICB0aGlzLmluc2V0SW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMuaW5zZXRJbmxpbmVTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLmlzb2xhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmp1c3RpZnlDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuanVzdGlmeUl0ZW1zID0gJyc7XG4gICAgICAgIHRoaXMuanVzdGlmeVNlbGYgPSAnJztcbiAgICAgICAgdGhpcy5sZWZ0ID0gJyc7XG4gICAgICAgIHRoaXMubGV0dGVyU3BhY2luZyA9ICcnO1xuICAgICAgICB0aGlzLmxpZ2h0aW5nQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5saW5lQnJlYWsgPSAnJztcbiAgICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMubGlzdFN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMubGlzdFN0eWxlSW1hZ2UgPSAnJztcbiAgICAgICAgdGhpcy5saXN0U3R5bGVQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmxpc3RTdHlsZVR5cGUgPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW4gPSAnJztcbiAgICAgICAgdGhpcy5tYXJnaW5CbG9jayA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbkJsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luQmxvY2tTdGFydCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbkJvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbklubGluZSA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbklubGluZUVuZCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpbklubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luTGVmdCA9ICcnO1xuICAgICAgICB0aGlzLm1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMubWFyZ2luVG9wID0gJyc7XG4gICAgICAgIHRoaXMubWFya2VyID0gJyc7XG4gICAgICAgIHRoaXMubWFya2VyRW5kID0gJyc7XG4gICAgICAgIHRoaXMubWFya2VyTWlkID0gJyc7XG4gICAgICAgIHRoaXMubWFya2VyU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrID0gJyc7XG4gICAgICAgIHRoaXMubWFza0NsaXAgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrQ29tcG9zaXRlID0gJyc7XG4gICAgICAgIHRoaXMubWFza0ltYWdlID0gJyc7XG4gICAgICAgIHRoaXMubWFza01vZGUgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMubWFza1Bvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMubWFza1JlcGVhdCA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tTaXplID0gJyc7XG4gICAgICAgIHRoaXMubWFza1R5cGUgPSAnJztcbiAgICAgICAgdGhpcy5tYXRoU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy5tYXhCbG9ja1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5tYXhJbmxpbmVTaXplID0gJyc7XG4gICAgICAgIHRoaXMubWF4V2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5taW5CbG9ja1NpemUgPSAnJztcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5taW5JbmxpbmVTaXplID0gJyc7XG4gICAgICAgIHRoaXMubWluV2lkdGggPSAnJztcbiAgICAgICAgdGhpcy5taXhCbGVuZE1vZGUgPSAnJztcbiAgICAgICAgdGhpcy5vYmplY3RGaXQgPSAnJztcbiAgICAgICAgdGhpcy5vYmplY3RQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldCA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldERpc3RhbmNlID0gJyc7XG4gICAgICAgIHRoaXMub2Zmc2V0UGF0aCA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldFJvdGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAnJztcbiAgICAgICAgdGhpcy5vcmRlciA9ICcnO1xuICAgICAgICB0aGlzLm9ycGhhbnMgPSAnJztcbiAgICAgICAgdGhpcy5vdXRsaW5lID0gJyc7XG4gICAgICAgIHRoaXMub3V0bGluZUNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMub3V0bGluZU9mZnNldCA9ICcnO1xuICAgICAgICB0aGlzLm91dGxpbmVTdHlsZSA9ICcnO1xuICAgICAgICB0aGlzLm91dGxpbmVXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJmbG93ID0gJyc7XG4gICAgICAgIHRoaXMub3ZlcmZsb3dBbmNob3IgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvd0NsaXBNYXJnaW4gPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvd1dyYXAgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvd1ggPSAnJztcbiAgICAgICAgdGhpcy5vdmVyZmxvd1kgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3IgPSAnJztcbiAgICAgICAgdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3JCbG9jayA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJzY3JvbGxCZWhhdmlvcklubGluZSA9ICcnO1xuICAgICAgICB0aGlzLm92ZXJzY3JvbGxCZWhhdmlvclggPSAnJztcbiAgICAgICAgdGhpcy5vdmVyc2Nyb2xsQmVoYXZpb3JZID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZyA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdCbG9jayA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdCbG9ja0VuZCA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdCbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0JvdHRvbSA9ICcnO1xuICAgICAgICB0aGlzLnBhZGRpbmdJbmxpbmUgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nSW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0lubGluZVN0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMucGFkZGluZ0xlZnQgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5wYWRkaW5nVG9wID0gJyc7XG4gICAgICAgIHRoaXMucGFnZSA9ICcnO1xuICAgICAgICB0aGlzLnBhZ2VCcmVha0FmdGVyID0gJyc7XG4gICAgICAgIHRoaXMucGFnZUJyZWFrQmVmb3JlID0gJyc7XG4gICAgICAgIHRoaXMucGFnZUJyZWFrSW5zaWRlID0gJyc7XG4gICAgICAgIHRoaXMucGFpbnRPcmRlciA9ICcnO1xuICAgICAgICB0aGlzLnBlcnNwZWN0aXZlID0gJyc7XG4gICAgICAgIHRoaXMucGVyc3BlY3RpdmVPcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy5wbGFjZUNvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy5wbGFjZUl0ZW1zID0gJyc7XG4gICAgICAgIHRoaXMucGxhY2VTZWxmID0gJyc7XG4gICAgICAgIHRoaXMucG9pbnRlckV2ZW50cyA9ICcnO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMucHJpbnRDb2xvckFkanVzdCA9ICcnO1xuICAgICAgICB0aGlzLnF1b3RlcyA9ICcnO1xuICAgICAgICB0aGlzLnJlc2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gJyc7XG4gICAgICAgIHRoaXMucm90YXRlID0gJyc7XG4gICAgICAgIHRoaXMucm93R2FwID0gJyc7XG4gICAgICAgIHRoaXMucnVieVBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvciA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbiA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbE1hcmdpbkJsb2NrID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luQmxvY2tFbmQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5CbG9ja1N0YXJ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luQm90dG9tID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luSW5saW5lID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luSW5saW5lRW5kID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luSW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5MZWZ0ID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsTWFyZ2luUmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxNYXJnaW5Ub3AgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0Jsb2NrID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0Jsb2NrU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nQm90dG9tID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFkZGluZ0lubGluZSA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdJbmxpbmVFbmQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxQYWRkaW5nTGVmdCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdSaWdodCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZGRpbmdUb3AgPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxTbmFwQWxpZ24gPSAnJztcbiAgICAgICAgdGhpcy5zY3JvbGxTbmFwU3RvcCA9ICcnO1xuICAgICAgICB0aGlzLnNjcm9sbFNuYXBUeXBlID0gJyc7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyR3V0dGVyID0gJyc7XG4gICAgICAgIHRoaXMuc2hhcGVJbWFnZVRocmVzaG9sZCA9ICcnO1xuICAgICAgICB0aGlzLnNoYXBlTWFyZ2luID0gJyc7XG4gICAgICAgIHRoaXMuc2hhcGVPdXRzaWRlID0gJyc7XG4gICAgICAgIHRoaXMuc2hhcGVSZW5kZXJpbmcgPSAnJztcbiAgICAgICAgdGhpcy5zdG9wQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy5zdG9wT3BhY2l0eSA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZSA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZURhc2hhcnJheSA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZURhc2hvZmZzZXQgPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VMaW5lY2FwID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlTGluZWpvaW4gPSAnJztcbiAgICAgICAgdGhpcy5zdHJva2VNaXRlcmxpbWl0ID0gJyc7XG4gICAgICAgIHRoaXMuc3Ryb2tlT3BhY2l0eSA9ICcnO1xuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMudGFiU2l6ZSA9ICcnO1xuICAgICAgICB0aGlzLnRhYmxlTGF5b3V0ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEFsaWduID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEFsaWduTGFzdCA9ICcnO1xuICAgICAgICB0aGlzLnRleHRBbmNob3IgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0Q29tYmluZVVwcmlnaHQgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRleHREZWNvcmF0aW9uQ29sb3IgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvbkxpbmUgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvblNraXBJbmsgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RGVjb3JhdGlvblN0eWxlID0gJyc7XG4gICAgICAgIHRoaXMudGV4dERlY29yYXRpb25UaGlja25lc3MgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RW1waGFzaXMgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0RW1waGFzaXNDb2xvciA9ICcnO1xuICAgICAgICB0aGlzLnRleHRFbXBoYXNpc1Bvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudGV4dEVtcGhhc2lzU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0SW5kZW50ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dE9yaWVudGF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudGV4dE92ZXJmbG93ID0gJyc7XG4gICAgICAgIHRoaXMudGV4dFJlbmRlcmluZyA9ICcnO1xuICAgICAgICB0aGlzLnRleHRTaGFkb3cgPSAnJztcbiAgICAgICAgdGhpcy50ZXh0VHJhbnNmb3JtID0gJyc7XG4gICAgICAgIHRoaXMudGV4dFVuZGVybGluZU9mZnNldCA9ICcnO1xuICAgICAgICB0aGlzLnRleHRVbmRlcmxpbmVQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnRvcCA9ICcnO1xuICAgICAgICB0aGlzLnRvdWNoQWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQm94ID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkRlbGF5ID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblByb3BlcnR5ID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gJyc7XG4gICAgICAgIHRoaXMudW5pY29kZUJpZGkgPSAnJztcbiAgICAgICAgdGhpcy51c2VyU2VsZWN0ID0gJyc7XG4gICAgICAgIHRoaXMudmVydGljYWxBbGlnbiA9ICcnO1xuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbGlnbkNvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbGlnbkl0ZW1zID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QWxpZ25TZWxmID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uRGVsYXkgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25EaXJlY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEFuaW1hdGlvbkZpbGxNb2RlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBbmltYXRpb25OYW1lID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uUGxheVN0YXRlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRBcHBlYXJhbmNlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QmFja2dyb3VuZENsaXAgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCYWNrZ3JvdW5kT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0QmFja2dyb3VuZFNpemUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3JkZXJSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3JkZXJUb3BMZWZ0UmFkaXVzID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm9yZGVyVG9wUmlnaHRSYWRpdXMgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hBbGlnbiA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEJveEZsZXggPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hPcmRpbmFsR3JvdXAgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hPcmllbnQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRCb3hQYWNrID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94U2hhZG93ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0Qm94U2l6aW5nID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmxleCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhCYXNpcyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhEaXJlY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRGbGV4RmxvdyA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhHcm93ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0RmxleFNocmluayA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdEZsZXhXcmFwID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0SnVzdGlmeUNvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRMaW5lQ2xhbXAgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlT3V0c2V0ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlUmVwZWF0ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0JveEltYWdlU2xpY2UgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQm94SW1hZ2VTb3VyY2UgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrQm94SW1hZ2VXaWR0aCA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tDbGlwID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza0NvbXBvc2l0ZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tJbWFnZSA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdE1hc2tPcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrUG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRNYXNrUmVwZWF0ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0TWFza1NpemUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRPcmRlciA9ICcnO1xuICAgICAgICB0aGlzLndlYmtpdFBlcnNwZWN0aXZlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0UGVyc3BlY3RpdmVPcmlnaW4gPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUZXh0RmlsbENvbG9yID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VGV4dFNpemVBZGp1c3QgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUZXh0U3Ryb2tlID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VGV4dFN0cm9rZUNvbG9yID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VGV4dFN0cm9rZVdpZHRoID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNmb3JtID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNmb3JtT3JpZ2luID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNmb3JtU3R5bGUgPSAnJztcbiAgICAgICAgdGhpcy53ZWJraXRUcmFuc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNpdGlvbkRlbGF5ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNpdGlvblByb3BlcnR5ID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMud2Via2l0VXNlclNlbGVjdCA9ICcnO1xuICAgICAgICB0aGlzLndoaXRlU3BhY2UgPSAnJztcbiAgICAgICAgdGhpcy53aWRvd3MgPSAnJztcbiAgICAgICAgdGhpcy53aWR0aCA9ICcnO1xuICAgICAgICB0aGlzLndpbGxDaGFuZ2UgPSAnJztcbiAgICAgICAgdGhpcy53b3JkQnJlYWsgPSAnJztcbiAgICAgICAgdGhpcy53b3JkU3BhY2luZyA9ICcnO1xuICAgICAgICB0aGlzLndvcmRXcmFwID0gJyc7XG4gICAgICAgIHRoaXMud3JpdGluZ01vZGUgPSAnJztcbiAgICAgICAgdGhpcy56SW5kZXggPSAwO1xuICAgIH1cbiAgICByZXR1cm4gSkVsZW1lbnRTdHlsZVByb3BlcnR5O1xufSgpKTtcbmV4cG9ydCB7IEpFbGVtZW50U3R5bGVQcm9wZXJ0eSB9O1xuLyoqXG4gKiBAcHVibGljXG4gKi9cbnZhciBKRWxlbWVudENzc1N0eWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRWxlbWVudENzc1N0eWxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpFbGVtZW50Q3NzU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50Q3NzU3R5bGUucHJvdG90eXBlLCBcIm5hbWVzXCIsIHtcbiAgICAgICAgLy8g5omA5pyJ5qC35byP5ZCN56ewXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgICAgICBpZiAoIUpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwID0gbmV3IEpFbGVtZW50U3R5bGVQcm9wZXJ0eSgpO1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWFwKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXlzXzEgPSBfX3ZhbHVlcyhrZXlzKSwga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpOyAha2V5c18xXzEuZG9uZTsga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtleXNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0eXBlb2YgbWFwW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPT09ICdzdHJpbmcnIHx8IHQgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcC5wdXNoKGspO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5c18xXzEgJiYgIWtleXNfMV8xLmRvbmUgJiYgKF9hID0ga2V5c18xLnJldHVybikpIF9hLmNhbGwoa2V5c18xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcCA9IFtdO1xuICAgIHJldHVybiBKRWxlbWVudENzc1N0eWxlO1xufShKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24pKTtcbmV4cG9ydCBkZWZhdWx0IEpFbGVtZW50Q3NzU3R5bGU7XG4vLyDmnIDlpJblsYLlrrnlmajpu5jorqTmoLflvI9cbmV4cG9ydCB2YXIgQ29udGFpbmVyRGVmYXVsdFN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICB0b3A6ICcwJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIG1hcmdpbjogJzAnLFxuICAgIHpJbmRleDogJzAnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbn07XG5leHBvcnQgdmFyIG53c2UgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FNQUFBRFhxYzNLQUFBQWUxQk1WRVVBQUFELy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLythbnFhZW9xcWpwcTdlMytMaTR1UnBiWGhpWjNOamFIUmZaSEZaWDJ0QVIxYy9SbFU3UVZILy8vLzkvZjMvLy8vLy8vLzkvZjMvLy8vOS9mMy8vLzhQRnlyLy8vL1VZamFiQUFBQUozUlNUbE1BQkFVTURSQVJFaGNrS1M0d01qVTJONmpBd01ESHlNck16TTNQMnR2ZDVPam82ZXZyN1Bvd2dIb3lBQUFBQVdKTFIwUW92YkMxc2dBQUFKVkpSRUZVS00rOTBkc1NnaUFRZ0dISURrQlVvcWFWR1JYRTd2cy9ZU2d6NVFEWC9wZDhIR1lXUXBacUxROCtXU1RyYjV5eUxJSTkxamRmaThjSUpQWUFVS0VpT2JnYUozSndnY0ZvbmtMMXVjUGpPVXJKNW8rZjBRVVJDaTM5UVdGUkNUMko4M3MyL3lQc1JBZ1AwdlJ6bU9MYUROQkJDa1E0MDBFT0ZEYVFneExiY1RCMUFzeUdVYjVvZkJYZGpXMVhpLzMyRjNVM0VVNnBudS96QUFBQUFFbEZUa1N1UW1DQyc7XG5leHBvcnQgdmFyIG5zID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBTUFBQURYcWMzS0FBQUFtVkJNVkVVQUFBRC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8rb3E3S3VzTGV2c3JpWm02V2RvYW1pcGEyanBxNlRsNkNOa1pxSWpKWC8vLzk4Z1l2Ly8vLy8vLy8vLy8vLy8vOFBGeXIvLy84aXBkcE1BQUFBTVhSU1RsTUFBUUlEQkFVSENWcGNYVjVmYUdsM2dJS0RoSVdJbUp5ZG5wK21xYXF4dUx1L3Y3L0F3TURBd2NMRHhNWDcvUDMrdFYrTFl3QUFBQUZpUzBkRU1rRFNUTWdBQUFDL1NVUkJWQ2pQZlpMWkVvSXdERVdoQ2xoQXhRVkZWRFlWRjF4SS92L2pKQmJSVnZBOGRKZ2N5TDB6UmRNYW1Pc3lyUVY5Z1JpeTFubVd0eGdXWUFhUTQwb3hiSWs3QURLQmJBWmlEbkJFTGdtT0ZRQjBPbkkwOXdzU2hXL3JhcnhId3BQZkhoTUppZVQxeU1WWE50YUlETUp1ZHNqVUd6dEY1NnFxS2xIWEpiait2eTVoRHQ5MVI2WWtacCtNdVNRbTk0c29kTDFOSldIRjVaN201MGRzS1NGUmVRQTRsWkdweGhzYlRGUGNHcitYM2dzUjEvMjIzNFE1enRlMVBnRWkrU2VtVEpHMXZ3QUFBQUJKUlU1RXJrSmdnZz09Jztcbi8vIOaTjeS9nOadoOaMh+mSiFxuZXhwb3J0IHZhciBDb250cm9sZXJDdXJzb3JzID0ge1xuICAgICdsJzogJycsXG4gICAgJ2x0JzogbndzZSxcbiAgICAndCc6IG5zLFxuICAgICd0cic6ICcnLFxuICAgICdyJzogJycsXG4gICAgJ3JiJzogbndzZSxcbiAgICAnYic6IG5zLFxuICAgICdsYic6ICcnLFxuICAgICdyb3RhdGUnOiAncG9pbnRlcicsXG4gICAgJ3NrZXcnOiAncG9pbnRlcicsXG4gICAgLy8g5qC55o2u6KeS5bqm5peL6L2s5oyH6ZKIXG4gICAgZ2V0OiBmdW5jdGlvbiAoZGlyLCByb3RhdGlvbikge1xuICAgICAgICBpZiAocm90YXRpb24gPT09IHZvaWQgMCkgeyByb3RhdGlvbiA9IDA7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJvdGF0aW9uS2V5LCBrZXksIGN1cnNvciwgbm9ybWFsLCBub3JtYWw7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyID09PSAncm90YXRlJyB8fCBkaXIgPT09ICdza2V3JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpc1tkaXJdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uS2V5ID0gTnVtYmVyKHJvdGF0aW9uLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gcm90YXRpb25LZXkgPT09IDAgPyBkaXIgOiBcIlwiLmNvbmNhdChkaXIsIFwiX1wiKS5jb25jYXQocm90YXRpb25LZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhY3Vyc29yKSByZXR1cm4gWzMgLypicmVhayovLCAxMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkaXIgPT09ICdsJyB8fCBkaXIgPT09ICdyJyB8fCBkaXIgPT09ICd0JyB8fCBkaXIgPT09ICdiJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocm90YXRpb24gPT09IDApKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHV0aWwucm90YXRlSW1hZ2UobnMsIE1hdGguUEkgLyAyKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbJ2wnXSA9IHRoaXNbJ3InXSA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0KGRpciwgMCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWwgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1dGlsLnJvdGF0ZUltYWdlKG5vcm1hbCwgcm90YXRpb24pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gY3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZGlyID09PSAndHInIHx8IGRpciA9PT0gJ2xiJyB8fCBkaXIgPT09ICdsdCcgfHwgZGlyID09PSAncmInKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocm90YXRpb24gPT09IDApKSByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHV0aWwucm90YXRlSW1hZ2UobndzZSwgTWF0aC5QSSAvIDIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXNbJ3RyJ10gPSB0aGlzWydsYiddID0gY3Vyc29yXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldChkaXIsIDApXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXRpbC5yb3RhdGVJbWFnZShub3JtYWwsIHJvdGF0aW9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDExO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOiByZXR1cm4gWzIgLypyZXR1cm4qLywgY3Vyc29yXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgQ29udHJvbEl0ZW1JY29ucyA9IHtcbiAgICAncm90YXRlJzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFnVkJNVkVVQUFBQWlLOU1qS2RVZktOWWpLZFVpS05ZaUtkVWVIdUFqS05ZaktOWWlLTll5TXN3aUtOWWlLTllpS05ZaUtOWWhLTllpS2RVaUtOWWlLTllqS2RVaktOWWdKOWNqSmRZaUtOWWlLTllpS2RVaEo5Y2pLTllpS2RVZExOTXJLOU1pS05ZaUtOWWlLZFVpS05ZaktOWWpLZFVqS2RVaktOWWpLZFVqS2RVaktkYVVXN2VWQUFBQUtuUlNUbE1BRmRNWTEvdjRDUFhvNHdYdXlMaDZSZktSaldwQUp4eWtiMXRTVGpBUkM4T3NsWVZnT2l2UXJxZXk3Y2FxQUFBQk0wbEVRVlJJeCsyVTZXNkRNQkNFRGRTRSsyd2c5NTBlMy9zL1lHT0JRSTBoTWYrcUt2T0RIWXNaZTlkZXJYamgzMkMyUHNVK0JJY3lDdzNrVmhuUklVajN6L1R2RWNUcDFSR2l6czQyQkp2SCtrcVNiUHRsRmtQNTJMRmMzNTNvc2hDVE1NOHBKenBjaHV1d3JMRXM4ZmREZXM5elJod0gwZ0c5RGJZMWtoUitPS1FmZDloa3V2NE5icC9ockZJS1hlK0FOZWJJaUhXOWdKYm9kMmZoTjd6VHErU2hwYi8zVXVzUTJmR2V1TXc2cnRCdjF2eHJhWDlVZ05Od1BWMWwwTk9ObWJkTWQ3alVlbmtGcVJoenlLRXIzL0RaRU5OSERTT3VLcHEzelpsRUJmUEczRVZjVkRSdi9SWDVWa3pDQXY5amtpRk15TytHd0hiMWVPZ3Q0S3ZxMTA0aHZlckpJTXNoZWEvQ0c2MVgzeTZ5ZURiN25KTUh5Q2h3VlRpYTFMUzdIQU1KK01teU5wL2dPMmNtWHZqRCtBSHByaHBvSktpWVlBQUFBQUJKUlU1RXJrSmdnZz09JyxcbiAgICAnc2tldyc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQU1BQUFCZzNBbTFBQUFBZFZCTVZFVUFBQUJsWS85N2UvOWtZdjlrWS85blovOWxZLzlrWXY5a1kvOWtZdjlrWS85bFkvOWtZdjlrWS85cFlQOW9ZUDlrWXY5a1l2OWtZLzlrWXY5aVl2OW5ZLzlrWXY5bFl2OWtZdjlsWXY5bFkvOWtZdjlsWXY5a1kvOWtZdjlsWmY5bFkvOWtZdjlrWXY5bFl2OWtZdjlsWS85bFkvK2t0UU5SQUFBQUpuUlNUbE1BL0FUdjN4SG1XL1YwVHRPM2toY055OFhCVWg4VTZ0aStwcHQ1YmtzbkdUcXlnbU5FWjBjdHBkVUFBQUVtU1VSQlZFakg3VlBibG9Jd0RLU2xvQVVxRjZrZ2QxMjMvLytKYStqU1NwR3FENzR4YnluSnljeGtjRFpzK0JJT0FhMnlncmdJdWFRb0t4b2NiTjAzRm9vRlFuWjczdTFSSWxaUVVHL1p2enNKQzl6R2FPZVprRUFKYTlvdTl6RDI4cTV0V0lLRVJEWmIwa3Z1KzNNUW01dmo0THlYV2g3azQyUmNlL1ZXMUYxZCtKNWc5ZklMZGRtdjI5ZVgwUEdqNnZSZVJkaG1PSTd1TGFrcWdXVG5XTkdCUkZXQm83bDlJQWVScWdLR0Z6dWxDemlyanlaQXhHUmI2L3RITTJHUkVxMVZDN2VXdHZwQ29OM00xbnEwTlgzZ3dBdDlPQmlBQ2ZOd1pLYVNSeW9hVlNUMHhKQk4wVWpOTXpWRytOQ29nMHpobzB0UDRub2Vid0tQLzJ6cStMbDVBd3VOQVlwRXlJWlh2K2hKVTNJNGQxN2lpS1RvTjZGcy9XRGdnMzRkalEwYnZvNC9uYVl2Z3M4eG12d0FBQUFBU1VWT1JLNUNZSUk9J1xufTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgRXZlbnRFbWl0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xudmFyIFRyYW5zZm9ybSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHJhbnNmb3JtLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zZm9ybShvcHRpb24sIHRhcmdldE9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICAvLyDlk43lupTlj5jljJbmjaLlhYPntKDlkozlsZ7mgKdcbiAgICAgICAgX3RoaXMudGFyZ2V0cyA9IFtdO1xuICAgICAgICAvLyB45YGP56e76YePXG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZVggPSAwO1xuICAgICAgICAvLyB55YGP56e76YePXG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAvLyB65YGP56e76YePXG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZVogPSAwO1xuICAgICAgICBfdGhpcy5yb3RhdGVYID0gMDtcbiAgICAgICAgX3RoaXMucm90YXRlWSA9IDA7XG4gICAgICAgIF90aGlzLnJvdGF0ZVogPSAwO1xuICAgICAgICBfdGhpcy5zY2FsZVggPSAxO1xuICAgICAgICBfdGhpcy5zY2FsZVkgPSAxO1xuICAgICAgICBfdGhpcy5zY2FsZVogPSAxO1xuICAgICAgICBfdGhpcy5za2V3WCA9IDA7XG4gICAgICAgIF90aGlzLnNrZXdZID0gMDtcbiAgICAgICAgaWYgKG9wdGlvbilcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oX3RoaXMsIG9wdGlvbik7XG4gICAgICAgIGlmICh0YXJnZXRPcHRpb24pXG4gICAgICAgICAgICBfdGhpcy5iaW5kKHRhcmdldE9wdGlvbik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwidHJhbnNsYXRlWFN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlWChcIi5jb25jYXQodXRpbC50b1BYKHRoaXMudHJhbnNsYXRlWCksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInRyYW5zbGF0ZVlTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZVkoXCIuY29uY2F0KHV0aWwudG9QWCh0aGlzLnRyYW5zbGF0ZVkpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGVaU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGVaKFwiLmNvbmNhdCh1dGlsLnRvUFgodGhpcy50cmFuc2xhdGVaKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwicm90YXRlWFN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwicm90YXRlWChcIi5jb25jYXQodXRpbC50b1JhZCh0aGlzLnJvdGF0ZVgpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJyb3RhdGVZU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyb3RhdGVZKFwiLmNvbmNhdCh1dGlsLnRvUmFkKHRoaXMucm90YXRlWSksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInJvdGF0ZVpTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInJvdGF0ZVooXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5yb3RhdGVaKSwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwic2NhbGVYU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJzY2FsZVgoXCIuY29uY2F0KHRoaXMuc2NhbGVYLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJzY2FsZVlTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInNjYWxlWShcIi5jb25jYXQodGhpcy5zY2FsZVksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm0ucHJvdG90eXBlLCBcInNjYWxlWlN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2NhbGVaKFwiLmNvbmNhdCh0aGlzLnNjYWxlWiwgXCIpXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybS5wcm90b3R5cGUsIFwic2tld1hTdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInNrZXdYKFwiLmNvbmNhdCh1dGlsLnRvUmFkKHRoaXMuc2tld1gpLCBcIilcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNmb3JtLnByb3RvdHlwZSwgXCJza2V3WVN0cmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwic2tld1koXCIuY29uY2F0KHV0aWwudG9SYWQodGhpcy5za2V3WSksIFwiKVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuZnJvbSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhKVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB9O1xuICAgIC8vIOeUn+aViFxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0gdGhpcy50YXJnZXRzOyB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdGFyZ2V0XzEgPSBfX3ZhbHVlcyh0YXJnZXQpLCB0YXJnZXRfMV8xID0gdGFyZ2V0XzEubmV4dCgpOyAhdGFyZ2V0XzFfMS5kb25lOyB0YXJnZXRfMV8xID0gdGFyZ2V0XzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGFyZ2V0XzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseSh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldF8xXzEgJiYgIXRhcmdldF8xXzEuZG9uZSAmJiAoX2EgPSB0YXJnZXRfMS5yZXR1cm4pKSBfYS5jYWxsKHRhcmdldF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldC50YXJnZXQgJiYgdGFyZ2V0LnRhcmdldC5jc3MpXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRhcmdldC5jc3MoJ3RyYW5zZm9ybScsIHRoaXMudG9TdHJpbmcodGFyZ2V0LndhdGNoUHJvcHMpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC50YXJnZXQpXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLnRvU3RyaW5nKHRhcmdldC53YXRjaFByb3BzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8g57uR5a6a5bm25Yi35paw5Yiw55uu5qCH5LiKXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICB0aGlzLmFwcGx5KHRhcmdldCk7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudGFyZ2V0cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0c1tpXS50YXJnZXQgPT09IHRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnlJ/miJB0cmFuc2Zvcm3ku6PnkIZcbiAgICBUcmFuc2Zvcm0uY3JlYXRlUHJveHkgPSBmdW5jdGlvbiAob2JqLCBlbCkge1xuICAgICAgICBpZiAob2JqID09PSB2b2lkIDApIHsgb2JqID0ge307IH1cbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0ob2JqLCBlbCk7XG4gICAgICAgIC8vIOS7o+eQhuWkhOeQhlxuICAgICAgICB2YXIgcHJveHkgPSBuZXcgUHJveHkodHJhbnNmb3JtLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHAsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0YXJnZXRbcF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYXBwbHkoKTsgLy8g55Sf5pWIXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHdhdGNoUHJvcHMpIHtcbiAgICAgICAgdmFyIGVfMiwgX2E7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgaWYgKCF3YXRjaFByb3BzKSB7XG4gICAgICAgICAgICB3YXRjaFByb3BzID0gWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsIFwicm90YXRlWFwiLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXdYJywgJ3NrZXdZJ107XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHdhdGNoUHJvcHNfMSA9IF9fdmFsdWVzKHdhdGNoUHJvcHMpLCB3YXRjaFByb3BzXzFfMSA9IHdhdGNoUHJvcHNfMS5uZXh0KCk7ICF3YXRjaFByb3BzXzFfMS5kb25lOyB3YXRjaFByb3BzXzFfMSA9IHdhdGNoUHJvcHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHdhdGNoUHJvcHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBudiA9IHRoaXNbbiArICdTdHJpbmcnXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbbl0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBudiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2gobnYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHdhdGNoUHJvcHNfMV8xICYmICF3YXRjaFByb3BzXzFfMS5kb25lICYmIChfYSA9IHdhdGNoUHJvcHNfMS5yZXR1cm4pKSBfYS5jYWxsKHdhdGNoUHJvcHNfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qb2luKCcgJyk7XG4gICAgfTtcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IHRoaXMudHJhbnNsYXRlWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IHRoaXMudHJhbnNsYXRlWSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVo6IHRoaXMudHJhbnNsYXRlWixcbiAgICAgICAgICAgIHJvdGF0ZVg6IHRoaXMucm90YXRlWCxcbiAgICAgICAgICAgIHJvdGF0ZVk6IHRoaXMucm90YXRlWSxcbiAgICAgICAgICAgIHJvdGF0ZVo6IHRoaXMucm90YXRlWixcbiAgICAgICAgICAgIHNjYWxlWDogdGhpcy5zY2FsZVgsXG4gICAgICAgICAgICBzY2FsZVk6IHRoaXMuc2NhbGVZLFxuICAgICAgICAgICAgc2NhbGVaOiB0aGlzLnNjYWxlWixcbiAgICAgICAgICAgIHNrZXdYOiB0aGlzLnNrZXdYLFxuICAgICAgICAgICAgc2tld1k6IHRoaXMuc2tld1ksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNmb3JtO1xufShFdmVudEVtaXRlcikpO1xuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiaW1wb3J0IEpFbGVtZW50Q3NzU3R5bGUgZnJvbSAnLi9zdHlsZU1hcCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJztcbmV4cG9ydCB7IEV2ZW50RW1pdHRlciwgSkVsZW1lbnRDc3NTdHlsZSB9O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBDb250YWluZXJEZWZhdWx0U3R5bGUgfSBmcm9tICcuLi9jb25zdGFudC9zdHlsZU1hcCc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi4vY29yZS9lbGVtZW50Jztcbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgSkJhc2VDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpCYXNlQ29tcG9uZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpCYXNlQ29tcG9uZW50KG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gb3B0aW9uLnN0eWxlIHx8IHt9O1xuICAgICAgICAvLyBwb3NpdGlvbuWSjG92ZXJmbG936aKE6K6+55qE5YC85LyY5YWI57qn5pyA6auYXG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IE9iamVjdC5hc3NpZ24oX19hc3NpZ24oe30sIENvbnRhaW5lckRlZmF1bHRTdHlsZSksIG9wdGlvbi5zdHlsZSwge1xuICAgICAgICAgICAgcG9zaXRpb246IENvbnRhaW5lckRlZmF1bHRTdHlsZS5wb3NpdGlvbixcbiAgICAgICAgICAgIG92ZXJmbG93OiBDb250YWluZXJEZWZhdWx0U3R5bGUub3ZlcmZsb3dcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oeyBcbiAgICAgICAgICAgIC8vIOWkluWxguWPquWTjeW6lFrovbTml4vovaxcbiAgICAgICAgICAgIHRyYW5zZm9ybVdhdGNoUHJvcHM6IFtcbiAgICAgICAgICAgICAgICAncm90YXRlWicsICdzY2FsZVgnLCAnc2NhbGVZJ1xuICAgICAgICAgICAgXSB9LCBvcHRpb24pLCB7IG5vZGVUeXBlOiAnZGl2JywgY2xhc3NOYW1lOiAnai1kZXNpZ24tZWRpdG9yLWNvbnRhaW5lcicsIGlzQ29tcG9uZW50OiB0cnVlIH0pKSB8fCB0aGlzO1xuICAgICAgICAvLyDpgInkuK1cbiAgICAgICAgX3RoaXMuX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIG9wdGlvbi50YXJnZXQgPSBvcHRpb24udGFyZ2V0IHx8IHt9O1xuICAgICAgICAvLyDnlJ/miJDlvZPliY3mjqfliLbnmoTlhYPntKBcbiAgICAgICAgX3RoaXMudGFyZ2V0ID0gbmV3IEpFbGVtZW50KF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IHZpc2libGU6IHRydWUsIGRhdGE6IHt9LCBcbiAgICAgICAgICAgIC8vIOS4jeWTjeW6lOacrOi6q+eahOWPmOaNou+8jOWPquWTjeW6lOeItue6p+eahFxuICAgICAgICAgICAgdHJhbnNmb3JtV2F0Y2hQcm9wczogW10sIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgIF90aGlzLmFkZENoaWxkKF90aGlzLnRhcmdldCk7XG4gICAgICAgIC8vIOWPmOaNouaUueS4uuaOp+WItuS4u+WFg+e0oFxuICAgICAgICBfdGhpcy50cmFuc2Zvcm0uYmluZCh7XG4gICAgICAgICAgICB0YXJnZXQ6IF90aGlzLnRhcmdldCxcbiAgICAgICAgICAgIHdhdGNoUHJvcHM6IFtcbiAgICAgICAgICAgICAgICAncm90YXRlWCcsICdyb3RhdGVZJywgJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICdza2V3WCcsICdza2V3WSdcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLmRhdGEub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5lbWl0KCdkYXRhQ2hhbmdlJywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRhQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IF90aGlzLFxuICAgICAgICAgICAgICAgIGRhdGE6IGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkJhc2VDb21wb25lbnQucHJvdG90eXBlLCBcInNlbGVjdGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdjtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc2VsZWN0Jywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDorr7nva5jc3PliLBkb21cbiAgICBKQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuc2V0RG9tU3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgLy8g5aaC5p6c5aSW5bGC5a655Zmo55qE5qC35byP77yM5YiZ5Yqg5YiwY29udGFpbmVy5LiKXG4gICAgICAgIGlmIChuYW1lIGluIENvbnRhaW5lckRlZmF1bHRTdHlsZSB8fCBuYW1lID09PSAndHJhbnNmb3JtJykge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5zZXREb21TdHlsZS5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmNzcyhuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEpCYXNlQ29tcG9uZW50LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSBbXTsgfVxuICAgICAgICAvLyDovaxqc29u5b+955Wl5riy5p+T57uE5Lu2XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnRvSlNPTi5jYWxsKHRoaXMsIHByb3BzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbCAhPT0gX3RoaXMudGFyZ2V0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBKQmFzZUNvbXBvbmVudDtcbn0oSkVsZW1lbnQpKTtcbmV4cG9ydCBkZWZhdWx0IEpCYXNlQ29tcG9uZW50O1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgdXRpbCBmcm9tICcuLi9saWIvdXRpbCc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi9lbGVtZW50JztcbmltcG9ydCB7IHRvcFpJbmRleCwgQ29udHJvbGVyQ3Vyc29ycywgQ29udHJvbEl0ZW1JY29ucyB9IGZyb20gJy4uL2NvbnN0YW50L3N0eWxlTWFwJztcbi8vIOaOp+WItuWFg+e0oOenu+WKqOWSjOefqemYteWPmOaNolxudmFyIEpDb250cm9sbGVySXRlbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkNvbnRyb2xsZXJJdGVtLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEpDb250cm9sbGVySXRlbShvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gX19hc3NpZ24oX19hc3NpZ24oeyBib3JkZXI6ICcxcHggc29saWQgcmdiYSg2LDE1NSwxODEsMSknLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgcG9pbnRlckV2ZW50czogJ2F1dG8nIH0sIG9wdGlvbi5zdHlsZSksIHsgcG9zaXRpb246ICdhYnNvbHV0ZScgfSk7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaXIgPSAnJztcbiAgICAgICAgX3RoaXMuc2l6ZSA9IDg7XG4gICAgICAgIF90aGlzLl9pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAvLyDmi5bmlL7kvY3nva5cbiAgICAgICAgX3RoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZGlyID0gb3B0aW9uLmRpciB8fCAnJztcbiAgICAgICAgX3RoaXMuc2l6ZSA9IG9wdGlvbi5zaXplIHx8IDg7XG4gICAgICAgIF90aGlzLmRhdGEud2lkdGggPSBfdGhpcy5kYXRhLmhlaWdodCA9IF90aGlzLnNpemU7XG4gICAgICAgIF90aGlzLmVkaXRvciA9IG9wdGlvbi5lZGl0b3I7XG4gICAgICAgIGlmIChfdGhpcy5lZGl0b3IpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIF90aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDApXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ0VuZChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgX3RoaXMuZWRpdG9yLnZpZXcub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IF90aGlzLmVkaXRvci5kb20pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8g5LiN5pivb3V057yW6L6R5Zmo77yM5LiN5aSE55CGXG4gICAgICAgICAgICAgICAgX3RoaXMub25EcmFnRW5kKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBfdGhpcy5lZGl0b3Iudmlldy5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRyYWdNb3ZlKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmmK/lt6blgaVcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkNvbnRyb2xsZXJJdGVtLnByb3RvdHlwZSwgXCJpc01vdmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzTW92aW5nO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLl9pc01vdmluZyA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLm9uRHJhZ01vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTW92aW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgcG9zID0ge1xuICAgICAgICAgICAgeDogZXZlbnQucGFnZVggfHwgZXZlbnQueCxcbiAgICAgICAgICAgIHk6IGV2ZW50LnBhZ2VZIHx8IGV2ZW50LnksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBvZmZYID0gKHBvcy54IC0gdGhpcy5kcmFnU3RhcnRQb3NpdGlvbi54KTtcbiAgICAgICAgdmFyIG9mZlkgPSAocG9zLnkgLSB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIGRpcjogdGhpcy5kaXIsXG4gICAgICAgICAgICBvZmZYOiBvZmZYLFxuICAgICAgICAgICAgb2ZmWTogb2ZmWSxcbiAgICAgICAgICAgIG9sZFBvc2l0aW9uOiB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLFxuICAgICAgICAgICAgbmV3UG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgICAgICAgICB5OiBwb3MueVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g6YCJ5Lit55qE5piv5riy5p+T5bGC55qE5Z2Q5qCH77yM6L2s5Li65o6n5Yi25bGC55qEXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24ueCA9IHBvcy54O1xuICAgICAgICB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnkgPSBwb3MueTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLm9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICB4OiBldmVudC5wYWdlWCB8fCBldmVudC54LFxuICAgICAgICAgICAgeTogZXZlbnQucGFnZVkgfHwgZXZlbnQueSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6YCJ5Lit55qE5piv5riy5p+T5bGC55qE5Z2Q5qCH77yM6L2s5Li65o6n5Yi25bGC55qEXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgICAgIHk6IHBvcy55XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLm9uRHJhZ0VuZCA9IGZ1bmN0aW9uIChldmVudCwgcG9zKSB7XG4gICAgICAgIGlmIChwb3MgPT09IHZvaWQgMCkgeyBwb3MgPSBldmVudDsgfVxuICAgICAgICBpZiAodGhpcy5pc01vdmluZykge1xuICAgICAgICAgICAgdGhpcy5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDorqHnrpfmjIfpkohcbiAgICBKQ29udHJvbGxlckl0ZW0ucHJvdG90eXBlLnJlc2V0Q3Vyc29yID0gZnVuY3Rpb24gKHJvdGF0aW9uKSB7XG4gICAgICAgIGlmIChyb3RhdGlvbiA9PT0gdm9pZCAwKSB7IHJvdGF0aW9uID0gMDsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY3Vyc29yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBDb250cm9sZXJDdXJzb3JzLmdldCh0aGlzLmRpciwgcm90YXRpb24pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YWI566A5Y2V5aSE55CGXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9IGN1cnNvci5pbmNsdWRlcygnXFwvJykgPyBcInVybChcIi5jb25jYXQoY3Vyc29yLCBcIikgMTIgMTIscG9pbnRlclwiKSA6IGN1cnNvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSkNvbnRyb2xsZXJJdGVtO1xufShKRWxlbWVudCkpO1xuZXhwb3J0IHsgSkNvbnRyb2xsZXJJdGVtIH07XG4vLyDlhYPntKDlpKflsI/kvY3nva7mjqfliLblmahcbnZhciBKQ29udHJvbGxlckNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkNvbnRyb2xsZXJDb21wb25lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkNvbnRyb2xsZXJDb21wb25lbnQob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IF9fYXNzaWduKF9fYXNzaWduKHsgY3Vyc29yOiAnbW92ZScsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyB9LCBvcHRpb24uc3R5bGUpLCB7IHBvaW50ZXJFdmVudHM6ICdub25lJyB9KTtcbiAgICAgICAgb3B0aW9uLmRpciA9ICdlbGVtZW50JztcbiAgICAgICAgb3B0aW9uLmRhdGEgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLmRhdGEpLCB7IHpJbmRleDogdG9wWkluZGV4IH0pO1xuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgLy8g6YCJ5oup5qGG6L656LedXG4gICAgICAgIF90aGlzLnBhZGRpbmdTaXplID0gMTtcbiAgICAgICAgX3RoaXMuaXNFZGl0b3IgPSBmYWxzZTsgLy8g5b2T5YmN5YWz6IGU5piv5ZCm5piv57yW6L6R5ZmoXG4gICAgICAgIGlmICghX3RoaXMuZWRpdG9yLmVkaXRhYmxlKVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICBfdGhpcy5pbml0KG9wdGlvbik7XG4gICAgICAgIF90aGlzLmVkaXRvci5kb20uYXBwZW5kQ2hpbGQoX3RoaXMuZG9tKTtcbiAgICAgICAgX3RoaXMucmVzZXRDdXJzb3IoX3RoaXMudHJhbnNmb3JtLnJvdGF0ZVopO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2wnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAwLCB0b3A6ICc1MCUnIH0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdsdCcsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6IDAsIHRvcDogMCB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgndCcsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6ICc1MCUnLCB0b3A6IDAgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ3RyJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogJzEwMCUnLCB0b3A6IDAgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ3InLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAnMTAwJScsIHRvcDogJzUwJScgfSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ3JiJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgbGVmdDogJzEwMCUnLCB0b3A6ICcxMDAlJyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgnYicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbi5pdGVtU3R5bGUpLCB7IGxlZnQ6ICc1MCUnLCB0b3A6ICcxMDAlJyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgnbGInLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24uaXRlbVN0eWxlKSwgeyBsZWZ0OiAwLCB0b3A6ICcxMDAlJyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOaXi+i9rOWdl1xuICAgICAgICB0aGlzLnJvdGF0ZUl0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0oJ3JvdGF0ZScsIHtcbiAgICAgICAgICAgIHNoYXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIHNpemU6IDI0LFxuICAgICAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHsgbGVmdDogJzUwJScsIHRvcDogJy00MHB4JywgXG4gICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsIGJveFNoYWRvdzogJzAgMCAycHggMnB4ICNjY2MnLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBjdXJzb3I6IFwicG9pbnRlclwiIH0sIG9wdGlvbi5pdGVtU3R5bGUpLCB7ICdiYWNrZ3JvdW5kU2l6ZSc6ICcxMDAlJywgYmFja2dyb3VuZEltYWdlOiBDb250cm9sSXRlbUljb25zLnJvdGF0ZSB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2tld0l0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0oJ3NrZXcnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICBzaXplOiAyNCxcbiAgICAgICAgICAgIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7IGxlZnQ6ICc1MCUnLCB0b3A6ICc1MCUnLCBib3JkZXI6ICdub25lJywgYm94U2hhZG93OiAnMCAwIDJweCAycHggI2NjYycsIGJvcmRlclJhZGl1czogJzUwJScsIGN1cnNvcjogXCJwb2ludGVyXCIgfSwgb3B0aW9uLml0ZW1TdHlsZSksIHsgJ2JhY2tncm91bmRTaXplJzogJzEwMCUnLCBiYWNrZ3JvdW5kSW1hZ2U6IENvbnRyb2xJdGVtSWNvbnMuc2tldyB9KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIOaXi+i9rOWdlyBcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmlzRWRpdG9yIHx8IGUuYnV0dG9uID09PSAyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIOS4jeaYr+e8lui+keWZqO+8jOS4jeWkhOeQhlxuICAgICAgICAgICAgICAgIF90aGlzLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmNoYW5nZShlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDnlJ/miJDmjqfliLbngrlcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuY3JlYXRlSXRlbSA9IGZ1bmN0aW9uIChpZCwgb3B0aW9uKSB7XG4gICAgICAgIHZhciBpdGVtID0gbmV3IEpDb250cm9sbGVySXRlbShfX2Fzc2lnbih7IGRpcjogaWQsIGVkaXRvcjogdGhpcy5lZGl0b3IgfSwgb3B0aW9uKSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpdGVtLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jaGFuZ2UoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtLnJlc2V0Q3Vyc29yKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICAgIC8vIOWPkeeUn+aUueWPmOWTjeW6lFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgZGlyID0gZS5kaXIsIG9mZlggPSBlLm9mZlgsIG9mZlkgPSBlLm9mZlk7XG4gICAgICAgIC8vIOW9k+WJjeenu+WKqOWvueWOn+WvueixoeeahOaUueWPmFxuICAgICAgICB2YXIgYXJncyA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICAgIHNrZXc6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlQ2hhbmdlKGUsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpciA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICAgICAgICAvLyDlhYPntKDkvY3nva7mjqfliLblmahcbiAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICBhcmdzLnkgPSBvZmZZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5YWI5Zue5Y6f5Z2Q5qCH77yM5YaN5Li7566X5YGP56e76YeP77yM6L+Z5qC35L+d6K+B5pON5L2c5pu05a655piT55CG6KejXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0ucm90YXRlWikge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLmdldFJvdGF0ZUV2ZW50UG9zaXRpb24oZSk7XG4gICAgICAgICAgICAgICAgb2ZmWCA9IHBvcy5vZmZYO1xuICAgICAgICAgICAgICAgIG9mZlkgPSBwb3Mub2ZmWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy54ID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IC1vZmZYO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3InOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnYic6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnbHQnOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSAtb2ZmWTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3JiJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnbGInOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MueCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSAtb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5oZWlnaHQgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnc2tldyc6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ4ID0gb2ZmWCAvIHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLndpZHRoKSAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByeSA9IG9mZlkgLyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5za2V3LnggPSByeTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5za2V3LnkgPSByeDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOS9jeenu1xuICAgICAgICBpZiAoYXJncy54IHx8IGFyZ3MueSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGFyZ3MueCwgYXJncy55KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy53aWR0aCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEud2lkdGgpICsgYXJncy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS53aWR0aCA9IE1hdGgubWF4KHdpZHRoLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5oZWlnaHQgPSBNYXRoLm1heCh1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpICsgYXJncy5oZWlnaHQsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHgseeaXi+i9rFxuICAgICAgICBpZiAoYXJncy5za2V3LnggfHwgYXJncy5za2V3LnkpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVYICs9IGFyZ3Muc2tldy54O1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVkgKz0gYXJncy5za2V3Lnk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50cmFuc2Zvcm0uYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcGx5VG9UYXJnZXQoKTtcbiAgICB9O1xuICAgIC8vIOWboOS4uuaXi+i9rOWQjuWdkOagh+imgeWbnuWOn+aJjeWlveiuoeeul+aTjeS9nO+8jFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5nZXRSb3RhdGVFdmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG9mZlggPSBlLm9mZlgsIG9mZlkgPSBlLm9mZlksIG9sZFBvc2l0aW9uID0gZS5vbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24gPSBlLm5ld1Bvc2l0aW9uO1xuICAgICAgICAvLyDlhYjlm57ljp/lnZDmoIfvvIzlho3kuLvnrpflgY/np7vph4/vvIzov5nmoLfkv53or4Hmk43kvZzmm7TlrrnmmJPnkIbop6NcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopIHtcbiAgICAgICAgICAgIHZhciBjZW50ZXIgPSB7XG4gICAgICAgICAgICAgICAgeDogdXRpbC50b051bWJlcih0aGlzLmRhdGEubGVmdCkgKyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgLyAyLFxuICAgICAgICAgICAgICAgIHk6IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLnRvcCkgKyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpIC8gMixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQodXRpbC5yb3RhdGVQb2ludHMoW29sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbl0sIGNlbnRlciwgLXRoaXMudHJhbnNmb3JtLnJvdGF0ZVopLCAyKSwgcG9zMSA9IF9hWzBdLCBwb3MyID0gX2FbMV07XG4gICAgICAgICAgICBvZmZYID0gcG9zMi54IC0gcG9zMS54O1xuICAgICAgICAgICAgb2ZmWSA9IHBvczIueSAtIHBvczEueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2ZmWDogb2ZmWCxcbiAgICAgICAgICAgIG9mZlk6IG9mZllcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8vIOWPkeeUn+aXi+i9rFxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5yb3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoZSwgYXJncykge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdmFyIG9sZFBvc2l0aW9uID0gZS5vbGRQb3NpdGlvbiwgbmV3UG9zaXRpb24gPSBlLm5ld1Bvc2l0aW9uO1xuICAgICAgICB2YXIgY2VudGVyID0ge1xuICAgICAgICAgICAgeDogdXRpbC50b051bWJlcih0aGlzLmRhdGEubGVmdCkgKyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgLyAyLFxuICAgICAgICAgICAgeTogdXRpbC50b051bWJlcih0aGlzLmRhdGEudG9wKSArIHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmhlaWdodCkgLyAyLFxuICAgICAgICB9O1xuICAgICAgICAvLyDnvJbovpHlmajlnZDmoIdcbiAgICAgICAgdmFyIHBvczEgPSB0aGlzLmVkaXRvci50b0VkaXRvclBvc2l0aW9uKG9sZFBvc2l0aW9uKTtcbiAgICAgICAgdmFyIHBvczIgPSB0aGlzLmVkaXRvci50b0VkaXRvclBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgLy8g5Zug5Li6Y2VudGVy5piv55u45a+55LqO57yW6L6R5Zmo55qE77yM5omA5Lul5LqL5Lu25Z2Q5qCH5Lmf6ZyA6KaB6L2s5Yiw57yW6L6R5ZmoXG4gICAgICAgIHZhciBjeDEgPSBwb3MxLnggLSBjZW50ZXIueDtcbiAgICAgICAgdmFyIGN5MSA9IHBvczEueSAtIGNlbnRlci55O1xuICAgICAgICB2YXIgYW5nbGUxID0gTWF0aC5hdGFuKGN5MSAvIGN4MSk7XG4gICAgICAgIHZhciBjeDIgPSBwb3MyLnggLSBjZW50ZXIueDtcbiAgICAgICAgdmFyIGN5MiA9IHBvczIueSAtIGNlbnRlci55O1xuICAgICAgICB2YXIgYW5nbGUyID0gTWF0aC5hdGFuKGN5MiAvIGN4Mik7XG4gICAgICAgIGlmIChhbmdsZTEgPj0gMCAmJiBhbmdsZTIgPCAwKSB7XG4gICAgICAgICAgICBpZiAoY3gxID49IDAgJiYgY3kxID49IDAgJiYgY3gyIDw9IDAgJiYgY3kyID49IDApXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGN4MSA8PSAwICYmIGN5MSA8PSAwICYmIGN4MiA+PSAwICYmIGN5MiA8PSAwKVxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IE1hdGguUEkgKyBhbmdsZTI7XG4gICAgICAgICAgICAvL2Vsc2UgaWYoY3gxIDw9IDAgJiYgY3kxIDw9MCAmJiBjeDIgPj0gMCAmJiBjeTIgPj0gMCkgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbmdsZTEgPD0gMCAmJiBhbmdsZTIgPj0gMCkge1xuICAgICAgICAgICAgaWYgKGN4MSA+PSAwICYmIGN5MSA8PSAwICYmIGN4MiA8IDApXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gYW5nbGUyIC0gTWF0aC5QSTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSAtYW5nbGUyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFuZ2xlMSA+PSAwICYmIGFuZ2xlMiA+IDApIHtcbiAgICAgICAgICAgIC8vaWYoY3kyID09PSAwKSBhbmdsZTIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3Mucm90YXRpb24gPSBhbmdsZTIgLSBhbmdsZTE7XG4gICAgICAgIGlmIChhcmdzLnJvdGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaICs9IGFyZ3Mucm90YXRpb247XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5hcHBseSgpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyDlj5HnlJ/kuobml4vovazvvIzopoHlpITnkIbmjIfpkojlm77moIdcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMuaXRlbXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVzZXRDdXJzb3IodGhpcy50cmFuc2Zvcm0ucm90YXRlWik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDmiorlj5jmjaLlupTnlKjliLDnm67moIflhYPntKBcbiAgICBKQ29udHJvbGxlckNvbXBvbmVudC5wcm90b3R5cGUuYXBwbHlUb1RhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICAgIHg6IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmxlZnQpICsgKHRoaXMuaXNFZGl0b3IgPyB1dGlsLnRvTnVtYmVyKHRoaXMudGFyZ2V0LmRhdGEubGVmdCkgOiAwKSxcbiAgICAgICAgICAgIHk6IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLnRvcCkgKyAodGhpcy5pc0VkaXRvciA/IHV0aWwudG9OdW1iZXIodGhpcy50YXJnZXQuZGF0YS50b3ApIDogMClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50YXJnZXQuZGF0YS5sZWZ0ID0gcG9zLng7XG4gICAgICAgIHRoaXMudGFyZ2V0LmRhdGEudG9wID0gcG9zLnk7XG4gICAgICAgIC8vIOe8lui+keWZqOebuOWvueS9jee9ruS4gOebtOaYrzBcbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5sZWZ0ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS50b3AgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5mcm9tKHtcbiAgICAgICAgICAgIC8vc2tld1g6IHRoaXMudHJhbnNmb3JtLnNrZXdYLFxuICAgICAgICAgICAgLy9za2V3WTogdGhpcy50cmFuc2Zvcm0uc2tld1ksXG4gICAgICAgICAgICByb3RhdGVaOiB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHdpZHRoID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEud2lkdGgpIC0gdGhpcy5wYWRkaW5nU2l6ZSAqIDI7XG4gICAgICAgIHZhciBoZWlnaHQgPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpIC0gdGhpcy5wYWRkaW5nU2l6ZSAqIDI7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5kYXRhLndpZHRoICE9PSB3aWR0aClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmRhdGEuaGVpZ2h0ICE9PSBoZWlnaHQpXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5kYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICB9O1xuICAgIC8vIOmHjee9rlxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChpc0VkaXRvcikge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgaWYgKGlzRWRpdG9yID09PSB2b2lkIDApIHsgaXNFZGl0b3IgPSB0aGlzLmlzRWRpdG9yOyB9XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgZGVsZXRlIHRoaXMudGFyZ2V0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8g57yW6L6R5Zmo5LiN6K6p5peL6L2s5ZKMc2tld1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLml0ZW1zKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaXRlbS5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uZnJvbSh7XG4gICAgICAgICAgICByb3RhdGVaOiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOe7keWumuWIsOaTjeS9nOeahOWvueixoVxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgZV8zLCBfYTtcbiAgICAgICAgaWYgKCF0YXJnZXQuZWRpdGFibGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuaXNFZGl0b3IgPSB0YXJnZXQgPT09IHRoaXMuZWRpdG9yO1xuICAgICAgICB0aGlzLnJlc2V0KHRoaXMuaXNFZGl0b3IpO1xuICAgICAgICAvLyDnvJbovpHlmajnmoTor53vvIzpnIDopoHmiorlroPnmoTlnZDmoIfovazkuLrnm7jlr7nkuo7lrrnlmajnmoRcbiAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmlzRWRpdG9yID8gMCA6IHV0aWwudG9OdW1iZXIodGFyZ2V0LmRhdGEubGVmdCkpLFxuICAgICAgICAgICAgeTogKHRoaXMuaXNFZGl0b3IgPyAwIDogdXRpbC50b051bWJlcih0YXJnZXQuZGF0YS50b3ApKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGEubGVmdCA9IHBvcy54O1xuICAgICAgICB0aGlzLmRhdGEudG9wID0gcG9zLnk7XG4gICAgICAgIHRoaXMuZGF0YS53aWR0aCA9IHV0aWwudG9OdW1iZXIodGFyZ2V0LmRhdGEud2lkdGgpICsgdGhpcy5wYWRkaW5nU2l6ZSAqIDI7XG4gICAgICAgIHRoaXMuZGF0YS5oZWlnaHQgPSB1dGlsLnRvTnVtYmVyKHRhcmdldC5kYXRhLmhlaWdodCkgKyB0aGlzLnBhZGRpbmdTaXplICogMjtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uZnJvbSh7XG4gICAgICAgICAgICAvLyByb3RhdGVYOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVgsXG4gICAgICAgICAgICAvLyByb3RhdGVZOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVksXG4gICAgICAgICAgICByb3RhdGVaOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVosXG4gICAgICAgICAgICAvL3NjYWxlWDogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVgsXG4gICAgICAgICAgICAvL3NjYWxlWTogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVksXG4gICAgICAgICAgICAvL3NjYWxlWjogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVosXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5kYXRhLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8g57yW6L6R5Zmo5LiN6K6p5peL6L2s5ZKMc2tld1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLml0ZW1zKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaXRlbS5kYXRhLnZpc2libGUgPSAhdGhpcy5pc0VkaXRvciAmJiB0YXJnZXQuZWRpdGFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzmmK/nvJbovpHlmajvvIzliJnkuI3og73mjZXojrfkuovku7ZcbiAgICAgICAgLyp0aGlzLmNzcyh7XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiB0aGlzLmlzRWRpdG9yPyAnbm9uZScgOiAnYXV0bydcbiAgICAgICAgfSk7Ki9cbiAgICB9O1xuICAgIC8vIOino+mZpOe7keWumlxuICAgIEpDb250cm9sbGVyQ29tcG9uZW50LnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBKQ29udHJvbGxlckNvbXBvbmVudDtcbn0oSkNvbnRyb2xsZXJJdGVtKSk7XG5leHBvcnQgZGVmYXVsdCBKQ29udHJvbGxlckNvbXBvbmVudDtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgRXZlbnRFbWl0ZXIgZnJvbSAnLi4vY29uc3RhbnQvZXZlbnRFbWl0dGVyJztcbmltcG9ydCBKVHJhbnNmb3JtIGZyb20gJy4uL2NvbnN0YW50L3RyYW5zZm9ybSc7XG5pbXBvcnQgSlN0eWxlIGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xuaW1wb3J0IEpFdmVudCBmcm9tICcuLi9jb3JlL2V2ZW50JztcbmltcG9ydCB7IEpFbGVtZW50RGF0YSB9IGZyb20gJy4uL2NvbnN0YW50L2RhdGEnO1xuLyoqXG4gKiBAcHVibGljXG4gKi9cbnZhciBKRWxlbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkVsZW1lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnQob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5faWQgPSAnJztcbiAgICAgICAgLy8g57G75Z6L5ZCN56ewXG4gICAgICAgIF90aGlzLl90eXBlID0gJyc7XG4gICAgICAgIC8vIOWtkOWFg+e0oFxuICAgICAgICBfdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgLy8g5piv5ZCm5Y+v57yW6L6RXG4gICAgICAgIF90aGlzLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuX2lkID0gX3RoaXMuaWQgfHwgb3B0aW9uLmlkIHx8IHV0aWwudXVpZCgpO1xuICAgICAgICBfdGhpcy5fdHlwZSA9IF90aGlzLnR5cGUgfHwgb3B0aW9uLnR5cGUgfHwgJyc7XG4gICAgICAgIHZhciBub2RlVHlwZSA9IG9wdGlvbi5ub2RlVHlwZSB8fCAnZGl2JztcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBfdGhpcy5fZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlVHlwZSk7XG4gICAgICAgIGlmIChvcHRpb24uZWRpdG9yKVxuICAgICAgICAgICAgX3RoaXMuZWRpdG9yID0gb3B0aW9uLmVkaXRvcjtcbiAgICAgICAgLy8g5qC35byP5Luj55CG5aSE55CGXG4gICAgICAgIF90aGlzLnN0eWxlID0gSlN0eWxlLmNyZWF0ZVByb3h5KCk7XG4gICAgICAgIF90aGlzLnN0eWxlLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgX3RoaXMuc2V0RG9tU3R5bGUocy5uYW1lLCBzLnZhbHVlKTtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ3N0eWxlQ2hhbmdlJywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHlsZUNoYW5nZScsXG4gICAgICAgICAgICAgICAgZGF0YTogcyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IF90aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWPmOaNouaOp+WItueahOaYr+aguOW/g+WFg+e0oFxuICAgICAgICBfdGhpcy50cmFuc2Zvcm0gPSBKVHJhbnNmb3JtLmNyZWF0ZVByb3h5KG9wdGlvbi50cmFuc2Zvcm0sIHtcbiAgICAgICAgICAgIHRhcmdldDogX3RoaXMsXG4gICAgICAgICAgICAvLyDlpoLmnpzmjIflrprkuoblj6rlk43lupTmn5Dlh6DkuKrlsZ7mgKdcbiAgICAgICAgICAgIHdhdGNoUHJvcHM6IG9wdGlvbi50cmFuc2Zvcm1XYXRjaFByb3BzXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZGF0YVR5cGUgPSBvcHRpb24uZGF0YVR5cGUgfHwgSkVsZW1lbnREYXRhO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIF90aGlzLmRhdGEgPSBKRWxlbWVudERhdGEuY3JlYXRlUHJveHkobmV3IGRhdGFUeXBlKCkpO1xuICAgICAgICAvLyDlpoLmnpzmmK/nu4Tku7bvvIzkuI3lnKjov5nph4zov5vooYzmlbDmja7liJ3lp4vljJbosIPnlKhcbiAgICAgICAgX3RoaXMuaW5pdERhdGEob3B0aW9uKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAob3B0aW9uLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIF90aGlzLmNsYXNzTmFtZSA9IG9wdGlvbi5jbGFzc05hbWU7XG4gICAgICAgIF90aGlzLmJpbmRFdmVudCgpOyAvLyDkuovku7bnu5HlrppcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvLyDliJ3lp4vljJbkuIDkupvln7rnoYDlsZ7mgKdcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuaW5pdERhdGEgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIOWxnuaAp+WPmOWMluaYoOWwhOWIsHN0eWxlXG4gICAgICAgIHRoaXMuZGF0YS53YXRjaChbXG4gICAgICAgICAgICAnbGVmdCcsICd0b3AnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3pJbmRleCcsICd2aXNpYmxlJ1xuICAgICAgICBdLCB7XG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0eWxlLmRpc3BsYXkgPSBpdGVtLnZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5uYW1lID09PSAncm90YXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybS5yb3RhdGVaID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5uYW1lID09PSAnYW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybS5yb3RhdGVaID0gdXRpbC5kZWdUb1JhZChpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdHlsZVtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICd3aWR0aCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBfdGhpcy5zdHlsZS53aWR0aCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKCF3IHx8IHcgPT09ICdhdXRvJykgJiYgX3RoaXMuZG9tICYmIF90aGlzLmRvbS5jbGllbnRXaWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5kb20uY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAnaGVpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IF90aGlzLnN0eWxlLmhlaWdodCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKCFoIHx8IGggPT09ICdhdXRvJykgJiYgX3RoaXMuZG9tICYmIF90aGlzLmRvbS5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZG9tLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdyb3RhdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRyYW5zZm9ybS5yb3RhdGVaO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAnYW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsLnJhZFRvRGVnKF90aGlzLnRyYW5zZm9ybS5yb3RhdGVaKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zdHlsZVtuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb24uc3R5bGUpXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmFwcGx5KG9wdGlvbi5zdHlsZSk7XG4gICAgICAgIGlmIChvcHRpb24uZWRpdGFibGUgPT09IGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9uLnZpc2libGUgPT09IGZhbHNlKVxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb24uZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmZyb20ob3B0aW9uLmRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnu5Hlrprkuovku7ZcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuYmluZEV2ZW50ID0gZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyDkuovku7bmiZjnrqFcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBKRXZlbnQoZG9tIHx8IHRoaXMuZG9tKTtcbiAgICAgICAgdGhpcy5ldmVudC5pbml0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSAnbW91c2V1cCcpIHtcbiAgICAgICAgICAgICAgICAvLyDlj7PlgaXliJnlj5bmtojpgInmi6lcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgJiYgZS5idXR0b24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdjb250ZXh0bWVudScpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmVtaXQoZS50eXBlLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcImlkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcInR5cGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJjaGlsZHJlblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpFbGVtZW50LnByb3RvdHlwZSwgXCJkb21cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kb207XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVsZW1lbnQucHJvdG90eXBlLCBcImNsYXNzTmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9tLmNsYXNzTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5kb20uY2xhc3NOYW1lID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRWxlbWVudC5wcm90b3R5cGUsIFwidmlzaWJsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS52aXNpYmxlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEudmlzaWJsZSA9IHY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyDorr7nva5jc3PliLBkb21cbiAgICBKRWxlbWVudC5wcm90b3R5cGUuc2V0RG9tU3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdiYWNrZ3JvdW5kSW1hZ2UnICYmIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIS9eXFxzKnVybFxcKC8udGVzdCh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcInVybChcIi5jb25jYXQodmFsdWUsIFwiKVwiKTtcbiAgICAgICAgfVxuICAgICAgICB1dGlsLmNzcyh0aGlzLmRvbSwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8g6K6+572u5qC35byPXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLmNzcyA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB1dGlsLmNzcyh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gZG9t5bGe5oCnXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuYXR0cih0aGlzLmRvbSwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8g56e75L2NXG4gICAgSkVsZW1lbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gICAgICAgIHRoaXMuZGF0YS5sZWZ0ID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEubGVmdCkgKyBkeDtcbiAgICAgICAgdGhpcy5kYXRhLnRvcCA9IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLnRvcCkgKyBkeTtcbiAgICAgICAgdGhpcy5lbWl0KCdtb3ZlJywgeyBkeDogZHgsIGR5OiBkeSB9KTtcbiAgICB9O1xuICAgIC8vIOmHjee9ruWkp+Wwj1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAodywgaCkge1xuICAgICAgICBpZiAodHlwZW9mIHcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEud2lkdGggPSB3O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5oZWlnaHQgPSBoO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDmlrDlop7lrZDlhYPntKBcbiAgICBKRWxlbWVudC5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQsIHBhcmVudCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7IHBhcmVudCA9IHRoaXM7IH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNoaWxkXzEgPSBfX3ZhbHVlcyhjaGlsZCksIGNoaWxkXzFfMSA9IGNoaWxkXzEubmV4dCgpOyAhY2hpbGRfMV8xLmRvbmU7IGNoaWxkXzFfMSA9IGNoaWxkXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gY2hpbGRfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZF8xXzEgJiYgIWNoaWxkXzFfMS5kb25lICYmIChfYSA9IGNoaWxkXzEucmV0dXJuKSkgX2EuY2FsbChjaGlsZF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBKRWxlbWVudCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgcGFyZW50LmRvbS5hcHBlbmRDaGlsZChjaGlsZC5kb20pO1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5kb20uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDnp7vpmaToh6rlt7JcbiAgICBKRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9O1xuICAgIC8vIOenu+mZpOWtkOWFg+e0oFxuICAgIEpFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChlbC5kb20gJiYgZWwuZG9tLnBhcmVudEVsZW1lbnQgPT09IHRoaXMuZG9tKVxuICAgICAgICAgICAgdGhpcy5kb20ucmVtb3ZlQ2hpbGQoZWwuZG9tIHx8IGVsKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldID09PSBlbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkZWxldGUgZWwucGFyZW50O1xuICAgIH07XG4gICAgLy8g6L2s5Li6anNvblxuICAgIEpFbGVtZW50LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAocHJvcHMsIGlnKSB7XG4gICAgICAgIHZhciBlXzIsIF9hLCBlXzMsIF9iO1xuICAgICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkgeyBwcm9wcyA9IFtdOyB9XG4gICAgICAgIGlmIChpZyA9PT0gdm9pZCAwKSB7IGlnID0gZnVuY3Rpb24gKHApIHsgcmV0dXJuIHRydWU7IH07IH1cbiAgICAgICAgdmFyIGZpZWxkcyA9IF9fc3ByZWFkQXJyYXkoWyd0eXBlJywgJ2RhdGEnLCAnc3R5bGUnLCAndHJhbnNmb3JtJywgJ2lkJ10sIF9fcmVhZChwcm9wcyksIGZhbHNlKTtcbiAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgZmllbGRzXzEgPSBfX3ZhbHVlcyhmaWVsZHMpLCBmaWVsZHNfMV8xID0gZmllbGRzXzEubmV4dCgpOyAhZmllbGRzXzFfMS5kb25lOyBmaWVsZHNfMV8xID0gZmllbGRzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBmaWVsZHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGhpc1trXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBvYmpba10gPSB0aGlzW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2ICYmIHYudG9KU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialtrXSA9IHYudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzXzFfMSAmJiAhZmllbGRzXzFfMS5kb25lICYmIChfYSA9IGZpZWxkc18xLnJldHVybikpIF9hLmNhbGwoZmllbGRzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXModGhpcy5jaGlsZHJlbiksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gX2QudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcyB8fCBpZyhjaGlsZCkgPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIG9iai5jaGlsZHJlbi5wdXNoKGNoaWxkLnRvSlNPTigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8zXzEpIHsgZV8zID0geyBlcnJvcjogZV8zXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYiA9IF9jLnJldHVybikpIF9iLmNhbGwoX2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH07XG4gICAgSkVsZW1lbnQucHJvdG90eXBlLnRvSHRtbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tLm91dGVySFRNTDtcbiAgICB9O1xuICAgIC8vIOS4ouW8g1xuICAgIEpFbGVtZW50LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmV2ZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfTtcbiAgICByZXR1cm4gSkVsZW1lbnQ7XG59KEV2ZW50RW1pdGVyKSk7XG5leHBvcnQgZGVmYXVsdCBKRWxlbWVudDtcbiIsInZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmV4cG9ydCB2YXIgU3VwcG9ydEV2ZW50TmFtZXMgPSBbXG4gICAgJ21vdXNlZG93bicsICdtb3VzZXVwJywgJ21vdXNlb3ZlcicsICdtb3VzZW1vdmUnLCAnbW91c2VvdXQnLCAnbW91c2V3aGVlbCcsICdjbGljaycsICdkYmxjbGljaycsICdrZXlkb3duJywgJ2tleXByZXNzJywgJ2tleXVwJywgJ2JsdXInLCAnY2hhbmdlJywgJ2ZvY3VzJywgJ2RyYWcnLCAnZHJhZ2VudGVyJywgJ2RyYWdsZWF2ZScsICdkcmFnb3ZlcicsICdkcmFnc3RhcnQnLCAnZHJvcCcsICdjb250ZXh0bWVudSdcbl07XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEpFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBKRXZlbnQodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50Q2FjaGUgPSBbXTtcbiAgICAgICAgaWYgKHRhcmdldClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cbiAgICAvLyDop4TojIPljJbkuovku7blkI1cbiAgICBKRXZlbnQucHJvdG90eXBlLm5vcm1hbGl6ZUV2ZW50TmFtZXMgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0IHx8ICFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV2ZW50cyA9IG5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGV2ZW50cyA9IG5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDov4fmu6TmjonkuI3mlK/mjIHnmoTkuovku7ZcbiAgICAgICAgcmV0dXJuIGV2ZW50cy5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIFN1cHBvcnRFdmVudE5hbWVzLmluY2x1ZGVzKGspOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaJgOacieaUr+aMgeeahOS6i+S7tu+8jOWcqGluaXTkuYvliY3kuI3opoFvbu+8jOS4jeeEtuWcqGluaXTnmoTml7blgJnkvJrooqvph4rmlL7mjonjgIJcbiAgICAgKiBAcGFyYW0gaGFuZGxlciAtIOS6i+S7tuWkhOeQhuWHveaVsFxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSDlhYPntKBcbiAgICAgKi9cbiAgICBKRXZlbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoaGFuZGxlciwgdGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIOmHiuaUvuaOieWOn3RhcmdldOeahOS6i+S7tlxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKFN1cHBvcnRFdmVudE5hbWVzLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDnu5Hlrprkuovku7bliLBodG1s5a+56LGhXG4gICAgICogQHBhcmFtICBuYW1lIC0g5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtICBmdW4gLSDkuovku7blpITnkIblh73mlbBcbiAgICAgKiBAcGFyYW0gb3B0IC0g6YWN572u6YCJ6aG5XG4gICAgICovXG4gICAgSkV2ZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBmdW4sIG9wdCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKG9wdCA9PT0gdm9pZCAwKSB7IG9wdCA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBldmVudHMgPSB0aGlzLm5vcm1hbGl6ZUV2ZW50TmFtZXMobmFtZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBldmVudHNfMSA9IF9fdmFsdWVzKGV2ZW50cyksIGV2ZW50c18xXzEgPSBldmVudHNfMS5uZXh0KCk7ICFldmVudHNfMV8xLmRvbmU7IGV2ZW50c18xXzEgPSBldmVudHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGV2ZW50c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihuLCBmdW4sIG9wdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRDYWNoZS5wdXNoKFtuLCBmdW4sIG9wdF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzXzFfMSAmJiAhZXZlbnRzXzFfMS5kb25lICYmIChfYSA9IGV2ZW50c18xLnJldHVybikpIF9hLmNhbGwoZXZlbnRzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDku47lr7nosaHkuK3np7vpmaTkuovku7ZcbiAgICAgKiDkuI3kvKAg55qE5pe25YCZ5Yig6Zmk5omA5pyJ5LqL5Lu2XG4gICAgICogQHBhcmFtICBuYW1lIC0g5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtICBmdW4gLSDkuovku7blpITnkIblh73mlbBcbiAgICAgKiBAcGFyYW0gb3B0IC0g6YWN572u6YCJ6aG5XG4gICAgICovXG4gICAgSkV2ZW50LnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAobmFtZSwgZnVuLCBvcHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG9wdCA9PT0gdm9pZCAwKSB7IG9wdCA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBldmVudHMgPSB0aGlzLm5vcm1hbGl6ZUV2ZW50TmFtZXMobmFtZSk7XG4gICAgICAgIHRoaXMuX2V2ZW50Q2FjaGUgPSB0aGlzLl9ldmVudENhY2hlLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50cy5sZW5ndGggJiYgIWV2ZW50cy5pbmNsdWRlcyhpdGVtWzBdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChmdW4gJiYgZnVuICE9PSBpdGVtWzFdKSB8fCAodHlwZW9mIG9wdCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0ICE9PSBpdGVtWzJdKSkge1xuICAgICAgICAgICAgICAgIC8vIERPTSDopoHlrozlhajkuIDoh7TmiY3og73ooqtyZW1vdmVFdmVudExpc3RlbmVy5Yig6Zmk5o6JXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihpdGVtWzBdLCBpdGVtWzFdLCBpdGVtWzJdKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8g56e76Zmk5omA5pyJ55qE5LqL5Lu2XG4gICAgSkV2ZW50LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9mZigpO1xuICAgIH07XG4gICAgcmV0dXJuIEpFdmVudDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBKRXZlbnQ7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJy4uL2NvbnN0YW50L2V2ZW50RW1pdHRlcic7XG52YXIgSkZvbnREYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpGb250RGF0YShmYW1pbHksIHVybCwgZm9udCkge1xuICAgICAgICB0aGlzLmZhbWlseSA9IGZhbWlseTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuZm9udCA9IGZvbnQ7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKRm9udERhdGEucHJvdG90eXBlLCBcInN0YXR1c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9udClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb250LnN0YXR1cztcbiAgICAgICAgICAgIHJldHVybiAndW5sb2FkZWQnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgSkZvbnREYXRhLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBpZiAodXJsID09PSB2b2lkIDApIHsgdXJsID0gdGhpcy51cmw7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGY7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHVybCB8fCB0aGlzLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5mb250KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9udCA9IG5ldyBGb250RmFjZSh0aGlzLmZhbWlseSwgXCJ1cmwoXFxcIlwiLmNvbmNhdCh0aGlzLnVybCwgXCJcXFwiKVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZvbnQubG9hZCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmZvbnRzLmFkZChmKTsgLy8g55Sf5pWIXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSkZvbnREYXRhLnByb3RvdHlwZS50b0h0bWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIkBmb250LWZhY2Uge2ZvbnQtZmFtaWx5OiBcXFwiXCIuY29uY2F0KHRoaXMuZmFtaWx5LCBcIlxcXCI7IHNyYzogdXJsKFxcXCJcIikuY29uY2F0KHRoaXMudXJsLCBcIlxcXCIpfVwiKTtcbiAgICB9O1xuICAgIHJldHVybiBKRm9udERhdGE7XG59KCkpO1xuZXhwb3J0IHsgSkZvbnREYXRhIH07XG52YXIgSkZvbnRzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKRm9udHMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkZvbnRzKGZvbnRzKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5mb250Q29uZmlncyA9IG5ldyBNYXAoKTtcbiAgICAgICAgX3RoaXMuZm9udHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIOWIneWni+WMlum7mOiupOaUr+aMgeeahOWtl+S9k1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmb250cykpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZm9udHNfMSA9IF9fdmFsdWVzKGZvbnRzKSwgZm9udHNfMV8xID0gZm9udHNfMS5uZXh0KCk7ICFmb250c18xXzEuZG9uZTsgZm9udHNfMV8xID0gZm9udHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBmb250c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZvbnRDb25maWdzLnNldChmLmZhbWlseS50b0xvY2FsZUxvd2VyQ2FzZSgpLCBmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvbnRzXzFfMSAmJiAhZm9udHNfMV8xLmRvbmUgJiYgKF9hID0gZm9udHNfMS5yZXR1cm4pKSBfYS5jYWxsKGZvbnRzXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9udHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWVfMSBpbiBmb250cykge1xuICAgICAgICAgICAgICAgIGlmIChmb250c1tuYW1lXzFdICYmIHR5cGVvZiBmb250c1tuYW1lXzFdID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZm9udENvbmZpZ3Muc2V0KGZvbnRzW25hbWVfMV0uZmFtaWx5LnRvTG9jYWxlTG93ZXJDYXNlKCksIGZvbnRzW25hbWVfMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLmluaXQoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBKRm9udHMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5mb250cykge1xuICAgICAgICAgICAgdmFyIGZvbnRzID0gZG9jdW1lbnQuZm9udHMudmFsdWVzKCk7XG4gICAgICAgICAgICB2YXIgZm9udCA9IGZvbnRzLm5leHQoKTtcbiAgICAgICAgICAgIHdoaWxlIChmb250ICYmIGZvbnQuZG9uZSAmJiBmb250LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBuZXcgSkZvbnREYXRhKGZvbnQudmFsdWUuZmFtaWx5KTtcbiAgICAgICAgICAgICAgICAgICAgZi5mb250ID0gZm9udC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb250cy5zZXQoZi5mYW1pbHksIGYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb250ID0gZm9udHMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOezu+e7n+m7mOiupOeahOS4gOS6m+Wtl+S9k+aUr+aMgVxuICAgICAgICB0aGlzLmZvbnRzLnNldCgnYXJpYWwnLCBuZXcgSkZvbnREYXRhKCdBcmlhbCcsICcnLCBuZXcgRm9udEZhY2UoJ0FyaWFsJywgJycpKSk7XG4gICAgfTtcbiAgICAvLyDliqDovb3lrZfkvZNcbiAgICBKRm9udHMucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAobmFtZSwgdXJsKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmb250LCBjb25maWcsIGY7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250ID0gdGhpcy5nZXQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9udCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb250LnVybCAmJiAoZm9udC5zdGF0dXMgPT09ICd1bmxvYWRlZCcgfHwgZm9udC5zdGF0dXMgPT09ICdlcnJvcicpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZm9udC5sb2FkKCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmb250XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gdGhpcy5mb250Q29uZmlncy5nZXQobmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmsqHmnInphY3nva7mlK/mjIHnmoTlrZfkvZPvvIzliJnmiqXplJlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlxcdTZDQTFcXHU2NzA5XFx1NjUyRlxcdTYzMDFcXHU3Njg0IFwiLmNvbmNhdChuYW1lLCBcIiBcXHU1QjU3XFx1NEY1M1xcdTkxNERcXHU3RjZFXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gY29uZmlnLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQgPSBuZXcgSkZvbnREYXRhKG5hbWUsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbnRzLnNldChuYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCksIGZvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZm9udC5sb2FkKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdsb2FkJywgZik7IC8vIOWKoOi9veWtl+acrOS6i+S7tlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIOiOt+WPluW3suWKoOi9veeahOWtl+S9k1xuICAgIEpGb250cy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9udHMpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5mb250cy5oYXMobmFtZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9udHMuZ2V0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgLy8g5qOA5p+l5Yqg6L2955qE5a2X5L2T5piv5ZCm5a2Y5Zyo77yM5a2Y5Zyo5YiZ6L+U5Zue5a2X5L2T5a+56LGhXG4gICAgSkZvbnRzLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBmb250ID0gdGhpcy5nZXQobmFtZSk7XG4gICAgICAgIHJldHVybiAhIWZvbnQ7XG4gICAgfTtcbiAgICByZXR1cm4gSkZvbnRzO1xufShFdmVudEVtaXRlcikpO1xuZXhwb3J0IGRlZmF1bHQgSkZvbnRzO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCBKRWxlbWVudENzc1N0eWxlIGZyb20gJy4uL2NvbnN0YW50L3N0eWxlTWFwJztcbmltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbnZhciBOdW1iZXJTdHlsZU1hcCA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ3dpZHRoJywgJ2hlaWdodCddO1xudmFyIEpFbGVtZW50U3R5bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpFbGVtZW50U3R5bGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSkVsZW1lbnRTdHlsZShvcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuYXBwbHkob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8vIOaKiuagt+W8j+W6lOeUqOWIsOWFg+e0oOaIluW9k+WJjeWvueixoVxuICAgIEpFbGVtZW50U3R5bGUucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKGRhdGEsIHRhcmdldCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IHRoaXM7IH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5uYW1lcyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZV8xID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lXzEgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbbmFtZV8xXSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGRhdGFbbmFtZV8xXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEpFbGVtZW50U3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXRTdHlsZShuYW1lXzEsIGRhdGFbbmFtZV8xXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV8xXSA9IGRhdGFbbmFtZV8xXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICAvLyDmoLflvI/lr7nlupTnmoTlhYPntKBcbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS5hcHBseVRvID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hcHBseSh0aGlzLCBlbGVtZW50LnN0eWxlKTtcbiAgICB9O1xuICAgIC8vIOiuvue9ruagt+W8j1xuICAgIEpFbGVtZW50U3R5bGUucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8g6Kem5Y+R5omA5pyJ5pu05paw5YiwZG9tXG4gICAgSkVsZW1lbnRTdHlsZS5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hcHBseSh0aGlzKTtcbiAgICB9O1xuICAgIC8vIOi9rOS4umpzb25cbiAgICBKRWxlbWVudFN0eWxlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMubmFtZXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVfMiA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXzJdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgb2JqW25hbWVfMl0gPSB0aGlzW25hbWVfMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgLy8g55Sf5oiQ5qC35byP5Luj55CGXG4gICAgSkVsZW1lbnRTdHlsZS5jcmVhdGVQcm94eSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICBpZiAoc3R5bGUgPT09IHZvaWQgMCkgeyBzdHlsZSA9IHt9OyB9XG4gICAgICAgIHZhciBqc3R5bGUgPSBuZXcgSkVsZW1lbnRTdHlsZShzdHlsZSk7XG4gICAgICAgIC8vIOagt+W8j+S7o+eQhuWkhOeQhlxuICAgICAgICB2YXIgcHJveHkgPSBuZXcgUHJveHkoanN0eWxlLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHAsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0YXJnZXRbcF07XG4gICAgICAgICAgICAgICAgLy8g5pWw5a2X5qC35byP77yM5aSE55CGcHjpl67pophcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHAgPT09ICdzdHJpbmcnICYmIE51bWJlclN0eWxlTWFwLmluY2x1ZGVzKHApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2ID09PSAnMCcgfHwgdHlwZW9mIHYgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1dGlsLmlzUFhOdW1iZXIodikpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbC50b051bWJlcih2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDpnZ7nmb3lkI3ljZXmoLflvI/kuI3mlK/mjIHorr7nva5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnIHx8ICF0YXJnZXQubmFtZXMuaW5jbHVkZXMocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDmlbDlrZfmoLflvI/vvIzlpITnkIZweOmXrumimFxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXJTdHlsZU1hcC5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdXRpbC5pc051bWJlcih2YWx1ZSkgPyBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0U3R5bGUocCwgdmFsdWUpOyAvLyDlupTnlKjliLDlhYPntKDlkoznsbtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9O1xuICAgIHJldHVybiBKRWxlbWVudFN0eWxlO1xufShKRWxlbWVudENzc1N0eWxlKSk7XG5leHBvcnQgZGVmYXVsdCBKRWxlbWVudFN0eWxlO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgSkJhc2UgZnJvbSAnLi9jb3JlL2Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IEpUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcbmltcG9ydCBKSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlJztcbmltcG9ydCBKU3ZnIGZyb20gJy4vY29tcG9uZW50cy9zdmcnO1xuaW1wb3J0IEpFbGVtZW50IGZyb20gJy4vY29yZS9lbGVtZW50JztcbmltcG9ydCBKQ29udHJvbGxlciBmcm9tICcuL2NvcmUvY29udHJvbGxlcic7XG5pbXBvcnQgSkZvbnRzIGZyb20gJy4vY29yZS9mb250cyc7XG5pbXBvcnQgdXRpbCBmcm9tICcuL2xpYi91dGlsJztcbmltcG9ydCB7IFN1cHBvcnRFdmVudE5hbWVzIH0gZnJvbSAnLi9jb3JlL2V2ZW50Jztcbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgSkVkaXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSkVkaXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKRWRpdG9yKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9uLnN0eWxlID0gb3B0aW9uLnN0eWxlIHx8IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKG9wdGlvbi5zdHlsZSwge1xuICAgICAgICAgICAgJ2JveFNoYWRvdyc6ICcwIDAgMTBweCAxMHB4ICNjY2MnLFxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kU2l6ZSc6ICcxMDAlIDEwMCUnLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSDlpJblsYLlj6rlk43lupRa6L205peL6L2sXG4gICAgICAgIG9wdGlvbi50cmFuc2Zvcm1XYXRjaFByb3BzID0gW1xuICAgICAgICAgICAgJ3JvdGF0ZVonLCAnc2NhbGVYJywgJ3NjYWxlWSdcbiAgICAgICAgXTtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb24pIHx8IHRoaXM7XG4gICAgICAgIC8vIOaJgOacieaUr+aMgeeahOexu+Wei1xuICAgICAgICBfdGhpcy5zaGFwZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uLmNvbnRhaW5lciA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBvcHRpb24uY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9uLmNvbnRhaW5lcik7XG4gICAgICAgIF90aGlzLnZpZXcgPSBuZXcgSkVsZW1lbnQoe1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAnYm9yZGVyJzogJzAnLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzAnLFxuICAgICAgICAgICAgICAgICdtYXJnaW4nOiAnMCcsXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcxMDAlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWtl+S9k+euoeeQhuWunuS+i1xuICAgICAgICBfdGhpcy5mb250cyA9IG5ldyBKRm9udHMob3B0aW9uLmZvbnRzKTtcbiAgICAgICAgX3RoaXMudGFyZ2V0LmNzcyh7XG4gICAgICAgICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdGlvbi5jb250YWluZXIpXG4gICAgICAgICAgICBvcHRpb24uY29udGFpbmVyLmFwcGVuZENoaWxkKF90aGlzLnZpZXcuZG9tKTtcbiAgICAgICAgX3RoaXMudmlldy5hZGRDaGlsZChfdGhpcy5kb20pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIF90aGlzLnJlZ1NoYXBlKHsgJ2ltYWdlJzogSkltYWdlLCAndGV4dCc6IEpUZXh0LCAnc3ZnJzogSlN2ZyB9KTtcbiAgICAgICAgX3RoaXMuaW5pdChvcHRpb24pO1xuICAgICAgICBfdGhpcy5iaW5kRXZlbnQoX3RoaXMudmlldy5kb20pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8vIOWIneWni+WMluaVtOS4que8lui+keWZqFxuICAgIEpFZGl0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChvcHRpb24uc3R5bGUuY29udGFpbmVyQmFja2dyb3VuZENvbG9yKVxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9uLnN0eWxlLmNvbnRhaW5lckJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgLy8g55Sf5oiQ5o6n5Yi25ZmoXG4gICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIgPSBuZXcgSkNvbnRyb2xsZXIoe1xuICAgICAgICAgICAgZWRpdG9yOiB0aGlzLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzdHlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZU5vZGUuaW5uZXJIVE1MID0gXCIuai1kZXNpZ24tZWRpdG9yLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmotZGVzaWduLWVkaXRvci1jb250YWluZXI6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIjtcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoc3R5bGVOb2RlKTtcbiAgICAgICAgLy8g5a2X5L2T5Yqg6L295oiQ5Yqf77yM5ZCM5pe25Yqg5YWl5YiwZG9t57uT5p6E5LitXG4gICAgICAgIHRoaXMuZm9udHMub24oJ2xvYWQnLCBmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICAgICAgc3R5bGVOb2RlLmFwcGVuZChmb250LnRvSHRtbCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5zZWxlY3QoX3RoaXMpOyAvLyDpgInkuK3oh6rlt7JcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRDb250cm9sbGVyLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5Yi35paw5qC35byPXG4gICAgICAgIHRoaXMuc3R5bGUucmVmcmVzaCgpO1xuICAgICAgICB0aGlzLnJlc2l6ZSgpOyAvLyDop6blj5HkuIDmrKHlpKflsI/mlLnlj5hcbiAgICAgICAgLy90aGlzLmJpbmRFbGVtZW50RXZlbnQodGhpcyk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVkaXRvci5wcm90b3R5cGUsIFwiY2hpbGRyZW5cIiwge1xuICAgICAgICAvLyDph43lhpnlrZDpm4bkuLp0YXJnZXRcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQuY2hpbGRyZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSkVkaXRvci5wcm90b3R5cGUsIFwic2VsZWN0ZWRFbGVtZW50c1wiLCB7XG4gICAgICAgIC8vIOiiq+mAieS4reeahOWFg+e0oFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMuY2hpbGRyZW4pLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBKQmFzZSAmJiBlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIOe7keWumuS6i+S7tlxuICAgIEpFZGl0b3IucHJvdG90eXBlLmJpbmRFdmVudCA9IGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldylcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuYmluZEV2ZW50LmNhbGwodGhpcywgdGhpcy52aWV3LmRvbSk7IC8vIOe8lui+keWZqOS6i+S7tue7keWIsOaVtOS4quWuueWZqOS4ilxuICAgIH07XG4gICAgLy8g6YCJ5Lit5p+Q5Liq5YWD57SgXG4gICAgSkVkaXRvci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgLy8g6YCJ5oqK5omA5pyJ5bey6YCJ5oup55qE5Y+W5raIXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudHMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHAgIT09IGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHAuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZWwuZWRpdGFibGUpXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlci5iaW5kKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRDb250cm9sbGVyLnVuYmluZChlbCk7XG4gICAgfTtcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAod2lkdGggPT09IHZvaWQgMCkgeyB3aWR0aCA9IHRoaXMuZGF0YS53aWR0aDsgfVxuICAgICAgICBpZiAoaGVpZ2h0ID09PSB2b2lkIDApIHsgaGVpZ2h0ID0gdGhpcy5kYXRhLmhlaWdodDsgfVxuICAgICAgICB0aGlzLmF0dHIoJ2RhdGEtc2l6ZScsIFwiXCIuY29uY2F0KHdpZHRoLCBcIipcIikuY29uY2F0KGhlaWdodCkpO1xuICAgICAgICB0aGlzLmRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5kYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kYXRhLmxlZnQgPSB1dGlsLnRvTnVtYmVyKF90aGlzLnZpZXcuZG9tLmNsaWVudFdpZHRoKSAvIDIgLSB1dGlsLnRvTnVtYmVyKHdpZHRoKSAvIDI7XG4gICAgICAgICAgICBfdGhpcy5kYXRhLnRvcCA9IHV0aWwudG9OdW1iZXIoX3RoaXMudmlldy5kb20uY2xpZW50SGVpZ2h0KSAvIDIgLSB1dGlsLnRvTnVtYmVyKGhlaWdodCkgLyAyO1xuICAgICAgICAgICAgX3RoaXMuZW1pdCgncmVzaXplJywge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9O1xuICAgIC8vIOa3u+WKoOWFg+e0oOWIsOeUu+W4g1xuICAgIEpFZGl0b3IucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLmFkZENoaWxkLmNhbGwodGhpcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5iaW5kRWxlbWVudEV2ZW50KGNoaWxkKTtcbiAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpczsgLy8g5oqK54i26K6+572u5oiQ57yW6L6R5ZmoXG4gICAgICAgIGNoaWxkLmVkaXRvciA9IHRoaXM7XG4gICAgICAgIC8vIOWIt+aWsOagt+W8j1xuICAgICAgICBjaGlsZC5zdHlsZS5yZWZyZXNoKCk7XG4gICAgICAgIGNoaWxkLmVkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTsgLy8g5b2T5YmN5piv5ZCm5Y+v57yW6L6RXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZENoaWxkKGNoaWxkLCB0aGlzLnRhcmdldCk7XG4gICAgfTtcbiAgICAvLyDnp7vpmaRcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwgPT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUud2Fybign5LiN6IO956e76Zmk6Ieq5beyJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsLm9mZihTdXBwb3J0RXZlbnROYW1lcyk7XG4gICAgICAgICAgICBlbC5vZmYoWydzZWxlY3QnLCAnc3R5bGVDaGFuZ2UnLCAnZGF0YUNoYW5nZSddKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH07XG4gICAgLy8g57uR5a6a5YWD57Sg5LqL5Lu2XG4gICAgSkVkaXRvci5wcm90b3R5cGUuYmluZEVsZW1lbnRFdmVudCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIOebkeWQrOagt+W8j+aUueWPmFxuICAgICAgICBlbC5vbihfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChTdXBwb3J0RXZlbnROYW1lcyksIGZhbHNlKSwgW1xuICAgICAgICAgICAgJ3N0eWxlQ2hhbmdlJywgJ3NlbGVjdCcsICdkYXRhQ2hhbmdlJ1xuICAgICAgICBdLCBmYWxzZSksIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyDlt6blgaXpgInkuK1cbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGUuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50Q29udHJvbGxlci5vbkRyYWdTdGFydChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOmAieS4reeKtuaAgeaUueWPmFxuICAgICAgICAgICAgZWxzZSBpZiAoZS50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5aaC5p6c5piv5a2X5L2T5L6d6LWW77yM5YiZ5qOA5p+l5a2X5L2T5pSv5oyB5oOF5Ya1XG4gICAgICAgICAgICBlbHNlIGlmIChlLnR5cGUgPT09ICdzdHlsZUNoYW5nZScpIHtcbiAgICAgICAgICAgICAgICAvLyDlrZfkvZPlj5HnlJ/mlLnlj5jvvIzpnIDopoHlgZpjaGVjaywg5bm25Yqg6L295a2X5L2T55Sf5pWIXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5uYW1lID09PSAnZm9udEZhbWlseScgJiYgZS5kYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZm9udHMubG9hZChlLmRhdGEudmFsdWUpLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTsgLy8g5byC5q2l5Yqg6L295a2X5L2TXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5lbWl0KCdlbGVtZW50Q2hhbmdlJywge1xuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBlLmRhdGEgfHwge30sXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyDpgJrov4dJROiOt+WPluWtkOWFg+e0oFxuICAgIEpFZGl0b3IucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLmNoaWxkcmVuKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5pZCA9PT0gaWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyDmiopkb21jdW1lbnTlnZDmoIfovazkuLrnvJbovpHlmajnm7jlr7nlnZDmoIdcbiAgICBKRWRpdG9yLnByb3RvdHlwZS50b0VkaXRvclBvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgICAvLyDnvJbovpHlmajlnZDmoIdcbiAgICAgICAgdmFyIGVkaXRvclBvcyA9IHV0aWwuZ2V0RWxlbWVudEJvdW5kaW5nUmVjdCh0aGlzLnRhcmdldC5kb20pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogcG9zLnggLSBlZGl0b3JQb3MueCxcbiAgICAgICAgICAgIHk6IHBvcy55IC0gZWRpdG9yUG9zLnlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEpFZGl0b3IucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNzcyh7XG4gICAgICAgICAgICAnYmFja2dyb3VuZENvbG9yJzogJyNmZmYnLFxuICAgICAgICAgICAgJ2JhY2tncm91bmRJbWFnZSc6ICcnXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIuZGF0YS52aXNpYmxlID0gZmFsc2U7XG4gICAgfTtcbiAgICAvLyDnvKnmlL5cbiAgICBKRWRpdG9yLnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IHg7IH1cbiAgICAgICAgaWYgKHggPCAwLjEgfHwgeSA8IDAuMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2NhbGVYID0geDtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2NhbGVZID0geTtcbiAgICB9O1xuICAgIC8vIOazqOWGjOiHquWumuS5iee7hOS7tlxuICAgIEpFZGl0b3IucHJvdG90eXBlLnJlZ1NoYXBlID0gZnVuY3Rpb24gKG5hbWUsIHNoYXBlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnU2hhcGUobiwgbmFtZVtuXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hhcGVzLmhhcyhuYW1lKSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiXFx1NTE0M1xcdTdEMjBcXHU3QzdCXFx1NTc4QlwiLmNvbmNhdChuYW1lLCBcIlxcdTVERjJcXHU3RUNGXFx1NUI1OFxcdTU3MjhcIikpO1xuICAgICAgICB0aGlzLnNoYXBlcy5zZXQobmFtZSwgc2hhcGUpO1xuICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgfTtcbiAgICAvLyDliJvlu7rlhYPntKBcbiAgICBKRWRpdG9yLnByb3RvdHlwZS5jcmVhdGVTaGFwZSA9IGZ1bmN0aW9uICh0eXBlLCBvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XG4gICAgICAgIHZhciBzaGFwZSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHRoaXMuc2hhcGVzLmdldCh0eXBlKSA6IHR5cGU7XG4gICAgICAgIGlmICghc2hhcGUpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiXCIuY29uY2F0KHR5cGUsIFwiXFx1NEUwRFxcdTVCNThcXHU1NzI4XFx1NzY4NFxcdTUxNDNcXHU3RDIwXFx1N0M3QlxcdTU3OEJcIikpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdmFyIGVsID0gbmV3IHNoYXBlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb24pLCB7IGVkaXRvcjogdGhpcywgdHlwZTogdHlwZSB9KSk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9O1xuICAgIEpFZGl0b3IucHJvdG90eXBlLmZyb21KU09OID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIGVfMywgX2E7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICBpZiAoZGF0YS5zdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5hcHBseShkYXRhLnN0eWxlKTsgLy8g5bqU55So5qC35byPXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNpemUoZGF0YS53aWR0aCB8fCBkYXRhLmRhdGEud2lkdGgsIGRhdGEuaGVpZ2h0IHx8IGRhdGEuZGF0YS5oZWlnaHQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhkYXRhLmNoaWxkcmVuKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBjID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCFjLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5jcmVhdGVTaGFwZShjLnR5cGUsIGMpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEpFZGl0b3I7XG59KEpCYXNlKSk7XG5leHBvcnQgZGVmYXVsdCBKRWRpdG9yO1xuZXhwb3J0IHsgSkVkaXRvciwgSkltYWdlLCBKVGV4dCwgfTtcbiIsImltcG9ydCB1dGlsIGZyb20gJy4vbGliL3V0aWwnO1xuaW1wb3J0IEpCYXNlQ29tcG9uZW50IGZyb20gJy4vY29yZS9iYXNlQ29tcG9uZW50JztcbmltcG9ydCBKVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dCc7XG5pbXBvcnQgSkltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZSc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi9jb3JlL2VsZW1lbnQnO1xuaW1wb3J0IEpFZGl0b3IgZnJvbSAnLi9lZGl0b3InO1xuaW1wb3J0IEpEYXRhIGZyb20gJy4vY29uc3RhbnQvZGF0YSc7XG5pbXBvcnQgSkV2ZW50IGZyb20gJy4vY29yZS9ldmVudCc7XG5leHBvcnQgeyBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24sIEpFbGVtZW50U3R5bGVQcm9wZXJ0eSB9IGZyb20gJy4vY29uc3RhbnQvc3R5bGVNYXAnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudC9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnQvdHlwZXMnO1xuZXhwb3J0IHsgdXRpbCwgSkV2ZW50LCBKQmFzZUNvbXBvbmVudCwgSlRleHQsIEpEYXRhLCBKSW1hZ2UsIEpFbGVtZW50LCBKRWRpdG9yLCB9O1xuZXhwb3J0IGRlZmF1bHQgSkVkaXRvcjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyDmmK/lkKbmmK/mlbDlrZdcbiAgICBpc051bWJlcjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJyB8fCAvXlxccypbXFxkXFwuXStcXHMqJC8udGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaYr+W4puWDj+e0oOWNleS9jeeahOWtl+espuS4slxuICAgIGlzUFhOdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiAvXlxccypbXFxkXFwuXStcXHMqcHhcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaYr+W4puinkuW6puWNleS9jeeahOWtl+espuS4slxuICAgIGlzRGVnTnVtYmVyOiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gL15cXHMqW1xcZFxcLl0rXFxzKmRlZ1xccyovaS50ZXN0KHYpO1xuICAgIH0sXG4gICAgLy8g5piv5ZCm5piv5bim5byn5bqm5Y2V5L2N55qE5a2X56ym5LiyXG4gICAgaXNSYWROdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiAvXlxccypbXFxkXFwuXStcXHMqcmFkXFxzKi9pLnRlc3Qodik7XG4gICAgfSxcbiAgICAvLyDovazkuLrlg4/ntKDlrZfnrKbkuLLmoLzlvI8gXG4gICAgdG9QWDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdweCc7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH0sXG4gICAgLy8g5bim5YOP57Sg5oiW5YW25a6D5Y2V5L2N55qE6L2s5o2i5Li65pWw5a2XXG4gICAgdG9OdW1iZXI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih2KTtcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodik7XG4gICAgfSxcbiAgICAvLyDlvKfluqbovazop5LluqZcbiAgICByYWRUb0RlZzogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgfSxcbiAgICAvLyDop5LluqbovazlvKfluqZcbiAgICBkZWdUb1JhZDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgfSxcbiAgICAvLyDovazkuLrop5LluqbmoLzlvI9cbiAgICB0b0RlZzogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdkZWcnO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNSYWROdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RlZyh0aGlzLnJhZFRvRGVnKHBhcnNlRmxvYXQodikpKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvLyDovazkuLrlvKfluqbmoLzlvI9cbiAgICB0b1JhZDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdyYWQnO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNEZWdOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1JhZCh0aGlzLmRlZ1RvUmFkKHBhcnNlRmxvYXQodikpKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5blhYPntKDnmoTnu53lr7nlrprkvY1cbiAgICAgKiBAcGFyYW0gIGVsIC0g55uu5qCH5YWD57Sg5a+56LGhXG4gICAgICogQHJldHVybnMgIOS9jee9ruWvueixoSh0b3AsbGVmdClcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50UG9zaXRpb246IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgcG9zID0geyBcInlcIjogMCwgXCJ4XCI6IDAgfTtcbiAgICAgICAgaWYgKCFlbClcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIGlmIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIHdoaWxlIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBwb3MueSArPSBlbC5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgcG9zLnggKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGVsc2UgaWYgKGVsLngpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBvcy54ICs9IGVsLng7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbHNlIGlmIChlbC55KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwb3MueSArPSBlbC55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfSxcbiAgICAvLyDojrflj5blhYPntKBib3VuZHNcbiAgICBnZXRFbGVtZW50Qm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IHtcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgYm91bmRzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgYm91bmRzLnggKz0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIGJvdW5kcy55ICs9IHNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLmdldEVsZW1lbnRQb3NpdGlvbihlbCk7XG4gICAgICAgICAgICBib3VuZHMueCA9IHBvcy54O1xuICAgICAgICAgICAgYm91bmRzLnkgPSBwb3MueTtcbiAgICAgICAgICAgIGJvdW5kcy53aWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgYm91bmRzLmhlaWdodCA9IGVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH0sXG4gICAgLy8g5oqKZG9tY3VtZW505Z2Q5qCH6L2s5Li65oyH5a6a5YWD57Sg55u45a+55Z2Q5qCHXG4gICAgdG9Eb21Qb3NpdGlvbjogZnVuY3Rpb24gKHBvcywgZG9tKSB7XG4gICAgICAgIHZhciBkb21Qb3MgPSB0aGlzLmdldEVsZW1lbnRCb3VuZGluZ1JlY3QoZG9tKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHBvcy54IC0gZG9tUG9zLngsXG4gICAgICAgICAgICB5OiBwb3MueSAtIGRvbVBvcy55XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmiorkuIDkuKrmiJblpJrkuKrngrnnu5Xmn5DkuKrngrnml4vovazkuIDlrprop5LluqZcbiAgICAgKiDlhYjmiorlnZDmoIfljp/ngrnnp7vliLDml4vovazkuK3lv4PngrnvvIzorqHnrpflkI7np7vlm55cbiAgICAgKiBAcGFyYW0gIHAgLSDkuIDkuKrmiJblpJrkuKrngrlcbiAgICAgKiBAcGFyYW0gIHJwIC0gIOaXi+i9rOS4reW/g+eCuVxuICAgICAqIEBwYXJhbSAgciAtIOaXi+i9rOinkuW6plxuICAgICAqL1xuICAgIHJvdGF0ZVBvaW50czogZnVuY3Rpb24gKHAsIGNlbnRlciwgcikge1xuICAgICAgICBpZiAoIXIgfHwgIXApXG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHIpO1xuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHApKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciB4MSA9IHBbaV0ueCAtIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIHZhciB5MSA9IHBbaV0ueSAtIGNlbnRlci55O1xuICAgICAgICAgICAgICAgIHBbaV0ueCA9IHgxICogY29zIC0geTEgKiBzaW4gKyBjZW50ZXIueDtcbiAgICAgICAgICAgICAgICBwW2ldLnkgPSB4MSAqIHNpbiArIHkxICogY29zICsgY2VudGVyLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgeDEgPSBwLnggLSBjZW50ZXIueDtcbiAgICAgICAgICAgIHZhciB5MSA9IHAueSAtIGNlbnRlci55O1xuICAgICAgICAgICAgcC54ID0geDEgKiBjb3MgLSB5MSAqIHNpbiArIGNlbnRlci54O1xuICAgICAgICAgICAgcC55ID0geDEgKiBzaW4gKyB5MSAqIGNvcyArIGNlbnRlci55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgIH0sXG4gICAgLy8g6K6+572u5qC35byPXG4gICAgY3NzOiBmdW5jdGlvbiAoZG9tLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobmFtZSkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzKGRvbSwgbiwgbmFtZVtuXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBkb23lsZ7mgKdcbiAgICBhdHRyOiBmdW5jdGlvbiAoZG9tLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSArICcnKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkb20uZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmnKzlnLDllK/kuIBJRO+8jOi/meS4quWPquimgeS/neivgeW9k+WJjee6v+eoi+WUr+S4gOWNs+WPr++8jOmdnuWFqOeQg+WUr+S4gFxuICAgIHV1aWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgcm5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDApO1xuICAgICAgICByZXR1cm4gKHRpbWUgKyBybmQpLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICAvLyDmiorlm77niYfml4vovazkuIDlrprop5LluqbvvIzov5Tlm55iYXNlNjRcbiAgICByb3RhdGVJbWFnZTogZnVuY3Rpb24gKHVybCwgcm90YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ZzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN2cy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdHggPSBjdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN2cy53aWR0aCwgY3ZzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjdnMud2lkdGggLyAyLCBjdnMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJvdGF0ZShyb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtY3ZzLndpZHRoIC8gMiwgLWN2cy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBjdnMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0ICYmIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDor7fmsYLov5znqIvotYTmupBcbiAgICByZXF1ZXN0OiBmdW5jdGlvbiAodXJsLCBvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgLy/mlrDlu7pYTUxIdHRwUmVxdWVzdOWvueixoVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZV8xIGluIG9wdGlvbi5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihuYW1lXzEsIG9wdGlvbi5oZWFkZXJzW25hbWVfMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWVfMiBpbiBvcHRpb24uZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChcIlwiLmNvbmNhdChuYW1lXzIsIFwiPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbi5kYXRhW25hbWVfMl0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IG9wdGlvbi5tZXRob2QgPyBvcHRpb24ubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICh1cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JykgKyBwYXJhbXMuam9pbignJicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHsgLy/miJDlip/lrozmiJBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liKTmlq3nm7jlupTnu5PmnpzvvJpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y+R6YCB6K+35rGC77yaXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKG1ldGhvZCA9PT0gJ1BPU1QnID8gcGFyYW1zLmpvaW4oJyYnKSA6IG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiJdfQ==
