import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCardiologueComponent } from './details-cardiologue.component';

describe('DetailsCardiologueComponent', () => {
  let component: DetailsCardiologueComponent;
  let fixture: ComponentFixture<DetailsCardiologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCardiologueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCardiologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
