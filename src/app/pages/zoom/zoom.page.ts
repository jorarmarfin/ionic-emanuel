import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Recursos } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit {

  recursos:Recursos;

  constructor(private drupal:DrupalService, private iab:InAppBrowser) { }

  ngOnInit() {
    this.drupal.getRecursos('zoom').subscribe(resp=>{
      this.recursos = resp;
    });
  }
  mostrarRecurso(i:string){
    const browser = this.iab.create(this.recursos[i].enlace,'_system');
  }

}
