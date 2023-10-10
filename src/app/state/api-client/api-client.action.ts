import { Action } from '@ngrx/store';
import { PaginatedApiClientList } from 'src/app/core/models/api-client';

export const GET_API_CLIENT_LIST_START = 'GET_API_CLIENT_LIST_START';
export const GET_API_CLIENT_LIST_SUCCESS = 'GET_API_CLIENT_LIST_SUCCESS';
export const GET_API_CLIENT_COUNT = 'GET_API_CLIENT_COUNT';
export const GET_API_CLIENT_COUNT_SUCCESS = 'GET_API_CLIENT_COUNT_SUCCESS';

export class GetApiClientListStart implements Action {
  readonly type = GET_API_CLIENT_LIST_START;
  constructor(public pageNumber: number = 1, public pageSize: number = 20) {}
}

export class GetApiClientListSuccess implements Action {
  readonly type = GET_API_CLIENT_LIST_SUCCESS;
  constructor(public payload: PaginatedApiClientList) {}
}

export class GetApiClientCount implements Action {
  readonly type = GET_API_CLIENT_COUNT;
  constructor(public payload?: number) {}
}

export class GetApiClientCountSuccess implements Action {
  readonly type = GET_API_CLIENT_COUNT_SUCCESS;
  constructor(public payload: number) {}
}

export type ApiClientActions =
  | GetApiClientListStart
  | GetApiClientListSuccess
  | GetApiClientCount
  | GetApiClientCountSuccess;
