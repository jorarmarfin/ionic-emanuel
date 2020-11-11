import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private drupal:DrupalService) { }

  ngOnInit() {
  }
  actualizaClave(f:NgForm){
    console.log(f.value.clave);
    // this.drupal.setHermano().subscribe(resp=>{
    //   console.log(resp);
    //   console.log('enviado');
    // });

  }

}
