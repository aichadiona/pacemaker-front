import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilSecretaireComponent } from './accueil-secretaire/accueil-secretaire.component';
import { AdminComponent } from './admin/admin.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CompteRenduComponent } from './compte-rendu/compte-rendu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreateCalandrierComponent } from './create-calandrier/create-calandrier.component';
import { CreateCardiologueComponent } from './create-cardiologue/create-cardiologue.component';
import { CreateRendezVousComponent } from './create-rendez-vous/create-rendez-vous.component';
import { DetailsCardiologueComponent } from './details-cardiologue/details-cardiologue.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { DetailsRendezVousComponent } from './details-rendez-vous/details-rendez-vous.component';
import { GestionComponent } from './gestion/gestion.component';
import { ListCardiologueComponent } from './list-cardiologue/list-cardiologue.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { ListRendezVousPatientComponent } from './list-rendez-vous-patient/list-rendez-vous-patient.component';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';
import { ListsecretaireComponent } from './listsecretaire/listsecretaire.component';
import { PatientRVComponent } from './patient-rv/patient-rv.component';
// import { ListRendezVousComponent } from './list-rendez-vous/list-rendez-vous.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { PatientComponent } from './patient/patient.component';
import { RendezVousSecretaireComponent } from './rendez-vous-secretaire/rendez-vous-secretaire.component';
import { SecretaireDetailsComponent } from './secretaire-details/secretaire-details.component';
import { SecretaireRVComponent } from './secretaire-rv/secretaire-rv.component';
import { SecretaireUpdateComponent } from './secretaire-update/secretaire-update.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { TypeVisiteComponent } from './type-visite/type-visite.component';
import { UpdateCardiologueComponent } from './update-cardiologue/update-cardiologue.component';

import { UpdateRendezVousComponent } from './update-rendez-vous/update-rendez-vous.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { UsersComponent } from './users/users.component';
import { UtilisateurDetailsComponent } from './utilisateur-details/utilisateur-details.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ListCompteRenduComponent } from './list-compte-rendu/list-compte-rendu.component';
import { DetailCompteRenduComponent } from './detail-compte-rendu/detail-compte-rendu.component';
import { UpdateCompteRenduComponent } from './update-compte-rendu/update-compte-rendu.component';
import { RendezEssayeComponent } from './rendez-essaye/rendez-essaye.component';
import { UrgenceComponent } from './urgence/urgence.component';
import { CardiologistDashboardComponent } from './cardiologist-dashboard/cardiologist-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { ListeRDVComponent } from './liste-rdv/liste-rdv.component';


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
  {path:'calendrier/:id',component:CreateCalandrierComponent},
  {path:'listeRendezVous/:id',component:ListRendezVousPatientComponent},
  {path:'Utilisateur',component:UtilisateurComponent},
  {path:'Secretaire',component:SecretaireComponent},
  {path:'listSecretaire',component:ListsecretaireComponent},
  {path:'secretaireDetails/:id',component:SecretaireDetailsComponent},
  {path:'secretaireUpdateComponent/:id',component:SecretaireUpdateComponent},
  {path:'listeCardiologue',component:ListCardiologueComponent},
  {path:'cardiologueDetails/:id',component:DetailsCardiologueComponent},
  {path:'updateCardiologue/:id',component:UpdateCardiologueComponent},
  {path:'creationRV',component:PatientRVComponent},
  {path:'creationSecretaireRV',component:SecretaireRVComponent},
  {path:'admin',component:AdminComponent},
  {path:'users',component:UsersComponent},
  {path:'listUtilisateurs',component:ListUtilisateursComponent},
  {path:'updateUtilisateurs/:id',component:UpdateUtilisateurComponent},
  {path:'utilisateurDetails/:id',component:UtilisateurDetailsComponent},
  {path:'accueilSecretaire',component:AccueilSecretaireComponent},
  {path:'typeVisite',component:TypeVisiteComponent},
  {path:'rv/:id',component:RendezVousSecretaireComponent},
  {path:'listeCompteRendu',component:ListCompteRenduComponent},
  {path:'detailsCompteRendu/:id',component:DetailCompteRenduComponent},
  {path:'updateCompte/:id',component:UpdateCompteRenduComponent},
  {path:'essayeRendezVous/:id',component:RendezEssayeComponent},
  {path:'urgence',component:UrgenceComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tableau',component:TableauDeBordComponent},
  {path:'listeRDV/:id',component:ListeRDVComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
