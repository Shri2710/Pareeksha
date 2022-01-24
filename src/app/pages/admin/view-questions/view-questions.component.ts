import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.scss']
})
export class ViewQuestionsComponent implements OnInit {

  questions:any=[];
  constructor(private activatedRoute:ActivatedRoute,private questionService:QuestionService) { }

  qid:any;
  qtitle:any;
  ngOnInit(): void {

    this.qid=this.activatedRoute.snapshot.params['qid'];
    this.qtitle=this.activatedRoute.snapshot.params['title'];
    this.getQuestions();
  }

  getQuestions(){
    this.questionService.getQuestionForQuiz(this.qid).subscribe(res=>{
      this.questions=res;

      console.log(this.questions);
    },(error)=>{
      alert('Something went wrong while fetching your Info')
    })
  }

  onDeleteClick(question:any){
    this.questionService.deleteQuestion(question.quesId).subscribe(()=>{
      location.reload();
    })
  }
}
