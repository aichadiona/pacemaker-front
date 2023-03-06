import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  [x: string]: any;
  private baseURL = "http://localhost:8082/api/v1/patients";
  
  private baseUrl = "http://localhost:8082/api/v1/patient";
  constructor(private httpClient: HttpClient) { }

  getPatient(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseURL}/all`);
  }
  getEmployeesList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Patient): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Patient): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
