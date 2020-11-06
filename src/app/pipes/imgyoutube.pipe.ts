import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgyoutube'
})
export class ImgyoutubePipe implements PipeTransform {

  transform(enlace:string): string {
    const idyoutube = enlace.split('/')[3];
    const link = `https://i.ytimg.com/vi/${idyoutube}/maxresdefault.jpg`;
    return link;
  }

}
