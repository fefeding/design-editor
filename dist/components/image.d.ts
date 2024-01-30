import Base from '../core/baseComponent';
import { JImageData } from '../constant/data';
import { IJImageComponent } from '../constant/types';
export default class JImage extends Base<HTMLImageElement> implements IJImageComponent {
    constructor(option?: any);
    data: JImageData;
    toJSON(props?: any[]): {
        children: any[];
    };
}
