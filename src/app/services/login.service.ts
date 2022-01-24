import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

const baseUrl="http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatsSub=new Subject<boolean>();
  constructor(private httpClient:HttpClient,private router:Router) { }


  public getCurrentUser(){

    return this.httpClient.get(`${baseUrl}/current-user`);
  }

  public generateToken(loginData:any){

    return this.httpClient.post(`${baseUrl}/generate-token`,loginData);
  }


  public login(token:string){
   
      localStorage.setItem("token",token);

      return true;
  }

  public getToken() : any{

    const token=localStorage.getItem("token");

    if(token){
      return token;
    }
  }
  public isLoggedIn(){

    let token=localStorage.getItem("token");

    if(token == undefined || token == '' || token == null){
      return false;
    }else{
      return true;
    }
  }

  public logout(){

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }
  public setUser(user:any){

    localStorage.setItem("user",JSON.stringify(user));
  }

  public getUser(){

    let userStr=localStorage.getItem("user");

    if(userStr!==null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getRole(){

    let user:any=this.getUser();

    if(user!==null){
      return user.authorities[0].authority;
    }
  }

}
