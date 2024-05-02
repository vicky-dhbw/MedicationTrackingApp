import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDrugEffectPage } from './add-drug-effect.page';

describe('AddDrugEffectPage', () => {
  let component: AddDrugEffectPage;
  let fixture: ComponentFixture<AddDrugEffectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDrugEffectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
