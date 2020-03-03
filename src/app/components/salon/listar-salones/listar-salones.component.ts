import { Component, OnInit } from '@angular/core';
import { SalonService } from './../../../shared/services/salon.service';

@Component({
  selector: 'app-listar-salones',
  templateUrl: './listar-salones.component.html',
  styleUrls: ['./listar-salones.component.css']
})
export class ListarSalonesComponent implements OnInit {

  constructor(private SalonServicio: SalonService) { }

  ngOnInit() {
  }

}
