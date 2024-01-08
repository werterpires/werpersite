import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalContainerComponent } from './operational-container.component';

describe('OperationalContainerComponent', () => {
  let component: OperationalContainerComponent;
  let fixture: ComponentFixture<OperationalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationalContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
