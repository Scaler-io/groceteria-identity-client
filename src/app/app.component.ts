import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { getSidenavToggleState } from './state/sidenav/sidenav.selector';
import { AuthService } from './core/auth/auth.service';

import * as mobileViewActions from './state/mobile-view/mobile-view.action';
import * as authActions from './state/auth/auth.action';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public sidenavToggleState: boolean;
  public isMobileView: boolean;
  public isAuthenticated: boolean;
  public isAppBusy: boolean = true;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router
  ) {}

  private subscriptions = {
    sidenavToggle: null,
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const window = event.currentTarget as Window;
    if (window.innerWidth < 499) {
      this.isMobileView = true;
      this.store.dispatch(new mobileViewActions.SetMobileView(true));
    } else {
      this.isMobileView = false;
      this.store.dispatch(new mobileViewActions.SetMobileView(false));
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart && this.router.url === '/') {
        this.isAppBusy = true;
      } else {
        setTimeout(() => {
          this.isAppBusy = false;
        }, 1000);
      }
    });

    this.chekIfMobileView();

    this.subscriptions.sidenavToggle = this.store
      .select(getSidenavToggleState)
      .subscribe((response) => {
        this.sidenavToggleState = response;
      });

    this.authService.isAuthenticated().subscribe((response) => {
      this.isAuthenticated = response.isAuthenticated;
      if (!response.isAuthenticated) {
        this.authService.authorize();
      } else {
        this.store.dispatch(new authActions.SetAuthState(response));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.sidenavToggle) {
      this.subscriptions.sidenavToggle.unsubscribe();
    }
  }

  private chekIfMobileView() {
    if ((window as Window).innerWidth < 499) {
      this.isMobileView = true;
      this.store.dispatch(new mobileViewActions.SetMobileView(true));
    } else {
      this.isMobileView = false;
      this.store.dispatch(new mobileViewActions.SetMobileView(false));
    }
  }
}
