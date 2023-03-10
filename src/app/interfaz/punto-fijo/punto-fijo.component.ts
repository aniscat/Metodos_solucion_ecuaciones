import { Input, Component } from '@angular/core';
import { GraficarEcuaService } from 'src/app/graficar-ecua.service';

@Component({
  selector: 'app-punto-fijo',
  templateUrl: './punto-fijo.component.html',
  styleUrls: ['./punto-fijo.component.css']
})
export class PuntoFijoComponent {
  //recibir la variable del componente padre
  @Input() ecua: string = "";
  constructor(private servicioGraficar: GraficarEcuaService) {

  }

  xm: number = 0;
  // xi: number = 1;
  // iteraciones: number = 3;
  error: number = 0.003;
  puntoFijo(): void {
    let xi =parseInt((<HTMLInputElement>document.getElementById("x_i")).value)!;
    console.log(typeof(xi),xi);
    
    let iteraciones = parseInt((<HTMLInputElement>document.getElementById("iteraciones")).value)!;

    let tab = document.getElementById("tbody")!;
    while (tab.hasChildNodes()) {
      let tr = tab.lastChild;
      tab.removeChild(tr);
    }
    console.log('hola punto fijo');

    let errC: number = 1;
    let ev1: number = 0;
    // let x = 0;
    console.log(this.ecua);
    console.log(this.error);

    let tabla = document.getElementById("tablepf")!;
    let tbody = document.getElementsByTagName("tbody")!;
    tabla.style.display = "block";

    for (let index = 0; index <iteraciones; index++) {
      let tr = document.createElement("tr")!;
      let x = xi;
      console.log(typeof(x),xi );
      
      console.log(this.ecua);
      
      ev1 = eval(this.ecua);
      console.log(eval(this.ecua));
      
      console.log("ev1", ev1);
      errC = Math.abs(ev1 - xi);
      let th = document.createElement("th");
      // let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      tr.appendChild(th);
      // tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      console.log("Iteracion: ", index, " raiz:", xi);
      x = xi;
      th.innerHTML = index.toString();
      // td1.innerHTML =index.toString();
      td2.innerHTML =xi.toString();
      td3.innerHTML =ev1.toString();
      tbody[0].appendChild(tr)!;
      if (errC < this.error) {
        break;
      }
      xi = eval(this.ecua);
    }

  }
}
