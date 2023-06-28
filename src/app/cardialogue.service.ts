import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardiologue } from './models/cardiologue';


@Injectable({
  providedIn: 'root'
})
export class CardialogueService {


  

  getEmployeesList() {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:8082/api/v1/cardiologues";
  private apiUrl = "http://localhost:8082/api/v1/login";
  private api = "http://localhost:8082/api/v1/user/";

  constructor(private httpClient: HttpClient) {}


  getCardiologistData(): Observable<any> {
    return this.httpClient.get<any>(`${this.api}`);
  }
  getInfosCardiologue(): Observable<any> {
    const url = `${this.apiUrl}`; // L'URL de votre endpoint pour récupérer les informations du cardiologue
    return this.httpClient.get<any>(url);
  }

  getNomFromSession() {
    return sessionStorage.getItem('nom');
  }

  getPrenomFromSession() {
    return sessionStorage.getItem('prenom');
  }

getNumberOfCardiologues(): Observable<number> {
return this.httpClient.get<number>(`${this.baseURL}/count`);
  }

  loginUserFromRemotes(cardio:Cardiologue):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/login",cardio)
  }

  login(cardio:Cardiologue,username: string, password: string) {
    // Appeler une API d'authentification
    return this.httpClient.post(`${this.apiUrl}`, cardio).subscribe(
      (response: any) => {
        // Stocker l'ID du cardiologue dans la variable de session Angular
        sessionStorage.setItem('cardiologueId', response.cardiologueId);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  logout() {
    // Supprimer l'ID du cardiologue de la variable de session Angular
    sessionStorage.removeItem('cardiologueId');
  }

  isLoggedIn(): boolean {
    // Vérifier si l'ID du cardiologue est présent dans la variable de session Angular
    return sessionStorage.getItem('cardiologueId') !== null;
  }

  // getCardiologueId(): string {
    // Récupérer l'ID du cardiologue depuis la variable de session Angular
  //   return sessionStorage.getItem('cardiologueId');
  // }
  registerUserFromRemote(cardio:Cardiologue):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/register",cardio)
  }

  deleteCardialogue(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

 getCardialogueList (): Observable<Cardiologue[]>{
    return this.httpClient.get<Cardiologue[]>(`${this.baseURL}`);
  }

  createCardialogue(cardialogue: Cardiologue): Observable<Object>{
    return this.httpClient.post<any>("http://localhost:8082/api/v1/register",cardialogue);
  }

  getCardialogueById(id: number): Observable<Cardiologue>{
    return this.httpClient.get<Cardiologue>(`${this.baseURL}/${id}`);
  }
  getCardialogueByIds(id: number): Observable<Cardiologue>{
    return this.httpClient.get<Cardiologue>(`${this.baseURL}/${id}`);
  }

  updateCardialogue(id: number, cardialogue: Cardiologue): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cardialogue);
  }


  loginUser(cardio: Cardiologue): Observable<Object>{
    console.log(cardio)
    return this.httpClient.post(`${this.baseURL}`,cardio);
  }
}
