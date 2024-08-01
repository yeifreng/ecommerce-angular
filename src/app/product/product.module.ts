import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ProductPageComponent
  ]
})
export class ProductModule { }
