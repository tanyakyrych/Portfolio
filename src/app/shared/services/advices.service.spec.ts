import { TestBed } from '@angular/core/testing';

import { AdvicesService } from './advices.service';

describe('AdvicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvicesService = TestBed.get(AdvicesService);
    expect(service).toBeTruthy();
  });
});
