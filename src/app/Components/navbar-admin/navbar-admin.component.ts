import {Component, OnInit} from '@angular/core';
import {RoleUser} from "../../Model/Enum/role-user";

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit{
  roleUser : RoleUser = localStorage.getItem('roleUser') as RoleUser;
  //roleUser : RoleUser = RoleUser.Admin

  ngOnInit() {
    if (this.roleUser == RoleUser.Agent) {
      window.location.href = '/AG/Dashboard';
    } else if (this.roleUser == RoleUser.Societe) {
      window.location.href = '/SO/Dashboard';
    } else if (this.roleUser == RoleUser.Client || this.roleUser == null){
      window.location.href = '';
    }
  }
  showNav() {
    const navbarDefault = document.getElementById('navbar-default');
    //@ts-ignore
    const className = navbarDefault.getAttribute('class');
    if (className == 'hidden w-full md:block md:w-auto'){
      //@ts-ignore
      navbarDefault.setAttribute('class', 'w-full md:block md:w-auto')
    } else  {
      //@ts-ignore
      navbarDefault.setAttribute('class', 'hidden w-full md:block md:w-auto')
    }
  }
}
