import { Component, OnInit } from '@angular/core';
import { Hermanos } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-hermanos',
  templateUrl: './hermanos.page.html',
  styleUrls: ['./hermanos.page.scss'],
})
export class HermanosPage implements OnInit {

  hermanos:Hermanos;

  constructor(private drupal:DrupalService) { }

  ngOnInit() {
    this.drupal.getHermanos().subscribe(resp=>{
      this.hermanos = resp;
    });
  }

}
