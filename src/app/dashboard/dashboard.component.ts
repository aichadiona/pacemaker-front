import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js'
import Chart from 'chart.js/auto'
import { PatientService } from '../patient.service';
import { CardialogueService } from '../cardialogue.service';
import { Patient } from '../models/patient';
import { RendezVousService } from '../rendez-vous.service';
import { AppointmentService } from '../appointment-service.service';
import { CompteRenduService } from '../compte-rendu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numberOfPatients!: number;
  numberOfCardiologues!: number;
  numberOfRendezVous!:number;
  numberOfCompte!:number;
  patients: Patient[] = [];
  constructor(private patientService: PatientService,private cardiologueService:CardialogueService,private rv:AppointmentService,private compteRendu:CompteRenduService) { }
  ngOnInit(): void {
    this.patientService.getNumberOfPatients().subscribe(count => {
      this.numberOfPatients = count;
    });
  
    this.cardiologueService.getNumberOfCardiologues().subscribe(count => {
      this.numberOfCardiologues = count;
    });

      this.patientService.getEmployeesList().subscribe(data => {
        this.patients = data;
      });
   
      this.rv.getNumberOfRendezVous().subscribe(count => {
        this.numberOfRendezVous = count;
      });
      this.compteRendu.getNumberOfCompteRendu().subscribe(count => {
        this.numberOfCompte = count;
      });
    
  }
  
  }
  
       
   

