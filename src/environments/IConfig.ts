export interface IConfig {
  oidcConfig: OidcConfig;
}

interface OidcConfig {
  authority: string;
  redirectUrl: string;
  postLogoutRedirectUri: string;
  clientId: string;
  scope: string;
  responseType: string;
  silentRenew: boolean;
  useRefreshToken: boolean;
  logLevel: number;
}
