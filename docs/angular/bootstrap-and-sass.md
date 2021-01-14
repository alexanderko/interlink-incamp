---
title: Bootstrap и Sass
---

https://youtu.be/QKTCsz-jFYs

:::info Изменения в коде
https://gitlab.in6k.com/meetup/angular-on-fire-chat/compare/day-1-data-binding...day-2-bootstrap
:::

```scss title="app.component.scss"
@import '../../node_modules/bootstrap/scss/bootstrap';

:host {
  @include make-row();
}

nav {
  @extend .col-12;
  @extend .navbar;
  @extend .navbar-light;
  @extend .bg-light;
}

// ...

button {
  @extend .btn;
  @extend .btn-primary;
}

ul {
  @extend .list-group;
}

ul>li {
  @extend .list-group-item;
}
```