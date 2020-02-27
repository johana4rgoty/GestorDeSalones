import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

// import { Observable } from 'rxjs/Observable';
// import { map, finalize } from 'rxjs/operators';
// import { MateriaI } from '../../shared/models/materia.interface';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private URL = 'http://localhost:80/api/materia/';

  constructor(private http: HttpClient) {}

  obtenerMaterias() {
    return this.http.get(this.URL + `ObtenerMaterias.php`);
  }

  crearMateria(materia) {
    return this.http.post(this.URL + `CrearMateria.php`, JSON.stringify(materia));
  }

  borrarMateria(matId: number) {
    return this.http.get(this.URL + `BorrarMateria.php?matId=${matId}`);
  }

  buscarMateria(matId: number) {
    return this.http.get(this.URL + `BuscarMateria.php?matId=${matId}`);
  }

  editarMateria(materia) {
    return this.http.put(this.URL + `EditarMateria.php`, JSON.stringify(materia));
  }
}

