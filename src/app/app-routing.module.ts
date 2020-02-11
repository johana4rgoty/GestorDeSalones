import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'coordinador', loadChildren: () => import('./components/coordinador/coordinador.module').then(m => m.CoordinadorModule) 
    //path: 'coordinador', component:CoordinadorComponent 
  },
  { 
    path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) 
    //path: 'login', component:LoginComponent
  },
  
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
