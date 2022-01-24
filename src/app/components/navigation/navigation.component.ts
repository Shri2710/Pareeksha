import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn=false;
  user:any=null;
  constructor(public loginService:LoginService) { }
  ngOnInit(): void {
    this.isLoggedIn=this.loginService.isLoggedIn();
      this.user=this.loginService.getUser();
    this.loginService.loginStatsSub.asObservable().subscribe(data=>{
      this.isLoggedIn=this.loginService.isLoggedIn();
      this.user=this.loginService.getUser();
    })
  }

  onLogOutBtnClick(){

    this.loginService.logout();
    location.reload();
  }
}
