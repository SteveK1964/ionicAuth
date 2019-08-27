import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
console.log('In logout.page.ts');
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {}

  logout(): void{
    this.userService.logOut().subscribe(
      (response: any) => {
        this.router.navigate(['/login']);
      }
    );
  }

}
