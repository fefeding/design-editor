import JElementStyleMap, { JElementStyleProperty } from '../constant/styleMap';

let StyleNamesMap: Array<string> | undefined;
export default class JElementStyle extends JElementStyleMap {
    constructor(option?: JElementStyleMap) {
        super();
        if(option) {
            this.apply(option);
        }
    }

    // 所有样式名称
    get names() {
        if(!StyleNamesMap) {
            const map = new JElementStyleProperty();
            StyleNamesMap = Object.getOwnPropertyNames(map);
        }
        return StyleNamesMap;
    }

    // 把样式应用到元素或当前对象
    apply(data: JElementStyleMap, target: CSSStyleDeclaration | JElementStyleMap = this) {
        
        for(const name of this.names) {
            if(typeof name !== 'string') continue;
            if(typeof data[name] === 'string') target[name] = data[name];
        }
        return target;
    }

    // 样式对应的元素
    applyTo(element: HTMLElement) {
        this.apply(this, element.style);
    }
}

