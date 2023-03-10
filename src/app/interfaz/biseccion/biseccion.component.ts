import { Input, Component, ViewChild, ElementRef } from '@angular/core';
// import { GraficarEcuaService } from 'src/app/graficar-ecua.service';

@Component({
  selector: 'app-biseccion',
  templateUrl: './biseccion.component.html',
  styleUrls: ['./biseccion.component.css']
})
export class BiseccionComponent {
  //recibir la variable del componente padre
  @Input() ecua:string ="";

  xm: number = 0;
  // XI: number =0;
  // public xs: number =angular.element('[id="username"]').val();;
  // public xi:number =this.XI;
  error: number = 0.003;
  biseccion(): void {
    let xi = parseInt((<HTMLInputElement>document.getElementById("xi")).value)!;
    let xs= parseInt((<HTMLInputElement>document.getElementById("xs")).value)!;
    let tab= document.getElementById("tbody")!;
    while(tab.hasChildNodes()){
      let tr = tab.lastChild;
        tab.removeChild(tr);
    }
    // console.log('hola');
    
    let errC: number = 1;
    let ev1: number = 0;
    let ev2: number = 0;
    let iteraciones = 0;
    // console.log(this.ecua);
    // console.log(this.error);
    let tabla = document.getElementById("table")!;
    let tbody = document.getElementsByTagName("tbody")!;
    tabla.style.display="block";
    while (errC > this.error) {
      let tr= document.createElement("tr")!;
      this.xm = (xi + xs) / 2;
      let x =xi;
      ev1= eval(this.ecua);
      console.log("ev1",ev1);
      x =this.xm;
      ev2= eval(this.ecua);
      console.log("ev2",ev2);
      errC = Math.abs(this.xm-xi);
     let th= document.createElement("th");
     let td1= document.createElement("td");
     let td2= document.createElement("td");
     let td3= document.createElement("td");
     let td4= document.createElement("td");
     let td5= document.createElement("td");
     tr.appendChild(th);
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td4);
     tr.appendChild(td5);
     th.innerHTML=iteraciones.toString();;
     td1.innerHTML =xi.toString();
     td2.innerHTML =xs.toString();
     td3.innerHTML =this.xm.toString();
     td4.innerHTML =(Math.abs(this.xm-xi)).toString();
     td5.innerHTML =(ev2).toString();
     if (ev1 * ev2 < 0) {
       xs = this.xm;
      } else if (ev1 * ev2 > 0) {
        xi = this.xm;
      } else if (ev1 * ev2 == 0) {
        
      }
      console.log("Iteracion :", iteraciones, "raiz: ", this.xm);
      // console.log(tr);
      
        tbody[0].appendChild(tr)!;
      
      iteraciones++;
    }
    // console.log(iteraciones);
  }
}
