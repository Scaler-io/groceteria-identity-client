import { Action } from '@ngrx/store';
import { PaginatedApiClientList } from 'src/app/core/models/api-client';

export const GET_API_CLIENT_LIST_START = 'GET_API_CLIENT_LIST_START';
export const GET_API_CLIENT_LIST_SUCCESS = 'GET_API_CLIENT_LIST_SUCCESS';

export class GetApiClientListStart implements Action {
  readonly type = GET_API_CLIENT_LIST_START;
  constructor(public payload?: any) {}
}

export class GetApiClientListSuccess implements Action {
  readonly type = GET_API_CLIENT_LIST_SUCCESS;
  constructor(public payload: PaginatedApiClientList) {}
}

export type ApiClientActions = GetApiClientListStart | GetApiClientListSuccess;
