import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './user-avatar.component';
import { PipesModule } from '../../pipes/pipes-module.module';

@NgModule({
  declarations: [UserAvatarComponent],
  imports: [CommonModule, PipesModule],
  exports: [UserAvatarComponent],
})
export class UserAvatarModule {}
