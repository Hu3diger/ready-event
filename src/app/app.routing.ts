import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InformationsComponent } from './pages/informations/informations.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { RouteGuard } from './guards/readonly.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'info',
    component: InformationsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'main',
    canActivate: [RouteGuard],
    component: MainComponent
  },
  {
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',

	},
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
