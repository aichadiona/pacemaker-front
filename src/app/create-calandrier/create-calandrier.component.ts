import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionEventArgs, EventSettingsModel, PopupOpenEventArgs, ScheduleComponent, View } from '@syncfusion/ej2-angular-schedule';
import { CardialogueService } from '../cardialogue.service';
import { Cardiologue } from '../models/cardiologue';
import { Patient } from '../models/patient';
import { RendezVous } from '../models/rendezVous';
import { Secretaire } from '../models/secretaire';
import { Utilisateur } from '../models/utilisateur';
import { PatientService } from '../patient.service';
import { RendezVousService } from '../rendez-vous.service';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-create-calandrier',
  template:`<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [eventSettings]='eventSettings'></ejs-schedule>`,
  templateUrl: './create-calandrier.component.html',
  styleUrls: ['./create-calandrier.component.css']
})
export class CreateCalandrierComponent  implements OnInit {
  [x: string]: any;

  @ViewChild('ejCalendar')
  public ejCalendar!: ScheduleComponent;
  patients: Patient[] = [];
  public eventFields: Object = {
 
    subject: { name: 'subject', validation: { required: true } },
    description: { name: 'description' },
    startTime: { name: 'startTime', validation: { required: true } },
    endTime: { name: 'endTime', validation: { required: true } }
  };

  public calendarEvents: RendezVous[] = [];
  employee: Patient = new Patient();
  // cardiologue: Cardiologue=new Cardiologue();
  sec: Secretaire=new Secretaire();
  public newEvent: RendezVous = new RendezVous();
  msg='';
  id!: number;
  cardiologue!: Cardiologue;
  cardiologueId!: number;
  constructor(private calendarEventService: RendezVousService,private employeeService: PatientService,private cardioservice:CardialogueService,
    private route: ActivatedRoute,private router: Router) {
      const id = sessionStorage.getItem('cardiologueId');
      if (id) {
        this.cardiologueId = +id;
      }
     }

  ngOnInit():void {
    this.id = +this.route.snapshot.params['id'];
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
    this.cardioservice.getCardialogueById(this.id).subscribe(data=>{
      this.cardiologue=data;
      sessionStorage.setItem('cardiologueId', this.cardiologue.id.toString());
    })
    console.log(this.id);
    this.calendarEventService.getAllEvents().subscribe(events => {
      this.calendarEvents = events;
     
    });
   
}
addEvent(): void {
  const eventData = {
    id:this.newEvent.id,
    subject: this.newEvent.subject,
    description: this.newEvent.description,
    startTime: new Date(this.newEvent.startTime),
    endTime: new Date(this.newEvent.endTime),
    patients: this.newEvent.patients,
    cardiologue:this.newEvent.cardiologue,
    secretaire:this.newEvent.secretaire,
    id_patient:this.employee.id,
    id_cardiologue:this.cardiologue.id,
    id_secretaire:this.sec.id_secretaire,
    heurRDV:this.newEvent.heurRDV,

  };
  
  this.calendarEventService.addEvent(eventData,this.id,this.cardiologue,this.sec).subscribe(event => {
    this.ejCalendar.addEvent(event);
    this.newEvent = new RendezVous();
    
  }),   
  this.goToCardiologueList();
  console.log("exception received")
  this.msg="rendez non ajouter"
  this.router.navigate(['/calendrier']);

}
goToCardiologueList(){
  this.router.navigate(['/calendrier']);
}

updateEvent(event: any): void {
  const eventData = {
      id: event.Id,
      subject: event.Subject,
      description: event.Description,
      startTime: event.StartTime,
      endTime: event.EndTime,
      patients: event.patients,
      cardiologue:this.newEvent.cardiologue,
      secretaire:this.newEvent.secretaire,
      id_patient:this.newEvent.id_patient,
      id_cardiologue:this.newEvent.id_cardiologue,
      id_secretaire:this.newEvent.id_secretaire,
      heurRDV:this.newEvent.heurRDV,
  };

  this.calendarEventService.addEvent(eventData,this.id,this.cardiologue,this.sec).subscribe(updatedEvent => {
    this.ejCalendar.refreshEvents();
   
  });
  
}

rendezVouslist(id:number){
  this.router.navigate(['listeRendezVous',id])
}

}


