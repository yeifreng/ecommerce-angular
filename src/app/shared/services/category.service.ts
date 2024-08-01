import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl: string = 'https://fakestoreapi.com/products/categories'

  constructor(private _http: HttpClient) { }

  getCategories():Observable<string[]>{
    return this._http.get<string[]>(this.baseUrl);
  }


}
