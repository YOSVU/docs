// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Youth Open Source Virtual University',
  tagline: 'Powering the globe, opening the world.',
  url: 'https://yosvu.eu.org',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YOSVU', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */

        ({
            gtag: {
              trackingID: 'G-999X9XX9XX',
              anonymizeIP: true,
            },
            googleAnalytics: {
              trackingID: 'UA-141789564-1',
              anonymizeIP: true,
            },
            googleTagManager: {
              containerId: 'GTM-PD9RSMX',
            },
            sitemap: {
                changefreq: 'always',
                priority: 0.5,
                ignorePatterns: ['/tags/**'],
                filename: 'sitemap.xml',
            },
            docs: {
                sidebarPath: require.resolve('./sidebars.js'),
                // Please change this to your repo.
                // Remove this to remove the "edit this page" links.
                editUrl:
                    'https://github.com/YOSVU/docs/tree/main/',
            },
            blog: {
                showReadingTime: true,
                // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/YOSVU/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Youth Open Source Virtual University',
        logo: {
          alt: 'Youth Open Source Virtual University Logo',
          src: 'img/logo.png',
        },
        items: [
            {
                type: 'doc',
                docId: 'intro',
                position: 'left',
                label: 'Tutorial',
            },
            {to: '/blog', label: 'Blog', position: 'left'},
            {
                type: 'localeDropdown',
                position: 'right',
            },
            {
                type: 'docsVersionDropdown',
                position: 'right',
            },
            {
                href: 'https://github.com/YOSVU',
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
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/YOSVU',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/F52fgfb22S',
              },
              {
                label: 'QQ Group',
                href: 'https://jq.qq.com/?_wv=1027&k=K6CSU5qU',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                  label: 'Blog',
                  to: '/blog',
              },
                {
                    label: 'GitHub',
                    href: 'https://github.com/YOSVU',
                },
            ],
          },
        ],
          copyright: `Copyright © ${new Date().getFullYear()} YOSVU. All right saved.`,
      },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        markdown: {
            mermaid: true,
        },
    }),
};

module.exports = config;
