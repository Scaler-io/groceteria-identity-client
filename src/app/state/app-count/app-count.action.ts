import { Action } from '@ngrx/store';

export const GET_API_CLIENT_COUNT = 'GET_API_CLIENT_COUNT';
export const GET_API_CLIENT_COUNT_SUCCESS = 'GET_API_CLIENT_COUNT_SUCCESS';

export class GetApiClientCount implements Action {
  readonly type = GET_API_CLIENT_COUNT;
  constructor(public payload?: any) {}
}

export class GetApiClientCountSuccess implements Action {
  readonly type = GET_API_CLIENT_COUNT_SUCCESS;
  constructor(public payload: number) {}
}

export type AppCountActions = GetApiClientCount | GetApiClientCountSuccess;
