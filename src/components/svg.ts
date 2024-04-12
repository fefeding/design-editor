import Base from '../core/baseComponent';
import util from 'j-design-util';
import { JSvgData } from '../constant/data';
import { IJSvgComponent, ISvgOption, IJBaseComponent, IJElement } from '../constant/types';

export default class JSvg extends Base<HTMLDivElement> implements IJSvgComponent {
    constructor(option={} as ISvgOption) {
        super({
            ...option,
            type: option.type || 'svg',
            dataType: option.dataType || JSvgData
        });

        
        // 属性变化映射到style
        this.data.watch([
            'url', 'svg', 'src'
        ], {
            set: (item) => {
                if(item.name === 'url') {
                    this.load(item.value);
                }
                if(item.name === 'src') {
                    this.data.url = item.value;
                }
                else if(item.name === 'svg') {
                    this.target.dom.innerHTML = item.value;
                }
            }
        });
    }

    declare data: JSvgData;

    /**
     * 类型名称
     */
    get typeName(): string {
        return 'svg';
    }

    // 添加元素到画布
    addChild(child: IJBaseComponent | IJElement | HTMLElement) {
        if(child === this.target || child instanceof HTMLElement) {
            return super.addChild(child);
        }
       
        return super.addChild(child);
    }

    // 加载svg内容
    async load(url: string = this.data.url) {
        const svg = await util.request(url);
        this.data.svg = svg;
    }
}