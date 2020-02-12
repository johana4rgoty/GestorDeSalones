import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarMateriasComponent } from './listar-materias.component';

const routes: Routes = [{ path: '', component: ListarMateriasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarMateriasRoutingModule { }
