import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'visible',
  pure: false
})
@Injectable()
export class VisiblePipe implements PipeTransform {
  public transform(value: Array<any>):Array<any> {
    return value.filter((c:any) => c.visible !== false);
  }
}
