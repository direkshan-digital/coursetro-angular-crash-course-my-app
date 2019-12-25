import { TestBed } from '@angular/core/testing';

import { OpenbreweryApiService } from './openbrewery-api.service';

describe('OpenbreweryApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenbreweryApiService = TestBed.get(OpenbreweryApiService);
    expect(service).toBeTruthy();
  });
});
