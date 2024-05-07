import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMedicationPage } from './edit-medication.page';

describe('EditMedicationPage', () => {
  let component: EditMedicationPage;
  let fixture: ComponentFixture<EditMedicationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
