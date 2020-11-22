import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientLoginComponent } from './client-login.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@NgModule({
  declarations: [ClientLoginComponent, SpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientLoginModule { }
