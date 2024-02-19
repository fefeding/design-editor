(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _baseComponent = _interopRequireDefault(require("../core/baseComponent"));
var _data = require("../constant/data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/**
 * 图像组件类 JImage，继承于基础组件 Base。
 * @public
 */
var JImage = exports["default"] = /*#__PURE__*/function (_Base) {
  _inherits(JImage, _Base);
  /**
   * JImage组件构造函数。
   * @param option - 图像选项，包括 url, src 等。
   */
  function JImage() {
    var _this;
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, JImage);
    _this = _callSuper(this, JImage, [_objectSpread(_objectSpread({}, option), {}, {
      nodeType: 'img',
      dataType: _data.JImageData
    })]);
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
  _createClass(JImage, [{
    key: "toJSON",
    value: function toJSON() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      props.push('src');
      return _get(_getPrototypeOf(JImage.prototype), "toJSON", this).call(this, props);
    }
  }]);
  return JImage;
}(_baseComponent["default"]);

},{"../constant/data":4,"../core/baseComponent":9}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _baseComponent = _interopRequireDefault(require("../core/baseComponent"));
var _util = _interopRequireDefault(require("../lib/util"));
var _data = require("../constant/data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var JSvg = exports["default"] = /*#__PURE__*/function (_Base) {
  _inherits(JSvg, _Base);
  function JSvg() {
    var _this;
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, JSvg);
    _this = _callSuper(this, JSvg, [_objectSpread(_objectSpread({}, option), {}, {
      dataType: _data.JSvgData
    })]);
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
  _createClass(JSvg, [{
    key: "renderSvg",
    value: function renderSvg(svg) {
      this.data.map(function (name, value) {
        svg = svg.replace(new RegExp("\\{".concat(name, "\\}"), 'g'), value);
      });
      return svg;
    }
    // 加载svg内容
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url,
          svg,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = _args.length > 0 && _args[0] !== undefined ? _args[0] : this.data.url;
              _context.next = 3;
              return _util["default"].request(url);
            case 3:
              svg = _context.sent;
              this.data.svg = svg;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function load() {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "toJSON",
    value: function toJSON() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      props.push('src');
      return _get(_getPrototypeOf(JSvg.prototype), "toJSON", this).call(this, props);
    }
  }]);
  return JSvg;
}(_baseComponent["default"]);

},{"../constant/data":4,"../core/baseComponent":9,"../lib/util":18}],3:[function(require,module,exports){
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 文本组件类 JText，继承于基础组件 Base。
 * @public
 */
var JText = exports["default"] = /*#__PURE__*/function (_Base) {
  _inherits(JText, _Base);
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
  function JText() {
    var _this;
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, JText);
    option.style = _objectSpread({
      fontFamily: 'Arial',
      textAlign: 'left',
      fontSize: 22,
      fontWeight: 'normal',
      fontStyle: 'normal',
      wordBreak: "keep-all",
      wordWrap: "break-word"
    }, option.style);
    _this = _callSuper(this, JText, [_objectSpread(_objectSpread({}, option), {}, {
      nodeType: 'div',
      dataType: _data.JTextData
    })]);
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
    JText.TextControlCache.set(_this.id, _assertThisInitialized(_this)); // 缓存起来
    return _this;
  }
  // 所有 JText 实例的缓存
  _createClass(JText, [{
    key: "edit",
    value:
    /**
     * 进入文本编辑状态
     */
    function edit() {
      var _this2 = this;
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
          _this2.closeEdit();
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
    }
    /**
     * 退出文本编辑状态
     */
  }, {
    key: "closeEdit",
    value: function closeEdit() {
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
    }
    /**
     * Div元素的JSON表现形式，包括 'text' 等属性
     * @param props - 要序列化的属性列表
     * @returns JSON对象，表示div元素
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      props.push('text');
      return _get(_getPrototypeOf(JText.prototype), "toJSON", this).call(this, props);
    }
    /**
     * 移除 JText 实例
     */
  }, {
    key: "dispose",
    value: function dispose() {
      JText.TextControlCache["delete"](this.id);
      _get(_getPrototypeOf(JText.prototype), "dispose", this).call(this);
    }
  }]);
  return JText;
}(_baseComponent["default"]);
_defineProperty(JText, "TextControlCache", new Map());

},{"../constant/data":4,"../constant/styleMap":6,"../core/baseComponent":9,"../core/element":11,"../lib/util":18}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.JTextData = exports.JSvgData = exports.JImageData = exports.JElementData = void 0;
var _eventEmitter = _interopRequireDefault(require("./eventEmitter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * JData 类：提供了一种方式来处理和管理数据
 * @public
 */
var JData = exports["default"] = /*#__PURE__*/function (_EventEmiter) {
  _inherits(JData, _EventEmiter);
  function JData() {
    var _this;
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, JData);
    _this = _callSuper(this, JData);
    /** 用于存放数据的对象 */
    _defineProperty(_assertThisInitialized(_this), "data", {});
    /** 存放数据变化的监听器 */
    _defineProperty(_assertThisInitialized(_this), "watcher", new Map());
    _this.from(data);
    return _this;
  }
  _createClass(JData, [{
    key: "watch",
    value:
    // 监控某个属性变化
    function watch(name, watcher) {
      if (Array.isArray(name)) {
        var _iterator = _createForOfIteratorHelper(name),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var n = _step.value;
            if (!n) continue;
            this.watch(n, watcher);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
    }
    // 属性改变
  }, {
    key: "propertyChange",
    value: function propertyChange(name, value) {
      if (typeof value !== 'undefined') this.data[name] = value;else {
        value = this.data[name];
      }
      var watches = this.watcher.get(name);
      if (watches && watches.length) {
        var _iterator2 = _createForOfIteratorHelper(watches),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var w = _step2.value;
            w && w.set && w.set({
              name: name,
              value: value
            });
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      this.emit('change', {
        name: name,
        value: value
      });
    }
    // 读取属性
  }, {
    key: "getProperty",
    value: function getProperty(name) {
      var watches = this.watcher.get(name);
      if (watches && watches.length) {
        var _iterator3 = _createForOfIteratorHelper(watches),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var w = _step3.value;
            var v = w && w.get && w.get(name);
            if (typeof v !== 'undefined') return v;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this.data[name];
    }
    /**
     * 从对象中导入数据到当前实例
     * @param data - 需导入的数据对象
     * @returns 返回当前 JData 实例
     */
  }, {
    key: "from",
    value: function from(data) {
      if (this.data) Object.assign(this, data);
      return this;
    }
    // 遍历
  }, {
    key: "map",
    value: function map(fun) {
      var props = Object.getOwnPropertyNames(this.data);
      var res = [];
      var _iterator4 = _createForOfIteratorHelper(props),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var name = _step4.value;
          if (typeof this[name] === 'undefined' || typeof this[name] === 'function') continue;
          var ret = fun && fun(name, this[name]);
          if (ret !== false) {
            res.push({
              name: name,
              value: this[name]
            });
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return res;
    }
    /**
     * 导出数据为 JSON 对象
     * @returns 返回 JSON 对象
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      var obj = {};
      this.map(function (name, value) {
        obj[name] = value;
      });
      return obj;
    }
    // 生成数据Data
  }], [{
    key: "createProxy",
    value: function createProxy(data) {
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
    }
  }]);
  return JData;
}(_eventEmitter["default"]);
/**
 * 元素的基础数据类
 * @public
 */
var JElementData = exports.JElementData = /*#__PURE__*/function (_JData2) {
  _inherits(JElementData, _JData2);
  function JElementData() {
    var _this2;
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, JElementData);
    _this2 = _callSuper(this, JElementData, [data]);
    _defineProperty(_assertThisInitialized(_this2), "top", void 0);
    _defineProperty(_assertThisInitialized(_this2), "left", void 0);
    _defineProperty(_assertThisInitialized(_this2), "width", void 0);
    _defineProperty(_assertThisInitialized(_this2), "height", void 0);
    // 旋转弧度
    _defineProperty(_assertThisInitialized(_this2), "rotation", void 0);
    // 旋转角度
    _defineProperty(_assertThisInitialized(_this2), "angle", void 0);
    _defineProperty(_assertThisInitialized(_this2), "visible", void 0);
    _defineProperty(_assertThisInitialized(_this2), "zIndex", void 0);
    return _this2;
  }
  return _createClass(JElementData);
}(JData);
/**
 * 图片元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
var JImageData = exports.JImageData = /*#__PURE__*/function (_JElementData2) {
  _inherits(JImageData, _JElementData2);
  function JImageData() {
    var _this3;
    _classCallCheck(this, JImageData);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this3 = _callSuper(this, JImageData, [].concat(args));
    _defineProperty(_assertThisInitialized(_this3), "src", void 0);
    return _this3;
  }
  return _createClass(JImageData);
}(JElementData);
/**
 * svg
 * @public
 */
var JSvgData = exports.JSvgData = /*#__PURE__*/function (_JImageData2) {
  _inherits(JSvgData, _JImageData2);
  function JSvgData() {
    var _this4;
    _classCallCheck(this, JSvgData);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this4 = _callSuper(this, JSvgData, [].concat(args));
    _defineProperty(_assertThisInitialized(_this4), "url", void 0);
    _defineProperty(_assertThisInitialized(_this4), "svg", void 0);
    return _this4;
  }
  return _createClass(JSvgData);
}(JImageData);
/**
 * 文本元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
var JTextData = exports.JTextData = /*#__PURE__*/function (_JElementData3) {
  _inherits(JTextData, _JElementData3);
  function JTextData() {
    var _this5;
    _classCallCheck(this, JTextData);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this5 = _callSuper(this, JTextData, [].concat(args));
    _defineProperty(_assertThisInitialized(_this5), "text", void 0);
    return _this5;
  }
  return _createClass(JTextData);
}(JElementData);

},{"./eventEmitter":5}],5:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _eventemitter = _interopRequireDefault(require("eventemitter3"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/**
 * EventEmitter 类，继承自 'eventemitter3' 模块的 EventEmiter 类。
 * 用于进行事件的发布与订阅。
 * @public
 */
var EventEmitter = exports["default"] = /*#__PURE__*/function (_EventEmiter) {
  _inherits(EventEmitter, _EventEmiter);
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
    return _callSuper(this, EventEmitter, arguments);
  }
  _createClass(EventEmitter, [{
    key: "normalizeEventNames",
    value:
    /**
     * 私有方法，用于规范化事件名
     * @param name - 可以是字符串、符号或字符串数组
     * @returns 返回符号或字符串数组
     */
    function normalizeEventNames(name) {
      if (!name) {
        return [];
      }
      if (typeof name === 'string') {
        return name.split(' ');
      }
      return Array.isArray(name) ? name : [name];
    }
    /**
     * 为给定的事件添加一个监听器
     * @param event - 事件名，可以是字符串、符号或字符串数组
     * @param fn - 监听函数，参数列表为可变参数
     * @param context - 可选，上下文对象
     * @returns 返回 EventEmitter 实例
     */
  }, {
    key: "on",
    value: function on(event, fn, context) {
      var events = this.normalizeEventNames(event);
      var _iterator = _createForOfIteratorHelper(events),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          name && _get(_getPrototypeOf(EventEmitter.prototype), "on", this).call(this, name, fn, context);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return this;
    }
    /**
     * 移除给定的事件的一个监听器
     * @param event - 事件名，可以是字符串、符号或字符串数组
     * @param fn - 可选，监听函数，参数列表为可变参数
     * @param context - 可选，上下文对象
     * @param once - 可选，是否只执行一次
     * @returns 返回 EventEmitter 实例
     */
  }, {
    key: "off",
    value: function off(event, fn, context, once) {
      var events = this.normalizeEventNames(event);
      var _iterator2 = _createForOfIteratorHelper(events),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var name = _step2.value;
          name && _get(_getPrototypeOf(EventEmitter.prototype), "off", this).call(this, name, fn, context);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return this;
    }
  }]);
  return EventEmitter;
}(_eventemitter["default"]);

},{"eventemitter3":19}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topZIndex = exports.nwse = exports.ns = exports.fullCircleRadius = exports["default"] = exports.JElementStyleProperty = exports.JElementStyleDeclaration = exports.ControlerCursors = exports.ControlItemIcons = exports.ContainerDefaultStyle = void 0;
var _eventEmitter = _interopRequireDefault(require("./eventEmitter"));
var _util = _interopRequireDefault(require("../lib/util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var topZIndex = exports.topZIndex = 10000;
var fullCircleRadius = exports.fullCircleRadius = Math.PI * 2;
/**
 * 支持的样式属性列表
 * @public
 */
var JElementStyleDeclaration = exports.JElementStyleDeclaration = /*#__PURE__*/function (_EventEmiter) {
  _inherits(JElementStyleDeclaration, _EventEmiter);
  function JElementStyleDeclaration() {
    var _this;
    _classCallCheck(this, JElementStyleDeclaration);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, JElementStyleDeclaration, [].concat(args));
    _defineProperty(_assertThisInitialized(_this), "accentColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "alignContent", void 0);
    _defineProperty(_assertThisInitialized(_this), "alignItems", void 0);
    _defineProperty(_assertThisInitialized(_this), "alignSelf", void 0);
    _defineProperty(_assertThisInitialized(_this), "alignmentBaseline", void 0);
    _defineProperty(_assertThisInitialized(_this), "all", void 0);
    _defineProperty(_assertThisInitialized(_this), "animation", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationComposition", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationDelay", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationDirection", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationDuration", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationFillMode", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationIterationCount", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationName", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationPlayState", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationTimingFunction", void 0);
    _defineProperty(_assertThisInitialized(_this), "appearance", void 0);
    _defineProperty(_assertThisInitialized(_this), "aspectRatio", void 0);
    _defineProperty(_assertThisInitialized(_this), "backdropFilter", void 0);
    _defineProperty(_assertThisInitialized(_this), "backfaceVisibility", void 0);
    _defineProperty(_assertThisInitialized(_this), "background", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundAttachment", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundBlendMode", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundClip", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundImage", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundOrigin", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundPosition", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundPositionX", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundPositionY", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundRepeat", void 0);
    _defineProperty(_assertThisInitialized(_this), "backgroundSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "baselineShift", void 0);
    _defineProperty(_assertThisInitialized(_this), "blockSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "border", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlock", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockEndColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockEndStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockEndWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockStartColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockStartStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockStartWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBlockWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBottom", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBottomColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBottomLeftRadius", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBottomRightRadius", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBottomStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderBottomWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderCollapse", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderEndEndRadius", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderEndStartRadius", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderImage", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderImageOutset", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderImageRepeat", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderImageSlice", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderImageSource", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderImageWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInline", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineEndColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineEndStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineEndWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineStartColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineStartStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineStartWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderInlineWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderLeft", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderLeftColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderLeftStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderLeftWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderRadius", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderRight", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderRightColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderRightStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderRightWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderSpacing", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderStartEndRadius", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderStartStartRadius", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderTop", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderTopColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderTopLeftRadius", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderTopRightRadius", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderTopStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderTopWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "borderWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "bottom", void 0);
    _defineProperty(_assertThisInitialized(_this), "boxShadow", void 0);
    _defineProperty(_assertThisInitialized(_this), "boxSizing", void 0);
    _defineProperty(_assertThisInitialized(_this), "breakAfter", void 0);
    _defineProperty(_assertThisInitialized(_this), "breakBefore", void 0);
    _defineProperty(_assertThisInitialized(_this), "breakInside", void 0);
    _defineProperty(_assertThisInitialized(_this), "captionSide", void 0);
    _defineProperty(_assertThisInitialized(_this), "caretColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "clear", void 0);
    _defineProperty(_assertThisInitialized(_this), "clip", void 0);
    _defineProperty(_assertThisInitialized(_this), "clipPath", void 0);
    _defineProperty(_assertThisInitialized(_this), "clipRule", void 0);
    _defineProperty(_assertThisInitialized(_this), "color", void 0);
    _defineProperty(_assertThisInitialized(_this), "colorInterpolation", void 0);
    _defineProperty(_assertThisInitialized(_this), "colorInterpolationFilters", void 0);
    _defineProperty(_assertThisInitialized(_this), "colorScheme", void 0);
    _defineProperty(_assertThisInitialized(_this), "columnCount", void 0);
    _defineProperty(_assertThisInitialized(_this), "columnFill", void 0);
    _defineProperty(_assertThisInitialized(_this), "columnGap", void 0);
    _defineProperty(_assertThisInitialized(_this), "columnRule", void 0);
    _defineProperty(_assertThisInitialized(_this), "columnRuleColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "columnRuleStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "columnRuleWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "columnSpan", void 0);
    _defineProperty(_assertThisInitialized(_this), "columnWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "columns", void 0);
    _defineProperty(_assertThisInitialized(_this), "contain", void 0);
    _defineProperty(_assertThisInitialized(_this), "containIntrinsicBlockSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "containIntrinsicHeight", void 0);
    _defineProperty(_assertThisInitialized(_this), "containIntrinsicInlineSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "containIntrinsicSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "containIntrinsicWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "container", void 0);
    _defineProperty(_assertThisInitialized(_this), "containerName", void 0);
    _defineProperty(_assertThisInitialized(_this), "containerType", void 0);
    _defineProperty(_assertThisInitialized(_this), "content", void 0);
    _defineProperty(_assertThisInitialized(_this), "counterIncrement", void 0);
    _defineProperty(_assertThisInitialized(_this), "counterReset", void 0);
    _defineProperty(_assertThisInitialized(_this), "counterSet", void 0);
    _defineProperty(_assertThisInitialized(_this), "cssFloat", void 0);
    _defineProperty(_assertThisInitialized(_this), "cssText", void 0);
    _defineProperty(_assertThisInitialized(_this), "cursor", void 0);
    _defineProperty(_assertThisInitialized(_this), "direction", void 0);
    _defineProperty(_assertThisInitialized(_this), "display", void 0);
    _defineProperty(_assertThisInitialized(_this), "dominantBaseline", void 0);
    _defineProperty(_assertThisInitialized(_this), "emptyCells", void 0);
    _defineProperty(_assertThisInitialized(_this), "fill", void 0);
    _defineProperty(_assertThisInitialized(_this), "fillOpacity", void 0);
    _defineProperty(_assertThisInitialized(_this), "fillRule", void 0);
    _defineProperty(_assertThisInitialized(_this), "filter", void 0);
    _defineProperty(_assertThisInitialized(_this), "flex", void 0);
    _defineProperty(_assertThisInitialized(_this), "flexBasis", void 0);
    _defineProperty(_assertThisInitialized(_this), "flexDirection", void 0);
    _defineProperty(_assertThisInitialized(_this), "flexFlow", void 0);
    _defineProperty(_assertThisInitialized(_this), "flexGrow", void 0);
    _defineProperty(_assertThisInitialized(_this), "flexShrink", void 0);
    _defineProperty(_assertThisInitialized(_this), "flexWrap", void 0);
    _defineProperty(_assertThisInitialized(_this), "float", void 0);
    _defineProperty(_assertThisInitialized(_this), "floodColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "floodOpacity", void 0);
    _defineProperty(_assertThisInitialized(_this), "font", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontFamily", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontFeatureSettings", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontKerning", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontOpticalSizing", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontPalette", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontSizeAdjust", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontStretch", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontSynthesis", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontSynthesisSmallCaps", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontSynthesisStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontSynthesisWeight", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontVariant", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontVariantAlternates", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontVariantCaps", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontVariantEastAsian", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontVariantLigatures", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontVariantNumeric", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontVariantPosition", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontVariationSettings", void 0);
    _defineProperty(_assertThisInitialized(_this), "fontWeight", void 0);
    _defineProperty(_assertThisInitialized(_this), "forcedColorAdjust", void 0);
    _defineProperty(_assertThisInitialized(_this), "gap", void 0);
    _defineProperty(_assertThisInitialized(_this), "grid", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridArea", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridAutoColumns", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridAutoFlow", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridAutoRows", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridColumn", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridColumnEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridColumnGap", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridColumnStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridGap", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridRow", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridRowEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridRowGap", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridRowStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridTemplate", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridTemplateAreas", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridTemplateColumns", void 0);
    _defineProperty(_assertThisInitialized(_this), "gridTemplateRows", void 0);
    _defineProperty(_assertThisInitialized(_this), "height", void 0);
    _defineProperty(_assertThisInitialized(_this), "hyphenateCharacter", void 0);
    _defineProperty(_assertThisInitialized(_this), "hyphens", void 0);
    _defineProperty(_assertThisInitialized(_this), "imageOrientation", void 0);
    _defineProperty(_assertThisInitialized(_this), "imageRendering", void 0);
    _defineProperty(_assertThisInitialized(_this), "inlineSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "inset", void 0);
    _defineProperty(_assertThisInitialized(_this), "insetBlock", void 0);
    _defineProperty(_assertThisInitialized(_this), "insetBlockEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "insetBlockStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "insetInline", void 0);
    _defineProperty(_assertThisInitialized(_this), "insetInlineEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "insetInlineStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "isolation", void 0);
    _defineProperty(_assertThisInitialized(_this), "justifyContent", void 0);
    _defineProperty(_assertThisInitialized(_this), "justifyItems", void 0);
    _defineProperty(_assertThisInitialized(_this), "justifySelf", void 0);
    _defineProperty(_assertThisInitialized(_this), "left", void 0);
    _defineProperty(_assertThisInitialized(_this), "length", void 0);
    _defineProperty(_assertThisInitialized(_this), "letterSpacing", void 0);
    _defineProperty(_assertThisInitialized(_this), "lightingColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "lineBreak", void 0);
    _defineProperty(_assertThisInitialized(_this), "lineHeight", void 0);
    _defineProperty(_assertThisInitialized(_this), "listStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "listStyleImage", void 0);
    _defineProperty(_assertThisInitialized(_this), "listStylePosition", void 0);
    _defineProperty(_assertThisInitialized(_this), "listStyleType", void 0);
    _defineProperty(_assertThisInitialized(_this), "margin", void 0);
    _defineProperty(_assertThisInitialized(_this), "marginBlock", void 0);
    _defineProperty(_assertThisInitialized(_this), "marginBlockEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "marginBlockStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "marginBottom", void 0);
    _defineProperty(_assertThisInitialized(_this), "marginInline", void 0);
    _defineProperty(_assertThisInitialized(_this), "marginInlineEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "marginInlineStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "marginLeft", void 0);
    _defineProperty(_assertThisInitialized(_this), "marginRight", void 0);
    _defineProperty(_assertThisInitialized(_this), "marginTop", void 0);
    _defineProperty(_assertThisInitialized(_this), "marker", void 0);
    _defineProperty(_assertThisInitialized(_this), "markerEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "markerMid", void 0);
    _defineProperty(_assertThisInitialized(_this), "markerStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "mask", void 0);
    _defineProperty(_assertThisInitialized(_this), "maskClip", void 0);
    _defineProperty(_assertThisInitialized(_this), "maskComposite", void 0);
    _defineProperty(_assertThisInitialized(_this), "maskImage", void 0);
    _defineProperty(_assertThisInitialized(_this), "maskMode", void 0);
    _defineProperty(_assertThisInitialized(_this), "maskOrigin", void 0);
    _defineProperty(_assertThisInitialized(_this), "maskPosition", void 0);
    _defineProperty(_assertThisInitialized(_this), "maskRepeat", void 0);
    _defineProperty(_assertThisInitialized(_this), "maskSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "maskType", void 0);
    _defineProperty(_assertThisInitialized(_this), "mathStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "maxBlockSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "maxHeight", void 0);
    _defineProperty(_assertThisInitialized(_this), "maxInlineSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "maxWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "minBlockSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "minHeight", void 0);
    _defineProperty(_assertThisInitialized(_this), "minInlineSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "minWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "mixBlendMode", void 0);
    _defineProperty(_assertThisInitialized(_this), "objectFit", void 0);
    _defineProperty(_assertThisInitialized(_this), "objectPosition", void 0);
    _defineProperty(_assertThisInitialized(_this), "offset", void 0);
    _defineProperty(_assertThisInitialized(_this), "offsetDistance", void 0);
    _defineProperty(_assertThisInitialized(_this), "offsetPath", void 0);
    _defineProperty(_assertThisInitialized(_this), "offsetRotate", void 0);
    _defineProperty(_assertThisInitialized(_this), "opacity", void 0);
    _defineProperty(_assertThisInitialized(_this), "order", void 0);
    _defineProperty(_assertThisInitialized(_this), "orphans", void 0);
    _defineProperty(_assertThisInitialized(_this), "outline", void 0);
    _defineProperty(_assertThisInitialized(_this), "outlineColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "outlineOffset", void 0);
    _defineProperty(_assertThisInitialized(_this), "outlineStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "outlineWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "overflow", void 0);
    _defineProperty(_assertThisInitialized(_this), "overflowAnchor", void 0);
    _defineProperty(_assertThisInitialized(_this), "overflowClipMargin", void 0);
    _defineProperty(_assertThisInitialized(_this), "overflowWrap", void 0);
    _defineProperty(_assertThisInitialized(_this), "overflowX", void 0);
    _defineProperty(_assertThisInitialized(_this), "overflowY", void 0);
    _defineProperty(_assertThisInitialized(_this), "overscrollBehavior", void 0);
    _defineProperty(_assertThisInitialized(_this), "overscrollBehaviorBlock", void 0);
    _defineProperty(_assertThisInitialized(_this), "overscrollBehaviorInline", void 0);
    _defineProperty(_assertThisInitialized(_this), "overscrollBehaviorX", void 0);
    _defineProperty(_assertThisInitialized(_this), "overscrollBehaviorY", void 0);
    _defineProperty(_assertThisInitialized(_this), "padding", void 0);
    _defineProperty(_assertThisInitialized(_this), "paddingBlock", void 0);
    _defineProperty(_assertThisInitialized(_this), "paddingBlockEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "paddingBlockStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "paddingBottom", void 0);
    _defineProperty(_assertThisInitialized(_this), "paddingInline", void 0);
    _defineProperty(_assertThisInitialized(_this), "paddingInlineEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "paddingInlineStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "paddingLeft", void 0);
    _defineProperty(_assertThisInitialized(_this), "paddingRight", void 0);
    _defineProperty(_assertThisInitialized(_this), "paddingTop", void 0);
    _defineProperty(_assertThisInitialized(_this), "page", void 0);
    _defineProperty(_assertThisInitialized(_this), "pageBreakAfter", void 0);
    _defineProperty(_assertThisInitialized(_this), "pageBreakBefore", void 0);
    _defineProperty(_assertThisInitialized(_this), "pageBreakInside", void 0);
    _defineProperty(_assertThisInitialized(_this), "paintOrder", void 0);
    _defineProperty(_assertThisInitialized(_this), "parentRule", void 0);
    _defineProperty(_assertThisInitialized(_this), "perspective", void 0);
    _defineProperty(_assertThisInitialized(_this), "perspectiveOrigin", void 0);
    _defineProperty(_assertThisInitialized(_this), "placeContent", void 0);
    _defineProperty(_assertThisInitialized(_this), "placeItems", void 0);
    _defineProperty(_assertThisInitialized(_this), "placeSelf", void 0);
    _defineProperty(_assertThisInitialized(_this), "pointerEvents", void 0);
    _defineProperty(_assertThisInitialized(_this), "position", void 0);
    _defineProperty(_assertThisInitialized(_this), "printColorAdjust", void 0);
    _defineProperty(_assertThisInitialized(_this), "quotes", void 0);
    _defineProperty(_assertThisInitialized(_this), "resize", void 0);
    _defineProperty(_assertThisInitialized(_this), "right", void 0);
    _defineProperty(_assertThisInitialized(_this), "rotate", void 0);
    _defineProperty(_assertThisInitialized(_this), "rowGap", void 0);
    _defineProperty(_assertThisInitialized(_this), "rubyPosition", void 0);
    _defineProperty(_assertThisInitialized(_this), "scale", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollBehavior", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMargin", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMarginBlock", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMarginBlockEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMarginBlockStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMarginBottom", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMarginInline", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMarginInlineEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMarginInlineStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMarginLeft", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMarginRight", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollMarginTop", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPadding", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPaddingBlock", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPaddingBlockEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPaddingBlockStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPaddingBottom", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPaddingInline", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPaddingInlineEnd", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPaddingInlineStart", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPaddingLeft", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPaddingRight", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollPaddingTop", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollSnapAlign", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollSnapStop", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollSnapType", void 0);
    _defineProperty(_assertThisInitialized(_this), "scrollbarGutter", void 0);
    _defineProperty(_assertThisInitialized(_this), "shapeImageThreshold", void 0);
    _defineProperty(_assertThisInitialized(_this), "shapeMargin", void 0);
    _defineProperty(_assertThisInitialized(_this), "shapeOutside", void 0);
    _defineProperty(_assertThisInitialized(_this), "shapeRendering", void 0);
    _defineProperty(_assertThisInitialized(_this), "stopColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "stopOpacity", void 0);
    _defineProperty(_assertThisInitialized(_this), "stroke", void 0);
    _defineProperty(_assertThisInitialized(_this), "strokeDasharray", void 0);
    _defineProperty(_assertThisInitialized(_this), "strokeDashoffset", void 0);
    _defineProperty(_assertThisInitialized(_this), "strokeLinecap", void 0);
    _defineProperty(_assertThisInitialized(_this), "strokeLinejoin", void 0);
    _defineProperty(_assertThisInitialized(_this), "strokeMiterlimit", void 0);
    _defineProperty(_assertThisInitialized(_this), "strokeOpacity", void 0);
    _defineProperty(_assertThisInitialized(_this), "strokeWidth", void 0);
    _defineProperty(_assertThisInitialized(_this), "tabSize", void 0);
    _defineProperty(_assertThisInitialized(_this), "tableLayout", void 0);
    _defineProperty(_assertThisInitialized(_this), "textAlign", void 0);
    _defineProperty(_assertThisInitialized(_this), "textAlignLast", void 0);
    _defineProperty(_assertThisInitialized(_this), "textAnchor", void 0);
    _defineProperty(_assertThisInitialized(_this), "textCombineUpright", void 0);
    _defineProperty(_assertThisInitialized(_this), "textDecoration", void 0);
    _defineProperty(_assertThisInitialized(_this), "textDecorationColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "textDecorationLine", void 0);
    _defineProperty(_assertThisInitialized(_this), "textDecorationSkipInk", void 0);
    _defineProperty(_assertThisInitialized(_this), "textDecorationStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "textDecorationThickness", void 0);
    _defineProperty(_assertThisInitialized(_this), "textEmphasis", void 0);
    _defineProperty(_assertThisInitialized(_this), "textEmphasisColor", void 0);
    _defineProperty(_assertThisInitialized(_this), "textEmphasisPosition", void 0);
    _defineProperty(_assertThisInitialized(_this), "textEmphasisStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "textIndent", void 0);
    _defineProperty(_assertThisInitialized(_this), "textOrientation", void 0);
    _defineProperty(_assertThisInitialized(_this), "textOverflow", void 0);
    _defineProperty(_assertThisInitialized(_this), "textRendering", void 0);
    _defineProperty(_assertThisInitialized(_this), "textShadow", void 0);
    _defineProperty(_assertThisInitialized(_this), "textTransform", void 0);
    _defineProperty(_assertThisInitialized(_this), "textUnderlineOffset", void 0);
    _defineProperty(_assertThisInitialized(_this), "textUnderlinePosition", void 0);
    _defineProperty(_assertThisInitialized(_this), "top", void 0);
    _defineProperty(_assertThisInitialized(_this), "touchAction", void 0);
    _defineProperty(_assertThisInitialized(_this), "transform", void 0);
    _defineProperty(_assertThisInitialized(_this), "transformBox", void 0);
    _defineProperty(_assertThisInitialized(_this), "transformOrigin", void 0);
    _defineProperty(_assertThisInitialized(_this), "transformStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "transition", void 0);
    _defineProperty(_assertThisInitialized(_this), "transitionDelay", void 0);
    _defineProperty(_assertThisInitialized(_this), "transitionDuration", void 0);
    _defineProperty(_assertThisInitialized(_this), "transitionProperty", void 0);
    _defineProperty(_assertThisInitialized(_this), "transitionTimingFunction", void 0);
    _defineProperty(_assertThisInitialized(_this), "translate", void 0);
    _defineProperty(_assertThisInitialized(_this), "unicodeBidi", void 0);
    _defineProperty(_assertThisInitialized(_this), "userSelect", void 0);
    _defineProperty(_assertThisInitialized(_this), "verticalAlign", void 0);
    _defineProperty(_assertThisInitialized(_this), "visibility", void 0);
    _defineProperty(_assertThisInitialized(_this), "whiteSpace", void 0);
    _defineProperty(_assertThisInitialized(_this), "widows", void 0);
    _defineProperty(_assertThisInitialized(_this), "width", void 0);
    _defineProperty(_assertThisInitialized(_this), "willChange", void 0);
    _defineProperty(_assertThisInitialized(_this), "wordBreak", void 0);
    _defineProperty(_assertThisInitialized(_this), "wordSpacing", void 0);
    _defineProperty(_assertThisInitialized(_this), "wordWrap", void 0);
    _defineProperty(_assertThisInitialized(_this), "writingMode", void 0);
    _defineProperty(_assertThisInitialized(_this), "zIndex", void 0);
    return _this;
  }
  return _createClass(JElementStyleDeclaration);
}(_eventEmitter["default"]);
/**
 * 样式属性集合
 * @public
 */
var JElementStyleProperty = exports.JElementStyleProperty = /*#__PURE__*/_createClass(function JElementStyleProperty() {
  _classCallCheck(this, JElementStyleProperty);
  _defineProperty(this, "accentColor", '');
  _defineProperty(this, "alignContent", '');
  _defineProperty(this, "alignItems", '');
  _defineProperty(this, "alignSelf", '');
  _defineProperty(this, "alignmentBaseline", '');
  _defineProperty(this, "all", '');
  _defineProperty(this, "animation", '');
  _defineProperty(this, "animationComposition", '');
  _defineProperty(this, "animationDelay", '');
  _defineProperty(this, "animationDirection", '');
  _defineProperty(this, "animationDuration", '');
  _defineProperty(this, "animationFillMode", '');
  _defineProperty(this, "animationIterationCount", '');
  _defineProperty(this, "animationName", '');
  _defineProperty(this, "animationPlayState", '');
  _defineProperty(this, "animationTimingFunction", '');
  _defineProperty(this, "appearance", '');
  _defineProperty(this, "aspectRatio", '');
  _defineProperty(this, "backdropFilter", '');
  _defineProperty(this, "backfaceVisibility", '');
  _defineProperty(this, "background", '');
  _defineProperty(this, "backgroundAttachment", '');
  _defineProperty(this, "backgroundBlendMode", '');
  _defineProperty(this, "backgroundClip", '');
  _defineProperty(this, "backgroundColor", '');
  _defineProperty(this, "backgroundImage", '');
  _defineProperty(this, "backgroundOrigin", '');
  _defineProperty(this, "backgroundPosition", '');
  _defineProperty(this, "backgroundPositionX", '');
  _defineProperty(this, "backgroundPositionY", '');
  _defineProperty(this, "backgroundRepeat", '');
  _defineProperty(this, "backgroundSize", '');
  _defineProperty(this, "baselineShift", '');
  _defineProperty(this, "blockSize", '');
  _defineProperty(this, "border", '');
  _defineProperty(this, "borderBlock", '');
  _defineProperty(this, "borderBlockColor", '');
  _defineProperty(this, "borderBlockEnd", '');
  _defineProperty(this, "borderBlockEndColor", '');
  _defineProperty(this, "borderBlockEndStyle", '');
  _defineProperty(this, "borderBlockEndWidth", '');
  _defineProperty(this, "borderBlockStart", '');
  _defineProperty(this, "borderBlockStartColor", '');
  _defineProperty(this, "borderBlockStartStyle", '');
  _defineProperty(this, "borderBlockStartWidth", '');
  _defineProperty(this, "borderBlockStyle", '');
  _defineProperty(this, "borderBlockWidth", '');
  _defineProperty(this, "borderBottom", '');
  _defineProperty(this, "borderBottomColor", '');
  _defineProperty(this, "borderBottomLeftRadius", '');
  _defineProperty(this, "borderBottomRightRadius", '');
  _defineProperty(this, "borderBottomStyle", '');
  _defineProperty(this, "borderBottomWidth", '');
  _defineProperty(this, "borderCollapse", '');
  _defineProperty(this, "borderColor", '');
  _defineProperty(this, "borderEndEndRadius", '');
  _defineProperty(this, "borderEndStartRadius", '');
  _defineProperty(this, "borderImage", '');
  _defineProperty(this, "borderImageOutset", '');
  _defineProperty(this, "borderImageRepeat", '');
  _defineProperty(this, "borderImageSlice", '');
  _defineProperty(this, "borderImageSource", '');
  _defineProperty(this, "borderImageWidth", '');
  _defineProperty(this, "borderInline", '');
  _defineProperty(this, "borderInlineColor", '');
  _defineProperty(this, "borderInlineEnd", '');
  _defineProperty(this, "borderInlineEndColor", '');
  _defineProperty(this, "borderInlineEndStyle", '');
  _defineProperty(this, "borderInlineEndWidth", '');
  _defineProperty(this, "borderInlineStart", '');
  _defineProperty(this, "borderInlineStartColor", '');
  _defineProperty(this, "borderInlineStartStyle", '');
  _defineProperty(this, "borderInlineStartWidth", '');
  _defineProperty(this, "borderInlineStyle", '');
  _defineProperty(this, "borderInlineWidth", '');
  _defineProperty(this, "borderLeft", '');
  _defineProperty(this, "borderLeftColor", '');
  _defineProperty(this, "borderLeftStyle", '');
  _defineProperty(this, "borderLeftWidth", '');
  _defineProperty(this, "borderRadius", '');
  _defineProperty(this, "borderRight", '');
  _defineProperty(this, "borderRightColor", '');
  _defineProperty(this, "borderRightStyle", '');
  _defineProperty(this, "borderRightWidth", '');
  _defineProperty(this, "borderSpacing", '');
  _defineProperty(this, "borderStartEndRadius", '');
  _defineProperty(this, "borderStartStartRadius", '');
  _defineProperty(this, "borderStyle", '');
  _defineProperty(this, "borderTop", '');
  _defineProperty(this, "borderTopColor", '');
  _defineProperty(this, "borderTopLeftRadius", '');
  _defineProperty(this, "borderTopRightRadius", '');
  _defineProperty(this, "borderTopStyle", '');
  _defineProperty(this, "borderTopWidth", '');
  _defineProperty(this, "borderWidth", '');
  _defineProperty(this, "bottom", '');
  _defineProperty(this, "boxShadow", '');
  _defineProperty(this, "boxSizing", '');
  _defineProperty(this, "breakAfter", '');
  _defineProperty(this, "breakBefore", '');
  _defineProperty(this, "breakInside", '');
  _defineProperty(this, "captionSide", '');
  _defineProperty(this, "caretColor", '');
  _defineProperty(this, "clear", '');
  _defineProperty(this, "clip", '');
  _defineProperty(this, "clipPath", '');
  _defineProperty(this, "clipRule", '');
  _defineProperty(this, "color", '');
  _defineProperty(this, "colorInterpolation", '');
  _defineProperty(this, "colorInterpolationFilters", '');
  _defineProperty(this, "colorScheme", '');
  _defineProperty(this, "columnCount", '');
  _defineProperty(this, "columnFill", '');
  _defineProperty(this, "columnGap", '');
  _defineProperty(this, "columnRule", '');
  _defineProperty(this, "columnRuleColor", '');
  _defineProperty(this, "columnRuleStyle", '');
  _defineProperty(this, "columnRuleWidth", '');
  _defineProperty(this, "columnSpan", '');
  _defineProperty(this, "columnWidth", '');
  _defineProperty(this, "columns", '');
  _defineProperty(this, "contain", '');
  _defineProperty(this, "containIntrinsicBlockSize", '');
  _defineProperty(this, "containIntrinsicHeight", '');
  _defineProperty(this, "containIntrinsicInlineSize", '');
  _defineProperty(this, "containIntrinsicSize", '');
  _defineProperty(this, "containIntrinsicWidth", '');
  _defineProperty(this, "container", '');
  _defineProperty(this, "containerName", '');
  _defineProperty(this, "containerType", '');
  _defineProperty(this, "content", '');
  _defineProperty(this, "counterIncrement", '');
  _defineProperty(this, "counterReset", '');
  _defineProperty(this, "counterSet", '');
  _defineProperty(this, "cssFloat", '');
  _defineProperty(this, "cssText", '');
  _defineProperty(this, "cursor", '');
  _defineProperty(this, "direction", '');
  _defineProperty(this, "display", '');
  _defineProperty(this, "dominantBaseline", '');
  _defineProperty(this, "emptyCells", '');
  _defineProperty(this, "fill", '');
  _defineProperty(this, "fillOpacity", '');
  _defineProperty(this, "fillRule", '');
  _defineProperty(this, "filter", '');
  _defineProperty(this, "flex", '');
  _defineProperty(this, "flexBasis", '');
  _defineProperty(this, "flexDirection", '');
  _defineProperty(this, "flexFlow", '');
  _defineProperty(this, "flexGrow", '');
  _defineProperty(this, "flexShrink", '');
  _defineProperty(this, "flexWrap", '');
  _defineProperty(this, "float", '');
  _defineProperty(this, "floodColor", '');
  _defineProperty(this, "floodOpacity", '');
  _defineProperty(this, "font", '');
  _defineProperty(this, "fontFamily", '');
  _defineProperty(this, "fontFeatureSettings", '');
  _defineProperty(this, "fontKerning", '');
  _defineProperty(this, "fontOpticalSizing", '');
  _defineProperty(this, "fontPalette", '');
  _defineProperty(this, "fontSize", '');
  _defineProperty(this, "fontSizeAdjust", '');
  _defineProperty(this, "fontStretch", '');
  _defineProperty(this, "fontStyle", '');
  _defineProperty(this, "fontSynthesis", '');
  _defineProperty(this, "fontSynthesisSmallCaps", '');
  _defineProperty(this, "fontSynthesisStyle", '');
  _defineProperty(this, "fontSynthesisWeight", '');
  _defineProperty(this, "fontVariant", '');
  _defineProperty(this, "fontVariantAlternates", '');
  _defineProperty(this, "fontVariantCaps", '');
  _defineProperty(this, "fontVariantEastAsian", '');
  _defineProperty(this, "fontVariantLigatures", '');
  _defineProperty(this, "fontVariantNumeric", '');
  _defineProperty(this, "fontVariantPosition", '');
  _defineProperty(this, "fontVariationSettings", '');
  _defineProperty(this, "fontWeight", '');
  _defineProperty(this, "forcedColorAdjust", '');
  _defineProperty(this, "gap", '');
  _defineProperty(this, "grid", '');
  _defineProperty(this, "gridArea", '');
  _defineProperty(this, "gridAutoColumns", '');
  _defineProperty(this, "gridAutoFlow", '');
  _defineProperty(this, "gridAutoRows", '');
  _defineProperty(this, "gridColumn", '');
  _defineProperty(this, "gridColumnEnd", '');
  _defineProperty(this, "gridColumnGap", '');
  _defineProperty(this, "gridColumnStart", '');
  _defineProperty(this, "gridGap", '');
  _defineProperty(this, "gridRow", '');
  _defineProperty(this, "gridRowEnd", '');
  _defineProperty(this, "gridRowGap", '');
  _defineProperty(this, "gridRowStart", '');
  _defineProperty(this, "gridTemplate", '');
  _defineProperty(this, "gridTemplateAreas", '');
  _defineProperty(this, "gridTemplateColumns", '');
  _defineProperty(this, "gridTemplateRows", '');
  _defineProperty(this, "height", '');
  _defineProperty(this, "hyphenateCharacter", '');
  _defineProperty(this, "hyphens", '');
  _defineProperty(this, "imageOrientation", '');
  _defineProperty(this, "imageRendering", '');
  _defineProperty(this, "inlineSize", '');
  _defineProperty(this, "inset", '');
  _defineProperty(this, "insetBlock", '');
  _defineProperty(this, "insetBlockEnd", '');
  _defineProperty(this, "insetBlockStart", '');
  _defineProperty(this, "insetInline", '');
  _defineProperty(this, "insetInlineEnd", '');
  _defineProperty(this, "insetInlineStart", '');
  _defineProperty(this, "isolation", '');
  _defineProperty(this, "justifyContent", '');
  _defineProperty(this, "justifyItems", '');
  _defineProperty(this, "justifySelf", '');
  _defineProperty(this, "left", '');
  _defineProperty(this, "length", void 0);
  _defineProperty(this, "letterSpacing", '');
  _defineProperty(this, "lightingColor", '');
  _defineProperty(this, "lineBreak", '');
  _defineProperty(this, "lineHeight", '');
  _defineProperty(this, "listStyle", '');
  _defineProperty(this, "listStyleImage", '');
  _defineProperty(this, "listStylePosition", '');
  _defineProperty(this, "listStyleType", '');
  _defineProperty(this, "margin", '');
  _defineProperty(this, "marginBlock", '');
  _defineProperty(this, "marginBlockEnd", '');
  _defineProperty(this, "marginBlockStart", '');
  _defineProperty(this, "marginBottom", '');
  _defineProperty(this, "marginInline", '');
  _defineProperty(this, "marginInlineEnd", '');
  _defineProperty(this, "marginInlineStart", '');
  _defineProperty(this, "marginLeft", '');
  _defineProperty(this, "marginRight", '');
  _defineProperty(this, "marginTop", '');
  _defineProperty(this, "marker", '');
  _defineProperty(this, "markerEnd", '');
  _defineProperty(this, "markerMid", '');
  _defineProperty(this, "markerStart", '');
  _defineProperty(this, "mask", '');
  _defineProperty(this, "maskClip", '');
  _defineProperty(this, "maskComposite", '');
  _defineProperty(this, "maskImage", '');
  _defineProperty(this, "maskMode", '');
  _defineProperty(this, "maskOrigin", '');
  _defineProperty(this, "maskPosition", '');
  _defineProperty(this, "maskRepeat", '');
  _defineProperty(this, "maskSize", '');
  _defineProperty(this, "maskType", '');
  _defineProperty(this, "mathStyle", '');
  _defineProperty(this, "maxBlockSize", '');
  _defineProperty(this, "maxHeight", '');
  _defineProperty(this, "maxInlineSize", '');
  _defineProperty(this, "maxWidth", '');
  _defineProperty(this, "minBlockSize", '');
  _defineProperty(this, "minHeight", '');
  _defineProperty(this, "minInlineSize", '');
  _defineProperty(this, "minWidth", '');
  _defineProperty(this, "mixBlendMode", '');
  _defineProperty(this, "objectFit", '');
  _defineProperty(this, "objectPosition", '');
  _defineProperty(this, "offset", '');
  _defineProperty(this, "offsetDistance", '');
  _defineProperty(this, "offsetPath", '');
  _defineProperty(this, "offsetRotate", '');
  _defineProperty(this, "opacity", '');
  _defineProperty(this, "order", '');
  _defineProperty(this, "orphans", '');
  _defineProperty(this, "outline", '');
  _defineProperty(this, "outlineColor", '');
  _defineProperty(this, "outlineOffset", '');
  _defineProperty(this, "outlineStyle", '');
  _defineProperty(this, "outlineWidth", '');
  _defineProperty(this, "overflow", '');
  _defineProperty(this, "overflowAnchor", '');
  _defineProperty(this, "overflowClipMargin", '');
  _defineProperty(this, "overflowWrap", '');
  _defineProperty(this, "overflowX", '');
  _defineProperty(this, "overflowY", '');
  _defineProperty(this, "overscrollBehavior", '');
  _defineProperty(this, "overscrollBehaviorBlock", '');
  _defineProperty(this, "overscrollBehaviorInline", '');
  _defineProperty(this, "overscrollBehaviorX", '');
  _defineProperty(this, "overscrollBehaviorY", '');
  _defineProperty(this, "padding", '');
  _defineProperty(this, "paddingBlock", '');
  _defineProperty(this, "paddingBlockEnd", '');
  _defineProperty(this, "paddingBlockStart", '');
  _defineProperty(this, "paddingBottom", '');
  _defineProperty(this, "paddingInline", '');
  _defineProperty(this, "paddingInlineEnd", '');
  _defineProperty(this, "paddingInlineStart", '');
  _defineProperty(this, "paddingLeft", '');
  _defineProperty(this, "paddingRight", '');
  _defineProperty(this, "paddingTop", '');
  _defineProperty(this, "page", '');
  _defineProperty(this, "pageBreakAfter", '');
  _defineProperty(this, "pageBreakBefore", '');
  _defineProperty(this, "pageBreakInside", '');
  _defineProperty(this, "paintOrder", '');
  _defineProperty(this, "parentRule", void 0);
  _defineProperty(this, "perspective", '');
  _defineProperty(this, "perspectiveOrigin", '');
  _defineProperty(this, "placeContent", '');
  _defineProperty(this, "placeItems", '');
  _defineProperty(this, "placeSelf", '');
  _defineProperty(this, "pointerEvents", '');
  _defineProperty(this, "position", '');
  _defineProperty(this, "printColorAdjust", '');
  _defineProperty(this, "quotes", '');
  _defineProperty(this, "resize", '');
  _defineProperty(this, "right", '');
  _defineProperty(this, "rotate", '');
  _defineProperty(this, "rowGap", '');
  _defineProperty(this, "rubyPosition", '');
  _defineProperty(this, "scale", '');
  _defineProperty(this, "scrollBehavior", '');
  _defineProperty(this, "scrollMargin", '');
  _defineProperty(this, "scrollMarginBlock", '');
  _defineProperty(this, "scrollMarginBlockEnd", '');
  _defineProperty(this, "scrollMarginBlockStart", '');
  _defineProperty(this, "scrollMarginBottom", '');
  _defineProperty(this, "scrollMarginInline", '');
  _defineProperty(this, "scrollMarginInlineEnd", '');
  _defineProperty(this, "scrollMarginInlineStart", '');
  _defineProperty(this, "scrollMarginLeft", '');
  _defineProperty(this, "scrollMarginRight", '');
  _defineProperty(this, "scrollMarginTop", '');
  _defineProperty(this, "scrollPadding", '');
  _defineProperty(this, "scrollPaddingBlock", '');
  _defineProperty(this, "scrollPaddingBlockEnd", '');
  _defineProperty(this, "scrollPaddingBlockStart", '');
  _defineProperty(this, "scrollPaddingBottom", '');
  _defineProperty(this, "scrollPaddingInline", '');
  _defineProperty(this, "scrollPaddingInlineEnd", '');
  _defineProperty(this, "scrollPaddingInlineStart", '');
  _defineProperty(this, "scrollPaddingLeft", '');
  _defineProperty(this, "scrollPaddingRight", '');
  _defineProperty(this, "scrollPaddingTop", '');
  _defineProperty(this, "scrollSnapAlign", '');
  _defineProperty(this, "scrollSnapStop", '');
  _defineProperty(this, "scrollSnapType", '');
  _defineProperty(this, "scrollbarGutter", '');
  _defineProperty(this, "shapeImageThreshold", '');
  _defineProperty(this, "shapeMargin", '');
  _defineProperty(this, "shapeOutside", '');
  _defineProperty(this, "shapeRendering", '');
  _defineProperty(this, "stopColor", '');
  _defineProperty(this, "stopOpacity", '');
  _defineProperty(this, "stroke", '');
  _defineProperty(this, "strokeDasharray", '');
  _defineProperty(this, "strokeDashoffset", '');
  _defineProperty(this, "strokeLinecap", '');
  _defineProperty(this, "strokeLinejoin", '');
  _defineProperty(this, "strokeMiterlimit", '');
  _defineProperty(this, "strokeOpacity", '');
  _defineProperty(this, "strokeWidth", '');
  _defineProperty(this, "tabSize", '');
  _defineProperty(this, "tableLayout", '');
  _defineProperty(this, "textAlign", '');
  _defineProperty(this, "textAlignLast", '');
  _defineProperty(this, "textAnchor", '');
  _defineProperty(this, "textCombineUpright", '');
  _defineProperty(this, "textDecoration", '');
  _defineProperty(this, "textDecorationColor", '');
  _defineProperty(this, "textDecorationLine", '');
  _defineProperty(this, "textDecorationSkipInk", '');
  _defineProperty(this, "textDecorationStyle", '');
  _defineProperty(this, "textDecorationThickness", '');
  _defineProperty(this, "textEmphasis", '');
  _defineProperty(this, "textEmphasisColor", '');
  _defineProperty(this, "textEmphasisPosition", '');
  _defineProperty(this, "textEmphasisStyle", '');
  _defineProperty(this, "textIndent", '');
  _defineProperty(this, "textOrientation", '');
  _defineProperty(this, "textOverflow", '');
  _defineProperty(this, "textRendering", '');
  _defineProperty(this, "textShadow", '');
  _defineProperty(this, "textTransform", '');
  _defineProperty(this, "textUnderlineOffset", '');
  _defineProperty(this, "textUnderlinePosition", '');
  _defineProperty(this, "top", '');
  _defineProperty(this, "touchAction", '');
  _defineProperty(this, "transform", '');
  _defineProperty(this, "transformBox", '');
  _defineProperty(this, "transformOrigin", '');
  _defineProperty(this, "transformStyle", '');
  _defineProperty(this, "transition", '');
  _defineProperty(this, "transitionDelay", '');
  _defineProperty(this, "transitionDuration", '');
  _defineProperty(this, "transitionProperty", '');
  _defineProperty(this, "transitionTimingFunction", '');
  _defineProperty(this, "translate", '');
  _defineProperty(this, "unicodeBidi", '');
  _defineProperty(this, "userSelect", '');
  _defineProperty(this, "verticalAlign", '');
  _defineProperty(this, "visibility", '');
  _defineProperty(this, "webkitAlignContent", '');
  _defineProperty(this, "webkitAlignItems", '');
  _defineProperty(this, "webkitAlignSelf", '');
  _defineProperty(this, "webkitAnimation", '');
  _defineProperty(this, "webkitAnimationDelay", '');
  _defineProperty(this, "webkitAnimationDirection", '');
  _defineProperty(this, "webkitAnimationDuration", '');
  _defineProperty(this, "webkitAnimationFillMode", '');
  _defineProperty(this, "webkitAnimationIterationCount", '');
  _defineProperty(this, "webkitAnimationName", '');
  _defineProperty(this, "webkitAnimationPlayState", '');
  _defineProperty(this, "webkitAnimationTimingFunction", '');
  _defineProperty(this, "webkitAppearance", '');
  _defineProperty(this, "webkitBackfaceVisibility", '');
  _defineProperty(this, "webkitBackgroundClip", '');
  _defineProperty(this, "webkitBackgroundOrigin", '');
  _defineProperty(this, "webkitBackgroundSize", '');
  _defineProperty(this, "webkitBorderBottomLeftRadius", '');
  _defineProperty(this, "webkitBorderBottomRightRadius", '');
  _defineProperty(this, "webkitBorderRadius", '');
  _defineProperty(this, "webkitBorderTopLeftRadius", '');
  _defineProperty(this, "webkitBorderTopRightRadius", '');
  _defineProperty(this, "webkitBoxAlign", '');
  _defineProperty(this, "webkitBoxFlex", '');
  _defineProperty(this, "webkitBoxOrdinalGroup", '');
  _defineProperty(this, "webkitBoxOrient", '');
  _defineProperty(this, "webkitBoxPack", '');
  _defineProperty(this, "webkitBoxShadow", '');
  _defineProperty(this, "webkitBoxSizing", '');
  _defineProperty(this, "webkitFilter", '');
  _defineProperty(this, "webkitFlex", '');
  _defineProperty(this, "webkitFlexBasis", '');
  _defineProperty(this, "webkitFlexDirection", '');
  _defineProperty(this, "webkitFlexFlow", '');
  _defineProperty(this, "webkitFlexGrow", '');
  _defineProperty(this, "webkitFlexShrink", '');
  _defineProperty(this, "webkitFlexWrap", '');
  _defineProperty(this, "webkitJustifyContent", '');
  _defineProperty(this, "webkitLineClamp", '');
  _defineProperty(this, "webkitMask", '');
  _defineProperty(this, "webkitMaskBoxImage", '');
  _defineProperty(this, "webkitMaskBoxImageOutset", '');
  _defineProperty(this, "webkitMaskBoxImageRepeat", '');
  _defineProperty(this, "webkitMaskBoxImageSlice", '');
  _defineProperty(this, "webkitMaskBoxImageSource", '');
  _defineProperty(this, "webkitMaskBoxImageWidth", '');
  _defineProperty(this, "webkitMaskClip", '');
  _defineProperty(this, "webkitMaskComposite", '');
  _defineProperty(this, "webkitMaskImage", '');
  _defineProperty(this, "webkitMaskOrigin", '');
  _defineProperty(this, "webkitMaskPosition", '');
  _defineProperty(this, "webkitMaskRepeat", '');
  _defineProperty(this, "webkitMaskSize", '');
  _defineProperty(this, "webkitOrder", '');
  _defineProperty(this, "webkitPerspective", '');
  _defineProperty(this, "webkitPerspectiveOrigin", '');
  _defineProperty(this, "webkitTextFillColor", '');
  _defineProperty(this, "webkitTextSizeAdjust", '');
  _defineProperty(this, "webkitTextStroke", '');
  _defineProperty(this, "webkitTextStrokeColor", '');
  _defineProperty(this, "webkitTextStrokeWidth", '');
  _defineProperty(this, "webkitTransform", '');
  _defineProperty(this, "webkitTransformOrigin", '');
  _defineProperty(this, "webkitTransformStyle", '');
  _defineProperty(this, "webkitTransition", '');
  _defineProperty(this, "webkitTransitionDelay", '');
  _defineProperty(this, "webkitTransitionDuration", '');
  _defineProperty(this, "webkitTransitionProperty", '');
  _defineProperty(this, "webkitTransitionTimingFunction", '');
  _defineProperty(this, "webkitUserSelect", '');
  _defineProperty(this, "whiteSpace", '');
  _defineProperty(this, "widows", '');
  _defineProperty(this, "width", '');
  _defineProperty(this, "willChange", '');
  _defineProperty(this, "wordBreak", '');
  _defineProperty(this, "wordSpacing", '');
  _defineProperty(this, "wordWrap", '');
  _defineProperty(this, "writingMode", '');
  _defineProperty(this, "zIndex", 0);
});
/**
 * @public
 */
var JElementCssStyle = exports["default"] = /*#__PURE__*/function (_JElementStyleDeclara) {
  _inherits(JElementCssStyle, _JElementStyleDeclara);
  function JElementCssStyle() {
    _classCallCheck(this, JElementCssStyle);
    return _callSuper(this, JElementCssStyle, arguments);
  }
  _createClass(JElementCssStyle, [{
    key: "names",
    get:
    // 所有样式名称
    function get() {
      if (!JElementCssStyle.styleNamesMap.length) {
        var map = new JElementStyleProperty();
        var keys = Object.getOwnPropertyNames(map);
        var _iterator = _createForOfIteratorHelper(keys),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var k = _step.value;
            var t = _typeof(map[k]);
            if (t === 'string' || t === 'number') JElementCssStyle.styleNamesMap.push(k);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return JElementCssStyle.styleNamesMap;
    }
  }]);
  return JElementCssStyle;
}(JElementStyleDeclaration); // 最外层容器默认样式
_defineProperty(JElementCssStyle, "styleNamesMap", []);
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
  get: function get(dir) {
    var _arguments = arguments,
      _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var rotation, rotationKey, key, cursor, normal, _normal;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            rotation = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 0;
            if (!(dir === 'rotate' || dir === 'skew')) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", _this2[dir]);
          case 3:
            if (Math.abs(rotation) > fullCircleRadius) rotation = rotation % fullCircleRadius;
            // 2PI 为一个圆，把角度转为一个圆内的值，以免重复生成图片
            rotationKey = Number(rotation.toFixed(2)); // 精度只取小数2位
            key = rotationKey === 0 ? dir : "".concat(dir, "_").concat(rotationKey);
            cursor = _this2[key];
            if (cursor) {
              _context.next = 40;
              break;
            }
            if (!(dir === 'l' || dir === 'r' || dir === 't' || dir === 'b')) {
              _context.next = 25;
              break;
            }
            if (!(rotation === 0)) {
              _context.next = 16;
              break;
            }
            _context.next = 12;
            return _util["default"].rotateImage(ns, Math.PI / 2);
          case 12:
            cursor = _context.sent;
            _this2['l'] = _this2['r'] = cursor;
            _context.next = 23;
            break;
          case 16:
            _context.next = 18;
            return _this2.get(dir, 0);
          case 18:
            normal = _context.sent;
            _context.next = 21;
            return _util["default"].rotateImage(normal, rotation);
          case 21:
            cursor = _context.sent;
            _this2[key] = cursor;
          case 23:
            _context.next = 40;
            break;
          case 25:
            if (!(dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb')) {
              _context.next = 40;
              break;
            }
            if (!(rotation === 0)) {
              _context.next = 33;
              break;
            }
            _context.next = 29;
            return _util["default"].rotateImage(nwse, Math.PI / 2);
          case 29:
            cursor = _context.sent;
            return _context.abrupt("return", _this2['tr'] = _this2['lb'] = cursor);
          case 33:
            _context.next = 35;
            return _this2.get(dir, 0);
          case 35:
            _normal = _context.sent;
            _context.next = 38;
            return _util["default"].rotateImage(_normal, rotation);
          case 38:
            cursor = _context.sent;
            _this2[key] = cursor;
          case 40:
            return _context.abrupt("return", cursor);
          case 41:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }
};
var ControlItemIcons = exports.ControlItemIcons = {
  'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
  'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
};

},{"../lib/util":18,"./eventEmitter":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _eventEmitter = _interopRequireDefault(require("./eventEmitter"));
var _util = _interopRequireDefault(require("../lib/util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Transform = exports["default"] = /*#__PURE__*/function (_EventEmiter) {
  _inherits(Transform, _EventEmiter);
  function Transform(option, targetOption) {
    var _this;
    _classCallCheck(this, Transform);
    _this = _callSuper(this, Transform);
    // 响应变化换元素和属性
    _defineProperty(_assertThisInitialized(_this), "targets", []);
    // x偏移量
    _defineProperty(_assertThisInitialized(_this), "translateX", 0);
    // y偏移量
    _defineProperty(_assertThisInitialized(_this), "translateY", 0);
    // z偏移量
    _defineProperty(_assertThisInitialized(_this), "translateZ", 0);
    _defineProperty(_assertThisInitialized(_this), "rotateX", 0);
    _defineProperty(_assertThisInitialized(_this), "rotateY", 0);
    _defineProperty(_assertThisInitialized(_this), "rotateZ", 0);
    _defineProperty(_assertThisInitialized(_this), "scaleX", 1);
    _defineProperty(_assertThisInitialized(_this), "scaleY", 1);
    _defineProperty(_assertThisInitialized(_this), "scaleZ", 1);
    _defineProperty(_assertThisInitialized(_this), "skewX", 0);
    _defineProperty(_assertThisInitialized(_this), "skewY", 0);
    if (option) Object.assign(_assertThisInitialized(_this), option);
    if (targetOption) _this.bind(targetOption);
    return _this;
  }
  _createClass(Transform, [{
    key: "translateXString",
    get: function get() {
      return "translateX(".concat(_util["default"].toPX(this.translateX), ")");
    }
  }, {
    key: "translateYString",
    get: function get() {
      return "translateY(".concat(_util["default"].toPX(this.translateY), ")");
    }
  }, {
    key: "translateZString",
    get: function get() {
      return "translateZ(".concat(_util["default"].toPX(this.translateZ), ")");
    }
  }, {
    key: "rotateXString",
    get: function get() {
      return "rotateX(".concat(_util["default"].toRad(this.rotateX), ")");
    }
  }, {
    key: "rotateYString",
    get: function get() {
      return "rotateY(".concat(_util["default"].toRad(this.rotateY), ")");
    }
  }, {
    key: "rotateZString",
    get: function get() {
      return "rotateZ(".concat(_util["default"].toRad(this.rotateZ), ")");
    }
  }, {
    key: "scaleXString",
    get: function get() {
      return "scaleX(".concat(this.scaleX, ")");
    }
  }, {
    key: "scaleYString",
    get: function get() {
      return "scaleY(".concat(this.scaleY, ")");
    }
  }, {
    key: "scaleZString",
    get: function get() {
      return "scaleZ(".concat(this.scaleZ, ")");
    }
  }, {
    key: "skewXString",
    get: function get() {
      return "skewX(".concat(_util["default"].toRad(this.skewX), ")");
    }
  }, {
    key: "skewYString",
    get: function get() {
      return "skewY(".concat(_util["default"].toRad(this.skewY), ")");
    }
  }, {
    key: "from",
    value: function from(data) {
      if (data) Object.assign(this, data);
    }
    // 生效
  }, {
    key: "apply",
    value: function apply() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.targets;
      if (Array.isArray(target)) {
        var _iterator = _createForOfIteratorHelper(target),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var t = _step.value;
            this.apply(t);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return;
      } else {
        if (target.target && target.target.css) target.target.css('transform', this.toString(target.watchProps));else if (target.target) target.target.style.transform = this.toString(target.watchProps);
      }
    }
    // 绑定并刷新到目标上
  }, {
    key: "bind",
    value: function bind(target) {
      this.targets.push(target);
      this.apply(target);
    }
  }, {
    key: "unbind",
    value: function unbind(target) {
      for (var i = this.targets.length - 1; i > -1; i--) {
        if (this.targets[i].target === target.target) {
          this.targets.splice(i, 1);
        }
      }
    }
    // 生成transform代理
  }, {
    key: "toString",
    value: function toString(watchProps) {
      var res = [];
      if (!watchProps) {
        watchProps = ['translateX', 'translateY', 'translateZ', "rotateX", 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
      }
      var _iterator2 = _createForOfIteratorHelper(watchProps),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var n = _step2.value;
          var nv = this[n + 'String'];
          if (typeof this[n] !== 'undefined' && typeof nv !== 'undefined') {
            res.push(nv);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return res.join(' ');
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
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
    }
  }], [{
    key: "createProxy",
    value: function createProxy() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var el = arguments.length > 1 ? arguments[1] : undefined;
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
    }
  }]);
  return Transform;
}(_eventEmitter["default"]);

},{"../lib/util":18,"./eventEmitter":5}],8:[function(require,module,exports){
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @public
 */
var JBaseComponent = exports["default"] = /*#__PURE__*/function (_JElement) {
  _inherits(JBaseComponent, _JElement);
  function JBaseComponent() {
    var _this;
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, JBaseComponent);
    option.style = option.style || {};
    // position和overflow预设的值优先级最高
    option.style = Object.assign(_objectSpread({}, _styleMap.ContainerDefaultStyle), option.style, {
      position: _styleMap.ContainerDefaultStyle.position,
      overflow: _styleMap.ContainerDefaultStyle.overflow
    });
    _this = _callSuper(this, JBaseComponent, [_objectSpread(_objectSpread({
      // 外层只响应Z轴旋转
      transformWatchProps: ['rotateZ', 'scaleX', 'scaleY']
    }, option), {}, {
      nodeType: 'div',
      className: 'j-design-editor-container',
      isComponent: true
    })]);
    // 当前控件的核心元素
    _defineProperty(_assertThisInitialized(_this), "target", void 0);
    // 选中
    _defineProperty(_assertThisInitialized(_this), "_selected", false);
    option.target = option.target || {};
    // 生成当前控制的元素
    _this.target = new _element["default"](_objectSpread(_objectSpread({}, option), {}, {
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
        target: _assertThisInitialized(_this),
        data: e
      });
    });
    return _this;
  }
  _createClass(JBaseComponent, [{
    key: "selected",
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
    }
    // 设置css到dom
  }, {
    key: "setDomStyle",
    value: function setDomStyle(name, value) {
      // 如果外层容器的样式，则加到container上
      if (name in _styleMap.ContainerDefaultStyle || name === 'transform') {
        _get(_getPrototypeOf(JBaseComponent.prototype), "setDomStyle", this).call(this, name, value);
      } else {
        this.target && this.target.css(name, value);
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var _this2 = this;
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      // 转json忽略渲染组件
      return _get(_getPrototypeOf(JBaseComponent.prototype), "toJSON", this).call(this, props, function (el) {
        return el !== _this2.target;
      });
    }
  }]);
  return JBaseComponent;
}(_element["default"]);

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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// 控制元素移动和矩阵变换
var JControllerItem = exports.JControllerItem = /*#__PURE__*/function (_JElement) {
  _inherits(JControllerItem, _JElement);
  function JControllerItem(option) {
    var _this;
    _classCallCheck(this, JControllerItem);
    option.style = _objectSpread(_objectSpread({
      border: '1px solid rgba(6,155,181,1)',
      backgroundColor: '#fff',
      pointerEvents: 'auto'
    }, option.style), {}, {
      position: 'absolute'
    });
    _this = _callSuper(this, JControllerItem, [option]);
    _defineProperty(_assertThisInitialized(_this), "dir", '');
    _defineProperty(_assertThisInitialized(_this), "size", 8);
    _defineProperty(_assertThisInitialized(_this), "_isMoving", false);
    // 拖放位置
    _defineProperty(_assertThisInitialized(_this), "dragStartPosition", {
      x: 0,
      y: 0
    });
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
  _createClass(JControllerItem, [{
    key: "isMoving",
    get: function get() {
      return this._isMoving;
    },
    set: function set(v) {
      this._isMoving = v;
    }
  }, {
    key: "onDragMove",
    value: function onDragMove(event) {
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
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event) {
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
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd(event) {
      var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : event;
      if (this.isMoving) {
        this.isMoving = false;
      }
    }
    // 计算指针
  }, {
    key: "resetCursor",
    value: function () {
      var _resetCursor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var rotation,
          cursor,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              rotation = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
              _context.next = 3;
              return _styleMap.ControlerCursors.get(this.dir, rotation);
            case 3:
              cursor = _context.sent;
              if (cursor) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return");
            case 6:
              // 先简单处理
              this.style.cursor = cursor.includes('\/') ? "url(".concat(cursor, ") 12 12,pointer") : cursor;
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function resetCursor() {
        return _resetCursor.apply(this, arguments);
      }
      return resetCursor;
    }()
  }]);
  return JControllerItem;
}(_element["default"]); // 元素大小位置控制器
var JControllerComponent = exports["default"] = /*#__PURE__*/function (_JControllerItem2) {
  _inherits(JControllerComponent, _JControllerItem2);
  function JControllerComponent(option) {
    var _this2;
    _classCallCheck(this, JControllerComponent);
    option.style = _objectSpread(_objectSpread({
      cursor: 'move',
      backgroundColor: 'transparent'
    }, option.style), {}, {
      pointerEvents: 'none'
    });
    option.dir = 'element';
    option.data = _objectSpread(_objectSpread({}, option.data), {}, {
      zIndex: _styleMap.topZIndex
    });
    _this2 = _callSuper(this, JControllerComponent, [option]);
    _defineProperty(_assertThisInitialized(_this2), "items", []);
    _defineProperty(_assertThisInitialized(_this2), "rotateItem", void 0);
    _defineProperty(_assertThisInitialized(_this2), "skewItem", void 0);
    _defineProperty(_assertThisInitialized(_this2), "target", void 0);
    // 选择框边距
    _defineProperty(_assertThisInitialized(_this2), "paddingSize", 0);
    _defineProperty(_assertThisInitialized(_this2), "isEditor", false);
    if (!_this2.editor.editable) return _possibleConstructorReturn(_this2);
    _this2.init(option);
    _this2.editor.dom.appendChild(_this2.dom);
    _this2.resetCursor(_this2.transform.rotateZ);
    return _this2;
  }
  _createClass(JControllerComponent, [{
    key: "init",
    value: function init(option) {
      var _this3 = this;
      this.createItem('l', {
        shape: 'rect',
        style: _objectSpread(_objectSpread({}, option.itemStyle), {}, {
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
        style: _objectSpread(_objectSpread({}, option.itemStyle), {}, {
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
        style: _objectSpread(_objectSpread({}, option.itemStyle), {}, {
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
        style: _objectSpread(_objectSpread({}, option.itemStyle), {}, {
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
        style: _objectSpread(_objectSpread({}, option.itemStyle), {}, {
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
        style: _objectSpread(_objectSpread({}, option.itemStyle), {}, {
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
        style: _objectSpread(_objectSpread({}, option.itemStyle), {}, {
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
        style: _objectSpread(_objectSpread({}, option.itemStyle), {}, {
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
        style: _objectSpread(_objectSpread({
          left: '50%',
          top: '-40px',
          //backgroundColor: 'transparent',
          border: 'none',
          boxShadow: '0 0 2px 2px #ccc',
          borderRadius: '50%',
          cursor: "pointer"
        }, option.itemStyle), {}, {
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
        style: _objectSpread(_objectSpread({
          left: '50%',
          top: '50%',
          border: 'none',
          boxShadow: '0 0 2px 2px #ccc',
          borderRadius: '50%',
          cursor: "pointer"
        }, option.itemStyle), {}, {
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
          if (!_this3.isEditor || e.button === 2) return; // 不是编辑器，不处理
          _this3.onDragStart(e);
        });
      }
      this.on('change', function (e) {
        _this3.change(e);
      });
    }
  }, {
    key: "center",
    get:
    // 当前关联是否是编辑器
    function get() {
      var center = {
        x: _util["default"].toNumber(this.data.left) + _util["default"].toNumber(this.data.width) / 2,
        y: _util["default"].toNumber(this.data.top) + _util["default"].toNumber(this.data.height) / 2
      };
      return center;
    }
    // 生成控制点
  }, {
    key: "createItem",
    value: function createItem(id, option) {
      var item = new JControllerItem(_objectSpread({
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
    }
    // 发生改变响应
  }, {
    key: "change",
    value: function change(e) {
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
      var center = this.center;
      if (dir === 'rotate') {
        this.rotateChange(e, args);
      } else if (dir === 'element') {
        // 元素位置控制器
        args.x = offX;
        args.y = offY;
      } else {
        // 先回原坐标，再主算偏移量，这样保证操作更容易理解
        if (this.transform.rotateZ) {
          var pos = this.getRotateEventPosition(e, this.transform.rotateZ, center);
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
      var newCenter = this.center;
      // 如果中心发生了偏移，则新中心点要移到绕原中心点旋转当前旋转角度的点，才举使图形移动不正常
      if (this.transform.rotateZ && (newCenter.x !== center.x || newCenter.y !== center.y)) {
        var targetCenter = _util["default"].rotatePoints(_objectSpread({}, newCenter), center, this.transform.rotateZ);
        this.move(targetCenter.x - newCenter.x, targetCenter.y - newCenter.y);
      }
      // x,y旋转
      if (args.skew.x || args.skew.y) {
        this.target.transform.rotateX += args.skew.x;
        this.target.transform.rotateY += args.skew.y;
        this.target.transform.apply();
      }
      this.applyToTarget();
    }
    // 因为旋转后坐标要回原才好计算操作，
  }, {
    key: "getRotateEventPosition",
    value: function getRotateEventPosition(e) {
      var rotation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.transform.rotateZ;
      var center = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.center;
      var offX = e.offX,
        offY = e.offY,
        oldPosition = e.oldPosition,
        newPosition = e.newPosition;
      // 先回原坐标，再主算偏移量，这样保证操作更容易理解
      if (rotation) {
        var _util$rotatePoints = _util["default"].rotatePoints([oldPosition, newPosition], center, -rotation),
          _util$rotatePoints2 = _slicedToArray(_util$rotatePoints, 2),
          pos1 = _util$rotatePoints2[0],
          pos2 = _util$rotatePoints2[1];
        offX = pos2.x - pos1.x;
        offY = pos2.y - pos1.y;
      }
      return {
        offX: offX,
        offY: offY,
        center: center
      };
    }
    // 发生旋转
  }, {
    key: "rotateChange",
    value: function rotateChange(e, args) {
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
        if (Math.abs(this.transform.rotateZ) > _styleMap.fullCircleRadius) this.transform.rotateZ = this.transform.rotateZ % _styleMap.fullCircleRadius;
        this.transform.apply();
        // 发生了旋转，要处理指针图标
        var _iterator = _createForOfIteratorHelper(this.items),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            item.resetCursor(this.transform.rotateZ);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    // 把变换应用到目标元素
  }, {
    key: "applyToTarget",
    value: function applyToTarget() {
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
    }
    // 重置
  }, {
    key: "reset",
    value: function reset() {
      var isEditor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isEditor;
      this.isMoving = false;
      delete this.target;
      // 编辑器不让旋转和skew
      var _iterator2 = _createForOfIteratorHelper(this.items),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          item.isMoving = false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.transform.from({
        rotateZ: 0
      });
    }
    // 绑定到操作的对象
  }, {
    key: "bind",
    value: function bind(target) {
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
      // 编辑器不让旋转和skew
      var _iterator3 = _createForOfIteratorHelper(this.items),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          item.data.visible = !this.isEditor && target.editable;
        }
        // 如果是编辑器，则不能捕获事件
        /*this.css({
            pointerEvents: this.isEditor? 'none' : 'auto'
        });*/
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    // 解除绑定
  }, {
    key: "unbind",
    value: function unbind(target) {
      if (this.target === target) {
        this.reset(false);
        this.data.visible = false;
      }
    }
  }]);
  return JControllerComponent;
}(JControllerItem);

},{"../constant/styleMap":6,"../lib/util":18,"./element":11}],11:[function(require,module,exports){
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @public
 */
var JElement = exports["default"] = /*#__PURE__*/function (_EventEmiter) {
  _inherits(JElement, _EventEmiter);
  function JElement() {
    var _this;
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, JElement);
    _this = _callSuper(this, JElement);
    _defineProperty(_assertThisInitialized(_this), "_id", '');
    // 类型名称
    _defineProperty(_assertThisInitialized(_this), "_type", '');
    // 子元素
    _defineProperty(_assertThisInitialized(_this), "_children", []);
    // 控件最外层的容器
    _defineProperty(_assertThisInitialized(_this), "_dom", void 0);
    // 父元素
    _defineProperty(_assertThisInitialized(_this), "parent", void 0);
    // 当前编辑器
    _defineProperty(_assertThisInitialized(_this), "editor", void 0);
    // 事件处理
    _defineProperty(_assertThisInitialized(_this), "event", void 0);
    // 样式代理
    _defineProperty(_assertThisInitialized(_this), "style", void 0);
    _defineProperty(_assertThisInitialized(_this), "data", void 0);
    // 是否可编辑
    _defineProperty(_assertThisInitialized(_this), "editable", true);
    // 变换
    _defineProperty(_assertThisInitialized(_this), "transform", void 0);
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
        target: _assertThisInitialized(_this)
      });
    });
    // 变换控制的是核心元素
    _this.transform = _transform["default"].createProxy(option.transform, {
      target: _assertThisInitialized(_this),
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
  _createClass(JElement, [{
    key: "initData",
    value: function initData(option) {
      var _this2 = this;
      // 属性变化映射到style
      this.data.watch(['left', 'top', 'width', 'height', 'zIndex', 'visible'], {
        set: function set(item) {
          if (item.name === 'visible') {
            _this2.style.display = item.value ? 'block' : 'none';
          } else if (item.name === 'rotation') {
            _this2.transform.rotateZ = item.value;
          } else if (item.name === 'angle') {
            _this2.transform.rotateZ = _util["default"].degToRad(item.value);
          } else _this2.style[item.name] = item.value;
        },
        get: function get(name) {
          if (name === 'width') {
            var w = _this2.style.width || 0;
            if ((!w || w === 'auto') && _this2.dom && _this2.dom.clientWidth) return _this2.dom.clientWidth;
            return w;
          } else if (name === 'height') {
            var h = _this2.style.height || 0;
            if ((!h || h === 'auto') && _this2.dom && _this2.dom.clientHeight) return _this2.dom.clientHeight;
            return h;
          } else if (name === 'rotation') {
            return _this2.transform.rotateZ;
          } else if (name === 'angle') {
            return _util["default"].radToDeg(_this2.transform.rotateZ);
          } else if (name === 'visible') {
            return _this2.style.display !== 'none';
          }
          return _this2.style[name];
        }
      });
      if (option.style) this.style.apply(option.style);
      if (option.editable === false) this.editable = false;
      if (option.visible === false) this.visible = false;
      if (option.data) {
        this.data.from(option.data);
      }
    }
    // 绑定事件
  }, {
    key: "bindEvent",
    value: function bindEvent(dom) {
      var _this3 = this;
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
        _this3.emit(e.type, e);
      });
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "children",
    get: function get() {
      return this._children;
    }
  }, {
    key: "dom",
    get: function get() {
      return this._dom;
    }
  }, {
    key: "className",
    get: function get() {
      return this.dom.className;
    },
    set: function set(v) {
      this.dom.className = v;
    }
  }, {
    key: "visible",
    get: function get() {
      return this.data.visible;
    },
    set: function set(v) {
      this.data.visible = v;
    }
  }, {
    key: "setDomStyle",
    value:
    // 设置css到dom
    function setDomStyle(name, value) {
      if (name === 'backgroundImage' && value) {
        if (!/^\s*url\(/.test(value)) value = "url(".concat(value, ")");
      }
      _util["default"].css(this.dom, name, value);
    }
    // 设置样式
  }, {
    key: "css",
    value: function css(name, value) {
      _util["default"].css(this, name, value);
      return this;
    }
    // dom属性
  }, {
    key: "attr",
    value: function attr(name, value) {
      return _util["default"].attr(this.dom, name, value);
    }
    // 移位
  }, {
    key: "move",
    value: function move(dx, dy) {
      this.data.left = _util["default"].toNumber(this.data.left) + dx;
      this.data.top = _util["default"].toNumber(this.data.top) + dy;
      this.emit('move', {
        dx: dx,
        dy: dy
      });
    }
    // 重置大小
  }, {
    key: "resize",
    value: function resize(w, h) {
      if (typeof w === 'number') {
        this.data.width = w;
      }
      if (typeof h === 'number') {
        this.data.height = h;
      }
    }
    // 新增子元素
  }, {
    key: "addChild",
    value: function addChild(child) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      if (Array.isArray(child)) {
        var _iterator = _createForOfIteratorHelper(child),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var c = _step.value;
            parent.addChild(c);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
    }
    // 移除自已
  }, {
    key: "remove",
    value: function remove() {
      if (this.parent) this.parent.removeChild(this);
    }
    // 移除子元素
  }, {
    key: "removeChild",
    value: function removeChild(el) {
      // @ts-ignore
      if (el.dom && el.dom.parentElement === this.dom) this.dom.removeChild(el.dom || el);
      for (var i = this.children.length - 1; i > -1; i--) {
        if (this.children[i] === el) return this.children.splice(i, 1);
      }
      // @ts-ignore
      delete el.parent;
    }
    // 转为json
  }, {
    key: "toJSON",
    value: function toJSON() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var ig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (p) {
        return true;
      };
      var fields = ['type', 'data', 'style', 'transform', 'id'].concat(_toConsumableArray(props));
      var obj = {
        children: []
      };
      var _iterator2 = _createForOfIteratorHelper(fields),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var k = _step2.value;
          var v = this[k];
          if (typeof v === 'string' || typeof v === 'number') {
            obj[k] = this[k];
          } else if (v && v.toJSON) {
            obj[k] = v.toJSON();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (this.children && this.children.length) {
        var _iterator3 = _createForOfIteratorHelper(this.children),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var child = _step3.value;
            if (child === this || ig(child) === false) continue;
            obj.children.push(child.toJSON());
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return obj;
    }
  }, {
    key: "toString",
    value: function toString() {
      var obj = this.toJSON();
      return JSON.stringify(obj);
    }
  }, {
    key: "toHtml",
    value: function toHtml() {
      return this.dom.outerHTML;
    }
    // 丢弃
  }, {
    key: "dispose",
    value: function dispose() {
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
    }
  }]);
  return JElement;
}(_eventEmitter["default"]);

},{"../constant/data":4,"../constant/eventEmitter":5,"../constant/transform":7,"../core/event":12,"../lib/util":18,"./style":14}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SupportEventNames = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SupportEventNames = exports.SupportEventNames = ['mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout', 'mousewheel', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'blur', 'change', 'focus', 'drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'contextmenu'];
/**
 * @public
 */
var JEvent = exports["default"] = /*#__PURE__*/function () {
  function JEvent(target) {
    _classCallCheck(this, JEvent);
    _defineProperty(this, "target", void 0);
    _defineProperty(this, "_eventCache", []);
    if (target) this.target = target;
  }
  // 规范化事件名
  _createClass(JEvent, [{
    key: "normalizeEventNames",
    value: function normalizeEventNames(name) {
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
    }
    /**
     * 初始化所有支持的事件，在init之前不要on，不然在init的时候会被释放掉。
     * @param handler - 事件处理函数
     * @param target - 元素
     */
  }, {
    key: "init",
    value: function init(handler, target) {
      if (target) {
        // 释放掉原target的事件
        this.dispose();
        this.target = target;
      }
      this.on(SupportEventNames, handler, false);
    }
  }, {
    key: "on",
    value:
    /**
     * 绑定事件到html对象
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    function on(name, fun) {
      var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var events = this.normalizeEventNames(name);
      var _iterator = _createForOfIteratorHelper(events),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var n = _step.value;
          this.target.addEventListener(n, fun, opt);
          this._eventCache.push([n, fun, opt]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ;
      return this;
    }
    /**
     * 从对象中移除事件
     * 不传 的时候删除所有事件
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
  }, {
    key: "off",
    value: function off(name, fun) {
      var _this = this;
      var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
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
    }
    // 移除所有的事件
  }, {
    key: "dispose",
    value: function dispose() {
      this.off();
    }
  }]);
  return JEvent;
}();

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.JFontData = void 0;
var _eventEmitter = _interopRequireDefault(require("../constant/eventEmitter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var JFontData = exports.JFontData = /*#__PURE__*/function () {
  function JFontData(family, url, font) {
    _classCallCheck(this, JFontData);
    _defineProperty(this, "family", void 0);
    _defineProperty(this, "url", void 0);
    // 中文名
    _defineProperty(this, "label", void 0);
    _defineProperty(this, "font", void 0);
    this.family = family;
    this.url = url;
    this.font = font;
  }
  _createClass(JFontData, [{
    key: "status",
    get: function get() {
      if (this.font) return this.font.status;
      return 'unloaded';
    }
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url,
          f,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = _args.length > 0 && _args[0] !== undefined ? _args[0] : this.url;
              this.url = url || this.url;
              if (!this.font) this.font = new FontFace(this.family, "url(\"".concat(this.url, "\")"));
              _context.next = 5;
              return this.font.load();
            case 5:
              f = _context.sent;
              document.fonts.add(f); // 生效
              return _context.abrupt("return", this);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function load() {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "toHtml",
    value: function toHtml() {
      return "@font-face {font-family: \"".concat(this.family, "\"; src: url(\"").concat(this.url, "\")}");
    }
  }]);
  return JFontData;
}();
var JFonts = exports["default"] = /*#__PURE__*/function (_EventEmiter) {
  _inherits(JFonts, _EventEmiter);
  function JFonts(fonts) {
    var _this;
    _classCallCheck(this, JFonts);
    _this = _callSuper(this, JFonts);
    // 初始化默认支持的字体
    _defineProperty(_assertThisInitialized(_this), "fontConfigs", new Map());
    _defineProperty(_assertThisInitialized(_this), "fonts", new Map());
    if (Array.isArray(fonts)) {
      var _iterator = _createForOfIteratorHelper(fonts),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var f = _step.value;
          _this.fontConfigs.set(f.family.toLocaleLowerCase(), f);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (fonts) {
      for (var name in fonts) {
        if (fonts[name] && _typeof(fonts[name]) === 'object') _this.fontConfigs.set(fonts[name].family.toLocaleLowerCase(), fonts[name]);
      }
    }
    _this.init();
    return _this;
  }
  _createClass(JFonts, [{
    key: "init",
    value: function init() {
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
    }
    // 加载字体
  }, {
    key: "load",
    value: function () {
      var _load2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(name, url) {
        var font, config, f;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              font = this.get(name);
              if (!font) {
                _context2.next = 5;
                break;
              }
              if (!(font.url && (font.status === 'unloaded' || font.status === 'error'))) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return", font.load());
            case 4:
              return _context2.abrupt("return", font);
            case 5:
              if (url) {
                _context2.next = 10;
                break;
              }
              config = this.fontConfigs.get(name.toLocaleLowerCase()); // 没有配置支持的字体，则报错
              if (config) {
                _context2.next = 9;
                break;
              }
              throw Error("\u6CA1\u6709\u652F\u6301\u7684 ".concat(name, " \u5B57\u4F53\u914D\u7F6E"));
            case 9:
              url = config.url;
            case 10:
              font = new JFontData(name, url);
              this.fonts.set(name.toLocaleLowerCase(), font);
              _context2.next = 14;
              return font.load();
            case 14:
              f = _context2.sent;
              this.emit('load', f); // 加载字本事件
              return _context2.abrupt("return", f);
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function load(_x, _x2) {
        return _load2.apply(this, arguments);
      }
      return load;
    }() // 获取已加载的字体
  }, {
    key: "get",
    value: function get(name) {
      if (this.fonts) {
        name = name.toLocaleLowerCase();
        if (this.fonts.has(name)) return this.fonts.get(name);
      }
      return null;
    }
    // 检查加载的字体是否存在，存在则返回字体对象
  }, {
    key: "check",
    value: function check(name) {
      var font = this.get(name);
      return !!font;
    }
  }]);
  return JFonts;
}(_eventEmitter["default"]);

},{"../constant/eventEmitter":5}],14:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styleMap = _interopRequireDefault(require("../constant/styleMap"));
var _util = _interopRequireDefault(require("../lib/util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var NumberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];
var JElementStyle = exports["default"] = /*#__PURE__*/function (_JElementCssStyle) {
  _inherits(JElementStyle, _JElementCssStyle);
  function JElementStyle(option) {
    var _this;
    _classCallCheck(this, JElementStyle);
    _this = _callSuper(this, JElementStyle);
    if (option) {
      _this.apply(option);
    }
    return _this;
  }
  // 把样式应用到元素或当前对象
  _createClass(JElementStyle, [{
    key: "apply",
    value: function apply(data) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var _iterator = _createForOfIteratorHelper(this.names),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          if (typeof name !== 'string') continue;
          if (typeof data[name] === 'string' || typeof data[name] === 'number') {
            if (target instanceof JElementStyle) {
              target.setStyle(name, data[name]);
            } else {
              target[name] = data[name];
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return target;
    }
    // 样式对应的元素
  }, {
    key: "applyTo",
    value: function applyTo(element) {
      this.apply(this, element.style);
    }
    // 设置样式
  }, {
    key: "setStyle",
    value: function setStyle(name, value) {
      this[name] = value;
      this.emit('change', {
        name: name,
        value: value
      });
    }
    // 触发所有更新到dom
  }, {
    key: "refresh",
    value: function refresh() {
      this.apply(this);
    }
    // 转为json
  }, {
    key: "toJSON",
    value: function toJSON() {
      var obj = {};
      var _iterator2 = _createForOfIteratorHelper(this.names),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var name = _step2.value;
          if (typeof this[name] === 'undefined') continue;
          obj[name] = this[name];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return obj;
    }
    // 生成样式代理
  }], [{
    key: "createProxy",
    value: function createProxy() {
      var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
    }
  }]);
  return JElementStyle;
}(_styleMap["default"]);

},{"../constant/styleMap":6,"../lib/util":18}],15:[function(require,module,exports){
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
var _decorator = require("./lib/decorator");
var _event = require("./core/event");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @public
 */
var JEditor = exports.JEditor = exports["default"] = /*#__PURE__*/function (_JBase) {
  _inherits(JEditor, _JBase);
  function JEditor() {
    var _this;
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, JEditor);
    option.style = option.style || {};
    Object.assign(option.style, {
      'boxShadow': '0 0 10px 10px #ccc',
      'position': 'absolute',
      'backgroundSize': '100% 100%'
    });
    // @ts-ignore 外层只响应Z轴旋转
    option.transformWatchProps = ['rotateZ', 'scaleX', 'scaleY'];
    _this = _callSuper(this, JEditor, [option]);
    // 外层用于定位的容器
    _defineProperty(_assertThisInitialized(_this), "view", void 0);
    // 所有支持的类型
    _defineProperty(_assertThisInitialized(_this), "shapes", new Map());
    // 元素控帛器
    _defineProperty(_assertThisInitialized(_this), "elementController", void 0);
    _defineProperty(_assertThisInitialized(_this), "fonts", void 0);
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
  _createClass(JEditor, [{
    key: "init",
    value: function init(option) {
      var _this2 = this;
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
        _this2.select(_this2); // 选中自已
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
    }
  }, {
    key: "children",
    get:
    // 字体管理器
    // 重写子集为target
    function get() {
      return this.target.children;
    }
    // 被选中的元素
  }, {
    key: "selectedElements",
    get: function get() {
      var res = [];
      var _iterator = _createForOfIteratorHelper(this.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;
          if (el instanceof _baseComponent["default"] && el.selected) {
            res.push(el);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return res;
    }
    // 绑定事件
  }, {
    key: "bindEvent",
    value: function bindEvent(dom) {
      if (this.view) _get(_getPrototypeOf(JEditor.prototype), "bindEvent", this).call(this, this.view.dom); // 编辑器事件绑到整个容器上
    }
    // 选中某个元素
  }, {
    key: "select",
    value: function select(el) {
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
    }
  }, {
    key: "resize",
    value: function resize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.width;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.data.height;
      this.data.left = Math.max((_util["default"].toNumber(this.view.dom.clientWidth) - _util["default"].toNumber(width)) / 2, 0);
      this.data.top = Math.max((_util["default"].toNumber(this.view.dom.clientHeight) - _util["default"].toNumber(height)) / 2, 0);
      this.data.width = width;
      this.data.height = height;
      this.attr('data-size', "".concat(width, "*").concat(height));
      this.emit('resize', {
        width: width,
        height: height
      });
    }
    // 添加元素到画布
  }, {
    key: "addChild",
    value: function addChild(child) {
      if (child === this.target) {
        return _get(_getPrototypeOf(JEditor.prototype), "addChild", this).call(this, child);
      }
      var self = this;
      this.bindElementEvent(child);
      child.parent = this; // 把父设置成编辑器
      child.editor = this;
      // 刷新样式
      child.style.refresh();
      child.editable = this.editable; // 当前是否可编辑
      this.target.addChild(child, this.target);
    }
    // 移除
  }, {
    key: "removeChild",
    value: function removeChild(el) {
      if (el === this.target) {
        //console.warn('不能移除自已');
        return;
      }
      if (el instanceof _element["default"]) {
        el.off(_event.SupportEventNames);
        el.off(['select', 'styleChange', 'dataChange']);
      }
      return this.target.removeChild(el);
    }
    // 绑定元素事件
  }, {
    key: "bindElementEvent",
    value: function bindElementEvent(el) {
      var self = this;
      // 监听样式改变
      el.on([].concat(_toConsumableArray(_event.SupportEventNames), ['styleChange', 'select', 'dataChange']), function (e) {
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
    }
    // 通过ID获取子元素
  }, {
    key: "getChild",
    value: function getChild(id) {
      var _iterator2 = _createForOfIteratorHelper(this.children),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          if (child.id === id) return child;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    // 把domcument坐标转为编辑器相对坐标
  }, {
    key: "toEditorPosition",
    value: function toEditorPosition(pos) {
      // 编辑器坐标
      var editorPos = _util["default"].getElementBoundingRect(this.target.dom);
      return {
        x: pos.x - editorPos.x,
        y: pos.y - editorPos.y
      };
    }
  }, {
    key: "clear",
    value: function clear() {
      this.css({
        'backgroundColor': '#fff',
        'backgroundImage': ''
      });
      for (var i = this.children.length - 1; i >= 0; i--) {
        var el = this.children[i];
        this.removeChild(el);
      }
      this.elementController.data.visible = false;
    }
    // 缩放
  }, {
    key: "scale",
    value: function scale(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      if (x < 0.1 || y < 0.1) return;
      this.transform.scaleX = x;
      this.transform.scaleY = y;
    }
    // 注册自定义组件
  }, {
    key: "regShape",
    value: function regShape(name, shape) {
      if (_typeof(name) === 'object') {
        for (var n in name) {
          this.regShape(n, name[n]);
        }
        return;
      }
      if (this.shapes.has(name)) throw Error("\u5143\u7D20\u7C7B\u578B".concat(name, "\u5DF2\u7ECF\u5B58\u5728"));
      this.shapes.set(name, shape);
      return shape;
    }
    // 创建元素
  }, {
    key: "createShape",
    value: function createShape(type) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var shape = typeof type === 'string' ? this.shapes.get(type) : type;
      if (!shape) {
        throw Error("".concat(type, "\u4E0D\u5B58\u5728\u7684\u5143\u7D20\u7C7B\u578B"));
      }
      // @ts-ignore
      var el = new shape(_objectSpread(_objectSpread({}, option), {}, {
        editor: this,
        type: type
      }));
      return el;
    }
  }, {
    key: "fromJSON",
    value: function fromJSON(data) {
      this.clear();
      if (typeof data === 'string') data = JSON.parse(data);
      if (data.style) {
        this.style.apply(data.style); // 应用样式
      }
      this.resize(data.width || data.data.width, data.height || data.data.height);
      var _iterator3 = _createForOfIteratorHelper(data.children),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var c = _step3.value;
          if (!c.type) continue;
          var item = this.createShape(c.type, c);
          this.addChild(item);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);
  return JEditor;
}(_baseComponent["default"]);
__decorate([(0, _decorator.Debounce)(10)], JEditor.prototype, "resize", null);

},{"./components/image":1,"./components/svg":2,"./components/text":3,"./core/baseComponent":9,"./core/controller":10,"./core/element":11,"./core/event":12,"./core/fonts":13,"./lib/decorator":17,"./lib/util":18}],16:[function(require,module,exports){
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

},{"./components/image":1,"./components/text":3,"./constant/data":4,"./constant/styleMap":6,"./constant/types":8,"./core/baseComponent":9,"./core/element":11,"./core/event":12,"./editor":15,"./lib/util":18}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Debounce = Debounce;
/**
 * 防抖装饰器
 * @example
 ```ts
 class Test {
        @Debounce(1000)
        log() {
            console.log("Debounced output!");
        }
    }
 ```
 * @param milliseconds - 毫秒数
 * @returns
 */
function Debounce() {
  var milliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function (target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    var timerId = null;
    descriptor.value = function () {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timerId);
      timerId = setTimeout(function () {
        originalMethod.apply(_this, args);
      }, milliseconds);
    };
    return descriptor;
  };
}

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
    if (this.isNumber(v)) return Number(v);else if (typeof v === 'string') return parseFloat(v) || 0;
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
      var _x = p.x - center.x;
      var _y = p.y - center.y;
      p.x = _x * cos - _y * sin + center.x;
      p.y = _x * sin + _y * cos + center.y;
    }
    return p;
  },
  // 设置样式
  css: function css(dom, name, value) {
    if (!name) return;
    if (_typeof(name) === 'object') {
      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(name)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var n = _step.value;
          this.css(dom, n, name[n]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
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
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  // 请求远程资源
  request: function request(url, option) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            option = option || {};
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              var request = new XMLHttpRequest(); //新建XMLHttpRequest对象
              if (option.headers) {
                for (var name in option.headers) {
                  request.setRequestHeader(name, option.headers[name]);
                }
              }
              var params = [];
              if (option.data) {
                for (var _name in option.data) {
                  params.push("".concat(_name, "=").concat(encodeURIComponent(option.data[_name])));
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
            }));
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};

},{}],19:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2NvbXBvbmVudHMvaW1hZ2UuanMiLCJkaXN0L2NvbXBvbmVudHMvc3ZnLmpzIiwiZGlzdC9jb21wb25lbnRzL3RleHQuanMiLCJkaXN0L2NvbnN0YW50L2RhdGEuanMiLCJkaXN0L2NvbnN0YW50L2V2ZW50RW1pdHRlci5qcyIsImRpc3QvY29uc3RhbnQvc3R5bGVNYXAuanMiLCJkaXN0L2NvbnN0YW50L3RyYW5zZm9ybS5qcyIsImRpc3QvY29uc3RhbnQvdHlwZXMuanMiLCJkaXN0L2NvcmUvYmFzZUNvbXBvbmVudC5qcyIsImRpc3QvY29yZS9jb250cm9sbGVyLmpzIiwiZGlzdC9jb3JlL2VsZW1lbnQuanMiLCJkaXN0L2NvcmUvZXZlbnQuanMiLCJkaXN0L2NvcmUvZm9udHMuanMiLCJkaXN0L2NvcmUvc3R5bGUuanMiLCJkaXN0L2VkaXRvci5qcyIsImRpc3QvaW5kZXguanMiLCJkaXN0L2xpYi9kZWNvcmF0b3IuanMiLCJkaXN0L2xpYi91dGlsLmpzIiwibm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUEsSUFBQSxjQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQ0EsSUFBQSxLQUFBLEdBQUEsT0FBQTtBQUE4QyxTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUFBQSxTQUFBLFFBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLHFCQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxXQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsVUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUEsY0FBQSxDQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsU0FBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsT0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsTUFBQSxDQUFBLHlCQUFBLEdBQUEsTUFBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxpQkFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsV0FBQSxHQUFBO0FBQUEsU0FBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxVQUFBLFFBQUEsWUFBQSxXQUFBLGVBQUEsU0FBQTtBQUFBLFNBQUEsa0JBQUEsTUFBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLFVBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsV0FBQSxVQUFBLENBQUEsWUFBQSx3QkFBQSxVQUFBLEVBQUEsVUFBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxjQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsR0FBQSxVQUFBO0FBQUEsU0FBQSxhQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxRQUFBLFVBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQSxPQUFBLFdBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxXQUFBLGlCQUFBLFFBQUEsbUJBQUEsV0FBQTtBQUFBLFNBQUEsZUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFlBQUEsQ0FBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLGtCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxTQUFBLHlFQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLENBQUE7QUFBQSxTQUFBLFdBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLGVBQUEsQ0FBQSxDQUFBLEdBQUEsMEJBQUEsQ0FBQSxDQUFBLEVBQUEseUJBQUEsS0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxXQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsMkJBQUEsSUFBQSxFQUFBLElBQUEsUUFBQSxJQUFBLEtBQUEsT0FBQSxDQUFBLElBQUEseUJBQUEsSUFBQSwyQkFBQSxJQUFBLGFBQUEsSUFBQSx5QkFBQSxTQUFBLHVFQUFBLHNCQUFBLENBQUEsSUFBQTtBQUFBLFNBQUEsdUJBQUEsSUFBQSxRQUFBLElBQUEseUJBQUEsY0FBQSx3RUFBQSxJQUFBO0FBQUEsU0FBQSwwQkFBQSxjQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLGlDQUFBLENBQUEsYUFBQSx5QkFBQSxZQUFBLDBCQUFBLGFBQUEsQ0FBQTtBQUFBLFNBQUEsS0FBQSxlQUFBLE9BQUEsb0JBQUEsT0FBQSxDQUFBLEdBQUEsSUFBQSxJQUFBLEdBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLGFBQUEsSUFBQSxZQUFBLEtBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLFFBQUEsSUFBQSxHQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQSxRQUFBLElBQUEsY0FBQSxJQUFBLEdBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsSUFBQSxFQUFBLFFBQUEsT0FBQSxJQUFBLENBQUEsR0FBQSxXQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLE9BQUEsTUFBQSxHQUFBLFFBQUEsWUFBQSxJQUFBLENBQUEsS0FBQSxjQUFBLElBQUEsQ0FBQSxLQUFBLE9BQUEsU0FBQTtBQUFBLFNBQUEsZUFBQSxNQUFBLEVBQUEsUUFBQSxZQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQSxLQUFBLE1BQUEsR0FBQSxlQUFBLENBQUEsTUFBQSxPQUFBLE1BQUEsMkJBQUEsTUFBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxJQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxjQUFBLGdCQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxhQUFBLGVBQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxVQUFBLFFBQUEsRUFBQSxVQUFBLGVBQUEsVUFBQSxtQkFBQSxVQUFBLHVCQUFBLFNBQUEsMERBQUEsUUFBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsSUFBQSxVQUFBLENBQUEsU0FBQSxJQUFBLFdBQUEsSUFBQSxLQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsUUFBQSxZQUFBLGFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxRQUFBLGlCQUFBLFFBQUEsZ0JBQUEsVUFBQSxFQUFBLGVBQUEsQ0FBQSxRQUFBLEVBQUEsVUFBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsY0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUEsWUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFIQSxJQUlxQixNQUFNLEdBQUEsT0FBQSxxQ0FBQSxLQUFBO0VBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxLQUFBO0VBQ3ZCO0FBQ0o7QUFDQTtBQUNBO0VBQ0ksU0FBQSxPQUFBLEVBQXlCO0lBQUEsSUFBQSxLQUFBO0lBQUEsSUFBYixNQUFNLEdBQUEsU0FBQSxDQUFBLE1BQUEsUUFBQSxTQUFBLFFBQUEsU0FBQSxHQUFBLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFBQSxlQUFBLE9BQUEsTUFBQTtJQUNuQixLQUFBLEdBQUEsVUFBQSxPQUFBLE1BQUEsR0FBQSxhQUFBLENBQUEsYUFBQSxLQUNPLE1BQU07TUFDVCxRQUFRLEVBQUUsS0FBSztNQUNmLFFBQVEsRUFBRTtJQUFVO0lBRXhCO0lBQ0EsS0FBQSxDQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFVBQUMsQ0FBQyxFQUFLO01BQzVCLEtBQUEsQ0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0Q7SUFDQSxLQUFBLENBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBQyxDQUFDLEVBQUs7TUFDN0IsS0FBQSxDQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRDtJQUNBLEtBQUEsQ0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7SUFDNUM7SUFDQSxLQUFBLENBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUNaLEtBQUssQ0FDUixFQUFFO01BQ0M7TUFDQSxHQUFHLEVBQUUsU0FBQSxJQUFDLElBQUksRUFBSztRQUNYLEtBQUEsQ0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSztNQUNwQyxDQUFDO01BQ0Q7TUFDQSxHQUFHLEVBQUUsU0FBQSxJQUFDLElBQUksRUFBSztRQUNYLE9BQU8sS0FBQSxDQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRztNQUM5QjtJQUNKLENBQUMsQ0FBQztJQUNGO0lBQ0E7SUFDQSxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHO0lBQ3BDLElBQUksR0FBRyxFQUNILEtBQUEsQ0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7SUFBQyxPQUFBLEtBQUE7RUFDNUI7RUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkksWUFBQSxDQUFBLE1BQUE7SUFBQSxHQUFBO0lBQUEsS0FBQSxFQUtBLFNBQUEsT0FBQSxFQUFtQjtNQUFBLElBQVosS0FBSyxHQUFBLFNBQUEsQ0FBQSxNQUFBLFFBQUEsU0FBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLE1BQUcsRUFBRTtNQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO01BQ2pCLE9BQUEsSUFBQSxDQUFBLGVBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQSxtQkFBQSxJQUFBLE9BQW9CLEtBQUs7SUFDN0I7RUFBQztFQUFBLE9BQUEsTUFBQTtBQUFBLEVBaEQrQix5QkFBSTs7Ozs7Ozs7OztBQ054QyxJQUFBLGNBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFDQSxJQUFBLEtBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFDQSxJQUFBLEtBQUEsR0FBQSxPQUFBO0FBQTRDLFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQUFBLFNBQUEsb0JBQUEsa0JBRDVDLHFKQUFBLG1CQUFBLFlBQUEsb0JBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLGNBQUEsRUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEtBQUEsQ0FBQSx3QkFBQSxNQUFBLEdBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxrQkFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLGFBQUEsdUJBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLDhCQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsVUFBQSxNQUFBLFlBQUEsTUFBQSxRQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsV0FBQSxNQUFBLG1CQUFBLENBQUEsSUFBQSxNQUFBLFlBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsZ0JBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsU0FBQSxZQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxPQUFBLE9BQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxDQUFBLGVBQUEsS0FBQSxFQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxhQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLG1CQUFBLElBQUEsWUFBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxjQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsR0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEscUJBQUEsQ0FBQSxnQkFBQSxDQUFBLGdCQUFBLENBQUEsZ0JBQUEsVUFBQSxjQUFBLGtCQUFBLGNBQUEsMkJBQUEsU0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHFDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLFlBQUEsc0JBQUEsQ0FBQSxnQ0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHNCQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxTQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxDQUFBLElBQUEsTUFBQSxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLE1BQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxLQUFBLFdBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLDJCQUFBLGVBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLDBCQUFBLEVBQUEsMEJBQUEsSUFBQSwwQkFBQSxxQkFBQSxpQkFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFlBQUEsS0FBQSxzQ0FBQSxDQUFBLEtBQUEsQ0FBQSxvQkFBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxtQkFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLHNCQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsdUJBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLHFCQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLG9CQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHVDQUFBLENBQUEsaUJBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLE9BQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHNDQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxjQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxNQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFdBQUEsVUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsb0JBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsYUFBQSxRQUFBLENBQUEsU0FBQSxVQUFBLE1BQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsWUFBQSxjQUFBLEtBQUEsaUJBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxPQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLFlBQUEsS0FBQSxhQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLGdCQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxrQ0FBQSxpQkFBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEtBQUEsRUFBQSwwQkFBQSxFQUFBLFlBQUEsU0FBQSxDQUFBLENBQUEsMEJBQUEsbUJBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsWUFBQSxTQUFBLGlCQUFBLENBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSwwQkFBQSxFQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLG1CQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxpQkFBQSw2QkFBQSxDQUFBLENBQUEsV0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSwwQkFBQSxLQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsMEJBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLGFBQUEsT0FBQSxFQUFBLENBQUEsT0FBQSxxQkFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxpQ0FBQSxDQUFBLENBQUEsYUFBQSxHQUFBLGFBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxPQUFBLE9BQUEsQ0FBQSxPQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxXQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGlDQUFBLE1BQUEsQ0FBQSxDQUFBLDZEQUFBLENBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxhQUFBLEtBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsT0FBQSxDQUFBLFNBQUEsS0FBQSxXQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsV0FBQSxNQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsSUFBQSxXQUFBLElBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxPQUFBLElBQUEsWUFBQSxRQUFBLGNBQUEsTUFBQSxnQkFBQSxHQUFBLEdBQUEsQ0FBQSxPQUFBLFVBQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLGtCQUFBLENBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLE1BQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxLQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxJQUFBLFdBQUEsS0FBQSxTQUFBLElBQUEsV0FBQSxDQUFBLFFBQUEsVUFBQSxJQUFBLFVBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxjQUFBLElBQUEsS0FBQSxpQkFBQSxXQUFBLGtCQUFBLENBQUEsYUFBQSxJQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsa0JBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLGdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxjQUFBLENBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxZQUFBLEtBQUEscURBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLFlBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSx3QkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsY0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsTUFBQSxnQkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLFNBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxRQUFBLFdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLHFCQUFBLENBQUEsQ0FBQSxJQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsSUFBQSxRQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxPQUFBLE1BQUEsa0JBQUEsSUFBQSx5QkFBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsVUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsVUFBQSxLQUFBLENBQUEsY0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxHQUFBLGFBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSx5QkFBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxnQkFBQSxLQUFBLDhCQUFBLGFBQUEsV0FBQSxjQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxRQUFBLEtBQUEsUUFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxvQkFBQSxNQUFBLFVBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLFNBQUEsbUJBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxjQUFBLElBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsSUFBQSxDQUFBLEtBQUEsV0FBQSxLQUFBLElBQUEsTUFBQSxDQUFBLEtBQUEsaUJBQUEsSUFBQSxDQUFBLElBQUEsSUFBQSxPQUFBLENBQUEsS0FBQSxZQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsRUFBQSw2QkFBQSxJQUFBLFNBQUEsSUFBQSxHQUFBLFNBQUEsYUFBQSxPQUFBLFdBQUEsT0FBQSxFQUFBLE1BQUEsUUFBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxZQUFBLE1BQUEsS0FBQSxJQUFBLGtCQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsVUFBQSxLQUFBLGNBQUEsT0FBQSxHQUFBLElBQUEsa0JBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxXQUFBLEdBQUEsS0FBQSxLQUFBLENBQUEsU0FBQTtBQUFBLFNBQUEsUUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsT0FBQSxNQUFBLENBQUEscUJBQUEsUUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsU0FBQSxjQUFBLENBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsV0FBQSxTQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxPQUFBLE9BQUEsV0FBQSxDQUFBLElBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxNQUFBLENBQUEseUJBQUEsR0FBQSxNQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxLQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGlCQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsR0FBQSxjQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsVUFBQSxRQUFBLFlBQUEsUUFBQSxRQUFBLG9CQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsS0FBQSxXQUFBLEdBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsa0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLFNBQUEseUVBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsZUFBQSxDQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSx5QkFBQSxLQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxJQUFBLEVBQUEsSUFBQSxRQUFBLElBQUEsS0FBQSxPQUFBLENBQUEsSUFBQSx5QkFBQSxJQUFBLDJCQUFBLElBQUEsYUFBQSxJQUFBLHlCQUFBLFNBQUEsdUVBQUEsc0JBQUEsQ0FBQSxJQUFBO0FBQUEsU0FBQSx1QkFBQSxJQUFBLFFBQUEsSUFBQSx5QkFBQSxjQUFBLHdFQUFBLElBQUE7QUFBQSxTQUFBLDBCQUFBLGNBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsaUNBQUEsQ0FBQSxhQUFBLHlCQUFBLFlBQUEsMEJBQUEsYUFBQSxDQUFBO0FBQUEsU0FBQSxLQUFBLGVBQUEsT0FBQSxvQkFBQSxPQUFBLENBQUEsR0FBQSxJQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsYUFBQSxJQUFBLFlBQUEsS0FBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsUUFBQSxJQUFBLEdBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLFFBQUEsSUFBQSxjQUFBLElBQUEsR0FBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLEVBQUEsUUFBQSxPQUFBLElBQUEsQ0FBQSxHQUFBLFdBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsT0FBQSxNQUFBLEdBQUEsUUFBQSxZQUFBLElBQUEsQ0FBQSxLQUFBLGNBQUEsSUFBQSxDQUFBLEtBQUEsT0FBQSxTQUFBO0FBQUEsU0FBQSxlQUFBLE1BQUEsRUFBQSxRQUFBLFlBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLEtBQUEsTUFBQSxHQUFBLGVBQUEsQ0FBQSxNQUFBLE9BQUEsTUFBQSwyQkFBQSxNQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLElBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGNBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLGFBQUEsZUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLFVBQUEsUUFBQSxFQUFBLFVBQUEsZUFBQSxVQUFBLG1CQUFBLFVBQUEsdUJBQUEsU0FBQSwwREFBQSxRQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxJQUFBLFVBQUEsQ0FBQSxTQUFBLElBQUEsV0FBQSxJQUFBLEtBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxRQUFBLFlBQUEsYUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFFBQUEsaUJBQUEsUUFBQSxnQkFBQSxVQUFBLEVBQUEsZUFBQSxDQUFBLFFBQUEsRUFBQSxVQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEs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LENBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUEsY0FBQSxDQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsU0FBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsT0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsTUFBQSxDQUFBLHlCQUFBLEdBQUEsTUFBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxpQkFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxVQUFBLFFBQUEsWUFBQSxXQUFBLGVBQUEsU0FBQTtBQUFBLFNBQUEsa0JBQUEsTUFBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLFVBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsV0FBQSxVQUFBLENBQUEsWUFBQSx3QkFBQSxVQUFBLEVBQUEsVUFBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxjQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsR0FBQSxVQUFBO0FBQUEsU0FBQSxhQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxRQUFBLFVBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQSxPQUFBLFdBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxXQUFBLGlCQUFBLFFBQUEsbUJBQUEsV0FBQTtBQUFBLFNBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsZUFBQSxDQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSx5QkFBQSxLQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxJQUFBLEVBQUEsSUFBQSxRQUFBLElBQUEsS0FBQSxPQUFBLENBQUEsSUFBQSx5QkFBQSxJQUFBLDJCQUFBLElBQUEsYUFBQSxJQUFBLHlCQUFBLFNBQUEsdUVBQUEsc0JBQUEsQ0FBQSxJQUFBO0FBQUEsU0FBQSwwQkFBQSxjQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLGlDQUFBLENBQUEsYUFBQSx5QkFBQSxZQUFBLDBCQUFBLGFBQUEsQ0FBQTtBQUFBLFNBQUEsdUJBQUEsSUFBQSxRQUFBLElBQUEseUJBQUEsY0FBQSx3RUFBQSxJQUFBO0FBQUEsU0FBQSxLQUFBLGVBQUEsT0FBQSxvQkFBQSxPQUFBLENBQUEsR0FBQSxJQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsYUFBQSxJQUFBLFlBQUEsS0FBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsUUFBQSxJQUFBLEdBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLFFBQUEsSUFBQSxjQUFBLElBQUEsR0FBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLEVBQUEsUUFBQSxPQUFBLElBQUEsQ0FBQSxHQUFBLFdBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsT0FBQSxNQUFBLEdBQUEsUUFBQSxZQUFBLElBQUEsQ0FBQSxLQUFBLGNBQUEsSUFBQSxDQUFBLEtBQUEsT0FBQSxTQUFBO0FBQUEsU0FBQSxlQUFBLE1BQUEsRUFBQSxRQUFBLFlBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLEtBQUEsTUFBQSxHQUFBLGVBQUEsQ0FBQSxNQUFBLE9BQUEsTUFBQSwyQkFBQSxNQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLElBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGNBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLGFBQUEsZUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLFVBQUEsUUFBQSxFQUFBLFVBQUEsZUFBQSxVQUFBLG1CQUFBLFVBQUEsdUJBQUEsU0FBQSwwREFBQSxRQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxJQUFBLFVBQUEsQ0FBQSxTQUFBLElBQUEsV0FBQSxJQUFBLEtBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxRQUFBLFlBQUEsYUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFFBQUEsaUJBQUEsUUFBQSxnQkFBQSxVQUFBLEVBQUEsZUFBQSxDQUFBLFFBQUEsRUFBQSxVQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxjQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQSxZQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFB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Q0FBQSxVQUFBLEdBQUEsR0FBQSxnQkFBQSxHQUFBO0FBQUEsU0FBQSxRQUFBLENBQUEsc0NBQUEsT0FBQSx3QkFBQSxNQUFBLHVCQUFBLE1BQUEsQ0FBQSxRQUFBLGFBQUEsQ0FBQSxrQkFBQSxDQUFBLGdCQUFBLENBQUEsV0FBQSxDQUFBLHlCQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsV0FBQSxLQUFBLE1BQUEsSUFBQSxDQUFBLEtBQUEsTUFBQSxDQUFBLFNBQUEscUJBQUEsQ0FBQSxLQUFBLE9BQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxDQUFBLEVBQUEsY0FBQSxRQUFBLEVBQUEsVUFBQSxNQUFBLG9CQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxLQUFBLENBQUEscUJBQUEsRUFBQSxRQUFBLEtBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSwyQkFBQSxDQUFBLENBQUEsTUFBQSxjQUFBLElBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxNQUFBLHFCQUFBLEVBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsRUFBQSxlQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxJQUFBLG1CQUFBLElBQUEsU0FBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsRUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFNBQUEsaUpBQUEsZ0JBQUEsU0FBQSxNQUFBLFVBQUEsR0FBQSxXQUFBLENBQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsZ0JBQUEsR0FBQSxJQUFBLENBQUEsSUFBQSxTQUFBLElBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxHQUFBLElBQUEsTUFBQSxTQUFBLEdBQUEsR0FBQSxHQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsZUFBQSxnQkFBQSxJQUFBLEVBQUEsb0JBQUEsRUFBQSw4QkFBQSxNQUFBLFFBQUEsR0FBQTtBQUFBLFNBQUEsNEJBQUEsQ0FBQSxFQUFBLE1BQUEsU0FBQSxDQUFBLHFCQUFBLENBQUEsc0JBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLG1CQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsK0RBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxHQUFBLEVBQUEsR0FBQSxRQUFBLEdBQUEsWUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLE1BQUEsSUFBQSxPQUFBLEtBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLElBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsR0FBQSxlQUFBLENBQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsQ0FBQSxFQUFBLHlCQUFBLEtBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsV0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLDJCQUFBLElBQUEsRUFBQSxJQUFBLFFBQUEsSUFBQSxLQUFBLE9BQUEsQ0FBQSxJQUFBLHlCQUFBLElBQUEsMkJBQUEsSUFBQSxhQUFBLElBQUEseUJBQUEsU0FBQSx1RUFBQSxzQkFBQSxDQUFBLElBQUE7QUFBQSxTQUFBLDBCQUFBLGNBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsaUNBQUEsQ0FBQSxhQUFBLHlCQUFBLFlBQUEsMEJBQUEsYUFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLElBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGNBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLGFBQUEsZUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLHVCQUFBLElBQUEsUUFBQSxJQUFBLHlCQUFBLGNBQUEsd0VBQUEsSUFBQTtBQUFBLFNBQUEsVUFBQSxRQUFBLEVBQUEsVUFBQSxlQUFBLFVBQUEsbUJBQUEsVUFBQSx1QkFBQSxTQUFBLDBEQUFBLFFBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxVQUFBLElBQUEsVUFBQSxDQUFBLFNBQUEsSUFBQSxXQUFBLElBQUEsS0FBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLFFBQUEsWUFBQSxhQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsUUFBQSxpQkFBQSxRQUFBLGdCQUFBLFVBQUEsRUFBQSxlQUFBLENBQUEsUUFBQSxFQUFBLFVBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsU0FBQSxHQUFBLENBQUEsU0FBQSxDQUFBLFlBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsV0FBQSxHQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsT0FBQSxDQUFBLENBQUEs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QSxPQUFBLE1BQUE7RUFBQTtFQUFBLE9BQUEsWUFBQSxDQUFBLFVBQUE7QUFBQSxFQUFTLFlBQVk7QUFHNUM7QUFDQTtBQUNBO0FBQ0E7QUFIQSxJQUlhLFFBQVEsR0FBQSxPQUFBLENBQUEsUUFBQSwwQkFBQSxZQUFBO0VBQUEsU0FBQSxDQUFBLFFBQUEsRUFBQSxZQUFBO0VBQUEsU0FBQSxTQUFBO0lBQUEsSUFBQSxNQUFBO0lBQUEsZUFBQSxPQUFBLFFBQUE7SUFBQSxTQUFBLEtBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLElBQUEsT0FBQSxLQUFBLENBQUEsS0FBQSxHQUFBLEtBQUEsTUFBQSxLQUFBLEdBQUEsS0FBQSxFQUFBLEtBQUE7TUFBQSxJQUFBLENBQUEsS0FBQSxJQUFBLFNBQUEsQ0FBQSxLQUFBO0lBQUE7SUFBQSxNQUFBLEdBQUEsVUFBQSxPQUFBLFFBQUEsS0FBQSxNQUFBLENBQUEsSUFBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLE1BQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxNQUFBO0lBQUEsT0FBQSxNQUFBO0VBQUE7RUFBQSxPQUFBLFlBQUEsQ0FBQSxRQUFBO0FBQUEsRUFBUyxVQUFVO0FBSXhDO0FBQ0E7QUFDQTtBQUNBO0FBSEEsSUFJYSxTQUFTLEdBQUEsT0FBQSxDQUFBLFNBQUEsMEJBQUEsY0FBQTtFQUFBLFNBQUEsQ0FBQSxTQUFBLEVBQUEsY0FBQTtFQUFBLFNBQUEsVUFBQTtJQUFBLElBQUEsTUFBQTtJQUFBLGVBQUEsT0FBQSxTQUFBO0lBQUEsU0FBQSxLQUFBLEdBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxJQUFBLE9BQUEsS0FBQSxDQUFBLEtBQUEsR0FBQSxLQUFBLE1BQUEsS0FBQSxHQUFBLEtBQUEsRUFBQSxLQUFBO01BQUEsSUFBQSxDQUFBLEtBQUEsSUFBQSxTQUFBLENBQUEsS0FBQTtJQUFBO0lBQUEsTUFBQSxHQUFBLFVBQUEsT0FBQSxTQUFBLEtBQUEsTUFBQSxDQUFBLElBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxN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QUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsa0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLFNBQUEseUVBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsZUFBQSxDQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSx5QkFBQSxLQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxJQUFBLEVBQUEsSUFBQSxRQUFBLElBQUEsS0FBQSxPQUFBLENBQUEsSUFBQSx5QkFBQSxJQUFBLDJCQUFBLElBQUEsYUFBQSxJQUFBLHlCQUFBLFNBQUEsdUVBQUEs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QSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsZ0JBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsU0FBQSxZQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxPQUFBLE9BQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxDQUFBLGVBQUEsS0FBQSxFQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxhQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLG1CQUFBLElBQUEsWUFBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxjQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsR0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEscUJBQUEsQ0FBQSxnQkFBQSxDQUFBLGdCQUFBLENBQUEsZ0JBQUEsVUFBQSxjQUFBLGtCQUFBLGNBQUEsMkJBQUEsU0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHFDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLFlBQUEsc0JBQUEsQ0FBQSxnQ0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHNCQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxTQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxDQUFBLElBQUEsTUFBQSxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLE1BQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxLQUFBLFdBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLDJCQUFBLGVBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLDBCQUFBLEVBQUEsMEJBQUEsSUFBQSwwQkFBQSxxQkFBQSxpQkFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFlBQUEsS0FBQSxzQ0FBQSxDQUFBLEtBQUEsQ0FBQSxvQkFBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxtQkFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLHNCQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsdUJBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLHFCQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLG9CQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHVDQUFBLENBQUEsaUJBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLE9BQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHNDQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxjQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxNQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFdBQUEsVUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsb0JBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsYUFBQSxRQUFBLENBQUEsU0FBQSxVQUFBLE1BQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsWUFBQSxjQUFBLEtBQUEsaUJBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxPQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLFlBQUEsS0FBQSxhQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLGdCQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxrQ0FBQSxpQkFBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEtBQUEsRUFBQSwwQkFBQSxFQUFBLFlBQUEsU0FBQSxDQUFBLENBQUEsMEJBQUEsbUJBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsWUFBQSxTQUFBLGlCQUFBLENBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSwwQkFBQSxFQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLG1CQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxpQkFBQSw2QkFBQSxDQUFBLENBQUEsV0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSwwQkFBQSxLQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsMEJBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLGFBQUEsT0FBQSxFQUFBLENBQUEsT0FBQSxxQkFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxpQ0FBQSxDQUFBLENBQUEsYUFBQSxHQUFBLGFBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxPQUFBLE9BQUEsQ0FBQSxPQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxXQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGlDQUFBLE1BQUEsQ0FBQSxDQUFBLDZEQUFBLENBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxhQUFBLEtBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsT0FBQSxDQUFBLFNBQUEsS0FBQSxXQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsV0FBQSxNQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsSUFBQSxXQUFBLElBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxPQUFBLElBQUEsWUFBQSxRQUFBLGNBQUEsTUFBQSxnQkFBQSxHQUFBLEdBQUEsQ0FBQSxPQUFBLFVBQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLGtCQUFBLENBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLE1BQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxLQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxJQUFBLFdBQUEsS0FBQSxTQUFBLElBQUEsV0FBQSxDQUFBLFFBQUEsVUFBQSxJQUFBLFVBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxjQUFBLElBQUEsS0FBQSxpQkFBQSxXQUFBLGtCQUFBLENBQUEsYUFBQSxJQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsa0JBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLGdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxjQUFBLENBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxZQUFBLEtBQUEscURBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLFlBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSx3QkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsY0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsTUFBQSxnQkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLFNBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxRQUFBLFdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLHFCQUFBLENBQUEsQ0FBQSxJQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsSUFBQSxRQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxPQUFBLE1BQUEsa0JBQUEsSUFBQSx5QkFBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsVUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsVUFBQSxLQUFBLENBQUEsY0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxHQUFBLGFBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSx5QkFBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxnQkFBQSxLQUFBLDhCQUFBLGFBQUEsV0FBQSxjQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxRQUFBLEtBQUEsUUFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxvQkFBQSxNQUFBLFVBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLFNBQUEsbUJBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxjQUFBLElBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsSUFBQSxDQUFBLEtBQUEsV0FBQSxLQUFBLElBQUEsTUFBQSxDQUFBLEtBQUEsaUJBQUEsSUFBQSxDQUFBLElBQUEsSUFBQSxPQUFBLENBQUEsS0FBQSxZQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsRUFBQSw2QkFBQSxJQUFBLFNBQUEsSUFBQSxHQUFBLFNBQUEsYUFBQSxPQUFBLFdBQUEsT0FBQSxFQUFBLE1BQUEsUUFBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxZQUFBLE1BQUEsS0FBQSxJQUFBLGtCQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsVUFBQSxLQUFBLGNBQUEsT0FBQSxHQUFBLElBQUEsa0JBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxXQUFBLEdBQUEsS0FBQSxLQUFBLENBQUEsU0FBQTtBQUFBLFNBQUEsUUFBQSxDQUFBLHNDQUFBLE9BQUEsd0JBQUEsTUFBQSx1QkFBQSxNQUFBLENBQUEsUUFBQSxhQUFBLENBQUEsa0JBQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSx5QkFBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxNQUFBLElBQUEsQ0FBQSxLQUFBLE1BQUEsQ0FBQSxTQUFBLHFCQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsMkJBQUEsQ0FBQSxFQUFBLGNBQUEsUUFBQSxFQUFBLFVBQUEsTUFBQSxvQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLHFCQUFBLEVBQUEsUUFBQSxLQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsMkJBQUEsQ0FBQSxDQUFBLE1BQUEsY0FBQSxJQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxxQkFBQSxFQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLEVBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsSUFBQSxtQkFBQSxJQUFBLFNBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsRUFBQSxVQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLGdCQUFBLFNBQUEsTUFBQSxVQUFBLEdBQUEsV0FBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLElBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLGdCQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsU0FBQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsR0FBQSxJQUFBLE1BQUEsU0FBQSxHQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLGVBQUEsZ0JBQUEsSUFBQSxFQUFBLG9CQUFBLEVBQUEsOEJBQUEsTUFBQSxRQUFBLEdBQUE7QUFBQSxTQUFBLDRCQUFBLENBQUEsRUFBQSxNQUFBLFNBQUEsQ0FBQSxxQkFBQSxDQUFBLHNCQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxtQkFBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLCtEQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsR0FBQSxFQUFBLEdBQUEsUUFBQSxHQUFBLFlBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxNQUFBLElBQUEsT0FBQSxLQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxVQUFBLFFBQUEsWUFBQSxXQUFBLGVBQUEsU0FBQTtBQUFBLFNBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsZUFBQSxDQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSx5QkFBQSxLQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxJQUFBLEVBQUEsSUFBQSxRQUFBLElBQUEsS0FBQSxPQUFBLENBQUEsSUFBQSx5QkFBQSxJQUFBLDJCQUFBLElBQUEsYUFBQSxJQUFBLHlCQUFBLFNBQUEsdUVBQUEsc0JBQUEsQ0FBQSxJQUFBO0FBQUEsU0FBQSwwQkFBQSxjQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLGlDQUFBLENBQUEsYUFBQSx5QkFBQSxZQUFBLDBCQUFBLGFBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxJQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxjQUFBLGdCQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxhQUFBLGVBQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSx1QkFBQSxJQUFBLFFBQUEsSUFBQSx5QkFBQSxjQUFBLHdFQUFBLElBQUE7QUFBQSxTQUFBLFVBQUEsUUFBQSxFQUFBLFVBQUEsZUFBQSxVQUFBLG1CQUFBLFVBQUEsdUJBQUEsU0FBQSwwREFBQSxRQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxJQUFBLFVBQUEsQ0FBQSxTQUFBLElBQUEsV0FBQSxJQUFBLEtBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxRQUFBLFlBQUEsYUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFFBQUEsaUJBQUEsUUFBQSxnQkFBQSxVQUFBLEVBQUEsZUFBQSxDQUFBLFFBQUEsRUFBQSxVQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxjQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQSxZQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxHQUFBLGNBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLFFBQUEsWUFBQSxRQUFBLFFBQUEsb0JBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxLQUFBLFdBQUEsR0FBQTtBQUFBLFNBQUEsZUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFlBQUEsQ0FBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLGtCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxTQUFBLHlFQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLENBQUE7QUFDTyxJQUFNLFNBQVMsR0FBQSxPQUFBLENBQUEsU0FBQSxHQUFHLEtBQUs7QUFDdkIsSUFBTSxnQkFBZ0IsR0FBQSxPQUFBLENBQUEsZ0JBQUEsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFIQSxJQUlhLHdCQUF3QixHQUFBLE9BQUEsQ0FBQSx3QkFBQSwwQkFBQSxZQUFBO0VBQUEsU0FBQSxDQUFBLHdCQUFBLEVBQUEsWUFBQTtFQUFBLFNBQUEseUJBQUE7SUFBQSxJQUFBLEtBQUE7SUFBQSxlQUFBLE9BQUEsd0JBQUE7SUFBQSxTQUFBLElBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLElBQUEsT0FBQSxLQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxJQUFBLEdBQUEsSUFBQSxFQUFBLElBQUE7TUFBQSxJQUFBLENBQUEsSUFBQSxJQUFBLFNBQUEsQ0FBQSxJQUFBO0lBQUE7SUFBQSxLQUFBLEdBQUEsVUFBQSxPQUFBLHdCQUFBLEtBQUEsTUFBQSxDQUFBLElBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLGVBQUEsQ0FBQSxzQkFBQSxDQUFBLEtBQUE7SUFBQSxlQUFBLENBQUEsc0JBQUEsQ0FBQSxLQUFBO0lBQUEsZUFBQSxDQUFBLHNCQUFBLENBQUEsS0FBQTtJQUFBLE9BQUEsS0FBQTtFQUFBO0VBQUEsT0FBQSxZQUFBLENBQUEsd0JBQUE7QUFBQSxFQUFTLHdCQUFXO0FBeVp6RDtBQUNBO0FBQ0E7QUFDQTtBQUhBLElBSWEscUJBQXFCLEdBQUEsT0FBQSxDQUFBLHFCQUFBLGdCQUFBLFlBQUEsVUFBQSxzQkFBQTtFQUFBLGVBQUEsT0FBQSxxQkFBQTtFQUFBLGVBQUEsc0JBQ2hCLEVBQUU7RUFBQSxlQUFBLHVCQUNELEVBQUU7RUFBQSxlQUFBLHFCQUNKLEVBQUU7RUFBQSxlQUFBLG9CQUNILEVBQUU7RUFBQSxlQUFBLDRCQUNNLEVBQUU7RUFBQSxlQUFBLGNBQ2hCLEVBQUU7RUFBQSxlQUFBLG9CQUNJLEVBQUU7RUFBQSxlQUFBLCtCQUNTLEVBQUU7RUFBQSxlQUFBLHlCQUNSLEVBQUU7RUFBQSxlQUFBLDZCQUNFLEVBQUU7RUFBQSxlQUFBLDRCQUNILEVBQUU7RUFBQSxlQUFBLDRCQUNGLEVBQUU7RUFBQSxlQUFBLGtDQUNJLEVBQUU7RUFBQSxlQUFBLHdCQUNaLEVBQUU7RUFBQSxlQUFBLDZCQUNHLEVBQUU7RUFBQSxlQUFBLGtDQUNHLEVBQUU7RUFBQSxlQUFBLHFCQUNmLEVBQUU7RUFBQSxlQUFBLHNCQUNELEVBQUU7RUFBQSxlQUFBLHlCQUNDLEVBQUU7RUFBQSxlQUFBLDZCQUNFLEVBQUU7RUFBQSxlQUFBLHFCQUNWLEVBQUU7RUFBQSxlQUFBLCtCQUNRLEVBQUU7RUFBQSxlQUFBLDhCQUNILEVBQUU7RUFBQSxlQUFBLHlCQUNQLEVBQUU7RUFBQSxlQUFBLDBCQUNELEVBQUU7RUFBQSxlQUFBLDBCQUNGLEVBQUU7RUFBQSxlQUFBLDJCQUNELEVBQUU7RUFBQSxlQUFBLDZCQUNBLEVBQUU7RUFBQSxlQUFBLDhCQUNELEVBQUU7RUFBQSxlQUFBLDhCQUNGLEVBQUU7RUFBQSxlQUFBLDJCQUNMLEVBQUU7RUFBQSxlQUFBLHlCQUNKLEVBQUU7RUFBQSxlQUFBLHdCQUNILEVBQUU7RUFBQSxlQUFBLG9CQUNOLEVBQUU7RUFBQSxlQUFBLGlCQUNMLEVBQUU7RUFBQSxlQUFBLHNCQUNHLEVBQUU7RUFBQSxlQUFBLDJCQUNHLEVBQUU7RUFBQSxlQUFBLHlCQUNKLEVBQUU7RUFBQSxlQUFBLDhCQUNHLEVBQUU7RUFBQSxlQUFBLDhCQUNGLEVBQUU7RUFBQSxlQUFBLDhCQUNGLEVBQUU7RUFBQSxlQUFBLDJCQUNMLEVBQUU7RUFBQSxlQUFBLGdDQUNHLEVBQUU7RUFBQSxlQUFBLGdDQUNGLEVBQUU7RUFBQSxlQUFBLGdDQUNGLEVBQUU7RUFBQSxlQUFBLDJCQUNQLEVBQUU7RUFBQSxlQUFBLDJCQUNGLEVBQUU7RUFBQSxlQUFBLHVCQUNOLEVBQUU7RUFBQSxlQUFBLDRCQUNHLEVBQUU7RUFBQSxlQUFBLGlDQUNHLEVBQUU7RUFBQSxlQUFBLGtDQUNELEVBQUU7RUFBQSxlQUFBLDRCQUNSLEVBQUU7RUFBQSxlQUFBLDRCQUNGLEVBQUU7RUFBQSxlQUFBLHlCQUNMLEVBQUU7RUFBQSxlQUFBLHNCQUNMLEVBQUU7RUFBQSxlQUFBLDZCQUNLLEVBQUU7RUFBQSxlQUFBLCtCQUNBLEVBQUU7RUFBQSxlQUFBLHNCQUNYLEVBQUU7RUFBQSxlQUFBLDRCQUNJLEVBQUU7RUFBQSxlQUFBLDRCQUNGLEVBQUU7RUFBQSxlQUFBLDJCQUNILEVBQUU7RUFBQSxlQUFBLDRCQUNELEVBQUU7RUFBQSxlQUFBLDJCQUNILEVBQUU7RUFBQSxlQUFBLHVCQUNOLEVBQUU7RUFBQSxlQUFBLDRCQUNHLEVBQUU7RUFBQSxlQUFBLDBCQUNKLEVBQUU7RUFBQSxlQUFBLCtCQUNHLEVBQUU7RUFBQSxlQUFBLCtCQUNGLEVBQUU7RUFBQSxlQUFBLCtCQUNGLEVBQUU7RUFBQSxlQUFBLDRCQUNMLEVBQUU7RUFBQSxlQUFBLGlDQUNHLEVBQUU7RUFBQSxlQUFBLGlDQUNGLEVBQUU7RUFBQSxlQUFBLGlDQUNGLEVBQUU7RUFBQSxlQUFBLDRCQUNQLEVBQUU7RUFBQSxlQUFBLDRCQUNGLEVBQUU7RUFBQSxlQUFBLHFCQUNULEVBQUU7RUFBQSxlQUFBLDBCQUNHLEVBQUU7RUFBQSxlQUFBLDBCQUNGLEVBQUU7RUFBQSxlQUFBLDBCQUNGLEVBQUU7RUFBQSxlQUFBLHVCQUNMLEVBQUU7RUFBQSxlQUFBLHNC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QUFBLHlCQUNDLEVBQUU7RUFBQSxlQUFBLDJCQUNBLEVBQUU7RUFBQSxlQUFBLG9CQUNULEVBQUU7RUFBQSxlQUFBLHlCQUNHLEVBQUU7RUFBQSxlQUFBLHVCQUNKLEVBQUU7RUFBQSxlQUFBLHNCQUNILEVBQUU7RUFBQSxlQUFBLGVBQ1QsRUFBRTtFQUFBLGVBQUE7RUFBQSxlQUFBLHdCQUVPLEVBQUU7RUFBQSxlQUFBLHdCQUNGLEVBQUU7RUFBQSxlQUFBLG9CQUNOLEVBQUU7RUFBQSxlQUFBLHFCQUNELEVBQUU7RUFBQSxlQUFBLG9CQUNILEVBQUU7RUFBQSxlQUFBLHlCQUNHLEVBQUU7RUFBQSxlQUFBLDRCQUNDLEVBQUU7RUFBQSxlQUFBLHdCQUNOLEVBQUU7RUFBQSxlQUFBLGlCQUNULEVBQUU7RUFBQSxlQUFBLHNCQUNHLEVBQUU7RUFBQSxlQUFBLHlCQUNDLEVBQUU7RUFBQSxlQUFBLDJCQUNBLEVBQUU7RUFBQSxlQUFBLHVCQUNOLEVBQUU7RUFBQSxlQUFBLHVCQUNGLEVBQUU7RUFBQSxlQUFBLDBCQUNDLEVBQUU7RUFBQSxlQUFBLDRCQUNBLEVBQUU7RUFBQSxlQUFBLHFCQUNULEVBQUU7RUFBQSxlQUFBLHNCQUNELEVBQUU7RUFBQSxlQUFBLG9CQUNKLEVBQUU7RUFBQSxlQUFBLGlCQUNMLEVBQUU7RUFBQSxlQUFBLG9CQUNDLEVBQUU7RUFBQSxlQUFBLG9CQUNGLEVBQUU7RUFBQSxlQUFBLHNCQUNBLEVBQUU7RUFBQSxlQUFBLGVBQ1QsRUFBRTtFQUFBLGVBQUEsbUJBQ0UsRUFBRTtFQUFBLGVBQUEsd0JBQ0csRUFBRTtFQUFBLGVBQUEsb0JBQ04sRUFBRTtFQUFBLGVBQUEsbUJBQ0gsRUFBRTtFQUFBLGVBQUEscUJBQ0EsRUFBRTtFQUFBLGVBQUEsdUJBQ0EsRUFBRTtFQUFBLGVBQUEscUJBQ0osRUFBRTtFQUFBLGVBQUEsbUJBQ0osRUFBRTtFQUFBLGVBQUEsbUJBQ0YsRUFBRTtFQUFBLGVBQUEsb0JBQ0QsRUFBRTtFQUFBLGVBQUEsdUJBQ0MsRUFBRTtFQUFBLGVBQUEsb0JBQ0wsRUFBRTtFQUFBLGVBQUEsd0JBQ0UsRUFBRTtFQUFBLGVBQUEsbUJBQ1AsRUFBRTtFQUFBLGVBQUEsdUJBQ0UsRUFBRTtFQUFBLGVBQUEsb0JBQ0wsRUFBRTtFQUFBLGVBQUEsd0JBQ0UsRUFBRTtFQUFBLGVBQUEsbUJBQ1AsRUFBRTtFQUFBLGVBQUEsdUJBQ0UsRUFBRTtFQUFBLGVBQUEsb0JBQ0wsRUFBRTtFQUFBLGVBQUEseUJBQ0csRUFBRTtFQUFBLGVBQUEsaUJBQ1YsRUFBRTtFQUFBLGVBQUEseUJBQ00sRUFBRTtFQUFBLGVBQUEscUJBQ04sRUFBRTtFQUFBLGVBQUEsdUJBQ0EsRUFBRTtFQUFBLGVBQUEsa0JBQ1AsRUFBRTtFQUFBLGVBQUEsZ0JBQ0osRUFBRTtFQUFBLGVBQUEsa0JBQ0EsRUFBRTtFQUFBLGVBQUEsa0JBQ0YsRUFBRTtFQUFBLGVBQUEsdUJBQ0csRUFBRTtFQUFBLGVBQUEsd0JBQ0QsRUFBRTtFQUFBLGVBQUEsdUJBQ0gsRUFBRTtFQUFBLGVBQUEsdUJBQ0YsRUFBRTtFQUFBLGVBQUEsbUJBQ04sRUFBRTtFQUFBLGVBQUEseUJBQ0ksRUFBRTtFQUFBLGVBQUEsNkJBQ0UsRUFBRTtFQUFBLGVBQUEsdUJBQ1IsRUFBRTtFQUFBLGVBQUEsb0JBQ0wsRUFBRTtFQUFBLGVBQUEsb0JBQ0YsRUFBRTtFQUFBLGVBQUEsNkJBQ08sRUFBRTtFQUFBLGVBQUEsa0NBQ0csRUFBRTtFQUFBLGVBQUEsbUNBQ0QsRUFBRTtFQUFBLGVBQUEsOEJBQ1AsRUFBRTtFQUFBLGVBQUEsOEJBQ0YsRUFBRTtFQUFBLGVBQUEsa0JBQ2QsRUFBRTtFQUFBLGVBQUEsdUJBQ0csRUFBRTtFQUFBLGVBQUEsMEJBQ0MsRUFBRTtFQUFBLGVBQUEsNEJBQ0EsRUFBRTtFQUFBLGVBQUEsd0JBQ04sRUFBRTtFQUFBLGVBQUEsd0JBQ0YsRUFBRTtFQUFBLGVBQUEsMkJBQ0MsRUFBRTtFQUFBLGVBQUEsNkJBQ0EsRUFBRTtFQUFBLGVBQUEsc0JBQ1QsRUFBRTtFQUFBLGVBQUEsdUJBQ0QsRUFBRTtFQUFBLGVBQUEscUJBQ0osRUFBRTtFQUFBLGVBQUEsZUFDUixFQUFFO0VBQUEsZUFBQSx5QkFDUSxFQUFFO0VBQUEsZUFBQSwwQkFDRCxFQUFFO0VBQUEsZUFBQSwwQkFDRixFQUFFO0VBQUEsZUFBQSxxQkFDUCxFQUFFO0VBQUEsZUFBQTtFQUFBLGVBQUEsc0JBRUQsRUFBRTtFQUFBLGVBQUEsNEJBQ0ksRUFBRTtFQUFBLGVBQUEsdUJBQ1AsRUFBRTtFQUFBLGVBQUEscUJBQ0osRUFBRTtFQUFBLGVBQUEsb0JBQ0gsRUFBRTtFQUFBLGVBQUEsd0JBQ0UsRUFBRTtFQUFBLGVBQUEsbUJBQ1AsRUFBRTtFQUFBLGVBQUEsMkJBQ00sRUFBRTtFQUFBLGVBQUEsaUJBQ1osRUFBRTtFQUFBLGVBQUEsaUJBQ0YsRUFBRTtFQUFBLGVBQUEsZ0JBQ0gsRUFBRTtFQUFBLGVBQUEsaUJBQ0QsRUFBRTtFQUFBLGVBQUEsaUJBQ0YsRUFBRTtFQUFBLGVBQUEsdUJBQ0ksRUFBRTtFQUFBLGVBQUEsZ0JBQ1QsRUFBRTtFQUFBLGVBQUEseUJBQ08sRUFBRTtFQUFBLGVBQUEsdUJBQ0osRUFBRTtFQUFBLGVBQUEsNEJBQ0csRUFBRTtFQUFBLGVBQUEsK0JBQ0MsRUFBRTtFQUFBLGVBQUEsaUNBQ0EsRUFBRTtFQUFBLGVBQUEsNkJBQ04sRUFBRTtFQUFBLGVBQUEsNkJBQ0YsRUFBRTtFQUFBLGVBQUEsZ0NBQ0MsRUFBRTtFQUFBLGVBQUEsa0NBQ0EsRUFBRTtFQUFBLGVBQUEsMkJBQ1QsRUFBRTtFQUFBLGVBQUEsNEJBQ0QsRUFBRTtFQUFBLGVBQUEsMEJBQ0osRUFBRTtFQUFBLGVBQUEsd0JBQ0osRUFBRTtFQUFBLGVBQUEsNkJBQ0csRUFBRTtFQUFBLGVBQUEsZ0NBQ0MsRUFBRTtFQUFBLGVBQUEsa0NBQ0EsRUFBRTtFQUFBLGVBQUEsOEJBQ04sRUFBRTtFQUFBLGVBQUEsOEJBQ0YsRUFBRTtFQUFBLGVBQUEsaUNBQ0MsRUFBRTtFQUFBLGVBQUEsbUNBQ0EsRUFBRTtFQUFBLGVBQUEsNEJBQ1QsRUFBRTtFQUFBLGVBQUEsNkJBQ0QsRUFBRTtFQUFBLGVBQUEsMkJBQ0osRUFBRTtFQUFBLGVBQUEsMEJBQ0gsRUFBRTtFQUFBLGVBQUEseUJBQ0gsRUFBRTtFQUFBLGVBQUEseUJBQ0YsRUFBRTtFQUFBLGVBQUEsMEJBQ0QsRUFBRTtFQUFBLGVBQUEsOEJBQ0UsRUFBRTtFQUFBLGVBQUEsc0JBQ1YsRUFBRTtFQUFBLGVBQUEsdUJBQ0QsRUFBRTtFQUFBLGVBQUEseUJBQ0EsRUFBRTtFQUFBLGVBQUEsb0JBQ1AsRUFBRTtFQUFBLGVBQUEsc0JBQ0EsRUFBRTtFQUFBLGVBQUEsaUJBQ1AsRUFBRTtFQUFBLGVBQUEsMEJBQ08sRUFBRTtFQUFBLGVBQUEsMkJBQ0QsRUFBRTtFQUFBLGVBQUEsd0JBQ0wsRUFBRTtFQUFBLGVBQUEseUJBQ0QsRUFBRTtFQUFBLGVBQUEsMkJBQ0EsRUFBRTtFQUFBLGVBQUEsd0JBQ0wsRUFBRTtFQUFBLGVBQUEsc0JBQ0osRUFBRTtFQUFBLGVBQUEsa0JBQ04sRUFBRTtFQUFBLGVBQUEsc0JBQ0UsRUFBRTtFQUFBLGVBQUEsb0JBQ0osRUFBRTtFQUFBLGVBQUEsd0JBQ0UsRUFBRTtFQUFBLGVBQUEscUJBQ0wsRUFBRTtFQUFBLGVBQUEsNkJBQ00sRUFBRTtFQUFBLGVBQUEseUJBQ04sRUFBRTtFQUFBLGVBQUEsOEJBQ0csRUFBRTtFQUFBLGVBQUEsNkJBQ0gsRUFBRTtFQUFBLGVBQUEsZ0NBQ0MsRUFBRTtFQUFBLGVBQUEsOEJBQ0osRUFBRTtFQUFBLGVBQUEsa0NBQ0UsRUFBRTtFQUFBLGVBQUEsdUJBQ2IsRUFBRTtFQUFBLGVBQUEsNEJBQ0csRUFBRTtFQUFBLGVBQUEsK0JBQ0MsRUFBRTtFQUFBLGVBQUEsNEJBQ0wsRUFBRTtFQUFBLGVBQUEscUJBQ1QsRUFBRTtFQUFBLGVBQUEsMEJBQ0csRUFBRTtFQUFBLGVBQUEsdUJBQ0wsRUFBRTtFQUFBLGVBQUEsd0JBQ0QsRUFBRTtFQUFBLGVBQUEscUJBQ0wsRUFBRTtFQUFBLGVBQUEsd0JBQ0MsRUFBRTtFQUFBLGVBQUEsOEJBQ0ksRUFBRTtFQUFBLGVBQUEsZ0NBQ0EsRUFBRTtFQUFBLGVBQUEsY0FDcEIsRUFBRTtFQUFBLGVBQUEsc0JBQ00sRUFBRTtFQUFBLGVBQUEsb0JBQ0osRUFBRTtFQUFBLGVBQUEsdUJBQ0MsRUFBRTtFQUFBLGVBQUEsMEJBQ0MsRUFBRTtFQUFBLGVBQUEseUJBQ0gsRUFBRTtFQUFBLGVBQUEscUJBQ04sRUFBRTtFQUFBLGVBQUEsMEJBQ0csRUFBRTtFQUFBLGVBQUEsNkJBQ0MsRUFBRTtFQUFBLGVBQUEsNkJBQ0YsRUFBRTtFQUFBLGVBQUEsbUNBQ0ksRUFBRTtFQUFBLGVBQUEsb0JBQ2pCLEVBQUU7RUFBQSxlQUFBLHNCQUNBLEVBQUU7RUFBQSxlQUFBLHFCQUNILEVBQUU7RUFBQSxlQUFBLHdCQUNDLEVBQUU7RUFBQSxlQUFBLHFCQUNMLEVBQUU7RUFBQSxlQUFBLDZCQUNNLEVBQUU7RUFBQSxlQUFBLDJCQUNKLEVBQUU7RUFBQSxlQUFBLDBCQUNILEVBQUU7RUFBQSxlQUFBLDBCQUNGLEVBQUU7RUFBQSxlQUFBLCtCQUNHLEVBQUU7RUFBQSxlQUFBLG1DQUNFLEVBQUU7RUFBQSxlQUFBLGtDQUNILEVBQUU7RUFBQSxlQUFBLGtDQUNGLEVBQUU7RUFBQSxlQUFBLHdDQUNJLEVBQUU7RUFBQSxlQUFBLDhCQUNaLEVBQUU7RUFBQSxlQUFBLG1DQUNHLEVBQUU7RUFBQSxlQUFBLHdDQUNHLEVBQUU7RUFBQSxlQUFBLDJCQUNmLEVBQUU7RUFBQSxlQUFBLG1DQUNNLEVBQUU7RUFBQSxlQUFBLCtCQUNOLEVBQUU7RUFBQSxlQUFBLGlDQUNBLEVBQUU7RUFBQSxlQUFBLCtCQUNKLEVBQUU7RUFBQSxlQUFBLHVDQUNNLEVBQUU7RUFBQSxlQUFBLHdDQUNELEVBQUU7RUFBQSxlQUFBLDZCQUNiLEVBQUU7RUFBQSxlQUFBLG9DQUNLLEVBQUU7RUFBQSxlQUFBLHFDQUNELEVBQUU7RUFBQSxlQUFBLHlCQUNkLEVBQUU7RUFBQSxlQUFBLHdCQUNILEVBQUU7RUFBQSxlQUFBLGdDQUNNLEVBQUU7RUFBQSxlQUFBLDBCQUNSLEVBQUU7RUFBQSxlQUFBLHdCQUNKLEVBQUU7RUFBQSxlQUFBLDBCQUNBLEVBQUU7RUFBQSxlQUFBLDBCQUNGLEVBQUU7RUFBQSxlQUFBLHVCQUNMLEVBQUU7RUFBQSxlQUFBLHFCQUNKLEVBQUU7RUFBQSxlQUFBLDBCQUNHLEVBQUU7RUFBQSxlQUFBLDhCQUNFLEVBQUU7RUFBQSxlQUFBLHlCQUNQLEVBQUU7RUFBQSxlQUFBLHlCQUNGLEVBQUU7RUFBQSxlQUFBLDJCQUNBLEVBQUU7RUFBQSxlQUFBLHlCQUNKLEVBQUU7RUFBQSxlQUFBLCtCQUNJLEVBQUU7RUFBQSxlQUFBLDBCQUNQLEVBQUU7RUFBQSxlQUFBLHFCQUNQLEVBQUU7RUFBQSxlQUFBLDZCQUNNLEVBQUU7RUFBQSxlQUFBLG1DQUNJLEVBQUU7RUFBQSxlQUFBLG1DQUNGLEVBQUU7RUFBQSxlQUFBLGtDQUNILEVBQUU7RUFBQSxlQUFBLG1DQUNELEVBQUU7RUFBQSxlQUFBLGtDQUNILEVBQUU7RUFBQSxlQUFBLHlCQUNYLEVBQUU7RUFBQSxlQUFBLDhCQUNHLEVBQUU7RUFBQSxlQUFBLDBCQUNOLEVBQUU7RUFBQSxlQUFBLDJCQUNELEVBQUU7RUFBQSxlQUFBLDZCQUNBLEVBQUU7RUFBQSxlQUFBLDJCQUNKLEVBQUU7RUFBQSxlQUFBLHlCQUNKLEVBQUU7RUFBQSxlQUFBLHNCQUNMLEVBQUU7RUFBQSxlQUFBLDRCQUNJLEVBQUU7RUFBQSxlQUFBLGtDQUNJLEVBQUU7RUFBQSxlQUFBLDhCQUNOLEVBQUU7RUFBQSxlQUFBLCtCQUNELEVBQUU7RUFBQSxlQUFBLDJCQUNOLEVBQUU7RUFBQSxlQUFBLGdDQUNHLEVBQUU7RUFBQSxlQUFBLGdDQUNGLEVBQUU7RUFBQSxlQUFBLDBCQUNSLEVBQUU7RUFBQSxlQUFBLGdDQUNJLEVBQUU7RUFBQSxlQUFBLCtCQUNILEVBQUU7RUFBQSxlQUFBLDJCQUNOLEVBQUU7RUFBQSxlQUFBLGdDQUNHLEVBQUU7RUFBQSxlQUFBLG1DQUNDLEVBQUU7RUFBQSxlQUFBLG1DQUNGLEVBQUU7RUFBQSxlQUFBLHlDQUNJLEVBQUU7RUFBQSxlQUFBLDJC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Q0FBQSxxQkFBQSxFQUFBLFFBQUEsS0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLDJCQUFBLENBQUEsQ0FBQSxNQUFBLGNBQUEsSUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEscUJBQUEsRUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxFQUFBLGVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxXQUFBLElBQUEsbUJBQUEsSUFBQSxTQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsV0FBQSxFQUFBLEVBQUEsVUFBQSxFQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxnQkFBQSxTQUFBLE1BQUEsVUFBQSxHQUFBLFdBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxJQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxnQkFBQSxHQUFBLElBQUEsQ0FBQSxJQUFBLFNBQUEsSUFBQSxLQUFBLENBQUEsV0FBQSxFQUFBLEdBQUEsSUFBQSxNQUFBLFNBQUEsR0FBQSxHQUFBLEdBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxlQUFBLGdCQUFBLElBQUEsRUFBQSxvQkFBQSxFQUFBLDhCQUFBLE1BQUEsUUFBQSxHQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsTUFBQSxTQUFBLENBQUEscUJBQUEsQ0FBQSxzQkFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBLE9BQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsbUJBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSwrREFBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUE7QUFBQSxTQUFBLGtCQUFBLEdBQUEsRUFBQSxHQUFBLFFBQUEsR0FBQSxZQUFBLEdBQUEsR0FBQSxHQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsR0FBQSxHQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsTUFBQSxJQUFBLE9BQUEsS0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQTtBQUFBLFNBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsVUFBQSxRQUFBLFlBQUEsV0FBQSxlQUFBLFNBQUE7QUFBQSxTQUFBLGtCQUFBLE1BQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxVQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLFdBQUEsVUFBQSxDQUFBLFlBQUEsd0JBQUEsVUFBQSxFQUFBLFVBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQUEsY0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLEdBQUEsVUFBQTtBQUFBLFNBQUEsYUFBQSxXQUFBLEVBQUEsVUFBQSxFQUFBLFdBQUEsUUFBQSxVQUFBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLENBQUEsU0FBQSxFQUFBLFVBQUEsT0FBQSxXQUFBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsV0FBQSxpQkFBQSxRQUFBLG1CQUFBLFdBQUE7QUFBQSxTQUFBLFdBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLGVBQUEsQ0FBQSxDQUFBLEdBQUEsMEJBQUEsQ0FBQSxDQUFBLEVBQUEseUJBQUEsS0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxXQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsMkJBQUEsSUFBQSxFQUFBLElBQUEsUUFBQSxJQUFBLEtBQUEsT0FBQSxDQUFBLElBQUEseUJBQUEsSUFBQSwyQkFBQSxJQUFBLGFBQUEsSUFBQSx5QkFBQSxTQUFBLHVFQUFBLHNCQUFBLENBQUEsSUFBQTtBQUFBLFNBQUEsMEJBQUEsY0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsT0FBQSxpQ0FBQSxDQUFBLGFBQUEseUJBQUEsWUFBQSwwQkFBQSxhQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsSUFBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsY0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsYUFBQSxlQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsdUJBQUEsSUFBQSxRQUFBLElBQUEseUJBQUEsY0FBQSx3RUFBQSxJQUFBO0FBQUEsU0FBQSxVQUFBLFFBQUEsRUFBQSxVQUFBLGVBQUEsVUFBQSxtQkFBQSxVQUFBLHVCQUFBLFNBQUEsMERBQUEsUUFBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsSUFBQSxVQUFBLENBQUEsU0FBQSxJQUFBLFdBQUEsSUFBQSxLQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsUUFBQSxZQUFBLGFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxRQUFBLGlCQUFBLFFBQUEsZ0JBQUEsVUFBQSxFQUFBLGVBQUEsQ0FBQSxRQUFBLEVBQUEsVUFBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsY0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUEsWUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsR0FBQSxjQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsVUFBQSxRQUFBLFlBQUEsUUFBQSxRQUFBLG9CQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsS0FBQSxXQUFBLEdBQUE7QUFBQSxTQUFBLGVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxZQUFBLENBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxrQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsU0FBQSx5RUFBQSxDQUFBLEdBQUEsTUFBQSxHQUFBLE1BQUEsRUFBQSxDQUFBO0FBQUEsSUFDVixTQUFTLEdBQUEsT0FBQSxxQ0FBQSxZQUFBO0VBQUEsU0FBQSxDQUFBLFNBQUEsRUFBQSxZQUFBO0VBQzFCLFNBQUEsVUFBWSxNQUFNLEVBQUUsWUFBWSxFQUFFO0lBQUEsSUFBQSxLQUFBO0lBQUEs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Q0FBQSxXQUFBLEtBQUEsTUFBQSxJQUFBLENBQUEsS0FBQSxNQUFBLENBQUEsU0FBQSxxQkFBQSxDQUFBLEtBQUEsT0FBQSxDQUFBLENBQUE7QUFBQSxTQUFBLFFBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLHFCQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxXQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsVUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUEsY0FBQSxDQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsU0FBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsT0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsTUFBQSxDQUFBLHlCQUFBLEdBQUEsTUFBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxpQkFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxVQUFBLFFBQUEsWUFBQSxXQUFBLGVBQUEsU0FBQTtBQUFBLFNBQUEsa0JBQUEsTUFBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLFVBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsV0FBQSxVQUFBLENBQUEsWUFBQSx3QkFBQSxVQUFBLEVBQUEsVUFBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxjQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsR0FBQSxVQUFBO0FBQUEsU0FBQSxhQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxRQUFBLFVBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQSxPQUFBLFdBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxXQUFBLGlCQUFBLFFBQUEsbUJBQUEsV0FBQTtBQUFBLFNBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsZUFBQSxDQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSx5QkFBQSxLQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxJQUFBLEVBQUEsSUFBQSxRQUFBLElBQUEsS0FBQSxPQUFBLENBQUEsSUFBQSx5QkFBQSxJQUFBLDJCQUFBLElBQUEsYUFBQSxJQUFBLHlCQUFBLFNBQUEsdUVBQUEsc0JBQUEsQ0FBQSxJQUFBO0FBQUEsU0FBQSwwQkFBQSxjQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLGlDQUFBLENBQUEsYUFBQSx5QkFBQSxZQUFBLDBCQUFBLGFBQUEsQ0FBQTtBQUFBLFNBQUEsdUJBQUEsSUFBQSxRQUFBLElBQUEseUJBQUEsY0FBQSx3RUFBQSxJQUFBO0FBQUEsU0FBQSxLQUFBLGVBQUEsT0FBQSxvQkFBQSxPQUFBLENBQUEsR0FBQSxJQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsYUFBQSxJQUFBLFlBQUEsS0FBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsUUFBQSxJQUFBLEdBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLFFBQUEsSUFBQSxjQUFBLElBQUEsR0FBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLEVBQUEsUUFBQSxPQUFBLElBQUEsQ0FBQSxHQUFBLFdBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsT0FBQSxNQUFBLEdBQUEsUUFBQSxZQUFBLElBQUEsQ0FBQSxLQUFBLGNBQUEsSUFBQSxDQUFBLEtBQUEsT0FBQSxTQUFBO0FBQUEsU0FBQSxlQUFBLE1BQUEsRUFBQSxRQUFBLFlBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLEtBQUEsTUFBQSxHQUFBLGVBQUEsQ0FBQSxNQUFBLE9BQUEsTUFBQSwyQkFBQSxNQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLElBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGNBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLGFBQUEsZUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLFVBQUEsUUFBQSxFQUFBLFVBQUEsZUFBQSxVQUFBLG1CQUFBLFVBQUEsdUJBQUEsU0FBQSwwREFBQSxRQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxJQUFBLFVBQUEsQ0FBQSxTQUFBLElBQUEsV0FBQSxJQUFBLEtBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxRQUFBLFlBQUEsYUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFFBQUEsaUJBQUEsUUFBQSxnQkFBQSxVQUFBLEVBQUEsZUFBQSxDQUFBLFFBQUEsRUFBQSxVQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxjQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQSxZQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxHQUFBLGNBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLFFBQUEsWUFBQSxRQUFBLFFBQUEsb0JBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxLQUFBLFdBQUEsR0FBQTtBQUFBLFNBQUEsZUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFlBQUEsQ0FBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLGtCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxTQUFBLHlFQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLENBQUE7QUFDdkM7QUFDQTtBQUNB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T0FBQSxDQUFBLENBQUE7QUFBQSxTQUFBLDJCQUFBLENBQUEsRUFBQSxjQUFBLFFBQUEsRUFBQSxVQUFBLE1BQUEsb0JBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLEtBQUEsQ0FBQSxxQkFBQSxFQUFBLFFBQUEsS0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLDJCQUFBLENBQUEsQ0FBQSxNQUFBLGNBQUEsSUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEscUJBQUEsRUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxFQUFBLGVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxXQUFBLElBQUEsbUJBQUEsSUFBQSxTQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsV0FBQSxFQUFBLEVBQUEsVUFBQSxFQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxnQkFBQSxTQUFBLE1BQUEsVUFBQSxHQUFBLFdBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxJQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxnQkFBQSxHQUFBLElBQUEsQ0FBQSxJQUFBLFNBQUEsSUFBQSxLQUFBLENBQUEsV0FBQSxFQUFBLEdBQUEsSUFBQSxNQUFBLFNBQUEsR0FBQSxHQUFBLEdBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxlQUFBLGdCQUFBLElBQUEsRUFBQSxvQkFBQSxFQUFBLDhCQUFBLE1BQUEsUUFBQSxHQUFBO0FBQUEsU0FBQSxlQUFBLEdBQUEsRUFBQSxDQUFBLFdBQUEsZUFBQSxDQUFBLEdBQUEsS0FBQSxxQkFBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEtBQUEsMkJBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxLQUFBLGdCQUFBO0FBQUEsU0FBQSxpQkFBQSxjQUFBLFNBQUE7QUFBQSxTQUFBLDRCQUFBLENBQUEsRUFBQSxNQUFBLFNBQUEsQ0FBQSxxQkFBQSxDQUFBLHNCQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxtQkFBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLCtEQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsR0FBQSxFQUFBLEdBQUEsUUFBQSxHQUFBLFlBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxNQUFBLElBQUEsT0FBQSxLQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBO0FBQUEsU0FBQSxzQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsV0FBQSxDQUFBLGdDQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLDRCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLGlCQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxRQUFBLENBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxDQUFBLHVCQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsR0FBQSxDQUFBLGlCQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLENBQUEseUJBQUEsQ0FBQSxZQUFBLENBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQSxjQUFBLE1BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSwyQkFBQSxDQUFBLFFBQUEsQ0FBQSxhQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLEdBQUEsUUFBQSxLQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBO0FBQUEsU0FBQSxvQkFBQSxrQkFEdkcscUpBQUEsbUJBQUEsWUFBQSxvQkFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxjQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsS0FBQSxDQUFBLHdCQUFBLE1BQUEsR0FBQSxNQUFBLE9BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLGtCQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsYUFBQSx1QkFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsOEJBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLE1BQUEsWUFBQSxNQUFBLFFBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxXQUFBLE1BQUEsbUJBQUEsQ0FBQSxJQUFBLE1BQUEsWUFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxnQkFBQSxLQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLFlBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLEVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLE9BQUEsT0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBLENBQUEsZUFBQSxLQUFBLEVBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsTUFBQSxDQUFBLGFBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsbUJBQUEsSUFBQSxZQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGNBQUEsQ0FBQSxhQUFBLElBQUEsV0FBQSxHQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEscUJBQUEsQ0FBQSxxQkFBQSxDQUFBLGdCQUFBLENBQUEsZ0JBQUEsQ0FBQSxnQkFBQSxVQUFBLGNBQUEsa0JBQUEsY0FBQSwyQkFBQSxTQUFBLENBQUEsT0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEscUNBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsMEJBQUEsQ0FBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsWUFBQSxzQkFBQSxDQUFBLGdDQUFBLE9BQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQSxnQkFBQSxPQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsc0JBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxTQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxXQUFBLENBQUEsSUFBQSxNQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLENBQUEsSUFBQSxNQUFBLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLEVBQUEsSUFBQSxXQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsTUFBQSxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLEtBQUEsV0FBQSxNQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsMkJBQUEsZUFBQSxDQUFBLFdBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsMEJBQUEsRUFBQSwwQkFBQSxJQUFBLDBCQUFBLHFCQUFBLGlCQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsWUFBQSxLQUFBLHNDQUFBLENBQUEsS0FBQSxDQUFBLG9CQUFBLENBQUEsUUFBQSxDQUFBLFdBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxJQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxtQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLG1CQUFBLENBQUEscUJBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsc0JBQUEsQ0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSx1QkFBQSxDQUFBLENBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxLQUFBLENBQUEscUJBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLGtCQUFBLENBQUEsQ0FBQSxJQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsbUJBQUEsb0JBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFFBQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxrQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFNBQUEsdUNBQUEsQ0FBQSxpQkFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsT0FBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxPQUFBLFNBQUEsc0NBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLGNBQUEsYUFBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBLE1BQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxRQUFBLEdBQUEsQ0FBQSxXQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsV0FBQSxVQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsY0FBQSxjQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxvQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxVQUFBLEdBQUEsQ0FBQSxhQUFBLFFBQUEsQ0FBQSxTQUFBLFVBQUEsTUFBQSxNQUFBLGFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxZQUFBLGNBQUEsS0FBQSxpQkFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLFdBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsNEJBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLE9BQUEsS0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsWUFBQSxLQUFBLGFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxVQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsU0FBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsWUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsZ0JBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLGtDQUFBLGlCQUFBLENBQUEsU0FBQSxHQUFBLDBCQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsS0FBQSxFQUFBLDBCQUFBLEVBQUEsWUFBQSxTQUFBLENBQUEsQ0FBQSwwQkFBQSxtQkFBQSxLQUFBLEVBQUEsaUJBQUEsRUFBQSxZQUFBLFNBQUEsaUJBQUEsQ0FBQSxXQUFBLEdBQUEsTUFBQSxDQUFBLDBCQUFBLEVBQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsbUJBQUEsYUFBQSxDQUFBLFFBQUEsQ0FBQSx3QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLGlCQUFBLDZCQUFBLENBQUEsQ0FBQSxXQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxhQUFBLENBQUEsV0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLDBCQUFBLEtBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsYUFBQSxPQUFBLEVBQUEsQ0FBQSxPQUFBLHFCQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsYUFBQSxDQUFBLFNBQUEsRUFBQSxDQUFBLGlDQUFBLENBQUEsQ0FBQSxhQUFBLEdBQUEsYUFBQSxFQUFBLENBQUEsQ0FBQSxLQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLE9BQUEsT0FBQSxDQUFBLE9BQUEsYUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxJQUFBLFdBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxXQUFBLHFCQUFBLENBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsaUNBQUEsTUFBQSxDQUFBLENBQUEsNkRBQUEsQ0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxnQkFBQSxDQUFBLElBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLGFBQUEsS0FBQSxXQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsV0FBQSxJQUFBLENBQUEsSUFBQSxPQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxHQUFBLE1BQUEsRUFBQSxPQUFBLENBQUEsU0FBQSxLQUFBLFdBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxXQUFBLE1BQUEsQ0FBQSxhQUFBLElBQUEsV0FBQSxJQUFBLFdBQUEsSUFBQSxRQUFBLEtBQUEsR0FBQSxDQUFBLE9BQUEsSUFBQSxZQUFBLFFBQUEsY0FBQSxNQUFBLGdCQUFBLEdBQUEsR0FBQSxDQUFBLE9BQUEsVUFBQSxDQUFBLE9BQUEsQ0FBQSxhQUFBLElBQUEsQ0FBQSxXQUFBLENBQUEsa0JBQUEsQ0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsTUFBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLEtBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLElBQUEsV0FBQSxLQUFBLFNBQUEsSUFBQSxXQUFBLENBQUEsUUFBQSxVQUFBLElBQUEsVUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLGNBQUEsSUFBQSxLQUFBLGlCQUFBLFdBQUEsa0JBQUEsQ0FBQSxhQUFBLElBQUEsUUFBQSxDQUFBLE1BQUEsQ0FBQSxrQkFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLElBQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsaUJBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxNQUFBLGFBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxlQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEsZ0JBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLGNBQUEsQ0FBQSxhQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxxQkFBQSxDQUFBLFlBQUEsS0FBQSxxREFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsWUFBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLHdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLGFBQUEsQ0FBQSxpQkFBQSxDQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxJQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsS0FBQSxDQUFBLGNBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxjQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxNQUFBLGdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxFQUFBLENBQUEsU0FBQSxRQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsV0FBQSxTQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEscUJBQUEsQ0FBQSxDQUFBLElBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxJQUFBLFFBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsTUFBQSxrQkFBQSxJQUFBLHlCQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxVQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLE1BQUEsV0FBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFBLEtBQUEsQ0FBQSxjQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLEdBQUEsYUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLHlCQUFBLE9BQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGtCQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsYUFBQSxDQUFBLENBQUEsWUFBQSxDQUFBLGdCQUFBLEtBQUEsOEJBQUEsYUFBQSxXQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFFBQUEsS0FBQSxRQUFBLEVBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQSxDQUFBLG9CQUFBLE1BQUEsVUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsT0FBQSxDQUFBO0FBQUEsU0FBQSxtQkFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLGNBQUEsSUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxPQUFBLEtBQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxXQUFBLEtBQUEsSUFBQSxNQUFBLENBQUEsS0FBQSxpQkFBQSxJQUFBLENBQUEsSUFBQSxJQUFBLE9BQUEsQ0FBQSxLQUFBLFlBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxFQUFBLDZCQUFBLElBQUEsU0FBQSxJQUFBLEdBQUEsU0FBQSxhQUFBLE9BQUEsV0FBQSxPQUFBLEVBQUEsTUFBQSxRQUFBLEdBQUEsR0FBQSxFQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLFlBQUEsTUFBQSxLQUFBLElBQUEsa0JBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxVQUFBLEtBQUEsY0FBQSxPQUFBLEdBQUEsSUFBQSxrQkFBQSxDQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLFdBQUEsR0FBQSxLQUFBLEtBQUEsQ0FBQSxTQUFBO0FBQUEsU0FBQSxRQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLE1BQUEsQ0FBQSxxQkFBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEscUJBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsV0FBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLFVBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQSxTQUFBLGNBQUEsQ0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLFNBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLE9BQUEsT0FBQSxXQUFBLENBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLE1BQUEsQ0FBQSx5QkFBQSxHQUFBLE1BQUEsQ0FBQSxnQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLEtBQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsaUJBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsVUFBQSxRQUFBLFlBQUEsV0FBQSxlQUFBLFNBQUE7QUFBQSxTQUFBLGtCQUFBLE1BQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxVQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLFdBQUEsVUFBQSxDQUFBLFlBQUEsd0JBQUEsVUFBQSxFQUFBLFVBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQUEsY0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLEdBQUEsVUFBQTtBQUFBLFNBQUEsYUFBQSxXQUFBLEVBQUEsVUFBQSxFQUFBLFdBQUEsUUFBQSxVQUFBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLENBQUEsU0FBQSxFQUFBLFVBQUEsT0FBQSxXQUFBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsV0FBQSxpQkFBQSxRQUFBLG1CQUFBLFdBQUE7QUFBQSxTQUFBLFdBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLGVBQUEsQ0FBQSxDQUFBLEdBQUEsMEJBQUEsQ0FBQSxDQUFBLEVBQUEseUJBQUEsS0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxXQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsMkJBQUEsSUFBQSxFQUFBLElBQUEsUUFBQSxJQUFBLEtBQUEsT0FBQSxDQUFBLElBQUEseUJBQUEsSUFBQSwyQkFBQSxJQUFBLGFBQUEsSUFBQSx5QkFBQSxTQUFBLHVFQUFBLHNCQUFBLENBQUEsSUFBQTtBQUFBLFNBQUEsMEJBQUEsY0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsT0FBQSxpQ0FBQSxDQUFBLGFBQUEseUJBQUEsWUFBQSwwQkFBQSxhQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsSUFBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsY0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsYUFBQSxlQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsdUJBQUEsSUFBQSxRQUFBLElBQUEseUJBQUEsY0FBQSx3RUFBQSxJQUFBO0FBQUEsU0FBQSxVQUFBLFFBQUEsRUFBQSxVQUFBLGVBQUEsVUFBQSxtQkFBQSxVQUFBLHVCQUFBLFNBQUEsMERBQUEsUUFBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsSUFBQSxVQUFBLENBQUEsU0FBQSxJQUFBLFdBQUEsSUFBQSxLQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsUUFBQSxZQUFBLGFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxRQUFBLGlCQUFBLFFBQUEsZ0JBQUEsVUFBQSxFQUFBLGVBQUEsQ0FBQSxRQUFBLEVBQUEsVUFBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsY0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUEsWUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsR0FBQSxjQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxH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R0FBQSxLQUFBLGtCQUFBO0FBQUEsU0FBQSxtQkFBQSxjQUFBLFNBQUE7QUFBQSxTQUFBLGlCQUFBLElBQUEsZUFBQSxNQUFBLG9CQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxhQUFBLElBQUEsK0JBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBO0FBQUEsU0FBQSxtQkFBQSxHQUFBLFFBQUEsS0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLFVBQUEsaUJBQUEsQ0FBQSxHQUFBO0FBQUEsU0FBQSwyQkFBQSxDQUFBLEVBQUEsY0FBQSxRQUFBLEVBQUEsVUFBQSxNQUFBLG9CQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxLQUFBLENBQUEscUJBQUEsRUFBQSxRQUFBLEtBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSwyQkFBQSxDQUFBLENBQUEsTUFBQSxjQUFBLElBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxNQUFBLHFCQUFBLEVBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsRUFBQSxlQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxJQUFBLG1CQUFBLElBQUEsU0FBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsRUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFNBQUEsaUpBQUEsZ0JBQUEsU0FBQSxNQUFBLFVBQUEsR0FBQSxXQUFBLENBQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsZ0JBQUEsR0FBQSxJQUFBLENBQUEsSUFBQSxTQUFBLElBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxHQUFBLElBQUEsTUFBQSxTQUFBLEdBQUEsR0FBQSxHQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsZUFBQSxnQkFBQSxJQUFBLEVBQUEsb0JBQUEsRUFBQSw4QkFBQSxNQUFBLFFBQUEsR0FBQTtBQUFBLFNBQUEsNEJBQUEsQ0FBQSxFQUFBLE1BQUEsU0FBQSxDQUFBLHFCQUFBLENBQUEsc0JBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLG1CQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsK0RBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxHQUFBLEVBQUEsR0FBQSxRQUFBLEdBQUEsWUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLE1BQUEsSUFBQSxPQUFBLEtBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLElBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsR0FBQSxlQUFBLENBQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsQ0FBQSxFQUFBLHlCQUFBLEtBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsV0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLDJCQUFBLElBQUEsRUFBQSxJQUFBLFFBQUEsSUFBQSxLQUFBLE9BQUEsQ0FBQSxJQUFBLHlCQUFBLElBQUEsMkJBQUEsSUFBQSxhQUFBLElBQUEseUJBQUEsU0FBQSx1RUFBQSxzQkFBQSxDQUFBLElBQUE7QUFBQSxTQUFBLDBCQUFBLGNBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsaUNBQUEsQ0FBQSxhQUFBLHlCQUFBLFlBQUEsMEJBQUEsYUFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLElBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGNBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLGFBQUEsZUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLHVCQUFBLElBQUEsUUFBQSxJQUFBLHlCQUFBLGNBQUEsd0VBQUEsSUFBQTtBQUFBLFNBQUEsVUFBQSxRQUFBLEVBQUEsVUFBQSxlQUFBLFVBQUEsbUJBQUEsVUFBQSx1QkFBQSxTQUFBLDBEQUFBLFFBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxVQUFBLElBQUEsVUFBQSxDQUFBLFNBQUEsSUFBQSxXQUFBLElBQUEsS0FBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLFFBQUEsWUFBQSxhQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsUUFBQSxpQkFBQSxRQUFBLGdCQUFBLFVBQUEsRUFBQSxlQUFBLENBQUEsUUFBQSxFQUFBLFVBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsU0FBQSxHQUFBLENBQUEsU0FBQSxDQUFBLFlBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsV0FBQSxHQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxN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Q0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsRUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFNBQUEsaUpBQUEsZ0JBQUEsU0FBQSxNQUFBLFVBQUEsR0FBQSxXQUFBLENBQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsZ0JBQUEsR0FBQSxJQUFBLENBQUEsSUFBQSxTQUFBLElBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxHQUFBLElBQUEsTUFBQSxTQUFBLEdBQUEsR0FBQSxHQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsZUFBQSxnQkFBQSxJQUFBLEVBQUEsb0JBQUEsRUFBQSw4QkFBQSxNQUFBLFFBQUEsR0FBQTtBQUFBLFNBQUEsNEJBQUEsQ0FBQSxFQUFBLE1BQUEsU0FBQSxDQUFBLHFCQUFBLENBQUEsc0JBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLG1CQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsK0RBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxHQUFBLEVBQUEsR0FBQSxRQUFBLEdBQUEsWUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLE1BQUEsSUFBQSxPQUFBLEtBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLElBQUE7QUFBQSxTQUFBLFdBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLGVBQUEsQ0FBQSxDQUFBLEdBQUEsMEJBQUEsQ0FBQSxDQUFBLEVBQUEseUJBQUEsS0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxXQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsMkJBQUEsSUFBQSxFQUFBLElBQUEsUUFBQSxJQUFBLEtBQUEsT0FBQSxDQUFBLElBQUEseUJBQUEsSUFBQSwyQkFBQSxJQUFBLGFBQUEsSUFBQSx5QkFBQSxTQUFBLHVFQUFBLHNCQUFBLENBQUEsSUFBQTtBQUFBLFNBQUEsMEJBQUEsY0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsT0FBQSxpQ0FBQSxDQUFBLGFBQUEseUJBQUEsWUFBQSwwQkFBQSxhQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsSUFBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsY0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsYUFBQSxlQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsdUJBQUEsSUFBQSxRQUFBLElBQUEseUJBQUEsY0FBQSx3RUFBQSxJQUFBO0FBQUEsU0FBQSxVQUFBLFFBQUEsRUFBQSxVQUFBLGVBQUEsVUFBQSxtQkFBQSxVQUFBLHVCQUFBLFNBQUEsMERBQUEsUUFBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsSUFBQSxVQUFBLENBQUEsU0FBQSxJQUFBLFdBQUEsSUFBQSxLQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsUUFBQSxZQUFBLGFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxRQUFBLGlCQUFBLFFBQUEsZ0JBQUEsVUFBQSxFQUFBLGVBQUEsQ0FBQSxRQUFBLEVBQUEsVUFBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsY0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUEsWUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLG9CQUFBLGtCQUNuRCxxSkFBQSxtQkFBQSxZQUFBLG9CQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxjQUFBLEVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxLQUFBLENBQUEsd0JBQUEsTUFBQSxHQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsa0JBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxhQUFBLHVCQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSw4QkFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLFVBQUEsTUFBQSxZQUFBLE1BQUEsUUFBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLFdBQUEsTUFBQSxtQkFBQSxDQUFBLElBQUEsTUFBQSxZQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLGdCQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsWUFBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsRUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxHQUFBLENBQUEsT0FBQSxPQUFBLENBQUEsQ0FBQSxnQkFBQSxDQUFBLENBQUEsQ0FBQSxlQUFBLEtBQUEsRUFBQSxnQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsYUFBQSxTQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxtQkFBQSxJQUFBLFlBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsY0FBQSxDQUFBLGFBQUEsSUFBQSxXQUFBLEdBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxxQkFBQSxDQUFBLHFCQUFBLENBQUEsZ0JBQUEsQ0FBQSxnQkFBQSxDQUFBLGdCQUFBLFVBQUEsY0FBQSxrQkFBQSxjQUFBLDJCQUFBLFNBQUEsQ0FBQSxPQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxxQ0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxZQUFBLHNCQUFBLENBQUEsZ0NBQUEsT0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsWUFBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxzQkFBQSxjQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLFNBQUEsQ0FBQSxnQkFBQSxPQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLE1BQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxJQUFBLFdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsV0FBQSxNQUFBLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsS0FBQSxXQUFBLE1BQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSwyQkFBQSxlQUFBLENBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSwwQkFBQSxFQUFBLDBCQUFBLElBQUEsMEJBQUEscUJBQUEsaUJBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxZQUFBLEtBQUEsc0NBQUEsQ0FBQSxLQUFBLENBQUEsb0JBQUEsQ0FBQSxRQUFBLENBQUEsV0FBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLG1CQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsbUJBQUEsQ0FBQSxxQkFBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxzQkFBQSxDQUFBLENBQUEsTUFBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLHVCQUFBLENBQUEsQ0FBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxxQkFBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxtQkFBQSxvQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLGFBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLGtCQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsU0FBQSx1Q0FBQSxDQUFBLGlCQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxPQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsU0FBQSxzQ0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsY0FBQSxhQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsTUFBQSxFQUFBLENBQUEsWUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxVQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxRQUFBLEdBQUEsQ0FBQSxXQUFBLFVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxjQUFBLGNBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLG9CQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLGFBQUEsUUFBQSxDQUFBLFNBQUEsVUFBQSxNQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFlBQUEsY0FBQSxLQUFBLGlCQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSw0QkFBQSxDQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsT0FBQSxLQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxZQUFBLEtBQUEsYUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxTQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxZQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxnQkFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsa0NBQUEsaUJBQUEsQ0FBQSxTQUFBLEdBQUEsMEJBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxLQUFBLEVBQUEsMEJBQUEsRUFBQSxZQUFBLFNBQUEsQ0FBQSxDQUFBLDBCQUFBLG1CQUFBLEtBQUEsRUFBQSxpQkFBQSxFQUFBLFlBQUEsU0FBQSxpQkFBQSxDQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsMEJBQUEsRUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxtQkFBQSxhQUFBLENBQUEsUUFBQSxDQUFBLHdCQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsV0FBQSxXQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsaUJBQUEsNkJBQUEsQ0FBQSxDQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxXQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsMEJBQUEsS0FBQSxDQUFBLENBQUEsU0FBQSxHQUFBLDBCQUFBLEVBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxLQUFBLGFBQUEsQ0FBQSxhQUFBLE9BQUEsRUFBQSxDQUFBLE9BQUEscUJBQUEsQ0FBQSxhQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxhQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsaUNBQUEsQ0FBQSxDQUFBLGFBQUEsR0FBQSxhQUFBLEVBQUEsQ0FBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxlQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsT0FBQSxPQUFBLENBQUEsT0FBQSxhQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsV0FBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLFdBQUEscUJBQUEsQ0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxpQ0FBQSxNQUFBLENBQUEsQ0FBQSw2REFBQSxDQUFBLENBQUEsSUFBQSxhQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLGdCQUFBLENBQUEsSUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsYUFBQSxLQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxTQUFBLElBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxXQUFBLElBQUEsQ0FBQSxJQUFBLE9BQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLE9BQUEsQ0FBQSxTQUFBLEtBQUEsV0FBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLFdBQUEsTUFBQSxDQUFBLGFBQUEsSUFBQSxXQUFBLElBQUEsV0FBQSxJQUFBLFFBQUEsS0FBQSxHQUFBLENBQUEsT0FBQSxJQUFBLFlBQUEsUUFBQSxjQUFBLE1BQUEsZ0JBQUEsR0FBQSxHQUFBLENBQUEsT0FBQSxVQUFBLENBQUEsT0FBQSxDQUFBLGFBQUEsSUFBQSxDQUFBLFdBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxNQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsSUFBQSxXQUFBLEtBQUEsU0FBQSxJQUFBLFdBQUEsQ0FBQSxRQUFBLFVBQUEsSUFBQSxVQUFBLGtCQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEsY0FBQSxJQUFBLEtBQUEsaUJBQUEsV0FBQSxrQkFBQSxDQUFBLGFBQUEsSUFBQSxRQUFBLENBQUEsTUFBQSxDQUFBLGtCQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsTUFBQSxTQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsTUFBQSxTQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxhQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxnQkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsY0FBQSxDQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLHFCQUFBLENBQUEsWUFBQSxLQUFBLHFEQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxZQUFBLE1BQUEsV0FBQSxPQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsd0JBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxLQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGNBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxTQUFBLE1BQUEsZ0JBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLEVBQUEsQ0FBQSxTQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsUUFBQSxXQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxxQkFBQSxDQUFBLENBQUEsSUFBQSxtQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxnQkFBQSxDQUFBLENBQUEsSUFBQSxTQUFBLElBQUEsUUFBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxNQUFBLGtCQUFBLElBQUEseUJBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLFVBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLFVBQUEsS0FBQSxDQUFBLGNBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxhQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEseUJBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxhQUFBLENBQUEsQ0FBQSxZQUFBLENBQUEsZ0JBQUEsS0FBQSw4QkFBQSxhQUFBLFdBQUEsY0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsUUFBQSxLQUFBLFFBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsT0FBQSxFQUFBLENBQUEsb0JBQUEsTUFBQSxVQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUE7QUFBQSxTQUFBLG1CQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsY0FBQSxJQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLE9BQUEsS0FBQSxHQUFBLElBQUEsQ0FBQSxLQUFBLFdBQUEsS0FBQSxJQUFBLE1BQUEsQ0FBQSxLQUFBLGlCQUFBLElBQUEsQ0FBQSxJQUFBLElBQUEsT0FBQSxDQUFBLEtBQUEsWUFBQSxPQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLENBQUEsS0FBQSxFQUFBLE1BQUE7QUFBQSxTQUFBLGtCQUFBLEVBQUEsNkJBQUEsSUFBQSxTQUFBLElBQUEsR0FBQSxTQUFBLGFBQUEsT0FBQSxXQUFBLE9BQUEsRUFBQSxNQUFBLFFBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsWUFBQSxNQUFBLEtBQUEsSUFBQSxrQkFBQSxDQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLFVBQUEsS0FBQSxjQUFBLE9BQUEsR0FBQSxJQUFBLGtCQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsV0FBQSxHQUFBLEtBQUEsS0FBQSxDQUFBLFNBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsV0FBQSxHQUFBO0FBQUEsU0FBQSxlQUFBLENB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QSxNQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsRUFBQSxlQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxJQUFBLG1CQUFBLElBQUEsU0FBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLFdBQUEsRUFBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFNBQUEsaUpBQUEsZ0JBQUEsU0FBQSxNQUFBLFVBQUEsR0FBQSxXQUFBLENBQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsZ0JBQUEsR0FBQSxJQUFBLENBQUEsSUFBQSxTQUFBLElBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxHQUFBLElBQUEsTUFBQSxTQUFBLEdBQUEsR0FBQSxHQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsZUFBQSxnQkFBQSxJQUFBLEVBQUEsb0JBQUEsRUFBQSw4QkFBQSxNQUFBLFFBQUEsR0FBQTtBQUFBLFNBQUEsNEJBQUEsQ0FBQSxFQUFBLE1BQUEsU0FBQSxDQUFBLHFCQUFBLENBQUEsc0JBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLG1CQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsK0RBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBO0FBQUEsU0FBQSxrQkFBQSxHQUFBLEVBQUEsR0FBQSxRQUFBLEdBQUEsWUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLE1BQUEsSUFBQSxPQUFBLEtBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLElBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENB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LElBQUEsV0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsTUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsS0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsVUFBQSxHQUFBLE9BQUE7QUFDQSxJQUFBLE1BQUEsR0FBQSxPQUFBO0FBQWlELFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQUFBLFNBQUEsUUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsT0FBQSxNQUFBLENBQUEscUJBQUEsUUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsU0FBQSxjQUFBLENBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsV0FBQSxTQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxPQUFBLE9BQUEsV0FBQSxDQUFBLElBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxNQUFBLENBQUEseUJBQUEsR0FBQSxNQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxLQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGlCQUFBLENBQUE7QUFBQSxTQUFBLG1CQUFBLEdBQUEsV0FBQSxrQkFBQSxDQUFBLEdBQUEsS0FBQSxnQkFBQSxDQUFBLEdBQUEsS0FBQSwyQkFBQSxDQUFBLEdBQUEsS0FBQSxrQkFBQTtBQUFBLFNBQUEsbUJBQUEsY0FBQSxTQUFBO0FBQUEsU0FBQSxpQkFBQSxJQUFBLGVBQUEsTUFBQSxvQkFBQSxJQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsYUFBQSxJQUFBLCtCQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQTtBQUFBLFNBQUEsbUJBQUEsR0FBQSxRQUFBLEtBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxVQUFBLGlCQUFBLENBQUEsR0FBQTtBQUFBLFNBQUEsMkJBQUEsQ0FBQSxFQUFBLGNBQUEsUUFBQSxFQUFBLFVBQUEsTUFBQSxvQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLHFCQUFBLEVBQUEsUUFBQSxLQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsMkJBQUEsQ0FBQSxDQUFBLE1BQUEsY0FBQSxJQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxxQkFBQSxFQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLEVBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsSUFBQSxtQkFBQSxJQUFBLFNBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsRUFBQSxVQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLGdCQUFBLFNBQUEsTUFBQSxVQUFBLEdBQUEsV0FBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLElBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLGdCQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsU0FBQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsR0FBQSxJQUFBLE1BQUEsU0FBQSxHQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLGVBQUEsZ0JBQUEsSUFBQSxFQUFBLG9CQUFBLEVBQUEsOEJBQUEsTUFBQSxRQUFBLEdBQUE7QUFBQSxTQUFBLDRCQUFBLENBQUEsRUFBQSxNQUFBLFNBQUEsQ0FBQSxxQkFBQSxDQUFBLHNCQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxtQkFBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLCtEQUFBLElBQUEsQ0FBQSxDQUFBLFVBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsR0FBQSxFQUFBLEdBQUEsUUFBQSxHQUFBLFlBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxHQUFBLEdBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxNQUFBLElBQUEsT0FBQSxLQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBO0FBQUEsU0FBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxVQUFBLFFBQUEsWUFBQSxXQUFBLGVBQUEsU0FBQTtBQUFBLFNBQUEsa0JBQUEsTUFBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLFVBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsV0FBQSxVQUFBLENBQUEsWUFBQSx3QkFBQSxVQUFBLEVBQUEsVUFBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxjQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsR0FBQSxVQUFBO0FBQUEsU0FBQSxhQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxRQUFBLFVBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQSxPQUFBLFdBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxXQUFBLGlCQUFBLFFBQUEsbUJBQUEsV0FBQTtBQUFBLFNBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsZUFBQSxDQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSx5QkFBQSxLQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxJQUFBLEVBQUEsSUFBQSxRQUFBLElBQUEsS0FBQSxPQUFBLENBQUEsSUFBQSx5QkFBQSxJQUFBLDJCQUFBLElBQUEsYUFBQSxJQUFBLHlCQUFBLFNBQUEsdUVBQUEsc0JBQUEsQ0FBQSxJQUFBO0FBQUEsU0FBQSwwQkFBQSxjQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLGlDQUFBLENBQUEsYUFBQSx5QkFBQSxZQUFBLDBCQUFBLGFBQUEsQ0FBQTtBQUFBLFNBQUEsdUJBQUEsSUFBQSxRQUFBLElBQUEseUJBQUEsY0FBQSx3RUFBQSxJQUFBO0FBQUEsU0FBQSxLQUFBLGVBQUEsT0FBQSxvQkFBQSxPQUFBLENBQUEsR0FBQSxJQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsYUFBQSxJQUFBLFlBQUEsS0FBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsUUFBQSxJQUFBLEdBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLFFBQUEsSUFBQSxjQUFBLElBQUEsR0FBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLEVBQUEsUUFBQSxPQUFBLElBQUEsQ0FBQSxHQUFBLFdBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsT0FBQSxNQUFBLEdBQUEsUUFBQSxZQUFBLElBQUEsQ0FBQSxLQUFBLGNBQUEsSUFBQSxDQUFBLEtBQUEsT0FBQSxTQUFBO0FBQUEsU0FBQSxlQUFBLE1BQUEsRUFBQSxRQUFBLFlBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLEtBQUEsTUFBQSxHQUFBLGVBQUEsQ0FBQSxNQUFBLE9BQUEsTUFBQSwyQkFBQSxNQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLElBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGNBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLGFBQUEsZUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLFVBQUEsUUFBQSxFQUFBLFVBQUEsZUFBQSxVQUFBLG1CQUFBLFVBQUEsdUJBQUEsU0FBQSwwREFBQSxRQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxJQUFBLFVBQUEsQ0FBQSxTQUFBLElBQUEsV0FBQSxJQUFBLEtBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxRQUFBLFlBQUEsYUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFFBQUEsaUJBQUEsUUFBQSxnQkFBQSxVQUFBLEVBQUEsZUFBQSxDQUFBLFFBQUEsRUFBQSxVQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxjQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQSxZQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxHQUFBLGNBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLFFBQUEsWUFBQSxRQUFBLFFBQUEsb0JBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxLQUFBLFdBQUEsR0FBQTtBQUFBLFNBQUEsZUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFlBQUEsQ0FBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLGtCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxTQUFBLHlFQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLENBQUE7QUFBQSxTQUFBLFFBQUEsQ0FBQSxzQ0FBQSxPQUFBLHdCQUFBLE1BQUEsdUJBQUEsTUFB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QUFBLEdBQUE7UUFBQSxVQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUE7TUFBQTtRQUFBLFVBQUEsQ0FBQSxDQUFBO01BQUE7SUFDTDtFQUFDO0VBQUEsT0FBQSxPQUFBO0FBQUEsRUFyUWdDLHlCQUFLO0FBdVExQyxVQUFVLENBQUMsQ0FDUCxJQUFBLG1CQUFRLEVBQUMsRUFBRSxDQUFDLENBQ2YsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UnJDLElBQUEsS0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsY0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsS0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsTUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsUUFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsT0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEsS0FBQSxHQUFBLHVCQUFBLENBQUEsT0FBQTtBQUdBLE1BQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxFQUFBLE9BQUEsV0FBQSxHQUFBO0VBQUEsSUFBQSxHQUFBLGtCQUFBLEdBQUE7RUFBQSxJQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxZQUFBLEVBQUEsR0FBQTtFQUFBLElBQUEsR0FBQSxJQUFBLE9BQUEsSUFBQSxPQUFBLENBQUEsR0FBQSxNQUFBLEtBQUEsQ0FBQSxHQUFBO0VBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsR0FBQTtJQUFBLFVBQUE7SUFBQSxHQUFBLFdBQUEsSUFBQTtNQUFBLE9BQUEsS0FBQSxDQUFBLEdBQUE7SUFBQTtFQUFBO0FBQUE7QUFGQSxJQUFBLE1BQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFD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QSxTQUFBLEdBQUEsQ0FBQSxPQUFBLE9BQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxDQUFBLGVBQUEsS0FBQSxFQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxhQUFBLFNBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLG1CQUFBLElBQUEsWUFBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxjQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsR0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEscUJBQUEsQ0FBQSxnQkFBQSxDQUFBLGdCQUFBLENBQUEsZ0JBQUEsVUFBQSxjQUFBLGtCQUFBLGNBQUEsMkJBQUEsU0FBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHFDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLFlBQUEsc0JBQUEsQ0FBQSxnQ0FBQSxPQUFBLFdBQUEsQ0FBQSxJQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsZ0JBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLHNCQUFBLGNBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxPQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxDQUFBLGdCQUFBLE9BQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxTQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxDQUFBLElBQUEsTUFBQSxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxFQUFBLElBQUEsV0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLE1BQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxLQUFBLFdBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLDJCQUFBLGVBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLDBCQUFBLEVBQUEsMEJBQUEsSUFBQSwwQkFBQSxxQkFBQSxpQkFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFlBQUEsS0FBQSxzQ0FBQSxDQUFBLEtBQUEsQ0FBQSxvQkFBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsUUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxtQkFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLHNCQUFBLENBQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsdUJBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLHFCQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxLQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLE1BQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLG9CQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLE1BQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHVDQUFBLENBQUEsaUJBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLE9BQUEsZUFBQSxDQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxTQUFBLHNDQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxjQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxNQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFdBQUEsVUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLGNBQUEsY0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsb0JBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsYUFBQSxRQUFBLENBQUEsU0FBQSxVQUFBLE1BQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsWUFBQSxjQUFBLEtBQUEsaUJBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxPQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsT0FBQSxDQUFBLFlBQUEsS0FBQSxhQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLGdCQUFBLFNBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxrQ0FBQSxpQkFBQSxDQUFBLFNBQUEsR0FBQSwwQkFBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEtBQUEsRUFBQSwwQkFBQSxFQUFBLFlBQUEsU0FBQSxDQUFBLENBQUEsMEJBQUEsbUJBQUEsS0FBQSxFQUFBLGlCQUFBLEVBQUEsWUFBQSxTQUFBLGlCQUFBLENBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSwwQkFBQSxFQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLG1CQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsd0JBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLFdBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxpQkFBQSw2QkFBQSxDQUFBLENBQUEsV0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSwwQkFBQSxLQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsMEJBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEtBQUEsYUFBQSxDQUFBLGFBQUEsT0FBQSxFQUFBLENBQUEsT0FBQSxxQkFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLGFBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxpQ0FBQSxDQUFBLENBQUEsYUFBQSxHQUFBLGFBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxPQUFBLE9BQUEsQ0FBQSxPQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQSxXQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxxQkFBQSxDQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGlDQUFBLE1BQUEsQ0FBQSxDQUFBLDZEQUFBLENBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxhQUFBLEtBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFdBQUEsSUFBQSxDQUFBLElBQUEsT0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsT0FBQSxDQUFBLFNBQUEsS0FBQSxXQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsV0FBQSxNQUFBLENBQUEsYUFBQSxJQUFBLFdBQUEsSUFBQSxXQUFBLElBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxPQUFBLElBQUEsWUFBQSxRQUFBLGNBQUEsTUFBQSxnQkFBQSxHQUFBLEdBQUEsQ0FBQSxPQUFBLFVBQUEsQ0FBQSxPQUFBLENBQUEsYUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLGtCQUFBLENBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLE1BQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxLQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxJQUFBLFdBQUEsS0FBQSxTQUFBLElBQUEsV0FBQSxDQUFBLFFBQUEsVUFBQSxJQUFBLFVBQUEsa0JBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxjQUFBLElBQUEsS0FBQSxpQkFBQSxXQUFBLGtCQUFBLENBQUEsYUFBQSxJQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsa0JBQUEsT0FBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLFlBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLGlCQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsTUFBQSxhQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLGdCQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxTQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxjQUFBLENBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEscUJBQUEsQ0FBQSxZQUFBLEtBQUEscURBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxVQUFBLFlBQUEsTUFBQSxXQUFBLE9BQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLFNBQUEsSUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSx3QkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxhQUFBLENBQUEsaUJBQUEsQ0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxVQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsY0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLFNBQUEsTUFBQSxnQkFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLFNBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxRQUFBLFdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLHFCQUFBLENBQUEsQ0FBQSxJQUFBLG1CQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsSUFBQSxRQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxPQUFBLE1BQUEsa0JBQUEsSUFBQSx5QkFBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsVUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxNQUFBLFdBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxRQUFBLFVBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsVUFBQSxLQUFBLENBQUEsY0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLENBQUEsUUFBQSxHQUFBLGFBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSx5QkFBQSxPQUFBLENBQUEsYUFBQSxDQUFBLFFBQUEsVUFBQSxDQUFBLE1BQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxrQkFBQSxDQUFBLENBQUEsSUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxnQkFBQSxLQUFBLDhCQUFBLGFBQUEsV0FBQSxjQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxRQUFBLEtBQUEsUUFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxFQUFBLENBQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxvQkFBQSxNQUFBLFVBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLFNBQUEsbUJBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxjQUFBLElBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsSUFBQSxDQUFBLEtBQUEsV0FBQSxLQUFBLElBQUEsTUFBQSxDQUFBLEtBQUEsaUJBQUEsSUFBQSxDQUFBLElBQUEsSUFBQSxPQUFBLENBQUEsS0FBQSxZQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBLFNBQUEsa0JBQUEsRUFBQSw2QkFBQSxJQUFBLFNBQUEsSUFBQSxHQUFBLFNBQUEsYUFBQSxPQUFBLFdBQUEsT0FBQSxFQUFBLE1BQUEsUUFBQSxHQUFBLEdBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxZQUFBLE1BQUEsS0FBQSxJQUFBLGtCQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsVUFBQSxLQUFBLGNBQUEsT0FBQSxHQUFBLElBQUEsa0JBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxXQUFBLEdBQUEsS0FBQSxLQUFBLENBQUEsU0FBQTtBQUFBLFNBQUEsMkJBQUEsQ0FBQSxFQUFBLGNBQUEsUUFBQSxFQUFBLFVBQUEsTUFBQSxvQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLHFCQUFBLEVBQUEsUUFBQSxLQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsMkJBQUEsQ0FBQSxDQUFBLE1BQUEsY0FBQSxJQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxxQkFBQSxFQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLEVBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLFdBQUEsSUFBQSxtQkFBQSxJQUFBLFNBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsRUFBQSxVQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLGdCQUFBLFNBQUEsTUFBQSxVQUFBLEdBQUEsV0FBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLElBQUEsR0FBQSxFQUFBLENBQUEsSUFBQSxJQUFBLGdCQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsU0FBQSxJQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsR0FBQSxJQUFBLE1BQUEsU0FBQSxHQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLGVBQUEsZ0JBQUEsSUFBQSxFQUFBLG9CQUFBLEVBQUEsOEJBQUEsTUFBQSxRQUFBLEdBQUE7QUFBQSxTQUFBLDRCQUFBLENBQUEsRUFBQSxNQUFBLFNBQUEsQ0FBQSxxQkFBQSxDQUFBLHNCQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxLQUFB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LFdBQUEsYUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtJQUN2QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNSLE9BQU8sQ0FBQztJQUNaLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNMO1FBQ0osSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO01BQzNDO0lBQ0osQ0FBQyxNQUNJO01BQ0QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztNQUN2QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO01BQ3ZCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FB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QU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzdELENBQUMsQ0FBQztVQUFBO1VBQUE7WUFBQSxPQUFBLFNBQUEsQ0FBQSxJQUFBO1FBQUE7TUFBQSxHQUFBLFFBQUE7SUFBQTtFQUNOO0FBQ0osQ0FBQzs7O0FDek9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9iYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IEpJbWFnZURhdGEgfSBmcm9tICcuLi9jb25zdGFudC9kYXRhJztcbi8qKlxuICog5Zu+5YOP57uE5Lu257G7IEpJbWFnZe+8jOe7p+aJv+S6juWfuuehgOe7hOS7tiBCYXNl44CCXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpJbWFnZSBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIEpJbWFnZee7hOS7tuaehOmAoOWHveaVsOOAglxuICAgICAqIEBwYXJhbSBvcHRpb24gLSDlm77lg4/pgInpobnvvIzljIXmi6wgdXJsLCBzcmMg562J44CCXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9uID0ge30pIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICAgICAgbm9kZVR5cGU6ICdpbWcnLFxuICAgICAgICAgICAgZGF0YVR5cGU6IEpJbWFnZURhdGFcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWbvuWDj+WKoOi9veWujOaIkOaXtuinpuWPkSAnbG9hZCcg5LqL5Lu2XG4gICAgICAgIHRoaXMudGFyZ2V0LmRvbS5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdsb2FkJywgZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIOWbvuWDj+WKoOi9vemUmeivr+aXtuinpuWPkSAnZXJyb3InIOS6i+S7tlxuICAgICAgICB0aGlzLnRhcmdldC5kb20ub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIOWFgeiuuOi3qOWfn+iOt+WPluWbvuWDj+i1hOa6kO+8iOmBv+WFjUNPUlPpl67popjvvIlcbiAgICAgICAgdGhpcy50YXJnZXQuYXR0cignY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJyk7XG4gICAgICAgIC8vICdzcmMnIOWxnuaAp+WPmOWMluaYoOWwhOWIsCBzdHlsZVxuICAgICAgICB0aGlzLmRhdGEud2F0Y2goW1xuICAgICAgICAgICAgJ3NyYydcbiAgICAgICAgXSwge1xuICAgICAgICAgICAgLy8g6K6+572uICdzcmMnIOWxnuaAp1xuICAgICAgICAgICAgc2V0OiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmRvbS5zcmMgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOiOt+WPliAnc3JjJyDlsZ7mgKdcbiAgICAgICAgICAgIGdldDogKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQuZG9tLnNyYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWmguaenOWcqOmAiemhueS4reaPkOS+m++8jOiuvue9riAnc3JjJyDmiJYgJ3VybCcg5bGe5oCnXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3Qgc3JjID0gb3B0aW9uLnVybCB8fCBvcHRpb24uc3JjO1xuICAgICAgICBpZiAoc3JjKVxuICAgICAgICAgICAgdGhpcy5kYXRhLnNyYyA9IHNyYztcbiAgICB9XG4gICAgLyoqXG4gICAgICogaW1n5YWD57Sg55qESlNPTuihqOeOsOW9ouW8j++8jOWMheaLrCdzcmMn562J5bGe5oCn44CCXG4gICAgICogQHBhcmFtIHByb3BzIC0g5bqP5YiX5YyW5pe26ZyA6KaB5YyF5ous55qE5bGe5oCnXG4gICAgICogQHJldHVybnMgSlNPTuWvueixoe+8jOihqOekumltZ+WFg+e0oOOAglxuICAgICAqL1xuICAgIHRvSlNPTihwcm9wcyA9IFtdKSB7XG4gICAgICAgIHByb3BzLnB1c2goJ3NyYycpO1xuICAgICAgICByZXR1cm4gc3VwZXIudG9KU09OKHByb3BzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL2Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xuaW1wb3J0IHsgSlN2Z0RhdGEgfSBmcm9tICcuLi9jb25zdGFudC9kYXRhJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTdmcgZXh0ZW5kcyBCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24gPSB7fSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgICAgICBkYXRhVHlwZTogSlN2Z0RhdGFcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWxnuaAp+WPmOWMluaYoOWwhOWIsHN0eWxlXG4gICAgICAgIHRoaXMuZGF0YS53YXRjaChbXG4gICAgICAgICAgICAndXJsJywgJ3N2ZycsICdzcmMnXG4gICAgICAgIF0sIHtcbiAgICAgICAgICAgIHNldDogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSAndXJsJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWQoaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICdzcmMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS51cmwgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpdGVtLm5hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmRvbS5pbm5lckhUTUwgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOabv+aNouWPmOmHj1xuICAgIHJlbmRlclN2ZyhzdmcpIHtcbiAgICAgICAgdGhpcy5kYXRhLm1hcCgobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHN2ZyA9IHN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFx7JHtuYW1lfVxcXFx9YCwgJ2cnKSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgLy8g5Yqg6L29c3Zn5YaF5a65XG4gICAgYXN5bmMgbG9hZCh1cmwgPSB0aGlzLmRhdGEudXJsKSB7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGF3YWl0IHV0aWwucmVxdWVzdCh1cmwpO1xuICAgICAgICB0aGlzLmRhdGEuc3ZnID0gc3ZnO1xuICAgIH1cbiAgICB0b0pTT04ocHJvcHMgPSBbXSkge1xuICAgICAgICBwcm9wcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnRvSlNPTihwcm9wcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9iYXNlQ29tcG9uZW50JztcbmltcG9ydCB7IEpUZXh0RGF0YSB9IGZyb20gJy4uL2NvbnN0YW50L2RhdGEnO1xuaW1wb3J0IHsgdG9wWkluZGV4IH0gZnJvbSAnLi4vY29uc3RhbnQvc3R5bGVNYXAnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xuaW1wb3J0IEpFbGVtZW50IGZyb20gJy4uL2NvcmUvZWxlbWVudCc7XG4vKipcbiAqIOaWh+acrOe7hOS7tuexuyBKVGV4dO+8jOe7p+aJv+S6juWfuuehgOe7hOS7tiBCYXNl44CCXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpUZXh0IGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogSlRleHTnu4Tku7bmnoTpgKDlh73mlbDjgIJcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYFxuICAgICAqIGNvbnN0IHRleHRJbnN0YW5jZSA9IG5ldyBKVGV4dCh7XG4gICAgICogICB0ZXh0OiAnSGVsbG8gV29ybGQnLFxuICAgICAqICAgc3R5bGU6IHtcbiAgICAgKiAgICAgY29sb3I6ICdyZWQnLFxuICAgICAqICAgICBmb250U2l6ZTogJzE4cHgnXG4gICAgICogICB9XG4gICAgICogfSk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIG9wdGlvbiAtIOaWh+acrOe7hOS7tumAiemhue+8jOWMheaLrCB0ZXh0LCBzdHlsZSDnrYnjgIJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb24gPSB7fSkge1xuICAgICAgICBvcHRpb24uc3R5bGUgPSB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgICAgICAgICB3b3JkQnJlYWs6IFwia2VlcC1hbGxcIixcbiAgICAgICAgICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgICAgICAgICAgIC4uLm9wdGlvbi5zdHlsZVxuICAgICAgICB9O1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgICAgICBub2RlVHlwZTogJ2RpdicsXG4gICAgICAgICAgICBkYXRhVHlwZTogSlRleHREYXRhXG4gICAgICAgIH0pO1xuICAgICAgICAvLyAndGV4dCcg5bGe5oCn5Y+Y5YyW5pig5bCE5YiwIGlubmVyVGV4dFxuICAgICAgICB0aGlzLmRhdGEud2F0Y2goW1xuICAgICAgICAgICAgJ3RleHQnXG4gICAgICAgIF0sIHtcbiAgICAgICAgICAgIHNldDogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5kb20uaW5uZXJUZXh0ID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmRvbS5pbm5lclRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDlpoLmnpzlnKjpgInpobnkuK3mj5DkvpvvvIzorr7nva4gJ3RleHQnIOWxnuaAp1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHRleHQgPSBvcHRpb24udGV4dDtcbiAgICAgICAgaWYgKHRleHQpXG4gICAgICAgICAgICB0aGlzLmRhdGEudGV4dCA9IHRleHQ7XG4gICAgICAgIC8vIOa3u+WKoOWPjOWHu+S6i+S7tuebkeWQrOWZqO+8jOi/m+WFpee8lui+keeKtuaAgVxuICAgICAgICB0aGlzLm9uKCdkYmxjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5re75Yqg6YCJ5oup5LqL5Lu255uR5ZCs5Zmo77yM6YCA5Ye657yW6L6R54q25oCBXG4gICAgICAgIHRoaXMub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VFZGl0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBKVGV4dC5UZXh0Q29udHJvbENhY2hlLnNldCh0aGlzLmlkLCB0aGlzKTsgLy8g57yT5a2Y6LW35p2lXG4gICAgfVxuICAgIC8vIOaJgOaciSBKVGV4dCDlrp7kvovnmoTnvJPlrZhcbiAgICBzdGF0aWMgVGV4dENvbnRyb2xDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAvKipcbiAgICAgKiDov5vlhaXmlofmnKznvJbovpHnirbmgIFcbiAgICAgKi9cbiAgICBlZGl0KCkge1xuICAgICAgICBpZiAoIXRoaXMuZWRpdGFibGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBlZGl0RWwgPSB0aGlzLmVkaXRvci50ZXh0RWRpdEVsZW1lbnQ7XG4gICAgICAgIGlmICghZWRpdEVsKSB7XG4gICAgICAgICAgICBlZGl0RWwgPSB0aGlzLmVkaXRvci50ZXh0RWRpdEVsZW1lbnQgPSBuZXcgSkVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5vZGVUeXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogdG9wWkluZGV4LFxuICAgICAgICAgICAgICAgICAgICByZXNpemU6ICdib3RoJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWRpdEVsLm9uKCdibHVyJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRWRpdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlZGl0RWwub24oJ2NsaWNrIGRibGNsaWNrIG1vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3IuZG9tLmFwcGVuZENoaWxkKGVkaXRFbC5kb20pO1xuICAgICAgICB9XG4gICAgICAgIGVkaXRFbC5kb20udmFsdWUgPSB0aGlzLmRhdGEudGV4dDtcbiAgICAgICAgZWRpdEVsLmF0dHIoJ2RhdGEtdGFyZ2V0JywgdGhpcy5pZCk7XG4gICAgICAgIGNvbnN0IHcgPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgKiAxLjU7XG4gICAgICAgIGNvbnN0IGggPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpICogMS4yO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHt9O1xuICAgICAgICBzdHlsZS53aWR0aCA9IE1hdGgubWF4KHcsIDEwMCkgKyAncHgnO1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBNYXRoLm1heChoLCAxMDApICsgJ3B4JztcbiAgICAgICAgc3R5bGUudG9wID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEudG9wKSAtIDQ7XG4gICAgICAgIHN0eWxlLmxlZnQgPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5sZWZ0KSAtIDQ7XG4gICAgICAgIHN0eWxlLmZvbnRTaXplID0gdGhpcy5zdHlsZS5mb250U2l6ZTtcbiAgICAgICAgc3R5bGUuZm9udEZhbWlseSA9IHRoaXMuc3R5bGUuZm9udEZhbWlseTtcbiAgICAgICAgc3R5bGUuZm9udFdlaWdodCA9IHRoaXMuc3R5bGUuZm9udFdlaWdodDtcbiAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB1dGlsLmNzcyhlZGl0RWwsIHN0eWxlKTtcbiAgICAgICAgZWRpdEVsLmRvbS5mb2N1cygpOyAvLyDov5vlhaXmjqfku7ZcbiAgICB9XG4gICAgLyoqXG4gICAgICog6YCA5Ye65paH5pys57yW6L6R54q25oCBXG4gICAgICovXG4gICAgY2xvc2VFZGl0KCkge1xuICAgICAgICBjb25zdCBlZGl0RWwgPSB0aGlzLmVkaXRvci50ZXh0RWRpdEVsZW1lbnQ7XG4gICAgICAgIGlmICghZWRpdEVsIHx8ICFlZGl0RWwudmlzaWJsZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8g57yW6L6R55qE5piv5b2T5YmN5YWD57Sg77yM5omN6YeH55So5a6D55qE5YC8XG4gICAgICAgIGNvbnN0IGlkID0gZWRpdEVsLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IEpUZXh0LlRleHRDb250cm9sQ2FjaGUuZ2V0KGlkKTtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEpUZXh0KSB7XG4gICAgICAgICAgICB0YXJnZXQuZGF0YS50ZXh0ID0gZWRpdEVsLmRvbS52YWx1ZTtcbiAgICAgICAgICAgIGVkaXRFbC5kYXRhLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGVkaXRFbC5kb20udmFsdWUgPSAnJzsgLy8g572u56m6XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRGl25YWD57Sg55qESlNPTuihqOeOsOW9ouW8j++8jOWMheaLrCAndGV4dCcg562J5bGe5oCnXG4gICAgICogQHBhcmFtIHByb3BzIC0g6KaB5bqP5YiX5YyW55qE5bGe5oCn5YiX6KGoXG4gICAgICogQHJldHVybnMgSlNPTuWvueixoe+8jOihqOekumRpduWFg+e0oFxuICAgICAqL1xuICAgIHRvSlNPTihwcm9wcyA9IFtdKSB7XG4gICAgICAgIHByb3BzLnB1c2goJ3RleHQnKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnRvSlNPTihwcm9wcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOenu+mZpCBKVGV4dCDlrp7kvotcbiAgICAgKi9cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBKVGV4dC5UZXh0Q29udHJvbENhY2hlLmRlbGV0ZSh0aGlzLmlkKTtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXRlciBmcm9tICcuL2V2ZW50RW1pdHRlcic7XG4vKipcbiAqIEpEYXRhIOexu++8muaPkOS+m+S6huS4gOenjeaWueW8j+adpeWkhOeQhuWSjOeuoeeQhuaVsOaNrlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKRGF0YSBleHRlbmRzIEV2ZW50RW1pdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5mcm9tKGRhdGEpO1xuICAgIH1cbiAgICAvKiog55So5LqO5a2Y5pS+5pWw5o2u55qE5a+56LGhICovXG4gICAgZGF0YSA9IHt9O1xuICAgIC8qKiDlrZjmlL7mlbDmja7lj5jljJbnmoTnm5HlkKzlmaggKi9cbiAgICB3YXRjaGVyID0gbmV3IE1hcCgpO1xuICAgIC8vIOebkeaOp+afkOS4quWxnuaAp+WPmOWMllxuICAgIHdhdGNoKG5hbWUsIHdhdGNoZXIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbiBvZiBuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoKG4sIHdhdGNoZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdhdGNoZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlci5oYXMobmFtZSkpXG4gICAgICAgICAgICB3YXRjaGVzID0gdGhpcy53YXRjaGVyLmdldChuYW1lKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoZXIuc2V0KG5hbWUsIHdhdGNoZXMpO1xuICAgICAgICB9XG4gICAgICAgIHdhdGNoZXMucHVzaCh3YXRjaGVyKTtcbiAgICAgICAgdGhpcy5kYXRhW25hbWVdICYmIHRoaXMucHJvcGVydHlDaGFuZ2UobmFtZSk7IC8vIOinpuWPkeS4gOasoVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8g5bGe5oCn5pS55Y+YXG4gICAgcHJvcGVydHlDaGFuZ2UobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aGlzLmRhdGFbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0YVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3YXRjaGVzID0gdGhpcy53YXRjaGVyLmdldChuYW1lKTtcbiAgICAgICAgaWYgKHdhdGNoZXMgJiYgd2F0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdyBvZiB3YXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgdyAmJiB3LnNldCAmJiB3LnNldCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOivu+WPluWxnuaAp1xuICAgIGdldFByb3BlcnR5KG5hbWUpIHtcbiAgICAgICAgY29uc3Qgd2F0Y2hlcyA9IHRoaXMud2F0Y2hlci5nZXQobmFtZSk7XG4gICAgICAgIGlmICh3YXRjaGVzICYmIHdhdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHcgb2Ygd2F0Y2hlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB3ICYmIHcuZ2V0ICYmIHcuZ2V0KG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdiAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbbmFtZV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOS7juWvueixoeS4reWvvOWFpeaVsOaNruWIsOW9k+WJjeWunuS+i1xuICAgICAqIEBwYXJhbSBkYXRhIC0g6ZyA5a+85YWl55qE5pWw5o2u5a+56LGhXG4gICAgICogQHJldHVybnMg6L+U5Zue5b2T5YmNIEpEYXRhIOWunuS+i1xuICAgICAqL1xuICAgIGZyb20oZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhKVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIOmBjeWOhlxuICAgIG1hcChmdW4pIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmRhdGEpO1xuICAgICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV0gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzW25hbWVdID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gZnVuICYmIGZ1bihuYW1lLCB0aGlzW25hbWVdKTtcbiAgICAgICAgICAgIGlmIChyZXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpc1tuYW1lXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWvvOWHuuaVsOaNruS4uiBKU09OIOWvueixoVxuICAgICAqIEByZXR1cm5zIOi/lOWbniBKU09OIOWvueixoVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIHRoaXMubWFwKChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgb2JqW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICAvLyDnlJ/miJDmlbDmja5EYXRhXG4gICAgc3RhdGljIGNyZWF0ZVByb3h5KGRhdGEpIHtcbiAgICAgICAgLy8g5Luj55CG5aSE55CGXG4gICAgICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KGRhdGEsIHtcbiAgICAgICAgICAgIGdldCh0YXJnZXQsIHAsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IHRhcmdldFtwXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmdldFByb3BlcnR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodGFyZ2V0LCBwLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHAgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucHJvcGVydHlDaGFuZ2UocCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgfVxufVxuLyoqXG4gKiDlhYPntKDnmoTln7rnoYDmlbDmja7nsbtcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIEpFbGVtZW50RGF0YSBleHRlbmRzIEpEYXRhIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuICAgIHRvcDtcbiAgICBsZWZ0O1xuICAgIHdpZHRoO1xuICAgIGhlaWdodDtcbiAgICAvLyDml4vovazlvKfluqZcbiAgICByb3RhdGlvbjtcbiAgICAvLyDml4vovazop5LluqZcbiAgICBhbmdsZTtcbiAgICB2aXNpYmxlO1xuICAgIHpJbmRleDtcbn1cbi8qKlxuICog5Zu+54mH5YWD57Sg55qE5pWw5o2u57G777yM57un5om/6Ieq5YWD57Sg55qE5Z+656GA5pWw5o2u57G7IEpFbGVtZW50RGF0YVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgSkltYWdlRGF0YSBleHRlbmRzIEpFbGVtZW50RGF0YSB7XG4gICAgc3JjO1xufVxuLyoqXG4gKiBzdmdcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIEpTdmdEYXRhIGV4dGVuZHMgSkltYWdlRGF0YSB7XG4gICAgdXJsO1xuICAgIHN2Zztcbn1cbi8qKlxuICog5paH5pys5YWD57Sg55qE5pWw5o2u57G777yM57un5om/6Ieq5YWD57Sg55qE5Z+656GA5pWw5o2u57G7IEpFbGVtZW50RGF0YVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgSlRleHREYXRhIGV4dGVuZHMgSkVsZW1lbnREYXRhIHtcbiAgICB0ZXh0O1xufVxuIiwiaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuLyoqXG4gKiBFdmVudEVtaXR0ZXIg57G777yM57un5om/6IeqICdldmVudGVtaXR0ZXIzJyDmqKHlnZfnmoQgRXZlbnRFbWl0ZXIg57G744CCXG4gKiDnlKjkuo7ov5vooYzkuovku7bnmoTlj5HluIPkuI7orqLpmIXjgIJcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIGV4dGVuZHMgRXZlbnRFbWl0ZXIge1xuICAgIC8qKlxuICAgICAqIOengeacieaWueazle+8jOeUqOS6juinhOiMg+WMluS6i+S7tuWQjVxuICAgICAqIEBwYXJhbSBuYW1lIC0g5Y+v5Lul5piv5a2X56ym5Liy44CB56ym5Y+35oiW5a2X56ym5Liy5pWw57uEXG4gICAgICogQHJldHVybnMg6L+U5Zue56ym5Y+35oiW5a2X56ym5Liy5pWw57uEXG4gICAgICovXG4gICAgbm9ybWFsaXplRXZlbnROYW1lcyhuYW1lKSB7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobmFtZSkgPyBuYW1lIDogW25hbWVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDkuLrnu5nlrprnmoTkuovku7bmt7vliqDkuIDkuKrnm5HlkKzlmahcbiAgICAgKiBAcGFyYW0gZXZlbnQgLSDkuovku7blkI3vvIzlj6/ku6XmmK/lrZfnrKbkuLLjgIHnrKblj7fmiJblrZfnrKbkuLLmlbDnu4RcbiAgICAgKiBAcGFyYW0gZm4gLSDnm5HlkKzlh73mlbDvvIzlj4LmlbDliJfooajkuLrlj6/lj5jlj4LmlbBcbiAgICAgKiBAcGFyYW0gY29udGV4dCAtIOWPr+mAie+8jOS4iuS4i+aWh+WvueixoVxuICAgICAqIEByZXR1cm5zIOi/lOWbniBFdmVudEVtaXR0ZXIg5a6e5L6LXG4gICAgICovXG4gICAgb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMubm9ybWFsaXplRXZlbnROYW1lcyhldmVudCk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBldmVudHMpIHtcbiAgICAgICAgICAgIG5hbWUgJiYgc3VwZXIub24obmFtZSwgZm4sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnp7vpmaTnu5nlrprnmoTkuovku7bnmoTkuIDkuKrnm5HlkKzlmahcbiAgICAgKiBAcGFyYW0gZXZlbnQgLSDkuovku7blkI3vvIzlj6/ku6XmmK/lrZfnrKbkuLLjgIHnrKblj7fmiJblrZfnrKbkuLLmlbDnu4RcbiAgICAgKiBAcGFyYW0gZm4gLSDlj6/pgInvvIznm5HlkKzlh73mlbDvvIzlj4LmlbDliJfooajkuLrlj6/lj5jlj4LmlbBcbiAgICAgKiBAcGFyYW0gY29udGV4dCAtIOWPr+mAie+8jOS4iuS4i+aWh+WvueixoVxuICAgICAqIEBwYXJhbSBvbmNlIC0g5Y+v6YCJ77yM5piv5ZCm5Y+q5omn6KGM5LiA5qyhXG4gICAgICogQHJldHVybnMg6L+U5ZueIEV2ZW50RW1pdHRlciDlrp7kvotcbiAgICAgKi9cbiAgICBvZmYoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMubm9ybWFsaXplRXZlbnROYW1lcyhldmVudCk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBldmVudHMpIHtcbiAgICAgICAgICAgIG5hbWUgJiYgc3VwZXIub2ZmKG5hbWUsIGZuLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xuZXhwb3J0IGNvbnN0IHRvcFpJbmRleCA9IDEwMDAwO1xuZXhwb3J0IGNvbnN0IGZ1bGxDaXJjbGVSYWRpdXMgPSBNYXRoLlBJICogMjtcbi8qKlxuICog5pSv5oyB55qE5qC35byP5bGe5oCn5YiX6KGoXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24gZXh0ZW5kcyBFdmVudEVtaXRlciB7XG4gICAgYWNjZW50Q29sb3I7XG4gICAgYWxpZ25Db250ZW50O1xuICAgIGFsaWduSXRlbXM7XG4gICAgYWxpZ25TZWxmO1xuICAgIGFsaWdubWVudEJhc2VsaW5lO1xuICAgIGFsbDtcbiAgICBhbmltYXRpb247XG4gICAgYW5pbWF0aW9uQ29tcG9zaXRpb247XG4gICAgYW5pbWF0aW9uRGVsYXk7XG4gICAgYW5pbWF0aW9uRGlyZWN0aW9uO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGFuaW1hdGlvbkZpbGxNb2RlO1xuICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50O1xuICAgIGFuaW1hdGlvbk5hbWU7XG4gICAgYW5pbWF0aW9uUGxheVN0YXRlO1xuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uO1xuICAgIGFwcGVhcmFuY2U7XG4gICAgYXNwZWN0UmF0aW87XG4gICAgYmFja2Ryb3BGaWx0ZXI7XG4gICAgYmFja2ZhY2VWaXNpYmlsaXR5O1xuICAgIGJhY2tncm91bmQ7XG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ7XG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZTtcbiAgICBiYWNrZ3JvdW5kQ2xpcDtcbiAgICBiYWNrZ3JvdW5kQ29sb3I7XG4gICAgYmFja2dyb3VuZEltYWdlO1xuICAgIGJhY2tncm91bmRPcmlnaW47XG4gICAgYmFja2dyb3VuZFBvc2l0aW9uO1xuICAgIGJhY2tncm91bmRQb3NpdGlvblg7XG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWTtcbiAgICBiYWNrZ3JvdW5kUmVwZWF0O1xuICAgIGJhY2tncm91bmRTaXplO1xuICAgIGJhc2VsaW5lU2hpZnQ7XG4gICAgYmxvY2tTaXplO1xuICAgIGJvcmRlcjtcbiAgICBib3JkZXJCbG9jaztcbiAgICBib3JkZXJCbG9ja0NvbG9yO1xuICAgIGJvcmRlckJsb2NrRW5kO1xuICAgIGJvcmRlckJsb2NrRW5kQ29sb3I7XG4gICAgYm9yZGVyQmxvY2tFbmRTdHlsZTtcbiAgICBib3JkZXJCbG9ja0VuZFdpZHRoO1xuICAgIGJvcmRlckJsb2NrU3RhcnQ7XG4gICAgYm9yZGVyQmxvY2tTdGFydENvbG9yO1xuICAgIGJvcmRlckJsb2NrU3RhcnRTdHlsZTtcbiAgICBib3JkZXJCbG9ja1N0YXJ0V2lkdGg7XG4gICAgYm9yZGVyQmxvY2tTdHlsZTtcbiAgICBib3JkZXJCbG9ja1dpZHRoO1xuICAgIGJvcmRlckJvdHRvbTtcbiAgICBib3JkZXJCb3R0b21Db2xvcjtcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzO1xuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzO1xuICAgIGJvcmRlckJvdHRvbVN0eWxlO1xuICAgIGJvcmRlckJvdHRvbVdpZHRoO1xuICAgIGJvcmRlckNvbGxhcHNlO1xuICAgIGJvcmRlckNvbG9yO1xuICAgIGJvcmRlckVuZEVuZFJhZGl1cztcbiAgICBib3JkZXJFbmRTdGFydFJhZGl1cztcbiAgICBib3JkZXJJbWFnZTtcbiAgICBib3JkZXJJbWFnZU91dHNldDtcbiAgICBib3JkZXJJbWFnZVJlcGVhdDtcbiAgICBib3JkZXJJbWFnZVNsaWNlO1xuICAgIGJvcmRlckltYWdlU291cmNlO1xuICAgIGJvcmRlckltYWdlV2lkdGg7XG4gICAgYm9yZGVySW5saW5lO1xuICAgIGJvcmRlcklubGluZUNvbG9yO1xuICAgIGJvcmRlcklubGluZUVuZDtcbiAgICBib3JkZXJJbmxpbmVFbmRDb2xvcjtcbiAgICBib3JkZXJJbmxpbmVFbmRTdHlsZTtcbiAgICBib3JkZXJJbmxpbmVFbmRXaWR0aDtcbiAgICBib3JkZXJJbmxpbmVTdGFydDtcbiAgICBib3JkZXJJbmxpbmVTdGFydENvbG9yO1xuICAgIGJvcmRlcklubGluZVN0YXJ0U3R5bGU7XG4gICAgYm9yZGVySW5saW5lU3RhcnRXaWR0aDtcbiAgICBib3JkZXJJbmxpbmVTdHlsZTtcbiAgICBib3JkZXJJbmxpbmVXaWR0aDtcbiAgICBib3JkZXJMZWZ0O1xuICAgIGJvcmRlckxlZnRDb2xvcjtcbiAgICBib3JkZXJMZWZ0U3R5bGU7XG4gICAgYm9yZGVyTGVmdFdpZHRoO1xuICAgIGJvcmRlclJhZGl1cztcbiAgICBib3JkZXJSaWdodDtcbiAgICBib3JkZXJSaWdodENvbG9yO1xuICAgIGJvcmRlclJpZ2h0U3R5bGU7XG4gICAgYm9yZGVyUmlnaHRXaWR0aDtcbiAgICBib3JkZXJTcGFjaW5nO1xuICAgIGJvcmRlclN0YXJ0RW5kUmFkaXVzO1xuICAgIGJvcmRlclN0YXJ0U3RhcnRSYWRpdXM7XG4gICAgYm9yZGVyU3R5bGU7XG4gICAgYm9yZGVyVG9wO1xuICAgIGJvcmRlclRvcENvbG9yO1xuICAgIGJvcmRlclRvcExlZnRSYWRpdXM7XG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM7XG4gICAgYm9yZGVyVG9wU3R5bGU7XG4gICAgYm9yZGVyVG9wV2lkdGg7XG4gICAgYm9yZGVyV2lkdGg7XG4gICAgYm90dG9tO1xuICAgIGJveFNoYWRvdztcbiAgICBib3hTaXppbmc7XG4gICAgYnJlYWtBZnRlcjtcbiAgICBicmVha0JlZm9yZTtcbiAgICBicmVha0luc2lkZTtcbiAgICBjYXB0aW9uU2lkZTtcbiAgICBjYXJldENvbG9yO1xuICAgIGNsZWFyO1xuICAgIGNsaXA7XG4gICAgY2xpcFBhdGg7XG4gICAgY2xpcFJ1bGU7XG4gICAgY29sb3I7XG4gICAgY29sb3JJbnRlcnBvbGF0aW9uO1xuICAgIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM7XG4gICAgY29sb3JTY2hlbWU7XG4gICAgY29sdW1uQ291bnQ7XG4gICAgY29sdW1uRmlsbDtcbiAgICBjb2x1bW5HYXA7XG4gICAgY29sdW1uUnVsZTtcbiAgICBjb2x1bW5SdWxlQ29sb3I7XG4gICAgY29sdW1uUnVsZVN0eWxlO1xuICAgIGNvbHVtblJ1bGVXaWR0aDtcbiAgICBjb2x1bW5TcGFuO1xuICAgIGNvbHVtbldpZHRoO1xuICAgIGNvbHVtbnM7XG4gICAgY29udGFpbjtcbiAgICBjb250YWluSW50cmluc2ljQmxvY2tTaXplO1xuICAgIGNvbnRhaW5JbnRyaW5zaWNIZWlnaHQ7XG4gICAgY29udGFpbkludHJpbnNpY0lubGluZVNpemU7XG4gICAgY29udGFpbkludHJpbnNpY1NpemU7XG4gICAgY29udGFpbkludHJpbnNpY1dpZHRoO1xuICAgIGNvbnRhaW5lcjtcbiAgICBjb250YWluZXJOYW1lO1xuICAgIGNvbnRhaW5lclR5cGU7XG4gICAgY29udGVudDtcbiAgICBjb3VudGVySW5jcmVtZW50O1xuICAgIGNvdW50ZXJSZXNldDtcbiAgICBjb3VudGVyU2V0O1xuICAgIGNzc0Zsb2F0O1xuICAgIGNzc1RleHQ7XG4gICAgY3Vyc29yO1xuICAgIGRpcmVjdGlvbjtcbiAgICBkaXNwbGF5O1xuICAgIGRvbWluYW50QmFzZWxpbmU7XG4gICAgZW1wdHlDZWxscztcbiAgICBmaWxsO1xuICAgIGZpbGxPcGFjaXR5O1xuICAgIGZpbGxSdWxlO1xuICAgIGZpbHRlcjtcbiAgICBmbGV4O1xuICAgIGZsZXhCYXNpcztcbiAgICBmbGV4RGlyZWN0aW9uO1xuICAgIGZsZXhGbG93O1xuICAgIGZsZXhHcm93O1xuICAgIGZsZXhTaHJpbms7XG4gICAgZmxleFdyYXA7XG4gICAgZmxvYXQ7XG4gICAgZmxvb2RDb2xvcjtcbiAgICBmbG9vZE9wYWNpdHk7XG4gICAgZm9udDtcbiAgICBmb250RmFtaWx5O1xuICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M7XG4gICAgZm9udEtlcm5pbmc7XG4gICAgZm9udE9wdGljYWxTaXppbmc7XG4gICAgZm9udFBhbGV0dGU7XG4gICAgZm9udFNpemU7XG4gICAgZm9udFNpemVBZGp1c3Q7XG4gICAgZm9udFN0cmV0Y2g7XG4gICAgZm9udFN0eWxlO1xuICAgIGZvbnRTeW50aGVzaXM7XG4gICAgZm9udFN5bnRoZXNpc1NtYWxsQ2FwcztcbiAgICBmb250U3ludGhlc2lzU3R5bGU7XG4gICAgZm9udFN5bnRoZXNpc1dlaWdodDtcbiAgICBmb250VmFyaWFudDtcbiAgICBmb250VmFyaWFudEFsdGVybmF0ZXM7XG4gICAgZm9udFZhcmlhbnRDYXBzO1xuICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuO1xuICAgIGZvbnRWYXJpYW50TGlnYXR1cmVzO1xuICAgIGZvbnRWYXJpYW50TnVtZXJpYztcbiAgICBmb250VmFyaWFudFBvc2l0aW9uO1xuICAgIGZvbnRWYXJpYXRpb25TZXR0aW5ncztcbiAgICBmb250V2VpZ2h0O1xuICAgIGZvcmNlZENvbG9yQWRqdXN0O1xuICAgIGdhcDtcbiAgICBncmlkO1xuICAgIGdyaWRBcmVhO1xuICAgIGdyaWRBdXRvQ29sdW1ucztcbiAgICBncmlkQXV0b0Zsb3c7XG4gICAgZ3JpZEF1dG9Sb3dzO1xuICAgIGdyaWRDb2x1bW47XG4gICAgZ3JpZENvbHVtbkVuZDtcbiAgICBncmlkQ29sdW1uR2FwO1xuICAgIGdyaWRDb2x1bW5TdGFydDtcbiAgICBncmlkR2FwO1xuICAgIGdyaWRSb3c7XG4gICAgZ3JpZFJvd0VuZDtcbiAgICBncmlkUm93R2FwO1xuICAgIGdyaWRSb3dTdGFydDtcbiAgICBncmlkVGVtcGxhdGU7XG4gICAgZ3JpZFRlbXBsYXRlQXJlYXM7XG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1ucztcbiAgICBncmlkVGVtcGxhdGVSb3dzO1xuICAgIGhlaWdodDtcbiAgICBoeXBoZW5hdGVDaGFyYWN0ZXI7XG4gICAgaHlwaGVucztcbiAgICBpbWFnZU9yaWVudGF0aW9uO1xuICAgIGltYWdlUmVuZGVyaW5nO1xuICAgIGlubGluZVNpemU7XG4gICAgaW5zZXQ7XG4gICAgaW5zZXRCbG9jaztcbiAgICBpbnNldEJsb2NrRW5kO1xuICAgIGluc2V0QmxvY2tTdGFydDtcbiAgICBpbnNldElubGluZTtcbiAgICBpbnNldElubGluZUVuZDtcbiAgICBpbnNldElubGluZVN0YXJ0O1xuICAgIGlzb2xhdGlvbjtcbiAgICBqdXN0aWZ5Q29udGVudDtcbiAgICBqdXN0aWZ5SXRlbXM7XG4gICAganVzdGlmeVNlbGY7XG4gICAgbGVmdDtcbiAgICBsZW5ndGg7XG4gICAgbGV0dGVyU3BhY2luZztcbiAgICBsaWdodGluZ0NvbG9yO1xuICAgIGxpbmVCcmVhaztcbiAgICBsaW5lSGVpZ2h0O1xuICAgIGxpc3RTdHlsZTtcbiAgICBsaXN0U3R5bGVJbWFnZTtcbiAgICBsaXN0U3R5bGVQb3NpdGlvbjtcbiAgICBsaXN0U3R5bGVUeXBlO1xuICAgIG1hcmdpbjtcbiAgICBtYXJnaW5CbG9jaztcbiAgICBtYXJnaW5CbG9ja0VuZDtcbiAgICBtYXJnaW5CbG9ja1N0YXJ0O1xuICAgIG1hcmdpbkJvdHRvbTtcbiAgICBtYXJnaW5JbmxpbmU7XG4gICAgbWFyZ2luSW5saW5lRW5kO1xuICAgIG1hcmdpbklubGluZVN0YXJ0O1xuICAgIG1hcmdpbkxlZnQ7XG4gICAgbWFyZ2luUmlnaHQ7XG4gICAgbWFyZ2luVG9wO1xuICAgIG1hcmtlcjtcbiAgICBtYXJrZXJFbmQ7XG4gICAgbWFya2VyTWlkO1xuICAgIG1hcmtlclN0YXJ0O1xuICAgIG1hc2s7XG4gICAgbWFza0NsaXA7XG4gICAgbWFza0NvbXBvc2l0ZTtcbiAgICBtYXNrSW1hZ2U7XG4gICAgbWFza01vZGU7XG4gICAgbWFza09yaWdpbjtcbiAgICBtYXNrUG9zaXRpb247XG4gICAgbWFza1JlcGVhdDtcbiAgICBtYXNrU2l6ZTtcbiAgICBtYXNrVHlwZTtcbiAgICBtYXRoU3R5bGU7XG4gICAgbWF4QmxvY2tTaXplO1xuICAgIG1heEhlaWdodDtcbiAgICBtYXhJbmxpbmVTaXplO1xuICAgIG1heFdpZHRoO1xuICAgIG1pbkJsb2NrU2l6ZTtcbiAgICBtaW5IZWlnaHQ7XG4gICAgbWluSW5saW5lU2l6ZTtcbiAgICBtaW5XaWR0aDtcbiAgICBtaXhCbGVuZE1vZGU7XG4gICAgb2JqZWN0Rml0O1xuICAgIG9iamVjdFBvc2l0aW9uO1xuICAgIG9mZnNldDtcbiAgICBvZmZzZXREaXN0YW5jZTtcbiAgICBvZmZzZXRQYXRoO1xuICAgIG9mZnNldFJvdGF0ZTtcbiAgICBvcGFjaXR5O1xuICAgIG9yZGVyO1xuICAgIG9ycGhhbnM7XG4gICAgb3V0bGluZTtcbiAgICBvdXRsaW5lQ29sb3I7XG4gICAgb3V0bGluZU9mZnNldDtcbiAgICBvdXRsaW5lU3R5bGU7XG4gICAgb3V0bGluZVdpZHRoO1xuICAgIG92ZXJmbG93O1xuICAgIG92ZXJmbG93QW5jaG9yO1xuICAgIG92ZXJmbG93Q2xpcE1hcmdpbjtcbiAgICBvdmVyZmxvd1dyYXA7XG4gICAgb3ZlcmZsb3dYO1xuICAgIG92ZXJmbG93WTtcbiAgICBvdmVyc2Nyb2xsQmVoYXZpb3I7XG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yQmxvY2s7XG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9ySW5saW5lO1xuICAgIG92ZXJzY3JvbGxCZWhhdmlvclg7XG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yWTtcbiAgICBwYWRkaW5nO1xuICAgIHBhZGRpbmdCbG9jaztcbiAgICBwYWRkaW5nQmxvY2tFbmQ7XG4gICAgcGFkZGluZ0Jsb2NrU3RhcnQ7XG4gICAgcGFkZGluZ0JvdHRvbTtcbiAgICBwYWRkaW5nSW5saW5lO1xuICAgIHBhZGRpbmdJbmxpbmVFbmQ7XG4gICAgcGFkZGluZ0lubGluZVN0YXJ0O1xuICAgIHBhZGRpbmdMZWZ0O1xuICAgIHBhZGRpbmdSaWdodDtcbiAgICBwYWRkaW5nVG9wO1xuICAgIHBhZ2U7XG4gICAgcGFnZUJyZWFrQWZ0ZXI7XG4gICAgcGFnZUJyZWFrQmVmb3JlO1xuICAgIHBhZ2VCcmVha0luc2lkZTtcbiAgICBwYWludE9yZGVyO1xuICAgIHBhcmVudFJ1bGU7XG4gICAgcGVyc3BlY3RpdmU7XG4gICAgcGVyc3BlY3RpdmVPcmlnaW47XG4gICAgcGxhY2VDb250ZW50O1xuICAgIHBsYWNlSXRlbXM7XG4gICAgcGxhY2VTZWxmO1xuICAgIHBvaW50ZXJFdmVudHM7XG4gICAgcG9zaXRpb247XG4gICAgcHJpbnRDb2xvckFkanVzdDtcbiAgICBxdW90ZXM7XG4gICAgcmVzaXplO1xuICAgIHJpZ2h0O1xuICAgIHJvdGF0ZTtcbiAgICByb3dHYXA7XG4gICAgcnVieVBvc2l0aW9uO1xuICAgIHNjYWxlO1xuICAgIHNjcm9sbEJlaGF2aW9yO1xuICAgIHNjcm9sbE1hcmdpbjtcbiAgICBzY3JvbGxNYXJnaW5CbG9jaztcbiAgICBzY3JvbGxNYXJnaW5CbG9ja0VuZDtcbiAgICBzY3JvbGxNYXJnaW5CbG9ja1N0YXJ0O1xuICAgIHNjcm9sbE1hcmdpbkJvdHRvbTtcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmU7XG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lRW5kO1xuICAgIHNjcm9sbE1hcmdpbklubGluZVN0YXJ0O1xuICAgIHNjcm9sbE1hcmdpbkxlZnQ7XG4gICAgc2Nyb2xsTWFyZ2luUmlnaHQ7XG4gICAgc2Nyb2xsTWFyZ2luVG9wO1xuICAgIHNjcm9sbFBhZGRpbmc7XG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrO1xuICAgIHNjcm9sbFBhZGRpbmdCbG9ja0VuZDtcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tTdGFydDtcbiAgICBzY3JvbGxQYWRkaW5nQm90dG9tO1xuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmU7XG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZUVuZDtcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQ7XG4gICAgc2Nyb2xsUGFkZGluZ0xlZnQ7XG4gICAgc2Nyb2xsUGFkZGluZ1JpZ2h0O1xuICAgIHNjcm9sbFBhZGRpbmdUb3A7XG4gICAgc2Nyb2xsU25hcEFsaWduO1xuICAgIHNjcm9sbFNuYXBTdG9wO1xuICAgIHNjcm9sbFNuYXBUeXBlO1xuICAgIHNjcm9sbGJhckd1dHRlcjtcbiAgICBzaGFwZUltYWdlVGhyZXNob2xkO1xuICAgIHNoYXBlTWFyZ2luO1xuICAgIHNoYXBlT3V0c2lkZTtcbiAgICBzaGFwZVJlbmRlcmluZztcbiAgICBzdG9wQ29sb3I7XG4gICAgc3RvcE9wYWNpdHk7XG4gICAgc3Ryb2tlO1xuICAgIHN0cm9rZURhc2hhcnJheTtcbiAgICBzdHJva2VEYXNob2Zmc2V0O1xuICAgIHN0cm9rZUxpbmVjYXA7XG4gICAgc3Ryb2tlTGluZWpvaW47XG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDtcbiAgICBzdHJva2VPcGFjaXR5O1xuICAgIHN0cm9rZVdpZHRoO1xuICAgIHRhYlNpemU7XG4gICAgdGFibGVMYXlvdXQ7XG4gICAgdGV4dEFsaWduO1xuICAgIHRleHRBbGlnbkxhc3Q7XG4gICAgdGV4dEFuY2hvcjtcbiAgICB0ZXh0Q29tYmluZVVwcmlnaHQ7XG4gICAgdGV4dERlY29yYXRpb247XG4gICAgdGV4dERlY29yYXRpb25Db2xvcjtcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU7XG4gICAgdGV4dERlY29yYXRpb25Ta2lwSW5rO1xuICAgIHRleHREZWNvcmF0aW9uU3R5bGU7XG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3M7XG4gICAgdGV4dEVtcGhhc2lzO1xuICAgIHRleHRFbXBoYXNpc0NvbG9yO1xuICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uO1xuICAgIHRleHRFbXBoYXNpc1N0eWxlO1xuICAgIHRleHRJbmRlbnQ7XG4gICAgdGV4dE9yaWVudGF0aW9uO1xuICAgIHRleHRPdmVyZmxvdztcbiAgICB0ZXh0UmVuZGVyaW5nO1xuICAgIHRleHRTaGFkb3c7XG4gICAgdGV4dFRyYW5zZm9ybTtcbiAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0O1xuICAgIHRleHRVbmRlcmxpbmVQb3NpdGlvbjtcbiAgICB0b3A7XG4gICAgdG91Y2hBY3Rpb247XG4gICAgdHJhbnNmb3JtO1xuICAgIHRyYW5zZm9ybUJveDtcbiAgICB0cmFuc2Zvcm1PcmlnaW47XG4gICAgdHJhbnNmb3JtU3R5bGU7XG4gICAgdHJhbnNpdGlvbjtcbiAgICB0cmFuc2l0aW9uRGVsYXk7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTtcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb247XG4gICAgdHJhbnNsYXRlO1xuICAgIHVuaWNvZGVCaWRpO1xuICAgIHVzZXJTZWxlY3Q7XG4gICAgdmVydGljYWxBbGlnbjtcbiAgICB2aXNpYmlsaXR5O1xuICAgIHdoaXRlU3BhY2U7XG4gICAgd2lkb3dzO1xuICAgIHdpZHRoO1xuICAgIHdpbGxDaGFuZ2U7XG4gICAgd29yZEJyZWFrO1xuICAgIHdvcmRTcGFjaW5nO1xuICAgIHdvcmRXcmFwO1xuICAgIHdyaXRpbmdNb2RlO1xuICAgIHpJbmRleDtcbn1cbi8qKlxuICog5qC35byP5bGe5oCn6ZuG5ZCIXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBKRWxlbWVudFN0eWxlUHJvcGVydHkge1xuICAgIGFjY2VudENvbG9yID0gJyc7XG4gICAgYWxpZ25Db250ZW50ID0gJyc7XG4gICAgYWxpZ25JdGVtcyA9ICcnO1xuICAgIGFsaWduU2VsZiA9ICcnO1xuICAgIGFsaWdubWVudEJhc2VsaW5lID0gJyc7XG4gICAgYWxsID0gJyc7XG4gICAgYW5pbWF0aW9uID0gJyc7XG4gICAgYW5pbWF0aW9uQ29tcG9zaXRpb24gPSAnJztcbiAgICBhbmltYXRpb25EZWxheSA9ICcnO1xuICAgIGFuaW1hdGlvbkRpcmVjdGlvbiA9ICcnO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgYW5pbWF0aW9uRmlsbE1vZGUgPSAnJztcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudCA9ICcnO1xuICAgIGFuaW1hdGlvbk5hbWUgPSAnJztcbiAgICBhbmltYXRpb25QbGF5U3RhdGUgPSAnJztcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbiA9ICcnO1xuICAgIGFwcGVhcmFuY2UgPSAnJztcbiAgICBhc3BlY3RSYXRpbyA9ICcnO1xuICAgIGJhY2tkcm9wRmlsdGVyID0gJyc7XG4gICAgYmFja2ZhY2VWaXNpYmlsaXR5ID0gJyc7XG4gICAgYmFja2dyb3VuZCA9ICcnO1xuICAgIGJhY2tncm91bmRBdHRhY2htZW50ID0gJyc7XG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZSA9ICcnO1xuICAgIGJhY2tncm91bmRDbGlwID0gJyc7XG4gICAgYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgYmFja2dyb3VuZE9yaWdpbiA9ICcnO1xuICAgIGJhY2tncm91bmRQb3NpdGlvbiA9ICcnO1xuICAgIGJhY2tncm91bmRQb3NpdGlvblggPSAnJztcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZID0gJyc7XG4gICAgYmFja2dyb3VuZFJlcGVhdCA9ICcnO1xuICAgIGJhY2tncm91bmRTaXplID0gJyc7XG4gICAgYmFzZWxpbmVTaGlmdCA9ICcnO1xuICAgIGJsb2NrU2l6ZSA9ICcnO1xuICAgIGJvcmRlciA9ICcnO1xuICAgIGJvcmRlckJsb2NrID0gJyc7XG4gICAgYm9yZGVyQmxvY2tDb2xvciA9ICcnO1xuICAgIGJvcmRlckJsb2NrRW5kID0gJyc7XG4gICAgYm9yZGVyQmxvY2tFbmRDb2xvciA9ICcnO1xuICAgIGJvcmRlckJsb2NrRW5kU3R5bGUgPSAnJztcbiAgICBib3JkZXJCbG9ja0VuZFdpZHRoID0gJyc7XG4gICAgYm9yZGVyQmxvY2tTdGFydCA9ICcnO1xuICAgIGJvcmRlckJsb2NrU3RhcnRDb2xvciA9ICcnO1xuICAgIGJvcmRlckJsb2NrU3RhcnRTdHlsZSA9ICcnO1xuICAgIGJvcmRlckJsb2NrU3RhcnRXaWR0aCA9ICcnO1xuICAgIGJvcmRlckJsb2NrU3R5bGUgPSAnJztcbiAgICBib3JkZXJCbG9ja1dpZHRoID0gJyc7XG4gICAgYm9yZGVyQm90dG9tID0gJyc7XG4gICAgYm9yZGVyQm90dG9tQ29sb3IgPSAnJztcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gJyc7XG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSAnJztcbiAgICBib3JkZXJCb3R0b21TdHlsZSA9ICcnO1xuICAgIGJvcmRlckJvdHRvbVdpZHRoID0gJyc7XG4gICAgYm9yZGVyQ29sbGFwc2UgPSAnJztcbiAgICBib3JkZXJDb2xvciA9ICcnO1xuICAgIGJvcmRlckVuZEVuZFJhZGl1cyA9ICcnO1xuICAgIGJvcmRlckVuZFN0YXJ0UmFkaXVzID0gJyc7XG4gICAgYm9yZGVySW1hZ2UgPSAnJztcbiAgICBib3JkZXJJbWFnZU91dHNldCA9ICcnO1xuICAgIGJvcmRlckltYWdlUmVwZWF0ID0gJyc7XG4gICAgYm9yZGVySW1hZ2VTbGljZSA9ICcnO1xuICAgIGJvcmRlckltYWdlU291cmNlID0gJyc7XG4gICAgYm9yZGVySW1hZ2VXaWR0aCA9ICcnO1xuICAgIGJvcmRlcklubGluZSA9ICcnO1xuICAgIGJvcmRlcklubGluZUNvbG9yID0gJyc7XG4gICAgYm9yZGVySW5saW5lRW5kID0gJyc7XG4gICAgYm9yZGVySW5saW5lRW5kQ29sb3IgPSAnJztcbiAgICBib3JkZXJJbmxpbmVFbmRTdHlsZSA9ICcnO1xuICAgIGJvcmRlcklubGluZUVuZFdpZHRoID0gJyc7XG4gICAgYm9yZGVySW5saW5lU3RhcnQgPSAnJztcbiAgICBib3JkZXJJbmxpbmVTdGFydENvbG9yID0gJyc7XG4gICAgYm9yZGVySW5saW5lU3RhcnRTdHlsZSA9ICcnO1xuICAgIGJvcmRlcklubGluZVN0YXJ0V2lkdGggPSAnJztcbiAgICBib3JkZXJJbmxpbmVTdHlsZSA9ICcnO1xuICAgIGJvcmRlcklubGluZVdpZHRoID0gJyc7XG4gICAgYm9yZGVyTGVmdCA9ICcnO1xuICAgIGJvcmRlckxlZnRDb2xvciA9ICcnO1xuICAgIGJvcmRlckxlZnRTdHlsZSA9ICcnO1xuICAgIGJvcmRlckxlZnRXaWR0aCA9ICcnO1xuICAgIGJvcmRlclJhZGl1cyA9ICcnO1xuICAgIGJvcmRlclJpZ2h0ID0gJyc7XG4gICAgYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICAgIGJvcmRlclJpZ2h0U3R5bGUgPSAnJztcbiAgICBib3JkZXJSaWdodFdpZHRoID0gJyc7XG4gICAgYm9yZGVyU3BhY2luZyA9ICcnO1xuICAgIGJvcmRlclN0YXJ0RW5kUmFkaXVzID0gJyc7XG4gICAgYm9yZGVyU3RhcnRTdGFydFJhZGl1cyA9ICcnO1xuICAgIGJvcmRlclN0eWxlID0gJyc7XG4gICAgYm9yZGVyVG9wID0gJyc7XG4gICAgYm9yZGVyVG9wQ29sb3IgPSAnJztcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzID0gJyc7XG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSAnJztcbiAgICBib3JkZXJUb3BTdHlsZSA9ICcnO1xuICAgIGJvcmRlclRvcFdpZHRoID0gJyc7XG4gICAgYm9yZGVyV2lkdGggPSAnJztcbiAgICBib3R0b20gPSAnJztcbiAgICBib3hTaGFkb3cgPSAnJztcbiAgICBib3hTaXppbmcgPSAnJztcbiAgICBicmVha0FmdGVyID0gJyc7XG4gICAgYnJlYWtCZWZvcmUgPSAnJztcbiAgICBicmVha0luc2lkZSA9ICcnO1xuICAgIGNhcHRpb25TaWRlID0gJyc7XG4gICAgY2FyZXRDb2xvciA9ICcnO1xuICAgIGNsZWFyID0gJyc7XG4gICAgY2xpcCA9ICcnO1xuICAgIGNsaXBQYXRoID0gJyc7XG4gICAgY2xpcFJ1bGUgPSAnJztcbiAgICBjb2xvciA9ICcnO1xuICAgIGNvbG9ySW50ZXJwb2xhdGlvbiA9ICcnO1xuICAgIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnMgPSAnJztcbiAgICBjb2xvclNjaGVtZSA9ICcnO1xuICAgIGNvbHVtbkNvdW50ID0gJyc7XG4gICAgY29sdW1uRmlsbCA9ICcnO1xuICAgIGNvbHVtbkdhcCA9ICcnO1xuICAgIGNvbHVtblJ1bGUgPSAnJztcbiAgICBjb2x1bW5SdWxlQ29sb3IgPSAnJztcbiAgICBjb2x1bW5SdWxlU3R5bGUgPSAnJztcbiAgICBjb2x1bW5SdWxlV2lkdGggPSAnJztcbiAgICBjb2x1bW5TcGFuID0gJyc7XG4gICAgY29sdW1uV2lkdGggPSAnJztcbiAgICBjb2x1bW5zID0gJyc7XG4gICAgY29udGFpbiA9ICcnO1xuICAgIGNvbnRhaW5JbnRyaW5zaWNCbG9ja1NpemUgPSAnJztcbiAgICBjb250YWluSW50cmluc2ljSGVpZ2h0ID0gJyc7XG4gICAgY29udGFpbkludHJpbnNpY0lubGluZVNpemUgPSAnJztcbiAgICBjb250YWluSW50cmluc2ljU2l6ZSA9ICcnO1xuICAgIGNvbnRhaW5JbnRyaW5zaWNXaWR0aCA9ICcnO1xuICAgIGNvbnRhaW5lciA9ICcnO1xuICAgIGNvbnRhaW5lck5hbWUgPSAnJztcbiAgICBjb250YWluZXJUeXBlID0gJyc7XG4gICAgY29udGVudCA9ICcnO1xuICAgIGNvdW50ZXJJbmNyZW1lbnQgPSAnJztcbiAgICBjb3VudGVyUmVzZXQgPSAnJztcbiAgICBjb3VudGVyU2V0ID0gJyc7XG4gICAgY3NzRmxvYXQgPSAnJztcbiAgICBjc3NUZXh0ID0gJyc7XG4gICAgY3Vyc29yID0gJyc7XG4gICAgZGlyZWN0aW9uID0gJyc7XG4gICAgZGlzcGxheSA9ICcnO1xuICAgIGRvbWluYW50QmFzZWxpbmUgPSAnJztcbiAgICBlbXB0eUNlbGxzID0gJyc7XG4gICAgZmlsbCA9ICcnO1xuICAgIGZpbGxPcGFjaXR5ID0gJyc7XG4gICAgZmlsbFJ1bGUgPSAnJztcbiAgICBmaWx0ZXIgPSAnJztcbiAgICBmbGV4ID0gJyc7XG4gICAgZmxleEJhc2lzID0gJyc7XG4gICAgZmxleERpcmVjdGlvbiA9ICcnO1xuICAgIGZsZXhGbG93ID0gJyc7XG4gICAgZmxleEdyb3cgPSAnJztcbiAgICBmbGV4U2hyaW5rID0gJyc7XG4gICAgZmxleFdyYXAgPSAnJztcbiAgICBmbG9hdCA9ICcnO1xuICAgIGZsb29kQ29sb3IgPSAnJztcbiAgICBmbG9vZE9wYWNpdHkgPSAnJztcbiAgICBmb250ID0gJyc7XG4gICAgZm9udEZhbWlseSA9ICcnO1xuICAgIGZvbnRGZWF0dXJlU2V0dGluZ3MgPSAnJztcbiAgICBmb250S2VybmluZyA9ICcnO1xuICAgIGZvbnRPcHRpY2FsU2l6aW5nID0gJyc7XG4gICAgZm9udFBhbGV0dGUgPSAnJztcbiAgICBmb250U2l6ZSA9ICcnO1xuICAgIGZvbnRTaXplQWRqdXN0ID0gJyc7XG4gICAgZm9udFN0cmV0Y2ggPSAnJztcbiAgICBmb250U3R5bGUgPSAnJztcbiAgICBmb250U3ludGhlc2lzID0gJyc7XG4gICAgZm9udFN5bnRoZXNpc1NtYWxsQ2FwcyA9ICcnO1xuICAgIGZvbnRTeW50aGVzaXNTdHlsZSA9ICcnO1xuICAgIGZvbnRTeW50aGVzaXNXZWlnaHQgPSAnJztcbiAgICBmb250VmFyaWFudCA9ICcnO1xuICAgIGZvbnRWYXJpYW50QWx0ZXJuYXRlcyA9ICcnO1xuICAgIGZvbnRWYXJpYW50Q2FwcyA9ICcnO1xuICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuID0gJyc7XG4gICAgZm9udFZhcmlhbnRMaWdhdHVyZXMgPSAnJztcbiAgICBmb250VmFyaWFudE51bWVyaWMgPSAnJztcbiAgICBmb250VmFyaWFudFBvc2l0aW9uID0gJyc7XG4gICAgZm9udFZhcmlhdGlvblNldHRpbmdzID0gJyc7XG4gICAgZm9udFdlaWdodCA9ICcnO1xuICAgIGZvcmNlZENvbG9yQWRqdXN0ID0gJyc7XG4gICAgZ2FwID0gJyc7XG4gICAgZ3JpZCA9ICcnO1xuICAgIGdyaWRBcmVhID0gJyc7XG4gICAgZ3JpZEF1dG9Db2x1bW5zID0gJyc7XG4gICAgZ3JpZEF1dG9GbG93ID0gJyc7XG4gICAgZ3JpZEF1dG9Sb3dzID0gJyc7XG4gICAgZ3JpZENvbHVtbiA9ICcnO1xuICAgIGdyaWRDb2x1bW5FbmQgPSAnJztcbiAgICBncmlkQ29sdW1uR2FwID0gJyc7XG4gICAgZ3JpZENvbHVtblN0YXJ0ID0gJyc7XG4gICAgZ3JpZEdhcCA9ICcnO1xuICAgIGdyaWRSb3cgPSAnJztcbiAgICBncmlkUm93RW5kID0gJyc7XG4gICAgZ3JpZFJvd0dhcCA9ICcnO1xuICAgIGdyaWRSb3dTdGFydCA9ICcnO1xuICAgIGdyaWRUZW1wbGF0ZSA9ICcnO1xuICAgIGdyaWRUZW1wbGF0ZUFyZWFzID0gJyc7XG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcnO1xuICAgIGdyaWRUZW1wbGF0ZVJvd3MgPSAnJztcbiAgICBoZWlnaHQgPSAnJztcbiAgICBoeXBoZW5hdGVDaGFyYWN0ZXIgPSAnJztcbiAgICBoeXBoZW5zID0gJyc7XG4gICAgaW1hZ2VPcmllbnRhdGlvbiA9ICcnO1xuICAgIGltYWdlUmVuZGVyaW5nID0gJyc7XG4gICAgaW5saW5lU2l6ZSA9ICcnO1xuICAgIGluc2V0ID0gJyc7XG4gICAgaW5zZXRCbG9jayA9ICcnO1xuICAgIGluc2V0QmxvY2tFbmQgPSAnJztcbiAgICBpbnNldEJsb2NrU3RhcnQgPSAnJztcbiAgICBpbnNldElubGluZSA9ICcnO1xuICAgIGluc2V0SW5saW5lRW5kID0gJyc7XG4gICAgaW5zZXRJbmxpbmVTdGFydCA9ICcnO1xuICAgIGlzb2xhdGlvbiA9ICcnO1xuICAgIGp1c3RpZnlDb250ZW50ID0gJyc7XG4gICAganVzdGlmeUl0ZW1zID0gJyc7XG4gICAganVzdGlmeVNlbGYgPSAnJztcbiAgICBsZWZ0ID0gJyc7XG4gICAgbGVuZ3RoO1xuICAgIGxldHRlclNwYWNpbmcgPSAnJztcbiAgICBsaWdodGluZ0NvbG9yID0gJyc7XG4gICAgbGluZUJyZWFrID0gJyc7XG4gICAgbGluZUhlaWdodCA9ICcnO1xuICAgIGxpc3RTdHlsZSA9ICcnO1xuICAgIGxpc3RTdHlsZUltYWdlID0gJyc7XG4gICAgbGlzdFN0eWxlUG9zaXRpb24gPSAnJztcbiAgICBsaXN0U3R5bGVUeXBlID0gJyc7XG4gICAgbWFyZ2luID0gJyc7XG4gICAgbWFyZ2luQmxvY2sgPSAnJztcbiAgICBtYXJnaW5CbG9ja0VuZCA9ICcnO1xuICAgIG1hcmdpbkJsb2NrU3RhcnQgPSAnJztcbiAgICBtYXJnaW5Cb3R0b20gPSAnJztcbiAgICBtYXJnaW5JbmxpbmUgPSAnJztcbiAgICBtYXJnaW5JbmxpbmVFbmQgPSAnJztcbiAgICBtYXJnaW5JbmxpbmVTdGFydCA9ICcnO1xuICAgIG1hcmdpbkxlZnQgPSAnJztcbiAgICBtYXJnaW5SaWdodCA9ICcnO1xuICAgIG1hcmdpblRvcCA9ICcnO1xuICAgIG1hcmtlciA9ICcnO1xuICAgIG1hcmtlckVuZCA9ICcnO1xuICAgIG1hcmtlck1pZCA9ICcnO1xuICAgIG1hcmtlclN0YXJ0ID0gJyc7XG4gICAgbWFzayA9ICcnO1xuICAgIG1hc2tDbGlwID0gJyc7XG4gICAgbWFza0NvbXBvc2l0ZSA9ICcnO1xuICAgIG1hc2tJbWFnZSA9ICcnO1xuICAgIG1hc2tNb2RlID0gJyc7XG4gICAgbWFza09yaWdpbiA9ICcnO1xuICAgIG1hc2tQb3NpdGlvbiA9ICcnO1xuICAgIG1hc2tSZXBlYXQgPSAnJztcbiAgICBtYXNrU2l6ZSA9ICcnO1xuICAgIG1hc2tUeXBlID0gJyc7XG4gICAgbWF0aFN0eWxlID0gJyc7XG4gICAgbWF4QmxvY2tTaXplID0gJyc7XG4gICAgbWF4SGVpZ2h0ID0gJyc7XG4gICAgbWF4SW5saW5lU2l6ZSA9ICcnO1xuICAgIG1heFdpZHRoID0gJyc7XG4gICAgbWluQmxvY2tTaXplID0gJyc7XG4gICAgbWluSGVpZ2h0ID0gJyc7XG4gICAgbWluSW5saW5lU2l6ZSA9ICcnO1xuICAgIG1pbldpZHRoID0gJyc7XG4gICAgbWl4QmxlbmRNb2RlID0gJyc7XG4gICAgb2JqZWN0Rml0ID0gJyc7XG4gICAgb2JqZWN0UG9zaXRpb24gPSAnJztcbiAgICBvZmZzZXQgPSAnJztcbiAgICBvZmZzZXREaXN0YW5jZSA9ICcnO1xuICAgIG9mZnNldFBhdGggPSAnJztcbiAgICBvZmZzZXRSb3RhdGUgPSAnJztcbiAgICBvcGFjaXR5ID0gJyc7XG4gICAgb3JkZXIgPSAnJztcbiAgICBvcnBoYW5zID0gJyc7XG4gICAgb3V0bGluZSA9ICcnO1xuICAgIG91dGxpbmVDb2xvciA9ICcnO1xuICAgIG91dGxpbmVPZmZzZXQgPSAnJztcbiAgICBvdXRsaW5lU3R5bGUgPSAnJztcbiAgICBvdXRsaW5lV2lkdGggPSAnJztcbiAgICBvdmVyZmxvdyA9ICcnO1xuICAgIG92ZXJmbG93QW5jaG9yID0gJyc7XG4gICAgb3ZlcmZsb3dDbGlwTWFyZ2luID0gJyc7XG4gICAgb3ZlcmZsb3dXcmFwID0gJyc7XG4gICAgb3ZlcmZsb3dYID0gJyc7XG4gICAgb3ZlcmZsb3dZID0gJyc7XG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yID0gJyc7XG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yQmxvY2sgPSAnJztcbiAgICBvdmVyc2Nyb2xsQmVoYXZpb3JJbmxpbmUgPSAnJztcbiAgICBvdmVyc2Nyb2xsQmVoYXZpb3JYID0gJyc7XG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yWSA9ICcnO1xuICAgIHBhZGRpbmcgPSAnJztcbiAgICBwYWRkaW5nQmxvY2sgPSAnJztcbiAgICBwYWRkaW5nQmxvY2tFbmQgPSAnJztcbiAgICBwYWRkaW5nQmxvY2tTdGFydCA9ICcnO1xuICAgIHBhZGRpbmdCb3R0b20gPSAnJztcbiAgICBwYWRkaW5nSW5saW5lID0gJyc7XG4gICAgcGFkZGluZ0lubGluZUVuZCA9ICcnO1xuICAgIHBhZGRpbmdJbmxpbmVTdGFydCA9ICcnO1xuICAgIHBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgcGFkZGluZ1JpZ2h0ID0gJyc7XG4gICAgcGFkZGluZ1RvcCA9ICcnO1xuICAgIHBhZ2UgPSAnJztcbiAgICBwYWdlQnJlYWtBZnRlciA9ICcnO1xuICAgIHBhZ2VCcmVha0JlZm9yZSA9ICcnO1xuICAgIHBhZ2VCcmVha0luc2lkZSA9ICcnO1xuICAgIHBhaW50T3JkZXIgPSAnJztcbiAgICBwYXJlbnRSdWxlO1xuICAgIHBlcnNwZWN0aXZlID0gJyc7XG4gICAgcGVyc3BlY3RpdmVPcmlnaW4gPSAnJztcbiAgICBwbGFjZUNvbnRlbnQgPSAnJztcbiAgICBwbGFjZUl0ZW1zID0gJyc7XG4gICAgcGxhY2VTZWxmID0gJyc7XG4gICAgcG9pbnRlckV2ZW50cyA9ICcnO1xuICAgIHBvc2l0aW9uID0gJyc7XG4gICAgcHJpbnRDb2xvckFkanVzdCA9ICcnO1xuICAgIHF1b3RlcyA9ICcnO1xuICAgIHJlc2l6ZSA9ICcnO1xuICAgIHJpZ2h0ID0gJyc7XG4gICAgcm90YXRlID0gJyc7XG4gICAgcm93R2FwID0gJyc7XG4gICAgcnVieVBvc2l0aW9uID0gJyc7XG4gICAgc2NhbGUgPSAnJztcbiAgICBzY3JvbGxCZWhhdmlvciA9ICcnO1xuICAgIHNjcm9sbE1hcmdpbiA9ICcnO1xuICAgIHNjcm9sbE1hcmdpbkJsb2NrID0gJyc7XG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tFbmQgPSAnJztcbiAgICBzY3JvbGxNYXJnaW5CbG9ja1N0YXJ0ID0gJyc7XG4gICAgc2Nyb2xsTWFyZ2luQm90dG9tID0gJyc7XG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lID0gJyc7XG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lRW5kID0gJyc7XG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lU3RhcnQgPSAnJztcbiAgICBzY3JvbGxNYXJnaW5MZWZ0ID0gJyc7XG4gICAgc2Nyb2xsTWFyZ2luUmlnaHQgPSAnJztcbiAgICBzY3JvbGxNYXJnaW5Ub3AgPSAnJztcbiAgICBzY3JvbGxQYWRkaW5nID0gJyc7XG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrID0gJyc7XG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kID0gJyc7XG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrU3RhcnQgPSAnJztcbiAgICBzY3JvbGxQYWRkaW5nQm90dG9tID0gJyc7XG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZSA9ICcnO1xuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmVFbmQgPSAnJztcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQgPSAnJztcbiAgICBzY3JvbGxQYWRkaW5nTGVmdCA9ICcnO1xuICAgIHNjcm9sbFBhZGRpbmdSaWdodCA9ICcnO1xuICAgIHNjcm9sbFBhZGRpbmdUb3AgPSAnJztcbiAgICBzY3JvbGxTbmFwQWxpZ24gPSAnJztcbiAgICBzY3JvbGxTbmFwU3RvcCA9ICcnO1xuICAgIHNjcm9sbFNuYXBUeXBlID0gJyc7XG4gICAgc2Nyb2xsYmFyR3V0dGVyID0gJyc7XG4gICAgc2hhcGVJbWFnZVRocmVzaG9sZCA9ICcnO1xuICAgIHNoYXBlTWFyZ2luID0gJyc7XG4gICAgc2hhcGVPdXRzaWRlID0gJyc7XG4gICAgc2hhcGVSZW5kZXJpbmcgPSAnJztcbiAgICBzdG9wQ29sb3IgPSAnJztcbiAgICBzdG9wT3BhY2l0eSA9ICcnO1xuICAgIHN0cm9rZSA9ICcnO1xuICAgIHN0cm9rZURhc2hhcnJheSA9ICcnO1xuICAgIHN0cm9rZURhc2hvZmZzZXQgPSAnJztcbiAgICBzdHJva2VMaW5lY2FwID0gJyc7XG4gICAgc3Ryb2tlTGluZWpvaW4gPSAnJztcbiAgICBzdHJva2VNaXRlcmxpbWl0ID0gJyc7XG4gICAgc3Ryb2tlT3BhY2l0eSA9ICcnO1xuICAgIHN0cm9rZVdpZHRoID0gJyc7XG4gICAgdGFiU2l6ZSA9ICcnO1xuICAgIHRhYmxlTGF5b3V0ID0gJyc7XG4gICAgdGV4dEFsaWduID0gJyc7XG4gICAgdGV4dEFsaWduTGFzdCA9ICcnO1xuICAgIHRleHRBbmNob3IgPSAnJztcbiAgICB0ZXh0Q29tYmluZVVwcmlnaHQgPSAnJztcbiAgICB0ZXh0RGVjb3JhdGlvbiA9ICcnO1xuICAgIHRleHREZWNvcmF0aW9uQ29sb3IgPSAnJztcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmUgPSAnJztcbiAgICB0ZXh0RGVjb3JhdGlvblNraXBJbmsgPSAnJztcbiAgICB0ZXh0RGVjb3JhdGlvblN0eWxlID0gJyc7XG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3MgPSAnJztcbiAgICB0ZXh0RW1waGFzaXMgPSAnJztcbiAgICB0ZXh0RW1waGFzaXNDb2xvciA9ICcnO1xuICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uID0gJyc7XG4gICAgdGV4dEVtcGhhc2lzU3R5bGUgPSAnJztcbiAgICB0ZXh0SW5kZW50ID0gJyc7XG4gICAgdGV4dE9yaWVudGF0aW9uID0gJyc7XG4gICAgdGV4dE92ZXJmbG93ID0gJyc7XG4gICAgdGV4dFJlbmRlcmluZyA9ICcnO1xuICAgIHRleHRTaGFkb3cgPSAnJztcbiAgICB0ZXh0VHJhbnNmb3JtID0gJyc7XG4gICAgdGV4dFVuZGVybGluZU9mZnNldCA9ICcnO1xuICAgIHRleHRVbmRlcmxpbmVQb3NpdGlvbiA9ICcnO1xuICAgIHRvcCA9ICcnO1xuICAgIHRvdWNoQWN0aW9uID0gJyc7XG4gICAgdHJhbnNmb3JtID0gJyc7XG4gICAgdHJhbnNmb3JtQm94ID0gJyc7XG4gICAgdHJhbnNmb3JtT3JpZ2luID0gJyc7XG4gICAgdHJhbnNmb3JtU3R5bGUgPSAnJztcbiAgICB0cmFuc2l0aW9uID0gJyc7XG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gJyc7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgdHJhbnNpdGlvblByb3BlcnR5ID0gJyc7XG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gJyc7XG4gICAgdHJhbnNsYXRlID0gJyc7XG4gICAgdW5pY29kZUJpZGkgPSAnJztcbiAgICB1c2VyU2VsZWN0ID0gJyc7XG4gICAgdmVydGljYWxBbGlnbiA9ICcnO1xuICAgIHZpc2liaWxpdHkgPSAnJztcbiAgICB3ZWJraXRBbGlnbkNvbnRlbnQgPSAnJztcbiAgICB3ZWJraXRBbGlnbkl0ZW1zID0gJyc7XG4gICAgd2Via2l0QWxpZ25TZWxmID0gJyc7XG4gICAgd2Via2l0QW5pbWF0aW9uID0gJyc7XG4gICAgd2Via2l0QW5pbWF0aW9uRGVsYXkgPSAnJztcbiAgICB3ZWJraXRBbmltYXRpb25EaXJlY3Rpb24gPSAnJztcbiAgICB3ZWJraXRBbmltYXRpb25EdXJhdGlvbiA9ICcnO1xuICAgIHdlYmtpdEFuaW1hdGlvbkZpbGxNb2RlID0gJyc7XG4gICAgd2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSAnJztcbiAgICB3ZWJraXRBbmltYXRpb25OYW1lID0gJyc7XG4gICAgd2Via2l0QW5pbWF0aW9uUGxheVN0YXRlID0gJyc7XG4gICAgd2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSAnJztcbiAgICB3ZWJraXRBcHBlYXJhbmNlID0gJyc7XG4gICAgd2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5ID0gJyc7XG4gICAgd2Via2l0QmFja2dyb3VuZENsaXAgPSAnJztcbiAgICB3ZWJraXRCYWNrZ3JvdW5kT3JpZ2luID0gJyc7XG4gICAgd2Via2l0QmFja2dyb3VuZFNpemUgPSAnJztcbiAgICB3ZWJraXRCb3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gJyc7XG4gICAgd2Via2l0Qm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSAnJztcbiAgICB3ZWJraXRCb3JkZXJSYWRpdXMgPSAnJztcbiAgICB3ZWJraXRCb3JkZXJUb3BMZWZ0UmFkaXVzID0gJyc7XG4gICAgd2Via2l0Qm9yZGVyVG9wUmlnaHRSYWRpdXMgPSAnJztcbiAgICB3ZWJraXRCb3hBbGlnbiA9ICcnO1xuICAgIHdlYmtpdEJveEZsZXggPSAnJztcbiAgICB3ZWJraXRCb3hPcmRpbmFsR3JvdXAgPSAnJztcbiAgICB3ZWJraXRCb3hPcmllbnQgPSAnJztcbiAgICB3ZWJraXRCb3hQYWNrID0gJyc7XG4gICAgd2Via2l0Qm94U2hhZG93ID0gJyc7XG4gICAgd2Via2l0Qm94U2l6aW5nID0gJyc7XG4gICAgd2Via2l0RmlsdGVyID0gJyc7XG4gICAgd2Via2l0RmxleCA9ICcnO1xuICAgIHdlYmtpdEZsZXhCYXNpcyA9ICcnO1xuICAgIHdlYmtpdEZsZXhEaXJlY3Rpb24gPSAnJztcbiAgICB3ZWJraXRGbGV4RmxvdyA9ICcnO1xuICAgIHdlYmtpdEZsZXhHcm93ID0gJyc7XG4gICAgd2Via2l0RmxleFNocmluayA9ICcnO1xuICAgIHdlYmtpdEZsZXhXcmFwID0gJyc7XG4gICAgd2Via2l0SnVzdGlmeUNvbnRlbnQgPSAnJztcbiAgICB3ZWJraXRMaW5lQ2xhbXAgPSAnJztcbiAgICB3ZWJraXRNYXNrID0gJyc7XG4gICAgd2Via2l0TWFza0JveEltYWdlID0gJyc7XG4gICAgd2Via2l0TWFza0JveEltYWdlT3V0c2V0ID0gJyc7XG4gICAgd2Via2l0TWFza0JveEltYWdlUmVwZWF0ID0gJyc7XG4gICAgd2Via2l0TWFza0JveEltYWdlU2xpY2UgPSAnJztcbiAgICB3ZWJraXRNYXNrQm94SW1hZ2VTb3VyY2UgPSAnJztcbiAgICB3ZWJraXRNYXNrQm94SW1hZ2VXaWR0aCA9ICcnO1xuICAgIHdlYmtpdE1hc2tDbGlwID0gJyc7XG4gICAgd2Via2l0TWFza0NvbXBvc2l0ZSA9ICcnO1xuICAgIHdlYmtpdE1hc2tJbWFnZSA9ICcnO1xuICAgIHdlYmtpdE1hc2tPcmlnaW4gPSAnJztcbiAgICB3ZWJraXRNYXNrUG9zaXRpb24gPSAnJztcbiAgICB3ZWJraXRNYXNrUmVwZWF0ID0gJyc7XG4gICAgd2Via2l0TWFza1NpemUgPSAnJztcbiAgICB3ZWJraXRPcmRlciA9ICcnO1xuICAgIHdlYmtpdFBlcnNwZWN0aXZlID0gJyc7XG4gICAgd2Via2l0UGVyc3BlY3RpdmVPcmlnaW4gPSAnJztcbiAgICB3ZWJraXRUZXh0RmlsbENvbG9yID0gJyc7XG4gICAgd2Via2l0VGV4dFNpemVBZGp1c3QgPSAnJztcbiAgICB3ZWJraXRUZXh0U3Ryb2tlID0gJyc7XG4gICAgd2Via2l0VGV4dFN0cm9rZUNvbG9yID0gJyc7XG4gICAgd2Via2l0VGV4dFN0cm9rZVdpZHRoID0gJyc7XG4gICAgd2Via2l0VHJhbnNmb3JtID0gJyc7XG4gICAgd2Via2l0VHJhbnNmb3JtT3JpZ2luID0gJyc7XG4gICAgd2Via2l0VHJhbnNmb3JtU3R5bGUgPSAnJztcbiAgICB3ZWJraXRUcmFuc2l0aW9uID0gJyc7XG4gICAgd2Via2l0VHJhbnNpdGlvbkRlbGF5ID0gJyc7XG4gICAgd2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgd2Via2l0VHJhbnNpdGlvblByb3BlcnR5ID0gJyc7XG4gICAgd2Via2l0VHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gJyc7XG4gICAgd2Via2l0VXNlclNlbGVjdCA9ICcnO1xuICAgIHdoaXRlU3BhY2UgPSAnJztcbiAgICB3aWRvd3MgPSAnJztcbiAgICB3aWR0aCA9ICcnO1xuICAgIHdpbGxDaGFuZ2UgPSAnJztcbiAgICB3b3JkQnJlYWsgPSAnJztcbiAgICB3b3JkU3BhY2luZyA9ICcnO1xuICAgIHdvcmRXcmFwID0gJyc7XG4gICAgd3JpdGluZ01vZGUgPSAnJztcbiAgICB6SW5kZXggPSAwO1xufVxuLyoqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpFbGVtZW50Q3NzU3R5bGUgZXh0ZW5kcyBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24ge1xuICAgIHN0YXRpYyBzdHlsZU5hbWVzTWFwID0gW107XG4gICAgLy8g5omA5pyJ5qC35byP5ZCN56ewXG4gICAgZ2V0IG5hbWVzKCkge1xuICAgICAgICBpZiAoIUpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IG5ldyBKRWxlbWVudFN0eWxlUHJvcGVydHkoKTtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtYXApO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gdHlwZW9mIG1hcFtrXTtcbiAgICAgICAgICAgICAgICBpZiAodCA9PT0gJ3N0cmluZycgfHwgdCA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgICAgIEpFbGVtZW50Q3NzU3R5bGUuc3R5bGVOYW1lc01hcC5wdXNoKGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKRWxlbWVudENzc1N0eWxlLnN0eWxlTmFtZXNNYXA7XG4gICAgfVxufVxuLy8g5pyA5aSW5bGC5a655Zmo6buY6K6k5qC35byPXG5leHBvcnQgY29uc3QgQ29udGFpbmVyRGVmYXVsdFN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICB0b3A6ICcwJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIG1hcmdpbjogJzAnLFxuICAgIHpJbmRleDogJzAnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbn07XG5leHBvcnQgY29uc3QgbndzZSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQU1BQUFEWHFjM0tBQUFBZTFCTVZFVUFBQUQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vK2FucWFlb3FxanBxN2UzK0xpNHVScGJYaGlaM05qYUhSZlpIRlpYMnRBUjFjL1JsVTdRVkgvLy8vOS9mMy8vLy8vLy8vOS9mMy8vLy85L2YzLy8vOFBGeXIvLy8vVVlqYWJBQUFBSjNSU1RsTUFCQVVNRFJBUkVoY2tLUzR3TWpVMk42akF3TURIeU1yTXpNM1AydHZkNU9qbzZldnI3UG93Z0hveUFBQUFBV0pMUjBRb3ZiQzFzZ0FBQUpWSlJFRlVLTSs5MGRzU2dpQVFnR0hJRGtCVW9xYVZHUlhFN3ZzL1lTZ3o1UURYL3BkOEhHWVdRcFpxTFE4K1dTVHJiNXl5TElJOTFqZGZpOGNJSlBZQVVLRWlPYmdhSjNKd2djRm9ua0wxdWNQak9Vcko1bytmMFFVUkNpMzlRV0ZSQ1QySjgzczIveVBzUkFnUDB2UnptT0xhRE5CQkNrUTQwMEVPRkRhUWd4TGJjVEIxQXN5R1ViNW9mQlhkalcxWGkvMzJGM1UzRVU2cG51L3pBQUFBQUVsRlRrU3VRbUNDJztcbmV4cG9ydCBjb25zdCBucyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQU1BQUFEWHFjM0tBQUFBbVZCTVZFVUFBQUQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vK29xN0t1c0xldnNyaVptNldkb2FtaXBhMmpwcTZUbDZDTmtacUlqSlgvLy85OGdZdi8vLy8vLy8vLy8vLy8vLzhQRnlyLy8vOGlwZHBNQUFBQU1YUlNUbE1BQVFJREJBVUhDVnBjWFY1ZmFHbDNnSUtEaElXSW1KeWRucCttcWFxeHVMdS92Ny9Bd01EQXdjTER4TVg3L1AzK3RWK0xZd0FBQUFGaVMwZEVNa0RTVE1nQUFBQy9TVVJCVkNqUGZaTFpFb0l3REVXaENsaEF4UVZGVkRZVkYxeEkvdi9qSkJiUlZ2QThkSmdjeUwwelJkTWFtT3N5clFWOWdSaXkxbm1XdHhnV1lBYVE0MG94YklrN0FES0JiQVppRG5CRUxnbU9GUUIwT25JMDl3c1NoVy9yYXJ4SHdwUGZIaE1KaWVUMXlNVlhOdGFJRE1KdWRzalVHenRGNTZxcUtsSFhKYmordnk1aER0OTFSNllrWnArTXVTUW05NHNvZEwxTkpXSEY1WjdtNTBkc0tTRlJlUUE0bFpHcHhoc2JURlBjR3IrWDNnc1IxLzIyMzRRNXp0ZTFQZ0VpK1NlbVRKRzF2d0FBQUFCSlJVNUVya0pnZ2c9PSc7XG4vLyDmk43kvZzmnaDmjIfpkohcbmV4cG9ydCBjb25zdCBDb250cm9sZXJDdXJzb3JzID0ge1xuICAgICdsJzogJycsXG4gICAgJ2x0JzogbndzZSxcbiAgICAndCc6IG5zLFxuICAgICd0cic6ICcnLFxuICAgICdyJzogJycsXG4gICAgJ3JiJzogbndzZSxcbiAgICAnYic6IG5zLFxuICAgICdsYic6ICcnLFxuICAgICdyb3RhdGUnOiAncG9pbnRlcicsXG4gICAgJ3NrZXcnOiAncG9pbnRlcicsXG4gICAgLy8g5qC55o2u6KeS5bqm5peL6L2s5oyH6ZKIXG4gICAgYXN5bmMgZ2V0KGRpciwgcm90YXRpb24gPSAwKSB7XG4gICAgICAgIGlmIChkaXIgPT09ICdyb3RhdGUnIHx8IGRpciA9PT0gJ3NrZXcnKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbZGlyXTtcbiAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0aW9uKSA+IGZ1bGxDaXJjbGVSYWRpdXMpXG4gICAgICAgICAgICByb3RhdGlvbiA9IHJvdGF0aW9uICUgZnVsbENpcmNsZVJhZGl1cztcbiAgICAgICAgLy8gMlBJIOS4uuS4gOS4quWchu+8jOaKiuinkuW6pui9rOS4uuS4gOS4quWchuWGheeahOWAvO+8jOS7peWFjemHjeWkjeeUn+aIkOWbvueJh1xuICAgICAgICBjb25zdCByb3RhdGlvbktleSA9IE51bWJlcihyb3RhdGlvbi50b0ZpeGVkKDIpKTsgLy8g57K+5bqm5Y+q5Y+W5bCP5pWwMuS9jVxuICAgICAgICBjb25zdCBrZXkgPSByb3RhdGlvbktleSA9PT0gMCA/IGRpciA6IGAke2Rpcn1fJHtyb3RhdGlvbktleX1gO1xuICAgICAgICBsZXQgY3Vyc29yID0gdGhpc1trZXldO1xuICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgaWYgKGRpciA9PT0gJ2wnIHx8IGRpciA9PT0gJ3InIHx8IGRpciA9PT0gJ3QnIHx8IGRpciA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5peL6L2s6KeS5bqm77yM5YiZ5oqKbnPovaw5MOW6puWNs+WPr1xuICAgICAgICAgICAgICAgIGlmIChyb3RhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IgPSBhd2FpdCB1dGlsLnJvdGF0ZUltYWdlKG5zLCBNYXRoLlBJIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbJ2wnXSA9IHRoaXNbJ3InXSA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5peL6L2s6KeS5bqm77yM5YiZ6I635Y+W5qCH5YeG55qE5YaN6L2s5a+55bqU55qE6KeS5bqmXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGF3YWl0IHRoaXMuZ2V0KGRpciwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IGF3YWl0IHV0aWwucm90YXRlSW1hZ2Uobm9ybWFsLCByb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaXIgPT09ICd0cicgfHwgZGlyID09PSAnbGInIHx8IGRpciA9PT0gJ2x0JyB8fCBkaXIgPT09ICdyYicpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInml4vovazop5LluqbvvIzliJnmiopud3Nl6L2sOTDluqbljbPlj69cbiAgICAgICAgICAgICAgICBpZiAocm90YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yID0gYXdhaXQgdXRpbC5yb3RhdGVJbWFnZShud3NlLCBNYXRoLlBJIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWyd0ciddID0gdGhpc1snbGInXSA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5peL6L2s6KeS5bqm77yM5YiZ6I635Y+W5qCH5YeG55qE5YaN6L2s5a+55bqU55qE6KeS5bqmXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGF3YWl0IHRoaXMuZ2V0KGRpciwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IGF3YWl0IHV0aWwucm90YXRlSW1hZ2Uobm9ybWFsLCByb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnNvcjtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IENvbnRyb2xJdGVtSWNvbnMgPSB7XG4gICAgJ3JvdGF0ZSc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQU1BQUFCZzNBbTFBQUFBZ1ZCTVZFVUFBQUFpSzlNaktkVWZLTllqS2RVaUtOWWlLZFVlSHVBaktOWWpLTllpS05ZeU1zd2lLTllpS05ZaUtOWWlLTlloS05ZaUtkVWlLTllpS05ZaktkVWpLTllnSjljakpkWWlLTllpS05ZaUtkVWhKOWNqS05ZaUtkVWRMTk1ySzlNaUtOWWlLTllpS2RVaUtOWWpLTllqS2RVaktkVWpLTllqS2RVaktkVWpLZGFVVzdlVkFBQUFLblJTVGxNQUZkTVkxL3Y0Q1BYbzR3WHV5TGg2UmZLUmpXcEFKeHlrYjF0U1RqQVJDOE9zbFlWZ09pdlFycWV5N2NhcUFBQUJNMGxFUVZSSXgrMlU2VzZETUJDRURkU0UrMndnOTUwZTMvcy9ZR09CUUkwaE1mK3FLdk9ESFlzWmU5ZGVyWGpoMzJDMlBzVStCSWN5Q3cza1ZoblJJVWozei9UdkVjVHAxUkdpenM0MkJKdkgra3FTYlB0bEZrUDUyTEZjMzUzb3NoQ1RNTThwSnpwY2h1dXdyTEVzOGZkRGVzOXpSaHdIMGdHOURiWTFraFIrT0tRZmQ5aGt1djROYnAvaHJGSUtYZStBTmViSWlIVzlnSmJvZDJmaE43elRxK1NocGIvM1V1c1EyZkdldU13NnJ0QnYxdnhyYVg5VWdOTndQVjFsME5PTm1iZE1kN2pVZW5rRnFSaHp5S0VyMy9EWkVOTkhEU091S3BxM3pabEVCZlBHM0VWY1ZEUnYvUlg1Vmt6Q0F2OWpraUZNeU8rR3dIYjFlT2d0NEt2cTEwNGh2ZXJKSU1zaGVhL0NHNjFYM3k2eWVEYjduSk1IeUNod1ZUaWExTFM3SEFNSitNbXlOcC9nTzJjbVh2akQrQUhwcmhwb0pLaVlZQUFBQUFCSlJVNUVya0pnZ2c9PScsXG4gICAgJ3NrZXcnOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FNQUFBQmczQW0xQUFBQWRWQk1WRVVBQUFCbFkvOTdlLzlrWXY5a1kvOW5aLzlsWS85a1l2OWtZLzlrWXY5a1kvOWxZLzlrWXY5a1kvOXBZUDlvWVA5a1l2OWtZdjlrWS85a1l2OWlZdjluWS85a1l2OWxZdjlrWXY5bFl2OWxZLzlrWXY5bFl2OWtZLzlrWXY5bFpmOWxZLzlrWXY5a1l2OWxZdjlrWXY5bFkvOWxZLytrdFFOUkFBQUFKblJTVGxNQS9BVHYzeEhtVy9WMFR0TzNraGNOeThYQlVoOFU2dGkrcHB0NWJrc25HVHF5Z21ORVowY3RwZFVBQUFFbVNVUkJWRWpIN1ZQYmxvSXdES1Nsb0FVcUY2a2dkMTIzLy8rSmEralNTcEdxRDc0eGJ5bkp5Y3hrY0RacytCSU9BYTJ5Z3JnSXVhUW9LeG9jYk4wM0Zvb0ZRblo3M3UxUklsWlFVRy9adnpzSkM5ekdhT2Vaa0VBSmE5b3U5ekQyOHE1dFdJS0VSRFpiMGt2dSszTVFtNXZqNEx5WFdoN2s0MlJjZS9WVzFGMWQrSjVnOWZJTGRkbXYyOWVYMFBHajZ2UmVSZGhtT0k3dUxha3FnV1RuV05HQlJGV0JvN2w5SUFlUnFnS0dGenVsQ3ppcmp5WkF4R1JiNi90SE0yR1JFcTFWQzdlV3R2cENvTjNNMW5xME5YM2d3QXQ5T0JpQUNmTndaS2FTUnlvYVZTVDB4SkJOMFVqTk16VkcrTkNvZzB6aG8wdFA0bm9lYndLUC8yenErTGw1QXd1TkFZcEV5SVpYditoSlUzSTRkMTdpaUtUb042RnMvV0RnZzM0ZGpRMGJ2bzQvbmFZdmdzOHhtdndBQUFBQVNVVk9SSzVDWUlJPSdcbn07XG4iLCJpbXBvcnQgRXZlbnRFbWl0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtIGV4dGVuZHMgRXZlbnRFbWl0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbiwgdGFyZ2V0T3B0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChvcHRpb24pXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbik7XG4gICAgICAgIGlmICh0YXJnZXRPcHRpb24pXG4gICAgICAgICAgICB0aGlzLmJpbmQodGFyZ2V0T3B0aW9uKTtcbiAgICB9XG4gICAgLy8g5ZON5bqU5Y+Y5YyW5o2i5YWD57Sg5ZKM5bGe5oCnXG4gICAgdGFyZ2V0cyA9IFtdO1xuICAgIC8vIHjlgY/np7vph49cbiAgICB0cmFuc2xhdGVYID0gMDtcbiAgICBnZXQgdHJhbnNsYXRlWFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKCR7dXRpbC50b1BYKHRoaXMudHJhbnNsYXRlWCl9KWA7XG4gICAgfVxuICAgIC8vIHnlgY/np7vph49cbiAgICB0cmFuc2xhdGVZID0gMDtcbiAgICBnZXQgdHJhbnNsYXRlWVN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVZKCR7dXRpbC50b1BYKHRoaXMudHJhbnNsYXRlWSl9KWA7XG4gICAgfVxuICAgIC8vIHrlgY/np7vph49cbiAgICB0cmFuc2xhdGVaID0gMDtcbiAgICBnZXQgdHJhbnNsYXRlWlN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVaKCR7dXRpbC50b1BYKHRoaXMudHJhbnNsYXRlWil9KWA7XG4gICAgfVxuICAgIHJvdGF0ZVggPSAwO1xuICAgIGdldCByb3RhdGVYU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYHJvdGF0ZVgoJHt1dGlsLnRvUmFkKHRoaXMucm90YXRlWCl9KWA7XG4gICAgfVxuICAgIHJvdGF0ZVkgPSAwO1xuICAgIGdldCByb3RhdGVZU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYHJvdGF0ZVkoJHt1dGlsLnRvUmFkKHRoaXMucm90YXRlWSl9KWA7XG4gICAgfVxuICAgIHJvdGF0ZVogPSAwO1xuICAgIGdldCByb3RhdGVaU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYHJvdGF0ZVooJHt1dGlsLnRvUmFkKHRoaXMucm90YXRlWil9KWA7XG4gICAgfVxuICAgIHNjYWxlWCA9IDE7XG4gICAgZ2V0IHNjYWxlWFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBzY2FsZVgoJHt0aGlzLnNjYWxlWH0pYDtcbiAgICB9XG4gICAgc2NhbGVZID0gMTtcbiAgICBnZXQgc2NhbGVZU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYHNjYWxlWSgke3RoaXMuc2NhbGVZfSlgO1xuICAgIH1cbiAgICBzY2FsZVogPSAxO1xuICAgIGdldCBzY2FsZVpTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgc2NhbGVaKCR7dGhpcy5zY2FsZVp9KWA7XG4gICAgfVxuICAgIHNrZXdYID0gMDtcbiAgICBnZXQgc2tld1hTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgc2tld1goJHt1dGlsLnRvUmFkKHRoaXMuc2tld1gpfSlgO1xuICAgIH1cbiAgICBza2V3WSA9IDA7XG4gICAgZ2V0IHNrZXdZU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYHNrZXdZKCR7dXRpbC50b1JhZCh0aGlzLnNrZXdZKX0pYDtcbiAgICB9XG4gICAgZnJvbShkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhKVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB9XG4gICAgLy8g55Sf5pWIXG4gICAgYXBwbHkodGFyZ2V0ID0gdGhpcy50YXJnZXRzKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5KHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldC50YXJnZXQgJiYgdGFyZ2V0LnRhcmdldC5jc3MpXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRhcmdldC5jc3MoJ3RyYW5zZm9ybScsIHRoaXMudG9TdHJpbmcodGFyZ2V0LndhdGNoUHJvcHMpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC50YXJnZXQpXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLnRvU3RyaW5nKHRhcmdldC53YXRjaFByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDnu5HlrprlubbliLfmlrDliLDnm67moIfkuIpcbiAgICBiaW5kKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICB0aGlzLmFwcGx5KHRhcmdldCk7XG4gICAgfVxuICAgIHVuYmluZCh0YXJnZXQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMudGFyZ2V0cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0c1tpXS50YXJnZXQgPT09IHRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOeUn+aIkHRyYW5zZm9ybeS7o+eQhlxuICAgIHN0YXRpYyBjcmVhdGVQcm94eShvYmogPSB7fSwgZWwpIHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybShvYmosIGVsKTtcbiAgICAgICAgLy8g5Luj55CG5aSE55CGXG4gICAgICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHRyYW5zZm9ybSwge1xuICAgICAgICAgICAgZ2V0KHRhcmdldCwgcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gdGFyZ2V0W3BdO1xuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh0YXJnZXQsIHAsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRhcmdldC5hcHBseSgpOyAvLyDnlJ/mlYhcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9XG4gICAgdG9TdHJpbmcod2F0Y2hQcm9wcykge1xuICAgICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgICAgaWYgKCF3YXRjaFByb3BzKSB7XG4gICAgICAgICAgICB3YXRjaFByb3BzID0gWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsIFwicm90YXRlWFwiLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXdYJywgJ3NrZXdZJ107XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBuIG9mIHdhdGNoUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG52ID0gdGhpc1tuICsgJ1N0cmluZyddO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW25dICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbnYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2gobnYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuam9pbignICcpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2xhdGVYOiB0aGlzLnRyYW5zbGF0ZVgsXG4gICAgICAgICAgICB0cmFuc2xhdGVZOiB0aGlzLnRyYW5zbGF0ZVksXG4gICAgICAgICAgICB0cmFuc2xhdGVaOiB0aGlzLnRyYW5zbGF0ZVosXG4gICAgICAgICAgICByb3RhdGVYOiB0aGlzLnJvdGF0ZVgsXG4gICAgICAgICAgICByb3RhdGVZOiB0aGlzLnJvdGF0ZVksXG4gICAgICAgICAgICByb3RhdGVaOiB0aGlzLnJvdGF0ZVosXG4gICAgICAgICAgICBzY2FsZVg6IHRoaXMuc2NhbGVYLFxuICAgICAgICAgICAgc2NhbGVZOiB0aGlzLnNjYWxlWSxcbiAgICAgICAgICAgIHNjYWxlWjogdGhpcy5zY2FsZVosXG4gICAgICAgICAgICBza2V3WDogdGhpcy5za2V3WCxcbiAgICAgICAgICAgIHNrZXdZOiB0aGlzLnNrZXdZLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCBKRWxlbWVudENzc1N0eWxlIGZyb20gJy4vc3R5bGVNYXAnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcic7XG5leHBvcnQgeyBFdmVudEVtaXR0ZXIsIEpFbGVtZW50Q3NzU3R5bGUgfTtcbiIsImltcG9ydCB7IENvbnRhaW5lckRlZmF1bHRTdHlsZSB9IGZyb20gJy4uL2NvbnN0YW50L3N0eWxlTWFwJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuLi9jb3JlL2VsZW1lbnQnO1xuLyoqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpCYXNlQ29tcG9uZW50IGV4dGVuZHMgSkVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbiA9IHt9KSB7XG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IG9wdGlvbi5zdHlsZSB8fCB7fTtcbiAgICAgICAgLy8gcG9zaXRpb27lkoxvdmVyZmxvd+mihOiuvueahOWAvOS8mOWFiOe6p+acgOmrmFxuICAgICAgICBvcHRpb24uc3R5bGUgPSBPYmplY3QuYXNzaWduKHsgLi4uQ29udGFpbmVyRGVmYXVsdFN0eWxlIH0sIG9wdGlvbi5zdHlsZSwge1xuICAgICAgICAgICAgcG9zaXRpb246IENvbnRhaW5lckRlZmF1bHRTdHlsZS5wb3NpdGlvbixcbiAgICAgICAgICAgIG92ZXJmbG93OiBDb250YWluZXJEZWZhdWx0U3R5bGUub3ZlcmZsb3dcbiAgICAgICAgfSk7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIC8vIOWkluWxguWPquWTjeW6lFrovbTml4vovaxcbiAgICAgICAgICAgIHRyYW5zZm9ybVdhdGNoUHJvcHM6IFtcbiAgICAgICAgICAgICAgICAncm90YXRlWicsICdzY2FsZVgnLCAnc2NhbGVZJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgICAgIG5vZGVUeXBlOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2otZGVzaWduLWVkaXRvci1jb250YWluZXInLFxuICAgICAgICAgICAgaXNDb21wb25lbnQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIG9wdGlvbi50YXJnZXQgPSBvcHRpb24udGFyZ2V0IHx8IHt9O1xuICAgICAgICAvLyDnlJ/miJDlvZPliY3mjqfliLbnmoTlhYPntKBcbiAgICAgICAgdGhpcy50YXJnZXQgPSBuZXcgSkVsZW1lbnQoe1xuICAgICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgLy8g5LiN5ZON5bqU5pys6Lqr55qE5Y+Y5o2i77yM5Y+q5ZON5bqU54i257qn55qEXG4gICAgICAgICAgICB0cmFuc2Zvcm1XYXRjaFByb3BzOiBbXSxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRhcmdldCk7XG4gICAgICAgIC8vIOWPmOaNouaUueS4uuaOp+WItuS4u+WFg+e0oFxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5iaW5kKHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICAgICAgICB3YXRjaFByb3BzOiBbXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZVgnLCAncm90YXRlWScsICd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAnc2tld1gnLCAnc2tld1knXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRhdGEub24oJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2RhdGFDaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGFDaGFuZ2UnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcyxcbiAgICAgICAgICAgICAgICBkYXRhOiBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOW9k+WJjeaOp+S7tueahOaguOW/g+WFg+e0oFxuICAgIHRhcmdldDtcbiAgICAvLyDpgInkuK1cbiAgICBfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkKHYpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB2O1xuICAgICAgICB0aGlzLmVtaXQoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHZcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOiuvue9rmNzc+WIsGRvbVxuICAgIHNldERvbVN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIC8vIOWmguaenOWkluWxguWuueWZqOeahOagt+W8j++8jOWImeWKoOWIsGNvbnRhaW5lcuS4ilxuICAgICAgICBpZiAobmFtZSBpbiBDb250YWluZXJEZWZhdWx0U3R5bGUgfHwgbmFtZSA9PT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgICAgICAgIHN1cGVyLnNldERvbVN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmNzcyhuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9KU09OKHByb3BzID0gW10pIHtcbiAgICAgICAgLy8g6L2sanNvbuW/veeVpea4suafk+e7hOS7tlxuICAgICAgICByZXR1cm4gc3VwZXIudG9KU09OKHByb3BzLCAoZWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbCAhPT0gdGhpcy50YXJnZXQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbmltcG9ydCBKRWxlbWVudCBmcm9tICcuL2VsZW1lbnQnO1xuaW1wb3J0IHsgdG9wWkluZGV4LCBDb250cm9sZXJDdXJzb3JzLCBDb250cm9sSXRlbUljb25zLCBmdWxsQ2lyY2xlUmFkaXVzIH0gZnJvbSAnLi4vY29uc3RhbnQvc3R5bGVNYXAnO1xuLy8g5o6n5Yi25YWD57Sg56e75Yqo5ZKM55+p6Zi15Y+Y5o2iXG5leHBvcnQgY2xhc3MgSkNvbnRyb2xsZXJJdGVtIGV4dGVuZHMgSkVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24uc3R5bGUgPSB7XG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSg2LDE1NSwxODEsMSknLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gICAgICAgICAgICAuLi5vcHRpb24uc3R5bGUsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICB9O1xuICAgICAgICBzdXBlcihvcHRpb24pO1xuICAgICAgICB0aGlzLmRpciA9IG9wdGlvbi5kaXIgfHwgJyc7XG4gICAgICAgIHRoaXMuc2l6ZSA9IG9wdGlvbi5zaXplIHx8IDg7XG4gICAgICAgIHRoaXMuZGF0YS53aWR0aCA9IHRoaXMuZGF0YS5oZWlnaHQgPSB0aGlzLnNpemU7XG4gICAgICAgIHRoaXMuZWRpdG9yID0gb3B0aW9uLmVkaXRvcjtcbiAgICAgICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EcmFnRW5kKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0aGlzLmVkaXRvci52aWV3Lm9uKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzLmVkaXRvci5kb20pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8g5LiN5pivb3V057yW6L6R5Zmo77yM5LiN5aSE55CGXG4gICAgICAgICAgICAgICAgdGhpcy5vbkRyYWdFbmQoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLnZpZXcub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRyYWdNb3ZlKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIOWmguaenOaYr+W3puWBpVxuICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRyYWdTdGFydChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpciA9ICcnO1xuICAgIHNpemUgPSA4O1xuICAgIF9pc01vdmluZyA9IGZhbHNlO1xuICAgIGdldCBpc01vdmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTW92aW5nO1xuICAgIH1cbiAgICBzZXQgaXNNb3Zpbmcodikge1xuICAgICAgICB0aGlzLl9pc01vdmluZyA9IHY7XG4gICAgfVxuICAgIC8vIOaLluaUvuS9jee9rlxuICAgIGRyYWdTdGFydFBvc2l0aW9uID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgIH07XG4gICAgb25EcmFnTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHBvcyA9IHtcbiAgICAgICAgICAgIHg6IGV2ZW50LnBhZ2VYIHx8IGV2ZW50LngsXG4gICAgICAgICAgICB5OiBldmVudC5wYWdlWSB8fCBldmVudC55LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvZmZYID0gKHBvcy54IC0gdGhpcy5kcmFnU3RhcnRQb3NpdGlvbi54KTtcbiAgICAgICAgY29uc3Qgb2ZmWSA9IChwb3MueSAtIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24ueSk7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgZGlyOiB0aGlzLmRpcixcbiAgICAgICAgICAgIG9mZlgsXG4gICAgICAgICAgICBvZmZZLFxuICAgICAgICAgICAgb2xkUG9zaXRpb246IHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24sXG4gICAgICAgICAgICBuZXdQb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgIHg6IHBvcy54LFxuICAgICAgICAgICAgICAgIHk6IHBvcy55XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOmAieS4reeahOaYr+a4suafk+WxgueahOWdkOagh++8jOi9rOS4uuaOp+WItuWxgueahFxuICAgICAgICB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnggPSBwb3MueDtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbi55ID0gcG9zLnk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBvbkRyYWdTdGFydChldmVudCkge1xuICAgICAgICBjb25zdCBwb3MgPSB7XG4gICAgICAgICAgICB4OiBldmVudC5wYWdlWCB8fCBldmVudC54LFxuICAgICAgICAgICAgeTogZXZlbnQucGFnZVkgfHwgZXZlbnQueSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6YCJ5Lit55qE5piv5riy5p+T5bGC55qE5Z2Q5qCH77yM6L2s5Li65o6n5Yi25bGC55qEXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiBwb3MueCxcbiAgICAgICAgICAgIHk6IHBvcy55XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIG9uRHJhZ0VuZChldmVudCwgcG9zID0gZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDorqHnrpfmjIfpkohcbiAgICBhc3luYyByZXNldEN1cnNvcihyb3RhdGlvbiA9IDApIHtcbiAgICAgICAgbGV0IGN1cnNvciA9IGF3YWl0IENvbnRyb2xlckN1cnNvcnMuZ2V0KHRoaXMuZGlyLCByb3RhdGlvbik7XG4gICAgICAgIGlmICghY3Vyc29yKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyDlhYjnroDljZXlpITnkIZcbiAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBjdXJzb3IuaW5jbHVkZXMoJ1xcLycpID8gYHVybCgke2N1cnNvcn0pIDEyIDEyLHBvaW50ZXJgIDogY3Vyc29yO1xuICAgIH1cbn1cbi8vIOWFg+e0oOWkp+Wwj+S9jee9ruaOp+WItuWZqFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSkNvbnRyb2xsZXJDb21wb25lbnQgZXh0ZW5kcyBKQ29udHJvbGxlckl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICBvcHRpb24uc3R5bGUgPSB7XG4gICAgICAgICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIC4uLm9wdGlvbi5zdHlsZSxcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9uLmRpciA9ICdlbGVtZW50JztcbiAgICAgICAgb3B0aW9uLmRhdGEgPSB7XG4gICAgICAgICAgICAuLi5vcHRpb24uZGF0YSxcbiAgICAgICAgICAgIHpJbmRleDogdG9wWkluZGV4XG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgICAgIGlmICghdGhpcy5lZGl0b3IuZWRpdGFibGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuaW5pdChvcHRpb24pO1xuICAgICAgICB0aGlzLmVkaXRvci5kb20uYXBwZW5kQ2hpbGQodGhpcy5kb20pO1xuICAgICAgICB0aGlzLnJlc2V0Q3Vyc29yKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopO1xuICAgIH1cbiAgICBpbml0KG9wdGlvbikge1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2wnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb24uaXRlbVN0eWxlLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ2x0Jywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9uLml0ZW1TdHlsZSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ3QnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb24uaXRlbVN0eWxlLFxuICAgICAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oJ3RyJywge1xuICAgICAgICAgICAgc2hhcGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9uLml0ZW1TdHlsZSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgncicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbi5pdGVtU3R5bGUsXG4gICAgICAgICAgICAgICAgbGVmdDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdyYicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbi5pdGVtU3R5bGUsXG4gICAgICAgICAgICAgICAgbGVmdDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHRvcDogJzEwMCUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSgnYicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbi5pdGVtU3R5bGUsXG4gICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgdG9wOiAnMTAwJScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtKCdsYicsIHtcbiAgICAgICAgICAgIHNoYXBlOiAncmVjdCcsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbi5pdGVtU3R5bGUsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6ICcxMDAlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAnLTUwJScsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogJy01MCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDml4vovazlnZdcbiAgICAgICAgdGhpcy5yb3RhdGVJdGVtID0gdGhpcy5jcmVhdGVJdGVtKCdyb3RhdGUnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICBzaXplOiAyNCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgdG9wOiAnLTQwcHgnLFxuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMCAycHggMnB4ICNjY2MnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBgcG9pbnRlcmAsXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9uLml0ZW1TdHlsZSxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZFNpemUnOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBDb250cm9sSXRlbUljb25zLnJvdGF0ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zZm9ybToge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2tld0l0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0oJ3NrZXcnLCB7XG4gICAgICAgICAgICBzaGFwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICBzaXplOiAyNCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDAgMnB4IDJweCAjY2NjJyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogYHBvaW50ZXJgLFxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbi5pdGVtU3R5bGUsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmRTaXplJzogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogQ29udHJvbEl0ZW1JY29ucy5za2V3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgLy8g5peL6L2s5Z2XIFxuICAgICAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0VkaXRvciB8fCBlLmJ1dHRvbiA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDkuI3mmK/nvJbovpHlmajvvIzkuI3lpITnkIZcbiAgICAgICAgICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXRlbXMgPSBbXTtcbiAgICByb3RhdGVJdGVtO1xuICAgIHNrZXdJdGVtO1xuICAgIHRhcmdldDtcbiAgICAvLyDpgInmi6nmoYbovrnot51cbiAgICBwYWRkaW5nU2l6ZSA9IDA7XG4gICAgaXNFZGl0b3IgPSBmYWxzZTsgLy8g5b2T5YmN5YWz6IGU5piv5ZCm5piv57yW6L6R5ZmoXG4gICAgZ2V0IGNlbnRlcigpIHtcbiAgICAgICAgY29uc3QgY2VudGVyID0ge1xuICAgICAgICAgICAgeDogdXRpbC50b051bWJlcih0aGlzLmRhdGEubGVmdCkgKyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgLyAyLFxuICAgICAgICAgICAgeTogdXRpbC50b051bWJlcih0aGlzLmRhdGEudG9wKSArIHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmhlaWdodCkgLyAyLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY2VudGVyO1xuICAgIH1cbiAgICAvLyDnlJ/miJDmjqfliLbngrlcbiAgICBjcmVhdGVJdGVtKGlkLCBvcHRpb24pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBKQ29udHJvbGxlckl0ZW0oe1xuICAgICAgICAgICAgZGlyOiBpZCxcbiAgICAgICAgICAgIGVkaXRvcjogdGhpcy5lZGl0b3IsXG4gICAgICAgICAgICAuLi5vcHRpb25cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGl0ZW0ub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNoYW5nZShlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW0ucmVzZXRDdXJzb3IodGhpcy50cmFuc2Zvcm0ucm90YXRlWik7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICAvLyDlj5HnlJ/mlLnlj5jlk43lupRcbiAgICBjaGFuZ2UoZSkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgeyBkaXIsIG9mZlgsIG9mZlksIH0gPSBlO1xuICAgICAgICAvLyDlvZPliY3np7vliqjlr7nljp/lr7nosaHnmoTmlLnlj5hcbiAgICAgICAgY29uc3QgYXJncyA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICAgIHNrZXc6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5jZW50ZXI7XG4gICAgICAgIGlmIChkaXIgPT09ICdyb3RhdGUnKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZUNoYW5nZShlLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXIgPT09ICdlbGVtZW50Jykge1xuICAgICAgICAgICAgLy8g5YWD57Sg5L2N572u5o6n5Yi25ZmoXG4gICAgICAgICAgICBhcmdzLnggPSBvZmZYO1xuICAgICAgICAgICAgYXJncy55ID0gb2ZmWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWFiOWbnuWOn+WdkOagh++8jOWGjeS4u+eul+WBj+enu+mHj++8jOi/meagt+S/neivgeaTjeS9nOabtOWuueaYk+eQhuino1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldFJvdGF0ZUV2ZW50UG9zaXRpb24oZSwgdGhpcy50cmFuc2Zvcm0ucm90YXRlWiwgY2VudGVyKTtcbiAgICAgICAgICAgICAgICBvZmZYID0gcG9zLm9mZlg7XG4gICAgICAgICAgICAgICAgb2ZmWSA9IHBvcy5vZmZZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChkaXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLndpZHRoID0gLW9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICd0Jzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnkgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLmhlaWdodCA9IC1vZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncic6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IG9mZlg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdiJzoge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLmhlaWdodCA9IG9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdsdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy54ID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IC1vZmZYO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnkgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLmhlaWdodCA9IC1vZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAndHInOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnkgPSBvZmZZO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLmhlaWdodCA9IC1vZmZZO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncmInOiB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Mud2lkdGggPSBvZmZYO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLmhlaWdodCA9IG9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdsYic6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncy54ID0gb2ZmWDtcbiAgICAgICAgICAgICAgICAgICAgYXJncy53aWR0aCA9IC1vZmZYO1xuICAgICAgICAgICAgICAgICAgICBhcmdzLmhlaWdodCA9IG9mZlk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdza2V3Jzoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByeCA9IG9mZlggLyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByeSA9IG9mZlkgLyB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5oZWlnaHQpICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5za2V3LnggPSByeTtcbiAgICAgICAgICAgICAgICAgICAgYXJncy5za2V3LnkgPSByeDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOS9jeenu1xuICAgICAgICBpZiAoYXJncy54IHx8IGFyZ3MueSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGFyZ3MueCwgYXJncy55KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy53aWR0aCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgKyBhcmdzLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5kYXRhLndpZHRoID0gTWF0aC5tYXgod2lkdGgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmhlaWdodCA9IE1hdGgubWF4KHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmhlaWdodCkgKyBhcmdzLmhlaWdodCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3Q2VudGVyID0gdGhpcy5jZW50ZXI7XG4gICAgICAgIC8vIOWmguaenOS4reW/g+WPkeeUn+S6huWBj+enu++8jOWImeaWsOS4reW/g+eCueimgeenu+WIsOe7leWOn+S4reW/g+eCueaXi+i9rOW9k+WJjeaXi+i9rOinkuW6pueahOeCue+8jOaJjeS4vuS9v+WbvuW9ouenu+WKqOS4jeato+W4uFxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0ucm90YXRlWiAmJiAobmV3Q2VudGVyLnggIT09IGNlbnRlci54IHx8IG5ld0NlbnRlci55ICE9PSBjZW50ZXIueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldENlbnRlciA9IHV0aWwucm90YXRlUG9pbnRzKHsgLi4ubmV3Q2VudGVyIH0sIGNlbnRlciwgdGhpcy50cmFuc2Zvcm0ucm90YXRlWik7XG4gICAgICAgICAgICB0aGlzLm1vdmUodGFyZ2V0Q2VudGVyLnggLSBuZXdDZW50ZXIueCwgdGFyZ2V0Q2VudGVyLnkgLSBuZXdDZW50ZXIueSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8geCx55peL6L2sXG4gICAgICAgIGlmIChhcmdzLnNrZXcueCB8fCBhcmdzLnNrZXcueSkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVggKz0gYXJncy5za2V3Lng7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50cmFuc2Zvcm0ucm90YXRlWSArPSBhcmdzLnNrZXcueTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5hcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwbHlUb1RhcmdldCgpO1xuICAgIH1cbiAgICAvLyDlm6DkuLrml4vovazlkI7lnZDmoIfopoHlm57ljp/miY3lpb3orqHnrpfmk43kvZzvvIxcbiAgICBnZXRSb3RhdGVFdmVudFBvc2l0aW9uKGUsIHJvdGF0aW9uID0gdGhpcy50cmFuc2Zvcm0ucm90YXRlWiwgY2VudGVyID0gdGhpcy5jZW50ZXIpIHtcbiAgICAgICAgbGV0IHsgb2ZmWCwgb2ZmWSwgb2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uIH0gPSBlO1xuICAgICAgICAvLyDlhYjlm57ljp/lnZDmoIfvvIzlho3kuLvnrpflgY/np7vph4/vvIzov5nmoLfkv53or4Hmk43kvZzmm7TlrrnmmJPnkIbop6NcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBbcG9zMSwgcG9zMl0gPSB1dGlsLnJvdGF0ZVBvaW50cyhbb2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uXSwgY2VudGVyLCAtcm90YXRpb24pO1xuICAgICAgICAgICAgb2ZmWCA9IHBvczIueCAtIHBvczEueDtcbiAgICAgICAgICAgIG9mZlkgPSBwb3MyLnkgLSBwb3MxLnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZlgsXG4gICAgICAgICAgICBvZmZZLFxuICAgICAgICAgICAgY2VudGVyXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIOWPkeeUn+aXi+i9rFxuICAgIHJvdGF0ZUNoYW5nZShlLCBhcmdzKSB7XG4gICAgICAgIGNvbnN0IHsgb2xkUG9zaXRpb24sIG5ld1Bvc2l0aW9uIH0gPSBlO1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB7XG4gICAgICAgICAgICB4OiB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS5sZWZ0KSArIHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLndpZHRoKSAvIDIsXG4gICAgICAgICAgICB5OiB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS50b3ApICsgdXRpbC50b051bWJlcih0aGlzLmRhdGEuaGVpZ2h0KSAvIDIsXG4gICAgICAgIH07XG4gICAgICAgIC8vIOe8lui+keWZqOWdkOagh1xuICAgICAgICBjb25zdCBwb3MxID0gdGhpcy5lZGl0b3IudG9FZGl0b3JQb3NpdGlvbihvbGRQb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHBvczIgPSB0aGlzLmVkaXRvci50b0VkaXRvclBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgLy8g5Zug5Li6Y2VudGVy5piv55u45a+55LqO57yW6L6R5Zmo55qE77yM5omA5Lul5LqL5Lu25Z2Q5qCH5Lmf6ZyA6KaB6L2s5Yiw57yW6L6R5ZmoXG4gICAgICAgIGNvbnN0IGN4MSA9IHBvczEueCAtIGNlbnRlci54O1xuICAgICAgICBjb25zdCBjeTEgPSBwb3MxLnkgLSBjZW50ZXIueTtcbiAgICAgICAgbGV0IGFuZ2xlMSA9IE1hdGguYXRhbihjeTEgLyBjeDEpO1xuICAgICAgICBjb25zdCBjeDIgPSBwb3MyLnggLSBjZW50ZXIueDtcbiAgICAgICAgY29uc3QgY3kyID0gcG9zMi55IC0gY2VudGVyLnk7XG4gICAgICAgIGxldCBhbmdsZTIgPSBNYXRoLmF0YW4oY3kyIC8gY3gyKTtcbiAgICAgICAgaWYgKGFuZ2xlMSA+PSAwICYmIGFuZ2xlMiA8IDApIHtcbiAgICAgICAgICAgIGlmIChjeDEgPj0gMCAmJiBjeTEgPj0gMCAmJiBjeDIgPD0gMCAmJiBjeTIgPj0gMClcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSBNYXRoLlBJICsgYW5nbGUyO1xuICAgICAgICAgICAgZWxzZSBpZiAoY3gxIDw9IDAgJiYgY3kxIDw9IDAgJiYgY3gyID49IDAgJiYgY3kyIDw9IDApXG4gICAgICAgICAgICAgICAgYW5nbGUyID0gTWF0aC5QSSArIGFuZ2xlMjtcbiAgICAgICAgICAgIC8vZWxzZSBpZihjeDEgPD0gMCAmJiBjeTEgPD0wICYmIGN4MiA+PSAwICYmIGN5MiA+PSAwKSBhbmdsZTIgPSBNYXRoLlBJICsgYW5nbGUyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFuZ2xlMSA8PSAwICYmIGFuZ2xlMiA+PSAwKSB7XG4gICAgICAgICAgICBpZiAoY3gxID49IDAgJiYgY3kxIDw9IDAgJiYgY3gyIDwgMClcbiAgICAgICAgICAgICAgICBhbmdsZTIgPSBhbmdsZTIgLSBNYXRoLlBJO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGFuZ2xlMiA9IC1hbmdsZTI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYW5nbGUxID49IDAgJiYgYW5nbGUyID4gMCkge1xuICAgICAgICAgICAgLy9pZihjeTIgPT09IDApIGFuZ2xlMiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgYXJncy5yb3RhdGlvbiA9IGFuZ2xlMiAtIGFuZ2xlMTtcbiAgICAgICAgaWYgKGFyZ3Mucm90YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnJvdGF0ZVogKz0gYXJncy5yb3RhdGlvbjtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnRyYW5zZm9ybS5yb3RhdGVaKSA+IGZ1bGxDaXJjbGVSYWRpdXMpXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ucm90YXRlWiA9IHRoaXMudHJhbnNmb3JtLnJvdGF0ZVogJSBmdWxsQ2lyY2xlUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0uYXBwbHkoKTtcbiAgICAgICAgICAgIC8vIOWPkeeUn+S6huaXi+i9rO+8jOimgeWkhOeQhuaMh+mSiOWbvuagh1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnJlc2V0Q3Vyc29yKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOaKiuWPmOaNouW6lOeUqOWIsOebruagh+WFg+e0oFxuICAgIGFwcGx5VG9UYXJnZXQoKSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHBvcyA9IHtcbiAgICAgICAgICAgIHg6IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLmxlZnQpICsgKHRoaXMuaXNFZGl0b3IgPyB1dGlsLnRvTnVtYmVyKHRoaXMudGFyZ2V0LmRhdGEubGVmdCkgOiAwKSxcbiAgICAgICAgICAgIHk6IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLnRvcCkgKyAodGhpcy5pc0VkaXRvciA/IHV0aWwudG9OdW1iZXIodGhpcy50YXJnZXQuZGF0YS50b3ApIDogMClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50YXJnZXQuZGF0YS5sZWZ0ID0gcG9zLng7XG4gICAgICAgIHRoaXMudGFyZ2V0LmRhdGEudG9wID0gcG9zLnk7XG4gICAgICAgIC8vIOe8lui+keWZqOebuOWvueS9jee9ruS4gOebtOaYrzBcbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5sZWZ0ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGF0YS50b3AgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybS5mcm9tKHtcbiAgICAgICAgICAgIC8vc2tld1g6IHRoaXMudHJhbnNmb3JtLnNrZXdYLFxuICAgICAgICAgICAgLy9za2V3WTogdGhpcy50cmFuc2Zvcm0uc2tld1ksXG4gICAgICAgICAgICByb3RhdGVaOiB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB1dGlsLnRvTnVtYmVyKHRoaXMuZGF0YS53aWR0aCkgLSB0aGlzLnBhZGRpbmdTaXplICogMjtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEuaGVpZ2h0KSAtIHRoaXMucGFkZGluZ1NpemUgKiAyO1xuICAgICAgICBpZiAodGhpcy50YXJnZXQuZGF0YS53aWR0aCAhPT0gd2lkdGgpXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5kYXRhLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5kYXRhLmhlaWdodCAhPT0gaGVpZ2h0KVxuICAgICAgICAgICAgdGhpcy50YXJnZXQuZGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIC8vIOmHjee9rlxuICAgIHJlc2V0KGlzRWRpdG9yID0gdGhpcy5pc0VkaXRvcikge1xuICAgICAgICB0aGlzLmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnRhcmdldDtcbiAgICAgICAgLy8g57yW6L6R5Zmo5LiN6K6p5peL6L2s5ZKMc2tld1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgaXRlbS5pc01vdmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNmb3JtLmZyb20oe1xuICAgICAgICAgICAgcm90YXRlWjogMCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOe7keWumuWIsOaTjeS9nOeahOWvueixoVxuICAgIGJpbmQodGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0LmVkaXRhYmxlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzRWRpdG9yID0gdGFyZ2V0ID09PSB0aGlzLmVkaXRvcjtcbiAgICAgICAgdGhpcy5yZXNldCh0aGlzLmlzRWRpdG9yKTtcbiAgICAgICAgLy8g57yW6L6R5Zmo55qE6K+d77yM6ZyA6KaB5oqK5a6D55qE5Z2Q5qCH6L2s5Li655u45a+55LqO5a655Zmo55qEXG4gICAgICAgIGNvbnN0IHBvcyA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmlzRWRpdG9yID8gMCA6IHV0aWwudG9OdW1iZXIodGFyZ2V0LmRhdGEubGVmdCkpLFxuICAgICAgICAgICAgeTogKHRoaXMuaXNFZGl0b3IgPyAwIDogdXRpbC50b051bWJlcih0YXJnZXQuZGF0YS50b3ApKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGEubGVmdCA9IHBvcy54O1xuICAgICAgICB0aGlzLmRhdGEudG9wID0gcG9zLnk7XG4gICAgICAgIHRoaXMuZGF0YS53aWR0aCA9IHV0aWwudG9OdW1iZXIodGFyZ2V0LmRhdGEud2lkdGgpICsgdGhpcy5wYWRkaW5nU2l6ZSAqIDI7XG4gICAgICAgIHRoaXMuZGF0YS5oZWlnaHQgPSB1dGlsLnRvTnVtYmVyKHRhcmdldC5kYXRhLmhlaWdodCkgKyB0aGlzLnBhZGRpbmdTaXplICogMjtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uZnJvbSh7XG4gICAgICAgICAgICAvLyByb3RhdGVYOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVgsXG4gICAgICAgICAgICAvLyByb3RhdGVZOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVksXG4gICAgICAgICAgICByb3RhdGVaOiB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVosXG4gICAgICAgICAgICAvL3NjYWxlWDogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVgsXG4gICAgICAgICAgICAvL3NjYWxlWTogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVksXG4gICAgICAgICAgICAvL3NjYWxlWjogdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVosXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5kYXRhLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAvLyDnvJbovpHlmajkuI3orqnml4vovazlkoxza2V3XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtLmRhdGEudmlzaWJsZSA9ICF0aGlzLmlzRWRpdG9yICYmIHRhcmdldC5lZGl0YWJsZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzmmK/nvJbovpHlmajvvIzliJnkuI3og73mjZXojrfkuovku7ZcbiAgICAgICAgLyp0aGlzLmNzcyh7XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiB0aGlzLmlzRWRpdG9yPyAnbm9uZScgOiAnYXV0bydcbiAgICAgICAgfSk7Ki9cbiAgICB9XG4gICAgLy8g6Kej6Zmk57uR5a6aXG4gICAgdW5iaW5kKHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdGVyIGZyb20gJy4uL2NvbnN0YW50L2V2ZW50RW1pdHRlcic7XG5pbXBvcnQgSlRyYW5zZm9ybSBmcm9tICcuLi9jb25zdGFudC90cmFuc2Zvcm0nO1xuaW1wb3J0IEpTdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB1dGlsIGZyb20gJy4uL2xpYi91dGlsJztcbmltcG9ydCBKRXZlbnQgZnJvbSAnLi4vY29yZS9ldmVudCc7XG5pbXBvcnQgeyBKRWxlbWVudERhdGEgfSBmcm9tICcuLi9jb25zdGFudC9kYXRhJztcbi8qKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKRWxlbWVudCBleHRlbmRzIEV2ZW50RW1pdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24gPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9pZCA9IHRoaXMuaWQgfHwgb3B0aW9uLmlkIHx8IHV0aWwudXVpZCgpO1xuICAgICAgICB0aGlzLl90eXBlID0gdGhpcy50eXBlIHx8IG9wdGlvbi50eXBlIHx8ICcnO1xuICAgICAgICBjb25zdCBub2RlVHlwZSA9IG9wdGlvbi5ub2RlVHlwZSB8fCAnZGl2JztcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLl9kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcbiAgICAgICAgaWYgKG9wdGlvbi5lZGl0b3IpXG4gICAgICAgICAgICB0aGlzLmVkaXRvciA9IG9wdGlvbi5lZGl0b3I7XG4gICAgICAgIC8vIOagt+W8j+S7o+eQhuWkhOeQhlxuICAgICAgICB0aGlzLnN0eWxlID0gSlN0eWxlLmNyZWF0ZVByb3h5KCk7XG4gICAgICAgIHRoaXMuc3R5bGUub24oJ2NoYW5nZScsIChzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldERvbVN0eWxlKHMubmFtZSwgcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3N0eWxlQ2hhbmdlJywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHlsZUNoYW5nZScsXG4gICAgICAgICAgICAgICAgZGF0YTogcyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5Y+Y5o2i5o6n5Yi255qE5piv5qC45b+D5YWD57SgXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gSlRyYW5zZm9ybS5jcmVhdGVQcm94eShvcHRpb24udHJhbnNmb3JtLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICAgICAgICAvLyDlpoLmnpzmjIflrprkuoblj6rlk43lupTmn5Dlh6DkuKrlsZ7mgKdcbiAgICAgICAgICAgIHdhdGNoUHJvcHM6IG9wdGlvbi50cmFuc2Zvcm1XYXRjaFByb3BzXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkYXRhVHlwZSA9IG9wdGlvbi5kYXRhVHlwZSB8fCBKRWxlbWVudERhdGE7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5kYXRhID0gSkVsZW1lbnREYXRhLmNyZWF0ZVByb3h5KG5ldyBkYXRhVHlwZSgpKTtcbiAgICAgICAgLy8g5aaC5p6c5piv57uE5Lu277yM5LiN5Zyo6L+Z6YeM6L+b6KGM5pWw5o2u5Yid5aeL5YyW6LCD55SoXG4gICAgICAgIHRoaXMuaW5pdERhdGEob3B0aW9uKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAob3B0aW9uLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIHRoaXMuY2xhc3NOYW1lID0gb3B0aW9uLmNsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnQoKTsgLy8g5LqL5Lu257uR5a6aXG4gICAgfVxuICAgIC8vIOWIneWni+WMluS4gOS6m+WfuuehgOWxnuaAp1xuICAgIGluaXREYXRhKG9wdGlvbikge1xuICAgICAgICAvLyDlsZ7mgKflj5jljJbmmKDlsITliLBzdHlsZVxuICAgICAgICB0aGlzLmRhdGEud2F0Y2goW1xuICAgICAgICAgICAgJ2xlZnQnLCAndG9wJywgJ3dpZHRoJywgJ2hlaWdodCcsICd6SW5kZXgnLCAndmlzaWJsZSdcbiAgICAgICAgXSwge1xuICAgICAgICAgICAgc2V0OiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICd2aXNpYmxlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBpdGVtLnZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5uYW1lID09PSAncm90YXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnJvdGF0ZVogPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpdGVtLm5hbWUgPT09ICdhbmdsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ucm90YXRlWiA9IHV0aWwuZGVnVG9SYWQoaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZVtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICd3aWR0aCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHcgPSB0aGlzLnN0eWxlLndpZHRoIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoIXcgfHwgdyA9PT0gJ2F1dG8nKSAmJiB0aGlzLmRvbSAmJiB0aGlzLmRvbS5jbGllbnRXaWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRvbS5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoID0gdGhpcy5zdHlsZS5oZWlnaHQgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCghaCB8fCBoID09PSAnYXV0bycpICYmIHRoaXMuZG9tICYmIHRoaXMuZG9tLmNsaWVudEhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRvbS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAncm90YXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybS5yb3RhdGVaO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAnYW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsLnJhZFRvRGVnKHRoaXMudHJhbnNmb3JtLnJvdGF0ZVopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZVtuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb24uc3R5bGUpXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmFwcGx5KG9wdGlvbi5zdHlsZSk7XG4gICAgICAgIGlmIChvcHRpb24uZWRpdGFibGUgPT09IGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9uLnZpc2libGUgPT09IGZhbHNlKVxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb24uZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmZyb20ob3B0aW9uLmRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOe7keWumuS6i+S7tlxuICAgIGJpbmRFdmVudChkb20pIHtcbiAgICAgICAgLy8g5LqL5Lu25omY566hXG4gICAgICAgIHRoaXMuZXZlbnQgPSBuZXcgSkV2ZW50KGRvbSB8fCB0aGlzLmRvbSk7XG4gICAgICAgIHRoaXMuZXZlbnQuaW5pdCgoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNldXAnKSB7XG4gICAgICAgICAgICAgICAgLy8g5Y+z5YGl5YiZ5Y+W5raI6YCJ5oupXG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ICYmIGUuYnV0dG9uID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoZS50eXBlLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9pZCA9ICcnO1xuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICAvLyDnsbvlnovlkI3np7BcbiAgICBfdHlwZSA9ICcnO1xuICAgIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgLy8g5a2Q5YWD57SgXG4gICAgX2NoaWxkcmVuID0gW107XG4gICAgZ2V0IGNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gICAgfVxuICAgIC8vIOaOp+S7tuacgOWkluWxgueahOWuueWZqFxuICAgIF9kb207XG4gICAgZ2V0IGRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbTtcbiAgICB9XG4gICAgLy8g54i25YWD57SgXG4gICAgcGFyZW50O1xuICAgIC8vIOW9k+WJjee8lui+keWZqFxuICAgIGVkaXRvcjtcbiAgICAvLyDkuovku7blpITnkIZcbiAgICBldmVudDtcbiAgICAvLyDmoLflvI/ku6PnkIZcbiAgICBzdHlsZTtcbiAgICBkYXRhO1xuICAgIGdldCBjbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbS5jbGFzc05hbWU7XG4gICAgfVxuICAgIHNldCBjbGFzc05hbWUodikge1xuICAgICAgICB0aGlzLmRvbS5jbGFzc05hbWUgPSB2O1xuICAgIH1cbiAgICBnZXQgdmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS52aXNpYmxlO1xuICAgIH1cbiAgICBzZXQgdmlzaWJsZSh2KSB7XG4gICAgICAgIHRoaXMuZGF0YS52aXNpYmxlID0gdjtcbiAgICB9XG4gICAgLy8g5piv5ZCm5Y+v57yW6L6RXG4gICAgZWRpdGFibGUgPSB0cnVlO1xuICAgIC8vIOWPmOaNolxuICAgIHRyYW5zZm9ybTtcbiAgICAvLyDorr7nva5jc3PliLBkb21cbiAgICBzZXREb21TdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ2JhY2tncm91bmRJbWFnZScgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghL15cXHMqdXJsXFwoLy50ZXN0KHZhbHVlKSlcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGB1cmwoJHt2YWx1ZX0pYDtcbiAgICAgICAgfVxuICAgICAgICB1dGlsLmNzcyh0aGlzLmRvbSwgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICAvLyDorr7nva7moLflvI9cbiAgICBjc3MobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdXRpbC5jc3ModGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8gZG9t5bGe5oCnXG4gICAgYXR0cihuYW1lLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdXRpbC5hdHRyKHRoaXMuZG9tLCBuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIC8vIOenu+S9jVxuICAgIG1vdmUoZHgsIGR5KSB7XG4gICAgICAgIHRoaXMuZGF0YS5sZWZ0ID0gdXRpbC50b051bWJlcih0aGlzLmRhdGEubGVmdCkgKyBkeDtcbiAgICAgICAgdGhpcy5kYXRhLnRvcCA9IHV0aWwudG9OdW1iZXIodGhpcy5kYXRhLnRvcCkgKyBkeTtcbiAgICAgICAgdGhpcy5lbWl0KCdtb3ZlJywgeyBkeCwgZHkgfSk7XG4gICAgfVxuICAgIC8vIOmHjee9ruWkp+Wwj1xuICAgIHJlc2l6ZSh3LCBoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS53aWR0aCA9IHc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmhlaWdodCA9IGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5paw5aKe5a2Q5YWD57SgXG4gICAgYWRkQ2hpbGQoY2hpbGQsIHBhcmVudCA9IHRoaXMpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEpFbGVtZW50KSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICBwYXJlbnQuZG9tLmFwcGVuZENoaWxkKGNoaWxkLmRvbSk7XG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgcGFyZW50LmRvbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g56e76Zmk6Ieq5beyXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9XG4gICAgLy8g56e76Zmk5a2Q5YWD57SgXG4gICAgcmVtb3ZlQ2hpbGQoZWwpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZWwuZG9tICYmIGVsLmRvbS5wYXJlbnRFbGVtZW50ID09PSB0aGlzLmRvbSlcbiAgICAgICAgICAgIHRoaXMuZG9tLnJlbW92ZUNoaWxkKGVsLmRvbSB8fCBlbCk7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGlsZHJlbltpXSA9PT0gZWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGVsZXRlIGVsLnBhcmVudDtcbiAgICB9XG4gICAgLy8g6L2s5Li6anNvblxuICAgIHRvSlNPTihwcm9wcyA9IFtdLCBpZyA9IChwKSA9PiB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IFsndHlwZScsICdkYXRhJywgJ3N0eWxlJywgJ3RyYW5zZm9ybScsICdpZCcsIC4uLnByb3BzXTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBmaWVsZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzW2tdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBvYmpba10gPSB0aGlzW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodiAmJiB2LnRvSlNPTikge1xuICAgICAgICAgICAgICAgIG9ialtrXSA9IHYudG9KU09OKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcyB8fCBpZyhjaGlsZCkgPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBvYmouY2hpbGRyZW4ucHVzaChjaGlsZC50b0pTT04oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXMudG9KU09OKCk7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH1cbiAgICB0b0h0bWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbS5vdXRlckhUTUw7XG4gICAgfVxuICAgIC8vIOS4ouW8g1xuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIHRoaXMuZXZlbnQuZGlzcG9zZSgpO1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgU3VwcG9ydEV2ZW50TmFtZXMgPSBbXG4gICAgJ21vdXNlZG93bicsICdtb3VzZXVwJywgJ21vdXNlb3ZlcicsICdtb3VzZW1vdmUnLCAnbW91c2VvdXQnLCAnbW91c2V3aGVlbCcsICdjbGljaycsICdkYmxjbGljaycsICdrZXlkb3duJywgJ2tleXByZXNzJywgJ2tleXVwJywgJ2JsdXInLCAnY2hhbmdlJywgJ2ZvY3VzJywgJ2RyYWcnLCAnZHJhZ2VudGVyJywgJ2RyYWdsZWF2ZScsICdkcmFnb3ZlcicsICdkcmFnc3RhcnQnLCAnZHJvcCcsICdjb250ZXh0bWVudSdcbl07XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSkV2ZW50IHtcbiAgICB0YXJnZXQ7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQpXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB9XG4gICAgLy8g6KeE6IyD5YyW5LqL5Lu25ZCNXG4gICAgbm9ybWFsaXplRXZlbnROYW1lcyhuYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQgfHwgIW5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXZlbnRzID0gbmFtZTtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZXZlbnRzID0gbmFtZS5zcGxpdCgnICcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOi/h+a7pOaOieS4jeaUr+aMgeeahOS6i+S7tlxuICAgICAgICByZXR1cm4gZXZlbnRzLmZpbHRlcihrID0+IFN1cHBvcnRFdmVudE5hbWVzLmluY2x1ZGVzKGspKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5omA5pyJ5pSv5oyB55qE5LqL5Lu277yM5ZyoaW5pdOS5i+WJjeS4jeimgW9u77yM5LiN54S25ZyoaW5pdOeahOaXtuWAmeS8muiiq+mHiuaUvuaOieOAglxuICAgICAqIEBwYXJhbSBoYW5kbGVyIC0g5LqL5Lu25aSE55CG5Ye95pWwXG4gICAgICogQHBhcmFtIHRhcmdldCAtIOWFg+e0oFxuICAgICAqL1xuICAgIGluaXQoaGFuZGxlciwgdGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIOmHiuaUvuaOieWOn3RhcmdldOeahOS6i+S7tlxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKFN1cHBvcnRFdmVudE5hbWVzLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgfVxuICAgIF9ldmVudENhY2hlID0gW107XG4gICAgLyoqXG4gICAgICog57uR5a6a5LqL5Lu25YiwaHRtbOWvueixoVxuICAgICAqIEBwYXJhbSAgbmFtZSAtIOS6i+S7tuWQjeensFxuICAgICAqIEBwYXJhbSAgZnVuIC0g5LqL5Lu25aSE55CG5Ye95pWwXG4gICAgICogQHBhcmFtIG9wdCAtIOmFjee9rumAiemhuVxuICAgICAqL1xuICAgIG9uKG5hbWUsIGZ1biwgb3B0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ub3JtYWxpemVFdmVudE5hbWVzKG5hbWUpO1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgZXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKG4sIGZ1biwgb3B0KTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50Q2FjaGUucHVzaChbbiwgZnVuLCBvcHRdKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDku47lr7nosaHkuK3np7vpmaTkuovku7ZcbiAgICAgKiDkuI3kvKAg55qE5pe25YCZ5Yig6Zmk5omA5pyJ5LqL5Lu2XG4gICAgICogQHBhcmFtICBuYW1lIC0g5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtICBmdW4gLSDkuovku7blpITnkIblh73mlbBcbiAgICAgKiBAcGFyYW0gb3B0IC0g6YWN572u6YCJ6aG5XG4gICAgICovXG4gICAgb2ZmKG5hbWUsIGZ1biwgb3B0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5ub3JtYWxpemVFdmVudE5hbWVzKG5hbWUpO1xuICAgICAgICB0aGlzLl9ldmVudENhY2hlID0gdGhpcy5fZXZlbnRDYWNoZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnRzLmxlbmd0aCAmJiAhZXZlbnRzLmluY2x1ZGVzKGl0ZW1bMF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGZ1biAmJiBmdW4gIT09IGl0ZW1bMV0pIHx8ICh0eXBlb2Ygb3B0ICE9PSAndW5kZWZpbmVkJyAmJiBvcHQgIT09IGl0ZW1bMl0pKSB7XG4gICAgICAgICAgICAgICAgLy8gRE9NIOimgeWujOWFqOS4gOiHtOaJjeiDveiiq3JlbW92ZUV2ZW50TGlzdGVuZXLliKDpmaTmjolcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoaXRlbVswXSwgaXRlbVsxXSwgaXRlbVsyXSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8g56e76Zmk5omA5pyJ55qE5LqL5Lu2XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5vZmYoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0ZXIgZnJvbSAnLi4vY29uc3RhbnQvZXZlbnRFbWl0dGVyJztcbmV4cG9ydCBjbGFzcyBKRm9udERhdGEge1xuICAgIGNvbnN0cnVjdG9yKGZhbWlseSwgdXJsLCBmb250KSB7XG4gICAgICAgIHRoaXMuZmFtaWx5ID0gZmFtaWx5O1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5mb250ID0gZm9udDtcbiAgICB9XG4gICAgZmFtaWx5O1xuICAgIHVybDtcbiAgICAvLyDkuK3mloflkI1cbiAgICBsYWJlbDtcbiAgICBmb250O1xuICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmZvbnQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb250LnN0YXR1cztcbiAgICAgICAgcmV0dXJuICd1bmxvYWRlZCc7XG4gICAgfVxuICAgIGFzeW5jIGxvYWQodXJsID0gdGhpcy51cmwpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmwgfHwgdGhpcy51cmw7XG4gICAgICAgIGlmICghdGhpcy5mb250KVxuICAgICAgICAgICAgdGhpcy5mb250ID0gbmV3IEZvbnRGYWNlKHRoaXMuZmFtaWx5LCBgdXJsKFwiJHt0aGlzLnVybH1cIilgKTtcbiAgICAgICAgY29uc3QgZiA9IGF3YWl0IHRoaXMuZm9udC5sb2FkKCk7XG4gICAgICAgIGRvY3VtZW50LmZvbnRzLmFkZChmKTsgLy8g55Sf5pWIXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0h0bWwoKSB7XG4gICAgICAgIHJldHVybiBgQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6IFwiJHt0aGlzLmZhbWlseX1cIjsgc3JjOiB1cmwoXCIke3RoaXMudXJsfVwiKX1gO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpGb250cyBleHRlbmRzIEV2ZW50RW1pdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihmb250cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyDliJ3lp4vljJbpu5jorqTmlK/mjIHnmoTlrZfkvZNcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZm9udHMpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGYgb2YgZm9udHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbnRDb25maWdzLnNldChmLmZhbWlseS50b0xvY2FsZUxvd2VyQ2FzZSgpLCBmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb250cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIGZvbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvbnRzW25hbWVdICYmIHR5cGVvZiBmb250c1tuYW1lXSA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9udENvbmZpZ3Muc2V0KGZvbnRzW25hbWVdLmZhbWlseS50b0xvY2FsZUxvd2VyQ2FzZSgpLCBmb250c1tuYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGZvbnRDb25maWdzID0gbmV3IE1hcCgpO1xuICAgIGZvbnRzID0gbmV3IE1hcCgpO1xuICAgIGluaXQoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5mb250cykge1xuICAgICAgICAgICAgY29uc3QgZm9udHMgPSBkb2N1bWVudC5mb250cy52YWx1ZXMoKTtcbiAgICAgICAgICAgIGxldCBmb250ID0gZm9udHMubmV4dCgpO1xuICAgICAgICAgICAgd2hpbGUgKGZvbnQgJiYgZm9udC5kb25lICYmIGZvbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9udC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmID0gbmV3IEpGb250RGF0YShmb250LnZhbHVlLmZhbWlseSk7XG4gICAgICAgICAgICAgICAgICAgIGYuZm9udCA9IGZvbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9udHMuc2V0KGYuZmFtaWx5LCBmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9udCA9IGZvbnRzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDns7vnu5/pu5jorqTnmoTkuIDkupvlrZfkvZPmlK/mjIFcbiAgICAgICAgdGhpcy5mb250cy5zZXQoJ2FyaWFsJywgbmV3IEpGb250RGF0YSgnQXJpYWwnLCAnJywgbmV3IEZvbnRGYWNlKCdBcmlhbCcsICcnKSkpO1xuICAgIH1cbiAgICAvLyDliqDovb3lrZfkvZNcbiAgICBhc3luYyBsb2FkKG5hbWUsIHVybCkge1xuICAgICAgICBsZXQgZm9udCA9IHRoaXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZm9udCkge1xuICAgICAgICAgICAgaWYgKGZvbnQudXJsICYmIChmb250LnN0YXR1cyA9PT0gJ3VubG9hZGVkJyB8fCBmb250LnN0YXR1cyA9PT0gJ2Vycm9yJykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnQubG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZvbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZm9udENvbmZpZ3MuZ2V0KG5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAvLyDmsqHmnInphY3nva7mlK/mjIHnmoTlrZfkvZPvvIzliJnmiqXplJlcbiAgICAgICAgICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYOayoeacieaUr+aMgeeahCAke25hbWV9IOWtl+S9k+mFjee9rmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsID0gY29uZmlnLnVybDtcbiAgICAgICAgfVxuICAgICAgICBmb250ID0gbmV3IEpGb250RGF0YShuYW1lLCB1cmwpO1xuICAgICAgICB0aGlzLmZvbnRzLnNldChuYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCksIGZvbnQpO1xuICAgICAgICBjb25zdCBmID0gYXdhaXQgZm9udC5sb2FkKCk7XG4gICAgICAgIHRoaXMuZW1pdCgnbG9hZCcsIGYpOyAvLyDliqDovb3lrZfmnKzkuovku7ZcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfVxuICAgIC8vIOiOt+WPluW3suWKoOi9veeahOWtl+S9k1xuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmZvbnRzKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9udHMuaGFzKG5hbWUpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvbnRzLmdldChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8g5qOA5p+l5Yqg6L2955qE5a2X5L2T5piv5ZCm5a2Y5Zyo77yM5a2Y5Zyo5YiZ6L+U5Zue5a2X5L2T5a+56LGhXG4gICAgY2hlY2sobmFtZSkge1xuICAgICAgICBjb25zdCBmb250ID0gdGhpcy5nZXQobmFtZSk7XG4gICAgICAgIHJldHVybiAhIWZvbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IEpFbGVtZW50Q3NzU3R5bGUgZnJvbSAnLi4vY29uc3RhbnQvc3R5bGVNYXAnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vbGliL3V0aWwnO1xuY29uc3QgTnVtYmVyU3R5bGVNYXAgPSBbJ2xlZnQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICd3aWR0aCcsICdoZWlnaHQnXTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpFbGVtZW50U3R5bGUgZXh0ZW5kcyBKRWxlbWVudENzc1N0eWxlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hcHBseShvcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOaKiuagt+W8j+W6lOeUqOWIsOWFg+e0oOaIluW9k+WJjeWvueixoVxuICAgIGFwcGx5KGRhdGEsIHRhcmdldCA9IHRoaXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHRoaXMubmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbbmFtZV0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBkYXRhW25hbWVdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBKRWxlbWVudFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXRTdHlsZShuYW1lLCBkYXRhW25hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGRhdGFbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIC8vIOagt+W8j+WvueW6lOeahOWFg+e0oFxuICAgIGFwcGx5VG8oZWxlbWVudCkge1xuICAgICAgICB0aGlzLmFwcGx5KHRoaXMsIGVsZW1lbnQuc3R5bGUpO1xuICAgIH1cbiAgICAvLyDorr7nva7moLflvI9cbiAgICBzZXRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyDop6blj5HmiYDmnInmm7TmlrDliLBkb21cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmFwcGx5KHRoaXMpO1xuICAgIH1cbiAgICAvLyDovazkuLpqc29uXG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHRoaXMubmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBvYmpbbmFtZV0gPSB0aGlzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIC8vIOeUn+aIkOagt+W8j+S7o+eQhlxuICAgIHN0YXRpYyBjcmVhdGVQcm94eShzdHlsZSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGpzdHlsZSA9IG5ldyBKRWxlbWVudFN0eWxlKHN0eWxlKTtcbiAgICAgICAgLy8g5qC35byP5Luj55CG5aSE55CGXG4gICAgICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KGpzdHlsZSwge1xuICAgICAgICAgICAgZ2V0KHRhcmdldCwgcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gdGFyZ2V0W3BdO1xuICAgICAgICAgICAgICAgIC8vIOaVsOWtl+agt+W8j++8jOWkhOeQhnB46Zeu6aKYXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJyAmJiBOdW1iZXJTdHlsZU1hcC5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PT0gJzAnIHx8IHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXRpbC5pc1BYTnVtYmVyKHYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWwudG9OdW1iZXIodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh0YXJnZXQsIHAsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIC8vIOmdnueZveWQjeWNleagt+W8j+S4jeaUr+aMgeiuvue9rlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycgfHwgIXRhcmdldC5uYW1lcy5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOaVsOWtl+agt+W8j++8jOWkhOeQhnB46Zeu6aKYXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlclN0eWxlTWFwLmluY2x1ZGVzKHApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB1dGlsLmlzTnVtYmVyKHZhbHVlKSA/IGAke3ZhbHVlfXB4YCA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0U3R5bGUocCwgdmFsdWUpOyAvLyDlupTnlKjliLDlhYPntKDlkoznsbtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm94eTtcbiAgICB9XG59XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgSkJhc2UgZnJvbSAnLi9jb3JlL2Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IEpUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcbmltcG9ydCBKSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlJztcbmltcG9ydCBKU3ZnIGZyb20gJy4vY29tcG9uZW50cy9zdmcnO1xuaW1wb3J0IEpFbGVtZW50IGZyb20gJy4vY29yZS9lbGVtZW50JztcbmltcG9ydCBKQ29udHJvbGxlciBmcm9tICcuL2NvcmUvY29udHJvbGxlcic7XG5pbXBvcnQgSkZvbnRzIGZyb20gJy4vY29yZS9mb250cyc7XG5pbXBvcnQgdXRpbCBmcm9tICcuL2xpYi91dGlsJztcbmltcG9ydCB7IERlYm91bmNlIH0gZnJvbSAnLi9saWIvZGVjb3JhdG9yJztcbmltcG9ydCB7IFN1cHBvcnRFdmVudE5hbWVzIH0gZnJvbSAnLi9jb3JlL2V2ZW50Jztcbi8qKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKRWRpdG9yIGV4dGVuZHMgSkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbiA9IHt9KSB7XG4gICAgICAgIG9wdGlvbi5zdHlsZSA9IG9wdGlvbi5zdHlsZSB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb24uc3R5bGUsIHtcbiAgICAgICAgICAgICdib3hTaGFkb3cnOiAnMCAwIDEwcHggMTBweCAjY2NjJyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAnYmFja2dyb3VuZFNpemUnOiAnMTAwJSAxMDAlJyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUg5aSW5bGC5Y+q5ZON5bqUWui9tOaXi+i9rFxuICAgICAgICBvcHRpb24udHJhbnNmb3JtV2F0Y2hQcm9wcyA9IFtcbiAgICAgICAgICAgICdyb3RhdGVaJywgJ3NjYWxlWCcsICdzY2FsZVknXG4gICAgICAgIF07XG4gICAgICAgIHN1cGVyKG9wdGlvbik7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uLmNvbnRhaW5lciA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBvcHRpb24uY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9uLmNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBKRWxlbWVudCh7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICdib3JkZXInOiAnMCcsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCcsXG4gICAgICAgICAgICAgICAgJ21hcmdpbic6ICcwJyxcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5a2X5L2T566h55CG5a6e5L6LXG4gICAgICAgIHRoaXMuZm9udHMgPSBuZXcgSkZvbnRzKG9wdGlvbi5mb250cyk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmNzcyh7XG4gICAgICAgICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdGlvbi5jb250YWluZXIpXG4gICAgICAgICAgICBvcHRpb24uY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudmlldy5kb20pO1xuICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5kb20pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMucmVnU2hhcGUoeyAnaW1hZ2UnOiBKSW1hZ2UsICd0ZXh0JzogSlRleHQsICdzdmcnOiBKU3ZnIH0pO1xuICAgICAgICB0aGlzLmluaXQob3B0aW9uKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnQodGhpcy52aWV3LmRvbSk7XG4gICAgfVxuICAgIC8vIOWIneWni+WMluaVtOS4que8lui+keWZqFxuICAgIGluaXQob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24uc3R5bGUuY29udGFpbmVyQmFja2dyb3VuZENvbG9yKVxuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9uLnN0eWxlLmNvbnRhaW5lckJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgLy8g55Sf5oiQ5o6n5Yi25ZmoXG4gICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIgPSBuZXcgSkNvbnRyb2xsZXIoe1xuICAgICAgICAgICAgZWRpdG9yOiB0aGlzLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHN0eWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlTm9kZS5pbm5lckhUTUwgPSBgLmotZGVzaWduLWVkaXRvci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qLWRlc2lnbi1lZGl0b3ItY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWA7XG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKHN0eWxlTm9kZSk7XG4gICAgICAgIC8vIOWtl+S9k+WKoOi9veaIkOWKn++8jOWQjOaXtuWKoOWFpeWIsGRvbee7k+aehOS4rVxuICAgICAgICB0aGlzLmZvbnRzLm9uKCdsb2FkJywgKGZvbnQpID0+IHtcbiAgICAgICAgICAgIHN0eWxlTm9kZS5hcHBlbmQoZm9udC50b0h0bWwoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKCdzZWxlY3QnLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QodGhpcyk7IC8vIOmAieS4reiHquW3slxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIub25EcmFnU3RhcnQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDliLfmlrDmoLflvI9cbiAgICAgICAgdGhpcy5zdHlsZS5yZWZyZXNoKCk7XG4gICAgICAgIHRoaXMucmVzaXplKCk7IC8vIOinpuWPkeS4gOasoeWkp+Wwj+aUueWPmFxuICAgICAgICAvL3RoaXMuYmluZEVsZW1lbnRFdmVudCh0aGlzKTtcbiAgICB9XG4gICAgLy8g5aSW5bGC55So5LqO5a6a5L2N55qE5a655ZmoXG4gICAgdmlldztcbiAgICAvLyDmiYDmnInmlK/mjIHnmoTnsbvlnotcbiAgICBzaGFwZXMgPSBuZXcgTWFwKCk7XG4gICAgLy8g5YWD57Sg5o6n5bib5ZmoXG4gICAgZWxlbWVudENvbnRyb2xsZXI7XG4gICAgZm9udHM7IC8vIOWtl+S9k+euoeeQhuWZqFxuICAgIC8vIOmHjeWGmeWtkOmbhuS4unRhcmdldFxuICAgIGdldCBjaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LmNoaWxkcmVuO1xuICAgIH1cbiAgICAvLyDooqvpgInkuK3nmoTlhYPntKBcbiAgICBnZXQgc2VsZWN0ZWRFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZWwgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSkJhc2UgJiYgZWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXMucHVzaChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgLy8g57uR5a6a5LqL5Lu2XG4gICAgYmluZEV2ZW50KGRvbSkge1xuICAgICAgICBpZiAodGhpcy52aWV3KVxuICAgICAgICAgICAgc3VwZXIuYmluZEV2ZW50KHRoaXMudmlldy5kb20pOyAvLyDnvJbovpHlmajkuovku7bnu5HliLDmlbTkuKrlrrnlmajkuIpcbiAgICB9XG4gICAgLy8g6YCJ5Lit5p+Q5Liq5YWD57SgXG4gICAgc2VsZWN0KGVsKSB7XG4gICAgICAgIGlmIChlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgLy8g6YCJ5oqK5omA5pyJ5bey6YCJ5oup55qE5Y+W5raIXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudHMubWFwKHAgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwICE9PSBlbCkge1xuICAgICAgICAgICAgICAgICAgICBwLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVsLmVkaXRhYmxlKVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIuYmluZChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q29udHJvbGxlci51bmJpbmQoZWwpO1xuICAgIH1cbiAgICByZXNpemUod2lkdGggPSB0aGlzLmRhdGEud2lkdGgsIGhlaWdodCA9IHRoaXMuZGF0YS5oZWlnaHQpIHtcbiAgICAgICAgdGhpcy5kYXRhLmxlZnQgPSBNYXRoLm1heCgodXRpbC50b051bWJlcih0aGlzLnZpZXcuZG9tLmNsaWVudFdpZHRoKSAtIHV0aWwudG9OdW1iZXIod2lkdGgpKSAvIDIsIDApO1xuICAgICAgICB0aGlzLmRhdGEudG9wID0gTWF0aC5tYXgoKHV0aWwudG9OdW1iZXIodGhpcy52aWV3LmRvbS5jbGllbnRIZWlnaHQpIC0gdXRpbC50b051bWJlcihoZWlnaHQpKSAvIDIsIDApO1xuICAgICAgICB0aGlzLmRhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5kYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5hdHRyKCdkYXRhLXNpemUnLCBgJHt3aWR0aH0qJHtoZWlnaHR9YCk7XG4gICAgICAgIHRoaXMuZW1pdCgncmVzaXplJywge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOa3u+WKoOWFg+e0oOWIsOeUu+W4g1xuICAgIGFkZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYmluZEVsZW1lbnRFdmVudChjaGlsZCk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7IC8vIOaKiueItuiuvue9ruaIkOe8lui+keWZqFxuICAgICAgICBjaGlsZC5lZGl0b3IgPSB0aGlzO1xuICAgICAgICAvLyDliLfmlrDmoLflvI9cbiAgICAgICAgY2hpbGQuc3R5bGUucmVmcmVzaCgpO1xuICAgICAgICBjaGlsZC5lZGl0YWJsZSA9IHRoaXMuZWRpdGFibGU7IC8vIOW9k+WJjeaYr+WQpuWPr+e8lui+kVxuICAgICAgICB0aGlzLnRhcmdldC5hZGRDaGlsZChjaGlsZCwgdGhpcy50YXJnZXQpO1xuICAgIH1cbiAgICAvLyDnp7vpmaRcbiAgICByZW1vdmVDaGlsZChlbCkge1xuICAgICAgICBpZiAoZWwgPT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUud2Fybign5LiN6IO956e76Zmk6Ieq5beyJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgSkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsLm9mZihTdXBwb3J0RXZlbnROYW1lcyk7XG4gICAgICAgICAgICBlbC5vZmYoWydzZWxlY3QnLCAnc3R5bGVDaGFuZ2UnLCAnZGF0YUNoYW5nZSddKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cbiAgICAvLyDnu5HlrprlhYPntKDkuovku7ZcbiAgICBiaW5kRWxlbWVudEV2ZW50KGVsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyDnm5HlkKzmoLflvI/mlLnlj5hcbiAgICAgICAgZWwub24oW1xuICAgICAgICAgICAgLi4uU3VwcG9ydEV2ZW50TmFtZXMsXG4gICAgICAgICAgICAnc3R5bGVDaGFuZ2UnLCAnc2VsZWN0JywgJ2RhdGFDaGFuZ2UnXG4gICAgICAgIF0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyDlt6blgaXpgInkuK1cbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGUuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50Q29udHJvbGxlci5vbkRyYWdTdGFydChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOmAieS4reeKtuaAgeaUueWPmFxuICAgICAgICAgICAgZWxzZSBpZiAoZS50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5aaC5p6c5piv5a2X5L2T5L6d6LWW77yM5YiZ5qOA5p+l5a2X5L2T5pSv5oyB5oOF5Ya1XG4gICAgICAgICAgICBlbHNlIGlmIChlLnR5cGUgPT09ICdzdHlsZUNoYW5nZScpIHtcbiAgICAgICAgICAgICAgICAvLyDlrZfkvZPlj5HnlJ/mlLnlj5jvvIzpnIDopoHlgZpjaGVjaywg5bm25Yqg6L295a2X5L2T55Sf5pWIXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5uYW1lID09PSAnZm9udEZhbWlseScgJiYgZS5kYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZm9udHMubG9hZChlLmRhdGEudmFsdWUpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTsgLy8g5byC5q2l5Yqg6L295a2X5L2TXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5lbWl0KCdlbGVtZW50Q2hhbmdlJywge1xuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBlLmRhdGEgfHwge30sXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOmAmui/h0lE6I635Y+W5a2Q5YWD57SgXG4gICAgZ2V0Q2hpbGQoaWQpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmiopkb21jdW1lbnTlnZDmoIfovazkuLrnvJbovpHlmajnm7jlr7nlnZDmoIdcbiAgICB0b0VkaXRvclBvc2l0aW9uKHBvcykge1xuICAgICAgICAvLyDnvJbovpHlmajlnZDmoIdcbiAgICAgICAgY29uc3QgZWRpdG9yUG9zID0gdXRpbC5nZXRFbGVtZW50Qm91bmRpbmdSZWN0KHRoaXMudGFyZ2V0LmRvbSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBwb3MueCAtIGVkaXRvclBvcy54LFxuICAgICAgICAgICAgeTogcG9zLnkgLSBlZGl0b3JQb3MueVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jc3Moe1xuICAgICAgICAgICAgJ2JhY2tncm91bmRDb2xvcic6ICcjZmZmJyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudENvbnRyb2xsZXIuZGF0YS52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIOe8qeaUvlxuICAgIHNjYWxlKHgsIHkgPSB4KSB7XG4gICAgICAgIGlmICh4IDwgMC4xIHx8IHkgPCAwLjEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlWCA9IHg7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlWSA9IHk7XG4gICAgfVxuICAgIC8vIOazqOWGjOiHquWumuS5iee7hOS7tlxuICAgIHJlZ1NoYXBlKG5hbWUsIHNoYXBlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbiBpbiBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdTaGFwZShuLCBuYW1lW25dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaGFwZXMuaGFzKG5hbWUpKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYOWFg+e0oOexu+WeiyR7bmFtZX3lt7Lnu4/lrZjlnKhgKTtcbiAgICAgICAgdGhpcy5zaGFwZXMuc2V0KG5hbWUsIHNoYXBlKTtcbiAgICAgICAgcmV0dXJuIHNoYXBlO1xuICAgIH1cbiAgICAvLyDliJvlu7rlhYPntKBcbiAgICBjcmVhdGVTaGFwZSh0eXBlLCBvcHRpb24gPSB7fSkge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHRoaXMuc2hhcGVzLmdldCh0eXBlKSA6IHR5cGU7XG4gICAgICAgIGlmICghc2hhcGUpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke3R5cGV95LiN5a2Y5Zyo55qE5YWD57Sg57G75Z6LYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBlbCA9IG5ldyBzaGFwZSh7XG4gICAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgICAgICBlZGl0b3I6IHRoaXMsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBmcm9tSlNPTihkYXRhKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICBpZiAoZGF0YS5zdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5hcHBseShkYXRhLnN0eWxlKTsgLy8g5bqU55So5qC35byPXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNpemUoZGF0YS53aWR0aCB8fCBkYXRhLmRhdGEud2lkdGgsIGRhdGEuaGVpZ2h0IHx8IGRhdGEuZGF0YS5oZWlnaHQpO1xuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgZGF0YS5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKCFjLnR5cGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jcmVhdGVTaGFwZShjLnR5cGUsIGMpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbl9fZGVjb3JhdGUoW1xuICAgIERlYm91bmNlKDEwKVxuXSwgSkVkaXRvci5wcm90b3R5cGUsIFwicmVzaXplXCIsIG51bGwpO1xuZXhwb3J0IHsgSkVkaXRvciwgSkltYWdlLCBKVGV4dCwgfTtcbiIsImltcG9ydCB1dGlsIGZyb20gJy4vbGliL3V0aWwnO1xuaW1wb3J0IEpCYXNlQ29tcG9uZW50IGZyb20gJy4vY29yZS9iYXNlQ29tcG9uZW50JztcbmltcG9ydCBKVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dCc7XG5pbXBvcnQgSkltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZSc7XG5pbXBvcnQgSkVsZW1lbnQgZnJvbSAnLi9jb3JlL2VsZW1lbnQnO1xuaW1wb3J0IEpFZGl0b3IgZnJvbSAnLi9lZGl0b3InO1xuaW1wb3J0IEpEYXRhIGZyb20gJy4vY29uc3RhbnQvZGF0YSc7XG5pbXBvcnQgSkV2ZW50IGZyb20gJy4vY29yZS9ldmVudCc7XG5leHBvcnQgeyBKRWxlbWVudFN0eWxlRGVjbGFyYXRpb24sIEpFbGVtZW50U3R5bGVQcm9wZXJ0eSB9IGZyb20gJy4vY29uc3RhbnQvc3R5bGVNYXAnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudC9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnQvdHlwZXMnO1xuZXhwb3J0IHsgdXRpbCwgSkV2ZW50LCBKQmFzZUNvbXBvbmVudCwgSlRleHQsIEpEYXRhLCBKSW1hZ2UsIEpFbGVtZW50LCBKRWRpdG9yLCB9O1xuZXhwb3J0IGRlZmF1bHQgSkVkaXRvcjtcbiIsIi8qKlxuICog6Ziy5oqW6KOF6aWw5ZmoXG4gKiBAZXhhbXBsZVxuIGBgYHRzXG4gY2xhc3MgVGVzdCB7XG4gICAgICAgIEBEZWJvdW5jZSgxMDAwKVxuICAgICAgICBsb2coKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlYm91bmNlZCBvdXRwdXQhXCIpO1xuICAgICAgICB9XG4gICAgfVxuIGBgYFxuICogQHBhcmFtIG1pbGxpc2Vjb25kcyAtIOavq+enkuaVsFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIERlYm91bmNlKG1pbGxpc2Vjb25kcyA9IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgbGV0IG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgbGV0IHRpbWVySWQgPSBudWxsO1xuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH0sIG1pbGxpc2Vjb25kcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgLy8g5piv5ZCm5piv5pWw5a2XXG4gICAgaXNOdW1iZXIodikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInIHx8IC9eXFxzKltcXGRcXC5dK1xccyokLy50ZXN0KHYpO1xuICAgIH0sXG4gICAgLy8g5piv5ZCm5piv5bim5YOP57Sg5Y2V5L2N55qE5a2X56ym5LiyXG4gICAgaXNQWE51bWJlcih2KSB7XG4gICAgICAgIHJldHVybiAvXlxccypbXFxkXFwuXStcXHMqcHhcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaYr+W4puinkuW6puWNleS9jeeahOWtl+espuS4slxuICAgIGlzRGVnTnVtYmVyKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypkZWdcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOaYr+WQpuaYr+W4puW8p+W6puWNleS9jeeahOWtl+espuS4slxuICAgIGlzUmFkTnVtYmVyKHYpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKltcXGRcXC5dK1xccypyYWRcXHMqL2kudGVzdCh2KTtcbiAgICB9LFxuICAgIC8vIOi9rOS4uuWDj+e0oOWtl+espuS4suagvOW8jyBcbiAgICB0b1BYKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdweCc7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH0sXG4gICAgLy8g5bim5YOP57Sg5oiW5YW25a6D5Y2V5L2N55qE6L2s5o2i5Li65pWw5a2XXG4gICAgdG9OdW1iZXIodikge1xuICAgICAgICBpZiAodGhpcy5pc051bWJlcih2KSlcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodik7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHYpIHx8IDA7XG4gICAgfSxcbiAgICAvLyDlvKfluqbovazop5LluqZcbiAgICByYWRUb0RlZyh2KSB7XG4gICAgICAgIHJldHVybiB2ICogKDE4MCAvIE1hdGguUEkpO1xuICAgIH0sXG4gICAgLy8g6KeS5bqm6L2s5byn5bqmXG4gICAgZGVnVG9SYWQodikge1xuICAgICAgICByZXR1cm4gdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICB9LFxuICAgIC8vIOi9rOS4uuinkuW6puagvOW8j1xuICAgIHRvRGVnKHYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdiArICdkZWcnO1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHRoaXMuaXNSYWROdW1iZXIodikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RlZyh0aGlzLnJhZFRvRGVnKHBhcnNlRmxvYXQodikpKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfSxcbiAgICAvLyDovazkuLrlvKfluqbmoLzlvI9cbiAgICB0b1JhZCh2KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHYgKyAncmFkJztcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyAmJiB0aGlzLmlzRGVnTnVtYmVyKHYpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9SYWQodGhpcy5kZWdUb1JhZChwYXJzZUZsb2F0KHYpKSk7XG4gICAgICAgIHJldHVybiB2O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5YWD57Sg55qE57ud5a+55a6a5L2NXG4gICAgICogQHBhcmFtICBlbCAtIOebruagh+WFg+e0oOWvueixoVxuICAgICAqIEByZXR1cm5zICDkvY3nva7lr7nosaEodG9wLGxlZnQpXG4gICAgICovXG4gICAgZ2V0RWxlbWVudFBvc2l0aW9uKGVsKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHsgXCJ5XCI6IDAsIFwieFwiOiAwIH07XG4gICAgICAgIGlmICghZWwpXG4gICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICBpZiAoZWwub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAoZWwub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gZWwub2Zmc2V0VG9wO1xuICAgICAgICAgICAgICAgIHBvcy54ICs9IGVsLm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlbHNlIGlmIChlbC54KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwb3MueCArPSBlbC54O1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZWxzZSBpZiAoZWwueSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcG9zLnkgKz0gZWwueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH0sXG4gICAgLy8g6I635Y+W5YWD57SgYm91bmRzXG4gICAgZ2V0RWxlbWVudEJvdW5kaW5nUmVjdChlbCkge1xuICAgICAgICBsZXQgYm91bmRzID0ge1xuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAoZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICBib3VuZHMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgYm91bmRzLnggKz0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIGJvdW5kcy55ICs9IHNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0RWxlbWVudFBvc2l0aW9uKGVsKTtcbiAgICAgICAgICAgIGJvdW5kcy54ID0gcG9zLng7XG4gICAgICAgICAgICBib3VuZHMueSA9IHBvcy55O1xuICAgICAgICAgICAgYm91bmRzLndpZHRoID0gZWwuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBib3VuZHMuaGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfSxcbiAgICAvLyDmiopkb21jdW1lbnTlnZDmoIfovazkuLrmjIflrprlhYPntKDnm7jlr7nlnZDmoIdcbiAgICB0b0RvbVBvc2l0aW9uKHBvcywgZG9tKSB7XG4gICAgICAgIGNvbnN0IGRvbVBvcyA9IHRoaXMuZ2V0RWxlbWVudEJvdW5kaW5nUmVjdChkb20pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogcG9zLnggLSBkb21Qb3MueCxcbiAgICAgICAgICAgIHk6IHBvcy55IC0gZG9tUG9zLnlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaKiuS4gOS4quaIluWkmuS4queCuee7leafkOS4queCueaXi+i9rOS4gOWumuinkuW6plxuICAgICAqIOWFiOaKiuWdkOagh+WOn+eCueenu+WIsOaXi+i9rOS4reW/g+eCue+8jOiuoeeul+WQjuenu+WbnlxuICAgICAqIEBwYXJhbSAgcCAtIOS4gOS4quaIluWkmuS4queCuVxuICAgICAqIEBwYXJhbSAgcnAgLSAg5peL6L2s5Lit5b+D54K5XG4gICAgICogQHBhcmFtICByIC0g5peL6L2s6KeS5bqmXG4gICAgICovXG4gICAgcm90YXRlUG9pbnRzKHAsIGNlbnRlciwgcikge1xuICAgICAgICBpZiAoIXIgfHwgIXApXG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgbGV0IGNvcyA9IE1hdGguY29zKHIpO1xuICAgICAgICBsZXQgc2luID0gTWF0aC5zaW4ocik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHApKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBbaV0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGxldCB4MSA9IHBbaV0ueCAtIGNlbnRlci54O1xuICAgICAgICAgICAgICAgIGxldCB5MSA9IHBbaV0ueSAtIGNlbnRlci55O1xuICAgICAgICAgICAgICAgIHBbaV0ueCA9IHgxICogY29zIC0geTEgKiBzaW4gKyBjZW50ZXIueDtcbiAgICAgICAgICAgICAgICBwW2ldLnkgPSB4MSAqIHNpbiArIHkxICogY29zICsgY2VudGVyLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgeDEgPSBwLnggLSBjZW50ZXIueDtcbiAgICAgICAgICAgIGxldCB5MSA9IHAueSAtIGNlbnRlci55O1xuICAgICAgICAgICAgcC54ID0geDEgKiBjb3MgLSB5MSAqIHNpbiArIGNlbnRlci54O1xuICAgICAgICAgICAgcC55ID0geDEgKiBzaW4gKyB5MSAqIGNvcyArIGNlbnRlci55O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgIH0sXG4gICAgLy8g6K6+572u5qC35byPXG4gICAgY3NzKGRvbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG4gb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNzcyhkb20sIG4sIG5hbWVbbl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBkb23lsZ7mgKdcbiAgICBhdHRyKGRvbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgKyAnJyk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pys5Zyw5ZSv5LiASUTvvIzov5nkuKrlj6ropoHkv53or4HlvZPliY3nur/nqIvllK/kuIDljbPlj6/vvIzpnZ7lhajnkIPllK/kuIBcbiAgICB1dWlkKCkge1xuICAgICAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDApO1xuICAgICAgICByZXR1cm4gKHRpbWUgKyBybmQpLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICAvLyDmiorlm77niYfml4vovazkuIDlrprop5LluqbvvIzov5Tlm55iYXNlNjRcbiAgICBhc3luYyByb3RhdGVJbWFnZSh1cmwsIHJvdGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIGN2cy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgICAgICBjdnMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjdnMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN2cy53aWR0aCwgY3ZzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjdnMud2lkdGggLyAyLCBjdnMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZShyb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtY3ZzLndpZHRoIC8gMiwgLWN2cy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGN2cy50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QgJiYgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g6K+35rGC6L+c56iL6LWE5rqQXG4gICAgYXN5bmMgcmVxdWVzdCh1cmwsIG9wdGlvbikge1xuICAgICAgICBvcHRpb24gPSBvcHRpb24gfHwge307XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IC8v5paw5bu6WE1MSHR0cFJlcXVlc3Tlr7nosaFcbiAgICAgICAgICAgIGlmIChvcHRpb24uaGVhZGVycykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBvcHRpb24uaGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIobmFtZSwgb3B0aW9uLmhlYWRlcnNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5kYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIG9wdGlvbi5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKGAke25hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbi5kYXRhW25hbWVdKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBvcHRpb24ubWV0aG9kID8gb3B0aW9uLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCc7XG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIHVybCArPSAodXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPycpICsgcGFyYW1zLmpvaW4oJyYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7IC8v5oiQ5Yqf5a6M5oiQXG4gICAgICAgICAgICAgICAgICAgIC8v5Yik5pat55u45bqU57uT5p6c77yaXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL+WPkemAgeivt+axgu+8mlxuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZChtZXRob2QgPT09ICdQT1NUJyA/IHBhcmFtcy5qb2luKCcmJykgOiBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiJdfQ==
