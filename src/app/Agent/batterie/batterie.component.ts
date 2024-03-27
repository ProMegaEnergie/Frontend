import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {BatterieService} from "../../Services/Batterie/batterie.service";
import {Batterie} from "../../Model/Entity/batterie";

@Component({
  selector: 'app-batterie',
  templateUrl: './batterie.component.html',
  styleUrls: ['./batterie.component.css']
})
export class BatterieComponent implements OnInit {
  choice1: string = 'All';
  choice2: string = 'NotPayed';
  choice3: string = 'Payed';

  selectBatteries(choice: string) {
    console.log(choice)
  }
  constructor(private appComponent: AppComponent, private batterieService: BatterieService) { }

  batterie: Array<Batterie> = []

  ngOnInit() {
    this.appComponent.changeLiActive('Batterie')
    this.onChoiceSelected('All')
  }

  onChoiceSelected(selectedChoice: string) {
    // @ts-ignore
    const idAgent = localStorage.getItem('idUser') as number;
    switch (selectedChoice) {
      case 'All':
        this.batterieService.readBatteriesByIdAgent(idAgent).subscribe((data: any) => {
          this.batterie = data
        })
        break;
      case 'NotPayed':
        this.batterieService.readBatteriesByIdAgent(idAgent).subscribe((data: any) => {
          this.batterie = data.filter((batterie: any) => batterie.achatStatus === 'NotPayed')
        })
        break;
      case 'Payed':
        this.batterieService.readBatteriesByIdAgent(idAgent).subscribe((data: any) => {
          this.batterie = data.filter((batterie: any) => batterie.achatStatus === 'Payed')
        })
        break;
    }
  }
}
