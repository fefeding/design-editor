import Base from '../core/baseComponent';
import { IJTextComponent, ITextOption } from '../constant/types';
import { JTextData } from '../constant/data';
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
    constructor(option?: ITextOption);
    /**
     * JTextData 数据
     */
    data: JTextData;
    isChildrenMode: boolean;
    /**
     * 类型名称
     */
    get typeName(): string;
    /**
     * 当前编辑状态
     */
    get contenteditable(): any;
    set contenteditable(v: any);
    get text(): string;
    /**
     * 文本的子元素有点特殊，因为编辑过后，可能存在 text node，需要一并处理
     */
    get children(): any[];
    /**
     * 进入文本编辑状态
     */
    edit(e?: MouseEvent): void;
    toJSON(props?: any[]): import("../constant/types").IElementJSON;
    /**
     * 退出文本编辑状态
     */
    closeEdit(): void;
    /**
     * 移除 JText 实例
     */
    dispose(): void;
}
