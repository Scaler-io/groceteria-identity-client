import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './user-avatar.component';
import { PipesModule } from '../../pipes/pipes-module.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [UserAvatarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PipesModule,
    AppMaterialModule,
  ],
  exports: [UserAvatarComponent],
})
export class UserAvatarModule {}
