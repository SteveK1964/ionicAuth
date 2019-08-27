import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../users';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user:User = new User();
  errors: any = {};

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {}

  response(response): void{
    console.log('In register page in response');
    if(response.success==false){
      console.log(response.errors);
      
      if( response.errors.name == 'MissingUsernameError' ){
        this.errors.username = 'Please enter a username';
      }

      if( response.errors.name == 'UserExistsError' ){
        this.errors.username = 'A user with the given username is already registered';
      }

      if( response.errors.name == 'MissingPasswordError' ){
        this.errors.password = 'Please enter a password';
      }

      if( response.errors.errors.email ){
        this.errors.email = response.errors.errors.email.message;
      }
}

    if(response.success===true){
      this.router.navigate(['/login']);
    }
  }

  onSubmit(): void{
    this.userService.register(this.user).subscribe(
      (response) => {
        this.response(response);
      }
    );
  }

}
