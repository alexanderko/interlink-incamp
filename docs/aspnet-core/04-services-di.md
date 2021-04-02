---
id: services-di
title: Сервисы и DI
---

[Введение в сервисы и DI в ASP.NET Core](https://youtu.be/FUSsFFlH1AQ)


```csharp {7-8} 
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();

        // регистрация сервиса в DI контейнере
        services.AddSingleton<TodoItemService>();
    }
}
```

```csharp {5-9} 
public class TodoItemController : ControllerBase
{
    private TodoItemService todoItemsService;

    // инъекция зависимости в контроллер через конструктор
    public TodoItemController(TodoItemService service)
    {
        this.todoItemsService = service;
    }

    // методы обработки запросов ...
}
```

```csharp
public class TodoItemService
{

    private List<TodoItem> todoItems = new List<TodoItem> {
        new TodoItem() { Id = 1, Title = "Implement read" },
        new TodoItem() { Id = 2, Title = "Implement create" }
    };
    private int lastId = 2;

    public List<TodoItem> GetAll()
    {
        return todoItems;
    }

    public TodoItem Create(TodoItem item)
    {
        item.Id = ++lastId;
        todoItems.Add(item);
        return item;
    }
}
```