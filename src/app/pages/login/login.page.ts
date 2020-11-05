import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  Usuario: UsuarioModel={
    email:'luis.mayta@gmail.com',
    password:'321654987'
  }

  constructor(
    private menu:MenuController,
    private drupal:DrupalService,
    private navCtrl:NavController,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.menu.enable(false,'MainMenu')
    
  }
  async login(formLogin:NgForm){
    //await trabaja con el resultado de la promesa en este caso true o false
    const valido = await this.drupal.login(this.Usuario.email,this.Usuario.password);
    if (valido) {
      this.navCtrl.navigateRoot('/inicio',{ animated:true });
    } else {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'Email o contraseña no son validos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
