import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWords',
})
export class SliceWordsPipe implements PipeTransform {
  transform(value: string, start: number, end?: number): string | null {
    if (value == null) return null;

    return value.split(' ').splice(start, end).join(' ');
  }
}
