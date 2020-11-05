import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuController } from '@ionic/angular';
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

  constructor(private menu:MenuController,
    private drupal:DrupalService
    ) { }

  ngOnInit() {
    this.menu.enable(false,'MainMenu')
    
  }
  login(formLogin:NgForm){
    this.drupal.login(this.Usuario.email,this.Usuario.password);
  }

}
