import { Component, OnInit, ViewChild } from '@angular/core';
import { RendezVous } from '../models/rendezVous';
import { AppointmentService } from '../appointment-service.service';
import { Patient } from '../models/patient';
import { Cardiologue } from '../models/cardiologue';
import { Secretaire } from '../models/secretaire';
import { RendezVousService } from '../rendez-vous.service';
import { PatientService } from '../patient.service';
import { CardialogueService } from '../cardialogue.service';
import { EventSettingsModel,ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rendez-essaye',
  templateUrl: './rendez-essaye.component.html',
  styleUrls: ['./rendez-essaye.component.css']
})
export class RendezEssayeComponent implements OnInit {
  @ViewChild('ejCalendar')
  public ejCalendar!: ScheduleComponent;
  title = 'My Scheduler';
  appointments!: RendezVous[];
  eventSettings: EventSettingsModel = {
    fields: {
      id: 'id',
      subject: { name: 'subject', validation: { required: true } },
      startTime: { name: 'startTime', validation: { required: true } },
      endTime: { name: 'endTime', validation: { required: true } },
      isAllDay: { name: 'isAllDay' },
      location: { name: 'location' },
      description: { name: 'description' }
    },
    dataSource: []
  };
  
  public calendarEvents: RendezVous[] = [];
  employee: Patient = new Patient();
  // cardiologue: Cardiologue=new Cardiologue();
  cardiologue!: Cardiologue;
  cardiologueId!: number;
  sec: Secretaire=new Secretaire();
  public newEvent: RendezVous = new RendezVous();
  msg='';
  id!: number;
  constructor(private appointmentService: AppointmentService,private employeeService:PatientService,private cardioservice:CardialogueService,private calendarEventService:RendezVousService,
    private route: ActivatedRoute,private router: Router) {
    const id = sessionStorage.getItem('cardiologueId');
    if (id) {
      this.cardiologueId = +id;
    }
    
  }
  ngOnInit() {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
      this.eventSettings = {
        fields: this.eventSettings.fields,
        dataSource: this.appointments
      };
    });

    
  
    if (this.route.snapshot.params.hasOwnProperty('id')) {
      this.id = +this.route.snapshot.params['id'];
      console.log(this.id);
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
      this.cardioservice.getCardialogueById(this.id).subscribe(data=>{
        this.cardiologue=data;
        sessionStorage.setItem('cardiologueId', this.cardiologue.id.toString());
      })
      console.log(this.cardiologueId);
    }
  }
  
  onActionComplete(args: any): void {
    switch (args.requestType) {
      case 'eventCreated':
        const appointment = args.data[0];
        appointment.id_cardiologue = this.cardiologueId;
        appointment.id_patient = this.employee.id;
        console.log(this.cardiologueId)
        console.log(this.id)
        
        this.appointmentService.addAppointment(appointment,this.id,this.cardiologue).subscribe(appointment => {
          // this.appointments.push(appointment);
          this.ejCalendar.addEvent(appointment);

          // this.calendarEventService.addEvent(eventData,this.id,this.cardiologue,this.sec).subscribe(event => {
          //   this.ejCalendar.addEvent(event);
          //   this.newEvent = new RendezVous();
            
          // }), 

        });
        break;
      case 'eventChanged':
        this.appointmentService.updateAppointment(args.data[0]).subscribe(appointment => {
          const index = this.appointments.findIndex(a => a.id === appointment.id);
          this.appointments[index] = appointment;
        });
        break;
      case 'eventRemoved':
        this.appointmentService.deleteAppointment(args.data[0].id).subscribe(() => {
          const index = this.appointments.findIndex(a => a.id === args.data[0].id);
          this.appointments.splice(index, 1);
        });
        break;
    }
  }
  
  
  rendezVouslist(id:number){
    this.router.navigate(['listeRDV',id])
  }



  // onActionComplete(args: any): void {
  //   switch (args.requestType) {
  //     case 'eventCreated':
  //       const appointment = args.data[0];
  //       appointment.cardiologueId = this.cardiologueId;
  //     appointment.patientId = this.employee.id;
  //      this.appointmentService.addAppointment(args.data[0]).subscribe(appointment => {
  //         this.appointments.push(appointment);
  //       });
  //       break;
  //     case 'eventChanged':
  //       this.appointmentService.updateAppointment(args.data[0]).subscribe(appointment => {
  //         const index = this.appointments.findIndex(a => a.id === appointment.id);
  //         this.appointments[index] = appointment;
  //       });
  //       break;
  //     case 'eventRemoved':
  //       this.appointmentService.deleteAppointment(args.data[0].id).subscribe(() => {
  //         const index = this.appointments.findIndex(a => a.id === args.data[0].id);
  //         this.appointments.splice(index, 1);
  //       });
  //       break;
  //   }
  // }
}


