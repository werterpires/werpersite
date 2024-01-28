import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCreateFormItemComponent } from './input-form-item.component';

describe('InputCreateFormItemComponent', () => {
  let component: InputCreateFormItemComponent;
  let fixture: ComponentFixture<InputCreateFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCreateFormItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCreateFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
