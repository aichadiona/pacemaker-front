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
  constructor(private compteRenduservice: CompteRenduService,
    private route: ActivatedRoute,
    private router: Router) { }
    

    
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.compteRenduservice.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    }, error => console.log(error));
  }

  saveEmployee(){
    this.compteRenduservice.createCompteRendu(this.id,this.compteRendu).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/listeCompteRendu']);
  }
  
  onSubmit(){
    console.log(this.compteRendu);
    this.saveEmployee();
  }
  deconnexion(){
    this.router.navigate(['connexion']);
  }
 
}
