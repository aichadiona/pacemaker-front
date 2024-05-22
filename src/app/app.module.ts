import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CompteRenduComponent } from './compte-rendu/compte-rendu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListCompteRenduComponent } from './list-compte-rendu/list-compte-rendu.component';
import { CreateRendezVousComponent } from './create-rendez-vous/create-rendez-vous.component';
import { UpdateRendezVousComponent } from './update-rendez-vous/update-rendez-vous.component';
import { DetailsRendezVousComponent } from './details-rendez-vous/details-rendez-vous.component';
import { GestionComponent } from './gestion/gestion.component';
import { PatientComponent } from './patient/patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ScheduleModule,RecurrenceEditorModule,DayService,WeekService,MonthService,MonthAgendaService, AgendaService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { registerLicense } from '@syncfusion/ej2-base';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateCardiologueComponent } from './create-cardiologue/create-cardiologue.component';
import { CreateCalandrierComponent } from './create-calandrier/create-calandrier.component';
import { ListRendezVousPatientComponent } from './list-rendez-vous-patient/list-rendez-vous-patient.component';
import { LoginComponent } from './login/login.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { ListsecretaireComponent } from './listsecretaire/listsecretaire.component';
import { SecretaireDetailsComponent } from './secretaire-details/secretaire-details.component';
import { SecretaireUpdateComponent } from './secretaire-update/secretaire-update.component';
import { ListCardiologueComponent } from './list-cardiologue/list-cardiologue.component';
import { UpdateCardiologueComponent } from './update-cardiologue/update-cardiologue.component';
import { DetailsCardiologueComponent } from './details-cardiologue/details-cardiologue.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { PatientRVComponent } from './patient-rv/patient-rv.component';
import { AdminComponent } from './admin/admin.component';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';
import { UtilisateurDetailsComponent } from './utilisateur-details/utilisateur-details.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { UsersComponent } from './users/users.component';
import { AccueilSecretaireComponent } from './accueil-secretaire/accueil-secretaire.component';
import { SecretaireRVComponent } from './secretaire-rv/secretaire-rv.component';
import { TypeVisiteComponent } from './type-visite/type-visite.component';
import { RendezVousSecretaireComponent } from './rendez-vous-secretaire/rendez-vous-secretaire.component';
import { UpdateCompteRenduComponent } from './update-compte-rendu/update-compte-rendu.component';
import { DetailCompteRenduComponent } from './detail-compte-rendu/detail-compte-rendu.component';
import { RendezEssayeComponent } from './rendez-essaye/rendez-essaye.component';
import { UrgenceComponent } from './urgence/urgence.component';
import { CardiologistDashboardComponent } from './cardiologist-dashboard/cardiologist-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { ListeRDVComponent } from './liste-rdv/liste-rdv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    CompteRenduComponent,
    ConnexionComponent,
    ListCompteRenduComponent,
    CreateRendezVousComponent,
    UpdateRendezVousComponent,
    DetailsRendezVousComponent,
    GestionComponent,
    PatientComponent,
    DetailsPatientComponent,
    ListPatientComponent,
    PatientUpdateComponent,
    CalendarComponent,
    CreateCardiologueComponent,
    CreateCalandrierComponent,
    ListRendezVousPatientComponent,
    LoginComponent,
    UtilisateurComponent,
    SecretaireComponent,
    ListsecretaireComponent,
    SecretaireDetailsComponent,
    SecretaireUpdateComponent,
    ListCardiologueComponent,
    UpdateCardiologueComponent,
    DetailsCardiologueComponent,
    AdministrateurComponent,
    PatientRVComponent,
    AdminComponent,
    ListUtilisateursComponent,
    UtilisateurDetailsComponent,
    UpdateUtilisateurComponent,
    UsersComponent,
    AccueilSecretaireComponent,
    SecretaireRVComponent,
    TypeVisiteComponent,
    RendezVousSecretaireComponent,
    UpdateCompteRenduComponent,
    DetailCompteRenduComponent,
    RendezEssayeComponent,
    UrgenceComponent,
    CardiologistDashboardComponent,
    DashboardComponent,
    TableauDeBordComponent,
    ListeRDVComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScheduleModule,RecurrenceEditorModule,
    FormsModule,
    FullCalendarModule,ModalModule.forRoot(),
    ReactiveFormsModule,
    NgxChartsModule
    
  ],
  providers: [DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService,
    AgendaService,
    MonthAgendaService ],
  bootstrap: [AppComponent]
  
})
export class AppModule {
  constructor() {
    const licenseKey = 'Mgo+DSMBaFt+QHJqVk1mQ1dbdF9AXnNKdFZ1T2Bebz4Nf1dGYl9RQXZYQ1hmSn1bd0VhWA==;Mgo+DSMBPh8sVXJ1S0R+X1pCaVldX2NLfUN1T2ZadV13ZDU7a15RRnVfR11kSHtWdUZrWH1acQ==;ORg4AjUWIQA/Gnt2VFhiQlJPcEBEQmFJfFBmRmlcfFRzc0UmHVdTRHRcQlhjTn9Wc0ZgUX5deXU=;MTk1ODcyOUAzMjMxMmUzMjJlMzNuVGVobGY2V3Q2Yk5ZYkYrcWlVOXFTcWVqSk1aREpORWppL1FkUEZEZlhzPQ==;MTk1ODczMEAzMjMxMmUzMjJlMzNuKzBKaFZJUFYzZkE3c2lOOVFMemtGUFdsbHlxZndma0VDdFRwZzlpOUhzPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldW3xLflF1VWBTel16d1JWACFaRnZdQV1mSXlSc0BgWndfeXJU;MTk1ODczMkAzMjMxMmUzMjJlMzNvNk1PaElHK3lhNTRwYVZyU3d1NTcyeCsyc2dDbW01UlJhWk9jZXlPeXBNPQ==;MTk1ODczM0AzMjMxMmUzMjJlMzNqcEp4QVRnOUFCNDZjSk9MZXhBRFBlR2NhbTZ5K0U5ejNxMWFZYk5XTDM0PQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcEBEQmFJfFBmRmlcfFRzc0UmHVdTRHRcQlhjTn9Wc0ZgUX1bcXU=;MTk1ODczNUAzMjMxMmUzMjJlMzNoakdrZDQ0cUpDWXl4K3RPNmRrRDdOWk1OWDZwVlNRSlhSYjMrdUlyQTIwPQ==;MTk1ODczNkAzMjMxMmUzMjJlMzNVUmgrbkpQVCsxM3ZkN0tYVy9WK1BhWmIrZ1ZVcXVpNGp3UEVablZoWFMwPQ==;MTk1ODczN0AzMjMxMmUzMjJlMzNvNk1PaElHK3lhNTRwYVZyU3d1NTcyeCsyc2dDbW01UlJhWk9jZXlPeXBNPQ==';
    registerLicense(licenseKey);
  }
 }
 registerLicense('GTIlMmhhYn1hfWBoY2V8Y2V8YWNhYHNiZmlmYGlgZGgyOjA7Mn03Ojw9NhMmMjcxfTY3Jn0gPQ==')