import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    //console.log(this.username);
    this.userService.register(this.username).then(_ => this.router.navigateByUrl('app'));
  }

}
