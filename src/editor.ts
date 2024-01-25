
import JBase from './components/base';
import JText from './components/text';
import JImage from './components/image';
import JElement from './core/element';
import JController from './components/controller';
import util from './lib/util';

export default class JEditor extends JBase {

    constructor(container, option={}) {  
        super(option);

        if(typeof container === 'string') container = document.getElementById(container);
        
        container.appendChild(this.dom); 
        container.style.position = 'relative';  

        this.init(option, container);        
    }

    // 初始化整个编辑器
    init(option, container: HTMLDivElement) {
        this.dom.style.width = '100%';
        this.dom.style.height = '100%';
        if(option.style.containerBackgroundColor) this.dom.style.backgroundColor = option.style.containerBackgroundColor;
        this.target.css({
            'boxShadow': '0 0 10px 10px #ccc',
            'position': 'absolute',
            'backgroundSize': '100% 100%',
            'overflow': 'hidden'
        });

        // 生成控制器
        this.ElementController = new JController({
            editor: this,
            visible: false
        });
        this.dom.appendChild(this.ElementController.dom);// 加到外层
        const styleNode = document.createElement('style');
        styleNode.innerHTML = `.j-design-editor-container {
                                    border: 0;
                                }
                                .j-design-editor-container:hover {
                                    box-shadow: 0 0 1px 1px rgba(255,255,255,0.5);
                                }`;
        container.appendChild(styleNode);

        if(option.width && option.height) {
            this.resize(option.width, option.height);
        }
        this.on('select', (e) => {
            this.select(this);// 选中自已
        })
    }

    // 所有支持的类型
    shapes = {
        'image': JImage,
        'text': JText
    } as  { [key: string]: typeof JBase};

    // 元素控帛器
    ElementController: JController;

    get width() {
        return this.target.width
    }
    set width(v) {
        this.target && this.resize(v, this.height);
    }

    get height() {
        return this.target.height;
    }
    set height(v) {
        this.target && this.resize(this.width, v);
    }

    get left() {
        return this.target.left;
    }
    set left(v) {
        this.target && (this.target.left = v);
    }

    get top() {
        return this.target.top;
    }
    set top(v) {
        this.target && (this.target.top = v);
    }
    // 重写子集为target
    get children() {
        return this.target.children;
    }
    // 被选中的元素
    get selectedElements(): Array<JBase> {
        const res = [];
        for(const el of this.children) {
            if(el instanceof JBase && el.selected) {
                res.push(el);
            }
        }
        return res;
    }

    // 选中某个元素
    select(el: JBase) {
        // 选把所有已选择的取消
        this.selectedElements.every(p=>p.selected = false);
        this.ElementController.bind(el);
    }

    resize(width=this.width, height=this.height) {

        this.target.attr('data-size', `${width}*${height}`);

        this.target.width = width;
        this.target.height = height;

        this.left = this.dom.clientWidth / 2 - parseFloat(width+'') / 2;
        this.top = this.dom.clientHeight / 2 - parseFloat(height+'') / 2;
        
        setTimeout(() => {
            this.emit('resize', {
                width,
                height
            });
        }, 10);
    }

    // 添加元素到画布
    addChild(child: JBase) {
        if(child === this.target) {
            return super.addChild(child);
        }
        const self = this;
        child.on('select', function(v) {
            if(v) {
                self.select(this);
            }
            else {
                self.ElementController.unbind(this);
            }
        });
        /*child.on('mouseover', function(e) {
            self.ElementController.hover(this);
        });
        child.on('mouseout', function(e) {
            self.ElementController.leave(this);
        });*/
        return this.target.addChild(child);
    }

    // 移除
    removeChild(el: JElement|HTMLElement) {
        if(el === this.target) {
            console.warn('不能移除自已');
            return;
        }
        if(el instanceof JElement) {
            el.off('select');
            el.off('mousehover');
            el.off('mousehout');
        }
        return this.target.removeChild(el);
    }

    // 把domcument坐标转为编辑器相对坐标
    toEditorPosition(pos: {x: number, y: number}) {
        // 编辑器坐标
        const editorPos = util.getElementPosition(this.dom);
        return {
            x: pos.x - editorPos.x,
            y: pos.y - editorPos.y
        };
    }

    clear() {
        this.css({
            'backgroundColor': '#fff',
            'backgroundImage': ''
        });

        for(let i=this.children.length-1;i>=0; i--) {
            const el = this.children[i];
            this.removeChild(el);
        }
    }

    // 缩放
    scale(x, y=x) {
        if(x < 0.1 || y < 0.1) return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    }

    regShape(name, shape) {
        if(this.shapes[name]) throw Error(`元素类型${name}已经存在`);
        this.shapes[name] = shape;
    }

    // 创建元素
    createShape(type, option={}) {
        const shape = typeof type === 'string'? this.shapes[type]: type;
        if(!shape) {
            throw Error(`${type}不存在的元素类型`);
        }
        const el = new shape({
            ...option,
            type,
        });
        return el;
    }

    // 创建图片元素
    createImage(url, option={}) {
        const img = this.createShape('image', {
            ...option,
            url,
        });
        return img;
    }

    // 转为图片数据
    async toImage() {
        
    }

    toJSON() {
        const data = {
            width: this.width,
            height: this.height,
            children: []
        };
        for(const c of this.children) {
            
            if(!c.type) continue;
            if(c.toJSON) {
                data.children.push(c.toJSON());
            }
        }
        return data;
    }

    toString() {
        const data = this.toJSON();
        return JSON.stringify(data);
    }

    fromJSON(data) {
        this.clear();
        if(typeof data === 'string') data = JSON.parse(data);
        if(data.style) {
            this.style.apply(data.style);// 应用样式
        }
        this.resize(data.width, data.height);

        for(const c of data.children) {
            if(!c.type) continue;
            const item = this.createShape(c.type, c);
            this.addChild(item);
        }
    }
}

export {
    JEditor,
    JImage,
    JText,
}