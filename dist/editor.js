import util, { fonts as JFonts } from '@fefeding/utils';
import JBase from './core/baseComponent';
import JText from './components/text';
import JImage from './components/image';
import JSvg from './components/svg';
import JContainer from './components/container';
import JElement from './core/element';
import JHtmlElement from './core/baseHtmlElement';
import JController from './core/controller';
import { editorDefaultCssContent, editorDefaultStyle } from './constant/styleMap';
/**
 * @public
 */
export default class JEditor extends JBase {
    constructor(option = {}) {
        option.style = option.style || {};
        Object.assign(option.style, editorDefaultStyle);
        // @ts-ignore 外层只响应Z轴旋转
        /*option.transformWatchProps = [
            'rotateZ', 'scaleX', 'scaleY'
        ];*/
        option.type = option.type || 'editor';
        super({
            ...option,
            data: {
                ...option.data,
                left: 0,
                top: 0,
            }
        });
        if (typeof option.container === 'string')
            option.container = document.getElementById(option.container);
        this.view = new JElement({
            style: {
                'border': '0',
                'padding': '0',
                'margin': '0',
                'position': 'relative',
                'width': '100%',
                'height': '100%',
                'caretColor': 'blue',
            }
        });
        // 字体管理实例
        this.fonts = new JFonts(option.fonts);
        this.target.css({
            'overflow': 'hidden'
        });
        if (option.container)
            option.container.appendChild(this.view.dom);
        this.view.addChild(this.dom);
        // @ts-ignore
        this.regShape({
            'image': JImage,
            'img': JImage,
            'text': JText,
            //'span': JText, 
            'svg': JSvg,
            'container': JContainer,
            'div': JContainer,
        });
        this.init(option);
        this.bindEvent(this.view.dom);
    }
    // 初始化整个编辑器
    init(option) {
        if (option.style.containerBackgroundColor)
            this.dom.style.backgroundColor = option.style.containerBackgroundColor;
        // 生成控制器
        this.elementController = new JController({
            ...option.controllerOption,
            visible: false,
            editor: this,
        });
        const styleNode = document.createElement('style');
        if (!this.editable) {
            styleNode.innerHTML = editorDefaultCssContent.replace(/:hover/ig, ':hover-disabled');
        }
        else {
            styleNode.innerHTML = editorDefaultCssContent;
        }
        this.dom.appendChild(styleNode);
        // 字体加载成功，同时加入到dom结构中
        this.fonts.on('load', (font) => {
            styleNode.append(font.toHtml());
        });
        this.on('select', (e) => {
            this.select(this); // 选中自已
        });
        this.on('mousedown', function (e) {
            if (e.button === 0) {
                this.select(this, e);
            }
        });
        // 刷新样式
        this.style.refresh();
        this.resize(); // 触发一次大小改变
        // 属性变化
        this.data.watch([
            'width', 'height'
        ], {
            set: (item) => {
                this.sizeChange();
            }
        });
        // 编辑器只支持保留 部分样式
        this.style.styleSaveMap = [
            'backgroundColor',
            'backgroundImage',
            'backgroundSize',
            'backgroundRepeat'
        ];
    }
    /**
     * 类型名称
     */
    get typeName() {
        return 'editor';
    }
    // 外层用于定位的容器
    view;
    // 所有支持的类型
    shapes = new Map();
    // 元素控帛器
    elementController;
    fonts; // 字体管理器
    // 重写子集为target
    get children() {
        return this.target.children;
    }
    // 被选中的元素
    get selectedElements() {
        const res = [];
        for (const el of this.children) {
            if (el instanceof JBase && el.selected) {
                res.push(el);
            }
        }
        return res;
    }
    // 绑定事件
    bindEvent(dom) {
        if (!this.view) {
            return;
        }
        super.bindEvent(this.view.dom); // 编辑器事件绑到整个容器上
        // 监听子元素改变
        this.on(['elementChange'], (e) => {
            const isComponent = e.target instanceof JBase;
            // 左健选中
            if (e.type === 'mousedown' && isComponent) {
                this.select(e.target, e.event);
            }
            // 选中状态改变
            else if (e.type === 'select' && isComponent) {
                this.select(e.target);
            }
            // 如果是字体依赖，则检查字体支持情况
            else if (e.type === 'styleChange') {
                // 字体发生改变，需要做check, 并加载字体生效
                if (e.data.name === 'fontFamily' && e.data.value) {
                    this.fonts.load(e.data.value).then((font) => {
                        if (!font) {
                            console.warn(`加载字体${e.data.value}失败`);
                        }
                    }).catch((e) => {
                        console.error(e);
                    }); // 异步加载字体
                }
            }
        });
    }
    // 选中某个元素
    select(el, event = null) {
        // 不可编辑的情况下不响应选择事件
        if (!el.editable)
            return false;
        if (event) {
            // shift 或 ctrl 时，表示多先
            const isMutilSelect = (event?.ctrlKey || event?.shiftKey) && el !== this; // 编辑器不能与其它元素多选
            // 选把所有已选择的取消
            // 如果按下ctrl或本来就是选中的，则不取消其它元素
            if (!isMutilSelect && !el.selected) {
                this.selectedElements.map(p => {
                    if (p !== el) {
                        p.selected = false;
                        return p;
                    }
                });
            }
            // 编辑器要消选
            if (el !== this && this.selected)
                this.selected = false;
            if (!el.selected) {
                el.selected = true;
            }
            // 多选情况下，已选中的再点击取消选择
            else if (isMutilSelect) {
                el.selected = false;
            }
            if (event?.button === 0)
                this.elementController && this.elementController.onDragStart(event);
            event?.stopPropagation && event.stopPropagation();
        }
        else {
            if (el.selected) {
                if (el.editable)
                    this.elementController && this.elementController.bind(el);
            }
            else
                this.elementController && this.elementController.unbind(el);
        }
    }
    resize(width = this.data.width, height = this.data.height) {
        this.data.width = width;
        this.data.height = height;
        this.sizeChange(width, height);
    }
    // 尺寸改变响应
    sizeChange(width = this.data.width, height = this.data.height) {
        this.attr('data-size', `${width}*${height}`);
        this.emit('resize', {
            width,
            height
        });
    }
    // 添加元素到画布
    addChild(child) {
        child.editor = this;
        return super.addChild(child);
    }
    // 把domcument坐标转为编辑器相对坐标
    toEditorPosition(pos, dom = this.target.dom) {
        return util.toDomPosition(pos, dom);
    }
    clear() {
        this.css({
            'backgroundColor': '#fff',
            'backgroundImage': ''
        });
        /*for(let i=this.children.length-1;i>=0; i--) {
            const el = this.children[i];
            this.removeChild(el);
        }*/
        super.clear();
        this.elementController && (this.elementController.data.visible = false);
    }
    // 缩放
    scale(x, y = x) {
        if (x <= 0 || y <= 0)
            return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    }
    // 注册自定义组件
    regShape(name, shape) {
        if (typeof name === 'object') {
            for (const n in name) {
                this.regShape(n, name[n]);
            }
            return;
        }
        if (this.shapes.has(name))
            console.warn(`元素类型${name}已经存在`);
        this.shapes.set(name, shape);
        return shape;
    }
    // 创建元素
    createShape(type, option = {}) {
        const shape = typeof type === 'string' ? this.shapes.get(type) : type;
        if (!shape) {
            //console.warn(`${type}不存在的元素类型`);
            const el = new JHtmlElement({
                ...option,
                editor: this,
                // @ts-ignore
                nodeType: type
            });
            return el;
        }
        // @ts-ignore
        const el = new shape({
            ...option,
            editor: this,
            type,
        });
        return el;
    }
    // 加载data渲染图形
    fromJSON(data) {
        this.clear();
        //if(typeof data === 'string') data = JSON.parse(data);
        if (data.style) {
            this.style.apply({
                ...data.style,
                ...editorDefaultStyle
            }); // 应用样式
        }
        this.resize(data.width || data.data.width, data.height || data.data.height);
        this.name = data.name || '';
        if (data.children) {
            data.children.sort((p1, p2) => {
                return (p1.data?.zIndex - p2.data?.zIndex) || 0;
            });
            for (const c of data.children) {
                if (!c.type)
                    continue;
                const item = this.createShape(c.type, c);
                item && this.addChild(item);
            }
        }
    }
    /**
     * 生成编辑器对象
     * @param data
     * @param option
     */
    static create(option, data) {
        const editor = new JEditor(option);
        data && editor.fromJSON(data);
        return editor;
    }
    /**
     * 渲染成html结构
     * @param container 容器
     * @param data
     */
    static async renderDom(data, option) {
        let editor;
        if (data instanceof JEditor) {
            editor = data;
        }
        else {
            option = {
                ...option,
                editable: false,
                style: {
                    transformOrigin: 'left top',
                }
            };
            editor = this.create(option, data);
        }
        const dom = editor.dom;
        dom.style.position = 'relative';
        return new Promise(resolve => {
            setTimeout(() => {
                const scale = {
                    x: 0,
                    y: 0
                };
                // 如果指定了宽度，则把dom缩放到指定的大小
                if (editor.option?.data?.width) {
                    scale.x = util.toNumber(editor.option.data.width) / util.toNumber(editor.data.width);
                    scale.y = scale.x;
                }
                if (editor.option?.data?.height) {
                    scale.y = util.toNumber(editor.option.data.height) / util.toNumber(editor.data.height);
                    // 没有指定则保持比例
                    if (scale.x === 0) {
                        scale.x = scale.y;
                    }
                }
                editor.scale(scale.x || 1, scale.y || 1);
                resolve(editor);
            }, 200);
        });
    }
}
export { JEditor, JImage, JText, };
