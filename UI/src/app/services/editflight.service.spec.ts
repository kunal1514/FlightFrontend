import { TestBed } from '@angular/core/testing';

import { EditflightService } from './editflight.service';

describe('EditflightService', () => {
  let service: EditflightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditflightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
