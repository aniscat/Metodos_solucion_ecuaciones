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
  public ecua:string = "x*x+4*x+4";  
  
  constructor(private servicioGraficar:GraficarEcuaService) {;  
  }
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
  //Nada mas pasamos la ecua al componente graficar
  graficar(){
    this.servicioGraficar.disparador.emit(this.ecua);
    this.servicioGraficar.disparador.subscribe(render=>{
      render();
    })
  }

}
