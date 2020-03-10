import { Injectable, Output, EventEmitter } from '@angular/core';
// import { CoordinadorI } from '../../shared/models/coordinador.interface'; 
// import { CoordinadorClase } from '../models/coordinadorClase.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:80/api/auth/';
  
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(this.URL + `login.php`, {
      cooUsuario: username,
      cooPasswd: password
    });
  }

  logOut() {
    // this.afAuth.auth.signOut();
  }

}
