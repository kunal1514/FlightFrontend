import { TestBed } from '@angular/core/testing';

import { CustomersignUpServiceService } from './customersign-up-service.service';

describe('CustomersignUpServiceService', () => {
  let service: CustomersignUpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersignUpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
