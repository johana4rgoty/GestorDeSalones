import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private AuthServicio: AuthService) { }

  // tslint:disable-next-line: member-ordering
  username: string;
  passwrd: string;

  ngOnInit() {
  }

  login(): void {
    if (this.username === 'admin' && this.passwrd === 'admin'){
     this.router.navigate(['home']);
    } else {
      alert('Credenciales Invalidas');
    }
  }

}
https://youtu.be/DxplE-R2wwM?t=1382