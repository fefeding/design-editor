import Base from '../core/baseComponent';
import { JImageData } from '../constant/data';
import { IJImageComponent, IImageOption } from '../constant/types';
export default class JImage extends Base<HTMLImageElement> implements IJImageComponent {
    constructor(option?: IImageOption);
    data: JImageData;
    toJSON(props?: any[]): {
        children: any[];
    };
}
