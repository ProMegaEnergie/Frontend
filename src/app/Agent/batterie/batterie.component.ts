import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {BatterieService} from "../../Services/Batterie/batterie.service";
import {Batterie} from "../../Model/Entity/batterie";
import {AchatStatus} from "../../Model/Enum/achat-status";
import {RoleUser} from "../../Model/Enum/role-user";

@Component({
  selector: 'app-batterie',
  templateUrl: './batterie.component.html',
  styleUrls: ['./batterie.component.css']
})
export class BatterieComponent implements OnInit {
  choice1: string = 'All';
  choice2: string = AchatStatus.NotPayed;
  choice3: string = AchatStatus.Payed;

  constructor(private appComponent: AppComponent, private batterieService: BatterieService) { }

  batteries: Array<Batterie> = []

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
          this.batteries = data
        })
        break;
      case AchatStatus.NotPayed:
        this.batterieService.readBatteriesByIdAgent(idAgent).subscribe((data: any) => {
          this.batteries = data.filter((batterie: Batterie) => batterie.achatStatus === AchatStatus.NotPayed)
        })
        break;
      case AchatStatus.Payed:
        this.batterieService.readBatteriesByIdAgent(idAgent).subscribe((data: any) => {
          this.batteries = data.filter((batterie: Batterie) => batterie.achatStatus === AchatStatus.Payed)
        })
        break;
    }
  }

  protected readonly RoleUser = RoleUser;
}
