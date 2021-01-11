---
title: Fetch API
description: Использование Fetch API для отправки асинхронных запросов
---

[Fetch API](https://learn.javascript.ru/fetch) позволяет отправлять асинхронные запросы на сервер. Результат выполнения функции — [Promise](https://learn.javascript.ru/promise), объект позволяющий указать обработчик (или цепочку обработчиков) ответа от сервера (а точнее результата асинхронной операции в общем случае). 

https://youtu.be/AeQJVL7k59o

## Изменения в коде

```javascript title="contacts.js"
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const contact = new Contact(Object.fromEntries(formData.entries()));
    // highlight-start
    createContact(contact)
        .then(appendContact, alert)
        .then(_ => contactForm.reset())
    // highlight-end
})

// highlight-next-line
const contactsEndpoint = 'http://localhost:3000/contacts';

// highlight-start
function createContact(contact) {
    return fetch(contactsEndpoint, {
        method: 'POST', 
        headers:  {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    .then(response => response.json())
}
// highlight-end

```
