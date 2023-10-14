import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APP_COUNT_STATE_NAME, AppCountState } from './app-count.reducer';

const state = createFeatureSelector<AppCountState>(APP_COUNT_STATE_NAME);

export const getApiClientCount = createSelector(state, (state) => {
  return state.apiClientCount;
});
