import { Component, OnInit } from '@angular/core';
import { Calendario, Cumples, Temas } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

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
  constructor(private drupal:DrupalService) { }

  ngOnInit() {
    this.drupal.getTemasPortada().subscribe(resp=>{
      this.temas = resp;
    });
    this.drupal.getCumplesDelMes().subscribe(resp=>{
      this.cumples = resp;
    });
    this.drupal.getCalendarioDelMes().subscribe(resp=>{
      console.log(resp.length);
      this.calendario = resp;
    });
  }


}
