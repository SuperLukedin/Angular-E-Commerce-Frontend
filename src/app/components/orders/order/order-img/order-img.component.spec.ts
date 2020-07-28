import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderImgComponent } from './order-img.component';

describe('OrderImgComponent', () => {
  let component: OrderImgComponent;
  let fixture: ComponentFixture<OrderImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
