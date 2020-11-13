import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Calendario } from 'src/app/inerfaces/interfaces';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  @Input()evento:Calendario;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    console.log(this.evento);
  }
  cerrar(){
    this.modalCtrl.dismiss();
  }

}
