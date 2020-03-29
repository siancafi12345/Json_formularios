import { Component } from '@angular/core';
import {RopaService} from '../services/ropa.service'

@Component({
  selector: 'home',
  templateUrl: '../View/home.component.html',
  providers:[RopaService]  
})

export class HomeComponent{
    public titulo = "página principal";
    public variable = "";
    public coleccion:  Array<string>;
    public nueva ="";
    public fecha:Date;

    constructor(
      private _ropaService: RopaService
      
    ){
      this.fecha = new Date(2017,4,15);
    }

    ngOnInit(){
      this.coleccion = this._ropaService.getRopa();
      console.log(this.coleccion);
    }
    agregar(){
      if(this.nueva != ""){
        this._ropaService.addRopa(this.nueva);
        this.nueva = "";
      }
      
    }
    eliminar(index:number){
      this._ropaService.remove(index);
    }

}
