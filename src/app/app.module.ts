import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

import { MateriaService } from './shared/services/materia.service';
import { SalonService } from './shared/services/salon.service';
import { AuthService } from './shared/services/auth.service';
import { CoordinadorService } from './shared/services/coordinador.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MateriaService,
    SalonService,
    AuthService,
    CoordinadorService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
