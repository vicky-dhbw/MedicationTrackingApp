import { TestBed } from '@angular/core/testing';

import { MedicationScheduleService } from './medication-schedule.service';

describe('MedicationScheduleService', () => {
  let service: MedicationScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
