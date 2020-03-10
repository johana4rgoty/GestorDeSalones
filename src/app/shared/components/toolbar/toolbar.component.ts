import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public appName = 'GSalon';

  constructor(public AuthSvc: AuthService) { }

  ngOnInit() {
  }

  onLogOut(): void{
    this.AuthSvc.logOut();
  }

}
