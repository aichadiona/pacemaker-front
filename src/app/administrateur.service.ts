import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrateur } from './models/Administrateur';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {
  
  private baseURL = "http://localhost:8082/api/v1/admin";

  constructor(private httpClient: HttpClient) {}
  loginUserFromRemote(admin:Administrateur):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/logine",admin)
  }

  updateAdmin(id: number, admin: Administrateur): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, admin);
  }
}
