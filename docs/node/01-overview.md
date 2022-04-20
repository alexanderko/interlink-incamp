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

**[Introduction and a lot more!](https://nodejs.dev/learn)**

:::tip Туториалы
Обязательно перейдите по [ссылке](https://nodejs.dev/learn) выше - там много полезных туториалов, которые помогут в выполнении последующих задач. 
:::

## Environment setup

### Install

https://youtu.be/wVRxKudKi3g

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

## VSCode

https://youtu.be/z1yiMy7-qo0

## Using nodemon
`nodemon` - это инструмент, который помогает разрабатывать приложения на основе node.js путем автоматического перезапуска приложения node при обнаружении изменений файлов в каталоге.

**Установка / использование:**

* `npm install -g nodemon` - установить глобально.
* `npm install --save-dev nodemon` - установить как зависимость разработки.
* `nodemon [your node app]` - пример использования: `nodemon server.js`

**Исправление ошибок:**

При использовании **nodemon** на ОС Linux, со временем может появиться ошибка: 
```
ERROR: "Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch..."
```
Она возникает когда ваш проект достигает лимита файловых наблюдателей вашей системы.

Для исправления данной проблемы выполните следующие команды:
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
sudo sysctl --system
```
