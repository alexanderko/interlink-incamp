---
id: express-intro
title: Express intro
sidebar_label: 💻 Express intro
---

https://www.youtube.com/watch?v=wlUul7yTOVs&list=PLNih7cQiUOFuPHeT0j9Gr_8xgSlxH5B-8&index=9

:::note
Просмотрите вводные скринкасты про `Express` c 9-го по 15-й включительно. 
:::

## 💻 Todo list
Опишите обработчики для:
- [ ] Получения списка всех задач
- [ ] Создания новой задачи
- [ ] Редактирования существующей задачи

## Тестируем API c помощью [HTTPie](https://httpie.io/)

```bash
http :3000/api/todoitem
http :3000/api/todoitem title="Get by id again"
```
