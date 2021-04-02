import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Cumples, Hermanos, Meses } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-cumples',
  templateUrl: './cumples.page.html',
  styleUrls: ['./cumples.page.scss'],
})
export class CumplesPage implements OnInit {

  hermanos:Hermanos;
  busqueda:Hermanos;
  meses:Meses[]=[
      {nombre:"Enero",valor:"01"},
      {nombre:"Febrero",valor:"02"},
      {nombre:"Marzo",valor:"03"},
      {nombre:"Abril",valor:"04"},
      {nombre:"Mayo",valor:"05"},
      {nombre:"Junio",valor:"06"},
      {nombre:"Julio",valor:"07"},
      {nombre:"Agosto",valor:"08"},
      {nombre:"Setiembre",valor:"09"},
      {nombre:"Octubre",valor:"10"},
      {nombre:"Noviembre",valor:"11"},
      {nombre:"Diciembre",valor:"12"},
  ];
  loading: HTMLIonLoadingElement;

  constructor(private drupal:DrupalService, private loadingCtr:LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    var f = new Date();
    let mes = (f.getMonth()+1).toString().padStart(2,"0");
    this.drupal.getCumplesDelMes(mes).subscribe(resp=>{
      this.hermanos = resp;
      this.loading.dismiss();
    });
    
  }
  onChange(opt:string){
    this.presentLoading();
    this.drupal.getCumplesDelMes(opt).subscribe(resp=>{
        this.busqueda = resp;
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
