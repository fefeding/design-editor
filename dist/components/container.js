import Base from '../core/baseComponent';
import { JElementData } from '../constant/data';
export default class JContainer extends Base {
    constructor(option = {}) {
        super({
            ...option,
            type: option.type || 'svg',
            dataType: option.dataType || JElementData
        });
    }
    /**
     * 类型名称
     */
    get typeName() {
        return 'container';
    }
}
