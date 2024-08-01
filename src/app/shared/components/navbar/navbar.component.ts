import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

 categoryList:string[] = [];

  constructor(private _categoryService: CategoryService){
    this._categoryService.getCategories().subscribe((data:string[])=>{
      this.categoryList = data;
    })
  }

}
