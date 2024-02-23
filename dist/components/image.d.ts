import ImageFilterManager, { IFilter, FilterOption } from 'j-image-filters';
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
    constructor(option?: IImageOption);
    /**
     * JImageData 数据
     */
    data: JImageData;
    /**
     * 图片滤镜
     */
    filters: ImageFilterManager;
    private refreshImage;
    addFilter(filter: string | IFilter, option?: FilterOption): void;
    toJSON(props?: any[]): {
        children: any[];
    };
}
