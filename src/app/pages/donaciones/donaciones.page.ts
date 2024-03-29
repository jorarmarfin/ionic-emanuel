import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LoadingController } from '@ionic/angular';
import { DrupalService } from 'src/app/services/drupal.service';


@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.page.html',
  styleUrls: ['./donaciones.page.scss'],
})
export class DonacionesPage implements OnInit {

  c1:string[]=[];
  c2:string[]=[];
  cnt:number; 
  loading: HTMLIonLoadingElement;

  constructor(private drupal:DrupalService,private shared:SocialSharing,private loadingCtr:LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.drupal.getPaginas(73).subscribe(resp=>{
      let tmp = resp[0].texto_multiple.split(";");
      this.cnt = tmp.length;
      if (this.cnt > 1) {
        this.c1 = tmp[0].split('|');
        this.c2 = tmp[1].split('|');
      }else{
        this.c1 = tmp[0].split('|');
      }
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
