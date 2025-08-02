import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule, ProductCardComponent],
})
export class HomePage implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products, 'asdsadsadsa');

        this.applyFilter();
      },
      error: () => alert('Could not load products'),
    });
  }

  applyFilter() {
    this.filteredProducts = this.products
      .filter((p) =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      );
  }

  onSearchChange() {
    this.applyFilter();
  }

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.applyFilter();
  }

  goToDetails(product: Product) {
    this.router.navigate(['/product', product.id]);
  }
}
