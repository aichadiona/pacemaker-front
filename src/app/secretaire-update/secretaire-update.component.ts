import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Secretaire } from '../models/secretaire';
import { PatientService } from '../patient.service';
import { SecretaireService } from '../secretaire.service';

@Component({
  selector: 'app-secretaire-update',
  templateUrl: './secretaire-update.component.html',
  styleUrls: ['./secretaire-update.component.css']
})
export class SecretaireUpdateComponent implements OnInit {

  id!: number;
  secretaire: Secretaire = new Secretaire();
  constructor(private secretaireService: SecretaireService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.secretaireService.getSecretaireById(this.id).subscribe(data => {
      this.secretaire = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.secretaireService.updateSecretaire(this.id, this.secretaire).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/listSecretaire']);
  }
}
