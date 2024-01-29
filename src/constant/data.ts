
import { IData } from './types';
import EventEmiter from './eventEmitter';

export interface IDataItem {
    name: string;
    value: any
}

export type DataChangeWatch = (data: IDataItem) => void;

export default class JData extends EventEmiter implements IData {
    constructor(data={}) {
        super();
        this.from(data);
    }

    watcher = new Map<string, DataChangeWatch[]>();

    // 监控某个属性变化
    watch(name: string|Array<string>, fun: DataChangeWatch) {
        if(Array.isArray(name)) {
            for(const n of name) {
                if(!n) continue;
                this.watch(n, fun);
            }
            return this;
        }
        
        let watches = [];
        if(this.watcher.has(name)) watches = this.watcher.get(name);
        else {
            this.watcher.set(name, watches);
        }
        watches.push(fun);
        return this;
    }

    // 属性改变
    propertyChange(name: string, value: any) {
        const watches = this.watcher.get(name);
        if(watches && watches.length) {
            for(const w of watches) {
                w({
                    name,
                    value
                 });
            }
         }
         this.emit('change', {
            name,
            value
         });
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
    static createProxy<T extends JData>(data: T) : T {
        // 代理处理
        const proxy = new Proxy<T>(data, {
            get(target, p, receiver) {
                const v = target[p];
                return v;
            },
            set(target, p, value, receiver) {
                target[p] = value;
                if(typeof p === 'string') target.propertyChange(p, value);
                return true;
            }
        });
        return proxy;
    } 
}

// 元素卙础数据对象
export class ElementData extends JData {
    // 坐标X
    x: string|number;
    // 坐标Y
    y: string|number;

    top: string|number;

    left: string|number;

    width: string|number;

    height: string|number;

    // 旋转弧度
    rotation: number;
    // 旋转角度

    angle: number;

    visible: boolean;

    zIndex: number;
}