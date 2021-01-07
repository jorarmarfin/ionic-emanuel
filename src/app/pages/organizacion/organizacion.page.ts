import { Component, OnInit } from '@angular/core';
import { DataEmanuel } from 'src/app/inerfaces/interfaces';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.page.html',
  styleUrls: ['./organizacion.page.scss'],
})
export class OrganizacionPage implements OnInit {

  emanuel:DataEmanuel={}
  constructor(private firebase:FirebaseService) { }

  ngOnInit() {
    this.firebase.getEmanuel().subscribe(resp=>{
      this.emanuel = resp[0]
    });

  }

}
