import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalAppService} from "../Global/global-app.service";
import {RoleUser} from "../../Model/Enum/role-user";
import {Agent} from "../../Model/Entity/agent";
import {User} from "../../Model/Entity/user";
import {Activate} from "../../Model/Entity/activate";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private globalAppService:GlobalAppService) { }

  private apiUrl = this.globalAppService.getApiUrl()+"User/";

  getAllUsersByRoleUser(roleUser:RoleUser){
    return this.http.get(this.apiUrl+"all/"+roleUser);
  }

  deleteUser(id: number,roleUser:RoleUser) {
    return this.http.delete(this.apiUrl+"delete/"+roleUser+"/"+id);
  }

  getUserById(id: number, roleUser: RoleUser) {
    return this.http.get(this.apiUrl+"user/"+roleUser+"/"+id);
  }

  saveUser(user: any, roleUser: RoleUser) {
    return this.http.put(this.apiUrl+"update/"+roleUser,user);
  }

  addUser(user: any, roleUser: RoleUser) {
    return this.http.post(this.apiUrl+"create/"+roleUser,user);
  }

  login(user : User) {
    return this.http.post(this.apiUrl+"login",user);
  }
  logout() {
    localStorage.removeItem('idUser');
    localStorage.removeItem('roleUser');
    localStorage.removeItem('email');
    window.location.href = '';
  }

  singUp(user: any) {
    return this.http.post(this.apiUrl+"signUp",user);
  }

  activate(activate: Activate) {
    return this.http.put(this.apiUrl+"activateAccount",activate);
  }

  sendCodeForgotPassword(email: string) {
    return this.http.get(this.apiUrl+"forgetPassword/"+email);
  }

  updatePassword(checkCode: {
    code: any;
    roleUser: any;
    email: any
  }, password: string) {
    return this.http.put(this.apiUrl+"forgetPassword/"+password,checkCode)
  }
}
