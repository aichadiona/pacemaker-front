import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezVousService } from '../rendez-vous.service';
import { RendezVous } from '../models/rendezVous';

@Component({
  selector: 'app-details-rendez-vous',
  templateUrl: './details-rendez-vous.component.html',
  styleUrls: ['./details-rendez-vous.component.css']
})
export class DetailsRendezVousComponent implements OnInit {

  id!: number;
  rendezVous!: RendezVous;
  constructor(private route: ActivatedRoute, private employeService: RendezVousService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.rendezVous = new RendezVous();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.rendezVous = data;
    });
  }
}
