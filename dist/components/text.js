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
import { topZIndex } from '../constant/styleMap';
import util from '../lib/util';
import JElement from '../core/element';
var JText = /** @class */ (function (_super) {
    __extends(JText, _super);
    function JText(option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        option.style = __assign({ fontFamily: 'Arial', textAlign: 'left', fontSize: 22, fontWeight: 'normal', fontStyle: 'normal', wordWrap: true, wordBreak: "keep-all" }, option.style);
        _this = _super.call(this, __assign(__assign({}, option), { nodeType: 'div' })) || this;
        if (option.text)
            _this.text = option.text;
        // 双击可编辑
        _this.on('dblclick', function () {
            _this.edit();
        });
        _this.on('select', function () {
            _this.closeEdit();
        });
        return _this;
    }
    Object.defineProperty(JText.prototype, "text", {
        get: function () {
            return this.target.dom.innerText;
        },
        set: function (v) {
            this.target.dom.innerText = v;
        },
        enumerable: false,
        configurable: true
    });
    // 进入编辑状态
    JText.prototype.edit = function () {
        var _this = this;
        if (!this.editable)
            return;
        var editEl = this.editor.textEditElement;
        if (!editEl) {
            editEl = this.editor.textEditElement = new JElement({
                nodeType: 'textarea',
                visible: false,
                zIndex: topZIndex,
                style: {
                    boxSizing: 'border-box',
                    padding: '4px',
                    position: 'absolute',
                    resize: 'both'
                }
            });
            editEl.on('blur', function (e) {
                _this.closeEdit();
            });
            editEl.on('click dblclick mousedown', function (e) {
                e.stopPropagation();
            });
            this.editor.dom.appendChild(editEl.dom);
        }
        editEl.dom.value = this.text;
        var w = util.toNumber(this.width) * 1.2;
        var h = util.toNumber(this.height) * 1.2;
        var style = {};
        style.width = Math.max(w, 100) + 'px';
        style.height = Math.max(h, 100) + 'px';
        style.top = this.top;
        style.left = this.left;
        style.fontSize = this.style.fontSize;
        style.fontFamily = this.style.fontFamily;
        style.fontWeight = this.style.fontWeight;
        style.display = 'inline-block';
        util.css(editEl, style);
        editEl.dom.focus(); // 进入控件
    };
    // 结束编辑
    JText.prototype.closeEdit = function () {
        var editEl = this.editor.textEditElement;
        if (!editEl)
            return;
        this.text = editEl.dom.value;
        editEl.visible = false;
    };
    JText.prototype.toJSON = function (props) {
        if (props === void 0) { props = []; }
        props.push('text');
        return _super.prototype.toJSON.call(this, props);
    };
    return JText;
}(Base));
export default JText;
