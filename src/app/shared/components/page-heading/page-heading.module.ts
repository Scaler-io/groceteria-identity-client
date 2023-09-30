import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadingComponent } from './page-heading.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [PageHeadingComponent],
  imports: [CommonModule, BreadcrumbModule, AppMaterialModule],
  exports: [PageHeadingComponent],
})
export class PageHeadingModule {}
