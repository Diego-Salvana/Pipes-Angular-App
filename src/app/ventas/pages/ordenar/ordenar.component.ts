import { Component } from '@angular/core';
import { Color, Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
   selector: 'app-ordenar',
   templateUrl: './ordenar.component.html',
   styles: [],
})
export class OrdenarComponent {
   esMayuscula: boolean = true;
   ordenarPor: string = '';

   heroes: Heroe[] = [
      { nombre: 'Superman', vuela: true, color: Color.azul },
      { nombre: 'Batman', vuela: false, color: Color.negro },
      { nombre: 'Spiderman', vuela: false, color: Color.rojo },
      { nombre: 'Ironman', vuela: true, color: Color.rojo },
      { nombre: 'Hulk', vuela: false, color: Color.verde },
   ];

   toggle() {
      this.esMayuscula = !this.esMayuscula;
   }

   cambiarOrden(valor: string) {
      this.ordenarPor = valor;
   }
}
