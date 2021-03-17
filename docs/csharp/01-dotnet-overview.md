---
id: dotnet-overview
title: .NET Core Overview
---

## Key features

.NET Core - платформа розробки від MicroSoft. Ключові особливості:

* відкритий початковий код
* крос-платформена \(Windows, macOS, Linux\)
* для створення Desktop та Server-side додатків

## Install

1. Звантажити дистрибутив для вашої ОС за посиланням [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)
2. Запустити інсталлер 
3. Проклікати кнопку **Continue**
4. Перевірити встановлену версію виконавши команду `dotnet` в терміналі

:::caution Terminal
Разработчик обязательно должен владеть минимальными навыками работы с терминалом. Научитесь базовм командам в разделе [Terminal](../terminal.md). 
:::

## Project templates

Список всех шаблонов можно просмотреть выполнив команду `dotnet new --list`. 

### Console app

Создаем новое консольное приложение в папке _hello-world_   
`dotnet new console -o hello-world`

Переходим в папку проекта `сd hello-world`. 

:::tip Terminal
Для быстрого повторения последнего аргумента предыдущей команды в терминале используем комбинацию `Ctrl` + `.`.
:::

Запускаем приложение `dotnet run` 

