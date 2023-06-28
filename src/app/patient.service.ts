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
  private apiUrl = "http://localhost:8082/api/v1/patients/countries";
  private apiUrl1= "http://localhost:8082/api/v1/";
  private baseUrL = "http://localhost:8082/api/v1/patientss";
  
  
  constructor(private httpClient: HttpClient,) { }

  getCountriesOfImplantation(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl);
  }
  
  getPatientCountsByCountry() {
    return this.httpClient.get<number[]>(`${this.apiUrl1}/patients/count-by-country`);
  }
getNumberOfPatients(): Observable<number> {
return this.httpClient.get<number>(`${this.baseURL}/count`);
}


  getAllPatient(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrL}`);
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

  rendezVous(id:number,patient:Patient): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, patient);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
