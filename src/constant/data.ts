
import EventEmiter from './eventEmitter';

export interface IDataItem {
    name: string;
    value: any
}

// 数据对象
export interface IData<T> {

    [key: string]: any;

    // 监控某个属性变化
    watch(name: string, watcher: DataChangeWatch): IData<T>;

    // 属性改变
    propertyChange(name: string, value: any);

    from(data: object): IData<T>;
    toJSON(): object;
}

export type DataChangeWatch = {
    set?: (data: IDataItem) => void; // 写属性
    get?: (name: string) => any  // 读
}

export default class JData<T extends object> extends EventEmiter implements IData<T> {
    constructor(data={}) {
        super();
        this.from(data);
    }

    data = {} as T;

    watcher = new Map<string, DataChangeWatch[]>();

    // 监控某个属性变化
    watch(name: string|Array<string>, watcher: DataChangeWatch) {
        if(Array.isArray(name)) {
            for(const n of name) {
                if(!n) continue;
                this.watch(n, watcher);
            }
            return this;
        }
        
        let watches = [];
        if(this.watcher.has(name)) watches = this.watcher.get(name);
        else {
            this.watcher.set(name, watches);
        }
        watches.push(watcher);

        this.data[name] && this.propertyChange(name);// 触发一次
        return this;
    }

    // 属性改变
    propertyChange(name: string, value?: any) {
        if(typeof value !== 'undefined') this.data[name] = value;
        else {
            value = this.data[name];
        }
        const watches = this.watcher.get(name);
        if(watches && watches.length) {
            for(const w of watches) {
                w && w.set && w.set({
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

    // 读取属性
    getProperty(name: string) {
        const watches = this.watcher.get(name);
        if(watches && watches.length) {
            for(const w of watches) {
                const v = w && w.get && w.get(name);
                if(typeof v !== 'undefined') return v;
            }
         }
        return this.data[name];
    }

    from(data: object) {
        if(this.data) Object.assign(this, data);
        return this;
    }

    // 遍历
    map(fun?: (name: string, value: any)=>any): Array<IDataItem> {
        const props = Object.getOwnPropertyNames(this.data);
        const res = [];
        for(const name of props) {
            if(typeof this[name] === 'undefined' || typeof this[name] === 'function') continue;
            
            const ret = fun && fun(name, this[name]);
            if(ret !== false) {
                res.push({
                    name,
                    value: this[name]
                });
            }
        }
        return res;
    }

    toJSON(): object {
        const obj = {};
        this.map((name, value) => {
            obj[name] = value;
        });
        return obj;
    }

    // 生成数据Data
    static createProxy<T extends JData<T>>(data: T) : T {
        // 代理处理
        const proxy = new Proxy(data, {
            get(target, p, receiver) {
                const v = target[p];
                if(typeof v === 'undefined' && typeof p === 'string') {
                    return target.getProperty(p);
                }
                return v;
            },
            set(target, p, value, receiver) {
                if(typeof p === 'string') target.propertyChange(p, value);
                else  target[p] = value;
                return true;
            }
        });
        return proxy;
    } 
}

export interface IJElementData {
    top?: string|number;

    left?: string|number;

    width?: string|number;

    height?: string|number;

    // 旋转弧度
    rotation?: number;
    // 旋转角度

    angle?: number;

    visible?: boolean;

    zIndex?: number;
}

// 元素卙础数据对象
export class JElementData extends JData<JElementData> implements IJElementData {
    constructor(data = {} as any) {
        super(data);
    }
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

export interface IJImageData extends IJElementData {

    src?: string;
}

export interface IJSvgData extends IJElementData {
    url?: string;
    svg?: string
}

export class JImageData extends JElementData implements IJImageData {
    src: string;
}

export class JSvgData extends JImageData implements IJSvgData {
    url: string;
    svg: string;
}

export interface IJTexteData extends IJElementData {

    text?: string;
}

export class JTextData extends JElementData implements IJTexteData {
    text: string;
}

export interface IJFontData {
    label: string;
    family: string;
    url: string;
}