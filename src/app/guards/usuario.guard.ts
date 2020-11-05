import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { DrupalService } from '../services/drupal.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate,CanLoad {

  constructor(private drupal:DrupalService) { }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {

    return this.drupal.validaToken();
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
  
}
