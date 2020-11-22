import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AccountDTO } from '../model/account-dto';
import { DepositVM } from '../model/VM/depositVM';
import { WithdrawVM } from '../model/VM/withdrawVM';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient) { }

    private endPoints = {
        list: (clientId: number) => `/api/account/${clientId}`,
        deposit: '/api/account/deposit',
        withdraw: '/api/account/withdraw',
    };

    private get baseUrl(): string {
        return environment.baseUrl;
    }

    public getClientById(id: number): Observable<AccountDTO[]> {
        return this.http.get<AccountDTO[]>(this.baseUrl + this.endPoints.list(id));
    }

    public deposit(id: number, amnt: number): Observable<boolean> {
        const model: DepositVM = {
            accountId: id,
            amount: amnt
        };

        return this.http.post<boolean>(this.baseUrl + this.endPoints.deposit, model);
    }

    public withdraw(id: number, amnt: number): Observable<boolean> {
        const model: WithdrawVM = {
            accountId: id,
            amount: amnt
        };

        return this.http.post<boolean>(this.baseUrl + this.endPoints.withdraw, model);
    }
}
