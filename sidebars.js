const java = pathPrefixer('java/')([
  'intro',
  category('Intro', pathPrefixer('intro/')([
    'java-versions-overview',
    'openjdk-11-install',
    'install-idea',
    'create-console-app',
    'compile-and-run-from-console',
    'method-main',
    'keywords',
    'one-parameter-function',
    'variables',
    'jshell-java-repl',
    'whole-numbers',
    'compare-whole-numbers',
    'function-with-return',
    'logical-operators',
    'conditional-statements',
    'ternary-operator',
    'for-loop',
  ]), {collapsed: true}),
  'tic-tac-toe',
  category('ООП', pathPrefixer('oop/')([
    'structures',
    'business-types',
    'methods',
    'encapsulation',
  ])),
  'generics',
])

const csharp = pathPrefixer('csharp/')([
  'intro',
  'dotnet-overview',
  'basics',
  'tic-tac-toe',
  category('ООП', [
    'oop',
    'methods',
    'inheritance',
  ]),
  'collections',
  category('Проектирование взаимодействия', [
    'interaction',
    'students-task',
    'silpo-bonus-task',
  ])
])

const aspnetCore = pathPrefixer('aspnet-core/')([
  'intro',
  'net-protocols',
  'tcp-listener',
  'net-console-game',
  'http',
  'http-endpoints',
  'mvc',
  'controller',
  'get-post-actions-tasks',
  'services-di',
  'rest-api',
])

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
  'reactive-programming',
]);

const angular = pathPrefixer('angular/')([
  'intro',
  'interpolation',
  'data-binding',
  'bootstrap-and-sass',
  'components',
  'task-01--todo-list',
  'task-02--http',
  'task-03--routing',
])

const microProject = pathPrefixer('micro-project/')([
  'intro',
  'project-domains',
  'execution-flow',
])

const agile = pathPrefixer('agile/')([
  'intro',
  'project-planning',
  'user-story-discussion',
  'user-stories-invest',
  'estimation',
  'demo',
])

const coursePlan = {
  type: 'ref', 
  id: 'course'
};

[
  java,
  csharp,
  aspnetCore,
  htmlCss,
  javascript,
  angular,
  microProject,
  agile,
].forEach(sidebar => sidebar.unshift(coursePlan));

module.exports = {
  main: [
    coursePlan.id,
    'how-to-complete',
    {
      type: 'ref',
      id: 'java/intro',
    },
    category('.NET',[
      {
        type: 'ref',
        id: 'csharp/intro',
      },
      {
        type: 'ref',
        id: 'aspnet-core/intro',
      },
    ]),
    category('Front-end', [
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
      },
    ]),
    category('Процессы и практики', [
      {
        type: 'ref',
        id: 'micro-project/intro'
      },
      {
        type: 'ref',
        id: 'agile/intro'
      },
    ]),
    category('Общие темы', [
      'git',
      'terminal',
      'data-structures',
    ]),
  ],
  java,
  csharp,
  aspnetCore,
  htmlCss,
  javascript,
  angular,
  microProject,
  agile,
}

function category(label, items, options = {collapsed: false}) {
  return {
    type: 'category',
    collapsed: false,
    label,
    items,
    ...options
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