import { Component, OnInit } from '@angular/core';
import { DataEmanuel, Pagina } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-emanuel',
  templateUrl: './emanuel.page.html',
  styleUrls: ['./emanuel.page.scss'],
})
export class EmanuelPage implements OnInit {

  emanuel: Pagina[]=[];


  constructor(private drupal:DrupalService) { }

  ngOnInit() {
    this.drupal.getPaginas(70).subscribe(resp=>{
      console.log(resp);
      this.emanuel = resp[0];
    });
    // this.firebase.getEmanuel().subscribe(resp=>{
    //   this.emanuel = resp[0];
    // })

  }

}
