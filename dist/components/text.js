import Base from '../core/baseComponent';
import { JTextData } from '../constant/data';
import util from '../lib/util';
/**
 * 文本组件类 JText，继承于基础组件 Base。
 * @public
 */
export default class JText extends Base {
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
    constructor(option = {}) {
        option.style = {
            fontFamily: 'Arial',
            textAlign: 'left',
            fontSize: 22,
            fontWeight: 'normal',
            fontStyle: 'normal',
            wordBreak: "keep-all",
            wordWrap: "break-word",
            ...option.style
        };
        super({
            ...option,
            nodeType: 'div',
            dataType: JTextData
        });
        // 'text' 属性变化映射到 innerText
        this.data.watch([
            'text', 'fontFamily', 'fontSize'
        ], {
            set: (item) => {
                if (item.name === 'text')
                    this.target.dom.innerText = item.value;
                else
                    this.style[item.name] = item.value;
            },
            get: (name) => {
                if (name === 'text')
                    return this.target.dom.innerText;
                else
                    return this.style[name];
            }
        });
        // 如果在选项中提供，设置 'text' 属性
        // @ts-ignore
        const text = option.text;
        if (text)
            this.data.text = text;
        // 添加双击事件监听器，进入编辑状态
        this.on('dblclick', () => {
            this.edit();
        });
        // 添加选择事件监听器，退出编辑状态
        this.on('select', () => {
            if (!this.selected)
                this.closeEdit();
        });
        this.target.on('blur', () => {
            this.closeEdit();
        });
        JText.TextControlCache.set(this.id, this); // 缓存起来
    }
    // 所有 JText 实例的缓存
    static TextControlCache = new Map();
    /**
     * 进入文本编辑状态
     */
    edit() {
        if (!this.editable)
            return;
        this.editor.elementController.visible = false;
        util.attr(this.target.dom, 'contenteditable', 'true');
        // 把光标置于最后
        const range = document.createRange();
        const nodes = this.target.dom.childNodes;
        if (nodes.length) {
            const last = nodes[nodes.length - 1];
            range.setStart(last, last.textContent.length);
        }
        const sel = window.getSelection();
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        this.target.dom.focus(); // 进入控件
    }
    /**
     * 退出文本编辑状态
     */
    closeEdit() {
        util.attr(this.target.dom, 'contenteditable', 'false');
    }
    /**
     * 移除 JText 实例
     */
    dispose() {
        JText.TextControlCache.delete(this.id);
        super.dispose();
    }
}
