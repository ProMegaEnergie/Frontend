import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-statistique',
  templateUrl: './card-statistique.component.html',
  styleUrls: ['./card-statistique.component.css']
})
export class CardStatistiqueComponent {
  @Input() title: string = '';
  @Input() statistique: number = 0;
  @Input() color: string = '';
  @Input() imgSrc: string = '';
}
