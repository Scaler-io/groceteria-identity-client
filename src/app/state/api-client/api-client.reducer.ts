import { ApiClient, ApiClientSummary } from 'src/app/core/models/api-client';
import {
  ApiClientActions,
  GET_API_CLIENT_LIST_START,
  GET_API_CLIENT_LIST_SUCCESS,
} from './api-client.action';

export const API_CLIENT_STATE_NAME = 'apiClient';

export interface ApiClientState {
  clients: ApiClientSummary[];
  count: number;
  top: number;
  currentPage: number;
}

const initialState: ApiClientState = {
  clients: [],
  top: 0,
  count: 0,
  currentPage: 0,
};

export function apiClientReducer(
  state: ApiClientState = initialState,
  action: ApiClientActions
) {
  switch (action.type) {
    case GET_API_CLIENT_LIST_START:
      return {
        top: 0,
        currentPage: 0,
        count: 0,
        clients: [],
      };
    case GET_API_CLIENT_LIST_SUCCESS:
      return {
        ...state,
        top: action.payload?.pageSize,
        currentPage: action.payload?.pageIndex,
        count: action.payload?.count,
        clients: action.payload?.data as ApiClientSummary[],
      };
    default:
      return state;
  }
}
