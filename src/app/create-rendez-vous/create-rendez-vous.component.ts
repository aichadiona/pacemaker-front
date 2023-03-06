import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVousService } from '../rendez-vous.service';
import { RendezVous } from '../models/rendezVous';

@Component({
  selector: 'app-create-rendez-vous',
  templateUrl: './create-rendez-vous.component.html',
  styleUrls: ['./create-rendez-vous.component.css']
})
export class CreateRendezVousComponent implements OnInit {

  rendezVous: RendezVous = new RendezVous();
  constructor(private employeeService: RendezVousService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.rendezVous).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/listRendezVousComponent']);
  }
  
  onSubmit(){
    console.log(this.rendezVous);
    this.saveEmployee();
  }

}
