import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MOBILE_VIEW_STATE_NAME, MobileViewState } from './mobile-view.reducer';

const mobielViewstate = createFeatureSelector<MobileViewState>(
  MOBILE_VIEW_STATE_NAME
);

export const getMobileViewState = createSelector(mobielViewstate, (state) => {
  return state.isMobileView;
});
