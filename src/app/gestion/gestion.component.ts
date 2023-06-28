import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardialogueService } from '../cardialogue.service';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../utilisateur.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cardiologue } from '../models/cardiologue';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  id!: number;
  nom!: string;
  prenom!: string;
password!: string;
  login!:string;
  cardio: Cardiologue = new Cardiologue();
  utilisateur: Utilisateur []=[];
    constructor(private utilisateurService: UtilisateurService,
      private router: Router, private cardialogueService:CardialogueService,private httpClient: HttpClient) { }
      ngOnInit(): void {
        this.fetchUserInfo();
      }
    fetchUserInfo(): void {
      // const userId = this.route.snapshot.paramMap.get('userId'); // Récupérer l'ID de l'utilisateur connecté (à adapter selon votre route)
      const userId = this.router.routerState.snapshot.root.firstChild?.paramMap.get('userId');

      this.httpClient.get<any>(`http://localhost:8082/api/v1/login/${userId}`)
        .subscribe(
          response => {
            this.nom = response.nom;
            this.prenom = response.prenom;
          },
          error => {
            console.error('Une erreur s\'est produite lors de la récupération des informations de l\'utilisateur :', error);
          }
        );
    }
    fetchCardiologistData(): void {
      this.cardialogueService.getCardiologistData().subscribe(
        (data: any) => {
          this.nom = data.nom;
          this.prenom = data.prenom;
        },
        (error: any) => {
          console.error('Une erreur s\'est produite lors de la récupération des données du cardiologue :', error);
        }
      );
    }
    logine() {
      const url = "http://localhost:8082/api/v1/login"; // Remplacez par l'URL correspondante pour accéder à votre endpoint de login
      const body = {
        login: this.login,
        passwd: this.password
      };
    
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
      this.httpClient.post<any>(url, body, { headers }).subscribe(
        (response) => {
          this.nom = response.nom;
          this.prenom = response.prenom;
        },
        (error) => {
          console.log('Une erreur s\'est produite lors de la récupération des données.');
        }
      );
    }
    
    afficherInfosCardiologue() {
      this.cardialogueService.getInfosCardiologue().subscribe(
        (response: any) => {
          this.nom = response.nom;
          this.prenom = response.prenom;
          this.login=response.login;
          console.log(this.login)
        },
        (error) => {
          console.log('Une erreur s\'est produite lors de la récupération des informations du cardiologue.', error);
        }
      );
    }
  
    private getCardiologue() {
      this.utilisateurService.getUtilisateurList().subscribe(data => {
       this.utilisateur=data;
      });
    }
    rendezVouscardio(c:Utilisateur) {
      this.router.navigate(['calendrier',c.id]);
    }
    rendezVousCreate(){
      this.router.navigate(['creationRV'])
    }
}






