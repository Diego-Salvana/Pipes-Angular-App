import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'color',
})
export class ColorPipe implements PipeTransform {
   transform(value: number): string {
      switch (value) {
         case 0:
            return 'Azul';
         case 1:
            return 'Negro';
         case 2:
            return 'Rojo';
         case 3:
            return 'Verde';
         default:
            return value.toString();
      }
   }
}
