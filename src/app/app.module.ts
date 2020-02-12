import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoSalonComponent } from './components/salon/nuevo-salon/nuevo-salon.component';
import { NuevoSalonModule } from './components/salon/nuevo-salon/nuevo-salon.module';
import { NuevaMateriaComponent } from './components/materia/nueva-materia/nueva-materia.component';
import { NuevaMateriaModule } from './components/materia/nueva-materia/nueva-materia.module';
import { MostrarComponent } from './components/salon/mostrar/mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoSalonComponent,
    NuevaMateriaComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NuevoSalonModule,
    NuevaMateriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
