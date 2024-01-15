import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsSignComponent } from './terms-sign.component';

describe('TermsSignComponent', () => {
  let component: TermsSignComponent;
  let fixture: ComponentFixture<TermsSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsSignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
