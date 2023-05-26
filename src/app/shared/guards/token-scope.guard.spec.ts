import { TestBed } from '@angular/core/testing';

import { TokenScopeGuard } from './token-scope.guard';

describe('TokenScopeGuard', () => {
  let guard: TokenScopeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TokenScopeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
