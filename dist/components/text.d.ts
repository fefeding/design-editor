import Base from '../core/baseComponent';
import { IJTextComponent, ITextOption } from '../constant/types';
import { JTextData } from '../constant/data';
export default class JText extends Base<HTMLDivElement> implements IJTextComponent {
    constructor(option?: ITextOption);
    data: JTextData;
    static TextControlCache: Map<string, JText>;
    edit(): void;
    closeEdit(): void;
    toJSON(props?: any[]): {
        children: any[];
    };
    dispose(): void;
}
