import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourcesFirstComponent } from './resources-firstPage.component';

describe('ResourcesFirstComponent', () => {
  let component: ResourcesFirstComponent;
  let fixture: ComponentFixture<ResourcesFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourcesFirstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcesFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
