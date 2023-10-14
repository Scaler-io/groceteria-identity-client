import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/app.state';
import { getSidenavToggleState } from './state/sidenav/sidenav.selector';
import { AuthService } from './core/auth/auth.service';
import { NavigationStart, Router } from '@angular/router';
import { GetApiClientCount } from './state/app-count/app-count.action';
import { switchMap } from 'rxjs';
import * as mobileViewActions from './state/mobile-view/mobile-view.action';
import * as authActions from './state/auth/auth.action';

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
    appCounts: null,
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

    this.initiateAuthAndAppCount();
    this.chekIfMobileView();
    this.subscriptions.sidenavToggle = this.store
      .select(getSidenavToggleState)
      .subscribe((response) => {
        this.sidenavToggleState = response;
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

  private initiateAuthAndAppCount(): void {
    const appCounts$ = this.store.pipe(select((state) => state.appCount));
    this.subscriptions.appCounts = this.authService
      .isAuthenticated()
      .pipe(
        switchMap((response) => {
          console.log('working auth');
          this.isAuthenticated = response.isAuthenticated;
          if (!response.isAuthenticated) {
            this.authService.authorize();
          } else {
            this.store.dispatch(new authActions.SetAuthState(response));
          }
          return appCounts$;
        })
      )
      .subscribe((response) => {
        console.log('working count');
        if (response && response.apiClientCount === 0) {
          this.loadAppCount();
        }
      });
  }

  private loadAppCount() {
    this.store.dispatch(new GetApiClientCount());
  }
}
