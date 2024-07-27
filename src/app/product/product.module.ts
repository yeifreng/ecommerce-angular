import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    ReactiveFormsModule
  ],
  exports:[
    ProductPageComponent
  ]
})
export class ProductModule { }
