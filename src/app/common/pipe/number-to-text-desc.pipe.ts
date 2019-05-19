import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toText',
  pure: false
})
export class NumberToTestsDesc implements PipeTransform {
  transform(value: any, args: any[] = []): any {
    if (value == "1") {
      return "ทำงานอยู่";
    } else if (value == "2") {
      return "ลาออก"
    }
    return "-";
  }
}
