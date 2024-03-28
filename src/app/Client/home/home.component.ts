import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {Voiture} from "../../Model/Entity/voiture";
import {VoitureService} from "../../Services/Voiture/voiture.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  voitures: Array<Voiture> = []
  constructor( private appComponent : AppComponent, private voitureService: VoitureService) { }
  ngOnInit() {
    this.appComponent.changeLiActive('Voiture')
    this.getVoituresForBuy();
  }
  buyProduct(voiture: Voiture) {
    const idClient = localStorage.getItem('idUser');
    if (idClient == null) {
      alert('Vous devez vous connecter pour acheter une voiture')
      window.location.href = 'User/login';
    }
    const idVoiture = voiture.id;
    const achatStatus = {
      id: idVoiture,
      voiture: {
        id: idVoiture
      },
      client: {
        //@ts-ignore
        id: parseInt(idClient)
      }
    }
    this.voitureService.achatVoiture(achatStatus).subscribe((data: any) => {
      this.getVoituresForBuy();
    })
  }
  getVoituresForBuy() {
    this.voitureService.readVoituresByAchatStatus().subscribe((data: any) => {
      this.voitures = data
    })
  }
  search() {
    const matreculeInput = (<HTMLInputElement>document.getElementById('matreculeInput')).value;
    const prixInput = (<HTMLInputElement>document.getElementById('prixInput')).value;
    let choice = ''
    let search = ''
    if (matreculeInput === '' && prixInput === '') {
      this.getVoituresForBuy();
    } else if (matreculeInput == '' && prixInput!= '') {
       choice = 'prix';
       search = prixInput;
    } else if (matreculeInput != '' && prixInput == '') {
      choice = 'matrecule';
      search = matreculeInput;
    } else {
      choice = 'prix_matrecule';
      search = prixInput + "," + matreculeInput;
    }
    const searchArray = search.replace(' ','%20');
    this.voitureService.readVoituresByMatreculeAndPrix(choice, searchArray).subscribe((data: any) => {
      this.voitures = data
    })
  }
}
