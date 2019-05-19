import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestWithdrawComponent } from './request-withdraw.component';
import { RouterModule } from '@angular/router';
import { PipeModule } from 'src/app/common/pipe/pipe.module';

const routes = [
  { path: '', component: RequestWithdrawComponent },
  { path: 'add', loadChildren: './add/add.module#AddModule'}
]

@NgModule({
  declarations: [RequestWithdrawComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipeModule
  ],
  exports:[
    RouterModule
  ]
})
export class RequestWithdrawModule { }
