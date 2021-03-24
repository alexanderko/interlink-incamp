---
id: dotnet-overview
title: .NET Core Overview
---

## Key features

.NET Core - платформа розробки від MicroSoft. Ключові особливості:

* відкритий початковий код
* крос-платформена \(Windows, macOS, Linux\)
* для створення Desktop та Server-side додатків

[Introduction to .NET](https://docs.microsoft.com/en-us/dotnet/core/introduction)

## Environment setup

https://youtu.be/rzj06DFjDAc

- [0:03:00](https://www.youtube.com/watch?v=rzj06DFjDAc&t=180s) Установка SDK
- [0:06:30](https://www.youtube.com/watch?v=rzj06DFjDAc&t=390s) Запуск и команды терминала
- [0:09:56](https://www.youtube.com/watch?v=rzj06DFjDAc&t=596s) Создание и запуск проекта через терминал
- [0:16:00](https://www.youtube.com/watch?v=rzj06DFjDAc&t=960s) Репозиторий в Git
- [0:30:00](https://www.youtube.com/watch?v=rzj06DFjDAc&t=1800s) От печатной машинки к терминалам
- [0:45:00](https://www.youtube.com/watch?v=rzj06DFjDAc&t=2700s) Visual Studio Code, OmniSharp, Debugger
- [1:10:20](https://www.youtube.com/watch?v=rzj06DFjDAc&t=4220s) Назад в терминал к Git
- [1:21:30](https://www.youtube.com/watch?v=rzj06DFjDAc&t=4890s) Push to GitHub repo
- [1:26:35](https://www.youtube.com/watch?v=rzj06DFjDAc&t=5195s) Саша, онлайн формат и орг вопросы

### Install

1. Звантажити дистрибутив для вашої ОС за посиланням [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)
2. Запустити інсталлер 
3. Проклікати кнопку **Continue**
4. Перевірити встановлену версію виконавши команду `dotnet` в терміналі

:::caution Terminal
Разработчик обязательно должен владеть минимальными навыками работы с терминалом. Научитесь базовм командам в разделе [Terminal](../terminal.md). 
:::

### Project templates

Список всех шаблонов можно просмотреть выполнив команду `dotnet new --list`. 

### Console app

Создаем новое консольное приложение в папке _hello-world_   
`dotnet new console -o hello-world`

Переходим в папку проекта `сd hello-world`. 

:::tip Terminal
Для быстрого повторения последнего аргумента предыдущей команды в терминале используем комбинацию `Ctrl` + `.`.
:::

Запускаем приложение `dotnet run` 
