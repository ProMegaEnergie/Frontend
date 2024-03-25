import { Component, OnInit } from '@angular/core';
import {Agent} from "../../Model/Entity/agent";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  constructor( private appComponent:AppComponent) { }
  ngOnInit() {
    this.appComponent.changeLiActive('Agent')
  }
}
