import { TestBed } from '@angular/core/testing';

import { VendorsignUpServiceService } from './vendorsign-up-service.service';

describe('VendorsignUpServiceService', () => {
  let service: VendorsignUpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorsignUpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
