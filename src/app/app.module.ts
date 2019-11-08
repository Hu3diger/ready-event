import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { InformationsComponent } from './pages/informations/informations.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { readyUtils } from './utils/utils';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    RegisterComponent,
    CategoriesComponent,
    InformationsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [readyUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }
