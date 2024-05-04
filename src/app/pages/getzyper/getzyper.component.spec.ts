import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetzyperComponent } from './getzyper.component';

describe('GetzyperComponent', () => {
  let component: GetzyperComponent;
  let fixture: ComponentFixture<GetzyperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetzyperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetzyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
