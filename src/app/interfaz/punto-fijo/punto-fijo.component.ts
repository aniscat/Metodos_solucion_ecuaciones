import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-punto-fijo',
  templateUrl: './punto-fijo.component.html',
  styleUrls: ['./punto-fijo.component.css']
})
export class PuntoFijoComponent {
  @Input() ecua:string ="";
}
