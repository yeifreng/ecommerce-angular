import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../interfaces/product-model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  productList: Iproduct[] = [];

  constructor(private _apiService:ProductService){ }

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data:Iproduct[]) =>{
      console.log(data);
      this.productList = data;
    })
  }

}
