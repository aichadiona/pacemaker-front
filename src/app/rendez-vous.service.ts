import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule/public_api';
import { Observable } from 'rxjs';
import { Patient } from './models/patient';
import { RendezVous } from './models/rendezVous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  deleteEvent(eventId: any) {
    throw new Error('Method not implemented.');
  }
  updateEvent(eventData: { id: any; subject: any; description: any; startTime: any; endTime: any; patients: any; }) {
    throw new Error('Method not implemented.');
  }

  
  

  private apiUrl = "http://localhost:8082/api/v1/patients-rendezvous";

  constructor(private httpClient: HttpClient) { }


  getPatientRendezVous(nom: string, prenom: string, age: number, numeroTelephone: string, subject: string, description: string, startTime: string, endTime: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get(`${this.apiUrl}/patient-rendez-vous?nom=${nom}&prenom=${prenom}&age=${age}&numeroTelephone=${numeroTelephone}&subject=${subject}&description=${description}&startTime=${startTime}&endTime=${endTime}`, { headers });
  }

  getPatientsRendezVous(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.apiUrl}`);
  }

 


  getRendezvous(): Observable<RendezVous[]> {
    return this.httpClient.get<RendezVous[]>(`${this.apiUrl}/all`);
  }

  addEvent(event: RendezVous): Observable<RendezVous> {
    const url = `${this.apiUrl}/events`;
    return this.httpClient.post<RendezVous>(url, event);
  }

  getAllEvents(): Observable<RendezVous[]> {
    const url = `${this.apiUrl}/events`;
    return this.httpClient.get<RendezVous[]>(url);
  }

  addCalendarData(data: RendezVous): Observable<RendezVous> {
    return this.httpClient.post<RendezVous>(this.apiUrl, data);
  }

  createEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.apiUrl, event);
  }
  getPatientInfoForRendezVous() {
    return this.httpClient.get('/rendez-vous/patient-info');
  }
  
  getEmployeesList(): Observable<RendezVous[]>{
    return this.httpClient.get<RendezVous[]>(`${this.apiUrl}`);
  }

  createEmployee(employee: RendezVous): Observable<Object>{
    return this.httpClient.post(`${this.apiUrl}`, employee);
  }

  getEmployeeById(id: number): Observable<RendezVous>{
    return this.httpClient.get<RendezVous>(`${this.apiUrl}/${id}`);
  }

  updateEmployee(id: number, employee: RendezVous): Observable<Object>{
    return this.httpClient.put(`${this.apiUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.apiUrl
    }/${id}`);
  }
}
