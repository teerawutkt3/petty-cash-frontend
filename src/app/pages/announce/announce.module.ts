import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnounceComponent } from './announce.component';
import { Routes, RouterModule } from '@angular/router';

export const route: Routes = [
  { path: '', component: AnnounceComponent }
];

@NgModule({
  declarations: [AnnounceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[
    RouterModule
  ]
})
export class AnnounceModule { }
