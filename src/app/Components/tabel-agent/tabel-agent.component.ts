import {Component, OnInit} from '@angular/core';
import {RoleUser} from "../../Model/Enum/role-user";
import {UserService} from "../../Services/User/user.service";
import {Agent} from "../../Model/Entity/agent";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tabel-user',
  templateUrl: './tabel-agent.component.html',
  styleUrls: ['./tabel-agent.component.css']
})
export class TabelAgentComponent implements OnInit {
  constructor(private userService:UserService) { }
  ngOnInit() {
    this.getAllAgents();
  }

  formEditAgent: FormGroup = new FormGroup({
    id: new FormControl(0),
    email: new FormControl(''),
    password: new FormControl(''),
    prenom: new FormControl(''),
    nom: new FormControl('')
  });

  formAddAgent: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    prenom: new FormControl(''),
    nom: new FormControl('')
  });

  agents:Array<Agent> = []
  //@ts-ignore
  agent: Agent = {};
  getAllAgents(){
    this.userService.getAllUsersByRoleUser(RoleUser.Agent).subscribe((data:any)=>{
      this.agents = data;
      console.log(data)
    })
  }

  editAgent(agent: Agent) {
    const editeAgent = document.getElementById('editeAgent');
    this.formEditAgent = new FormGroup({
      id: new FormControl(agent.id),
      email: new FormControl(agent.email),
      password: new FormControl(agent.password),
      prenom: new FormControl(agent.prenom),
      nom: new FormControl(agent.nom)
    });
    //@ts-ignore
    editeAgent.setAttribute('style', 'display: block !important');
  }
  updateAgent() {
    this.hideForm();
    this.userService.saveUser(this.formEditAgent.value,RoleUser.Agent).subscribe((data:any)=>{
      this.getAllAgents();
    })
  }

  hideForm() {
    const editeAgent = document.getElementById('editeAgent');
    //@ts-ignore
    editeAgent.setAttribute('style', 'display: none !important');
    const addAgent = document.getElementById('addAgent');
    //@ts-ignore
    addAgent.setAttribute('style', 'display: none !important');
  }

  deleteAgent(agent: Agent) {
    this.userService.deleteUser(agent.id,RoleUser.Agent).subscribe((data:any)=>{
      this.getAllAgents();
    })
  }

  addAgent() {
    const addAgent = document.getElementById('addAgent');
    //@ts-ignore
    addAgent.setAttribute('style', 'display: block !important');
  }

  AddSaveAgent() {
    this.hideForm();
    this.userService.addUser(this.formAddAgent.value,RoleUser.Agent).subscribe((data:any)=>{
      this.getAllAgents();
    })
  }
}
