import Base from '../core/baseComponent';
import { JSvgData } from '../constant/data';
import { IJSvgComponent, ISvgOption, IJBaseComponent, IJElement, IElementOption } from '../constant/types';
import { JDomElement } from 'src/constant/elementTypes';
import JElement from 'src/core/element';
export default class JSvg extends Base<SVGElement> implements IJSvgComponent {
    constructor(option?: ISvgOption);
    data: JSvgData;
    /**
     * 类型名称
     */
    get typeName(): string;
    addChild(child: IJBaseComponent | IJElement | JDomElement): any;
    createSvgElement(tag: any, node: IElementOption): JElement<JDomElement>;
    renderSvgElement(node: IElementOption, el: JElement): JElement<JDomElement>;
    load(url?: string): Promise<void>;
}
