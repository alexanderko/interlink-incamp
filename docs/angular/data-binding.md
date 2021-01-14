---
title: Data Binding
---

https://youtu.be/mWZswCh6wOI

:::info Изменения в коде
https://gitlab.in6k.com/meetup/angular-on-fire-chat/compare/day-1-app-title...day-1-data-binding
:::

```html title="app.component.html"
<ul>
  <li
    *ngFor="let contact of contacts"
    (click)="selectContact(contact)"
    [class.selected]="isSelected(contact)">
    {{contact.name}}
  </li>
</ul>

<div *ngIf="selectedContact">
  <h2>{{selectedContact.name}}</h2>
  <input
    type="text"
    [(ngModel)]="selectedContact.name">
</div>
```