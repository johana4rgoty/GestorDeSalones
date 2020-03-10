import { Injectable } from '@angular/core';
import { CoordinadorClase } from '../models/coordinadorClase.model';

@Injectable({
  providedIn: 'root'
})
export class CoordinadorService {

  private isUserLoggedIn;
  public usserLogged: CoordinadorClase;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: CoordinadorClase) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
