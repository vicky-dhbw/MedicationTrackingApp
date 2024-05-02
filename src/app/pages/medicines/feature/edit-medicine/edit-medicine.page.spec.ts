import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMedicinePage } from './edit-medicine.page';

describe('EditMedicinePage', () => {
  let component: EditMedicinePage;
  let fixture: ComponentFixture<EditMedicinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
