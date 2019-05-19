import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalFormatPipe } from './decimal-format.pipe';
import { NumberToTestsDesc } from './number-to-text-desc.pipe';

@NgModule({
  declarations: [
    DecimalFormatPipe,
    NumberToTestsDesc
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DecimalFormatPipe,
    NumberToTestsDesc
  ]
})
export class PipeModule { }
