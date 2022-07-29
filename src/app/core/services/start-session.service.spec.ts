import { TestBed } from '@angular/core/testing';

import { StartSessionService } from './start-session.service';

describe('StartSessionService', () => {
  let service: StartSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
