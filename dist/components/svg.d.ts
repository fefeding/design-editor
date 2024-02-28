import Base from '../core/baseComponent';
import { JSvgData } from '../constant/data';
import { IJSvgComponent, ISvgOption } from '../constant/types';
export default class JSvg extends Base<HTMLDivElement> implements IJSvgComponent {
    constructor(option?: ISvgOption);
    data: JSvgData;
    /**
     * 类型名称
     */
    get typeName(): string;
    renderSvg(svg: string): string;
    load(url?: string): Promise<void>;
}
