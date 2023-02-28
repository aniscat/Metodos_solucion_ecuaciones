import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GraficaComponent } from './grafica/grafica.component';
import { InterfazComponent } from './interfaz/interfaz.component';
import { PuntoFijoComponent } from './interfaz/punto-fijo/punto-fijo.component';
import { BiseccionComponent } from './interfaz/biseccion/biseccion.component';
import { NewtonRaphsonComponent } from './interfaz/newton-raphson/newton-raphson.component';
import { SecanteComponent } from './interfaz/secante/secante.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    InterfazComponent,
    PuntoFijoComponent,
    BiseccionComponent,
    NewtonRaphsonComponent,
    SecanteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
