---
id: connection
sidebar_label: 💻 Подключение к БД в коде
title: Подключение к БД в коде
---

Для подключения к базе данных нам нужен драйвер. Он предоставляет API для оправки SQL запросов в базу. Для каждой базы данных он свой. Как и другие зависимости, поставляються в виде пакетов. 

* [PostgreSQL](https://node-postgres.com/) 
* [MySQL](https://www.npmjs.com/package/mysql2) 
* [SQLite](https://www.npmjs.com/package/sqlite3) 

## Асинхронный API
В Node.js данные из БД мы получаем асинхронно. Для того, что бы работать с результатом, нам надо передать функцию колбек вместе с запросом в базу. Но намного удобней будет получить  результат в виде [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Что такое `Promise` и как с ним работать узнайте из нашего митапа. Ниже ссылка на видео. 

[Hack JavaScript. Promise та Async/Await](https://youtu.be/KFpUbJk1GuY)

## 💻 Список сотрудников
Получать список сотрудников для планирования дней рождений из базы данных.

## 💻 API списка задач
Реализовать элементарный CRUD для API списка задач. 

