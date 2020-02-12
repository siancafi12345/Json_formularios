import { Component } from '@angular/core';
import { EmpleadoModel } from '../Model/empleado.model'

@Component({
    selector: 'empleado',
    templateUrl:'../View/empleado.component.html',
    styleUrls: ['../app.component.scss']
})

export class EmpleadoComponent{
    public titulo:string;
    public empleado:EmpleadoModel;
    public tabajador_externo:boolean;
    public trabajador:Array<EmpleadoModel>;
    public color:string;
    constructor(){
        this.titulo = "Componente empleados";
        this.color = "blue";
    }
    ngOnInit(){
        this.empleado = new EmpleadoModel('jose',0,'pintor',true);
        this.trabajador = [
            new EmpleadoModel('simon1',1,'cargo1',false),
            new EmpleadoModel('simon2',2,'cargo2',false),
            new EmpleadoModel('simon3',3,'cargo3',false),
            new EmpleadoModel('simon4',4,'cargo4',false)
        ];
        this.tabajador_externo = false;
        
    }
    cambiar(valor){
        this.tabajador_externo = valor;
    }

}