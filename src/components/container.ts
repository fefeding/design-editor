import Base from '../core/baseComponent';
import { JElementData } from '../constant/data';
import { IJBaseComponent, IElementOption } from '../constant/types';

export default class JContainer extends Base<HTMLDivElement> implements IJBaseComponent<HTMLDivElement> {
    constructor(option={} as IElementOption) {
        super({
            ...option,
            type: option.type || 'svg',
            dataType: option.dataType || JElementData
        });
    }

    /**
     * 类型名称
     */
    get typeName(): string {
        return 'container';
    }
}