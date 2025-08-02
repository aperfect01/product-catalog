import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsPage } from './product-details.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

// Mock ProductService
const mockProductService = {
  getProducts: () =>
    of([
      {
        id: 7,
        name: 'Product 7',
        price: 100,
        description: '...',
        discount: 10,
      },
    ]),
};

// Mock ActivatedRoute
const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (key: string) => '7', // Simulate route param id = 7
    },
  },
};

describe('ProductDetailsPage', () => {
  let component: ProductDetailsPage;
  let fixture: ComponentFixture<ProductDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsPage],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ProductService, useValue: mockProductService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component and load product', () => {
    expect(component).toBeTruthy();
    expect(component.product?.id).toBe(7);
  });
});
