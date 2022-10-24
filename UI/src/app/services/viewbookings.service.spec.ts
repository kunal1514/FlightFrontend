import { TestBed } from '@angular/core/testing';

import { ViewbookingsService } from './viewbookings.service';

describe('ViewbookingsService', () => {
  let service: ViewbookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewbookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
