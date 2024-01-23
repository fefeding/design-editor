import Base from './base';
export default class JImage extends Base<HTMLImageElement> {
    constructor(option: any);
    get src(): string;
    set src(v: string);
}
