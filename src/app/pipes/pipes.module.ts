import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgyoutubePipe } from './imgyoutube.pipe';



@NgModule({
  declarations: [ImgyoutubePipe],
  exports: [
    ImgyoutubePipe
  ]
})
export class PipesModule { }
