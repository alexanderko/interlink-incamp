---
id: routing
title: React Router
sidebar_label: 💻 Routing
---

Реализовать Layout и [Routing](https://reactrouter.com/) 

1. [ ] Компонент `Dashboard` позволяет выбрать список задач для просмотра. Доступен всегда
2. [ ] Страница `TodoListPage` отображает задачи конкретного списка, выбранного в `Dashboard`
3. [ ] Страница `TodayTasksPage` отображает невыполненные задачи назначенные на сегодня или дату в прошлом

:::note
Компонент `TodayTasksPage` может содержать задачи из разных списков. Поэтому, для каждой задачи надо выводить название списка, и сделать его ссылкой на страницу `TodoListPage`. 
:::

## Routes

1. [ ] `/today` -- показываем компонент страницы `TodayTasksPage`
2. [ ] `/todo-list/:id` -- показываем компонент страницы `TodoListPage`, выводим информацию про список с id `:id` используя [useParams](https://reactrouter.com/web/example/url-params) hook.
