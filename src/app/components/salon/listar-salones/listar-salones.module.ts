import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarSalonesRoutingModule } from './listar-salones-routing.module';
import { ListarSalonesComponent } from './listar-salones.component';


@NgModule({
  declarations: [ListarSalonesComponent],
  imports: [
    CommonModule,
    ListarSalonesRoutingModule
  ]
})
export class ListarSalonesModule { }
