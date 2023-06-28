import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.css']
})
export class ListUtilisateursComponent implements OnInit{
  utilisateurs: Utilisateur[]=[];
  prenom!: string;
  constructor(private cardiologueService:UtilisateurService,private router:Router){}
  ngOnInit(): void {
    this.getSecretaires();
  }
  private getSecretaires(){
    this.cardiologueService.getUtilisateurList().subscribe(data=>{
      this.utilisateurs=data;
    });
  }

  cardiologueDetails(id: number){
    this.router.navigate(['utilisateurDetails', id]);
  }

  updateCardiologue(id: number){
    this.router.navigate(['updateUtilisateurs', id]);
  }
 
  deleteCardiologue(id: number){
    this.cardiologueService.deleteUtilisateur(id).subscribe( (data: any) => {
      console.log(data);
      this.getSecretaires();
    })
  }

  search(){
    if(this.prenom!=""){
      this.utilisateurs=this.utilisateurs.filter(res=>{
        return res.prenom.toLocaleLowerCase().match(this.prenom.toLocaleLowerCase());
      });
    }
    else if(this.prenom==""){
      this.ngOnInit();
    }
  
  }

}
