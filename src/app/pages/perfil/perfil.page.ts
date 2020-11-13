import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { DrupalService } from 'src/app/services/drupal.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private drupal:DrupalService,
    private storage:Storage) { }

  ngOnInit() { }
  actualizaClave(f:NgForm){
    
    
    this.storage.get('hermano').then(resp=>{
      this.drupal.setHermano(resp.nid,f.value.clave).subscribe(resp=>{
        console.log(resp);
        console.log('enviado');
      });
    });

  }

}
