import { Routes, RouterModule } from '@angular/router';
import { ClientLoginComponent } from './client-login.component'
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: ClientLoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientLoginRoutingModule { }