import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onClick() {
    //console.log(this.username);
    this.userService.register(this.username);
  }

}
