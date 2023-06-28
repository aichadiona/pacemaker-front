import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteRenduService } from '../compte-rendu.service';
import { CompteRendu } from '../models/compteRendu';

@Component({
  selector: 'app-list-compte-rendu',
  templateUrl: './list-compte-rendu.component.html',
  styleUrls: ['./list-compte-rendu.component.css']
})
export class ListCompteRenduComponent implements OnInit{
  comptes: CompteRendu[]=[];
  constructor(private employeeService: CompteRenduService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.getAllCompteRendu();
  }
  
  private getAllCompteRendu(){
    this.employeeService.getAllCompteRendu().subscribe(data => {
      this.comptes = data;
    });
  }
  
  compteDetails(id: number){
    this.router.navigate(['detailsCompteRendu', id]);
  }
  
  updateCompte(id: number){
    this.router.navigate(['updateCompte', id]);
  }
  
  deleteCompte(id: number){
    this.employeeService.deleteCompte(id).subscribe( data => {
      console.log(data);
      this.getAllCompteRendu();
    })
  }
  rendezVous(){
    this.router.navigate(['RendezVousListComponent']);
  }
}
