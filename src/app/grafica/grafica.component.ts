import { Component, HostListener, ViewChild } from '@angular/core';
import { InterfazComponent } from '../interfaz/interfaz.component';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent {
  @ViewChild('canvasRef', { static: false }) canvasRef: any;

  public width: any;
  public height: any;
  public escala = 10;
  public ejex = 1;
  public ejey = 1;


  private contexto: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.width = window.innerWidth - (window.innerWidth * 0.6);
    this.height = window.innerHeight - (window.innerHeight * 0.1);
    this.ejex = this.width /2;
    this.ejey = this.height /2;

  }
  ngAfterViewInit(): void {
    this.render();
  }

  @HostListener('document:keydown', ['$event'])
  onPageUp(event: any) {
    // console.log(event);
    

    switch (event.key) {
      case 'PageUp':
        if (this.escala > 140) {
          this.escala = 10;
        } else {
          this.escala++;
        }
        // console.log(this.escala);
        this.render()

        break;
      case 'PageDown':
        if (this.escala < 5) {
          this.escala = 5;
        } else {
          this.escala -= 1;
        }
        this.render()
        // console.log(this.escala);

        break;
        case 'ArrowDown':
          event.preventDefault();
          this.ejey--;
          this.render();
          console.log(this.ejex);
          
        break;
        case 'ArrowUp':
          event.preventDefault();
          this.ejey++;
          this.render();
          console.log(this.ejey);
          
        break;
        case 'ArrowRight':
          this.ejex--;
          this.render();
          console.log(this.ejex);
          
        break;
        case 'ArrowLeft':
          this.ejex++;
          this.render();
          console.log(this.ejey);
          
        break;
      default:
        break;

    }

  }

  private render(): any {
    //con nativeElement manipular directamente elementos del DOM, segun angular es mala práctica por que no permite reutilizar codigo
    const canvas = this.canvasRef.nativeElement;
    this.contexto = canvas.getContext('2d');
    canvas.width = this.width;
    canvas.height = this.height;

    this.contexto.lineWidth = 1;
    this.contexto.strokeStyle = 'black';
    // this.ejex = canvas.width / 2;
    // this.ejey = canvas.height / 2;
    this.DrawEXY(canvas, this.contexto, this.ejex, this.ejey, this.escala);
  }
  private DrawEXY(canvas: any, contexto: any, ejex: number, ejey: number, escala: number): void {
    contexto.strokeRect(ejex, 0, 1, canvas.height);
    contexto.strokeRect(0, ejey, canvas.width, 1);
    // var t = 18;
    // var t2 = 22;
    // contexto.font = '8px monospace';
    contexto.strokeStyle = 'black';
    //Dibuja regla
    for (let i = 0; i < canvas.height*escala; i = i + escala) {
      contexto.strokeRect(ejex - 2, ejey + i, 5, 0.5);
      contexto.strokeRect(ejex - 2, ejey - i, 5, 0.5);
    }
    for (let i = 0; i < canvas.width*escala; i = i + escala) {
      contexto.strokeRect(ejex + i, ejey - 2, 0.5, 5);
      contexto.strokeRect(ejex - i, ejey - 2, 0.5, 5);
    }
    // //Dibujar regla con numeros
    // for (var i = 2; i < canvas.height; i += 2) {
    //   contexto.fillText("-" + i, (ejex + 9), ejey + t2);
    //   contexto.fillText(i, (ejex + 9), ejey - t);
    //   t2 += 20;
    //   t += 20;
    // }
    // for (var i = 2; i < canvas.width; i += 2) {
  
    // 	if (i >= 8) {
    // 		contexto.fillText(i, (ejex + t), ejey + 12);
    // 		contexto.fillText("-" + i, (ejex - t2), ejey + 12);
    // 		t2 += 20.357;
    // 		t += 20;
    // 	}
    // 	else {
    // 		contexto.fillText(i, (ejex + t), ejey + 12);
    // 		contexto.fillText("-" + i, (ejex - t2), ejey + 12);
    // 		t2 += 20
    // 		t += 20;
    // 	}
    // }
  
  }
  

}



