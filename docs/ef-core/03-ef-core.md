---
id: ef-core
sidebar_label: Модели, DbContext, миграции
title: Entity Framework Core
---

https://youtu.be/UN3_Hd4jIbs

https://docs.microsoft.com/en-us/ef/core/

## Нужные пакеты

```
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 5.0.2
dotnet add package EFCore.NamingConventions --version 5.0.2
```

## Модели и DbContext

```csharp
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

public class BloggingContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Post> Posts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder
            .LogTo(Console.WriteLine)
            .UseSnakeCaseNamingConvention()
            .UseNpgsql("Host=127.0.0.1;Username=blog_app;Password=secret;Database=blog");
    }
}

public class Blog
{
    public int BlogId { get; set; }
    public string Url { get; set; }
    public int Rating { get; set; }
    public List<Post> Posts { get; set; }
}

public class Post
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }

    public int BlogId { get; set; }
    public Blog Blog { get; set; }
}
```

## Миграции

https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli

### Пакеты для работы миграций

```
dotnet tool install --global dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore.Design
```

### Первая миграция

```
dotnet ef migrations add InitialSchema
dotnet ef database update
```

## Использование DbContext

```csharp {1}
using System.Linq;

using ( var db = new BloggingContext())
{
    var interlinkBlog = new Blog() {
        Url = "https://blog.interlink-ua.com/"
    };

    db.Blogs.Add(interlinkBlog);
    interlinkBlog.Posts = new List<Post>() { 
        new Post() { Title = "My First post" },
        new Post() { Title = "My Second post" }
    };
    db.SaveChanges();

    db.Posts.Add(new Post() { Title = "My Third post", Blog = interlinkBlog });
    db.SaveChanges();

    var createdBlog = db.Blogs
        .Where(b => b.BlogId == interlinkBlog.BlogId)
        .Include(b => b.Posts)
        .Single();               

    foreach (var post in createdBlog.Posts)
    {
        Console.WriteLine($"{post.PostId}: {post.Title}");
    }
}
```