import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { RendezVous } from '../models/rendezVous';
import { PatientService } from '../patient.service';
import { RendezVousService } from '../rendez-vous.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-rendez-vous-patient',
  templateUrl: './list-rendez-vous-patient.component.html',
  styleUrls: ['./list-rendez-vous-patient.component.css']
})
export class ListRendezVousPatientComponent implements OnInit{
  cardiologues: RendezVous[]=[];
  employee: Patient = new Patient();
  prenom!: string;
  id!: number;
  constructor(private cardiologueService:RendezVousService,private router:Router,private patientService:PatientService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.getRendezvous(this.id);
    this.patientService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));

  }
  
  
//  getRendezvous(id: number){
//     this.cardiologueService.getRendezvous(this.id).subscribe(data=>{
//       this.cardiologues=data;
      
//     });
//   }
private getRendezvous(id: number): void {
    this.cardiologueService.getRendezvous(id)
      .subscribe(rendezvous => this.cardiologues = rendezvous);
  }
  cardiologueDetails(id: number){
   
    this.router.navigate(['cardiologueDetails', id]);
  }

  updateCardiologue(id: number){
    this.router.navigate(['updateCardiologue', id]);
  }
 
  deleteCardiologue(id: number){
    this.cardiologueService.deleteEvent(id).subscribe( (data: any) => {
      console.log(data);
      this.getRendezvous(id);
    })
  }


  
}