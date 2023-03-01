import { Output, Injectable, EventEmitter } from '@angular/core';

// import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class GraficarEcuaService {
  @Output() disparador:EventEmitter<any> = new EventEmitter<any> ();

  constructor() { }
}
