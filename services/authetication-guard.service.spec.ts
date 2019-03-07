import { TestBed, inject } from '@angular/core/testing';

import { AutheticationGuardService } from './authetication-guard.service';

describe('AutheticationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutheticationGuardService]
    });
  });

  it('should be created', inject([AutheticationGuardService], (service: AutheticationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
