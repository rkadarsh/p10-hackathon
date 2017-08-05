import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../providers/login.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
	
  emailFormControl = ''
  password = '';

  constructor(private loginService:LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    let obj = {
      email: this.emailFormControl,
      password: this.password
    }
    this.loginService.login(obj)
      .then(data => {
        if(_.isEmpty(data) == false){
          this.loginService.setEmployee(data);
          this.router.navigate(['project']);
        }
      });
  }

}
