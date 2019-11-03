import { TestBed } from '@angular/core/testing';

import { GalleryScriptService } from './gallery-script.service';

describe('GalleryScriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleryScriptService = TestBed.get(GalleryScriptService);
    expect(service).toBeTruthy();
  });
});
