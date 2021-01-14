---
title: Компоненты
---

https://youtu.be/c4fD89wG-cc

:::info Изменения в коде
https://gitlab.in6k.com/meetup/angular-on-fire-chat/compare/day-2-bootstrap...day-2-components
:::

```html title="app.component.html"
<contact-list
  [contacts]="contacts"
  (select)="selectContact($event)">
</contact-list>
```

```typescript {4,10,11,15} title="contact-list.component.ts"
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  selectedContact: any;
  @Input() contacts;
  @Output() select = new EventEmitter();

  selectContact(contact) {
    this.selectedContact = contact;
    this.select.next(contact);
  }

  isSelected(contact): boolean {
    return this.selectedContact == contact;
  }
}
```

```html title="contact-list.component.html"
<h2>Contacts</h2>
<ul>
  <li
    *ngFor="let contact of contacts"
    (click)="selectContact(contact)"
    [class.selected]="isSelected(contact)">
    {{contact.name}}
  </li>
</ul>
```