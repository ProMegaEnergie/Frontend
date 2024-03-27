import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent  implements OnInit {

  constructor( private appComponent:AppComponent) { }
  ngOnInit() {
    this.appComponent.changeLiActive('Societe')
  }
}
