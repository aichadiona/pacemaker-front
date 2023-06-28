import { Time } from "@angular/common";
import { Cardiologue } from "./cardiologue";
import { CompteRendu } from "./compteRendu";
import { Patient } from "./patient";
import { Secretaire } from "./secretaire";

export class RendezVous {
    id!: number;
    subject!: string;
    description!: string;
    startTime!: Date;
    endTime!: Date;
    heurRDV!:Time;
    id_patient!:number;
    id_cardiologue!:number;
    id_secretaire!:number;
    patients!: Patient;
    cardiologue!:Cardiologue;
  
    secretaire!:Secretaire;



}

