
import util from '../lib/util';
import JElement from './element';
import { IJControllerItem, IJControllerComponent, IJBaseComponent, IJEditor } from '../constant/types';
import { topZIndex, ControlerCursors, ControlItemIcons, fullCircleRadius } from '../constant/styleMap';

// 控制元素移动和矩阵变换
export class JControllerItem extends JElement<HTMLDivElement> implements IJControllerItem {
    constructor(option) {

        option.style = {
            border: '1px solid rgba(6,155,181,1)',
            backgroundColor: '#fff',
            pointerEvents: 'auto',
            ...option.style,
            position: 'absolute'
        };

        super(option);

        this.dir = option.dir || '';
        this.size = option.size || 8;
        
        this.data.width = this.data.height = this.size;

        this.editor = option.editor;

        if(this.editor) {
            // @ts-ignore
            this.editor.view.on('mouseup', (e: MouseEvent) => {
                if(e.button === 0) this.onDragEnd(e);
            });
            // @ts-ignore
            this.editor.view.on('mouseout', (e: MouseEvent) => {
                if(e.target !== this.editor.dom) return;// 不是out编辑器，不处理
                this.onDragEnd(e);
            });
            // @ts-ignore
            this.editor.view.on('mousemove', (e: MouseEvent) => {
                this.onDragMove(e);
            });
        }
        this.on('mousedown', (e: MouseEvent) => {
            // 如果是左健
            if(e.button === 0) {
                this.onDragStart(e);
            }
        });
    }

    dir: string = '';
    size: number = 8;
    // 当前编辑器
    editor: IJEditor;

    protected _isMoving = false;
    get isMoving() {
        return this._isMoving;
    }
    set isMoving(v) {
        this._isMoving = v;
    }

    // 拖放位置
    dragStartPosition = {
        x: 0,
        y: 0,
    };

    onDragMove(event: MouseEvent) {
        if(!this.isMoving) return;
        
        const pos = {
            x: event.pageX || event.x,
            y: event.pageY || event.y,
        };
        const offX = (pos.x - this.dragStartPosition.x);
        const offY = (pos.y - this.dragStartPosition.y);
        
        this.emit('change', {
            dir: this.dir,
            offX,
            offY,
            oldPosition: this.dragStartPosition,
            newPosition: {
                x: pos.x,
                y: pos.y
            },
            event
        });
        
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition.x = pos.x;
        this.dragStartPosition.y = pos.y;

        event.stopPropagation();
        event.preventDefault();
    }
    
    onDragStart(event: MouseEvent)   {
        const pos = {
            x: event.pageX || event.x,
            y: event.pageY || event.y,
        };

        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition = {
            x: pos.x,
            y: pos.y
        };
        
        this.isMoving = true;

        event.stopPropagation && event.stopPropagation();
        event.preventDefault && event.preventDefault();
    }
    
    onDragEnd(event: MouseEvent, pos: {x: number, y: number} = event)  {
        if(this.isMoving) {
            this.isMoving = false;
        }
    }

    // 计算指针
    async resetCursor(rotation: number = 0) {
        let cursor = await ControlerCursors.get(this.dir, rotation);
        if(!cursor) return;
        // 先简单处理
        this.style.cursor = cursor.includes('\/')? `url(${cursor}) 12 12,pointer`:cursor;
    }

}

// 元素大小位置控制器
export default class JControllerComponent extends JControllerItem implements IJControllerComponent {
    constructor(option) {
        
        option.style = {
            cursor: 'move',
            backgroundColor: 'transparent',
            ...option.style,
            pointerEvents: 'none',
        };
        option.dir = 'element';

        option.data = {
            ...option.data,
            zIndex: topZIndex
        };

        super(option);

        if(!this.editor.editable) return;

        this.init(option);
        this.editor.dom.appendChild(this.dom);

        this.resetCursor(this.transform.rotateZ);
    }

    init(option) {
        
        this.createItem('l', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: 0,
                top: '50%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lt', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: 0,
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('t', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: '50%',
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('tr', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: '100%',
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('r', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: '100%',
                top: '50%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('rb', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: '100%',
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('b', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: '50%',
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lb', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: 0,
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });

        // 旋转块
        this.rotateItem = this.createItem('rotate', {
            shape: 'circle', 
            size: 24,
            style: {
                left: '50%',
                top: '-40px',
                //backgroundColor: 'transparent',
                border: 'none',
                boxShadow: '0 0 2px 2px #ccc',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.itemStyle,
                'backgroundSize': '100%',
                backgroundImage: ControlItemIcons.rotate
            },
            transform: {
                translateX: '-50%',
            }
        });
        this.skewItem = this.createItem('skew', {
            shape: 'circle', 
            size: 24,
            style: {
                left: '50%',
                top: '50%',
                border: 'none',
                boxShadow: '0 0 2px 2px #ccc',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.itemStyle,
                'backgroundSize': '100%',
                backgroundImage: ControlItemIcons.skew
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });// 旋转块 
        
        
        if(this.editor) {
            this.editor.on('mousedown', (e) => {
                if(!this.isEditor || e.button === 2) return;// 不是编辑器，不处理
                this.onDragStart(e);
            });
        }
        
        this.on('change', (e)=> {
            this.change(e);
        });
    }

    items = [] as Array<JControllerItem>;

    rotateItem: JControllerItem;
    skewItem: JControllerItem;

    target: IJBaseComponent;
    // 选择框边距
    paddingSize = 0;

    isEditor = false;// 当前关联是否是编辑器

    get center() {
        const center = {
            x: util.toNumber(this.data.left) + util.toNumber(this.data.width)/2,
            y: util.toNumber(this.data.top) + util.toNumber(this.data.height)/2,
        };
        return center;
    }

    // 生成控制点
    createItem(id, option) {
        const item = new JControllerItem({
            dir: id,
            editor: this.editor,
            ...option
        });
        this.addChild(item);
        this.items.push(item);

        const self = this;
        item.on('change', function(e) {
            self.change(e);
        });

        item.resetCursor(this.transform.rotateZ);

        return item;
    }

    // 发生改变响应
    change(e) {
        if(!this.target) return;
        let {dir, offX, offY, } = e;
        // 当前移动对原对象的改变
        const args = {
            x: 0, 
            y: 0, 
            width: 0, 
            height: 0,
            rotation: 0,
            skew: {
                x: 0,
                y: 0
            }
        };

        const center = this.center;

        if(dir === 'rotate') {
            this.rotateChange(e, args);
        }
        else if(dir === 'element') {
            // 元素位置控制器
            args.x = offX;
            args.y = offY;
        }
        else {
            // 先回原坐标，再主算偏移量，这样保证操作更容易理解
            if(this.transform.rotateZ) {
                const pos = this.getRotateEventPosition(e, this.transform.rotateZ, center);
                offX = pos.offX;
                offY = pos.offY;
            }
            
            switch(dir) {                
                case 'l': {
                    args.x = offX;
                    args.width = -offX;
                    break;
                }
                case 't': {
                    args.y = offY;
                    args.height = -offY;
                    break;
                }
                case 'r': {
                    args.width = offX;
                    break;
                }
                case 'b': {
                    args.height = offY;
                    break;
                }
                case 'lt':{   
                    args.x = offX;
                    args.width = -offX; 
                    args.y = offY;
                    args.height = -offY;
                    break;
                }
                case 'tr':{   
                    args.width = offX; 
                    args.y = offY;
                    args.height = -offY;
                    break;
                }
                case 'rb':{   
                    args.width = offX; 
                    args.height = offY;
                    break;
                }
                case 'lb':{   
                    args.x = offX;
                    args.width = -offX; 
                    args.height = offY;
                    break;
                }
                case 'skew': {                    
                    const rx = offX / util.toNumber(this.data.width) * Math.PI;
                    const ry = offY / util.toNumber(this.data.height) * Math.PI;
                    args.skew.x = ry;
                    args.skew.y = rx;
                    break;
                }            
            }
        }
        // 位移
        if(args.x || args.y) {
            this.move(args.x, args.y);
        }
        if(args.width) {
            const width = util.toNumber(this.data.width) + args.width;
            this.data.width = Math.max(width, 1);
        }
        if(args.height) {
            this.data.height = Math.max(util.toNumber(this.data.height) + args.height, 1);
        }

        const newCenter = this.center;
        // 如果中心发生了偏移，则新中心点要移到绕原中心点旋转当前旋转角度的点，才举使图形移动不正常
        if(this.transform.rotateZ && (newCenter.x !== center.x || newCenter.y !== center.y)) {
            const targetCenter = util.rotatePoints({...newCenter}, center, this.transform.rotateZ);
            this.move(targetCenter.x - newCenter.x, targetCenter.y - newCenter.y);
        }
        // x,y旋转
        if(args.skew.x || args.skew.y) {
            this.target.transform.rotateX += args.skew.x;
            this.target.transform.rotateY += args.skew.y;
            this.target.transform.apply();
        }

        this.applyToTarget();
    }

    // 因为旋转后坐标要回原才好计算操作，
    getRotateEventPosition(e, rotation: number = this.transform.rotateZ, center = this.center) {
        let {offX, offY, oldPosition, newPosition} = e;

        // 先回原坐标，再主算偏移量，这样保证操作更容易理解
        if(rotation) {
            const [pos1, pos2] = util.rotatePoints([oldPosition, newPosition], center, -rotation);
            offX = pos2.x - pos1.x;
            offY = pos2.y - pos1.y;
        }
        return {
            offX,
            offY,
            center
        }
    }

    // 发生旋转
    rotateChange(e, args) {
        const {oldPosition, newPosition} = e;
        const center = {
            x: util.toNumber(this.data.left) + util.toNumber(this.data.width)/2,
            y: util.toNumber(this.data.top) + util.toNumber(this.data.height)/2,
        };

        // 编辑器坐标
        const pos1 = this.editor.toEditorPosition(oldPosition);
        const pos2 = this.editor.toEditorPosition(newPosition);
        
        // 因为center是相对于编辑器的，所以事件坐标也需要转到编辑器
        const cx1 = pos1.x - center.x;
        const cy1 = pos1.y - center.y;
        let angle1 = Math.atan(cy1 / cx1);
        const cx2 = pos2.x - center.x;
        const cy2 = pos2.y - center.y;
        let angle2 = Math.atan(cy2 / cx2);


        if(angle1 >= 0 && angle2 < 0) {
            if(cx1 >= 0 && cy1 >= 0 && cx2 <= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
            else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 <= 0) angle2 = Math.PI + angle2;
            //else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
        }
        else if(angle1 <= 0 && angle2 >= 0) {
            if(cx1 >= 0 && cy1 <= 0 && cx2 < 0) angle2 = angle2 - Math.PI;
            else angle2 = -angle2;
        }
        else if(angle1 >= 0 && angle2 > 0) {
            //if(cy2 === 0) angle2 = 0;
        }
        args.rotation = angle2 - angle1;

        if(args.rotation) {
            this.transform.rotateZ += args.rotation;
            if(Math.abs(this.transform.rotateZ) > fullCircleRadius) this.transform.rotateZ = this.transform.rotateZ % fullCircleRadius;
            this.transform.apply();

            // 发生了旋转，要处理指针图标
            for(const item of this.items) {
                item.resetCursor(this.transform.rotateZ);
            }
        }
    }

    // 把变换应用到目标元素
    applyToTarget() {

        if(!this.target) return;

        const pos = {
            x: util.toNumber(this.data.left) + (this.isEditor?util.toNumber(this.target.data.left):0),
            y: util.toNumber(this.data.top) + (this.isEditor?util.toNumber(this.target.data.top):0)
        };     

        this.target.data.left = pos.x;
        this.target.data.top = pos.y;

        // 编辑器相对位置一直是0
        if(this.isEditor) {
            this.data.left = 0;
            this.data.top = 0;
        }

        this.target.transform.from({
            //skewX: this.transform.skewX,
            //skewY: this.transform.skewY,
            rotateZ: this.transform.rotateZ,
        });

        const width = util.toNumber(this.data.width) - this.paddingSize * 2;
        const height = util.toNumber(this.data.height) - this.paddingSize * 2;
        if(this.target.data.width !== width) this.target.data.width = width;
        if(this.target.data.height !== height) this.target.data.height = height;

    }

    // 重置
    reset(isEditor = this.isEditor) {
        this.isMoving = false;
        delete this.target;
        // 编辑器不让旋转和skew
        for(const item of this.items) {
            item.isMoving = false;
        }
        this.transform.from({
             rotateZ: 0,
         });
    }

    // 绑定到操作的对象
    bind(target: IJBaseComponent) {
        if(!target.editable) return;

        this.isEditor = target === this.editor;
        this.reset(this.isEditor);

        // 编辑器的话，需要把它的坐标转为相对于容器的
        const pos = {
            x: (this.isEditor? 0: util.toNumber(target.data.left)),
            y: (this.isEditor? 0: util.toNumber(target.data.top))
        };        
        
        this.data.left = pos.x;
        this.data.top = pos.y;

        this.data.width = util.toNumber(target.data.width) + this.paddingSize * 2;
        this.data.height = util.toNumber(target.data.height) + this.paddingSize * 2;

        this.transform.from({
           // rotateX: target.transform.rotateX,
           // rotateY: target.transform.rotateY,
            rotateZ: target.transform.rotateZ,
            //scaleX: target.transform.scaleX,
            //scaleY: target.transform.scaleY,
            //scaleZ: target.transform.scaleZ,
        });
        this.target = target;
        this.data.visible = true;

        // 编辑器不让旋转和skew
        for(const item of this.items) {
            item.data.visible = !this.isEditor && target.editable;
        }

        // 如果是编辑器，则不能捕获事件
        /*this.css({
            pointerEvents: this.isEditor? 'none' : 'auto'
        });*/
    }
    // 解除绑定
    unbind(target: IJBaseComponent) {
        if(this.target === target) {
           this.reset(false);
           this.data.visible = false;
        }
    }
}