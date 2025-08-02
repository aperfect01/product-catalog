import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'assets/mock-products.json'; // Local JSON

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.error('Error fetching products', err);
        return throwError(() => new Error('Failed to load products.'));
      })
    );
  }
}
