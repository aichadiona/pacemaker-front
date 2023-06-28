import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompteRenduComponent } from './detail-compte-rendu.component';

describe('DetailCompteRenduComponent', () => {
  let component: DetailCompteRenduComponent;
  let fixture: ComponentFixture<DetailCompteRenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCompteRenduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCompteRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
