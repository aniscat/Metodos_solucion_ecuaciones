import { Input, Component } from '@angular/core';
import { InterfazComponent } from '../interfaz.component';

@Component({
  selector: 'app-biseccion',
  templateUrl: './biseccion.component.html',
  styleUrls: ['./biseccion.component.css']
})
export class BiseccionComponent {
  //recibir la variable del componente padre
  @Input() ecua:string ="";
  
  xi: number = 1;
  xs: number = 2;
 error: number = 0.003;
  biseccion(): void {
    console.log('hola');
   
    let xm: number = 0;
    
    let errC: number = 1;
    let ev1: number = 0;
    let ev2: number = 0;
    let iteraciones = 0;
  //  this.ecua = InterfazComponent.prototype.ecua;
    console.log(this.ecua);
    
    // document.getElementById('biseccion')
    // ecua = InterfazComponent.prototype.ecu  a;
    // xi = parseInt(document.getElementById('xi').innerHTML)!;
    // xs = parseInt(document.getElementById('xs').innerHTML)!;
    // error = parseInt(document.getElementById('error').innerHTML)!;

    console.log(this.error);
    
    
    while (errC > this.error) {
      xm = (this.xi + this.xs) / 2;
      // console.log("hola");
      // console.log(1);
      // console.log(errC);
      // console.log(error);
      // console.log("xi",xi);
      // console.log("xm",xm);
      // console.log("ecua",ecua);
      
      
      
      let x =this.xi;
      ev1= eval(this.ecua);
      console.log("ev1",ev1);
      x =xm;
      ev2= eval(this.ecua);
      console.log("ev2",ev2);
      errC = Math.abs(xm-this.xi);

      if (ev1 * ev2 < 0) {
        this.xs = xm;
        console.log("Iteracion :", iteraciones, "raiz: ", xm);
        
      } else if (ev1 * ev2 > 0) {
        this.xi = xm;
        console.log("Iteracion :", iteraciones, "raiz: ", xm);
      } else if (ev1 * ev2 == 0) {
        console.log("Iteracion :", iteraciones, "raiz: ", xm);
      }
      iteraciones++;
    }
    console.log(iteraciones);
    
  }
}
