import { TestBed } from '@angular/core/testing';

import { MultipleServiceService } from './multiple-service.service';

describe('MultipleServiceService', () => {
  let service: MultipleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
