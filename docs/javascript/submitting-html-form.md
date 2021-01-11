---
title: Обработка отправки формы
description: Подходы и рекомендации в обработке отправки формы с помощью JavaScript
---

## 💻 Задание

Просмотреть видео ниже. После каждой под-темы ставить видео на паузу и повторять набранный лектором код. 

https://youtu.be/YseMHf5tjlE

## Финальная версия кода

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
    <form name="contact">
        <input type="text" name="firstName" placeholder="First name">
        <input type="text" name="lastName" placeholder="Last name">
        <input type="text" name="email" placeholder="Email">
        <button type="submit">Add</button>
    </form>

    <script type="text/javascript" src="contacts.js"></script>
</body>
</html> 
```

```javascript title="contacts.js"
class Contact {
    constructor(firstNameOrObject, lastName, email) {
        if (typeof firstNameOrObject === 'object') {
            Object.assign(this, firstNameOrObject);
        } else {
            this.firstName = firstNameOrObject;
            this.lastName = lastName;
            this.email = email;
        }
    }

    toString() {
        return `${this.firstName} ${this.lastName} <${this.email}>`;
    }
}

let contacts = [
    new Contact('Alex', 'Kotov', 'alexko@in6k.com'),
    new Contact('Bohdan', 'Kovalchuk', 'bodiako@in6k.com')
]

const contactListElement = document.getElementById('contacts')
function appendContact(contact) {
    const { firstName, lastName, email} = contact;
    const contactElement = document.createElement('p');
    contactElement.innerText = `${firstName} ${lastName}`;
    if (email && email.length) {
        contactElement.innerHTML += `<a href="mailto:${email}">&lt;${email}&gt;</a>`;
    }
    contactListElement.appendChild(contactElement);
}

contacts.forEach(appendContact);

const contactForm = document.forms['contact'];

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const contact = new Contact(Object.fromEntries(formData.entries()));
    contacts.push(contact);
    appendContact(contact);
    contactForm.reset();
}) 
```