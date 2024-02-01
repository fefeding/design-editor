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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Base from '../core/baseComponent';
import { JImageData } from '../constant/data';
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
}(Base));
export default JImage;
