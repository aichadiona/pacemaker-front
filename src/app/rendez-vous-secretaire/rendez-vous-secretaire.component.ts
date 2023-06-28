import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { CardialogueService } from '../cardialogue.service';
import { Cardiologue } from '../models/cardiologue';
import { Patient } from '../models/patient';
import { RendezVous } from '../models/rendezVous';
import { Secretaire } from '../models/secretaire';
import { PatientService } from '../patient.service';
import { RendezVousService } from '../rendez-vous.service';
import { SecretaireService } from '../secretaire.service';

@Component({
  selector: 'app-rendez-vous-secretaire',
  templateUrl: './rendez-vous-secretaire.component.html',
  styleUrls: ['./rendez-vous-secretaire.component.css']
})
export class RendezVousSecretaireComponent  implements OnInit {
  [x: string]: any;

  @ViewChild('ejCalendar')
  public ejCalendar!: ScheduleComponent;
 
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
  // sec: Secretaire=new Secretaire();
  public newEvent: RendezVous = new RendezVous();
  sec!: Secretaire;
  secretaireId!: number;
  msg=''; 
  appointments!: RendezVous[];
  id!: number;
  constructor(private calendarEventService: RendezVousService,private employeeService: PatientService,private secreService:SecretaireService,
    private route: ActivatedRoute,
    private router: Router) {
      const id = sessionStorage.getItem('secretaireId');
      if (id) {
        this.secretaireId = +id;
      }
     }

     
    
    ngOnInit() :void{
      
      this.secreService.getAppointments().subscribe(appointments => {
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
        this.secreService.getSecretaireById(this.id).subscribe(data=>{
          this.sec=data;
          sessionStorage.setItem('secretaireId', this.sec.id.toString());
        })
        console.log(this.secretaireId);
      }
    }


    onActionComplete(args: any): void {
      switch (args.requestType) {
        case 'eventCreated':
          const appointment = args.data[0];
          appointment.id_secretaire =this.secretaireId;
          appointment.id_patient = this.employee.id;
          console.log(this.secretaireId)
          console.log(this.id)
          this.secreService.addAppointment(appointment,this.id,this.sec).subscribe(appointment => {
            this.appointments.push(appointment);
            this.ejCalendar.addEvent(appointment);
          });
          break;
        case 'eventChanged':
          this.secreService.updateAppointment(args.data[0]).subscribe(appointment => {
            const index = this.appointments.findIndex(a => a.id === appointment.id);
            this.appointments[index] = appointment;
          });
          break;
        case 'eventRemoved':
          this.secreService.deleteAppointment(args.data[0].id).subscribe(() => {
            const index = this.appointments.findIndex(a => a.id === args.data[0].id);
            this.appointments.splice(index, 1);
          });
          break;
      }
    }
    
  rendezVouslist(id:number){
    this.router.navigate(['listeRendezVous',id])
  }



  
}
