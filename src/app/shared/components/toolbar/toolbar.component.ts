import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public appName = 'GSalon';

  constructor(public AuthSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogOut(): void {
    this.AuthSvc.logOut();
    this.router.navigate(['/home']);
  }

}
