import { TestBed } from '@angular/core/testing';

import { AddTwoService } from './add-two.service';

describe('AddTwoService', () => {
  let service: AddTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
