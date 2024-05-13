import util, { controller } from '@fefeding/utils';
import JElement from './element';
import { topZIndex } from '../constant/styleMap';
// 控制元素移动和矩阵变换
export class JControllerItem extends JElement {
    constructor(option) {
        option.style = {
            pointerEvents: 'auto',
            ...option.style,
        };
        if (option.dir && !option.className) {
            option.className = 'item item-' + option.dir;
        }
        super(option);
        this.dir = option.dir || '';
        if (option.size) {
            this.data.width = this.data.height = this.size = option.size;
        }
        this.editor = option.editor;
        if (this.editor) {
            // @ts-ignore
            this.editor.view.on('mouseup', (e) => {
                if (e.button === 0)
                    this.onDragEnd(e);
            });
            // @ts-ignore
            this.editor.view.on('mouseleave', (e) => {
                if (!this.isMoving || e.target !== this.editor.view.dom)
                    return; // 不是out编辑器，不处理
                this.onDragEnd(e);
            });
            // @ts-ignore
            this.editor.view.on('mousemove', (e) => {
                this.onDragMove(e);
            });
        }
        this.on('mousedown', (e) => {
            // 如果是左健
            if (e.button === 0) {
                this.onDragStart(e);
            }
        });
    }
    dir = '';
    size = 0;
    get option() {
        return this._option;
    }
    _isMoving = false;
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
    onDragMove(event) {
        if (!this.isMoving)
            return;
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
            item: this,
            event
        });
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition.x = pos.x;
        this.dragStartPosition.y = pos.y;
        //event.stopPropagation();
        event.preventDefault && event.preventDefault();
    }
    onDragStart(event) {
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
        this.emit('dragStart', event);
    }
    onDragEnd(event) {
        if (this.isMoving) {
            this.isMoving = false;
            this.emit('dragEnd', event);
        }
    }
    // 计算指针
    async resetCursor(rotation = 0, data = {}) {
        try {
            if (!this.dir)
                return;
            if (this.dir === 'skew') {
                this.style.cursor = 'move';
                return;
            }
            let cursor = await controller.Cursors.get(this.dir, rotation, data);
            if (!cursor)
                return;
            // 先简单处理
            this.style.cursor = cursor.includes('\/') ? `url(${cursor}) 12 12,pointer` : cursor;
        }
        catch (e) {
            console.error(e);
        }
    }
}
// 元素大小位置控制器
export default class JControllerComponent extends JControllerItem {
    constructor(option) {
        option.style = {
            itemStyle: {},
            ...option.style,
            backgroundColor: 'transparent',
            pointerEvents: 'none',
        };
        option.dir = 'element';
        option.className = 'j-design-editor-controller';
        option.data = {
            ...option.data,
            zIndex: topZIndex
        };
        super(option);
        if (!this.editor.editable)
            return;
        // 鼠标指针
        this.cursorData = option.itemCursors || {};
        this.init(option);
        this.editor.dom.appendChild(this.dom);
        this.resetCursor(this.transform.rotateZ);
    }
    init(option) {
        const itemSize = option.itemSize || 8;
        const pointSize = itemSize * 1.5;
        const sideSize = {
            width: itemSize,
            height: itemSize * 2
        };
        this.initMasks(); // 初始化mask
        this.createItem('l', {
            style: {
                ...option.style.itemStyle,
                left: 0,
                top: '50%',
            },
            data: {
                ...sideSize
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lt', {
            size: pointSize,
            style: {
                borderRadius: '50% 50%',
                ...option.style.itemStyle,
                left: 0,
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('t', {
            style: {
                ...option.style.itemStyle,
                left: '50%',
                top: 0,
            },
            data: {
                width: sideSize.height,
                height: sideSize.width
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('tr', {
            size: pointSize,
            style: {
                borderRadius: '50% 50%',
                ...option.style.itemStyle,
                left: '100%',
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('r', {
            style: {
                ...option.style.itemStyle,
                left: '100%',
                top: '50%',
            },
            data: {
                ...sideSize
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('rb', {
            size: pointSize,
            style: {
                borderRadius: '50% 50%',
                ...option.style.itemStyle,
                left: '100%',
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('b', {
            style: {
                ...option.style.itemStyle,
                left: '50%',
                top: '100%',
            },
            data: {
                width: sideSize.height,
                height: sideSize.width
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lb', {
            size: pointSize,
            style: {
                borderRadius: '50% 50%',
                ...option.style.itemStyle,
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
            size: 20,
            style: {
                left: '50%',
                top: '-40px',
                //backgroundColor: 'transparent',
                //border: 'none',
                //boxShadow: '0 0 2px 2px #ccc',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.style.itemStyle,
                ...option.style.rotateStyle,
                'backgroundSize': '100%',
                backgroundImage: option.itemIcons?.rotate || ''
            },
            transform: {
                translateX: '-50%',
            }
        });
        // 图片操作杆
        this.targetMoveItem = this.createItem('move', {
            size: 24,
            style: {
                left: '50%',
                top: '50%',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.style.itemStyle,
                border: '9px solid rgba(0,0,0,0.8)',
                backgroundColor: '#fff',
                'backgroundSize': '100%',
                ...option.style.moveStyle,
                //backgroundImage: option.itemIcons?.skew || ''
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        // 操作过程中不截断图片
        let oldOverflow = '';
        this.targetMoveItem.on('dragStart', (e) => {
            oldOverflow = this.target.style.overflow;
            this.target.style.overflow = 'visible';
        }).on('dragEnd', (e) => {
            if (oldOverflow)
                this.target.style.overflow = oldOverflow || 'hidden';
        });
        // 图片缩放
        this.targetScaleItem = this.createItem('scale', {
            size: 20,
            style: {
                left: '50%',
                top: '50%',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.style.itemStyle,
                border: '2px solid rgba(0,0,0,0.8)',
                backgroundColor: '#fff',
                'backgroundSize': '100%',
                ...option.style.scaleStyle,
            },
        });
        this.targetScaleItem.on('dragStart', (e) => {
            oldOverflow = this.target.style.overflow;
            this.target.style.overflow = 'visible';
        }).on('dragEnd', (e) => {
            if (oldOverflow)
                this.target.style.overflow = oldOverflow || 'hidden';
            // 归位
            this.targetScaleItem.transform.translateX = 0;
            this.targetScaleItem.transform.translateY = 0;
            this.targetScaleItem.transform.apply();
        });
        if (option.tipVisible !== false) {
            const tipOption = {
                data: {
                    height: '16px',
                    width: 'auto'
                },
                style: {
                    left: '2px',
                    top: '0',
                    border: 'none',
                    backgroundColor: 'rgba(100, 100, 100, 0.1)',
                    color: 'blue',
                    fontSize: '10px',
                    padding: '2px',
                    overflow: 'hidden',
                    ...option.style.tipStyle,
                    pointerEvents: 'none',
                }
            };
            //提示信息
            this.positionItem = this.createItem('tip', {
                ...tipOption,
                transform: {
                    translateY: '-100%'
                }
            });
            this.sizeItem = this.createItem('tip', {
                ...tipOption,
                style: {
                    ...tipOption.style,
                    left: 'auto',
                    top: '100%',
                    right: '4px'
                }
            });
        }
        if (this.editor) {
            this.editor.on('mousedown', (e) => {
                if (!this.isEditor || e.button === 2)
                    return; // 不是编辑器，不处理
                this.onDragStart(e);
            });
        }
        this.on('change', (e) => {
            this.change(e);
        });
    }
    // 鼠标指针
    cursorData;
    items = [];
    // 遮挡层
    masks = [];
    rotateItem;
    targetMoveItem;
    targetScaleItem;
    positionItem;
    sizeItem;
    target;
    // 选择框边距
    paddingSize = 0;
    isEditor = false; // 当前关联是否是编辑器
    bindTargetPositionAndSizeHandler;
    get center() {
        const center = {
            x: util.toNumber(this.data.left) + util.toNumber(this.data.width) / 2,
            y: util.toNumber(this.data.top) + util.toNumber(this.data.height) / 2,
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
        item.on('change', function (e) {
            self.change(e);
        });
        item.resetCursor(this.transform.rotateZ, this.cursorData);
        return item;
    }
    // 初始化或重置遮挡层
    initMasks() {
        return false;
        if (!this.masks.length) {
            const maskStyle = {
                'position': 'absolute',
                'display': 'block',
                'border': 'none',
                'background': 'rgba(0,0,0,0.3)'
            };
            const leftDom = util.createElement('div');
            util.css(leftDom, maskStyle);
            this.addChild(leftDom);
            this.masks.push(leftDom);
            const topDom = util.createElement('div');
            util.css(topDom, maskStyle);
            this.addChild(topDom);
            this.masks.push(topDom);
            const rightDom = util.createElement('div');
            util.css(rightDom, maskStyle);
            this.addChild(rightDom);
            this.masks.push(rightDom);
            const bottomDom = util.createElement('div');
            util.css(bottomDom, maskStyle);
            this.addChild(bottomDom);
            this.masks.push(bottomDom);
        }
        const left = util.toNumber(this.data.left);
        const top = util.toNumber(this.data.top);
        util.css(this.masks[0], {
            top: util.toPX(0 - top),
            left: util.toPX(0 - left),
            width: util.toPX(Math.max(left, 0)),
            height: util.toPX(this.editor.data.height),
        });
        util.css(this.masks[1], {
            top: util.toPX(0 - top),
            left: 0,
            width: '100%',
            height: util.toPX(top),
        });
        util.css(this.masks[2], {
            top: util.toPX(0 - top),
            left: '100%',
            width: util.toPX(Math.max(util.toNumber(this.editor.data.width) - util.toNumber(this.data.left) - util.toNumber(this.data.width), 0)),
            height: util.toPX(this.editor.data.height),
        });
        util.css(this.masks[3], {
            top: util.toPX(this.data.height),
            left: 0,
            width: '100%',
            height: util.toPX(Math.max(util.toNumber(this.editor.data.height) - util.toNumber(this.data.top) - util.toNumber(this.data.height), 0)),
        });
    }
    // 发生改变响应
    change(e) {
        if (!this.target)
            return;
        let { dir, offX, offY, oldPosition, newPosition } = e;
        // 当前移动对原对象的改变
        let args = {
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
        const width = util.toNumber(this.data.width);
        const height = util.toNumber(this.data.height);
        switch (dir) {
            case 'rotate': {
                // 编辑器坐标, 因为是在编辑器渲染区域操作，需要把坐标转到此区域再处理
                const pos1 = this.editor.toEditorPosition(oldPosition);
                const pos2 = this.editor.toEditorPosition(newPosition);
                args.rotation = controller.rotateChange(pos1, pos2, center);
                break;
            }
            case 'skew': {
                const rx = offX / width * Math.PI;
                const ry = offY / height * Math.PI;
                args.skew.x = rx;
                args.skew.y = ry;
                break;
            }
            case 'element': {
                // 元素位置控制器
                args.x = offX;
                args.y = offY;
                break;
            }
            case 'move': {
                const target = this.target?.target || this.target;
                const dx = util.toNumber(target.transform.translateX) + offX;
                const dy = util.toNumber(target.transform.translateY) + offY;
                target.transform.translateX = dx;
                target.transform.translateY = dy;
                target.transform.apply();
                break;
            }
            case 'scale': {
                const target = this.target?.target || this.target;
                if (offX !== 0) {
                    const scaleX = offX / util.toNumber(this.data.width);
                    target.transform.scaleX = target.transform.scaleY = (target.transform.scaleX || 0) + scaleX;
                    target.transform.apply();
                }
                if (e.item) {
                    // 如果发生旋转，则坐标要先换算成未旋转的情况再做偏移计算
                    if (this.transform.rotateZ) {
                        const [p1, p2] = util.rotatePoints([oldPosition, newPosition], center, -this.transform.rotateZ);
                        offX = p2.x - p1.x;
                        offY = p2.y - p1.y;
                    }
                    e.item.transform.translateX = util.toNumber(e.item.transform.translateX) + offX;
                    e.item.transform.translateY = util.toNumber(e.item.transform.translateY) + offY;
                    e.item.transform.apply();
                }
                break;
            }
            default: {
                // 根据操作参数，计算大小和偏移量
                args = controller.getChangeData(dir, {
                    x: offX,
                    y: offY
                }, oldPosition, newPosition, center, this.transform.rotateZ);
            }
        }
        // 位移 
        if (args.x || args.y) {
            // 只有没锁定才可以移动
            if (this.target.moveable)
                this.move(args.x, args.y);
        }
        if (args.width) {
            const oldWidth = util.toNumber(this.data.width);
            const width = oldWidth + args.width;
            this.data.width = Math.max(Number(width.toFixed(2)), 1);
            // 如果是编辑器，且不支持移动， 则需要保持居中，移动一半大小改变一半
            /*if(!this.target.moveable && this.isEditor) {
                const offx = this.data.width - oldWidth;
                this.move(-offx/2, 0);
            }*/
        }
        if (args.height) {
            const oldHeight = util.toNumber(this.data.height);
            const height = oldHeight + args.height;
            this.data.height = Math.max(Number(height.toFixed(2)), 1);
            // 如果是编辑器，且不支持移动， 则需要保持居中，移动一半大小改变一半
            /*if(!this.target.moveable && this.isEditor) {
                const offy = this.data.height - oldHeight;
                this.move(0, -offy/2);
            }*/
        }
        // 目标元素移动
        if (args.skew.x || args.skew.y) {
            this.target.transform.rotateX += args.skew.x;
            this.target.transform.rotateY += args.skew.y;
            this.target.transform.apply();
        }
        // 如果有操作旋转
        if (args.rotation) {
            this.transform.rotateZ += args.rotation;
            if (Math.abs(this.transform.rotateZ) > controller.fullCircleRadius)
                this.transform.rotateZ = this.transform.rotateZ % controller.fullCircleRadius;
            this.transform.apply();
            // 发生了旋转，要处理指针图标
            this.resetCursor();
        }
        this.applyToTarget();
    }
    // 把变换应用到目标元素
    applyToTarget() {
        if (!this.target)
            return;
        /*
                const pos = {
                    x: util.toNumber(this.data.left) + (this.isEditor?util.toNumber(this.target.data.left):0),
                    y: util.toNumber(this.data.top) + (this.isEditor?util.toNumber(this.target.data.top):0)
                };
        
                this.target.data.left = pos.x;
                this.target.data.top = pos.y;
        */
        // 编辑器相对位置一直是0
        if (this.isEditor) {
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
        if (this.target.data.width !== width)
            this.target.data.width = width;
        if (this.target.data.height !== height)
            this.target.data.height = height;
        this.setTip();
        this.initMasks(); // 重新定位mask
    }
    // 移动
    move(dx, dy) {
        if (!this.isEditor) {
            // 如果有多选，则移动多个
            const selectedElements = this.editor.selectedElements;
            if (selectedElements.length) {
                for (const el of selectedElements) {
                    el.move(dx, dy);
                }
            }
        }
        else if (this.target)
            this.target.move(dx, dy);
        return super.move(dx, dy);
    }
    // 重置
    reset(isEditor = this.isEditor) {
        this.isMoving = false;
        delete this.target;
        // 编辑器不让旋转和skew
        for (const item of this.items) {
            item.isMoving = false;
        }
        this.transform.from({
            rotateZ: 0,
        });
    }
    // 是否正在操控中
    get isControling() {
        if (this.isMoving)
            return true;
        for (const item of this.items) {
            if (item.isMoving)
                return true;
        }
        return false;
    }
    async resetCursor(rotation = this.transform.rotateZ) {
        // 发生了旋转，要处理指针图标
        for (const item of this.items) {
            item.resetCursor(rotation, this.cursorData);
        }
    }
    // 绑定到操作的对象
    bind(target) {
        if (!target.editable)
            return;
        this.isEditor = target === this.editor;
        this.reset(this.isEditor);
        this.target = target;
        this.bindTargetPositionAndSize();
        this.data.visible = true;
        // 编辑器不让旋转和skew
        const itemVisible = target.editable;
        for (const item of this.items) {
            switch (item.dir) {
                case 'scale':
                case 'move': {
                    item.visible = itemVisible && !this.isEditor && this.target.typeName === 'image';
                    break;
                }
                case 'rotate': {
                    item.visible = itemVisible && !this.isEditor;
                    break;
                }
                default: {
                    item.data.visible = itemVisible;
                }
            }
        }
        this.bindTargetPositionAndSizeHandler = (e) => {
            if (e.target !== this.target || this.isControling)
                return;
            this.bindTargetPositionAndSize();
        };
        // 如果数据改变，则响应
        this.target.on('dataChange', this.bindTargetPositionAndSizeHandler);
    }
    // 同步目标位置等信息
    bindTargetPositionAndSize() {
        if (!this.target)
            return;
        // 编辑器的话，需要把它的坐标转为相对于容器的
        const pos = {
            x: (this.isEditor ? 0 : util.toNumber(this.target.data.left)),
            y: (this.isEditor ? 0 : util.toNumber(this.target.data.top))
        };
        this.data.left = pos.x;
        this.data.top = pos.y;
        this.data.width = util.toNumber(this.target.data.width) + this.paddingSize * 2;
        this.data.height = util.toNumber(this.target.data.height) + this.paddingSize * 2;
        this.transform.from({
            // rotateX: target.transform.rotateX,
            // rotateY: target.transform.rotateY,
            rotateZ: this.target.transform.rotateZ,
            //scaleX: target.transform.scaleX,
            //scaleY: target.transform.scaleY,
            //scaleZ: target.transform.scaleZ,
        });
        // 初始化图标
        this.resetCursor();
        this.setTip();
        this.initMasks(); // 重新定位mask
    }
    // 显示提示信息
    setTip() {
        if (this.positionItem && this.positionItem.visible) {
            const pos = {
                x: util.toNumber(this.data.left, 2) + (this.isEditor ? util.toNumber(this.target.data.left, 2) : 0),
                y: util.toNumber(this.data.top, 2) + (this.isEditor ? util.toNumber(this.target.data.top, 2) : 0)
            };
            this.positionItem.dom.innerHTML = `X: ${pos.x} Y: ${pos.y}`;
        }
        if (this.sizeItem && this.sizeItem.visible)
            this.sizeItem.dom.innerHTML = `${util.toNumber(this.data.width, 2)} X ${util.toNumber(this.data.height, 2)}`;
    }
    // 解除绑定
    unbind(target) {
        if (target && this.target === target) {
            this.reset(false);
            this.data.visible = false;
            // 如果数据改变，则响应
            if (this.bindTargetPositionAndSizeHandler) {
                target.off('dataChange', this.bindTargetPositionAndSizeHandler);
                delete this.bindTargetPositionAndSizeHandler;
            }
        }
    }
}
