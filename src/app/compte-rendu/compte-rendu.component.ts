import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteRenduService } from '../compte-rendu.service';
import { CompteRendu } from '../models/compteRendu';
import { Patient } from '../models/patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-compte-rendu',
  templateUrl: './compte-rendu.component.html',
  styleUrls: ['./compte-rendu.component.css']
})
export class CompteRenduComponent implements OnInit {
  id!: number;
  employee: Patient = new Patient();
compteRendu: CompteRendu = new CompteRendu();
  constructor(private employeeService: CompteRenduService,pat:PatientService,
    private route: ActivatedRoute,
    private router: Router) { }
    

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.compteRendu = data;
    }, error => console.log(error));
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.compteRendu).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/CompteRenduComponent']);
  }
  
  onSubmit(){
    console.log(this.compteRendu);
    this.saveEmployee();
  }
  deconnexion(){
    this.router.navigate(['connexion']);
  }
 
}
