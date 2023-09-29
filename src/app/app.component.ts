import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { getSidenavToggleState } from './state/sidenav/sidenav.selector';

import * as mobileViewActions from './state/mobile-view/mobile-view.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public sidenavToggleState: boolean;
  public isMobileView: boolean;

  constructor(private store: Store<AppState>) {}

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
}
