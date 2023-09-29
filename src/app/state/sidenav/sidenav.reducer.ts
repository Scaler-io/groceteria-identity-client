import * as sidenavToggleActions from './sidenav.action';

export const SIDENAV_STATE_NAME = 'sidenavToggle';

export interface SidenavState {
  toggleState: boolean;
}

const initialState: SidenavState = {
  toggleState: false,
};

export function sidenavToggleReducer(
  state: SidenavState = initialState,
  action: sidenavToggleActions.SidenavToggleActions
) {
  switch (action.type) {
    case sidenavToggleActions.SIDENAV_TOGGLE_SET:
      return {
        ...state,
        toggleState: action.payload,
      };
    default:
      return state;
  }
}
