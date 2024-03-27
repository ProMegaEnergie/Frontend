import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent  implements OnInit {

  constructor( private appComponent:AppComponent) { }
  ngOnInit() {
    this.appComponent.changeLiActive('Client')
  }
}
