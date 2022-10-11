import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [
    `
      div {
        padding: 2em;
      }
    `,
  ],
  template: '<div><ordered-dates></ordered-dates></div>',
})
export class AppComponent {}
