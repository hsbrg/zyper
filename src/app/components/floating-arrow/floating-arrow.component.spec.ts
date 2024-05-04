import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingArrowComponent } from './floating-arrow.component';

describe('FloatingArrowComponent', () => {
  let component: FloatingArrowComponent;
  let fixture: ComponentFixture<FloatingArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
