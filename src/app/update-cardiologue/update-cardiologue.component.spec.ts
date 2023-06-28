import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCardiologueComponent } from './update-cardiologue.component';

describe('UpdateCardiologueComponent', () => {
  let component: UpdateCardiologueComponent;
  let fixture: ComponentFixture<UpdateCardiologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCardiologueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCardiologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
