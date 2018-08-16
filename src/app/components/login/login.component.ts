import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any = {};
  user : User;
  loginFailed : boolean;

  constructor(private signupService: SignupService, private router: Router) { 
   
  }

  ngOnInit() {
    
    this.loginFailed = false;
  }

  login() {
 
    this.signupService.login(this.model.username, this.model.password)
    .subscribe(user => { this.user = user;
      
      //Login Success - Navigate to Homepage - Welcome User
      if(this.user.id){

        console.log("inside if this.user login");
        this.loginFailed = false;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/index']);
      }
      else{
        this.loginFailed = true;
        console.log("inside else this.user login");
      }
      
      console.log( "user = " + this.user.id);
      console.log( "loginFailed = " + this.loginFailed);
    });
  
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.loginFailed = false;

  }

}
