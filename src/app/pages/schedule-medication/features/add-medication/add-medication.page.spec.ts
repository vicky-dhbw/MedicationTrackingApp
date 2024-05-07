import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMedicationPage } from './add-medication.page';

describe('AddMedicationPage', () => {
  let component: AddMedicationPage;
  let fixture: ComponentFixture<AddMedicationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
