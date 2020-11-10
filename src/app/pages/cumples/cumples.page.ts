import { Component, OnInit } from '@angular/core';
import { Cumples } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-cumples',
  templateUrl: './cumples.page.html',
  styleUrls: ['./cumples.page.scss'],
})
export class CumplesPage implements OnInit {

  cumples:Cumples;

  constructor(private drupal:DrupalService) { }

  ngOnInit() {
    this.drupal.getCumples().subscribe(resp=>{
      this.cumples = resp;
    });
  }

}
