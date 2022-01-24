import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-pre-start',
  templateUrl: './pre-start.component.html',
  styleUrls: ['./pre-start.component.scss']
})
export class PreStartComponent implements OnInit {


  qId:any;
  quiz:any;
  constructor(private active:ActivatedRoute,private quizService:QuizService) { }

  ngOnInit(): void {

    this.qId=this.active.snapshot.params.qid;
    this.getQuizById();
  }

  getQuizById(){
    this.quizService.getQuizById(this.qId).subscribe(res=>{
       this.quiz=res;
    },
    (error)=>{
      alert("Sorry Something went wrong");
    })
  }

}
