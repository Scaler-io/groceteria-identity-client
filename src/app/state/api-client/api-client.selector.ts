import { createFeatureSelector, createSelector } from '@ngrx/store';
import { API_CLIENT_STATE_NAME, ApiClientState } from './api-client.reducer';
import { PaginationMetadata } from 'src/app/core/models/paginated-result';

const state = createFeatureSelector<ApiClientState>(API_CLIENT_STATE_NAME);

export const getApiList = createSelector(state, (state: ApiClientState) => {
  return state.clients;
});

export const getApiListCount = createSelector(
  state,
  (state: ApiClientState) => {
    return state.count;
  }
);

export const getPaginationMetaData = createSelector(
  state,
  (state: ApiClientState) => {
    return <PaginationMetadata>{
      count: state.count,
      top: state.top,
      currentPage: state.currentPage,
    };
  }
);
