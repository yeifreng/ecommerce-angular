import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product/pages/product-page/product-page.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { AboutComponent } from './shared/pages/about/about.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'productos', component: ProductPageComponent},
  {path:'contacto', component: ContactComponent},
  {path:'acerca', component: AboutComponent},
  {path:'**',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
