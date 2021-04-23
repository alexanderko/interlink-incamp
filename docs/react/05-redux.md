---
id: redux
title: Redux
---

[Redux на примере игры Ханойские Башни](https://www.youtube.com/playlist?list=PLNih7cQiUOFvp6BQLen7t4M5VJn00pgsh)

https://gitlab.in6k.com/meetup/tower-of-hanoi

## 💻 Использовать react-redux в todo-list-app
- [ ] Подключить библиотеки [redux](https://redux.js.org/) и [react-redux](https://react-redux.js.org/)
- [ ] Компоненты инициируют получения данных используя hook `useDispatch`
- [ ] Компоненты получают данные используя hook `useSelector`
- [ ] После изменения статуса задачи обновляется счетчик открытых в сайдбаре. Для этого ввести событие  `TASK_STATUS_UPDATED` с пейлоадом `{ id: number, listId: number, done: boolean }` и обрабатывать его в редьюсере сайдбара. 
