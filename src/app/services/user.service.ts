import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const baseUrl="http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }


  public addUser(user:any){

    return this.httpClient.post(`${baseUrl}/user/`,user);
  }
}
