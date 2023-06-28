import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-details',
  templateUrl: './utilisateur-details.component.html',
  styleUrls: ['./utilisateur-details.component.css']
})
export class UtilisateurDetailsComponent implements OnInit {

  id!: number;
  utilisateur!: Utilisateur;
  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.utilisateur = new Utilisateur();
    this.utilisateurService.getUtilisateurById(this.id).subscribe( data => {
      this.utilisateur = data;
    });
  }

}
