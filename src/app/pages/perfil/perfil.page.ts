import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { DrupalService } from 'src/app/services/drupal.service';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private drupal:DrupalService,
    private storage:Storage) { }

  ngOnInit() {
    let hash = CryptoJS.MD5("asdasd");
    console.log(hash.toString());
    //a8f5f167f44f4964e6c998dee827110c
    //a8f5f167f44f4964e6c998dee827110c
  }
  actualizaClave(f:NgForm){
    
    // this.storage.get('hermano').then(resp=>{
    //   //console.log(CryptoJS.MD5(f.value.clave));
    //   // this.drupal.setHermano(resp.nid,f.value.clave).subscribe(resp=>{
    //   //   console.log(resp);
    //   //   console.log('enviado');
    //   // });
    // });

  }

}
