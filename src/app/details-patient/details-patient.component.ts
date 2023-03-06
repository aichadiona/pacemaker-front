import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.css']
})
export class DetailsPatientComponent implements OnInit {

  id!: number;
  patient!: Patient;
  constructor(private route: ActivatedRoute, private employeService: PatientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.patient = new Patient();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.patient = data;
    });
  }

}
