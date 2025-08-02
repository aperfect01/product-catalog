import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  standalone: true,
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ProductDetailsPage implements OnInit {
  product?: Product;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.product = products.find((p) => p.id === id);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.product = undefined;
      },
    });
  }
}
