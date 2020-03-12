import { Injectable, Output, EventEmitter } from '@angular/core';
// import { CoordinadorI } from '../../shared/models/coordinador.interface'; 
// import { CoordinadorClase } from '../models/coordinadorClase.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioClase } from '../models/usuarioClase.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:80/api/auth/';
  public statusLogin = false;
  public usserLogged: UsuarioClase;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(this.URL + `login.php`, {
      cooUsuario: username,
      cooPasswd: password
    });
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.statusLogin = false;
  }

  setUserLoggedIn(user: UsuarioClase) {
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.statusLogin = true;
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
