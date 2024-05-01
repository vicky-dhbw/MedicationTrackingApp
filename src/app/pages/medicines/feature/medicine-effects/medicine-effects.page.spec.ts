import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicineEffectsPage } from './medicine-effects.page';

describe('MedicineEffectsPage', () => {
  let component: MedicineEffectsPage;
  let fixture: ComponentFixture<MedicineEffectsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineEffectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
