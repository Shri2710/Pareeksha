import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };
  constructor(private loginService: LoginService,private router:Router) {}

  ngOnInit(): void {}

  onLoginFormSubmit() {
    this.loginService.generateToken(this.loginData).subscribe(
      (res: any) => {
        this.loginService.login(res.token);
        this.getCurrentUser();
      },
      (error) => {
        alert('Failure');
      }
    );
  }

  getCurrentUser() {
    this.loginService.getCurrentUser().subscribe(
      (user: any) => {
        console.log(user);
        this.loginService.setUser(user);
        if(this.loginService.getRole() === "ADMIN"){
          this.router.navigate(['/admin']);
          this.loginService.loginStatsSub.next(true);
        }else{
          this.router.navigate(['/normal/0']);
          this.loginService.loginStatsSub.next(true);
        }
      },
      (error) => {
        alert('Something went wrong');
      }
    );
  }
}
