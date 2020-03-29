import { Component } from '@angular/core';

@Component({
    selector: 'formulario',
    templateUrl: '../View/formulario.component.html',
    styleUrls: ['../app.component.scss']
    
    
  })
  export class FormularioComponent {
      formulario:Array<any>; 

    constructor(){

        //https://raw.githubusercontent.com/siancafi12345/Formularios_dinamicos/master/src/app/Json/formulario.json
            
            this.formulario = [
                {"elemento":"input","type":"text","requred":"true","name":"text","label":"text" },
                {"elemento":"textarea","type":"textarea","requred":"falce","name":"textarea","label":"textarea"},
                {"elemento":"input","type":"number","requred":"true","name":"number","label":"number" },
                {"elemento":"input","type":"password","requred":"true","name":"password","label":"password" },
                {"elemento":"input","type":"email","requred":"true","name":"email","label":"email" },
                {"elemento":"input","type":"file","requred":"true","name":"file","label":"file"},
                {"elemento":"input","type":"checkbox","requred":"falce","name":"checkbox","label":"checkbox"},
                {"elemento":"select","requred":"true","name":"select","label":"select","option":[1,2,3,4,5,6,7,8],"values":[1,2,3,4,5,6,7,8]},
                {"elemento":"selectm","requred":"true","name":"selectm","label":"selectm","option":[1,2,3,4,5,6,7,8],"values":[1,2,3,4,5,6,7,8]},
                {"elemento":"radio","requred":"true","name":"radio","label":"radio","option":[1,2,3,4],"values":[1,2,3,4]}
                
            ];

            
      }
      ngOnInit(){
          //this.hola();
      }
      guardar(){
          
      }
  }
