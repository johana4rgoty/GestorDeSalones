import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaMateriaComponent } from './nueva-materia.component';

describe('NuevaMateriaComponent', () => {
  let component: NuevaMateriaComponent;
  let fixture: ComponentFixture<NuevaMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
