import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'petty-cash/request-withdraw',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      },

      // petty cash
      { path: "petty-cash", loadChildren: './pages/petty-cash/petty-cash.module#PettyCashModule' },
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule' },
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  },


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
