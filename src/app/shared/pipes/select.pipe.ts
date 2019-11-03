import { Pipe, PipeTransform } from '@angular/core';
import { IPhoto } from '../interfaces/photo.interface';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(value: Array<IPhoto>, field: any): any {
    if (!value) return [];
    if (!field) return value;
    if (field == 'all') { return value }
    else {
      return value.filter(value => value.category.name === field)

    }
  };
};
