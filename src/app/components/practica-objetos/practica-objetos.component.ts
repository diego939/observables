import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service'

@Component({
  selector: 'app-practica-objetos',
  templateUrl: './practica-objetos.component.html',
  styleUrls: ['./practica-objetos.component.css']
})
export class PracticaObjetosComponent implements OnInit {

  datos: any;

 

  constructor(private misDatos: DatosService) { }

  ngOnInit(): void {
    this.misDatos.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.datos = data.Personas;
    });
  }

}
