import {Component, OnInit} from '@angular/core';
import {RoleUser} from "../../Model/Enum/role-user";

@Component({
  selector: 'app-navbar-societe',
  templateUrl: './navbar-societe.component.html',
  styleUrls: ['./navbar-societe.component.css']
})
export class NavbarSocieteComponent implements OnInit{
  roleUser : RoleUser = localStorage.getItem('roleUser') as RoleUser;
  //roleUser : RoleUser = RoleUser.Societe

  ngOnInit() {
    if (this.roleUser == RoleUser.Admin) {
      window.location.href = '/AD/Agent';
    } else if (this.roleUser == RoleUser.Agent) {
      window.location.href = '/AG/Dashboard';
    } else if (this.roleUser == RoleUser.Client) {
      window.location.href = '/';
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
