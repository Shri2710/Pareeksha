import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.scss']
})
export class LoadQuizComponent implements OnInit {

  catid:any;
  quizzes:any=[];
  constructor(private active:ActivatedRoute,private quizService:QuizService) { }
  
  ngOnInit(): void {

     this.active.params.subscribe((param)=>{
      this.catid=param.catid;
     
      if(parseInt(this.catid) === 0 ){
         this.getAllQuizes();
      }else{
         this.quizzes=[];
         this.getQuizByCategory(this.catid);
      }
     })
  }

  getQuizByCategory(cid:any){
    this.quizService.getQuizActiveByCategory(cid).subscribe(res=>{
      this.quizzes=res;
    },
    (error)=>{
      alert("Something went wrong");
    })
  }
  getAllQuizes(){
     this.quizService.getQuizActive().subscribe(res=>{
       this.quizzes=res;
     },
     (error)=>{
       alert('Something went wrong');
     })
  }

}
