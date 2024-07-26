import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    NavbarComponent,
    MainPageComponent
  ]
})
export class SharedModule { }
