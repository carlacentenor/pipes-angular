import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    let words = value.split('');
    if (activar) {
      for (let i in words) {
        words[i] = '*';
      }
    }
    return words.join('');
  }

}
