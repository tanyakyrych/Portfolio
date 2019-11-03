import { TestBed } from '@angular/core/testing';

import { PhotoDetailsService } from './photo-details.service';

describe('PhotoDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoDetailsService = TestBed.get(PhotoDetailsService);
    expect(service).toBeTruthy();
  });
});
