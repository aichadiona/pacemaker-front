import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardiologueComponent } from './list-cardiologue.component';

describe('ListCardiologueComponent', () => {
  let component: ListCardiologueComponent;
  let fixture: ComponentFixture<ListCardiologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardiologueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardiologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
