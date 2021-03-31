import { Component, OnInit } from '@angular/core';
import { DataEmanuel, Pagina } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-emanuel',
  templateUrl: './emanuel.page.html',
  styleUrls: ['./emanuel.page.scss'],
})
export class EmanuelPage implements OnInit {

  constructor(private drupal:DrupalService) { }

  ngOnInit() { }

}
