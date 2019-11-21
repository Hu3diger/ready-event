import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html'
})
export class LoginComponent{
  loading: boolean;

  constructor(
    private router: Router
  ){
    this.loading = false;
  }

  login(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false
      this.router.navigate(['/main']);
    }, 1000);
  }
}
