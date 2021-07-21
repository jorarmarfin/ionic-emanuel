import { Component, OnInit } from '@angular/core';
import { Historia } from 'src/app/inerfaces/interfaces';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  myDate: String = new Date().toISOString();
  historia: Historia[]=[];
  
  constructor(private local:LocalService) { }

  ngOnInit() {
    this.local.getHistoria().subscribe(resp=>{
      this.historia = resp;

    });
  }

}
