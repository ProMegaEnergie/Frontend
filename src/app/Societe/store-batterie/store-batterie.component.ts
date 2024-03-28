import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {Batterie} from "../../Model/Entity/batterie";
import {BatterieService} from "../../Services/Batterie/batterie.service";
import {AchatStatus} from "../../Model/Enum/achat-status";

@Component({
  selector: 'app-store-batterie',
  templateUrl: './store-batterie.component.html',
  styleUrls: ['./store-batterie.component.css']
})
export class StoreBatterieComponent implements OnInit{
  batteries: Array<Batterie> = []
  constructor(private appComponent: AppComponent,private batterieService: BatterieService) {
  }
  ngOnInit() {
    this.appComponent.changeLiActive('StoreBatterie');
    this.getBatteriesForBuy();
  }

  buyProduct(batterie: Batterie) {
    const idSociete = localStorage.getItem('idUser');
    const idBatterie = batterie.id;
    const achatStatus = {
      "batterie": {
        "id": idBatterie
      },
      "societe": {
        "id": idSociete
      }
    }
    this.batterieService.achatBattery(achatStatus).subscribe((data: any) => {
      this.getBatteriesForBuy();
    })
  }

  getBatteriesForBuy() {
    this.batterieService.readBatteriesByAchatStatus(AchatStatus.NotPayed).subscribe((data: any) => {
      this.batteries = data
    })
  }

  search() {
    const nomInput = (<HTMLInputElement>document.getElementById('nomInput')).value;
    const prixInput = (<HTMLInputElement>document.getElementById('prixInput')).value;
    let choice = ''
    let search = ''
    if (nomInput === '' && prixInput === '') {
      this.getBatteriesForBuy();
    } else if (nomInput == '' && prixInput!= '') {
       choice = 'prix';
       search = prixInput;
    } else if (nomInput != '' && prixInput == '') {
      choice = 'nom';
      search = nomInput;
    } else {
      choice = 'prix_nom';
      search = prixInput + "," + nomInput;
    }
    const searchArray = search.replace(' ','%20');

    this.batterieService.readBatteriesByNomAndPrix(choice, searchArray).subscribe((data: any) => {
      this.batteries = data
    })
  }
}
