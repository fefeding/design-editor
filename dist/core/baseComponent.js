import CssFilterManager from 'j-css-filters';
import { ContainerDefaultStyle } from '../constant/styleMap';
import JElement from '../core/element';
/**
 * @public
 */
export default class JBaseComponent extends JElement {
    constructor(option = {}) {
        option.style = option.style || {};
        // position和overflow预设的值优先级最高
        option.style = Object.assign({ ...ContainerDefaultStyle }, option.style, {
            position: ContainerDefaultStyle.position,
            overflow: ContainerDefaultStyle.overflow
        });
        super({
            // 外层只响应Z轴旋转
            transformWatchProps: [
                'rotateZ', 'scaleX', 'scaleY'
            ],
            ...option,
            nodeType: 'div',
            className: 'j-design-editor-container',
            isComponent: true
        });
        option.target = option.target || {};
        // 生成当前控制的元素
        this.target = new JElement({
            ...option,
            visible: true,
            data: {},
            // 不响应本身的变换，只响应父级的
            transformWatchProps: [],
            style: {
                display: 'block',
                cursor: 'pointer',
                width: '100%',
                height: '100%',
            }
        });
        this.addChild(this.target.dom);
        // 变换改为控制主元素
        this.transform.bind({
            target: this.target,
            watchProps: [
                'rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY'
            ]
        });
        this.filters = new CssFilterManager(this.target, option.filters); // 滤镜
        this.data.on('change', (e) => {
            this.emit('dataChange', {
                type: 'dataChange',
                target: this,
                data: e
            });
        });
    }
    // 当前控件的核心元素
    target;
    filters;
    // 选中
    _selected = false;
    get selected() {
        return this._selected;
    }
    set selected(v) {
        this._selected = v;
        this.emit('select', {
            type: 'select',
            target: this,
            selected: v
        });
    }
    // 设置层级，指定数字或操作, next下一层，pre上一层，top顶层，bottom最底层
    setLevel(level) {
        if (typeof level === 'number')
            this.data.zIndex = level;
        if (!this.parent)
            return;
        const maxLevel = this.parent.childrenMaxLevel;
        switch (level) {
            case 'next': {
                const res = this.getMyNextLevelChildren();
                if (res.level < 0)
                    this.data.zIndex = 0; // 如果没找到下一层的，则直接赋到bottom层0
                else {
                    res.elements.map((el) => {
                        el.data.zIndex = this.data.zIndex;
                    });
                    this.data.zIndex = res.level;
                }
                break;
            }
            case 'pre': {
                const res = this.getMyPreLevelChildren();
                if (res.level < 0)
                    this.data.zIndex = maxLevel; // 如果没找到上一层的，则直接赋到top层
                else {
                    res.elements.map((el) => {
                        el.data.zIndex = this.data.zIndex;
                    });
                    this.data.zIndex = res.level;
                }
                break;
            }
            case 'top': {
                this.data.zIndex = maxLevel + 1;
                break;
            }
            case 'bottom': {
                this.parent.children.map((el) => {
                    el !== this && (el.data.zIndex += 1);
                }); // 所有子元素上移一层，除了当前元素
                this.data.zIndex = 0;
            }
        }
    }
    // 获取我下一层的所有元素
    getMyNextLevelChildren() {
        const elements = [];
        if (!this.parent)
            return;
        const children = this.parent.childrenSort();
        let nextLevel = -1;
        for (let i = children.length - 1; i >= 0; i--) {
            const c = children[i];
            if (c.data.zIndex < this.data.zIndex && c !== this) {
                if (nextLevel < 0)
                    nextLevel = c.data.zIndex;
                if (c.data.zIndex === nextLevel)
                    elements.push(c);
            }
        }
        return {
            elements,
            level: nextLevel
        };
    }
    // 获取我上一层的所有元素
    getMyPreLevelChildren() {
        const elements = [];
        if (!this.parent)
            return;
        const children = this.parent.childrenSort();
        let preLevel = -1;
        for (let i = 0; i < children.length; i++) {
            const c = children[i];
            if (c.data.zIndex > this.data.zIndex && c !== this) {
                if (preLevel < 0)
                    preLevel = c.data.zIndex;
                if (c.data.zIndex === preLevel)
                    elements.push(c);
            }
        }
        return {
            elements,
            level: preLevel
        };
    }
    // 设置css到dom
    setDomStyle(name, value) {
        // 如果外层容器的样式，则加到container上
        if (name in ContainerDefaultStyle || name === 'transform') {
            super.setDomStyle(name, value);
        }
        else {
            this.target && this.target.css(name, value);
        }
    }
    toJSON(props = []) {
        // 转json忽略渲染组件
        return super.toJSON(props, (el) => {
            return el !== this.target;
        });
    }
}
