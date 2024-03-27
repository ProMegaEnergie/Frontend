import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {BatterieService} from "../../Services/Batterie/batterie.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {


  constructor( private appComponent:AppComponent, private batterieService:BatterieService ) { }
  ngOnInit() {
    this.appComponent.changeLiActive('Dashboard')
    this.getStatistiques();
  }

  title1: string = 'Nombre de Batteries';
  title2: string = 'Nombre de Batteries non achetées';
  title3: string = 'Nombre de Batteries achetées';

  statistique1: number = 0;
  statistique2: number = 0;
  statistique3: number = 0;

  color1: string = 'blue';
  color2: string = 'red';
  color3: string = 'green';

  image1: string = `./assets/batterieBlue.svg`
  image2: string = `./assets/batterieRed.svg`;
  image3: string = `./assets/batterieGreen.svg`;

  private getStatistiques() {
    // @ts-ignore
    const idAgent = localStorage.getItem('idUser') as number;
    this.batterieService.readBatteriesByIdAgent(idAgent).subscribe((data:any) => {
      this.statistique1 = data.length;
      for (let i = 0; i < data.length; i++) {
        if (data[i].achatStatus === 'NotPayed') {
          this.statistique2++;
        } else {
          this.statistique3++;
        }
      }
    });
  }
}
