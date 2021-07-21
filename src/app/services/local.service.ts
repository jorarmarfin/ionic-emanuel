import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historia, Menu } from '../inerfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http:HttpClient) { }
  getMenuOptions(){
    return this.http.get<Menu[]>('/assets/data/mainmenu.json');
  }
  getHistoria(){
    return this.http.get<Historia[]>('/assets/data/historia.json');
  }
}
