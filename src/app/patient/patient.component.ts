import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientService } from '../patient.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  registerFom!: FormGroup;
  submitted=false;
  patients: Patient = new Patient();
  constructor(private employeeService: PatientService,private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.registerFom = this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      email:['',Validators.required],
      age:['',Validators.required],
      adresse:['',Validators.required],
      numeroTelephone:['',Validators.required],
      dateImplantation:['',Validators.required],
      paysImplantation:['',Validators.required],
      centreImplantation:['',Validators.required],
      villeImplantation:['',Validators.required],
      nomOperateur:['',Validators.required],
      nomEquipe:['',Validators.required],
      indicationImplantation:['',Validators.required],
  
      //technique
      preparationMalade:['',Validators.required],
      voirDabord:['',Validators.required],
      miseEnPlaceOnde:['',Validators.required],
      mesurePaireOperatoire:['',Validators.required],
      boitier:['',Validators.required],
      loge:['',Validators.required],
      incidendtAccident:['',Validators.required],
      stimulateurTemporel:['',Validators.required],

    })
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.patients).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/patients']);
  }
  
  // onSubmit(){
  //   this.submitted=true;
  //   if(this.registerFom.invalid){
  //     return 
  //   }
  //   console.log(this.patients);
  //   this.saveEmployee();
  // }

  onSubmit() {
    this.submitted = true;
    // Vérifier la validité du formulaire
    if (this.registerFom.valid) {
      // Tous les champs sont valides, effectuez l'enregistrement
      this.saveEmployee();
      console.log(this.patients);
      console.log(this.registerFom.value);
      // Appeler la fonction pour enregistrer les données, etc.
    } else {
      // Des champs sont invalides, affichez un message ou effectuez une action appropriée
      console.log('Veuillez remplir tous les champs obligatoires.');
    }
  }

}
