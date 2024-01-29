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
        _this.from(data);
        return _this;
    }
    JData.prototype.from = function (data) {
        Object.assign(this, data);
        return this;
    };
    JData.prototype.toJSON = function (props) {
        var e_1, _a;
        if (props === void 0) { props = []; }
        var obj = {};
        try {
            for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var name_1 = props_1_1.value;
                if (typeof this[name_1] === 'undefined')
                    continue;
                obj[name_1] = this[name_1];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return obj;
    };
    // 生成数据Data
    JData.createProxy = function (data) {
        if (data === void 0) { data = {}; }
    };
    return JData;
}(EventEmiter));
export default JData;
// 元素卙础数据对象
var ElementData = /** @class */ (function (_super) {
    __extends(ElementData, _super);
    function ElementData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ElementData;
}(JData));
export { ElementData };
