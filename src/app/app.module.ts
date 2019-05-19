import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AjaxService } from './common/service/ajax.service';
import { MessageService } from './common/service/message.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './common/service/auth.service';import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app.reducers';
;

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('main', reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [
    MessageService,
    AjaxService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
