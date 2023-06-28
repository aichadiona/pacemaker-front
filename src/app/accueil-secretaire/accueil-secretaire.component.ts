import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Secretaire } from '../models/secretaire';
import { SecretaireService } from '../secretaire.service';

@Component({
  selector: 'app-accueil-secretaire',
  templateUrl: './accueil-secretaire.component.html',
  styleUrls: ['./accueil-secretaire.component.css']
})
export class AccueilSecretaireComponent implements OnInit{

  sec: Secretaire=new Secretaire();
  id!: number;
  constructor(private secreService:SecretaireService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
   
  }

}
