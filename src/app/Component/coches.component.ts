import { Component } from "@angular/core";
import { CochesdoModel } from "../Model/coche"

@Component({
    selector: 'coches',
    templateUrl: '../View/coches.component.html'
})
export class CochesComponent{
    public coche: CochesdoModel;

    constructor(){
        this.coche = new CochesdoModel("","","");
    }
    onSubmit(){
        console.log(this.coche);        
    }
}