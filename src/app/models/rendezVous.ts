import { Patient } from "./patient";

export class RendezVous {
    id!: number;
    subject!: string;
    description!: string;
    startTime!: Date;
    endTime!: Date;
    patients!: Patient[];
}
// @ManyToOne
// @JsonIgnore
// private Patient patient;

// @ManyToOne
// @JsonIgnore
// private Cardialogue cardialogue;
// @ManyToOne
// @JsonIgnore
// private Secretaire secretaire;
// @JsonBackReference
// @OneToOne
// private CompteRendu compteRendu;

