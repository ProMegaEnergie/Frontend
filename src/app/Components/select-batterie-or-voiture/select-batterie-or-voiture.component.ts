import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select-batterie-or-voiture',
  templateUrl: './select-batterie-or-voiture.component.html',
  styleUrls: ['./select-batterie-or-voiture.component.css']
})
export class SelectBatterieOrVoitureComponent {
  @Input() choice1: string = '';
  @Input() choice2: string = '';
  @Input() choice3: string = '';

  @Output() selectChoices = new EventEmitter<string>();

  selectChoice(choice: string) {
    this.selectChoices.emit(choice);
  }
}
