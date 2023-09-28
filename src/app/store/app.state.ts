import { MOBILE_VIEW_STATE_NAME, MobileViewState, mobileViewReducer } from '../state/mobile-view/mobile-view.reducer';
import {
  SIDENAV_STATE_NAME,
  SidenavState,
  sidenavToggleReducer,
} from '../state/sidenav/sidenav.reducer';

export interface AppState {
  // statename - actual state interface
  [SIDENAV_STATE_NAME]: SidenavState;
  [MOBILE_VIEW_STATE_NAME]: MobileViewState;
}

export const appReducers = {
  // statename - reducer
  [SIDENAV_STATE_NAME]: sidenavToggleReducer,
  [MOBILE_VIEW_STATE_NAME]: mobileViewReducer
};
