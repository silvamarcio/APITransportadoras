import { TestBed } from '@angular/core/testing';

import { ConsumeService } from './consume.service';

describe('ConsumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumeService = TestBed.get(ConsumeService);
    expect(service).toBeTruthy();
  });
});
