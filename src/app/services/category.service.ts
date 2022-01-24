import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const baseUrl="http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }


  public getCategories(){
    return this.httpClient.get(`${baseUrl}/category/`);
  }

  public updateCategory(category:any){
    return this.httpClient.put(`${baseUrl}/category/`,category);
  }

  public getCategoryById(cid:number){
    return this.httpClient.get(`${baseUrl}/category/${cid}`);
  }

  public deleteCategory(cid:number){
   this.httpClient.delete(`${baseUrl}/category/${cid}`);
  }

  public addCategory(category:any){
     return this.httpClient.post(`${baseUrl}/category/`,category);
  }
}
