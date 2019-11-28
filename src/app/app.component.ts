import { Component, ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  template: `
  <app-components-navbar></app-components-navbar>
  <div toastContainer></div>
  <router-outlet></router-outlet>
  <app-components-footer></app-components-footer>
  `
})
export class AppComponent {
  title = 'ready-event';

  @ViewChild(ToastContainerDirective, null) toastContainer: ToastContainerDirective;

  constructor(private toastrService: ToastrService) {}
  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }
}
