import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { RendezVous } from '../models/rendezVous';
import { PatientService } from '../patient.service';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-list-rendez-vous-patient',
  templateUrl: './list-rendez-vous-patient.component.html',
  styleUrls: ['./list-rendez-vous-patient.component.css']
})
export class ListRendezVousPatientComponent implements OnInit {
  patients: Patient[] = [];
  // rendezVous:RendezVous[]=[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService['getPatientsWithRendezVous']().subscribe(
      (      data: Patient[]) => {
        this.patients = data;
      },
      (      error: any) => {
        console.log(error);
      }
    );
  }
}