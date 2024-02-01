import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "html画布",
  description: "design html 设计图片编辑库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/README' },
      { text: 'API', link: '/docs/api/j-html-design-editor' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'API', link: '/docs/api/j-html-design-editor' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/fefeding/j-html-design-editor.git' }
    ]
  }
})
