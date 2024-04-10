import Base from '../core/baseComponent';
import { JElementData } from '../constant/data';
export default class JContainer extends Base {
    constructor(option = {}) {
        super({
            ...option,
            type: option.type || 'div',
            dataType: option.dataType || JElementData
        });
    }
    /**
     * 类型名称
     */
    get typeName() {
        return 'container';
    }
    // 重写子集为target
    get children() {
        return this.target.children;
    }
}
