import { Component } from "@angular/core";
import { readyUtils } from 'src/app/utils/utils';
import { User } from 'src/app/model/User';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  loading: boolean;
  user: User;
  model = {
    username: null as string,
    email: null as string,
    password: null as string,
    cpassword: null as string
  }

  errors = {
    pass: false as boolean,
    email: false as boolean
  }

  constructor(
    private utils: readyUtils,
    private loginService: LoginService
  ) {
    this.loading = false;
    this.user = new User();
  }

  register() {
    this.clearErrors();
    this.loading = true;
    if (this.checkForm() && this.checkPass()) {
      this.user.email = this.model.email;
      this.user.username = this.model.username;
      this.loginService.register(this.user, this.model.password).then(result => {
        console.log(result);
      });
    }
  }

  checkPass(): boolean {
    if ((this.model.password == this.model.cpassword) &&
      !this.utils.isNull(this.model.cpassword) &&
      !this.utils.isNull(this.model.password)) {
      return true
    } else {
      this.errors.pass = true
      return false;
    }
  }

  checkForm(): boolean {
    if (!this.utils.isNull(this.model.email) && !this.utils.isNull(this.model.username) && this.model.email.includes("@")) {
      return true;
    } else {
      this.errors.email = true;
      return false;
    }
  }

  clearErrors() {
    for (let error in this.errors) {
      this.errors[error] = false;
    }
  }
}
