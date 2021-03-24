---
id: oop
sidebar_label: Структуры в С#
title: Структуры
---

Пред тем, как мы погрузимся в методы, инкапсуляция и полиморфизм познакомимся с понятием структур. Это простой способ создания составных сущностей, описанных несколькими свойствами. 

https://youtu.be/ZF2zYYhYcwk

```csharp
class Program
{
   struct Point
   {
      public int x;
      public int y;
   }

   class Rect
   {
      public Point topLeft;
      public int width;
      public int height; 
   }

   static void Main(string[] args)
   {
      Point pointA = new Point();
      pointA.x = 1;
      Console.WriteLine(ToString(point));

      Point pointB = Move(pointA, 3);
      Console.WriteLine(ToString(point));

      Rect rect = new Rect();
      rect.width = 2;
      rect.height = 1;

      Print(rect);
      Scale(rect, 3);
      Print(rect);
   }

   static Point Move(Point point, int offset)
   {
      Point p = new Point();
      p.x = point.x + offset;
      p.y = point.y + offset;
      return p;
   }

   static string ToString(Point point)
   {
      return $"(x: {point.x}, y: {point.y})";
   }

   static void Print(Rect rect)
   {
      Console.WriteLine($"[{ToString(rect.topLeft)}; {rect.width} x {rect.height}]");
   }

   static void Scale(Rect rect, int factor)
   {
      rect.width = rect.width * factor;
      rect.height = rect.height * factor;
   }
}
```

:::note
В C#, в отличии от Java, есть выделенный [механизм описания структур](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct). Эти пользовательские типы являються значимыми, в отличии от классов (ссылочных). Экземпляры структуры передаются в методы по значению. То-есть, метод получит копию структуры, а не ссылку на оригинальный экземпляр. 
:::

:::tip class or struct
В большинстве случаем вам подойдет `class`. При каких условия все же стоит использовать `struct` читайте в [руководстве по дизайну типов](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/choosing-between-class-and-struct). 
:::

### 💻 Task struct

Реализуйте метод для печати в консоль структуры типа `Task` в следующем виде:
```
1. [x] Implement task output (Aug 25)
   Use fields: title, desc, done, dueDate
```

-  [ ] `1.` - идентификатор задачи
-  [ ] `[x]` - задача выполнена. `[ ]` - задача открыта
-  [ ] `Implement task output` - название задачи
-  [ ] `(Aug 25)` - вывод даты завершения, если задана
-  [ ] `Use fields: title, desc, done, dueDate` - вывод описания задачи, если задано. 

:::note
Обратите внимание на отступы и форматирование. Они должны соответствовать примеру. 
:::

:::tip
В выполнении задания вам пригодится техника [интерполяции строк](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/exploration/interpolated-strings) для формирования вывода и тип [DateTime](https://docs.microsoft.com/ru-ru/dotnet/api/system.datetime?view=netcore-3.1) для описание срока выполнения задачи. 
:::
