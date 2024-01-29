import Base from '../core/baseComponent';
import { IJBaseComponent } from 'src/constant/types';
export default class JImage extends Base<HTMLImageElement> implements IJBaseComponent {
    constructor(option?: any);
    get src(): string;
    set src(v: string);
    toJSON(props?: any[]): {
        children: any[];
    };
}
