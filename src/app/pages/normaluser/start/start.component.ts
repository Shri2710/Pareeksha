import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  qid:any;

  questions:any=[];

  timer:any;
  correctanswer:any=0;
  attempted:any=0;
  marksObtained=0;

  isSubmit=false;
  constructor(private active:ActivatedRoute,private questionService:QuestionService) { }

  ngOnInit(): void {

    this.qid=this.active.snapshot.params.qid;
    this.loadQuestionsForTest();

  }

  loadQuestionsForTest(){
    this.questionService.getQuestionsForQuizTest(this.qid).subscribe(res=>{
      this.questions=res;
      this.timer=this.questions.length * 2 * 60;
      if(this.timer > 0){
        this.startTimer();
      }
    },
    (e)=>{
      alert("Something went wrong");
    })
  }

  setAnswer(question:any,selectedOption:any){
     question.givenAnswer=selectedOption;
  }

  startTimer(){

    let t=setInterval(()=>{
       if(this.timer <=0 && !this.isSubmit){
          clearInterval();
          this.onSubmit();
       }else{
         this.timer--;
       }
    },1000);

    return;
  }
  onSubmit(){
    this.isSubmit=true;

    this.questionService.submitQuiz(this.questions).subscribe((res:any)=>{
       this.correctanswer=res.correct;
       this.attempted=res.attempted;
       this.marksObtained=res.marksGot;
       return;

    },
    error=>{
     
    });

    return;
  }

  getFormattedTime(){

    let mm = Math.floor(this.timer / 60);
    let sec = this.timer - mm*60;

    return `${mm}min : ${sec} sec`
  }

}
