import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientLoginModule } from './client-login/client-login.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './toast/toast.component';
import { AccountsOverviewModule } from './accounts-overview/accounts-overview.module';
@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ClientLoginModule,
    AccountsOverviewModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
