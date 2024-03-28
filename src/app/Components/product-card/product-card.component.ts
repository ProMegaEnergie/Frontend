import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() nom: string ='';
  @Input() vix: string ='';
  @Input() prix: number = 0;
  @Input() imageProduct: string = '';
  @Input() product: any;

  @Output() buyProducts = new EventEmitter<string>();

  buyProduct(product: any) {
    this.buyProducts.emit(product);
  }
}
