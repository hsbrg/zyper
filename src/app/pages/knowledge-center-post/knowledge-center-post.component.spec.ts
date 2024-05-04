import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCenterPostComponent } from './knowledge-center-post.component';

describe('KnowledgeCenterPostComponent', () => {
  let component: KnowledgeCenterPostComponent;
  let fixture: ComponentFixture<KnowledgeCenterPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeCenterPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeCenterPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
