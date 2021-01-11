---
title: Работа с HTML внутри элемента
---

Для доступа к содержимому HTML элементов можно использовать свойство `innerHTML`. 

## 💻 Задание

Просмотреть видео ниже. После каждой под-темы ставить видео на паузу и повторять набранный лектором код. 

https://youtu.be/mCZpub9-qKI

```html title="contacts.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Intro</title>
    <style>
        #contacts p a {
            display: block;
            font-size: 75%;
        }
    </style>
</head>
<body>
    <h1>Contacts</h1>
    <div id="contacts"></div>
    <script>
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
        let contacts = [
            new Contact('Alex', 'Kotov', 'alexko@in6k.com'),
            new Contact('Alex 2', 'Kotov', 'alexko@in6k.com'),
            new Contact('Bohdan', 'Kovalchuk', 'bodiako@in6k.com'),
            new Contact('Bohdan 2', 'Kovalchuk', 'bodiako@in6k.com')
        ]
​
        const contactsElement = document.getElementById('contacts')
        function appendContact(contact) {
            const { fistName, lastName, email} = contact;
            contactsElement.innerHTML += `<p>${fistName} ${lastName} <a href="mailto:${email}">&lt;${email}&gt;</a></p>`;
        }
​
        contacts.forEach(appendContact);
​
    </script>
</body>
</html>
```