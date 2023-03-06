import { Injectable } from '@angular/core';
import { CompteRendu } from './models/compteRendu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteRenduService {


  private baseURL = "http://localhost:8082/api/v1/compteRendus";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<CompteRendu[]>{
    return this.httpClient.get<CompteRendu[]>(`${this.baseURL}`);
  }

  createEmployee(compteRendus: CompteRendu): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, compteRendus);
  }

  getEmployeeById(id: number): Observable<CompteRendu>{
    return this.httpClient.get<CompteRendu>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, compteRendus: CompteRendu): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, compteRendus);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
