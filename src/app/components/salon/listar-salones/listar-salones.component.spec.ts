import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSalonesComponent } from './listar-salones.component';

describe('ListarSalonesComponent', () => {
  let component: ListarSalonesComponent;
  let fixture: ComponentFixture<ListarSalonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSalonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSalonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
