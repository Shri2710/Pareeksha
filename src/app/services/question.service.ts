import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl="http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) { }

  public getQuestions(){
    return this.httpClient.get(`${baseUrl}/question/`);
  }

  public addQuestion(question:any){
    return this.httpClient.post(`${baseUrl}/question/`,question);
  }

  public updateQuestion(question:any){
     return this.httpClient.put(`${baseUrl}/question`,question);
  }

  public getQuestionForQuiz(qid:any){
    return this.httpClient.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  public getQuestionsForQuizTest(qid:any){
    return this.httpClient.get(`${baseUrl}/question/quiz/${qid}`);
  }

  public deleteQuestion(qid:any){
    return this.httpClient.delete(`${baseUrl}/question/${qid}`);
  }

  public submitQuiz(questions:any){

    return this.httpClient.post(`${baseUrl}/question/eval-quiz`,questions);
  }
}
