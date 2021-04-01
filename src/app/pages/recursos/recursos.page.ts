import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick(i:number){
    if (i==0) {
      this.router.navigateByUrl('/zoom');
    }
    console.log(i);
  }

}
