import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/User/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {RoleUser} from "../../Model/Enum/role-user";
import {Client} from "../../Model/Entity/client";

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent implements OnInit {
  constructor(private userService:UserService) { }
  ngOnInit() {
    this.getAllClients();
  }

  formEditClient: FormGroup = new FormGroup({
    id: new FormControl(0),
    email: new FormControl(''),
    password: new FormControl(''),
    prenom: new FormControl(''),
    nom: new FormControl('')
  });

  formAddClient: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    prenom: new FormControl(''),
    nom: new FormControl('')
  });

  clients:Array<Client> = []
  //@ts-ignore
  client: Client = {};
  getAllClients(){
    this.userService.getAllUsersByRoleUser(RoleUser.Client).subscribe((data:any)=>{
      this.clients = data;
      console.log(data)
    })
  }

  editClient(client: Client) {
    const editeClient = document.getElementById('editeClient');
    this.formEditClient = new FormGroup({
      id: new FormControl(client.id),
      email: new FormControl(client.email),
      password: new FormControl(client.password),
      prenom: new FormControl(client.prenom),
      nom: new FormControl(client.nom)
    });
    //@ts-ignore
    editeClient.setAttribute('style', 'display: block !important');
  }
  updateClient() {
    this.hideForm();
    this.userService.saveUser(this.formEditClient.value,RoleUser.Client).subscribe((data:any)=>{
      this.getAllClients();
    })
  }

  hideForm() {
    const editeClient = document.getElementById('editeClient');
    //@ts-ignore
    editeClient.setAttribute('style', 'display: none !important');
    const addClient = document.getElementById('addClient');
    //@ts-ignore
    addClient.setAttribute('style', 'display: none !important');
  }

  deleteClient(client: Client) {
    this.userService.deleteUser(client.id,RoleUser.Client).subscribe((data:any)=>{
      this.getAllClients();
    })
  }

  addClient() {
    const addClient = document.getElementById('addClient');
    //@ts-ignore
    addClient.setAttribute('style', 'display: block !important');
  }

  AddSaveClient() {
    this.hideForm();
    this.userService.addUser(this.formAddClient.value,RoleUser.Client).subscribe((data:any)=>{
      this.getAllClients();
    })
  }
}
