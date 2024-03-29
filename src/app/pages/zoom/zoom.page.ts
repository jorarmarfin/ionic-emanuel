import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Recursos } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit {

  recursos:Recursos;
  loading: HTMLIonLoadingElement;

  constructor(private drupal:DrupalService,
    private firebase:FirebaseService,
    private iab:InAppBrowser,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtr:LoadingController,
    private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.presentLoading();
    this.drupal.getRecursos('zoom').subscribe(resp=>{
      this.recursos = resp;
      this.loading.dismiss();
    });
  }
  abrirZoom(i:string){
    const browser = this.iab.create(this.recursos[i].enlace,'_system');
  }
  copiarLink(i:string){
    this.socialSharing.share(
      this.recursos[i].body,'asunto','',this.recursos[i].enlace
    );
  }
  async Action(i:string) {
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Escoge una opción',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Abrir Zoom',
          icon: 'videocam',
          handler: () => {
            this.abrirZoom(i);
          }
        }, {
          text: 'Compratir',
          icon: 'share-social',
          handler: () => {
            this.copiarLink(i)
          }
        }]
      });
      await actionSheet.present();
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
