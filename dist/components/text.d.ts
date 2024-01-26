import Base from './base';
export default class JText extends Base<HTMLDivElement> {
    constructor(option: any);
    get text(): string;
    set text(v: string);
    toJSON(props?: any[]): {
        children: any[];
    };
}
