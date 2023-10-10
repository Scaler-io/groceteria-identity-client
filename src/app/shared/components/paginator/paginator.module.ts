import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [PaginatorComponent],
})
export class PaginatorModule {}
