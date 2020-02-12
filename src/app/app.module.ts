import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BanerComponent } from './Component/baner.component';
import { FormularioComponent } from './Component/formulario.component';
import {EmpleadoComponent } from './Component/empleado.component'



@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    FormularioComponent,
    EmpleadoComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
