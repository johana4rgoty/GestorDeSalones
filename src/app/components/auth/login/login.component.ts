import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { CoordinadorI } from '../../../shared/models/coordinador.interface';
import { UsuarioClase } from '../../../shared/models/usuarioClase.model';


import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private AuthServicio: AuthService) { }

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    passwd: new FormControl('', Validators.required)
  });

  ngOnInit() {}

  logIn(form: UsuarioClase) {
    const { usuario, passwd } = form;
    this.AuthServicio.login(usuario, passwd).pipe(first())
    .subscribe(
      res => {
        // console.log(res);
        // console.log(Object.keys(res).length);
        if (Object.keys(res).length === 2) {
          let u: UsuarioClase = {
              id: res[0]['cooId'],
              nombre: res[0]['cooNombre'],
              correo: res[0]['cooCorreo'],
              usuario: res[0]['cooUsuario'],
              passwd: res[0]['cooPasswd'],
              programa: res[0]['cooPrograma'],
              tipoUsuario: 'coordinador'
            };
          this.AuthServicio.setUserLoggedIn(u);
          this.router.navigate(['/materias']);
        } else {
          console.log('Error - Login');
          return;
        }
        // console.log(res[0]['cooNombre']);
        // tslint:disable-next-line: no-string-literal
        /*if (res['resultadoAPI'] === 'OK') {
          // this.router.navigate(['/materias']);
        } else {
          return;
        }*/
      },
      error => {
        console.error(error);
        return;
      });
  }
}
