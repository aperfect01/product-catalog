import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from './product-card.component';
import { CommonModule } from '@angular/common';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProductCardComponent, IonicModule.forRoot(), CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;

    component.product = {
      id: 1,
      name: 'Test Product',
      price: 100,
      description: 'Sample product',
      discount: 10,
    };

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit select event on click', () => {
    spyOn(component.select, 'emit');
    component.onClick();
    expect(component.select.emit).toHaveBeenCalled();
  });
});
