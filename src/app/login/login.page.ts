import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { UserService } from '../user.service';
import { User } from '../users';
console.log('In login.page.ts');

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user:User = new User();
  errorMessage: any;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {}

  response(response): void{
    if(response.success===false){
      this.errorMessage = 'Invalid Credentials';
    }

    if(response.success===true){
      window.location.href = '/';
    }
  }

  onSubmit(): void{
    this.userService.logIn(this.user).subscribe(
      (response) => {
        this.response(response);
      }
    );
  }
}