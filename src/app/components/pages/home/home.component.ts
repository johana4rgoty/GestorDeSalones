import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];
  constructor(private http: HttpClient) {
    /* this.http.get('http://localhost/gestorsalones.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error)); */
  }

  ngOnInit() {
  }

}
