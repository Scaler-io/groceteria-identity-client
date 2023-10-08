import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameShorthandPipe } from './name-shorthand.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { FormatTimePipe } from './format-time.pipe';
import { CamelCaseSpacerPipe } from './camel-case-spacer.pipe';
import { TextShortenPipe } from './text-shorten.pipe';

@NgModule({
  declarations: [
    NameShorthandPipe,
    FormatDatePipe,
    FormatTimePipe,
    CamelCaseSpacerPipe,
    TextShortenPipe,
  ],
  imports: [CommonModule],
  exports: [
    NameShorthandPipe,
    FormatDatePipe,
    FormatTimePipe,
    CamelCaseSpacerPipe,
    TextShortenPipe,
  ],
})
export class PipesModule {}
