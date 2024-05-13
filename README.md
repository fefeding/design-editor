# @cicctencent/design-editor
html设计编辑器

```zsh
src
├── components
│   ├── image.ts
│   └── text.ts
├── constant
│   ├── data.ts  基础数据结构 JData、IData、IDataItem
│   ├── eventEmitter.ts    与dom无关的事件发射器，扩展了eventemitter3的on和off支持空格间隔多个事件
│   ├── styleMap.ts
│   ├── transform.ts
│   └── types.ts
├── core
│   ├── baseComponent.ts
│   ├── controller.ts
│   ├── element.ts 元素相关能力的基类：JElement
│   ├── event.ts   dom相关的事件处理。
│   ├── fonts.ts
│   └── style.ts
├── editor.ts
├── index.ts
└── lib
    └── util.ts
```

[example](https://fefeding.github.io/design-editor/example/index.html)

# API
[API](./docs/api/index.md)