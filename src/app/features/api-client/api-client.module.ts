import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiClientComponent } from './api-client.component';
import { ApiClientRoutingModule } from './api-client-routing.module';
import { StoreModule } from '@ngrx/store';
import {
  API_CLIENT_STATE_NAME,
  apiClientReducer,
} from 'src/app/state/api-client/api-client.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ApiClientStateEffect } from 'src/app/state/api-client/api-client.effect';
import { AppMaterialModule } from 'src/app/app-material.module';
import { DataSearchModule } from 'src/app/shared/components/data-search/data-search.module';
import { PipesModule } from 'src/app/shared/pipes/pipes-module.module';
import { PaginatorModule } from 'src/app/shared/components/paginator/paginator.module';

@NgModule({
  declarations: [ApiClientComponent],
  imports: [
    CommonModule,
    DataSearchModule,
    ApiClientRoutingModule,
    AppMaterialModule,
    PaginatorModule,
    PipesModule,
    EffectsModule.forFeature([ApiClientStateEffect]),
    StoreModule.forFeature(API_CLIENT_STATE_NAME, apiClientReducer),
  ],
})
export class ApiClientModule {}
