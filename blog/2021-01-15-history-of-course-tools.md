---
title: История платформ размещения курса
author: Александр Котов
author_image_url: https://www.gravatar.com/avatar/e9c367f77a2a1288d5a9073978b50171?s=50
tags: [course-tools]
---

Давая интернам материалы для ознакомления и задания, я пробовал разные инструменты. И в каждом мне чего-то да не хватало ...

<!--truncate-->

-   Google Docs - неудобно форматировать код, все одной портянкой
-   [Trello](https://trello.com/b/6RZNNPl9/html-css) - можно разбить задания по дням, добавить картинки, даже добавить чеклисты (интерну надо склонировать себе доску, это минус).
-   [Notion](https://www.notion.so/3da0807e82e244ad9af3ab7548461f24?v=53163600b5e2409aac333b2d776ebd79) - можно карточки с темами группировать в доски по разным критериям. Но если в сами карточки добавлять не только ссылки а и контент - быстро упрешься в лимит на 1000 блоков (каждый абзац или список это отдельный блок)
-   [GitBook](https://interlink-incamp.gitbook.io/web-dev-course/) - платный для нескольких участников. Раздражают случайные уходы со страницы на макбуке свайпом (и редактирование в целом, может сугубо моя кривость рук)

Сейчас я веду план и задания в [Docusaurus](https://v2.docusaurus.io/) от Facebook. Это **статический генератор сайтов и документации** с поддержкой Markdown + React ([MDX](https://mdxjs.com/)). Использование React в качестве шаблонизатора открывает возможности для создания динамических частей страницы.  Так, я сделал простой компонент чек-листа, которой показывает прогресс выполнения заданий (как в трело, но отметки пока только в `localStorage` ) Сайт авто-деплоится на [Netlify](https://www.netlify.com/) после каждого пуша в репо. А вот пример [задания с чеклистами](https://interlink-incamp.netlify.app/docs/javascript/task-02--todo-list-events). А тут [код с подсветкой важных строк](https://interlink-incamp.netlify.app/docs/angular/components). За встраивание inline видео YouTube отвечает плагин разбора markdown [remark-oembed](https://github.com/agentofuser/remark-oembed)