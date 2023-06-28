import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaireRVComponent } from './secretaire-rv.component';

describe('SecretaireRVComponent', () => {
  let component: SecretaireRVComponent;
  let fixture: ComponentFixture<SecretaireRVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaireRVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaireRVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
