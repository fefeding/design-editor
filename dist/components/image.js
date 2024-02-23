import ImageFilterManager, { filters } from 'j-image-filters';
import Base from '../core/baseComponent';
import { JImageData } from '../constant/data';
/**
 * 图像组件类 JImage，继承于基础组件 Base。
 * @public
 */
export default class JImage extends Base {
    /**
     * JImage组件构造函数。
     * @param option - 图像选项，包括 url, src 等。
     */
    constructor(option = {}) {
        super({
            ...option,
            nodeType: 'img',
            dataType: JImageData
        });
        // 图像加载完成时触发 'load' 事件
        this.target.dom.onload = (e) => {
            this.emit('load', e);
        };
        // 图像加载错误时触发 'error' 事件
        this.target.dom.onerror = (e) => {
            this.emit('error', e);
        };
        // 允许跨域获取图像资源（避免CORS问题）
        this.target.attr('crossorigin', 'anonymous');
        // 如果有滤镜，则添加上
        if (option.filters) {
            if (Array.isArray(option.filters)) {
                for (const filter of option.filters) {
                    this.addFilter(filter.name, filter);
                }
            }
        }
        // 'src' 属性变化映射到 style
        this.data.watch([
            'src'
        ], {
            // 设置 'src' 属性
            set: (item) => {
                //this.target.dom.src = item.value;
                if (item.name === 'src')
                    this.refreshImage(item.value);
            }
        });
        // 如果在选项中提供，设置 'src' 或 'url' 属性
        // @ts-ignore
        const src = option.url || option.src;
        if (src)
            this.data.src = src;
    }
    /**
     * 图片滤镜
     */
    filters = new ImageFilterManager();
    // 滤镜生效刷新
    async refreshImage(url = this.data.src) {
        if (!url)
            return;
        // 如果有指定滤镜
        if (this.filters.count) {
            const data = await this.filters.convertToImageData(url);
            const res = await this.filters.filter(data);
            url = this.filters.toBase64(res);
        }
        this.target.dom.src = url;
    }
    // 增加滤镜
    addFilter(filter, option) {
        if (typeof filter === 'string') {
            const filterType = filters[filter]; // filter类型
            if (!filterType) {
                console.error(`不支持的滤镜${filter}`);
                return;
            }
            filter = new filterType(option);
            this.addFilter(filter, option);
        }
        else {
            this.filters.add(filter);
            this.refreshImage(); // 添加了滤镜，需要刷新
        }
    }
    toJSON(props = []) {
        return super.toJSON([
            'filters',
            ...props
        ]);
    }
}
