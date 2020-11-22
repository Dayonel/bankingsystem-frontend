import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountDTO } from '../model/account-dto';
import { AccountService } from '../services/account-service';
import { ClientService } from '../services/client-service';
import { ToastService } from '../toast/toast-service';

@Component({
  selector: 'app-accounts-overview',
  templateUrl: './accounts-overview.component.html',
  styleUrls: ['./accounts-overview.component.css']
})
export class AccountsOverviewComponent implements OnInit {

  public clientName = '';
  public accounts: AccountDTO[] = [];
  public accountForm: any;
  public clientId: any;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private toastService: ToastService,
    private accountService: AccountService,
    private formBuilder: FormBuilder) {
    this.resetFormGroup();
  }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params.id;
    this.getClientName(this.clientId);
    this.getClientAccounts(this.clientId);
  }

  resetFormGroup(): void {
    this.accountForm = this.formBuilder.group({
      depositAmount: new FormControl(),
      withdrawAmount: new FormControl(),
    });
  }

  getClientName(id: number): void {
    this.clientService.getClientById(id).subscribe(
      res => {
        if (res) {
          this.clientName = res.name;
        }
      },
      error => {
        this.toastService.show(error.error);
      });
  }

  getClientAccounts(clientId: number): void {
    this.accountService.getClientById(clientId).subscribe(
      res => {
        if (res) {
          this.accounts = res;
        }
      },
      error => {
        this.toastService.show(error.error);
      });
  }

  deposit(accountId: number): void {
    this.accountService.deposit(accountId, +this.accountForm.value.depositAmount).subscribe(
      res => {
        if (res) {
          this.toastService.show('Successfully deposited!');
          this.resetFormGroup();
          this.getClientAccounts(this.clientId);
        }
      },
      error => {
        this.toastService.show(error.error);
      });
  }

  withdraw(accountId: number): void {
    this.accountService.withdraw(accountId, +this.accountForm.value.withdrawAmount).subscribe(
      res => {
        if (res) {
          this.toastService.show('Successfully withdrawed!');
          this.resetFormGroup();
          this.getClientAccounts(this.clientId);
        }
      },
      error => {
        console.log(error);
        this.toastService.show(error.error);
      });
  }
}
