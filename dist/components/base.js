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
import JElement from '../core/element';
var JBaseComponent = /** @class */ (function (_super) {
    __extends(JBaseComponent, _super);
    function JBaseComponent(option) {
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
            ] }, option), { nodeType: 'div', className: 'j-design-editor-container' })) || this;
        // 选中
        _this._selected = false;
        option.target = option.target || {};
        // 生成当前控制的元素
        _this.target = new JElement(__assign(__assign({}, option), { 
            // 不响应本身的变换，只响应父级的
            transformWatchProps: [], width: '100%', height: '100%', style: {
                display: 'block',
                cursor: 'pointer'
            } }));
        _this.addChild(_this.target);
        // 变换改为控制主元素
        _this.transform.bind({
            target: _this.target,
            watchProps: [
                'rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY'
            ]
        });
        // 刷新样式
        _this.style.refresh();
        return _this;
    }
    Object.defineProperty(JBaseComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (v) {
            this._selected = v;
            this.emit('select', v);
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
export default JBaseComponent;
