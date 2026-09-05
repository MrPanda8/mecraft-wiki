import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Википедия MeCraft",
  description: "Официальная википедия сервера",
  base: '/mecraft-wiki/', 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Начало', link: '/start/connect' }
    ],

    sidebar: [
      {
        text: 'Начало',
        items: [
          { text: 'Подключение', link: '/start/connect' },
          { text: 'Правила', link: '/start/rules' },
        ]
      },
      {
        text: 'Блоки',
        link: '/blocks/',
        items: []
      },
      {
        text: 'Предметы',
        link: '/items/',
        items: []
      },
      {
        text: 'Мобы',
        link: '/mobs/',
        items: []
      },
      {
        text: 'Измерения',
        link: '/dimensions/',
        items: []
      },
      {
        text: 'Мебель',
        link: '/furniture/',
        items: []
      },
      {
        text: 'Механики',
        link: '/mechanics/',
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MrPanda8/mecraft-wiki' }
    ]
  }
})
