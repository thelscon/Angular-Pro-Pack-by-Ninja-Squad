import { Pipe, PipeTransform } from '@angular/core';

import { formatDistanceToNowStrict, parseISO } from 'date-fns';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {
  transform(instant: any, ...args: unknown[]): string {
    console.log(instant);
    const date = parseISO(instant.toString());
    return formatDistanceToNowStrict(date, { addSuffix: true });
  }
}
