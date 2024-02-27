export class Filter {
    constructor(option) {
        if (option) {
            this.name = option.name;
            this.displayName = option.displayName;
            this.value = option.value;
        }
    }
    toString() {
        if (!this.name || !this.value)
            return '';
        return `${this.name}(${this.value})`;
    }
    toJSON() {
        return {
            name: this.name,
            displayName: this.displayName || '',
            value: this.value
        };
    }
    name;
    displayName;
    value;
}
/**
 * 高斯模糊
 */
export class BlurFilter extends Filter {
    constructor(option) {
        option = Object.assign({
            name: 'BlurFilter',
            displayName: '模糊',
            value: '10%'
        }, option);
        super(option);
    }
}
const filters = {
    BlurFilter
};
