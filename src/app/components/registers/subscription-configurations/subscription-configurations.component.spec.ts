import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionConfigurationsComponent } from './subscription-configurations.component';

describe('SubscriptionConfigurationsComponent', () => {
  let component: SubscriptionConfigurationsComponent;
  let fixture: ComponentFixture<SubscriptionConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionConfigurationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
