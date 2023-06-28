import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../models/patient';
import { Secretaire } from '../models/secretaire';
import { SecretaireService } from '../secretaire.service';

@Component({
  selector: 'app-secretaire-details',
  templateUrl: './secretaire-details.component.html',
  styleUrls: ['./secretaire-details.component.css']
})
export class SecretaireDetailsComponent implements OnInit {

  id!: number;
  secretaire!: Secretaire;
  constructor(private route: ActivatedRoute, private secretaireService: SecretaireService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.secretaire = new Secretaire();
    this.secretaireService.getSecretaireById(this.id).subscribe( data => {
      this.secretaire = data;
    });
  }
}
