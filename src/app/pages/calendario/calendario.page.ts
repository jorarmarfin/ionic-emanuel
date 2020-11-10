import { Component, OnInit } from '@angular/core';
import { Calendario } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  calendario:Calendario;

  constructor(private drupal:DrupalService) { }

  ngOnInit() {
    this.drupal.getCalendarioPortada().subscribe(resp=>{
      this.calendario = resp;
    });
  }

}
