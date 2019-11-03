import { TestBed } from '@angular/core/testing';

import { PhotosTitleService } from './photos-title.service';

describe('PhotosTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotosTitleService = TestBed.get(PhotosTitleService);
    expect(service).toBeTruthy();
  });
});
