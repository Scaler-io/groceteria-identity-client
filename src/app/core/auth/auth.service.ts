import { Injectable } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oidcService: OidcSecurityService) {}

  public getToken(): string {
    return this.oidcService.getAccessToken();
  }

  public authorize(): void {
    this.oidcService.authorize();
  }

  public isAuthenticated(): Observable<LoginResponse> {
    return this.oidcService.checkAuth();
  }

  public signoff() {
    this.oidcService.logoff();
  }
}
