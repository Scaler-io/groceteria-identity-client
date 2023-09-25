import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';

const globalRippleConfig: RippleGlobalOptions = {
    disabled: false,
    animation: {
      enterDuration: 300,
      exitDuration: 0,
    },
  };

const MaterialComponentModules = [

];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponentModules],
  exports: [MaterialComponentModules],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
  ]
})
export class AppMaterialModule {}
