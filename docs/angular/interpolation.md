---
title: Interpolation
---

https://youtu.be/6623paK146I

```html {2} title="app.component.html"
<h1>
  Welcome to {{title}}!
</h1>
```

```typescript title="app.component.ts"
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // highlight-next-line
  title = 'InterLink inCamp';
}
```
