import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'conversor'})
export class ConversorPipe implements PipeTransform{

    transform(value, por){
        let value_one = parseInt(value);
        let value_two = parseInt(por);
       let result =  "la multiplicacion es: "+ value_one +"X"+ value_two+ "="+ value_two*value_one;

       return result;
    }

}