// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenNorms',
  tagline: 'Open-Source Social Norms Handbook for Neurodivergent Hoomans',
  favicon: 'img/favicon.ico',

  // Your production URL (GitHub Pages uses https://<username>.github.io)
  url: 'https://jakujobi.github.io',
  // Your repository name as the baseUrl, e.g. '/OpenNorms/'
  baseUrl: '/OpenNorms',

  // GitHub pages deployment config.
  organizationName: 'jakujobi', // Your GitHub username or org name
  projectName: 'OpenNorms',     // Your repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use i18n, set it for SEO and metadata
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Update this to your own GitHub repo URL for "Edit this page" links
          editUrl: 'https://github.com/jakujobi/OpenNorms/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Update this to your own GitHub repo URL
          editUrl: 'https://github.com/jakujobi/OpenNorms/edit/main/blog/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Warnings to enforce blogging best practices (optional)
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenNorms',
        logo: {
          alt: 'OpenNorms Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar', // or your chosen sidebar ID
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/jakujobi/OpenNorms',
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
                label: 'Introduction',
                to: '/docs/intro', // Update to your actual intro page
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/jakujobi/OpenNorms/issues',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/jakujobi/OpenNorms/discussions',
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
                href: 'https://github.com/jakujobi/OpenNorms',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenNorms. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
