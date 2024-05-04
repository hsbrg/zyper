import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTechnologyComponent } from './ai-technology.component';

describe('AiTechnologyComponent', () => {
  let component: AiTechnologyComponent;
  let fixture: ComponentFixture<AiTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiTechnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
