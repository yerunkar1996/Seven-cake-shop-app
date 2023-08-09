import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userdef'
})
export class UserdefPipe implements PipeTransform {

  transform(value: number, ...args: any[]): unknown {
    const [num, num1] =args;
    return (value/num1 + "$");
  }

}
