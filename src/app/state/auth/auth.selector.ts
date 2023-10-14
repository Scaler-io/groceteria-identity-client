import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_STATE_NAME, AuthState } from './auth.reducer';

const state = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getAuthUser = createSelector(state, (state: AuthState) => {
  return state.user;
});