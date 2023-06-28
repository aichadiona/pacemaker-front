import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezEssayeComponent } from './rendez-essaye.component';

describe('RendezEssayeComponent', () => {
  let component: RendezEssayeComponent;
  let fixture: ComponentFixture<RendezEssayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezEssayeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendezEssayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
