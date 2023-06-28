import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompteRenduComponent } from './update-compte-rendu.component';

describe('UpdateCompteRenduComponent', () => {
  let component: UpdateCompteRenduComponent;
  let fixture: ComponentFixture<UpdateCompteRenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompteRenduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCompteRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
