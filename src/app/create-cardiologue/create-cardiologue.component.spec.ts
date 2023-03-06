import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardiologueComponent } from './create-cardiologue.component';

describe('CreateCardiologueComponent', () => {
  let component: CreateCardiologueComponent;
  let fixture: ComponentFixture<CreateCardiologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCardiologueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCardiologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
