import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {BatterieService} from "../../Services/Batterie/batterie.service";
import {Batterie} from "../../Model/Entity/batterie";
import {StatusBattery} from "../../Model/Enum/status-battery";
import {AchatStatus} from "../../Model/Entity/achat-status";
import {RoleUser} from "../../Model/Enum/role-user";

@Component({
  selector: 'app-stock-batterie',
  templateUrl: './stock-batterie.component.html',
  styleUrls: ['./stock-batterie.component.css']
})
export class StockBatterieComponent implements OnInit {
  choice1: string = 'All';
  choice2: string = StatusBattery.Inactive;
  choice3: string = StatusBattery.Active;

  constructor(private appComponent: AppComponent, private batterieService: BatterieService) { }

  batteries: Array<AchatStatus> = []

  ngOnInit() {
    this.appComponent.changeLiActive('StockBatterie')
    this.onChoiceSelected('All')
  }

  onChoiceSelected(selectedChoice: string) {
    // @ts-ignore
    const idSociete = localStorage.getItem('idUser') as number;
    switch (selectedChoice) {
      case 'All':
        this.batterieService.getBatteriesAchetes(idSociete).subscribe((data: any) => {
          this.batteries = data
        })
        break;
      case StatusBattery.Inactive:
        this.batterieService.getBatteriesAchetes(idSociete).subscribe((data: any) => {
          this.batteries = data.filter((batterie: AchatStatus) => batterie.statusBattery === StatusBattery.Inactive)
        })
        break;
      case StatusBattery.Active:
        this.batterieService.getBatteriesAchetes(idSociete).subscribe((data: any) => {
          this.batteries = data.filter((batterie: AchatStatus) => batterie.statusBattery === StatusBattery.Active)
        })
        break;
    }
  }

  protected readonly RoleUser = RoleUser;
}
