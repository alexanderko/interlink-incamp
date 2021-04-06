---
id: db-connection
sidebar_label: DbConnection
title: Подключение c использованием DbConnection
---

https://youtu.be/Ws8fL7i2i3Y

https://docs.microsoft.com/en-us/dotnet/api/system.data.common.dbconnection?view=net-5.0

https://www.npgsql.org/doc/index.html

```bash
dotnet add package Npgsql --version 5.0.4
```

```csharp
using System;
using System.Threading.Tasks;
using Npgsql;

class Program
{

    public static void Main()
    {
        var connString = "Host=127.0.0.1;Username=todolist_app;Password=secret;Database=todolist";

        using var conn = new NpgsqlConnection(connString);
        conn.Open();

        // Retrieve all todo item rows
        using (var cmd = new NpgsqlCommand("SELECT title, done FROM items", conn))
        {
            using (var reader = cmd.ExecuteReader())
            while (reader.Read())
            {
                var title = reader.GetString(0);
                var done = reader.GetBoolean(1);
                char doneFlag = done ? 'x' : ' ';
                Console.WriteLine($"- [{doneFlag}] {title}");
            }
        }

        // Insert one todo item
        var insertCmd = new NpgsqlCommand("INSERT INTO items (title, done) VALUES (@title, false)", conn);
        insertCmd.Parameters.AddWithValue("title", "New important task");
        insertCmd.ExecuteNonQuery();
    }
}
```

## 💻 Список сотрудников
Получать список сотрудников для планирования дней рождений из базы данных.

## 💻 Консольный список задач
Реализовать элементарный CRUD для консольного списка задач. 
