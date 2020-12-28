import { TestBed } from '@angular/core/testing';

import { PrimaryserviceService } from './primaryservice.service';

describe('PrimaryserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimaryserviceService = TestBed.get(PrimaryserviceService);
    expect(service).toBeTruthy();
  });
});
