import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secante',
  templateUrl: './secante.component.html',
  styleUrls: ['./secante.component.css']
})
export class SecanteComponent {
  @Input() ecua:string ="";
}
