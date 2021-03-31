import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
})
export class ComunidadPage implements OnInit {

  imagenes = [
    { imagen:"../assets/images/c1.jpg"},
    { imagen:"../assets/images/c2.jpg"},
    { imagen:"../assets/images/c3.jpg"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
