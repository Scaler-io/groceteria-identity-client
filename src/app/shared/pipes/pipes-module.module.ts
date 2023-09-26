import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameShorthandPipe } from './name-shorthand.pipe';

@NgModule({
  declarations: [NameShorthandPipe],
  imports: [CommonModule],
  exports: [NameShorthandPipe],
})
export class PipesModule {}
