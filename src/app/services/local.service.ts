import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../inerfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http:HttpClient) { }
  getMenuOptions(){
    return this.http.get<Menu[]>('/assets/data/mainmenu.json');
  }
}
