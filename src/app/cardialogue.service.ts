import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardiologue } from './models/cardiologue';


@Injectable({
  providedIn: 'root'
})
export class CardialogueService {

  private baseURL = "http://localhost:8082/api/v1/cardiologues";
  constructor(private httpClient: HttpClient) {}

  loginUserFromRemote(cardio:Cardiologue):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/login",cardio)
  }
  registerUserFromRemote(cardio:Cardiologue):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/register",cardio)
  }


  getCardialogueList(): Observable<Cardiologue[]>{
    return this.httpClient.get<Cardiologue[]>(`${this.baseURL}`);
  }

  createCardialogue(cardialogue: Cardiologue): Observable<Object>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/register",cardialogue);
  }

  getCardialogueById(id: number): Observable<Cardiologue>{
    return this.httpClient.get<Cardiologue>(`${this.baseURL}/${id}`);
  }

  updateCardialogue(id: number, cardialogue: Cardiologue): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cardialogue);
  }

  deleteCardialogue(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  loginUser(cardio: Cardiologue): Observable<Object>{
    console.log(cardio)
    return this.httpClient.post(`${this.baseURL}`,cardio);
  }
}
