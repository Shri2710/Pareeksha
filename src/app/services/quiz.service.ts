import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const baseUrl="http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private httpClient:HttpClient) { }


  public getQuizzes(){
    return this.httpClient.get(`${baseUrl}/quiz/`);
  }

  public updateQuiz(quiz:any){
    return this.httpClient.put(`${baseUrl}/quiz/`,quiz);
  }

  public getQuizById(qid:number){
    return this.httpClient.get(`${baseUrl}/quiz/${qid}`);
  }

  public deleteQuiz(qid:number){
   return this.httpClient.delete(`${baseUrl}/quiz/${qid}`);
  }

  public addQuiz(quiz:any){
     return this.httpClient.post(`${baseUrl}/quiz/`,quiz);
  }

  public getQuizByCategory(cid:any){
    return this.httpClient.get(`${baseUrl}/quiz/category/${cid}`);
  }

  public getQuizActiveByCategory(cid:any){
    return this.httpClient.get(`${baseUrl}/quiz/category/active/${cid}`);
  }

  public getQuizActive(){
    return this.httpClient.get(`${baseUrl}/quiz/active`);
  }
}
