import Base from '../core/baseComponent';
import { IJBaseComponent, IElementOption } from '../constant/types';
export default class JContainer extends Base<HTMLDivElement> implements IJBaseComponent<HTMLDivElement> {
    constructor(option?: IElementOption<import("../constant/data").IJElementData>);
    /**
     * 类型名称
     */
    get typeName(): string;
}
