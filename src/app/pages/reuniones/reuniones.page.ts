import { Component, OnInit } from '@angular/core';
import { Recursos } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.page.html',
  styleUrls: ['./reuniones.page.scss'],
})
export class ReunionesPage implements OnInit {

  recursos:Recursos;

  constructor(private drupal:DrupalService) { }

  ngOnInit() {
    this.drupal.getRecursos('tema_sabado').subscribe(resp=>{
      this.recursos = resp;
    });
  }

}
