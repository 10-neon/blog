import { defineConfig } from 'vitepress'
import sidebarConfig from '../sidebar.json'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "neon10 blog",
  description: "A VitePress Site",
  base: 'blog',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'RTC', link: '/rtc' }
    ],

    sidebar: sidebarConfig,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
