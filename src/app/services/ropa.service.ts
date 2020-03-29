import { Injectable } from '@angular/core';

@Injectable()
export class RopaService{

    public nombre_prenda='Pantalone';
    public coleccion_ropa = ['pantalones', 'busos'];
    prueba(prenda){
        return prenda;
    }
  addRopa(prenda):Array<string>{
      this.coleccion_ropa.push(prenda);
      return this.getRopa();
  } 
  getRopa():Array<string>{
      return this.coleccion_ropa;
  }
  remove(prenda){
      this.coleccion_ropa.splice(prenda, 1);
      this.getRopa();
  }
}