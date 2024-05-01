import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMedicinePage } from './add-medicine.page';

describe('AddMedicinePage', () => {
  let component: AddMedicinePage;
  let fixture: ComponentFixture<AddMedicinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
