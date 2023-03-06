import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompteRenduComponent } from './list-compte-rendu.component';

describe('ListCompteRenduComponent', () => {
  let component: ListCompteRenduComponent;
  let fixture: ComponentFixture<ListCompteRenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompteRenduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompteRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
