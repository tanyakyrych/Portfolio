import { TestBed } from '@angular/core/testing';

import { PortfolioCategoryService } from './portfolio-category.service';

describe('PortfolioCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortfolioCategoryService = TestBed.get(PortfolioCategoryService);
    expect(service).toBeTruthy();
  });
});
