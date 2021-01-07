import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { DrupalService } from '../services/drupal.service';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate,CanLoad {

  constructor(private drupal:DrupalService,private firebase:FirebaseService) { }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {

    return this.firebase.validaToken();
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
  
}
