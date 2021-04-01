import { Component, OnInit } from '@angular/core';
import { Recursos } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

interface cuenta {
  banco:string;
  nombre:string;
  numero:string;
}

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.page.html',
  styleUrls: ['./donaciones.page.scss'],
})
export class DonacionesPage implements OnInit {

  recursos:Recursos;
  cuentas:cuenta[]=[];
  cuenta:[]=[];
  

  constructor(private drupal:DrupalService) { }

  ngOnInit() {
    this.drupal.getPaginas(73).subscribe(resp=>{
      // this.recursos = resp[0];
      // console.log(resp[0].texto_multiple);
      // this.cuenta = resp[0].texto_multiple.split(";")[0].split('|');
      // this.cuentas. = this.cuentas[0][0];
      // // this.cuentas[0] = resp[0].texto_multiple.split(";")[0].split('|');
      // // this.cuentas[1] = resp[0].texto_multiple.split(";")[1].split('|');
      // console.log(this.cuentas);

    });
  }

}
