import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Cardiologue } from './models/cardiologue';
import { Secretaire } from './models/secretaire';
import { RendezVous } from './models/rendezVous';

@Injectable({
  providedIn: 'root'
})
export class SecretaireService {
  private baseURL = "http://localhost:8082/api/v1/secretaire";
  constructor(private httpClient: HttpClient) {}

  private apiUrl = 'http://localhost:8082/api/v1/rendezVousSec';



  getAppointments(): Observable<RendezVous[]> {
    return this.httpClient.get<RendezVous[]>(this.apiUrl);
  }

  addAppointment(appointment: RendezVous,id:number,c:Secretaire,): Observable<RendezVous> {
    return this.httpClient.post<RendezVous>(this.apiUrl, appointment);
  }

  

  updateAppointment(appointment: RendezVous): Observable<RendezVous> {
    const url = `${this.apiUrl}/${appointment.id}`;
    return this.httpClient.put<RendezVous>(url, appointment);
  }

  deleteAppointment(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }





  AddSecretaire(secretaire: Secretaire): Observable<Object>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/secretaire",secretaire);
  }

  // loginUserFromRemotes(s:Secretaire):Observable<any>{
  //   return this.httpClient.post<any>("http://localhost:8082/api/v1/logins",s)
  // }
  loginUserFromRemote(secre:Secretaire):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/logins",secre)
  }
  getAllSecretaire(): Observable<Secretaire[]> {
    return this.httpClient.get<Secretaire[]>(`${this.baseURL}`);
  }
  

  getSecretaireById(id: number): Observable<Secretaire>{
    return this.httpClient.get<Secretaire>(`${this.baseURL}/${id}`);
  }

  updateSecretaire(id: number, cardialogue: Secretaire): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cardialogue);
  }

  deleteSecretaire(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  loginUser(cardio: Secretaire): Observable<Object>{
    console.log(cardio)
    return this.httpClient.post(`${this.baseURL}`,cardio);
  }
}
