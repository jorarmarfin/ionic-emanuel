import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from "@angular/platform-browser";


@Pipe({
  name: 'linkyoutube'
})
export class LinkyoutubePipe implements PipeTransform {
  constructor(private domSanitazer: DomSanitizer) { }

  transform(idyoutube: string): SafeResourceUrl {
    let url = `https://www.youtube.com/embed/${idyoutube}`;
    return this.domSanitazer.bypassSecurityTrustResourceUrl(url);
  }

}
