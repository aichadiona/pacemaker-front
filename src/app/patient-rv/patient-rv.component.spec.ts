import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRVComponent } from './patient-rv.component';

describe('PatientRVComponent', () => {
  let component: PatientRVComponent;
  let fixture: ComponentFixture<PatientRVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
