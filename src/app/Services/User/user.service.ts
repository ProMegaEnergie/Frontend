import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalAppService} from "../Global/global-app.service";
import {RoleUser} from "../../Model/Enum/role-user";
import {Agent} from "../../Model/Entity/agent";

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

  saveUser(agent: Agent, roleUser: RoleUser) {
    return this.http.put(this.apiUrl+"update/"+roleUser,agent);
  }

  addUser(agent: Agent, roleUser: RoleUser) {
    return this.http.post(this.apiUrl+"create/"+roleUser,agent);
  }
}
