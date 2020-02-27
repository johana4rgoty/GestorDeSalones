import { Component, OnInit } from '@angular/core';
import { MateriaService } from './../materia.service';

@Component({
  selector: 'app-listar-materias',
  templateUrl: './listar-materias.component.html',
  styleUrls: ['./listar-materias.component.css']
})
export class ListarMateriasComponent implements OnInit {

  materias = null;
  materia = {
    matId: null,
    matCodigo: null,
    matNombre: null,
    matEstudiantes: null,
    matIntensidadHoraria: null,
    matPrioridadHorario: null,
    matRestriccionSalon: null,
    matNombreProfesor: null,
    matContactoProfesor: null,
    coordinador_cooId: null
  };

  constructor(private MateriaServicio: MateriaService) { }

  ngOnInit() {
    this.obtenerMaterias();
  }

  // https://github.com/xcheko51x/CRUD-MySQL-PHP-Angular
  // https://www.youtube.com/watch?v=m_VSSdAESBE&list=LL-BcnJ2SEv2aO0BEWVbrrAg&index=10&t=0s
  obtenerMaterias() {
    this.MateriaServicio.obtenerMaterias()
    .subscribe(
      result => this.materias = result
    );
  }

  crearMateria() {
    this.MateriaServicio.crearMateria(this.materia).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerMaterias();
        }
      }
    );
  }
  borrarMateria(idMateria) {
    this.MateriaServicio.borrarMateria(idMateria).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerMaterias();
        }
      }
    );
  }
  editarMateria() {
    this.MateriaServicio.editarMateria(this.materia).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerMaterias();
        }
      }
    );
  }
  buscarMateria(idMateria) {
    this.MateriaServicio.buscarMateria(idMateria).subscribe(
      result => this.materia = result[0]
    );
  }
  hayRegistros() {
    if (this.materias == null) {
      return false;
    } else {
      return true;
    }
  }
}
