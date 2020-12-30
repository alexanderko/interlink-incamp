---
title: CSS Intro
description: CSS – Cascading Style Sheets
---

HTML задає структуру та зміст сторінки. CSS описує зовнішній вигляд \(оформлення\) контенту. 

### Каскадність стилів

Каскадними стилі називаються то, що оформлення, описане для елементів на вищих рівнях, переймають на себе і дочірні елементи рівнями нижче.  Прилийте воду на верхній сходинці в під'їзді, і мокрими будуть всі сходи нижче. 

https://youtu.be/ubBIWC5dThI

### Підключення стилів

#### Inline

```markup
<body style="color: red;">Some page content</body>
```

https://youtu.be/pmIn4ysQvjY

#### Internal

```markup
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      color: red;
    }
  </style>
</head>
<body>
  Some page content
</body>
</html>
```

https://youtu.be/mFvC1VTX0JI

#### External

```markup title="index.html"
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  Some page content
</body>
</html>
```

```css  title="styles.css"
body {
  color: red;
}
```

https://youtu.be/Ntaqi-Em8dU

### Властивості \(properties\)

```css
color: red;
```

| Елемент синтаксису | Назва \(en\) | Опис  |
| :--- | :--- | :--- |
| `color` | property | Назва властивості |
| `:` | colon | Родільник між назвою на значенням властивості |
| `red` | value | Значення властивості |
| `;` | semicolon | Вказівник завершення опису однієї властивості |

Загальна структура CSS правила \(rule\) виглядає так:

```text
<selector> {
    <property>: <value>;
    <property>: <value>;
    <property>: <value>;
}
```

### Селектори \(selectors\)

CSS селектори описують до яких елементів мають бути застосовані вказані після них властивості. 3 самі поширені селектори: тег, id, клас.

#### Тег

```markup
<style>
  h1 {
    color: red;
  }
</style>
<h1>Teg selector</h1>
```

#### id

```markup
<style>
  #react {
    color: rgb(97, 218, 251);
    background-color: #282c34;
  }
</style>
<section id="react">
  <h2>React</h2>
  <p>A JavaScript library for building user interfaces.</p>
</secton>
```

#### Клас

```markup
<style>
  .hint-info {
    color: blue;
  }
</style>
<p class="hint-info">Class selector</p>
```

## Питання для самоперевірки

* [ ] If you don't set element property, what it would be? \(cascade, inheritance\)
* [ ] In what order CSS rules apply? \(priority\)
* [ ] How can you change appearance of an element without changing existing rules?
* [ ] Inline vs internal vs external CSS – what would you use?

