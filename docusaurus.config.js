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
          to: 'docs/course',
          activeBasePath: 'docs/course',
          label: 'Курс',
          position: 'left',
        },
        {
          to: 'docs/java/intro',
          activeBasePath: 'docs/java',
          label: 'Java',
          position: 'left',
        },
        {
          to: 'docs/html-css/intro',
          activeBasePath: 'docs/html-css',
          label: 'HTML/CSS',
          position: 'left',
        },
        {
          to: 'docs/javascript/intro',
          activeBasePath: 'docs/javascript',
          label: 'JavaScript',
          position: 'left',
        },
        {
          to: 'docs/angular/intro',
          activeBasePath: 'docs/angular',
          label: 'Angular',
          position: 'left',
        },
        {
          to: 'docs/micro-project/intro',
          activeBasePath: 'docs/micro-project',
          label: 'Микро-проект',
          position: 'left',
        },
        {
          to: 'docs/agile/intro',
          activeBasePath: 'docs/agile',
          label: 'Agile',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
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
          title: 'Back-end',
          items: [
            {
              label: 'Java',
              to: 'docs/java/intro',
            },
          ],
        },
        {
          title: 'Front-end',
          items: [
            {
              label: 'HTML/CSS',
              to: 'docs/html-css/intro',
            },
            {
              label: 'JavaScript',
              to: 'docs/javascript/intro',
            },
            {
              label: 'Angular',
              to: 'docs/angular/intro',
            },
          ],
        },
        {
          title: 'Процессы и практики',
          items: [
            {
              label: 'Микро-проект',
              to: 'docs/micro-project/intro',
            },
            {
              label: 'Agile',
              to: 'docs/agile/intro',
            },
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Заметки с передовой',
              to: 'blog'
            },
            {
              label: 'InterLink Blog',
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
