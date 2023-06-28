import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsecretaireComponent } from './listsecretaire.component';

describe('ListsecretaireComponent', () => {
  let component: ListsecretaireComponent;
  let fixture: ComponentFixture<ListsecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsecretaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
