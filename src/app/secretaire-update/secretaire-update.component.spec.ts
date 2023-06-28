import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaireUpdateComponent } from './secretaire-update.component';

describe('SecretaireUpdateComponent', () => {
  let component: SecretaireUpdateComponent;
  let fixture: ComponentFixture<SecretaireUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaireUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaireUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
