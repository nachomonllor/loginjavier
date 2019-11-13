import { TestBed } from '@angular/core/testing';

import { ServloginService } from './servlogin.service';

describe('ServloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServloginService = TestBed.get(ServloginService);
    expect(service).toBeTruthy();
  });
});
