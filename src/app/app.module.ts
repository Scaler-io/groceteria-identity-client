import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducers } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { AppMaterialModule } from './app-material.module';
import { AppHeaderModule } from './shared/components/app-header/app-header.module';
import { SidenavModule } from './features/sidenav/sidenav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from 'angular-auth-oidc-client';
import { PageHeadingModule } from './shared/components/page-heading/page-heading.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    AppHeaderModule,
    SidenavModule,
    PageHeadingModule,
    AuthModule.forRoot({
      config: environment.config.oidcConfig,
    }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
