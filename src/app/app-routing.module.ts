import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';
import { ClientLoginComponent } from './client-login/client-login.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLoginComponent
  },
  {
    path: 'accounts/:id',
    component: AccountsOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
