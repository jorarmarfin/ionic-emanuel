import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Hermanos } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-hermanos',
  templateUrl: './hermanos.page.html',
  styleUrls: ['./hermanos.page.scss'],
})
export class HermanosPage implements OnInit {

  hermanos:Hermanos;
  loading: HTMLIonLoadingElement;

  constructor(private drupal:DrupalService, private loadingCtr:LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.drupal.getHermanos().subscribe(resp=>{
      this.hermanos = resp; 
      this.loading.dismiss();
    });
  }
  async presentLoading() {
    this.loading = await this.loadingCtr.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 2000
    });
    await this.loading.present();

  }

}
