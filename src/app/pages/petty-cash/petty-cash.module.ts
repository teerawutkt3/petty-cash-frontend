import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PettyCashComponent } from './petty-cash.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: PettyCashComponent },
  { path: "request-withdraw", loadChildren: './request-withdraw/request-withdraw.module#RequestWithdrawModule' },
]
@NgModule({
  declarations: [PettyCashComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PettyCashModule { }
