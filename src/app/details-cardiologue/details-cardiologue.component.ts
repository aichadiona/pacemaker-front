import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardialogueService } from '../cardialogue.service';
import { Cardiologue } from '../models/cardiologue';

@Component({
  selector: 'app-details-cardiologue',
  templateUrl: './details-cardiologue.component.html',
  styleUrls: ['./details-cardiologue.component.css']
})
export class DetailsCardiologueComponent implements OnInit {

  id!: number;
  cardiologue!: Cardiologue;
  constructor(private route: ActivatedRoute, private cardiologueService: CardialogueService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cardiologue = new Cardiologue();
    this.cardiologueService.getCardialogueById(this.id).subscribe( data => {
      this.cardiologue = data;
    });
  }

}
