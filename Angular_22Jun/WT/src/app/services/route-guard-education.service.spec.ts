import { TestBed } from '@angular/core/testing';

import { RouteGuardEducationService } from './route-guard-education.service';

describe('RouteGuardEducationService', () => {
  let service: RouteGuardEducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardEducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
