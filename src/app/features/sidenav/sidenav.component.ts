import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { getApiClientCount } from 'src/app/state/app-count/app-count.selector';
import { getMobileViewState } from 'src/app/state/mobile-view/mobile-view.selector';
import { SidenavToggleSet } from 'src/app/state/sidenav/sidenav.action';
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
  public appCounts = {
    apiClient: 0
  };

  @ViewChild(
    'sidenavMenuItem1, sidenavMenuItem2, sidenavMenuItem3, sidenavMenuItem4, sidenavMenuItem5'
  )
  sidenavMenuItems: QueryList<ElementRef>;

  constructor(private store: Store<AppState>) {}

  private subscriptions = {
    sidenavToggleState: null,
    mobileViewState: null,
    appCount: null,
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

    this.subscriptions.appCount = this.store
      .select(getApiClientCount)
      .subscribe((response) => {
        this.appCounts.apiClient = response;
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.sidenavToggleState) {
      this.subscriptions.sidenavToggleState.unsubscribe();
    }
    if (this.subscriptions.mobileViewState) {
      this.subscriptions.mobileViewState.unsubscribe();
    }
    if (this.subscriptions.appCount) {
      this.subscriptions.appCount.unsubscribe();
    }
  }

  public collapseSideNav() {
    this.store.dispatch(new SidenavToggleSet(false));
  }

  public openSideNav() {
    if (this.sidenavToggleState) {
      this.store.dispatch(new SidenavToggleSet(false));
    }
  }
}
