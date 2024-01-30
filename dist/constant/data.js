var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import EventEmiter from './eventEmitter';
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
            Object.assign(this.data, data);
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
}(EventEmiter));
export default JData;
// 元素卙础数据对象
var JElementData = /** @class */ (function (_super) {
    __extends(JElementData, _super);
    function JElementData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JElementData;
}(JData));
export { JElementData };
var JImageData = /** @class */ (function (_super) {
    __extends(JImageData, _super);
    function JImageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JImageData;
}(JElementData));
export { JImageData };
var JTextData = /** @class */ (function (_super) {
    __extends(JTextData, _super);
    function JTextData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JTextData;
}(JElementData));
export { JTextData };
