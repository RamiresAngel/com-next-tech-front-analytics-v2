import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortId'
})
export class SortIdPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    if (!Array.isArray(array)) {
      return [];
    }
    
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });

    return array;
  }
}
