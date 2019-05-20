import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { PipeModule } from 'src/app/common/pipe/pipe.module';

const routes = [
  { path: '', component: DetailComponent }
]


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipeModule
  ],
  exports: [
    RouterModule
  ]
})
export class DetailModule { }
