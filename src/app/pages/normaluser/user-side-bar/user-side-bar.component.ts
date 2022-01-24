import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.scss']
})
export class UserSideBarComponent implements OnInit {

  categories:any=[]
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.getCategories();
  }

  getCategories(){


    this.categoryService.getCategories().subscribe(res=>{
      this.categories=res;
    },
    (error)=>{
      alert("Something went wrong");
    })
  }
}
