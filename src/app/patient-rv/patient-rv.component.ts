import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-rv',
  templateUrl: './patient-rv.component.html',
  styleUrls: ['./patient-rv.component.css']
})
export class PatientRVComponent implements OnInit {

  patients: Patient[] = [];
  prenom!:string;
  constructor(private employeeService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.patients = data;
    });
  }

  patientDetails(id: number){
    this.router.navigate(['patientDetails', id]);
  }
  rendezVous(id: number){
    this.router.navigate(['essayeRendezVous', id]);
  }
  updatePatient(id: number){
    this.router.navigate(['PatientUpdateComponent', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }

  search(){
    if(this.prenom!=""){
      this.patients=this.patients.filter(res=>{
        return res.prenom.toLocaleLowerCase().match(this.prenom.toLocaleLowerCase());
      });
    }
    else if(this.prenom==""){
      this.ngOnInit();
    }
  
  }
  compteRendus(id: number){
    this.router.navigate(['CompteRenduComponents', id]);
  }

}
