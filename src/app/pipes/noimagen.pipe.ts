import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(imagen: string): string {
    let img = '../assets/icon/profile.png'
    if (imagen) {
      img = imagen;
    }
    return img;
  }

}
