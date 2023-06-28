import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardialogueService } from '../cardialogue.service';
import { Cardiologue } from '../models/cardiologue';

@Component({
  selector: 'app-update-cardiologue',
  templateUrl: './update-cardiologue.component.html',
  styleUrls: ['./update-cardiologue.component.css']
})
export class UpdateCardiologueComponent implements OnInit {

  id!: number;
  cardiologue: Cardiologue = new Cardiologue();
  constructor(private cardiologueService: CardialogueService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cardiologueService.getCardialogueById(this.id).subscribe(data => {
      this.cardiologue = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.cardiologueService.updateCardialogue(this.id, this.cardiologue).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/listeCardiologue']);
  }

}
