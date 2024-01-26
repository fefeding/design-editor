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
import util from "../lib/util";
var SupportEventNames = [
    'mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout', 'mousewheel', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'blur', 'change', 'focus', 'drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop'
];
var JEvent = /** @class */ (function () {
    function JEvent(target) {
        if (target)
            this.target = target;
    }
    // 初始化所有支持的事件
    JEvent.prototype.init = function (handler, target) {
        if (target)
            this.target = target;
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
        if (opt === void 0) { opt = false; }
        if (target === void 0) { target = this.target; }
        if (Array.isArray(name)) {
            try {
                for (var name_1 = __values(name), name_1_1 = name_1.next(); !name_1_1.done; name_1_1 = name_1.next()) {
                    var n = name_1_1.value;
                    this.bindEvent(n, fun, opt, target);
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
        if (opt === void 0) { opt = false; }
        if (target === void 0) { target = this.target; }
        if (target.removeEventListener) {
            target.removeEventListener(name, fun, opt);
        }
        // @ts-ignore  
        else if (target.detachEvent) {
            // @ts-ignore
            target.detachEvent('on' + name, fun, opt);
        }
        else {
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
        if (typeof px == 'undefined')
            px = evt.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
        var py = evt.pageY || evt.y;
        if (typeof py == 'undefined')
            py = evt.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
        var ox = evt.offsetX;
        var oy = evt.offsetY;
        if ((typeof ox === 'undefined' && typeof oy === 'undefined') || target) {
            var p = util.getElementPosition((target || evt.target));
            ox = px - p.x;
            oy = py - p.y;
        }
        return {
            x: ox,
            y: oy,
            pageX: px,
            pageY: py,
            isTouch: isTouch,
        };
    };
    return JEvent;
}());
export default JEvent;
