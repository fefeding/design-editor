var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { addEvent, removeEvent } from "../lib/dom";
export var SupportEventNames = [
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
     * 初始化所有支持的事件，在init之前不要bindEvent，不然在init的时候会被释放掉。
     * @param handler 事件处理函数
     * @param target 元素
     */
    JEvent.prototype.init = function (handler, target) {
        if (target) {
            // 释放掉原target的事件
            this.dispose();
            this.target = target;
        }
        this.bindEvent(SupportEventNames, handler, false);
    };
    /**
     * 绑定事件到html对象
     *
     * @method bindEvent
     * @static
     * @param {string | Array<string>} name 事件名称
     * @param {EventListenerOrEventListenerObject} fun 事件处理函数
     * @param {boolean | AddEventListenerOptions} opt 配置选项
     * @param {HTMLElement} target 绑定的元素，默认为 this.target
     */
    JEvent.prototype.bindEvent = function (name, fun, opt) {
        var e_1, _a;
        if (opt === void 0) { opt = false; }
        var events = this.normalizeEventNames(name);
        try {
            for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var n = events_1_1.value;
                addEvent(this.target, n, fun, opt);
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
        ;
        return this;
    };
    /**
     * 从对象中移除事件
     *
     * @method removeEvent
     * @static
     * @param {string | Array<string>} name 事件名称
     * @param {EventListenerOrEventListenerObject} fun 事件处理函数
     * @param {boolean | AddEventListenerOptions} opt 配置选项
     * @param {HTMLElement} target 解除绑定的元素，默认为 this.target
     */
    JEvent.prototype.removeEvent = function (name, fun, opt) {
        var e_2, _a;
        var _this = this;
        if (opt === void 0) { opt = false; }
        var events = this.normalizeEventNames(name);
        var _loop_1 = function (n) {
            this_1._eventCache = this_1._eventCache.filter(function (item) {
                if (item[0] === n) {
                    if ((fun && fun !== item[1]) || (typeof opt !== 'undefined' && opt !== item[2])) {
                        // DOM 要完全一致才能remove掉
                        return true;
                    }
                    removeEvent(_this.target, n, item[1], item[2]);
                    return false;
                }
                return true;
            });
        };
        var this_1 = this;
        try {
            for (var events_2 = __values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
                var n = events_2_1.value;
                _loop_1(n);
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
    // 移除所有的事件
    JEvent.prototype.dispose = function () {
        var e_3, _a;
        if (!this.target) {
            return;
        }
        try {
            for (var _b = __values(this._eventCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                removeEvent(this.target, item[0], item[1], item[2]);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this._eventCache = [];
    };
    return JEvent;
}());
export default JEvent;
