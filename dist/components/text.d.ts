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
    static TextControlCache: Map<string, JText>;
    /**
     * 进入文本编辑状态
     */
    edit(): void;
    /**
     * 退出文本编辑状态
     */
    closeEdit(): void;
    /**
     * Div元素的JSON表现形式，包括 'text' 等属性
     * @param props - 要序列化的属性列表
     * @returns JSON对象，表示div元素
     */
    toJSON(props?: any[]): {
        children: any[];
    };
    /**
     * 移除 JText 实例
     */
    dispose(): void;
}
