import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneFormComponent } from './update-one-form.component';

describe('UpdateFormComponent', () => {
  let component: UpdateOneFormComponent;
  let fixture: ComponentFixture<UpdateOneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOneFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateOneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
