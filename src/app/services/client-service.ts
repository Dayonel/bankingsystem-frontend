import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ClientDTO } from '../model/client-dto';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(private http: HttpClient) { }

    private endPoints = {
        get: (id: number) => `/api/client/${id}`
    };

    private get baseUrl(): string {
        return environment.baseUrl;
    }

    public getClientById(id: number): Observable<ClientDTO> {
        return this.http.get<ClientDTO>(this.baseUrl + this.endPoints.get(id));
    }
}
