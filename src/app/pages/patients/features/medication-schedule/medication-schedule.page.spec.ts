import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicationSchedulePage } from './medication-schedule.page';

describe('MedicationSchedulePage', () => {
  let component: MedicationSchedulePage;
  let fixture: ComponentFixture<MedicationSchedulePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
