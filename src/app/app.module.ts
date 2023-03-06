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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScheduleModule,RecurrenceEditorModule,
    FormsModule,
    FullCalendarModule,ModalModule.forRoot()
    
  ],
  providers: [DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService,
    AgendaService,
    MonthAgendaService ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
registerLicense('Mgo+DSMBaFt/QHRqVVhlXVpHaVldX2NLfUNzT2dZdVx3ZDU7a15RRnVfQF9gSXhXcURmXHlXcQ==;Mgo+DSMBPh8sVXJ0S0J+XE9Bd1RBQmVWfFN0RnNcdVpwfldBcDwsT3RfQF5jS3xQdkNnXn5bdXxcRw==;ORg4AjUWIQA/Gnt2VVhkQlFac15JXnxPYVF2R2BJelR0dF9EZ0wxOX1dQl9gSXxRdUVlXXhfdXJVQmI=;MTE4Nzk3NkAzMjMwMmUzNDJlMzBtN1hlSkJYb2JkMXVSVmpwYUVEMW5VUE1IWFVrWTF6cHRIL3U1L2Z1cGZJPQ==;MTE4Nzk3N0AzMjMwMmUzNDJlMzBoQ0lVQ3RSNnBXeVRybHI4M1VMU3NBZUNyZGE1bHNEWDVGdzU3QlZNd0VnPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpDVmBWeEx0RWFab1t6cFVMYltBJAtUQF1hSn5RdEZjX3tZcXFTQWBe;MTE4Nzk3OUAzMjMwMmUzNDJlMzBCYXE2enJIb1JrcWZML2xOWktHNzM2OE1USDFnUWxNVDE4Qzl0NEZ5MkJvPQ==;MTE4Nzk4MEAzMjMwMmUzNDJlMzBiVGE5TWVjSDltRlAvOXpUelZia0pKeVNXWEJKQk9Cck9xK1BPdWQ1dlBrPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac15JXnxPYVF2R2BJelR0dF9EZ0wxOX1dQl9gSXxRdUVlXXhfdXNXTmc=;MTE4Nzk4MkAzMjMwMmUzNDJlMzBWYUpRclhUQkZjdDdWTjBtSkpOSXVncDdXeHJWd2dYYkR2K2pkcEdJcWxBPQ==;MTE4Nzk4M0AzMjMwMmUzNDJlMzBWdUZmeHh1clZKcHJYdi9UcVhhb0JYMVBSUXQvUndIMnJpQWdsR3JrUENzPQ==;MTE4Nzk4NEAzMjMwMmUzNDJlMzBCYXE2enJIb1JrcWZML2xOWktHNzM2OE1USDFnUWxNVDE4Qzl0NEZ5MkJvPQ==');
