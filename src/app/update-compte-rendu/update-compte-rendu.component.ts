import { Component, OnInit } from '@angular/core';
import { CompteRendu } from '../models/compteRendu';
import { CompteRenduService } from '../compte-rendu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-compte-rendu',
  templateUrl: './update-compte-rendu.component.html',
  styleUrls: ['./update-compte-rendu.component.css']
})
export class UpdateCompteRenduComponent implements OnInit {

  id!: number;
  compteRendu: CompteRendu = new CompteRendu();
  constructor(private compteRenduService: CompteRenduService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.compteRenduService.getCompteById(this.id).subscribe(data => {
      this.compteRendu = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.compteRenduService.updateCompte(this.id, this.compteRendu).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/listeCompteRendu']);
  }
}

