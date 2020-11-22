import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../services/client-service';
import { ToastService } from '../toast/toast-service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private toastService: ToastService,
    private router: Router) {
    this.clientForm = this.formBuilder.group({
      id: new FormControl()
    });
  }

  public client: any;
  public clientForm: any;
  public isLoading = false;

  formSubmit(): void {
    this.isLoading = true;
    this.clientService.getClientById(this.clientForm.value.id).subscribe(
      res => {
        if (res) {
          this.client = res;
          this.router.navigate([`/accounts/${res.id}`]);
        }
      },
      error => {
        this.toastService.show(error.message);
        this.isLoading = false;
      },
      () => this.isLoading = false);
  }
}
