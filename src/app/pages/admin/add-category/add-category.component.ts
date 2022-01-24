import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category:any={
     title:'',
     description:''
  }
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }

  onAddCategoryBtnClick(){
    this.categoryService.addCategory(this.category).subscribe((res:any)=>{
        
      alert("The category with title " + res.title + " added succesfully")
    },
    (error)=>{
      alert("Something went wrong");
    })
  }

}
