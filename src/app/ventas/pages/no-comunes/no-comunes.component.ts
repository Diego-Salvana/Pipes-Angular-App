import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
   selector: 'app-no-comunes',
   templateUrl: './no-comunes.component.html',
   styles: [],
})
export class NoComunesComponent {
   //i18nSelect
   nombre: string = 'Susana';
   genero: string = 'femenino';

   invitacionMapa = {
      masculino: 'invitarlo',
      femenino: 'invitarla',
   };

   //i18nPlural
   clientes: string[] = ['María', 'Pedro', 'Juan', 'Ricardo', 'Julieta'];
   clientesMapa = {
      '=0': 'no tenemos ningún cliente',
      '=1': 'tenemos un cliente',
      other: 'tenemos # clientes',
   };

   cambiarPersona() {
      if (this.nombre !== 'Juan Carlos') {
         this.nombre = 'Juan Carlos';
         this.genero = 'masculino';
      } else {
         this.nombre = 'Susana';
         this.genero = 'femenino';
      }
   }

   borrarPersona() {
      if (this.clientes.length === 0)
         this.clientes = ['María', 'Pedro', 'Juan', 'Ricardo', 'Julieta'];
      else this.clientes.pop();
   }

   //Key pipe
   persona = {
      nombre: 'Damián',
      edad: 32,
      ubicacion: 'Madrid, España',
   };

   //Json pipe
   heroes = [
      { nombre: 'Superman', vuela: true },
      { nombre: 'Ironman', vuela: true },
      { nombre: 'Batman', vuela: false },
   ];

   //Async pipe
   myObservable = interval(2000);

   valorPromesa = new Promise((resolve) =>
      setTimeout(() => resolve('Tenemos data de promesa.'), 3500)
   );
}
