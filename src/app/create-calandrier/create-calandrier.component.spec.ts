import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCalandrierComponent } from './create-calandrier.component';

describe('CreateCalandrierComponent', () => {
  let component: CreateCalandrierComponent;
  let fixture: ComponentFixture<CreateCalandrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCalandrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCalandrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
