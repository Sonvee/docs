import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PACTL DOCS",
  description: "pactl docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'home', link: '/' },
      { text: 'detail', link: '/introduction/index' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/introduction/index' },
        ]
      },
      {
        text: 'PATCL综合查询',
        items: [
          { text: '综合查询首页', link: '/query/index' },
          { text: '运单查询', link: '/query/waybill' },
          { text: '电报查询', link: '/query/telegram' },
          { text: '陆运查询', link: '/query/transport' },
          { text: '新闻查询', link: '/query/news' },
          { text: '消息查询', link: '/query/message' },
          { text: '服务价格查询', link: '/query/price' },
          { text: '服务条款', link: '/query/clause' },
          { text: '关于', link: '/query/about' },
        ]
      },
      {
        text: '进港主动分拨',
        items: [
          { text: '登录', link: '/allocate/login' },
          { text: '短驳交货管理', link: '/allocate/transaction' },
          { text: '货代收货管理', link: '/allocate/receive' },
          { text: '车辆绑定', link: '/allocate/carbind' },
          { text: '密码修改', link: '/allocate/pwdchange' },
          { text: '签字测试', link: '/allocate/signature' },
          { text: '退出登录', link: '/allocate/logout' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sonweir/docs' },
      { icon: 'github', link: 'http://192.168.91.247/project/pactl-airimp' },
    ]
  }
})
