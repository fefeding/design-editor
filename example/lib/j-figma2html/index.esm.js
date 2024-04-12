var util = {
    /**
     * 是否是数字，字符串数字或配身就是number返回true
     * @param v 原字符串或数字
     * @returns true/false
     */
    isNumber(v) {
        return typeof v === 'number' || /^\s*[\d]+(\.\d+)?\s*$/.test(v);
    },
    /**
     * 是否是带像素单位(px)的字符串
     * @param v
     * @returns
     */
    isPXNumber(v) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    },
    /**
     * 是否是带角度单位(deg)的字符串
     * @param v
     * @returns
     */
    isDegNumber(v) {
        return /^\s*[\d\.]+\s*deg\s*/i.test(v);
    },
    /**
     * 是否是带弧度单位(rad)的字符串
     * @param v
     * @returns
     */
    isRadNumber(v) {
        return /^\s*[\d\.]+\s*rad\s*/i.test(v);
    },
    /**
     * 转为像素字符串格式 : 2 -> 2px
     * @param v
     * @returns
     */
    toPX(v) {
        if (this.isNumber(v) || !this.isPXNumber(v))
            return v + 'px';
        return v + '';
    },
    /**
     * 带像素或其它单位的转换为数字: 2px -> 2
     * @param v
     * @param fractionDigits 保留小数位
     * @returns
     */
    toNumber(v, fractionDigits) {
        if (this.isNumber(v))
            v = Number(v);
        else if (typeof v === 'string')
            v = (parseFloat(v) || 0);
        if (typeof fractionDigits !== 'undefined') {
            v = Number(v.toFixed(fractionDigits));
        }
        return v;
    },
    /**
     * 弧度转角度: Math.PI -> 180
     * @param v
     * @returns
     */
    radToDeg(v) {
        return v * (180 / Math.PI);
    },
    /**
     * 角度转弧度 180 -> Math.PI
     * @param v
     * @returns
     */
    degToRad(v) {
        return v * (Math.PI / 180);
    },
    /**
     * 转为角度格式 1 -> 1deg, 3.14rad -> 180deg
     * @param v
     * @returns
     */
    toDeg(v) {
        if (this.isNumber(v))
            return v + 'deg';
        if (typeof v === 'string' && this.isRadNumber(v))
            return this.toDeg(this.radToDeg(parseFloat(v)));
        return v + '';
    },
    /**
     * 转为弧度格式, 1 -> 1rad,  180deg -> 3.14rad
     * @param v
     * @returns
     */
    toRad(v) {
        if (this.isNumber(v))
            return v + 'rad';
        if (typeof v === 'string' && this.isDegNumber(v))
            return this.toRad(this.degToRad(parseFloat(v)));
        return v + '';
    },
    /**
     * 把数值按比例转为目标数值，比如rgba的 0.5-》0.5*255
     * @param v
     * @param multiple 比例值，默认255
     */
    toMultipleInt(v, multiple = 1) {
        return Math.ceil(v * multiple);
    },
    /**
     * 把rgba颜色转为rgba()串型式
     * multiple倍数，如果是小数，则需要*255转到标准值
     */
    colorToString(color, multiple = 1) {
        let str = `${this.toMultipleInt(color.r, multiple)},${this.toMultipleInt(color.g, multiple)},${this.toMultipleInt(color.b, multiple)}`;
        if (typeof color.a !== 'undefined') {
            str = `rgba(${str},${color.a})`;
        }
        else {
            str = `rgb(${str})`;
        }
        return str;
    },
    /**
     * 获取元素的绝对定位
     * @param  el - 目标元素对象
     * @returns  位置对象(top,left)
     */
    getElementPosition(el) {
        const pos = { "y": 0, "x": 0 };
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
    /**
     * 获取元素bounds
     * @param el
     * @returns
     */
    getElementBoundingRect(el) {
        let bounds = {
            height: 0,
            width: 0,
            x: 0,
            y: 0
        };
        if (el.getBoundingClientRect) {
            bounds = el.getBoundingClientRect();
            const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            bounds.x += scrollLeft;
            bounds.y += scrollTop;
        }
        else {
            const pos = this.getElementPosition(el);
            bounds.x = pos.x;
            bounds.y = pos.y;
            bounds.width = el.clientWidth;
            bounds.height = el.clientHeight;
        }
        return bounds;
    },
    /**
     * 把domcument坐标转为指定元素相对坐标
     * @param pos
     * @param dom
     * @returns
     */
    toDomPosition(pos, dom) {
        const domPos = this.getElementBoundingRect(dom);
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
    rotatePoints(p, center, r) {
        if (!r || !p)
            return p;
        let cos = Math.cos(r);
        let sin = Math.sin(r);
        if (Array.isArray(p)) {
            for (let i = 0; i < p.length; i++) {
                if (!p[i])
                    continue;
                let x1 = p[i].x - center.x;
                let y1 = p[i].y - center.y;
                p[i].x = x1 * cos - y1 * sin + center.x;
                p[i].y = x1 * sin + y1 * cos + center.y;
            }
        }
        else {
            let x1 = p.x - center.x;
            let y1 = p.y - center.y;
            p.x = x1 * cos - y1 * sin + center.x;
            p.y = x1 * sin + y1 * cos + center.y;
        }
        return p;
    },
    /**
     * 设置dom样式
     * @param dom
     * @param name
     * @param value
     * @returns
     */
    css(dom, name, value) {
        if (!name)
            return;
        if (typeof name === 'object') {
            for (const n of Object.getOwnPropertyNames(name)) {
                this.css(dom, n, name[n]);
            }
        }
        else {
            dom.style[name] = value;
        }
        return this;
    },
    /**
     * 设置或读取dom属性
     * @param dom
     * @param name
     * @param value
     * @returns
     */
    attr(dom, name, value) {
        if (typeof value !== 'undefined') {
            dom.setAttribute(name, value + '');
            return value;
        }
        else {
            return dom.getAttribute(name);
        }
    },
    /**
     * 检测是否支持某字体
     * @param family 字体名
     */
    checkFont(family) {
        if (!family)
            return false;
        const baseFont = 'Arial';
        if (baseFont.toLowerCase() === family.toLowerCase())
            return true;
        const txt = "a";
        const fontSize = 100;
        const w = 100, h = 100; // 宽高
        const cvs = document.createElement('canvas');
        const ctx = cvs.getContext('2d', {
            willReadFrequently: true
        });
        cvs.width = w;
        cvs.height = h;
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.textBaseline = "middle";
        const check = function (ctx, family, w, h) {
            ctx.clearRect(0, 0, w, h);
            ctx.font = fontSize + "px" + family + ", " + baseFont;
            ctx.fillText(txt, w / 2, h / 2);
            const data = ctx.getImageData(0, 0, w, h).data;
            return [].slice.call(data).filter((p) => p != 0);
        };
        const supported = check(ctx, baseFont, w, h).join("") !== check(ctx, family, w, h).join("");
        return supported;
    },
    /**
     * 设置class样式
     * @param dom 节点
     * @param name 样式名
     * @param remove 如果true则表示删除样式
     */
    class(dom, name, remove = false) {
        if (Array.isArray(name)) {
            for (const n of name) {
                this.class(dom, n, remove);
            }
            return;
        }
        if (remove) {
            dom.classList.remove(name);
        }
        else {
            if (!dom.classList.contains(name))
                dom.classList.add(name);
        }
    },
    /**
     * 设置光标位置
     * @param dom 元素 htmlelement
     */
    setRange(dom, position) {
        let range;
        if (position) {
            //@ts-ignore
            range = document.caretPositionFromPoint ? document.caretPositionFromPoint(position.x, position.y) : document.caretRangeFromPoint(position.x, position.y);
        }
        else {
            // 把光标置于最后
            range = document.createRange();
            if (dom) {
                const nodes = dom.childNodes;
                if (nodes.length) {
                    const last = nodes[nodes.length - 1];
                    range.setStart(last, last.textContent.length);
                }
            }
        }
        const sel = window.getSelection();
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    },
    // 本地唯一ID，这个只要保证当前线程唯一即可，非全球唯一
    uuid() {
        const time = Date.now();
        const rnd = Math.floor(Math.random() * 10000000000);
        return (time + rnd).toString();
    },
    /**
     * 获取二点在标准坐标系中的的弧度, 返回值为 0 ~ Math.PI*2
     * @param start
     * @param end
     */
    getPointCoordRotation(start, end) {
        const dy = end.y - start.y;
        const dx = end.x - start.x;
        if (dx === 0) {
            if (dy > 0)
                return Math.PI + Math.PI / 2;
            else if (dy < 0)
                return Math.PI / 2;
            else
                return 0;
        }
        else if (dy === 0) {
            if (dx > 0)
                return 0;
            else if (dx < 0)
                return Math.PI;
            else
                return 0;
        }
        const r = Math.atan2(dy, dx);
        return r <= 0 ? Math.abs(r) : (Math.PI * 2 - r);
    },
    /**
     * 把图片旋转一定角度，返回base64
     * @param url
     * @param rotation
     * @returns
     */
    async rotateImage(url, rotation) {
        if (!url)
            return url;
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.setAttribute('crossorigin', 'anonymous');
            img.onload = function (e) {
                const cvs = document.createElement('canvas');
                cvs.width = img.width;
                cvs.height = img.height;
                const ctx = cvs.getContext('2d');
                ctx.clearRect(0, 0, cvs.width, cvs.height);
                ctx.translate(cvs.width / 2, cvs.height / 2);
                ctx.rotate(rotation);
                ctx.translate(-cvs.width / 2, -cvs.height / 2);
                ctx.drawImage(img, 0, 0);
                const data = cvs.toDataURL();
                resolve(data);
            };
            img.onerror = function (e) {
                reject && reject(e);
            };
            img.src = url;
        });
    },
    /**
     * 请求远程资源
     * @param url
     * @param option
     * @returns
     */
    async request(url, option) {
        option = option || {};
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest(); //新建XMLHttpRequest对象
            const params = [];
            if (option.data) {
                for (const name in option.data) {
                    params.push(`${name}=${encodeURIComponent(option.data[name])}`);
                }
            }
            const method = option.method ? option.method.toUpperCase() : 'GET';
            if (method === 'GET') {
                url += (url.includes('?') ? '&' : '?') + params.join('&');
            }
            request.onreadystatechange = function (e) {
                if (this.readyState === 4) { //成功完成
                    //判断相应结果：
                    if (this.status === 200) {
                        resolve(this.responseText);
                    }
                    else {
                        reject(e);
                    }
                }
            };
            //发送请求：
            request.open(method, url);
            if (option.headers) {
                for (const name in option.headers) {
                    request.setRequestHeader(name, option.headers[name]);
                }
            }
            request.send(method === 'POST' ? params.join('&') : null);
        });
    }
};

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

/** A string enum with value, describing the end caps of vector paths. */
var StrokeCap;
(function (StrokeCap) {
    StrokeCap["NONE"] = "NONE";
    StrokeCap["ROUND"] = "ROUND";
    StrokeCap["SQUARE"] = "SQUARE";
    StrokeCap["LINE_ARROW"] = "LINE_ARROW";
    StrokeCap["TRIANGLE_ARROW"] = "TRIANGLE_ARROW";
})(StrokeCap || (StrokeCap = {}));
/** Where stroke is drawn relative to the vector outline as a string enum */
var StrokeAlign;
(function (StrokeAlign) {
    StrokeAlign["INSIDE"] = "INSIDE";
    StrokeAlign["OUTSIDE"] = "OUTSIDE";
    StrokeAlign["CENTER"] = "CENTER";
})(StrokeAlign || (StrokeAlign = {}));
/** A string enum with value, describing how corners in vector paths are rendered. */
var StrokeJoin;
(function (StrokeJoin) {
    StrokeJoin["MITER"] = "MITER";
    StrokeJoin["BEVEL"] = "BEVEL";
    StrokeJoin["ROUND"] = "ROUND";
})(StrokeJoin || (StrokeJoin = {}));
var ImageType;
(function (ImageType) {
    ImageType["JPG"] = "JPG";
    ImageType["PNG"] = "PNG";
    ImageType["SVG"] = "SVG";
    ImageType["PDF"] = "PDF";
})(ImageType || (ImageType = {}));
/** A string enum with value, indicating the type of boolean operation applied */
var BooleanOperationType;
(function (BooleanOperationType) {
    BooleanOperationType["UNION"] = "UNION";
    BooleanOperationType["INTERSECT"] = "INTERSECT";
    BooleanOperationType["SUBTRACT"] = "SUBTRACT";
    BooleanOperationType["EXCLUDE"] = "EXCLUDE";
})(BooleanOperationType || (BooleanOperationType = {}));
/** Text casing applied to the node, default is the original casing */
var TextCase;
(function (TextCase) {
    TextCase["ORIGINAL"] = "ORIGINAL";
    TextCase["UPPER"] = "UPPER";
    TextCase["LOWER"] = "LOWER";
    TextCase["TITLE"] = "TITLE";
    TextCase["SMALL_CAPS"] = "SMALL_CAPS";
    TextCase["SMALL_CAPS_FORCED"] = "SMALL_CAPS_FORCED";
})(TextCase || (TextCase = {}));
/** Text decoration applied to the node */
var TextDecoration;
(function (TextDecoration) {
    TextDecoration["NONE"] = "NONE";
    TextDecoration["STRIKETHROUGH"] = "STRIKETHROUGH";
    TextDecoration["UNDERLINE"] = "UNDERLINE";
})(TextDecoration || (TextDecoration = {}));
/** Dimensions along which text will auto resize, default is that the text does not auto-resize. */
var TextAutoResize;
(function (TextAutoResize) {
    TextAutoResize["NONE"] = "NONE";
    TextAutoResize["HEIGHT"] = "HEIGHT";
    TextAutoResize["WIDTH_AND_HEIGHT"] = "WIDTH_AND_HEIGHT";
    TextAutoResize["TRUNCATE"] = "TRUNCATE";
})(TextAutoResize || (TextAutoResize = {}));
/** The unit of the line height value specified by the user. */
var LineHeightUnit;
(function (LineHeightUnit) {
    LineHeightUnit["PIXELS"] = "PIXELS";
    LineHeightUnit["FONT_SIZE_%"] = "FONT_SIZE_%";
    LineHeightUnit["INTRINSIC_%"] = "INTRINSIC_%";
})(LineHeightUnit || (LineHeightUnit = {}));
var ConstrainType;
(function (ConstrainType) {
    /** Scale by value */
    ConstrainType["SCALE"] = "SCALE";
    /** Scale proportionally and set width to value */
    ConstrainType["WIDTH"] = "WIDTH";
    /** Scale proportionally and set width to value */
    ConstrainType["HEIGHT"] = "HEIGHT";
})(ConstrainType || (ConstrainType = {}));
/**
 * This type is a string enum with the following possible values
 * Normal blends:
 * "PASS_THROUGH" (Only applicable to objects with children)
 * "NORMAL"
 *
 * Darken:
 * "DARKEN"
 * "MULTIPLY"
 * "LINEAR_BURN"
 * "COLOR_BURN"
 *
 * Lighten:
 * "LIGHTEN"
 * "SCREEN"
 * "LINEAR_DODGE"
 * "COLOR_DODGE"
 *
 * Contrast:
 * "OVERLAY"
 * "SOFT_LIGHT"
 * "HARD_LIGHT"
 *
 * Inversion:
 * "DIFFERENCE"
 * "EXCLUSION"
 *
 * Component:
 * "HUE"
 * "SATURATION"
 * "COLOR"
 * "LUMINOSITY"
 */
var BlendMode;
(function (BlendMode) {
    /** (Only applicable to objects with children) */
    BlendMode["PASS_THROUGH"] = "PASS_THROUGH";
    /** (Only applicable to objects with children) */
    BlendMode["NORMAL"] = "NORMAL";
    /** Darken */
    BlendMode["DARKEN"] = "DARKEN";
    BlendMode["MULTIPLY"] = "MULTIPLY";
    BlendMode["LINEAR_BURN"] = "LINEAR_BURN";
    BlendMode["COLOR_BURN"] = "COLOR_BURN";
    /** Lighten */
    BlendMode["LIGHTEN"] = "LIGHTEN";
    BlendMode["SCREEN"] = "SCREEN";
    BlendMode["LINEAR_DODGE"] = "LINEAR_DODGE";
    BlendMode["COLOR_DODGE"] = "COLOR_DODGE";
    /** Contrast */
    BlendMode["OVERLAY"] = "OVERLAY";
    BlendMode["SOFT_LIGHT"] = "SOFT_LIGHT";
    BlendMode["HARD_LIGHT"] = "HARD_LIGHT";
    /** Inversion */
    BlendMode["DIFFERENCE"] = "DIFFERENCE";
    BlendMode["EXCLUSION"] = "EXCLUSION";
    /** Component */
    BlendMode["HUE"] = "HUE";
    BlendMode["SATURATION"] = "SATURATION";
    BlendMode["COLOR"] = "COLOR";
    BlendMode["LUMINOSITY"] = "LUMINOSITY";
})(BlendMode || (BlendMode = {}));
/**
 * Enum describing animation easing curves
 * This type is a string enum with the following possible values
 * "EASE_IN": Ease in with an animation curve similar to CSS ease-in.
 * "EASE_OUT": Ease out with an animation curve similar to CSS ease-out.
 * "EASE_IN_AND_OUT": Ease in and then out with an animation curve similar to CSS ease-in-out.
 * "LINEAR": No easing, similar to CSS linear.
 */
var EasingType;
(function (EasingType) {
    /** Ease in with an animation curve similar to CSS ease-in. */
    EasingType["EASE_IN"] = "EASE_IN";
    /** Ease out with an animation curve similar to CSS ease-out. */
    EasingType["EASE_OUT"] = "EASE_OUT";
    /** Ease in and then out with an animation curve similar to CSS ease-in-out. */
    EasingType["EASE_IN_AND_OUT"] = "EASE_IN_AND_OUT";
    /** No easing, similar to CSS linear. */
    EasingType["LINEAR"] = "LINEAR";
})(EasingType || (EasingType = {}));
var LayoutConstraintVertical;
(function (LayoutConstraintVertical) {
    LayoutConstraintVertical["TOP"] = "TOP";
    LayoutConstraintVertical["BOTTOM"] = "BOTTOM";
    LayoutConstraintVertical["CENTER"] = "CENTER";
    LayoutConstraintVertical["TOP_BOTTOM"] = "TOP_BOTTOM";
    LayoutConstraintVertical["SCALE"] = "SCALE";
})(LayoutConstraintVertical || (LayoutConstraintVertical = {}));
var LayoutConstraintHorizontal;
(function (LayoutConstraintHorizontal) {
    LayoutConstraintHorizontal["LEFT"] = "LEFT";
    LayoutConstraintHorizontal["RIGHT"] = "RIGHT";
    LayoutConstraintHorizontal["CENTER"] = "CENTER";
    LayoutConstraintHorizontal["LEFT_RIGHT"] = "LEFT_RIGHT";
    LayoutConstraintHorizontal["SCALE"] = "SCALE";
})(LayoutConstraintHorizontal || (LayoutConstraintHorizontal = {}));
var LayoutAlign;
(function (LayoutAlign) {
    /** Determines if the layer should stretch along the parent’s counter axis. This property is only provided for direct children of auto-layout frames. */
    LayoutAlign["INHERIT"] = "INHERIT";
    LayoutAlign["STRETCH"] = "STRETCH";
    /** In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT". */
    LayoutAlign["MIN"] = "MIN";
    LayoutAlign["CENTER"] = "CENTER";
    LayoutAlign["MAX"] = "MAX";
})(LayoutAlign || (LayoutAlign = {}));
var LayoutGridPattern;
(function (LayoutGridPattern) {
    LayoutGridPattern["COLUMNS"] = "COLUMNS";
    LayoutGridPattern["ROWS"] = "ROWS";
    LayoutGridPattern["GRID"] = "GRID";
})(LayoutGridPattern || (LayoutGridPattern = {}));
var LayoutGridAlignment;
(function (LayoutGridAlignment) {
    LayoutGridAlignment["MIN"] = "MIN";
    LayoutGridAlignment["MAX"] = "MAX";
    LayoutGridAlignment["CENTER"] = "CENTER";
})(LayoutGridAlignment || (LayoutGridAlignment = {}));
var MaskType;
(function (MaskType) {
    MaskType["ALPHA"] = "ALPHA";
    MaskType["VECTOR"] = "VECTOR";
    MaskType["LUMINANCE"] = "LUMINANCE"; //the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
})(MaskType || (MaskType = {}));
var AxisSizingMode;
(function (AxisSizingMode) {
    AxisSizingMode["FIXED"] = "FIXED";
    AxisSizingMode["AUTO"] = "AUTO";
})(AxisSizingMode || (AxisSizingMode = {}));
var EffectType;
(function (EffectType) {
    EffectType["INNER_SHADOW"] = "INNER_SHADOW";
    EffectType["DROP_SHADOW"] = "DROP_SHADOW";
    EffectType["LAYER_BLUR"] = "LAYER_BLUR";
    EffectType["BACKGROUND_BLUR"] = "BACKGROUND_BLUR";
})(EffectType || (EffectType = {}));
var PaintType;
(function (PaintType) {
    PaintType["SOLID"] = "SOLID";
    PaintType["GRADIENT_LINEAR"] = "GRADIENT_LINEAR";
    PaintType["GRADIENT_RADIAL"] = "GRADIENT_RADIAL";
    PaintType["GRADIENT_ANGULAR"] = "GRADIENT_ANGULAR";
    PaintType["GRADIENT_DIAMOND"] = "GRADIENT_DIAMOND";
    PaintType["IMAGE"] = "IMAGE";
    PaintType["EMOJI"] = "EMOJI";
    PaintType["VIDEO"] = "VIDEO";
})(PaintType || (PaintType = {}));
var PaintSolidScaleMode;
(function (PaintSolidScaleMode) {
    PaintSolidScaleMode["FILL"] = "FILL";
    PaintSolidScaleMode["FIT"] = "FIT";
    PaintSolidScaleMode["TILE"] = "TILE";
    PaintSolidScaleMode["STRETCH"] = "STRETCH";
})(PaintSolidScaleMode || (PaintSolidScaleMode = {}));
var PathWindingRule;
(function (PathWindingRule) {
    PathWindingRule["EVENODD"] = "EVENODD";
    PathWindingRule["NONZERO"] = "NONZERO";
})(PathWindingRule || (PathWindingRule = {}));
/** List types are represented as string enums with one of these possible values: ORDERED: Text is an ordered list (numbered), UNORDERED: Text is an unordered list (bulleted), NONE: Text is plain text and not part of any list */
var LineTypes;
(function (LineTypes) {
    LineTypes["ORDERED"] = "ORDERED";
    LineTypes["UNORDERED"] = "UNORDERED";
    LineTypes["NONE"] = "NONE";
})(LineTypes || (LineTypes = {}));

class BaseConverter {
    async convert(node, dom, parentNode, option) {
        dom.style = dom.style || {};
        // 位置
        dom.bounds = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        };
        if (node.absoluteBoundingBox) {
            dom.bounds.width = node.absoluteBoundingBox.width;
            dom.bounds.height = node.absoluteBoundingBox.height;
            // 相对于父位置
            if (parentNode && parentNode.absoluteBoundingBox) {
                dom.data.left = dom.bounds.x = node.absoluteBoundingBox.x - parentNode.absoluteBoundingBox.x;
                dom.data.top = dom.bounds.y = node.absoluteBoundingBox.y - parentNode.absoluteBoundingBox.y;
            }
            // 没有父元素，就认为约对定位为0
            else {
                dom.data.left = dom.bounds.x = 0;
                dom.data.top = dom.bounds.y = 0;
            }
            dom.style.left = util.toPX(dom.bounds.x).toString();
            dom.style.top = util.toPX(dom.bounds.y).toString();
            dom.absoluteBoundingBox = node.absoluteBoundingBox;
        }
        // 背景色
        if (node.backgroundColor)
            dom.style.backgroundColor = util.colorToString(node.backgroundColor, 255);
        if (node.cornerRadius) {
            dom.style.borderRadius = util.toPX(node.cornerRadius);
        }
        else if (node.rectangleCornerRadii) {
            dom.style.borderRadius = node.rectangleCornerRadii.map(p => util.toPX(p)).join(' ');
        }
        if (node.opacity)
            dom.style.opacity = node.opacity.toString();
        if (node.constraints) {
            if (node.constraints.vertical) {
                dom.style.verticalAlign = { 'CENTER': 'middle', 'TOP_BOTTOM': 'super', 'SCALE': 'center' }[node.constraints.vertical];
            }
            if (node.constraints.horizontal) {
                dom.style.textAlign = { 'SCALE': 'center', 'LEFT_RIGHT': 'justify-all' }[node.constraints.vertical];
            }
        }
        // 旋转
        if (node.rotation) {
            dom.data.rotation = node.rotation;
            dom.style.transform = `rotate(${util.toRad(node.rotation)})`;
        }
        // 裁剪超出区域
        if (node.clipsContent === true || (parentNode && parentNode.clipsContent === true))
            dom.style.overflow = 'hidden';
        dom.preserveRatio = node.preserveRatio;
        // padding
        for (const padding of ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom']) {
            const v = node[padding];
            if (v) {
                dom.style[padding] = util.toPX(v);
                if (['paddingLeft', 'paddingRight'].includes(padding))
                    dom.bounds.width -= v;
                else
                    dom.bounds.height -= v;
            }
        }
        await this.convertStyle(node, dom, option);
        await this.convertFills(node, dom, option); // 解析fills
        await this.convertStrokes(node, dom, option); // 边框
        await this.convertEffects(node, dom, option); // 滤镜
        dom.data.width = dom.bounds.width;
        dom.data.height = dom.bounds.height;
        dom.style.width = util.toPX(dom.bounds.width).toString();
        dom.style.height = util.toPX(dom.bounds.height).toString();
        return dom;
    }
    // 生成节点对象
    createDomNode(type, option) {
        const dom = {
            data: {},
            style: {},
            children: [],
            ...option,
            type: type,
        };
        return dom;
    }
    // 转换style
    async convertStyle(node, dom, option) {
        // @ts-ignore
        const style = node.style || node;
        if (!style)
            return dom;
        if (style.fontFamily)
            dom.style.fontFamily = style.fontFamily;
        if (style.fontSize)
            dom.style.fontSize = util.toPX(style.fontSize);
        if (style.fontWeight)
            dom.style.fontWeight = style.fontWeight.toString();
        if (style.italic)
            dom.style.fontStyle = 'italic';
        if (style.letterSpacing) {
            dom.style.letterSpacing = util.toPX(style.letterSpacing);
        }
        if (style.lineHeightPx)
            dom.style.lineHeight = util.toPX(style.lineHeightPx);
        if (style.textAlignHorizontal)
            dom.style.textAlign = style.textAlignHorizontal;
        if (style.textAlignVertical)
            dom.style.verticalAlign = style.textAlignVertical;
        return dom;
    }
    // 转换滤镜
    async convertEffects(node, dom, option) {
        if (!node.isMaskOutline && node.effects) {
            dom.style.filter = dom.style.filter || '';
            for (const effect of node.effects) {
                if (effect.visible === false)
                    continue;
                switch (effect.type) {
                    case EffectType.DROP_SHADOW:
                    case EffectType.INNER_SHADOW: {
                        dom.style.filter += ` drop-shadow(${util.toPX(effect.offset.x)} ${util.toPX(effect.offset.y)} ${util.toPX(effect.radius)} ${util.colorToString(effect.color, 255)})`;
                        break;
                    }
                    case EffectType.LAYER_BLUR:
                    case EffectType.BACKGROUND_BLUR: {
                        dom.style.filter += ` blur(${util.toPX(effect.radius)})`;
                        break;
                    }
                }
            }
        }
        return dom;
    }
    // 处理填充
    async convertFills(node, dom, option) {
        // isMaskOutline 如果为true则忽略填充样式
        if (!node.isMaskOutline && node.fills) {
            for (const fill of node.fills) {
                if (fill.visible === false)
                    continue;
                switch (fill.type) {
                    case PaintType.SOLID: {
                        dom.style.backgroundColor = util.colorToString(fill.color, 255);
                        break;
                    }
                    // 线性渐变
                    case PaintType.GRADIENT_LINEAR: {
                        dom.style.background = this.convertLinearGradient(fill, dom);
                        break;
                    }
                    // 径向性渐变
                    case PaintType.GRADIENT_RADIAL: {
                        dom.style.background = this.convertRadialGradient(fill, dom);
                        break;
                    }
                    // 图片
                    case PaintType.IMAGE: {
                        if (option && option.getImage) {
                            const img = await option.getImage(fill.imageRef);
                            if (img) {
                                if (dom.type === 'img') {
                                    dom.url = img;
                                }
                                else {
                                    dom.style.backgroundImage = `url(${img})`;
                                }
                            }
                            dom.backgroundImageUrl = img || fill.imageRef;
                        }
                        break;
                    }
                }
                switch (fill.scaleMode) {
                    case PaintSolidScaleMode.FILL: {
                        dom.style.backgroundSize = 'cover';
                        break;
                    }
                    case PaintSolidScaleMode.FIT: {
                        dom.style.backgroundSize = 'contain';
                        break;
                    }
                    case PaintSolidScaleMode.STRETCH: {
                        dom.style.backgroundSize = '100% 100%';
                        break;
                    }
                    // 平铺
                    case PaintSolidScaleMode.TILE: {
                        dom.style.backgroundRepeat = 'repeat';
                        break;
                    }
                }
                /*
                                if(dom && fill.imageTransform) {
                                    if(!dom.transform) dom.transform = {};
                                    const [[a, c, e], [b, d, f]] = fill.imageTransform;
                                    // 计算旋转角度和正弦值
                                    const rotation = Math.atan2(b, a);
                                    const scaleX = Math.sqrt(a * a + b * b);
                                    const scaleY = Math.sqrt(c * c + d * d);
                                    dom.transform.translateX = e*100 + '%';
                                    dom.transform.translateY = f*100 + '%';
                                    dom.transform.rotateZ = rotation;
                                    dom.transform.scaleX = scaleX;
                                    dom.transform.scaleY = scaleY;
                                }*/
            }
        }
        return dom;
    }
    // 处理边框
    async convertStrokes(node, dom, option) {
        if (node.strokes && node.strokes.length) {
            for (const stroke of node.strokes) {
                if (stroke.visible === false)
                    continue;
                if (stroke.color) {
                    dom.style.outlineColor = util.colorToString(stroke.color, 255);
                }
                switch (stroke.type) {
                    case PaintType.SOLID: {
                        dom.style.outlineStyle = 'solid';
                        break;
                    }
                    // 线性渐变
                    case PaintType.GRADIENT_LINEAR: {
                        dom.style.borderImageSource = this.convertLinearGradient(stroke, dom);
                        break;
                    }
                    // 径向性渐变
                    case PaintType.GRADIENT_RADIAL: {
                        dom.style.borderImageSource = this.convertRadialGradient(stroke, dom);
                        break;
                    }
                    // 图片
                    case PaintType.IMAGE: {
                        if (option && option.getImage) {
                            const img = await option.getImage(stroke.imageRef);
                            if (img)
                                dom.style.borderImageSource = `url(${img})`;
                        }
                        switch (stroke.scaleMode) {
                            case PaintSolidScaleMode.FILL: {
                                dom.style.borderImageSlice = 'fill';
                                break;
                            }
                            case PaintSolidScaleMode.FIT: {
                                dom.style.borderImageRepeat = 'space';
                                break;
                            }
                            case PaintSolidScaleMode.STRETCH: {
                                dom.style.borderImageRepeat = 'stretch';
                                break;
                            }
                            // 平铺
                            case PaintSolidScaleMode.TILE: {
                                dom.style.borderImageRepeat = 'repeat';
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            if (node.strokeWeight) {
                if (dom.style.outlineColor)
                    dom.style.outlineWidth = util.toPX(node.strokeWeight);
                if (dom.style.borderImageSource)
                    dom.style.borderImageWidth = util.toPX(node.strokeWeight);
            }
            if (node.strokeDashes && node.strokeDashes.length) {
                dom.style.outlineStyle = 'dashed';
            }
        }
        return dom;
    }
    // 转换线性渐变
    convertLinearGradient(gradient, dom) {
        const handlePositions = gradient.gradientHandlePositions;
        const gradientStops = gradient.gradientStops;
        /**
         * 需要计算figma线性渐变位置百分比，因为把图形X和Y都标准化成0-1.所以我们可以认为它就是一个正方形，在figma上编缉的渐变2个点表示stops变化区域，需要计算这2点区域映射到图形的stop比
         */
        const size = this.getGradientSize(handlePositions);
        if (size) {
            /*console.log(size);
            const startProjection = size.getProjectionOnLine(size.start);
            const startDom = this.createDomNode('div');
            startDom.style.top = startProjection.y*100 + '%';
            startDom.style.left = startProjection.x*100 + '%';
            startDom.style.position = 'absolute';
            startDom.style.backgroundColor = 'red';
            startDom.style.width = startDom.style.height = '3px';

            const startDom2 = this.createDomNode('div');
            startDom2.style.top = size.start.y*100 + '%';
            startDom2.style.left = size.start.x*100 + '%';
            startDom2.style.position = 'absolute';
            startDom2.style.backgroundColor = 'red';
            startDom2.style.width = startDom2.style.height = '3px';

            const endProjection = size.getProjectionOnLine(size.end);
            const endDom = this.createDomNode('div');
            endDom.style.top = endProjection.y*100 + '%';
            endDom.style.left = endProjection.x*100 + '%';
            endDom.style.backgroundColor = 'blue';
            endDom.style.position = 'absolute';
            endDom.style.width = endDom.style.height = '3px';
            const endDom2 = this.createDomNode('div');
            endDom2.style.top = size.end.y*100 + '%';
            endDom2.style.left = size.end.x*100 + '%';
            endDom2.style.backgroundColor = 'blue';
            endDom2.style.position = 'absolute';
            endDom2.style.width = endDom2.style.height = '3px';
            dom.children.push(startDom,startDom2, endDom,endDom2);*/
            // 线性渐变，需要把颜色偏移量对应到figma线段比例中，并且需要位移到顶点再计算颜色偏移比例
            for (const stop of gradientStops) {
                const r = size.r * stop.position;
                const p = {
                    x: r * size.cos + size.start.x,
                    y: r * size.sin + size.start.y,
                };
                const projection = size.getProjectionOnLine(p); // 得到平移后线上的投影点
                /*const stopDom = this.createDomNode('div');
                stopDom.style.top = projection.y*100 + '%';
                stopDom.style.left = projection.x*100 + '%';
                stopDom.style.backgroundColor = 'yellow';
                stopDom.style.position = 'absolute';
                stopDom.style.width = stopDom.style.height = '3px';
                dom.children.push(stopDom);*/
                const dx = projection.x - size.startInShape.x;
                const dy = projection.y - size.startInShape.y;
                stop.position = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                // 如果交点在当前右边，则偏移量为负数
                if (size.startInShape.x === 0 && size.startInShape.y === 0) {
                    if (p.x < 0 || p.y < 0)
                        stop.position = -stop.position;
                }
                else if (size.startInShape.x === 1 && size.startInShape.y === 0) {
                    if (p.x > 1 || p.y < 0)
                        stop.position = -stop.position;
                }
                else if (size.startInShape.x === 1 && size.startInShape.y === 1) {
                    if (p.y > 1 || p.x > 1)
                        stop.position = -stop.position;
                }
                else if (size.startInShape.x === 0 && size.startInShape.y === 1) {
                    if (p.x < 0 || p.y > 1)
                        stop.position = -stop.position;
                }
            }
        }
        const linearGradient = `linear-gradient(${this.getGradientDirection(handlePositions)}, ${this.getGradientStops(gradientStops)})`;
        return linearGradient;
    }
    // 转换径向性渐变
    convertRadialGradient(gradient, dom) {
        const handlePositions = gradient.gradientHandlePositions;
        const gradientStops = gradient.gradientStops;
        const radialGradient = `radial-gradient(${this.getRadialGradientPosition(handlePositions)}, ${this.getGradientStops(gradientStops)})`;
        return radialGradient;
    }
    // 生成渐变尺寸
    getGradientSize(gradientHandlePositions) {
        if (!gradientHandlePositions || gradientHandlePositions.length < 2)
            return null;
        // 由于figma的渐变起始和终点是第一个和第二个坐标，但css是用的角度，这里要计算起始偏移和终点偏移，再计算stop的偏移比例，才是真实的css渐变比例
        const start = { ...gradientHandlePositions[0] };
        const end = { ...gradientHandlePositions[1] };
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const r = Math.sqrt(dx * dx + dy * dy);
        const cos = dx / r;
        const sin = dy / r;
        const m = dy / dx;
        // 计算渐变二点延长级起始点边与图形边的交点
        const startInShape = {
            x: 0,
            y: 0
        };
        // X轴方向是向右的
        if (dx > 0) {
            // 如果二个点的X轴距离大于Y轴距离，则表示连线或延长级与左边线相交
            if (dx > Math.abs(dy)) {
                // 向右上角，则起点为左下角
                if (dy < 0) {
                    startInShape.y = 1;
                }
            }
            // 向右上角，且与底边相交
            else if (dy < 0) {
                startInShape.y = 1;
            }
            // 向右下角，跟顶边相交
            else ;
        }
        // X轴向左方向
        else if (dx < 0) {
            // 如果二个点的X轴距离大于Y轴距离，则表示连线或延长级与右边线相交
            if (dx > Math.abs(dy)) {
                startInShape.x = 1;
                if (dy <= 0) {
                    startInShape.y = 1;
                }
            }
            // 向左上角，且与底边相交
            else if (dy < 0) {
                startInShape.x = 1;
                startInShape.y = 1;
            }
            // 向左下角，跟顶边相交
            else {
                startInShape.x = 1;
            }
        }
        else {
            if (dy <= 0) {
                startInShape.y = 1;
            }
        }
        return {
            start,
            end,
            r,
            m,
            startInShape,
            cos,
            sin,
            getProjectionOnLine(point) {
                if (this.start.x === this.end.x)
                    return { x: this.start.x, y: point.y };
                if (this.start.y === this.end.y)
                    return { x: point.x, y: this.start.y };
                // 新直线b，斜率不变m
                const b = this.startInShape.y - this.m * this.startInShape.x;
                const xPrime = (point.y - b + (point.x / this.m)) / (this.m + (1 / this.m));
                const yPrime = m * xPrime + b;
                return { x: xPrime, y: yPrime };
            }
        };
    }
    // 径向性位置
    getRadialGradientPosition(gradientHandlePositions) {
        if (!gradientHandlePositions || !gradientHandlePositions.length)
            return 'center';
        // 大小位置跟起点的距离为渐变宽
        let dx = gradientHandlePositions[1].x - gradientHandlePositions[0].x;
        let dy = gradientHandlePositions[1].y - gradientHandlePositions[0].y;
        const rx = Math.sqrt(dx * dx + dy * dy) * 100;
        dx = gradientHandlePositions[2].x - gradientHandlePositions[0].x;
        dy = gradientHandlePositions[2].y - gradientHandlePositions[0].y;
        const ry = Math.sqrt(dx * dx + dy * dy) * 100;
        return `ellipse ${rx}% ${ry}% at ${gradientHandlePositions[0].x * 100}% ${gradientHandlePositions[0].y * 100}%`;
    }
    // Helper function to get the gradient direction
    getGradientDirection(gradientHandlePositions) {
        if (gradientHandlePositions.length >= 2) {
            const start = gradientHandlePositions[0];
            const end = gradientHandlePositions[1]; // Use the second handle, ignoring the last one
            // Calculate the angle in radians
            const angleRadians = Math.PI / 2 - util.getPointCoordRotation(start, end);
            //const angleRadians = Math.PI/2 - Math.atan2(end.y - start.y, end.x - start.x);
            return util.toDeg(util.radToDeg(angleRadians));
        }
        else {
            console.error("Insufficient handle positions for gradient calculation.");
            return ""; // or any default value
        }
    }
    // Helper function to get the gradient stops
    getGradientStops(gradientStops) {
        // Constructing the gradient stops string based on received data
        const stopsString = gradientStops
            .map((stop) => util.colorToString(stop.color, 255) + ` ${stop.position * 100}%`)
            .join(", ");
        return stopsString;
    }
}

class DocumentConverter extends BaseConverter {
    async convert(node, dom, parentNode, option) {
        dom.type = 'div';
        dom.style.position = 'relative';
        return super.convert(node, dom, parentNode, option);
    }
}

class PageConverter extends BaseConverter {
    async convert(node, dom, parentNode, option) {
        dom.type = 'page';
        dom.style.position = 'relative';
        return super.convert(node, dom, parentNode, option);
    }
}

let FRAMEConverter$1 = class FRAMEConverter extends BaseConverter {
    async convert(node, dom, parentNode, option) {
        if (parentNode && parentNode.type === 'CANVAS') {
            dom.style.overflow = 'hidden';
            if (parentNode && !parentNode.absoluteBoundingBox) {
                // 如果是一级节点，则下面的节点都相对于它
                parentNode.absoluteBoundingBox = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                // 取最左顶点角
                if (parentNode.children && parentNode.children.length) {
                    for (const child of parentNode.children) {
                        if (child.absoluteBoundingBox) {
                            parentNode.absoluteBoundingBox.x = Math.min(parentNode.absoluteBoundingBox.x, child.absoluteBoundingBox.x);
                            parentNode.absoluteBoundingBox.y = Math.min(parentNode.absoluteBoundingBox.y, child.absoluteBoundingBox.y);
                        }
                    }
                }
            }
        }
        return super.convert(node, dom, parentNode, option);
    }
};

class TEXTConverter extends BaseConverter {
    async convert(node, dom, parentNode, option) {
        dom.type = 'span';
        if (node.characters)
            dom.text = dom.data.text = node.characters;
        const res = await super.convert(node, dom, parentNode, option);
        //dom.style.letterSpacing = dom.style.letterSpacing || '1px';
        /*if(dom.style.letterSpacing) {
            const v = util.toNumber(dom.style.letterSpacing);
            dom.bounds.width += v * (dom.bounds.width/node.style.fontSize);
        }*/
        // 如果行高好高度一致,则表示单行文本，可以不指定宽度
        if (dom.bounds?.height < node.style?.fontSize * 2) {
            const span = document.createElement('span');
            Object.assign(span.style, dom.style);
            span.style.width = 'auto';
            span.style.position = 'absolute';
            span.innerText = dom.text;
            span.style.visibility = 'hidden';
            document.body.appendChild(span);
            let w = span.offsetWidth || span.clientWidth;
            if (dom.style.letterSpacing) {
                const v = util.toNumber(dom.style.letterSpacing);
                w += v;
            }
            document.body.removeChild(span);
            dom.data.width = Math.max(w, util.toNumber(dom.data.width));
        }
        else {
            //dom.style.minWidth = util.toPX(dom.data.width);
            dom.data.width = dom.bounds.width;
        }
        dom.style.width = util.toPX(dom.data.width);
        await this.convertCharacterStyleOverrides(node, res, option); // 处理分字样式
        return res;
    }
    // 解析字体多样式
    async convertCharacterStyleOverrides(node, dom, option) {
        if (node.characterStyleOverrides && node.characterStyleOverrides.length && node.styleOverrideTable) {
            const text = dom.text || '';
            let index = 0;
            for (; index < node.characterStyleOverrides.length; index++) {
                const s = node.characterStyleOverrides[index];
                const f = text[index];
                if (!s || !f)
                    continue;
                const fDom = this.createDomNode('span');
                fDom.text = f;
                fDom.style.position = 'relative'; // 连续字符不能用绝对定位
                const style = node.styleOverrideTable[s];
                if (style) {
                    await this.convertFills(style, fDom, option);
                    await this.convertStyle(style, fDom, option);
                }
                dom.children.push(fDom);
            }
            // 还有未处理完的，则加到后面
            if (text.length > index) {
                const fDom = this.createDomNode('span');
                fDom.text = text.substring(index);
                dom.children.push(fDom);
            }
            dom.text = '';
            dom.type = 'div';
        }
    }
    // 处理填充, 文本的fill就是字体的颜色
    async convertFills(node, dom, option) {
        // @ts-ignore
        if (!node.isMaskOutline && node.fills && node.fills.length) {
            const fill = node.fills[0];
            switch (fill.type) {
                case PaintType.SOLID: {
                    dom.style.color = util.colorToString(fill.color, 255);
                    break;
                }
                // 线性渐变
                case PaintType.GRADIENT_LINEAR: {
                    dom.style.background = this.convertLinearGradient(fill, dom);
                    dom.style.backgroundClip = 'text';
                    if (!dom.style.color)
                        dom.style.color = 'transparent';
                    break;
                }
                // 径向性渐变
                case PaintType.GRADIENT_RADIAL: {
                    dom.style.background = this.convertRadialGradient(fill, dom);
                    dom.style.backgroundClip = 'text';
                    if (!dom.style.color)
                        dom.style.color = 'transparent';
                    break;
                }
                // 图片
                case PaintType.IMAGE: {
                    if (option && option.getImage) {
                        const img = await option.getImage(fill.imageRef);
                        if (img)
                            dom.style.background = `url(${img})`;
                        dom.style.backgroundClip = 'text';
                        if (!dom.style.color)
                            dom.style.color = 'transparent';
                    }
                    break;
                }
            }
            switch (fill.scaleMode) {
                case PaintSolidScaleMode.FILL: {
                    dom.style.backgroundSize = 'cover';
                    break;
                }
                case PaintSolidScaleMode.FIT: {
                    dom.style.backgroundSize = 'contain';
                    break;
                }
                case PaintSolidScaleMode.STRETCH: {
                    dom.style.backgroundSize = '100% 100%';
                    break;
                }
                // 平铺
                case PaintSolidScaleMode.TILE: {
                    dom.style.backgroundRepeat = 'repeat';
                    break;
                }
            }
        }
        return dom;
    }
}

class ELLIPSEConverter extends BaseConverter {
    async convert(node, dom, parentNode, option) {
        dom.type = 'svg';
        let ellipse = this.createDomNode('ellipse');
        const defs = this.createDomNode('defs');
        dom.children.push(defs);
        dom.children.push(ellipse);
        // svg外转用定位和大小，其它样式都给子元素
        dom = await super.convert(node, dom, parentNode, option);
        ellipse.bounds = dom.bounds;
        return dom;
    }
    // 处理填充
    async convertFills(node, dom, option) {
        if (node.fills) {
            const ellipse = dom.children[1];
            for (const fill of node.fills) {
                if (fill.visible === false)
                    continue;
                switch (fill.type) {
                    case PaintType.SOLID: {
                        ellipse.fill = util.colorToString(fill.color, 255);
                        break;
                    }
                    // 线性渐变
                    case PaintType.GRADIENT_LINEAR: {
                        ellipse.fill = this.convertLinearGradient(fill, dom);
                        break;
                    }
                    // 径向性渐变
                    case PaintType.GRADIENT_RADIAL: {
                        ellipse.fill = this.convertRadialGradient(fill, dom);
                        break;
                    }
                    // 图片
                    case PaintType.IMAGE: {
                        await super.convertFills(node, ellipse, option);
                        break;
                    }
                }
            }
        }
        return dom;
    }
    // 处理边框
    async convertStrokes(node, dom, option) {
        if (node.strokes && node.strokes.length) {
            const ellipse = dom.children[1];
            await super.convertStrokes(node, ellipse, option);
        }
        return dom;
    }
    // 转换线性渐变
    convertLinearGradient(gradient, dom) {
        if (dom.type !== 'svg')
            return super.convertLinearGradient(gradient, dom);
        const defs = dom.children[0];
        const gradientDom = this.createDomNode('linearGradient');
        gradientDom.id = 'gradient_' + util.uuid();
        const handlePositions = gradient.gradientHandlePositions;
        if (handlePositions && handlePositions.length > 1) {
            gradientDom.x1 = (handlePositions[0].x) * 100 + '%';
            gradientDom.y1 = (handlePositions[0].y) * 100 + '%';
            gradientDom.x2 = (handlePositions[1].x) * 100 + '%';
            gradientDom.y2 = (handlePositions[1].y) * 100 + '%';
        }
        const gradientStops = gradient.gradientStops;
        const stops = this.getGradientStopDoms(gradientStops);
        gradientDom.children.push(...stops);
        defs.children.push(gradientDom);
        return `url(#${gradientDom.id})`;
    }
    // 转换径向性渐变
    convertRadialGradient(gradient, dom) {
        if (dom.type !== 'svg')
            return super.convertRadialGradient(gradient, dom);
        const defs = dom.children[0];
        const gradientDom = this.createDomNode('radialGradient');
        gradientDom.id = 'gradient_' + util.uuid();
        const handlePositions = gradient.gradientHandlePositions;
        // 该字段包含三个矢量，每个矢量都是归一化对象空间中的一个位置（归一化对象空间是如果对象的边界框的左上角是（0，0），右下角是（1,1））。第一个位置对应于渐变的开始（为了计算渐变停止，值为0），第二个位置是渐变的结束（值为1），第三个手柄位置决定渐变的宽度。
        if (handlePositions && handlePositions.length > 2) {
            gradientDom.fx = Math.round(handlePositions[0].x * 100) + '%';
            gradientDom.fy = Math.round(handlePositions[0].y * 100) + '%';
            gradientDom.cx = gradientDom.fx;
            gradientDom.cy = gradientDom.fy;
            // 大小位置跟起点的距离为渐变宽
            const dx = handlePositions[1].x - handlePositions[0].x;
            const dy = handlePositions[1].y - handlePositions[0].y;
            const r = Math.sqrt(dx * dx + dy * dy);
            gradientDom.r = Math.round(r * 100) + '%';
        }
        const gradientStops = gradient.gradientStops;
        const stops = this.getGradientStopDoms(gradientStops);
        gradientDom.children.push(...stops);
        defs.children.push(gradientDom);
        return `url(#${gradientDom.id})`;
    }
    // Helper function to get the gradient stops
    getGradientStopDoms(gradientStops) {
        const stops = [];
        for (const s of gradientStops) {
            const stop = this.createDomNode('stop');
            stop.offset = `${Math.round(s.position * 100)}%`;
            stop.style.stopColor = util.colorToString(s.color, 255);
            stops.push(stop);
        }
        return stops;
    }
}

class FRAMEConverter extends BaseConverter {
    async convert(node, dom, parentNode, option) {
        // 如果是填充的图5片，则直接用img
        if (node.fills && node.fills.length && node.fills[0].type === 'IMAGE') {
            dom.type = 'img';
        }
        return super.convert(node, dom, parentNode, option);
    }
}

const frameConverter = new FRAMEConverter$1();
const ConverterMaps = {
    'BASE': new BaseConverter(),
    'FRAME': frameConverter,
    'GROUP': frameConverter,
    'TEXT': new TEXTConverter(),
    'DOCUMENT': new DocumentConverter(),
    'CANVAS': new PageConverter(),
    'ELLIPSE': new ELLIPSEConverter(),
    'RECTANGLE': new FRAMEConverter(),
};
// 转node为html结构对象
async function convert(node, parentNode, option) {
    // 如果是根，则返回document
    if (node.document) {
        const docDom = await convert(node.document, node, option);
        return docDom;
    }
    const dom = ConverterMaps.BASE.createDomNode('div', {
        id: node.id,
        name: node.name,
        type: 'div',
        visible: node.visible === false ? false : true,
        data: {},
        style: {
            // 默认采用绝对定位
            position: 'absolute',
        },
        children: [],
        figmaData: node,
    });
    const converter = ConverterMaps[node.type] || ConverterMaps.BASE;
    if (converter)
        await converter.convert(node, dom, parentNode, option);
    if (node.children && node.children.length) {
        for (const child of node.children) {
            //if(child.isMask) continue;
            const c = await convert(child, node, option);
            dom.children.push(c);
        }
    }
    return dom;
}
// 把figma数据转为dom对象
async function nodeToDom(node, option) {
    switch (node.type) {
        case 'document': {
            return await renderDocument(node, option);
        }
        case 'page': {
            return await renderPage(node, option);
        }
        case 'svg': {
            return await renderSvg(node, option);
        }
        case 'ellipse': {
            return await renderEllipse(node, option);
        }
        case 'stop':
        case 'defs':
        case 'linearGradient':
        case 'radialGradient': {
            return await renderSvgElement(node, option);
        }
        default: {
            return await renderElement(node, option);
        }
    }
}
async function renderDocument(node, option) {
    const doc = await renderElement(node, option);
    return doc;
}
async function renderPage(node, option) {
    const page = await renderElement(node, option);
    //page.style.minHeight = node.bounds.height + 'px';
    return page;
}
async function renderSvg(node, option) {
    const svg = await renderSvgElement(node, option);
    svg.setAttribute('width', node.bounds.width + '');
    svg.setAttribute('height', node.bounds.height + '');
    return svg;
}
async function renderEllipse(node, option) {
    const ellipse = await renderSvgElement(node, option);
    ellipse.setAttribute('cx', '50%');
    ellipse.setAttribute('cy', '50%');
    ellipse.setAttribute('rx', '50%');
    ellipse.setAttribute('ry', '50%');
    ellipse.setAttribute('fill', node.fill || node.style.background || node.style.backgroundColor);
    return ellipse;
}
async function renderSvgElement(node, option) {
    let el = document.createElementNS("http://www.w3.org/2000/svg", node.type); // 创建SVG元素
    await renderElement(node, option, el);
    return el;
}
async function renderElement(node, option, dom) {
    dom = dom || document.createElement(node.type);
    if (node.style) {
        Object.assign(dom.style, node.style);
        if (node.preserveRatio && node.type === 'img')
            dom.style.height = 'auto';
    }
    if (node.text) {
        dom.textContent = node.text;
    }
    // @ts-ignore
    if (node.type === 'img' && node.url)
        dom.src = node.url;
    if (node.visible === false)
        dom.style.display = 'none';
    if (node.name)
        dom.setAttribute('data-name', node.name);
    if (node.id)
        dom.setAttribute('id', node.id);
    if (node.cx)
        dom.setAttribute('cx', node.cx);
    if (node.cy)
        dom.setAttribute('cy', node.cy);
    if (node.r)
        dom.setAttribute('r', node.r);
    if (node.fx)
        dom.setAttribute('fx', node.fx);
    if (node.fy)
        dom.setAttribute('fy', node.fy);
    if (node.x1)
        dom.setAttribute('x1', node.x1);
    if (node.y1)
        dom.setAttribute('y1', node.y1);
    if (node.x2)
        dom.setAttribute('x2', node.x2);
    if (node.y2)
        dom.setAttribute('y2', node.y2);
    if (node.offset)
        dom.setAttribute('offset', node.offset);
    if (node.children) {
        for (const child of node.children) {
            if (child.visible === false)
                continue;
            const c = await nodeToDom(child, option);
            c && dom.appendChild(c);
        }
    }
    return dom;
}

/**
 * 获取figma文件
 * @param fileId
 * @param token
 */
async function loadFigmaFile(fileId, token) {
    const url = `https://api.figma.com/v1/files/${fileId}`;
    const option = {
        headers: {
            "X-Figma-Token": token,
        }
    };
    const data = await util.request(url, option);
    return JSON.parse(data);
}
// 获取文件所有图片
async function getFigmaFileImages(fileId, token) {
    const url = `https://api.figma.com/v1/files/${fileId}/images`;
    const option = {
        headers: {
            "X-Figma-Token": token,
        }
    };
    const data = await util.request(url, option);
    const images = JSON.parse(data);
    if (images.meta && images.meta.images)
        return images.meta.images;
    return {};
}
// 获取图片
async function getFigmaImage(key, token, ids) {
    const url = `https://api.figma.com/v1/images/${key}?ids=${encodeURIComponent(ids)}`;
    const option = {
        headers: {
            "X-Figma-Token": token,
        }
    };
    const data = await util.request(url, option);
    const images = JSON.parse(data);
    if (images.meta && images.meta.images)
        return images.meta.images;
    return images;
}

export { convert, convert as default, getFigmaFileImages, getFigmaImage, loadFigmaFile, nodeToDom, util };
