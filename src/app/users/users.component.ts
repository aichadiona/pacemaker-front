import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  cardialogue: Utilisateur = new Utilisateur();
  constructor(private cardiologueService: UtilisateurService,
    private router: Router) { 
      
    }
    msg='';
    message='';
  ngOnInit(): void {
  }

  saveCardiologue(){
    this.cardiologueService.createUtilisateur(this.cardialogue).subscribe( 
      data =>{
      console.log(data);
      console.log("respone received")
      this.goToCardiologueList();
    },
    
    error => console.log(error));
    console.log("exception received")
    this.msg="le login que vous avez saisie existe déja"
    this.router.navigate(['/utilisateurs']);
    // this.message="votre prenom svp"
  }
  


  goToCardiologueList(){
    this.router.navigate(['/listUtilisateurs']);
  }
  
  onSubmit(){
    console.log(this.cardialogue);
    this.saveCardiologue();
  }

}
