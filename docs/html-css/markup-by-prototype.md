---
title: Верстка по макету
sidebar_label: 💻 Верстка по макету
---

* Знакомимся с Viewport
  * [Краткое описание Viewport](https://www.w3schools.com/css/css_rwd_viewport.asp). 
  * [Развернутое пояснение](https://itchief.ru/html-and-css/viewport-meta-tag) на примере iPhone3 и iPhone4
  * Узнать размер viewport вашего экрана поможет [тестовая страница](https://whatismyviewport.com/)
* Знакомимся с [Media Query](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
* Смотрим [Как пользоваться инспектором в Figma](https://youtu.be/lwSWZhoGUsU)
* Пересматриваем [Возможности Developer Tools в Сhrome по работе с CSS](https://developers.google.com/web/tools/chrome-devtools/css/) (или FF, если его используете)
* Устанавливаем [PixelPerfect](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en) для сверки страницы с дизайном
* Делаем адаптивную [mobile-first](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first) страницу портфолио по [макету](https://www.figma.com/file/65jqO6WQdYUXxI0yOL4VfA/Porto?node-id=0%3A1)

## Копирование стилей из Figma
В Figma на каждом элементе будут указаны свойства шрифта. Копирование их "как есть" приведет к бОльшему размеру CSS и затруднит внесение изменений в него. 

В хорошем дизайне будет всего 2-3 шрифта. Их надо идентифицировать. Основной шрифт применить к `body`. Отличные от базового свойства менять там, где они отличаются. При этом в дизайне в разных секциях страницы будет использоваться заголовки второго и третьего уровня.

Вероятно, что стили у заголовков одного уровня будут повторяться не зависимо от секции. Правильно будет указать стили один раз для заголовка каждого уровня в начале CSS файла. 

