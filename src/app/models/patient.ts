import { RendezVous } from "./rendezVous";

export class Patient {
    id!: number;
    nom!: string;
    prenom!: string;
    email!: string;
    adresse!: string;
    numeroTelephone!: string;
    age!: number;
    login!: string;
    passwd!: string;
    dateImplantation!:Date;
    paysImplantation!:String ;
    centreImplantation!:String ;
    
    nomOperateur!:String ;
    nomEquipe!:String ;
    indicationImplantation!:String ;

    //technique
    preparationMalade!:String ;
    voirDabord!:String ;
    miseEnPlaceOnde!:String ;
	mesurePaireOperatoire!:String ;
    boitier!:String ;
    loge!:String ;
	incidendtAccident!:String ;
    stimulateurTemporel!:String ;
    rendezvous!: RendezVous[];
    
}


