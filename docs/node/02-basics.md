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

## Debugging 

https://code.visualstudio.com/docs/nodejs/nodejs-debugging

## Branches and loops

- [ ] 💻 Функция плюаризации слова. Сделать для всех случаев: 0, 2-4, 5-10, 11-19, 20-99, 100 и больше
- [ ] 💻 Функция подсчета суммы в диапазоне целых чисел
- [ ] 💻 Функция подсчета факториала до заданного элемента

## Typical issues

* no `return` `fn sum(a, b) { return a + b; }` command query separation principle
* global variables `var result = ''; fn(s) { result += s;}`
* extra code `return age >= 18 ? true : false;`
* big complex `if`
```javascript
if(count === 0 ||  count <=20 && count >= 5 || count % 10 === 0 || count % 10 <=19 && count % 10 >= 5 || count % 100 == 20){
    return count + ' ' + many;
}
```
* code formatting
```javascript
function plural(count, one, few, many) {
    if(count%10 == 1 && count%100 != 11){
				return (count+" "+one);
			}else if (count%100 == 11 || count%10 === 0  || 5<=count%10 && count%10<=9){
				return(count+" "+many);
			}else{
				return(count+" "+few);
			}
}
```
* code duplication
```javascript
    if (11 <= count && count <= 14) return count +' ' + many;
    ----11---------count---------19------------->
    
    if (count === 11) 
    if (count === 12) return count +' ' + many;
    if (count === 13) return count +' ' + many;
    if (count === 14) return count +' ' + many;
```
* naming `dob`, `suma`: better to use `result`
* "рычащие" название переменных
```javascript
let newarr =  [...arr]
let words = newarr.slice(1, 4)
```
