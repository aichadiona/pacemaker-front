import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardialogueService } from '../cardialogue.service';
import { Cardiologue } from '../models/cardiologue';
import { Location } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-cardiologue',
  templateUrl: './list-cardiologue.component.html',
  styleUrls: ['./list-cardiologue.component.css']
})
export class ListCardiologueComponent implements OnInit{
  cardiologues: Cardiologue[]=[];
  prenom!: string;
  
  constructor(private cardiologueService:CardialogueService ,private location: Location,private router:Router,private modalService: BsModalService){}
  ngOnInit(): void {
    this.getSecretaires();

  }
  
 retour(): void {
    this.location.back();
  }
  
  private getSecretaires(){
    this.cardiologueService.getCardialogueList().subscribe(data=>{
      this.cardiologues=data;
      
    });
  }

  cardiologueDetails(id: number){
   
    this.router.navigate(['cardiologueDetails', id]);
  }

  updateCardiologue(id: number){
    this.router.navigate(['updateCardiologue', id]);
  }
 
  deleteCardiologue(id: number){
    this.cardiologueService.deleteCardialogue(id).subscribe( (data: any) => {
      console.log(data);
      this.getSecretaires();
    })
  }

  search(){
    if(this.prenom!=""){
      this.cardiologues=this.cardiologues.filter(res=>{
        return res.prenom.toLocaleLowerCase().match(this.prenom.toLocaleLowerCase());
      });
    }
    else if(this.prenom==""){
      this.ngOnInit();
    }
  
  }
  

}
