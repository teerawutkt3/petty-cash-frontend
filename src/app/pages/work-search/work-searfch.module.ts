import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorkSearchComponent } from './work-search.component';

export const route: Routes = [
  { path: '', component: WorkSearchComponent }
];

@NgModule({
  declarations: [WorkSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),

  ],
  exports: [RouterModule]
})
export class WorkSearchModule { }
