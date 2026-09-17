import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Википедия MeCraft',
  tagline: 'Основная база знаний',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://mrpanda8.github.io',
  baseUrl: '/mecraft-wiki/',
  organizationName: 'mrpanda8',
  projectName: 'mecraft-wiki',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/mrpanda8/mecraft-wiki/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Википедия MeCraft',
        logo: {
          alt: 'Логотип википедии',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://discord.gg/deQGEV8zwk',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord сервер',
          },
          {
            href: 'https://github.com/mrpanda8/mecraft-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
