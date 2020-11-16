import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { Calendario, Cumples, Temas } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';
import { EventoPage } from '../evento/evento.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  slideOpts = {
    slidePerView: 2,
    width:300,
    freeMode: true,
  };  
  slideOpts2 = {
    slidePerView: 3,
    spaceBetween: 20,
    width:100,
    freeMode: true,
  }; 
  temas:Temas;
  cumples:Cumples;
  calendario:Calendario;

  constructor(
    private drupal:DrupalService, 
    private router:Router,
    private menu: MenuController,
    private modalCtrl:ModalController
    ) {
      this.menu.enable(true, 'MainMenu');
     }

  ngOnInit() {
    this.cargaData();
  }
  cargaData(){
    this.drupal.getTemasPortada().subscribe(resp=>{
      this.temas = resp;
    });
    this.drupal.getCumplesDelMes().subscribe(resp=>{
      this.cumples = resp;
    });
    this.drupal.getCalendarioPortada().subscribe(resp=>{
      this.calendario = resp;
    });
  }
  async doRefresh(event){
    
    await this.drupal.getTemasPortada().subscribe(resp=>{
      this.temas = resp;
    });
    await this.drupal.getCumplesDelMes().subscribe(resp=>{
      this.cumples = resp;
    });
    await this.drupal.getCalendarioPortada().subscribe(resp=>{
      this.calendario = resp;
    },err=>{},()=>{
      event.target.complete();
    });

  }
  RedirigeTema(titulo:string,enlace:string){
    let idyoutube = enlace.split('/',4)[3];
    this.router.navigateByUrl(`tema/${titulo}/${idyoutube}`);

  }
  async presentModal(i:string) {
    const modal = await this.modalCtrl.create({
      component: EventoPage,
      componentProps: {
        'evento': this.calendario[i],
      }
    });
    return await modal.present();
  }


}
