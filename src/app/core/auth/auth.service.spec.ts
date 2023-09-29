import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AuthModule } from 'angular-auth-oidc-client';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule.forRoot({})],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
