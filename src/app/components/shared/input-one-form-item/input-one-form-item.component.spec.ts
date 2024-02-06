import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOneFormItemComponent } from './input-one-form-item.component';

describe('InputCreateFormItemComponent', () => {
  let component: InputOneFormItemComponent;
  let fixture: ComponentFixture<InputOneFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOneFormItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputOneFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
