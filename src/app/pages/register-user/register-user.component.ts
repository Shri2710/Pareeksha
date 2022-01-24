import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }
  constructor(private userService:UserService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onRegisterFormSubmit(){
    
     this.userService.addUser(this.user).subscribe((res)=>{
       
        this.snackBar.open('Congrats you have registered Successfully','Close',{
          panelClass:['success'],
          duration:3000
        })
     },
     (error)=>{
       alert('failure')
     }
     )
  }

  onResetClick(){
     
  }
}
