import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormItemComponent } from './input-form-item.component';

describe('InputCreateFormItemComponent', () => {
  let component: InputFormItemComponent;
  let fixture: ComponentFixture<InputFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFormItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
