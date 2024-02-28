import Base from '../core/baseComponent';
import { IJTextComponent, ITextOption } from '../constant/types';
import { JTextData } from '../constant/data';
import util from 'j-design-util';
import { Point } from 'j-design-util';

/**
 * 文本组件类 JText，继承于基础组件 Base。
 * @public
 */
export default class JText extends Base<HTMLDivElement> implements IJTextComponent {

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
    constructor(option = {} as ITextOption) {

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
                if(item.name === 'text') this.target.dom.innerText = item.value;
                else this.style[item.name] = item.value;
            },
            get: (name: string) => {
                if(name === 'text') return this.target.dom.innerText;
                else return this.style[name];
            }
        });

        // 如果在选项中提供，设置 'text' 属性
        // @ts-ignore
        const text = option.text;
        if(text) this.data.text = text;

        // 添加双击事件监听器，进入编辑状态
        this.on('dblclick', (e: MouseEvent) => {
            this.edit(e);
        });

        // 添加选择事件监听器，退出编辑状态
        this.on('select', ()=>{
            if(!this.selected) this.closeEdit();
        });

        this.target.on('click', (e: MouseEvent) => {
            util.setRange(this.target.dom, e);// 光标位置在点击位置
        });

        this.target.on('blur', ()=>{
            this.closeEdit();
        });

        JText.TextControlCache.set(this.id, this);// 缓存起来
    }

    /**
     * JTextData 数据
     */
    declare data: JTextData;

    // 所有 JText 实例的缓存
    static TextControlCache = new Map<string, JText>();

    /**
     * 类型名称
     */
    get typeName(): string {
        return 'text';
    }

    /**
     * 当前编辑状态
     */
    get contenteditable() {
        return util.attr(this.target.dom, 'contenteditable');
    }
    set contenteditable(v) {
        if(!this.editable && v) return;// 组件不支持编辑则不处理
        util.attr(this.target.dom, 'contenteditable', v.toString());
    }

    /**
     * 进入文本编辑状态
     */
    edit(e?: MouseEvent) {
        if(!this.editable) return;

        this.editor.elementController.visible = false;

        this.contenteditable = true;// 编辑态

        util.setRange(this.target.dom, e);// 光标位置在最后

        this.target.dom.focus();// 进入控件
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
    dispose(): void {
        JText.TextControlCache.delete(this.id);
        super.dispose();
    }
}