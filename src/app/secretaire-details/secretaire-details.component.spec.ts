import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaireDetailsComponent } from './secretaire-details.component';

describe('SecretaireDetailsComponent', () => {
  let component: SecretaireDetailsComponent;
  let fixture: ComponentFixture<SecretaireDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaireDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
