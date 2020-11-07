import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Temas } from 'src/app/inerfaces/interfaces';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.page.html',
  styleUrls: ['./tema.page.scss'],
})
export class TemaPage implements OnInit {

  titulo: string;
  idyoutube: string;

  constructor(private route: ActivatedRoute) { 
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    this.idyoutube = this.route.snapshot.paramMap.get('idyoutube');
  }

  ngOnInit() {
  }

}
