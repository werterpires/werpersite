import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsTypesComponent } from './terms-types.component';

describe('TermsTypesComponent', () => {
  let component: TermsTypesComponent;
  let fixture: ComponentFixture<TermsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
