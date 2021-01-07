import { Component, OnInit } from '@angular/core';
import { Calendario } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  calendario:Calendario[]=[];

  constructor(private drupal:DrupalService,private firebase: FirebaseService) { }

  ngOnInit() {
    let date = new Date();
    let f = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    let m  = date.getMonth()+1;
    this.cargarEventosMes(m,f);
  }
  porMes(event:any){
    let mes  =new Date(event.detail.value).getMonth()+1;
    this.cargarEventosMes(mes,'');
  }
  cargarEventosMes(mes:number,fecha:string=''){
    this.firebase.getCalendarioDelMes(mes,fecha).subscribe(resp=>{
      this.calendario = resp;
    });
  }

}
