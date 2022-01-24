import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.scss']
})
export class UpdateQuizComponent implements OnInit {

  color='primary'
  qId:any=0;
  quiz:any;
  categories:any=[];
  Select="Cool";
  constructor(private activatedRoute:ActivatedRoute,
              private quizService:QuizService,
              private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.qId=this.activatedRoute.snapshot.params.qid;

    this.getQuizById(this.qId);
    this.getCategories();
  }

  onSaveQuizBtnClick(){
    this.quizService.updateQuiz(this.quiz).subscribe(res=>{
      alert("Successfully Updated");
    },
    (error)=>{
      alert("Error occured while updating the you request");
    })
  }
  getQuizById(qid:any){
   this.quizService.getQuizById(qid).subscribe(res=>{
     this.quiz=res;
   },
   (error)=>{
     alert("Some thing went wrong");
   })
  }

  onCategorySelect(event:any){
    this.quiz.category.cid=event.value;
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((res)=>{
      this.categories=res;
    },
    (error)=>{
      alert('Something went wrong while fetching category details');
    })
  }

}
