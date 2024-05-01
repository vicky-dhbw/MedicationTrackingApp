import { TestBed } from '@angular/core/testing';

import { MedicineDataService } from './medicine-data.service';

describe('MedicineDataService', () => {
  let service: MedicineDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
