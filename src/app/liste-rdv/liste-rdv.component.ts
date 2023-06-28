import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../models/patient';
import { RendezVous } from '../models/rendezVous';
import { PatientService } from '../patient.service';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-liste-rdv',
  templateUrl: './liste-rdv.component.html',
  styleUrls: ['./liste-rdv.component.css']
})
export class ListeRDVComponent implements OnInit{
  cardiologues: RendezVous[]=[];
  employee: Patient = new Patient();
  prenom!: string;
  nom!:string;
  id!: number;
  constructor(private cardiologueService:RendezVousService,private router:Router,private patientService:PatientService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.getRendezvous(this.id);
    this.getPatientById(this.id);
    // this.patientService.getEmployeeById(this.id).subscribe(data => {
    //   this.employee = data;
    // }, error => console.log(error));

    

  }
  getPatientById(id: number) {
    this.patientService.getEmployeeById(id).subscribe((patient: Patient) => {
      this.nom = patient.nom;
      this.prenom = patient.prenom;
    });
  }
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
