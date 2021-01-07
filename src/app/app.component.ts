import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { Menu } from './inerfaces/interfaces';
import { LocalService } from './services/local.service';
import { DrupalService } from './services/drupal.service';
import { Storage } from '@ionic/storage';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  OpcionesMenu: Observable<Menu[]>;
  tipo:string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private local:LocalService,
    private drupal:DrupalService,
    private storage:Storage,
    private firebase:FirebaseService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.OpcionesMenu = this.local.getMenuOptions();
      this.storage.get('hermano').then(resp=>{
        if (resp) {
          this.tipo = resp.tipo;
        }
      });

    });
  }
  logout(){
    this.firebase.logout();
  }
}
