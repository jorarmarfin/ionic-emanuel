import { Component, OnInit } from '@angular/core';
import { Cumples, Hermanos } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cumples',
  templateUrl: './cumples.page.html',
  styleUrls: ['./cumples.page.scss'],
})
export class CumplesPage implements OnInit {

  hermanos:Hermanos[]=[];

  constructor(private drupal:DrupalService,private firebase:FirebaseService) { }

  ngOnInit() {

    this.firebase.getCumples().subscribe(resp=>{
      this.hermanos = resp;
    });
    // this.drupal.getCumples().subscribe(resp=>{
    //   this.cumples = resp;
    // });
  }

}
