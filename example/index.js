/// <reference path="../dist/index.d.ts" />
import './lib/html-to-image.js';
import JEditor, { util, CssFilters, JImage } from "../dist/index.esm.js";

	const container = document.getElementById('myeditor_container');
	container.style.height = window.innerHeight + 'px';

	// 默认支持的字体
	const fonts = {
        'Zcool Kuaile Regular': {
            label: 'Zcool Kuaile Regular',
            family: 'Zcool Kuaile Regular',
            url: 'fonts/zcool-kuaile-regular.woff2'
        }
    };

	const editor = new JEditor({
		fonts,
		data: {
			width: 800,
			height: 600,
		},
		// editable: false,
		moveable: false, // 锁定编辑器不支持移动
		style: {
			backgroundColor: '#fff',
			containerBackgroundColor: '#eee',
			caretColor: 'red',// 光标颜色
			//marginTop: '50%',
			//marginLeft: '50%'
		},
		transform: {
			//translateX: '-50%',
			//translateY: '-50%'
		},
		controllerOption: {
			tipVisible: true, // 是否展示坐标和大小数据
			style: {
				//itemStyle?: IJElementStyleDeclaration
				// 标线
				//markingLineStyle?: IJElementStyleDeclaration
				// 提示信息
				//tipStyle?: IJElementStyleDeclaration,
				rotateStyle: {
					//backgroundColor: 'transparent',
					//border:'none'
				}
			},
			// 操作点的指针, 指定二个就可以，其它的会旋转得到，你也可以指定全部
			itemCursors: {				
				't': 'images/ns_cursor.png',
				'lt': 'images/nwes_cursor.png',
				'rotate': 'images/rotate_cursor.png',
			},
			// 图标
			itemIcons: {
				rotate: 'images/rotate_icon.png',
				skew: 'images/skew_icon.png'
			}
		}
	});

	container.appendChild(editor.view.dom);

	editor.on('select', (e)=>{
		console.log('editor selected',e.selected);
	})

	// 大小改变后居中, 并且显示全部
	editor.on('resize', function (size) {
		const domWidth = util.toNumber(this.view.dom.clientWidth);
		const domHeight = util.toNumber(this.view.dom.clientHeight);
		// 居中
		this.data.left = Math.max((domWidth - util.toNumber(size.width)) / 2, 0);
        this.data.top = Math.max((domHeight - util.toNumber(size.height)) / 2, 0);
	});

	// 禁止编辑器默认菜单
	editor.on('contextmenu', (e) => {
		e.preventDefault();
	});

	// 元素发生改变事件
	editor.on('elementChange', async (e) => {
		//console.log(e);
		if(e.type === 'styleChange') {
    		// 字体发生改变，需要做check, 并加载字体生效
			if(e.data.name === 'fontFamily') {
				// 如果没有在默认支持的字体内，这里会返回false
				if(editor.fonts.check(e.data.value)) return;// 已经加载，则跳过
				const con = fonts[e.data.value];
				if(con) {
					const f = await editor.fonts.load(con.family, con.url);// 加载
					console.log('load font', e.data.value, f.status);
				}
			}
		}
		// 元素的右健菜单
		else if(e.type == 'mousedown') {
			e.event.preventDefault();
			if(e.event.button == 2) showElementMenu(e.target.id, e.event);
			else hideElementMenu();// 其它按健隐藏菜单
		}
		else if(e.type === 'contextmenu') {
			e.event.preventDefault();
		}
		else if(e.type === 'select') {
			
		}
	});

	// 点击编辑器隐去菜单
	editor.on('mousedown', ()=>{
		hideElementMenu();// 其它按健隐藏菜单
	});

	// 让编辑器在可视范转内
	function resetScale() {
		const domWidth = util.toNumber(editor.view.dom.clientWidth);
		const domHeight = util.toNumber(editor.view.dom.clientHeight);

		const scale = domWidth / (editor.data.width * 1.4);
		if (scale < 1 && scale < editor.transform.scaleX) {
			console.log('scale', scale);
			editor.scale(scale);
		}
	}

	// 操作元素菜单
	function showElementMenu(id, pos) {
		pos = editor.toEditorPosition(pos, editor.view.dom); // 因为菜单放在最外层，所以要指定相对位置是最外层的view
		const menu = document.getElementById('element_menu');
		menu.querySelector('.title').innerHTML = id;
		menu.style.left = (pos.x ) + 'px';
		menu.style.top = (pos.y) + 'px';
		menu.style.display = 'inline';

		menu.removeEventListener('click', menuClick);
		menu.addEventListener('click', menuClick);
	}
	function hideElementMenu() {
		const menu = document.getElementById('element_menu');
		menu.style.display = 'none';
	}
	// 菜单点击
	function menuClick(e) {

		const item = e.srcElement;			
		const action = util.attr(item, 'data-action');
		if(!action) return;

		const menu = document.getElementById('element_menu');
		const id = menu.querySelector('.title').innerHTML;
		const el = editor.getChild(id);
		if(!el) return;

		if(action === 'delete') {
			if(confirm('确定删除？')) {				
				if(el) el.remove();
			}
		}
		else if(action === 'prelevel') {
			// 上一层
			el.setLevel('pre');
		}
		else if(action === 'nextlevel') {
			// 下一层
			el.setLevel('next');
		}
		else if(action === 'toplevel') {
			// 顶层
			el.setLevel('top');
		}
		else if(action === 'bottomlevel') {
			// 底层
			el.setLevel('bottom');
		}
		// 复制
		else if(action === 'copy') {
			const newEl = el.clone();
			newEl.data.left += 50;
			newEl.data.top += 50;
			editor.addChild(newEl);
		}
		menu.style.display = 'none';
	}

	/*loadTemplate(1, (tmpl) => {
		editor.fromJSON(tmpl);
	});*/
	/*const img = editor.createShape('image', {
		data: {
			height: "auto",
			left: 325.5,
			src: "https://jtcospublic.ciccten.com/config-server/1705561487067855645/1622830_gallery_landskape_mountains_nature_photo_icon.png",
			top: 78,
			width: "auto"
		}
	});
	editor.addChild(img);

	const txt = editor.createShape('text', {
		data: {
			height: "auto",
			left: 400,
			top: 200,
			width: "auto",
			text: '请输入文本'
		}
	});
	editor.addChild(txt);*/

	// 加载模板
	async function loadTemplate(id, cb) {
		const url = `templates/${id}.json`;
        const request = new XMLHttpRequest();//新建XMLHttpRequest对象
        request.onreadystatechange = function (e) { //状态发生变化时，函数被回调
            if (this.readyState === 4) { //成功完成
                //判断相应结果：
                if (this.status ===200) {
                    const tmpl = JSON.parse(this.responseText);
                    cb(tmpl);
					
					resetScale();// 重置可视范围

					createPreivew();
                } else {
                    console.log(e);
                    alert('加载模板失败');
                }
            }
        }
        //发送请求：
        request.open('GET', url);
        request.send();
	}

	// 模板点击
	document.getElementById('tmpl_container').addEventListener('click', function (e) {
		if (e.target.nodeName === 'IMG') {
			const idAttr = e.target.attributes['data-tmplid'];
			if (idAttr && idAttr.value) {
				loadTemplate(idAttr.value, loadTemplate2Editor);
			}
		}
	});

	//loadTemplate(2, loadTemplate2Editor);

	const tmpl = {
		"id": "0f0527cb9c2c4e78964ae19b046ec232",
		"figma_id": "90:359",
		"name": "模板_直播海报_海报3",
		"width": 750,
		"height": 1640,
		"data": {
			"data": {
				"width": 750,
				"left": 0,
				"top": 0,
				"_eventsCount": 0,
				"height": 1640
			},
			"children": [
				{
					"data": {
						"left": 0,
						"top": 0,
						"imageSizeMode": "cover",
						"width": 750,
						"height": 1640,
						"_eventsCount": 0,
						"src": "https://jtcospublic.ciccten.com/config-server/1715308816415245667/0.png",
						"zIndex": 1
					},
					"children": [],
					"name": "背景 1",
					"type": "img",
					"attributes": {},
					"style": {
						"backgroundSize": "cover",
						"bottom": "auto",
						"boxSizing": "border-box",
						"display": "inline-block",
						"filter": "none",
						"height": 1640,
						"left": 0,
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"top": 0,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"width": 750,
						"zIndex": 1
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:360",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"backgroundSize": "cover",
							"bottom": 0,
							"boxSizing": "border-box",
							"height": "auto",
							"left": 0,
							"right": 0,
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1721136035779"
					}
				},
				{
					"data": {
						"left": 157,
						"top": 117,
						"imageSizeMode": "cover",
						"width": 593,
						"height": 629,
						"_eventsCount": 0,
						"src": "https://jtcospublic.ciccten.com/config-server/1715308818794664511/0.png",
						"zIndex": 2
					},
					"children": [],
					"name": "$人物图",
					"type": "img",
					"attributes": {},
					"style": {
						"backgroundSize": "cover",
						"bottom": "auto",
						"boxSizing": "border-box",
						"display": "inline-block",
						"filter": "none",
						"height": 629,
						"left": 157,
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"top": 117,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"width": 593,
						"zIndex": 2
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:361",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"backgroundSize": "cover",
							"bottom": 0,
							"boxSizing": "border-box",
							"height": "auto",
							"left": 0,
							"right": 0,
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1720971725049"
					}
				},
				{
					"data": {
						"left": 40,
						"top": 532,
						"width": 670,
						"height": 923,
						"_eventsCount": 0,
						"zIndex": 3
					},
					"children": [
						{
							"data": {
								"zIndex": 1
							},
							"children": [
								{
									"data": {
										"zIndex": 1
									},
									"children": [
										{
											"data": {
												"zIndex": 1
											},
											"children": [],
											"name": "",
											"type": "stop",
											"attributes": {
												"offset": "0%"
											},
											"style": {
												"bottom": 0,
												"boxSizing": "border-box",
												"height": 0,
												"left": 0,
												"right": 0,
												"stopColor": "rgba(149,192,255,1)",
												"top": 0,
												"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
												"width": 0,
												"zIndex": 1
											},
											"transform": {
												"translateX": 0,
												"translateY": 0,
												"translateZ": 0,
												"rotateX": 0,
												"rotateY": 0,
												"rotateZ": 0,
												"scaleX": 1,
												"scaleY": 1,
												"scaleZ": 1,
												"skewX": 0,
												"skewY": 0
											},
											"id": "1722430459294"
										},
										{
											"data": {
												"zIndex": 2
											},
											"children": [],
											"name": "",
											"type": "stop",
											"attributes": {
												"offset": "79%"
											},
											"style": {
												"bottom": 0,
												"boxSizing": "border-box",
												"height": 0,
												"left": 0,
												"right": 0,
												"stopColor": "rgba(0,118,255,1)",
												"top": 0,
												"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
												"width": 0,
												"zIndex": 2
											},
											"transform": {
												"translateX": 0,
												"translateY": 0,
												"translateZ": 0,
												"rotateX": 0,
												"rotateY": 0,
												"rotateZ": 0,
												"scaleX": 1,
												"scaleY": 1,
												"scaleZ": 1,
												"skewX": 0,
												"skewY": 0
											},
											"id": "1719775914242"
										}
									],
									"name": "",
									"type": "linearGradient",
									"attributes": {
										"x1": "72.4666639151088%",
										"y1": "105.18751628441072%",
										"x2": "73.86666663315461%",
										"y2": "-17.501333159306178%"
									},
									"style": {
										"bottom": 0,
										"boxSizing": "border-box",
										"height": 0,
										"left": 0,
										"right": 0,
										"top": 0,
										"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
										"width": 0,
										"zIndex": 1
									},
									"transform": {
										"translateX": 0,
										"translateY": 0,
										"translateZ": 0,
										"rotateX": 0,
										"rotateY": 0,
										"rotateZ": 0,
										"scaleX": 1,
										"scaleY": 1,
										"scaleZ": 1,
										"skewX": 0,
										"skewY": 0
									},
									"id": "gradient_1716840656695"
								}
							],
							"name": "",
							"type": "defs",
							"attributes": {},
							"style": {
								"bottom": 0,
								"boxSizing": "border-box",
								"height": 0,
								"left": 0,
								"right": 0,
								"top": 0,
								"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
								"width": 0,
								"zIndex": 1
							},
							"transform": {
								"translateX": 0,
								"translateY": 0,
								"translateZ": 0,
								"rotateX": 0,
								"rotateY": 0,
								"rotateZ": 0,
								"scaleX": 1,
								"scaleY": 1,
								"scaleZ": 1,
								"skewX": 0,
								"skewY": 0
							},
							"id": "1715789070342"
						},
						{
							"data": {
								"zIndex": 2
							},
							"children": [],
							"name": "",
							"type": "path",
							"attributes": {
								"stroke-width": "4",
								"d": "M 0 0 L 670 0 L 670 923 L 0 923Z"
							},
							"style": {
								"bottom": 0,
								"boxSizing": "border-box",
								"fill": "url(#gradient_1716840656695)",
								"fillRule": "nonzero",
								"height": 0,
								"left": 0,
								"right": 0,
								"top": 0,
								"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
								"width": 0,
								"zIndex": 2
							},
							"transform": {
								"translateX": 0,
								"translateY": 0,
								"translateZ": 0,
								"rotateX": 0,
								"rotateY": 0,
								"rotateZ": 0,
								"scaleX": 1,
								"scaleY": 1,
								"scaleZ": 1,
								"skewX": 0,
								"skewY": 0
							},
							"id": "90:362"
						}
					],
					"name": "1",
					"type": "svg",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"display": "inline-block",
						"filter": "none",
						"height": 923,
						"left": 40,
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"top": 532,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"width": 670,
						"zIndex": 3
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:362",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"height": 0,
							"left": 0,
							"right": 0,
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1716998328735"
					}
				},
				{
					"data": {
						"text": "姓名",
						"left": 99,
						"top": 250,
						"width": 251,
						"height": 84,
						"_eventsCount": 0,
						"zIndex": 4
					},
					"children": [],
					"name": "$姓名",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(0,0,0,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "PingFang SC",
						"fontSize": "56px",
						"fontStyle": "normal",
						"fontWeight": "500",
						"height": 84,
						"left": 99,
						"letterSpacing": "0px",
						"lineHeight": "84px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 250,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "TOP",
						"width": 251,
						"zIndex": 4
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:363",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(0,0,0,1)",
							"fontFamily": "PingFang SC",
							"fontSize": "56px",
							"fontStyle": "normal",
							"fontWeight": "500",
							"height": 0,
							"left": 0,
							"letterSpacing": "0px",
							"lineHeight": "84px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "TOP",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1720185165623"
					}
				},
				{
					"data": {
						"left": 99,
						"top": 342,
						"width": 281,
						"height": 110,
						"_eventsCount": 0,
						"zIndex": 5
					},
					"children": [
						{
							"data": {
								"text": "XXXXX财富顾问",
								"_eventsCount": 0
							},
							"children": [],
							"name": "",
							"type": "var",
							"attributes": {},
							"style": {
								"bottom": 0,
								"height": 0,
								"left": 0,
								"right": 0,
								"top": 0,
								"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
								"width": 0
							},
							"transform": {
								"translateX": 0,
								"translateY": 0,
								"translateZ": 0,
								"rotateX": 0,
								"rotateY": 0,
								"rotateZ": 0,
								"scaleX": 1,
								"scaleY": 1,
								"scaleZ": 1,
								"skewX": 0,
								"skewY": 0
							},
							"id": "1722272110549",
							"filters": []
						},
						{
							"data": {
								"_eventsCount": 0
							},
							"children": [],
							"name": "",
							"type": "br",
							"attributes": {},
							"style": {
								"bottom": 0,
								"height": 0,
								"left": 0,
								"right": 0,
								"top": 0,
								"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
								"width": 0
							},
							"transform": {
								"translateX": 0,
								"translateY": 0,
								"translateZ": 0,
								"rotateX": 0,
								"rotateY": 0,
								"rotateZ": 0,
								"scaleX": 1,
								"scaleY": 1,
								"scaleZ": 1,
								"skewX": 0,
								"skewY": 0
							},
							"id": "1719838221854",
							"filters": []
						},
						{
							"data": {
								"text": "XXXXX专家",
								"_eventsCount": 0
							},
							"children": [],
							"name": "",
							"type": "var",
							"attributes": {},
							"style": {
								"bottom": 0,
								"height": 0,
								"left": 0,
								"right": 0,
								"top": 0,
								"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
								"width": 0
							},
							"transform": {
								"translateX": 0,
								"translateY": 0,
								"translateZ": 0,
								"rotateX": 0,
								"rotateY": 0,
								"rotateZ": 0,
								"scaleX": 1,
								"scaleY": 1,
								"scaleZ": 1,
								"skewX": 0,
								"skewY": 0
							},
							"id": "1720710065417",
							"filters": []
						}
					],
					"name": "$职位",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(0,0,0,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "PingFang SC",
						"fontSize": "28px",
						"fontStyle": "normal",
						"fontWeight": "400",
						"height": 110,
						"left": 99,
						"letterSpacing": "0px",
						"lineHeight": "42px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 342,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "TOP",
						"width": 281,
						"zIndex": 5
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:364",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(0,0,0,1)",
							"fontFamily": "PingFang SC",
							"fontSize": "28px",
							"fontStyle": "normal",
							"fontWeight": "400",
							"height": 0,
							"left": 0,
							"letterSpacing": "0px",
							"lineHeight": "42px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "TOP",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1718778179657"
					}
				},
				{
					"data": {
						"text": "扫码添加企业微信",
						"left": 40,
						"top": 1551,
						"width": 234.33334350585938,
						"height": 32.27390670776367,
						"_eventsCount": 0,
						"zIndex": 6
					},
					"children": [],
					"name": "扫码添加企业微信",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(0,0,0,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "PingFang SC",
						"fontSize": "23.05278968811035px",
						"fontStyle": "normal",
						"fontWeight": "400",
						"height": 32.27390670776367,
						"left": 40,
						"letterSpacing": "0px",
						"lineHeight": "32.27390670776367px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 1551,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "TOP",
						"width": 234.33334350585938,
						"zIndex": 6
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:365",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(0,0,0,1)",
							"fontFamily": "PingFang SC",
							"fontSize": "23.05278968811035px",
							"fontStyle": "normal",
							"fontWeight": "400",
							"height": 0,
							"left": 0,
							"letterSpacing": "0px",
							"lineHeight": "32.27390670776367px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "TOP",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1725038484748"
					}
				},
				{
					"data": {
						"text": "执业编号：",
						"left": 41,
						"top": 1493,
						"width": 141,
						"height": 37.12799835205078,
						"_eventsCount": 0,
						"zIndex": 7
					},
					"children": [],
					"name": "1",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(0,0,0,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "MiSans",
						"fontSize": "28px",
						"fontStyle": "normal",
						"fontWeight": "500",
						"height": 37.12799835205078,
						"left": 41,
						"letterSpacing": "0px",
						"lineHeight": "37.12799835205078px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 1493,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "TOP",
						"width": 141,
						"zIndex": 7
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:366",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(0,0,0,1)",
							"fontFamily": "MiSans",
							"fontSize": "28px",
							"fontStyle": "normal",
							"fontWeight": "500",
							"height": 0,
							"left": 0,
							"letterSpacing": "0px",
							"lineHeight": "37.12799835205078px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "TOP",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1720113341033"
					}
				},
				{
					"data": {
						"text": "XXXXXXXXXXXXX",
						"left": 181,
						"top": 1493,
						"width": 284,
						"height": 37.12799835205078,
						"_eventsCount": 0,
						"zIndex": 8
					},
					"children": [],
					"name": "$执业编号",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(0,0,0,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "MiSans",
						"fontSize": "28px",
						"fontStyle": "normal",
						"fontWeight": "500",
						"height": 37.12799835205078,
						"left": 181,
						"letterSpacing": "2.8000000000000003px",
						"lineHeight": "37.12799835205078px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 1493,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "TOP",
						"width": 284,
						"zIndex": 8
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "130:407",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(0,0,0,1)",
							"fontFamily": "MiSans",
							"fontSize": "28px",
							"fontStyle": "normal",
							"fontWeight": "500",
							"height": 0,
							"left": 0,
							"letterSpacing": "2.8000000000000003px",
							"lineHeight": "37.12799835205078px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "TOP",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1721366416932"
					}
				},
				{
					"data": {
						"left": 40,
						"top": 1540,
						"width": 423,
						"height": 1,
						"_eventsCount": 0,
						"zIndex": 9
					},
					"children": [],
					"name": "分割",
					"type": "div",
					"attributes": {},
					"style": {
						"backgroundColor": "rgba(0,0,0,0.5)",
						"bottom": "auto",
						"boxSizing": "border-box",
						"display": "inline-block",
						"filter": "none",
						"height": 1,
						"left": 40,
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"top": 1540,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"width": 423,
						"zIndex": 9
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:367",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"backgroundColor": "rgba(0,0,0,0.5)",
							"bottom": 0,
							"boxSizing": "border-box",
							"height": 0,
							"left": 0,
							"right": 0,
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1723501228931"
					}
				},
				{
					"data": {
						"text": "直播议题",
						"left": 75,
						"top": 968,
						"width": 468,
						"height": 67.19999694824219,
						"_eventsCount": 0,
						"zIndex": 10
					},
					"children": [],
					"name": "直播议题",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(255,255,255,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "PingFang SC",
						"fontSize": "48px",
						"fontStyle": "normal",
						"fontWeight": "600",
						"height": 67.19999694824219,
						"left": 75,
						"letterSpacing": "0px",
						"lineHeight": "67.19999694824219px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 968,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "TOP",
						"width": 468,
						"zIndex": 10
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:368",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(255,255,255,1)",
							"fontFamily": "PingFang SC",
							"fontSize": "48px",
							"fontStyle": "normal",
							"fontWeight": "600",
							"height": 0,
							"left": 0,
							"letterSpacing": "0px",
							"lineHeight": "67.19999694824219px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "TOP",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1719900514794"
					}
				},
				{
					"data": {
						"left": 75,
						"top": 593,
						"width": 584,
						"height": 254,
						"_eventsCount": 0,
						"zIndex": 11,
						"text": "1111"
					},
					"children": [
						{
							"data": {
								"text": "标题文字内",
								"_eventsCount": 0
							},
							"children": [],
							"name": "",
							"type": "var",
							"attributes": {},
							"style": {
								"bottom": 0,
								"height": 0,
								"left": 0,
								"right": 0,
								"top": 0,
								"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
								"width": 0
							},
							"transform": {
								"translateX": 0,
								"translateY": 0,
								"translateZ": 0,
								"rotateX": 0,
								"rotateY": 0,
								"rotateZ": 0,
								"scaleX": 1,
								"scaleY": 1,
								"scaleZ": 1,
								"skewX": 0,
								"skewY": 0
							},
							"id": "1719684277911",
							"filters": []
						},
						{
							"data": {
								"_eventsCount": 0
							},
							"children": [],
							"name": "",
							"type": "br",
							"attributes": {},
							"style": {
								"bottom": 0,
								"height": 0,
								"left": 0,
								"right": 0,
								"top": 0,
								"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
								"width": 0
							},
							"transform": {
								"translateX": 0,
								"translateY": 0,
								"translateZ": 0,
								"rotateX": 0,
								"rotateY": 0,
								"rotateZ": 0,
								"scaleX": 1,
								"scaleY": 1,
								"scaleZ": 1,
								"skewX": 0,
								"skewY": 0
							},
							"id": "1719395979923",
							"filters": []
						},
						{
							"data": {
								"text": "容可编辑区域",
								"_eventsCount": 0
							},
							"children": [],
							"name": "",
							"type": "var",
							"attributes": {},
							"style": {
								"bottom": 0,
								"height": 0,
								"left": 0,
								"right": 0,
								"top": 0,
								"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
								"width": 0
							},
							"transform": {
								"translateX": 0,
								"translateY": 0,
								"translateZ": 0,
								"rotateX": 0,
								"rotateY": 0,
								"rotateZ": 0,
								"scaleX": 1,
								"scaleY": 1,
								"scaleZ": 1,
								"skewX": 0,
								"skewY": 0
							},
							"id": "1720934070685",
							"filters": []
						}
					],
					"name": "$主标题",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(255,255,255,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "MiSans",
						"fontSize": "96px",
						"fontStyle": "normal",
						"fontWeight": "600",
						"height": 254,
						"left": 75,
						"letterSpacing": "0px",
						"lineHeight": "127.2959976196289px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 593,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "TOP",
						"width": 584,
						"zIndex": 11
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:369",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(255,255,255,1)",
							"fontFamily": "MiSans",
							"fontSize": "96px",
							"fontStyle": "normal",
							"fontWeight": "600",
							"height": 0,
							"left": 0,
							"letterSpacing": "0px",
							"lineHeight": "127.2959976196289px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "TOP",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1717663321637"
					}
				},
				{
					"data": {
						"text": "副标题文字编辑副标题文字编辑",
						"left": 85,
						"top": 851,
						"width": 601,
						"height": 94,
						"_eventsCount": 0,
						"zIndex": 12
					},
					"children": [],
					"name": "$副标题",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(255,255,255,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "PingFang SC",
						"fontSize": "32px",
						"fontStyle": "normal",
						"fontWeight": "400",
						"height": 94,
						"left": 85,
						"letterSpacing": "0px",
						"lineHeight": "44.79999923706055px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 851,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "TOP",
						"width": 601,
						"zIndex": 12
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:370",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(255,255,255,1)",
							"fontFamily": "PingFang SC",
							"fontSize": "32px",
							"fontStyle": "normal",
							"fontWeight": "400",
							"height": 0,
							"left": 0,
							"letterSpacing": "0px",
							"lineHeight": "44.79999923706055px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "TOP",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1723247963244"
					}
				},
				{
					"data": {
						"text": "1.如何看待小米汽车入局能源车",
						"left": 75,
						"top": 1055,
						"width": 601,
						"height": 48,
						"_eventsCount": 0,
						"zIndex": 13
					},
					"children": [],
					"name": "$直播议题.0",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(255,255,255,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "PingFang SC",
						"fontSize": "32px",
						"fontStyle": "normal",
						"fontWeight": "500",
						"height": 48,
						"left": 75,
						"letterSpacing": "0px",
						"lineHeight": "48px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 1055,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "CENTER",
						"width": 601,
						"zIndex": 13
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:371",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(255,255,255,1)",
							"fontFamily": "PingFang SC",
							"fontSize": "32px",
							"fontStyle": "normal",
							"fontWeight": "500",
							"height": 0,
							"left": 0,
							"letterSpacing": "0px",
							"lineHeight": "48px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "CENTER",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1721360592808"
					}
				},
				{
					"data": {
						"text": "2.新能源赛道迎两利好！影响多大？",
						"left": 75,
						"top": 1113,
						"width": 601,
						"height": 48,
						"_eventsCount": 0,
						"zIndex": 14
					},
					"children": [],
					"name": "$直播议题.1",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(255,255,255,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "PingFang SC",
						"fontSize": "32px",
						"fontStyle": "normal",
						"fontWeight": "500",
						"height": 48,
						"left": 75,
						"letterSpacing": "0px",
						"lineHeight": "48px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 1113,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "CENTER",
						"width": 601,
						"zIndex": 14
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:372",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(255,255,255,1)",
							"fontFamily": "PingFang SC",
							"fontSize": "32px",
							"fontStyle": "normal",
							"fontWeight": "500",
							"height": 0,
							"left": 0,
							"letterSpacing": "0px",
							"lineHeight": "48px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "CENTER",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1724491821865"
					}
				},
				{
					"data": {
						"text": "3.A股策略盘点",
						"left": 75,
						"top": 1171,
						"width": 601,
						"height": 48,
						"_eventsCount": 0,
						"zIndex": 15
					},
					"children": [],
					"name": "$直播议题.2",
					"type": "text",
					"attributes": {},
					"style": {
						"bottom": "auto",
						"boxSizing": "border-box",
						"color": "rgba(255,255,255,1)",
						"display": "inline-block",
						"filter": "none",
						"fontFamily": "PingFang SC",
						"fontSize": "32px",
						"fontStyle": "normal",
						"fontWeight": "500",
						"height": 48,
						"left": 75,
						"letterSpacing": "0px",
						"lineHeight": "48px",
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"textAlign": "LEFT",
						"top": 1171,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"verticalAlign": "CENTER",
						"width": 601,
						"zIndex": 15
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:373",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"bottom": 0,
							"boxSizing": "border-box",
							"color": "rgba(255,255,255,1)",
							"fontFamily": "PingFang SC",
							"fontSize": "32px",
							"fontStyle": "normal",
							"fontWeight": "500",
							"height": 0,
							"left": 0,
							"letterSpacing": "0px",
							"lineHeight": "48px",
							"right": 0,
							"textAlign": "LEFT",
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"verticalAlign": "CENTER",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1719442356417"
					}
				},
				{
					"data": {
						"left": 40,
						"top": 64,
						"imageSizeMode": "cover",
						"width": 171,
						"height": 40,
						"_eventsCount": 0,
						"src": "https://jtcospublic.ciccten.com/config-server/1715308821649169686/0.png",
						"zIndex": 16
					},
					"children": [],
					"name": "$品牌Logo",
					"type": "img",
					"attributes": {},
					"style": {
						"backgroundSize": "cover",
						"bottom": "auto",
						"boxSizing": "border-box",
						"display": "inline-block",
						"filter": "brightness(0.41049999594688413)",
						"height": 40,
						"left": 40,
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"top": 64,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"width": 171,
						"zIndex": 16
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:374",
					"filters": [
						{
							"name": "brightness",
							"displayName": "亮度",
							"option": {
								"value": 0.41049999594688413
							}
						}
					],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"backgroundSize": "cover",
							"bottom": 0,
							"boxSizing": "border-box",
							"height": "auto",
							"left": 0,
							"right": 0,
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1725199667303"
					}
				},
				{
					"data": {
						"left": 237,
						"top": 64,
						"imageSizeMode": "cover",
						"width": 171,
						"height": 40,
						"_eventsCount": 0,
						"src": "https://jtcospublic.ciccten.com/config-server/1715308822423199214/0.png",
						"zIndex": 17
					},
					"children": [],
					"name": "$节目Logo",
					"type": "img",
					"attributes": {},
					"style": {
						"backgroundSize": "cover",
						"bottom": "auto",
						"boxSizing": "border-box",
						"display": "inline-block",
						"filter": "brightness(0.41049999594688413)",
						"height": 40,
						"left": 237,
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"top": 64,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"width": 171,
						"zIndex": 17
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:375",
					"filters": [
						{
							"name": "brightness",
							"displayName": "亮度",
							"option": {
								"value": 0.41049999594688413
							}
						}
					],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"backgroundSize": "cover",
							"bottom": 0,
							"boxSizing": "border-box",
							"height": "auto",
							"left": 0,
							"right": 0,
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1719763730141"
					}
				},
				{
					"data": {
						"left": 560,
						"top": 1433,
						"imageSizeMode": "cover",
						"width": 150,
						"height": 150,
						"_eventsCount": 0,
						"src": "https://jtcospublic.ciccten.com/config-server/1715308823165211584/0.png",
						"zIndex": 18
					},
					"children": [],
					"name": "$二维码",
					"type": "img",
					"attributes": {},
					"style": {
						"backgroundSize": "cover",
						"bottom": "auto",
						"boxSizing": "border-box",
						"display": "inline-block",
						"filter": "none",
						"height": 150,
						"left": 560,
						"overflow": "hidden",
						"position": "absolute",
						"right": "auto",
						"top": 1433,
						"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
						"transformOrigin": "center center",
						"width": 150,
						"zIndex": 18
					},
					"transform": {
						"translateX": 0,
						"translateY": 0,
						"translateZ": 0,
						"rotateX": 0,
						"rotateY": 0,
						"rotateZ": 0,
						"scaleX": 1,
						"scaleY": 1,
						"scaleZ": 1,
						"skewX": 0,
						"skewY": 0
					},
					"id": "90:376",
					"filters": [],
					"target": {
						"data": {},
						"children": [],
						"name": "",
						"type": "",
						"attributes": {},
						"style": {
							"backgroundSize": "cover",
							"bottom": 0,
							"boxSizing": "border-box",
							"height": "auto",
							"left": 0,
							"right": 0,
							"top": 0,
							"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
							"width": 0
						},
						"transform": {
							"translateX": 0,
							"translateY": 0,
							"translateZ": 0,
							"rotateX": 0,
							"rotateY": 0,
							"rotateZ": 0,
							"scaleX": 1,
							"scaleY": 1,
							"scaleZ": 1,
							"skewX": 0,
							"skewY": 0
						},
						"id": "1724632985539"
					}
				}
			],
			"name": "模板_直播海报_海报3",
			"type": "editor",
			"attributes": {},
			"style": {
				"backgroundColor": "rgba(255,255,255,1)",
				"backgroundImage": ""
			},
			"transform": {
				"translateX": 0,
				"translateY": 0,
				"translateZ": 0,
				"rotateX": 0,
				"rotateY": 0,
				"rotateZ": 0,
				"scaleX": 0.8,
				"scaleY": 0.8,
				"scaleZ": 1,
				"skewX": 0,
				"skewY": 0
			},
			"id": "1721484877474",
			"filters": [],
			"target": {
				"data": {},
				"children": [],
				"name": "",
				"type": "",
				"attributes": {},
				"style": {
					"backgroundColor": "rgba(255,255,255,1)",
					"backgroundImage": "",
					"bottom": 0,
					"boxShadow": "0 0 10px 10px #ccc",
					"boxSizing": "border-box",
					"height": 0,
					"left": 0,
					"overflow": "hidden",
					"right": 0,
					"top": 0,
					"transform": "translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)",
					"width": 0
				},
				"transform": {
					"translateX": 0,
					"translateY": 0,
					"translateZ": 0,
					"rotateX": 0,
					"rotateY": 0,
					"rotateZ": 0,
					"scaleX": 1,
					"scaleY": 1,
					"scaleZ": 1,
					"skewX": 0,
					"skewY": 0
				},
				"id": "1719403765423"
			}
		},
		"editor": null
	};	
	loadTemplate2Editor(tmpl);

	function loadTemplate2Editor(tmpl) {
		if(!tmpl.type && tmpl.data && tmpl.data.type === 'editor') tmpl = tmpl.data;                   
		editor.fromJSON(tmpl);
	}

	// 滤镜
	const buttonContainer = document.getElementById('css_filters');
	function buttonClick(e) {
		const name = this.getAttribute('data-filter');
		const filter = CssFilters[name];
		
		const elements = editor.selectedElements;
		for(const el of elements) {
			//el.filters.clear();// 只支持一个滤镜先，可以设置多个，但最好同一个滤镜不要重复
			el.filters.add(filter);
		}
	}
	for(const name in CssFilters) {
		const filter = CssFilters[name];
		const button = document.createElement('button');
		button.textContent = filter.displayName || name;
		button.setAttribute('data-filter', name);
		button.onclick = buttonClick;
		buttonContainer.appendChild(button);
	}


	// 放大缩小
	document.getElementById('btn_zoomin').onclick = function () {
		editor.scale(editor.transform.scaleX + 0.1);
	}
	document.getElementById('btn_zoomout').onclick = function () {
		editor.scale(editor.transform.scaleX - 0.1);
	}

	// 调整大小
	window.onresize = function () {
		//editor.resize();
	}

	const preview = document.getElementById('previewImg');
	async function createPreivew() {
		// https://github.com/bubkoo/html-to-image

		//const fontEmbedCss = await htmlToImage.getFontEmbedCSS(editor.target.dom);
		//html2Image.toSVG(element1, { fontEmbedCss });
		//console.log(fontEmbedCss);
        // 截图取target的dom节点，才是真的编辑渲染区域
		const img = await window.htmlToImage.toPng(editor.target.dom);
		preview.src = img;

		const data = editor.toString();
		console.log(data);

		//setTimeout(createPreivew, 10000);


	};
	setInterval(() => {
		createPreivew()
	}, 10000);

    window.editor = editor;