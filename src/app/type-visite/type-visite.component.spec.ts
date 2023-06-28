import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVisiteComponent } from './type-visite.component';

describe('TypeVisiteComponent', () => {
  let component: TypeVisiteComponent;
  let fixture: ComponentFixture<TypeVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeVisiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
