import { Injectable } from '@angular/core';
import { UsuarioClase } from '../models/usuarioClase.model';

@Injectable({
  providedIn: 'root'
})
export class CoordinadorService {

  public usserLogged: UsuarioClase;

  constructor() {}

  setUserLoggedIn(user: UsuarioClase) {
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
