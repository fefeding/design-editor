import Base from '../core/baseComponent';
import { JImageData } from '../constant/data';
import { IJImageComponent, IImageOption } from '../constant/types';

/**
 * 图像组件类 JImage，继承于基础组件 Base。
 * @public
 */
export default class JImage extends Base<HTMLImageElement> implements IJImageComponent {

    /**
     * JImage组件构造函数。
     * @param option - 图像选项，包括 url, src 等。
     */
    constructor(option={} as IImageOption) {
        super({
            ...option,
            nodeType: 'img',
            dataType: JImageData
        });

        // 图像加载完成时触发 'load' 事件
        this.target.dom.onload = (e) => {
            this.emit('load', e);
        };
        
        // 图像加载错误时触发 'error' 事件
        this.target.dom.onerror = (e) => {
            this.emit('error', e);
        };

        // 允许跨域获取图像资源（避免CORS问题）
        this.target.attr('crossorigin', 'anonymous');

        // 'src' 属性变化映射到 style
        this.data.watch([
            'src'
        ], {
            // 设置 'src' 属性
            set: (item) => {
                if(item.name === 'src') this.target.dom.src = item.value;
            },
            get: (name) => {
                if(name === 'src') return this.target.dom.src;
            }
        });

        // 如果在选项中提供，设置 'src' 或 'url' 属性
        // @ts-ignore
        const src = option.url || option.src;
        if(src) this.data.src = src;
    }

    /**
     * JImageData 数据
     */
    declare data: JImageData;

    /**
     * 类型名称
     */
    get typeName(): string {
        return 'image';
    }

    toJSON(props = [])  {
        return super.toJSON([
            'filters',
            ...props
        ]);
    }
}