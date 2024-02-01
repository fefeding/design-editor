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
     * img元素的JSON表现形式，包括'src'等属性。
     * @param props - 序列化时需要包括的属性
     * @returns JSON对象，表示img元素。
     */
    toJSON(props?: any[]): {
        children: any[];
    };
}
