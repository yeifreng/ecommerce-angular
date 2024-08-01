import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../interfaces/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'https://fakestoreapi.com/products';

  constructor(private _http: HttpClient) { }

  public getProducts(): Observable<Iproduct[]>{
    return this._http.get<Iproduct[]>(this.baseUrl);
  }


}
