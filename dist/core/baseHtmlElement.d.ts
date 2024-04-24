import { IFilterManager } from 'j-css-filters';
import { IElementOption } from '../constant/types';
import JElement from '../core/element';
/**
 * @public
 */
export default class JBaseHtmlElement extends JElement {
    constructor(option?: IElementOption<import("..").IJElementData>);
    filters: IFilterManager;
    /**
     * 类型名称
     */
    get typeName(): string;
}
