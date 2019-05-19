import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
     name: 'isEmpty',
     pure: false
})
export class IsEmptyPipe implements PipeTransform {
     transform(value: any, args: any[] = []): any {
          if (value || typeof (value) == "number") {
               return value;
          }
          return "-";
     }
}