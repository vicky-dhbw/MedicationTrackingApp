import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedAdminLogPage } from './med-admin-log.page';

describe('MedAdminLogPage', () => {
  let component: MedAdminLogPage;
  let fixture: ComponentFixture<MedAdminLogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedAdminLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
