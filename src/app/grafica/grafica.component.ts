import { Component, HostListener, ViewChild } from '@angular/core';
import { GraficarEcuaService } from '../graficar-ecua.service';
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
  public raiz =0;
  // "x*x*x+2*(x*x)+10* x-20"
  public ecuacion: string = "";
  private contexto: CanvasRenderingContext2D;

  constructor(private servicioGraficar: GraficarEcuaService) {
  }

  ngOnInit(): void {
    this.width = window.innerWidth - (window.innerWidth * 0.6);
    this.height = window.innerHeight - (window.innerHeight * 0.1);
    this.ejex = this.width / 2;
    this.ejey = this.height / 2;
    this.servicioGraficar.disparador.subscribe(ecua => {
      console.log(ecua);
      this.ecuacion = ecua;

    })
    this.servicioGraficar.disparador.emit(this.render());
    this.servicioGraficar.disparador.subscribe(xm=>{
      this.raiz = xm;
    })

  }
  ngAfterViewInit(): void {
    this.render();
  }

  @HostListener('document:keydown', ['$event'])
  onPageUp(event: any) {
    // console.log(event);


    switch (event.key) {
      
      case 'PageUp':
        event.preventDefault;
        if (this.escala > 140) {
          this.escala = 10;
        } else {
          this.escala++;
        }
        // console.log(this.escala);
        this.render()

        break;
      case 'PageDown':
        event.preventDefault;
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
        event.preventDefault;
        this.ejex--;
        this.render();
        console.log(this.ejex);

        break;
      case 'ArrowLeft':
        event.preventDefault;
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
    const canvas: any = document.getElementById('canvas')!;;
    this.contexto = canvas.getContext('2d');
    canvas.width = this.width;
    canvas.height = this.height;

    this.contexto.lineWidth = 1;
    this.contexto.strokeStyle = 'black';
    // this.ejex = canvas.width / 2;
    // this.ejey = canvas.height / 2;
    this.DrawEXY(canvas, this.contexto, this.ejex, this.ejey, this.escala);

    if (this.ecuacion != 'undefined') {
      this.graficar(this.ecuacion, canvas, this.contexto, this.ejex, this.ejey, this.escala);
    }

  }
  private DrawEXY(canvas: any, contexto: any, ejex: number, ejey: number, escala: number): void {
    contexto.strokeRect(ejex, 0, 1, canvas.height);
    contexto.strokeRect(0, ejey, canvas.width, 1);
    // var t = 18;
    // var t2 = 22;
    // contexto.font = '8px monospace';
    contexto.strokeStyle = 'black';
    //Dibuja regla
    for (let i = 0; i < canvas.height * escala; i = i + escala) {
      contexto.strokeRect(ejex - 2, ejey + i, 5, 0.5);
      contexto.strokeRect(ejex - 2, ejey - i, 5, 0.5);
    }
    for (let i = 0; i < canvas.width * escala; i = i + escala) {
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
  graficar(ecua: string, canvas: any, contexto: any, ejex: number, ejey: number, escala: number): void {
    contexto.strokeStyle = 'black';
    let x = (-10);
    let limite = (10);
    let resultado = (eval(ecua));
    console.log("hol");
    // console.log(resultado);
    contexto.beginPath();
    for (let i = x; i < limite; i+=0.1) {
      x=i;
      contexto.lineTo(ejex + (i*escala), ejey -(resultado*escala));
      resultado = eval(ecua);
      if (x<this.raiz && x>-this.raiz) {
        contexto.stroke();
        contexto.closePath();
        contexto.beginPath();
        contexto.fillStyle ="red";
        contexto.arc(ejex + (i*escala), ejey -(resultado*escala), 4, 0, Math.PI * 2, true);
        contexto.fill();
        contexto.closePath();
        contexto.beginPath();
      }
      console.log("resultado", resultado, "x", x);
    }
    contexto.stroke();
  }



  // }

}




