import { API_CLIENT_STATE_NAME, ApiClientState } from '../state/api-client/api-client.reducer';
import { APP_COUNT_STATE_NAME, AppCountState, appCountReducer } from '../state/app-count/app-count.reducer';
import { AUTH_STATE_NAME, AuthState, authReducer } from '../state/auth/auth.reducer';
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
  [AUTH_STATE_NAME]: AuthState;
  [API_CLIENT_STATE_NAME]: ApiClientState;
  [APP_COUNT_STATE_NAME]: AppCountState;
}

export const appReducers = {
  // statename - reducer
  [SIDENAV_STATE_NAME]: sidenavToggleReducer,
  [MOBILE_VIEW_STATE_NAME]: mobileViewReducer,
  [AUTH_STATE_NAME]: authReducer,
  [APP_COUNT_STATE_NAME]: appCountReducer
};
