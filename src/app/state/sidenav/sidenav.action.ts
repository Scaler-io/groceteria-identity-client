import { Action } from '@ngrx/store';

export const SIDENAV_TOGGLE_SET = 'SIDENAV_TOGGLE_SET';

export class SidenavToggleSet implements Action {
  readonly type = SIDENAV_TOGGLE_SET;
  constructor(public payload: boolean) {}
}

export type SidenavToggleActions = SidenavToggleSet;
