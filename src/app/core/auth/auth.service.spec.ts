import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AuthModule } from 'angular-auth-oidc-client';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule.forRoot({}), RouterTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
