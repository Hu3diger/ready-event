import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from 'src/app/services/login.service';
import { readyUtils } from 'src/app/utils/utils';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-login-page",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  loading: boolean;

  username: string;
  password: string;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService,
    private utils: readyUtils
  ) {
    this.loading = false;
  }

  login() {
    this.loading = true;

    if(!this.utils.isNull(this.username) && !this.utils.isNull(this.password)){
      this.loginService.login(this.username, this.password).then((result: any) => {
        if(result.signin && result.signin.token){
          localStorage.setItem('authToken', result.signin.token);
          this.toastr.success('Welcome ' + result.signin.user.username);
          this.loading = false;
          this.router.navigate(['/main'])
        }
      })
    }
  }
}
