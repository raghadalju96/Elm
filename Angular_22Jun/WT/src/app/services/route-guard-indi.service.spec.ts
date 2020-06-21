import { TestBed } from '@angular/core/testing';

import { RouteGuardIndiService } from './route-guard-indi.service';

describe('RouteGuardIndiService', () => {
  let service: RouteGuardIndiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardIndiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
