import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-components-navbar></app-components-navbar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'ready-event';
}
