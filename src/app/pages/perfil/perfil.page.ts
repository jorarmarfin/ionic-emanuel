import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { Hermanos } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  hermano:Hermanos={};

  constructor(private drupal:DrupalService,
    private storage:Storage,
    public toastCtrl: ToastController) {
      this.storage.get('hermano').then(resp=>{
        this.hermano = resp;
      });

     }

  ngOnInit() {
  }
  actualizaClave(f:NgForm){   
    this.drupal.setHermano(this.hermano.id,f.value.clave).subscribe(resp=>{
      if (resp) {
        this.presentToast();
      }
    });

  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Su contraseña se ha actualizado correctamente.',
      duration: 2000
    });
    toast.present();
  }

}
