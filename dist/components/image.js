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
/**
 * 图像组件类 JImage，继承于基础组件 Base。
 * @public
 */
var JImage = /** @class */ (function (_super) {
    __extends(JImage, _super);
    /**
     * JImage组件构造函数。
     * @param option - 图像选项，包括 url, src 等。
     */
    function JImage(option) {
        if (option === void 0) { option = {}; }
        var _this = _super.call(this, __assign(__assign({}, option), { nodeType: 'img', dataType: JImageData })) || this;
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
        _this.data.watch([
            'src'
        ], {
            // 设置 'src' 属性
            set: function (item) {
                _this.target.dom.src = item.value;
            },
            // 获取 'src' 属性
            get: function (name) {
                return _this.target.dom.src;
            }
        });
        // 如果在选项中提供，设置 'src' 或 'url' 属性
        // @ts-ignore
        var src = option.url || option.src;
        if (src)
            _this.data.src = src;
        return _this;
    }
    /**
     * img元素的JSON表现形式，包括'src'等属性。
     * @param props - 序列化时需要包括的属性
     * @returns JSON对象，表示img元素。
     */
    JImage.prototype.toJSON = function (props) {
        if (props === void 0) { props = []; }
        props.push('src');
        return _super.prototype.toJSON.call(this, props);
    };
    return JImage;
}(Base));
export default JImage;
