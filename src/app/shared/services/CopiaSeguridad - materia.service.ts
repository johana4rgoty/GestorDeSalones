import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  // URL = 'http://localhost:80/api/';

  constructor(private http: HttpClient) { }

  obtenerMaterias() {
    // return this.http.get(this.URL + `ObtenerMaterias.php`);
    return this.http.get(`/api/ObtenerMaterias.php`);
  }

  crearMateria(materia) {
    return this.http.post(`/api/CrearMateria.php`, JSON.stringify(materia));
  }

  borrarMateria(matId: number) {
    return this.http.get(`/api/BorrarMateria.php?matId=${matId}`);
  }

  buscarMateria(matId: number) {
    return this.http.get(`/api/BuscarMateria.php?matId=${matId}`);
  }

  editarMateria(materia) {
    return this.http.post(`/api/EditarMateria.php`, JSON.stringify(materia));
  }
}

