import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsCreateFormComponent } from './subscriptions-create-form.component';

describe('SubscriptionsCreateFormComponent', () => {
  let component: SubscriptionsCreateFormComponent;
  let fixture: ComponentFixture<SubscriptionsCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionsCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionsCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
