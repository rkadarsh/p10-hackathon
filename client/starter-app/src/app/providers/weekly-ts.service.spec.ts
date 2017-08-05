import { TestBed, inject } from '@angular/core/testing';

import { WeeklyTsService } from './weekly-ts.service';

describe('WeeklyTsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeeklyTsService]
    });
  });

  it('should be created', inject([WeeklyTsService], (service: WeeklyTsService) => {
    expect(service).toBeTruthy();
  }));
});
