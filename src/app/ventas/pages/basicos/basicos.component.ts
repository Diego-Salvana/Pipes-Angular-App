import { Component } from '@angular/core';

@Component({
   selector: 'app-basicos',
   templateUrl: './basicos.component.html',
   styles: [],
})
export class BasicosComponent {
   name1: string = 'anToNio';
   name2: string = 'anToNio';
   name3: string = 'anToNio';
   today: Date = new Date();

   constructor() {}
}
