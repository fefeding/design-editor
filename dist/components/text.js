import Base from '../core/baseComponent';
import { JTextData } from '../constant/data';
import util from '@fefeding/utils';
import JHtmlElement from '../core/baseHtmlElement';
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
            fontSize: 14,
            fontWeight: 'normal',
            fontStyle: 'normal',
            //wordBreak: "keep-all",
            //wordWrap: "break-word",
            ...option.style
        };
        super({
            ...option,
            nodeType: 'div',
            type: option.type || 'text',
            dataType: option.dataType || JTextData
        });
        // 如果在选项中提供，设置 'text' 属性
        // @ts-ignore
        const text = option.text;
        if (text && !this.data?.text && !this.isChildrenMode)
            this.data.text = text;
        // 多子元素
        if (option.children?.length && !this.data?.text) {
            this.isChildrenMode = true;
        }
        else {
            // 非子元素模式，直接删掉子元素配置
            delete option.children;
            delete this.option?.children;
        }
        // 'text' 属性变化映射到 innerText
        this.data.watch([
            'text', 'fontFamily', 'fontSize'
        ], {
            set: (item) => {
                if (item.name === 'text') {
                    if (!this.isChildrenMode) {
                        if (item.value?.includes('\n')) {
                            this.isChildrenMode = true;
                        }
                        else {
                            this.target.dom.textContent = item.value;
                            return;
                        }
                    }
                    if (this.isChildrenMode) {
                        this.clear();
                        this.target.dom.innerHTML = '';
                    }
                    if (item.value?.includes('\n')) {
                        this.target.dom.innerHTML = item.value.replace(/\n/g, '<br />');
                    }
                    else {
                        this.target.dom.innerHTML = item.value;
                    }
                }
                else
                    this.style[item.name] = item.value;
            },
            get: (name) => {
                if (name === 'text') {
                    return this.text;
                }
                else
                    return this.style[name];
            }
        });
        // 添加双击事件监听器，进入编辑状态
        this.on('dblclick', (e) => {
            this.edit(e);
        });
        // 添加选择事件监听器，退出编辑状态
        this.on('select', () => {
            if (!this.selected)
                this.closeEdit();
        });
        this.target.on('click', (e) => {
            util.setRange(this.target.dom, e); // 光标位置在点击位置
        });
        this.target.on('blur', () => {
            this.closeEdit();
        });
        //JText.TextControlCache.set(this.id, this);// 缓存起来
    }
    isChildrenMode = false; // 是否是多子元素模式，如果是就会采用var节点处理文本
    // 所有 JText 实例的缓存
    //static TextControlCache = new Map<string, JText>();
    /**
     * 类型名称
     */
    get typeName() {
        return 'text';
    }
    /**
     * 当前编辑状态
     */
    get contenteditable() {
        return util.attr(this.target.dom, 'contenteditable');
    }
    set contenteditable(v) {
        if (!this.editable && v)
            return; // 组件不支持编辑则不处理
        util.attr(this.target.dom, 'contenteditable', v.toString());
    }
    // 当前显示的文本
    get text() {
        return this.target.dom.textContent;
    }
    /**
     * 文本的子元素有点特殊，因为编辑过后，可能存在 text node，需要一并处理
     */
    get children() {
        if (!this.isChildrenMode)
            return this._children;
        const children = [];
        for (const node of this.target.dom.childNodes) {
            if (node.nodeName === '#text') {
                const el = new JHtmlElement({
                    type: 'var',
                    data: {
                        text: node.textContent
                    }
                });
                children.push(el);
            }
            else if (node.nodeName === 'BR') {
                const el = new JHtmlElement({
                    type: 'br',
                    data: {}
                });
                children.push(el);
            }
            else {
                const id = util.attr(node, 'data-id');
                if (id) {
                    for (const c of this._children) {
                        if (c.id === id) {
                            c.data.text = node.textContent;
                            children.push(c);
                            break;
                        }
                    }
                }
            }
        }
        return children;
    }
    /**
     * 进入文本编辑状态
     */
    edit(e) {
        if (!this.editable)
            return;
        this.editor.elementController.visible = false;
        this.contenteditable = true; // 编辑态
        const dom = (e.target || this.target.dom);
        util.setRange(dom, e); // 光标位置在最后
        dom.focus && dom.focus(); // 进入控件
    }
    toJSON(props = []) {
        const obj = super.toJSON(props);
        // 如果文本包含在子元素中，就不需要赋值 data
        if (this.isChildrenMode)
            delete obj.data?.text;
        return obj;
    }
    /**
     * 退出文本编辑状态
     */
    closeEdit() {
        this.contenteditable = false;
    }
    /**
     * 移除 JText 实例
     */
    dispose() {
        //JText.TextControlCache.delete(this.id);
        super.dispose();
    }
}
