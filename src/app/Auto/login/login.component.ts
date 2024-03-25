import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../Services/User/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Login: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private userService:UserService) { }


  loginSubmit(user:any){
    this.userService.login(user).subscribe((data:any)=>{
      if (data != null) {
        localStorage.setItem('idUser',data.id);
        localStorage.setItem('roleUser',data.roleUser);
        localStorage.setItem('email',data.email);
        if (data.roleUser == 'Admin') {
          window.location.href = '/AD/Agent';
        } else if (data.roleUser == 'Agent') {
          window.location.href = '/AG/Dashboard';
        } else if (data.roleUser == 'Societe') {
          window.location.href = '/SO/Dashboard';
        } else {
          window.location.href = '';
        }
      } else {
        alert('Email or Password is invalid')
      }
    })
  }

  login() {
    const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const email = this.Login.get('email')?.value;
    const password = this.Login.get('password')?.value;

    let emailErrorCheck = 0;
    let passwordErrorCheck = 0;

    if (email == '' || email == ' ' || !emailCheck.test(email)) {
      emailErrorCheck = 1
    }
    if (password == '' || password == ' ') {
      passwordErrorCheck = 1
    }
    if (emailErrorCheck == 1 && passwordErrorCheck == 0) {
      alert('Email is invalid')
    }
    if (passwordErrorCheck == 1 && emailErrorCheck == 0) {
      alert('Password is invalid')
    }
    if (emailErrorCheck == 1 && passwordErrorCheck == 1) {
      alert('Email and Password is invalid')
    }
    if (emailErrorCheck == 0 && passwordErrorCheck == 0) {
      this.loginSubmit(this.Login.value)
    }
  }
}
