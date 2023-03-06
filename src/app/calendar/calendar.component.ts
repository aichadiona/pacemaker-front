import { Component, OnInit,ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { BsModalService,BsModalRef} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  present:number=0;
  Absent:number=0;
  modalRef?:BsModalRef;
  title:any;
  events:any= [
    { title: 'present', date: '2023-01-01',color:'red' },
    { title: 'Absent', date: '2022-03-02' ,color:'#0000FF' },
    { title: 'present', date: '2022-04-02' ,color:'#0000FF' }
  ]
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events:this.events,
    eventClick:this.handleDateClick.bind(this),
  };
  @ViewChild('template')template!:string;
  start:any;
  config={
    animated:true
  };
  constructor(private modalService:BsModalService){}
  ngOnInit(): void {
   this.events.forEach((e:{[x:string]:string;})=>{
    if(e["title"]=='present'){
      this.present++;
    }else{
      this.Absent++;
    }
   });
   console.log(this.present);
   console.log(this.Absent);
  }
  handleDateClick(arg:any){
    console.log(arg);
    console.log(arg.event._def.title);
    this.title=arg.event._def.title;
    this.start=arg.event.start;
    this.modalRef=this.modalService.show(this.template,this.config);
  }

}
