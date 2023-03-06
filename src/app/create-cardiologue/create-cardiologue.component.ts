import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CardialogueService } from '../cardialogue.service';
import { Cardiologue } from '../models/cardiologue';

@Component({
  selector: 'app-create-cardiologue',
  templateUrl: './create-cardiologue.component.html',
  styleUrls: ['./create-cardiologue.component.css']
})
export class CreateCardiologueComponent implements OnInit {

  cardialogue: Cardiologue = new Cardiologue();
  constructor(private cardiologueService: CardialogueService,
    private router: Router) { }
    msg='';
    message='';
  ngOnInit(): void {
  }

  saveCardiologue(){
    this.cardiologueService.createCardialogue(this.cardialogue).subscribe( 
      data =>{
      console.log(data);
      console.log("respone received")
      this.goToCardiologueList();
    },
    
    error => console.log(error));
    console.log("exception received")
    this.msg="le login que vous avez saisie existe déja"
    this.router.navigate(['/cardiologue']);
    // this.message="votre prenom svp"
  }
  


  goToCardiologueList(){
    this.router.navigate(['/connexion']);
  }
  
  onSubmit(){
    console.log(this.cardialogue);
    this.saveCardiologue();
  }
}
