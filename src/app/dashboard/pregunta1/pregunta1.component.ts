import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component {


  resultado = "esperando resultados"

  mostrarmensaje = false


  calcular = {

    añosTrabajados: null,
    porcentajeUtilidad: null,
  }



  calcularUtilidades(salarioMensual: number, añosTrabajados: number): number {
    let porcentajeUtilidad: number;

    if (añosTrabajados < 1) {
        porcentajeUtilidad = 0.05 * salarioMensual;
    } else if (añosTrabajados >= 1 && añosTrabajados < 2) {
        porcentajeUtilidad = 0.07;
    } else if (añosTrabajados >= 2 && añosTrabajados < 5) {
        porcentajeUtilidad = 0.10;
    } else if (añosTrabajados >= 5 && añosTrabajados < 10) {
        porcentajeUtilidad = 0.15;
    } else {
        porcentajeUtilidad = 0.20;
    }

    return salarioMensual * porcentajeUtilidad;


    this.mostrarmensaje = true

    this.resultado = "Su tiempo de trabajo es: " + añosTrabajados.toFixed(2).toString() + ", " + "y su valor por utilidades es: " + porcentajeUtilidad

}

}

