import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVousService } from '../rendez-vous.service';
import { RendezVous } from '../models/rendezVous';

@Component({
  selector: 'app-update-rendez-vous',
  templateUrl: './update-rendez-vous.component.html',
  styleUrls: ['./update-rendez-vous.component.css']
})
export class UpdateRendezVousComponent implements OnInit {

  id!: number;
  rendezVous: RendezVous = new RendezVous();
  constructor(private employeeService: RendezVousService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.rendezVous = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.rendezVous).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/rendezVous']);
  }
}

