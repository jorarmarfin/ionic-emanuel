import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgyoutubePipe } from './imgyoutube.pipe';
import { ImgcalendarioPipe } from './imgcalendario.pipe';
import { LinkyoutubePipe } from './linkyoutube.pipe';



@NgModule({
  declarations: [ImgyoutubePipe, ImgcalendarioPipe, LinkyoutubePipe],
  exports: [
    ImgyoutubePipe,
    ImgcalendarioPipe,
    LinkyoutubePipe
  ]
})
export class PipesModule { }
