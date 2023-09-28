import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SIDENAV_STATE_NAME, SidenavState } from './sidenav.reducer';

const sidenavState = createFeatureSelector<SidenavState>(SIDENAV_STATE_NAME);

export const getSidenavToggleState = createSelector(
  sidenavState,
  (state: SidenavState) => {
    return state.toggleState;
  }
);
