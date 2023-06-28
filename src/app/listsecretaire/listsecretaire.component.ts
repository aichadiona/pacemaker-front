import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Secretaire } from '../models/secretaire';
import { SecretaireService } from '../secretaire.service';

@Component({
  selector: 'app-listsecretaire',
  templateUrl: './listsecretaire.component.html',
  styleUrls: ['./listsecretaire.component.css']
})
export class ListsecretaireComponent implements OnInit{
  secretaires: Secretaire[]=[];
  prenom!: string;
  constructor(private secretaireService:SecretaireService,private router:Router){}
  ngOnInit(): void {
    this.getSecretaires();
  }
  private getSecretaires(){
    this.secretaireService.getAllSecretaire().subscribe(data=>{
      this.secretaires=data;
    });
  }

  SecretairDetails(id: number){
    this.router.navigate(['secretaireDetails', id]);
  }

  updateSecretaire(id: number){
    this.router.navigate(['secretaireUpdateComponent', id]);
  }
 
  deleteSecretaire(id: number){
    this.secretaireService.deleteSecretaire(id).subscribe( (data: any) => {
      console.log(data);
      this.getSecretaires();
    })
  }

  search(){
    if(this.prenom!=""){
      this.secretaires=this.secretaires.filter(res=>{
        return res.prenom.toLocaleLowerCase().match(this.prenom.toLocaleLowerCase());
      });
    }
    else if(this.prenom==""){
      this.ngOnInit();
    }
  
  }
  

}
