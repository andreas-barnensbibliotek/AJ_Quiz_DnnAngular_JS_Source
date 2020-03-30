import { TestBed } from '@angular/core/testing';

import { BoktipsService } from './boktips.service';

describe('BoktipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoktipsService = TestBed.get(BoktipsService);
    expect(service).toBeTruthy();
  });
});
