import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  loading: boolean;

  username: string;
  password: string;

  constructor(private router: Router) {
    this.loading = false;
  }

  login() {
    this.loading = true;

    console.log(this.username);
    console.log(this.password);

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(["/main"]);
    }, 400);
  }
}
