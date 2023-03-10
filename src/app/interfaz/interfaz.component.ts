import { Component } from '@angular/core';
import { GraficarEcuaService } from '../graficar-ecua.service';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent {
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
  public ecua: string = "x*x+4*x+4";

  constructor(private servicioGraficar: GraficarEcuaService) {
    ;
  }
  ngOnInit(): void {
    // this.ecua = (document.getElementById('ecuacion').innerHTML)!;
  }

  capturar() {
    this.verSeleccion = this.opcionSeleccionado;
  }
  resolver(): void {
    let metodo = (document.getElementById('mensaje'))!;
    metodo.style.display = 'none';
    metodo = (document.getElementById('Newton-Raphson'))!;
    metodo.style.display = 'none';
    metodo = (document.getElementById('secante'))!;
    metodo.style.display = 'none';
    metodo = (document.getElementById('biseccion'))!;
    metodo.style.display = 'none';
    metodo = (document.getElementById('punto-fijo'))!;
    metodo.style.display = 'none';

    switch (this.verSeleccion) {

      case 'Bisección':
        metodo = (document.getElementById('biseccion'))!;
        break;
      case 'Punto Fijo':
        metodo = (document.getElementById('punto-fijo'))!;
        console.log("ahhh");
        break;
      case 'Newton-Raphson':
        metodo = (document.getElementById('Newton-Raphson'))!;
        break;
      case "":
        metodo = (document.getElementById("mensaje"))!;
        console.log("ehhhhh");

        break;
      case 'Secante':
        metodo = (document.getElementById('secante'))!;
        break;
    }
    metodo.style.display = 'block';

  }
  //Nada mas pasamos la ecua al componente graficar
  graficar() {
    let ecua = document.getElementById('ecuacion').innerHTML;
    let mensaje = document.getElementById('mensaje2');
    mensaje.style.display = 'none';
    console.log(ecua);
    
    if(this.ecua ==""){
      mensaje.style.display = 'block';
    } 
    this.servicioGraficar.disparador.emit(this.ecua);
    this.servicioGraficar.disparador.subscribe(render => {
      render();
    })
  }

}
