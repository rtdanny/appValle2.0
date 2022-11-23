import { Component, OnInit } from '@angular/core';
import { compareAsc, format, parseISO } from 'date-fns'




@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.page.html',
  styleUrls: ['./paquetes.page.scss'],
})
export class PaquetesPage implements OnInit {

  /* fecha: Date = new Date(); */
  fecha = format(new Date(), 'yyyy-MM-dd')
  muestraFecha= false;
  muestraFecha1= false;

  formaFecha = '';
  formaFecha1 = '';
  constructor() { 
    this.capturaFecha()
  }

  capturaFecha(){
    this.formaFecha = format(parseISO (format(new Date(), 'yyyy-MM-dd')),'MMM d, yyyy')
    this.formaFecha1 = format(parseISO (format(new Date(), 'yyyy-MM-dd')),'MMM d, yyyy')
  }

  ngOnInit() {
  }

  fechaInicio(event: any){
    console.log(event.detail.value);
    this.formaFecha = format(parseISO(event.detail.value),'MMM d, yyyy');
     event.detail.value;
     this.muestraFecha= false;
  }
  fechaFin(event: any){
    console.log(event.detail.value);
    this.formaFecha1 = format(parseISO(event.detail.value),'MMM d, yyyy');
     event.detail.value;
     this.muestraFecha1= false;
  }
}
