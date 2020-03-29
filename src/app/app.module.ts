import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BanerComponent } from './Component/baner.component';
import { FormularioComponent } from './Component/formulario.component';
import {EmpleadoComponent } from './Component/empleado.component';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvoders } from './app.routing';
import { ContactoComponent } from './Component/contacto.component';
import { HomeComponent } from './Component/home.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './Component/coches.component';





@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    FormularioComponent,
    EmpleadoComponent,
    ContactoComponent,
    HomeComponent,
    ConversorPipe,
    CochesComponent
    
    ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProvoders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
