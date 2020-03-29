import { Component } from "@angular/core";
import { CochesdoModel } from "../Model/coche"

@Component({
    selector: 'coches',
    templateUrl: '../View/coches.component.html'
})
export class CochesComponent{
    public coche: CochesdoModel;
    public coches:Array<CochesdoModel>;

    constructor(){
        this.coche = new CochesdoModel("","","");
        this.coches =[
            new CochesdoModel("carro","1200","blanco"),
            new CochesdoModel("moto","125","blanco")
        ]
    }
    onSubmit(){
        if(this.coches.push(this.coche)){
            this.coche =  new CochesdoModel("","","");
        }    
        return this.coches, this.coche;
    }
    eliminar(i){
        this.coches.splice(i,1);
    }
}