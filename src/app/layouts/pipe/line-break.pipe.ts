import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreak',
})
export class LineBreakPipe implements PipeTransform {
  transform(text: string, maxLines: number): string {
    const lines = text.split('\n');
    return lines.slice(0, maxLines).join('<br>');
  }
}
