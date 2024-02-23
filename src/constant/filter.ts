

export interface IFilterData {
    name: string;
    displayName?: string;
    /**
     * 滤镜的值
     */
    value: string;
}

export interface IFilter extends IFilterData {
    toString(): string;
    toJSON(): IFilterData;
}

export interface IFilterOption extends IFilterData {

}

export interface IFilterManager {
    /**
     * 根据滤镜名获取滤镜对象
     * @param name 
     * @returns 
     */
    get(name: string): IFilter|undefined;

    /**
     * 当前滤镜个数
     */
    get count(): number;

    /**
     * 加入滤镜
     * @param filter 
     */
    add(filter: IFilter | Array< IFilter>): void;

    /**
     * 移除滤镜
     * @param filter 
     */
    remove(filter: IFilter | Array<IFilter|string> | string): void;

    /**
     * 清空滤镜
     */
    clear(): void;

    // 转成json
    toJSON?(): Array<IFilterData>;
}

export abstract class Filter implements IFilter {
    constructor(option?: IFilterOption) {
        if(option) {
            this.name = option.name;
            this.displayName = option.displayName;
            this.value = option.value;
        }
    }

    toString(): string {
        if(!this.name || !this.value) return '';
        return `${this.name}(${this.value})`;
    }
    toJSON(): IFilterData {
        return {
            name: this.name,
            displayName: this.displayName || '',
            value: this.value
        }
    }
    name: string;
    displayName?: string;
    value: string;
    
}

/**
 * 高斯模糊
 */
export class BlurFilter extends Filter {
    constructor(option?: IFilterData) {
        option = Object.assign({
            name: 'BlurFilter',
            displayName: '模糊',
            value: '10%'
        }, option);
        super(option);
    }
}

const filters = {
    BlurFilter
}