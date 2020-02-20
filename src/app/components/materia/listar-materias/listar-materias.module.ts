import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarMateriasRoutingModule } from './listar-materias-routing.module';
import { ListarMateriasComponent } from './listar-materias.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListarMateriasComponent],
  imports: [
    CommonModule,
    ListarMateriasRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ListarMateriasModule { }

