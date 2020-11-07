import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgcalendario'
})
export class ImgcalendarioPipe implements PipeTransform {

  transform(tipo: string): string {
    let img = '../assets/icon/calendario.png';
    if (tipo=='Rcc') {
      img = '../assets/icon/l-rcc-512.png';
    }
    return img;
  }

}
