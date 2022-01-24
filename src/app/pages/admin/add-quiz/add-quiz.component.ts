import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {

  color: ThemePalette = 'primary';
  quiz:any={
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: false,
    category: {
        cid: 38,
    }
}

categories:any=[];
  constructor(private categoryService:CategoryService,private quizService:QuizService) { }

  ngOnInit(): void {
     this.categoryService.getCategories().subscribe((res)=>{
       this.categories=res;
     },
     (error)=>{
       alert("Error while fetching category details")
     })
  
  }

  onAddQuizBtnClick(){
    this.quizService.addQuiz(this.quiz).subscribe((res)=>{
       
        alert("Quiz added successfully");
    },
    (error)=>{
      alert("Something went wrong")
    })
  }

  onCategorySelect(event:any){
    this.quiz.category.cid=event.value;
  }

}
