import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleGlobalOptions,
} from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: false,
  animation: {
    enterDuration: 300,
    exitDuration: 0,
  },
};

const MaterialComponentModules = [
  MatButtonModule,
  MatRippleModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponentModules],
  exports: [MaterialComponentModules],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
})
export class AppMaterialModule {}
