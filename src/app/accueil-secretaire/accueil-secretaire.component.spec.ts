import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilSecretaireComponent } from './accueil-secretaire.component';

describe('AccueilSecretaireComponent', () => {
  let component: AccueilSecretaireComponent;
  let fixture: ComponentFixture<AccueilSecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilSecretaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
