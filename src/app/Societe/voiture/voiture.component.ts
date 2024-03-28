import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {AchatStatus} from "../../Model/Enum/achat-status";
import {VoitureService} from "../../Services/Voiture/voiture.service";
import {Voiture} from "../../Model/Entity/voiture";

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit{
  choice1: string = 'All';
  choice2: string = AchatStatus.NotPayed;
  choice3: string = AchatStatus.Payed;
  constructor(private appComponent: AppComponent, private voitureService: VoitureService) {
  }

  voitures: Array<Voiture> = []

  ngOnInit() {
    this.appComponent.changeLiActive('Voiture');
    this.onChoiceSelected('All')
  }

  onChoiceSelected(selectedChoice: string) {
    // @ts-ignore
    const idSociete = localStorage.getItem('idUser') as number;
    switch (selectedChoice) {
      case 'All':
        this.voitureService.readVoitureByIdSociete(idSociete).subscribe((data: any) => {
          this.voitures = data
        })
        break;
      case AchatStatus.NotPayed:
        this.voitureService.readVoitureByIdSociete(idSociete).subscribe((data: any) => {
          this.voitures = data.filter((voiture: Voiture) => voiture.achatStatus === AchatStatus.NotPayed)
        })
        break;
      case AchatStatus.Payed:
        this.voitureService.readVoitureByIdSociete(idSociete).subscribe((data: any) => {
          this.voitures = data.filter((voiture: Voiture) => voiture.achatStatus === AchatStatus.Payed)
        })
        break;
    }
  }
}
