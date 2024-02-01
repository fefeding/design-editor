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
import { JTextData } from '../constant/data';
import { topZIndex } from '../constant/styleMap';
import util from '../lib/util';
import JElement from '../core/element';
/**
 * 文本组件类 JText，继承于基础组件 Base。
 * @public
 */
var JText = /** @class */ (function (_super) {
    __extends(JText, _super);
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
    function JText(option) {
        if (option === void 0) { option = {}; }
        var _this = this;
        option.style = __assign({ fontFamily: 'Arial', textAlign: 'left', fontSize: 22, fontWeight: 'normal', fontStyle: 'normal', wordBreak: "keep-all", wordWrap: "break-word" }, option.style);
        _this = _super.call(this, __assign(__assign({}, option), { nodeType: 'div', dataType: JTextData })) || this;
        // 'text' 属性变化映射到 innerText
        _this.data.watch([
            'text'
        ], {
            set: function (item) {
                _this.target.dom.innerText = item.value;
            },
            get: function (name) {
                return _this.target.dom.innerText;
            }
        });
        // 如果在选项中提供，设置 'text' 属性
        // @ts-ignore
        var text = option.text;
        if (text)
            _this.data.text = text;
        // 添加双击事件监听器，进入编辑状态
        _this.on('dblclick', function () {
            _this.edit();
        });
        // 添加选择事件监听器，退出编辑状态
        _this.on('select', function () {
            _this.closeEdit();
        });
        JText.TextControlCache.set(_this.id, _this); // 缓存起来
        return _this;
    }
    /**
     * 进入文本编辑状态
     */
    JText.prototype.edit = function () {
        var _this = this;
        if (!this.editable)
            return;
        var editEl = this.editor.textEditElement;
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
            editEl.on('blur', function (e) {
                _this.closeEdit();
            });
            editEl.on('click dblclick mousedown', function (e) {
                e.stopPropagation();
            });
            this.editor.dom.appendChild(editEl.dom);
        }
        editEl.dom.value = this.data.text;
        editEl.attr('data-target', this.id);
        var w = util.toNumber(this.data.width) * 1.5;
        var h = util.toNumber(this.data.height) * 1.2;
        var style = {};
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
    };
    /**
     * 退出文本编辑状态
     */
    JText.prototype.closeEdit = function () {
        var editEl = this.editor.textEditElement;
        if (!editEl || !editEl.visible)
            return;
        // 编辑的是当前元素，才采用它的值
        var id = editEl.attr('data-target');
        var target = JText.TextControlCache.get(id);
        if (target instanceof JText) {
            target.data.text = editEl.dom.value;
            editEl.data.visible = false;
            editEl.dom.value = ''; // 置空
        }
    };
    /**
     * Div元素的JSON表现形式，包括 'text' 等属性
     * @param props - 要序列化的属性列表
     * @returns JSON对象，表示div元素
     */
    JText.prototype.toJSON = function (props) {
        if (props === void 0) { props = []; }
        props.push('text');
        return _super.prototype.toJSON.call(this, props);
    };
    /**
     * 移除 JText 实例
     */
    JText.prototype.dispose = function () {
        JText.TextControlCache.delete(this.id);
        _super.prototype.dispose.call(this);
    };
    // 所有 JText 实例的缓存
    JText.TextControlCache = new Map();
    return JText;
}(Base));
export default JText;
