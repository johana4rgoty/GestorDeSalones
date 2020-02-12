import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarMateriasRoutingModule } from './listar-materias-routing.module';
import { ListarMateriasComponent } from './listar-materias.component';


@NgModule({
  declarations: [ListarMateriasComponent],
  imports: [
    CommonModule,
    ListarMateriasRoutingModule
  ]
})
export class ListarMateriasModule { }
