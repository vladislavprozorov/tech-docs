import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'Interview Handbook',
  tagline: 'Открытые руководства и практика для технических собеседований',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-domain.example.com',
  baseUrl: '/',

  organizationName: 'aaronsw', 
  projectName: 'my-handbook', 

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/aaronsw/my-handbook/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/aaronsw/my-handbook/edit/main/blog/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Interview Handbook',
      logo: {
        alt: 'Interview Handbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/intro', label: 'О проекте', position: 'left' },
        { to: '/docs/guide', label: 'Руководство', position: 'left' },
        { to: '/docs/practice', label: 'Практика', position: 'left' },
        { to: '/docs/resources', label: 'Ресурсы', position: 'left' },
        { to: '/blog', label: 'Блог', position: 'left' },
        {
          href: 'https://github.com/aaronsw/my-handbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Intro', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'X', href: 'https://x.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/aaronsw/my-handbook' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Interview Handbook — For educational purposes.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
