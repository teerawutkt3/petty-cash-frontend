import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantComponent } from './applicant.component';
import { Routes, RouterModule } from '@angular/router';

export const route: Routes = [
  { path: '', component: ApplicantComponent }
];

@NgModule({
  declarations: [ApplicantComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class ApplicantModule { }
