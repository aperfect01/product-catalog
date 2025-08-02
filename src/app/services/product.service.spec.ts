import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Product } from '../models/product.model';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch products', () => {
    const mockData: Product[] = [
      { id: 1, name: 'Test', price: 100, description: 'Desc', discount: 0 },
    ];

    service.getProducts().subscribe((data) => {
      expect(data.length).toBe(1);
      expect(data[0].name).toBe('Test');
    });

    const req = httpMock.expectOne('assets/mock-products.json');
    req.flush(mockData);
  });
});
