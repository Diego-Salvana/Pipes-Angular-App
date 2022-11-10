import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
   transform(termino: string, enMayusculas?: boolean): string {
      return enMayusculas === false
         ? termino.toLowerCase()
         : termino.toUpperCase();
   }
}
