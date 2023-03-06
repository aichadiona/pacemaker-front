import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardialogueService } from '../cardialogue.service';
import { CompteRenduService } from '../compte-rendu.service';
import { Cardiologue } from '../models/cardiologue';

import { CompteRendu } from '../models/compteRendu';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{
  // compteRendu: CompteRendu = new CompteRendu();
  
  cardio: Cardiologue=new Cardiologue();
  msg='';
  
  constructor(private cardiologueService:CardialogueService,
    private router: Router) { }
    
  ngOnInit(): void {
    
  }
  CompteRendu(){
    this.router.navigate(['CompteRenduComponent']);
  }
  rendezVousList(){
    this.router.navigate(['listRendezVousComponent']);
  }
  gestion(){
    console.log(this.cardio)
    this.router.navigate(['GestionComponent']);
  }
  goToEmployeeList(){
    this.router.navigate(['/connexion']);
  }
loginUser(){
  this.cardiologueService.loginUserFromRemote(this.cardio).subscribe(
    data=>{
      console.log("respone received")
      this.router.navigate(['/GestionComponent'])
    },
    error=>{
      console.log("exception received")
      this.msg="login ou mot de passe incorrect"
      this.router.navigate(['/connexion']);
    }
  )
}

  // userlogin(){
  //   console.log(this.cardio)
  //   this.cardiologueService.loginUser(this.cardio).subscribe(data=>{
  //     this.router.navigate(['GestionComponent']);
  //     alert('login successfull')
  //   },error=>alert("sorry please"))
  // }

}

