import { Component, OnInit } from '@angular/core';
import { DataEmanuel } from 'src/app/inerfaces/interfaces';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-emanuel',
  templateUrl: './emanuel.page.html',
  styleUrls: ['./emanuel.page.scss'],
})
export class EmanuelPage implements OnInit {

  emanuel: DataEmanuel={};

  constructor(private firebase:FirebaseService) { }

  ngOnInit() {
    // this.firebase.getEmanuel().subscribe(resp=>{
    //   this.emanuel = resp[0];
    // })

  }

}
