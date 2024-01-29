
import { IData } from './types';
import EventEmiter from './eventEmitter';

export default class JData extends EventEmiter implements IData {
    constructor(data={}) {
        super();
        this.from(data);
    }
    from(data: object): JData {
        Object.assign(this, data);
        return this;
    }
    toJSON(props = []): object {
        const obj = {};
        for(const name of props) {
            if(typeof this[name] === 'undefined') continue;
            obj[name] = this[name];
        }
        return obj;
    }

    // 生成数据Data
    static createProxy<T extends JData>(data:T = {} as T) {

    } 
}

// 元素卙础数据对象
export class ElementData extends JData {

}