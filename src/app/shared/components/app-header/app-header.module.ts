import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { UserAvatarModule } from '../user-avatar/user-avatar.module';

@NgModule({
  declarations: [AppHeaderComponent],
  imports: [CommonModule, AppMaterialModule, UserAvatarModule],
  exports: [AppHeaderComponent],
})
export class AppHeaderModule {}
