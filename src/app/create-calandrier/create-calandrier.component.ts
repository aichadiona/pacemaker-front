import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionEventArgs, EventSettingsModel, PopupOpenEventArgs, ScheduleComponent, View } from '@syncfusion/ej2-angular-schedule';
import { Patient } from '../models/patient';
import { RendezVous } from '../models/rendezVous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-create-calandrier',
  template:`<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [eventSettings]='eventSettings'></ejs-schedule>`,
  templateUrl: './create-calandrier.component.html',
  styleUrls: ['./create-calandrier.component.css']
})
export class CreateCalandrierComponent  implements OnInit {

  @ViewChild('ejCalendar')
  public ejCalendar!: ScheduleComponent;

  public eventFields: Object = {
    id: 'id',
    subject: { name: 'subject', validation: { required: true } },
    description: { name: 'description' },
    startTime: { name: 'startTime', validation: { required: true } },
    endTime: { name: 'endTime', validation: { required: true } }
  };

  public calendarEvents: RendezVous[] = [];

  public newEvent: RendezVous = new RendezVous();

  constructor(private calendarEventService: RendezVousService) { }

  ngOnInit() {
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
  };

  this.calendarEventService.addEvent(eventData).subscribe(event => {
    this.ejCalendar.addEvent(event);
    this.newEvent = new RendezVous();
  });
}
updateEvent(event: any): void {
  const eventData = {
      id: event.Id,
      subject: event.Subject,
      description: event.Description,
      startTime: event.StartTime,
      endTime: event.EndTime,
      patients: event.patients,
  };

  this.calendarEventService.addEvent(eventData).subscribe(updatedEvent => {
    this.ejCalendar.refreshEvents();
   
  });
  
}

}