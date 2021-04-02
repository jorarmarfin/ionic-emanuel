import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {
  recursos=[
    {nombre:"Enlaces Zoom para videoconferencias",enlace:""},
    {nombre:"Pedidos de oración",enlace:""},
    {nombre:"Biblia católica",enlace:""},
    {nombre:"Catecismo",enlace:""},
  ]
  constructor(private router:Router,private socialsharing:SocialSharing,private iab:InAppBrowser) { }

  ngOnInit() {
  }
  onClick(i:number){
    if (i==0) {
      this.router.navigateByUrl('/zoom');
    }else if(i == 1){
      this.socialsharing.shareViaEmail(
        'Estimado Hermano pido oracion por las siguientes intenciones:', 'Pedido de Oracion', ['luis.mayta@gmail.com']
      );
    }else if(i == 2){
      const browser = this.iab.create('http://www.vatican.va/archive/ESL0506/_INDEX.HTM','_system');
    }
    else if(i == 3){
      const browser = this.iab.create('http://www.vatican.va/archive/catechism_sp/index_sp.html','_system');
    }
  }

}
