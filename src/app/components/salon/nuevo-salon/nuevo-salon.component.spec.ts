import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSalonComponent } from './nuevo-salon.component';

describe('NuevoSalonComponent', () => {
  let component: NuevoSalonComponent;
  let fixture: ComponentFixture<NuevoSalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoSalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
