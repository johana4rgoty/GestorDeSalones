import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarSalonesComponent } from './listar-salones.component';

const routes: Routes = [{ path: '', component: ListarSalonesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarSalonesRoutingModule { }
