import { Injectable } from '@angular/core';
import { CompteRendu } from './models/compteRendu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './models/patient';

@Injectable({
  providedIn: 'root'
})
export class CompteRenduService {


  private baseURL = "http://localhost:8082/api/v1/compteRendus";
  private baseURL1 = "http://localhost:8082/api/v1/patients";

  private apiUrl = 'http://localhost:8082/api/v1/compteRendus';

  constructor(private httpClient: HttpClient) { }

  createCompteRendu(patientId: number, compteRendu: CompteRendu): Observable<Object> {
    // const url = `${this.apiUrl}/patients/${patientId}/comptes`
    return this.httpClient.post(`${this.baseURL}/${patientId}`, compteRendu);
    
  }
  getNumberOfCompteRendu(): Observable<number> {
    return this.httpClient.get<number>(`${this.baseURL}/count`);
      }

  getAllCompteRendu(): Observable<CompteRendu[]>{
    return this.httpClient.get<CompteRendu[]>(`${this.baseURL}`);
  }

  createCompte(compteRendus: CompteRendu): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, compteRendus);
  }

  


  getCompteById(id: number): Observable<CompteRendu>{
    return this.httpClient.get<CompteRendu>(`${this.baseURL}/${id}`);
  }

  getEmployeeById(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL1}/${id}`);
  }
  updateCompte(id: number, compteRendus: CompteRendu): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, compteRendus);
  }

  deleteCompte(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
