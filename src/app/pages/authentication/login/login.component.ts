import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html'
})
export class LoginComponent{
  loading: boolean;

  constructor(){
    this.loading = false;
  }

  login(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }
}
