import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  URL = 'http://localhost/api/';

  constructor(private http: HttpClient) { }

  obtenerMaterias() {
    return this.http.get(`${this.URL}ObtenerMaterias.php`);
  }

  crearMateria(materia) {
    return this.http.post(`${this.URL}CrearMateria.php`, JSON.stringify(materia));
  }

  borrarMateria(matId: number) {
    return this.http.get(`${this.URL}BorrarMateria.php?matId=${matId}`);
  }

  buscarMateria(matId: number) {
    return this.http.get(`${this.URL}BuscarMateria.php?matId=${matId}`);
  }

  editarMateria(materia) {
    return this.http.post(`${this.URL}EditarMateria.php`, JSON.stringify(materia));
  }
}

