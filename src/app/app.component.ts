import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>This is the title {{ title }}</p>
  <router-outlet></router-outlet>
  <p>This is the footer of the page</p>
  `
})
export class AppComponent {
  title = 'ready-event';
}
