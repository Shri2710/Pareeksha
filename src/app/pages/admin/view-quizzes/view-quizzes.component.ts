import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.scss']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any=[];
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {

    this.getQuizzes();
  }


  getQuizzes(){

    this.quizService.getQuizzes().subscribe((res)=>{
      console.log(res);
      this.quizzes=res;
    },
    (err)=>{
      alert("Something went wrong");
    })
  }

  onDeleteBtnClick(qid:any){
    
      this.quizService.deleteQuiz(qid).subscribe(()=>{
        alert('Deleted Successfully');
        location.reload();
      },
      (error)=>{
        alert('Something went wrong')
      })
  }
}
