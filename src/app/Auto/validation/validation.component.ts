import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../Services/User/user.service";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {

  constructor(private userService : UserService) { }

  Activate: FormGroup = new FormGroup({
    code: new FormControl(''),
    email: new FormControl(''),
    roleUser: new FormControl('')
  })

  activate() {
    this.Activate = new FormGroup({
      code: new FormControl(this.Activate.get('code')?.value),
      email: new FormControl(localStorage.getItem('email')),
      roleUser: new FormControl(localStorage.getItem('roleUser'))
    })
    this.userService.activate(this.Activate.value).subscribe((data:any)=>{
      if (data){
        alert('Account activated')
        window.location.href = '/User/login'
      } else {
        alert('Code is invalid')
      }
    })
  }
}
