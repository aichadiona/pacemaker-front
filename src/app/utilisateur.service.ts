import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseURL = "http://localhost:8082/api/v1/Utilisateur";
  constructor(private httpClient: HttpClient) {}

  loginUserFromRemote(utilisateur:Utilisateur):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/logines",utilisateur)
  }
  registerUserFromRemote(utilisateur:Utilisateur):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/registers",utilisateur)
  }

  deleteUtilisateur(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

 getUtilisateurList (): Observable<Utilisateur[]>{
    return this.httpClient.get<Utilisateur[]>(`${this.baseURL}`);
  }

  createUtilisateur(utilisateur: Utilisateur): Observable<Object>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/registers",utilisateur);
  }

  getUtilisateurById(id: number): Observable<Utilisateur>{
    return this.httpClient.get<Utilisateur>(`${this.baseURL}/${id}`);
  }
  getUtilisateurByIds(id: number): Observable<Utilisateur>{
    return this.httpClient.get<Utilisateur>(`${this.baseURL}/${id}`);
  }

  updateUtilisateur(id: number, cardialogue: Utilisateur): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cardialogue);
  }


  loginUser(cardio: Utilisateur): Observable<Object>{
    console.log(cardio)
    return this.httpClient.post(`${this.baseURL}`,cardio);
  }
}
