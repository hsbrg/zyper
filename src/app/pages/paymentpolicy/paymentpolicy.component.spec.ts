import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentpolicyComponent } from './paymentpolicy.component';

describe('PaymentpolicyComponent', () => {
  let component: PaymentpolicyComponent;
  let fixture: ComponentFixture<PaymentpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentpolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
