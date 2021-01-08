module.exports = {
  title: 'InterLink inCamp',
  tagline: 'Web Development Internship',
  url: 'https://interlink-incamp.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'interlink', // Usually your GitHub org/user name.
  projectName: 'inCamp', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'InterLink inCamp',
      logo: {
        alt: 'InterLink Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Курс',
          position: 'left',
        },
        {
          href: 'https://github.com/alexanderko/interlink-incamp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Курс',
          items: [
            {
              label: 'HTML/CSS',
              to: 'docs/html-css/intro',
            },
            {
              label: 'JavaScript',
              to: 'docs/javascript/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.interlink-ua.com/article/internship/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} InterLink inCamp. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            [require('remark-oembed'), { syncWidget: true}]
          ],
          editUrl:
            'https://github.com/alexanderko/interlink-incamp/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
