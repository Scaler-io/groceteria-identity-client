import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getMobileViewState } from 'src/app/state/mobile-view/mobile-view.selector';
import { getSidenavToggleState } from 'src/app/state/sidenav/sidenav.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'groceteria-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  public sidenavToggleState: boolean;
  public isMobileView: boolean;

  constructor(private store: Store<AppState>) {}

  private subscriptions = {
    sidenavToggleState: null,
    mobileViewState: null,
  };

  ngOnInit(): void {
    this.subscriptions.sidenavToggleState = this.store
      .select(getSidenavToggleState)
      .subscribe((response) => {
        this.sidenavToggleState = response;
      });

    this.subscriptions.mobileViewState = this.store
      .select(getMobileViewState)
      .subscribe((response) => {
        this.isMobileView = response;
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.sidenavToggleState) {
      this.subscriptions.sidenavToggleState.unsubscribe();
    }
    if (this.subscriptions.mobileViewState) {
      this.subscriptions.mobileViewState.unsubscribe();
    }
  }
}
