import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousSecretaireComponent } from './rendez-vous-secretaire.component';

describe('RendezVousSecretaireComponent', () => {
  let component: RendezVousSecretaireComponent;
  let fixture: ComponentFixture<RendezVousSecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezVousSecretaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendezVousSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
