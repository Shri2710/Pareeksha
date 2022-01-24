import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {

  categories:any=[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.getAllCategories();
  }

  getAllCategories(){

    this.categoryService.getCategories().subscribe((res)=>{
      this.categories=res;
    },
    (error)=>{
       alert('Something went wrong');
    })
  }

}
