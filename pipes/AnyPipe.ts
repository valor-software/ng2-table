import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'anyPipe',
  pure: false
})
@Injectable()
export class AnyPipe implements PipeTransform {
  public transform(value: any, pipe: PipeTransform):any {
    if(!pipe) {
      return value;
    }
    return pipe.transform(value);
  }
}
