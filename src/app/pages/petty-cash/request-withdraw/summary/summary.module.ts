import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: SummaryComponent }
]

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SummaryModule { }
