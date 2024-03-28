import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {BatterieService} from "../../Services/Batterie/batterie.service";
import {StatusBattery} from "../../Model/Enum/status-battery";
import {VoitureService} from "../../Services/Voiture/voiture.service";
import {AchatStatus} from "../../Model/Enum/achat-status";

@Component({
  selector: 'app-societe-dashboard',
  templateUrl: './societe-dashboard.component.html',
  styleUrls: ['./societe-dashboard.component.css']
})
export class SocieteDashboardComponent implements OnInit{
  title1: string = 'Nombre de Batteries achetées';
  title2: string = 'Nombre de Batteries actives';
  title3: string = 'Nombre de Batteries non actives';
  title4: string = 'Nombre de Voitures';
  title5: string = 'Nombre de Voitures achetées';
  title6: string = 'Nombre de Voitures non achetées';

  statistique1: number = 0;
  statistique2: number = 0;
  statistique3: number = 0;
  statistique4: number = 0;
  statistique5: number = 0;
  statistique6: number = 0;

  color1 = 'blue';
  color2 = 'green';
  color3 = 'red';
  color4 = 'purple';
  color5 = 'orange';
  color6 = 'yellow';

  image1: string = `./assets/batterieBlue.svg`
  image2: string = `./assets/batterieRed.svg`;
  image3: string = `./assets/batterieGreen.svg`;
  image4: string = `./assets/voiturePurple.svg`;
  image5: string = `./assets/voitureOrange.svg`;
  image6: string = `./assets/voitureYellow.svg`;

  constructor(private appComponent: AppComponent, private batterieService: BatterieService, private voitureService:VoitureService) {  }
  ngOnInit() {
    this.appComponent.changeLiActive('Dashboard');
    this.getStatistiques();
    this.readVoitureByIdSociete();
  }
  private getStatistiques() {
    // @ts-ignore
    const idSociete = localStorage.getItem('idUser') as number;
    this.batterieService.getBatteriesAchetes(idSociete).subscribe((data:any) => {
      this.statistique1 = data.length;
      for (let i = 0; i < data.length; i++) {
        if (data[i].statusBattery === StatusBattery.Active) {
          this.statistique2++;
        } else {
          this.statistique3++;
        }
      }
    });
  }
  private readVoitureByIdSociete() {
    // @ts-ignore
    const idSociete = localStorage.getItem('idUser') as number;
    this.voitureService.readVoitureByIdSociete(idSociete).subscribe((data:any) => {
      this.statistique4 = data.length;
      for (let i = 0; i < data.length; i++) {
        if (data[i].achatStatus ==AchatStatus.Payed) {
          this.statistique5++;
        } else {
          this.statistique6++;
        }
      }
    });
  }
}
