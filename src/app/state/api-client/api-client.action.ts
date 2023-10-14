import { Action } from '@ngrx/store';
import {
  ApiClient,
  PaginatedApiClientList,
} from 'src/app/core/models/api-client';

export const GET_API_CLIENT_LIST_START = 'GET_API_CLIENT_LIST_START';
export const GET_API_CLIENT_LIST_SUCCESS = 'GET_API_CLIENT_LIST_SUCCESS';
export const GET_API_CLIENT_START = 'GET_API_CLIENT_START';
export const GET_API_CLIENT_SUCCESS = 'GET_API_CLIENT_SUCCESS';

export class GetApiClientListStart implements Action {
  readonly type = GET_API_CLIENT_LIST_START;
  constructor(public pageNumber: number = 1, public pageSize: number = 20) {}
}

export class GetApiClientListSuccess implements Action {
  readonly type = GET_API_CLIENT_LIST_SUCCESS;
  constructor(public payload: PaginatedApiClientList) {}
}

export class GetApiClientStart implements Action {
  readonly type = GET_API_CLIENT_START;
  constructor(public clientId: string) {}
}

export class GetApiClientSuccess implements Action {
  readonly type = GET_API_CLIENT_SUCCESS;
  constructor(public payload: ApiClient) {}
}

export type ApiClientActions =
  | GetApiClientListStart
  | GetApiClientListSuccess
  | GetApiClientStart
  | GetApiClientSuccess;
