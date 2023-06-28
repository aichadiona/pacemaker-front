import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RendezVous } from './models/rendezVous';
import { Cardiologue } from './models/cardiologue';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://localhost:8082/api/v1/appointments';
  private Url = 'http://localhost:8082/api/v1';
  
  constructor(private http: HttpClient) { }
  getNumberOfRendezVous(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
      }
    

  // getAppointments(id: number): Observable<RendezVous[]> {
  //   const url = `${this.Url}/appointments/${id}`;
  //   return this.http.get<RendezVous[]>(url);
  // }

  getAppointments(): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(this.apiUrl);

  }

  getRendezvous(id: number): Observable<RendezVous[]> {
    const url = `${this.Url}/appointments/${id}`;
    return this.http.get<RendezVous[]>(url);
  }

  addAppointment(appointment: RendezVous,id:number,c:Cardiologue,): Observable<RendezVous> {
    return this.http.post<RendezVous>(this.apiUrl, appointment);
  }

  

  updateAppointment(appointment: RendezVous): Observable<RendezVous> {
    const url = `${this.apiUrl}/${appointment.id}`;
    return this.http.put<RendezVous>(url, appointment);
  }

  deleteAppointment(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
