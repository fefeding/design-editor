import Base from '../core/baseComponent';
import { JSvgData } from '../constant/data';
import { IJSvgComponent, ISvgOption, IJBaseComponent, IJElement } from '../constant/types';
export default class JSvg extends Base<HTMLDivElement> implements IJSvgComponent {
    constructor(option?: ISvgOption);
    data: JSvgData;
    /**
     * 类型名称
     */
    get typeName(): string;
    addChild(child: IJBaseComponent | IJElement | HTMLElement): IJElement<HTMLElement>;
    load(url?: string): Promise<void>;
}
