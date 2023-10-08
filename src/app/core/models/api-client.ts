import { PaginatedResult } from './paginated-result';

export class PaginatedApiClientList extends PaginatedResult {
  constructor(
    public pageIndex: number,
    public pageSize: number,
    public count: number,
    public data: ApiClientSummary[]
  ) {
    super(pageIndex, pageSize, count, data);
  }
}

export interface ApiClientSummary {
  clientId: string;
  clientName: string;
  clientDescription: string;
  accessTokenLifetime: number;
  enabled: boolean;
  created: string;
  updated?: Date | null;
  lastAccessed?: Date | null;
}

export interface ApiClient {
  id: number;
  enabled: boolean;
  clientId: string;
  clientName: string;
  clientDescription: string;
  allowedGrantTypes: string[];
  clientSecrets: ClientSecret[];
  redirectUris: string[];
  postLogoutRedirectUris: string[];
  allowedScopes: string[];
  protocolType: string;
  accessTokenLifetime: number;
  authorizationCodeLifetime: number;
  identityTokenLifetime: number;
  requireClientSecret: boolean;
  alwaysSendClientClaims: boolean;
  updateAccessTokenClaimsOnRefresh: boolean;
  allowOfflineAccess: boolean;
  requirePkce: boolean;
  metaData: MetaData;
}

interface ClientSecret {
  description: string;
  value: string;
  expiration: string;
}

interface MetaData {
  createdOn: string;
  updatedOn: string;
  lastAccessedOn: string;
}
