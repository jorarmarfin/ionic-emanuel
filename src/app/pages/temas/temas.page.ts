import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recursos } from 'src/app/inerfaces/interfaces';
import { DrupalService } from 'src/app/services/drupal.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
})
export class TemasPage implements OnInit {

  recursos:Recursos;

  constructor(private drupal:DrupalService,private router:Router) { }

  ngOnInit() {
    this.drupal.getRecursos('tema_sabado').subscribe(resp=>{
      this.recursos = resp;
    });
  }

  RedirigeTema(titulo:string,enlace:string){
    let idyoutube = enlace.split('/',4)[3];
    this.router.navigateByUrl(`tema/${titulo}/${idyoutube}`);

  }

}
