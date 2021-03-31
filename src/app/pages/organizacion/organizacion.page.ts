import { Component, OnInit } from '@angular/core';
import { DataEmanuel } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.page.html',
  styleUrls: ['./organizacion.page.scss'],
})
export class OrganizacionPage implements OnInit {

  contenido="";
  constructor(private drupal:DrupalService) { }

  ngOnInit() {
    this.drupal.getPaginas(72).subscribe(resp=>{
      this.contenido = resp[0].contenido;
    });

  }
  /**
   * <!-- Intercesion -->
<ion-card  color="danger">
  <ion-card-header>
    <ion-card-title>Servicio de Intercesión</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    Son hermanos que están llamados a ponerse en la brecha ante Dios para favor de la humianidad; la intercesion es la oración por los demás, dirigida con el poder del Espiritu Santo.
  </ion-card-content>
</ion-card>
<!-- Formacion -->
<ion-card  color="danger">
  <ion-card-header>
    <ion-card-title>Servicio de Formación</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    Son hermanos que están llamados a organizar la formación integral (espiritual, doctrinal y humana) de los miembros del grupo para su adecuado crecimiento.
  </ion-card-content>
</ion-card>
<!-- Acogida -->
<ion-card  color="danger">
  <ion-card-header>
    <ion-card-title>Servicio de Acogida</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    Son hermanos que se encargan de acoger a todos los miembros del grupo haciendoles sentir como en casa.
  </ion-card-content>
</ion-card>
<!-- Liturgia -->
<ion-card  color="danger">
  <ion-card-header>
    <ion-card-title>Servicio de Liturgia</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    Son hermanos llamados a velar por la organizacion y cumplimiento de los servicios que tenemos en los actos liturgicos de la capilla. La liturgia es servicio y participacion en la obra de Dios
  </ion-card-content>
</ion-card>
<!-- Musica -->
<ion-card  color="danger">
  <ion-card-header>
    <ion-card-title>Servicio de Música</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    Son hermanos llamados a ministrar la música, preparando los coazones de los hermanos al encuentro con el señor y a la alabanza.
  </ion-card-content>
</ion-card>
   */

}
