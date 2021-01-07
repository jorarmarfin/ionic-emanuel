import { Component, OnInit } from '@angular/core';
import { Hermanos } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-hermanos',
  templateUrl: './hermanos.page.html',
  styleUrls: ['./hermanos.page.scss'],
})
export class HermanosPage implements OnInit {

  hermanos:Hermanos;

  constructor(private drupal:DrupalService, private firebase:FirebaseService) { }

  ngOnInit() {
    this.firebase.getHermanos().subscribe(resp=>{
      this.hermanos = resp;
    });
  }

}
