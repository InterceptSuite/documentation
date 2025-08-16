import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'InterceptSuite',
  tagline: 'Advanced Network Interception and Analysis Suite',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://doc.interceptsuite.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For custom domain, this should be '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'InterceptSuite', // GitHub org/user name.
  projectName: 'InterceptSuite', // Repository name.

  // Important for GitHub Pages client-side routing
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Edit this page links point to GitHub repo
          editUrl:
            'https://github.com/InterceptSuite/InterceptSuite/tree/main/docs/',
          // Make docs the root path
          routeBasePath: '/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
        docsRouteBasePath: '/',
        indexDocs: true,
        removeDefaultStopWordFilter: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'InterceptSuite',
      logo: {
        alt: 'InterceptSuite Logo',
        src: 'img/logo.png',
        height: 32,
      },
      items: [
        {
          href: 'https://github.com/InterceptSuite/InterceptSuite',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://interceptsuite.com/',
          label: 'Website',
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
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/InterceptSuite/InterceptSuite/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/InterceptSuite/InterceptSuite/discussions',
            },
            {
              label: 'Main Website',
              href: 'https://interceptsuite.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/InterceptSuite/InterceptSuite',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} InterceptSuite Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
