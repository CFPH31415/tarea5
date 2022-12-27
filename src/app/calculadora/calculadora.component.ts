import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit{
variable1 = 0
variable2 = 0
resultado = 0

constructor() {}

ngOnInit():void{
}
sumar(){
  this.resultado = this.variable1 + this.variable2;
}

restar(){
  this.resultado = this.variable1 - this.variable2;
}

multiplicar(){
  this.resultado = this.variable1 * this.variable2;
}

dividir(){
  this.resultado = this.variable1 / this.variable2;
}

}
 