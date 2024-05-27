import { Component } from '@angular/core';

@Component({
  selector: 'app-hurz',
  standalone: true,
  imports: [],
  template: `
    Hallo Zusammen
    <h1>Moin</h1>
  `,
  styles: [
    `
      a {
        text-align: left;
        display: block;
        margin-bottom: 2rem;
      }

      .post__title,
      .post__desc {
        margin: 0;
      }
    `,
  ],
})
export default class HurzComponent {}
