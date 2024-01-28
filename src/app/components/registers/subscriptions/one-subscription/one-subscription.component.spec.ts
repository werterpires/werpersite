import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSubscriptionComponent } from './one-subscription.component';

describe('OneSubscriptionComponent', () => {
  let component: OneSubscriptionComponent;
  let fixture: ComponentFixture<OneSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
