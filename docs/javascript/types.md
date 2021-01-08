---
title: Типы в JavaScript
sidebar_label: Типы
---

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
