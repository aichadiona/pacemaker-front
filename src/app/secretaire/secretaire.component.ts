import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Secretaire } from '../models/secretaire';
import { SecretaireService } from '../secretaire.service';

@Component({
  selector: 'app-secretaire',
  templateUrl: './secretaire.component.html',
  styleUrls: ['./secretaire.component.css']
})
export class SecretaireComponent  implements OnInit{
  secretaire: Secretaire=new Secretaire();
  constructor(private secretaireService: SecretaireService,private router:Router){}
  msg=''
  message=''
  ngOnInit(): void {
   
  }
  saveSecretaire(){
    this.secretaireService.AddSecretaire(this.secretaire).subscribe(
      data=>{
        console.log(data);
        console.log("response received")
        this.goToSecretaireList();
      },

     error => console.log(error));
    console.log("exception received")
    this.msg="le login que vous avez saisie existe déja"
    this.router.navigate(['/Secretaire']);
    // this.message="votre prenom svp"
  }
  


  goToSecretaireList(){
    this.router.navigate(['/listSecretaire']);
  }
  
  onSubmit(){
    console.log(this.secretaire);
    this.saveSecretaire();
  }

}
