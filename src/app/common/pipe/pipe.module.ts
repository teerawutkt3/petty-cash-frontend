import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalFormatPipe } from './decimal-format.pipe';

@NgModule({
  declarations: [
    DecimalFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DecimalFormatPipe
  ]
})
export class PipeModule { }
