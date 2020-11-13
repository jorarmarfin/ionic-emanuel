import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgcalendario'
})
export class ImgcalendarioPipe implements PipeTransform {

  transform(tipo: string): string {
    let img = '../assets/icon/calendario.png';
    if (tipo=='Rcc') {
      img = '../assets/icon/l-rcc-512.png';
    }else if (tipo=='Emanuel') {
      img = '../assets/icon/emanuel.png';
    }else if (tipo=='Capilla') {
      img = '../assets/icon/capilla.png';
    }else if (tipo=='Parroquia') {
      img = '../assets/icon/parroquia.png';
    }
    return img;
  }

}
