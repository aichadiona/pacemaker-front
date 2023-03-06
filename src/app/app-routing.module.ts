import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CompteRenduComponent } from './compte-rendu/compte-rendu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreateCalandrierComponent } from './create-calandrier/create-calandrier.component';
import { CreateCardiologueComponent } from './create-cardiologue/create-cardiologue.component';
import { CreateRendezVousComponent } from './create-rendez-vous/create-rendez-vous.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { DetailsRendezVousComponent } from './details-rendez-vous/details-rendez-vous.component';
import { GestionComponent } from './gestion/gestion.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { ListRendezVousPatientComponent } from './list-rendez-vous-patient/list-rendez-vous-patient.component';
// import { ListRendezVousComponent } from './list-rendez-vous/list-rendez-vous.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientComponent } from './patient/patient.component';

import { UpdateRendezVousComponent } from './update-rendez-vous/update-rendez-vous.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: '', redirectTo: 'connexion', pathMatch: 'full'},
  {path:'CompteRenduComponent', component: CompteRenduComponent},
  {path:'CreateRendezVousComponent',component:CreateRendezVousComponent},
  // {path:'listRendezVousComponent',component:ListRendezVousComponent},
  {path:'UpdateRendezVousComponent/:id',component:UpdateRendezVousComponent},
  {path:'DetailsRendezVousComponent/:id',component:DetailsRendezVousComponent},
  {path:'GestionComponent',component:GestionComponent},
  {path:'patients',component:ListPatientComponent},
  {path:'createpatients',component:PatientComponent},
  {path:'PatientUpdateComponent/:id',component:PatientUpdateComponent},
  {path:'patientDetails/:id',component:DetailsPatientComponent},
  {path:'CompteRenduComponents/:id', component: CompteRenduComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'cardiologue',component:CreateCardiologueComponent},
  {path:'calendrier',component:CreateCalandrierComponent},
  {path:'listeRendezVous',component:ListRendezVousPatientComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
