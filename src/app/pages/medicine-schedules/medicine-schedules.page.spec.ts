import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicineSchedulesPage } from './medicine-schedules.page';

describe('MedicineSchedulesPage', () => {
  let component: MedicineSchedulesPage;
  let fixture: ComponentFixture<MedicineSchedulesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineSchedulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
