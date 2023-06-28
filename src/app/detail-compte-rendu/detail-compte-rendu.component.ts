import { Component, OnInit } from '@angular/core';
import { CompteRendu } from '../models/compteRendu';
import { ActivatedRoute } from '@angular/router';
import { CompteRenduService } from '../compte-rendu.service';

@Component({
  selector: 'app-detail-compte-rendu',
  templateUrl: './detail-compte-rendu.component.html',
  styleUrls: ['./detail-compte-rendu.component.css']
})
export class DetailCompteRenduComponent implements OnInit {

  id!: number;
  compteRendu!: CompteRendu;
  constructor(private route: ActivatedRoute, private compteRenduService: CompteRenduService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.compteRendu = new CompteRendu();
    this.compteRenduService.getCompteById(this.id).subscribe( data => {
      this.compteRendu = data;
    });
  }


}
