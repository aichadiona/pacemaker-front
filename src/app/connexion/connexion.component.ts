import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministrateurService } from '../administrateur.service';
import { CardialogueService } from '../cardialogue.service';
import { CompteRenduService } from '../compte-rendu.service';
import { Administrateur } from '../models/Administrateur';
import { Cardiologue } from '../models/cardiologue';

import { CompteRendu } from '../models/compteRendu';
import { Secretaire } from '../models/secretaire';
import { Utilisateur } from '../models/utilisateur';
import { SecretaireService } from '../secretaire.service';
import { UtilisateurService } from '../utilisateur.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  // compteRendu: CompteRendu = new CompteRendu();

  //utilisateur: Utilisateur = new Utilisateur();
  admin: Administrateur = new Administrateur();
  cardio: Cardiologue=new Cardiologue();
  secre: Secretaire = new Secretaire();
  msg = '';
  // password: string = '';
  // role: string = 'cardiologue';
  selectedOption!: string;

  userType!: string; // "cardiologue" ou "secretaire"
  username!: string;
  password!: string;
  error!: string;
  constructor(private cardiologueService: CardialogueService,private http: HttpClient, private secretaireService: SecretaireService, private adminService: AdministrateurService,
    private router: Router) { }

  ngOnInit(): void {
this.selectedOption
  }



  CompteRendu() {
    this.router.navigate(['CompteRenduComponent']);
  }

  rendezVousList() {
    this.router.navigate(['listRendezVousComponent']);
  }
  gestion() {
    console.log(this.cardio)
    this.router.navigate(['GestionComponent']);
  }
  goToEmployeeList() {
    this.router.navigate(['/connexion']);
  }
  login() {
    if (this.userType === 'cardiologue') {
      const cardiologue: Cardiologue = {
        login: this.username, passwd: this.password,
        id: 0,
        nom: '',
        prenom: '',
        email: 0,
        telephone: '',
        adresse: '',
        confirmePasswd: '',
        nomhopital: '',
        profil: '',
        identification: '',
        role: '',
        userType: '',
        pays: ''
      };
      
      this.http.post('http://localhost:8082/api/v1/login', cardiologue)
        .subscribe(
          (response: any) => {
            sessionStorage.setItem('cardiologueId', response.cardiologueId);
            // Si l'utilisateur est trouvé, naviguez vers la page d'accueil ou vers une autre page.
            this.router.navigate(['/GestionComponent']);
          },
          (error: any) => {
            // Si l'utilisateur n'est pas trouvé, affichez un message d'erreur.
            console.log("exception received cardio");
            this.msg = "Identifiants incorrects pour le cardiologue";
            this.router.navigate(['/connexion']);
            this.error = error.error.message;
          }
        );
    } else if (this.userType === 'secretaire') {
      const secretaire: Secretaire = {
        login: this.username, passwd: this.password,
        id: 0,
        nom: '',
        prenom: '',
        telephone: '',
        adresse: '',
        confirmePasswd: '',
        nomhopital: '',
        email: '',
        pays: '',
        isSecretaire: false,
        id_secretaire: 0
      };
      this.http.post('http://localhost:8082/api/v1/logins', secretaire)
        .subscribe(
          (response: any) => {
            sessionStorage.setItem('secretaireListId', response.secretaireListId);
            // Si l'utilisateur est trouvé, naviguez vers la page d'accueil ou vers une autre page.
            this.router.navigate(['/accueilSecretaire']);
          },
          (error: any) => {
            console.log("exception received secrétaire");
            this.msg = "Identifiants incorrects pour le secrétaire";
            this.router.navigate(['/connexion']);
            // Si l'utilisateur n'est pas trouvé, affichez un message d'erreur.
            this.error = error.error.message;
          }
        );
    }
  }
  loginUser() {
    // alert(this.login + " " +this.passwd+ " "+ this.selectedOption)
    // console.log(this.login);
    // console.log(this.passwd);
      if (this.selectedOption === 'secretaire') {
        this.secretaireService.loginUserFromRemote(this.secre).subscribe(
          data => {
            console.log("response received");
            this.router.navigate(['/accueilSecretaire'])

          },
          error => {
            console.log("exception received secrétaire");
            this.msg = "Identifiants incorrects pour le secrétaire";
            this.router.navigate(['/connexion']);
          },
        )
      } if (this.selectedOption === 'cardiologue') {
        this.cardiologueService.loginUserFromRemotes(this.cardio).subscribe(
          data => {
            console.log(sessionStorage);
    
            
            console.log("response received");
            this.router.navigate(['/GestionComponent'])
          },
          error => {
            console.log("exception received cardio");
            this.msg = "Identifiants incorrects pour le cardiologue";
            this.router.navigate(['/connexion']);
          },
        )
      } 
      else {
        this.msg = "role non valide"  
  
    }
    
      // this.cardiologueService.loginUserFromRemote(this.cardio).subscribe(
      //   data => {
      //     console.log("response received");
      //   //  this.router.navigate(['/GestionComponent'])
      //   if (this.selectedOption === 'cardiologue') {
      //     this.router.navigate(['/GestionComponent']);
      //   } else if (this.selectedOption === 'secretaire') {
      //     this.router.navigate(['/Utilisateur']);
      //   } else {
      //     this.msg = "Role non valide";
      //   }
      // },
      // error => {
      //   console.log("exception received");
      //   this.msg = "login ou mot de passe incorrect";
      //   this.router.navigate(['/connexion']);
      //   },
       
      // )
    
 
      }
    // }
    // this.adminService.loginUserFromRemote(this.admin).subscribe(
    //   data => {
    //     console.log("respone received")
    //     this.router.navigate(['/Utilisateur'])
    //   },
    //   error => {
    //     console.log("exception received")
    //     this.msg = "login ou mot de passe incorrect"
    //     this.router.navigate(['/connexion']);
    //   }
    // )


  // userlogin(){
  //   console.log(this.cardio)
  //   this.cardiologueService.loginUser(this.cardio).subscribe(data=>{
  //     this.router.navigate(['GestionComponent']);
  //     alert('login successfull')
  //   },error=>alert("sorry please"))
  // }

}

