import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../Services/User/user.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private userService:UserService) {
  }

  ForgotPassword: FormGroup =new FormGroup({
    email: new FormControl(''),
    code: new FormControl(''),
    roleUser: new FormControl(''),
    password:new FormControl('')
  })

  forgotPassword() {
    const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const email = this.ForgotPassword.get('email')?.value;

    if (email == '' || email == ' ' || !emailCheck.test(email)) {
      alert('Email is invalid')
    } else {
      this.userService.sendCodeForgotPassword(email).subscribe(roleUser=>{
        localStorage.setItem('emailForgetPassword',this.ForgotPassword.get('email')?.value)
        localStorage.setItem('roleUserForgotPassword',<string>roleUser)

        const formForgotPassword = document.getElementById('formForgotPassword')
        const confirmCode = document.getElementById('confirmCode')
        formForgotPassword?.setAttribute('style','display:none !important')
        confirmCode?.setAttribute('style','display:block !important')
      })
    }
  }
  confirmCode(){
    this.ForgotPassword =new FormGroup({
      email: new FormControl(localStorage.getItem('emailForgetPassword')),
      roleUser: new FormControl(localStorage.getItem('roleUserForgotPassword')),
      code: new FormControl(this.ForgotPassword.get('code')?.value),
      password: new FormControl(this.ForgotPassword.get('password')?.value)
    })

    const checkCode = {
      email : this.ForgotPassword.get('email')?.value,
      code : this.ForgotPassword.get('code')?.value,
      roleUser : this.ForgotPassword.get('roleUser')?.value
    }

    this.userService.updatePassword(checkCode,this.ForgotPassword.get('password')?.value).subscribe(data=>{
      if (data){
        localStorage.removeItem('emailForgetPassword')
        localStorage.removeItem('roleUserForgotPassword')
        window.location.href = "/User/login"
      }else {
        alert("Code in Valid")
      }
    })
  }
}
