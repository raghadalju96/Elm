import { TestBed } from '@angular/core/testing';

import { RouteGuardCompanyService } from './route-guard-company.service';

describe('RouteGuardCompanyService', () => {
  let service: RouteGuardCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
