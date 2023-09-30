import { LogLevel } from 'angular-auth-oidc-client';
import { IConfig } from './IConfig';

export const environment = {
  production: true,
  config: <IConfig>{
    oidcConfig: {
      authority: 'https://localhost:7001',
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'bc916d46-3ff6-434d-8c88-5c16e5a7571a',
      scope: 'openid profile roles email groceteria.identitymanager.api',
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true,
      logLevel: LogLevel.Debug,
    },
  },
};
