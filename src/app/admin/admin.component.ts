import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministrateurService } from '../administrateur.service';
import { Administrateur } from '../models/Administrateur';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: Administrateur = new Administrateur();
  msg = '';
  isCardio: boolean = false;
  isSecretaire: boolean = false;
  userType: string = 'cardiologue';


  constructor( private adminService: AdministrateurService,
    private router: Router) { }

  ngOnInit(): void {

  }
  loginUser() {
    this.adminService.loginUserFromRemote(this.admin).subscribe(
      data => {
        console.log("respone received")
        this.router.navigate(['/dashboard'])
      },
      error => {
        console.log("exception received")
        this.msg = "Veillez entrer un login ou un mot de passe correct"
        this.router.navigate(['/admin']);
      }
    )
  //   else if (this.userType === 'secretaire'){
  //   this.secretaireService.loginUserFromRemotes(this.secre).subscribe(
  //     data => {
  //       console.log("respone received")
  //       this.router.navigate(['/Utilisateur'])
  //     },
  //     error => {
  //       console.log("exception received secretaire")
  //       this.msg = "login ou mot de passe incorrect"
  //       this.router.navigate(['/connexion']);
  //     }
  //   )
  //   }else {
  //     this.msg = 'Please select a user type';
  //   }
  // }

  // userlogin(){
  //   console.log(this.cardio)
  //   this.cardiologueService.loginUser(this.cardio).subscribe(data=>{
  //     this.router.navigate(['GestionComponent']);
  //     alert('login successfull')
  //   },error=>alert("sorry please"))
  // }

}

}
