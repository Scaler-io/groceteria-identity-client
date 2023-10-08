import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSearchComponent } from './data-search.component';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [DataSearchComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [DataSearchComponent],
})
export class DataSearchModule {}
