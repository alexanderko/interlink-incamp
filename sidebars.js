const htmlCss = [
  'html-css/intro',
  {
    type: 'category',
    label: 'Основи',
    collapsed: false,
    items: [
      'html-css/html-tags',
      'html-css/css-intro',
      'html-css/css-properties',
      'html-css/typography',
      'html-css/task-cv'
    ]
  },
  {
    type: 'category',
    label: 'Box Model and Flow',
    collapsed: false,
    items: [
      'html-css/box-model',
      'html-css/size-units',
      'html-css/flow',
      'html-css/task-cv-styles',
    ]
  },
  {
    type: 'category',
    label: 'Layout',
    collapsed: false,
    items: [
      'html-css/layout',
      'html-css/flexbox',
      'html-css/semantic-markup',
      'html-css/task-layout',
    ]
  },
  'html-css/markup-by-prototype',
  'html-css/css-methodologies',
  'html-css/css-processors',
  'html-css/style-guide',
  'html-css/animation'
];

const javascript = [
  'javascript/intro',
  'javascript/types',
]

module.exports = {
  main: [
    'course',
    {
      type: 'ref',
      id: 'html-css/intro',
    },
    {
      type: 'ref',
      id: 'javascript/intro'
    }
  ],
  htmlCss,
  javascript
}