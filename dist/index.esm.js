/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
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
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var eventemitter3 = {exports: {}};

(function (module) {

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
	{
	  module.exports = EventEmitter;
	} 
} (eventemitter3));

var eventemitter3Exports = eventemitter3.exports;
var EventEmitter$1 = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

var EventEmitter = /** @class */ (function (_super) {
    __extends(EventEmitter, _super);
    function EventEmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 规范化事件名
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
     * Add a listener for a given event.
     */
    EventEmitter.prototype.on = function (event, fn, context) {
        var e_1, _a;
        var events = this.normalizeEventNames(event);
        try {
            for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var name_1 = events_1_1.value;
                name_1 && _super.prototype.on.call(this, name_1, fn, context);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    EventEmitter.prototype.off = function (event, fn, context, once) {
        var e_2, _a;
        var events = this.normalizeEventNames(event);
        try {
            for (var events_2 = __values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
                var name_2 = events_2_1.value;
                name_2 && _super.prototype.off.call(this, name_2, fn, context);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (events_2_1 && !events_2_1.done && (_a = events_2.return)) _a.call(events_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this;
    };
    return EventEmitter;
}(EventEmitter$1));

var util = {
    // 是否是数字
    isNumber: function (v) {
        return typeof v === 'number' || /^\s*[\d\.]+\s*$/.test(v);
    },
    // 是否是带像素单位的字符串
    isPXNumber: function (v) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    },
    // 是否是带角度单位的字符串
    isDegNumber: function (v) {
        return /^\s*[\d\.]+\s*deg\s*/i.test(v);
    },
    // 是否是带弧度单位的字符串
    isRadNumber: function (v) {
        return /^\s*[\d\.]+\s*rad\s*/i.test(v);
    },
    // 转为像素字符串格式 
    toPX: function (v) {
        if (this.isNumber(v))
            return v + 'px';
        return v;
    },
    // 带像素或其它单位的转换为数字
    toNumber: function (v) {
        if (this.isNumber(v))
            return Number(v);
        else if (typeof v === 'string')
            return parseFloat(v);
    },
    // 弧度转角度
    radToDeg: function (v) {
        return v * (180 / Math.PI);
    },
    // 角度转弧度
    degToRad: function (v) {
        return v * (Math.PI / 180);
    },
    // 转为角度格式
    toDeg: function (v) {
        if (this.isNumber(v))
            return v + 'deg';
        if (typeof v === 'string' && this.isRadNumber(v))
            return this.toDeg(this.radToDeg(parseFloat(v)));
        return v;
    },
    // 转为弧度格式
    toRad: function (v) {
        if (this.isNumber(v))
            return v + 'rad';
        if (typeof v === 'string' && this.isDegNumber(v))
            return this.toRad(this.degToRad(parseFloat(v)));
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
    getElementPosition: function (el) {
        var pos = { "y": 0, "x": 0 };
        if (!el)
            return pos;
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
    getElementBoundingRect: function (el) {
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
        }
        else {
            var pos = this.getElementPosition(el);
            bounds.x = pos.x;
            bounds.y = pos.y;
            bounds.width = el.clientWidth;
            bounds.height = el.clientHeight;
        }
        return bounds;
    },
    // 把domcument坐标转为指定元素相对坐标
    toDomPosition: function (pos, dom) {
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
    rotatePoints: function (p, center, r) {
        if (!r || !p)
            return p;
        var cos = Math.cos(r);
        var sin = Math.sin(r);
        if (Array.isArray(p)) {
            for (var i = 0; i < p.length; i++) {
                if (!p[i])
                    continue;
                var x1 = p[i].x - center.x;
                var y1 = p[i].y - center.y;
                p[i].x = x1 * cos - y1 * sin + center.x;
                p[i].y = x1 * sin + y1 * cos + center.y;
            }
        }
        else {
            var x1 = p.x - center.x;
            var y1 = p.y - center.y;
            p.x = x1 * cos - y1 * sin + center.x;
            p.y = x1 * sin + y1 * cos + center.y;
        }
        return p;
    },
    // 设置样式
    css: function (dom, name, value) {
        var e_1, _a;
        if (!name)
            return;
        if (typeof name === 'object') {
            try {
                for (var _b = __values(Object.getOwnPropertyNames(name)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var n = _c.value;
                    this.css(dom, n, name[n]);
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
        else {
            dom.style[name] = value;
        }
        return this;
    },
    // dom属性
    attr: function (dom, name, value) {
        if (typeof value !== 'undefined') {
            dom.setAttribute(name, value + '');
            return value;
        }
        else {
            return dom.getAttribute(name);
        }
    },
    // 本地唯一ID，这个只要保证当前线程唯一即可，非全球唯一
    uuid: function () {
        var time = Date.now();
        var rnd = Math.floor(Math.random() * 10000000000);
        return (time + rnd).toString();
    },
    // 把图片旋转一定角度，返回base64
    rotateImage: function (url, rotation) {
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
    }
};

var topZIndex = 10000;
// 支持的样式属性列表
var JElementStyleDeclaration = /** @class */ (function (_super) {
    __extends(JElementStyleDeclaration, _super);
    function JElementStyleDeclaration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JElementStyleDeclaration;
}(EventEmitter));
// 样式属性集合
var JElementStyleProperty = /** @class */ (function () {
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
        this.float = '';
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
}());
var JElementCssStyle = /** @class */ (function (_super) {
    __extends(JElementCssStyle, _super);
    function JElementCssStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(JElementCssStyle.prototype, "names", {
        // 所有样式名称
        get: function () {
            var e_1, _a;
            if (!JElementCssStyle.styleNamesMap.length) {
                var map = new JElementStyleProperty();
                var keys = Object.getOwnPropertyNames(map);
                try {
                    for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                        var k = keys_1_1.value;
                        var t = typeof map[k];
                        if (t === 'string' || t === 'number')
                            JElementCssStyle.styleNamesMap.push(k);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return JElementCssStyle.styleNamesMap;
        },
        enumerable: false,
        configurable: true
    });
    JElementCssStyle.styleNamesMap = [];
    return JElementCssStyle;
}(JElementStyleDeclaration));
// 最外层容器默认样式
var ContainerDefaultStyle = {
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
var nwse = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////////+anqaeoqqjpq7e3+Li4uRpbXhiZ3NjaHRfZHFZX2tAR1c/RlU7QVH////9/f3////////9/f3////9/f3///8PFyr////UYjabAAAAJ3RSTlMABAUMDRAREhckKS4wMjU2N6jAwMDHyMrMzM3P2tvd5Ojo6evr7PowgHoyAAAAAWJLR0QovbC1sgAAAJVJREFUKM+90dsSgiAQgGHIDkBUoqaVGRXE7vs/YSgz5QDX/pd8HGYWQpZqLQ8+WSTrb5yyLII91jdfi8cIJPYAUKEiObgaJ3JwgcFonkL1ucPjOUrJ5o+f0QURCi39QWFRCT2J83s2/yPsRAgP0vRzmOLaDNBBCkQ400EOFDaQgxLbcTB1AsyGUb5ofBXdjW1Xi/32F3U3EU6pnu/zAAAAAElFTkSuQmCC';
var ns = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oq7KusLevsriZm6Wdoamipa2jpq6Tl6CNkZqIjJX///98gYv///////////////8PFyr///8ipdpMAAAAMXRSTlMAAQIDBAUHCVpcXV5faGl3gIKDhIWImJydnp+mqaqxuLu/v7/AwMDAwcLDxMX7/P3+tV+LYwAAAAFiS0dEMkDSTMgAAAC/SURBVCjPfZLZEoIwDEWhClhAxQVFVDYVF1xI/v/jJBbRVvA8dJgcyL0zRdMamOsyrQV9gRiy1nmWtxgWYAaQ40oxbIk7ADKBbAZiDnBELgmOFQB0OnI09wsShW/rarxHwpPfHhMJieT1yMVXNtaIDMJudsjUGztF56qqKlHXJbj+vy5hDt91R6YkZp+MuSQm94sodL1NJWHF5Z7m50dsKSFReQA4lZGpxhsbTFPcGr+X3gsR1/2234Q5zte1PgEi+SemTJG1vwAAAABJRU5ErkJggg==';
// 操作杠指针
var ControlerCursors = {
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
    get: function (dir, rotation) {
        if (rotation === void 0) { rotation = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var rotationKey, key, cursor, normal, normal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (dir === 'rotate' || dir === 'skew')
                            return [2 /*return*/, this[dir]];
                        rotationKey = Number(rotation.toFixed(2));
                        key = rotationKey === 0 ? dir : "".concat(dir, "_").concat(rotationKey);
                        cursor = this[key];
                        if (!!cursor) return [3 /*break*/, 11];
                        if (!(dir === 'l' || dir === 'r' || dir === 't' || dir === 'b')) return [3 /*break*/, 6];
                        if (!(rotation === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, util.rotateImage(ns, Math.PI / 2)];
                    case 1:
                        cursor = _a.sent();
                        this['l'] = this['r'] = cursor;
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.get(dir, 0)];
                    case 3:
                        normal = _a.sent();
                        return [4 /*yield*/, util.rotateImage(normal, rotation)];
                    case 4:
                        cursor = _a.sent();
                        this[key] = cursor;
                        _a.label = 5;
                    case 5: return [3 /*break*/, 11];
                    case 6:
                        if (!(dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb')) return [3 /*break*/, 11];
                        if (!(rotation === 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, util.rotateImage(nwse, Math.PI / 2)];
                    case 7:
                        cursor = _a.sent();
                        return [2 /*return*/, this['tr'] = this['lb'] = cursor];
                    case 8: return [4 /*yield*/, this.get(dir, 0)];
                    case 9:
                        normal = _a.sent();
                        return [4 /*yield*/, util.rotateImage(normal, rotation)];
                    case 10:
                        cursor = _a.sent();
                        this[key] = cursor;
                        _a.label = 11;
                    case 11: return [2 /*return*/, cursor];
                }
            });
        });
    }
};
var ControlItemIcons = {
    'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
    'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
};

var Transform = /** @class */ (function (_super) {
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
        if (option)
            Object.assign(_this, option);
        if (targetOption)
            _this.bind(targetOption);
        return _this;
    }
    Object.defineProperty(Transform.prototype, "translateXString", {
        get: function () {
            return "translateX(".concat(util.toPX(this.translateX), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "translateYString", {
        get: function () {
            return "translateY(".concat(util.toPX(this.translateY), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "translateZString", {
        get: function () {
            return "translateZ(".concat(util.toPX(this.translateZ), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotateXString", {
        get: function () {
            return "rotateX(".concat(util.toRad(this.rotateX), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotateYString", {
        get: function () {
            return "rotateY(".concat(util.toRad(this.rotateY), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotateZString", {
        get: function () {
            return "rotateZ(".concat(util.toRad(this.rotateZ), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scaleXString", {
        get: function () {
            return "scaleX(".concat(this.scaleX, ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scaleYString", {
        get: function () {
            return "scaleY(".concat(this.scaleY, ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scaleZString", {
        get: function () {
            return "scaleZ(".concat(this.scaleZ, ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "skewXString", {
        get: function () {
            return "skewX(".concat(util.toRad(this.skewX), ")");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "skewYString", {
        get: function () {
            return "skewY(".concat(util.toRad(this.skewY), ")");
        },
        enumerable: false,
        configurable: true
    });
    Transform.prototype.from = function (data) {
        if (data)
            Object.assign(this, data);
    };
    // 生效
    Transform.prototype.apply = function (target) {
        var e_1, _a;
        if (target === void 0) { target = this.targets; }
        if (Array.isArray(target)) {
            try {
                for (var target_1 = __values(target), target_1_1 = target_1.next(); !target_1_1.done; target_1_1 = target_1.next()) {
                    var t = target_1_1.value;
                    this.apply(t);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (target_1_1 && !target_1_1.done && (_a = target_1.return)) _a.call(target_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return;
        }
        else {
            if (target.target && target.target.css)
                target.target.css('transform', this.toString(target.watchProps));
            else if (target.target)
                target.target.style.transform = this.toString(target.watchProps);
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
        if (obj === void 0) { obj = {}; }
        var transform = new Transform(obj, el);
        // 代理处理
        var proxy = new Proxy(transform, {
            get: function (target, p, receiver) {
                var v = target[p];
                return v;
            },
            set: function (target, p, value, receiver) {
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
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (watchProps_1_1 && !watchProps_1_1.done && (_a = watchProps_1.return)) _a.call(watchProps_1);
            }
            finally { if (e_2) throw e_2.error; }
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
            skewY: this.skewY,
        };
    };
    return Transform;
}(EventEmitter));

var NumberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];
var JElementStyle = /** @class */ (function (_super) {
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
        if (target === void 0) { target = this; }
        try {
            for (var _b = __values(this.names), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                if (typeof name_1 !== 'string')
                    continue;
                if (typeof data[name_1] === 'string' || typeof data[name_1] === 'number') {
                    if (target instanceof JElementStyle) {
                        target.setStyle(name_1, data[name_1]);
                    }
                    else {
                        target[name_1] = data[name_1];
                    }
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
                if (typeof this[name_2] === 'undefined')
                    continue;
                obj[name_2] = this[name_2];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return obj;
    };
    // 生成样式代理
    JElementStyle.createProxy = function (style) {
        if (style === void 0) { style = {}; }
        var jstyle = new JElementStyle(style);
        // 样式代理处理
        var proxy = new Proxy(jstyle, {
            get: function (target, p, receiver) {
                var v = target[p];
                // 数字样式，处理px问题
                if (typeof p === 'string' && NumberStyleMap.includes(p)) {
                    if (v === '0' || typeof v === 'undefined')
                        return 0;
                    if (util.isPXNumber(v))
                        return util.toNumber(v);
                }
                return v;
            },
            set: function (target, p, value, receiver) {
                // 非白名单样式不支持设置
                if (typeof p !== 'string' || !target.names.includes(p)) {
                    target[p] = value;
                    return true;
                }
                // 数字样式，处理px问题
                if (NumberStyleMap.includes(p)) {
                    value = typeof value === 'number' || util.isNumber(value) ? "".concat(value, "px") : value;
                }
                target.setStyle(p, value); // 应用到元素和类
                return true;
            }
        });
        return proxy;
    };
    return JElementStyle;
}(JElementCssStyle));

var SupportEventNames = [
    'mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout', 'mousewheel', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'blur', 'change', 'focus', 'drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'contextmenu'
];
var JEvent = /** @class */ (function () {
    function JEvent(target) {
        this._eventCache = [];
        if (target)
            this.target = target;
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
        return events.filter(function (k) { return SupportEventNames.includes(k); });
    };
    /**
     * 初始化所有支持的事件，在init之前不要on，不然在init的时候会被释放掉。
     * @param handler 事件处理函数
     * @param target 元素
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
     *
     * @method on
     * @static
     * @param {string | Array<string>} name 事件名称
     * @param {EventListenerOrEventListenerObject} fun 事件处理函数
     * @param {boolean | AddEventListenerOptions} opt 配置选项
     * @param {HTMLElement} target 绑定的元素，默认为 this.target
     */
    JEvent.prototype.on = function (name, fun, opt) {
        var e_1, _a;
        if (opt === void 0) { opt = false; }
        var events = this.normalizeEventNames(name);
        try {
            for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var n = events_1_1.value;
                this.target.addEventListener(n, fun, opt);
                this._eventCache.push([n, fun, opt]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    /**
     * 从对象中移除事件
     *
     * @method off
     * 不传 的时候删除所有事件
     * @param {string | Array<string>} name 事件名称
     * @param {EventListenerOrEventListenerObject} fun 事件处理函数
     * @param {boolean | AddEventListenerOptions} opt 配置选项
     * @param {HTMLElement} target 解除绑定的元素，默认为 this.target
     */
    JEvent.prototype.off = function (name, fun, opt) {
        var _this = this;
        if (opt === void 0) { opt = false; }
        var events = this.normalizeEventNames(name);
        this._eventCache = this._eventCache.filter(function (item) {
            if (events.length && !events.includes(item[0])) {
                return true;
            }
            if ((fun && fun !== item[1]) || (typeof opt !== 'undefined' && opt !== item[2])) {
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
}());

var JData = /** @class */ (function (_super) {
    __extends(JData, _super);
    function JData(data) {
        if (data === void 0) { data = {}; }
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
                    if (!n)
                        continue;
                    this.watch(n, watcher);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (name_1_1 && !name_1_1.done && (_a = name_1.return)) _a.call(name_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return this;
        }
        var watches = [];
        if (this.watcher.has(name))
            watches = this.watcher.get(name);
        else {
            this.watcher.set(name, watches);
        }
        watches.push(watcher);
        this.data[name] && this.propertyChange(name); // 触发一次
        return this;
    };
    // 属性改变
    JData.prototype.propertyChange = function (name, value) {
        var e_2, _a;
        if (typeof value !== 'undefined')
            this.data[name] = value;
        else {
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
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (watches_1_1 && !watches_1_1.done && (_a = watches_1.return)) _a.call(watches_1);
                }
                finally { if (e_2) throw e_2.error; }
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
                    if (typeof v !== 'undefined')
                        return v;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (watches_2_1 && !watches_2_1.done && (_a = watches_2.return)) _a.call(watches_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return this.data[name];
    };
    JData.prototype.from = function (data) {
        if (this.data)
            Object.assign(this, data);
        return this;
    };
    JData.prototype.toJSON = function () {
        var e_4, _a;
        var obj = {};
        var props = Object.getOwnPropertyNames(this.data);
        try {
            for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var name_2 = props_1_1.value;
                if (typeof this[name_2] === 'undefined' || typeof this[name_2] === 'function')
                    continue;
                obj[name_2] = this[name_2];
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return obj;
    };
    // 生成数据Data
    JData.createProxy = function (data) {
        // 代理处理
        var proxy = new Proxy(data, {
            get: function (target, p, receiver) {
                var v = target[p];
                if (typeof v === 'undefined' && typeof p === 'string') {
                    return target.getProperty(p);
                }
                return v;
            },
            set: function (target, p, value, receiver) {
                if (typeof p === 'string')
                    target.propertyChange(p, value);
                else
                    target[p] = value;
                return true;
            }
        });
        return proxy;
    };
    return JData;
}(EventEmitter));
// 元素卙础数据对象
var JElementData = /** @class */ (function (_super) {
    __extends(JElementData, _super);
    function JElementData(data) {
        if (data === void 0) { data = {}; }
        return _super.call(this, data) || this;
    }
    return JElementData;
}(JData));
var JImageData = /** @class */ (function (_super) {
    __extends(JImageData, _super);
    function JImageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JImageData;
}(JElementData));
var JTextData = /** @class */ (function (_super) {
    __extends(JTextData, _super);
    function JTextData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JTextData;
}(JElementData));

var JElement = /** @class */ (function (_super) {
    __extends(JElement, _super);
    function JElement(option) {
        if (option === void 0) { option = {}; }
        var _this = _super.call(this) || this;
        _this._id = '';
        // 类型名称
        _this._type = '';
        // 子元素
        _this._children = [];
        // 是否可编辑
        _this.editable = true;
        _this._id = _this.id || option.id || util.uuid();
        _this._type = _this.type || option.type || '';
        var nodeType = option.nodeType || 'div';
        // @ts-ignore
        _this._dom = document.createElement(nodeType);
        if (option.editor)
            _this.editor = option.editor;
        // 样式代理处理
        _this.style = JElementStyle.createProxy();
        _this.style.on('change', function (s) {
            _this.setDomStyle(s.name, s.value);
            _this.emit('styleChange', {
                type: 'styleChange',
                data: s,
                target: _this
            });
        });
        // 变换控制的是核心元素
        _this.transform = Transform.createProxy(option.transform, {
            target: _this,
            // 如果指定了只响应某几个属性
            watchProps: option.transformWatchProps
        });
        var dataType = option.dataType || JElementData;
        // @ts-ignore
        _this.data = JElementData.createProxy(new dataType());
        // 如果是组件，不在这里进行数据初始化调用
        _this.initData(option);
        // @ts-ignore
        if (option.className)
            _this.className = option.className;
        _this.bindEvent(); // 事件绑定
        return _this;
    }
    // 初始化一些基础属性
    JElement.prototype.initData = function (option) {
        var _this = this;
        // 属性变化映射到style
        this.data.watch([
            'left', 'top', 'width', 'height', 'zIndex', 'visible'
        ], {
            set: function (item) {
                if (item.name === 'visible') {
                    _this.style.display = item.value ? 'block' : 'none';
                }
                else if (item.name === 'rotation') {
                    _this.transform.rotateZ = item.value;
                }
                else if (item.name === 'angle') {
                    _this.transform.rotateZ = util.degToRad(item.value);
                }
                else
                    _this.style[item.name] = item.value;
            },
            get: function (name) {
                if (name === 'width') {
                    var w = _this.style.width || 0;
                    if ((!w || w === 'auto') && _this.dom && _this.dom.clientWidth)
                        return _this.dom.clientWidth;
                    return w;
                }
                else if (name === 'height') {
                    var h = _this.style.height || 0;
                    if ((!h || h === 'auto') && _this.dom && _this.dom.clientHeight)
                        return _this.dom.clientHeight;
                    return h;
                }
                else if (name === 'rotation') {
                    return _this.transform.rotateZ;
                }
                else if (name === 'angle') {
                    return util.radToDeg(_this.transform.rotateZ);
                }
                else if (name === 'visible') {
                    return _this.style.display !== 'none';
                }
                return _this.style[name];
            }
        });
        if (option.style)
            this.style.apply(option.style);
        if (option.editable === false)
            this.editable = false;
        if (option.visible === false)
            this.visible = false;
        if (option.data) {
            this.data.from(option.data);
        }
    };
    // 绑定事件
    JElement.prototype.bindEvent = function (dom) {
        var _this = this;
        // 事件托管
        this.event = new JEvent(dom || this.dom);
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
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "dom", {
        get: function () {
            return this._dom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "className", {
        get: function () {
            return this.dom.className;
        },
        set: function (v) {
            this.dom.className = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JElement.prototype, "visible", {
        get: function () {
            return this.data.visible;
        },
        set: function (v) {
            this.data.visible = v;
        },
        enumerable: false,
        configurable: true
    });
    // 设置css到dom
    JElement.prototype.setDomStyle = function (name, value) {
        if (name === 'backgroundImage' && value) {
            if (!/^\s*url\(/.test(value))
                value = "url(".concat(value, ")");
        }
        util.css(this.dom, name, value);
    };
    // 设置样式
    JElement.prototype.css = function (name, value) {
        util.css(this, name, value);
        return this;
    };
    // dom属性
    JElement.prototype.attr = function (name, value) {
        return util.attr(this.dom, name, value);
    };
    // 移位
    JElement.prototype.move = function (dx, dy) {
        this.data.left = util.toNumber(this.data.left) + dx;
        this.data.top = util.toNumber(this.data.top) + dy;
        this.emit('move', { dx: dx, dy: dy });
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
        if (parent === void 0) { parent = this; }
        if (Array.isArray(child)) {
            try {
                for (var child_1 = __values(child), child_1_1 = child_1.next(); !child_1_1.done; child_1_1 = child_1.next()) {
                    var c = child_1_1.value;
                    parent.addChild(c);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (child_1_1 && !child_1_1.done && (_a = child_1.return)) _a.call(child_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return parent;
        }
        if (child instanceof JElement) {
            child.parent = parent;
            parent.dom.appendChild(child.dom);
            parent.children.push(child);
        }
        else if (child instanceof HTMLElement) {
            parent.dom.appendChild(child);
        }
    };
    // 移除自已
    JElement.prototype.remove = function () {
        if (this.parent)
            this.parent.removeChild(this);
    };
    // 移除子元素
    JElement.prototype.removeChild = function (el) {
        // @ts-ignore
        if (el.dom && el.dom.parentElement === this.dom)
            this.dom.removeChild(el.dom || el);
        for (var i = this.children.length - 1; i > -1; i--) {
            if (this.children[i] === el)
                return this.children.splice(i, 1);
        }
        // @ts-ignore
        delete el.parent;
    };
    // 转为json
    JElement.prototype.toJSON = function (props, ig) {
        var e_2, _a, e_3, _b;
        if (props === void 0) { props = []; }
        if (ig === void 0) { ig = function (p) { return true; }; }
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
                }
                else if (v && v.toJSON) {
                    obj[k] = v.toJSON();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (this.children && this.children.length) {
            try {
                for (var _c = __values(this.children), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var child = _d.value;
                    if (child === this || ig(child) === false)
                        continue;
                    obj.children.push(child.toJSON());
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
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
}(EventEmitter));

var JBaseComponent = /** @class */ (function (_super) {
    __extends(JBaseComponent, _super);
    function JBaseComponent(option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        option.style = option.style || {};
        // position和overflow预设的值优先级最高
        option.style = Object.assign(__assign({}, ContainerDefaultStyle), option.style, {
            position: ContainerDefaultStyle.position,
            overflow: ContainerDefaultStyle.overflow
        });
        _this = _super.call(this, __assign(__assign({ 
            // 外层只响应Z轴旋转
            transformWatchProps: [
                'rotateZ', 'scaleX', 'scaleY'
            ] }, option), { nodeType: 'div', className: 'j-design-editor-container', isComponent: true })) || this;
        // 选中
        _this._selected = false;
        option.target = option.target || {};
        // 生成当前控制的元素
        _this.target = new JElement(__assign(__assign({}, option), { visible: true, data: {}, 
            // 不响应本身的变换，只响应父级的
            transformWatchProps: [], style: {
                display: 'block',
                cursor: 'pointer',
                width: '100%',
                height: '100%',
            } }));
        _this.addChild(_this.target);
        // 变换改为控制主元素
        _this.transform.bind({
            target: _this.target,
            watchProps: [
                'rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY'
            ]
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
        get: function () {
            return this._selected;
        },
        set: function (v) {
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
        if (name in ContainerDefaultStyle || name === 'transform') {
            _super.prototype.setDomStyle.call(this, name, value);
        }
        else {
            this.target && this.target.css(name, value);
        }
    };
    JBaseComponent.prototype.toJSON = function (props) {
        var _this = this;
        if (props === void 0) { props = []; }
        // 转json忽略渲染组件
        return _super.prototype.toJSON.call(this, props, function (el) {
            return el !== _this.target;
        });
    };
    return JBaseComponent;
}(JElement));

var JText = /** @class */ (function (_super) {
    __extends(JText, _super);
    function JText(option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        option.style = __assign({ fontFamily: 'Arial', textAlign: 'left', fontSize: 22, fontWeight: 'normal', fontStyle: 'normal', wordBreak: "keep-all", wordWrap: "break-word" }, option.style);
        _this = _super.call(this, __assign(__assign({}, option), { nodeType: 'div', dataType: JTextData })) || this;
        // 属性变化映射到style
        _this.data.watch([
            'text'
        ], {
            set: function (item) {
                _this.target.dom.innerText = item.value;
            },
            get: function (name) {
                return _this.target.dom.innerText;
            }
        });
        // @ts-ignore
        var text = option.text;
        if (text)
            _this.data.text = text;
        // 双击可编辑
        _this.on('dblclick', function () {
            _this.edit();
        });
        _this.on('select', function () {
            _this.closeEdit();
        });
        JText.TextControlCache.set(_this.id, _this); // 缓存起来
        return _this;
    }
    // 进入编辑状态
    JText.prototype.edit = function () {
        var _this = this;
        if (!this.editable)
            return;
        var editEl = this.editor.textEditElement;
        if (!editEl) {
            editEl = this.editor.textEditElement = new JElement({
                nodeType: 'textarea',
                visible: false,
                style: {
                    boxSizing: 'border-box',
                    padding: '4px',
                    position: 'absolute',
                    zIndex: topZIndex,
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
        var w = util.toNumber(this.data.width) * 1.5;
        var h = util.toNumber(this.data.height) * 1.2;
        var style = {};
        style.width = Math.max(w, 100) + 'px';
        style.height = Math.max(h, 100) + 'px';
        style.top = util.toNumber(this.data.top) - 4;
        style.left = util.toNumber(this.data.left) - 4;
        style.fontSize = this.style.fontSize;
        style.fontFamily = this.style.fontFamily;
        style.fontWeight = this.style.fontWeight;
        style.display = 'inline-block';
        util.css(editEl, style);
        editEl.dom.focus(); // 进入控件
    };
    // 结束编辑 
    JText.prototype.closeEdit = function () {
        var editEl = this.editor.textEditElement;
        if (!editEl || !editEl.visible)
            return;
        // 编辑的是当前元素，才采用它的值
        var id = editEl.attr('data-target');
        var target = JText.TextControlCache.get(id);
        if (target instanceof JText) {
            target.data.text = editEl.dom.value;
            editEl.data.visible = false;
            editEl.dom.value = ''; // 置空
        }
    };
    JText.prototype.toJSON = function (props) {
        if (props === void 0) { props = []; }
        props.push('text');
        return _super.prototype.toJSON.call(this, props);
    };
    JText.prototype.dispose = function () {
        JText.TextControlCache.delete(this.id);
        _super.prototype.dispose.call(this);
    };
    // 所有控件缓存
    JText.TextControlCache = new Map();
    return JText;
}(JBaseComponent));

var JImage = /** @class */ (function (_super) {
    __extends(JImage, _super);
    function JImage(option) {
        if (option === void 0) { option = {}; }
        var _this = _super.call(this, __assign(__assign({}, option), { nodeType: 'img', dataType: JImageData })) || this;
        _this.target.dom.onload = function (e) {
            _this.emit('load', e);
        };
        _this.target.dom.onerror = function (e) {
            _this.emit('error', e);
        };
        _this.target.attr('crossorigin', 'anonymous');
        // 属性变化映射到style
        _this.data.watch([
            'src'
        ], {
            set: function (item) {
                _this.target.dom.src = item.value;
            },
            get: function (name) {
                return _this.target.dom.src;
            }
        });
        // @ts-ignore
        var src = option.url || option.src;
        if (src)
            _this.data.src = src;
        return _this;
    }
    JImage.prototype.toJSON = function (props) {
        if (props === void 0) { props = []; }
        props.push('src');
        return _super.prototype.toJSON.call(this, props);
    };
    return JImage;
}(JBaseComponent));

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
        _this.paddingSize = 1;
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
                x: util.toNumber(this.data.left) + util.toNumber(this.data.width) / 2,
                y: util.toNumber(this.data.top) + util.toNumber(this.data.height) / 2,
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
        else ;
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

var JFontData = /** @class */ (function () {
    function JFontData(family, url, font) {
        this.family = family;
        this.url = url;
        this.font = font;
    }
    Object.defineProperty(JFontData.prototype, "status", {
        get: function () {
            if (this.font)
                return this.font.status;
            return 'unloaded';
        },
        enumerable: false,
        configurable: true
    });
    JFontData.prototype.load = function (url) {
        if (url === void 0) { url = this.url; }
        return __awaiter(this, void 0, void 0, function () {
            var f;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.url = url || this.url;
                        if (!this.font)
                            this.font = new FontFace(this.family, "url(\"".concat(this.url, "\")"));
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
}());
var JFonts = /** @class */ (function (_super) {
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
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (fonts_1_1 && !fonts_1_1.done && (_a = fonts_1.return)) _a.call(fonts_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (fonts) {
            for (var name_1 in fonts) {
                if (fonts[name_1] && typeof fonts[name_1] === 'object')
                    _this.fontConfigs.set(fonts[name_1].family.toLocaleLowerCase(), fonts[name_1]);
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
                            if (font.url && (font.status === 'unloaded' || font.status === 'error'))
                                return [2 /*return*/, font.load()];
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
            if (this.fonts.has(name))
                return this.fonts.get(name);
        }
        return null;
    };
    // 检查加载的字体是否存在，存在则返回字体对象
    JFonts.prototype.check = function (name) {
        var font = this.get(name);
        return !!font;
    };
    return JFonts;
}(EventEmitter));

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
        _this.regShape('image', JImage);
        // @ts-ignore
        _this.regShape('text', JText);
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
        this.elementController = new JControllerComponent({
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
                    if (el instanceof JBaseComponent && el.selected) {
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
}(JBaseComponent));

export { JBaseComponent, JEditor, JElement, JImage, JText, JEditor as default };
