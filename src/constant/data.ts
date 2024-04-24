
import EventEmiter from 'j-eventemitter';

/**
 * 数据项，包含名字和值
 * @public
 */
export interface IDataItem {
    name: string;
    value: any
}

/**
 * 数据对象接口，包含监听属性变化、属性改变和数据导入导出等方法
 * @public
 */
export interface IData<T> {

    [key: string]: any;
    
    /** 
     * 监听某个属性的变化
     * @param name - 需要监听的属性名
     */
    watch(name: string, watcher: DataChangeWatch): IData<T>;

    /** 
     * 属性改变的方法
     * @param name - 变化的属性名
     */
    propertyChange(name: string, value: any);

    /** 
     * 从对象中导入数据
     * @param data - 需导入的数据对象
     */
    from(data: object): IData<T>;
    
    /** 
     * 导出数据为json对象
     * @returns 返回json对象
     */
    toJSON(): object;
}
/**
 * 用于监听数据变化的接口
 * @public
 */
export type DataChangeWatch = {
    /** 写属性 */
    set?: (data: IDataItem) => void; 

    /** 获取属性值 */
    get?: (name: string) => any;
}

/**
 * JData 类：提供了一种方式来处理和管理数据
 * @public
 */
export default class JData<T extends object> extends EventEmiter implements IData<T> {
    constructor(data={}) {
        super();
        this.from(data);
    }

    /** 用于存放数据的对象 */
    data = {} as T;

    /** 存放数据变化的监听器 */
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

    /** 
     * 从对象中导入数据到当前实例
     * @param data - 需导入的数据对象
     * @returns 返回当前 JData 实例
     */
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

    /** 
     * 导出数据为 JSON 对象
     * @returns 返回 JSON 对象
     */
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
/**
 * 图形元素的数据接口
 * @public
 */
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

    // 显示文本
    text?: string;
    // 元素的富文本内容
    html?: string;
}

/**
 * 元素的基础数据类
 * @public
 */
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

/**
 * 图片元素的数据接口，包含了源地址等额外属性
 * @public
 */
export interface IJImageData extends IJElementData {
    src?: string;
}
/**
 * svg
 * @public
 */
export interface IJSvgData extends IJElementData {
    url?: string;
    svg?: string
}


/**
 * 图片元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
export class JImageData extends JElementData implements IJImageData {
    src: string;
}
/**
 * svg
 * @public
 */
export class JSvgData extends JImageData implements IJSvgData {
    url: string;
    svg: string;
}

/**
 * 文本元素的数据接口，包含了文本内容等额外属性
 * @public
 */
export interface IJTexteData extends IJElementData {

    text?: string;
}

/**
 * 文本元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
export class JTextData extends JElementData implements IJTexteData {
    text: string;
}

/**
 * 定义字体的数据接口
 * @public
 */
export interface IJFontData {
    /** 字体的标签名 */
    label: string;

    /** 字体的名称 */
    family: string;

    /** 字体的链接地址 */
    url: string;
}