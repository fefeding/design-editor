import Base from '../core/baseComponent';
import util from '@fefeding/utils';
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
        if(!option.style) option.style = {};
        option.style.overflow = 'hidden';
        super({
            preserveRatio: true,// 图片默认保持比例
            ...option,
            nodeType: 'img',
            type: option.type || 'image',
            dataType: option.dataType || JImageData
        });
        // 如果保持宽高比，则不能拉伸到100%高
        if(option.preserveRatio || option.target?.style?.height === 'auto') {
            this.target.style.height = 'auto';
        }
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

    // // 重置大小
    // resize(w: number, h: number) {
    //     // 如果保持宽高比，则要计算比例不能变化
    //     // 宽度和高度的变化比例要一至
    //     if(this.option?.preserveRatio) {
    //         const width = util.toNumber(this.data.width);
    //         const height = util.toNumber(this.data.height);

    //         const pw = w / width;
    //         const ph = h / height;
    //         if(pw !== ph) {
    //             // 如果不一至，则取变化更多的比例
    //             const p = Math.abs(pw) > Math.abs(ph)? pw: ph;
    //             w = width * p;
    //             h = height * p;
    //         }
    //     }
    //     return super.resize(w, h);
    // }
    
    // 设置css到dom
    /*setDomStyle(name: string, value: string) {
        // transform应用于图片元素上面
        if(name === 'transform') {
            return this.target && this.target.setDomStyle(name, value);
         }
         
        return super.setDomStyle(name, value);
     }*/

    toJSON(props = [])  {
        return super.toJSON([
            'filters',
            ...props
        ]);
    }
}