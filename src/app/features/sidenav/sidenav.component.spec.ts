import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {
  SIDENAV_STATE_NAME,
  sidenavToggleReducer,
} from 'src/app/state/sidenav/sidenav.reducer';
import { By } from '@angular/platform-browser';
import { getSidenavToggleState } from 'src/app/state/sidenav/sidenav.selector';
import {
  MOBILE_VIEW_STATE_NAME,
  mobileViewReducer,
} from 'src/app/state/mobile-view/mobile-view.reducer';
import { SidenavToggleSet } from 'src/app/state/sidenav/sidenav.action';
import { SetMobileView } from 'src/app/state/mobile-view/mobile-view.action';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [
        StoreModule.forRoot({
          [SIDENAV_STATE_NAME]: sidenavToggleReducer,
          [MOBILE_VIEW_STATE_NAME]: mobileViewReducer,
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set sidenav state false when a link is clickd in mobile view', () => {
    store.dispatch(new SidenavToggleSet(true));
    store.dispatch(new SetMobileView(true));
    fixture.detectChanges();
    const navMenuElement = fixture.debugElement.query(
      By.css('.sidenav__nav-item')
    );
    navMenuElement.nativeElement.click();
    fixture.detectChanges();
    expect(component.sidenavToggleState).toBeFalsy();
  });
});
