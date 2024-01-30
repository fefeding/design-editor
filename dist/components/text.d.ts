import Base from '../core/baseComponent';
import { IJTextComponent } from '../constant/types';
import { JTextData } from '../constant/data';
export default class JText extends Base<HTMLDivElement> implements IJTextComponent {
    constructor(option?: any);
    data: JTextData;
    edit(): void;
    closeEdit(): void;
    toJSON(props?: any[]): {
        children: any[];
    };
}
