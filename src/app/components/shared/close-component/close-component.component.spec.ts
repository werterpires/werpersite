import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseComponentComponent } from './close-component.component';

describe('CloseComponentComponent', () => {
  let component: CloseComponentComponent;
  let fixture: ComponentFixture<CloseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
