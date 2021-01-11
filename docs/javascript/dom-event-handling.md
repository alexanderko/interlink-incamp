---
title: Обработка событий DOM
description: Разбор разных способов обработки событий DOM, всплытия и отмены поведения по умолчанию. 
---


## 💻 Задание

Просмотреть видео ниже. После каждой под-темы ставить видео на паузу и повторять набранный лектором код. 

https://youtu.be/_qhKkqq9YZw

## Финальная версия кода

```html title="clock.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock</title>
    <style>
        p {
            font-family: monospace;
            font-size: 48px;
            font-weight: bold;
        }
        em {
            font-size: 150%;
            font-style: normal;
        }
        li {
            font-size: 2rem;
            cursor: pointer;
        }
        li:hover {
            background-color: lightgrey;
        }
        div {
            padding-bottom: 30px;
            background-color: aliceblue;
        }
    </style>
</head>
<body>
    <h1>Clock</h1>
    <p id="clock">16<em>:</em>33<em>:</em>59</p>

    <ol id="log"></ol>
    <button onclick="logTime()">Log time</button>

    <div onclick="console.log('click', event.target, this)">
        <p onclick="event.stopPropagation(); console.log('prevent')">
            <span onclick="console.log('span', this)">
                <a 
                target="_blank" 
                href="clock.html" 
                onclick="console.log('link'); event.preventDefault()"
                >New tab</a>
            </span>
        </p>
        <button onclick="console.log('log button', this)">Log event</button>
    </div>

    <script type="text/javascript" src="clock.js"></script>
</body>
</html>
```

```javascript title="clock.js"
"use strict";

function getCurrentTime() {
    let now = new Date();
    let time = now.toTimeString().split(' ')[0];
    return time;
}

let clock = document.getElementById('clock');

function updateClock() {
    clock.innerText = getCurrentTime();
}

updateClock();

setInterval(updateClock, 1000);

function removeLogItem(event) {
    this.remove();
}

let logElement = document.getElementById('log');

logElement.addEventListener('click', (event) => {
    console.log('remove');
    const target = event.target;
    if (target.tagName === 'LI') {
        target.remove();
    }
})

let log = (event) => {
    console.log('second');
};
logElement.addEventListener('click', log)

setTimeout(() => { logElement.removeEventListener('click', log); console.log('removed') }, 5000);

function logTime() {
    // let dateItem = document.createElement('li');
    // dateItem.textContent = getCurrentTime();
    // dateItem.onclick = removeLogItem;
    // logElement.appendChild(dateItem);

    logElement.innerHTML += `<li>${getCurrentTime()}</li>`;
} 
```