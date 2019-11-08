import { Component } from "@angular/core";
import { readyUtils } from 'src/app/utils/utils';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  loading: boolean;

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

  constructor(private utils: readyUtils) {
    this.loading = false;
  }

  register() {
    this.clearErrors();
    this.loading = true;
    if (this.checkForm() && this.checkPass()) {
      alert('opa, tudo certo');
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
    console.log(this.errors);
  }
}
