import Base from '../core/baseComponent';
import { IJBaseComponent } from '../constant/types';
export default class JText extends Base<HTMLDivElement> implements IJBaseComponent {
    constructor(option?: any);
    get text(): string;
    set text(v: string);
    edit(): void;
    closeEdit(): void;
    toJSON(props?: any[]): {
        children: any[];
    };
}
