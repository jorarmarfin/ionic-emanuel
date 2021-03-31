import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  slideOpts = {
    slidePerView: 2,
    freeMode: true,
  }; 
  @Input() imagenes;
  constructor() { }

  ngOnInit() {
  }

}
