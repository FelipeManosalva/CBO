import { TestBed } from '@angular/core/testing';

import { DataAPiService } from './data-api.service';

describe('DataAPiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataAPiService = TestBed.get(DataAPiService);
    expect(service).toBeTruthy();
  });
});
