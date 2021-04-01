import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.page.html',
  styleUrls: ['./formacion.page.scss'],
})
export class FormacionPage implements OnInit {
  formacion=[
    { enlace:"https://www.youtube.com/playlist?list=PLrICUG1jVEXVoRBrhNNo48t8IGkfi1dlv"},
    { enlace:"https://www.youtube.com/playlist?list=PLrICUG1jVEXUiEMXc3jU8WRq7SspTcC9O"},
  ]

  constructor(private iab:InAppBrowser) { }

  ngOnInit() {
  }
  onClick(i:number){
      const browser = this.iab.create(this.formacion[i].enlace,'_system');
  
  }

}
