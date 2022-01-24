import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  qId:any;
  qtitle:any;
  constructor(private activatedRoute:ActivatedRoute,
              private questionService:QuestionService,
              private router:Router) { }

  question:any={
    quiz:{
      
    },

    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    image:'defauld.png'
  }
  ngOnInit(): void {

    this.qId=this.activatedRoute.snapshot.params.qid;
    this.qtitle=this.activatedRoute.snapshot.params.title;
    this.question.quiz.qid=this.qId;
  }

  onAddQuestionBtnClick(){
     this.questionService.addQuestion(this.question).subscribe(res=>{
        this.router.navigate(['/admin/quizzes'])
     },
     (error)=>{
       alert("Failure")
     })
  }

}
