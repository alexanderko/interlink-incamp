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
  category('Обработка событий DOM', [
    'dom-event-handling',
    'task-02--todo-list-events',
  ]),
  category('Обработка отправки формы', [
    'submitting-html-form',
    'task-03--todo-list-form',
  ]),
  category('Fetch API', [
    'fetch-api',
    'task-04--use-fetch-api',
  ]),
  'functional-programming',
]);

const angular = pathPrefixer('angular/')([
  'intro',
  'interpolation',
  'data-binding',
  'bootstrap-and-sass',
  'components',
  'task-01--todo-list',
  'task-02--http',
])

const coursePlan = {
  type: 'ref', 
  id: 'course'
};

[
  htmlCss,
  javascript,
  angular,
].forEach(sidebar => sidebar.unshift(coursePlan));

module.exports = {
  main: [
    coursePlan.id,
    {
      type: 'ref',
      id: 'html-css/intro',
    },
    {
      type: 'ref',
      id: 'javascript/intro'
    },
    {
      type: 'ref',
      id: 'angular/intro'
    }
  ],
  htmlCss,
  javascript,
  angular,
}

function category(label, items) {
  return {
    type: 'category',
    collapsed: false,
    label,
    items
  };
}

function pathPrefixer(prefix) {
  function prependPrefix (item) {
    if (typeof item == 'string') return prefix + item;
    if (Array.isArray(item)) return item.map(prependPrefix)
    switch (item.type) {
      case 'category': return {...item, items: prependPrefix(item.items)}
    }
  }

  return prependPrefix;
}