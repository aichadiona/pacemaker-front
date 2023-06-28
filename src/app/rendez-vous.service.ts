import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule/public_api';
import { Observable } from 'rxjs';
import { Cardiologue } from './models/cardiologue';
import { Patient } from './models/patient';
import { RendezVous } from './models/rendezVous';
import { Secretaire } from './models/secretaire';
import { Utilisateur } from './models/utilisateur';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  event: RendezVous = new RendezVous();
  private apiUrl = "http://localhost:8082/api/v1";
  private apiUrldelete = "http://localhost:8082/api/v1/events";
  // submitted = false;


  constructor(private httpClient: HttpClient) { }

  
  addEvent(event: RendezVous,id:number,c:Cardiologue,s:Secretaire): Observable<RendezVous> {
    const url = `${this.apiUrl}/events`;
    return this.httpClient.post<RendezVous>(url, event)
   
  } 

  addEvents(event: RendezVous,id:number,s:Secretaire): Observable<RendezVous> {
    const url = `${this.apiUrl}/eventss`;
    return this.httpClient.post<RendezVous>(url, event)
   
  } 
  
  // deleteEvent(eventId: number) {
  //   const url = `${this.apiUrldelete}/${eventId}`;
  //   return this.httpClient.delete(url);
  // }
  deleteEvent(eventId: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:8082/api/v1/events/${eventId}`);
  }

  getPatientRendezVous(nom: string, prenom: string, age: number, numeroTelephone: string, subject: string, description: string, startTime: string, endTime: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get(`${this.apiUrl}/patient-rendez-vous?nom=${nom}&prenom=${prenom}&age=${age}&numeroTelephone=${numeroTelephone}&subject=${subject}&description=${description}&startTime=${startTime}&endTime=${endTime}`, { headers });
  }

  getPatientsRendezVous(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.apiUrl}`);
  }

 
  // getRendezvous(id: number): Observable<RendezVous[]> {
  //   const url = `${this.apiUrl}/rendezVous/${id}`;
  //   return this.httpClient.get<RendezVous[]>(url);
  // }
  getRendezvous(id: number): Observable<RendezVous[]> {
    const url = `${this.apiUrl}/rendezvous/${id}`;
    return this.httpClient.get<RendezVous[]>(url);
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
