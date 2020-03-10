import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { CoordinadorI } from '../../../shared/models/coordinador.interface';
import { CoordinadorClase } from '../../../shared/models/coordinadorClase.model';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private AuthServicio: AuthService) { }

  loginForm = new FormGroup({
    cooUsuario: new FormControl('', Validators.required),
    cooPasswd: new FormControl('', Validators.required)
  });

  ngOnInit() {}

  // logIn(form: CoordinadorI) {
  logIn(form: CoordinadorClase) {
    // , event: Event
    const { cooUsuario, cooPasswd } = form;
    // event.preventDefault(); // Avoid default action for the submit button of the login form
    // Calls service to login user to the api rest

    this.AuthServicio.login(cooUsuario, cooPasswd).pipe(first())
    .subscribe(
      res => {
        console.log(res);
        console.log(Object.keys(res).length);
        
        //console.log(res[0]['cooNombre']);
        // tslint:disable-next-line: no-string-literal

        if (res['resultadoAPI'] === 'OK') {
          // this.router.navigate(['/materias']);
        } else {
          return;
        }
      },
      error => {
        console.error(error);
        return;
      });
  }
}
