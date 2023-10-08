export interface IConfig {
  oidcConfig: OidcConfig;
  identityApiConfig: IdentityApiConfig;
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

interface IdentityApiConfig {
  identityManagerApiUrl: string;
  subscriptionKey: string;
}
