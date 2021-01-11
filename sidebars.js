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

const javascript = pathPrefixer('javascript/')([
  'intro',
  'types',
  'inner-html',
  'task-01--todo-list-item-html',
  'dom-event-handling',
  'task-02--todo-list-evets',
  'submitting-html-form',
]);

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

function pathPrefixer(prefix) {
  function prependPrefix (items) {
    return items.map(item => prefix + item)
  }

  return prependPrefix;
}