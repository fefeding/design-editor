var util$1 = {
    // 是否是数字
    isNumber(v) {
        return typeof v === 'number' || /^\s*[\d\.]+\s*$/.test(v);
    },
    // 是否是带像素单位的字符串
    isPXNumber(v) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    },
    // 是否是带角度单位的字符串
    isDegNumber(v) {
        return /^\s*[\d\.]+\s*deg\s*/i.test(v);
    },
    // 是否是带弧度单位的字符串
    isRadNumber(v) {
        return /^\s*[\d\.]+\s*rad\s*/i.test(v);
    },
    // 转为像素字符串格式 
    toPX(v) {
        if (this.isNumber(v))
            return v + 'px';
        return v;
    },
    // 带像素或其它单位的转换为数字
    toNumber(v) {
        if (this.isNumber(v))
            return Number(v);
        else if (typeof v === 'string')
            return parseFloat(v) || 0;
    },
    // 弧度转角度
    radToDeg(v) {
        return v * (180 / Math.PI);
    },
    // 角度转弧度
    degToRad(v) {
        return v * (Math.PI / 180);
    },
    // 转为角度格式
    toDeg(v) {
        if (this.isNumber(v))
            return v + 'deg';
        if (typeof v === 'string' && this.isRadNumber(v))
            return this.toDeg(this.radToDeg(parseFloat(v)));
        return v;
    },
    // 转为弧度格式
    toRad(v) {
        if (this.isNumber(v))
            return v + 'rad';
        if (typeof v === 'string' && this.isDegNumber(v))
            return this.toRad(this.degToRad(parseFloat(v)));
        return v;
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
    // 获取元素bounds
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
    // 把domcument坐标转为指定元素相对坐标
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
    // 设置样式
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
    // dom属性
    attr(dom, name, value) {
        if (typeof value !== 'undefined') {
            dom.setAttribute(name, value + '');
            return value;
        }
        else {
            return dom.getAttribute(name);
        }
    },
    // 本地唯一ID，这个只要保证当前线程唯一即可，非全球唯一
    uuid() {
        const time = Date.now();
        const rnd = Math.floor(Math.random() * 10000000000);
        return (time + rnd).toString();
    },
    // 把图片旋转一定角度，返回base64
    async rotateImage(url, rotation) {
        return new Promise((resolve, reject) => {
            const img = new Image();
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
    // 请求远程资源
    async request(url, option) {
        option = option || {};
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest(); //新建XMLHttpRequest对象
            if (option.headers) {
                for (const name in option.headers) {
                    request.setRequestHeader(name, option.headers[name]);
                }
            }
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
            request.send(method === 'POST' ? params.join('&') : null);
        });
    }
};

const nwse = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////////+anqaeoqqjpq7e3+Li4uRpbXhiZ3NjaHRfZHFZX2tAR1c/RlU7QVH////9/f3////////9/f3////9/f3///8PFyr////UYjabAAAAJ3RSTlMABAUMDRAREhckKS4wMjU2N6jAwMDHyMrMzM3P2tvd5Ojo6evr7PowgHoyAAAAAWJLR0QovbC1sgAAAJVJREFUKM+90dsSgiAQgGHIDkBUoqaVGRXE7vs/YSgz5QDX/pd8HGYWQpZqLQ8+WSTrb5yyLII91jdfi8cIJPYAUKEiObgaJ3JwgcFonkL1ucPjOUrJ5o+f0QURCi39QWFRCT2J83s2/yPsRAgP0vRzmOLaDNBBCkQ400EOFDaQgxLbcTB1AsyGUb5ofBXdjW1Xi/32F3U3EU6pnu/zAAAAAElFTkSuQmCC';
const ns = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+oq7KusLevsriZm6Wdoamipa2jpq6Tl6CNkZqIjJX///98gYv///////////////8PFyr///8ipdpMAAAAMXRSTlMAAQIDBAUHCVpcXV5faGl3gIKDhIWImJydnp+mqaqxuLu/v7/AwMDAwcLDxMX7/P3+tV+LYwAAAAFiS0dEMkDSTMgAAAC/SURBVCjPfZLZEoIwDEWhClhAxQVFVDYVF1xI/v/jJBbRVvA8dJgcyL0zRdMamOsyrQV9gRiy1nmWtxgWYAaQ40oxbIk7ADKBbAZiDnBELgmOFQB0OnI09wsShW/rarxHwpPfHhMJieT1yMVXNtaIDMJudsjUGztF56qqKlHXJbj+vy5hDt91R6YkZp+MuSQm94sodL1NJWHF5Z7m50dsKSFReQA4lZGpxhsbTFPcGr+X3gsR1/2234Q5zte1PgEi+SemTJG1vwAAAABJRU5ErkJggg==';
const fullCircleRadius = Math.PI * 2;
// 操作杠指针
const Cursors = {
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
    async get(dir, rotation = 0) {
        if (dir === 'rotate' || dir === 'skew')
            return this[dir];
        if (Math.abs(rotation) > fullCircleRadius)
            rotation = rotation % fullCircleRadius;
        // 2PI 为一个圆，把角度转为一个圆内的值，以免重复生成图片
        const rotationKey = Number(rotation.toFixed(2)); // 精度只取小数2位
        const key = rotationKey === 0 ? dir : `${dir}_${rotationKey}`;
        let cursor = this[key];
        if (!cursor) {
            if (dir === 'l' || dir === 'r' || dir === 't' || dir === 'b') {
                // 如果没有旋转角度，则把ns转90度即可
                if (rotation === 0) {
                    cursor = await util$1.rotateImage(ns, Math.PI / 2);
                    this['l'] = this['r'] = cursor;
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0);
                    cursor = await util$1.rotateImage(normal, rotation);
                    this[key] = cursor;
                }
            }
            else if (dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb') {
                // 如果没有旋转角度，则把nwse转90度即可
                if (rotation === 0) {
                    cursor = await util$1.rotateImage(nwse, Math.PI / 2);
                    return this['tr'] = this['lb'] = cursor;
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0);
                    cursor = await util$1.rotateImage(normal, rotation);
                    this[key] = cursor;
                }
            }
        }
        return cursor;
    }
};
const ItemIcons = {
    'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
    'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
};
// 因为旋转后坐标要回原才好计算操作，
const getRotateEventPosition = (offset, oldPosition, newPosition, rotation, center) => {
    // 先回原坐标，再主算偏移量，这样保证操作更容易理解
    if (rotation) {
        const [pos1, pos2] = util$1.rotatePoints([oldPosition, newPosition], center, -rotation);
        offset.x = pos2.x - pos1.x;
        offset.y = pos2.y - pos1.y;
    }
    return offset;
};
// 发生旋转, 计算得到的旋转角度
const rotateChange = (oldPosition, newPosition, center) => {
    // 因为center是相对于编辑器的，所以事件坐标也需要转到编辑器
    const cx1 = oldPosition.x - center.x;
    const cy1 = oldPosition.y - center.y;
    let angle1 = Math.atan(cy1 / cx1);
    const cx2 = newPosition.x - center.x;
    const cy2 = newPosition.y - center.y;
    let angle2 = Math.atan(cy2 / cx2);
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
    return angle2 - angle1;
};
// 根据操作参数，计算位移，大小和旋转角度等
const getChangeData = (dir, offset, oldPosition, newPosition, center, rotation = 0) => {
    // 当前移动对原对象的改变
    const args = {
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
    // 先回原坐标，再主算偏移量，这样保证操作更容易理解
    if (rotation) {
        offset = getRotateEventPosition(offset, oldPosition, newPosition, rotation, center);
    }
    switch (dir) {
        case 'l': {
            args.x = offset.x;
            args.width = -offset.x;
            break;
        }
        case 't': {
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'r': {
            args.width = offset.x;
            break;
        }
        case 'b': {
            args.height = offset.y;
            break;
        }
        case 'lt': {
            args.x = offset.x;
            args.width = -offset.x;
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'tr': {
            args.width = offset.x;
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'rb': {
            args.width = offset.x;
            args.height = offset.y;
            break;
        }
        case 'lb': {
            args.x = offset.x;
            args.width = -offset.x;
            args.height = offset.y;
            break;
        }
    }
    // 如果中心发生了偏移，则新中心点要移到绕原中心点旋转当前旋转角度的点，才举使图形移动不正常
    if (rotation && (args.x || args.y || args.width || args.height)) {
        const newCenter = {
            x: center.x + args.x + args.width / 2,
            y: center.y + args.y + args.height / 2
        };
        const targetCenter = util$1.rotatePoints({ ...newCenter }, center, rotation);
        args.x += targetCenter.x - newCenter.x;
        args.y += targetCenter.y - newCenter.y;
    }
    return args;
};

var util = {
    ...util$1
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

/**
 * EventEmitter 类，继承自 'eventemitter3' 模块的 EventEmiter 类。
 * 用于进行事件的发布与订阅。
 * @public
 */
class EventEmitter extends EventEmitter$1 {
    /**
     * 私有方法，用于规范化事件名
     * @param name - 可以是字符串、符号或字符串数组
     * @returns 返回符号或字符串数组
     */
    normalizeEventNames(name) {
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
    on(event, fn, context) {
        const events = this.normalizeEventNames(event);
        for (const name of events) {
            name && super.on(name, fn, context);
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
    off(event, fn, context, once) {
        const events = this.normalizeEventNames(event);
        for (const name of events) {
            name && super.off(name, fn, context);
        }
        return this;
    }
}

const topZIndex = 10000;
/**
 * 支持的样式属性列表
 * @public
 */
class JElementStyleDeclaration extends EventEmitter {
    accentColor;
    alignContent;
    alignItems;
    alignSelf;
    alignmentBaseline;
    all;
    animation;
    animationComposition;
    animationDelay;
    animationDirection;
    animationDuration;
    animationFillMode;
    animationIterationCount;
    animationName;
    animationPlayState;
    animationTimingFunction;
    appearance;
    aspectRatio;
    backdropFilter;
    backfaceVisibility;
    background;
    backgroundAttachment;
    backgroundBlendMode;
    backgroundClip;
    backgroundColor;
    backgroundImage;
    backgroundOrigin;
    backgroundPosition;
    backgroundPositionX;
    backgroundPositionY;
    backgroundRepeat;
    backgroundSize;
    baselineShift;
    blockSize;
    border;
    borderBlock;
    borderBlockColor;
    borderBlockEnd;
    borderBlockEndColor;
    borderBlockEndStyle;
    borderBlockEndWidth;
    borderBlockStart;
    borderBlockStartColor;
    borderBlockStartStyle;
    borderBlockStartWidth;
    borderBlockStyle;
    borderBlockWidth;
    borderBottom;
    borderBottomColor;
    borderBottomLeftRadius;
    borderBottomRightRadius;
    borderBottomStyle;
    borderBottomWidth;
    borderCollapse;
    borderColor;
    borderEndEndRadius;
    borderEndStartRadius;
    borderImage;
    borderImageOutset;
    borderImageRepeat;
    borderImageSlice;
    borderImageSource;
    borderImageWidth;
    borderInline;
    borderInlineColor;
    borderInlineEnd;
    borderInlineEndColor;
    borderInlineEndStyle;
    borderInlineEndWidth;
    borderInlineStart;
    borderInlineStartColor;
    borderInlineStartStyle;
    borderInlineStartWidth;
    borderInlineStyle;
    borderInlineWidth;
    borderLeft;
    borderLeftColor;
    borderLeftStyle;
    borderLeftWidth;
    borderRadius;
    borderRight;
    borderRightColor;
    borderRightStyle;
    borderRightWidth;
    borderSpacing;
    borderStartEndRadius;
    borderStartStartRadius;
    borderStyle;
    borderTop;
    borderTopColor;
    borderTopLeftRadius;
    borderTopRightRadius;
    borderTopStyle;
    borderTopWidth;
    borderWidth;
    bottom;
    boxShadow;
    boxSizing;
    breakAfter;
    breakBefore;
    breakInside;
    captionSide;
    caretColor;
    clear;
    clip;
    clipPath;
    clipRule;
    color;
    colorInterpolation;
    colorInterpolationFilters;
    colorScheme;
    columnCount;
    columnFill;
    columnGap;
    columnRule;
    columnRuleColor;
    columnRuleStyle;
    columnRuleWidth;
    columnSpan;
    columnWidth;
    columns;
    contain;
    containIntrinsicBlockSize;
    containIntrinsicHeight;
    containIntrinsicInlineSize;
    containIntrinsicSize;
    containIntrinsicWidth;
    container;
    containerName;
    containerType;
    content;
    counterIncrement;
    counterReset;
    counterSet;
    cssFloat;
    cssText;
    cursor;
    direction;
    display;
    dominantBaseline;
    emptyCells;
    fill;
    fillOpacity;
    fillRule;
    filter;
    flex;
    flexBasis;
    flexDirection;
    flexFlow;
    flexGrow;
    flexShrink;
    flexWrap;
    float;
    floodColor;
    floodOpacity;
    font;
    fontFamily;
    fontFeatureSettings;
    fontKerning;
    fontOpticalSizing;
    fontPalette;
    fontSize;
    fontSizeAdjust;
    fontStretch;
    fontStyle;
    fontSynthesis;
    fontSynthesisSmallCaps;
    fontSynthesisStyle;
    fontSynthesisWeight;
    fontVariant;
    fontVariantAlternates;
    fontVariantCaps;
    fontVariantEastAsian;
    fontVariantLigatures;
    fontVariantNumeric;
    fontVariantPosition;
    fontVariationSettings;
    fontWeight;
    forcedColorAdjust;
    gap;
    grid;
    gridArea;
    gridAutoColumns;
    gridAutoFlow;
    gridAutoRows;
    gridColumn;
    gridColumnEnd;
    gridColumnGap;
    gridColumnStart;
    gridGap;
    gridRow;
    gridRowEnd;
    gridRowGap;
    gridRowStart;
    gridTemplate;
    gridTemplateAreas;
    gridTemplateColumns;
    gridTemplateRows;
    height;
    hyphenateCharacter;
    hyphens;
    imageOrientation;
    imageRendering;
    inlineSize;
    inset;
    insetBlock;
    insetBlockEnd;
    insetBlockStart;
    insetInline;
    insetInlineEnd;
    insetInlineStart;
    isolation;
    justifyContent;
    justifyItems;
    justifySelf;
    left;
    length;
    letterSpacing;
    lightingColor;
    lineBreak;
    lineHeight;
    listStyle;
    listStyleImage;
    listStylePosition;
    listStyleType;
    margin;
    marginBlock;
    marginBlockEnd;
    marginBlockStart;
    marginBottom;
    marginInline;
    marginInlineEnd;
    marginInlineStart;
    marginLeft;
    marginRight;
    marginTop;
    marker;
    markerEnd;
    markerMid;
    markerStart;
    mask;
    maskClip;
    maskComposite;
    maskImage;
    maskMode;
    maskOrigin;
    maskPosition;
    maskRepeat;
    maskSize;
    maskType;
    mathStyle;
    maxBlockSize;
    maxHeight;
    maxInlineSize;
    maxWidth;
    minBlockSize;
    minHeight;
    minInlineSize;
    minWidth;
    mixBlendMode;
    objectFit;
    objectPosition;
    offset;
    offsetDistance;
    offsetPath;
    offsetRotate;
    opacity;
    order;
    orphans;
    outline;
    outlineColor;
    outlineOffset;
    outlineStyle;
    outlineWidth;
    overflow;
    overflowAnchor;
    overflowClipMargin;
    overflowWrap;
    overflowX;
    overflowY;
    overscrollBehavior;
    overscrollBehaviorBlock;
    overscrollBehaviorInline;
    overscrollBehaviorX;
    overscrollBehaviorY;
    padding;
    paddingBlock;
    paddingBlockEnd;
    paddingBlockStart;
    paddingBottom;
    paddingInline;
    paddingInlineEnd;
    paddingInlineStart;
    paddingLeft;
    paddingRight;
    paddingTop;
    page;
    pageBreakAfter;
    pageBreakBefore;
    pageBreakInside;
    paintOrder;
    parentRule;
    perspective;
    perspectiveOrigin;
    placeContent;
    placeItems;
    placeSelf;
    pointerEvents;
    position;
    printColorAdjust;
    quotes;
    resize;
    right;
    rotate;
    rowGap;
    rubyPosition;
    scale;
    scrollBehavior;
    scrollMargin;
    scrollMarginBlock;
    scrollMarginBlockEnd;
    scrollMarginBlockStart;
    scrollMarginBottom;
    scrollMarginInline;
    scrollMarginInlineEnd;
    scrollMarginInlineStart;
    scrollMarginLeft;
    scrollMarginRight;
    scrollMarginTop;
    scrollPadding;
    scrollPaddingBlock;
    scrollPaddingBlockEnd;
    scrollPaddingBlockStart;
    scrollPaddingBottom;
    scrollPaddingInline;
    scrollPaddingInlineEnd;
    scrollPaddingInlineStart;
    scrollPaddingLeft;
    scrollPaddingRight;
    scrollPaddingTop;
    scrollSnapAlign;
    scrollSnapStop;
    scrollSnapType;
    scrollbarGutter;
    shapeImageThreshold;
    shapeMargin;
    shapeOutside;
    shapeRendering;
    stopColor;
    stopOpacity;
    stroke;
    strokeDasharray;
    strokeDashoffset;
    strokeLinecap;
    strokeLinejoin;
    strokeMiterlimit;
    strokeOpacity;
    strokeWidth;
    tabSize;
    tableLayout;
    textAlign;
    textAlignLast;
    textAnchor;
    textCombineUpright;
    textDecoration;
    textDecorationColor;
    textDecorationLine;
    textDecorationSkipInk;
    textDecorationStyle;
    textDecorationThickness;
    textEmphasis;
    textEmphasisColor;
    textEmphasisPosition;
    textEmphasisStyle;
    textIndent;
    textOrientation;
    textOverflow;
    textRendering;
    textShadow;
    textTransform;
    textUnderlineOffset;
    textUnderlinePosition;
    top;
    touchAction;
    transform;
    transformBox;
    transformOrigin;
    transformStyle;
    transition;
    transitionDelay;
    transitionDuration;
    transitionProperty;
    transitionTimingFunction;
    translate;
    unicodeBidi;
    userSelect;
    verticalAlign;
    visibility;
    whiteSpace;
    widows;
    width;
    willChange;
    wordBreak;
    wordSpacing;
    wordWrap;
    writingMode;
    zIndex;
}
/**
 * 样式属性集合
 * @public
 */
class JElementStyleProperty {
    accentColor = '';
    alignContent = '';
    alignItems = '';
    alignSelf = '';
    alignmentBaseline = '';
    all = '';
    animation = '';
    animationComposition = '';
    animationDelay = '';
    animationDirection = '';
    animationDuration = '';
    animationFillMode = '';
    animationIterationCount = '';
    animationName = '';
    animationPlayState = '';
    animationTimingFunction = '';
    appearance = '';
    aspectRatio = '';
    backdropFilter = '';
    backfaceVisibility = '';
    background = '';
    backgroundAttachment = '';
    backgroundBlendMode = '';
    backgroundClip = '';
    backgroundColor = '';
    backgroundImage = '';
    backgroundOrigin = '';
    backgroundPosition = '';
    backgroundPositionX = '';
    backgroundPositionY = '';
    backgroundRepeat = '';
    backgroundSize = '';
    baselineShift = '';
    blockSize = '';
    border = '';
    borderBlock = '';
    borderBlockColor = '';
    borderBlockEnd = '';
    borderBlockEndColor = '';
    borderBlockEndStyle = '';
    borderBlockEndWidth = '';
    borderBlockStart = '';
    borderBlockStartColor = '';
    borderBlockStartStyle = '';
    borderBlockStartWidth = '';
    borderBlockStyle = '';
    borderBlockWidth = '';
    borderBottom = '';
    borderBottomColor = '';
    borderBottomLeftRadius = '';
    borderBottomRightRadius = '';
    borderBottomStyle = '';
    borderBottomWidth = '';
    borderCollapse = '';
    borderColor = '';
    borderEndEndRadius = '';
    borderEndStartRadius = '';
    borderImage = '';
    borderImageOutset = '';
    borderImageRepeat = '';
    borderImageSlice = '';
    borderImageSource = '';
    borderImageWidth = '';
    borderInline = '';
    borderInlineColor = '';
    borderInlineEnd = '';
    borderInlineEndColor = '';
    borderInlineEndStyle = '';
    borderInlineEndWidth = '';
    borderInlineStart = '';
    borderInlineStartColor = '';
    borderInlineStartStyle = '';
    borderInlineStartWidth = '';
    borderInlineStyle = '';
    borderInlineWidth = '';
    borderLeft = '';
    borderLeftColor = '';
    borderLeftStyle = '';
    borderLeftWidth = '';
    borderRadius = '';
    borderRight = '';
    borderRightColor = '';
    borderRightStyle = '';
    borderRightWidth = '';
    borderSpacing = '';
    borderStartEndRadius = '';
    borderStartStartRadius = '';
    borderStyle = '';
    borderTop = '';
    borderTopColor = '';
    borderTopLeftRadius = '';
    borderTopRightRadius = '';
    borderTopStyle = '';
    borderTopWidth = '';
    borderWidth = '';
    bottom = '';
    boxShadow = '';
    boxSizing = '';
    breakAfter = '';
    breakBefore = '';
    breakInside = '';
    captionSide = '';
    caretColor = '';
    clear = '';
    clip = '';
    clipPath = '';
    clipRule = '';
    color = '';
    colorInterpolation = '';
    colorInterpolationFilters = '';
    colorScheme = '';
    columnCount = '';
    columnFill = '';
    columnGap = '';
    columnRule = '';
    columnRuleColor = '';
    columnRuleStyle = '';
    columnRuleWidth = '';
    columnSpan = '';
    columnWidth = '';
    columns = '';
    contain = '';
    containIntrinsicBlockSize = '';
    containIntrinsicHeight = '';
    containIntrinsicInlineSize = '';
    containIntrinsicSize = '';
    containIntrinsicWidth = '';
    container = '';
    containerName = '';
    containerType = '';
    content = '';
    counterIncrement = '';
    counterReset = '';
    counterSet = '';
    cssFloat = '';
    cssText = '';
    cursor = '';
    direction = '';
    display = '';
    dominantBaseline = '';
    emptyCells = '';
    fill = '';
    fillOpacity = '';
    fillRule = '';
    filter = '';
    flex = '';
    flexBasis = '';
    flexDirection = '';
    flexFlow = '';
    flexGrow = '';
    flexShrink = '';
    flexWrap = '';
    float = '';
    floodColor = '';
    floodOpacity = '';
    font = '';
    fontFamily = '';
    fontFeatureSettings = '';
    fontKerning = '';
    fontOpticalSizing = '';
    fontPalette = '';
    fontSize = '';
    fontSizeAdjust = '';
    fontStretch = '';
    fontStyle = '';
    fontSynthesis = '';
    fontSynthesisSmallCaps = '';
    fontSynthesisStyle = '';
    fontSynthesisWeight = '';
    fontVariant = '';
    fontVariantAlternates = '';
    fontVariantCaps = '';
    fontVariantEastAsian = '';
    fontVariantLigatures = '';
    fontVariantNumeric = '';
    fontVariantPosition = '';
    fontVariationSettings = '';
    fontWeight = '';
    forcedColorAdjust = '';
    gap = '';
    grid = '';
    gridArea = '';
    gridAutoColumns = '';
    gridAutoFlow = '';
    gridAutoRows = '';
    gridColumn = '';
    gridColumnEnd = '';
    gridColumnGap = '';
    gridColumnStart = '';
    gridGap = '';
    gridRow = '';
    gridRowEnd = '';
    gridRowGap = '';
    gridRowStart = '';
    gridTemplate = '';
    gridTemplateAreas = '';
    gridTemplateColumns = '';
    gridTemplateRows = '';
    height = '';
    hyphenateCharacter = '';
    hyphens = '';
    imageOrientation = '';
    imageRendering = '';
    inlineSize = '';
    inset = '';
    insetBlock = '';
    insetBlockEnd = '';
    insetBlockStart = '';
    insetInline = '';
    insetInlineEnd = '';
    insetInlineStart = '';
    isolation = '';
    justifyContent = '';
    justifyItems = '';
    justifySelf = '';
    left = '';
    length;
    letterSpacing = '';
    lightingColor = '';
    lineBreak = '';
    lineHeight = '';
    listStyle = '';
    listStyleImage = '';
    listStylePosition = '';
    listStyleType = '';
    margin = '';
    marginBlock = '';
    marginBlockEnd = '';
    marginBlockStart = '';
    marginBottom = '';
    marginInline = '';
    marginInlineEnd = '';
    marginInlineStart = '';
    marginLeft = '';
    marginRight = '';
    marginTop = '';
    marker = '';
    markerEnd = '';
    markerMid = '';
    markerStart = '';
    mask = '';
    maskClip = '';
    maskComposite = '';
    maskImage = '';
    maskMode = '';
    maskOrigin = '';
    maskPosition = '';
    maskRepeat = '';
    maskSize = '';
    maskType = '';
    mathStyle = '';
    maxBlockSize = '';
    maxHeight = '';
    maxInlineSize = '';
    maxWidth = '';
    minBlockSize = '';
    minHeight = '';
    minInlineSize = '';
    minWidth = '';
    mixBlendMode = '';
    objectFit = '';
    objectPosition = '';
    offset = '';
    offsetDistance = '';
    offsetPath = '';
    offsetRotate = '';
    opacity = '';
    order = '';
    orphans = '';
    outline = '';
    outlineColor = '';
    outlineOffset = '';
    outlineStyle = '';
    outlineWidth = '';
    overflow = '';
    overflowAnchor = '';
    overflowClipMargin = '';
    overflowWrap = '';
    overflowX = '';
    overflowY = '';
    overscrollBehavior = '';
    overscrollBehaviorBlock = '';
    overscrollBehaviorInline = '';
    overscrollBehaviorX = '';
    overscrollBehaviorY = '';
    padding = '';
    paddingBlock = '';
    paddingBlockEnd = '';
    paddingBlockStart = '';
    paddingBottom = '';
    paddingInline = '';
    paddingInlineEnd = '';
    paddingInlineStart = '';
    paddingLeft = '';
    paddingRight = '';
    paddingTop = '';
    page = '';
    pageBreakAfter = '';
    pageBreakBefore = '';
    pageBreakInside = '';
    paintOrder = '';
    parentRule;
    perspective = '';
    perspectiveOrigin = '';
    placeContent = '';
    placeItems = '';
    placeSelf = '';
    pointerEvents = '';
    position = '';
    printColorAdjust = '';
    quotes = '';
    resize = '';
    right = '';
    rotate = '';
    rowGap = '';
    rubyPosition = '';
    scale = '';
    scrollBehavior = '';
    scrollMargin = '';
    scrollMarginBlock = '';
    scrollMarginBlockEnd = '';
    scrollMarginBlockStart = '';
    scrollMarginBottom = '';
    scrollMarginInline = '';
    scrollMarginInlineEnd = '';
    scrollMarginInlineStart = '';
    scrollMarginLeft = '';
    scrollMarginRight = '';
    scrollMarginTop = '';
    scrollPadding = '';
    scrollPaddingBlock = '';
    scrollPaddingBlockEnd = '';
    scrollPaddingBlockStart = '';
    scrollPaddingBottom = '';
    scrollPaddingInline = '';
    scrollPaddingInlineEnd = '';
    scrollPaddingInlineStart = '';
    scrollPaddingLeft = '';
    scrollPaddingRight = '';
    scrollPaddingTop = '';
    scrollSnapAlign = '';
    scrollSnapStop = '';
    scrollSnapType = '';
    scrollbarGutter = '';
    shapeImageThreshold = '';
    shapeMargin = '';
    shapeOutside = '';
    shapeRendering = '';
    stopColor = '';
    stopOpacity = '';
    stroke = '';
    strokeDasharray = '';
    strokeDashoffset = '';
    strokeLinecap = '';
    strokeLinejoin = '';
    strokeMiterlimit = '';
    strokeOpacity = '';
    strokeWidth = '';
    tabSize = '';
    tableLayout = '';
    textAlign = '';
    textAlignLast = '';
    textAnchor = '';
    textCombineUpright = '';
    textDecoration = '';
    textDecorationColor = '';
    textDecorationLine = '';
    textDecorationSkipInk = '';
    textDecorationStyle = '';
    textDecorationThickness = '';
    textEmphasis = '';
    textEmphasisColor = '';
    textEmphasisPosition = '';
    textEmphasisStyle = '';
    textIndent = '';
    textOrientation = '';
    textOverflow = '';
    textRendering = '';
    textShadow = '';
    textTransform = '';
    textUnderlineOffset = '';
    textUnderlinePosition = '';
    top = '';
    touchAction = '';
    transform = '';
    transformBox = '';
    transformOrigin = '';
    transformStyle = '';
    transition = '';
    transitionDelay = '';
    transitionDuration = '';
    transitionProperty = '';
    transitionTimingFunction = '';
    translate = '';
    unicodeBidi = '';
    userSelect = '';
    verticalAlign = '';
    visibility = '';
    webkitAlignContent = '';
    webkitAlignItems = '';
    webkitAlignSelf = '';
    webkitAnimation = '';
    webkitAnimationDelay = '';
    webkitAnimationDirection = '';
    webkitAnimationDuration = '';
    webkitAnimationFillMode = '';
    webkitAnimationIterationCount = '';
    webkitAnimationName = '';
    webkitAnimationPlayState = '';
    webkitAnimationTimingFunction = '';
    webkitAppearance = '';
    webkitBackfaceVisibility = '';
    webkitBackgroundClip = '';
    webkitBackgroundOrigin = '';
    webkitBackgroundSize = '';
    webkitBorderBottomLeftRadius = '';
    webkitBorderBottomRightRadius = '';
    webkitBorderRadius = '';
    webkitBorderTopLeftRadius = '';
    webkitBorderTopRightRadius = '';
    webkitBoxAlign = '';
    webkitBoxFlex = '';
    webkitBoxOrdinalGroup = '';
    webkitBoxOrient = '';
    webkitBoxPack = '';
    webkitBoxShadow = '';
    webkitBoxSizing = '';
    webkitFilter = '';
    webkitFlex = '';
    webkitFlexBasis = '';
    webkitFlexDirection = '';
    webkitFlexFlow = '';
    webkitFlexGrow = '';
    webkitFlexShrink = '';
    webkitFlexWrap = '';
    webkitJustifyContent = '';
    webkitLineClamp = '';
    webkitMask = '';
    webkitMaskBoxImage = '';
    webkitMaskBoxImageOutset = '';
    webkitMaskBoxImageRepeat = '';
    webkitMaskBoxImageSlice = '';
    webkitMaskBoxImageSource = '';
    webkitMaskBoxImageWidth = '';
    webkitMaskClip = '';
    webkitMaskComposite = '';
    webkitMaskImage = '';
    webkitMaskOrigin = '';
    webkitMaskPosition = '';
    webkitMaskRepeat = '';
    webkitMaskSize = '';
    webkitOrder = '';
    webkitPerspective = '';
    webkitPerspectiveOrigin = '';
    webkitTextFillColor = '';
    webkitTextSizeAdjust = '';
    webkitTextStroke = '';
    webkitTextStrokeColor = '';
    webkitTextStrokeWidth = '';
    webkitTransform = '';
    webkitTransformOrigin = '';
    webkitTransformStyle = '';
    webkitTransition = '';
    webkitTransitionDelay = '';
    webkitTransitionDuration = '';
    webkitTransitionProperty = '';
    webkitTransitionTimingFunction = '';
    webkitUserSelect = '';
    whiteSpace = '';
    widows = '';
    width = '';
    willChange = '';
    wordBreak = '';
    wordSpacing = '';
    wordWrap = '';
    writingMode = '';
    zIndex = 0;
}
/**
 * @public
 */
class JElementCssStyle extends JElementStyleDeclaration {
    static styleNamesMap = [];
    // 所有样式名称
    get names() {
        if (!JElementCssStyle.styleNamesMap.length) {
            const map = new JElementStyleProperty();
            const keys = Object.getOwnPropertyNames(map);
            for (const k of keys) {
                const t = typeof map[k];
                if (t === 'string' || t === 'number')
                    JElementCssStyle.styleNamesMap.push(k);
            }
        }
        return JElementCssStyle.styleNamesMap;
    }
}
// 最外层容器默认样式
const ContainerDefaultStyle = {
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

class Transform extends EventEmitter {
    constructor(option, targetOption) {
        super();
        if (option)
            Object.assign(this, option);
        if (targetOption)
            this.bind(targetOption);
    }
    // 响应变化换元素和属性
    targets = [];
    // x偏移量
    translateX = 0;
    get translateXString() {
        return `translateX(${util.toPX(this.translateX)})`;
    }
    // y偏移量
    translateY = 0;
    get translateYString() {
        return `translateY(${util.toPX(this.translateY)})`;
    }
    // z偏移量
    translateZ = 0;
    get translateZString() {
        return `translateZ(${util.toPX(this.translateZ)})`;
    }
    rotateX = 0;
    get rotateXString() {
        return `rotateX(${util.toRad(this.rotateX)})`;
    }
    rotateY = 0;
    get rotateYString() {
        return `rotateY(${util.toRad(this.rotateY)})`;
    }
    rotateZ = 0;
    get rotateZString() {
        return `rotateZ(${util.toRad(this.rotateZ)})`;
    }
    scaleX = 1;
    get scaleXString() {
        return `scaleX(${this.scaleX})`;
    }
    scaleY = 1;
    get scaleYString() {
        return `scaleY(${this.scaleY})`;
    }
    scaleZ = 1;
    get scaleZString() {
        return `scaleZ(${this.scaleZ})`;
    }
    skewX = 0;
    get skewXString() {
        return `skewX(${util.toRad(this.skewX)})`;
    }
    skewY = 0;
    get skewYString() {
        return `skewY(${util.toRad(this.skewY)})`;
    }
    from(data) {
        if (data)
            Object.assign(this, data);
    }
    // 生效
    apply(target = this.targets) {
        if (Array.isArray(target)) {
            for (const t of target) {
                this.apply(t);
            }
            return;
        }
        else {
            if (target.target && target.target.css)
                target.target.css('transform', this.toString(target.watchProps));
            else if (target.target)
                target.target.style.transform = this.toString(target.watchProps);
        }
    }
    // 绑定并刷新到目标上
    bind(target) {
        this.targets.push(target);
        this.apply(target);
    }
    unbind(target) {
        for (let i = this.targets.length - 1; i > -1; i--) {
            if (this.targets[i].target === target.target) {
                this.targets.splice(i, 1);
            }
        }
    }
    // 生成transform代理
    static createProxy(obj = {}, el) {
        const transform = new Transform(obj, el);
        // 代理处理
        const proxy = new Proxy(transform, {
            get(target, p, receiver) {
                const v = target[p];
                return v;
            },
            set(target, p, value, receiver) {
                target[p] = value;
                target.apply(); // 生效
                return true;
            }
        });
        return proxy;
    }
    toString(watchProps) {
        const res = [];
        if (!watchProps) {
            watchProps = ['translateX', 'translateY', 'translateZ', "rotateX", 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
        }
        for (const n of watchProps) {
            const nv = this[n + 'String'];
            if (typeof this[n] !== 'undefined' && typeof nv !== 'undefined') {
                res.push(nv);
            }
        }
        return res.join(' ');
    }
    toJSON() {
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
    }
}

const NumberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];
class JElementStyle extends JElementCssStyle {
    constructor(option) {
        super();
        if (option) {
            this.apply(option);
        }
    }
    // 把样式应用到元素或当前对象
    apply(data, target = this) {
        for (const name of this.names) {
            if (typeof name !== 'string')
                continue;
            if (typeof data[name] === 'string' || typeof data[name] === 'number') {
                if (target instanceof JElementStyle) {
                    target.setStyle(name, data[name]);
                }
                else {
                    target[name] = data[name];
                }
            }
        }
        return target;
    }
    // 样式对应的元素
    applyTo(element) {
        this.apply(this, element.style);
    }
    // 设置样式
    setStyle(name, value) {
        this[name] = value;
        this.emit('change', {
            name,
            value
        });
    }
    // 触发所有更新到dom
    refresh() {
        this.apply(this);
    }
    // 转为json
    toJSON() {
        const obj = {};
        for (const name of this.names) {
            if (typeof this[name] === 'undefined')
                continue;
            obj[name] = this[name];
        }
        return obj;
    }
    // 生成样式代理
    static createProxy(style = {}) {
        const jstyle = new JElementStyle(style);
        // 样式代理处理
        const proxy = new Proxy(jstyle, {
            get(target, p, receiver) {
                const v = target[p];
                // 数字样式，处理px问题
                if (typeof p === 'string' && NumberStyleMap.includes(p)) {
                    if (v === '0' || typeof v === 'undefined')
                        return 0;
                    if (util.isPXNumber(v))
                        return util.toNumber(v);
                }
                return v;
            },
            set(target, p, value, receiver) {
                // 非白名单样式不支持设置
                if (typeof p !== 'string' || !target.names.includes(p)) {
                    target[p] = value;
                    return true;
                }
                // 数字样式，处理px问题
                if (NumberStyleMap.includes(p)) {
                    value = typeof value === 'number' || util.isNumber(value) ? `${value}px` : value;
                }
                target.setStyle(p, value); // 应用到元素和类
                return true;
            }
        });
        return proxy;
    }
}

const SupportEventNames = [
    'mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout', 'mousewheel', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'blur', 'change', 'focus', 'drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'contextmenu'
];
/**
 * @public
 */
class JEvent {
    target;
    constructor(target) {
        if (target)
            this.target = target;
    }
    // 规范化事件名
    normalizeEventNames(name) {
        if (!this.target || !name) {
            return [];
        }
        let events = name;
        if (typeof name === 'string') {
            events = name.split(' ');
        }
        // 过滤掉不支持的事件
        return events.filter(k => SupportEventNames.includes(k));
    }
    /**
     * 初始化所有支持的事件，在init之前不要on，不然在init的时候会被释放掉。
     * @param handler - 事件处理函数
     * @param target - 元素
     */
    init(handler, target) {
        if (target) {
            // 释放掉原target的事件
            this.dispose();
            this.target = target;
        }
        this.on(SupportEventNames, handler, false);
    }
    _eventCache = [];
    /**
     * 绑定事件到html对象
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    on(name, fun, opt = false) {
        const events = this.normalizeEventNames(name);
        for (const n of events) {
            this.target.addEventListener(n, fun, opt);
            this._eventCache.push([n, fun, opt]);
        }
        return this;
    }
    /**
     * 从对象中移除事件
     * 不传 的时候删除所有事件
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    off(name, fun, opt = false) {
        const events = this.normalizeEventNames(name);
        this._eventCache = this._eventCache.filter(item => {
            if (events.length && !events.includes(item[0])) {
                return true;
            }
            if ((fun && fun !== item[1]) || (typeof opt !== 'undefined' && opt !== item[2])) {
                // DOM 要完全一致才能被removeEventListener删除掉
                return true;
            }
            this.target.removeEventListener(item[0], item[1], item[2]);
            return false;
        });
        return this;
    }
    // 移除所有的事件
    dispose() {
        this.off();
    }
}

/**
 * JData 类：提供了一种方式来处理和管理数据
 * @public
 */
class JData extends EventEmitter {
    constructor(data = {}) {
        super();
        this.from(data);
    }
    /** 用于存放数据的对象 */
    data = {};
    /** 存放数据变化的监听器 */
    watcher = new Map();
    // 监控某个属性变化
    watch(name, watcher) {
        if (Array.isArray(name)) {
            for (const n of name) {
                if (!n)
                    continue;
                this.watch(n, watcher);
            }
            return this;
        }
        let watches = [];
        if (this.watcher.has(name))
            watches = this.watcher.get(name);
        else {
            this.watcher.set(name, watches);
        }
        watches.push(watcher);
        this.data[name] && this.propertyChange(name); // 触发一次
        return this;
    }
    // 属性改变
    propertyChange(name, value) {
        if (typeof value !== 'undefined')
            this.data[name] = value;
        else {
            value = this.data[name];
        }
        const watches = this.watcher.get(name);
        if (watches && watches.length) {
            for (const w of watches) {
                w && w.set && w.set({
                    name,
                    value
                });
            }
        }
        this.emit('change', {
            name,
            value
        });
    }
    // 读取属性
    getProperty(name) {
        const watches = this.watcher.get(name);
        if (watches && watches.length) {
            for (const w of watches) {
                const v = w && w.get && w.get(name);
                if (typeof v !== 'undefined')
                    return v;
            }
        }
        return this.data[name];
    }
    /**
     * 从对象中导入数据到当前实例
     * @param data - 需导入的数据对象
     * @returns 返回当前 JData 实例
     */
    from(data) {
        if (this.data)
            Object.assign(this, data);
        return this;
    }
    // 遍历
    map(fun) {
        const props = Object.getOwnPropertyNames(this.data);
        const res = [];
        for (const name of props) {
            if (typeof this[name] === 'undefined' || typeof this[name] === 'function')
                continue;
            const ret = fun && fun(name, this[name]);
            if (ret !== false) {
                res.push({
                    name,
                    value: this[name]
                });
            }
        }
        return res;
    }
    /**
     * 导出数据为 JSON 对象
     * @returns 返回 JSON 对象
     */
    toJSON() {
        const obj = {};
        this.map((name, value) => {
            obj[name] = value;
        });
        return obj;
    }
    // 生成数据Data
    static createProxy(data) {
        // 代理处理
        const proxy = new Proxy(data, {
            get(target, p, receiver) {
                const v = target[p];
                if (typeof v === 'undefined' && typeof p === 'string') {
                    return target.getProperty(p);
                }
                return v;
            },
            set(target, p, value, receiver) {
                if (typeof p === 'string')
                    target.propertyChange(p, value);
                else
                    target[p] = value;
                return true;
            }
        });
        return proxy;
    }
}
/**
 * 元素的基础数据类
 * @public
 */
class JElementData extends JData {
    constructor(data = {}) {
        super(data);
    }
    top;
    left;
    width;
    height;
    // 旋转弧度
    rotation;
    // 旋转角度
    angle;
    visible;
    zIndex;
}
/**
 * 图片元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
class JImageData extends JElementData {
    src;
}
/**
 * svg
 * @public
 */
class JSvgData extends JImageData {
    url;
    svg;
}
/**
 * 文本元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
class JTextData extends JElementData {
    text;
}

/**
 * @public
 */
class JElement extends EventEmitter {
    constructor(option = {}) {
        super();
        this._id = this.id || option.id || util.uuid();
        this._type = this.type || option.type || '';
        const nodeType = option.nodeType || 'div';
        // @ts-ignore
        this._dom = document.createElement(nodeType);
        if (option.editor)
            this.editor = option.editor;
        // 样式代理处理
        this.style = JElementStyle.createProxy();
        this.style.on('change', (s) => {
            this.setDomStyle(s.name, s.value);
            this.emit('styleChange', {
                type: 'styleChange',
                data: s,
                target: this
            });
        });
        // 变换控制的是核心元素
        this.transform = Transform.createProxy(option.transform, {
            target: this,
            // 如果指定了只响应某几个属性
            watchProps: option.transformWatchProps
        });
        const dataType = option.dataType || JElementData;
        // @ts-ignore
        this.data = JElementData.createProxy(new dataType());
        // 如果是组件，不在这里进行数据初始化调用
        this.initData(option);
        // @ts-ignore
        if (option.className)
            this.className = option.className;
        this.bindEvent(); // 事件绑定
    }
    // 初始化一些基础属性
    initData(option) {
        // 属性变化映射到style
        this.data.watch([
            'left', 'top', 'width', 'height', 'zIndex', 'visible'
        ], {
            set: (item) => {
                if (item.name === 'visible') {
                    this.style.display = item.value ? 'block' : 'none';
                }
                else if (item.name === 'rotation') {
                    this.transform.rotateZ = item.value;
                }
                else if (item.name === 'angle') {
                    this.transform.rotateZ = util.degToRad(item.value);
                }
                else
                    this.style[item.name] = item.value;
            },
            get: (name) => {
                if (name === 'width') {
                    let w = this.style.width || 0;
                    if ((!w || w === 'auto') && this.dom && this.dom.clientWidth)
                        return this.dom.clientWidth;
                    return w;
                }
                else if (name === 'height') {
                    let h = this.style.height || 0;
                    if ((!h || h === 'auto') && this.dom && this.dom.clientHeight)
                        return this.dom.clientHeight;
                    return h;
                }
                else if (name === 'rotation') {
                    return this.transform.rotateZ;
                }
                else if (name === 'angle') {
                    return util.radToDeg(this.transform.rotateZ);
                }
                else if (name === 'visible') {
                    return this.style.display !== 'none';
                }
                return this.style[name];
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
    }
    // 绑定事件
    bindEvent(dom) {
        // 事件托管
        this.event = new JEvent(dom || this.dom);
        this.event.init((e) => {
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
            this.emit(e.type, e);
        });
    }
    _id = '';
    get id() {
        return this._id;
    }
    // 类型名称
    _type = '';
    get type() {
        return this._type;
    }
    // 子元素
    _children = [];
    get children() {
        return this._children;
    }
    // 控件最外层的容器
    _dom;
    get dom() {
        return this._dom;
    }
    // 父元素
    parent;
    // 当前编辑器
    editor;
    // 事件处理
    event;
    // 样式代理
    style;
    data;
    get className() {
        return this.dom.className;
    }
    set className(v) {
        this.dom.className = v;
    }
    get visible() {
        return this.data.visible;
    }
    set visible(v) {
        this.data.visible = v;
    }
    // 是否可编辑
    editable = true;
    // 变换
    transform;
    // 当前子元素最大的level层
    get childrenMaxLevel() {
        let level = 0;
        for (const c of this.children) {
            level = Math.max(c.data.zIndex, level);
        }
        return level;
    }
    // 设置css到dom
    setDomStyle(name, value) {
        if (name === 'backgroundImage' && value) {
            if (!/^\s*url\(/.test(value))
                value = `url(${value})`;
        }
        util.css(this.dom, name, value);
    }
    // 设置样式
    css(name, value) {
        util.css(this, name, value);
        return this;
    }
    // dom属性
    attr(name, value) {
        return util.attr(this.dom, name, value);
    }
    // 移位
    move(dx, dy) {
        this.data.left = util.toNumber(this.data.left) + dx;
        this.data.top = util.toNumber(this.data.top) + dy;
        this.emit('move', { dx, dy });
    }
    // 把子元素按zIndex排序
    childrenSort() {
        return this.children.sort((a, b) => a.data.zIndex - b.data.zIndex);
    }
    // 重置大小
    resize(w, h) {
        if (typeof w === 'number') {
            this.data.width = w;
        }
        if (typeof h === 'number') {
            this.data.height = h;
        }
    }
    // 新增子元素
    addChild(child, parent = this) {
        if (Array.isArray(child)) {
            for (const c of child) {
                parent.addChild(c);
            }
            return parent;
        }
        if (child instanceof JElement) {
            child.parent = parent;
            // 如果没有指定层级，则新加的都在最大
            if (!child.data.zIndex || child.data.zIndex == 0) {
                child.data.zIndex = this.childrenMaxLevel + 1;
            }
            parent.dom.appendChild(child.dom);
            parent.children.push(child);
        }
        else if (child instanceof HTMLElement) {
            parent.dom.appendChild(child);
        }
    }
    // 移除自已
    remove() {
        if (this.parent)
            this.parent.removeChild(this);
    }
    // 移除子元素
    removeChild(el) {
        // @ts-ignore
        if (el.dom && el.dom.parentElement === this.dom)
            this.dom.removeChild(el.dom || el);
        for (let i = this.children.length - 1; i > -1; i--) {
            if (this.children[i] === el)
                return this.children.splice(i, 1);
        }
        // @ts-ignore
        delete el.parent;
    }
    // 转为json
    toJSON(props = [], ig = (p) => true) {
        const fields = ['type', 'data', 'style', 'transform', 'id', ...props];
        const obj = {
            children: []
        };
        for (const k of fields) {
            const v = this[k];
            if (typeof v === 'string' || typeof v === 'number') {
                obj[k] = this[k];
            }
            else if (v && v.toJSON) {
                obj[k] = v.toJSON();
            }
        }
        if (this.children && this.children.length) {
            for (const child of this.children) {
                if (child === this || ig(child) === false)
                    continue;
                obj.children.push(child.toJSON());
            }
        }
        return obj;
    }
    toString() {
        const obj = this.toJSON();
        return JSON.stringify(obj);
    }
    toHtml() {
        return this.dom.outerHTML;
    }
    // 丢弃
    dispose() {
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
}

/**
 * @public
 */
class JBaseComponent extends JElement {
    constructor(option = {}) {
        option.style = option.style || {};
        // position和overflow预设的值优先级最高
        option.style = Object.assign({ ...ContainerDefaultStyle }, option.style, {
            position: ContainerDefaultStyle.position,
            overflow: ContainerDefaultStyle.overflow
        });
        super({
            // 外层只响应Z轴旋转
            transformWatchProps: [
                'rotateZ', 'scaleX', 'scaleY'
            ],
            ...option,
            nodeType: 'div',
            className: 'j-design-editor-container',
            isComponent: true
        });
        option.target = option.target || {};
        // 生成当前控制的元素
        this.target = new JElement({
            ...option,
            visible: true,
            data: {},
            // 不响应本身的变换，只响应父级的
            transformWatchProps: [],
            style: {
                display: 'block',
                cursor: 'pointer',
                width: '100%',
                height: '100%',
            }
        });
        this.addChild(this.target.dom);
        // 变换改为控制主元素
        this.transform.bind({
            target: this.target,
            watchProps: [
                'rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY'
            ]
        });
        this.data.on('change', (e) => {
            this.emit('dataChange', {
                type: 'dataChange',
                target: this,
                data: e
            });
        });
    }
    // 当前控件的核心元素
    target;
    // 选中
    _selected = false;
    get selected() {
        return this._selected;
    }
    set selected(v) {
        this._selected = v;
        this.emit('select', {
            type: 'select',
            target: this,
            selected: v
        });
    }
    // 设置层级，指定数字或操作, next下一层，pre上一层，top顶层，bottom最底层
    setLevel(level) {
        if (typeof level === 'number')
            this.data.zIndex = level;
        if (!this.parent)
            return;
        const maxLevel = this.parent.childrenMaxLevel;
        switch (level) {
            case 'next': {
                const res = this.getMyNextLevelChildren();
                if (res.level < 0)
                    this.data.zIndex = 0; // 如果没找到下一层的，则直接赋到bottom层0
                else {
                    res.elements.map((el) => {
                        el.data.zIndex = this.data.zIndex;
                    });
                    this.data.zIndex = res.level;
                }
                break;
            }
            case 'pre': {
                const res = this.getMyPreLevelChildren();
                if (res.level < 0)
                    this.data.zIndex = maxLevel; // 如果没找到上一层的，则直接赋到top层
                else {
                    res.elements.map((el) => {
                        el.data.zIndex = this.data.zIndex;
                    });
                    this.data.zIndex = res.level;
                }
                break;
            }
            case 'top': {
                this.data.zIndex = maxLevel + 1;
                break;
            }
            case 'bottom': {
                this.parent.children.map((el) => {
                    el !== this && (el.data.zIndex += 1);
                }); // 所有子元素上移一层，除了当前元素
                this.data.zIndex = 0;
            }
        }
    }
    // 获取我下一层的所有元素
    getMyNextLevelChildren() {
        const elements = [];
        if (!this.parent)
            return;
        const children = this.parent.childrenSort();
        let nextLevel = -1;
        for (let i = children.length - 1; i >= 0; i--) {
            const c = children[i];
            if (c.data.zIndex < this.data.zIndex && c !== this) {
                if (nextLevel < 0)
                    nextLevel = c.data.zIndex;
                if (c.data.zIndex === nextLevel)
                    elements.push(c);
            }
        }
        return {
            elements,
            level: nextLevel
        };
    }
    // 获取我上一层的所有元素
    getMyPreLevelChildren() {
        const elements = [];
        if (!this.parent)
            return;
        const children = this.parent.childrenSort();
        let preLevel = -1;
        for (let i = 0; i < children.length; i++) {
            const c = children[i];
            if (c.data.zIndex > this.data.zIndex && c !== this) {
                if (preLevel < 0)
                    preLevel = c.data.zIndex;
                if (c.data.zIndex === preLevel)
                    elements.push(c);
            }
        }
        return {
            elements,
            level: preLevel
        };
    }
    // 设置css到dom
    setDomStyle(name, value) {
        // 如果外层容器的样式，则加到container上
        if (name in ContainerDefaultStyle || name === 'transform') {
            super.setDomStyle(name, value);
        }
        else {
            this.target && this.target.css(name, value);
        }
    }
    toJSON(props = []) {
        // 转json忽略渲染组件
        return super.toJSON(props, (el) => {
            return el !== this.target;
        });
    }
}

/**
 * 文本组件类 JText，继承于基础组件 Base。
 * @public
 */
class JText extends JBaseComponent {
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
    constructor(option = {}) {
        option.style = {
            fontFamily: 'Arial',
            textAlign: 'left',
            fontSize: 22,
            fontWeight: 'normal',
            fontStyle: 'normal',
            wordBreak: "keep-all",
            wordWrap: "break-word",
            ...option.style
        };
        super({
            ...option,
            nodeType: 'div',
            dataType: JTextData
        });
        // 'text' 属性变化映射到 innerText
        this.data.watch([
            'text'
        ], {
            set: (item) => {
                this.target.dom.innerText = item.value;
            },
            get: (name) => {
                return this.target.dom.innerText;
            }
        });
        // 如果在选项中提供，设置 'text' 属性
        // @ts-ignore
        const text = option.text;
        if (text)
            this.data.text = text;
        // 添加双击事件监听器，进入编辑状态
        this.on('dblclick', () => {
            this.edit();
        });
        // 添加选择事件监听器，退出编辑状态
        this.on('select', () => {
            this.closeEdit();
        });
        JText.TextControlCache.set(this.id, this); // 缓存起来
    }
    // 所有 JText 实例的缓存
    static TextControlCache = new Map();
    /**
     * 进入文本编辑状态
     */
    edit() {
        if (!this.editable)
            return;
        let editEl = this.editor.textEditElement;
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
            editEl.on('blur', (e) => {
                this.closeEdit();
            });
            editEl.on('click dblclick mousedown', (e) => {
                e.stopPropagation();
            });
            this.editor.dom.appendChild(editEl.dom);
        }
        editEl.dom.value = this.data.text;
        editEl.attr('data-target', this.id);
        const w = util.toNumber(this.data.width) * 1.5;
        const h = util.toNumber(this.data.height) * 1.2;
        const style = {};
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
    }
    /**
     * 退出文本编辑状态
     */
    closeEdit() {
        const editEl = this.editor.textEditElement;
        if (!editEl || !editEl.visible)
            return;
        // 编辑的是当前元素，才采用它的值
        const id = editEl.attr('data-target');
        const target = JText.TextControlCache.get(id);
        if (target instanceof JText) {
            target.data.text = editEl.dom.value;
            editEl.data.visible = false;
            editEl.dom.value = ''; // 置空
        }
    }
    /**
     * 移除 JText 实例
     */
    dispose() {
        JText.TextControlCache.delete(this.id);
        super.dispose();
    }
}

/**
 * 图像组件类 JImage，继承于基础组件 Base。
 * @public
 */
class JImage extends JBaseComponent {
    /**
     * JImage组件构造函数。
     * @param option - 图像选项，包括 url, src 等。
     */
    constructor(option = {}) {
        super({
            ...option,
            nodeType: 'img',
            dataType: JImageData
        });
        // 图像加载完成时触发 'load' 事件
        this.target.dom.onload = (e) => {
            this.emit('load', e);
        };
        // 图像加载错误时触发 'error' 事件
        this.target.dom.onerror = (e) => {
            this.emit('error', e);
        };
        // 允许跨域获取图像资源（避免CORS问题）
        this.target.attr('crossorigin', 'anonymous');
        // 'src' 属性变化映射到 style
        this.data.watch([
            'src'
        ], {
            // 设置 'src' 属性
            set: (item) => {
                this.target.dom.src = item.value;
            },
            // 获取 'src' 属性
            get: (name) => {
                return this.target.dom.src;
            }
        });
        // 如果在选项中提供，设置 'src' 或 'url' 属性
        // @ts-ignore
        const src = option.url || option.src;
        if (src)
            this.data.src = src;
    }
}

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


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class JSvg extends JBaseComponent {
    constructor(option = {}) {
        super({
            ...option,
            dataType: JSvgData
        });
        // 属性变化映射到style
        this.data.watch([
            'url', 'svg', 'src'
        ], {
            set: (item) => {
                if (item.name === 'url') {
                    this.load(item.value);
                }
                if (item.name === 'src') {
                    this.data.url = item.value;
                }
                else if (item.name === 'svg') {
                    this.target.dom.innerHTML = item.value;
                }
            }
        });
    }
    // 替换变量
    renderSvg(svg) {
        this.data.map((name, value) => {
            svg = svg.replace(new RegExp(`\\{${name}\\}`, 'g'), value);
        });
        return svg;
    }
    // 加载svg内容
    async load(url = this.data.url) {
        const svg = await util.request(url);
        this.data.svg = svg;
    }
}

// 控制元素移动和矩阵变换
class JControllerItem extends JElement {
    constructor(option) {
        option.style = {
            border: '1px solid rgba(6,155,181,1)',
            backgroundColor: '#fff',
            pointerEvents: 'auto',
            ...option.style,
            position: 'absolute'
        };
        super(option);
        this.dir = option.dir || '';
        this.size = option.size || 8;
        this.data.width = this.data.height = this.size;
        this.editor = option.editor;
        if (this.editor) {
            // @ts-ignore
            this.editor.view.on('mouseup', (e) => {
                if (e.button === 0)
                    this.onDragEnd(e);
            });
            // @ts-ignore
            this.editor.view.on('mouseout', (e) => {
                if (!this.isMoving || e.target !== this.editor.view.dom)
                    return; // 不是out编辑器，不处理
                this.onDragEnd(e);
            });
            // @ts-ignore
            this.editor.view.on('mousemove', (e) => {
                this.onDragMove(e);
            });
        }
        this.on('mousedown', (e) => {
            // 如果是左健
            if (e.button === 0) {
                this.onDragStart(e);
            }
        });
    }
    dir = '';
    size = 8;
    _isMoving = false;
    get isMoving() {
        return this._isMoving;
    }
    set isMoving(v) {
        this._isMoving = v;
    }
    // 拖放位置
    dragStartPosition = {
        x: 0,
        y: 0,
    };
    onDragMove(event) {
        if (!this.isMoving)
            return;
        const pos = {
            x: event.pageX || event.x,
            y: event.pageY || event.y,
        };
        const offX = (pos.x - this.dragStartPosition.x);
        const offY = (pos.y - this.dragStartPosition.y);
        this.emit('change', {
            dir: this.dir,
            offX,
            offY,
            oldPosition: this.dragStartPosition,
            newPosition: {
                x: pos.x,
                y: pos.y
            },
            event
        });
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition.x = pos.x;
        this.dragStartPosition.y = pos.y;
        event.stopPropagation();
        event.preventDefault();
    }
    onDragStart(event) {
        const pos = {
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
    }
    onDragEnd(event) {
        if (this.isMoving) {
            this.isMoving = false;
        }
    }
    // 计算指针
    async resetCursor(rotation = 0) {
        if (!this.dir)
            return;
        let cursor = await Cursors.get(this.dir, rotation);
        if (!cursor)
            return;
        // 先简单处理
        this.style.cursor = cursor.includes('\/') ? `url(${cursor}) 12 12,pointer` : cursor;
    }
}
// 元素大小位置控制器
class JControllerComponent extends JControllerItem {
    constructor(option) {
        option.style = {
            cursor: 'move',
            backgroundColor: 'transparent',
            ...option.style,
            pointerEvents: 'none',
        };
        option.dir = 'element';
        option.data = {
            ...option.data,
            zIndex: topZIndex
        };
        super(option);
        if (!this.editor.editable)
            return;
        this.init(option);
        this.editor.dom.appendChild(this.dom);
        this.resetCursor(this.transform.rotateZ);
    }
    init(option) {
        this.createItem('l', {
            shape: 'rect',
            style: {
                ...option.itemStyle,
                left: 0,
                top: '50%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lt', {
            shape: 'rect',
            style: {
                ...option.itemStyle,
                left: 0,
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('t', {
            shape: 'rect',
            style: {
                ...option.itemStyle,
                left: '50%',
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('tr', {
            shape: 'rect',
            style: {
                ...option.itemStyle,
                left: '100%',
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('r', {
            shape: 'rect',
            style: {
                ...option.itemStyle,
                left: '100%',
                top: '50%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('rb', {
            shape: 'rect',
            style: {
                ...option.itemStyle,
                left: '100%',
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('b', {
            shape: 'rect',
            style: {
                ...option.itemStyle,
                left: '50%',
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lb', {
            shape: 'rect',
            style: {
                ...option.itemStyle,
                left: 0,
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        // 旋转块
        this.rotateItem = this.createItem('rotate', {
            shape: 'circle',
            size: 24,
            style: {
                left: '50%',
                top: '-40px',
                //backgroundColor: 'transparent',
                border: 'none',
                boxShadow: '0 0 2px 2px #ccc',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.itemStyle,
                'backgroundSize': '100%',
                backgroundImage: ItemIcons.rotate
            },
            transform: {
                translateX: '-50%',
            }
        });
        this.skewItem = this.createItem('skew', {
            shape: 'circle',
            size: 24,
            style: {
                left: '50%',
                top: '50%',
                border: 'none',
                boxShadow: '0 0 2px 2px #ccc',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.itemStyle,
                'backgroundSize': '100%',
                backgroundImage: ItemIcons.skew
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        }); // 旋转块 
        if (this.editor) {
            this.editor.on('mousedown', (e) => {
                if (!this.isEditor || e.button === 2)
                    return; // 不是编辑器，不处理
                this.onDragStart(e);
            });
        }
        this.on('change', (e) => {
            this.change(e);
        });
    }
    items = [];
    rotateItem;
    skewItem;
    target;
    // 选择框边距
    paddingSize = 0;
    isEditor = false; // 当前关联是否是编辑器
    get center() {
        const center = {
            x: util$1.toNumber(this.data.left) + util$1.toNumber(this.data.width) / 2,
            y: util$1.toNumber(this.data.top) + util$1.toNumber(this.data.height) / 2,
        };
        return center;
    }
    // 生成控制点
    createItem(id, option) {
        const item = new JControllerItem({
            dir: id,
            editor: this.editor,
            ...option
        });
        this.addChild(item);
        this.items.push(item);
        const self = this;
        item.on('change', function (e) {
            self.change(e);
        });
        item.resetCursor(this.transform.rotateZ);
        return item;
    }
    // 发生改变响应
    change(e) {
        if (!this.target)
            return;
        let { dir, offX, offY, oldPosition, newPosition } = e;
        // 当前移动对原对象的改变
        let args = {
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
        const center = this.center;
        const width = util$1.toNumber(this.data.width);
        const height = util$1.toNumber(this.data.height);
        if (dir === 'rotate') {
            // 编辑器坐标, 因为是在编辑器渲染区域操作，需要把坐标转到此区域再处理
            const pos1 = this.editor.toEditorPosition(oldPosition);
            const pos2 = this.editor.toEditorPosition(newPosition);
            args.rotation = rotateChange(pos1, pos2, center);
        }
        else if (dir === 'skew') {
            const rx = offX / width * Math.PI;
            const ry = offY / height * Math.PI;
            args.skew.x = ry;
            args.skew.y = rx;
        }
        else if (dir === 'element') {
            // 元素位置控制器
            args.x = offX;
            args.y = offY;
        }
        else {
            // 根据操作参数，计算大小和偏移量
            args = getChangeData(dir, {
                x: offX,
                y: offY
            }, oldPosition, newPosition, center, this.transform.rotateZ);
        }
        // 位移
        if (args.x || args.y) {
            this.move(args.x, args.y);
        }
        if (args.width) {
            const width = util$1.toNumber(this.data.width) + args.width;
            this.data.width = Math.max(width, 1);
        }
        if (args.height) {
            this.data.height = Math.max(util$1.toNumber(this.data.height) + args.height, 1);
        }
        // x,y旋转
        if (args.skew.x || args.skew.y) {
            this.target.transform.rotateX += args.skew.x;
            this.target.transform.rotateY += args.skew.y;
            this.target.transform.apply();
        }
        // 如果有操作旋转
        if (args.rotation) {
            this.transform.rotateZ += args.rotation;
            if (Math.abs(this.transform.rotateZ) > fullCircleRadius)
                this.transform.rotateZ = this.transform.rotateZ % fullCircleRadius;
            this.transform.apply();
            // 发生了旋转，要处理指针图标
            for (const item of this.items) {
                item.resetCursor(this.transform.rotateZ);
            }
        }
        this.applyToTarget();
    }
    // 把变换应用到目标元素
    applyToTarget() {
        if (!this.target)
            return;
        const pos = {
            x: util$1.toNumber(this.data.left) + (this.isEditor ? util$1.toNumber(this.target.data.left) : 0),
            y: util$1.toNumber(this.data.top) + (this.isEditor ? util$1.toNumber(this.target.data.top) : 0)
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
        const width = util$1.toNumber(this.data.width) - this.paddingSize * 2;
        const height = util$1.toNumber(this.data.height) - this.paddingSize * 2;
        if (this.target.data.width !== width)
            this.target.data.width = width;
        if (this.target.data.height !== height)
            this.target.data.height = height;
    }
    // 重置
    reset(isEditor = this.isEditor) {
        this.isMoving = false;
        delete this.target;
        // 编辑器不让旋转和skew
        for (const item of this.items) {
            item.isMoving = false;
        }
        this.transform.from({
            rotateZ: 0,
        });
    }
    // 绑定到操作的对象
    bind(target) {
        if (!target.editable)
            return;
        this.isEditor = target === this.editor;
        this.reset(this.isEditor);
        // 编辑器的话，需要把它的坐标转为相对于容器的
        const pos = {
            x: (this.isEditor ? 0 : util$1.toNumber(target.data.left)),
            y: (this.isEditor ? 0 : util$1.toNumber(target.data.top))
        };
        this.data.left = pos.x;
        this.data.top = pos.y;
        this.data.width = util$1.toNumber(target.data.width) + this.paddingSize * 2;
        this.data.height = util$1.toNumber(target.data.height) + this.paddingSize * 2;
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
        // 编辑器不让旋转和skew
        for (const item of this.items) {
            item.data.visible = !this.isEditor && target.editable;
        }
        // 如果是编辑器，则不能捕获事件
        /*this.css({
            pointerEvents: this.isEditor? 'none' : 'auto'
        });*/
    }
    // 解除绑定
    unbind(target) {
        if (this.target === target) {
            this.reset(false);
            this.data.visible = false;
        }
    }
}

class JFontData {
    constructor(family, url, font) {
        this.family = family;
        this.url = url;
        this.font = font;
    }
    family;
    url;
    // 中文名
    label;
    font;
    get status() {
        if (this.font)
            return this.font.status;
        return 'unloaded';
    }
    async load(url = this.url) {
        this.url = url || this.url;
        if (!this.font)
            this.font = new FontFace(this.family, `url("${this.url}")`);
        const f = await this.font.load();
        document.fonts.add(f); // 生效
        return this;
    }
    toHtml() {
        return `@font-face {font-family: "${this.family}"; src: url("${this.url}")}`;
    }
}
class JFonts extends EventEmitter {
    constructor(fonts) {
        super();
        // 初始化默认支持的字体
        if (Array.isArray(fonts)) {
            for (const f of fonts) {
                this.fontConfigs.set(f.family.toLocaleLowerCase(), f);
            }
        }
        else if (fonts) {
            for (const name in fonts) {
                if (fonts[name] && typeof fonts[name] === 'object')
                    this.fontConfigs.set(fonts[name].family.toLocaleLowerCase(), fonts[name]);
            }
        }
        this.init();
    }
    fontConfigs = new Map();
    fonts = new Map();
    init() {
        if (document.fonts) {
            const fonts = document.fonts.values();
            let font = fonts.next();
            while (font && font.done && font.value) {
                if (font.value) {
                    const f = new JFontData(font.value.family);
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
    async load(name, url) {
        let font = this.get(name);
        if (font) {
            if (font.url && (font.status === 'unloaded' || font.status === 'error'))
                return font.load();
            return font;
        }
        if (!url) {
            const config = this.fontConfigs.get(name.toLocaleLowerCase());
            // 没有配置支持的字体，则报错
            if (!config) {
                throw Error(`没有支持的 ${name} 字体配置`);
            }
            url = config.url;
        }
        font = new JFontData(name, url);
        this.fonts.set(name.toLocaleLowerCase(), font);
        const f = await font.load();
        this.emit('load', f); // 加载字本事件
        return f;
    }
    // 获取已加载的字体
    get(name) {
        if (this.fonts) {
            name = name.toLocaleLowerCase();
            if (this.fonts.has(name))
                return this.fonts.get(name);
        }
        return null;
    }
    // 检查加载的字体是否存在，存在则返回字体对象
    check(name) {
        const font = this.get(name);
        return !!font;
    }
}

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
function Debounce(milliseconds = 0) {
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        let timerId = null;
        descriptor.value = function (...args) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                originalMethod.apply(this, args);
            }, milliseconds);
        };
        return descriptor;
    };
}

/**
 * @public
 */
class JEditor extends JBaseComponent {
    constructor(option = {}) {
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
        super(option);
        if (typeof option.container === 'string')
            option.container = document.getElementById(option.container);
        this.view = new JElement({
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
        this.fonts = new JFonts(option.fonts);
        this.target.css({
            'overflow': 'hidden'
        });
        if (option.container)
            option.container.appendChild(this.view.dom);
        this.view.addChild(this.dom);
        // @ts-ignore
        this.regShape({ 'image': JImage, 'text': JText, 'svg': JSvg });
        this.init(option);
        this.bindEvent(this.view.dom);
    }
    // 初始化整个编辑器
    init(option) {
        if (option.style.containerBackgroundColor)
            this.dom.style.backgroundColor = option.style.containerBackgroundColor;
        // 生成控制器
        this.elementController = new JControllerComponent({
            editor: this,
            visible: false
        });
        const styleNode = document.createElement('style');
        styleNode.innerHTML = `.j-design-editor-container {
                                    border: 0;
                                }
                                .j-design-editor-container:hover {
                                    box-shadow: 0 0 1px 1px rgba(255,255,255,0.5);
                                }`;
        this.dom.appendChild(styleNode);
        // 字体加载成功，同时加入到dom结构中
        this.fonts.on('load', (font) => {
            styleNode.append(font.toHtml());
        });
        this.on('select', (e) => {
            this.select(this); // 选中自已
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
    // 外层用于定位的容器
    view;
    // 所有支持的类型
    shapes = new Map();
    // 元素控帛器
    elementController;
    fonts; // 字体管理器
    // 重写子集为target
    get children() {
        return this.target.children;
    }
    // 被选中的元素
    get selectedElements() {
        const res = [];
        for (const el of this.children) {
            if (el instanceof JBaseComponent && el.selected) {
                res.push(el);
            }
        }
        return res;
    }
    // 绑定事件
    bindEvent(dom) {
        if (this.view)
            super.bindEvent(this.view.dom); // 编辑器事件绑到整个容器上
    }
    // 选中某个元素
    select(el) {
        if (el.selected) {
            // 选把所有已选择的取消
            this.selectedElements.map(p => {
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
    }
    resize(width = this.data.width, height = this.data.height) {
        this.data.left = Math.max((util.toNumber(this.view.dom.clientWidth) - util.toNumber(width)) / 2, 0);
        this.data.top = Math.max((util.toNumber(this.view.dom.clientHeight) - util.toNumber(height)) / 2, 0);
        this.data.width = width;
        this.data.height = height;
        this.attr('data-size', `${width}*${height}`);
        this.emit('resize', {
            width,
            height
        });
    }
    // 添加元素到画布
    addChild(child) {
        if (child === this.target || child instanceof HTMLElement) {
            return super.addChild(child);
        }
        this.bindElementEvent(child);
        child.parent = this; // 把父设置成编辑器
        child.editor = this;
        // 刷新样式
        child.style.refresh();
        child.editable = this.editable; // 当前是否可编辑
        this.target.addChild(child, this.target);
    }
    // 移除
    removeChild(el) {
        if (el === this.target) {
            //console.warn('不能移除自已');
            return;
        }
        if (el instanceof JElement) {
            el.off(SupportEventNames);
            el.off(['select', 'styleChange', 'dataChange']);
        }
        return this.target.removeChild(el);
    }
    // 绑定元素事件
    bindElementEvent(el) {
        const self = this;
        // 监听样式改变
        el.on([
            ...SupportEventNames,
            'styleChange', 'select', 'dataChange'
        ], function (e) {
            // 左健选中
            if (e.type === 'mousedown') {
                this.selected = true;
                if (e.button === 0)
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
                    self.fonts.load(e.data.value).catch((e) => {
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
    getChild(id) {
        for (const child of this.children) {
            if (child.id === id)
                return child;
        }
    }
    // 把domcument坐标转为编辑器相对坐标
    toEditorPosition(pos, dom = this.target.dom) {
        // 编辑器坐标
        const editorPos = util.getElementBoundingRect(dom);
        return {
            x: pos.x - editorPos.x,
            y: pos.y - editorPos.y
        };
    }
    clear() {
        this.css({
            'backgroundColor': '#fff',
            'backgroundImage': ''
        });
        for (let i = this.children.length - 1; i >= 0; i--) {
            const el = this.children[i];
            this.removeChild(el);
        }
        this.elementController.data.visible = false;
    }
    // 缩放
    scale(x, y = x) {
        if (x < 0.1 || y < 0.1)
            return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    }
    // 注册自定义组件
    regShape(name, shape) {
        if (typeof name === 'object') {
            for (const n in name) {
                this.regShape(n, name[n]);
            }
            return;
        }
        if (this.shapes.has(name))
            throw Error(`元素类型${name}已经存在`);
        this.shapes.set(name, shape);
        return shape;
    }
    // 创建元素
    createShape(type, option = {}) {
        const shape = typeof type === 'string' ? this.shapes.get(type) : type;
        if (!shape) {
            throw Error(`${type}不存在的元素类型`);
        }
        // @ts-ignore
        const el = new shape({
            ...option,
            editor: this,
            type,
        });
        return el;
    }
    fromJSON(data) {
        this.clear();
        if (typeof data === 'string')
            data = JSON.parse(data);
        if (data.style) {
            this.style.apply(data.style); // 应用样式
        }
        this.resize(data.width || data.data.width, data.height || data.data.height);
        for (const c of data.children) {
            if (!c.type)
                continue;
            const item = this.createShape(c.type, c);
            this.addChild(item);
        }
    }
}
__decorate([
    Debounce(10)
], JEditor.prototype, "resize", null);

export { EventEmitter, JBaseComponent, JData, JEditor, JElement, JElementCssStyle, JElementData, JElementStyleDeclaration, JElementStyleProperty, JEvent, JImage, JImageData, JSvgData, JText, JTextData, JEditor as default, util };
