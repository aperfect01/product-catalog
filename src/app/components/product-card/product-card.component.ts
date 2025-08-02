import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class ProductCardComponent {
  @Input() product!: Product;

  @Output() select = new EventEmitter<void>();

  onClick() {
    console.log('test');

    this.select.emit();
  }
}
