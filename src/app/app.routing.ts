import { ModuleWithProviders } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';
//importar componentes
import { EmpleadoComponent } from './Component/empleado.component';
import { FormularioComponent } from './Component/formulario.component';
import { BanerComponent } from './Component/baner.component';
import { ContactoComponent } from './Component/contacto.component';
import { HomeComponent } from './Component/home.component';
import { CochesComponent } from './Component/coches.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'contacto' , component: ContactoComponent},
    {path: 'contacto/:parametro' , component: ContactoComponent},
    {path: 'formulario' , component: FormularioComponent},
    {path: 'empleado' , component: EmpleadoComponent},
    {path: 'coches' , component: CochesComponent},
    {path: 'index', component: HomeComponent },
    {path: '**', component: HomeComponent}
];
export const appRoutingProvoders: any[] = [];
export const  routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);