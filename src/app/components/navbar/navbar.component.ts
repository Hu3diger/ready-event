import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-components-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  constructor(
    private router: Router,
    private toastr: ToastrService
  ){ }
  get token(){
    return localStorage.getItem('authToken');
  }
  get isLogged(){
    return this.token ? true : false;
  }

  logout(){
    localStorage.removeItem('authToken');
    this.toastr.success('Logout sucessfull');
    this.router.navigate(['/home']);
  }
}
