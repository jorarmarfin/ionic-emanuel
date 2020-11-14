import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgyoutubePipe } from './imgyoutube.pipe';
import { ImgcalendarioPipe } from './imgcalendario.pipe';
import { LinkyoutubePipe } from './linkyoutube.pipe';
import { NoimagenPipe } from './noimagen.pipe';



@NgModule({
  declarations: [ImgyoutubePipe, ImgcalendarioPipe, LinkyoutubePipe, NoimagenPipe],
  exports: [
    ImgyoutubePipe,
    ImgcalendarioPipe,
    LinkyoutubePipe,
    NoimagenPipe
  ]
})
export class PipesModule { }
