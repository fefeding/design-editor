import Base from './base';
import { IJBaseComponent } from '../constant/types';
export default class JText extends Base<HTMLDivElement> implements IJBaseComponent {
    constructor(option?: any);
    get text(): string;
    set text(v: string);
    toJSON(props?: any[]): {
        children: any[];
    };
}
