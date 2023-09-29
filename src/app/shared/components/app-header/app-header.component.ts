import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSidenavToggleState } from 'src/app/state/sidenav/sidenav.selector';
import { AppState } from 'src/app/store/app.state';
import { getMobileViewState } from 'src/app/state/mobile-view/mobile-view.selector';

import * as sidenavTogglerActions from '../../../state/sidenav/sidenav.action';
import { getAuthUser } from 'src/app/state/auth/auth.selector';
import { AuthUser } from 'src/app/core/models/auth';

@Component({
  selector: 'groceteria-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  public sidenavToggleState: boolean;
  public isMobileScreen: boolean;
  public authUser: AuthUser;

  constructor(private store: Store<AppState>) {}

  private subscriptions = {
    sidenavState: null,
    mobileViewState: null,
    authUser: null,
  };

  ngOnInit(): void {
    this.subscriptions.sidenavState = this.store
      .select(getSidenavToggleState)
      .subscribe((response) => {
        this.sidenavToggleState = response;
      });

    this.subscriptions.sidenavState = this.store
      .select(getMobileViewState)
      .subscribe((response) => {
        this.isMobileScreen = response;
      });

    this.subscriptions.authUser = this.store
      .select(getAuthUser)
      .subscribe((response) => {
        this.authUser = response;
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.sidenavState)
      this.subscriptions.sidenavState.unsubscribe();
    if (this.subscriptions.mobileViewState)
      this.subscriptions.mobileViewState.unsubscribe();
    if (this.subscriptions.authUser) this.subscriptions.authUser.unsubscribe();
  }

  public toggleSidenav() {
    this.store.dispatch(
      new sidenavTogglerActions.SidenavToggleSet(!this.sidenavToggleState)
    );
  }
}
