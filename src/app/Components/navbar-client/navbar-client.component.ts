import {Component, OnInit} from '@angular/core';
import {RoleUser} from "../../Model/Enum/role-user";

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit{
  idUser: any = localStorage.getItem('idUser');
  roleUser : RoleUser = localStorage.getItem('roleUser') as RoleUser;
  //idUser: any = 0;
  //roleUser : RoleUser = RoleUser.Admin

  ngOnInit() {
    if (this.roleUser == RoleUser.Admin) {
      window.location.href = '/AD/Agent';
    } else if (this.roleUser == RoleUser.Agent) {
      window.location.href = '/AG/Dashboard';
    } else if (this.roleUser == RoleUser.Societe) {
      window.location.href = '/SO/Dashboard';
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
