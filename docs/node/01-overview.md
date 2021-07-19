---
id: overview
title: Node.js Overview
---

## Key features

Node.js середовище виконання JavaScript на сервері.

* відкритий початковий код
* крос-платформена \(Windows, macOS, Linux\)
* асинхронна та керована подіями
* для автоматизації розробки для сборки фронтенду, створення Server-side та Desktop ([Electron](https://www.electronjs.org/)) додатків

[Introduction](https://nodejs.org/en/about/)

## Environment setup

### Install

1. Звантажити дистрибутив для вашої ОС за посиланням [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. Запустити інсталлер 
3. Проклікати кнопку **Continue**
4. Перевірити встановлену версію виконавши команду `node -v` в терміналі

... або встановити через [менеджер пакетів](https://nodejs.org/en/download/package-manager/)

:::caution Terminal
Разработчик обязательно должен владеть минимальными навыками работы с терминалом. Научитесь базовм командам в разделе [Terminal](../terminal.md). 
:::

### Console app

Создаем новое консольное приложение `echo "console.log('hello world')" > hello-world.js`

:::tip Terminal
Для быстрого повторения последнего аргумента предыдущей команды в терминале используем комбинацию `Ctrl` + `.`.
:::

Запускаем приложение `node hello-world.js`
