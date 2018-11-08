import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre ="papabot";
  nombre2="papabot es el mejor"
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  a = 0.234;
  salario=1234.5;
  heroe={
    nombre:'logan',
    clave:'wolverine',
    edad:500,
    direccion:{
      calle:'primera',
      casa:'19'
    }
  };

valorDePromesa = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve('Llego la data'))
});

fecha = new Date();
video='mOe5fOJrUIk';
activar:boolean = true;
};


