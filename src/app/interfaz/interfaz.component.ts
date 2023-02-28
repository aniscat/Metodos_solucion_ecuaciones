import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent {
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
  public ecua:string = "x*x*x+2*(x*x)+10* x-20";    
  ngOnInit(): void{
    // this.ecua = (document.getElementById('ecuacion').innerHTML)!;
  }

  capturar(){
    this.verSeleccion = this.opcionSeleccionado; 
  }
  resolver():void{
    if(this.verSeleccion == 'Bisección'){
      let metodo = (document.getElementById('biseccion'))!;
      metodo.style.display = 'block';

    }
  }

}
