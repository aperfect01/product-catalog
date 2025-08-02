import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

// Mock ProductService
const mockProductService = {
  getProducts: () =>
    of([
      {
        id: 1,
        name: 'Test Product',
        price: 100,
        description: 'Test',
        discount: 0,
      },
    ]),
};

// Mock Router
const mockRouter = {
  navigate: jasmine.createSpy('navigate'),
};

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomePage, // Standalone component
      ],
      providers: [
        { provide: ProductService, useValue: mockProductService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home page component', () => {
    expect(component).toBeTruthy();
  });

  it('should load products and set filteredProducts', () => {
    expect(component.products.length).toBe(1);
    expect(component.filteredProducts.length).toBe(1);
  });

  it('should navigate to product details', () => {
    component.goToDetails({
      id: 1,
      name: '',
      price: 0,
      description: '',
      discount: 0,
    });
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/product', 1]);
  });
});
