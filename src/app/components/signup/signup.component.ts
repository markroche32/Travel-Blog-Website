import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model : any = {};
  uniqueUser: boolean ;
  users : User[];
  newUser : User;

  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit() {
    
    this.uniqueUser = true;
    this.signupService.getUsers().subscribe(
      users => this.users = users,
      error => console.log(error)
    );
  
  }

  submit() : void {

    this.users.forEach( user => {
      if(user.username == this.model.username || user.password == this.model.password){
        this.uniqueUser = false;
      }
    });

    //If Unique User => Save to database => !uniqueUser will display message
    if(this.uniqueUser){

      //this.convertToUser(this.model);

      this.signupService.saveUser(this.model).subscribe(
        newUser => { 
          this.newUser = newUser;
          localStorage.setItem('currentUser', JSON.stringify(newUser));
          this.router.navigate(['/index']);
        },
        error => console.log(error)
      );
    }
   
  }

  convertToUser (person : User) {

    console.log("Converted User = " + JSON.stringify(person));
    console.log("Converted User ID = " + JSON.stringify(person.id));

  }

}
