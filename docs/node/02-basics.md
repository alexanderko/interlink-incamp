---
id: basics
title: Основы
sidebar_label: 💻 Основы
description: Набор материалов по изучению основ JavaScript и Node.js
---

## Types

Просмотреть видео ниже. После каждой под-темы ставить видео на паузу и повторять набранный лектором код. 

https://youtu.be/z1M17uH_9jI

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Intro</title>
</head>
<body>
    <script>
        let alex;
​
        class Contact {
            constructor(fistNameOrObject, lastName, email) {
                if (typeof fistNameOrObject === 'object') {
                    Object.assign(this, fistNameOrObject);
                } else {
                    this.fistName = fistNameOrObject;
                    this.lastName = lastName;
                    this.email = email;
                }
            }
​
            toString() {
                return `${this.fistName} ${this.lastName} <${this.email}>`;
            }
        }
​
        alex = new Contact('Alex', 'Kotov', 'alexko@in6k.com');
        console.log('in main', '' + alex);
​
        let vladik = new Contact({
            fistName: 'Vladik', 
            lastName: 'Nikolenko',
            email: 'vladik@in6k.com',
        });
        console.log('in main', '' + vladik);
​
        let colors = { red: '#ff0000', blank: '#000000', white: '#ffffff' };
        for (let name in colors) {
            console.log(name + ' has code ' + colors[name].toUpperCase());
        }
    </script>
</body>
</html>
```

## var vs let vs const

https://www.youtube.com/watch?v=ayt1rzJKaPc&list=PLNih7cQiUOFvHUs2RAw1CpP3SEBYS41og&index=2&t=4217s

## Branches and loops

- [ ] 💻 Функция плюаризации слова. Сделать для всех случаев: 0, 2-4, 5-10, 11-19, 20-99, 100 и больше
- [ ] 💻 Функция подсчета суммы в диапазоне целых чисел
- [ ] 💻 Функция подсчета факториала до заданного элемента
