---
id: sql
title: Основы SQL
---

## SQL

https://youtu.be/vu8P_TAAyiA

[SQL Tutorial](https://www.w3schools.com/sql/default.asp)

## PostgreSQL

https://youtu.be/invt0Ov4wl4

### Install

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

### Usage

```bash
sudo -u postgres psql # connect to db using system user postgres
```

### New user and database

В командном интерфейсе `psql` (заменить `<username>`, `<database_name>` и пароль на то, что вам надо):

Создать пользователя: 

```sql
create user <username>;
```

Включить для пользователя доступ по паролю:
```sql
alter user <username> with encrypted password '<password>';
```

Дать пользователю вся права на работу с новой базой данных `<database_name>`:
```sql
grant all privileges on database <database_name> to <username>;
```

Подключаемся новым пользователем:
```bash
postgres -h 127.0.0.1 <database_name> <username>
```

Не забываем заменить имя пользователя и базы. К примеру, у вас получиться:
```bash
postgres -h 127.0.0.1 todolist todolist_app
```

:::caution
Когда не указан host сервера, сервер пустит пользователя только если его имя в ОС соответствует тому, к которому вы подключаетесь. Это настройка в файле `pg_hba.conf` (пример полного пути для PostgreSQL версии 10 `/etc/postgresql/10/main/pg_hba.conf`). Что бы ее "обойти" надо явно указать host. За это в примере выше отвечает параметр `-h 127.0.0.1`. 
:::

## 💻 Работы с таблицами psql

- [ ] Создать и наполнить таблицу со списком сотрудников (дня [планирования дней рождения](../node/02.3-map.md))
- [ ] Создать и наполнить таблицу для списка задач

