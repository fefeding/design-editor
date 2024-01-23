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
import { ContainerDefaultStyle } from '../constant/styleMap';
import JTransform from '../constant/transform';
import JElement from '../core/element';
var JBaseComponent = /** @class */ (function (_super) {
    __extends(JBaseComponent, _super);
    function JBaseComponent(option) {
        var _this = _super.call(this, __assign(__assign({}, option), { nodeType: 'div', style: __assign({}, ContainerDefaultStyle) })) || this;
        option.target = option.target || {};
        // 生成当前控制的元素
        _this.target = new JElement(__assign(__assign({}, option), { style: {
                width: '100%',
                height: '100%',
                display: 'block',
            } }));
        _this.addChild(_this.target);
        // 刷新样式
        if (option.style)
            _this.style.apply(option.style);
        // 变换控制的是核心元素
        _this.transform = JTransform.createProxy(option.transform, _this.target);
        if (option.text)
            _this.text = option.text;
        if (option.html)
            _this.html = option.html;
        return _this;
    }
    Object.defineProperty(JBaseComponent.prototype, "text", {
        get: function () {
            return this.target.dom.innerText;
        },
        set: function (v) {
            this.target.dom.innerText = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JBaseComponent.prototype, "html", {
        get: function () {
            return this.target.dom.innerHTML;
        },
        set: function (v) {
            this.target.dom.innerHTML = v;
        },
        enumerable: false,
        configurable: true
    });
    // 设置css到dom
    JBaseComponent.prototype.setDomStyle = function (name, value) {
        // 如果外层容器的样式，则加到container上
        if (name in ContainerDefaultStyle) {
            _super.prototype.setDomStyle.call(this, name, value);
        }
        else {
            this.target && this.target.setDomStyle(name, value);
        }
    };
    return JBaseComponent;
}(JElement));
export default JBaseComponent;
