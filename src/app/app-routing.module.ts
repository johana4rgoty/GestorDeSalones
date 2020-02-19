import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Esta ruta se crea para cuando vamos a nuestra app aparece en blanco...esta sea redirijida a home
  {
    path: 'coordinador', loadChildren: () => import('./components/coordinador/coordinador.module').then(m => m.CoordinadorModule)
    // path: 'coordinador', component:CoordinadorComponent

  },

  {
    path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule)
    // path: 'login', component:LoginComponent

  },

  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'salones', loadChildren: () => import('./components/salon/listar-salones/listar-salones.module').then(m => m.ListarSalonesModule)
  },


  {
    // tslint:disable-next-line: max-line-length
    path: 'materias', loadChildren: () => import('./components/materia/listar-materias/listar-materias.module').then(m => m.ListarMateriasModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
