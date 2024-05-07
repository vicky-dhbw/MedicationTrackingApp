import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleMedicationPage } from './schedule-medication.page';

describe('ScheduleMedicationPage', () => {
  let component: ScheduleMedicationPage;
  let fixture: ComponentFixture<ScheduleMedicationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleMedicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
