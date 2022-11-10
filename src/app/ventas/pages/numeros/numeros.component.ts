import { Component } from '@angular/core';

@Component({
   selector: 'app-numeros',
   templateUrl: './numeros.component.html',
   styles: [],
})
export class NumerosComponent {
   netSales: number = 2365756.5568;
   percentage: number = 0.48;
   grossSales: number = 4265654.654;

   constructor() {}
}
