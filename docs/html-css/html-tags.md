---
title: HTML Tags
description: HTML – Hyper Text Markup Language.
---


https://youtu.be/QVMZiGPuv4M

HTML – це декларативна мова. Вона описує документ, яким він має бути. Його структуру та наповнення. Як будь-яка мова програмування, що складається з ключових слів та синтаксичних конструкцій, HTML має свій набір ключових слів\(tag\) та правил їх використання.  

Всі можливості HTML можна описати через теги, які розуміють браузери. Для зручності, їх можна умовно поділити на декілька груп. 

### Каталоги всіх тегів, згрупованні за призначенням

https://developer.mozilla.org/en-US/docs/Web/HTML/Element

https://www.w3schools.com/tags/ref_byfunc.asp

## Головні

| Тег | Опис |
| :--- | :--- |
| `div` | Виділяє блок контенту. Не несе смислового навантаження. |
| `a` | Посилання на іншу сторінку.  |
| `img` | Відображає картинку в документі |

Цих тегів вже достатньо для того, що б вирішити більшість задач розмітки сайту. Ось як могла б виглядати сторінка з описом програми нашого курсу:

```markup title="index.html"
<div><img src="incamp.png">InterLink inCamp</div>
<div>
  <div><a href="html-css">HTML/CSS</a></div>
  <div>Знайомство з інструментами розробника, …<div>
</div>
<div>
  <div><a href="javascript">JavaScript</a></div>
  <div>Знайомство з сучасним JavaScript…<div>
</div>
```

## Робота з текстом <a id="text"></a>

Структура HTML документу має бути зрозуміла 3-м сторонам:

* Відвідувачу сайту, що б краще сприймати інформацію
* Пошуковим ботам, що б виділяти логічні елементи та зв’язки
* Розробникам, що б спростити внесення змін в документ

Документ вище не має структурованого тексту.  Задати її нам допоможуть наступні теги:

| Тег | Опис |
| :--- | :--- |
| `h1..h6` | Заголовки |
| `p` | Параграф тексту |
| `em` | Логічний наголос на частині тексту |
| `strong` | Сильний наголос на частині тексту |

```markup
<h1><img src="incamp.png"> InterLink inCamp</h1>
<div>
  <h2><a href="html-css">HTML/CSS</a></h2>
  <p>Знайомство з інструментами розробника, …<p>
</div>
<div>
  <h2><a href="javascript">JavaScript</a></h2>
  <p>Знайомство з сучасним JavaScript…<p>
</div>
```

## Службові

```markup
<!DOCTYPE html>
<html lang="uk">
<head>
  <title>InterLink inCamp</title>
</head>
<body>
  <h1><img src="incamp.png"> InterLink inCamp</h1>
  <div>
    <h2><a href="html-css">HTML/CSS</a></h2>
    <p>Знайомство з інструментами розробника, …<p>
  </div>
  <div>
    <h2><a href="javascript">JavaScript</a></h2>
    <p>Знайомство з сучасним JavaScript…<p>
  </div>      
</body>
</html>
```

## Семантичні

Семантичні теги дозволяють описати логічну структуру документу. Мета використання така сама, як і при [роботі з текстом](html-tags.md#text). 

| Тег | Опис |
| :--- | :--- |
| `header` | Шапка сайту |
| `main` | Головний вміст сайту |
| `footer` | Підвал. Місце для _карти сайту_, копірайту та посилання на соціальні мережі |
| `section` | Блок контенту, логічно зв'язаного однієї темою |

```markup
<!DOCTYPE html>
<html lang="uk">
<head>
  <title>InterLink inCamp</title>
</head>
<body>
  <header>
    <h1><img src="incamp.png"> InterLink inCamp</h1>
  </header>
  <main>
    <section>
      <h2><a href="html-css">HTML/CSS</a></h2>
      <p>Знайомство з інструментами розробника, …<p>
    </section>
    <section>
      <h2><a href="javascript">JavaScript</a></h2>
      <p>Знайомство з сучасним JavaScript…<p>
    </section>      
  </main>
  <footer>
    Facebook: <a href="https://www.facebook.com/interlinkua">fb.com/interlinkua</a><br>
    Blog: <a href="https://blog.interlink-ua.com">blog.interlink-ua.com</a>
  </footer>
</body>
</html>
```
